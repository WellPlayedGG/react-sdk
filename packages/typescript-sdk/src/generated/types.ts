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
        91,
        94,
        97,
        102,
        104,
        107,
        112,
        114,
        123,
        124,
        125,
        126,
        131,
        132,
        137,
        140,
        144,
        147,
        149,
        153,
        157,
        158,
        165,
        170,
        183,
        192,
        194,
        207,
        208,
        217,
        219,
        221,
        222,
        227,
        229,
        232,
        244,
        249,
        257,
        261,
        265,
        267,
        271,
        273,
        275,
        277,
        278,
        280,
        286,
        288,
        291,
        294,
        297,
        299,
        301,
        304,
        307,
        309,
        310,
        313,
        316,
        321,
        323,
        327,
        329,
        331,
        332,
        333,
        351,
        355,
        358,
        360,
        375,
        382,
        387,
        389,
        390,
        391,
        400,
        401,
        402,
        412,
        413,
        427,
        430,
        431,
        449,
        450,
        451,
        455,
        479,
        492,
        494,
        543,
        544,
        545,
        556,
        559,
        560,
        583,
        586,
        647,
        648,
        697,
        760
    ],
    "types": {
        "JournalPayload": {
            "_typename": [
                1
            ],
            "on_RuleEngineAdvancementRuleFiredPayload": [
                216
            ],
            "on_RuleEngineCrossStepTransferredPayload": [
                218
            ],
            "on_RuleEngineEffectAdvancePayload": [
                220
            ],
            "on_RuleEngineEffectCreateGroupPayload": [
                223
            ],
            "on_RuleEngineEffectEliminatePayload": [
                224
            ],
            "on_RuleEngineEffectEmitSeedingPinPayload": [
                225
            ],
            "on_RuleEngineEffectEndStepPayload": [
                226
            ],
            "on_RuleEngineEffectSetMetadataPayload": [
                228
            ],
            "on_RuleEngineGenerationScriptRanPayload": [
                230
            ],
            "on_RuleEngineManualOverridePayload": [
                231
            ],
            "on_LeaderboardFeedReconcileFailedPayload": [
                233
            ],
            "on_TournamentOpenPoolMatchCorrectedPayload": [
                235
            ],
            "on_TournamentOpenPoolMatchCancelledPayload": [
                236
            ],
            "on_TournamentOpenPoolClosedPayload": [
                237
            ],
            "on_TournamentOpenPoolReopenedPayload": [
                238
            ],
            "on_TournamentsStepResetPayload": [
                240
            ],
            "on_TournamentsStepGeneratedPayload": [
                241
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
                434
            ],
            "on_PlayerActorContext": [
                435
            ],
            "on_SystemActorContext": [
                436
            ],
            "on_MarketplaceModuleActorContext": [
                437
            ],
            "on_ApiClientActorContext": [
                438
            ],
            "on_WebhookCallbackActorContext": [
                439
            ],
            "on_SimulationActorContext": [
                440
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
                253,
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
                256
            ],
            "createdBy": [
                76
            ],
            "myTeam": [
                252
            ],
            "teamScores": [
                255
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
                90
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
                89
            ],
            "nodes": [
                87
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
                87
            ],
            "__typename": [
                1
            ]
        },
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
                91
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
                94
            ],
            "expiresAt": [
                12
            ],
            "link": [
                92
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
                94
            ],
            "expiresAt": [
                12
            ],
            "link": [
                92
            ],
            "profile": [
                90
            ],
            "wards": [
                90
            ],
            "__typename": [
                1
            ]
        },
        "GuestLinkView": {
            "status": [
                97
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
                90
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
                102
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
        "PermissionDefinitionDto": {
            "id": [
                1
            ],
            "owner": [
                104
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
                107
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
                105
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
                106
            ],
            "events": [
                108
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
                112
            ],
            "label": [
                1
            ],
            "activePages": [
                1
            ],
            "size": [
                110
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
                114
            ],
            "required": [
                4
            ],
            "options": [
                1
            ],
            "fields": [
                113
            ],
            "items": [
                113
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
                117
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
                113
            ],
            "__typename": [
                1
            ]
        },
        "AppFunctionTriggerModel": {
            "type": [
                123
            ],
            "readOnly": [
                4
            ],
            "cacheSeconds": [
                80
            ],
            "hookPoint": [
                124
            ],
            "onError": [
                125
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
                126
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
                127
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
                122
            ],
            "invoker": [
                131
            ],
            "runAs": [
                132
            ],
            "input": [
                113
            ],
            "output": [
                113
            ],
            "preload": [
                128
            ],
            "requires": [
                129
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
                111
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
                109
            ],
            "extensionCdnPath": [
                1
            ],
            "moduleCdnPath": [
                1
            ],
            "config": [
                115
            ],
            "customPermissions": [
                116
            ],
            "storage": [
                118
            ],
            "operations": [
                119
            ],
            "emailTemplates": [
                120
            ],
            "auditTypes": [
                121
            ],
            "functions": [
                130
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
                137
            ],
            "validation_errors": [
                135
            ],
            "validation_records": [
                134
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
                138
            ],
            "ssl": [
                136
            ],
            "status": [
                140
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
                141
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
                144
            ],
            "updatedAt": [
                12
            ],
            "createdAt": [
                12
            ],
            "config": [
                142
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
                145
            ],
            "url": [
                147
            ],
            "__typename": [
                1
            ]
        },
        "URL": {},
        "AppReleaseFile": {
            "kind": [
                149
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
                150
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
                153
            ],
            "manifest": [
                133
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
                151
            ],
            "reviewedAt": [
                12
            ],
            "createdAt": [
                12
            ],
            "files": [
                148
            ],
            "__typename": [
                1
            ]
        },
        "MarketplaceAppReleaseStatus": {},
        "AppReleaseWithUploadUrls": {
            "release": [
                152
            ],
            "extensionUploadUrl": [
                146
            ],
            "moduleUploadUrl": [
                146
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
                157
            ],
            "manifest": [
                133
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
                158
            ],
            "allowedOrganizationIds": [
                10
            ],
            "reviews": [
                162,
                {
                    "page": [
                        59
                    ]
                }
            ],
            "stats": [
                168
            ],
            "installation": [
                164
            ],
            "pricing": [
                169
            ],
            "__typename": [
                1
            ]
        },
        "MarketplaceAppStatus": {},
        "MarketplaceAppVisibility": {},
        "MarketplaceApps": {
            "edges": [
                160
            ],
            "nodes": [
                156
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
                156
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
                163
            ],
            "nodes": [
                161
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
                161
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
                165
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
                152
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
                156
            ],
            "__typename": [
                1
            ]
        },
        "MarketplaceInstallationStatus": {},
        "MarketplaceAppInstallations": {
            "edges": [
                167
            ],
            "nodes": [
                164
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
                164
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
                170
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
                172
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
        "LeaderboardSeasonBucketScoreEdge": {
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
        "LeaderboardEdge": {
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
                181
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
        "LeaderboardSeasonEdge": {
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
                183
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
                185
            ],
            "nodes": [
                182
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
                182
            ],
            "__typename": [
                1
            ]
        },
        "LeaderboardFeed": {
            "id": [
                10
            ],
            "leaderboardId": [
                10
            ],
            "tournamentId": [
                10
            ],
            "stepId": [
                10
            ],
            "seasonId": [
                10
            ],
            "winPoints": [
                17
            ],
            "lossPoints": [
                17
            ],
            "drawPoints": [
                17
            ],
            "forfeitPoints": [
                17
            ],
            "placementPoints": [
                17
            ],
            "enabled": [
                4
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
        "LeaderboardFeeds": {
            "edges": [
                188
            ],
            "nodes": [
                186
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
        "LeaderboardFeedEdge": {
            "cursor": [
                1
            ],
            "node": [
                186
            ],
            "__typename": [
                1
            ]
        },
        "LeaderboardFeedReconcileResult": {
            "feedId": [
                10
            ],
            "sourcesChecked": [
                80
            ],
            "entriesWritten": [
                80
            ],
            "pointsDelta": [
                17
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
                192
            ],
            "requirements": [
                190
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
                133
            ],
            "status": [
                194
            ],
            "reviewResult": [
                151
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
                195
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
                196
            ],
            "creator": [
                76
            ],
            "manifest": [
                133
            ],
            "releases": [
                193
            ],
            "appWebhooks": [
                200
            ],
            "__typename": [
                1
            ]
        },
        "OrganizationApps": {
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
        "OrganizationAppEdge": {
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
                197
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
                203
            ],
            "nodes": [
                201
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
                201
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
                205
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
                191
            ],
            "__typename": [
                1
            ]
        },
        "IdentityProviderConfigurations": {
            "on_OAuthClientConfiguration": [
                206
            ],
            "on_OpenidConfiguration": [
                209
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
                207
            ],
            "clientId": [
                1
            ],
            "clientSecret": [
                1
            ],
            "tokenEndpointAuthMethod": [
                208
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
                207
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
                217
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
                213
            ],
            "actionSource": [
                1
            ],
            "engineTiming": [
                212
            ],
            "printOutput": [
                1
            ],
            "printOutputTruncated": [
                4
            ],
            "error": [
                214
            ],
            "manualOverride": [
                215
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
                219
            ],
            "keyCount": [
                80
            ],
            "firstKeySamples": [
                1
            ],
            "engineTiming": [
                212
            ],
            "error": [
                214
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
                221
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
                222
            ],
            "afterStatus": [
                222
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
                221
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
                221
            ],
            "targetTeamId": [
                10
            ],
            "stepId": [
                10
            ],
            "beforeStatus": [
                222
            ],
            "afterStatus": [
                222
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
                221
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
                221
            ],
            "stepId": [
                10
            ],
            "beforeStepStatus": [
                227
            ],
            "afterStepStatus": [
                227
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
                221
            ],
            "targetType": [
                229
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
                212
            ],
            "printOutput": [
                1
            ],
            "printOutputTruncated": [
                4
            ],
            "error": [
                214
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
                232
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
                234
            ],
            "scores": [
                234
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
                234
            ],
            "scores": [
                234
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
                227
            ],
            "newStatus": [
                227
            ],
            "reason": [
                1
            ],
            "cascade": [
                239
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
                244
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
                246
            ],
            "nodes": [
                243
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
                243
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
                249
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
                252
            ],
            "__typename": [
                1
            ]
        },
        "TournamentTeamMemberStatus": {},
        "TeamMembers": {
            "edges": [
                251
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
        "TournamentTeamMemberEdge": {
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
                248
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
                254
            ],
            "nodes": [
                252
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
                252
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
            "rank": [
                80
            ],
            "status": [
                222
            ],
            "team": [
                252
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
                257
            ],
            "status": [
                227
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
                255
            ],
            "tournament": [
                58
            ],
            "manualPins": [
                242
            ],
            "openPool": [
                338
            ],
            "__typename": [
                1
            ]
        },
        "StepType": {},
        "Tournaments": {
            "edges": [
                259
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
                261
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
                243
            ],
            "gameLinks": [
                264
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
                260
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
                262
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
                265
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
                267
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
                269
            ],
            "nodes": [
                266
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
                266
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
                271
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
                273
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
                217
            ],
            "triggerScope": [
                1
            ],
            "condition": [
                1
            ],
            "actions": [
                272
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
                275
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
                277
            ],
            "formula": [
                1
            ],
            "sortOrder": [
                278
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
                280
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
                276
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
                281
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
                282
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
                283
            ],
            "__typename": [
                1
            ]
        },
        "CrossStepUsageModel": {
            "type": [
                286
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
                288
            ],
            "dataSource": [
                219
            ],
            "usage": [
                285
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
                279
            ],
            "advancementRules": [
                274
            ],
            "crossStepRules": [
                287
            ],
            "structureTemplate": [
                284
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
                291
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
                290
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
                294
            ],
            "parameters": [
                290
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
                297
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
                299
            ],
            "phase": [
                297
            ],
            "originHelper": [
                1
            ],
            "hint": [
                1
            ],
            "snippet": [
                295
            ],
            "stackFrames": [
                296
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
                301
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
                298
            ],
            "warnings": [
                300
            ],
            "__typename": [
                1
            ]
        },
        "SimulatedEffectModel": {
            "type": [
                304
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
                298
            ],
            "warnings": [
                300
            ],
            "effectsSummary": [
                303
            ],
            "partialEffectsSummary": [
                303
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
                307
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
                309
            ],
            "message": [
                1
            ],
            "hint": [
                1
            ],
            "invariantCode": [
                310
            ],
            "luaError": [
                306
            ],
            "offender": [
                311
            ],
            "__typename": [
                1
            ]
        },
        "ValidationErrorCode": {},
        "InvariantCode": {},
        "InvariantOffenderUnion": {
            "on_RuleOffenderModel": [
                312
            ],
            "on_CrossStepRuleOffenderModel": [
                314
            ],
            "on_GameOffenderModel": [
                315
            ],
            "on_RoundOffenderModel": [
                317
            ],
            "on_GroupOffenderModel": [
                318
            ],
            "on_TeamOffenderModel": [
                319
            ],
            "on_ScoreRowOffenderModel": [
                320
            ],
            "__typename": [
                1
            ]
        },
        "RuleOffenderModel": {
            "kind": [
                313
            ],
            "ruleId": [
                10
            ],
            "ruleName": [
                1
            ],
            "trigger": [
                217
            ],
            "__typename": [
                1
            ]
        },
        "OffenderKind": {},
        "CrossStepRuleOffenderModel": {
            "kind": [
                313
            ],
            "crossStepRuleId": [
                10
            ],
            "dataSource": [
                219
            ],
            "usage": [
                286
            ],
            "__typename": [
                1
            ]
        },
        "GameOffenderModel": {
            "kind": [
                313
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
                316
            ],
            "__typename": [
                1
            ]
        },
        "GameStatus": {},
        "RoundOffenderModel": {
            "kind": [
                313
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
                313
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
                313
            ],
            "teamId": [
                10
            ],
            "teamName": [
                1
            ],
            "currentStatus": [
                222
            ],
            "__typename": [
                1
            ]
        },
        "ScoreRowOffenderModel": {
            "kind": [
                313
            ],
            "scope": [
                321
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
                222
            ],
            "__typename": [
                1
            ]
        },
        "ScoreRowScope": {},
        "InvariantResultModel": {
            "code": [
                310
            ],
            "severity": [
                323
            ],
            "passed": [
                4
            ],
            "message": [
                1
            ],
            "offenders": [
                311
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
                217
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
                322
            ],
            "errors": [
                308
            ],
            "ruleFiredSummary": [
                324
            ],
            "__typename": [
                1
            ]
        },
        "ValidationProgressModel": {
            "stage": [
                327
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
                329
            ],
            "stage": [
                327
            ],
            "progress": [
                326
            ],
            "result": [
                325
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
                331
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
                332
            ],
            "statusBefore": [
                333
            ],
            "statusAfter": [
                333
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
                335
            ],
            "nodes": [
                328
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
                328
            ],
            "__typename": [
                1
            ]
        },
        "ValidationEvents": {
            "edges": [
                337
            ],
            "nodes": [
                330
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
                330
            ],
            "__typename": [
                1
            ]
        },
        "OpenPoolConfiguration": {
            "teamsPerMatch": [
                80
            ],
            "bestOf": [
                80
            ],
            "maxMatchesPerTeam": [
                80
            ],
            "allowRematch": [
                4
            ],
            "allowConcurrentMatches": [
                4
            ],
            "autoJoin": [
                4
            ],
            "enforceTeamMinSize": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "OpenPoolMatchTeam": {
            "teamId": [
                10
            ],
            "team": [
                252
            ],
            "status": [
                267
            ],
            "score": [
                17
            ],
            "__typename": [
                1
            ]
        },
        "OpenPoolMatch": {
            "id": [
                10
            ],
            "gameId": [
                10
            ],
            "groupId": [
                10
            ],
            "stepId": [
                10
            ],
            "tournamentId": [
                10
            ],
            "label": [
                1
            ],
            "order": [
                80
            ],
            "status": [
                244
            ],
            "teams": [
                339
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
        "OpenPoolMatches": {
            "edges": [
                342
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
        "OpenPoolMatchEdge": {
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
        "OpenPoolStanding": {
            "teamId": [
                10
            ],
            "team": [
                252
            ],
            "groupId": [
                10
            ],
            "rank": [
                80
            ],
            "status": [
                222
            ],
            "points": [
                17
            ],
            "played": [
                80
            ],
            "wins": [
                80
            ],
            "losses": [
                80
            ],
            "draws": [
                80
            ],
            "forfeits": [
                80
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
                346
            ],
            "nodes": [
                344
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
                344
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
                349
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
        "PlayerCurrencyEdge": {
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
                351
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
                353
            ],
            "nodes": [
                350
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
                350
            ],
            "__typename": [
                1
            ]
        },
        "RegistrationSeriesEntry": {
            "kind": [
                355
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
                358
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
                360
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
                362
            ],
            "nodes": [
                359
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
                359
            ],
            "__typename": [
                1
            ]
        },
        "UserGroupMembers": {
            "edges": [
                364
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
        "UserGroupMemberEdge": {
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
                365
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
                366
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
                367
            ],
            "createdSeats": [
                367
            ],
            "deletedSeats": [
                367
            ],
            "__typename": [
                1
            ]
        },
        "EventVenueSeats": {
            "edges": [
                370
            ],
            "nodes": [
                367
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
                367
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
                371
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
                371
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
                375
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
                372
            ],
            "groupStatus": [
                360
            ],
            "replacesReservationId": [
                10
            ],
            "groupName": [
                1
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
                375
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
                360
            ],
            "replacesReservationId": [
                10
            ],
            "groupName": [
                1
            ],
            "tickets": [
                373
            ],
            "__typename": [
                1
            ]
        },
        "EventReservations": {
            "edges": [
                378
            ],
            "nodes": [
                379
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
                379
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
                375
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
                360
            ],
            "replacesReservationId": [
                10
            ],
            "groupName": [
                1
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
                366
            ],
            "seatTypeId": [
                10
            ],
            "status": [
                382
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
                384
            ],
            "nodes": [
                381
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
                381
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
                387
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
                356
            ],
            "maxTicketsPerReservation": [
                17
            ],
            "reservationStatusAfterPayment": [
                389
            ],
            "reservationStatusAfterRegistration": [
                390
            ],
            "sessionDuration": [
                17
            ],
            "allowForNewSessionAfterTimeout": [
                4
            ],
            "seatAssignmentMode": [
                391
            ],
            "allowForMoreTicketsThanGroupMembers": [
                4
            ],
            "waitlist": [
                385
            ],
            "selfService": [
                386
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
                388
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
                408
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
                388
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
                408
            ],
            "on_Event": [
                392
            ],
            "on_EventWithUserReservation": [
                394
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
                388
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
                408
            ],
            "myReservation": [
                376
            ],
            "__typename": [
                1
            ]
        },
        "Events": {
            "edges": [
                396
            ],
            "nodes": [
                392
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
                392
            ],
            "__typename": [
                1
            ]
        },
        "EventCalendarGenerateResult": {
            "events": [
                392
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
                400
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
                398
            ],
            "startsAt": [
                12
            ],
            "endsAt": [
                12
            ],
            "state": [
                401
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
                402
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
                403
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
                406
            ],
            "nodes": [
                404
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
                404
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
                407
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
                410
            ],
            "nodes": [
                408
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
                408
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
                412
            ],
            "endedReason": [
                413
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
                415
            ],
            "nodes": [
                411
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
                411
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
                418
            ],
            "nodes": [
                416
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
                416
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
                421
            ],
            "nodes": [
                419
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
                419
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
                424
            ],
            "nodes": [
                422
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
                422
            ],
            "__typename": [
                1
            ]
        },
        "PlayerItemsTransferResult": {
            "from": [
                419
            ],
            "to": [
                419
            ],
            "__typename": [
                1
            ]
        },
        "JournalActor": {
            "type": [
                427
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
                430
            ],
            "type": [
                1
            ],
            "severity": [
                431
            ],
            "actor": [
                426
            ],
            "primaryResource": [
                428
            ],
            "secondaryResources": [
                428
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
                432,
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
                433
            ],
            "nodes": [
                429
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
                429
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
                441
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
                106
            ],
            "events": [
                108
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
        "ModerationCheckResult": {
            "key": [
                1
            ],
            "allowed": [
                4
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
                449
            ],
            "visibility": [
                450
            ],
            "objectType": [
                451
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
                448
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
                451
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
                455
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
                453
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
                454
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
                456
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
                139
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
                461
            ],
            "organizationId": [
                10
            ],
            "appId": [
                1
            ],
            "customDomains": [
                458
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
                147
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
                465
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
                467
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
                472
            ],
            "nodes": [
                470
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
                470
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
                475
            ],
            "nodes": [
                473
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
                473
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
                479
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
                476
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
                400
            ],
            "items": [
                478
            ],
            "currencyPrices": [
                477
            ],
            "__typename": [
                1
            ]
        },
        "ShopProducts": {
            "edges": [
                482
            ],
            "nodes": [
                480
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
                480
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
                485
            ],
            "nodes": [
                483
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
                483
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
                479
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
                488
            ],
            "nodes": [
                486
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
                486
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
                492
            ],
            "configuration": [
                489
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
                494
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
                493
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
                495
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
                497
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
                499
            ],
            "mappingConfiguration": [
                498
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
                504
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
                505
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
                506
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
                508
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
                509
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
                511
            ],
            "stringCondition": [
                513
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
                514
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
                513
            ],
            "numericCondition": [
                512
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
                517
            ],
            "memberConditions": [
                516
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
                518
            ],
            "customFields": [
                502
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
                515
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
                521
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
                524
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
                387
            ],
            "__typename": [
                1
            ]
        },
        "EventConfigurationInput": {
            "customFields": [
                502
            ],
            "groupConfiguration": [
                523
            ],
            "maxTicketsPerReservation": [
                17
            ],
            "reservationStatusAfterPayment": [
                389
            ],
            "reservationStatusAfterRegistration": [
                390
            ],
            "sessionDuration": [
                17
            ],
            "allowForNewSessionAfterTimeout": [
                4
            ],
            "seatAssignmentMode": [
                391
            ],
            "allowForMoreTicketsThanGroupMembers": [
                4
            ],
            "waitlist": [
                526
            ],
            "selfService": [
                527
            ],
            "__typename": [
                1
            ]
        },
        "EventTicketConfigurationConfigurationInput": {
            "customFields": [
                502
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
                479
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
                171,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "leaderboardCurrentPlayerRanking": [
                173,
                {
                    "input": [
                        538,
                        "LeaderboardGetPlayerRankingInput!"
                    ]
                }
            ],
            "leaderboards": [
                177,
                {
                    "page": [
                        59,
                        "PageInfo!"
                    ]
                }
            ],
            "leaderboard": [
                176,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "currentLeaderboardSeason": [
                179,
                {
                    "leaderboardId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "leaderboardSeasons": [
                180,
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
                179,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "leaderboardSeasonBuckets": [
                184,
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
                182,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "leaderboardSeasonBucketScores": [
                174,
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
            "leaderboardFeeds": [
                187,
                {
                    "leaderboardId": [
                        10
                    ],
                    "tournamentId": [
                        10
                    ],
                    "page": [
                        59
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
                        494,
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
                539
            ],
            "identityProvider": [
                204,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "organizationApp": [
                197,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "organizationApps": [
                198,
                {
                    "page": [
                        59,
                        "PageInfo!"
                    ]
                }
            ],
            "appReleasesByApp": [
                193,
                {
                    "appId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "appRelease": [
                193,
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
                210
            ],
            "webhook": [
                210,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "organizationAttachedApps": [
                202,
                {
                    "page": [
                        59,
                        "PageInfo!"
                    ]
                }
            ],
            "availableRootIdentityProvider": [
                191,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "getAvailableRootIdentityProviders": [
                191
            ],
            "emailTemplateConfigurations": [
                49
            ],
            "emailConfiguration": [
                51
            ],
            "emailTemplate": [
                87,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "emailTemplates": [
                88,
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
                        541
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
                211,
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
                245,
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
                258,
                {
                    "query": [
                        542,
                        "TournamentsQuery!"
                    ],
                    "page": [
                        59,
                        "PageInfo!"
                    ]
                }
            ],
            "tournamentSteps": [
                256,
                {
                    "tournamentId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "tournamentStep": [
                256,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "tournamentStepGeneratedShape": [
                263,
                {
                    "stepId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "match": [
                243,
                {
                    "matchId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "tournamentTeam": [
                252,
                {
                    "teamId": [
                        10,
                        "ID!"
                    ],
                    "memberStatus": [
                        249
                    ]
                }
            ],
            "tournamentTeams": [
                253,
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
                        249
                    ],
                    "status": [
                        60
                    ],
                    "playerUsernameQuery": [
                        1
                    ],
                    "propertiesFilter": [
                        503,
                        "[PropertyValueInput!]"
                    ],
                    "playerPropertiesFilter": [
                        503,
                        "[PropertyValueInput!]"
                    ],
                    "playerIdentityProviderPropertiesFilter": [
                        547,
                        "[IdentityProviderPropertyInput!]"
                    ],
                    "playerProfileIds": [
                        10,
                        "[ID!]"
                    ]
                }
            ],
            "tournamentPlayers": [
                250,
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
                        503,
                        "[PropertyValueInput!]"
                    ],
                    "orderByProperty": [
                        548
                    ]
                }
            ],
            "tournamentTeamInvites": [
                250,
                {
                    "page": [
                        59,
                        "PageInfo!"
                    ],
                    "tournamentId": [
                        10
                    ],
                    "status": [
                        249
                    ]
                }
            ],
            "tournamentStepGroupRoundGameMatchScoresGetForStep": [
                268,
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
                270,
                {
                    "tournamentId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "openPoolMatches": [
                341,
                {
                    "stepId": [
                        10,
                        "ID!"
                    ],
                    "filter": [
                        549
                    ],
                    "page": [
                        59
                    ]
                }
            ],
            "openPoolStandings": [
                343,
                {
                    "stepId": [
                        10,
                        "ID!"
                    ],
                    "groupId": [
                        10
                    ]
                }
            ],
            "stepRuleSet": [
                289,
                {
                    "tournamentStepId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "presetScripts": [
                292
            ],
            "presetScript": [
                292,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "builtinPresets": [
                293,
                {
                    "category": [
                        294
                    ]
                }
            ],
            "builtinPreset": [
                293,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "validateScript": [
                302,
                {
                    "input": [
                        550,
                        "ValidateScriptInput!"
                    ]
                }
            ],
            "simulateScript": [
                305,
                {
                    "input": [
                        551,
                        "SimulateScriptInput!"
                    ]
                }
            ],
            "stepRuleSetValidationJob": [
                328,
                {
                    "jobId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "stepRuleSetValidationJobs": [
                334,
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
                336,
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
                        331,
                        "[ValidationEventKind!]"
                    ]
                }
            ],
            "platformFiles": [
                143,
                {
                    "type": [
                        144
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
                143,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "platforms": [
                462
            ],
            "platform": [
                462,
                {
                    "platformId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "platformFindFromDomain": [
                462,
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
                        147,
                        "URL!"
                    ]
                }
            ],
            "platformCustomDomains": [
                458,
                {
                    "platformId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "platformTemplatesPublic": [
                463
            ],
            "platformTemplates": [
                463
            ],
            "platformTemplate": [
                463,
                {
                    "platformTemplateId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "subscriptionItems": [
                495
            ],
            "organizationCurrentSubscriptionItems": [
                496
            ],
            "journalEntries": [
                432,
                {
                    "page": [
                        59
                    ],
                    "filters": [
                        557
                    ]
                }
            ],
            "journalEntry": [
                429,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "organizationSkillRatings": [
                491
            ],
            "organizationSkillRating": [
                491,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "event": [
                394,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "events": [
                395,
                {
                    "page": [
                        59,
                        "PageInfo!"
                    ],
                    "query": [
                        558
                    ],
                    "eventIds": [
                        10,
                        "[ID!]"
                    ]
                }
            ],
            "eventTicketConfiguration": [
                399,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "eventTicketConfigurations": [
                399,
                {
                    "eventId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "eventReservationsMyReservations": [
                377,
                {
                    "page": [
                        59,
                        "PageInfo!"
                    ],
                    "status": [
                        375
                    ],
                    "groupStatus": [
                        360
                    ],
                    "eventIds": [
                        10,
                        "[ID!]"
                    ]
                }
            ],
            "eventReservation": [
                374,
                {
                    "reservationId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "eventSeats": [
                383,
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
                377,
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
                        562,
                        "EventReservationsQueryInput!"
                    ]
                }
            ],
            "eventVenues": [
                409,
                {
                    "page": [
                        59,
                        "PageInfo!"
                    ]
                }
            ],
            "eventVenue": [
                408,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "eventVenueSeats": [
                369,
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
                405,
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
                399,
                {
                    "filter": [
                        564,
                        "EventSlotsFilter!"
                    ]
                }
            ],
            "myWaitlistEntries": [
                411,
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
                414,
                {
                    "eventId": [
                        10,
                        "ID!"
                    ],
                    "ticketConfigurationId": [
                        10
                    ],
                    "statuses": [
                        412,
                        "[EventWaitlistEntryStatus!]"
                    ],
                    "page": [
                        59,
                        "PageInfo!"
                    ]
                }
            ],
            "organizationPaymentCollectionConfiguration": [
                247
            ],
            "userGroupMembers": [
                363,
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
                        358
                    ]
                }
            ],
            "userGroups": [
                361,
                {
                    "query": [
                        565,
                        "UserGroupsQueryInput!"
                    ],
                    "page": [
                        59,
                        "PageInfo!"
                    ]
                }
            ],
            "userGroupMyMemberships": [
                363,
                {
                    "page": [
                        59,
                        "PageInfo!"
                    ],
                    "status": [
                        358
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
                464
            ],
            "shops": [
                484,
                {
                    "page": [
                        59
                    ],
                    "filter": [
                        566
                    ]
                }
            ],
            "shopCategories": [
                474,
                {
                    "page": [
                        59
                    ],
                    "filter": [
                        567
                    ]
                }
            ],
            "playerShopProductPurshases": [
                471,
                {
                    "page": [
                        59
                    ],
                    "filter": [
                        568
                    ]
                }
            ],
            "shopProducts": [
                481,
                {
                    "shopId": [
                        10,
                        "ID!"
                    ],
                    "page": [
                        59
                    ],
                    "filter": [
                        569
                    ]
                }
            ],
            "shopProductItems": [
                487,
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
                417,
                {
                    "page": [
                        59
                    ],
                    "filter": [
                        570
                    ]
                }
            ],
            "playerItems": [
                420,
                {
                    "page": [
                        59
                    ],
                    "filter": [
                        571
                    ]
                }
            ],
            "itemCategories": [
                423,
                {
                    "page": [
                        59
                    ],
                    "filter": [
                        572
                    ]
                }
            ],
            "currencies": [
                345,
                {
                    "page": [
                        59
                    ],
                    "filter": [
                        573
                    ]
                }
            ],
            "playerCurrencies": [
                348,
                {
                    "page": [
                        59
                    ],
                    "filter": [
                        574
                    ]
                }
            ],
            "marketplaceApps": [
                159,
                {
                    "page": [
                        59
                    ],
                    "filter": [
                        575
                    ]
                }
            ],
            "marketplaceApp": [
                156,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "myMarketplaceInstallations": [
                166,
                {
                    "page": [
                        59
                    ]
                }
            ],
            "appReleases": [
                152,
                {
                    "marketplaceAppId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "moduleTokensForPlatform": [
                443,
                {
                    "platformId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "extensionToken": [
                444,
                {
                    "installationId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "platformModuleConfigs": [
                442,
                {
                    "platformId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "entityMetafields": [
                445,
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
                        576
                    ]
                }
            ],
            "allowedObjectTypes": [
                451
            ],
            "objectMetadata": [
                448,
                {
                    "objectType": [
                        451,
                        "ObjectType!"
                    ],
                    "objectId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "objectMetadataBatch": [
                452,
                {
                    "objectType": [
                        451,
                        "ObjectType!"
                    ],
                    "objectIds": [
                        10,
                        "[ID!]!"
                    ]
                }
            ],
            "customFieldDefinitions": [
                454,
                {
                    "objectType": [
                        451,
                        "ObjectType!"
                    ]
                }
            ],
            "customFieldValues": [
                456,
                {
                    "objectType": [
                        451,
                        "ObjectType!"
                    ],
                    "objectId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "customFieldValuesBatch": [
                457,
                {
                    "objectType": [
                        451,
                        "ObjectType!"
                    ],
                    "objectIds": [
                        10,
                        "[ID!]!"
                    ]
                }
            ],
            "guestMe": [
                95
            ],
            "guestConfiguration": [
                101
            ],
            "guestLinkResolve": [
                96,
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
                        577,
                        "AppFunctionCallInput!"
                    ]
                }
            ],
            "permissionDefinitions": [
                103
            ],
            "hasPermissions": [
                4,
                {
                    "checks": [
                        578,
                        "[PermissionCheckInput!]!"
                    ]
                }
            ],
            "registrationSeries": [
                350,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "registrationSeriesList": [
                352,
                {
                    "page": [
                        59,
                        "PageInfo!"
                    ]
                }
            ],
            "myActiveRegistrations": [
                354,
                {
                    "seriesId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "registrationSeriesPlayerEntries": [
                354,
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
                446
            ],
            "moderationCheck": [
                447,
                {
                    "inputs": [
                        579,
                        "[ModerationCheckInput!]!"
                    ]
                }
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
                204
            ],
            "on_PublicOrganizationIdentityProviderV2": [
                540
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
                543
            ],
            "orderDirection": [
                544
            ],
            "status": [
                545
            ],
            "showNotVisible": [
                4
            ],
            "filterByPlayers": [
                546
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
                249
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
                544
            ],
            "__typename": [
                1
            ]
        },
        "OpenPoolMatchesFilter": {
            "statuses": [
                244
            ],
            "teamId": [
                10
            ],
            "groupId": [
                10
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
                307
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
                307
            ],
            "parameters": [
                1
            ],
            "overrides": [
                552
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
                553
            ],
            "presetParameters": [
                555
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
                554
            ],
            "customFields": [
                554
            ],
            "rank": [
                80
            ],
            "status": [
                222
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
                556
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
                430
            ],
            "types": [
                1
            ],
            "typePrefix": [
                1
            ],
            "actorType": [
                427
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
                431
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
                559
            ],
            "orderDirection": [
                544
            ],
            "status": [
                560
            ],
            "showNotVisible": [
                4
            ],
            "filterByPlayers": [
                561
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
            "tournamentId": [
                10
            ],
            "registrationSeriesId": [
                10
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
                375
            ],
            "memberStatus": [
                358
            ],
            "__typename": [
                1
            ]
        },
        "EventReservationsQueryInput": {
            "filterByRegistrationStatus": [
                375
            ],
            "retrieveOnlyGroupMembersWithStatus": [
                358
            ],
            "filterByPlayerUsernameQuery": [
                1
            ],
            "filterByReservationProperties": [
                503
            ],
            "filterByPlayerProperties": [
                503
            ],
            "filterByPlayerIdentityProviderProperties": [
                547
            ],
            "filterByPlayers": [
                563
            ],
            "filterByGroupStatus": [
                360
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
                358
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
                157
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
        "ModerationCheckInput": {
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
                171,
                {
                    "id": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        581,
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
                173,
                {
                    "input": [
                        582,
                        "LeaderboardRegisterPlayerScoreInput!"
                    ]
                }
            ],
            "createLeaderboard": [
                176,
                {
                    "input": [
                        584,
                        "CreateLeaderboardInput!"
                    ]
                }
            ],
            "updateLeaderboard": [
                176,
                {
                    "id": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        585,
                        "UpdateLeaderboardInput!"
                    ]
                }
            ],
            "deleteLeaderboard": [
                586,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "createLeaderboardSeason": [
                179,
                {
                    "leaderboardId": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        587,
                        "CreateLeaderboardSeasonInput!"
                    ]
                }
            ],
            "updateLeaderboardSeason": [
                179,
                {
                    "id": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        588,
                        "UpdateLeaderboardSeasonInput!"
                    ]
                }
            ],
            "deleteLeaderboardSeason": [
                586,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "createLeaderboardSeasonBucket": [
                182,
                {
                    "seasonId": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        589,
                        "CreateLeaderboardSeasonBucketInput!"
                    ]
                }
            ],
            "updateLeaderboardSeasonBucket": [
                182,
                {
                    "id": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        590,
                        "UpdateLeaderboardSeasonBucketInput!"
                    ]
                }
            ],
            "deleteLeaderboardSeasonBucket": [
                586,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "createLeaderboardFeed": [
                186,
                {
                    "input": [
                        591,
                        "CreateLeaderboardFeedInput!"
                    ]
                }
            ],
            "updateLeaderboardFeed": [
                186,
                {
                    "id": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        592,
                        "UpdateLeaderboardFeedInput!"
                    ]
                }
            ],
            "deleteLeaderboardFeed": [
                4,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "reconcileLeaderboardFeed": [
                189,
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
                        593,
                        "UpdateOrganizationInput!"
                    ]
                }
            ],
            "createOrganization": [
                70,
                {
                    "organization": [
                        595,
                        "CreateOrganizationInput!"
                    ]
                }
            ],
            "createOrganizationGroup": [
                9,
                {
                    "input": [
                        596,
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
                        596,
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
                        597,
                        "SetOrganizationMembershipInput!"
                    ]
                }
            ],
            "deleteOrganizationMembership": [
                4,
                {
                    "input": [
                        598,
                        "DeleteOrganizationMembershipInput!"
                    ]
                }
            ],
            "createIdentityProvider": [
                204,
                {
                    "input": [
                        599,
                        "CreateOrganizationIdentityProvider!"
                    ]
                }
            ],
            "updateIdentityProvider": [
                204,
                {
                    "providerId": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        602,
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
                197,
                {
                    "input": [
                        603,
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
                197,
                {
                    "id": [
                        1,
                        "String!"
                    ],
                    "input": [
                        604,
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
                197,
                {
                    "id": [
                        1,
                        "String!"
                    ],
                    "manifest": [
                        605,
                        "AppManifestInput!"
                    ]
                }
            ],
            "regenerateAppWebhookSecret": [
                200,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "createAppRelease": [
                193,
                {
                    "appId": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        625,
                        "CreateAppReleaseInput!"
                    ]
                }
            ],
            "createWebhook": [
                210,
                {
                    "input": [
                        626,
                        "CreateWebhookInput!"
                    ]
                }
            ],
            "updateWebhook": [
                210,
                {
                    "id": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        627,
                        "UpdateWebhookInput!"
                    ]
                }
            ],
            "deleteWebhook": [
                210,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "regenerateWebhookSecret": [
                210,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "setOrganizationAttachedApp": [
                201,
                {
                    "input": [
                        628,
                        "SetOrganizationAttachedAppInput!"
                    ]
                }
            ],
            "deleteOrganizationAttachedApp": [
                4,
                {
                    "input": [
                        629,
                        "DeleteOrganizationAttachedAppInput!"
                    ]
                }
            ],
            "emailSend": [
                4,
                {
                    "fromTemplate": [
                        630
                    ],
                    "fromCustom": [
                        631
                    ]
                }
            ],
            "emailConfigurationUpdate": [
                51,
                {
                    "input": [
                        520,
                        "EmailConfigurationInput!"
                    ]
                }
            ],
            "emailTemplateCreate": [
                87,
                {
                    "input": [
                        632,
                        "EmailTemplateCreateInput!"
                    ]
                }
            ],
            "emailTemplateUpdate": [
                87,
                {
                    "id": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        633,
                        "EmailTemplateUpdateInput!"
                    ]
                }
            ],
            "emailTemplateDelete": [
                87,
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
                        634,
                        "CreatePlayerInput!"
                    ]
                }
            ],
            "updatePlayer": [
                73,
                {
                    "input": [
                        636,
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
                        637,
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
                        638,
                        "CreateTournamentInput!"
                    ]
                }
            ],
            "updateTournament": [
                58,
                {
                    "input": [
                        641,
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
                256,
                {
                    "tournamentId": [
                        10,
                        "ID!"
                    ],
                    "configuration": [
                        510
                    ],
                    "step": [
                        642,
                        "CreateTournamentStepInput!"
                    ]
                }
            ],
            "updateTournamentStep": [
                256,
                {
                    "stepId": [
                        10,
                        "ID!"
                    ],
                    "configuration": [
                        510
                    ],
                    "step": [
                        642,
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
                256,
                {
                    "input": [
                        643
                    ],
                    "legacyInput": [
                        645
                    ]
                }
            ],
            "updateSeedingOrder": [
                256,
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
                256,
                {
                    "stepId": [
                        10,
                        "ID!"
                    ],
                    "pins": [
                        644,
                        "[SeedingPinInput!]!"
                    ]
                }
            ],
            "withdrawTeamFromStep": [
                256,
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
                256,
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
                243,
                {
                    "matchId": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        651,
                        "[UpdateMatchScoreInput!]!"
                    ]
                }
            ],
            "registerCustomTournamentTeams": [
                252,
                {
                    "tournamentId": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        653,
                        "RegisterCustomTeamsInput!"
                    ]
                }
            ],
            "registerTournamentTeam": [
                252,
                {
                    "tournamentId": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        656,
                        "RegisterTournamentTeamInput!"
                    ]
                }
            ],
            "updateTournamentTeam": [
                252,
                {
                    "input": [
                        657,
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
                252,
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
                252,
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
                252,
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
                270,
                {
                    "input": [
                        658,
                        "TournamentAdminUpsertInput!"
                    ]
                }
            ],
            "tournamentAdminDelete": [
                4,
                {
                    "input": [
                        659,
                        "TournamentAdminDeleteInput!"
                    ]
                }
            ],
            "openPoolCreateMatch": [
                340,
                {
                    "input": [
                        660,
                        "OpenPoolCreateMatchInput!"
                    ]
                }
            ],
            "openPoolAddTeams": [
                343,
                {
                    "stepId": [
                        10,
                        "ID!"
                    ],
                    "teamIds": [
                        10,
                        "[ID!]!"
                    ],
                    "groupId": [
                        10
                    ]
                }
            ],
            "openPoolCorrectMatch": [
                340,
                {
                    "matchId": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        651,
                        "[UpdateMatchScoreInput!]!"
                    ]
                }
            ],
            "openPoolCancelMatch": [
                4,
                {
                    "matchId": [
                        10,
                        "ID!"
                    ],
                    "reason": [
                        1
                    ]
                }
            ],
            "openPoolClose": [
                256,
                {
                    "stepId": [
                        10,
                        "ID!"
                    ],
                    "cancelPendingMatches": [
                        4,
                        "Boolean!"
                    ]
                }
            ],
            "openPoolReopen": [
                256,
                {
                    "stepId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "tournamentTeamMemberAdd": [
                252,
                {
                    "input": [
                        661,
                        "TournamentTeamMemberAddInput!"
                    ]
                }
            ],
            "tournamentTeamMemberRemove": [
                252,
                {
                    "teamId": [
                        10,
                        "ID!"
                    ],
                    "playerId": [
                        10,
                        "ID!"
                    ],
                    "newManagerId": [
                        10
                    ]
                }
            ],
            "createStepRuleSet": [
                289,
                {
                    "tournamentStepId": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        662,
                        "CreateStepRuleSetInput!"
                    ]
                }
            ],
            "applyPresetScript": [
                289,
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
                289,
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
                292,
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
                292,
                {
                    "input": [
                        673,
                        "CreatePresetScriptInput!"
                    ]
                }
            ],
            "updatePresetScript": [
                292,
                {
                    "id": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        675,
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
                256,
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
                        222,
                        "TeamScopeStatus!"
                    ]
                }
            ],
            "validateStepRuleSet": [
                328,
                {
                    "stepRuleSetId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "cancelStepRuleSetValidation": [
                328,
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
                143,
                {
                    "input": [
                        676,
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
                143,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "platformFileGenerateUploadUrl": [
                146,
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
                143,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "platformFileUpdate": [
                143,
                {
                    "id": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        677,
                        "PlatformFileUpdateInput!"
                    ]
                }
            ],
            "platformFileDelete": [
                586,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "platformCreate": [
                462,
                {
                    "input": [
                        678,
                        "CreatePlatformInput!"
                    ]
                }
            ],
            "platformUpdate": [
                462,
                {
                    "id": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        679,
                        "UpdatePlatformInput!"
                    ]
                }
            ],
            "platformDelete": [
                586,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "platformThemeUpdate": [
                462,
                {
                    "platformId": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        680,
                        "PlatformThemeInput!"
                    ]
                }
            ],
            "platformRegisterCustomDomain": [
                139,
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
                139,
                {
                    "hostname": [
                        1,
                        "String!"
                    ]
                }
            ],
            "platformRemoveCustomDomain": [
                586,
                {
                    "hostname": [
                        1,
                        "String!"
                    ]
                }
            ],
            "platformTemplateCreate": [
                463,
                {
                    "input": [
                        683,
                        "CreatePlatformTemplateInput!"
                    ]
                }
            ],
            "platformTemplateUpdate": [
                463,
                {
                    "id": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        684,
                        "UpdatePlatformTemplateInput!"
                    ]
                }
            ],
            "platformTemplateApply": [
                462,
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
                586,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "organizationSubscriptionItemsUpdate": [
                586,
                {
                    "items": [
                        685,
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
                490,
                {
                    "organizationSkillRatingId": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        686,
                        "OrganizationSkillRatingsRegisterMatchInput!"
                    ]
                }
            ],
            "organizationSkillRatingCreate": [
                491,
                {
                    "input": [
                        688,
                        "OrganizationSkillRatingCreateInput!"
                    ]
                }
            ],
            "organizationSkillRatingUpdate": [
                491,
                {
                    "id": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        689,
                        "OrganizationSkillRatingUpdateInput!"
                    ]
                }
            ],
            "organizationSkillRatingDelete": [
                586,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "eventCreate": [
                392,
                {
                    "input": [
                        690,
                        "EventCreateInput!"
                    ]
                }
            ],
            "eventUpdate": [
                392,
                {
                    "input": [
                        691,
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
                399,
                {
                    "input": [
                        692,
                        "EventTicketConfigurationCreateInput!"
                    ]
                }
            ],
            "eventTicketConfigurationUpdate": [
                399,
                {
                    "ticketConfigurationId": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        693,
                        "EventTicketConfigurationUpdateInput!"
                    ]
                }
            ],
            "eventTicketConfigurationDelete": [
                399,
                {
                    "ticketConfigurationId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "eventReservationUpdateStatus": [
                374,
                {
                    "reservationId": [
                        10,
                        "ID!"
                    ],
                    "status": [
                        375,
                        "EventReservationStatus!"
                    ],
                    "confirmPaymentRefundOrCancel": [
                        4
                    ],
                    "refundPayment": [
                        4
                    ],
                    "ticketsToReserve": [
                        694
                    ]
                }
            ],
            "eventReservationConfirmPresence": [
                374,
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
                380,
                {
                    "eventId": [
                        10,
                        "ID!"
                    ],
                    "options": [
                        696,
                        "EventReservationValidateAndPayInput!"
                    ],
                    "ticketConfigurations": [
                        698,
                        "[EventReservationTicketConfigurationInput!]"
                    ]
                }
            ],
            "eventReservationCreate": [
                374,
                {
                    "eventId": [
                        10,
                        "ID!"
                    ],
                    "groupName": [
                        1
                    ]
                }
            ],
            "eventReservationUpdateTickets": [
                374,
                {
                    "reservationId": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        699,
                        "EventReservationUpdateTicketsInput!"
                    ]
                }
            ],
            "eventReservationStartRegistrationSession": [
                374,
                {
                    "eventId": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        694,
                        "EventReservationRegisterTicketsInput!"
                    ],
                    "replaceReservationId": [
                        10
                    ]
                }
            ],
            "eventReservationCancel": [
                374,
                {
                    "reservationId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "eventVenueRequestImageUpdate": [
                146,
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
                408,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "eventVenueCreate": [
                408,
                {
                    "input": [
                        700,
                        "EventVenueCreateInput!"
                    ]
                }
            ],
            "eventVenueUpdate": [
                408,
                {
                    "id": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        701,
                        "EventVenueUpdateInput!"
                    ]
                }
            ],
            "eventVenueDelete": [
                408,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "eventVenueSeatsUpdate": [
                368,
                {
                    "venueId": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        702,
                        "EventVenueSeatsUpdateInput!"
                    ]
                }
            ],
            "eventVenueSeatTypeCreate": [
                404,
                {
                    "venueId": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        705,
                        "EventVenueSeatTypeCreateInput!"
                    ]
                }
            ],
            "eventVenueSeatTypeUpdate": [
                404,
                {
                    "id": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        706,
                        "EventVenueSeatTypeUpdateInput!"
                    ]
                }
            ],
            "eventVenueSeatTypeDelete": [
                404,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "eventCalendarGenerate": [
                397,
                {
                    "input": [
                        707,
                        "EventCalendarGenerateInput!"
                    ]
                }
            ],
            "eventWaitlistJoin": [
                411,
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
                411,
                {
                    "entryId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "eventWaitlistRemoveEntry": [
                411,
                {
                    "entryId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "eventReservationChangeTickets": [
                374,
                {
                    "reservationId": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        711,
                        "EventReservationChangeTicketsInput!"
                    ]
                }
            ],
            "eventReservationReleaseTickets": [
                374,
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
                357,
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
                359,
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
                357,
                {
                    "groupId": [
                        10,
                        "ID!"
                    ],
                    "status": [
                        358,
                        "UserGroupMemberStatus!"
                    ]
                }
            ],
            "userGroupDeleteInvite": [
                357,
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
                483,
                {
                    "input": [
                        712,
                        "ShopCreateInput!"
                    ]
                }
            ],
            "shopUpdate": [
                483,
                {
                    "id": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        713,
                        "ShopUpdateInput!"
                    ]
                }
            ],
            "shopDelete": [
                483,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "shopCategoryCreate": [
                473,
                {
                    "input": [
                        714,
                        "ShopCategoryCreateInput!"
                    ]
                }
            ],
            "shopCategoryUpdate": [
                473,
                {
                    "id": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        715,
                        "ShopCategoryUpdateInput!"
                    ]
                }
            ],
            "shopCategoryDelete": [
                473,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "playerShopProductPurshase": [
                469,
                {
                    "shopId": [
                        10,
                        "ID!"
                    ],
                    "paymentConfig": [
                        716
                    ],
                    "input": [
                        717,
                        "PlayerShopProductPurshaseInput!"
                    ]
                }
            ],
            "shopProductCreate": [
                480,
                {
                    "shopId": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        719,
                        "ShopProductCreateInput!"
                    ]
                }
            ],
            "shopProductUpdate": [
                480,
                {
                    "productId": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        720,
                        "ShopProductUpdateInput!"
                    ]
                }
            ],
            "shopProductDelete": [
                480,
                {
                    "productId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "itemCreate": [
                416,
                {
                    "input": [
                        721,
                        "ItemCreateInput!"
                    ]
                }
            ],
            "itemUpdate": [
                416,
                {
                    "id": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        722,
                        "ItemUpdateInput!"
                    ]
                }
            ],
            "itemDelete": [
                416,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "playerItemsUpdate": [
                419,
                {
                    "playerId": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        723,
                        "PlayerItemsUpdateInput!"
                    ]
                }
            ],
            "itemCategoryCreate": [
                422,
                {
                    "input": [
                        725,
                        "ItemCategoryCreateInput!"
                    ]
                }
            ],
            "itemCategoryUpdate": [
                422,
                {
                    "id": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        726,
                        "ItemCategoryUpdateInput!"
                    ]
                }
            ],
            "itemCategoryDelete": [
                422,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "playerItemsTransfer": [
                425,
                {
                    "input": [
                        727,
                        "PlayerItemsTransferInput!"
                    ]
                }
            ],
            "currencyCreate": [
                344,
                {
                    "input": [
                        729,
                        "CurrencyCreateInput!"
                    ]
                }
            ],
            "currencyUpdate": [
                344,
                {
                    "id": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        730,
                        "CurrencyUpdateInput!"
                    ]
                }
            ],
            "currencyDelete": [
                344,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "playerCurrencyUpdate": [
                347,
                {
                    "playerId": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        731,
                        "[PlayerCurrencyUpdateInput!]!"
                    ]
                }
            ],
            "publishMarketplaceApp": [
                156,
                {
                    "input": [
                        733,
                        "PublishMarketplaceAppInput!"
                    ]
                }
            ],
            "updateMarketplaceApp": [
                156,
                {
                    "id": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        734,
                        "UpdateMarketplaceAppInput!"
                    ]
                }
            ],
            "installMarketplaceApp": [
                164,
                {
                    "input": [
                        735,
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
                161,
                {
                    "input": [
                        736,
                        "SubmitMarketplaceAppReviewInput!"
                    ]
                }
            ],
            "setMarketplaceAppPricing": [
                169,
                {
                    "input": [
                        737,
                        "SetMarketplaceAppPricingInput!"
                    ]
                }
            ],
            "createMarketplaceCheckout": [
                1,
                {
                    "input": [
                        738,
                        "CreateMarketplaceCheckoutInput!"
                    ]
                }
            ],
            "appCreateRelease": [
                154,
                {
                    "marketplaceAppId": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        739,
                        "AppCreateReleaseInput!"
                    ]
                }
            ],
            "appFinalizeRelease": [
                155,
                {
                    "releaseId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "appPublishRelease": [
                152,
                {
                    "releaseId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "platformModuleConfigSet": [
                442,
                {
                    "input": [
                        741,
                        "PlatformModuleConfigSetInput!"
                    ]
                }
            ],
            "platformModuleConfigDelete": [
                4,
                {
                    "input": [
                        743,
                        "PlatformModuleConfigDeleteInput!"
                    ]
                }
            ],
            "entityMetafieldSet": [
                445,
                {
                    "input": [
                        744,
                        "SetEntityMetafieldInput!"
                    ]
                }
            ],
            "entityMetafieldDelete": [
                4,
                {
                    "input": [
                        745,
                        "DeleteEntityMetafieldInput!"
                    ]
                }
            ],
            "setObjectMetadata": [
                448,
                {
                    "input": [
                        746,
                        "SetObjectMetadataInput!"
                    ]
                }
            ],
            "removeObjectMetadata": [
                4,
                {
                    "input": [
                        748,
                        "RemoveObjectMetadataInput!"
                    ]
                }
            ],
            "createCustomFieldDefinition": [
                454,
                {
                    "input": [
                        749,
                        "CreateCustomFieldDefinitionInput!"
                    ]
                }
            ],
            "updateCustomFieldDefinition": [
                454,
                {
                    "id": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        751,
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
                454,
                {
                    "objectType": [
                        451,
                        "ObjectType!"
                    ],
                    "orderedIds": [
                        10,
                        "[ID!]!"
                    ]
                }
            ],
            "setCustomFieldValues": [
                456,
                {
                    "input": [
                        752,
                        "SetCustomFieldValuesInput!"
                    ]
                }
            ],
            "appInstallationPin": [
                164,
                {
                    "input": [
                        754,
                        "AppInstallationPinInput!"
                    ]
                }
            ],
            "appFunctionsSetEnabled": [
                164,
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
                90,
                {
                    "input": [
                        755,
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
                99,
                {
                    "input": [
                        756,
                        "GuestProfileCreateInput!"
                    ]
                }
            ],
            "guestProfileUpdate": [
                90,
                {
                    "playerId": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        757,
                        "GuestProfileUpdateInput!"
                    ]
                }
            ],
            "guestGuardianLinkCreate": [
                100,
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
                101,
                {
                    "input": [
                        758,
                        "GuestConfigurationInput!"
                    ]
                }
            ],
            "guestLinkExchange": [
                93,
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
                98,
                {
                    "input": [
                        759,
                        "GuestLinkCreateInput!"
                    ]
                }
            ],
            "guestLinkRevoke": [
                80,
                {
                    "input": [
                        761,
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
                93,
                {
                    "input": [
                        762,
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
                        763,
                        "[AppConfigValueInput!]!"
                    ]
                }
            ],
            "appFunctionCall": [
                83,
                {
                    "input": [
                        577,
                        "AppFunctionCallInput!"
                    ]
                }
            ],
            "customPermissionCreate": [
                103,
                {
                    "input": [
                        764,
                        "CustomPermissionInput!"
                    ]
                }
            ],
            "customPermissionUpdate": [
                103,
                {
                    "id": [
                        1,
                        "String!"
                    ],
                    "input": [
                        765,
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
                350,
                {
                    "input": [
                        766,
                        "RegistrationSeriesCreateInput!"
                    ]
                }
            ],
            "registrationSeriesUpdate": [
                350,
                {
                    "id": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        767,
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
                446,
                {
                    "input": [
                        768,
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
                510
            ],
            "tournamentConfiguration": [
                519
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
                17
            ],
            "mode": [
                583
            ],
            "seasonId": [
                10
            ],
            "__typename": [
                1
            ]
        },
        "LeaderboardScoreMode": {},
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
                183
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
                183
            ],
            "__typename": [
                1
            ]
        },
        "CreateLeaderboardFeedInput": {
            "leaderboardId": [
                10
            ],
            "tournamentId": [
                10
            ],
            "stepId": [
                10
            ],
            "seasonId": [
                10
            ],
            "winPoints": [
                17
            ],
            "lossPoints": [
                17
            ],
            "drawPoints": [
                17
            ],
            "forfeitPoints": [
                17
            ],
            "placementPoints": [
                17
            ],
            "enabled": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "UpdateLeaderboardFeedInput": {
            "seasonId": [
                10
            ],
            "winPoints": [
                17
            ],
            "lossPoints": [
                17
            ],
            "drawPoints": [
                17
            ],
            "forfeitPoints": [
                17
            ],
            "placementPoints": [
                17
            ],
            "enabled": [
                4
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
                594
            ],
            "__typename": [
                1
            ]
        },
        "OrganizationConfigurationInput": {
            "customFields": [
                502
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
                594
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
                501
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
                501
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
                600
            ],
            "openidConfiguration": [
                601
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
                500
            ],
            "issuer": [
                1
            ],
            "providerType": [
                207
            ],
            "clientId": [
                1
            ],
            "clientSecret": [
                1
            ],
            "tokenEndpointAuthMethod": [
                208
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
                500
            ],
            "issuer": [
                1
            ],
            "providerType": [
                207
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
                600
            ],
            "openidConfiguration": [
                601
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
                606
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
                608
            ],
            "config": [
                612
            ],
            "customPermissions": [
                613
            ],
            "storage": [
                614
            ],
            "operations": [
                616
            ],
            "emailTemplates": [
                617
            ],
            "auditTypes": [
                618
            ],
            "functions": [
                620
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
                112
            ],
            "label": [
                1
            ],
            "activePages": [
                1
            ],
            "size": [
                607
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
                609
            ],
            "events": [
                611
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
                107
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
                610
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
                615
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
                619
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
                114
            ],
            "required": [
                4
            ],
            "options": [
                1
            ],
            "fields": [
                619
            ],
            "items": [
                619
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
                621
            ],
            "invoker": [
                131
            ],
            "runAs": [
                132
            ],
            "input": [
                619
            ],
            "output": [
                619
            ],
            "preload": [
                622
            ],
            "requires": [
                624
            ],
            "__typename": [
                1
            ]
        },
        "AppFunctionTriggerInput": {
            "type": [
                123
            ],
            "readOnly": [
                4
            ],
            "cacheSeconds": [
                80
            ],
            "hookPoint": [
                124
            ],
            "onError": [
                125
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
                126
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
                623
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
                501
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
                503
            ],
            "__typename": [
                1
            ]
        },
        "EmailSendFromCustomInput": {
            "emailField": [
                515
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
                635
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
                635
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
                635
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
                639
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
                640
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
                518
            ],
            "customFields": [
                502
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
                639
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
                257
            ],
            "properties": [
                503
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
                644
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
                646
            ],
            "manualSeeding": [
                649
            ],
            "__typename": [
                1
            ]
        },
        "AutomaticSeedingInput": {
            "seedingMechanism": [
                647
            ],
            "groupRepartitionMechanism": [
                648
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
                650
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
                652
            ],
            "forcedScoreValue": [
                17
            ],
            "status": [
                267
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
                654
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
                503
            ],
            "fromExistingTeamId": [
                10
            ],
            "members": [
                655
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
                634
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
                503
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
                503
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
                271
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
        "OpenPoolCreateMatchInput": {
            "stepId": [
                10
            ],
            "teamIds": [
                10
            ],
            "groupId": [
                10
            ],
            "label": [
                1
            ],
            "idempotencyKey": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "TournamentTeamMemberAddInput": {
            "teamId": [
                10
            ],
            "playerId": [
                10
            ],
            "moveFromOtherTeam": [
                4
            ],
            "removeEmptySourceTeam": [
                4
            ],
            "setAsManager": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "CreateStepRuleSetInput": {
            "scoring": [
                663
            ],
            "advancementRules": [
                665
            ],
            "crossStepRules": [
                667
            ],
            "structureTemplate": [
                669
            ],
            "__typename": [
                1
            ]
        },
        "CreateScoringInput": {
            "aggregation": [
                280
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
                664
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
                277
            ],
            "formula": [
                1
            ],
            "sortOrder": [
                278
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
                217
            ],
            "triggerScope": [
                1
            ],
            "condition": [
                1
            ],
            "actions": [
                666
            ],
            "autoExecute": [
                4
            ],
            "allowManualOverride": [
                4
            ],
            "purpose": [
                275
            ],
            "__typename": [
                1
            ]
        },
        "RuleActionInput": {
            "type": [
                273
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
                288
            ],
            "dataSource": [
                219
            ],
            "usage": [
                668
            ],
            "__typename": [
                1
            ]
        },
        "CrossStepUsageInput": {
            "type": [
                286
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
                670
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
                671
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
                672
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
                674
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
                291
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
                674
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
                144
            ],
            "config": [
                522
            ],
            "__typename": [
                1
            ]
        },
        "PlatformFileUpdateInput": {
            "config": [
                522
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
                532
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
                532
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
                681
            ],
            "sections": [
                682
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
                147
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
                147
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
                687
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
                492
            ],
            "configuration": [
                536
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
                492
            ],
            "configuration": [
                536
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
                528
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
                528
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
                400
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
                529
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
                401
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
                400
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
                529
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
                401
            ],
            "__typename": [
                1
            ]
        },
        "EventReservationRegisterTicketsInput": {
            "tickets": [
                695
            ],
            "groupName": [
                1
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
                697
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
                503
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
                695
            ],
            "ticketConfigurations": [
                698
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
                703
            ],
            "createSeats": [
                704
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
                525
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
                525
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
                530
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
                530
            ],
            "__typename": [
                1
            ]
        },
        "EventCalendarGenerateInput": {
            "days": [
                708
            ],
            "slots": [
                709
            ],
            "event": [
                710
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
                709
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
                528
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
                695
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
                503
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
                503
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
                503
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
                503
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
                697
            ],
            "__typename": [
                1
            ]
        },
        "PlayerShopProductPurshaseInput": {
            "items": [
                718
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
                533
            ],
            "metadata": [
                503
            ],
            "visibleAt": [
                12
            ],
            "currency": [
                400
            ],
            "items": [
                535
            ],
            "currencyPrices": [
                534
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
                533
            ],
            "metadata": [
                503
            ],
            "visibleAt": [
                12
            ],
            "currency": [
                400
            ],
            "items": [
                535
            ],
            "currencyPrices": [
                534
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
                503
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
                503
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
                724
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
                503
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
                503
            ],
            "__typename": [
                1
            ]
        },
        "PlayerItemsTransferInput": {
            "fromPlayerId": [
                10
            ],
            "toPlayerId": [
                10
            ],
            "items": [
                728
            ],
            "__typename": [
                1
            ]
        },
        "PlayerItemsTransferItemInput": {
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
                503
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
                503
            ],
            "__typename": [
                1
            ]
        },
        "PlayerCurrencyUpdateInput": {
            "items": [
                732
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
                605
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
                158
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
                605
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
                158
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
                170
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
                605
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
                740
            ],
            "__typename": [
                1
            ]
        },
        "AppReleaseFileInput": {
            "kind": [
                149
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
                742
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
                451
            ],
            "objectId": [
                10
            ],
            "entries": [
                747
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
                449
            ],
            "visibility": [
                450
            ],
            "__typename": [
                1
            ]
        },
        "RemoveObjectMetadataInput": {
            "objectType": [
                451
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
                451
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
                455
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
                750
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
                750
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
                451
            ],
            "objectId": [
                10
            ],
            "fields": [
                753
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
                91
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
                102
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
                760
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
        "PositiveInt": {},
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
                351
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
                351
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
                328,
                {
                    "jobId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "validationEvents": [
                330,
                {
                    "jobId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "journalEntryAdded": [
                429,
                {
                    "filters": [
                        557
                    ]
                }
            ],
            "presenceUserConnected": [
                466
            ],
            "presenceUserDisconnected": [
                468
            ],
            "__typename": [
                1
            ]
        }
    }
}