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
        113,
        116,
        121,
        123,
        132,
        133,
        134,
        135,
        140,
        141,
        146,
        149,
        153,
        156,
        158,
        162,
        166,
        167,
        174,
        179,
        192,
        200,
        202,
        204,
        205,
        210,
        212,
        215,
        228,
        230,
        243,
        244,
        253,
        258,
        266,
        270,
        274,
        276,
        280,
        282,
        286,
        288,
        290,
        292,
        293,
        295,
        301,
        303,
        306,
        309,
        312,
        314,
        316,
        319,
        322,
        324,
        325,
        328,
        331,
        336,
        338,
        342,
        344,
        346,
        347,
        348,
        355,
        357,
        372,
        379,
        384,
        386,
        387,
        388,
        396,
        397,
        398,
        409,
        410,
        436,
        439,
        440,
        458,
        459,
        460,
        464,
        488,
        501,
        503,
        552,
        553,
        554,
        565,
        567,
        568,
        592,
        595,
        656,
        657,
        694,
        771
    ],
    "types": {
        "JournalPayload": {
            "_typename": [
                1
            ],
            "on_AppFunctionExecutedPayload": [
                104
            ],
            "on_AppFunctionLogPayload": [
                105
            ],
            "on_AppFunctionDeadLetterPayload": [
                106
            ],
            "on_AppAuditPayload": [
                107
            ],
            "on_AppConfigUpdatedPayload": [
                109
            ],
            "on_AppInstallationPinnedPayload": [
                110
            ],
            "on_AppQuotaWarningPayload": [
                111
            ],
            "on_RuleEngineAdvancementRuleFiredPayload": [
                199
            ],
            "on_RuleEngineCrossStepTransferredPayload": [
                201
            ],
            "on_RuleEngineEffectAdvancePayload": [
                203
            ],
            "on_RuleEngineEffectCreateGroupPayload": [
                206
            ],
            "on_RuleEngineEffectEliminatePayload": [
                207
            ],
            "on_RuleEngineEffectEmitSeedingPinPayload": [
                208
            ],
            "on_RuleEngineEffectEndStepPayload": [
                209
            ],
            "on_RuleEngineEffectSetMetadataPayload": [
                211
            ],
            "on_RuleEngineGenerationScriptRanPayload": [
                213
            ],
            "on_RuleEngineManualOverridePayload": [
                214
            ],
            "on_LeaderboardFeedReconcileFailedPayload": [
                216
            ],
            "on_TournamentOpenPoolMatchCorrectedPayload": [
                218
            ],
            "on_TournamentOpenPoolMatchCancelledPayload": [
                219
            ],
            "on_TournamentOpenPoolClosedPayload": [
                220
            ],
            "on_TournamentOpenPoolReopenedPayload": [
                221
            ],
            "on_TournamentsStepResetPayload": [
                249
            ],
            "on_TournamentsStepGeneratedPayload": [
                250
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
                443
            ],
            "on_PlayerActorContext": [
                444
            ],
            "on_SystemActorContext": [
                445
            ],
            "on_MarketplaceModuleActorContext": [
                446
            ],
            "on_ApiClientActorContext": [
                447
            ],
            "on_WebhookCallbackActorContext": [
                448
            ],
            "on_SimulationActorContext": [
                449
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
                262,
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
                265
            ],
            "createdBy": [
                76
            ],
            "myTeam": [
                261
            ],
            "teamScores": [
                264
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
        "AppFunctionJournalError": {
            "kind": [
                1
            ],
            "code": [
                1
            ],
            "message": [
                1
            ],
            "field": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "AppFunctionExecutedPayload": {
            "_typename": [
                1
            ],
            "installationId": [
                10
            ],
            "functionName": [
                1
            ],
            "executionId": [
                1
            ],
            "trigger": [
                1
            ],
            "callerKind": [
                1
            ],
            "callerId": [
                1
            ],
            "status": [
                1
            ],
            "durationMs": [
                80
            ],
            "instructions": [
                17
            ],
            "opCalls": [
                80
            ],
            "emails": [
                80
            ],
            "timers": [
                80
            ],
            "error": [
                103
            ],
            "__typename": [
                1
            ]
        },
        "AppFunctionLogPayload": {
            "_typename": [
                1
            ],
            "level": [
                1
            ],
            "message": [
                1
            ],
            "fields": [
                1
            ],
            "at": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "AppFunctionDeadLetterPayload": {
            "_typename": [
                1
            ],
            "installationId": [
                10
            ],
            "functionName": [
                1
            ],
            "trigger": [
                1
            ],
            "queue": [
                1
            ],
            "jobId": [
                1
            ],
            "attempts": [
                80
            ],
            "input": [
                1
            ],
            "error": [
                103
            ],
            "__typename": [
                1
            ]
        },
        "AppAuditPayload": {
            "_typename": [
                1
            ],
            "appSlug": [
                1
            ],
            "installationId": [
                10
            ],
            "auditType": [
                1
            ],
            "data": [
                1
            ],
            "executionId": [
                1
            ],
            "ip": [
                1
            ],
            "userAgent": [
                1
            ],
            "callerKind": [
                1
            ],
            "callerId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "AppConfigChange": {
            "key": [
                1
            ],
            "previous": [
                1
            ],
            "value": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "AppConfigUpdatedPayload": {
            "_typename": [
                1
            ],
            "installationId": [
                10
            ],
            "version": [
                80
            ],
            "changes": [
                108
            ],
            "__typename": [
                1
            ]
        },
        "AppInstallationPinnedPayload": {
            "_typename": [
                1
            ],
            "installationId": [
                10
            ],
            "fromVersion": [
                1
            ],
            "toVersion": [
                1
            ],
            "addedPermissions": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "AppQuotaWarningPayload": {
            "_typename": [
                1
            ],
            "limit": [
                1
            ],
            "usage": [
                17
            ],
            "max": [
                17
            ],
            "__typename": [
                1
            ]
        },
        "PermissionDefinitionDto": {
            "id": [
                1
            ],
            "owner": [
                113
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
                116
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
                114
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
                115
            ],
            "events": [
                117
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
                121
            ],
            "label": [
                1
            ],
            "activePages": [
                1
            ],
            "size": [
                119
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
                123
            ],
            "required": [
                4
            ],
            "options": [
                1
            ],
            "fields": [
                122
            ],
            "items": [
                122
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
                126
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
                122
            ],
            "__typename": [
                1
            ]
        },
        "AppFunctionTriggerModel": {
            "type": [
                132
            ],
            "readOnly": [
                4
            ],
            "cacheSeconds": [
                80
            ],
            "hookPoint": [
                133
            ],
            "onError": [
                134
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
                135
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
                136
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
                131
            ],
            "invoker": [
                140
            ],
            "runAs": [
                141
            ],
            "input": [
                122
            ],
            "output": [
                122
            ],
            "preload": [
                137
            ],
            "requires": [
                138
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
                120
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
                118
            ],
            "extensionCdnPath": [
                1
            ],
            "moduleCdnPath": [
                1
            ],
            "config": [
                124
            ],
            "customPermissions": [
                125
            ],
            "storage": [
                127
            ],
            "operations": [
                128
            ],
            "emailTemplates": [
                129
            ],
            "auditTypes": [
                130
            ],
            "functions": [
                139
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
                146
            ],
            "validation_errors": [
                144
            ],
            "validation_records": [
                143
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
                147
            ],
            "ssl": [
                145
            ],
            "status": [
                149
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
                150
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
                153
            ],
            "updatedAt": [
                12
            ],
            "createdAt": [
                12
            ],
            "config": [
                151
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
                154
            ],
            "url": [
                156
            ],
            "__typename": [
                1
            ]
        },
        "URL": {},
        "AppReleaseFile": {
            "kind": [
                158
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
                159
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
                162
            ],
            "manifest": [
                142
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
                160
            ],
            "reviewedAt": [
                12
            ],
            "createdAt": [
                12
            ],
            "files": [
                157
            ],
            "__typename": [
                1
            ]
        },
        "MarketplaceAppReleaseStatus": {},
        "AppReleaseWithUploadUrls": {
            "release": [
                161
            ],
            "extensionUploadUrl": [
                155
            ],
            "moduleUploadUrl": [
                155
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
                166
            ],
            "manifest": [
                142
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
                167
            ],
            "allowedOrganizationIds": [
                10
            ],
            "reviews": [
                171,
                {
                    "page": [
                        59
                    ]
                }
            ],
            "stats": [
                177
            ],
            "installation": [
                173
            ],
            "pricing": [
                178
            ],
            "__typename": [
                1
            ]
        },
        "MarketplaceAppStatus": {},
        "MarketplaceAppVisibility": {},
        "MarketplaceApps": {
            "edges": [
                169
            ],
            "nodes": [
                165
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
                165
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
        "MarketplaceAppReviewEdge": {
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
                174
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
                161
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
                165
            ],
            "__typename": [
                1
            ]
        },
        "MarketplaceInstallationStatus": {},
        "MarketplaceAppInstallations": {
            "edges": [
                176
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
        "MarketplaceAppInstallationEdge": {
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
                179
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
                181
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
                184
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
        "LeaderboardSeasonBucketScoreEdge": {
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
                187
            ],
            "nodes": [
                185
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
                185
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
                190
            ],
            "nodes": [
                188
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
                188
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
                192
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
                194
            ],
            "nodes": [
                191
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
                191
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
                200
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
                196
            ],
            "actionSource": [
                1
            ],
            "engineTiming": [
                195
            ],
            "printOutput": [
                1
            ],
            "printOutputTruncated": [
                4
            ],
            "error": [
                197
            ],
            "manualOverride": [
                198
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
                202
            ],
            "keyCount": [
                80
            ],
            "firstKeySamples": [
                1
            ],
            "engineTiming": [
                195
            ],
            "error": [
                197
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
                204
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
                205
            ],
            "afterStatus": [
                205
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
                204
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
                204
            ],
            "targetTeamId": [
                10
            ],
            "stepId": [
                10
            ],
            "beforeStatus": [
                205
            ],
            "afterStatus": [
                205
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
                204
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
                204
            ],
            "stepId": [
                10
            ],
            "beforeStepStatus": [
                210
            ],
            "afterStepStatus": [
                210
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
                204
            ],
            "targetType": [
                212
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
                195
            ],
            "printOutput": [
                1
            ],
            "printOutputTruncated": [
                4
            ],
            "error": [
                197
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
                215
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
                217
            ],
            "scores": [
                217
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
                217
            ],
            "scores": [
                217
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
                224
            ],
            "nodes": [
                222
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
                222
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
                228
            ],
            "requirements": [
                226
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
                142
            ],
            "status": [
                230
            ],
            "reviewResult": [
                160
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
                231
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
                232
            ],
            "creator": [
                76
            ],
            "manifest": [
                142
            ],
            "releases": [
                229
            ],
            "appWebhooks": [
                236
            ],
            "__typename": [
                1
            ]
        },
        "OrganizationApps": {
            "edges": [
                235
            ],
            "nodes": [
                233
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
                233
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
                233
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
                239
            ],
            "nodes": [
                237
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
                237
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
                241
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
                227
            ],
            "__typename": [
                1
            ]
        },
        "IdentityProviderConfigurations": {
            "on_OAuthClientConfiguration": [
                242
            ],
            "on_OpenidConfiguration": [
                245
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
                243
            ],
            "clientId": [
                1
            ],
            "clientSecret": [
                1
            ],
            "tokenEndpointAuthMethod": [
                244
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
                243
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
                210
            ],
            "newStatus": [
                210
            ],
            "reason": [
                1
            ],
            "cascade": [
                248
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
                253
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
                255
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
        "TournamentStepGroupRoundGameMatchEdge": {
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
                258
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
                261
            ],
            "__typename": [
                1
            ]
        },
        "TournamentTeamMemberStatus": {},
        "TeamMembers": {
            "edges": [
                260
            ],
            "nodes": [
                257
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
                257
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
                257
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
                263
            ],
            "nodes": [
                261
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
                261
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
                205
            ],
            "team": [
                261
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
                266
            ],
            "status": [
                210
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
                264
            ],
            "tournament": [
                58
            ],
            "manualPins": [
                251
            ],
            "openPool": [
                413
            ],
            "__typename": [
                1
            ]
        },
        "StepType": {},
        "Tournaments": {
            "edges": [
                268
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
                270
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
                272
            ],
            "nodes": [
                269
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
                269
            ],
            "__typename": [
                1
            ]
        },
        "RegistrationSeriesEntry": {
            "kind": [
                274
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
        "TournamentStepGroupRoundGame": {
            "id": [
                10
            ],
            "configuration": [
                27
            ],
            "status": [
                276
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
                252
            ],
            "gameLinks": [
                279
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
                275
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
                277
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
                280
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
                282
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
                284
            ],
            "nodes": [
                281
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
                281
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
                286
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
                288
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
                200
            ],
            "triggerScope": [
                1
            ],
            "condition": [
                1
            ],
            "actions": [
                287
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
        "AdvancementRulePurpose": {},
        "TiebreakerRuleModel": {
            "id": [
                10
            ],
            "order": [
                80
            ],
            "type": [
                292
            ],
            "formula": [
                1
            ],
            "sortOrder": [
                293
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
                295
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
                291
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
                296
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
                297
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
                298
            ],
            "__typename": [
                1
            ]
        },
        "CrossStepUsageModel": {
            "type": [
                301
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
                303
            ],
            "dataSource": [
                202
            ],
            "usage": [
                300
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
                294
            ],
            "advancementRules": [
                289
            ],
            "crossStepRules": [
                302
            ],
            "structureTemplate": [
                299
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
                306
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
                305
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
                309
            ],
            "parameters": [
                305
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
                312
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
                314
            ],
            "phase": [
                312
            ],
            "originHelper": [
                1
            ],
            "hint": [
                1
            ],
            "snippet": [
                310
            ],
            "stackFrames": [
                311
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
                316
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
                313
            ],
            "warnings": [
                315
            ],
            "__typename": [
                1
            ]
        },
        "SimulatedEffectModel": {
            "type": [
                319
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
                313
            ],
            "warnings": [
                315
            ],
            "effectsSummary": [
                318
            ],
            "partialEffectsSummary": [
                318
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
                322
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
                324
            ],
            "message": [
                1
            ],
            "hint": [
                1
            ],
            "invariantCode": [
                325
            ],
            "luaError": [
                321
            ],
            "offender": [
                326
            ],
            "__typename": [
                1
            ]
        },
        "ValidationErrorCode": {},
        "InvariantCode": {},
        "InvariantOffenderUnion": {
            "on_RuleOffenderModel": [
                327
            ],
            "on_CrossStepRuleOffenderModel": [
                329
            ],
            "on_GameOffenderModel": [
                330
            ],
            "on_RoundOffenderModel": [
                332
            ],
            "on_GroupOffenderModel": [
                333
            ],
            "on_TeamOffenderModel": [
                334
            ],
            "on_ScoreRowOffenderModel": [
                335
            ],
            "__typename": [
                1
            ]
        },
        "RuleOffenderModel": {
            "kind": [
                328
            ],
            "ruleId": [
                10
            ],
            "ruleName": [
                1
            ],
            "trigger": [
                200
            ],
            "__typename": [
                1
            ]
        },
        "OffenderKind": {},
        "CrossStepRuleOffenderModel": {
            "kind": [
                328
            ],
            "crossStepRuleId": [
                10
            ],
            "dataSource": [
                202
            ],
            "usage": [
                301
            ],
            "__typename": [
                1
            ]
        },
        "GameOffenderModel": {
            "kind": [
                328
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
                331
            ],
            "__typename": [
                1
            ]
        },
        "GameStatus": {},
        "RoundOffenderModel": {
            "kind": [
                328
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
                328
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
                328
            ],
            "teamId": [
                10
            ],
            "teamName": [
                1
            ],
            "currentStatus": [
                205
            ],
            "__typename": [
                1
            ]
        },
        "ScoreRowOffenderModel": {
            "kind": [
                328
            ],
            "scope": [
                336
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
                205
            ],
            "__typename": [
                1
            ]
        },
        "ScoreRowScope": {},
        "InvariantResultModel": {
            "code": [
                325
            ],
            "severity": [
                338
            ],
            "passed": [
                4
            ],
            "message": [
                1
            ],
            "offenders": [
                326
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
                200
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
                337
            ],
            "errors": [
                323
            ],
            "ruleFiredSummary": [
                339
            ],
            "__typename": [
                1
            ]
        },
        "ValidationProgressModel": {
            "stage": [
                342
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
                344
            ],
            "stage": [
                342
            ],
            "progress": [
                341
            ],
            "result": [
                340
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
                346
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
                347
            ],
            "statusBefore": [
                348
            ],
            "statusAfter": [
                348
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
                350
            ],
            "nodes": [
                343
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
                343
            ],
            "__typename": [
                1
            ]
        },
        "ValidationEvents": {
            "edges": [
                352
            ],
            "nodes": [
                345
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
                345
            ],
            "__typename": [
                1
            ]
        },
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
                355
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
                357
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
                359
            ],
            "nodes": [
                356
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
                356
            ],
            "__typename": [
                1
            ]
        },
        "UserGroupMembers": {
            "edges": [
                361
            ],
            "nodes": [
                354
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
                354
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
                362
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
                363
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
                364
            ],
            "createdSeats": [
                364
            ],
            "deletedSeats": [
                364
            ],
            "__typename": [
                1
            ]
        },
        "EventVenueSeats": {
            "edges": [
                367
            ],
            "nodes": [
                364
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
                364
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
                368
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
                368
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
                372
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
                369
            ],
            "groupStatus": [
                357
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
                372
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
                357
            ],
            "replacesReservationId": [
                10
            ],
            "groupName": [
                1
            ],
            "tickets": [
                370
            ],
            "__typename": [
                1
            ]
        },
        "EventReservations": {
            "edges": [
                375
            ],
            "nodes": [
                376
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
                376
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
                372
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
                357
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
                363
            ],
            "seatTypeId": [
                10
            ],
            "status": [
                379
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
                381
            ],
            "nodes": [
                378
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
                378
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
                384
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
                353
            ],
            "maxTicketsPerReservation": [
                17
            ],
            "reservationStatusAfterPayment": [
                386
            ],
            "reservationStatusAfterRegistration": [
                387
            ],
            "sessionDuration": [
                17
            ],
            "allowForNewSessionAfterTimeout": [
                4
            ],
            "seatAssignmentMode": [
                388
            ],
            "allowForMoreTicketsThanGroupMembers": [
                4
            ],
            "waitlist": [
                382
            ],
            "selfService": [
                383
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
                385
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
                405
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
                385
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
                405
            ],
            "on_Event": [
                389
            ],
            "on_EventWithUserReservation": [
                391
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
                385
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
                405
            ],
            "myReservation": [
                373
            ],
            "__typename": [
                1
            ]
        },
        "Events": {
            "edges": [
                393
            ],
            "nodes": [
                389
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
                389
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
                396
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
                394
            ],
            "startsAt": [
                12
            ],
            "endsAt": [
                12
            ],
            "state": [
                397
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
                398
            ],
            "__typename": [
                1
            ]
        },
        "ShopCurrencies": {},
        "EventSlotState": {},
        "EventSlotEffectiveState": {},
        "EventCalendarGenerateResult": {
            "events": [
                389
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
                400
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
                403
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
        "EventVenueSeatTypeEdge": {
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
                404
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
                407
            ],
            "nodes": [
                405
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
                405
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
                409
            ],
            "endedReason": [
                410
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
                412
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
        "EventWaitlistEntryEdge": {
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
                261
            ],
            "status": [
                282
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
                253
            ],
            "teams": [
                414
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
                417
            ],
            "nodes": [
                415
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
                415
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
                261
            ],
            "groupId": [
                10
            ],
            "rank": [
                80
            ],
            "status": [
                205
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
        "CurrencyEdge": {
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
        "PlayerCurrencyEdge": {
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
                427
            ],
            "nodes": [
                425
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
                425
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
                430
            ],
            "nodes": [
                428
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
                428
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
                433
            ],
            "nodes": [
                431
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
                431
            ],
            "__typename": [
                1
            ]
        },
        "PlayerItemsTransferResult": {
            "from": [
                428
            ],
            "to": [
                428
            ],
            "__typename": [
                1
            ]
        },
        "JournalActor": {
            "type": [
                436
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
                439
            ],
            "type": [
                1
            ],
            "severity": [
                440
            ],
            "actor": [
                435
            ],
            "primaryResource": [
                437
            ],
            "secondaryResources": [
                437
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
                441,
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
                442
            ],
            "nodes": [
                438
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
                438
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
                450
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
                115
            ],
            "events": [
                117
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
                458
            ],
            "visibility": [
                459
            ],
            "objectType": [
                460
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
                457
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
                460
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
                464
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
                462
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
                463
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
                465
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
                148
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
                470
            ],
            "organizationId": [
                10
            ],
            "appId": [
                1
            ],
            "customDomains": [
                467
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
                156
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
                474
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
                476
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
                481
            ],
            "nodes": [
                479
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
                479
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
                484
            ],
            "nodes": [
                482
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
                482
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
                488
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
                485
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
                396
            ],
            "items": [
                487
            ],
            "currencyPrices": [
                486
            ],
            "__typename": [
                1
            ]
        },
        "ShopProducts": {
            "edges": [
                491
            ],
            "nodes": [
                489
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
                489
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
                494
            ],
            "nodes": [
                492
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
                492
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
                488
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
                497
            ],
            "nodes": [
                495
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
                495
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
                501
            ],
            "configuration": [
                498
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
                503
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
                502
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
                504
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
                506
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
                508
            ],
            "mappingConfiguration": [
                507
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
                513
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
                514
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
                515
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
                517
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
                518
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
                520
            ],
            "stringCondition": [
                522
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
                523
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
                522
            ],
            "numericCondition": [
                521
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
                526
            ],
            "memberConditions": [
                525
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
                527
            ],
            "customFields": [
                511
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
                524
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
                530
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
                533
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
                384
            ],
            "__typename": [
                1
            ]
        },
        "EventConfigurationInput": {
            "customFields": [
                511
            ],
            "groupConfiguration": [
                532
            ],
            "maxTicketsPerReservation": [
                17
            ],
            "reservationStatusAfterPayment": [
                386
            ],
            "reservationStatusAfterRegistration": [
                387
            ],
            "sessionDuration": [
                17
            ],
            "allowForNewSessionAfterTimeout": [
                4
            ],
            "seatAssignmentMode": [
                388
            ],
            "allowForMoreTicketsThanGroupMembers": [
                4
            ],
            "waitlist": [
                535
            ],
            "selfService": [
                536
            ],
            "__typename": [
                1
            ]
        },
        "EventTicketConfigurationConfigurationInput": {
            "customFields": [
                511
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
                488
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
                180,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "leaderboardCurrentPlayerRanking": [
                182,
                {
                    "input": [
                        547,
                        "LeaderboardGetPlayerRankingInput!"
                    ]
                }
            ],
            "leaderboards": [
                186,
                {
                    "page": [
                        59,
                        "PageInfo!"
                    ]
                }
            ],
            "leaderboard": [
                185,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "currentLeaderboardSeason": [
                188,
                {
                    "leaderboardId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "leaderboardSeasons": [
                189,
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
                188,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "leaderboardSeasonBuckets": [
                193,
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
                191,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "leaderboardSeasonBucketScores": [
                183,
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
                223,
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
                        503,
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
                548
            ],
            "identityProvider": [
                240,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "organizationApp": [
                233,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "organizationApps": [
                234,
                {
                    "page": [
                        59,
                        "PageInfo!"
                    ]
                }
            ],
            "appReleasesByApp": [
                229,
                {
                    "appId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "appRelease": [
                229,
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
                246
            ],
            "webhook": [
                246,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "organizationAttachedApps": [
                238,
                {
                    "page": [
                        59,
                        "PageInfo!"
                    ]
                }
            ],
            "availableRootIdentityProvider": [
                227,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "getAvailableRootIdentityProviders": [
                227
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
                        550
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
                247,
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
                254,
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
                267,
                {
                    "query": [
                        551,
                        "TournamentsQuery!"
                    ],
                    "page": [
                        59,
                        "PageInfo!"
                    ]
                }
            ],
            "tournamentSteps": [
                265,
                {
                    "tournamentId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "tournamentStep": [
                265,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "tournamentStepGeneratedShape": [
                278,
                {
                    "stepId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "match": [
                252,
                {
                    "matchId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "tournamentTeam": [
                261,
                {
                    "teamId": [
                        10,
                        "ID!"
                    ],
                    "memberStatus": [
                        258
                    ]
                }
            ],
            "tournamentTeams": [
                262,
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
                        258
                    ],
                    "status": [
                        60
                    ],
                    "playerUsernameQuery": [
                        1
                    ],
                    "propertiesFilter": [
                        512,
                        "[PropertyValueInput!]"
                    ],
                    "playerPropertiesFilter": [
                        512,
                        "[PropertyValueInput!]"
                    ],
                    "playerIdentityProviderPropertiesFilter": [
                        556,
                        "[IdentityProviderPropertyInput!]"
                    ],
                    "playerProfileIds": [
                        10,
                        "[ID!]"
                    ]
                }
            ],
            "tournamentPlayers": [
                259,
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
                        512,
                        "[PropertyValueInput!]"
                    ],
                    "orderByProperty": [
                        557
                    ]
                }
            ],
            "tournamentTeamInvites": [
                259,
                {
                    "page": [
                        59,
                        "PageInfo!"
                    ],
                    "tournamentId": [
                        10
                    ],
                    "status": [
                        258
                    ]
                }
            ],
            "tournamentStepGroupRoundGameMatchScoresGetForStep": [
                283,
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
                285,
                {
                    "tournamentId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "openPoolMatches": [
                416,
                {
                    "stepId": [
                        10,
                        "ID!"
                    ],
                    "filter": [
                        558
                    ],
                    "page": [
                        59
                    ]
                }
            ],
            "openPoolStandings": [
                418,
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
                304,
                {
                    "tournamentStepId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "presetScripts": [
                307
            ],
            "presetScript": [
                307,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "builtinPresets": [
                308,
                {
                    "category": [
                        309
                    ]
                }
            ],
            "builtinPreset": [
                308,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "validateScript": [
                317,
                {
                    "input": [
                        559,
                        "ValidateScriptInput!"
                    ]
                }
            ],
            "simulateScript": [
                320,
                {
                    "input": [
                        560,
                        "SimulateScriptInput!"
                    ]
                }
            ],
            "stepRuleSetValidationJob": [
                343,
                {
                    "jobId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "stepRuleSetValidationJobs": [
                349,
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
                351,
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
                        346,
                        "[ValidationEventKind!]"
                    ]
                }
            ],
            "registrationSeries": [
                269,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "registrationSeriesList": [
                271,
                {
                    "page": [
                        59,
                        "PageInfo!"
                    ]
                }
            ],
            "myActiveRegistrations": [
                273,
                {
                    "seriesId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "registrationSeriesPlayerEntries": [
                273,
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
            "event": [
                391,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "events": [
                392,
                {
                    "page": [
                        59,
                        "PageInfo!"
                    ],
                    "query": [
                        566
                    ],
                    "eventIds": [
                        10,
                        "[ID!]"
                    ]
                }
            ],
            "eventTicketConfiguration": [
                395,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "eventTicketConfigurations": [
                395,
                {
                    "eventId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "eventReservationsMyReservations": [
                374,
                {
                    "page": [
                        59,
                        "PageInfo!"
                    ],
                    "status": [
                        372
                    ],
                    "groupStatus": [
                        357
                    ],
                    "eventIds": [
                        10,
                        "[ID!]"
                    ]
                }
            ],
            "eventReservation": [
                371,
                {
                    "reservationId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "eventSeats": [
                380,
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
                374,
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
                        570,
                        "EventReservationsQueryInput!"
                    ]
                }
            ],
            "eventVenues": [
                406,
                {
                    "page": [
                        59,
                        "PageInfo!"
                    ]
                }
            ],
            "eventVenue": [
                405,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "eventVenueSeats": [
                366,
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
                402,
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
                395,
                {
                    "filter": [
                        572,
                        "EventSlotsFilter!"
                    ]
                }
            ],
            "myWaitlistEntries": [
                408,
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
                411,
                {
                    "eventId": [
                        10,
                        "ID!"
                    ],
                    "ticketConfigurationId": [
                        10
                    ],
                    "statuses": [
                        409,
                        "[EventWaitlistEntryStatus!]"
                    ],
                    "page": [
                        59,
                        "PageInfo!"
                    ]
                }
            ],
            "organizationPaymentCollectionConfiguration": [
                256
            ],
            "platformFiles": [
                152,
                {
                    "type": [
                        153
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
                152,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "platforms": [
                471
            ],
            "platform": [
                471,
                {
                    "platformId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "platformFindFromDomain": [
                471,
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
                        156,
                        "URL!"
                    ]
                }
            ],
            "platformCustomDomains": [
                467,
                {
                    "platformId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "platformTemplatesPublic": [
                472
            ],
            "platformTemplates": [
                472
            ],
            "platformTemplate": [
                472,
                {
                    "platformTemplateId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "subscriptionItems": [
                504
            ],
            "organizationCurrentSubscriptionItems": [
                505
            ],
            "journalEntries": [
                441,
                {
                    "page": [
                        59
                    ],
                    "filters": [
                        573
                    ]
                }
            ],
            "journalEntry": [
                438,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "organizationSkillRatings": [
                500
            ],
            "organizationSkillRating": [
                500,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "userGroupMembers": [
                360,
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
                        355
                    ]
                }
            ],
            "userGroups": [
                358,
                {
                    "query": [
                        574,
                        "UserGroupsQueryInput!"
                    ],
                    "page": [
                        59,
                        "PageInfo!"
                    ]
                }
            ],
            "userGroupMyMemberships": [
                360,
                {
                    "page": [
                        59,
                        "PageInfo!"
                    ],
                    "status": [
                        355
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
                473
            ],
            "shops": [
                493,
                {
                    "page": [
                        59
                    ],
                    "filter": [
                        575
                    ]
                }
            ],
            "shopCategories": [
                483,
                {
                    "page": [
                        59
                    ],
                    "filter": [
                        576
                    ]
                }
            ],
            "playerShopProductPurshases": [
                480,
                {
                    "page": [
                        59
                    ],
                    "filter": [
                        577
                    ]
                }
            ],
            "shopProducts": [
                490,
                {
                    "shopId": [
                        10,
                        "ID!"
                    ],
                    "page": [
                        59
                    ],
                    "filter": [
                        578
                    ]
                }
            ],
            "shopProductItems": [
                496,
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
                426,
                {
                    "page": [
                        59
                    ],
                    "filter": [
                        579
                    ]
                }
            ],
            "playerItems": [
                429,
                {
                    "page": [
                        59
                    ],
                    "filter": [
                        580
                    ]
                }
            ],
            "itemCategories": [
                432,
                {
                    "page": [
                        59
                    ],
                    "filter": [
                        581
                    ]
                }
            ],
            "currencies": [
                420,
                {
                    "page": [
                        59
                    ],
                    "filter": [
                        582
                    ]
                }
            ],
            "playerCurrencies": [
                423,
                {
                    "page": [
                        59
                    ],
                    "filter": [
                        583
                    ]
                }
            ],
            "marketplaceApps": [
                168,
                {
                    "page": [
                        59
                    ],
                    "filter": [
                        584
                    ]
                }
            ],
            "marketplaceApp": [
                165,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "myMarketplaceInstallations": [
                175,
                {
                    "page": [
                        59
                    ]
                }
            ],
            "appReleases": [
                161,
                {
                    "marketplaceAppId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "moduleTokensForPlatform": [
                452,
                {
                    "platformId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "extensionToken": [
                453,
                {
                    "installationId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "platformModuleConfigs": [
                451,
                {
                    "platformId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "entityMetafields": [
                454,
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
                        585
                    ]
                }
            ],
            "allowedObjectTypes": [
                460
            ],
            "objectMetadata": [
                457,
                {
                    "objectType": [
                        460,
                        "ObjectType!"
                    ],
                    "objectId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "objectMetadataBatch": [
                461,
                {
                    "objectType": [
                        460,
                        "ObjectType!"
                    ],
                    "objectIds": [
                        10,
                        "[ID!]!"
                    ]
                }
            ],
            "customFieldDefinitions": [
                463,
                {
                    "objectType": [
                        460,
                        "ObjectType!"
                    ]
                }
            ],
            "customFieldValues": [
                465,
                {
                    "objectType": [
                        460,
                        "ObjectType!"
                    ],
                    "objectId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "customFieldValuesBatch": [
                466,
                {
                    "objectType": [
                        460,
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
                        586,
                        "AppFunctionCallInput!"
                    ]
                }
            ],
            "permissionDefinitions": [
                112
            ],
            "hasPermissions": [
                4,
                {
                    "checks": [
                        587,
                        "[PermissionCheckInput!]!"
                    ]
                }
            ],
            "organizationModeration": [
                455
            ],
            "moderationCheck": [
                456,
                {
                    "inputs": [
                        588,
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
                240
            ],
            "on_PublicOrganizationIdentityProviderV2": [
                549
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
                552
            ],
            "orderDirection": [
                553
            ],
            "status": [
                554
            ],
            "showNotVisible": [
                4
            ],
            "filterByPlayers": [
                555
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
                258
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
                553
            ],
            "__typename": [
                1
            ]
        },
        "OpenPoolMatchesFilter": {
            "statuses": [
                253
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
                322
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
                322
            ],
            "parameters": [
                1
            ],
            "overrides": [
                561
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
                562
            ],
            "presetParameters": [
                564
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
                563
            ],
            "customFields": [
                563
            ],
            "rank": [
                80
            ],
            "status": [
                205
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
                565
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
        "EventsQuery": {
            "orderBy": [
                567
            ],
            "orderDirection": [
                553
            ],
            "status": [
                568
            ],
            "showNotVisible": [
                4
            ],
            "filterByPlayers": [
                569
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
                372
            ],
            "memberStatus": [
                355
            ],
            "__typename": [
                1
            ]
        },
        "EventReservationsQueryInput": {
            "filterByRegistrationStatus": [
                372
            ],
            "retrieveOnlyGroupMembersWithStatus": [
                355
            ],
            "filterByPlayerUsernameQuery": [
                1
            ],
            "filterByReservationProperties": [
                512
            ],
            "filterByPlayerProperties": [
                512
            ],
            "filterByPlayerIdentityProviderProperties": [
                556
            ],
            "filterByPlayers": [
                571
            ],
            "filterByGroupStatus": [
                357
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
                355
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
        "JournalFiltersInput": {
            "categories": [
                439
            ],
            "types": [
                1
            ],
            "typePrefix": [
                1
            ],
            "actorType": [
                436
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
                440
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
                166
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
                180,
                {
                    "id": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        590,
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
                182,
                {
                    "input": [
                        591,
                        "LeaderboardRegisterPlayerScoreInput!"
                    ]
                }
            ],
            "createLeaderboard": [
                185,
                {
                    "input": [
                        593,
                        "CreateLeaderboardInput!"
                    ]
                }
            ],
            "updateLeaderboard": [
                185,
                {
                    "id": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        594,
                        "UpdateLeaderboardInput!"
                    ]
                }
            ],
            "deleteLeaderboard": [
                595,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "createLeaderboardSeason": [
                188,
                {
                    "leaderboardId": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        596,
                        "CreateLeaderboardSeasonInput!"
                    ]
                }
            ],
            "updateLeaderboardSeason": [
                188,
                {
                    "id": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        597,
                        "UpdateLeaderboardSeasonInput!"
                    ]
                }
            ],
            "deleteLeaderboardSeason": [
                595,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "createLeaderboardSeasonBucket": [
                191,
                {
                    "seasonId": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        598,
                        "CreateLeaderboardSeasonBucketInput!"
                    ]
                }
            ],
            "updateLeaderboardSeasonBucket": [
                191,
                {
                    "id": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        599,
                        "UpdateLeaderboardSeasonBucketInput!"
                    ]
                }
            ],
            "deleteLeaderboardSeasonBucket": [
                595,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "createLeaderboardFeed": [
                222,
                {
                    "input": [
                        600,
                        "CreateLeaderboardFeedInput!"
                    ]
                }
            ],
            "updateLeaderboardFeed": [
                222,
                {
                    "id": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        601,
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
                225,
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
                        602,
                        "UpdateOrganizationInput!"
                    ]
                }
            ],
            "createOrganization": [
                70,
                {
                    "organization": [
                        604,
                        "CreateOrganizationInput!"
                    ]
                }
            ],
            "createOrganizationGroup": [
                9,
                {
                    "input": [
                        605,
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
                        605,
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
                        606,
                        "SetOrganizationMembershipInput!"
                    ]
                }
            ],
            "deleteOrganizationMembership": [
                4,
                {
                    "input": [
                        607,
                        "DeleteOrganizationMembershipInput!"
                    ]
                }
            ],
            "createIdentityProvider": [
                240,
                {
                    "input": [
                        608,
                        "CreateOrganizationIdentityProvider!"
                    ]
                }
            ],
            "updateIdentityProvider": [
                240,
                {
                    "providerId": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        611,
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
                233,
                {
                    "input": [
                        612,
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
                233,
                {
                    "id": [
                        1,
                        "String!"
                    ],
                    "input": [
                        613,
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
                233,
                {
                    "id": [
                        1,
                        "String!"
                    ],
                    "manifest": [
                        614,
                        "AppManifestInput!"
                    ]
                }
            ],
            "regenerateAppWebhookSecret": [
                236,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "createAppRelease": [
                229,
                {
                    "appId": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        634,
                        "CreateAppReleaseInput!"
                    ]
                }
            ],
            "createWebhook": [
                246,
                {
                    "input": [
                        635,
                        "CreateWebhookInput!"
                    ]
                }
            ],
            "updateWebhook": [
                246,
                {
                    "id": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        636,
                        "UpdateWebhookInput!"
                    ]
                }
            ],
            "deleteWebhook": [
                246,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "regenerateWebhookSecret": [
                246,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "setOrganizationAttachedApp": [
                237,
                {
                    "input": [
                        637,
                        "SetOrganizationAttachedAppInput!"
                    ]
                }
            ],
            "deleteOrganizationAttachedApp": [
                4,
                {
                    "input": [
                        638,
                        "DeleteOrganizationAttachedAppInput!"
                    ]
                }
            ],
            "emailSend": [
                4,
                {
                    "fromTemplate": [
                        639
                    ],
                    "fromCustom": [
                        640
                    ]
                }
            ],
            "emailConfigurationUpdate": [
                51,
                {
                    "input": [
                        529,
                        "EmailConfigurationInput!"
                    ]
                }
            ],
            "emailTemplateCreate": [
                87,
                {
                    "input": [
                        641,
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
                        642,
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
                        643,
                        "CreatePlayerInput!"
                    ]
                }
            ],
            "updatePlayer": [
                73,
                {
                    "input": [
                        645,
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
                        646,
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
                        647,
                        "CreateTournamentInput!"
                    ]
                }
            ],
            "updateTournament": [
                58,
                {
                    "input": [
                        650,
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
                265,
                {
                    "tournamentId": [
                        10,
                        "ID!"
                    ],
                    "configuration": [
                        519
                    ],
                    "step": [
                        651,
                        "CreateTournamentStepInput!"
                    ]
                }
            ],
            "updateTournamentStep": [
                265,
                {
                    "stepId": [
                        10,
                        "ID!"
                    ],
                    "configuration": [
                        519
                    ],
                    "step": [
                        651,
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
                265,
                {
                    "input": [
                        652
                    ],
                    "legacyInput": [
                        654
                    ]
                }
            ],
            "updateSeedingOrder": [
                265,
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
                265,
                {
                    "stepId": [
                        10,
                        "ID!"
                    ],
                    "pins": [
                        653,
                        "[SeedingPinInput!]!"
                    ]
                }
            ],
            "withdrawTeamFromStep": [
                265,
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
                265,
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
                252,
                {
                    "matchId": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        660,
                        "[UpdateMatchScoreInput!]!"
                    ]
                }
            ],
            "registerCustomTournamentTeams": [
                261,
                {
                    "tournamentId": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        662,
                        "RegisterCustomTeamsInput!"
                    ]
                }
            ],
            "registerTournamentTeam": [
                261,
                {
                    "tournamentId": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        665,
                        "RegisterTournamentTeamInput!"
                    ]
                }
            ],
            "updateTournamentTeam": [
                261,
                {
                    "input": [
                        666,
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
                261,
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
                261,
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
                261,
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
                285,
                {
                    "input": [
                        667,
                        "TournamentAdminUpsertInput!"
                    ]
                }
            ],
            "tournamentAdminDelete": [
                4,
                {
                    "input": [
                        668,
                        "TournamentAdminDeleteInput!"
                    ]
                }
            ],
            "openPoolCreateMatch": [
                415,
                {
                    "input": [
                        669,
                        "OpenPoolCreateMatchInput!"
                    ]
                }
            ],
            "openPoolAddTeams": [
                418,
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
                415,
                {
                    "matchId": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        660,
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
                265,
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
                265,
                {
                    "stepId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "tournamentTeamMemberAdd": [
                261,
                {
                    "input": [
                        670,
                        "TournamentTeamMemberAddInput!"
                    ]
                }
            ],
            "tournamentTeamMemberRemove": [
                261,
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
                304,
                {
                    "tournamentStepId": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        671,
                        "CreateStepRuleSetInput!"
                    ]
                }
            ],
            "applyPresetScript": [
                304,
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
                304,
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
                307,
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
                307,
                {
                    "input": [
                        682,
                        "CreatePresetScriptInput!"
                    ]
                }
            ],
            "updatePresetScript": [
                307,
                {
                    "id": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        684,
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
                265,
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
                        205,
                        "TeamScopeStatus!"
                    ]
                }
            ],
            "validateStepRuleSet": [
                343,
                {
                    "stepRuleSetId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "cancelStepRuleSetValidation": [
                343,
                {
                    "jobId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "registrationSeriesCreate": [
                269,
                {
                    "input": [
                        685,
                        "RegistrationSeriesCreateInput!"
                    ]
                }
            ],
            "registrationSeriesUpdate": [
                269,
                {
                    "id": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        686,
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
            "eventCreate": [
                389,
                {
                    "input": [
                        687,
                        "EventCreateInput!"
                    ]
                }
            ],
            "eventUpdate": [
                389,
                {
                    "input": [
                        688,
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
                395,
                {
                    "input": [
                        689,
                        "EventTicketConfigurationCreateInput!"
                    ]
                }
            ],
            "eventTicketConfigurationUpdate": [
                395,
                {
                    "ticketConfigurationId": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        690,
                        "EventTicketConfigurationUpdateInput!"
                    ]
                }
            ],
            "eventTicketConfigurationDelete": [
                395,
                {
                    "ticketConfigurationId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "eventReservationUpdateStatus": [
                371,
                {
                    "reservationId": [
                        10,
                        "ID!"
                    ],
                    "status": [
                        372,
                        "EventReservationStatus!"
                    ],
                    "confirmPaymentRefundOrCancel": [
                        4
                    ],
                    "refundPayment": [
                        4
                    ],
                    "ticketsToReserve": [
                        691
                    ]
                }
            ],
            "eventReservationConfirmPresence": [
                371,
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
                377,
                {
                    "eventId": [
                        10,
                        "ID!"
                    ],
                    "options": [
                        693,
                        "EventReservationValidateAndPayInput!"
                    ],
                    "ticketConfigurations": [
                        695,
                        "[EventReservationTicketConfigurationInput!]"
                    ]
                }
            ],
            "eventReservationCreate": [
                371,
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
                371,
                {
                    "reservationId": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        696,
                        "EventReservationUpdateTicketsInput!"
                    ]
                }
            ],
            "eventReservationStartRegistrationSession": [
                371,
                {
                    "eventId": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        691,
                        "EventReservationRegisterTicketsInput!"
                    ],
                    "replaceReservationId": [
                        10
                    ]
                }
            ],
            "eventReservationCancel": [
                371,
                {
                    "reservationId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "eventVenueRequestImageUpdate": [
                155,
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
                405,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "eventVenueCreate": [
                405,
                {
                    "input": [
                        697,
                        "EventVenueCreateInput!"
                    ]
                }
            ],
            "eventVenueUpdate": [
                405,
                {
                    "id": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        698,
                        "EventVenueUpdateInput!"
                    ]
                }
            ],
            "eventVenueDelete": [
                405,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "eventVenueSeatsUpdate": [
                365,
                {
                    "venueId": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        699,
                        "EventVenueSeatsUpdateInput!"
                    ]
                }
            ],
            "eventVenueSeatTypeCreate": [
                401,
                {
                    "venueId": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        702,
                        "EventVenueSeatTypeCreateInput!"
                    ]
                }
            ],
            "eventVenueSeatTypeUpdate": [
                401,
                {
                    "id": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        703,
                        "EventVenueSeatTypeUpdateInput!"
                    ]
                }
            ],
            "eventVenueSeatTypeDelete": [
                401,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "eventCalendarGenerate": [
                399,
                {
                    "input": [
                        704,
                        "EventCalendarGenerateInput!"
                    ]
                }
            ],
            "eventWaitlistJoin": [
                408,
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
                408,
                {
                    "entryId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "eventWaitlistRemoveEntry": [
                408,
                {
                    "entryId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "eventReservationChangeTickets": [
                371,
                {
                    "reservationId": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        708,
                        "EventReservationChangeTicketsInput!"
                    ]
                }
            ],
            "eventReservationReleaseTickets": [
                371,
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
            "stripeCreatePortalSession": [
                1
            ],
            "platformFileCreate": [
                152,
                {
                    "input": [
                        709,
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
                152,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "platformFileGenerateUploadUrl": [
                155,
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
                152,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "platformFileUpdate": [
                152,
                {
                    "id": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        710,
                        "PlatformFileUpdateInput!"
                    ]
                }
            ],
            "platformFileDelete": [
                595,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "platformCreate": [
                471,
                {
                    "input": [
                        711,
                        "CreatePlatformInput!"
                    ]
                }
            ],
            "platformUpdate": [
                471,
                {
                    "id": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        712,
                        "UpdatePlatformInput!"
                    ]
                }
            ],
            "platformDelete": [
                595,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "platformThemeUpdate": [
                471,
                {
                    "platformId": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        713,
                        "PlatformThemeInput!"
                    ]
                }
            ],
            "platformRegisterCustomDomain": [
                148,
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
                148,
                {
                    "hostname": [
                        1,
                        "String!"
                    ]
                }
            ],
            "platformRemoveCustomDomain": [
                595,
                {
                    "hostname": [
                        1,
                        "String!"
                    ]
                }
            ],
            "platformTemplateCreate": [
                472,
                {
                    "input": [
                        716,
                        "CreatePlatformTemplateInput!"
                    ]
                }
            ],
            "platformTemplateUpdate": [
                472,
                {
                    "id": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        717,
                        "UpdatePlatformTemplateInput!"
                    ]
                }
            ],
            "platformTemplateApply": [
                471,
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
                595,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "organizationSubscriptionItemsUpdate": [
                595,
                {
                    "items": [
                        718,
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
                499,
                {
                    "organizationSkillRatingId": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        719,
                        "OrganizationSkillRatingsRegisterMatchInput!"
                    ]
                }
            ],
            "organizationSkillRatingCreate": [
                500,
                {
                    "input": [
                        721,
                        "OrganizationSkillRatingCreateInput!"
                    ]
                }
            ],
            "organizationSkillRatingUpdate": [
                500,
                {
                    "id": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        722,
                        "OrganizationSkillRatingUpdateInput!"
                    ]
                }
            ],
            "organizationSkillRatingDelete": [
                595,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "userGroupInvite": [
                354,
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
                356,
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
                354,
                {
                    "groupId": [
                        10,
                        "ID!"
                    ],
                    "status": [
                        355,
                        "UserGroupMemberStatus!"
                    ]
                }
            ],
            "userGroupDeleteInvite": [
                354,
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
                492,
                {
                    "input": [
                        723,
                        "ShopCreateInput!"
                    ]
                }
            ],
            "shopUpdate": [
                492,
                {
                    "id": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        724,
                        "ShopUpdateInput!"
                    ]
                }
            ],
            "shopDelete": [
                492,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "shopCategoryCreate": [
                482,
                {
                    "input": [
                        725,
                        "ShopCategoryCreateInput!"
                    ]
                }
            ],
            "shopCategoryUpdate": [
                482,
                {
                    "id": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        726,
                        "ShopCategoryUpdateInput!"
                    ]
                }
            ],
            "shopCategoryDelete": [
                482,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "playerShopProductPurshase": [
                478,
                {
                    "shopId": [
                        10,
                        "ID!"
                    ],
                    "paymentConfig": [
                        727
                    ],
                    "input": [
                        728,
                        "PlayerShopProductPurshaseInput!"
                    ]
                }
            ],
            "shopProductCreate": [
                489,
                {
                    "shopId": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        730,
                        "ShopProductCreateInput!"
                    ]
                }
            ],
            "shopProductUpdate": [
                489,
                {
                    "productId": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        731,
                        "ShopProductUpdateInput!"
                    ]
                }
            ],
            "shopProductDelete": [
                489,
                {
                    "productId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "itemCreate": [
                425,
                {
                    "input": [
                        732,
                        "ItemCreateInput!"
                    ]
                }
            ],
            "itemUpdate": [
                425,
                {
                    "id": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        733,
                        "ItemUpdateInput!"
                    ]
                }
            ],
            "itemDelete": [
                425,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "playerItemsUpdate": [
                428,
                {
                    "playerId": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        734,
                        "PlayerItemsUpdateInput!"
                    ]
                }
            ],
            "itemCategoryCreate": [
                431,
                {
                    "input": [
                        736,
                        "ItemCategoryCreateInput!"
                    ]
                }
            ],
            "itemCategoryUpdate": [
                431,
                {
                    "id": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        737,
                        "ItemCategoryUpdateInput!"
                    ]
                }
            ],
            "itemCategoryDelete": [
                431,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "playerItemsTransfer": [
                434,
                {
                    "input": [
                        738,
                        "PlayerItemsTransferInput!"
                    ]
                }
            ],
            "currencyCreate": [
                419,
                {
                    "input": [
                        740,
                        "CurrencyCreateInput!"
                    ]
                }
            ],
            "currencyUpdate": [
                419,
                {
                    "id": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        741,
                        "CurrencyUpdateInput!"
                    ]
                }
            ],
            "currencyDelete": [
                419,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "playerCurrencyUpdate": [
                422,
                {
                    "playerId": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        742,
                        "[PlayerCurrencyUpdateInput!]!"
                    ]
                }
            ],
            "publishMarketplaceApp": [
                165,
                {
                    "input": [
                        744,
                        "PublishMarketplaceAppInput!"
                    ]
                }
            ],
            "updateMarketplaceApp": [
                165,
                {
                    "id": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        745,
                        "UpdateMarketplaceAppInput!"
                    ]
                }
            ],
            "installMarketplaceApp": [
                173,
                {
                    "input": [
                        746,
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
                170,
                {
                    "input": [
                        747,
                        "SubmitMarketplaceAppReviewInput!"
                    ]
                }
            ],
            "setMarketplaceAppPricing": [
                178,
                {
                    "input": [
                        748,
                        "SetMarketplaceAppPricingInput!"
                    ]
                }
            ],
            "createMarketplaceCheckout": [
                1,
                {
                    "input": [
                        749,
                        "CreateMarketplaceCheckoutInput!"
                    ]
                }
            ],
            "appCreateRelease": [
                163,
                {
                    "marketplaceAppId": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        750,
                        "AppCreateReleaseInput!"
                    ]
                }
            ],
            "appFinalizeRelease": [
                164,
                {
                    "releaseId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "appPublishRelease": [
                161,
                {
                    "releaseId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "platformModuleConfigSet": [
                451,
                {
                    "input": [
                        752,
                        "PlatformModuleConfigSetInput!"
                    ]
                }
            ],
            "platformModuleConfigDelete": [
                4,
                {
                    "input": [
                        754,
                        "PlatformModuleConfigDeleteInput!"
                    ]
                }
            ],
            "entityMetafieldSet": [
                454,
                {
                    "input": [
                        755,
                        "SetEntityMetafieldInput!"
                    ]
                }
            ],
            "entityMetafieldDelete": [
                4,
                {
                    "input": [
                        756,
                        "DeleteEntityMetafieldInput!"
                    ]
                }
            ],
            "setObjectMetadata": [
                457,
                {
                    "input": [
                        757,
                        "SetObjectMetadataInput!"
                    ]
                }
            ],
            "removeObjectMetadata": [
                4,
                {
                    "input": [
                        759,
                        "RemoveObjectMetadataInput!"
                    ]
                }
            ],
            "createCustomFieldDefinition": [
                463,
                {
                    "input": [
                        760,
                        "CreateCustomFieldDefinitionInput!"
                    ]
                }
            ],
            "updateCustomFieldDefinition": [
                463,
                {
                    "id": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        762,
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
                463,
                {
                    "objectType": [
                        460,
                        "ObjectType!"
                    ],
                    "orderedIds": [
                        10,
                        "[ID!]!"
                    ]
                }
            ],
            "setCustomFieldValues": [
                465,
                {
                    "input": [
                        763,
                        "SetCustomFieldValuesInput!"
                    ]
                }
            ],
            "appInstallationPin": [
                173,
                {
                    "input": [
                        765,
                        "AppInstallationPinInput!"
                    ]
                }
            ],
            "appFunctionsSetEnabled": [
                173,
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
                        766,
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
                        767,
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
                        768,
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
                        769,
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
                        770,
                        "GuestLinkCreateInput!"
                    ]
                }
            ],
            "guestLinkRevoke": [
                80,
                {
                    "input": [
                        772,
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
                        773,
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
                        774,
                        "[AppConfigValueInput!]!"
                    ]
                }
            ],
            "appFunctionCall": [
                83,
                {
                    "input": [
                        586,
                        "AppFunctionCallInput!"
                    ]
                }
            ],
            "customPermissionCreate": [
                112,
                {
                    "input": [
                        775,
                        "CustomPermissionInput!"
                    ]
                }
            ],
            "customPermissionUpdate": [
                112,
                {
                    "id": [
                        1,
                        "String!"
                    ],
                    "input": [
                        776,
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
            "organizationModerationUpdate": [
                455,
                {
                    "input": [
                        777,
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
                519
            ],
            "tournamentConfiguration": [
                528
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
                592
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
                192
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
                192
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
                603
            ],
            "__typename": [
                1
            ]
        },
        "OrganizationConfigurationInput": {
            "customFields": [
                511
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
                603
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
                510
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
                510
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
                609
            ],
            "openidConfiguration": [
                610
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
                509
            ],
            "issuer": [
                1
            ],
            "providerType": [
                243
            ],
            "clientId": [
                1
            ],
            "clientSecret": [
                1
            ],
            "tokenEndpointAuthMethod": [
                244
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
                509
            ],
            "issuer": [
                1
            ],
            "providerType": [
                243
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
                609
            ],
            "openidConfiguration": [
                610
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
                615
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
                617
            ],
            "config": [
                621
            ],
            "customPermissions": [
                622
            ],
            "storage": [
                623
            ],
            "operations": [
                625
            ],
            "emailTemplates": [
                626
            ],
            "auditTypes": [
                627
            ],
            "functions": [
                629
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
                121
            ],
            "label": [
                1
            ],
            "activePages": [
                1
            ],
            "size": [
                616
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
                618
            ],
            "events": [
                620
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
                116
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
                619
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
                624
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
                628
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
                123
            ],
            "required": [
                4
            ],
            "options": [
                1
            ],
            "fields": [
                628
            ],
            "items": [
                628
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
                630
            ],
            "invoker": [
                140
            ],
            "runAs": [
                141
            ],
            "input": [
                628
            ],
            "output": [
                628
            ],
            "preload": [
                631
            ],
            "requires": [
                633
            ],
            "__typename": [
                1
            ]
        },
        "AppFunctionTriggerInput": {
            "type": [
                132
            ],
            "readOnly": [
                4
            ],
            "cacheSeconds": [
                80
            ],
            "hookPoint": [
                133
            ],
            "onError": [
                134
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
                135
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
                632
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
                510
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
                512
            ],
            "__typename": [
                1
            ]
        },
        "EmailSendFromCustomInput": {
            "emailField": [
                524
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
                644
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
                644
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
                644
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
                648
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
                649
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
                527
            ],
            "customFields": [
                511
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
                648
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
                266
            ],
            "properties": [
                512
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
                653
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
                655
            ],
            "manualSeeding": [
                658
            ],
            "__typename": [
                1
            ]
        },
        "AutomaticSeedingInput": {
            "seedingMechanism": [
                656
            ],
            "groupRepartitionMechanism": [
                657
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
                659
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
                661
            ],
            "forcedScoreValue": [
                17
            ],
            "status": [
                282
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
                663
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
                512
            ],
            "fromExistingTeamId": [
                10
            ],
            "members": [
                664
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
                643
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
                512
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
                512
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
                286
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
                672
            ],
            "advancementRules": [
                674
            ],
            "crossStepRules": [
                676
            ],
            "structureTemplate": [
                678
            ],
            "__typename": [
                1
            ]
        },
        "CreateScoringInput": {
            "aggregation": [
                295
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
                673
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
                292
            ],
            "formula": [
                1
            ],
            "sortOrder": [
                293
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
                200
            ],
            "triggerScope": [
                1
            ],
            "condition": [
                1
            ],
            "actions": [
                675
            ],
            "autoExecute": [
                4
            ],
            "allowManualOverride": [
                4
            ],
            "purpose": [
                290
            ],
            "__typename": [
                1
            ]
        },
        "RuleActionInput": {
            "type": [
                288
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
                303
            ],
            "dataSource": [
                202
            ],
            "usage": [
                677
            ],
            "__typename": [
                1
            ]
        },
        "CrossStepUsageInput": {
            "type": [
                301
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
                679
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
                680
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
                681
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
                683
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
                306
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
                683
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
                270
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
                270
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
                537
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
                537
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
                396
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
                538
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
                397
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
                396
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
                538
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
                397
            ],
            "__typename": [
                1
            ]
        },
        "EventReservationRegisterTicketsInput": {
            "tickets": [
                692
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
                694
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
                512
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
                692
            ],
            "ticketConfigurations": [
                695
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
                700
            ],
            "createSeats": [
                701
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
                534
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
                534
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
                539
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
                539
            ],
            "__typename": [
                1
            ]
        },
        "EventCalendarGenerateInput": {
            "days": [
                705
            ],
            "slots": [
                706
            ],
            "event": [
                707
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
                706
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
                537
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
                692
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
                153
            ],
            "config": [
                531
            ],
            "__typename": [
                1
            ]
        },
        "PlatformFileUpdateInput": {
            "config": [
                531
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
                541
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
                541
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
                714
            ],
            "sections": [
                715
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
                156
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
                156
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
                720
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
                501
            ],
            "configuration": [
                545
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
                501
            ],
            "configuration": [
                545
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
                512
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
                512
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
                512
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
                512
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
                694
            ],
            "__typename": [
                1
            ]
        },
        "PlayerShopProductPurshaseInput": {
            "items": [
                729
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
                542
            ],
            "metadata": [
                512
            ],
            "visibleAt": [
                12
            ],
            "currency": [
                396
            ],
            "items": [
                544
            ],
            "currencyPrices": [
                543
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
                542
            ],
            "metadata": [
                512
            ],
            "visibleAt": [
                12
            ],
            "currency": [
                396
            ],
            "items": [
                544
            ],
            "currencyPrices": [
                543
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
                512
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
                512
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
                735
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
                512
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
                512
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
                739
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
                512
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
                512
            ],
            "__typename": [
                1
            ]
        },
        "PlayerCurrencyUpdateInput": {
            "items": [
                743
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
                614
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
                167
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
                614
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
                167
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
                179
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
                614
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
                751
            ],
            "__typename": [
                1
            ]
        },
        "AppReleaseFileInput": {
            "kind": [
                158
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
                753
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
                460
            ],
            "objectId": [
                10
            ],
            "entries": [
                758
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
                458
            ],
            "visibility": [
                459
            ],
            "__typename": [
                1
            ]
        },
        "RemoveObjectMetadataInput": {
            "objectType": [
                460
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
                460
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
                464
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
                761
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
                761
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
                460
            ],
            "objectId": [
                10
            ],
            "fields": [
                764
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
                771
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
                343,
                {
                    "jobId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "validationEvents": [
                345,
                {
                    "jobId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "journalEntryAdded": [
                438,
                {
                    "filters": [
                        573
                    ]
                }
            ],
            "presenceUserConnected": [
                475
            ],
            "presenceUserDisconnected": [
                477
            ],
            "__typename": [
                1
            ]
        }
    }
}