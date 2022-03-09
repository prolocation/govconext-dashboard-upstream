// Interpolation works as follows:
//
// Make a key with the translation and enclose the variable with {{}}
// ie "Hello {{name}}" Do not add any spaces around the variable name.
// Provide the values as: I18n.t("key", {name: "John Doe"})

import I18n from 'i18n-js'

I18n.translations.en = {
  code: 'EN',
  name: 'English',
  select_locale: 'Select English',

  boolean: {
    yes: 'Yes',
    no: 'No',
  },

  browser_not_supported: {
    title: 'Your browser is not supported.',
    description_html:
      'Your version of Internet Explorer is not supported. Please update your browser to a more modern version.',
  },

  header: {
    welcome: 'Welcome,',
    links: {
      logout: 'Logout',
      exit: 'Exit',
    },
    you: 'You',
    profile: 'Profile',
    switch_idp: 'Switch IDP',
    loginRequired: 'Please login for more information',
    super_user_switch: 'Switch identity',
    welcome_txt:
      'Here you will find all the services connected to SURFconext. Log in for information tailored to your institution.',
  },
  confirmation_dialog: {
    title: 'Please confirm',
    confirm: 'Confirm',
    cancel: 'Cancel',
    leavePage: 'Do you really want to leave this page?',
    leavePageSub: 'Changes that you made will not be saved.',
    stay: 'Stay',
    leave: 'Leave',
  },

  navigation: {
    apps: 'Services',
    policies: 'Authorization policies',
    history: 'Tickets',
    stats: 'Statistics',
    my_idp: 'My institution',
    invite_request: 'Invite',
  },

  loader: {
    loading: 'Services are being loaded',
  },

  facets: {
    title: 'Filters',
    refresh: 'Refresh',
    clear_all: '(Clear all)',
    reset: 'Reset',
    download: 'Export overview as csv',
    unknown: 'Unknown',
    totals: {
      all: 'Showing all {{total}} services',
      filtered: 'Showing {{count}} of {{total}} services',
    },
    static: {
      connection: {
        all: 'All',
        has_connection: 'Yes',
        name: 'Service connected',
        no_connection: 'No',
      },
      license: {
        has_license_sp: 'Yes, with SP',
        has_license_surfmarket: 'Yes, with SURF',
        name: 'License',
        not_needed: 'No',
        unknown: 'Unknown',
      },
      used_by_idp: {
        all: 'All',
        name: 'Offered by my institution',
        no: 'No',
        yes: 'Yes',
      },
      published_edugain: {
        all: 'All',
        name: 'Published in eduGAIN federation',
        no: 'No',
        yes: 'Yes',
      },
      interfed_source: {
        tooltip:
          "Some services available through SURFconext have a home federation different from SURFconext. Here you can select on 'home federation'.",
        name: 'Federation source',
        surfconext: 'SURFconext',
        edugain: 'eduGAIN',
        entree: 'Entree',
      },
      entity_category: {
        name: 'eduGAIN Entity Category',
        tooltip:
          'Services can comply to an \'entity categories\'.<br>See the <a href="https://support.surfconext.nl/dashboard-help-entitycategories" target="_blank" rel="noopener noreferrer">wiki</a> for more information. Here you can filter on services adhering to a certain category.',
        code_of_conduct: 'Code of Conduct',
        research_and_scholarship: 'Research and Scholarship',
        selectAll: 'Filter on all',
        tooltipAll:
          'Check this to filter on services that<br>have all the checked entity categories.<br><br>The default unchecked behaviour is to<br>filter the services that have one of the <br>checked entity categories.',
      },
      strong_authentication: {
        name: 'SURFsecureID enabled',
        tooltip:
          'SURFsecureID second factor authentication is required.<br>For more information see the <a href="https://wiki.surfnet.nl/display/surfconextdev/SURFconext+IdP+dashboard+-+help+page" target="_blank" rel="noopener noreferrer">wiki</a>.',
        none: 'None',
      },
      attribute_manipulation: {
        name: 'Custom attribute manipulation script',
        yes: 'Yes',
        no: 'No',
      },
      arp: {
        name: 'Released attributes',
        tooltip:
          'More info about these attributes can be found in the <a href="https://wiki.surfnet.nl/display/surfconextdev/Attributes+in+SURFconext " target="_blank" rel="noopener noreferrer">wiki</a>.',
        info_html:
          'It is possible that more attributes are being released to the Service through means of attribute manipulation.',
      },
      type_consent: {
        tooltip:
          'Which way new users are asked to give consent before using the service.<br>See the <a target="_blank" rel="noopener noreferrer" href="https://support.surfconext.nl/dashboard-help-consent">wiki</a> for more information.',
        name: 'Type of consent',
        no_consent: 'No screen',
        minimal_consent: 'Consent screen',
        default_consent: 'Information screen (default)',
      },
    },
  },

  apps: {
    tabs: {
      about: 'About',
      attributes: 'Attributes & Privacy',
      resource_servers: 'Resource Servers',
      statistics: 'Statistics',
      settings: 'Settings',
    },
    detail: {
      about: 'About this service',
      application_usage: 'Service usage',
      attribute_policy: 'Attributes',
      close_screenshot: 'Close',
      how_to_connect: 'Activate service',
      how_to_disconnect: 'Deactivate service',
      idp_usage: 'Used by',
      license_data: 'License',
      links: 'Links',
      overview: 'Overview',
      connected_resource_servers: 'Resource servers',
      sirtfi_security: 'Sirtfi Security',
      ssid: 'SURFsecureID',
      policies: {
        one: '1 policy',
        other: '%{count} policies',
      },
      privacy: 'Privacy',
      consent: 'Consent',
      back: 'Back',
      outstandingIssue:
        'There is already a ticket with reference {{jiraKey}} of type {{type}} and status {{status}} for this Service.',
      inviteAlreadyProcessed: 'The invite for ticket {{jiraKey}} has already been {{action}}.',
      inviteBeingProcessed: 'The invite for ticket {{jiraKey}} is pending to be processed.',
      outstandingIssueLink:
        ' Go to the <a class="link" href="{{link}}">{{linkName}}</a> section to approve / deny the invitation.',
      approved: 'approved',
      denied: 'denied',
      institutions_header: {
        one: 'Used by 1 institution',
        other: 'Used by {{count}} institutions',
        zero: 'Used by no institutions',
      },
      institutions: 'Institutions',
      provided_information: '{{organisation}} provided the following information',
      connect_service: 'Connect this service',
      disconnect_service: 'Disconnect this service',
      connected: 'Connected',
      pending_connection: 'Pending connection request...',
      pending_disconnect: 'Pending disconnect request...',
      approve_invite: 'Accept invite',
      deny_invite: 'Deny invite',
    },
    overview: {
      connect: '',
      connect_button: 'Connect',
      connected: 'Connected',
      connected_services: 'Connected services',
      all_services: 'All services',
      dashboardConnectOption: 'Automatic connection',
      license: 'License secured',
      licenseStatus: 'License required',
      aansluitovereenkomstRefused: 'Policy signed',
      contractualBase: 'Contractual Base',

      license_present: {
        na: 'n/a',
        no: 'No',
        unknown: 'Unknown',
        yes: 'Yes',
      },
      license_unknown: 'Unknown',
      name: 'Name',
      organisation: 'Vendor',
      no_results: 'No services available',
      processing_results: 'Retrieving all services...',
      search: 'Search',
      search_hint: 'Search services...',
      add_services_hint:
        'Can\'t find the service you\'re looking for? Send your contact at that service an email that you would like to use the service through <a href="http://support.surfconext.nl/getconexted" target="_blank" rel="noopener noreferrer">SSO using SURFconext</a>, so you can authenticate using your institutional account, and that that is both more secure and more efficient for all parties involved. And that it makes the service more attractive for other institutions, also outside of the Netherlands. Advise them to look into it and send an email to support@surfconext.nl requesting contact to discuss connecting the service.',
    },
    settings: {
      title: 'Service settings',
      menu: {
        consent: 'Consent',
        authorization_policy: 'Authorization policy',
        surf_secure_id: 'SURFsecureID',
        mfa: 'MFA'
      },
    },
  },

  app_meta: {
    question: 'Got a question?',
    eula: 'Terms & Conditions',
    website: 'Website',
    support: 'Support pages',
    login: 'Login page',
    registration_info_html:
      'This Service Provider is available in SURFconext through <a href="https://support.surfconext.nl/edugain" target="_blank" rel="noopener noreferrer">eduGAIN</a>. The Service Provider is registered by the following federation: <a href="{{url}}" target="_blank" rel="noopener noreferrer">{{url}}</a>.',
    registration_policy: 'Registration policy',
    privacy_statement: 'Privacy statement',
    metadata_link: 'Metadata',
  },

  license_info_panel: {
    title: 'License information',
    has_license_surfmarket_html:
      'License available via <a href="https://mijn.surfmarket.nl" target="_blank" rel="noopener noreferrer">Mijn SURFmarket</a>.',
    has_license_sp_html:
      'A license for <a href="{{serviceUrl}}" target="_blank" rel="noopener noreferrer">{{serviceName}}</a> can be acquired from {{organisation}}, the supplier of this service.',
    has_license_sp_html_no_service_url:
      'A license for {{serviceName}} can be acquired from {{organisation}}, the supplier of this service.',
    no_license_html:
      'Your institution has no valid license available via <a href="https://mijn.surfmarket.nl" target="_blank" rel="noopener noreferrer">Mijn SURFmarket</a>.',
    not_needed_html: 'This service does not require a license.',
    unknown_license: 'It is unknown whether a license is required or not.',
    no_license_description_html:
      '' +
      '<ul>' +
      '   <li>Your institution can obtain a license from <a href="https://mijn.surfmarket.nl" target="_blank" rel="noopener noreferrer">Mijn SURFmarket</a>.</li>' +
      '</ul>' +
      '<br />In some cases this license needs to be obtained directly from the service supplier.',
    unknown_license_description_html:
      'There could be multiple reasons:' +
      '<ul>' +
      '   <li>SURF or another institution is offering this service for free.</li>' +
      '   <li>The license needs to be obtained directly from the service supplier.</li>' +
      '   <li>The license hasn\'t been added to <a href="https://mijn.surfmarket.nl" target="_blank" rel="noopener noreferrer">Mijn SURFmarket</a>\'s administration yet.</li>' +
      '</ul>' +
      '<p>If necessary, SURF will contact the service supplier or <a href="https://mijn.surfmarket.nl" target="_blank" rel="noopener noreferrer">Mijn SURFmarket</a> before activating the connection.</p>',
  },

  license_info: {
    unknown_license: 'No license information available',
    has_license: 'License necessary',
    no_license: 'No license available',
    no_license_needed: 'No license needed',
    license_info: 'Read how to obtain a license',
    license_unknown_info: 'Read more',
    valid: 'License is valid until {{date}}',
  },

  overview_panel: {
    entityID: 'Entity ID',
    rpClientID: 'Client ID',
    wiki_info_html:
      'Extra information is available for this services in the SURFconext <a href="{{link}}" target="_blank" rel="noopener noreferrer">wiki</a>.',
    no_description: 'The description of this service is not available.',
    description: 'Description',
    has_connection: 'Active connection',
    no_connection: 'Inactive connection',
    how_to_connect: 'Read how to activate',
    disconnect: 'Read how to deactivate the connection',
    normen_kader: 'Information regarding AVG/GDPR',
    normen_kader_html:
      'For this service the supplier has published information stating which data they process and where they process this data. You can find this information on the <a href="https://support.surfconext.nl/dashboard-info-avg" target="_blank" rel="noopener noreferrer">wiki</a>. During 2018 we will incorporate this information in a new version of this Dashboard.',
    no_normen_kader_html:
      'For this service the supplier has not yet provided AVG/GDPR information; information stating which data they process and where they process this data can be requested at the supplier.',
    single_tenant_service: 'Single tenant service',
    single_tenant_service_html:
      '{{name}} is a single-tenant service, which means the supplier needs to create a new instance for every customer before it is ready for use. For more information about single tenant services see the <a href="https://support.surfconext.nl/dashboard-info-singletenant" target="_blank" rel="noopener noreferrer">SURF wiki</a>.',
    interfed_source: 'Federation source',
    publish_in_edugain_date: 'Published in eduGAIN on:',
    supports_ssa: 'SURFsecureID enabled',
    minimalLoaLevel:
      'For logging in to this service, second factor authentication is required via SURFsecureID. All users are required to use a token with at least the following Level of Assurance (LoA): <code>{{minimalLoaLevel}}</code>. For more information see the <a href="https://wiki.surfnet.nl/display/SsID/Levels+of+Assurance" target="_blank" rel="noopener noreferrer">wiki</a>.',
    minimalLoaLevelIdp:
      'For logging in to this service, second factor authentication is required via SURFsecureID. All users from your institution are required to use a token with at least the following Level of Assurance (LoA): <code>{{minimalLoaLevel}}</code>. For more information see the <a href="https://wiki.surfnet.nl/display/SsID/Levels+of+Assurance" target="_blank" rel="noopener noreferrer">wiki</a>.',
    supportsSsaTooltip: 'Services can also dynamically request a specific LoA during authentication.',
    entity_categories: 'Supported Entity Categories',
    entity_category: {
      'http://wwwgeantnet/uri/dataprotection-code-of-conduct/v1': 'GÉANT Data Protection Code of Conduct',
      'http://refedsorg/category/research-and-scholarship': 'Research and Scholarship',
      'http://clarineu/category/clarin-member': 'Clarin member',
    },
    aansluitovereenkomst: 'Connection Policy',
    aansluitovereenkomstRefused:
      '{{organisation}} has refused to sign the \'SURFconext connection agreement\' with SURF. Read more about this policy on the <a href="https://support.surfconext.nl/dashboard-info-trust" target="_blank" rel="noopener noreferrer">SURF wiki</a>.',
    vendorInfo: 'This service is offered by {{organisation}}.',
    privacyInformation: 'Privacy information',
    privacyInformationInfo: '{{organisation}} has not delivered any privacy information.',
    contractualBase: {
      na: 'No info on contractual basis available: for any questions, please contact <a href="mailto:support@surfconext.nl">support@surfconext.nl</a>.',
      ao: '{{organisation}} has signed the SURFconext connection agreement.',
      ix: 'Service offered by SURFconext member institution.',
      'r&s+coco':
        'eduGAIN service that has agreed to the Data Protection Code of Conduct and belongs to the Research & Scholarship entity category.',
      entree: 'Member of the Kennisnet Entree-federation.',
      clarin: 'Member of the Clarin research federation.',
    },
    contractualBaseWiki:
      'See <a href="https://wiki.surfnet.nl/display/surfconextdev/SURFconext+IdP+dashboard+-+contractuele+info" target="_blank" rel="noopener noreferrer">wiki</a>.',
  },

  attributes_policy_panel: {
    arp: {
      noarp: "There is no 'Attribute Release Policy' specified. All known attributes are exchanged.",
      noattr: 'No attributes will be exchanged with {{name}}.',
      manipulation:
        "For this Service Provider there is a custom 'attribute manipulation script' in effect. SURFconext will execute the script for every authentication of a user, before releasing attributes to that service. In order for you to understand what information will be released, please find below a description of what the script does:",
      resourceServers:
        'This Service is connected to Resource Servers and therefore all the attributes released are also accessible for the following Resource Servers:',
    },
    attribute: 'Attribute',
    hint: 'The attributes and their values for your personal account are displayed. This might not be representative for other accounts within your organization.',
    subtitle: '{{name}} wants to receive the following attributes',
    title: 'Attributes',
    your_value: 'Your value',
    filter: 'For this attribute the following filters have been applied:',
    motivationInfo:
      'The column ‘motivation‘ contains, to the extent available, the explanation of the supplier why they need this attribute.',
    motivation: 'Motivation',
    no_attribute_value: '<no value received>',
    attribute_value_generated: '<is generated by SURFconext>',
    filterInfo:
      'To minimize the data passed on from institution to the service, SURFconext sometimes filters the values of attributes.',
    warning: 'Remarks:',
    nameIdInfo:
      "The user’s identity is transmitted as a NameID element with the type '%{type}' - <a href='https://support.surfconext.nl/uids' target='_blank'>generated by SURFconext</a>",
  },
  connected_resource_servers_panel: {
    title: 'Connected Resource Servers',
    subtitle: "{{name}} is an OIDC Relying Party and is allowed to query the API's of the following Resource Servers",
    clientId: 'Client ID',
    name: 'Name',
    description: 'Description',
  },
  idp_usage_panel: {
    title: 'Used by',
    subtitle: 'The following institutions are connected to {{name}}.',
    subtitle_none: 'There are no institutions connected to {{name}}.',
    subtitle_single_tenant:
      'When you want to know which institutes use {{name}} through SURFconext, please send an email with your question to support@surfconext.nl.',
    institution: 'Institution',
  },
  sirtfi_panel: {
    title: 'The Sirtfi contact persons for {{name}}',
    subtitle:
      'The Security Incident Response Trust Framework for Federated Identity <a href=" https://refeds.org/sirtfi" target="_blank" rel="noopener noreferrer">(Sirtfi) </a> aims to enable the coordination of incident response across federated organisations. This assurance framework comprises a list of assertions which an organisation can attest in order to be declared Sirtfi compliant.',
    contactPersons: 'In case of a security incident, this service can best be contacted in the following way:',
    cp_name: 'Name',
    cp_email: 'Email',
    cp_telephoneNumber: 'Telephone number',
    cp_type: 'Type',
    cp_type_translate_technical: 'Technical',
    cp_type_translate_administrative: 'Administrative',
    cp_type_translate_help: 'Support',
    cp_type_translate_support: 'Support',
  },
  privacy_panel: {
    title: 'Privacy Information',
    subtitle:
      "SURF provides new connecting Services the opportunity to share information concerning AVG policies. If available, you'll find it below. For any missing info, you can contact the supplier.",
    subtitle2: 'The provider of the service {{name}} has supplied the following information (if any):',
    question: 'Question',
    answer: 'Answer',
    accessData: 'Who can access the data?',
    certificationLocation: 'Location of info on information security related certifications?',
    country: 'In what country is the data stored',
    otherInfo: 'Other data privacy and security information',
    privacyPolicy: 'Does the supplier publish a privacy policy?',
    privacyPolicyUrl: 'What is the privacy policy url?',
    securityMeasures: 'What security measures has the supplier taken?',
    snDpaWhyNot: 'If no, what articles pose a problem & why?',
    surfmarketDpaAgreement: 'Does supplier offer a DPA in the SURF license portal?',
    surfnetDpaAgreement: 'Is the supplier willing to sign the SURF Model DPA?',
    whatData: 'What (kind of) data is processed?',
    noInformation: 'No info supplied by provider',
  },
  consent_panel: {
    title: 'Consent new users',
    subtitle: 'New users will be asked permission for sending personal data to this service.',
    subtitle2:
      'You can add an optional message/warning to the information/consent screen, for example to indicate the current service is <i>not an official service</i> of the institution and thus the user should not expect any support from the institution. For more information, please refer to our <a target="_blank" rel="noopener noreferrer" href="https://support.surfconext.nl/dashboard-help-consent">wiki</a> (in Dutch).',
    subtitle2Viewer:
      ' On this page you can view in which way users will be asked for consent before they are sent to {{name}}. The different settings for consent are explained on <a target="_blank" rel="noopener noreferrer" href="https://support.surfconext.nl/dashboard-help-consent">this wiki page</a>.',
    no_consent: 'Do not display information/consent screen about user attributes',
    minimal_consent: 'Display information screen (do not ask users for explicit consent)',
    default_consent: 'Explicitly ask users for consent to release their attributes',
    consent_value: 'Type of consent required',
    consent_value_tooltip: 'The type of consent determines how and if the user will be asked for consent.',
    explanationNl: 'Dutch message',
    explanationNl_tooltip: 'This custom message will be appended to the Dutch consent screen for new users.',
    explanationEn: 'English message',
    explanationEn_tooltip: 'This custom message will be appended to the English consent screen for new users.',
    explanationPt: 'Portuguese message',
    explanationPt_tooltip: 'This custom message will be appended to the Portuguese consent screen for new users.',
    save: 'Submit changes',
    loa_level: 'SURFsecureID Level of Assurance (LoA)',
    defaultLoa: 'LoA 1: Password authentication through SURFconext at the users home IdP',
    loa2: 'LoA 2 (see the wiki for more info)',
    loa3: 'LoA 3 (see the wiki for more info)',
  },
  ssid_panel: {
    title: 'SURFsecureID',
    subtitle:
      'With <a href="https://wiki.surfnet.nl/display/SsID" target="_blank" rel="noopener noreferrer">SURFsecureID</a> you can better secure access to services with strong authentication. ',
    subtitle2:
      'A user logs in with username and password (the first factor) and SURFsecureID takes care of the second factor authentication like via a mobile app or USB key.',
    subtitle3:
      'By chosing a higher <a href="https://wiki.surfnet.nl/display/SsID/Levels+of+Assurance" target="_blank" rel="noopener noreferrer">Level of Assurance (LoA)</a> you can add additional protection to your service by adding a second factor to the user\'s login.',
    highestLoaReached:
      'You already have the highest LoA setting. For security reasons you can not request a lower LoA in this form. Please contact <a href="mailto:support@surfconext.nl">support@surfconext.nl</a> if you want to lower the LoA for this service.',
    appHasLoaLevel:
      'You can not request a Loa setting for this service. This service already has a Loa setting configured to be applied for all institutions. ',
  },
  how_to_connect_panel: {
    accept: 'I hereby certify that I have read these terms and that I accept them on behalf of my institution.',
    accept_disconnect: 'Yes, I agree that {{app}} will no longer be available to my organization',
    attributes: 'attributes',
    attributes_policy: 'attribute policy',
    privacy_policy: 'privacy policy',
    back_to_apps: 'Back to all services',
    cancel: 'Cancel',
    close: 'Close',
    check: 'Check the',
    checklist: 'Finish this checklist before activating the connection:',
    processing_agreements:
      'Check whether your institution needs a <a href="https://support.surfconext.nl/dashboard-help-vwo" target="_blank" rel="noopener noreferrer">processing agreement</a> for this service, and if so, has signed one.',
    comments_description: 'Comments will be sent to SURFconext.',
    comments_placeholder: 'Enter comments here...',
    comments_title: 'Any additional comments?',
    automatic_connect: 'Activate connection immediately',
    connect: 'Activate service',
    connect_title: 'Connect {{app}}',
    connect_invite_title: 'Accept invite to connect {{app}}',
    disconnect: 'Deactivate service',
    disconnect_title: 'Deactivate connection with {{app}}',
    done_disconnect_subtitle_html:
      'You will be contacted about the further steps needed to finalize this deactivation. If you have any questions before that, please contact <a href="mailto:support@surfconext.nl">support@surfconext.nl</a>.',
    done_disconnect_subtitle_html_with_jira_html:
      'You will be contacted about the further steps needed to finalize this deactivation. If you have any questions before that, please contact <a href="mailto:support@surfconext.nl">support@surfconext.nl</a> and include the following ticket number in the subject: {{jiraKey}}.',
    done_disconnect_title: 'Deactivation requested!',
    done_subtitle_html:
      'You will be contacted about the further steps needed to finalize this connection. If you have any questions before that, please contact <a href="mailto:support@surfconext.nl">support@surfconext.nl</a>.',
    done_subtitle_with_jira_html:
      'You will be contacted about the further steps needed to finalize this connection. If you have any questions before that, please contact <a href="mailto:support@surfconext.nl?subject=Question about connection {{jiraKey}}">support@surfconext.nl</a> and include the following ticket number in the subject: {{jiraKey}}.',
    done_title: 'Connection requested!',
    rejected_without_interaction_title: 'Connection failed!',
    rejected_without_interaction_subtitle: 'Something went wrong while connecting.', // TODO: change text
    done_without_interaction_title: 'Connection established!', // TODO: check text
    done_without_interaction_subtitle: 'You can make use of it now.', // TODO: check text
    forward_permission: {
      after: ' to {{app}}.',
      before: 'SURF has permission to forward the ',
    },
    info_connection_without_interaction:
      'This service provider allows institutions to connect immediately. There is no need to wait for this connection request to be processed, you can use the service right away!',
    info_connection_share_institution:
      'This service provider is a service offered by your Institution and therefore the connection can be made directly: you can use the service immediately!',
    info_sub_title:
      'You can activate a connection from this dashboard. We advise you to follow the checklist and check the specific information for this app before you activate.',
    info_sub_invite_title:
      'You can accept the invite to connect. We advise you to follow the checklist and check the specific information for this app before you activate.',
    info_title: 'Activate connection',
    jira_unreachable: 'Something went wrong with your request',
    jira_unreachable_description: 'It is currently not possible to do a request. Please try again later.',
    license: 'license',
    license_info: 'license information',
    obtain_license: {
      after: ' for using {{app}}.',
      before: 'It is the responsibility of my institution to obtain a ',
    },
    provide_attributes: {
      after: '.',
      before: 'It is the responsibility of my institution to provide the correct ',
    },
    read: 'Read the',
    single_tenant_service_warning:
      'Requests for activating a single tenant services take longer to process. SURF will contact you to discuss the activation process after it has received your request.',
    terms_title: 'By requesting an activation you accept these terms',
    wiki: 'wiki for this service',
    aansluitovereenkomst_accept:
      "I hereby certify that I agree with connecting to a service which has not signed the 'SURFconext aansluitovereenkomst'.",
    not_published_in_edugain_idp: 'eduGAIN service',
    not_published_in_edugain_idp_info:
      "The service {{name}} can not be connected because your institution is not published in eduGAIN. To publish your institution in eduGAIN, please tick 'Published in eduGAIN' under 'My Institute' and create a change request.",
    edit_my_idp_link: "Create change request in 'My Institute'",
    disconnect_jira_info:
      'If you want more information about the progress on this issue please contact <a href="mailto:support@surfconext.nl">support@surfconext.nl</a> and include the ticket number in the subject: {{jiraKey}}',
    invite_denied: 'Ticket {{jiraKey}} was successfully updated with your rejection.',
    invite_accepted: 'Ticket {{jiraKey}} was successfully updated with your approval.',
    deny: 'Deny invition',
    approve: 'Accept invitation',
    deny_invitation: 'Are you  sure you want to deny the invitation to connect to {{app}}',
    deny_invitation_info: 'After you deny the invitation you can always activate the connection from this dashboard.',
    invite_action_collision_title: 'Service {{app}} is already connected.',
    invite_action_collision_subtitle: 'Mid-air collision detected.',
    invite_action_collision:
      'The invitation to connect to {{app}} was already accepted. Perhaps a colleague has already accepted the invite? If you have any question please contact <a href="mailto:support@surfconext.nl?subject={{jiraKey}}">support@surfconext.nl</a> and include the ticket number in the subject: {{jiraKey}}.',
    test_connected_no_connection_title: 'Service {{app}} can not be connected.',
    test_connected_no_connection_subtitle:
      'The status of your institution is staging and therefore no services can connect.',
    test_connected_no_connection:
      'If you want to change the status of your institution please contact <a href="mailto:support@surfconext.nl">support@surfconext.nl</a>.',
    activate_with_email: {
      title: 'Contact at institution for this service',
      subTitle:
        'In case the service provider wants to contact someone at your institution about this connection, who can they contact?',
      emailPlaceholder: 'Contact person at your institution',
      invalidEmail: 'Invalid email',
      disclaimer: 'I opt not to share any name with the service provider',
    },
  },

  application_usage_panel: {
    title: 'Service usage',
    download: 'Export',
    error_html:
      'Stats are currently unavailable. <a href="mailto:support@surfconext.nl">Contact support</a> for more information.',
  },

  contact: {
    email: 'Service support email',
  },
  export: {
    downloadCSV: 'Download as CSV',
    downloadPNG: 'Download as PNG',
    downloadPDF: 'Download as PDF',
  },
  search_user: {
    switch_identity: 'Switch identity',
    search: 'Search',
    search_hint: 'Filter by name',
    name: 'Name',
    switch_to: 'Switch to role',
    switch: {
      role_dashboard_viewer: 'Viewer',
      role_dashboard_admin: 'Admin',
    },
  },

  not_found: {
    title: 'OOPS, I currently can’t show you that page.',
    subTitle: 'This can be due to, and may be fixed by:',
    reasonLoginPre: 'You’re trying to access a page where you need to login for. Please press ',
    reasonLoginPost: ' and see if that takes you to the page you tried to access.',
    reasonHelp:
      'You don’t have the right authorisation to access that URL. Please check the <a href="https://wiki.surfnet.nl/display/surfconextdev/SURFconext+IdP+dashboard+-+help+page" target="_blank" rel="noopener noreferrer">Help pages</a> to see who should be able to access what.',
    reasonRemoved: 'The URL you tried to access does not exist (anymore). Sorry.',
    reasonUnknown:
      'You ran into something else, need help and/or maybe we have to fix this. Send us a mail at <a href="mailto:support@surfconext.nl">support@surfconext.nl</a> so we can have a look.',
  },

  server_error: {
    title: "You don't have sufficient access right to access the Dashboard application.",
    description_html:
      'Please contact <a href="mailto:support@surfconext.nl">support@surfconext.nl</a> if you think this is incorrect.',
  },

  logout: {
    title: 'Logout completed successfully.',
    description_html: 'You <strong>MUST</strong> close your browser to complete the logout process.',
  },

  footer: {
    tips_or_info: 'Need tips or info?',
    help_html:
      '<a href="https://wiki.surfnet.nl/display/surfconextdev/SURFconext+IdP+dashboard+-+help+page" target="_blank" rel="noopener noreferrer">Help</a>',
    surf_html: '<a href="https://www.surf.nl/en" target="_blank" rel="noopener noreferrer">SURF</a>',
    terms_html:
      '<a href="https://support.surfconext.nl/terms-en" target="_blank" rel="noopener noreferrer">Terms of Service</a>',
    contact_html: '<a href="mailto:support@surfconext.nl">support@surfconext.nl</a>',
  },

  my_idp: {
    title: 'My institution',
    general_information: 'General information',
    english: 'English',
    dutch: 'Dutch',
    roles: 'Roles',
    sub_title_html:
      'The following roles have been assigned (<a target="_blank" rel="noopener noreferrer" href="https://wiki.surfnet.nl/display/surfconextdev/Rolverdeling+contactpersonen">more info</a>):',
    role: 'Role',
    users: 'User(s)',
    settings: 'Settings',
    settings_edit: 'Settings for my own institute',
    settings_text:
      "This section contains several settings of your institute and the Service Provider(s) provided to SURFconext by your institute. These settings are used in SURFconext, for instance in the Where Are You From page. If you would like to change something, please press 'Create change request'.",
    settings_text_viewer:
      'This section contains several settings of your institute and the Service Provider(s) provided to SURFconext by your institute. These settings are used in SURFconext, for instance in the Where Are You From page.',
    SURFconextverantwoordelijke: 'SURFconext owner',
    SURFconextbeheerder: 'SURFconext maintainer',
    'Dashboard supergebruiker': 'Dashboard Super User',
    services_title: 'Services provided by your institute:',
    services_title_none: 'None',
    service_name: 'Service name',
    license_contact_html:
      'Primary License contact person (<a target="_blank" rel="noopener noreferrer" href="https://support.surfconext.nl/dashboard-help-nl#Beschikbaredienstenactiveren-HoekunjeopSURFconextaangeslotendienstenactiveren?">more info</a>):',
    license_contact_name: 'Name',
    license_contact_email: 'Email',
    license_contact_phone: 'Phonenumber',
    institution: 'Institution',
    services: 'Services',
    edit: 'Create change request',
    entity_id: 'Entity ID',
    state: 'Status',
    prodaccepted: 'Production',
    testaccepted: 'Staging',
    all: 'All',
    name: {
      general: 'Name',
      en: 'Name (en)',
      nl: 'Name (nl)',
      pt: 'Name (pt)',
    },
    displayName: {
      general: 'Display name',
      en: 'Display name (en)',
      nl: 'Display name (nl)',
      pt: 'Display name (pt)',
    },
    organizationURL: {
      general: 'Organization URL',
      en: 'Organization URL (en)',
      nl: 'Organization URL (nl)',
      pt: 'Organization URL (pt)',
    },
    organizationURL_nl_tooltip: 'A URL the end user can access for more information in Dutch about the organization.',
    organizationURL_en_tooltip: 'A URL the end user can access for more information in English about the organization.',
    organizationURL_pt_tooltip:
      'A URL the end user can access for more information in Portuguese about the organization.',
    organizationName: {
      general: 'Organization name',
      en: 'Organization name (en)',
      nl: 'Organization name (nl)',
      pt: 'Organization name (pt)',
    },
    organizationName_nl_tooltip: 'The official Dutch name of the organization.',
    organizationName_en_tooltip: 'The official English name of the organization.',
    organizationName_pt_tooltip: 'The official Portuguese name of the organization.',
    organizationDisplayName: {
      general: 'Organization display name',
      en: 'Organization display name (en)',
      nl: 'Organization display name (nl)',
      pt: 'Organization display name (pt)',
    },
    organizationDisplayName_nl_tooltip: 'The Dutch display name of the organization.',
    organizationDisplayName_en_tooltip: 'The English display name of the organization.',
    organizationDisplayName_pt_tooltip: 'The Portuguese display name of the organization.',
    keywords: {
      general: 'Keywords',
      en: 'Keywords (en)',
      nl: 'Keywords (nl)',
      pt: 'Keywords (pt)',
    },
    published_in_edugain: 'Published in eduGAIN',
    date_published_in_edugain: 'Date published in eduGAIN',
    logo_url: 'Logo',
    new_logo_url: 'New logo URL',
    research_and_scholarship_info: 'Connect to CoCo R&S SP’s automatically',
    research_and_scholarship_tooltip:
      'Your IdP will be automatically connected to all SPs in<br>SURFconext adhering to both ‘Research & Scholarship Entity Category’<br>and the ‘GEANT Data Protection Code of Conduct’, releasing the R&S attributes. <br>See the <a href="https://support.surfconext.nl/dashboard-help-rns" target="_blank" rel="noopener noreferrer">wiki</a> for more information.',
    allow_maintainers_to_manage_authz_rules: 'Allow SURFconext maintainers to manage Authorization rules',
    allow_maintainers_to_manage_authz_rules_tooltip:
      'The SURFconext maintainers of your IdP are allowed to create, edit and delete<br>Authorization rules.',
    displayAdminEmailsInDashboard: 'Allow regular members to see admin contacts',
    displayAdminEmailsInDashboardTooltip:
      'Regular members of your institution can see the email address of the SURFconext owners <br>and owners of services of this institution.',
    displayStatsInDashboard: 'Allow regular members to see statistics',
    displayStatsInDashboardTooltip:
      'Regular members of your institution can see the usage / statistics of the services connected<br>to this institution.',
    contact: 'Contact persons',
    contact_name: {
      title: 'Contact name',
    },
    contact_email: {
      title: 'Contact email',
      tooltip:
        "Attention: you are advised to use<br>a functional email address <br><br><ul><li>- admin@your-institution.nl</li><li>- tech@your-institution.nl</li><li>- helpdesk@your-institution.nl</li></ul><br>which doesn't change when<br>someone leaves your institution.",
    },
    contact_type: {
      title: 'Contact type',
    },
    contact_telephone: {
      title: 'Contact telephone',
    },
    contact_types: {
      technical: {
        title: 'Technical:<br>',
        display: 'Technical',
        tooltip:
          'The technical contact person of the IdP. First contact for down times, changes, and other technical affairs.<br><br>',
        alttooltip: 'suggestion: technical person for down times and changes.',
      },
      support: {
        title: 'Support:<br>',
        display: 'Support',
        tooltip:
          'This address is referred to when end users are having difficulty logging in. Generally this is the help desk of the institution.<br><br>',
        alttooltip: 'suggestion: service desk of the institution.',
      },
      help: {
        title: 'Support:<br>',
        display: 'Support',
        tooltip:
          'This address is referred to when end users are having difficulty logging in. Generally this is the help desk of the institution.<br><br>',
        alttooltip: 'suggestion: service desk of the institution.',
      },
      administrative: {
        title: 'Administrative:<br>',
        display: 'Administrative',
        tooltip:
          "The administrative contact person of the IdP. This tends to be the person filling the role of 'SURFconext-verantwoordelijke'<br><br>",
        alttooltip: "suggestion: person with the role 'SURFconext-verantwoordelijke'",
      },
      other: {
        title: 'Other:<br>',
        display: 'Other',
        tooltip: 'Unclassified other contact person<br><br>',
        alttooltip: 'suggestion: None',
      },
      billing: {
        title: 'Billing:<br>',
        display: 'Billing',
        tooltip:
          'The billing contact person of the IdP. This tends to be the person of the financial department<br><br>',
        alttooltip: 'suggestion: financial department of the institution',
      },
    },
    description: {
      general: 'Description',
      en: 'Description (en)',
      nl: 'Description (nl)',
      pt: 'Description (pt)',
    },
    guest_enabled: 'Guest access enabled',
    guest_enabled_tooltip:
      'When enabled this means users of the Guest IdP are<br>allowed to connect to this service.<br>See the <a href="https://wiki.surfnet.nl/display/conextsupport/Guest+access+with+eduID" target="_blank" rel="noopener noreferrer">wiki</a> for more information.',
    edit_message: 'You are able to edit the following fields.',
    save: 'Create change request',
    change_request_created:
      'Change request sent to the SURF SURFconext-team. The ticket number of the change request is {{jiraKey}}',
    no_change_request_created: 'No change request is created as you did not change anything.',
    change_request_failed: 'Failed to create your change request.',
    comments: 'Comments',
  },

  policies: {
    confirmation: "Are your sure you want to remove policy '{{policyName}}?'",
    flash: "Authorization policy '{{policyName}}' was successfully {{action}}",
    flash_created: 'created',
    flash_deleted: 'deleted',
    flash_first:
      'Authorization policies are not yet applied for this service. Before policies for this service will be applied, the SURFconext Team must manually perform a configuration change. A notification has been sent to the SURFconext Team. They will get in touch with you.',
    flash_updated: 'updated',
    new_policy: 'New authorization policy',
    no_policies: 'There are no policies for this service.',
    how_to: 'How-to',
    policy_name_not_unique_exception: 'This policy name is already in use',
    pdp_unreachable: 'PDP unreachable',
    pdp_unreachable_description: 'Currently unable to fetch the policies from PDP. Please try again later.',
    pdp_active_info: 'Click to read more about when your rule is active.',
    pdp_active_link: 'https://support.surfconext.nl/pdp-rule-active-after',
    overview: {
      active: 'Active',
      description: 'Description',
      header: 'Authorization policies',
      identityProviderNames: 'Institution(s)',
      inactive: 'Inactive',
      name: 'Name',
      numberOfRevisions: 'Revisions',
      search: 'Search',
      search_hint: 'Filter by name',
      serviceProviderName: 'Service',
    },
  },

  policy_attributes: {
    attribute: 'Attribute',
    attribute_value_placeholder: 'Attribute value...',
    group_info:
      " The value(s) must be fully qualified group IDs e.g. 'urn:collab:group:surfteams.nl:nl:surfnet:diensten:admins'",
    new_attribute: 'Add attribute',
    new_value: '+ Add value',
    sab_info: " The value(s) must be valid roles in SAB e.g. 'Instellingsbevoegde'",
    values: 'Value(s)',
    help_link: 'https://support.surfconext.nl/dashboard-help-attributes',
    attributeTooltip: 'Click to read more about attributes.',
  },

  policy_detail: {
    about: 'About',
    access: 'Policy type',
    access_denied_message: '"Access Denied" message',
    activate_policy: 'Activate this policy',
    deactivate_policy: 'Deactivate this policy',
    active: 'Active policy',
    inactive: 'Inactive policy',
    attribute: 'Attribute(s)',
    autoFormat: 'Auto generate',
    cancel: 'Cancel',
    confirmation: 'Are your sure you want to leave this page?',
    create_policy: 'Create new authorization policy',
    deny: 'Deny',
    deny_info:
      'Deny policies are less common to use. If the attributes in the policy match those of the person trying to login then this will result in a Deny. No match will result in a Permit.',
    deny_message: 'English message',
    deny_message_info: 'This is the message displayed to the user if access is denied based on this policy.',
    deny_message_nl: 'Dutch message',
    deny_message_pt: 'Portuguese message',
    description: 'Rule description',
    idps_placeholder: 'Select the Identity Providers - zero or more',
    institutions: 'Institutions',
    intro:
      'Define who can access this service. Need help? <a href="https://support.surfconext.nl/dashboard-help-pdp" target="_blank" rel="noopener noreferrer">Read our manual.</a>',
    isActive: 'Active',
    isActiveDescription: 'Mark the authorization policy active',
    isActiveInfo: ' Inactive authorization policies are not evaluated in enforcement decisions',
    name: 'Name',
    permit: 'Permit',
    permit_info:
      'Permit policies enforce that a only a successful match of the attributes defined will result in a Permit. No match will result in a Deny.',
    rule: 'Rule',
    rules: 'Rules',
    rule_and: 'AND',
    rule_and_info:
      'Policies with a logical AND rule enforce that all attributes defined must match those of the person trying to login.',
    rule_info_add: ' Note that attribute values with the same attribute name always be evaluated with the logical OR.',
    rule_info_add_2:
      'Note that a Deny access authorization policy always and implicitly uses the logical AND for different attribute names.',
    rule_or: 'OR',
    rule_or_info:
      'Policies defined with a logical OR only require one of the attributes to match the attributes of the person requesting access.',
    save_changes: 'Save changes',
    service: 'Service',
    spScopeInfo: "The available Services are scoped to your services if you don't select an Institution",
    sp_placeholder: 'Select the Service Provider - required',
    sub_title: 'Created by {{displayName}} on {{created}}',
    submit: 'Submit',
    update_policy: 'Update authorization policy',
  },

  revisions: {
    active: 'Active',
    allAttributesMustMatch: 'Logical OR rule?',
    attributes: 'Attributes',
    changes_first_html:
      'This is the first <span class="curr">initial revision {{currRevisionNbr}}</span> created by {{userDisplayName}} from {{authenticatingAuthorityName}} on {{createdDate}}.',
    changes_info_html:
      'Showing the changes between <span class="prev"> revision number {{prevRevisionNbr}}</span> and <span class="curr">revision number {{currRevisionNbr}}</span> made by {{userDisplayName}} from {{authenticatingAuthorityName}} on {{createdDate}}.',
    denyAdvice: 'Deny message in English',
    denyAdviceNl: 'Deny message in Dutch',
    denyAdvicePt: 'Deny message in Portuguese',
    denyRule: 'Access Permit rule?',
    description: 'Description',
    identityProviderNames: 'Institution(s)',
    name: 'Name',
    revision: 'Revision number',
    serviceProviderName: 'Service',
    title: 'Revisions',
    intro_1:
      'Every time a policy gets updated a copy of the previous state is stored as a revision of the new policy. By comparing revisions of a policy with each other and with the most current policy we are able to display an audit log of all changes made to a policy.',
    intro_2: 'When a policy is deleted then all of the revisions of that policy - if any - are also deleted.',
  },

  history: {
    header: 'Tickets',
    filter: 'Filter',
    last_updated: 'Last updated:',
    no_results: 'No results',
    info: 'On this page you find all tickets related to (dis)connecting services and change requests.',
    moreAwaitingTickets:
      "Not all 'Awaiting Input' tickets are shown because the period in the search filter is not broad enough.",
    requestDate: 'Created',
    updateDate: 'Updated',
    type: 'Type',
    jiraKey: 'Id',
    status: 'Status',
    message: 'Message',
    userName: 'By',
    spName: 'Service',
    action_types_name: {
      LINKREQUEST: 'New Connection',
      UNLINKREQUEST: 'Disconnect',
      QUESTION: 'Question',
      CHANGE: 'Change request',
      LINKINVITE: 'Connection Invite',
    },
    from: 'From',
    to: 'To',
    typeIssue: 'Type',
    spEntityId: 'Service',
    statuses: {
      all: 'All tickets',
      'To Do': 'Open',
      'In Progress': 'In progress',
      'Awaiting Input': 'Pending input',
      Resolved: 'Resolved',
      Closed: 'Closed',
      undefined: 'Undefined',
    },
    resolution: {
      no_change_required: 'No Change required',
      no_change_requiredTooltip: 'The ticket needed no change.',
      incomplete: 'Incomplete',
      incompleteTooltip: 'The ticket is incomplete.',
      done: 'Done',
      doneTooltip: 'The ticket is resolved.',
      wont_do: "Won't be fixed",
      wont_doTooltip: 'The ticket will not be fixed.',
      cancelled: 'Cancelled',
      cancelledTooltip:
        'The ticket was cancelled. If the ticket was an invite for a connection the Institution has denied the invite.',
      wont_fix: "Won't be fixed",
      wont_fixTooltip: 'The ticket will not be fixed.',
      resolved: 'Resolved',
      resolvedTooltip: 'The ticket was successfully resolved.',
      duplicate: 'Duplicate',
      duplicateTooltip: 'The ticket was a duplicate of another ticket.',
      not_completed: 'Not completed',
      not_completedTooltip: 'The ticket was not completed.',
      cannot_reproduce: 'Can not be reproduced',
      cannot_reproduceTooltip: 'The issue described in the ticket could not reproduced',
      suspended: 'Suspended',
      suspendedTooltip: 'The ticket was suspended.',
    },
    servicePlaceHolder: 'Search and select a Service...',
    noTicketsFound: 'No tickets were found for the given filters.',
    viewInvitation: 'Approve / Deny',
    resendInvitation: 'Resend invitation mail',
    resendInvitationConfirmation: 'Are you sure you want to resend the invitation mail?',
    resendInvitationFlash: 'Invitation mail for {{jiraKey}} was resent',
    serviceDetails: 'View service details',
  },

  stats: {
    filters: {
      name: 'Filters',
      allServiceProviders: 'All Services',
    },
    state: 'Status',
    timeScale: 'Period',
    date: 'Date',
    from: 'From',
    to: 'Up to and including',
    today: 'Today',
    sp: 'Service',
    period: {
      year: 'Year',
    },
    displayDetailPerSP: 'Display details per Service',
    scale: {
      year: 'Year',
      quarter: 'Quarter',
      month: 'Month',
      week: 'Week',
      day: 'Day',
      hour: 'Hour',
      minute: 'Minute',
      all: 'Entire period: from ⇨ until',
    },
    helpLink: 'https://support.surfconext.nl/dashboard-help-nl#Beschikbaredienstenactiveren-Statistieken',
  },
  chart: {
    title: 'Logins and users per day',
    chart: 'Number of logins per {{scale}}',
    chartAll: 'Number of logins',
    userCount: 'Total logins',
    uniqueUserCount: 'Unique users',
    loading: 'Fetching logins...',
    noResults: 'No logins are recorded for the given period.',
    date: 'Date',
    logins: 'Logins per {{scale}}',
    allLogins: '# Logins',
    uniqueLogins: 'Unique logins',
    sp: 'Service',
    idp: 'Institution',
  },
  clipboard: {
    copied: 'Copied!',
    copy: 'Copy to clipboard',
  },
  live: {
    chartTitle: 'Logins per {{scale}}',
    aggregatedChartTitlePeriod: 'Logins in the period {{period}} per {{group}}',
    noTimeFrameChart: 'Logins from {{from}} until {{to}}',
  },
  service_filter: {
    title: 'Filter services',
    state: {
      tooltip: 'The status of the Service determines if the Service is visible on the production platform.',
    },
    search: 'Search services...',
  },
  invite_request: {
    info: 'An invite request results in a mail send to all selected contactpersons of an Institution with an invite to connect to the selected Service. A <span class="emphasize">Connection Invite</span> Jira ticket is created with the status <span class="emphasize">Awaiting Input</span>.',
    selectIdp: 'Search and select an Institution...',
    selectSpDisabled: 'First select an Institution',
    selectSp: 'Now search and select the Service...',
    idp: 'Institution',
    sp: 'Service',
    contactPersons: 'Select to which contact persons of {{name}} the invite will be sent.',
    sourcePersons: 'Contact persons from {{source}}',
    additionalPersons: 'Additional contact persons',
    selectContact: 'Select',
    sendRequest: 'Submit',
    reset: 'Reset',
    message: 'An - optional - message for the invite recipients.',
    jiraFlash:
      'A Jira ticket has been created with key {{jiraKey}}. When one of the recipients accepts the invite then it will be logged in the comments of {{jiraKey}}.',
    resend: "Ticket was created at {{date}} and emails were send to {{emailTo}}. Current status is '{{status}}'.",
  },
  profile: {
    title: 'Profile',
    sub_title:
      'The following profile data has been provided by your home institution. This data as well as your group membership data (e.g.SURFconext Teams) will be stored in SURFconext and shared with services accessed via SURFconext.',
    my_attributes: 'My attributes',
    attribute: 'Attribute',
    value: 'Value',
    my_roles: 'My roles',
    my_roles_description: 'The following roles have been assigned:',
    role: 'Role',
    role_description: 'Description',
    roles: {
      ROLE_DASHBOARD_ADMIN: {
        name: 'SURFconext owner',
        description: 'You are authorized on behalf of your institution to manage the service connections',
      },
      ROLE_DASHBOARD_VIEWER: {
        name: 'SURFconext maintainer',
        description: 'You are authorized on behalf of your institution to view the information about the services',
      },
      ROLE_DASHBOARD_MEMBER: {
        name: 'Institution member',
        description: 'You are a regular member of the dashboard',
      },
      ROLE_DASHBOARD_SUPER_USER: {
        name: 'Dashboard Super User',
        description: 'You are the super user of the dashboard',
      },
    },
    attribute_map: {
      uid: {
        name: 'UID',
        description: 'your unique username within your organization',
      },
      'Shib-surName': {
        name: 'Surname',
        description: 'your surname',
      },
      'Shib-givenName': {
        name: 'Name',
        description: 'your name',
      },
      'Shib-commonName': {
        name: 'Full Name',
        description: 'your full name',
      },
      'Shib-orgUnit': {
        name: 'Organizational Unit',
        description: 'department or unit name',
      },
      displayName: {
        name: 'Display Name',
        description: 'display name as shown in applications',
      },
      'Shib-InetOrgPerson-mail': {
        name: 'E-mailaddress',
        description: 'your e-mailaddress as known within your organization',
      },
      'Shib-eduPersonAffiliation': {
        name: 'Relation',
        description: 'relation between your and your organization',
      },
      'Shib-eduPersonScopedAffiliation': {
        name: 'Scoped relation',
        description: 'scoped relation between your and your organization',
      },
      eduPersonEntitlement: {
        name: 'Entitlement',
        description: 'entitlement which decides upon your authorization within the application',
      },
      'Shib-eduPersonPN': {
        name: 'Net-ID',
        description: 'your unique username within your organization augmented with @organizationname.nl',
      },
      'Shib-preferredLanguage': {
        name: 'Preferred Language',
        description: 'a two letter abbreviation according to ISO 639; no subcodes',
      },
      schacHomeOrganization: {
        name: 'Organization',
        description: 'name for the organization, making use of the domain name of the organization conform RFC 1035',
      },
      'Shib-schacHomeOrganizationType': {
        name: 'Type of Organization',
        description: 'type of organization to which the user belongs',
      },
      'Shib-schacPersonalUniqueCode': {
        name: 'Personal unique code',
        description: 'these values are used to express specific types of identification number',
      },
      'Shib-nlEduPersonHomeOrganization': {
        name: 'Display name of Organization',
        description: 'display name of the organization',
      },
      'Shib-nlEduPersonOrgUnit': {
        name: 'Unitname',
        description: 'unit name',
      },
      'Shib-nlEduPersonStudyBranch': {
        name: 'Study Branch',
        description: 'study branch; numeric string which contains the CROHOcode. can be empty if the branch is unknown',
      },
      'Shib-nlStudielinkNummer': {
        name: 'Studielinknummer',
        description: 'studielinknummer of the student as registered at www.studielink.nl',
      },
      'Shib-nlDigitalAuthorIdentifier': {
        name: 'DAI',
        description: 'Digital Author Identifier (DAI)',
      },
      'Shib-userStatus': {
        name: 'Userstatus',
        description: 'Status of this user in SURFconext',
      },
      'Shib-accountstatus': {
        name: 'Accountstatus',
        description: 'Status of this account in SURFconext',
      },
      'name-id': {
        name: 'Identifier',
        description: 'Status of this account in SURFconext',
      },
      'Shib-voName': {
        name: 'Virtual Organisation Name',
        description: 'The name of the Virtual Organisation for which you have authenticated',
      },
      'Shib-user': {
        name: 'Identifier',
        description: 'Status of this account in SURFconext',
      },
      'is-member-of': {
        name: 'Membership',
        description: 'Membership of Virtual Organizations and SURFconext.',
      },
      'Shib-surfEckid': {
        name: 'SURF EDU-K',
        description: 'Educatieve Content Keten Identifier (ECK ID) is a pseudonymous identifier.',
      },
    },
  },
  stepup :{
    title: 'SURF Secure ID Step up',
    info: 'In order to perform this action it is required to add a second factor to your authentication. When you proceed you will redirected to add this second factor and then you will return here again.',
    cancel: 'Cancel',
    go: 'Proceed'
  },
  mfa_panel: {
    title: 'MFA',
    subtitle:
        'With <a href="https://wiki.surfnet.nl/display/surfconextdev/MFA+voor+diensten+achter+SURFconext" target="_blank" rel="noopener noreferrer">MFA</a> you can enforce the MultiFactor Authentication of your own IdP for this service.',
    subtitle2:
        'You can either choose <span>Generic multi-factor (REFEDS MFA)</span> which is industry standardized or you can choose <span>Multi-factor on ADFS or Azure AD</span> which is specific for Microsoft products.',
    subtitle3:
        'By choosing a MFA value you can add additional protection to your service by adding a second factor to the user\'s login at your own IdP. If your IdP does not support a secoind factor, but you would like to add it to this service then consider using SURFSecureID.',
    authn_context_level: 'MFA Setting',
    defaultAuthnContextLevel: 'Do not force MFA at my IdP for this service',
    multipleauthn: 'Multi-factor on ADFS or Azure AD',
    mfa: 'Generic multi-factor (REFEDS MFA)',
  },

}
