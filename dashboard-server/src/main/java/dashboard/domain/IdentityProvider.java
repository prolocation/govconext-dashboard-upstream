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
package dashboard.domain;

import dashboard.manage.EntityType;
import org.apache.commons.lang3.StringUtils;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.IntStream;

@SuppressWarnings({"serial", "unchecked"})
public class IdentityProvider extends Provider implements Serializable {

    private String institutionId;
    private Map<String, String> keywords = new HashMap<>();
    private List<Consent> disableConsent;
    private boolean connectToRSServicesAutomatically;
    private Map<String, String> organisationNames = new HashMap<>();
    private Map<String, String> organisationDisplayNames = new HashMap<>();
    private boolean allowMaintainersToManageAuthzRules;
    private boolean displayStatsInDashboard;
    private List<Map<String, String>> stepupEntities;
    private List<Map<String, String>> mfaEntities;

    public IdentityProvider() {
    }

    public IdentityProvider(String id, String institutionId, String name, Long eid) {
        setId(id);
        setEid(eid);
        this.institutionId = institutionId;
        if (StringUtils.isNotBlank(name)) {
            setName(name);
            addName("en", name);
            addName("nl", name);
        }
    }

    public IdentityProvider(Map<String, Object> metaData) {
        super(metaData);
        this.institutionId = (String) metaData.get("coin:institution_guid");
        this.disableConsent = (List<Consent>) metaData.getOrDefault("disableConsent", new ArrayList<>());
        addKeywords("en", (String) metaData.get("keywords:0:en"));
        addKeywords("nl", (String) metaData.get("keywords:0:nl"));
        IntStream.range(1, 6).forEach(i -> {
            if ("http://refeds.org/category/research-and-scholarship".equals(metaData.get("coin:entity_categories:" + i))) {
                connectToRSServicesAutomatically = true;
            }
        });
        organisationNames.put("en", (String) metaData.get("OrganizationName:en"));
        organisationNames.put("nl", (String) metaData.get("OrganizationName:nl"));
        organisationDisplayNames.put("en", (String) metaData.get("OrganizationDisplayName:en"));
        organisationDisplayNames.put("nl", (String) metaData.get("OrganizationDisplayName:nl"));
        allowMaintainersToManageAuthzRules = booleanValue(metaData.get("coin:allow_maintainers_to_manage_authz_rules"));
        displayStatsInDashboard = booleanValue(metaData.get("coin:display_stats_in_dashboard"));

        this.stepupEntities = (List<Map<String, String>>) metaData.getOrDefault("stepupEntities", new ArrayList<>());
        this.mfaEntities = (List<Map<String, String>>) metaData.getOrDefault("mfaEntities", new ArrayList<>());
    }

    public String getInstitutionId() {
        return institutionId;
    }

    public void setInstitutionId(String institutionId) {
        this.institutionId = institutionId;
    }

    public Map<String, String> getKeywords() {
        return keywords;
    }

    private void addKeywords(String language, String keywords) {
        if (keywords != null) {
            this.keywords.put(language, keywords);
        }
    }

    public List<Consent> getDisableConsent() {
        return disableConsent;
    }

    public Map<String, String> getOrganisationNames() {
        return organisationNames;
    }

    public Map<String, String> getOrganisationDisplayNames() {
        return organisationDisplayNames;
    }

    public List<Map<String, String>> getStepupEntities() {
        return stepupEntities;
    }

    public List<Map<String, String>> getMfaEntities() {
        return mfaEntities;
    }

    @Override
    public String toString() {
        return "IdentityProvider{" +
                "id='" + getId() + '\'' +
                ", institutionId='" + institutionId + '\'' +
                '}';
    }

    public boolean isAllowMaintainersToManageAuthzRules() {
        return allowMaintainersToManageAuthzRules;
    }

    public boolean isDisplayStatsInDashboard() {
        return displayStatsInDashboard;
    }

    @Override
    public EntityType getEntityType() {
        return EntityType.saml20_idp;
    }
}
