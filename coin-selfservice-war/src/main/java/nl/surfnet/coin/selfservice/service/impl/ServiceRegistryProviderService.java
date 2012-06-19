/*
 * Copyright 2012 SURFnet bv, The Netherlands
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package nl.surfnet.coin.selfservice.service.impl;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.Resource;

import org.apache.commons.collections.CollectionUtils;
import org.apache.commons.lang.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.util.Assert;
import org.springframework.web.client.RestClientException;

import nl.surfnet.coin.janus.Janus;
import nl.surfnet.coin.janus.domain.Contact;
import nl.surfnet.coin.janus.domain.EntityMetadata;
import nl.surfnet.coin.selfservice.domain.ARP;
import nl.surfnet.coin.selfservice.domain.ContactPerson;
import nl.surfnet.coin.selfservice.domain.ContactPersonType;
import nl.surfnet.coin.selfservice.domain.ServiceProvider;
import nl.surfnet.coin.selfservice.service.ServiceProviderService;

public class ServiceRegistryProviderService implements ServiceProviderService {

  private static final Logger log = LoggerFactory.getLogger(ServiceRegistryProviderService.class);
  private static final String IN_PRODUCTION = "prodaccepted";


  @Resource(name = "janusClient")
  private Janus janusClient;


  @Override
  @Cacheable(value = {"sps-janus"})
  public List<ServiceProvider> getAllServiceProviders(String idpId) {
    List<ServiceProvider> allSPs = getAllServiceProvidersUnfiltered();

    List<String> myLinkedSPs = getLinkedServiceProviderIDs(idpId);

    List<ServiceProvider> filteredList = new ArrayList<ServiceProvider>();
    for (ServiceProvider sp : allSPs) {
      if (myLinkedSPs.contains(sp.getId())) {
        // an already linked SP is visible
        sp.setLinked(true);
        filteredList.add(sp);
      } else if (!sp.isIdpVisibleOnly()) {
        // Not-linked sps are only visible if 'idp visible only' is not true.
        filteredList.add(sp);
      }
    }
    return filteredList;
  }

  /**
   * It's "cheaper" to get all SPs from ServiceRegistry and iterate over them than to retrieve the list of
   * all linked entity id's and then get their individual metadata.
   *
   * {@inheritDoc}
   */
  @Override
  public List<ServiceProvider> getLinkedServiceProviders(String idpId) {
    List<ServiceProvider> linked = new ArrayList<ServiceProvider>();
    final List<ServiceProvider> allServiceProviders = getAllServiceProviders(idpId);
    if (CollectionUtils.isEmpty(allServiceProviders)) {
      return linked;
    }

    for (ServiceProvider sp : allServiceProviders) {
      if (sp.isLinked()) {
        linked.add(sp);
      }
    }
    return linked;
  }

  @Cacheable(value = {"sps-janus"})
  public List<String> getLinkedServiceProviderIDs(String idpId) {
    List<String> spList = new ArrayList<String>();
    try {
      final List<String> sps = janusClient.getAllowedSps(idpId);
      spList = sps;
    } catch (RestClientException e) {
      log.warn("Could not retrieve allowed SPs from Janus client", e.getMessage());
    }
    return spList;
  }

  @Cacheable(value = {"sps-janus"})
  private List<ServiceProvider> getAllServiceProvidersUnfiltered() {
    List<ServiceProvider> spList = new ArrayList<ServiceProvider>();
    try {
      final List<EntityMetadata> sps = janusClient.getSpList();
      for (EntityMetadata metadata : sps) {
        if (StringUtils.equals(metadata.getWorkflowState(), IN_PRODUCTION)) {
          spList.add(buildServiceProviderByMetadata(metadata));
        }
      }
    } catch (RestClientException e) {
      log.warn("Could not retrieve allowed SPs from Janus client", e.getMessage());
    }
    return spList;
  }

  @Override
  @Cacheable(value = {"sps-janus"})
  public ServiceProvider getServiceProvider(String spEntityId, String idpEntityId) {
    try {
      EntityMetadata metadata= janusClient.getMetadataByEntityId(spEntityId);
      if (StringUtils.equals(metadata.getWorkflowState(), IN_PRODUCTION)) {
        final ServiceProvider serviceProvider = buildServiceProviderByMetadata(metadata);

        final ARP arp = getArp(spEntityId);
        serviceProvider.addArp(arp);

        if (idpEntityId != null) {
          final boolean linked = janusClient.isConnectionAllowed(spEntityId, idpEntityId);
          serviceProvider.setLinked(linked);
        }
        return serviceProvider;
      } else {
        return null;
      }
    } catch (RestClientException e) {
      log.warn("Could not retrieve metadata from Janus client", e.getMessage());
    }
    return null;
  }

  /**
   * Create a ServiceProvider and inflate it with the given metadata attributes.
   * @param metadata Janus metadata
   * @return {@link ServiceProvider}
   */
  public static ServiceProvider buildServiceProviderByMetadata(EntityMetadata metadata) {
    Assert.notNull(metadata, "metadata cannot be null");
    final String appEntityId = metadata.getAppEntityId();
    String name = metadata.getName();
    if (StringUtils.isBlank(name)) {
      name = appEntityId;
    }
    ServiceProvider sp = new ServiceProvider(appEntityId, name);
    sp.setLogoUrl(metadata.getAppLogoUrl());
    sp.setHomeUrl(metadata.getAppHomeUrl());
    sp.setDescription(metadata.getDescription());
    sp.setIdpVisibleOnly(metadata.isIdpVisibleOnly());
    sp.setEulaURL(metadata.getEula());
    for (Contact c : metadata.getContacts()) {
      ContactPerson p = new ContactPerson(StringUtils.join(new Object[]{c.getGivenName(), c.getSurName()}, " "),
          c.getEmailAddress());
      p.setContactPersonType(contactPersonTypeByJanusContactType(c.getType()));
      p.setTelephoneNumber(c.getTelephoneNumber());
      sp.addContactPerson(p);
    }
    return sp;
  }

  /**
   * Gets the {@link nl.surfnet.coin.janus.domain.ARP} from the Janus client and returns {@link ARP}
   * @param spEntityId identifier of the Service Provider
   * @return {@link ARP} or {@literal null} if Janus did not return {@link nl.surfnet.coin.janus.domain.ARP}
   */
  private ARP getArp(String spEntityId) {
    final nl.surfnet.coin.janus.domain.ARP janusClientArp = janusClient.getArp(spEntityId);
    return janusClientArp == null ? null : new ARP(janusClientArp);
  }

  /**
   * Convert a Janus contact type to a ServiceProvider's ContactPersonType.
   *
   * @param contactType the Janus type
   * @return the {@link ContactPersonType}
   * @throws IllegalArgumentException in case no match can be made.
   */
  public static ContactPersonType contactPersonTypeByJanusContactType(Contact.Type contactType) {
    ContactPersonType t = null;
    if (contactType == Contact.Type.technical) {
      t = ContactPersonType.technical;
    } else if (contactType == Contact.Type.support) {
      t = ContactPersonType.help;
    } else if (contactType == Contact.Type.administrative) {
      t = ContactPersonType.administrative;
    } else if (contactType == Contact.Type.billing) {
      t = ContactPersonType.administrative;
    } else if (contactType == Contact.Type.other) {
      t = ContactPersonType.administrative;
    }
    if (t == null) {
      throw new IllegalArgumentException("Unknown Janus-contactType: " + contactType);
    }
    return t;
  }
}