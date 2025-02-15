package dashboard.control;

import dashboard.domain.*;
import dashboard.manage.AuditData;
import dashboard.manage.ChangeRequest;
import dashboard.manage.EntityType;
import dashboard.manage.Manage;
import dashboard.service.ActionsService;
import dashboard.service.Services;
import dashboard.util.SpringSecurity;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.AuthorizationServiceException;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.*;
import java.util.stream.Stream;

import static com.google.common.base.Strings.isNullOrEmpty;
import static dashboard.control.Constants.HTTP_X_IDP_ENTITY_ID;
import static java.util.stream.Collectors.*;
import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;

@RestController
@RequestMapping(value = "/dashboard/api/services", produces = APPLICATION_JSON_VALUE)
@SuppressWarnings("unchecked")
public class ServicesController extends BaseController {

    private static final Logger LOG = LoggerFactory.getLogger(ServicesController.class);

    @Autowired
    private Services services;

    @Autowired
    private Manage manage;

    @Autowired
    private ActionsService actionsService;

    @Value("${manage.manageBaseUrl}")
    private String manageBaseUrl;

    @Value("${dashboard.feature.stepup}")
    private boolean dashboardStepupEnabled;

    @GetMapping
    public RestResponse<Map<String, Object>> index(@RequestHeader(HTTP_X_IDP_ENTITY_ID) String idpEntityId, Locale locale)
            throws IOException {
        List<Service> servicesForIdp = services.getServicesForIdp(idpEntityId, false, locale);
        List<Category> categories = getCategories(servicesForIdp);
        Map<String, Object> result = new HashMap<>();
        result.put("apps", servicesForIdp);
        result.put("facets", categories);
        return createRestResponse(result);
    }

    @RequestMapping(value = "/invitation-request-services")
    public RestResponse<Map<String, Object>> invitationRequestServices(@RequestHeader(HTTP_X_IDP_ENTITY_ID) String idpEntityId, Locale locale)
            throws IOException {
        List<Service> servicesForIdp = services.getServicesForIdp(idpEntityId, true, locale);
        Map<String, Object> result = new HashMap<>();
        result.put("apps", servicesForIdp);
        return createRestResponse(result);
    }

    private List<Category> getCategories(List<Service> servicesForIdp) {
        Map<String, List<Category>> groupedCategories = servicesForIdp.stream()
                .map(s -> s.getCategories())
                .flatMap(Collection::stream).collect(groupingBy(Category::getName));

        //ensure we make the values unique
        return groupedCategories.entrySet().stream().map(entry -> {
            List<CategoryValue> categoryValues = entry.getValue().stream()
                    .flatMap(cat -> cat.getValues().stream().
                            map(CategoryValue::getValue)).collect(toSet()).stream()
                    .map(CategoryValue::new)
                    .collect(toList());
            return new Category(entry.getKey(), "type_of_service", categoryValues);
        }).collect(toList());
    }

    @RequestMapping(value = "/connected")
    public RestResponse<List<Service>> connected(@RequestHeader(HTTP_X_IDP_ENTITY_ID) String idpEntityId, Locale
            locale) throws IOException {
        return createRestResponse(services.getServicesForIdp(idpEntityId, false, locale).stream()
                .filter(Service::isConnected)
                .collect(toList()));
    }

    @PostMapping(value = "/by-entity-ids")
    public RestResponse<List<Service>> byEnntityIds(@RequestBody List<String> entityIds, Locale locale) throws IOException {
        List<Service> servicesByEntityIds = services.getServicesByEntityIds(entityIds, locale);
        return createRestResponse(servicesByEntityIds);
    }

    @RequestMapping(value = "/idps")
    public RestResponse<List<InstitutionIdentityProvider>> getConnectedIdps(
            @RequestParam String spEntityId,
            @RequestParam String type) {
        CoinUser currentUser = SpringSecurity.getCurrentUser();
        if (currentUser.isGuest()) {
            throw new AuthorizationServiceException("/idps not allowed for guest)");
        }
        ServiceProvider serviceProvider = manage.getServiceProvider(spEntityId, EntityType.valueOf(type), false)
                .orElseThrow(IllegalArgumentException::new);
        List<InstitutionIdentityProvider> idps;
        if (serviceProvider.isAllowedAll()) {
            idps = manage.getLinkedIdentityProviders(spEntityId).stream()
                    .map(idp -> new InstitutionIdentityProvider(idp.getId(), idp.getName(Provider.Language.EN),
                            idp.getName(Provider.Language.NL), idp.getInstitutionId(), idp.getState(), idp.getLogoUrl()))
                    .collect(toList());
        } else {
            idps = serviceProvider.getAllowedEntityIds().stream()
                    .map(entityId -> manage.getIdentityProvider(entityId, false))
                    .filter(Optional::isPresent)
                    .map(Optional::get)
                    .map(idp -> new InstitutionIdentityProvider(idp.getId(), idp.getName(Provider.Language.EN),
                            idp.getName(Provider.Language.NL), idp.getInstitutionId(), idp.getState(), idp.getLogoUrl()))
                    .collect(toList());
        }
        return createRestResponse(idps);
    }


    @PostMapping(value = "/download")
    public List<String[]> download(@RequestBody Map<String, Object> body,
                                   Locale locale) throws IOException {
        String idpEntityId = (String) body.get("idp");
        List<Integer> ids = (List<Integer>) body.get("ids");
        List<Service> services = this.services.getServicesForIdp(idpEntityId, false, locale);
        Stream<String[]> values = ids.stream()
                .map(id -> getServiceById(services, id.longValue()))
                .flatMap(opt -> opt.map(Stream::of).orElse(Stream.empty()))
                .map(service -> {
                    LicenseStatus licenseStatus = service.getLicenseStatus();
                    ARP arp = service.getArp();
                    return new String[]{
                            String.valueOf(service.getId()),
                            stripBreakingWhitespace(service.getName()),
                            stripBreakingWhitespace(service.getOrganisation()),
                            service.getSpEntityId(),
                            stripBreakingWhitespace(service.getDescription()),
                            service.getAppUrl(),
                            service.getWikiUrl(),
                            String.valueOf(service.isConnected()),
                            licenseStatus != null ? licenseStatus.name() : LicenseStatus.UNKNOWN.name(),
                            String.valueOf(service.isExampleSingleTenant()),
                            String.valueOf(service.isStrongAuthentication()),
                            String.valueOf(arp != null ? !arp.isNoArp() : false),
                            arp != null ? arp.getAttributes().keySet().stream().collect(joining(" - ")) : ""};
                });

        Stream<String[]> headers = Stream.<String[]>of(new String[]{
                "id", "name", "organisation-name", "entityID", "description", "app-url", "wiki-url", "support-mail",
                "connected", "licenseStatus", "singleTenant", "strongAuthentication",
                "arpEnabled", "arpAttributes"});

        List<String[]> rows = Stream.concat(headers, values).collect(toList());
        return rows;
    }

    private String stripBreakingWhitespace(String input) {
        return StringUtils.hasText(input) ? input.trim().replaceAll("[\t\n\r;,]+", "") : "";
    }

    private Optional<Service> getServiceById(List<Service> services, Long id) {
        return services.stream().filter(service -> service.getId() == id).findFirst();
    }

    @RequestMapping(value = "/detail")
    public ResponseEntity<RestResponse<Service>> get(@RequestHeader(HTTP_X_IDP_ENTITY_ID) String idpEntityId,
                                                     @RequestParam Long spId,
                                                     @RequestParam String entityType,
                                                     Locale locale) throws IOException {
        Optional<Service> serviceByEntityId = services.getServiceById(idpEntityId, spId, EntityType
                .valueOf(entityType), locale);
        CoinUser currentUser = SpringSecurity.getCurrentUser();
        return serviceByEntityId
                .map(service -> ResponseEntity.ok(createRestResponse(service)))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PreAuthorize("hasAnyRole('DASHBOARD_ADMIN','DASHBOARD_VIEWER','DASHBOARD_SUPER_USER')")
    @RequestMapping(value = "/connect", method = RequestMethod.POST)
    public ResponseEntity<RestResponse<Action>> connect(@RequestHeader(HTTP_X_IDP_ENTITY_ID) String idpEntityId,
                                                        @RequestParam(value = "comments", required = false) String
                                                                comments,
                                                        @RequestParam(value = "loaLevel", required = false) String
                                                                loaLevel,
                                                        @RequestParam(value = "spEntityId") String spEntityId,
                                                        @RequestParam(value = "type") String type,
                                                        @RequestParam(value = "emailContactPerson", required = false) String emailContactPerson,
                                                        Locale locale) throws IOException {
        CoinUser currentUser = SpringSecurity.getCurrentUser();
        if (currentUser.getCurrentLoaLevel() < 2 && dashboardStepupEnabled) {
            LOG.warn("Consent endpoint requires LOA level 2 or higher, currentUser {}", currentUser);
            return new ResponseEntity<>(HttpStatus.FORBIDDEN);
        }
        return createAction(idpEntityId, comments, spEntityId, type, Action.Type.LINKREQUEST, locale,
                Optional.ofNullable(emailContactPerson), Optional.ofNullable(StringUtils.hasText(loaLevel) ? loaLevel : null))
                .map(action -> ResponseEntity.ok(createRestResponse(action)))
                .orElse(new ResponseEntity<>(HttpStatus.FORBIDDEN));
    }

    @PreAuthorize("hasAnyRole('DASHBOARD_ADMIN','DASHBOARD_VIEWER','DASHBOARD_SUPER_USER')")
    @RequestMapping(value = "/disconnect", method = RequestMethod.POST)
    public ResponseEntity<RestResponse<Action>> disconnect(@RequestHeader(HTTP_X_IDP_ENTITY_ID) String idpEntityId,
                                                           @RequestParam(value = "comments", required = false) String
                                                                   comments,
                                                           @RequestParam(value = "spEntityId") String spEntityId,
                                                           @RequestParam(value = "type") String type,
                                                           Locale locale) throws IOException {

        CoinUser currentUser = SpringSecurity.getCurrentUser();
        if (currentUser.getCurrentLoaLevel() < 2 && dashboardStepupEnabled) {
            LOG.warn("Consent endpoint requires LOA level 2 or higher, currentUser {}", currentUser);
            return new ResponseEntity<>(HttpStatus.FORBIDDEN);
        }
        return createAction(idpEntityId, comments, spEntityId, type, Action.Type.UNLINKREQUEST, locale, Optional.empty(), Optional.empty())
                .map(action -> ResponseEntity.ok(createRestResponse(action)))
                .orElse(new ResponseEntity<>(HttpStatus.FORBIDDEN));
    }

    private Optional<Action> createAction(String idpEntityId, String comments, String spEntityId, String typeMetaData, Action.Type
            jiraType, Locale locale, Optional<String> emailContactPersonOptional, Optional<String> loaLevel) throws IOException {
        CoinUser currentUser = SpringSecurity.getCurrentUser();
        if (currentUser.isSuperUser() || (!currentUser.isDashboardAdmin() && currentUser.isDashboardViewer())) {
            LOG.warn(String.format("Action create not allowed, because of user %s ", currentUser));
            return Optional.empty();
        }

        if (isNullOrEmpty(currentUser.getIdp().getInstitutionId())) {
            LOG.warn(String.format("Action create not allowed, because of user IdP %s ", currentUser.getIdp()));
            return Optional.empty();
        }

        List<Service> services = this.services.getServicesForIdp(idpEntityId, false, locale);
        Optional<Service> optional = services.stream().filter(s -> s.getSpEntityId().equals(spEntityId)).findFirst();

        if (optional.isPresent()) {
            Service service = optional.get();

            boolean idpAndSpShareInstitution = (service.getInstitutionId() != null) && service.getInstitutionId().equals(currentUser.getIdp().getInstitutionId());
            boolean connectWithoutInteraction = idpAndSpShareInstitution || service.connectsWithoutInteraction();

            IdentityProvider identityProvider = manage.getIdentityProvider(idpEntityId, false).orElseThrow(IllegalArgumentException::new);

            Action action = Action.builder()
                    .userEmail(currentUser.getEmail())
                    .userName(currentUser.getFriendlyName())
                    .body(comments)
                    .idpId(idpEntityId)
                    .spId(spEntityId)
                    .typeMetaData(typeMetaData)
                    .emailContactPerson(emailContactPersonOptional.orElse(""))
                    .connectWithoutInteraction(connectWithoutInteraction)
                    .shouldSendEmail(service.sendsEmailWithoutInteraction())
                    .service(service)
                    .loaLevel(loaLevel.orElse(null))
                    .type(jiraType).build();

            if (connectWithoutInteraction && Action.Type.LINKREQUEST.equals(jiraType)) {
                return Optional.of(actionsService.connectWithoutInteraction(action, loaLevel));
            } else {
                List<ChangeRequest> changeRequests;
                if (jiraType.equals(Action.Type.LINKREQUEST)) {
                    changeRequests = manage.createConnectionRequests(identityProvider, spEntityId, EntityType.valueOf(typeMetaData), loaLevel);
                } else {
                    changeRequests = manage.deactivateConnectionRequests(identityProvider, spEntityId, EntityType.valueOf(typeMetaData));
                }
                changeRequests.forEach(changeRequest -> {
                    String metaDataId = changeRequest.getMetaDataId();
                    String entityType = metaDataId.equals(identityProvider.getInternalId()) ? EntityType.saml20_idp.name() : typeMetaData;
                    action.addManageUrl(String.format("%s/metadata/%s/%s/requests", manageBaseUrl, entityType, metaDataId));
                });
                action.addChangeRequests(changeRequests);
                Action jiraAction = actionsService.create(action);
                //Chicken / egg problem. We need the Jira key in order to create change requests
                changeRequests.forEach(changeRequest -> {
                    String ctx = jiraType.equals(Action.Type.LINKREQUEST) ? "Connect" : "Disconnect";
                    changeRequest.setAuditData(AuditData.context(String.format("%s SP %s", ctx, spEntityId), jiraAction.getJiraKey()));
                    manage.createChangeRequests(changeRequest);
                });
                return Optional.of(jiraAction);
            }
        }

        return Optional.empty();

    }
}
