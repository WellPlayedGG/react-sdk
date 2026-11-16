export default {
    "scalars": [
        1,
        4,
        10,
        11,
        12,
        17,
        20,
        21,
        22,
        32,
        34,
        36,
        37,
        39,
        41,
        47,
        50,
        54,
        60,
        62,
        63,
        64,
        77,
        80,
        81,
        82,
        84,
        86,
        88,
        91,
        96,
        98,
        107,
        108,
        109,
        110,
        115,
        116,
        121,
        124,
        128,
        131,
        133,
        137,
        141,
        142,
        149,
        154,
        156,
        159,
        162,
        167,
        180,
        188,
        190,
        203,
        204,
        213,
        215,
        217,
        218,
        223,
        225,
        228,
        240,
        245,
        253,
        257,
        261,
        263,
        267,
        269,
        271,
        273,
        274,
        276,
        282,
        284,
        287,
        290,
        293,
        295,
        297,
        300,
        303,
        305,
        306,
        309,
        312,
        317,
        319,
        323,
        325,
        327,
        328,
        329,
        341,
        345,
        348,
        350,
        365,
        372,
        377,
        379,
        380,
        381,
        390,
        391,
        392,
        402,
        403,
        416,
        419,
        420,
        437,
        438,
        439,
        443,
        467,
        480,
        482,
        531,
        532,
        533,
        543,
        546,
        547,
        569,
        572,
        631,
        632,
        679
    ],
    "types": {
        "JournalPayload": {
            "_typename": [
                1
            ],
            "on_RuleEngineAdvancementRuleFiredPayload": [
                212
            ],
            "on_RuleEngineCrossStepTransferredPayload": [
                214
            ],
            "on_RuleEngineEffectAdvancePayload": [
                216
            ],
            "on_RuleEngineEffectCreateGroupPayload": [
                219
            ],
            "on_RuleEngineEffectEliminatePayload": [
                220
            ],
            "on_RuleEngineEffectEmitSeedingPinPayload": [
                221
            ],
            "on_RuleEngineEffectEndStepPayload": [
                222
            ],
            "on_RuleEngineEffectSetMetadataPayload": [
                224
            ],
            "on_RuleEngineGenerationScriptRanPayload": [
                226
            ],
            "on_RuleEngineManualOverridePayload": [
                227
            ],
            "on_LeaderboardFeedReconcileFailedPayload": [
                229
            ],
            "on_TournamentOpenPoolMatchCorrectedPayload": [
                231
            ],
            "on_TournamentOpenPoolMatchCancelledPayload": [
                232
            ],
            "on_TournamentOpenPoolClosedPayload": [
                233
            ],
            "on_TournamentOpenPoolReopenedPayload": [
                234
            ],
            "on_TournamentsStepResetPayload": [
                236
            ],
            "on_TournamentsStepGeneratedPayload": [
                237
            ],
            "__typename": [
                1
            ]
        },
        "String": {},
        "JournalActorContextPayload": {
            "_typename": [
                1
            ],
            "on_AdminActorContext": [
                423
            ],
            "on_PlayerActorContext": [
                424
            ],
            "on_SystemActorContext": [
                425
            ],
            "on_MarketplaceModuleActorContext": [
                426
            ],
            "on_ApiClientActorContext": [
                427
            ],
            "on_WebhookCallbackActorContext": [
                428
            ],
            "on_SimulationActorContext": [
                429
            ],
            "__typename": [
                1
            ]
        },
        "KeyMapping": {
            "path": [
                1
            ],
            "mappedTo": [
                1
            ],
            "private": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "Boolean": {},
        "MappingConfiguration": {
            "mappings": [
                3
            ],
            "__typename": [
                1
            ]
        },
        "Header": {
            "name": [
                1
            ],
            "value": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "DataRetrievalConfig": {
            "url": [
                1
            ],
            "headers": [
                6
            ],
            "mappingConfiguration": [
                5
            ],
            "__typename": [
                1
            ]
        },
        "ResponsePageInfo": {
            "hasNextPage": [
                4
            ],
            "hasPreviousPage": [
                4
            ],
            "startCursor": [
                1
            ],
            "endCursor": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "OrganizationGroup": {
            "id": [
                10
            ],
            "name": [
                1
            ],
            "permissions": [
                14
            ],
            "organizationId": [
                10
            ],
            "type": [
                11
            ],
            "createdAt": [
                12
            ],
            "updatedAt": [
                12
            ],
            "__typename": [
                1
            ]
        },
        "ID": {},
        "OrganizationGroupType": {},
        "DateTime": {},
        "Permission": {
            "id": [
                1
            ],
            "description": [
                1
            ],
            "resources": [
                1
            ],
            "availableVariables": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "GroupPermission": {
            "id": [
                1
            ],
            "resources": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "Permissions": {
            "organizationPermissions": [
                13
            ],
            "__typename": [
                1
            ]
        },
        "OrganizationGroups": {
            "edges": [
                18
            ],
            "nodes": [
                9
            ],
            "pageInfo": [
                8
            ],
            "totalCount": [
                17
            ],
            "__typename": [
                1
            ]
        },
        "Float": {},
        "OrganizationGroupEdge": {
            "cursor": [
                1
            ],
            "node": [
                9
            ],
            "__typename": [
                1
            ]
        },
        "Property": {
            "property": [
                1
            ],
            "name": [
                1
            ],
            "type": [
                20
            ],
            "required": [
                4
            ],
            "order": [
                17
            ],
            "unique": [
                4
            ],
            "public": [
                4
            ],
            "visibility": [
                21
            ],
            "editability": [
                22
            ],
            "__typename": [
                1
            ]
        },
        "PropertyType": {},
        "PropertyVisibility": {},
        "ProperyEditability": {},
        "PropertyConfigWithValue": {
            "property": [
                1
            ],
            "name": [
                1
            ],
            "type": [
                20
            ],
            "required": [
                4
            ],
            "order": [
                17
            ],
            "unique": [
                4
            ],
            "public": [
                4
            ],
            "visibility": [
                21
            ],
            "editability": [
                22
            ],
            "value": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "PropertyValue": {
            "property": [
                1
            ],
            "value": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "MatchVariable": {
            "formulaName": [
                1
            ],
            "displayName": [
                1
            ],
            "displayIcon": [
                1
            ],
            "defaultValue": [
                17
            ],
            "__typename": [
                1
            ]
        },
        "MatchConfiguration": {
            "variables": [
                25
            ],
            "scoreFormula": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "GameConfiguration": {
            "wonMatchCountToWinGame": [
                17
            ],
            "useMatchScoresAsGameScore": [
                4
            ],
            "teamsCount": [
                17
            ],
            "matchConfiguration": [
                26
            ],
            "__typename": [
                1
            ]
        },
        "Variable": {
            "name": [
                1
            ],
            "defaultValue": [
                17
            ],
            "__typename": [
                1
            ]
        },
        "RoundConfiguration": {
            "game": [
                27
            ],
            "order": [
                17
            ],
            "name": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "GroupConfiguration": {
            "rounds": [
                29
            ],
            "name": [
                1
            ],
            "description": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "StepConfiguration": {
            "type": [
                32
            ],
            "groups": [
                30
            ],
            "__typename": [
                1
            ]
        },
        "ConfigurationType": {},
        "NumericCondition": {
            "conditionType": [
                34
            ],
            "value": [
                17
            ],
            "__typename": [
                1
            ]
        },
        "NumberConditionType": {},
        "TeamNumericCondition": {
            "aggregationType": [
                36
            ],
            "propertySource": [
                37
            ],
            "propertySourceId": [
                10
            ],
            "conditionType": [
                34
            ],
            "value": [
                17
            ],
            "__typename": [
                1
            ]
        },
        "AggregationType": {},
        "PlayerConditionDataSource": {},
        "StringCondition": {
            "conditionType": [
                39
            ],
            "value": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "StringConditionType": {},
        "Condition": {
            "property": [
                1
            ],
            "numericCondition": [
                33
            ],
            "stringCondition": [
                38
            ],
            "propertyCondition": [
                41
            ],
            "__typename": [
                1
            ]
        },
        "PropertyCondition": {},
        "PlayerField": {
            "propertySource": [
                37
            ],
            "propertySourceId": [
                10
            ],
            "property": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "PlayerCondition": {
            "propertySource": [
                37
            ],
            "propertySourceId": [
                10
            ],
            "condition": [
                40
            ],
            "errorMessage": [
                1
            ],
            "ruleDescription": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "TeamCondition": {
            "property": [
                1
            ],
            "stringCondition": [
                38
            ],
            "numericCondition": [
                35
            ],
            "propertyCondition": [
                41
            ],
            "errorMessage": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "RegistrationConditions": {
            "teamConditions": [
                44
            ],
            "memberConditions": [
                43
            ],
            "__typename": [
                1
            ]
        },
        "TournamentConfiguration": {
            "type": [
                32
            ],
            "teamMinSize": [
                17
            ],
            "teamMaxSize": [
                17
            ],
            "teamsCount": [
                17
            ],
            "teamStatusAfterRegistration": [
                47
            ],
            "registrationConditions": [
                45
            ],
            "customFields": [
                19
            ],
            "__typename": [
                1
            ]
        },
        "TeamStatusAfterRegistration": {},
        "EmailTemplateConfigurationAvailableVariables": {
            "name": [
                1
            ],
            "description": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "EmailTemplateConfiguration": {
            "triggerEvent": [
                50
            ],
            "name": [
                1
            ],
            "description": [
                1
            ],
            "availableVariables": [
                48
            ],
            "__typename": [
                1
            ]
        },
        "EmailTriggerEvents": {},
        "EmailConfiguration": {
            "host": [
                1
            ],
            "port": [
                17
            ],
            "username": [
                1
            ],
            "password": [
                1
            ],
            "from": [
                1
            ],
            "fromName": [
                1
            ],
            "replyTo": [
                1
            ],
            "replyToName": [
                1
            ],
            "secure": [
                4
            ],
            "emailField": [
                42
            ],
            "__typename": [
                1
            ]
        },
        "WebhookEventConfigurationProperties": {
            "name": [
                1
            ],
            "description": [
                1
            ],
            "array": [
                4
            ],
            "optional": [
                4
            ],
            "example": [
                1
            ],
            "type": [
                1
            ],
            "properties": [
                52
            ],
            "__typename": [
                1
            ]
        },
        "WebhookEventConfiguration": {
            "type": [
                54
            ],
            "description": [
                1
            ],
            "payload": [
                52
            ],
            "answerPayload": [
                52
            ],
            "__typename": [
                1
            ]
        },
        "WebhookEventType": {},
        "OrganizationMember": {
            "id": [
                10
            ],
            "organizationId": [
                10
            ],
            "groupId": [
                10
            ],
            "memberId": [
                10
            ],
            "permissions": [
                14
            ],
            "createdAt": [
                12
            ],
            "updatedAt": [
                12
            ],
            "account": [
                76
            ],
            "group": [
                9
            ],
            "__typename": [
                1
            ]
        },
        "OrganizationMembers": {
            "edges": [
                57
            ],
            "nodes": [
                55
            ],
            "pageInfo": [
                8
            ],
            "totalCount": [
                17
            ],
            "__typename": [
                1
            ]
        },
        "OrganizationMemberEdge": {
            "cursor": [
                1
            ],
            "node": [
                55
            ],
            "__typename": [
                1
            ]
        },
        "Tournament": {
            "id": [
                10
            ],
            "title": [
                1
            ],
            "description": [
                1
            ],
            "startAt": [
                12
            ],
            "endAt": [
                12
            ],
            "startRegistrationsAt": [
                12
            ],
            "endRegistrationsAt": [
                12
            ],
            "organizationId": [
                10
            ],
            "configuration": [
                46
            ],
            "createdAt": [
                12
            ],
            "updatedAt": [
                12
            ],
            "createdById": [
                10
            ],
            "tournamentSeriesId": [
                10
            ],
            "visibleAt": [
                12
            ],
            "registrationSeriesId": [
                10
            ],
            "teams": [
                249,
                {
                    "page": [
                        59,
                        "PageInfo!"
                    ],
                    "status": [
                        60
                    ]
                }
            ],
            "steps": [
                252
            ],
            "createdBy": [
                76
            ],
            "myTeam": [
                248
            ],
            "teamScores": [
                251
            ],
            "__typename": [
                1
            ]
        },
        "PageInfo": {
            "first": [
                17
            ],
            "after": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "TournamentTeamStatus": {},
        "Limit": {
            "id": [
                1
            ],
            "default": [
                17
            ],
            "description": [
                1
            ],
            "name": [
                1
            ],
            "type": [
                62
            ],
            "bucketDuration": [
                63
            ],
            "scope": [
                64
            ],
            "max": [
                17
            ],
            "__typename": [
                1
            ]
        },
        "OrganizationLimitType": {},
        "BucketDuration": {},
        "LimitScope": {},
        "Limits": {
            "limits": [
                61
            ],
            "__typename": [
                1
            ]
        },
        "OrganizationLimit": {
            "id": [
                1
            ],
            "max": [
                17
            ],
            "current": [
                17
            ],
            "__typename": [
                1
            ]
        },
        "OrganizationLimits": {
            "limits": [
                66
            ],
            "__typename": [
                1
            ]
        },
        "OrganizationConfiguration": {
            "customFields": [
                19
            ],
            "__typename": [
                1
            ]
        },
        "PublicOrganizationIdentityProvider": {
            "id": [
                10
            ],
            "name": [
                1
            ],
            "description": [
                1
            ],
            "icon": [
                1
            ],
            "allowLogin": [
                4
            ],
            "authorizationUrl": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "Organization": {
            "id": [
                10
            ],
            "ownerId": [
                10
            ],
            "name": [
                1
            ],
            "description": [
                1
            ],
            "configuration": [
                68
            ],
            "tournaments": [
                58
            ],
            "members": [
                55
            ],
            "groups": [
                9
            ],
            "stripeConfigured": [
                4
            ],
            "identityProviders": [
                69,
                {
                    "login": [
                        4,
                        "Boolean!"
                    ]
                }
            ],
            "__typename": [
                1
            ]
        },
        "AccountIdentityProperty": {
            "property": [
                1
            ],
            "value": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "AccountIdentity": {
            "providerId": [
                1
            ],
            "accountId": [
                10
            ],
            "organizationIdentityProviderId": [
                10
            ],
            "properties": [
                71
            ],
            "createdAt": [
                12
            ],
            "updatedAt": [
                12
            ],
            "isCreationIdentity": [
                4
            ],
            "organizationIdentityProvider": [
                69
            ],
            "__typename": [
                1
            ]
        },
        "Player": {
            "id": [
                10
            ],
            "username": [
                1
            ],
            "description": [
                1
            ],
            "ownerId": [
                10
            ],
            "organizationCustomId": [
                10
            ],
            "updatedAt": [
                12
            ],
            "createdAt": [
                12
            ],
            "identities": [
                72
            ],
            "owner": [
                76
            ],
            "customFields": [
                23,
                {
                    "properties": [
                        1,
                        "[String!]"
                    ]
                }
            ],
            "guest": [
                155
            ],
            "__typename": [
                1
            ]
        },
        "Players": {
            "edges": [
                75
            ],
            "nodes": [
                73
            ],
            "pageInfo": [
                8
            ],
            "totalCount": [
                17
            ],
            "__typename": [
                1
            ]
        },
        "PlayerEdge": {
            "cursor": [
                1
            ],
            "node": [
                73
            ],
            "__typename": [
                1
            ]
        },
        "Account": {
            "id": [
                10
            ],
            "email": [
                77
            ],
            "permissions": [
                14
            ],
            "profiles": [
                73
            ],
            "identities": [
                72,
                {
                    "properties": [
                        1,
                        "[String!]"
                    ],
                    "providerIds": [
                        10,
                        "[ID!]"
                    ]
                }
            ],
            "__typename": [
                1
            ]
        },
        "EmailAddress": {},
        "IdentityLinkUrl": {
            "url": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "AppFunctionError": {
            "kind": [
                81
            ],
            "code": [
                1
            ],
            "platformCode": [
                82
            ],
            "message": [
                1
            ],
            "field": [
                1
            ],
            "details": [
                1
            ],
            "retryAfterSeconds": [
                80
            ],
            "__typename": [
                1
            ]
        },
        "Int": {},
        "AppFunctionErrorKind": {},
        "AppFunctionPlatformErrorCode": {},
        "AppFunctionResult": {
            "executionId": [
                10
            ],
            "status": [
                84
            ],
            "payload": [
                1
            ],
            "error": [
                79
            ],
            "replayed": [
                4
            ],
            "cached": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "AppFunctionStatus": {},
        "AppConfigEntry": {
            "key": [
                1
            ],
            "type": [
                86
            ],
            "label": [
                1
            ],
            "description": [
                1
            ],
            "value": [
                1
            ],
            "defaultValue": [
                1
            ],
            "public": [
                4
            ],
            "required": [
                4
            ],
            "options": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "AppConfigType": {},
        "PermissionDefinitionDto": {
            "id": [
                1
            ],
            "owner": [
                88
            ],
            "description": [
                1
            ],
            "resources": [
                1
            ],
            "appSlug": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "PermissionDefinitionOwner": {},
        "FrontendModulePropOptionModel": {
            "label": [
                1
            ],
            "value": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "FrontendModulePropSchemaModel": {
            "key": [
                1
            ],
            "type": [
                91
            ],
            "label": [
                1
            ],
            "description": [
                1
            ],
            "required": [
                4
            ],
            "defaultValue": [
                1
            ],
            "options": [
                89
            ],
            "param": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "FrontendModulePropType": {},
        "FrontendModuleEventModel": {
            "name": [
                1
            ],
            "description": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "FrontendModuleModel": {
            "name": [
                1
            ],
            "displayName": [
                1
            ],
            "description": [
                1
            ],
            "exportName": [
                1
            ],
            "version": [
                1
            ],
            "propsSchema": [
                90
            ],
            "events": [
                92
            ],
            "__typename": [
                1
            ]
        },
        "ExtensionPointSizeModel": {
            "maxWidth": [
                80
            ],
            "maxHeight": [
                80
            ],
            "__typename": [
                1
            ]
        },
        "ExtensionPointModel": {
            "type": [
                96
            ],
            "label": [
                1
            ],
            "activePages": [
                1
            ],
            "size": [
                94
            ],
            "__typename": [
                1
            ]
        },
        "ExtensionPointType": {},
        "AppFieldDeclModel": {
            "name": [
                1
            ],
            "type": [
                98
            ],
            "required": [
                4
            ],
            "options": [
                1
            ],
            "fields": [
                97
            ],
            "items": [
                97
            ],
            "maxLength": [
                80
            ],
            "min": [
                17
            ],
            "max": [
                17
            ],
            "__typename": [
                1
            ]
        },
        "AppFieldType": {},
        "AppConfigDeclModel": {
            "key": [
                1
            ],
            "type": [
                86
            ],
            "label": [
                1
            ],
            "description": [
                1
            ],
            "required": [
                4
            ],
            "defaultValue": [
                1
            ],
            "options": [
                1
            ],
            "min": [
                17
            ],
            "max": [
                17
            ],
            "pattern": [
                1
            ],
            "public": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "AppCustomPermissionDeclModel": {
            "name": [
                1
            ],
            "description": [
                1
            ],
            "resources": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "AppStorageCollectionDeclModel": {
            "name": [
                1
            ],
            "ttlSeconds": [
                80
            ],
            "__typename": [
                1
            ]
        },
        "AppStorageDeclModel": {
            "collections": [
                101
            ],
            "__typename": [
                1
            ]
        },
        "AppOperationDeclModel": {
            "name": [
                1
            ],
            "file": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "AppEmailTemplateDeclModel": {
            "key": [
                1
            ],
            "subject": [
                1
            ],
            "file": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "AppAuditTypeDeclModel": {
            "type": [
                1
            ],
            "fields": [
                97
            ],
            "__typename": [
                1
            ]
        },
        "AppFunctionTriggerModel": {
            "type": [
                107
            ],
            "readOnly": [
                4
            ],
            "cacheSeconds": [
                80
            ],
            "hookPoint": [
                108
            ],
            "onError": [
                109
            ],
            "timeoutMs": [
                80
            ],
            "events": [
                54
            ],
            "selfTrigger": [
                4
            ],
            "cron": [
                1
            ],
            "timezone": [
                1
            ],
            "lifecycle": [
                110
            ],
            "__typename": [
                1
            ]
        },
        "AppFunctionTriggerType": {},
        "AppHookPoint": {},
        "AppHookErrorPolicy": {},
        "AppLifecycleTransition": {},
        "AppFunctionPreloadVarModel": {
            "name": [
                1
            ],
            "value": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "AppFunctionPreloadDeclModel": {
            "name": [
                1
            ],
            "op": [
                1
            ],
            "vars": [
                111
            ],
            "__typename": [
                1
            ]
        },
        "AppFunctionRequirementDeclModel": {
            "permission": [
                1
            ],
            "resource": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "AppFunctionDeclModel": {
            "name": [
                1
            ],
            "file": [
                1
            ],
            "trigger": [
                106
            ],
            "invoker": [
                115
            ],
            "runAs": [
                116
            ],
            "input": [
                97
            ],
            "output": [
                97
            ],
            "preload": [
                112
            ],
            "requires": [
                113
            ],
            "__typename": [
                1
            ]
        },
        "AppFunctionInvokerKind": {},
        "AppFunctionRunAs": {},
        "AppManifestModel": {
            "version": [
                1
            ],
            "permissions": [
                1
            ],
            "extensions": [
                95
            ],
            "webhookUrl": [
                1
            ],
            "webhookEvents": [
                54
            ],
            "metafieldNamespaces": [
                1
            ],
            "frontendModules": [
                93
            ],
            "extensionCdnPath": [
                1
            ],
            "moduleCdnPath": [
                1
            ],
            "config": [
                99
            ],
            "customPermissions": [
                100
            ],
            "storage": [
                102
            ],
            "operations": [
                103
            ],
            "emailTemplates": [
                104
            ],
            "auditTypes": [
                105
            ],
            "functions": [
                114
            ],
            "codeAuthorized": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "CustomDomainSslValidationRecord": {
            "txt_name": [
                1
            ],
            "txt_value": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "CustomDomainSslValidationError": {
            "message": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "CustomDomainSsl": {
            "status": [
                121
            ],
            "validation_errors": [
                119
            ],
            "validation_records": [
                118
            ],
            "__typename": [
                1
            ]
        },
        "CustomDomainValidationStatus": {},
        "CustomDomainOwnershipVerification": {
            "name": [
                1
            ],
            "value": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "CustomDomainData": {
            "hostname": [
                1
            ],
            "ownership_verification": [
                122
            ],
            "ssl": [
                120
            ],
            "status": [
                124
            ],
            "verification_errors": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "CustomDomainStatus": {},
        "PlatformCdnFilePageConfig": {
            "path": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "PlatformCdnFileConfigs": {
            "pageConfig": [
                125
            ],
            "__typename": [
                1
            ]
        },
        "PlatformCdnFile": {
            "id": [
                10
            ],
            "platformId": [
                10
            ],
            "platformTemplateId": [
                10
            ],
            "name": [
                1
            ],
            "type": [
                128
            ],
            "updatedAt": [
                12
            ],
            "createdAt": [
                12
            ],
            "config": [
                126
            ],
            "size": [
                17
            ],
            "prodCdnPath": [
                1
            ],
            "devCdnPath": [
                1
            ],
            "contents": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "PlatformCdnFileType": {},
        "PresignedUrlField": {
            "key": [
                1
            ],
            "value": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "PresignedUrl": {
            "fields": [
                129
            ],
            "url": [
                131
            ],
            "__typename": [
                1
            ]
        },
        "URL": {},
        "AppReleaseFile": {
            "kind": [
                133
            ],
            "name": [
                1
            ],
            "sha256": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "AppReleaseFileKind": {},
        "AppReviewCheck": {
            "name": [
                1
            ],
            "passed": [
                4
            ],
            "details": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "AppReviewResult": {
            "passed": [
                4
            ],
            "checks": [
                134
            ],
            "__typename": [
                1
            ]
        },
        "MarketplaceAppRelease": {
            "id": [
                10
            ],
            "marketplaceAppId": [
                10
            ],
            "version": [
                1
            ],
            "status": [
                137
            ],
            "manifest": [
                117
            ],
            "extensionBundleKey": [
                1
            ],
            "moduleBundleKey": [
                1
            ],
            "releaseNotes": [
                1
            ],
            "reviewResult": [
                135
            ],
            "reviewedAt": [
                12
            ],
            "createdAt": [
                12
            ],
            "files": [
                132
            ],
            "__typename": [
                1
            ]
        },
        "MarketplaceAppReleaseStatus": {},
        "AppReleaseWithUploadUrls": {
            "release": [
                136
            ],
            "extensionUploadUrl": [
                130
            ],
            "moduleUploadUrl": [
                130
            ],
            "__typename": [
                1
            ]
        },
        "AppBundleValidationError": {
            "valid": [
                4
            ],
            "errors": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "MarketplaceApp": {
            "id": [
                10
            ],
            "organizationAppId": [
                10
            ],
            "status": [
                141
            ],
            "manifest": [
                117
            ],
            "name": [
                1
            ],
            "description": [
                1
            ],
            "shortDescription": [
                1
            ],
            "icon": [
                1
            ],
            "screenshots": [
                1
            ],
            "categories": [
                1
            ],
            "version": [
                1
            ],
            "privacyPolicyUrl": [
                1
            ],
            "supportUrl": [
                1
            ],
            "websiteUrl": [
                1
            ],
            "createdAt": [
                12
            ],
            "updatedAt": [
                12
            ],
            "slug": [
                1
            ],
            "visibility": [
                142
            ],
            "allowedOrganizationIds": [
                10
            ],
            "reviews": [
                146,
                {
                    "page": [
                        59
                    ]
                }
            ],
            "stats": [
                152
            ],
            "installation": [
                148
            ],
            "pricing": [
                153
            ],
            "__typename": [
                1
            ]
        },
        "MarketplaceAppStatus": {},
        "MarketplaceAppVisibility": {},
        "MarketplaceApps": {
            "edges": [
                144
            ],
            "nodes": [
                140
            ],
            "pageInfo": [
                8
            ],
            "totalCount": [
                17
            ],
            "__typename": [
                1
            ]
        },
        "MarketplaceAppEdge": {
            "cursor": [
                1
            ],
            "node": [
                140
            ],
            "__typename": [
                1
            ]
        },
        "MarketplaceAppReview": {
            "id": [
                10
            ],
            "marketplaceAppId": [
                10
            ],
            "organizationId": [
                10
            ],
            "accountId": [
                10
            ],
            "rating": [
                80
            ],
            "title": [
                1
            ],
            "body": [
                1
            ],
            "createdAt": [
                12
            ],
            "updatedAt": [
                12
            ],
            "__typename": [
                1
            ]
        },
        "MarketplaceAppReviews": {
            "edges": [
                147
            ],
            "nodes": [
                145
            ],
            "pageInfo": [
                8
            ],
            "totalCount": [
                17
            ],
            "__typename": [
                1
            ]
        },
        "MarketplaceAppReviewEdge": {
            "cursor": [
                1
            ],
            "node": [
                145
            ],
            "__typename": [
                1
            ]
        },
        "MarketplaceAppInstallation": {
            "id": [
                10
            ],
            "marketplaceAppId": [
                10
            ],
            "organizationId": [
                10
            ],
            "installedById": [
                10
            ],
            "status": [
                149
            ],
            "grantedPermissions": [
                1
            ],
            "createdAt": [
                12
            ],
            "updatedAt": [
                12
            ],
            "release": [
                136
            ],
            "configVersion": [
                80
            ],
            "functionsEnabled": [
                4
            ],
            "disabledFunctions": [
                1
            ],
            "marketplaceApp": [
                140
            ],
            "__typename": [
                1
            ]
        },
        "MarketplaceInstallationStatus": {},
        "MarketplaceAppInstallations": {
            "edges": [
                151
            ],
            "nodes": [
                148
            ],
            "pageInfo": [
                8
            ],
            "totalCount": [
                17
            ],
            "__typename": [
                1
            ]
        },
        "MarketplaceAppInstallationEdge": {
            "cursor": [
                1
            ],
            "node": [
                148
            ],
            "__typename": [
                1
            ]
        },
        "MarketplaceAppStats": {
            "totalInstallations": [
                80
            ],
            "averageRating": [
                17
            ],
            "totalReviews": [
                80
            ],
            "__typename": [
                1
            ]
        },
        "MarketplaceAppPricing": {
            "id": [
                10
            ],
            "marketplaceAppId": [
                10
            ],
            "type": [
                154
            ],
            "priceAmountCents": [
                80
            ],
            "currency": [
                1
            ],
            "trialDays": [
                80
            ],
            "createdAt": [
                12
            ],
            "updatedAt": [
                12
            ],
            "__typename": [
                1
            ]
        },
        "MarketplacePricingType": {},
        "GuestProfile": {
            "playerId": [
                10
            ],
            "player": [
                73
            ],
            "email": [
                1
            ],
            "firstName": [
                1
            ],
            "lastName": [
                1
            ],
            "origin": [
                156
            ],
            "guardianPlayerIds": [
                10
            ],
            "wardPlayerIds": [
                10
            ],
            "createdAt": [
                12
            ],
            "__typename": [
                1
            ]
        },
        "GuestOrigin": {},
        "GuestLinkContext": {
            "id": [
                10
            ],
            "purpose": [
                1
            ],
            "data": [
                1
            ],
            "expiresAt": [
                12
            ],
            "__typename": [
                1
            ]
        },
        "GuestSession": {
            "token": [
                1
            ],
            "playerId": [
                10
            ],
            "origin": [
                159
            ],
            "expiresAt": [
                12
            ],
            "link": [
                157
            ],
            "__typename": [
                1
            ]
        },
        "GuestSessionOrigin": {},
        "GuestMe": {
            "sessionPlayerId": [
                10
            ],
            "actingPlayerId": [
                10
            ],
            "origin": [
                159
            ],
            "expiresAt": [
                12
            ],
            "link": [
                157
            ],
            "profile": [
                155
            ],
            "wards": [
                155
            ],
            "__typename": [
                1
            ]
        },
        "GuestLinkView": {
            "status": [
                162
            ],
            "purpose": [
                1
            ],
            "expiresAt": [
                12
            ],
            "firstName": [
                1
            ],
            "data": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "GuestLinkStatus": {},
        "GuestLinkCreated": {
            "id": [
                10
            ],
            "token": [
                1
            ],
            "expiresAt": [
                12
            ],
            "__typename": [
                1
            ]
        },
        "GuestProfileCreated": {
            "profile": [
                155
            ],
            "created": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "GuestGuardianLink": {
            "id": [
                10
            ],
            "guardianPlayerId": [
                10
            ],
            "wardPlayerId": [
                10
            ],
            "createdAt": [
                12
            ],
            "__typename": [
                1
            ]
        },
        "GuestConfiguration": {
            "selfEntry": [
                167
            ],
            "sessionTtlMinutes": [
                80
            ],
            "maxWardsPerGuardian": [
                80
            ],
            "__typename": [
                1
            ]
        },
        "GuestSelfEntryMode": {},
        "Configuration": {
            "id": [
                10
            ],
            "name": [
                1
            ],
            "description": [
                1
            ],
            "createdAt": [
                12
            ],
            "updatedAt": [
                12
            ],
            "configuration": [
                169
            ],
            "createdById": [
                10
            ],
            "organizationId": [
                10
            ],
            "__typename": [
                1
            ]
        },
        "ConfigurationProperties": {
            "on_StepConfiguration": [
                31
            ],
            "on_TournamentConfiguration": [
                46
            ],
            "__typename": [
                1
            ]
        },
        "LeaderboardSeasonBucketScore": {
            "id": [
                10
            ],
            "rank": [
                17
            ],
            "lastScore": [
                17
            ],
            "lastRank": [
                80
            ],
            "createdAt": [
                12
            ],
            "updatedAt": [
                12
            ],
            "score": [
                17
            ],
            "leaderboardSeasonBucketId": [
                10
            ],
            "playerProfileId": [
                10
            ],
            "__typename": [
                1
            ]
        },
        "LeaderboardSeasonBucketScores": {
            "edges": [
                172
            ],
            "nodes": [
                170
            ],
            "pageInfo": [
                8
            ],
            "totalCount": [
                17
            ],
            "__typename": [
                1
            ]
        },
        "LeaderboardSeasonBucketScoreEdge": {
            "cursor": [
                1
            ],
            "node": [
                170
            ],
            "__typename": [
                1
            ]
        },
        "Leaderboard": {
            "id": [
                10
            ],
            "organizationId": [
                10
            ],
            "ownerId": [
                10
            ],
            "name": [
                1
            ],
            "description": [
                1
            ],
            "createdAt": [
                12
            ],
            "updatedAt": [
                12
            ],
            "__typename": [
                1
            ]
        },
        "Leaderboards": {
            "edges": [
                175
            ],
            "nodes": [
                173
            ],
            "pageInfo": [
                8
            ],
            "totalCount": [
                17
            ],
            "__typename": [
                1
            ]
        },
        "LeaderboardEdge": {
            "cursor": [
                1
            ],
            "node": [
                173
            ],
            "__typename": [
                1
            ]
        },
        "LeaderboardSeason": {
            "id": [
                10
            ],
            "leaderboardId": [
                10
            ],
            "name": [
                1
            ],
            "start": [
                12
            ],
            "end": [
                12
            ],
            "startingScore": [
                17
            ],
            "createdAt": [
                12
            ],
            "updatedAt": [
                12
            ],
            "__typename": [
                1
            ]
        },
        "LeaderboardSeasons": {
            "edges": [
                178
            ],
            "nodes": [
                176
            ],
            "pageInfo": [
                8
            ],
            "totalCount": [
                17
            ],
            "__typename": [
                1
            ]
        },
        "LeaderboardSeasonEdge": {
            "cursor": [
                1
            ],
            "node": [
                176
            ],
            "__typename": [
                1
            ]
        },
        "LeaderboardSeasonBucket": {
            "id": [
                10
            ],
            "seasonId": [
                10
            ],
            "name": [
                1
            ],
            "minScore": [
                17
            ],
            "scoreCalculationType": [
                180
            ],
            "createdAt": [
                12
            ],
            "updatedAt": [
                12
            ],
            "__typename": [
                1
            ]
        },
        "LeaderboardScoreCalculationType": {},
        "LeaderboardSeasonBuckets": {
            "edges": [
                182
            ],
            "nodes": [
                179
            ],
            "pageInfo": [
                8
            ],
            "totalCount": [
                17
            ],
            "__typename": [
                1
            ]
        },
        "LeaderboardSeasonBucketEdge": {
            "cursor": [
                1
            ],
            "node": [
                179
            ],
            "__typename": [
                1
            ]
        },
        "EmailTemplate": {
            "id": [
                10
            ],
            "triggerEvent": [
                50
            ],
            "default": [
                4
            ],
            "name": [
                1
            ],
            "title": [
                1
            ],
            "contents": [
                1
            ],
            "createdAt": [
                12
            ],
            "updatedAt": [
                12
            ],
            "organizationId": [
                10
            ],
            "__typename": [
                1
            ]
        },
        "EmailTemplates": {
            "edges": [
                185
            ],
            "nodes": [
                183
            ],
            "pageInfo": [
                8
            ],
            "totalCount": [
                17
            ],
            "__typename": [
                1
            ]
        },
        "EmailTemplateEdge": {
            "cursor": [
                1
            ],
            "node": [
                183
            ],
            "__typename": [
                1
            ]
        },
        "IdentityProviderRequirements": {
            "requiredFields": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "PublicIdentityProvider": {
            "id": [
                10
            ],
            "name": [
                1
            ],
            "description": [
                1
            ],
            "icon": [
                1
            ],
            "availability": [
                188
            ],
            "requirements": [
                186
            ],
            "createdAt": [
                12
            ],
            "updatedAt": [
                12
            ],
            "__typename": [
                1
            ]
        },
        "IdentityProviderAvailability": {},
        "AppRelease": {
            "id": [
                10
            ],
            "appId": [
                10
            ],
            "version": [
                1
            ],
            "notes": [
                1
            ],
            "manifest": [
                117
            ],
            "status": [
                190
            ],
            "reviewResult": [
                135
            ],
            "createdAt": [
                12
            ],
            "updatedAt": [
                12
            ],
            "__typename": [
                1
            ]
        },
        "AppReleaseStatus": {},
        "OrganizationAppConfigMetadata": {
            "loginUrl": [
                1
            ],
            "consentUrl": [
                1
            ],
            "creatorId": [
                1
            ],
            "requiresConsent": [
                4
            ],
            "public": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "OrganizationAppConfig": {
            "name": [
                1
            ],
            "organizationId": [
                10
            ],
            "redirectUrls": [
                1
            ],
            "logoutRedirectUrls": [
                1
            ],
            "scope": [
                1
            ],
            "metadata": [
                191
            ],
            "__typename": [
                1
            ]
        },
        "OrganizationApp": {
            "id": [
                1
            ],
            "name": [
                1
            ],
            "description": [
                1
            ],
            "creatorId": [
                10
            ],
            "organizationId": [
                10
            ],
            "createdAt": [
                12
            ],
            "updatedAt": [
                12
            ],
            "secret": [
                1
            ],
            "public": [
                4
            ],
            "icon": [
                1
            ],
            "shortDescription": [
                1
            ],
            "configuration": [
                192
            ],
            "creator": [
                76
            ],
            "manifest": [
                117
            ],
            "releases": [
                189
            ],
            "appWebhooks": [
                196
            ],
            "__typename": [
                1
            ]
        },
        "OrganizationApps": {
            "edges": [
                195
            ],
            "nodes": [
                193
            ],
            "pageInfo": [
                8
            ],
            "totalCount": [
                17
            ],
            "__typename": [
                1
            ]
        },
        "OrganizationAppEdge": {
            "cursor": [
                1
            ],
            "node": [
                193
            ],
            "__typename": [
                1
            ]
        },
        "AppWebhook": {
            "id": [
                10
            ],
            "appId": [
                10
            ],
            "installationId": [
                10
            ],
            "organizationId": [
                10
            ],
            "url": [
                1
            ],
            "events": [
                1
            ],
            "active": [
                4
            ],
            "createdAt": [
                12
            ],
            "updatedAt": [
                12
            ],
            "secret": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "OrganizationAttachedApp": {
            "organizationId": [
                10
            ],
            "groupId": [
                10
            ],
            "appId": [
                1
            ],
            "permissions": [
                14
            ],
            "createdAt": [
                12
            ],
            "updatedAt": [
                12
            ],
            "app": [
                193
            ],
            "group": [
                9
            ],
            "__typename": [
                1
            ]
        },
        "OrganizationAttachedApps": {
            "edges": [
                199
            ],
            "nodes": [
                197
            ],
            "pageInfo": [
                8
            ],
            "totalCount": [
                17
            ],
            "__typename": [
                1
            ]
        },
        "OrganizationAttachedAppEdge": {
            "cursor": [
                1
            ],
            "node": [
                197
            ],
            "__typename": [
                1
            ]
        },
        "OrganizationIdentityProvider": {
            "enabled": [
                4
            ],
            "requiredForPlayerValidation": [
                4
            ],
            "allowLogin": [
                4
            ],
            "description": [
                1
            ],
            "icon": [
                1
            ],
            "id": [
                10
            ],
            "identityProviderId": [
                10
            ],
            "configuration": [
                201
            ],
            "name": [
                1
            ],
            "organizationId": [
                10
            ],
            "createdAt": [
                12
            ],
            "updatedAt": [
                12
            ],
            "parentIdentityProvider": [
                187
            ],
            "__typename": [
                1
            ]
        },
        "IdentityProviderConfigurations": {
            "on_OAuthClientConfiguration": [
                202
            ],
            "on_OpenidConfiguration": [
                205
            ],
            "__typename": [
                1
            ]
        },
        "OAuthClientConfiguration": {
            "authorizationEndpoint": [
                1
            ],
            "dataRetrievers": [
                7
            ],
            "issuer": [
                1
            ],
            "providerType": [
                203
            ],
            "clientId": [
                1
            ],
            "clientSecret": [
                1
            ],
            "tokenEndpointAuthMethod": [
                204
            ],
            "redirectUrl": [
                1
            ],
            "tokenEndpoint": [
                1
            ],
            "authorizationUrl": [
                1
            ],
            "linkRedirectUrl": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "IdentityProviderType": {},
        "OauthEndpointAuthMethod": {},
        "OpenidConfiguration": {
            "authorizationEndpoint": [
                1
            ],
            "dataRetrievers": [
                7
            ],
            "issuer": [
                1
            ],
            "providerType": [
                203
            ],
            "clientId": [
                1
            ],
            "clientSecret": [
                1
            ],
            "redirectUrl": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "Webhook": {
            "id": [
                10
            ],
            "organizationId": [
                10
            ],
            "events": [
                54
            ],
            "url": [
                1
            ],
            "description": [
                1
            ],
            "active": [
                4
            ],
            "secret": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "PlayerSkillRating": {
            "id": [
                10
            ],
            "playerProfileId": [
                10
            ],
            "ratingId": [
                10
            ],
            "value": [
                17
            ],
            "createdAt": [
                12
            ],
            "updatedAt": [
                12
            ],
            "player": [
                73
            ],
            "__typename": [
                1
            ]
        },
        "RuleEngineEngineTimingStats": {
            "conditionEvalMs": [
                17
            ],
            "actionExecMs": [
                17
            ],
            "totalMs": [
                17
            ],
            "__typename": [
                1
            ]
        },
        "RuleEngineConditionEvaluationResult": {
            "matched": [
                4
            ],
            "value": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "RuleEngineLuaExecutionErrorDetail": {
            "code": [
                1
            ],
            "message": [
                1
            ],
            "hint": [
                1
            ],
            "stackHint": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "RuleEngineManualOverrideContext": {
            "overriddenBy": [
                10
            ],
            "reason": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "RuleEngineAdvancementRuleFiredPayload": {
            "_typename": [
                1
            ],
            "ruleId": [
                10
            ],
            "ruleName": [
                1
            ],
            "ruleSetId": [
                10
            ],
            "ruleSetVersion": [
                80
            ],
            "triggerType": [
                213
            ],
            "triggerEventTypename": [
                1
            ],
            "triggerEventJson": [
                1
            ],
            "conditionSource": [
                1
            ],
            "conditionResult": [
                209
            ],
            "actionSource": [
                1
            ],
            "engineTiming": [
                208
            ],
            "printOutput": [
                1
            ],
            "printOutputTruncated": [
                4
            ],
            "error": [
                210
            ],
            "manualOverride": [
                211
            ],
            "__typename": [
                1
            ]
        },
        "RuleTriggerType": {},
        "RuleEngineCrossStepTransferredPayload": {
            "_typename": [
                1
            ],
            "sourceStepId": [
                10
            ],
            "targetStepId": [
                10
            ],
            "dataSource": [
                215
            ],
            "keyCount": [
                80
            ],
            "firstKeySamples": [
                1
            ],
            "engineTiming": [
                208
            ],
            "error": [
                210
            ],
            "__typename": [
                1
            ]
        },
        "CrossStepDataSource": {},
        "RuleEngineEffectAdvancePayload": {
            "_typename": [
                1
            ],
            "effectKind": [
                217
            ],
            "targetTeamId": [
                10
            ],
            "fromStepId": [
                10
            ],
            "toStepId": [
                10
            ],
            "beforeStatus": [
                218
            ],
            "afterStatus": [
                218
            ],
            "applied": [
                4
            ],
            "skipReason": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "JournalEffectKind": {},
        "TeamScopeStatus": {},
        "RuleEngineEffectCreateGroupPayload": {
            "_typename": [
                1
            ],
            "effectKind": [
                217
            ],
            "stepId": [
                10
            ],
            "groupId": [
                10
            ],
            "groupOrder": [
                80
            ],
            "applied": [
                4
            ],
            "skipReason": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "RuleEngineEffectEliminatePayload": {
            "_typename": [
                1
            ],
            "effectKind": [
                217
            ],
            "targetTeamId": [
                10
            ],
            "stepId": [
                10
            ],
            "beforeStatus": [
                218
            ],
            "afterStatus": [
                218
            ],
            "applied": [
                4
            ],
            "skipReason": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "RuleEngineEffectEmitSeedingPinPayload": {
            "_typename": [
                1
            ],
            "effectKind": [
                217
            ],
            "stepId": [
                10
            ],
            "groupId": [
                10
            ],
            "gameId": [
                10
            ],
            "slotIndex": [
                80
            ],
            "targetTeamId": [
                10
            ],
            "applied": [
                4
            ],
            "skipReason": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "RuleEngineEffectEndStepPayload": {
            "_typename": [
                1
            ],
            "effectKind": [
                217
            ],
            "stepId": [
                10
            ],
            "beforeStepStatus": [
                223
            ],
            "afterStepStatus": [
                223
            ],
            "applied": [
                4
            ],
            "skipReason": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "StepStatus": {},
        "RuleEngineEffectSetMetadataPayload": {
            "_typename": [
                1
            ],
            "effectKind": [
                217
            ],
            "targetType": [
                225
            ],
            "targetId": [
                10
            ],
            "key": [
                1
            ],
            "beforeValueJson": [
                1
            ],
            "afterValueJson": [
                1
            ],
            "applied": [
                4
            ],
            "skipReason": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "MetadataObjectType": {},
        "RuleEngineGenerationScriptRanPayload": {
            "_typename": [
                1
            ],
            "stepId": [
                10
            ],
            "script": [
                1
            ],
            "engineTiming": [
                208
            ],
            "printOutput": [
                1
            ],
            "printOutputTruncated": [
                4
            ],
            "error": [
                210
            ],
            "__typename": [
                1
            ]
        },
        "RuleEngineManualOverridePayload": {
            "_typename": [
                1
            ],
            "ruleId": [
                10
            ],
            "overriddenBy": [
                10
            ],
            "reason": [
                1
            ],
            "effect": [
                228
            ],
            "__typename": [
                1
            ]
        },
        "ManualOverrideEffect": {},
        "LeaderboardFeedReconcileFailedPayload": {
            "_typename": [
                1
            ],
            "feedId": [
                10
            ],
            "sourceKey": [
                1
            ],
            "errorMessage": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "OpenPoolJournalScoreRow": {
            "tournamentTeamId": [
                10
            ],
            "score": [
                17
            ],
            "isWinner": [
                4
            ],
            "isForfeited": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "TournamentOpenPoolMatchCorrectedPayload": {
            "_typename": [
                1
            ],
            "tournamentId": [
                10
            ],
            "stepId": [
                10
            ],
            "groupId": [
                10
            ],
            "matchId": [
                10
            ],
            "gameId": [
                10
            ],
            "previousScores": [
                230
            ],
            "scores": [
                230
            ],
            "__typename": [
                1
            ]
        },
        "TournamentOpenPoolMatchCancelledPayload": {
            "_typename": [
                1
            ],
            "tournamentId": [
                10
            ],
            "stepId": [
                10
            ],
            "groupId": [
                10
            ],
            "matchId": [
                10
            ],
            "gameId": [
                10
            ],
            "previousScores": [
                230
            ],
            "scores": [
                230
            ],
            "wasEnded": [
                4
            ],
            "cancelReason": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "TournamentOpenPoolClosedPayload": {
            "_typename": [
                1
            ],
            "tournamentId": [
                10
            ],
            "stepId": [
                10
            ],
            "cancelledMatchCount": [
                80
            ],
            "__typename": [
                1
            ]
        },
        "TournamentOpenPoolReopenedPayload": {
            "_typename": [
                1
            ],
            "tournamentId": [
                10
            ],
            "stepId": [
                10
            ],
            "__typename": [
                1
            ]
        },
        "TournamentsStepResetCascadeInfo": {
            "affectedSteps": [
                80
            ],
            "affectedTeams": [
                80
            ],
            "__typename": [
                1
            ]
        },
        "TournamentsStepResetPayload": {
            "_typename": [
                1
            ],
            "stepId": [
                10
            ],
            "previousStatus": [
                223
            ],
            "newStatus": [
                223
            ],
            "reason": [
                1
            ],
            "cascade": [
                235
            ],
            "__typename": [
                1
            ]
        },
        "TournamentsStepGeneratedPayload": {
            "_typename": [
                1
            ],
            "stepId": [
                10
            ],
            "ruleSetId": [
                10
            ],
            "groupCount": [
                80
            ],
            "gameCount": [
                80
            ],
            "seededTeamCount": [
                80
            ],
            "engineTimingMs": [
                17
            ],
            "__typename": [
                1
            ]
        },
        "SeedingPin": {
            "teamId": [
                10
            ],
            "groupId": [
                10
            ],
            "gameId": [
                10
            ],
            "slotIndex": [
                80
            ],
            "__typename": [
                1
            ]
        },
        "TournamentStepGroupRoundGameMatch": {
            "id": [
                10
            ],
            "order": [
                17
            ],
            "status": [
                240
            ],
            "tournamentStepGroupRoundGameId": [
                10
            ],
            "configuration": [
                26
            ],
            "createdAt": [
                12
            ],
            "updatedAt": [
                12
            ],
            "__typename": [
                1
            ]
        },
        "MatchStatus": {},
        "TournamentStepGroupRoundGameMatches": {
            "edges": [
                242
            ],
            "nodes": [
                239
            ],
            "pageInfo": [
                8
            ],
            "totalCount": [
                17
            ],
            "__typename": [
                1
            ]
        },
        "TournamentStepGroupRoundGameMatchEdge": {
            "cursor": [
                1
            ],
            "node": [
                239
            ],
            "__typename": [
                1
            ]
        },
        "OrganizationPaymentCollectionConfiguration": {
            "wellPlayedFeePercent": [
                17
            ],
            "wellPlayedMinimalFee": [
                17
            ],
            "__typename": [
                1
            ]
        },
        "TournamentTeamMemberDto": {
            "id": [
                10
            ],
            "status": [
                245
            ],
            "tournamentTeamId": [
                10
            ],
            "playerProfileId": [
                10
            ],
            "createdAt": [
                12
            ],
            "updatedAt": [
                12
            ],
            "team": [
                248
            ],
            "__typename": [
                1
            ]
        },
        "TournamentTeamMemberStatus": {},
        "TeamMembers": {
            "edges": [
                247
            ],
            "nodes": [
                244
            ],
            "pageInfo": [
                8
            ],
            "totalCount": [
                17
            ],
            "__typename": [
                1
            ]
        },
        "TournamentTeamMemberEdge": {
            "cursor": [
                1
            ],
            "node": [
                244
            ],
            "__typename": [
                1
            ]
        },
        "TournamentTeam": {
            "id": [
                10
            ],
            "name": [
                1
            ],
            "tag": [
                1
            ],
            "teamId": [
                10
            ],
            "managerId": [
                10
            ],
            "tournamentId": [
                10
            ],
            "status": [
                60
            ],
            "withdrawnAt": [
                12
            ],
            "createdAt": [
                12
            ],
            "updatedAt": [
                12
            ],
            "members": [
                244
            ],
            "eventReservationId": [
                10
            ],
            "customFields": [
                23,
                {
                    "properties": [
                        1,
                        "[String!]"
                    ]
                }
            ],
            "tournament": [
                58
            ],
            "__typename": [
                1
            ]
        },
        "TournamentTeams": {
            "edges": [
                250
            ],
            "nodes": [
                248
            ],
            "pageInfo": [
                8
            ],
            "totalCount": [
                17
            ],
            "__typename": [
                1
            ]
        },
        "TournamentTeamEdge": {
            "cursor": [
                1
            ],
            "node": [
                248
            ],
            "__typename": [
                1
            ]
        },
        "TournamentTeamScore": {
            "teamId": [
                10
            ],
            "score": [
                17
            ],
            "team": [
                248
            ],
            "__typename": [
                1
            ]
        },
        "TournamentStep": {
            "id": [
                10
            ],
            "tournamentId": [
                10
            ],
            "name": [
                1
            ],
            "description": [
                1
            ],
            "order": [
                17
            ],
            "type": [
                253
            ],
            "status": [
                223
            ],
            "configuration": [
                31
            ],
            "seedingOrder": [
                10
            ],
            "createdAt": [
                12
            ],
            "updatedAt": [
                12
            ],
            "teamScores": [
                251
            ],
            "tournament": [
                58
            ],
            "manualPins": [
                238
            ],
            "__typename": [
                1
            ]
        },
        "StepType": {},
        "Tournaments": {
            "edges": [
                255
            ],
            "nodes": [
                58
            ],
            "pageInfo": [
                8
            ],
            "totalCount": [
                17
            ],
            "__typename": [
                1
            ]
        },
        "TournamentEdge": {
            "cursor": [
                1
            ],
            "node": [
                58
            ],
            "__typename": [
                1
            ]
        },
        "TournamentStepGroupRoundGame": {
            "id": [
                10
            ],
            "configuration": [
                27
            ],
            "status": [
                257
            ],
            "order": [
                17
            ],
            "tournamentStepGroupRoundId": [
                10
            ],
            "createdAt": [
                12
            ],
            "updatedAt": [
                12
            ],
            "matches": [
                239
            ],
            "gameLinks": [
                260
            ],
            "winningGameId": [
                10
            ],
            "losingGameId": [
                10
            ],
            "__typename": [
                1
            ]
        },
        "TournamentGameStatus": {},
        "TournamentStepGroupRound": {
            "id": [
                10
            ],
            "name": [
                1
            ],
            "configuration": [
                29
            ],
            "tournamentStepGroupId": [
                10
            ],
            "order": [
                17
            ],
            "createdAt": [
                12
            ],
            "updatedAt": [
                12
            ],
            "games": [
                256
            ],
            "__typename": [
                1
            ]
        },
        "TournamentStepGroup": {
            "id": [
                10
            ],
            "name": [
                1
            ],
            "description": [
                1
            ],
            "configuration": [
                30
            ],
            "tournamentStepId": [
                10
            ],
            "createdAt": [
                12
            ],
            "updatedAt": [
                12
            ],
            "order": [
                17
            ],
            "rounds": [
                258
            ],
            "__typename": [
                1
            ]
        },
        "GameLink": {
            "id": [
                10
            ],
            "sourceGameId": [
                10
            ],
            "targetGameId": [
                10
            ],
            "outcome": [
                261
            ],
            "__typename": [
                1
            ]
        },
        "GameLinkOutcome": {},
        "TournamentStepGroupRoundGameMatchScore": {
            "id": [
                10
            ],
            "matchId": [
                10
            ],
            "teamId": [
                10
            ],
            "score": [
                17
            ],
            "status": [
                263
            ],
            "createdAt": [
                12
            ],
            "updatedAt": [
                12
            ],
            "__typename": [
                1
            ]
        },
        "MatchScoreStatus": {},
        "TournamentStepGroupRoundGameMatchScores": {
            "edges": [
                265
            ],
            "nodes": [
                262
            ],
            "pageInfo": [
                8
            ],
            "totalCount": [
                17
            ],
            "__typename": [
                1
            ]
        },
        "TournamentStepGroupRoundGameMatchScoreEdge": {
            "cursor": [
                1
            ],
            "node": [
                262
            ],
            "__typename": [
                1
            ]
        },
        "TournamentAdmin": {
            "id": [
                10
            ],
            "tournamentId": [
                10
            ],
            "accountId": [
                10
            ],
            "permissions": [
                267
            ],
            "createdAt": [
                12
            ],
            "updatedAt": [
                12
            ],
            "account": [
                76
            ],
            "__typename": [
                1
            ]
        },
        "TournamentAdminPermissions": {},
        "RuleActionModel": {
            "type": [
                269
            ],
            "script": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "RuleActionType": {},
        "AdvancementRuleModel": {
            "id": [
                10
            ],
            "name": [
                1
            ],
            "description": [
                1
            ],
            "order": [
                80
            ],
            "triggerType": [
                213
            ],
            "triggerScope": [
                1
            ],
            "condition": [
                1
            ],
            "actions": [
                268
            ],
            "autoExecute": [
                4
            ],
            "allowManualOverride": [
                4
            ],
            "enabled": [
                4
            ],
            "purpose": [
                271
            ],
            "createdAt": [
                12
            ],
            "updatedAt": [
                12
            ],
            "__typename": [
                1
            ]
        },
        "AdvancementRulePurpose": {},
        "TiebreakerRuleModel": {
            "id": [
                10
            ],
            "order": [
                80
            ],
            "type": [
                273
            ],
            "formula": [
                1
            ],
            "sortOrder": [
                274
            ],
            "__typename": [
                1
            ]
        },
        "TiebreakerType": {},
        "SortOrder": {},
        "ScoringRuleSetModel": {
            "id": [
                10
            ],
            "aggregation": [
                276
            ],
            "formula": [
                1
            ],
            "winPoints": [
                80
            ],
            "lossPoints": [
                80
            ],
            "drawPoints": [
                80
            ],
            "forfeitPoints": [
                80
            ],
            "tiebreakers": [
                272
            ],
            "__typename": [
                1
            ]
        },
        "ScoreAggregationType": {},
        "GameTemplateModel": {
            "id": [
                10
            ],
            "order": [
                80
            ],
            "teamSlots": [
                80
            ],
            "bestOf": [
                80
            ],
            "onWinTarget": [
                1
            ],
            "onWinSourceSlot": [
                80
            ],
            "onWinTargetSlot": [
                80
            ],
            "onLossTarget": [
                1
            ],
            "onLossSourceSlot": [
                80
            ],
            "onLossTargetSlot": [
                80
            ],
            "__typename": [
                1
            ]
        },
        "RoundTemplateModel": {
            "id": [
                10
            ],
            "name": [
                1
            ],
            "order": [
                80
            ],
            "gameTemplates": [
                277
            ],
            "__typename": [
                1
            ]
        },
        "GroupTemplateModel": {
            "id": [
                10
            ],
            "name": [
                1
            ],
            "description": [
                1
            ],
            "order": [
                80
            ],
            "teamSlotsExpr": [
                1
            ],
            "generationScript": [
                1
            ],
            "bestOfExpr": [
                1
            ],
            "teamSlotsPerGameExpr": [
                1
            ],
            "roundCountExpr": [
                1
            ],
            "roundTemplates": [
                278
            ],
            "__typename": [
                1
            ]
        },
        "StructureTemplateModel": {
            "id": [
                10
            ],
            "groupTemplates": [
                279
            ],
            "__typename": [
                1
            ]
        },
        "CrossStepUsageModel": {
            "type": [
                282
            ],
            "condition": [
                1
            ],
            "formula": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "CrossStepUsageType": {},
        "CrossStepRuleModel": {
            "id": [
                10
            ],
            "sourceStepId": [
                10
            ],
            "sourceRelative": [
                284
            ],
            "dataSource": [
                215
            ],
            "usage": [
                281
            ],
            "__typename": [
                1
            ]
        },
        "StepRelativePosition": {},
        "StepRuleSetModel": {
            "id": [
                10
            ],
            "version": [
                80
            ],
            "presetName": [
                1
            ],
            "teamCount": [
                80
            ],
            "validated": [
                4
            ],
            "validatedAt": [
                12
            ],
            "scoringRuleSet": [
                275
            ],
            "advancementRules": [
                270
            ],
            "crossStepRules": [
                283
            ],
            "structureTemplate": [
                280
            ],
            "createdAt": [
                12
            ],
            "updatedAt": [
                12
            ],
            "__typename": [
                1
            ]
        },
        "PresetParameterModel": {
            "name": [
                1
            ],
            "type": [
                287
            ],
            "required": [
                4
            ],
            "defaultValue": [
                1
            ],
            "description": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "PresetParameterType": {},
        "PresetScriptModel": {
            "id": [
                10
            ],
            "name": [
                1
            ],
            "description": [
                1
            ],
            "script": [
                1
            ],
            "parameters": [
                286
            ],
            "createdAt": [
                12
            ],
            "updatedAt": [
                12
            ],
            "__typename": [
                1
            ]
        },
        "BuiltinPresetModel": {
            "id": [
                1
            ],
            "displayName": [
                1
            ],
            "description": [
                1
            ],
            "category": [
                290
            ],
            "parameters": [
                286
            ],
            "source": [
                1
            ],
            "supportsPinning": [
                4
            ],
            "supportsGroupPinning": [
                4
            ],
            "supportsSlotPinning": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "BuiltinPresetCategory": {},
        "SourceSnippetLineModel": {
            "lineNumber": [
                80
            ],
            "source": [
                1
            ],
            "isErrorLine": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "ScriptStackFrameModel": {
            "phase": [
                293
            ],
            "line": [
                80
            ],
            "helperName": [
                1
            ],
            "description": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "ScriptErrorPhase": {},
        "ScriptErrorModel": {
            "line": [
                80
            ],
            "column": [
                80
            ],
            "message": [
                1
            ],
            "code": [
                295
            ],
            "phase": [
                293
            ],
            "originHelper": [
                1
            ],
            "hint": [
                1
            ],
            "snippet": [
                291
            ],
            "stackFrames": [
                292
            ],
            "__typename": [
                1
            ]
        },
        "ScriptErrorCode": {},
        "ScriptWarningModel": {
            "line": [
                80
            ],
            "column": [
                80
            ],
            "message": [
                1
            ],
            "code": [
                297
            ],
            "__typename": [
                1
            ]
        },
        "ScriptWarningCode": {},
        "ScriptValidationResultModel": {
            "valid": [
                4
            ],
            "errors": [
                294
            ],
            "warnings": [
                296
            ],
            "__typename": [
                1
            ]
        },
        "SimulatedEffectModel": {
            "type": [
                300
            ],
            "description": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "SimulatedEffectType": {},
        "ScriptSimulationResultModel": {
            "success": [
                4
            ],
            "errors": [
                294
            ],
            "warnings": [
                296
            ],
            "effectsSummary": [
                299
            ],
            "partialEffectsSummary": [
                299
            ],
            "executionTimeMs": [
                80
            ],
            "instructionsUsed": [
                80
            ],
            "__typename": [
                1
            ]
        },
        "LuaErrorDetailModel": {
            "scriptContextType": [
                303
            ],
            "script": [
                1
            ],
            "line": [
                80
            ],
            "column": [
                80
            ],
            "message": [
                1
            ],
            "stack": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "ScriptContextType": {},
        "ValidationErrorModel": {
            "id": [
                10
            ],
            "code": [
                305
            ],
            "message": [
                1
            ],
            "hint": [
                1
            ],
            "invariantCode": [
                306
            ],
            "luaError": [
                302
            ],
            "offender": [
                307
            ],
            "__typename": [
                1
            ]
        },
        "ValidationErrorCode": {},
        "InvariantCode": {},
        "InvariantOffenderUnion": {
            "on_RuleOffenderModel": [
                308
            ],
            "on_CrossStepRuleOffenderModel": [
                310
            ],
            "on_GameOffenderModel": [
                311
            ],
            "on_RoundOffenderModel": [
                313
            ],
            "on_GroupOffenderModel": [
                314
            ],
            "on_TeamOffenderModel": [
                315
            ],
            "on_ScoreRowOffenderModel": [
                316
            ],
            "__typename": [
                1
            ]
        },
        "RuleOffenderModel": {
            "kind": [
                309
            ],
            "ruleId": [
                10
            ],
            "ruleName": [
                1
            ],
            "trigger": [
                213
            ],
            "__typename": [
                1
            ]
        },
        "OffenderKind": {},
        "CrossStepRuleOffenderModel": {
            "kind": [
                309
            ],
            "crossStepRuleId": [
                10
            ],
            "dataSource": [
                215
            ],
            "usage": [
                282
            ],
            "__typename": [
                1
            ]
        },
        "GameOffenderModel": {
            "kind": [
                309
            ],
            "gameId": [
                10
            ],
            "groupIndex": [
                80
            ],
            "roundIndex": [
                80
            ],
            "gameIndex": [
                80
            ],
            "status": [
                312
            ],
            "__typename": [
                1
            ]
        },
        "GameStatus": {},
        "RoundOffenderModel": {
            "kind": [
                309
            ],
            "roundId": [
                10
            ],
            "groupIndex": [
                80
            ],
            "roundIndex": [
                80
            ],
            "__typename": [
                1
            ]
        },
        "GroupOffenderModel": {
            "kind": [
                309
            ],
            "groupId": [
                10
            ],
            "groupIndex": [
                80
            ],
            "groupName": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "TeamOffenderModel": {
            "kind": [
                309
            ],
            "teamId": [
                10
            ],
            "teamName": [
                1
            ],
            "currentStatus": [
                218
            ],
            "__typename": [
                1
            ]
        },
        "ScoreRowOffenderModel": {
            "kind": [
                309
            ],
            "scope": [
                317
            ],
            "scoreRowId": [
                10
            ],
            "teamId": [
                10
            ],
            "score": [
                17
            ],
            "rank": [
                80
            ],
            "status": [
                218
            ],
            "__typename": [
                1
            ]
        },
        "ScoreRowScope": {},
        "InvariantResultModel": {
            "code": [
                306
            ],
            "severity": [
                319
            ],
            "passed": [
                4
            ],
            "message": [
                1
            ],
            "offenders": [
                307
            ],
            "__typename": [
                1
            ]
        },
        "InvariantSeverity": {},
        "RuleFireSummaryModel": {
            "ruleId": [
                10
            ],
            "ruleName": [
                1
            ],
            "trigger": [
                213
            ],
            "fireCount": [
                80
            ],
            "__typename": [
                1
            ]
        },
        "ValidationResultModel": {
            "success": [
                4
            ],
            "durationMs": [
                80
            ],
            "totalMutations": [
                80
            ],
            "invariantResults": [
                318
            ],
            "errors": [
                304
            ],
            "ruleFiredSummary": [
                320
            ],
            "__typename": [
                1
            ]
        },
        "ValidationProgressModel": {
            "stage": [
                323
            ],
            "percent": [
                17
            ],
            "currentPhaseDetail": [
                1
            ],
            "rulesFired": [
                80
            ],
            "totalRulesDeclared": [
                80
            ],
            "totalMutations": [
                80
            ],
            "elapsedMs": [
                80
            ],
            "__typename": [
                1
            ]
        },
        "ValidationStage": {},
        "ValidationJobModel": {
            "id": [
                10
            ],
            "stepRuleSetId": [
                10
            ],
            "status": [
                325
            ],
            "stage": [
                323
            ],
            "progress": [
                322
            ],
            "result": [
                321
            ],
            "errorSummary": [
                1
            ],
            "startedAt": [
                12
            ],
            "completedAt": [
                12
            ],
            "__typename": [
                1
            ]
        },
        "ValidationJobStatus": {},
        "ValidationEventModel": {
            "id": [
                10
            ],
            "jobId": [
                10
            ],
            "sequence": [
                80
            ],
            "timestamp": [
                12
            ],
            "kind": [
                327
            ],
            "summary": [
                1
            ],
            "ruleId": [
                10
            ],
            "crossStepRuleId": [
                10
            ],
            "matchId": [
                10
            ],
            "gameId": [
                10
            ],
            "roundId": [
                10
            ],
            "groupId": [
                10
            ],
            "stepId": [
                10
            ],
            "teamId": [
                10
            ],
            "effectType": [
                328
            ],
            "statusBefore": [
                329
            ],
            "statusAfter": [
                329
            ],
            "__typename": [
                1
            ]
        },
        "ValidationEventKind": {},
        "ValidationEffectType": {},
        "ValidationStatus": {},
        "ValidationJobs": {
            "edges": [
                331
            ],
            "nodes": [
                324
            ],
            "pageInfo": [
                8
            ],
            "totalCount": [
                17
            ],
            "__typename": [
                1
            ]
        },
        "ValidationJobModelEdge": {
            "cursor": [
                1
            ],
            "node": [
                324
            ],
            "__typename": [
                1
            ]
        },
        "ValidationEvents": {
            "edges": [
                333
            ],
            "nodes": [
                326
            ],
            "pageInfo": [
                8
            ],
            "totalCount": [
                17
            ],
            "__typename": [
                1
            ]
        },
        "ValidationEventModelEdge": {
            "cursor": [
                1
            ],
            "node": [
                326
            ],
            "__typename": [
                1
            ]
        },
        "Currency": {
            "id": [
                10
            ],
            "symbol": [
                1
            ],
            "name": [
                1
            ],
            "externalId": [
                1
            ],
            "description": [
                1
            ],
            "hidden": [
                4
            ],
            "organizationId": [
                10
            ],
            "createdAt": [
                12
            ],
            "updatedAt": [
                12
            ],
            "metadata": [
                24
            ],
            "__typename": [
                1
            ]
        },
        "Currencies": {
            "edges": [
                336
            ],
            "nodes": [
                334
            ],
            "pageInfo": [
                8
            ],
            "totalCount": [
                17
            ],
            "__typename": [
                1
            ]
        },
        "CurrencyEdge": {
            "cursor": [
                1
            ],
            "node": [
                334
            ],
            "__typename": [
                1
            ]
        },
        "PlayerCurrency": {
            "id": [
                10
            ],
            "playerProfileId": [
                10
            ],
            "currencyId": [
                10
            ],
            "balance": [
                17
            ],
            "createdAt": [
                12
            ],
            "updatedAt": [
                12
            ],
            "__typename": [
                1
            ]
        },
        "PlayerCurrencies": {
            "edges": [
                339
            ],
            "nodes": [
                337
            ],
            "pageInfo": [
                8
            ],
            "totalCount": [
                17
            ],
            "__typename": [
                1
            ]
        },
        "PlayerCurrencyEdge": {
            "cursor": [
                1
            ],
            "node": [
                337
            ],
            "__typename": [
                1
            ]
        },
        "RegistrationSeries": {
            "id": [
                10
            ],
            "name": [
                1
            ],
            "maxActiveRegistrations": [
                80
            ],
            "maxActiveWaitlistEntries": [
                80
            ],
            "allowWaitlistWhileRegistered": [
                4
            ],
            "leaveWaitlistsOnRegistration": [
                4
            ],
            "releasePolicy": [
                341
            ],
            "createdAt": [
                12
            ],
            "updatedAt": [
                12
            ],
            "__typename": [
                1
            ]
        },
        "RegistrationSeriesReleasePolicy": {},
        "RegistrationSeriesPage": {
            "edges": [
                343
            ],
            "nodes": [
                340
            ],
            "pageInfo": [
                8
            ],
            "totalCount": [
                17
            ],
            "__typename": [
                1
            ]
        },
        "RegistrationSeriesEdge": {
            "cursor": [
                1
            ],
            "node": [
                340
            ],
            "__typename": [
                1
            ]
        },
        "RegistrationSeriesEntry": {
            "kind": [
                345
            ],
            "status": [
                1
            ],
            "isManager": [
                4
            ],
            "eventId": [
                10
            ],
            "ticketConfigurationId": [
                10
            ],
            "reservationId": [
                10
            ],
            "waitlistEntryId": [
                10
            ],
            "tournamentId": [
                10
            ],
            "tournamentTeamId": [
                10
            ],
            "startsAt": [
                12
            ],
            "endsAt": [
                12
            ],
            "__typename": [
                1
            ]
        },
        "RegistrationSeriesEntryKind": {},
        "UserGroupConfiguration": {
            "maxSize": [
                80
            ],
            "minSize": [
                80
            ],
            "nameMinLength": [
                80
            ],
            "nameMaxLength": [
                80
            ],
            "__typename": [
                1
            ]
        },
        "UserGroupMember": {
            "id": [
                10
            ],
            "groupId": [
                10
            ],
            "playerProfileId": [
                10
            ],
            "status": [
                348
            ],
            "createdAt": [
                12
            ],
            "updatedAt": [
                12
            ],
            "__typename": [
                1
            ]
        },
        "UserGroupMemberStatus": {},
        "UserGroup": {
            "id": [
                10
            ],
            "organizationId": [
                10
            ],
            "managerId": [
                10
            ],
            "createdAt": [
                12
            ],
            "updatedAt": [
                12
            ],
            "status": [
                350
            ],
            "locked": [
                4
            ],
            "name": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "UserGroupStatus": {},
        "UserGroups": {
            "edges": [
                352
            ],
            "nodes": [
                349
            ],
            "pageInfo": [
                8
            ],
            "totalCount": [
                17
            ],
            "__typename": [
                1
            ]
        },
        "UserGroupEdge": {
            "cursor": [
                1
            ],
            "node": [
                349
            ],
            "__typename": [
                1
            ]
        },
        "UserGroupMembers": {
            "edges": [
                354
            ],
            "nodes": [
                347
            ],
            "pageInfo": [
                8
            ],
            "totalCount": [
                17
            ],
            "__typename": [
                1
            ]
        },
        "UserGroupMemberEdge": {
            "cursor": [
                1
            ],
            "node": [
                347
            ],
            "__typename": [
                1
            ]
        },
        "Position": {
            "x": [
                17
            ],
            "y": [
                17
            ],
            "__typename": [
                1
            ]
        },
        "EventVenueSeatConfiguration": {
            "size": [
                17
            ],
            "svgUrl": [
                1
            ],
            "position": [
                355
            ],
            "__typename": [
                1
            ]
        },
        "EventVenueSeat": {
            "id": [
                10
            ],
            "name": [
                1
            ],
            "createdAt": [
                12
            ],
            "updatedAt": [
                12
            ],
            "configuration": [
                356
            ],
            "seatTypeId": [
                10
            ],
            "__typename": [
                1
            ]
        },
        "EventVenueSeatsUpdateResult": {
            "updatedSeats": [
                357
            ],
            "createdSeats": [
                357
            ],
            "deletedSeats": [
                357
            ],
            "__typename": [
                1
            ]
        },
        "EventVenueSeats": {
            "edges": [
                360
            ],
            "nodes": [
                357
            ],
            "pageInfo": [
                8
            ],
            "totalCount": [
                17
            ],
            "__typename": [
                1
            ]
        },
        "EventVenueSeatEdge": {
            "cursor": [
                1
            ],
            "node": [
                357
            ],
            "__typename": [
                1
            ]
        },
        "EventReservationTicketConfiguration": {
            "customFields": [
                23
            ],
            "__typename": [
                1
            ]
        },
        "EventReservationTicket": {
            "id": [
                10
            ],
            "ticketId": [
                10
            ],
            "reservationId": [
                10
            ],
            "groupMemberId": [
                10
            ],
            "seatId": [
                10
            ],
            "createdAt": [
                12
            ],
            "updatedAt": [
                12
            ],
            "configuration": [
                361
            ],
            "__typename": [
                1
            ]
        },
        "EventReservationTicketWithQrCode": {
            "id": [
                10
            ],
            "ticketId": [
                10
            ],
            "reservationId": [
                10
            ],
            "groupMemberId": [
                10
            ],
            "seatId": [
                10
            ],
            "createdAt": [
                12
            ],
            "updatedAt": [
                12
            ],
            "configuration": [
                361
            ],
            "qrCode": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "EventReservation": {
            "id": [
                10
            ],
            "name": [
                1
            ],
            "status": [
                365
            ],
            "sessionValidUntil": [
                12
            ],
            "createdAt": [
                12
            ],
            "updatedAt": [
                12
            ],
            "eventId": [
                10
            ],
            "groupId": [
                10
            ],
            "tickets": [
                362
            ],
            "groupStatus": [
                350
            ],
            "replacesReservationId": [
                10
            ],
            "tournamentTeamIds": [
                10
            ],
            "__typename": [
                1
            ]
        },
        "EventReservationStatus": {},
        "EventReservationWithTicketsAndQrCode": {
            "id": [
                10
            ],
            "name": [
                1
            ],
            "status": [
                365
            ],
            "sessionValidUntil": [
                12
            ],
            "createdAt": [
                12
            ],
            "updatedAt": [
                12
            ],
            "eventId": [
                10
            ],
            "groupId": [
                10
            ],
            "groupStatus": [
                350
            ],
            "replacesReservationId": [
                10
            ],
            "tickets": [
                363
            ],
            "__typename": [
                1
            ]
        },
        "EventReservations": {
            "edges": [
                368
            ],
            "nodes": [
                369
            ],
            "pageInfo": [
                8
            ],
            "totalCount": [
                17
            ],
            "__typename": [
                1
            ]
        },
        "OmitObjectTypeEdge": {
            "cursor": [
                1
            ],
            "node": [
                369
            ],
            "__typename": [
                1
            ]
        },
        "OmitObjectType": {
            "id": [
                10
            ],
            "name": [
                1
            ],
            "status": [
                365
            ],
            "sessionValidUntil": [
                12
            ],
            "createdAt": [
                12
            ],
            "updatedAt": [
                12
            ],
            "eventId": [
                10
            ],
            "groupId": [
                10
            ],
            "groupStatus": [
                350
            ],
            "replacesReservationId": [
                10
            ],
            "__typename": [
                1
            ]
        },
        "EventReservationValidateAndPay": {
            "paymentUrl": [
                1
            ],
            "clientSecret": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "EventSeat": {
            "id": [
                10
            ],
            "name": [
                1
            ],
            "createdAt": [
                12
            ],
            "updatedAt": [
                12
            ],
            "configuration": [
                356
            ],
            "seatTypeId": [
                10
            ],
            "status": [
                372
            ],
            "reservedByTicketId": [
                10
            ],
            "reservedByReservationId": [
                10
            ],
            "reservedByGroupMemberId": [
                10
            ],
            "__typename": [
                1
            ]
        },
        "EventSeatStatus": {},
        "EventSeats": {
            "edges": [
                374
            ],
            "nodes": [
                371
            ],
            "pageInfo": [
                8
            ],
            "totalCount": [
                17
            ],
            "__typename": [
                1
            ]
        },
        "EventSeatEdge": {
            "cursor": [
                1
            ],
            "node": [
                371
            ],
            "__typename": [
                1
            ]
        },
        "EventWaitlistConfiguration": {
            "enabled": [
                4
            ],
            "offerDurationSeconds": [
                80
            ],
            "sameDayOfferDurationSeconds": [
                80
            ],
            "maxQuantity": [
                80
            ],
            "__typename": [
                1
            ]
        },
        "EventSelfServiceConfiguration": {
            "allowCancel": [
                4
            ],
            "allowChange": [
                4
            ],
            "cutoffSeconds": [
                80
            ],
            "changeScope": [
                377
            ],
            "__typename": [
                1
            ]
        },
        "EventReservationChangeScope": {},
        "EventConfiguration": {
            "customFields": [
                19
            ],
            "groupConfiguration": [
                346
            ],
            "maxTicketsPerReservation": [
                17
            ],
            "reservationStatusAfterPayment": [
                379
            ],
            "reservationStatusAfterRegistration": [
                380
            ],
            "sessionDuration": [
                17
            ],
            "allowForNewSessionAfterTimeout": [
                4
            ],
            "seatAssignmentMode": [
                381
            ],
            "allowForMoreTicketsThanGroupMembers": [
                4
            ],
            "waitlist": [
                375
            ],
            "selfService": [
                376
            ],
            "__typename": [
                1
            ]
        },
        "EventReservationStatusAfterPayment": {},
        "EventReservationStatusAfterRegistration": {},
        "SeatAssignmentMode": {},
        "Event": {
            "id": [
                10
            ],
            "title": [
                1
            ],
            "description": [
                1
            ],
            "createdAt": [
                12
            ],
            "updatedAt": [
                12
            ],
            "startAt": [
                12
            ],
            "endAt": [
                12
            ],
            "startRegistrationsAt": [
                12
            ],
            "endRegistrationsAt": [
                12
            ],
            "visibleAt": [
                12
            ],
            "configuration": [
                378
            ],
            "eventVenueId": [
                10
            ],
            "organizationId": [
                10
            ],
            "createdById": [
                10
            ],
            "tournamentId": [
                10
            ],
            "registrationSeriesId": [
                10
            ],
            "decryptionKey": [
                1
            ],
            "venue": [
                398
            ],
            "__typename": [
                1
            ]
        },
        "EventInterface": {
            "id": [
                10
            ],
            "title": [
                1
            ],
            "description": [
                1
            ],
            "createdAt": [
                12
            ],
            "updatedAt": [
                12
            ],
            "startAt": [
                12
            ],
            "endAt": [
                12
            ],
            "startRegistrationsAt": [
                12
            ],
            "endRegistrationsAt": [
                12
            ],
            "visibleAt": [
                12
            ],
            "configuration": [
                378
            ],
            "eventVenueId": [
                10
            ],
            "organizationId": [
                10
            ],
            "createdById": [
                10
            ],
            "tournamentId": [
                10
            ],
            "registrationSeriesId": [
                10
            ],
            "decryptionKey": [
                1
            ],
            "venue": [
                398
            ],
            "on_Event": [
                382
            ],
            "on_EventWithUserReservation": [
                384
            ],
            "__typename": [
                1
            ]
        },
        "EventWithUserReservation": {
            "id": [
                10
            ],
            "title": [
                1
            ],
            "description": [
                1
            ],
            "createdAt": [
                12
            ],
            "updatedAt": [
                12
            ],
            "startAt": [
                12
            ],
            "endAt": [
                12
            ],
            "startRegistrationsAt": [
                12
            ],
            "endRegistrationsAt": [
                12
            ],
            "visibleAt": [
                12
            ],
            "configuration": [
                378
            ],
            "eventVenueId": [
                10
            ],
            "organizationId": [
                10
            ],
            "createdById": [
                10
            ],
            "tournamentId": [
                10
            ],
            "registrationSeriesId": [
                10
            ],
            "decryptionKey": [
                1
            ],
            "venue": [
                398
            ],
            "myReservation": [
                366
            ],
            "__typename": [
                1
            ]
        },
        "Events": {
            "edges": [
                386
            ],
            "nodes": [
                382
            ],
            "pageInfo": [
                8
            ],
            "totalCount": [
                17
            ],
            "__typename": [
                1
            ]
        },
        "EventEdge": {
            "cursor": [
                1
            ],
            "node": [
                382
            ],
            "__typename": [
                1
            ]
        },
        "EventCalendarGenerateResult": {
            "events": [
                382
            ],
            "createdEventCount": [
                80
            ],
            "existingEventCount": [
                80
            ],
            "createdSlotCount": [
                80
            ],
            "existingSlotCount": [
                80
            ],
            "__typename": [
                1
            ]
        },
        "EventTicketConfigurationConfiguration": {
            "customFields": [
                19
            ],
            "__typename": [
                1
            ]
        },
        "EventTicketConfiguration": {
            "id": [
                10
            ],
            "name": [
                1
            ],
            "description": [
                1
            ],
            "createdAt": [
                12
            ],
            "updatedAt": [
                12
            ],
            "price": [
                17
            ],
            "currency": [
                390
            ],
            "maxCount": [
                17
            ],
            "currentCount": [
                17
            ],
            "buyable": [
                4
            ],
            "eventId": [
                10
            ],
            "seatTypeId": [
                10
            ],
            "configuration": [
                388
            ],
            "startsAt": [
                12
            ],
            "endsAt": [
                12
            ],
            "state": [
                391
            ],
            "stateReason": [
                1
            ],
            "tournamentId": [
                10
            ],
            "freeCount": [
                80
            ],
            "effectiveState": [
                392
            ],
            "__typename": [
                1
            ]
        },
        "ShopCurrencies": {},
        "EventSlotState": {},
        "EventSlotEffectiveState": {},
        "EventVenueSeatTypeConfiguration": {
            "nonce": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "EventVenueSeatType": {
            "id": [
                10
            ],
            "name": [
                1
            ],
            "description": [
                1
            ],
            "configuration": [
                393
            ],
            "createdAt": [
                12
            ],
            "updatedAt": [
                12
            ],
            "venueId": [
                10
            ],
            "__typename": [
                1
            ]
        },
        "EventVenueSeatTypes": {
            "edges": [
                396
            ],
            "nodes": [
                394
            ],
            "pageInfo": [
                8
            ],
            "totalCount": [
                17
            ],
            "__typename": [
                1
            ]
        },
        "EventVenueSeatTypeEdge": {
            "cursor": [
                1
            ],
            "node": [
                394
            ],
            "__typename": [
                1
            ]
        },
        "EventVenueConfiguration": {
            "imageUrl": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "EventVenue": {
            "id": [
                10
            ],
            "name": [
                1
            ],
            "description": [
                1
            ],
            "address": [
                1
            ],
            "city": [
                1
            ],
            "state": [
                1
            ],
            "country": [
                1
            ],
            "postalCode": [
                1
            ],
            "createdAt": [
                12
            ],
            "updatedAt": [
                12
            ],
            "configuration": [
                397
            ],
            "organizationId": [
                10
            ],
            "timezone": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "EventVenues": {
            "edges": [
                400
            ],
            "nodes": [
                398
            ],
            "pageInfo": [
                8
            ],
            "totalCount": [
                17
            ],
            "__typename": [
                1
            ]
        },
        "EventVenueEdge": {
            "cursor": [
                1
            ],
            "node": [
                398
            ],
            "__typename": [
                1
            ]
        },
        "EventWaitlistEntry": {
            "id": [
                10
            ],
            "eventId": [
                10
            ],
            "ticketConfigurationId": [
                10
            ],
            "playerId": [
                10
            ],
            "quantity": [
                80
            ],
            "status": [
                402
            ],
            "endedReason": [
                403
            ],
            "position": [
                80
            ],
            "offerReservationId": [
                10
            ],
            "offerExpiresAt": [
                12
            ],
            "createdAt": [
                12
            ],
            "updatedAt": [
                12
            ],
            "__typename": [
                1
            ]
        },
        "EventWaitlistEntryStatus": {},
        "EventWaitlistEndReason": {},
        "EventWaitlistEntries": {
            "edges": [
                405
            ],
            "nodes": [
                401
            ],
            "pageInfo": [
                8
            ],
            "totalCount": [
                17
            ],
            "__typename": [
                1
            ]
        },
        "EventWaitlistEntryEdge": {
            "cursor": [
                1
            ],
            "node": [
                401
            ],
            "__typename": [
                1
            ]
        },
        "Item": {
            "id": [
                10
            ],
            "name": [
                1
            ],
            "externalId": [
                1
            ],
            "description": [
                1
            ],
            "metadata": [
                24
            ],
            "createdAt": [
                12
            ],
            "updatedAt": [
                12
            ],
            "organizationId": [
                10
            ],
            "categoryId": [
                10
            ],
            "__typename": [
                1
            ]
        },
        "Items": {
            "edges": [
                408
            ],
            "nodes": [
                406
            ],
            "pageInfo": [
                8
            ],
            "totalCount": [
                17
            ],
            "__typename": [
                1
            ]
        },
        "ItemEdge": {
            "cursor": [
                1
            ],
            "node": [
                406
            ],
            "__typename": [
                1
            ]
        },
        "PlayerItem": {
            "id": [
                10
            ],
            "playerProfileId": [
                10
            ],
            "itemId": [
                10
            ],
            "createdAt": [
                12
            ],
            "updatedAt": [
                12
            ],
            "metadata": [
                24
            ],
            "quantity": [
                80
            ],
            "__typename": [
                1
            ]
        },
        "PlayerItems": {
            "edges": [
                411
            ],
            "nodes": [
                409
            ],
            "pageInfo": [
                8
            ],
            "totalCount": [
                17
            ],
            "__typename": [
                1
            ]
        },
        "PlayerItemEdge": {
            "cursor": [
                1
            ],
            "node": [
                409
            ],
            "__typename": [
                1
            ]
        },
        "ItemCategory": {
            "id": [
                10
            ],
            "name": [
                1
            ],
            "externalId": [
                1
            ],
            "description": [
                1
            ],
            "metadata": [
                24
            ],
            "createdAt": [
                12
            ],
            "updatedAt": [
                12
            ],
            "organizationId": [
                10
            ],
            "__typename": [
                1
            ]
        },
        "ItemCategories": {
            "edges": [
                414
            ],
            "nodes": [
                412
            ],
            "pageInfo": [
                8
            ],
            "totalCount": [
                17
            ],
            "__typename": [
                1
            ]
        },
        "ItemCategoryEdge": {
            "cursor": [
                1
            ],
            "node": [
                412
            ],
            "__typename": [
                1
            ]
        },
        "JournalActor": {
            "type": [
                416
            ],
            "id": [
                10
            ],
            "context": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "JournalActorType": {},
        "JournalResourceRef": {
            "type": [
                1
            ],
            "id": [
                10
            ],
            "__typename": [
                1
            ]
        },
        "JournalEntry": {
            "id": [
                10
            ],
            "category": [
                419
            ],
            "type": [
                1
            ],
            "severity": [
                420
            ],
            "actor": [
                415
            ],
            "primaryResource": [
                417
            ],
            "secondaryResources": [
                417
            ],
            "payload": [
                0
            ],
            "parentEntryId": [
                10
            ],
            "correlationId": [
                10
            ],
            "createdAt": [
                12
            ],
            "children": [
                421,
                {
                    "first": [
                        17
                    ],
                    "after": [
                        1
                    ]
                }
            ],
            "__typename": [
                1
            ]
        },
        "JournalCategory": {},
        "JournalSeverity": {},
        "JournalEntries": {
            "edges": [
                422
            ],
            "nodes": [
                418
            ],
            "pageInfo": [
                8
            ],
            "totalCount": [
                17
            ],
            "__typename": [
                1
            ]
        },
        "JournalEntryEdge": {
            "cursor": [
                1
            ],
            "node": [
                418
            ],
            "__typename": [
                1
            ]
        },
        "AdminActorContext": {
            "_typename": [
                1
            ],
            "accountId": [
                10
            ],
            "accountUsername": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "PlayerActorContext": {
            "_typename": [
                1
            ],
            "playerProfileId": [
                10
            ],
            "accountId": [
                10
            ],
            "__typename": [
                1
            ]
        },
        "SystemActorContext": {
            "_typename": [
                1
            ],
            "source": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "MarketplaceModuleActorContext": {
            "_typename": [
                1
            ],
            "appId": [
                10
            ],
            "marketplaceAppId": [
                10
            ],
            "installationId": [
                10
            ],
            "appName": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "ApiClientActorContext": {
            "_typename": [
                1
            ],
            "clientId": [
                10
            ],
            "clientName": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "WebhookCallbackActorContext": {
            "_typename": [
                1
            ],
            "webhookId": [
                10
            ],
            "deliveryId": [
                10
            ],
            "__typename": [
                1
            ]
        },
        "SimulationActorContext": {
            "_typename": [
                1
            ],
            "validationJobId": [
                10
            ],
            "source": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "ModuleConfigProp": {
            "key": [
                1
            ],
            "value": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "PlatformModuleConfig": {
            "id": [
                10
            ],
            "platformId": [
                10
            ],
            "marketplaceAppId": [
                10
            ],
            "moduleName": [
                1
            ],
            "props": [
                430
            ],
            "createdAt": [
                12
            ],
            "updatedAt": [
                12
            ],
            "__typename": [
                1
            ]
        },
        "ModuleTokenDto": {
            "appId": [
                10
            ],
            "marketplaceAppId": [
                10
            ],
            "moduleName": [
                1
            ],
            "displayName": [
                1
            ],
            "token": [
                1
            ],
            "cdnPath": [
                1
            ],
            "exportName": [
                1
            ],
            "version": [
                1
            ],
            "propsSchema": [
                90
            ],
            "events": [
                92
            ],
            "grantedPermissions": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "ExtensionTokenDto": {
            "token": [
                1
            ],
            "marketplaceAppId": [
                10
            ],
            "appId": [
                10
            ],
            "__typename": [
                1
            ]
        },
        "EntityMetafield": {
            "id": [
                10
            ],
            "organizationId": [
                10
            ],
            "appId": [
                10
            ],
            "namespace": [
                1
            ],
            "entityType": [
                1
            ],
            "entityId": [
                10
            ],
            "key": [
                1
            ],
            "value": [
                1
            ],
            "createdAt": [
                12
            ],
            "updatedAt": [
                12
            ],
            "__typename": [
                1
            ]
        },
        "OrganizationModeration": {
            "blockedWords": [
                1
            ],
            "blockedSubstrings": [
                1
            ],
            "updatedAt": [
                12
            ],
            "__typename": [
                1
            ]
        },
        "ObjectMetadata": {
            "key": [
                1
            ],
            "value": [
                1
            ],
            "type": [
                437
            ],
            "visibility": [
                438
            ],
            "objectType": [
                439
            ],
            "objectId": [
                10
            ],
            "createdAt": [
                12
            ],
            "updatedAt": [
                12
            ],
            "__typename": [
                1
            ]
        },
        "MetadataType": {},
        "MetadataVisibility": {},
        "ObjectType": {},
        "ObjectMetadataBatchResult": {
            "objectId": [
                10
            ],
            "entries": [
                436
            ],
            "__typename": [
                1
            ]
        },
        "CustomFieldOptionModel": {
            "label": [
                1
            ],
            "value": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "CustomFieldDefinitionModel": {
            "id": [
                10
            ],
            "objectType": [
                439
            ],
            "key": [
                1
            ],
            "name": [
                1
            ],
            "description": [
                1
            ],
            "type": [
                443
            ],
            "required": [
                4
            ],
            "unique": [
                4
            ],
            "order": [
                80
            ],
            "visibility": [
                21
            ],
            "editability": [
                22
            ],
            "options": [
                441
            ],
            "defaultValue": [
                1
            ],
            "validationRegex": [
                1
            ],
            "createdAt": [
                12
            ],
            "updatedAt": [
                12
            ],
            "moderated": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "CustomFieldType": {},
        "CustomFieldWithValueModel": {
            "definition": [
                442
            ],
            "value": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "CustomFieldValuesBatchResultModel": {
            "objectId": [
                10
            ],
            "fields": [
                444
            ],
            "__typename": [
                1
            ]
        },
        "PlatformCustomDomainData": {
            "domain": [
                1
            ],
            "configuration": [
                123
            ],
            "__typename": [
                1
            ]
        },
        "PlatformThemeSocialLinksModel": {
            "twitter": [
                1
            ],
            "discord": [
                1
            ],
            "twitch": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "PlatformThemeSectionConfigModel": {
            "name": [
                1
            ],
            "visible": [
                4
            ],
            "order": [
                17
            ],
            "__typename": [
                1
            ]
        },
        "PlatformConfiguration": {
            "whitelabel": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "Platform": {
            "id": [
                10
            ],
            "name": [
                1
            ],
            "createdAt": [
                12
            ],
            "updatedAt": [
                12
            ],
            "configuration": [
                449
            ],
            "organizationId": [
                10
            ],
            "appId": [
                1
            ],
            "customDomains": [
                446
            ],
            "__typename": [
                1
            ]
        },
        "PlatformTemplate": {
            "id": [
                10
            ],
            "name": [
                1
            ],
            "description": [
                1
            ],
            "screenshotUrl": [
                131
            ],
            "createdAt": [
                12
            ],
            "updatedAt": [
                12
            ],
            "ownerId": [
                10
            ],
            "organizationId": [
                10
            ],
            "public": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "PresenceAnalytics": {
            "totalSessions": [
                80
            ],
            "authenticatedSessions": [
                80
            ],
            "anonymousSessions": [
                80
            ],
            "__typename": [
                1
            ]
        },
        "UserConnectionEvent": {
            "sessionId": [
                10
            ],
            "serverId": [
                10
            ],
            "playerId": [
                10
            ],
            "accountId": [
                10
            ],
            "organizationId": [
                10
            ],
            "__typename": [
                1
            ]
        },
        "UsersConnectedEvent": {
            "usersConnected": [
                453
            ],
            "__typename": [
                1
            ]
        },
        "UserDisconnectEvent": {
            "sessionId": [
                10
            ],
            "serverId": [
                10
            ],
            "playerId": [
                10
            ],
            "accountId": [
                10
            ],
            "organizationId": [
                10
            ],
            "__typename": [
                1
            ]
        },
        "UsersDisconnectedEvent": {
            "usersDisconnected": [
                455
            ],
            "__typename": [
                1
            ]
        },
        "PaymentUrlAndClientSecret": {
            "paymentUrl": [
                1
            ],
            "clientSecret": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "PlayerShopProductPurshase": {
            "id": [
                10
            ],
            "playerProfileId": [
                10
            ],
            "shopProductId": [
                10
            ],
            "quantity": [
                17
            ],
            "createdAt": [
                12
            ],
            "updatedAt": [
                12
            ],
            "__typename": [
                1
            ]
        },
        "PlayerShopProductPurshasesDto": {
            "edges": [
                460
            ],
            "nodes": [
                458
            ],
            "pageInfo": [
                8
            ],
            "totalCount": [
                17
            ],
            "__typename": [
                1
            ]
        },
        "PlayerShopProductPurshaseEdge": {
            "cursor": [
                1
            ],
            "node": [
                458
            ],
            "__typename": [
                1
            ]
        },
        "ShopCategory": {
            "id": [
                10
            ],
            "externalId": [
                1
            ],
            "name": [
                1
            ],
            "description": [
                1
            ],
            "metadata": [
                24
            ],
            "createdAt": [
                12
            ],
            "updatedAt": [
                12
            ],
            "shopId": [
                10
            ],
            "__typename": [
                1
            ]
        },
        "ShopCategories": {
            "edges": [
                463
            ],
            "nodes": [
                461
            ],
            "pageInfo": [
                8
            ],
            "totalCount": [
                17
            ],
            "__typename": [
                1
            ]
        },
        "ShopCategoryEdge": {
            "cursor": [
                1
            ],
            "node": [
                461
            ],
            "__typename": [
                1
            ]
        },
        "ShopProductConfiguration": {
            "minQuantity": [
                80
            ],
            "maxQuantity": [
                80
            ],
            "maxBoughtQuantity": [
                80
            ],
            "__typename": [
                1
            ]
        },
        "EntityQuantity": {
            "id": [
                10
            ],
            "quantity": [
                80
            ],
            "__typename": [
                1
            ]
        },
        "ShopItemQuantity": {
            "type": [
                467
            ],
            "id": [
                10
            ],
            "quantity": [
                80
            ],
            "__typename": [
                1
            ]
        },
        "ShopProductItemType": {},
        "ShopProduct": {
            "id": [
                10
            ],
            "name": [
                1
            ],
            "externalId": [
                1
            ],
            "description": [
                1
            ],
            "categoryId": [
                10
            ],
            "price": [
                17
            ],
            "configuration": [
                464
            ],
            "metadata": [
                24
            ],
            "createdAt": [
                12
            ],
            "updatedAt": [
                12
            ],
            "visibleAt": [
                12
            ],
            "shopId": [
                10
            ],
            "currency": [
                390
            ],
            "items": [
                466
            ],
            "currencyPrices": [
                465
            ],
            "__typename": [
                1
            ]
        },
        "ShopProducts": {
            "edges": [
                470
            ],
            "nodes": [
                468
            ],
            "pageInfo": [
                8
            ],
            "totalCount": [
                17
            ],
            "__typename": [
                1
            ]
        },
        "ShopProductEdge": {
            "cursor": [
                1
            ],
            "node": [
                468
            ],
            "__typename": [
                1
            ]
        },
        "Shop": {
            "id": [
                10
            ],
            "externalId": [
                1
            ],
            "name": [
                1
            ],
            "description": [
                1
            ],
            "createdAt": [
                12
            ],
            "updatedAt": [
                12
            ],
            "organizationId": [
                10
            ],
            "metadata": [
                24
            ],
            "__typename": [
                1
            ]
        },
        "Shops": {
            "edges": [
                473
            ],
            "nodes": [
                471
            ],
            "pageInfo": [
                8
            ],
            "totalCount": [
                17
            ],
            "__typename": [
                1
            ]
        },
        "ShopEdge": {
            "cursor": [
                1
            ],
            "node": [
                471
            ],
            "__typename": [
                1
            ]
        },
        "ShopProductItem": {
            "id": [
                10
            ],
            "currencyId": [
                10
            ],
            "createdAt": [
                12
            ],
            "updatedAt": [
                12
            ],
            "type": [
                467
            ],
            "shopItemId": [
                10
            ],
            "itemId": [
                10
            ],
            "quantity": [
                80
            ],
            "__typename": [
                1
            ]
        },
        "ShopProductItems": {
            "edges": [
                476
            ],
            "nodes": [
                474
            ],
            "pageInfo": [
                8
            ],
            "totalCount": [
                17
            ],
            "__typename": [
                1
            ]
        },
        "ShopProductItemEdge": {
            "cursor": [
                1
            ],
            "node": [
                474
            ],
            "__typename": [
                1
            ]
        },
        "SkillRatingConfiguration": {
            "updateLeaderboardId": [
                10
            ],
            "__typename": [
                1
            ]
        },
        "OrganizationSkillRatingsRegisterMatchPlayer": {
            "id": [
                10
            ],
            "newValue": [
                17
            ],
            "oldValue": [
                17
            ],
            "leaderboardPointsUpdate": [
                17
            ],
            "__typename": [
                1
            ]
        },
        "OrganizationSkillRating": {
            "id": [
                10
            ],
            "name": [
                1
            ],
            "description": [
                1
            ],
            "type": [
                480
            ],
            "configuration": [
                477
            ],
            "organizationId": [
                10
            ],
            "createdAt": [
                12
            ],
            "updatedAt": [
                12
            ],
            "__typename": [
                1
            ]
        },
        "SkillRatingType": {},
        "LimitOverride": {
            "limit": [
                482
            ],
            "value": [
                17
            ],
            "__typename": [
                1
            ]
        },
        "OrganizationLimitsType": {},
        "SubscriptionItem": {
            "id": [
                10
            ],
            "name": [
                1
            ],
            "description": [
                1
            ],
            "limitsOverride": [
                481
            ],
            "maxCount": [
                17
            ],
            "price": [
                17
            ],
            "__typename": [
                1
            ]
        },
        "OrganizationSubscriptionItem": {
            "organizationId": [
                10
            ],
            "subscriptionItemId": [
                10
            ],
            "count": [
                17
            ],
            "createdAt": [
                12
            ],
            "endAt": [
                12
            ],
            "updatedAt": [
                12
            ],
            "subscriptionItem": [
                483
            ],
            "__typename": [
                1
            ]
        },
        "KeyMappingInput": {
            "path": [
                1
            ],
            "mappedTo": [
                1
            ],
            "private": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "MappingConfigurationInput": {
            "mappings": [
                485
            ],
            "__typename": [
                1
            ]
        },
        "HeaderInput": {
            "name": [
                1
            ],
            "value": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "DataRetrievalConfigInput": {
            "url": [
                1
            ],
            "headers": [
                487
            ],
            "mappingConfiguration": [
                486
            ],
            "__typename": [
                1
            ]
        },
        "GroupPermissionInput": {
            "id": [
                1
            ],
            "resources": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "PropertyInput": {
            "property": [
                1
            ],
            "name": [
                1
            ],
            "type": [
                20
            ],
            "required": [
                4
            ],
            "order": [
                17
            ],
            "unique": [
                4
            ],
            "public": [
                4
            ],
            "visibility": [
                21
            ],
            "editability": [
                22
            ],
            "__typename": [
                1
            ]
        },
        "PropertyValueInput": {
            "property": [
                1
            ],
            "value": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "MatchVariableInput": {
            "formulaName": [
                1
            ],
            "displayName": [
                1
            ],
            "displayIcon": [
                1
            ],
            "defaultValue": [
                17
            ],
            "__typename": [
                1
            ]
        },
        "MatchConfigurationInput": {
            "variables": [
                492
            ],
            "scoreFormula": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "GameConfigurationInput": {
            "wonMatchCountToWinGame": [
                17
            ],
            "useMatchScoresAsGameScore": [
                4
            ],
            "teamsCount": [
                17
            ],
            "matchConfiguration": [
                493
            ],
            "__typename": [
                1
            ]
        },
        "VariableInput": {
            "name": [
                1
            ],
            "defaultValue": [
                17
            ],
            "__typename": [
                1
            ]
        },
        "RoundConfigurationInput": {
            "game": [
                494
            ],
            "order": [
                17
            ],
            "name": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "GroupConfigurationInput": {
            "rounds": [
                496
            ],
            "name": [
                1
            ],
            "description": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "StepConfigurationInput": {
            "type": [
                32
            ],
            "groups": [
                497
            ],
            "__typename": [
                1
            ]
        },
        "NumberConditionInput": {
            "conditionType": [
                34
            ],
            "value": [
                17
            ],
            "__typename": [
                1
            ]
        },
        "TeamNumericConditionInput": {
            "aggregationType": [
                36
            ],
            "propertySource": [
                37
            ],
            "propertySourceId": [
                10
            ],
            "conditionType": [
                34
            ],
            "value": [
                17
            ],
            "__typename": [
                1
            ]
        },
        "StringConditionInput": {
            "conditionType": [
                39
            ],
            "value": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "ConditionInput": {
            "property": [
                1
            ],
            "numericCondition": [
                499
            ],
            "stringCondition": [
                501
            ],
            "propertyCondition": [
                41
            ],
            "__typename": [
                1
            ]
        },
        "PlayerFieldInput": {
            "propertySource": [
                37
            ],
            "propertySourceId": [
                10
            ],
            "property": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "PlayerConditionInput": {
            "propertySource": [
                37
            ],
            "propertySourceId": [
                10
            ],
            "condition": [
                502
            ],
            "errorMessage": [
                1
            ],
            "ruleDescription": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "TeamConditionInput": {
            "property": [
                1
            ],
            "stringCondition": [
                501
            ],
            "numericCondition": [
                500
            ],
            "propertyCondition": [
                41
            ],
            "errorMessage": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "RegistrationConditionsInput": {
            "teamConditions": [
                505
            ],
            "memberConditions": [
                504
            ],
            "__typename": [
                1
            ]
        },
        "TournamentConfigurationInput": {
            "type": [
                32
            ],
            "teamMinSize": [
                17
            ],
            "teamMaxSize": [
                17
            ],
            "teamsCount": [
                17
            ],
            "teamStatusAfterRegistration": [
                47
            ],
            "registrationConditions": [
                506
            ],
            "customFields": [
                490
            ],
            "__typename": [
                1
            ]
        },
        "EmailConfigurationInput": {
            "host": [
                1
            ],
            "port": [
                17
            ],
            "username": [
                1
            ],
            "password": [
                1
            ],
            "from": [
                1
            ],
            "fromName": [
                1
            ],
            "replyTo": [
                1
            ],
            "replyToName": [
                1
            ],
            "secure": [
                4
            ],
            "emailField": [
                503
            ],
            "__typename": [
                1
            ]
        },
        "PlatformCdnFilePageConfigInput": {
            "path": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "PlatformCdnFileConfigsInput": {
            "pageConfig": [
                509
            ],
            "__typename": [
                1
            ]
        },
        "UserGroupConfigurationInput": {
            "maxSize": [
                80
            ],
            "minSize": [
                80
            ],
            "nameMinLength": [
                80
            ],
            "nameMaxLength": [
                80
            ],
            "__typename": [
                1
            ]
        },
        "PositionInput": {
            "x": [
                17
            ],
            "y": [
                17
            ],
            "__typename": [
                1
            ]
        },
        "EventVenueSeatConfigurationInput": {
            "size": [
                17
            ],
            "svgUrl": [
                1
            ],
            "position": [
                512
            ],
            "__typename": [
                1
            ]
        },
        "EventWaitlistConfigurationInput": {
            "enabled": [
                4
            ],
            "offerDurationSeconds": [
                80
            ],
            "sameDayOfferDurationSeconds": [
                80
            ],
            "maxQuantity": [
                80
            ],
            "__typename": [
                1
            ]
        },
        "EventSelfServiceConfigurationInput": {
            "allowCancel": [
                4
            ],
            "allowChange": [
                4
            ],
            "cutoffSeconds": [
                80
            ],
            "changeScope": [
                377
            ],
            "__typename": [
                1
            ]
        },
        "EventConfigurationInput": {
            "customFields": [
                490
            ],
            "groupConfiguration": [
                511
            ],
            "maxTicketsPerReservation": [
                17
            ],
            "reservationStatusAfterPayment": [
                379
            ],
            "reservationStatusAfterRegistration": [
                380
            ],
            "sessionDuration": [
                17
            ],
            "allowForNewSessionAfterTimeout": [
                4
            ],
            "seatAssignmentMode": [
                381
            ],
            "allowForMoreTicketsThanGroupMembers": [
                4
            ],
            "waitlist": [
                514
            ],
            "selfService": [
                515
            ],
            "__typename": [
                1
            ]
        },
        "EventTicketConfigurationConfigurationInput": {
            "customFields": [
                490
            ],
            "__typename": [
                1
            ]
        },
        "EventVenueSeatTypeConfigurationInput": {
            "nonce": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "EventVenueConfigurationInput": {
            "imageUrl": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "PlatformConfigurationInput": {
            "whitelabel": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "ShopProductConfigurationInput": {
            "minQuantity": [
                80
            ],
            "maxQuantity": [
                80
            ],
            "maxBoughtQuantity": [
                80
            ],
            "__typename": [
                1
            ]
        },
        "EntityQuantityInput": {
            "id": [
                10
            ],
            "quantity": [
                80
            ],
            "__typename": [
                1
            ]
        },
        "ShopItemQuantityInput": {
            "type": [
                467
            ],
            "id": [
                10
            ],
            "quantity": [
                80
            ],
            "__typename": [
                1
            ]
        },
        "SkillRatingConfigurationInput": {
            "updateLeaderboardId": [
                10
            ],
            "__typename": [
                1
            ]
        },
        "Query": {
            "getMyAccount": [
                76
            ],
            "configuration": [
                168,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "leaderboardCurrentPlayerRanking": [
                170,
                {
                    "input": [
                        526,
                        "LeaderboardGetPlayerRankingInput!"
                    ]
                }
            ],
            "leaderboards": [
                174,
                {
                    "page": [
                        59,
                        "PageInfo!"
                    ]
                }
            ],
            "leaderboard": [
                173,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "currentLeaderboardSeason": [
                176,
                {
                    "leaderboardId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "leaderboardSeasons": [
                177,
                {
                    "leaderboardId": [
                        10,
                        "ID!"
                    ],
                    "page": [
                        59,
                        "PageInfo!"
                    ]
                }
            ],
            "leaderboardSeason": [
                176,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "leaderboardSeasonBuckets": [
                181,
                {
                    "seasonId": [
                        10,
                        "ID!"
                    ],
                    "page": [
                        59,
                        "PageInfo!"
                    ]
                }
            ],
            "leaderboardSeasonBucket": [
                179,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "leaderboardSeasonBucketScores": [
                171,
                {
                    "leaderboardSeasonBucketId": [
                        10,
                        "ID!"
                    ],
                    "page": [
                        59,
                        "PageInfo!"
                    ]
                }
            ],
            "organization": [
                70,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "limitDefinitions": [
                65,
                {
                    "limits": [
                        1,
                        "[String!]"
                    ]
                }
            ],
            "organizationLimits": [
                67,
                {
                    "limits": [
                        482,
                        "[OrganizationLimitsType!]"
                    ]
                }
            ],
            "userOrganizations": [
                70
            ],
            "organizationGroup": [
                9,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "organizationGroups": [
                16,
                {
                    "page": [
                        59,
                        "PageInfo!"
                    ]
                }
            ],
            "availablePermissions": [
                15
            ],
            "organizationMembers": [
                56,
                {
                    "page": [
                        59,
                        "PageInfo!"
                    ]
                }
            ],
            "identityProviders": [
                527
            ],
            "identityProvider": [
                200,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "organizationApp": [
                193,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "organizationApps": [
                194,
                {
                    "page": [
                        59,
                        "PageInfo!"
                    ]
                }
            ],
            "appReleasesByApp": [
                189,
                {
                    "appId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "appRelease": [
                189,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "webhookAvailableEvents": [
                53
            ],
            "webhooks": [
                206
            ],
            "webhook": [
                206,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "organizationAttachedApps": [
                198,
                {
                    "page": [
                        59,
                        "PageInfo!"
                    ]
                }
            ],
            "availableRootIdentityProvider": [
                187,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "getAvailableRootIdentityProviders": [
                187
            ],
            "emailTemplateConfigurations": [
                49
            ],
            "emailConfiguration": [
                51
            ],
            "emailTemplate": [
                183,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "emailTemplates": [
                184,
                {
                    "page": [
                        59,
                        "PageInfo!"
                    ]
                }
            ],
            "searchPlayer": [
                73,
                {
                    "username": [
                        1,
                        "String!"
                    ]
                }
            ],
            "players": [
                74,
                {
                    "ids": [
                        10,
                        "[ID!]"
                    ],
                    "page": [
                        59,
                        "PageInfo!"
                    ],
                    "identityProviders": [
                        10,
                        "[ID!]"
                    ],
                    "identityProviderProperties": [
                        1,
                        "[String!]"
                    ],
                    "query": [
                        529
                    ]
                }
            ],
            "player": [
                73,
                {
                    "id": [
                        10
                    ],
                    "ownerId": [
                        10
                    ],
                    "customId": [
                        1
                    ]
                }
            ],
            "playerSkillRatings": [
                207,
                {
                    "playerId": [
                        10,
                        "ID!"
                    ],
                    "skillRatingIds": [
                        10,
                        "[ID!]"
                    ]
                }
            ],
            "playerMatchesHistory": [
                241,
                {
                    "page": [
                        59,
                        "PageInfo!"
                    ],
                    "playerId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "tournament": [
                58,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "tournaments": [
                254,
                {
                    "query": [
                        530,
                        "TournamentsQuery!"
                    ],
                    "page": [
                        59,
                        "PageInfo!"
                    ]
                }
            ],
            "tournamentSteps": [
                252,
                {
                    "tournamentId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "tournamentStep": [
                252,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "tournamentStepGeneratedShape": [
                259,
                {
                    "stepId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "match": [
                239,
                {
                    "matchId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "tournamentTeam": [
                248,
                {
                    "teamId": [
                        10,
                        "ID!"
                    ],
                    "memberStatus": [
                        245
                    ]
                }
            ],
            "tournamentTeams": [
                249,
                {
                    "tournamentId": [
                        10,
                        "ID!"
                    ],
                    "page": [
                        59,
                        "PageInfo!"
                    ],
                    "memberStatus": [
                        245
                    ],
                    "status": [
                        60
                    ],
                    "playerUsernameQuery": [
                        1
                    ],
                    "propertiesFilter": [
                        491,
                        "[PropertyValueInput!]"
                    ],
                    "playerPropertiesFilter": [
                        491,
                        "[PropertyValueInput!]"
                    ],
                    "playerIdentityProviderPropertiesFilter": [
                        535,
                        "[IdentityProviderPropertyInput!]"
                    ],
                    "playerProfileIds": [
                        10,
                        "[ID!]"
                    ]
                }
            ],
            "tournamentPlayers": [
                246,
                {
                    "page": [
                        59,
                        "PageInfo!"
                    ],
                    "tournamentId": [
                        10,
                        "ID!"
                    ],
                    "status": [
                        60
                    ],
                    "playerUsernameQuery": [
                        1
                    ],
                    "playerPropertiesFilter": [
                        491,
                        "[PropertyValueInput!]"
                    ],
                    "orderByProperty": [
                        536
                    ]
                }
            ],
            "tournamentTeamInvites": [
                246,
                {
                    "page": [
                        59,
                        "PageInfo!"
                    ],
                    "tournamentId": [
                        10
                    ],
                    "status": [
                        245
                    ]
                }
            ],
            "tournamentStepGroupRoundGameMatchScoresGetForStep": [
                264,
                {
                    "stepId": [
                        10,
                        "ID!"
                    ],
                    "page": [
                        59,
                        "PageInfo!"
                    ]
                }
            ],
            "tournamentAdmins": [
                266,
                {
                    "tournamentId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "stepRuleSet": [
                285,
                {
                    "tournamentStepId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "presetScripts": [
                288
            ],
            "presetScript": [
                288,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "builtinPresets": [
                289,
                {
                    "category": [
                        290
                    ]
                }
            ],
            "builtinPreset": [
                289,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "validateScript": [
                298,
                {
                    "input": [
                        537,
                        "ValidateScriptInput!"
                    ]
                }
            ],
            "simulateScript": [
                301,
                {
                    "input": [
                        538,
                        "SimulateScriptInput!"
                    ]
                }
            ],
            "stepRuleSetValidationJob": [
                324,
                {
                    "jobId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "stepRuleSetValidationJobs": [
                330,
                {
                    "stepRuleSetId": [
                        10,
                        "ID!"
                    ],
                    "page": [
                        59,
                        "PageInfo!"
                    ]
                }
            ],
            "stepRuleSetValidationEvents": [
                332,
                {
                    "jobId": [
                        10,
                        "ID!"
                    ],
                    "page": [
                        59,
                        "PageInfo!"
                    ],
                    "kindFilter": [
                        327,
                        "[ValidationEventKind!]"
                    ]
                }
            ],
            "platformFiles": [
                127,
                {
                    "type": [
                        128
                    ],
                    "platformId": [
                        10
                    ],
                    "templateId": [
                        10
                    ]
                }
            ],
            "platformFile": [
                127,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "platforms": [
                450
            ],
            "platform": [
                450,
                {
                    "platformId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "platformFindFromDomain": [
                450,
                {
                    "domain": [
                        1,
                        "String!"
                    ]
                }
            ],
            "platformCheckDomainAvailability": [
                4,
                {
                    "domain": [
                        131,
                        "URL!"
                    ]
                }
            ],
            "platformCustomDomains": [
                446,
                {
                    "platformId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "platformTemplatesPublic": [
                451
            ],
            "platformTemplates": [
                451
            ],
            "platformTemplate": [
                451,
                {
                    "platformTemplateId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "subscriptionItems": [
                483
            ],
            "organizationCurrentSubscriptionItems": [
                484
            ],
            "journalEntries": [
                421,
                {
                    "page": [
                        59
                    ],
                    "filters": [
                        544
                    ]
                }
            ],
            "journalEntry": [
                418,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "organizationSkillRatings": [
                479
            ],
            "organizationSkillRating": [
                479,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "event": [
                384,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "events": [
                385,
                {
                    "page": [
                        59,
                        "PageInfo!"
                    ],
                    "query": [
                        545
                    ],
                    "eventIds": [
                        10,
                        "[ID!]"
                    ]
                }
            ],
            "eventTicketConfiguration": [
                389,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "eventTicketConfigurations": [
                389,
                {
                    "eventId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "eventReservationsMyReservations": [
                367,
                {
                    "page": [
                        59,
                        "PageInfo!"
                    ],
                    "status": [
                        365
                    ],
                    "groupStatus": [
                        350
                    ],
                    "eventIds": [
                        10,
                        "[ID!]"
                    ]
                }
            ],
            "eventReservation": [
                364,
                {
                    "reservationId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "eventSeats": [
                373,
                {
                    "eventId": [
                        10,
                        "ID!"
                    ],
                    "page": [
                        59,
                        "PageInfo!"
                    ],
                    "eventVenueId": [
                        10
                    ],
                    "reservationIds": [
                        10,
                        "[ID!]"
                    ]
                }
            ],
            "eventReservations": [
                367,
                {
                    "eventId": [
                        10,
                        "ID!"
                    ],
                    "page": [
                        59,
                        "PageInfo!"
                    ],
                    "query": [
                        549,
                        "EventReservationsQueryInput!"
                    ]
                }
            ],
            "eventVenues": [
                399,
                {
                    "page": [
                        59,
                        "PageInfo!"
                    ]
                }
            ],
            "eventVenue": [
                398,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "eventVenueSeats": [
                359,
                {
                    "venueId": [
                        10,
                        "ID!"
                    ],
                    "page": [
                        59,
                        "PageInfo!"
                    ],
                    "seatTypeId": [
                        10
                    ]
                }
            ],
            "eventVenueSeatTypes": [
                395,
                {
                    "venueId": [
                        10,
                        "ID!"
                    ],
                    "page": [
                        59,
                        "PageInfo!"
                    ]
                }
            ],
            "eventSlots": [
                389,
                {
                    "filter": [
                        551,
                        "EventSlotsFilter!"
                    ]
                }
            ],
            "myWaitlistEntries": [
                401,
                {
                    "eventIds": [
                        10,
                        "[ID!]"
                    ],
                    "activeOnly": [
                        4
                    ]
                }
            ],
            "eventWaitlistEntries": [
                404,
                {
                    "eventId": [
                        10,
                        "ID!"
                    ],
                    "ticketConfigurationId": [
                        10
                    ],
                    "statuses": [
                        402,
                        "[EventWaitlistEntryStatus!]"
                    ],
                    "page": [
                        59,
                        "PageInfo!"
                    ]
                }
            ],
            "organizationPaymentCollectionConfiguration": [
                243
            ],
            "userGroupMembers": [
                353,
                {
                    "groupIds": [
                        10,
                        "[ID!]!"
                    ],
                    "page": [
                        59,
                        "PageInfo!"
                    ],
                    "status": [
                        348
                    ]
                }
            ],
            "userGroups": [
                351,
                {
                    "query": [
                        552,
                        "UserGroupsQueryInput!"
                    ],
                    "page": [
                        59,
                        "PageInfo!"
                    ]
                }
            ],
            "userGroupMyMemberships": [
                353,
                {
                    "page": [
                        59,
                        "PageInfo!"
                    ],
                    "status": [
                        348
                    ],
                    "entityType": [
                        1
                    ],
                    "entityId": [
                        10
                    ]
                }
            ],
            "presenceAnalytics": [
                452
            ],
            "shops": [
                472,
                {
                    "page": [
                        59
                    ],
                    "filter": [
                        553
                    ]
                }
            ],
            "shopCategories": [
                462,
                {
                    "page": [
                        59
                    ],
                    "filter": [
                        554
                    ]
                }
            ],
            "playerShopProductPurshases": [
                459,
                {
                    "page": [
                        59
                    ],
                    "filter": [
                        555
                    ]
                }
            ],
            "shopProducts": [
                469,
                {
                    "shopId": [
                        10,
                        "ID!"
                    ],
                    "page": [
                        59
                    ],
                    "filter": [
                        556
                    ]
                }
            ],
            "shopProductItems": [
                475,
                {
                    "shopProductId": [
                        10,
                        "ID!"
                    ],
                    "page": [
                        59
                    ]
                }
            ],
            "items": [
                407,
                {
                    "page": [
                        59
                    ],
                    "filter": [
                        557
                    ]
                }
            ],
            "playerItems": [
                410,
                {
                    "page": [
                        59
                    ],
                    "filter": [
                        558
                    ]
                }
            ],
            "itemCategories": [
                413,
                {
                    "page": [
                        59
                    ],
                    "filter": [
                        559
                    ]
                }
            ],
            "currencies": [
                335,
                {
                    "page": [
                        59
                    ],
                    "filter": [
                        560
                    ]
                }
            ],
            "playerCurrencies": [
                338,
                {
                    "page": [
                        59
                    ],
                    "filter": [
                        561
                    ]
                }
            ],
            "marketplaceApps": [
                143,
                {
                    "page": [
                        59
                    ],
                    "filter": [
                        562
                    ]
                }
            ],
            "marketplaceApp": [
                140,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "myMarketplaceInstallations": [
                150,
                {
                    "page": [
                        59
                    ]
                }
            ],
            "appReleases": [
                136,
                {
                    "marketplaceAppId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "moduleTokensForPlatform": [
                432,
                {
                    "platformId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "extensionToken": [
                433,
                {
                    "installationId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "platformModuleConfigs": [
                431,
                {
                    "platformId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "entityMetafields": [
                434,
                {
                    "entityType": [
                        1,
                        "String!"
                    ],
                    "entityId": [
                        10,
                        "ID!"
                    ],
                    "filter": [
                        563
                    ]
                }
            ],
            "allowedObjectTypes": [
                439
            ],
            "objectMetadata": [
                436,
                {
                    "objectType": [
                        439,
                        "ObjectType!"
                    ],
                    "objectId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "objectMetadataBatch": [
                440,
                {
                    "objectType": [
                        439,
                        "ObjectType!"
                    ],
                    "objectIds": [
                        10,
                        "[ID!]!"
                    ]
                }
            ],
            "customFieldDefinitions": [
                442,
                {
                    "objectType": [
                        439,
                        "ObjectType!"
                    ]
                }
            ],
            "customFieldValues": [
                444,
                {
                    "objectType": [
                        439,
                        "ObjectType!"
                    ],
                    "objectId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "customFieldValuesBatch": [
                445,
                {
                    "objectType": [
                        439,
                        "ObjectType!"
                    ],
                    "objectIds": [
                        10,
                        "[ID!]!"
                    ]
                }
            ],
            "guestMe": [
                160
            ],
            "guestConfiguration": [
                166
            ],
            "guestLinkResolve": [
                161,
                {
                    "token": [
                        1,
                        "String!"
                    ]
                }
            ],
            "appInstallationPublicConfig": [
                85,
                {
                    "appSlug": [
                        1,
                        "String!"
                    ]
                }
            ],
            "appInstallationConfig": [
                85,
                {
                    "appSlug": [
                        1,
                        "String!"
                    ]
                }
            ],
            "appFunctionRead": [
                83,
                {
                    "input": [
                        564,
                        "AppFunctionCallInput!"
                    ]
                }
            ],
            "permissionDefinitions": [
                87
            ],
            "hasPermissions": [
                4,
                {
                    "checks": [
                        565,
                        "[PermissionCheckInput!]!"
                    ]
                }
            ],
            "registrationSeries": [
                340,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "registrationSeriesList": [
                342,
                {
                    "page": [
                        59,
                        "PageInfo!"
                    ]
                }
            ],
            "myActiveRegistrations": [
                344,
                {
                    "seriesId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "registrationSeriesPlayerEntries": [
                344,
                {
                    "seriesId": [
                        10,
                        "ID!"
                    ],
                    "playerId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "organizationModeration": [
                435
            ],
            "__typename": [
                1
            ]
        },
        "LeaderboardGetPlayerRankingInput": {
            "leaderboardId": [
                10
            ],
            "playerId": [
                10
            ],
            "seasonId": [
                10
            ],
            "__typename": [
                1
            ]
        },
        "OrganizationIdentityProviderInfo": {
            "on_OrganizationIdentityProvider": [
                200
            ],
            "on_PublicOrganizationIdentityProviderV2": [
                528
            ],
            "__typename": [
                1
            ]
        },
        "PublicOrganizationIdentityProviderV2": {
            "requiredForPlayerValidation": [
                4
            ],
            "allowLogin": [
                4
            ],
            "description": [
                1
            ],
            "icon": [
                1
            ],
            "id": [
                10
            ],
            "name": [
                1
            ],
            "organizationId": [
                10
            ],
            "redirectUrl": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "QueryPlayersInput": {
            "anonymous": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "TournamentsQuery": {
            "orderBy": [
                531
            ],
            "orderDirection": [
                532
            ],
            "status": [
                533
            ],
            "showNotVisible": [
                4
            ],
            "filterByPlayers": [
                534
            ],
            "__typename": [
                1
            ]
        },
        "TournamentsQueryOrderBy": {},
        "OrderDirection": {},
        "TournamentsQueryStatus": {},
        "TournamentsQueryPlayerIdWithTeamStatus": {
            "playerId": [
                10
            ],
            "teamStatus": [
                60
            ],
            "memberStatus": [
                245
            ],
            "__typename": [
                1
            ]
        },
        "IdentityProviderPropertyInput": {
            "identityProviderId": [
                10
            ],
            "property": [
                1
            ],
            "value": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "OrderByProperty": {
            "property": [
                1
            ],
            "order": [
                532
            ],
            "__typename": [
                1
            ]
        },
        "ValidateScriptInput": {
            "script": [
                1
            ],
            "context": [
                303
            ],
            "__typename": [
                1
            ]
        },
        "SimulateScriptInput": {
            "script": [
                1
            ],
            "context": [
                303
            ],
            "parameters": [
                1
            ],
            "overrides": [
                539
            ],
            "stepId": [
                10
            ],
            "__typename": [
                1
            ]
        },
        "SimulationContextOverridesInput": {
            "teamCount": [
                80
            ],
            "bestOf": [
                80
            ],
            "teams": [
                540
            ],
            "presetParameters": [
                542
            ],
            "__typename": [
                1
            ]
        },
        "SimulationTeamOverrideInput": {
            "position": [
                80
            ],
            "id": [
                1
            ],
            "metadata": [
                541
            ],
            "customFields": [
                541
            ],
            "rank": [
                80
            ],
            "status": [
                218
            ],
            "__typename": [
                1
            ]
        },
        "SimulationKeyValueInput": {
            "key": [
                1
            ],
            "value": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "SimulationPresetParameterInput": {
            "name": [
                1
            ],
            "type": [
                543
            ],
            "stringValue": [
                1
            ],
            "numberValue": [
                17
            ],
            "booleanValue": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "SimulationPresetParameterValueType": {},
        "JournalFiltersInput": {
            "categories": [
                419
            ],
            "types": [
                1
            ],
            "typePrefix": [
                1
            ],
            "actorType": [
                416
            ],
            "actorId": [
                10
            ],
            "primaryResourceType": [
                1
            ],
            "primaryResourceId": [
                10
            ],
            "severity": [
                420
            ],
            "rootOnly": [
                4
            ],
            "parentEntryId": [
                10
            ],
            "correlationId": [
                10
            ],
            "createdAfter": [
                12
            ],
            "createdBefore": [
                12
            ],
            "includeSimulations": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "EventsQuery": {
            "orderBy": [
                546
            ],
            "orderDirection": [
                532
            ],
            "status": [
                547
            ],
            "showNotVisible": [
                4
            ],
            "filterByPlayers": [
                548
            ],
            "__typename": [
                1
            ]
        },
        "EventsQueryOrderBy": {},
        "EventsQueryStatus": {},
        "EventsQueryPlayerIdWithTeamStatusInput": {
            "playerId": [
                10
            ],
            "reservationStatus": [
                365
            ],
            "memberStatus": [
                348
            ],
            "__typename": [
                1
            ]
        },
        "EventReservationsQueryInput": {
            "filterByRegistrationStatus": [
                365
            ],
            "retrieveOnlyGroupMembersWithStatus": [
                348
            ],
            "filterByPlayerUsernameQuery": [
                1
            ],
            "filterByReservationProperties": [
                491
            ],
            "filterByPlayerProperties": [
                491
            ],
            "filterByPlayerIdentityProviderProperties": [
                535
            ],
            "filterByPlayers": [
                550
            ],
            "filterByGroupStatus": [
                350
            ],
            "__typename": [
                1
            ]
        },
        "EventReservationsQueryPlayerIdWithGroupStatusInput": {
            "playerId": [
                10
            ],
            "memberStatus": [
                348
            ],
            "__typename": [
                1
            ]
        },
        "EventSlotsFilter": {
            "eventIds": [
                10
            ],
            "venueIds": [
                10
            ],
            "from": [
                12
            ],
            "to": [
                12
            ],
            "onlyReservable": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "UserGroupsQueryInput": {
            "ids": [
                10
            ],
            "__typename": [
                1
            ]
        },
        "ShopsFilterInput": {
            "ids": [
                10
            ],
            "externalIds": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "ShopCategoriesFilterInput": {
            "ids": [
                10
            ],
            "externalIds": [
                1
            ],
            "shopIds": [
                10
            ],
            "__typename": [
                1
            ]
        },
        "PlayerShopProductPurshasesFilterInput": {
            "shopProductIds": [
                10
            ],
            "playerProfileIds": [
                10
            ],
            "shopIds": [
                10
            ],
            "ids": [
                10
            ],
            "__typename": [
                1
            ]
        },
        "ShopProductsFilterInput": {
            "categoryIds": [
                10
            ],
            "ids": [
                10
            ],
            "externalIds": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "ItemsFilterInput": {
            "categoryIds": [
                10
            ],
            "ids": [
                10
            ],
            "externalIds": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "PlayerItemsFilterInput": {
            "itemIds": [
                10
            ],
            "playerProfileIds": [
                10
            ],
            "__typename": [
                1
            ]
        },
        "ItemCategoriesFilterInput": {
            "ids": [
                10
            ],
            "externalIds": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "CurrenciesFilterInput": {
            "ids": [
                10
            ],
            "externalIds": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "PlayerCurrenciesFilterInput": {
            "currencyIds": [
                10
            ],
            "playerProfileIds": [
                10
            ],
            "__typename": [
                1
            ]
        },
        "MarketplaceAppsFilterInput": {
            "status": [
                141
            ],
            "search": [
                1
            ],
            "categories": [
                1
            ],
            "ownedByMe": [
                4
            ],
            "hasModules": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "EntityMetafieldsFilterInput": {
            "namespace": [
                1
            ],
            "appId": [
                10
            ],
            "__typename": [
                1
            ]
        },
        "AppFunctionCallInput": {
            "appSlug": [
                1
            ],
            "function": [
                1
            ],
            "payload": [
                1
            ],
            "idempotencyKey": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "PermissionCheckInput": {
            "permission": [
                1
            ],
            "resource": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "Mutation": {
            "deleteAccount": [
                4,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "accountIdentityGenerateAccessToken": [
                1,
                {
                    "identityProviderId": [
                        10,
                        "ID!"
                    ],
                    "accountId": [
                        10
                    ]
                }
            ],
            "accountIdentityRefresh": [
                72,
                {
                    "identityProviderId": [
                        10,
                        "ID!"
                    ],
                    "accountId": [
                        10
                    ]
                }
            ],
            "attachOrUpdateIdentityToAccount": [
                72,
                {
                    "identityProviderId": [
                        10,
                        "ID!"
                    ],
                    "token": [
                        1,
                        "String!"
                    ]
                }
            ],
            "generateIdentityLinkUrl": [
                78,
                {
                    "identityProviderId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "deleteAccountIdentity": [
                4,
                {
                    "identityProviderId": [
                        10,
                        "ID!"
                    ],
                    "accountId": [
                        10
                    ]
                }
            ],
            "updateConfiguration": [
                168,
                {
                    "id": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        567,
                        "CreateConfigurationInput!"
                    ]
                }
            ],
            "deleteConfiguration": [
                4,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "leaderboardRegisterPlayerScore": [
                170,
                {
                    "input": [
                        568,
                        "LeaderboardRegisterPlayerScoreInput!"
                    ]
                }
            ],
            "createLeaderboard": [
                173,
                {
                    "input": [
                        570,
                        "CreateLeaderboardInput!"
                    ]
                }
            ],
            "updateLeaderboard": [
                173,
                {
                    "id": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        571,
                        "UpdateLeaderboardInput!"
                    ]
                }
            ],
            "deleteLeaderboard": [
                572,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "createLeaderboardSeason": [
                176,
                {
                    "leaderboardId": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        573,
                        "CreateLeaderboardSeasonInput!"
                    ]
                }
            ],
            "updateLeaderboardSeason": [
                176,
                {
                    "id": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        574,
                        "UpdateLeaderboardSeasonInput!"
                    ]
                }
            ],
            "deleteLeaderboardSeason": [
                572,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "createLeaderboardSeasonBucket": [
                179,
                {
                    "seasonId": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        575,
                        "CreateLeaderboardSeasonBucketInput!"
                    ]
                }
            ],
            "updateLeaderboardSeasonBucket": [
                179,
                {
                    "id": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        576,
                        "UpdateLeaderboardSeasonBucketInput!"
                    ]
                }
            ],
            "deleteLeaderboardSeasonBucket": [
                572,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "updateOrganization": [
                70,
                {
                    "organization": [
                        577,
                        "UpdateOrganizationInput!"
                    ]
                }
            ],
            "createOrganization": [
                70,
                {
                    "organization": [
                        579,
                        "CreateOrganizationInput!"
                    ]
                }
            ],
            "createOrganizationGroup": [
                9,
                {
                    "input": [
                        580,
                        "CreateOrganizationGroupInput!"
                    ]
                }
            ],
            "updateOrganizationGroup": [
                9,
                {
                    "id": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        580,
                        "CreateOrganizationGroupInput!"
                    ]
                }
            ],
            "deleteOrganizationGroup": [
                4,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "setOrganizationMembership": [
                55,
                {
                    "input": [
                        581,
                        "SetOrganizationMembershipInput!"
                    ]
                }
            ],
            "deleteOrganizationMembership": [
                4,
                {
                    "input": [
                        582,
                        "DeleteOrganizationMembershipInput!"
                    ]
                }
            ],
            "createIdentityProvider": [
                200,
                {
                    "input": [
                        583,
                        "CreateOrganizationIdentityProvider!"
                    ]
                }
            ],
            "updateIdentityProvider": [
                200,
                {
                    "providerId": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        586,
                        "UpdateOrganizationIdentityProvider!"
                    ]
                }
            ],
            "deleteIdentityProvider": [
                4,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "createOrganizationApp": [
                193,
                {
                    "input": [
                        587,
                        "CreateOrganizationAppInput!"
                    ]
                }
            ],
            "resetOrganizationAppSecret": [
                1,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "updateOrganizationApp": [
                193,
                {
                    "id": [
                        1,
                        "String!"
                    ],
                    "input": [
                        588,
                        "UpdateOrganizationAppInput!"
                    ]
                }
            ],
            "deleteOrganizationApp": [
                4,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "updateOrganizationAppManifest": [
                193,
                {
                    "id": [
                        1,
                        "String!"
                    ],
                    "manifest": [
                        589,
                        "AppManifestInput!"
                    ]
                }
            ],
            "regenerateAppWebhookSecret": [
                196,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "createAppRelease": [
                189,
                {
                    "appId": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        609,
                        "CreateAppReleaseInput!"
                    ]
                }
            ],
            "createWebhook": [
                206,
                {
                    "input": [
                        610,
                        "CreateWebhookInput!"
                    ]
                }
            ],
            "updateWebhook": [
                206,
                {
                    "id": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        611,
                        "UpdateWebhookInput!"
                    ]
                }
            ],
            "deleteWebhook": [
                206,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "regenerateWebhookSecret": [
                206,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "setOrganizationAttachedApp": [
                197,
                {
                    "input": [
                        612,
                        "SetOrganizationAttachedAppInput!"
                    ]
                }
            ],
            "deleteOrganizationAttachedApp": [
                4,
                {
                    "input": [
                        613,
                        "DeleteOrganizationAttachedAppInput!"
                    ]
                }
            ],
            "emailSend": [
                4,
                {
                    "fromTemplate": [
                        614
                    ],
                    "fromCustom": [
                        615
                    ]
                }
            ],
            "emailConfigurationUpdate": [
                51,
                {
                    "input": [
                        508,
                        "EmailConfigurationInput!"
                    ]
                }
            ],
            "emailTemplateCreate": [
                183,
                {
                    "input": [
                        616,
                        "EmailTemplateCreateInput!"
                    ]
                }
            ],
            "emailTemplateUpdate": [
                183,
                {
                    "id": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        617,
                        "EmailTemplateUpdateInput!"
                    ]
                }
            ],
            "emailTemplateDelete": [
                183,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "createPlayer": [
                73,
                {
                    "input": [
                        618,
                        "CreatePlayerInput!"
                    ]
                }
            ],
            "updatePlayer": [
                73,
                {
                    "input": [
                        620,
                        "UpdatePlayerInput!"
                    ],
                    "id": [
                        10
                    ],
                    "customId": [
                        1
                    ]
                }
            ],
            "createOrUpdateMyPlayerProfile": [
                73,
                {
                    "input": [
                        621,
                        "UpdateMePlayerInput!"
                    ]
                }
            ],
            "deletePlayer": [
                4,
                {
                    "id": [
                        10
                    ],
                    "customId": [
                        10
                    ]
                }
            ],
            "createTournament": [
                58,
                {
                    "input": [
                        622,
                        "CreateTournamentInput!"
                    ]
                }
            ],
            "updateTournament": [
                58,
                {
                    "input": [
                        625,
                        "UpdateTournamentInput!"
                    ],
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "deleteTournament": [
                4,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "startTournamentStep": [
                4,
                {
                    "stepId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "createTournamentStep": [
                252,
                {
                    "tournamentId": [
                        10,
                        "ID!"
                    ],
                    "configuration": [
                        498
                    ],
                    "step": [
                        626,
                        "CreateTournamentStepInput!"
                    ]
                }
            ],
            "updateTournamentStep": [
                252,
                {
                    "stepId": [
                        10,
                        "ID!"
                    ],
                    "configuration": [
                        498
                    ],
                    "step": [
                        626,
                        "CreateTournamentStepInput!"
                    ]
                }
            ],
            "deleteTournamentStep": [
                4,
                {
                    "stepId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "generateTournamentStep": [
                4,
                {
                    "stepId": [
                        10,
                        "ID!"
                    ],
                    "teamsCount": [
                        80
                    ]
                }
            ],
            "seedTournamentStep": [
                252,
                {
                    "input": [
                        627
                    ],
                    "legacyInput": [
                        629
                    ]
                }
            ],
            "updateSeedingOrder": [
                252,
                {
                    "stepId": [
                        10,
                        "ID!"
                    ],
                    "orderedTeamIds": [
                        10,
                        "[ID!]!"
                    ]
                }
            ],
            "updateSeedingPins": [
                252,
                {
                    "stepId": [
                        10,
                        "ID!"
                    ],
                    "pins": [
                        628,
                        "[SeedingPinInput!]!"
                    ]
                }
            ],
            "withdrawTeamFromStep": [
                252,
                {
                    "stepId": [
                        10,
                        "ID!"
                    ],
                    "teamId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "reseedStep": [
                252,
                {
                    "stepId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "restartTournamentStep": [
                4,
                {
                    "stepId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "resetTournamentStepSeeding": [
                4,
                {
                    "stepId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "resetTournamentStep": [
                4,
                {
                    "stepId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "updateMatchScores": [
                239,
                {
                    "matchId": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        635,
                        "[UpdateMatchScoreInput!]!"
                    ]
                }
            ],
            "registerCustomTournamentTeams": [
                248,
                {
                    "tournamentId": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        637,
                        "RegisterCustomTeamsInput!"
                    ]
                }
            ],
            "registerTournamentTeam": [
                248,
                {
                    "tournamentId": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        640,
                        "RegisterTournamentTeamInput!"
                    ]
                }
            ],
            "updateTournamentTeam": [
                248,
                {
                    "input": [
                        641,
                        "UpdateTournamentTeamInput!"
                    ],
                    "tournamentId": [
                        10
                    ],
                    "teamId": [
                        10
                    ]
                }
            ],
            "deleteTournamentTeam": [
                4,
                {
                    "tournamentId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "deleteAnyTournamentTeam": [
                4,
                {
                    "teamId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "confirmTournamentTeam": [
                248,
                {
                    "teamId": [
                        10,
                        "ID!"
                    ],
                    "confirm": [
                        4,
                        "Boolean!"
                    ]
                }
            ],
            "confirmTournamentAttendance": [
                248,
                {
                    "tournamentId": [
                        10,
                        "ID!"
                    ],
                    "attendance": [
                        4,
                        "Boolean!"
                    ]
                }
            ],
            "updateTournamentTeamStatus": [
                248,
                {
                    "tournamentTeamId": [
                        10,
                        "ID!"
                    ],
                    "status": [
                        60,
                        "TournamentTeamStatus!"
                    ]
                }
            ],
            "inviteTournamentTeamMember": [
                4,
                {
                    "tournamentId": [
                        10,
                        "ID!"
                    ],
                    "playerId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "answerToTournamentTeamInvite": [
                4,
                {
                    "teamId": [
                        10,
                        "ID!"
                    ],
                    "accept": [
                        4,
                        "Boolean!"
                    ]
                }
            ],
            "deleteTournamentTeamInvite": [
                4,
                {
                    "teamId": [
                        10,
                        "ID!"
                    ],
                    "playerId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "tournamentAdminUpsert": [
                266,
                {
                    "input": [
                        642,
                        "TournamentAdminUpsertInput!"
                    ]
                }
            ],
            "tournamentAdminDelete": [
                4,
                {
                    "input": [
                        643,
                        "TournamentAdminDeleteInput!"
                    ]
                }
            ],
            "createStepRuleSet": [
                285,
                {
                    "tournamentStepId": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        644,
                        "CreateStepRuleSetInput!"
                    ]
                }
            ],
            "applyPresetScript": [
                285,
                {
                    "presetScriptId": [
                        10,
                        "ID!"
                    ],
                    "tournamentStepId": [
                        10,
                        "ID!"
                    ],
                    "parameters": [
                        1
                    ]
                }
            ],
            "applyBuiltinPreset": [
                285,
                {
                    "builtinPresetId": [
                        1,
                        "String!"
                    ],
                    "tournamentStepId": [
                        10,
                        "ID!"
                    ],
                    "parameters": [
                        1
                    ]
                }
            ],
            "duplicateBuiltinPreset": [
                288,
                {
                    "builtinPresetId": [
                        1,
                        "String!"
                    ],
                    "name": [
                        1
                    ]
                }
            ],
            "createPresetScript": [
                288,
                {
                    "input": [
                        655,
                        "CreatePresetScriptInput!"
                    ]
                }
            ],
            "updatePresetScript": [
                288,
                {
                    "id": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        657,
                        "UpdatePresetScriptInput!"
                    ]
                }
            ],
            "deletePresetScript": [
                4,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "setStepWinners": [
                252,
                {
                    "stepId": [
                        10,
                        "ID!"
                    ],
                    "teamIds": [
                        10,
                        "[ID!]!"
                    ]
                }
            ],
            "setTournamentWinners": [
                58,
                {
                    "tournamentId": [
                        10,
                        "ID!"
                    ],
                    "teamIds": [
                        10,
                        "[ID!]!"
                    ]
                }
            ],
            "setStepTeamStatus": [
                4,
                {
                    "stepId": [
                        10,
                        "ID!"
                    ],
                    "teamId": [
                        10,
                        "ID!"
                    ],
                    "status": [
                        218,
                        "TeamScopeStatus!"
                    ]
                }
            ],
            "validateStepRuleSet": [
                324,
                {
                    "stepRuleSetId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "cancelStepRuleSetValidation": [
                324,
                {
                    "jobId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "stripeCreatePortalSession": [
                1
            ],
            "platformFileCreate": [
                127,
                {
                    "input": [
                        658,
                        "PlatformCdnFileCreateInput!"
                    ],
                    "platformId": [
                        10
                    ],
                    "templateId": [
                        10
                    ]
                }
            ],
            "platformFilePublish": [
                127,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "platformFileGenerateUploadUrl": [
                130,
                {
                    "id": [
                        10,
                        "ID!"
                    ],
                    "size": [
                        17,
                        "Float!"
                    ]
                }
            ],
            "platformFileValidateFileUpload": [
                127,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "platformFileUpdate": [
                127,
                {
                    "id": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        659,
                        "PlatformFileUpdateInput!"
                    ]
                }
            ],
            "platformFileDelete": [
                572,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "platformCreate": [
                450,
                {
                    "input": [
                        660,
                        "CreatePlatformInput!"
                    ]
                }
            ],
            "platformUpdate": [
                450,
                {
                    "id": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        661,
                        "UpdatePlatformInput!"
                    ]
                }
            ],
            "platformDelete": [
                572,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "platformThemeUpdate": [
                450,
                {
                    "platformId": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        662,
                        "PlatformThemeInput!"
                    ]
                }
            ],
            "platformRegisterCustomDomain": [
                123,
                {
                    "platformId": [
                        10,
                        "ID!"
                    ],
                    "hostname": [
                        1,
                        "String!"
                    ]
                }
            ],
            "platformForceCustomDomainRecheck": [
                123,
                {
                    "hostname": [
                        1,
                        "String!"
                    ]
                }
            ],
            "platformRemoveCustomDomain": [
                572,
                {
                    "hostname": [
                        1,
                        "String!"
                    ]
                }
            ],
            "platformTemplateCreate": [
                451,
                {
                    "input": [
                        665,
                        "CreatePlatformTemplateInput!"
                    ]
                }
            ],
            "platformTemplateUpdate": [
                451,
                {
                    "id": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        666,
                        "UpdatePlatformTemplateInput!"
                    ]
                }
            ],
            "platformTemplateApply": [
                450,
                {
                    "platformTemplateId": [
                        10,
                        "ID!"
                    ],
                    "platformId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "platformTemplateDelete": [
                572,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "organizationSubscriptionItemsUpdate": [
                572,
                {
                    "items": [
                        667,
                        "[OrganizationSubscriptionItemUpdateInput!]!"
                    ],
                    "coupon": [
                        1
                    ],
                    "referral": [
                        1
                    ]
                }
            ],
            "organizationSkillRatingsRegisterMatch": [
                478,
                {
                    "organizationSkillRatingId": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        668,
                        "OrganizationSkillRatingsRegisterMatchInput!"
                    ]
                }
            ],
            "organizationSkillRatingCreate": [
                479,
                {
                    "input": [
                        670,
                        "OrganizationSkillRatingCreateInput!"
                    ]
                }
            ],
            "organizationSkillRatingUpdate": [
                479,
                {
                    "id": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        671,
                        "OrganizationSkillRatingUpdateInput!"
                    ]
                }
            ],
            "organizationSkillRatingDelete": [
                572,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "eventCreate": [
                382,
                {
                    "input": [
                        672,
                        "EventCreateInput!"
                    ]
                }
            ],
            "eventUpdate": [
                382,
                {
                    "input": [
                        673,
                        "EventUpdateInput!"
                    ],
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "eventDelete": [
                4,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "eventTicketConfigurationCreate": [
                389,
                {
                    "input": [
                        674,
                        "EventTicketConfigurationCreateInput!"
                    ]
                }
            ],
            "eventTicketConfigurationUpdate": [
                389,
                {
                    "ticketConfigurationId": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        675,
                        "EventTicketConfigurationUpdateInput!"
                    ]
                }
            ],
            "eventTicketConfigurationDelete": [
                389,
                {
                    "ticketConfigurationId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "eventReservationUpdateStatus": [
                364,
                {
                    "reservationId": [
                        10,
                        "ID!"
                    ],
                    "status": [
                        365,
                        "EventReservationStatus!"
                    ],
                    "confirmPaymentRefundOrCancel": [
                        4
                    ],
                    "refundPayment": [
                        4
                    ],
                    "ticketsToReserve": [
                        676
                    ]
                }
            ],
            "eventReservationConfirmPresence": [
                364,
                {
                    "eventId": [
                        10,
                        "ID!"
                    ],
                    "confirmed": [
                        4,
                        "Boolean!"
                    ]
                }
            ],
            "eventReservationValidateAndPay": [
                370,
                {
                    "eventId": [
                        10,
                        "ID!"
                    ],
                    "options": [
                        678,
                        "EventReservationValidateAndPayInput!"
                    ],
                    "ticketConfigurations": [
                        680,
                        "[EventReservationTicketConfigurationInput!]"
                    ]
                }
            ],
            "eventReservationCreate": [
                364,
                {
                    "eventId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "eventReservationUpdateTickets": [
                364,
                {
                    "reservationId": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        681,
                        "EventReservationUpdateTicketsInput!"
                    ]
                }
            ],
            "eventReservationStartRegistrationSession": [
                364,
                {
                    "eventId": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        676,
                        "EventReservationRegisterTicketsInput!"
                    ]
                }
            ],
            "eventReservationCancel": [
                364,
                {
                    "reservationId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "eventVenueRequestImageUpdate": [
                130,
                {
                    "id": [
                        10,
                        "ID!"
                    ],
                    "size": [
                        17,
                        "Float!"
                    ]
                }
            ],
            "eventVenueValidateImage": [
                398,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "eventVenueCreate": [
                398,
                {
                    "input": [
                        682,
                        "EventVenueCreateInput!"
                    ]
                }
            ],
            "eventVenueUpdate": [
                398,
                {
                    "id": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        683,
                        "EventVenueUpdateInput!"
                    ]
                }
            ],
            "eventVenueDelete": [
                398,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "eventVenueSeatsUpdate": [
                358,
                {
                    "venueId": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        684,
                        "EventVenueSeatsUpdateInput!"
                    ]
                }
            ],
            "eventVenueSeatTypeCreate": [
                394,
                {
                    "venueId": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        687,
                        "EventVenueSeatTypeCreateInput!"
                    ]
                }
            ],
            "eventVenueSeatTypeUpdate": [
                394,
                {
                    "id": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        688,
                        "EventVenueSeatTypeUpdateInput!"
                    ]
                }
            ],
            "eventVenueSeatTypeDelete": [
                394,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "eventCalendarGenerate": [
                387,
                {
                    "input": [
                        689,
                        "EventCalendarGenerateInput!"
                    ]
                }
            ],
            "eventWaitlistJoin": [
                401,
                {
                    "ticketConfigurationId": [
                        10,
                        "ID!"
                    ],
                    "quantity": [
                        80,
                        "Int!"
                    ],
                    "replaceEntryId": [
                        10
                    ]
                }
            ],
            "eventWaitlistLeave": [
                401,
                {
                    "entryId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "eventWaitlistRemoveEntry": [
                401,
                {
                    "entryId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "eventReservationChangeTickets": [
                364,
                {
                    "reservationId": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        693,
                        "EventReservationChangeTicketsInput!"
                    ]
                }
            ],
            "eventReservationReleaseTickets": [
                364,
                {
                    "reservationId": [
                        10,
                        "ID!"
                    ],
                    "reservationTicketIds": [
                        10,
                        "[ID!]!"
                    ]
                }
            ],
            "organizationPaymentCollectionConfigurationCreateOrUpdateAccount": [
                1
            ],
            "userGroupInvite": [
                347,
                {
                    "groupId": [
                        10,
                        "ID!"
                    ],
                    "playerId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "userGroupUpdateName": [
                349,
                {
                    "groupId": [
                        10,
                        "ID!"
                    ],
                    "name": [
                        1
                    ]
                }
            ],
            "userGroupUpdateInvite": [
                347,
                {
                    "groupId": [
                        10,
                        "ID!"
                    ],
                    "status": [
                        348,
                        "UserGroupMemberStatus!"
                    ]
                }
            ],
            "userGroupDeleteInvite": [
                347,
                {
                    "groupId": [
                        10,
                        "ID!"
                    ],
                    "playerId": [
                        10
                    ]
                }
            ],
            "shopCreate": [
                471,
                {
                    "input": [
                        694,
                        "ShopCreateInput!"
                    ]
                }
            ],
            "shopUpdate": [
                471,
                {
                    "id": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        695,
                        "ShopUpdateInput!"
                    ]
                }
            ],
            "shopDelete": [
                471,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "shopCategoryCreate": [
                461,
                {
                    "input": [
                        696,
                        "ShopCategoryCreateInput!"
                    ]
                }
            ],
            "shopCategoryUpdate": [
                461,
                {
                    "id": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        697,
                        "ShopCategoryUpdateInput!"
                    ]
                }
            ],
            "shopCategoryDelete": [
                461,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "playerShopProductPurshase": [
                457,
                {
                    "shopId": [
                        10,
                        "ID!"
                    ],
                    "paymentConfig": [
                        698
                    ],
                    "input": [
                        699,
                        "PlayerShopProductPurshaseInput!"
                    ]
                }
            ],
            "shopProductCreate": [
                468,
                {
                    "shopId": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        701,
                        "ShopProductCreateInput!"
                    ]
                }
            ],
            "shopProductUpdate": [
                468,
                {
                    "productId": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        702,
                        "ShopProductUpdateInput!"
                    ]
                }
            ],
            "shopProductDelete": [
                468,
                {
                    "productId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "itemCreate": [
                406,
                {
                    "input": [
                        703,
                        "ItemCreateInput!"
                    ]
                }
            ],
            "itemUpdate": [
                406,
                {
                    "id": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        704,
                        "ItemUpdateInput!"
                    ]
                }
            ],
            "itemDelete": [
                406,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "playerItemsUpdate": [
                409,
                {
                    "playerId": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        705,
                        "PlayerItemsUpdateInput!"
                    ]
                }
            ],
            "itemCategoryCreate": [
                412,
                {
                    "input": [
                        707,
                        "ItemCategoryCreateInput!"
                    ]
                }
            ],
            "itemCategoryUpdate": [
                412,
                {
                    "id": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        708,
                        "ItemCategoryUpdateInput!"
                    ]
                }
            ],
            "itemCategoryDelete": [
                412,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "currencyCreate": [
                334,
                {
                    "input": [
                        709,
                        "CurrencyCreateInput!"
                    ]
                }
            ],
            "currencyUpdate": [
                334,
                {
                    "id": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        710,
                        "CurrencyUpdateInput!"
                    ]
                }
            ],
            "currencyDelete": [
                334,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "playerCurrencyUpdate": [
                337,
                {
                    "playerId": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        711,
                        "[PlayerCurrencyUpdateInput!]!"
                    ]
                }
            ],
            "publishMarketplaceApp": [
                140,
                {
                    "input": [
                        713,
                        "PublishMarketplaceAppInput!"
                    ]
                }
            ],
            "updateMarketplaceApp": [
                140,
                {
                    "id": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        714,
                        "UpdateMarketplaceAppInput!"
                    ]
                }
            ],
            "installMarketplaceApp": [
                148,
                {
                    "input": [
                        715,
                        "InstallMarketplaceAppInput!"
                    ]
                }
            ],
            "uninstallMarketplaceApp": [
                4,
                {
                    "marketplaceAppId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "submitMarketplaceAppReview": [
                145,
                {
                    "input": [
                        716,
                        "SubmitMarketplaceAppReviewInput!"
                    ]
                }
            ],
            "setMarketplaceAppPricing": [
                153,
                {
                    "input": [
                        717,
                        "SetMarketplaceAppPricingInput!"
                    ]
                }
            ],
            "createMarketplaceCheckout": [
                1,
                {
                    "input": [
                        718,
                        "CreateMarketplaceCheckoutInput!"
                    ]
                }
            ],
            "appCreateRelease": [
                138,
                {
                    "marketplaceAppId": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        719,
                        "AppCreateReleaseInput!"
                    ]
                }
            ],
            "appFinalizeRelease": [
                139,
                {
                    "releaseId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "appPublishRelease": [
                136,
                {
                    "releaseId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "platformModuleConfigSet": [
                431,
                {
                    "input": [
                        721,
                        "PlatformModuleConfigSetInput!"
                    ]
                }
            ],
            "platformModuleConfigDelete": [
                4,
                {
                    "input": [
                        723,
                        "PlatformModuleConfigDeleteInput!"
                    ]
                }
            ],
            "entityMetafieldSet": [
                434,
                {
                    "input": [
                        724,
                        "SetEntityMetafieldInput!"
                    ]
                }
            ],
            "entityMetafieldDelete": [
                4,
                {
                    "input": [
                        725,
                        "DeleteEntityMetafieldInput!"
                    ]
                }
            ],
            "setObjectMetadata": [
                436,
                {
                    "input": [
                        726,
                        "SetObjectMetadataInput!"
                    ]
                }
            ],
            "removeObjectMetadata": [
                4,
                {
                    "input": [
                        728,
                        "RemoveObjectMetadataInput!"
                    ]
                }
            ],
            "createCustomFieldDefinition": [
                442,
                {
                    "input": [
                        729,
                        "CreateCustomFieldDefinitionInput!"
                    ]
                }
            ],
            "updateCustomFieldDefinition": [
                442,
                {
                    "id": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        731,
                        "UpdateCustomFieldDefinitionInput!"
                    ]
                }
            ],
            "deleteCustomFieldDefinition": [
                4,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "reorderCustomFieldDefinitions": [
                442,
                {
                    "objectType": [
                        439,
                        "ObjectType!"
                    ],
                    "orderedIds": [
                        10,
                        "[ID!]!"
                    ]
                }
            ],
            "setCustomFieldValues": [
                444,
                {
                    "input": [
                        732,
                        "SetCustomFieldValuesInput!"
                    ]
                }
            ],
            "appInstallationPin": [
                148,
                {
                    "input": [
                        734,
                        "AppInstallationPinInput!"
                    ]
                }
            ],
            "appFunctionsSetEnabled": [
                148,
                {
                    "appSlug": [
                        1,
                        "String!"
                    ],
                    "function": [
                        1
                    ],
                    "enabled": [
                        4,
                        "Boolean!"
                    ]
                }
            ],
            "guestWardCreate": [
                155,
                {
                    "input": [
                        735,
                        "GuestWardCreateInput!"
                    ]
                }
            ],
            "guestWardRemove": [
                4,
                {
                    "wardPlayerId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "guestProfileCreate": [
                164,
                {
                    "input": [
                        736,
                        "GuestProfileCreateInput!"
                    ]
                }
            ],
            "guestProfileUpdate": [
                155,
                {
                    "playerId": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        737,
                        "GuestProfileUpdateInput!"
                    ]
                }
            ],
            "guestGuardianLinkCreate": [
                165,
                {
                    "guardianPlayerId": [
                        10,
                        "ID!"
                    ],
                    "wardPlayerId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "guestGuardianLinkDelete": [
                4,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "guestConfigurationUpdate": [
                166,
                {
                    "input": [
                        738,
                        "GuestConfigurationInput!"
                    ]
                }
            ],
            "guestLinkExchange": [
                158,
                {
                    "token": [
                        1,
                        "String!"
                    ]
                }
            ],
            "guestSessionEnd": [
                4
            ],
            "guestLinkCreate": [
                163,
                {
                    "input": [
                        739,
                        "GuestLinkCreateInput!"
                    ]
                }
            ],
            "guestLinkRevoke": [
                80,
                {
                    "input": [
                        740,
                        "GuestLinkRevokeInput!"
                    ]
                }
            ],
            "guestSessionsRevoke": [
                80,
                {
                    "playerId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "guestEnter": [
                158,
                {
                    "input": [
                        741,
                        "GuestEnterInput!"
                    ]
                }
            ],
            "appInstallationConfigSet": [
                85,
                {
                    "appSlug": [
                        1,
                        "String!"
                    ],
                    "values": [
                        742,
                        "[AppConfigValueInput!]!"
                    ]
                }
            ],
            "appFunctionCall": [
                83,
                {
                    "input": [
                        564,
                        "AppFunctionCallInput!"
                    ]
                }
            ],
            "customPermissionCreate": [
                87,
                {
                    "input": [
                        743,
                        "CustomPermissionInput!"
                    ]
                }
            ],
            "customPermissionUpdate": [
                87,
                {
                    "id": [
                        1,
                        "String!"
                    ],
                    "input": [
                        744,
                        "CustomPermissionUpdateInput!"
                    ]
                }
            ],
            "customPermissionDelete": [
                4,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "registrationSeriesCreate": [
                340,
                {
                    "input": [
                        745,
                        "RegistrationSeriesCreateInput!"
                    ]
                }
            ],
            "registrationSeriesUpdate": [
                340,
                {
                    "id": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        746,
                        "RegistrationSeriesUpdateInput!"
                    ]
                }
            ],
            "registrationSeriesDelete": [
                4,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "registrationSeriesAssign": [
                4,
                {
                    "seriesId": [
                        10
                    ],
                    "eventIds": [
                        10,
                        "[ID!]"
                    ],
                    "tournamentIds": [
                        10,
                        "[ID!]"
                    ]
                }
            ],
            "organizationModerationUpdate": [
                435,
                {
                    "input": [
                        747,
                        "OrganizationModerationInput!"
                    ]
                }
            ],
            "__typename": [
                1
            ]
        },
        "CreateConfigurationInput": {
            "name": [
                1
            ],
            "description": [
                1
            ],
            "type": [
                32
            ],
            "stepConfiguration": [
                498
            ],
            "tournamentConfiguration": [
                507
            ],
            "__typename": [
                1
            ]
        },
        "LeaderboardRegisterPlayerScoreInput": {
            "leaderboardId": [
                10
            ],
            "playerId": [
                10
            ],
            "score": [
                569
            ],
            "__typename": [
                1
            ]
        },
        "PositiveInt": {},
        "CreateLeaderboardInput": {
            "name": [
                1
            ],
            "description": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "UpdateLeaderboardInput": {
            "name": [
                1
            ],
            "description": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "Void": {},
        "CreateLeaderboardSeasonInput": {
            "name": [
                1
            ],
            "start": [
                12
            ],
            "end": [
                12
            ],
            "startingScore": [
                17
            ],
            "__typename": [
                1
            ]
        },
        "UpdateLeaderboardSeasonInput": {
            "name": [
                1
            ],
            "start": [
                12
            ],
            "end": [
                12
            ],
            "startingScore": [
                17
            ],
            "__typename": [
                1
            ]
        },
        "CreateLeaderboardSeasonBucketInput": {
            "name": [
                1
            ],
            "minScore": [
                17
            ],
            "scoreCalculationType": [
                180
            ],
            "__typename": [
                1
            ]
        },
        "UpdateLeaderboardSeasonBucketInput": {
            "name": [
                1
            ],
            "minScore": [
                17
            ],
            "scoreCalculationType": [
                180
            ],
            "__typename": [
                1
            ]
        },
        "UpdateOrganizationInput": {
            "name": [
                1
            ],
            "description": [
                1
            ],
            "configuration": [
                578
            ],
            "__typename": [
                1
            ]
        },
        "OrganizationConfigurationInput": {
            "customFields": [
                490
            ],
            "__typename": [
                1
            ]
        },
        "CreateOrganizationInput": {
            "name": [
                1
            ],
            "description": [
                1
            ],
            "configuration": [
                578
            ],
            "__typename": [
                1
            ]
        },
        "CreateOrganizationGroupInput": {
            "name": [
                1
            ],
            "permissions": [
                489
            ],
            "__typename": [
                1
            ]
        },
        "SetOrganizationMembershipInput": {
            "userId": [
                10
            ],
            "email": [
                77
            ],
            "permissions": [
                489
            ],
            "groupId": [
                10
            ],
            "__typename": [
                1
            ]
        },
        "DeleteOrganizationMembershipInput": {
            "userId": [
                10
            ],
            "__typename": [
                1
            ]
        },
        "CreateOrganizationIdentityProvider": {
            "enabled": [
                4
            ],
            "requiredForPlayerValidation": [
                4
            ],
            "allowLogin": [
                4
            ],
            "description": [
                1
            ],
            "icon": [
                1
            ],
            "identityProviderId": [
                10
            ],
            "name": [
                1
            ],
            "oauth2Configuration": [
                584
            ],
            "openidConfiguration": [
                585
            ],
            "__typename": [
                1
            ]
        },
        "OAuthClientConfigurationInput": {
            "authorizationEndpoint": [
                1
            ],
            "dataRetrievers": [
                488
            ],
            "issuer": [
                1
            ],
            "providerType": [
                203
            ],
            "clientId": [
                1
            ],
            "clientSecret": [
                1
            ],
            "tokenEndpointAuthMethod": [
                204
            ],
            "redirectUrl": [
                1
            ],
            "tokenEndpoint": [
                1
            ],
            "authorizationUrl": [
                1
            ],
            "linkRedirectUrl": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "OpenidConfigurationInput": {
            "authorizationEndpoint": [
                1
            ],
            "dataRetrievers": [
                488
            ],
            "issuer": [
                1
            ],
            "providerType": [
                203
            ],
            "clientId": [
                1
            ],
            "clientSecret": [
                1
            ],
            "redirectUrl": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "UpdateOrganizationIdentityProvider": {
            "enabled": [
                4
            ],
            "requiredForPlayerValidation": [
                4
            ],
            "allowLogin": [
                4
            ],
            "description": [
                1
            ],
            "icon": [
                1
            ],
            "name": [
                1
            ],
            "oauth2Configuration": [
                584
            ],
            "openidConfiguration": [
                585
            ],
            "__typename": [
                1
            ]
        },
        "CreateOrganizationAppInput": {
            "name": [
                1
            ],
            "description": [
                1
            ],
            "public": [
                4
            ],
            "icon": [
                1
            ],
            "shortDescription": [
                1
            ],
            "redirectUrls": [
                1
            ],
            "logoutRedirectUrls": [
                1
            ],
            "loginUrl": [
                1
            ],
            "consentUrl": [
                1
            ],
            "requiresConsent": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "UpdateOrganizationAppInput": {
            "name": [
                1
            ],
            "description": [
                1
            ],
            "icon": [
                1
            ],
            "shortDescription": [
                1
            ],
            "redirectUrls": [
                1
            ],
            "logoutRedirectUrls": [
                1
            ],
            "loginUrl": [
                1
            ],
            "consentUrl": [
                1
            ],
            "requiresConsent": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "AppManifestInput": {
            "version": [
                1
            ],
            "permissions": [
                1
            ],
            "extensions": [
                590
            ],
            "webhookUrl": [
                1
            ],
            "webhookEvents": [
                54
            ],
            "metafieldNamespaces": [
                1
            ],
            "frontendModules": [
                592
            ],
            "config": [
                596
            ],
            "customPermissions": [
                597
            ],
            "storage": [
                598
            ],
            "operations": [
                600
            ],
            "emailTemplates": [
                601
            ],
            "auditTypes": [
                602
            ],
            "functions": [
                604
            ],
            "codeAuthorized": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "ExtensionPointInput": {
            "type": [
                96
            ],
            "label": [
                1
            ],
            "activePages": [
                1
            ],
            "size": [
                591
            ],
            "__typename": [
                1
            ]
        },
        "ExtensionPointSizeInput": {
            "maxWidth": [
                80
            ],
            "maxHeight": [
                80
            ],
            "__typename": [
                1
            ]
        },
        "FrontendModuleInput": {
            "name": [
                1
            ],
            "displayName": [
                1
            ],
            "description": [
                1
            ],
            "exportName": [
                1
            ],
            "version": [
                1
            ],
            "propsSchema": [
                593
            ],
            "events": [
                595
            ],
            "__typename": [
                1
            ]
        },
        "FrontendModulePropEntryInput": {
            "key": [
                1
            ],
            "type": [
                91
            ],
            "label": [
                1
            ],
            "description": [
                1
            ],
            "required": [
                4
            ],
            "defaultValue": [
                1
            ],
            "options": [
                594
            ],
            "param": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "FrontendModulePropOptionInput": {
            "label": [
                1
            ],
            "value": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "FrontendModuleEventInput": {
            "name": [
                1
            ],
            "description": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "AppConfigDeclInput": {
            "key": [
                1
            ],
            "type": [
                86
            ],
            "label": [
                1
            ],
            "description": [
                1
            ],
            "required": [
                4
            ],
            "defaultValue": [
                1
            ],
            "options": [
                1
            ],
            "min": [
                17
            ],
            "max": [
                17
            ],
            "pattern": [
                1
            ],
            "public": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "AppCustomPermissionDeclInput": {
            "name": [
                1
            ],
            "description": [
                1
            ],
            "resources": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "AppStorageDeclInput": {
            "collections": [
                599
            ],
            "__typename": [
                1
            ]
        },
        "AppStorageCollectionDeclInput": {
            "name": [
                1
            ],
            "ttlSeconds": [
                80
            ],
            "__typename": [
                1
            ]
        },
        "AppOperationDeclInput": {
            "name": [
                1
            ],
            "file": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "AppEmailTemplateDeclInput": {
            "key": [
                1
            ],
            "subject": [
                1
            ],
            "file": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "AppAuditTypeDeclInput": {
            "type": [
                1
            ],
            "fields": [
                603
            ],
            "__typename": [
                1
            ]
        },
        "AppFieldDeclInput": {
            "name": [
                1
            ],
            "type": [
                98
            ],
            "required": [
                4
            ],
            "options": [
                1
            ],
            "fields": [
                603
            ],
            "items": [
                603
            ],
            "maxLength": [
                80
            ],
            "min": [
                17
            ],
            "max": [
                17
            ],
            "__typename": [
                1
            ]
        },
        "AppFunctionDeclInput": {
            "name": [
                1
            ],
            "file": [
                1
            ],
            "trigger": [
                605
            ],
            "invoker": [
                115
            ],
            "runAs": [
                116
            ],
            "input": [
                603
            ],
            "output": [
                603
            ],
            "preload": [
                606
            ],
            "requires": [
                608
            ],
            "__typename": [
                1
            ]
        },
        "AppFunctionTriggerInput": {
            "type": [
                107
            ],
            "readOnly": [
                4
            ],
            "cacheSeconds": [
                80
            ],
            "hookPoint": [
                108
            ],
            "onError": [
                109
            ],
            "timeoutMs": [
                80
            ],
            "events": [
                54
            ],
            "selfTrigger": [
                4
            ],
            "cron": [
                1
            ],
            "timezone": [
                1
            ],
            "lifecycle": [
                110
            ],
            "__typename": [
                1
            ]
        },
        "AppFunctionPreloadDeclInput": {
            "name": [
                1
            ],
            "op": [
                1
            ],
            "vars": [
                607
            ],
            "__typename": [
                1
            ]
        },
        "AppFunctionPreloadVarInput": {
            "name": [
                1
            ],
            "value": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "AppFunctionRequirementDeclInput": {
            "permission": [
                1
            ],
            "resource": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "CreateAppReleaseInput": {
            "version": [
                1
            ],
            "notes": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "CreateWebhookInput": {
            "events": [
                54
            ],
            "url": [
                1
            ],
            "description": [
                1
            ],
            "active": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "UpdateWebhookInput": {
            "events": [
                54
            ],
            "url": [
                1
            ],
            "description": [
                1
            ],
            "active": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "SetOrganizationAttachedAppInput": {
            "appId": [
                1
            ],
            "permissions": [
                489
            ],
            "groupId": [
                10
            ],
            "__typename": [
                1
            ]
        },
        "DeleteOrganizationAttachedAppInput": {
            "appId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "EmailSendFromTemplateInput": {
            "triggerEvent": [
                50
            ],
            "playerIds": [
                10
            ],
            "variables": [
                491
            ],
            "__typename": [
                1
            ]
        },
        "EmailSendFromCustomInput": {
            "emailField": [
                503
            ],
            "playerIds": [
                10
            ],
            "subject": [
                1
            ],
            "body": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "EmailTemplateCreateInput": {
            "triggerEvent": [
                50
            ],
            "default": [
                4
            ],
            "name": [
                1
            ],
            "title": [
                1
            ],
            "contents": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "EmailTemplateUpdateInput": {
            "triggerEvent": [
                50
            ],
            "default": [
                4
            ],
            "name": [
                1
            ],
            "title": [
                1
            ],
            "contents": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "CreatePlayerInput": {
            "username": [
                1
            ],
            "description": [
                1
            ],
            "ownerId": [
                10
            ],
            "organizationCustomId": [
                1
            ],
            "customFields": [
                619
            ],
            "__typename": [
                1
            ]
        },
        "PlayerCustomFieldInput": {
            "property": [
                1
            ],
            "value": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "UpdatePlayerInput": {
            "username": [
                1
            ],
            "description": [
                1
            ],
            "ownerId": [
                10
            ],
            "organizationCustomId": [
                1
            ],
            "customFields": [
                619
            ],
            "__typename": [
                1
            ]
        },
        "UpdateMePlayerInput": {
            "username": [
                1
            ],
            "description": [
                1
            ],
            "customFields": [
                619
            ],
            "__typename": [
                1
            ]
        },
        "CreateTournamentInput": {
            "title": [
                1
            ],
            "description": [
                1
            ],
            "startAt": [
                12
            ],
            "endAt": [
                12
            ],
            "startRegistrationsAt": [
                12
            ],
            "endRegistrationsAt": [
                12
            ],
            "visibleAt": [
                12
            ],
            "configuration": [
                623
            ],
            "__typename": [
                1
            ]
        },
        "UpdateTournamentConfigurationOrImportFromIdInput": {
            "fromId": [
                10
            ],
            "configuration": [
                624
            ],
            "__typename": [
                1
            ]
        },
        "UpdateTournamentConfigurationInput": {
            "type": [
                32
            ],
            "teamMinSize": [
                17
            ],
            "teamMaxSize": [
                17
            ],
            "teamsCount": [
                17
            ],
            "teamStatusAfterRegistration": [
                47
            ],
            "registrationConditions": [
                506
            ],
            "customFields": [
                490
            ],
            "__typename": [
                1
            ]
        },
        "UpdateTournamentInput": {
            "title": [
                1
            ],
            "description": [
                1
            ],
            "startAt": [
                12
            ],
            "endAt": [
                12
            ],
            "startRegistrationsAt": [
                12
            ],
            "endRegistrationsAt": [
                12
            ],
            "visibleAt": [
                12
            ],
            "configuration": [
                623
            ],
            "__typename": [
                1
            ]
        },
        "CreateTournamentStepInput": {
            "name": [
                1
            ],
            "description": [
                1
            ],
            "order": [
                17
            ],
            "type": [
                253
            ],
            "properties": [
                491
            ],
            "__typename": [
                1
            ]
        },
        "SeedStepInput": {
            "stepId": [
                10
            ],
            "orderedTeamIds": [
                10
            ],
            "pins": [
                628
            ],
            "__typename": [
                1
            ]
        },
        "SeedingPinInput": {
            "teamId": [
                10
            ],
            "groupId": [
                10
            ],
            "gameId": [
                10
            ],
            "slotIndex": [
                80
            ],
            "__typename": [
                1
            ]
        },
        "SeedStepLegacyInput": {
            "stepId": [
                10
            ],
            "automaticSeeding": [
                630
            ],
            "manualSeeding": [
                633
            ],
            "__typename": [
                1
            ]
        },
        "AutomaticSeedingInput": {
            "seedingMechanism": [
                631
            ],
            "groupRepartitionMechanism": [
                632
            ],
            "teams": [
                10
            ],
            "__typename": [
                1
            ]
        },
        "SeedingMechanism": {},
        "GroupRepartitionMechanism": {},
        "ManualSeedingInput": {
            "groups": [
                634
            ],
            "__typename": [
                1
            ]
        },
        "ManualSeedingGroupInput": {
            "group": [
                10
            ],
            "teams": [
                10
            ],
            "__typename": [
                1
            ]
        },
        "UpdateMatchScoreInput": {
            "teamId": [
                10
            ],
            "variables": [
                636
            ],
            "forcedScoreValue": [
                17
            ],
            "status": [
                263
            ],
            "__typename": [
                1
            ]
        },
        "UpdateTournamentMatchScoreVariablesInput": {
            "formulaName": [
                1
            ],
            "value": [
                17
            ],
            "__typename": [
                1
            ]
        },
        "RegisterCustomTeamsInput": {
            "customTeams": [
                638
            ],
            "__typename": [
                1
            ]
        },
        "RegisterCustomTeamInput": {
            "name": [
                1
            ],
            "tag": [
                1
            ],
            "customFields": [
                491
            ],
            "fromExistingTeamId": [
                10
            ],
            "members": [
                639
            ],
            "status": [
                60
            ],
            "__typename": [
                1
            ]
        },
        "CustomTeamMemberInput": {
            "playerId": [
                10
            ],
            "player": [
                618
            ],
            "__typename": [
                1
            ]
        },
        "RegisterTournamentTeamInput": {
            "name": [
                1
            ],
            "tag": [
                1
            ],
            "customFields": [
                491
            ],
            "fromExistingTeamId": [
                10
            ],
            "__typename": [
                1
            ]
        },
        "UpdateTournamentTeamInput": {
            "name": [
                1
            ],
            "tag": [
                1
            ],
            "customFields": [
                491
            ],
            "__typename": [
                1
            ]
        },
        "TournamentAdminUpsertInput": {
            "tournamentId": [
                10
            ],
            "accountId": [
                10
            ],
            "permissions": [
                267
            ],
            "__typename": [
                1
            ]
        },
        "TournamentAdminDeleteInput": {
            "tournamentId": [
                10
            ],
            "accountId": [
                10
            ],
            "__typename": [
                1
            ]
        },
        "CreateStepRuleSetInput": {
            "scoring": [
                645
            ],
            "advancementRules": [
                647
            ],
            "crossStepRules": [
                649
            ],
            "structureTemplate": [
                651
            ],
            "__typename": [
                1
            ]
        },
        "CreateScoringInput": {
            "aggregation": [
                276
            ],
            "formula": [
                1
            ],
            "winPoints": [
                80
            ],
            "lossPoints": [
                80
            ],
            "drawPoints": [
                80
            ],
            "forfeitPoints": [
                80
            ],
            "tiebreakers": [
                646
            ],
            "__typename": [
                1
            ]
        },
        "CreateTiebreakerInput": {
            "order": [
                80
            ],
            "type": [
                273
            ],
            "formula": [
                1
            ],
            "sortOrder": [
                274
            ],
            "__typename": [
                1
            ]
        },
        "CreateAdvancementRuleInput": {
            "name": [
                1
            ],
            "description": [
                1
            ],
            "order": [
                80
            ],
            "triggerType": [
                213
            ],
            "triggerScope": [
                1
            ],
            "condition": [
                1
            ],
            "actions": [
                648
            ],
            "autoExecute": [
                4
            ],
            "allowManualOverride": [
                4
            ],
            "purpose": [
                271
            ],
            "__typename": [
                1
            ]
        },
        "RuleActionInput": {
            "type": [
                269
            ],
            "script": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "CreateCrossStepRuleInput": {
            "sourceStepId": [
                10
            ],
            "sourceRelative": [
                284
            ],
            "dataSource": [
                215
            ],
            "usage": [
                650
            ],
            "__typename": [
                1
            ]
        },
        "CrossStepUsageInput": {
            "type": [
                282
            ],
            "condition": [
                1
            ],
            "formula": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "CreateStructureTemplateInput": {
            "groupTemplates": [
                652
            ],
            "__typename": [
                1
            ]
        },
        "CreateGroupTemplateInput": {
            "name": [
                1
            ],
            "description": [
                1
            ],
            "order": [
                80
            ],
            "teamSlotsExpr": [
                1
            ],
            "generationScript": [
                1
            ],
            "roundTemplates": [
                653
            ],
            "bestOfExpr": [
                1
            ],
            "teamSlotsPerGameExpr": [
                1
            ],
            "roundCountExpr": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "CreateRoundTemplateInput": {
            "name": [
                1
            ],
            "order": [
                80
            ],
            "gameTemplates": [
                654
            ],
            "__typename": [
                1
            ]
        },
        "CreateGameTemplateInput": {
            "order": [
                80
            ],
            "teamSlots": [
                80
            ],
            "bestOf": [
                80
            ],
            "onWinTarget": [
                1
            ],
            "onWinSourceSlot": [
                80
            ],
            "onWinTargetSlot": [
                80
            ],
            "onLossTarget": [
                1
            ],
            "onLossSourceSlot": [
                80
            ],
            "onLossTargetSlot": [
                80
            ],
            "__typename": [
                1
            ]
        },
        "CreatePresetScriptInput": {
            "name": [
                1
            ],
            "description": [
                1
            ],
            "script": [
                1
            ],
            "parameters": [
                656
            ],
            "__typename": [
                1
            ]
        },
        "PresetParameterInput": {
            "name": [
                1
            ],
            "type": [
                287
            ],
            "required": [
                4
            ],
            "defaultValue": [
                1
            ],
            "description": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "UpdatePresetScriptInput": {
            "name": [
                1
            ],
            "description": [
                1
            ],
            "script": [
                1
            ],
            "parameters": [
                656
            ],
            "__typename": [
                1
            ]
        },
        "PlatformCdnFileCreateInput": {
            "name": [
                1
            ],
            "type": [
                128
            ],
            "config": [
                510
            ],
            "__typename": [
                1
            ]
        },
        "PlatformFileUpdateInput": {
            "config": [
                510
            ],
            "__typename": [
                1
            ]
        },
        "CreatePlatformInput": {
            "name": [
                1
            ],
            "configuration": [
                520
            ],
            "appId": [
                1
            ],
            "subdomain": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "UpdatePlatformInput": {
            "name": [
                1
            ],
            "configuration": [
                520
            ],
            "appId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "PlatformThemeInput": {
            "primaryColor": [
                1
            ],
            "secondaryColor": [
                1
            ],
            "backgroundColor": [
                1
            ],
            "surfaceColor": [
                1
            ],
            "textColor": [
                1
            ],
            "textMutedColor": [
                1
            ],
            "fontFamily": [
                1
            ],
            "headingFont": [
                1
            ],
            "borderRadius": [
                1
            ],
            "logoUrl": [
                1
            ],
            "socialLinks": [
                663
            ],
            "sections": [
                664
            ],
            "__typename": [
                1
            ]
        },
        "PlatformThemeSocialLinksInput": {
            "twitter": [
                1
            ],
            "discord": [
                1
            ],
            "twitch": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "PlatformThemeSectionConfigInput": {
            "name": [
                1
            ],
            "visible": [
                4
            ],
            "order": [
                17
            ],
            "__typename": [
                1
            ]
        },
        "CreatePlatformTemplateInput": {
            "name": [
                1
            ],
            "description": [
                1
            ],
            "screenshotUrl": [
                131
            ],
            "public": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "UpdatePlatformTemplateInput": {
            "name": [
                1
            ],
            "description": [
                1
            ],
            "screenshotUrl": [
                131
            ],
            "public": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "OrganizationSubscriptionItemUpdateInput": {
            "subscriptionItemId": [
                10
            ],
            "count": [
                17
            ],
            "__typename": [
                1
            ]
        },
        "OrganizationSkillRatingsRegisterMatchInput": {
            "teams": [
                669
            ],
            "__typename": [
                1
            ]
        },
        "OrganizationSkillRatingsRegisterMatchTeamInput": {
            "players": [
                10
            ],
            "__typename": [
                1
            ]
        },
        "OrganizationSkillRatingCreateInput": {
            "name": [
                1
            ],
            "description": [
                1
            ],
            "type": [
                480
            ],
            "configuration": [
                524
            ],
            "__typename": [
                1
            ]
        },
        "OrganizationSkillRatingUpdateInput": {
            "name": [
                1
            ],
            "description": [
                1
            ],
            "type": [
                480
            ],
            "configuration": [
                524
            ],
            "__typename": [
                1
            ]
        },
        "EventCreateInput": {
            "title": [
                1
            ],
            "description": [
                1
            ],
            "startAt": [
                12
            ],
            "endAt": [
                12
            ],
            "startRegistrationsAt": [
                12
            ],
            "endRegistrationsAt": [
                12
            ],
            "visibleAt": [
                12
            ],
            "configuration": [
                516
            ],
            "eventVenueId": [
                10
            ],
            "tournamentId": [
                10
            ],
            "__typename": [
                1
            ]
        },
        "EventUpdateInput": {
            "title": [
                1
            ],
            "description": [
                1
            ],
            "startAt": [
                12
            ],
            "endAt": [
                12
            ],
            "startRegistrationsAt": [
                12
            ],
            "endRegistrationsAt": [
                12
            ],
            "visibleAt": [
                12
            ],
            "configuration": [
                516
            ],
            "eventVenueId": [
                10
            ],
            "tournamentId": [
                10
            ],
            "__typename": [
                1
            ]
        },
        "EventTicketConfigurationCreateInput": {
            "name": [
                1
            ],
            "description": [
                1
            ],
            "price": [
                17
            ],
            "currency": [
                390
            ],
            "maxCount": [
                17
            ],
            "buyable": [
                4
            ],
            "eventId": [
                10
            ],
            "seatTypeId": [
                10
            ],
            "configuration": [
                517
            ],
            "startsAt": [
                12
            ],
            "endsAt": [
                12
            ],
            "stateReason": [
                1
            ],
            "tournamentId": [
                10
            ],
            "state": [
                391
            ],
            "__typename": [
                1
            ]
        },
        "EventTicketConfigurationUpdateInput": {
            "name": [
                1
            ],
            "description": [
                1
            ],
            "price": [
                17
            ],
            "currency": [
                390
            ],
            "maxCount": [
                17
            ],
            "buyable": [
                4
            ],
            "seatTypeId": [
                10
            ],
            "configuration": [
                517
            ],
            "startsAt": [
                12
            ],
            "endsAt": [
                12
            ],
            "stateReason": [
                1
            ],
            "tournamentId": [
                10
            ],
            "state": [
                391
            ],
            "__typename": [
                1
            ]
        },
        "EventReservationRegisterTicketsInput": {
            "tickets": [
                677
            ],
            "__typename": [
                1
            ]
        },
        "EventReservationRegisterTicketInput": {
            "ticketConfigurationId": [
                10
            ],
            "quantity": [
                17
            ],
            "reservedSeats": [
                10
            ],
            "__typename": [
                1
            ]
        },
        "EventReservationValidateAndPayInput": {
            "successUrl": [
                1
            ],
            "canceledUrl": [
                1
            ],
            "returnUrl": [
                1
            ],
            "uiMode": [
                679
            ],
            "__typename": [
                1
            ]
        },
        "StripeUiMode": {},
        "EventReservationTicketConfigurationInput": {
            "ticketId": [
                10
            ],
            "customFields": [
                491
            ],
            "__typename": [
                1
            ]
        },
        "EventReservationUpdateTicketsInput": {
            "ticketIdsToRelease": [
                10
            ],
            "ticketIdsToAdd": [
                677
            ],
            "ticketConfigurations": [
                680
            ],
            "__typename": [
                1
            ]
        },
        "EventVenueCreateInput": {
            "name": [
                1
            ],
            "description": [
                1
            ],
            "address": [
                1
            ],
            "city": [
                1
            ],
            "state": [
                1
            ],
            "country": [
                1
            ],
            "postalCode": [
                1
            ],
            "timezone": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "EventVenueUpdateInput": {
            "name": [
                1
            ],
            "description": [
                1
            ],
            "address": [
                1
            ],
            "city": [
                1
            ],
            "state": [
                1
            ],
            "country": [
                1
            ],
            "postalCode": [
                1
            ],
            "timezone": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "EventVenueSeatsUpdateInput": {
            "updateSeats": [
                685
            ],
            "createSeats": [
                686
            ],
            "deleteSeats": [
                10
            ],
            "__typename": [
                1
            ]
        },
        "EventVenueSeatUpdateInput": {
            "name": [
                1
            ],
            "configuration": [
                513
            ],
            "seatTypeId": [
                10
            ],
            "id": [
                10
            ],
            "__typename": [
                1
            ]
        },
        "EventVenueSeatCreateInput": {
            "name": [
                1
            ],
            "configuration": [
                513
            ],
            "seatTypeId": [
                10
            ],
            "__typename": [
                1
            ]
        },
        "EventVenueSeatTypeCreateInput": {
            "name": [
                1
            ],
            "description": [
                1
            ],
            "configuration": [
                518
            ],
            "__typename": [
                1
            ]
        },
        "EventVenueSeatTypeUpdateInput": {
            "name": [
                1
            ],
            "description": [
                1
            ],
            "configuration": [
                518
            ],
            "__typename": [
                1
            ]
        },
        "EventCalendarGenerateInput": {
            "days": [
                690
            ],
            "slots": [
                691
            ],
            "event": [
                692
            ],
            "registrationSeriesId": [
                10
            ],
            "__typename": [
                1
            ]
        },
        "EventCalendarDayInput": {
            "venueId": [
                10
            ],
            "date": [
                1
            ],
            "tournamentId": [
                10
            ],
            "slots": [
                691
            ],
            "__typename": [
                1
            ]
        },
        "EventCalendarSlotTemplateInput": {
            "firstStartTime": [
                1
            ],
            "lastStartTime": [
                1
            ],
            "intervalMinutes": [
                80
            ],
            "durationMinutes": [
                80
            ],
            "maxCount": [
                80
            ],
            "price": [
                80
            ],
            "currency": [
                1
            ],
            "namePattern": [
                1
            ],
            "description": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "EventCalendarEventTemplateInput": {
            "titlePattern": [
                1
            ],
            "description": [
                1
            ],
            "configuration": [
                516
            ],
            "startRegistrationsAt": [
                12
            ],
            "endRegistrationsAt": [
                12
            ],
            "visibleAt": [
                12
            ],
            "__typename": [
                1
            ]
        },
        "EventReservationChangeTicketsInput": {
            "targetEventId": [
                10
            ],
            "tickets": [
                677
            ],
            "__typename": [
                1
            ]
        },
        "ShopCreateInput": {
            "externalId": [
                1
            ],
            "name": [
                1
            ],
            "description": [
                1
            ],
            "metadata": [
                491
            ],
            "__typename": [
                1
            ]
        },
        "ShopUpdateInput": {
            "externalId": [
                1
            ],
            "name": [
                1
            ],
            "description": [
                1
            ],
            "metadata": [
                491
            ],
            "__typename": [
                1
            ]
        },
        "ShopCategoryCreateInput": {
            "externalId": [
                1
            ],
            "name": [
                1
            ],
            "description": [
                1
            ],
            "metadata": [
                491
            ],
            "shopId": [
                10
            ],
            "__typename": [
                1
            ]
        },
        "ShopCategoryUpdateInput": {
            "externalId": [
                1
            ],
            "name": [
                1
            ],
            "description": [
                1
            ],
            "metadata": [
                491
            ],
            "__typename": [
                1
            ]
        },
        "PaymentInput": {
            "successUrl": [
                1
            ],
            "canceledUrl": [
                1
            ],
            "returnUrl": [
                1
            ],
            "uiMode": [
                679
            ],
            "__typename": [
                1
            ]
        },
        "PlayerShopProductPurshaseInput": {
            "items": [
                700
            ],
            "__typename": [
                1
            ]
        },
        "PlayerShopProductPurshaseItemInput": {
            "shopProductId": [
                10
            ],
            "quantity": [
                80
            ],
            "__typename": [
                1
            ]
        },
        "ShopProductCreateInput": {
            "name": [
                1
            ],
            "externalId": [
                1
            ],
            "description": [
                1
            ],
            "categoryId": [
                10
            ],
            "price": [
                17
            ],
            "configuration": [
                521
            ],
            "metadata": [
                491
            ],
            "visibleAt": [
                12
            ],
            "currency": [
                390
            ],
            "items": [
                523
            ],
            "currencyPrices": [
                522
            ],
            "__typename": [
                1
            ]
        },
        "ShopProductUpdateInput": {
            "name": [
                1
            ],
            "externalId": [
                1
            ],
            "description": [
                1
            ],
            "categoryId": [
                10
            ],
            "price": [
                17
            ],
            "configuration": [
                521
            ],
            "metadata": [
                491
            ],
            "visibleAt": [
                12
            ],
            "currency": [
                390
            ],
            "items": [
                523
            ],
            "currencyPrices": [
                522
            ],
            "__typename": [
                1
            ]
        },
        "ItemCreateInput": {
            "name": [
                1
            ],
            "externalId": [
                1
            ],
            "description": [
                1
            ],
            "metadata": [
                491
            ],
            "categoryId": [
                10
            ],
            "__typename": [
                1
            ]
        },
        "ItemUpdateInput": {
            "name": [
                1
            ],
            "externalId": [
                1
            ],
            "description": [
                1
            ],
            "metadata": [
                491
            ],
            "categoryId": [
                10
            ],
            "__typename": [
                1
            ]
        },
        "PlayerItemsUpdateInput": {
            "items": [
                706
            ],
            "__typename": [
                1
            ]
        },
        "PlayerItemsUpdateItemInput": {
            "itemId": [
                10
            ],
            "set": [
                80
            ],
            "add": [
                80
            ],
            "remove": [
                80
            ],
            "__typename": [
                1
            ]
        },
        "ItemCategoryCreateInput": {
            "name": [
                1
            ],
            "externalId": [
                1
            ],
            "description": [
                1
            ],
            "metadata": [
                491
            ],
            "__typename": [
                1
            ]
        },
        "ItemCategoryUpdateInput": {
            "name": [
                1
            ],
            "externalId": [
                1
            ],
            "description": [
                1
            ],
            "metadata": [
                491
            ],
            "__typename": [
                1
            ]
        },
        "CurrencyCreateInput": {
            "symbol": [
                1
            ],
            "name": [
                1
            ],
            "externalId": [
                1
            ],
            "description": [
                1
            ],
            "hidden": [
                4
            ],
            "metadata": [
                491
            ],
            "__typename": [
                1
            ]
        },
        "CurrencyUpdateInput": {
            "symbol": [
                1
            ],
            "name": [
                1
            ],
            "externalId": [
                1
            ],
            "description": [
                1
            ],
            "hidden": [
                4
            ],
            "metadata": [
                491
            ],
            "__typename": [
                1
            ]
        },
        "PlayerCurrencyUpdateInput": {
            "items": [
                712
            ],
            "__typename": [
                1
            ]
        },
        "PlayerCurrencyUpdateItemInput": {
            "currencyId": [
                10
            ],
            "forceBalance": [
                17
            ],
            "add": [
                17
            ],
            "remove": [
                17
            ],
            "__typename": [
                1
            ]
        },
        "PublishMarketplaceAppInput": {
            "organizationAppId": [
                10
            ],
            "manifest": [
                589
            ],
            "name": [
                1
            ],
            "description": [
                1
            ],
            "shortDescription": [
                1
            ],
            "icon": [
                1
            ],
            "screenshots": [
                1
            ],
            "categories": [
                1
            ],
            "version": [
                1
            ],
            "privacyPolicyUrl": [
                1
            ],
            "supportUrl": [
                1
            ],
            "websiteUrl": [
                1
            ],
            "slug": [
                1
            ],
            "visibility": [
                142
            ],
            "allowedOrganizationIds": [
                10
            ],
            "__typename": [
                1
            ]
        },
        "UpdateMarketplaceAppInput": {
            "manifest": [
                589
            ],
            "name": [
                1
            ],
            "description": [
                1
            ],
            "shortDescription": [
                1
            ],
            "icon": [
                1
            ],
            "screenshots": [
                1
            ],
            "categories": [
                1
            ],
            "version": [
                1
            ],
            "privacyPolicyUrl": [
                1
            ],
            "supportUrl": [
                1
            ],
            "websiteUrl": [
                1
            ],
            "slug": [
                1
            ],
            "visibility": [
                142
            ],
            "allowedOrganizationIds": [
                10
            ],
            "__typename": [
                1
            ]
        },
        "InstallMarketplaceAppInput": {
            "marketplaceAppId": [
                10
            ],
            "grantedPermissions": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "SubmitMarketplaceAppReviewInput": {
            "marketplaceAppId": [
                10
            ],
            "rating": [
                80
            ],
            "title": [
                1
            ],
            "body": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "SetMarketplaceAppPricingInput": {
            "marketplaceAppId": [
                10
            ],
            "type": [
                154
            ],
            "priceAmountCents": [
                80
            ],
            "currency": [
                1
            ],
            "trialDays": [
                80
            ],
            "__typename": [
                1
            ]
        },
        "CreateMarketplaceCheckoutInput": {
            "marketplaceAppId": [
                10
            ],
            "successUrl": [
                1
            ],
            "cancelUrl": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "AppCreateReleaseInput": {
            "version": [
                1
            ],
            "manifest": [
                589
            ],
            "releaseNotes": [
                1
            ],
            "hasExtensionBundle": [
                4
            ],
            "hasModuleBundle": [
                4
            ],
            "extensionBundleSize": [
                80
            ],
            "moduleBundleSize": [
                80
            ],
            "files": [
                720
            ],
            "__typename": [
                1
            ]
        },
        "AppReleaseFileInput": {
            "kind": [
                133
            ],
            "name": [
                1
            ],
            "content": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "PlatformModuleConfigSetInput": {
            "platformId": [
                10
            ],
            "marketplaceAppId": [
                10
            ],
            "moduleName": [
                1
            ],
            "props": [
                722
            ],
            "__typename": [
                1
            ]
        },
        "ModuleConfigPropInput": {
            "key": [
                1
            ],
            "value": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "PlatformModuleConfigDeleteInput": {
            "platformId": [
                10
            ],
            "marketplaceAppId": [
                10
            ],
            "moduleName": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "SetEntityMetafieldInput": {
            "namespace": [
                1
            ],
            "entityType": [
                1
            ],
            "entityId": [
                10
            ],
            "key": [
                1
            ],
            "value": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "DeleteEntityMetafieldInput": {
            "namespace": [
                1
            ],
            "entityType": [
                1
            ],
            "entityId": [
                10
            ],
            "key": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "SetObjectMetadataInput": {
            "objectType": [
                439
            ],
            "objectId": [
                10
            ],
            "entries": [
                727
            ],
            "__typename": [
                1
            ]
        },
        "MetadataEntryInput": {
            "key": [
                1
            ],
            "value": [
                1
            ],
            "type": [
                437
            ],
            "visibility": [
                438
            ],
            "__typename": [
                1
            ]
        },
        "RemoveObjectMetadataInput": {
            "objectType": [
                439
            ],
            "objectId": [
                10
            ],
            "keys": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "CreateCustomFieldDefinitionInput": {
            "objectType": [
                439
            ],
            "key": [
                1
            ],
            "name": [
                1
            ],
            "description": [
                1
            ],
            "type": [
                443
            ],
            "required": [
                4
            ],
            "unique": [
                4
            ],
            "order": [
                80
            ],
            "visibility": [
                21
            ],
            "editability": [
                22
            ],
            "options": [
                730
            ],
            "defaultValue": [
                1
            ],
            "validationRegex": [
                1
            ],
            "moderated": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "CustomFieldOptionInput": {
            "label": [
                1
            ],
            "value": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "UpdateCustomFieldDefinitionInput": {
            "name": [
                1
            ],
            "description": [
                1
            ],
            "required": [
                4
            ],
            "unique": [
                4
            ],
            "order": [
                80
            ],
            "visibility": [
                21
            ],
            "editability": [
                22
            ],
            "options": [
                730
            ],
            "defaultValue": [
                1
            ],
            "validationRegex": [
                1
            ],
            "moderated": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "SetCustomFieldValuesInput": {
            "objectType": [
                439
            ],
            "objectId": [
                10
            ],
            "fields": [
                733
            ],
            "deleteKeys": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "CustomFieldValueInput": {
            "key": [
                1
            ],
            "value": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "AppInstallationPinInput": {
            "appSlug": [
                1
            ],
            "version": [
                1
            ],
            "grantedPermissions": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "GuestWardCreateInput": {
            "firstName": [
                1
            ],
            "lastName": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "GuestProfileCreateInput": {
            "email": [
                77
            ],
            "firstName": [
                1
            ],
            "lastName": [
                1
            ],
            "origin": [
                156
            ],
            "guardianPlayerId": [
                10
            ],
            "__typename": [
                1
            ]
        },
        "GuestProfileUpdateInput": {
            "email": [
                77
            ],
            "clearEmail": [
                4
            ],
            "firstName": [
                1
            ],
            "lastName": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "GuestConfigurationInput": {
            "selfEntry": [
                167
            ],
            "sessionTtlMinutes": [
                80
            ],
            "maxWardsPerGuardian": [
                80
            ],
            "__typename": [
                1
            ]
        },
        "GuestLinkCreateInput": {
            "playerId": [
                10
            ],
            "purpose": [
                1
            ],
            "expiresAt": [
                12
            ],
            "maxUses": [
                569
            ],
            "data": [
                1
            ],
            "revokePrevious": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "GuestLinkRevokeInput": {
            "id": [
                10
            ],
            "playerId": [
                10
            ],
            "purpose": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "GuestEnterInput": {
            "email": [
                77
            ],
            "firstName": [
                1
            ],
            "lastName": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "AppConfigValueInput": {
            "key": [
                1
            ],
            "value": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "CustomPermissionInput": {
            "name": [
                1
            ],
            "description": [
                1
            ],
            "resources": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "CustomPermissionUpdateInput": {
            "description": [
                1
            ],
            "resources": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "RegistrationSeriesCreateInput": {
            "name": [
                1
            ],
            "maxActiveRegistrations": [
                80
            ],
            "maxActiveWaitlistEntries": [
                80
            ],
            "allowWaitlistWhileRegistered": [
                4
            ],
            "leaveWaitlistsOnRegistration": [
                4
            ],
            "releasePolicy": [
                341
            ],
            "__typename": [
                1
            ]
        },
        "RegistrationSeriesUpdateInput": {
            "name": [
                1
            ],
            "maxActiveRegistrations": [
                80
            ],
            "maxActiveWaitlistEntries": [
                80
            ],
            "allowWaitlistWhileRegistered": [
                4
            ],
            "leaveWaitlistsOnRegistration": [
                4
            ],
            "releasePolicy": [
                341
            ],
            "__typename": [
                1
            ]
        },
        "OrganizationModerationInput": {
            "blockedWords": [
                1
            ],
            "blockedSubstrings": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "Subscription": {
            "validationProgress": [
                324,
                {
                    "jobId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "validationEvents": [
                326,
                {
                    "jobId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "journalEntryAdded": [
                418,
                {
                    "filters": [
                        544
                    ]
                }
            ],
            "presenceUserConnected": [
                454
            ],
            "presenceUserDisconnected": [
                456
            ],
            "__typename": [
                1
            ]
        }
    }
}