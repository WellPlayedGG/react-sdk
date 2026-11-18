export default {
    "scalars": [
        1,
        4,
        10,
        11,
        17,
        19,
        20,
        21,
        31,
        33,
        35,
        36,
        38,
        40,
        46,
        49,
        53,
        59,
        61,
        62,
        63,
        76,
        79,
        80,
        81,
        83,
        85,
        90,
        93,
        96,
        101,
        112,
        115,
        120,
        122,
        131,
        132,
        133,
        134,
        139,
        140,
        145,
        148,
        152,
        155,
        157,
        161,
        165,
        166,
        173,
        178,
        191,
        199,
        201,
        203,
        204,
        209,
        211,
        214,
        227,
        229,
        242,
        243,
        252,
        257,
        265,
        269,
        273,
        275,
        279,
        281,
        285,
        287,
        289,
        291,
        292,
        294,
        300,
        302,
        305,
        308,
        311,
        313,
        315,
        318,
        321,
        323,
        324,
        327,
        330,
        335,
        337,
        341,
        343,
        345,
        346,
        347,
        366,
        368,
        383,
        390,
        395,
        397,
        398,
        399,
        407,
        408,
        409,
        420,
        421,
        435,
        438,
        439,
        457,
        458,
        459,
        463,
        487,
        500,
        502,
        545,
        552,
        553,
        554,
        565,
        568,
        569,
        592,
        595,
        656,
        657,
        706,
        769
    ],
    "types": {
        "JournalPayload": {
            "_typename": [
                1
            ],
            "on_AppFunctionExecutedPayload": [
                103
            ],
            "on_AppFunctionLogPayload": [
                104
            ],
            "on_AppFunctionDeadLetterPayload": [
                105
            ],
            "on_AppAuditPayload": [
                106
            ],
            "on_AppConfigUpdatedPayload": [
                108
            ],
            "on_AppInstallationPinnedPayload": [
                109
            ],
            "on_AppQuotaWarningPayload": [
                110
            ],
            "on_RuleEngineAdvancementRuleFiredPayload": [
                198
            ],
            "on_RuleEngineCrossStepTransferredPayload": [
                200
            ],
            "on_RuleEngineEffectAdvancePayload": [
                202
            ],
            "on_RuleEngineEffectCreateGroupPayload": [
                205
            ],
            "on_RuleEngineEffectEliminatePayload": [
                206
            ],
            "on_RuleEngineEffectEmitSeedingPinPayload": [
                207
            ],
            "on_RuleEngineEffectEndStepPayload": [
                208
            ],
            "on_RuleEngineEffectSetMetadataPayload": [
                210
            ],
            "on_RuleEngineGenerationScriptRanPayload": [
                212
            ],
            "on_RuleEngineManualOverridePayload": [
                213
            ],
            "on_LeaderboardFeedReconcileFailedPayload": [
                215
            ],
            "on_TournamentOpenPoolMatchCorrectedPayload": [
                217
            ],
            "on_TournamentOpenPoolMatchCancelledPayload": [
                218
            ],
            "on_TournamentOpenPoolClosedPayload": [
                219
            ],
            "on_TournamentOpenPoolReopenedPayload": [
                220
            ],
            "on_TournamentsStepResetPayload": [
                248
            ],
            "on_TournamentsStepGeneratedPayload": [
                249
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
                442
            ],
            "on_PlayerActorContext": [
                443
            ],
            "on_SystemActorContext": [
                444
            ],
            "on_MarketplaceModuleActorContext": [
                445
            ],
            "on_ApiClientActorContext": [
                446
            ],
            "on_WebhookCallbackActorContext": [
                447
            ],
            "on_SimulationActorContext": [
                448
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
                545
            ],
            "name": [
                1
            ],
            "permissions": [
                13
            ],
            "organizationId": [
                545
            ],
            "type": [
                10
            ],
            "createdAt": [
                11
            ],
            "updatedAt": [
                11
            ],
            "__typename": [
                1
            ]
        },
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
                12
            ],
            "__typename": [
                1
            ]
        },
        "OrganizationGroups": {
            "edges": [
                16
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
        "Float": {},
        "Property": {
            "property": [
                1
            ],
            "name": [
                1
            ],
            "type": [
                19
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
                20
            ],
            "editability": [
                21
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
                19
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
                20
            ],
            "editability": [
                21
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
                24
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
                25
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
                26
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
                28
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
                31
            ],
            "groups": [
                29
            ],
            "__typename": [
                1
            ]
        },
        "ConfigurationType": {},
        "NumericCondition": {
            "conditionType": [
                33
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
                35
            ],
            "propertySource": [
                36
            ],
            "propertySourceId": [
                545
            ],
            "conditionType": [
                33
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
                38
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
                32
            ],
            "stringCondition": [
                37
            ],
            "propertyCondition": [
                40
            ],
            "__typename": [
                1
            ]
        },
        "PropertyCondition": {},
        "PlayerField": {
            "propertySource": [
                36
            ],
            "propertySourceId": [
                545
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
                36
            ],
            "propertySourceId": [
                545
            ],
            "condition": [
                39
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
                37
            ],
            "numericCondition": [
                34
            ],
            "propertyCondition": [
                40
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
                43
            ],
            "memberConditions": [
                42
            ],
            "__typename": [
                1
            ]
        },
        "TournamentConfiguration": {
            "type": [
                31
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
                46
            ],
            "registrationConditions": [
                44
            ],
            "customFields": [
                18
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
                49
            ],
            "name": [
                1
            ],
            "description": [
                1
            ],
            "availableVariables": [
                47
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
                41
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
                51
            ],
            "__typename": [
                1
            ]
        },
        "WebhookEventConfiguration": {
            "type": [
                53
            ],
            "description": [
                1
            ],
            "payload": [
                51
            ],
            "answerPayload": [
                51
            ],
            "__typename": [
                1
            ]
        },
        "WebhookEventType": {},
        "OrganizationMember": {
            "id": [
                545
            ],
            "organizationId": [
                545
            ],
            "groupId": [
                545
            ],
            "memberId": [
                545
            ],
            "permissions": [
                13
            ],
            "createdAt": [
                11
            ],
            "updatedAt": [
                11
            ],
            "account": [
                75
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
                56
            ],
            "nodes": [
                54
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
                54
            ],
            "__typename": [
                1
            ]
        },
        "Tournament": {
            "id": [
                545
            ],
            "title": [
                1
            ],
            "description": [
                1
            ],
            "startAt": [
                11
            ],
            "endAt": [
                11
            ],
            "startRegistrationsAt": [
                11
            ],
            "endRegistrationsAt": [
                11
            ],
            "organizationId": [
                545
            ],
            "configuration": [
                45
            ],
            "createdAt": [
                11
            ],
            "updatedAt": [
                11
            ],
            "createdById": [
                545
            ],
            "tournamentSeriesId": [
                545
            ],
            "visibleAt": [
                11
            ],
            "registrationSeriesId": [
                545
            ],
            "teams": [
                261,
                {
                    "page": [
                        58,
                        "PageInfo!"
                    ],
                    "status": [
                        59
                    ]
                }
            ],
            "steps": [
                264
            ],
            "createdBy": [
                75
            ],
            "myTeam": [
                260
            ],
            "teamScores": [
                263
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
                61
            ],
            "bucketDuration": [
                62
            ],
            "scope": [
                63
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
                60
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
                65
            ],
            "__typename": [
                1
            ]
        },
        "OrganizationConfiguration": {
            "customFields": [
                18
            ],
            "__typename": [
                1
            ]
        },
        "PublicOrganizationIdentityProvider": {
            "id": [
                545
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
                545
            ],
            "ownerId": [
                545
            ],
            "name": [
                1
            ],
            "description": [
                1
            ],
            "configuration": [
                67
            ],
            "tournaments": [
                57
            ],
            "members": [
                54
            ],
            "groups": [
                9
            ],
            "stripeConfigured": [
                4
            ],
            "identityProviders": [
                68,
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
                545
            ],
            "organizationIdentityProviderId": [
                545
            ],
            "properties": [
                70
            ],
            "createdAt": [
                11
            ],
            "updatedAt": [
                11
            ],
            "isCreationIdentity": [
                4
            ],
            "organizationIdentityProvider": [
                68
            ],
            "__typename": [
                1
            ]
        },
        "Player": {
            "id": [
                545
            ],
            "username": [
                1
            ],
            "description": [
                1
            ],
            "ownerId": [
                545
            ],
            "organizationCustomId": [
                545
            ],
            "updatedAt": [
                11
            ],
            "createdAt": [
                11
            ],
            "identities": [
                71
            ],
            "owner": [
                75
            ],
            "customFields": [
                22,
                {
                    "properties": [
                        1,
                        "[String!]"
                    ]
                }
            ],
            "guest": [
                89
            ],
            "__typename": [
                1
            ]
        },
        "Players": {
            "edges": [
                74
            ],
            "nodes": [
                72
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
                72
            ],
            "__typename": [
                1
            ]
        },
        "Account": {
            "id": [
                545
            ],
            "email": [
                76
            ],
            "permissions": [
                13
            ],
            "profiles": [
                72
            ],
            "identities": [
                71,
                {
                    "properties": [
                        1,
                        "[String!]"
                    ],
                    "providerIds": [
                        545,
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
                79
            ],
            "code": [
                1
            ],
            "platformCode": [
                80
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
                81
            ],
            "__typename": [
                1
            ]
        },
        "AppFunctionErrorKind": {},
        "AppFunctionPlatformErrorCode": {},
        "Int": {},
        "AppFunctionResult": {
            "executionId": [
                545
            ],
            "status": [
                83
            ],
            "payload": [
                1
            ],
            "error": [
                78
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
                85
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
                545
            ],
            "triggerEvent": [
                49
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
                11
            ],
            "updatedAt": [
                11
            ],
            "organizationId": [
                545
            ],
            "__typename": [
                1
            ]
        },
        "EmailTemplates": {
            "edges": [
                88
            ],
            "nodes": [
                86
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
                86
            ],
            "__typename": [
                1
            ]
        },
        "GuestProfile": {
            "playerId": [
                545
            ],
            "player": [
                72
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
                90
            ],
            "guardianPlayerIds": [
                545
            ],
            "wardPlayerIds": [
                545
            ],
            "createdAt": [
                11
            ],
            "__typename": [
                1
            ]
        },
        "GuestOrigin": {},
        "GuestLinkContext": {
            "id": [
                545
            ],
            "purpose": [
                1
            ],
            "data": [
                1
            ],
            "expiresAt": [
                11
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
                545
            ],
            "origin": [
                93
            ],
            "expiresAt": [
                11
            ],
            "link": [
                91
            ],
            "__typename": [
                1
            ]
        },
        "GuestSessionOrigin": {},
        "GuestMe": {
            "sessionPlayerId": [
                545
            ],
            "actingPlayerId": [
                545
            ],
            "origin": [
                93
            ],
            "expiresAt": [
                11
            ],
            "link": [
                91
            ],
            "profile": [
                89
            ],
            "wards": [
                89
            ],
            "__typename": [
                1
            ]
        },
        "GuestLinkView": {
            "status": [
                96
            ],
            "purpose": [
                1
            ],
            "expiresAt": [
                11
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
                545
            ],
            "token": [
                1
            ],
            "expiresAt": [
                11
            ],
            "__typename": [
                1
            ]
        },
        "GuestProfileCreated": {
            "profile": [
                89
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
                545
            ],
            "guardianPlayerId": [
                545
            ],
            "wardPlayerId": [
                545
            ],
            "createdAt": [
                11
            ],
            "__typename": [
                1
            ]
        },
        "GuestConfiguration": {
            "selfEntry": [
                101
            ],
            "sessionTtlMinutes": [
                81
            ],
            "maxWardsPerGuardian": [
                81
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
                545
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
                81
            ],
            "instructions": [
                17
            ],
            "opCalls": [
                81
            ],
            "emails": [
                81
            ],
            "timers": [
                81
            ],
            "error": [
                102
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
                545
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
                81
            ],
            "input": [
                1
            ],
            "error": [
                102
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
                545
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
                545
            ],
            "version": [
                81
            ],
            "changes": [
                107
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
                545
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
                112
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
                115
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
                113
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
                114
            ],
            "events": [
                116
            ],
            "__typename": [
                1
            ]
        },
        "ExtensionPointSizeModel": {
            "maxWidth": [
                81
            ],
            "maxHeight": [
                81
            ],
            "__typename": [
                1
            ]
        },
        "ExtensionPointModel": {
            "type": [
                120
            ],
            "label": [
                1
            ],
            "activePages": [
                1
            ],
            "size": [
                118
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
                122
            ],
            "required": [
                4
            ],
            "options": [
                1
            ],
            "fields": [
                121
            ],
            "items": [
                121
            ],
            "maxLength": [
                81
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
                85
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
                81
            ],
            "__typename": [
                1
            ]
        },
        "AppStorageDeclModel": {
            "collections": [
                125
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
                121
            ],
            "__typename": [
                1
            ]
        },
        "AppFunctionTriggerModel": {
            "type": [
                131
            ],
            "readOnly": [
                4
            ],
            "cacheSeconds": [
                81
            ],
            "hookPoint": [
                132
            ],
            "onError": [
                133
            ],
            "timeoutMs": [
                81
            ],
            "events": [
                53
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
                134
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
                135
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
                130
            ],
            "invoker": [
                139
            ],
            "runAs": [
                140
            ],
            "input": [
                121
            ],
            "output": [
                121
            ],
            "preload": [
                136
            ],
            "requires": [
                137
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
                119
            ],
            "webhookUrl": [
                1
            ],
            "webhookEvents": [
                53
            ],
            "metafieldNamespaces": [
                1
            ],
            "frontendModules": [
                117
            ],
            "extensionCdnPath": [
                1
            ],
            "moduleCdnPath": [
                1
            ],
            "config": [
                123
            ],
            "customPermissions": [
                124
            ],
            "storage": [
                126
            ],
            "operations": [
                127
            ],
            "emailTemplates": [
                128
            ],
            "auditTypes": [
                129
            ],
            "functions": [
                138
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
                145
            ],
            "validation_errors": [
                143
            ],
            "validation_records": [
                142
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
                146
            ],
            "ssl": [
                144
            ],
            "status": [
                148
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
                149
            ],
            "__typename": [
                1
            ]
        },
        "PlatformCdnFile": {
            "id": [
                545
            ],
            "platformId": [
                545
            ],
            "platformTemplateId": [
                545
            ],
            "name": [
                1
            ],
            "type": [
                152
            ],
            "updatedAt": [
                11
            ],
            "createdAt": [
                11
            ],
            "config": [
                150
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
                153
            ],
            "url": [
                155
            ],
            "__typename": [
                1
            ]
        },
        "URL": {},
        "AppReleaseFile": {
            "kind": [
                157
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
                158
            ],
            "__typename": [
                1
            ]
        },
        "MarketplaceAppRelease": {
            "id": [
                545
            ],
            "marketplaceAppId": [
                545
            ],
            "version": [
                1
            ],
            "status": [
                161
            ],
            "manifest": [
                141
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
                159
            ],
            "reviewedAt": [
                11
            ],
            "createdAt": [
                11
            ],
            "files": [
                156
            ],
            "__typename": [
                1
            ]
        },
        "MarketplaceAppReleaseStatus": {},
        "AppReleaseWithUploadUrls": {
            "release": [
                160
            ],
            "extensionUploadUrl": [
                154
            ],
            "moduleUploadUrl": [
                154
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
                545
            ],
            "organizationAppId": [
                545
            ],
            "status": [
                165
            ],
            "manifest": [
                141
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
                11
            ],
            "updatedAt": [
                11
            ],
            "slug": [
                1
            ],
            "visibility": [
                166
            ],
            "allowedOrganizationIds": [
                545
            ],
            "reviews": [
                170,
                {
                    "page": [
                        58
                    ]
                }
            ],
            "stats": [
                176
            ],
            "installation": [
                172
            ],
            "pricing": [
                177
            ],
            "__typename": [
                1
            ]
        },
        "MarketplaceAppStatus": {},
        "MarketplaceAppVisibility": {},
        "MarketplaceApps": {
            "edges": [
                168
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
        "MarketplaceAppEdge": {
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
        "MarketplaceAppReview": {
            "id": [
                545
            ],
            "marketplaceAppId": [
                545
            ],
            "organizationId": [
                545
            ],
            "accountId": [
                545
            ],
            "rating": [
                81
            ],
            "title": [
                1
            ],
            "body": [
                1
            ],
            "createdAt": [
                11
            ],
            "updatedAt": [
                11
            ],
            "__typename": [
                1
            ]
        },
        "MarketplaceAppReviews": {
            "edges": [
                171
            ],
            "nodes": [
                169
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
                169
            ],
            "__typename": [
                1
            ]
        },
        "MarketplaceAppInstallation": {
            "id": [
                545
            ],
            "marketplaceAppId": [
                545
            ],
            "organizationId": [
                545
            ],
            "installedById": [
                545
            ],
            "status": [
                173
            ],
            "grantedPermissions": [
                1
            ],
            "createdAt": [
                11
            ],
            "updatedAt": [
                11
            ],
            "release": [
                160
            ],
            "configVersion": [
                81
            ],
            "functionsEnabled": [
                4
            ],
            "disabledFunctions": [
                1
            ],
            "marketplaceApp": [
                164
            ],
            "__typename": [
                1
            ]
        },
        "MarketplaceInstallationStatus": {},
        "MarketplaceAppInstallations": {
            "edges": [
                175
            ],
            "nodes": [
                172
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
                172
            ],
            "__typename": [
                1
            ]
        },
        "MarketplaceAppStats": {
            "totalInstallations": [
                81
            ],
            "averageRating": [
                17
            ],
            "totalReviews": [
                81
            ],
            "__typename": [
                1
            ]
        },
        "MarketplaceAppPricing": {
            "id": [
                545
            ],
            "marketplaceAppId": [
                545
            ],
            "type": [
                178
            ],
            "priceAmountCents": [
                81
            ],
            "currency": [
                1
            ],
            "trialDays": [
                81
            ],
            "createdAt": [
                11
            ],
            "updatedAt": [
                11
            ],
            "__typename": [
                1
            ]
        },
        "MarketplacePricingType": {},
        "Configuration": {
            "id": [
                545
            ],
            "name": [
                1
            ],
            "description": [
                1
            ],
            "createdAt": [
                11
            ],
            "updatedAt": [
                11
            ],
            "configuration": [
                180
            ],
            "createdById": [
                545
            ],
            "organizationId": [
                545
            ],
            "__typename": [
                1
            ]
        },
        "ConfigurationProperties": {
            "on_StepConfiguration": [
                30
            ],
            "on_TournamentConfiguration": [
                45
            ],
            "__typename": [
                1
            ]
        },
        "LeaderboardSeasonBucketScore": {
            "id": [
                545
            ],
            "rank": [
                17
            ],
            "lastScore": [
                17
            ],
            "lastRank": [
                81
            ],
            "createdAt": [
                11
            ],
            "updatedAt": [
                11
            ],
            "score": [
                17
            ],
            "leaderboardSeasonBucketId": [
                545
            ],
            "playerProfileId": [
                545
            ],
            "__typename": [
                1
            ]
        },
        "LeaderboardSeasonBucketScores": {
            "edges": [
                183
            ],
            "nodes": [
                181
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
                181
            ],
            "__typename": [
                1
            ]
        },
        "Leaderboard": {
            "id": [
                545
            ],
            "organizationId": [
                545
            ],
            "ownerId": [
                545
            ],
            "name": [
                1
            ],
            "description": [
                1
            ],
            "createdAt": [
                11
            ],
            "updatedAt": [
                11
            ],
            "__typename": [
                1
            ]
        },
        "Leaderboards": {
            "edges": [
                186
            ],
            "nodes": [
                184
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
                184
            ],
            "__typename": [
                1
            ]
        },
        "LeaderboardSeason": {
            "id": [
                545
            ],
            "leaderboardId": [
                545
            ],
            "name": [
                1
            ],
            "start": [
                11
            ],
            "end": [
                11
            ],
            "startingScore": [
                17
            ],
            "createdAt": [
                11
            ],
            "updatedAt": [
                11
            ],
            "__typename": [
                1
            ]
        },
        "LeaderboardSeasons": {
            "edges": [
                189
            ],
            "nodes": [
                187
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
                187
            ],
            "__typename": [
                1
            ]
        },
        "LeaderboardSeasonBucket": {
            "id": [
                545
            ],
            "seasonId": [
                545
            ],
            "name": [
                1
            ],
            "minScore": [
                17
            ],
            "scoreCalculationType": [
                191
            ],
            "createdAt": [
                11
            ],
            "updatedAt": [
                11
            ],
            "__typename": [
                1
            ]
        },
        "LeaderboardScoreCalculationType": {},
        "LeaderboardSeasonBuckets": {
            "edges": [
                193
            ],
            "nodes": [
                190
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
                190
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
                545
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
                545
            ],
            "ruleName": [
                1
            ],
            "ruleSetId": [
                545
            ],
            "ruleSetVersion": [
                81
            ],
            "triggerType": [
                199
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
                195
            ],
            "actionSource": [
                1
            ],
            "engineTiming": [
                194
            ],
            "printOutput": [
                1
            ],
            "printOutputTruncated": [
                4
            ],
            "error": [
                196
            ],
            "manualOverride": [
                197
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
                545
            ],
            "targetStepId": [
                545
            ],
            "dataSource": [
                201
            ],
            "keyCount": [
                81
            ],
            "firstKeySamples": [
                1
            ],
            "engineTiming": [
                194
            ],
            "error": [
                196
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
                203
            ],
            "targetTeamId": [
                545
            ],
            "fromStepId": [
                545
            ],
            "toStepId": [
                545
            ],
            "beforeStatus": [
                204
            ],
            "afterStatus": [
                204
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
                203
            ],
            "stepId": [
                545
            ],
            "groupId": [
                545
            ],
            "groupOrder": [
                81
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
                203
            ],
            "targetTeamId": [
                545
            ],
            "stepId": [
                545
            ],
            "beforeStatus": [
                204
            ],
            "afterStatus": [
                204
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
                203
            ],
            "stepId": [
                545
            ],
            "groupId": [
                545
            ],
            "gameId": [
                545
            ],
            "slotIndex": [
                81
            ],
            "targetTeamId": [
                545
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
                203
            ],
            "stepId": [
                545
            ],
            "beforeStepStatus": [
                209
            ],
            "afterStepStatus": [
                209
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
                203
            ],
            "targetType": [
                211
            ],
            "targetId": [
                545
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
                545
            ],
            "script": [
                1
            ],
            "engineTiming": [
                194
            ],
            "printOutput": [
                1
            ],
            "printOutputTruncated": [
                4
            ],
            "error": [
                196
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
                545
            ],
            "overriddenBy": [
                545
            ],
            "reason": [
                1
            ],
            "effect": [
                214
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
                545
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
                545
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
                545
            ],
            "stepId": [
                545
            ],
            "groupId": [
                545
            ],
            "matchId": [
                545
            ],
            "gameId": [
                545
            ],
            "previousScores": [
                216
            ],
            "scores": [
                216
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
                545
            ],
            "stepId": [
                545
            ],
            "groupId": [
                545
            ],
            "matchId": [
                545
            ],
            "gameId": [
                545
            ],
            "previousScores": [
                216
            ],
            "scores": [
                216
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
                545
            ],
            "stepId": [
                545
            ],
            "cancelledMatchCount": [
                81
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
                545
            ],
            "stepId": [
                545
            ],
            "__typename": [
                1
            ]
        },
        "LeaderboardFeed": {
            "id": [
                545
            ],
            "leaderboardId": [
                545
            ],
            "tournamentId": [
                545
            ],
            "stepId": [
                545
            ],
            "seasonId": [
                545
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
                11
            ],
            "updatedAt": [
                11
            ],
            "__typename": [
                1
            ]
        },
        "LeaderboardFeeds": {
            "edges": [
                223
            ],
            "nodes": [
                221
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
                221
            ],
            "__typename": [
                1
            ]
        },
        "LeaderboardFeedReconcileResult": {
            "feedId": [
                545
            ],
            "sourcesChecked": [
                81
            ],
            "entriesWritten": [
                81
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
                545
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
                227
            ],
            "requirements": [
                225
            ],
            "createdAt": [
                11
            ],
            "updatedAt": [
                11
            ],
            "__typename": [
                1
            ]
        },
        "IdentityProviderAvailability": {},
        "AppRelease": {
            "id": [
                545
            ],
            "appId": [
                545
            ],
            "version": [
                1
            ],
            "notes": [
                1
            ],
            "manifest": [
                141
            ],
            "status": [
                229
            ],
            "reviewResult": [
                159
            ],
            "createdAt": [
                11
            ],
            "updatedAt": [
                11
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
                545
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
                230
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
                545
            ],
            "organizationId": [
                545
            ],
            "createdAt": [
                11
            ],
            "updatedAt": [
                11
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
            "wellPlayedAccountLogin": [
                4
            ],
            "configuration": [
                231
            ],
            "creator": [
                75
            ],
            "manifest": [
                141
            ],
            "releases": [
                228
            ],
            "appWebhooks": [
                235
            ],
            "__typename": [
                1
            ]
        },
        "OrganizationApps": {
            "edges": [
                234
            ],
            "nodes": [
                232
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
                232
            ],
            "__typename": [
                1
            ]
        },
        "AppWebhook": {
            "id": [
                545
            ],
            "appId": [
                545
            ],
            "installationId": [
                545
            ],
            "organizationId": [
                545
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
                11
            ],
            "updatedAt": [
                11
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
                545
            ],
            "groupId": [
                545
            ],
            "appId": [
                1
            ],
            "permissions": [
                13
            ],
            "createdAt": [
                11
            ],
            "updatedAt": [
                11
            ],
            "app": [
                232
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
                238
            ],
            "nodes": [
                236
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
                236
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
                545
            ],
            "identityProviderId": [
                545
            ],
            "configuration": [
                240
            ],
            "name": [
                1
            ],
            "organizationId": [
                545
            ],
            "createdAt": [
                11
            ],
            "updatedAt": [
                11
            ],
            "parentIdentityProvider": [
                226
            ],
            "__typename": [
                1
            ]
        },
        "IdentityProviderConfigurations": {
            "on_OAuthClientConfiguration": [
                241
            ],
            "on_OpenidConfiguration": [
                244
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
                242
            ],
            "clientId": [
                1
            ],
            "clientSecret": [
                1
            ],
            "tokenEndpointAuthMethod": [
                243
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
                242
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
                545
            ],
            "organizationId": [
                545
            ],
            "events": [
                53
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
                545
            ],
            "playerProfileId": [
                545
            ],
            "ratingId": [
                545
            ],
            "value": [
                17
            ],
            "createdAt": [
                11
            ],
            "updatedAt": [
                11
            ],
            "player": [
                72
            ],
            "__typename": [
                1
            ]
        },
        "TournamentsStepResetCascadeInfo": {
            "affectedSteps": [
                81
            ],
            "affectedTeams": [
                81
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
                545
            ],
            "previousStatus": [
                209
            ],
            "newStatus": [
                209
            ],
            "reason": [
                1
            ],
            "cascade": [
                247
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
                545
            ],
            "ruleSetId": [
                545
            ],
            "groupCount": [
                81
            ],
            "gameCount": [
                81
            ],
            "seededTeamCount": [
                81
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
                545
            ],
            "groupId": [
                545
            ],
            "gameId": [
                545
            ],
            "slotIndex": [
                81
            ],
            "__typename": [
                1
            ]
        },
        "TournamentStepGroupRoundGameMatch": {
            "id": [
                545
            ],
            "order": [
                17
            ],
            "status": [
                252
            ],
            "tournamentStepGroupRoundGameId": [
                545
            ],
            "configuration": [
                25
            ],
            "createdAt": [
                11
            ],
            "updatedAt": [
                11
            ],
            "__typename": [
                1
            ]
        },
        "MatchStatus": {},
        "TournamentStepGroupRoundGameMatches": {
            "edges": [
                254
            ],
            "nodes": [
                251
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
                251
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
                545
            ],
            "status": [
                257
            ],
            "tournamentTeamId": [
                545
            ],
            "playerProfileId": [
                545
            ],
            "createdAt": [
                11
            ],
            "updatedAt": [
                11
            ],
            "team": [
                260
            ],
            "__typename": [
                1
            ]
        },
        "TournamentTeamMemberStatus": {},
        "TeamMembers": {
            "edges": [
                259
            ],
            "nodes": [
                256
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
                256
            ],
            "__typename": [
                1
            ]
        },
        "TournamentTeam": {
            "id": [
                545
            ],
            "name": [
                1
            ],
            "tag": [
                1
            ],
            "teamId": [
                545
            ],
            "managerId": [
                545
            ],
            "tournamentId": [
                545
            ],
            "status": [
                59
            ],
            "withdrawnAt": [
                11
            ],
            "createdAt": [
                11
            ],
            "updatedAt": [
                11
            ],
            "members": [
                256
            ],
            "eventReservationId": [
                545
            ],
            "customFields": [
                22,
                {
                    "properties": [
                        1,
                        "[String!]"
                    ]
                }
            ],
            "tournament": [
                57
            ],
            "__typename": [
                1
            ]
        },
        "TournamentTeams": {
            "edges": [
                262
            ],
            "nodes": [
                260
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
                260
            ],
            "__typename": [
                1
            ]
        },
        "TournamentTeamScore": {
            "teamId": [
                545
            ],
            "score": [
                17
            ],
            "rank": [
                81
            ],
            "status": [
                204
            ],
            "team": [
                260
            ],
            "__typename": [
                1
            ]
        },
        "TournamentStep": {
            "id": [
                545
            ],
            "tournamentId": [
                545
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
                265
            ],
            "status": [
                209
            ],
            "configuration": [
                30
            ],
            "seedingOrder": [
                545
            ],
            "createdAt": [
                11
            ],
            "updatedAt": [
                11
            ],
            "teamScores": [
                263
            ],
            "tournament": [
                57
            ],
            "manualPins": [
                250
            ],
            "openPool": [
                352
            ],
            "__typename": [
                1
            ]
        },
        "StepType": {},
        "Tournaments": {
            "edges": [
                267
            ],
            "nodes": [
                57
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
                57
            ],
            "__typename": [
                1
            ]
        },
        "RegistrationSeries": {
            "id": [
                545
            ],
            "name": [
                1
            ],
            "maxActiveRegistrations": [
                81
            ],
            "maxActiveWaitlistEntries": [
                81
            ],
            "allowWaitlistWhileRegistered": [
                4
            ],
            "leaveWaitlistsOnRegistration": [
                4
            ],
            "releasePolicy": [
                269
            ],
            "createdAt": [
                11
            ],
            "updatedAt": [
                11
            ],
            "__typename": [
                1
            ]
        },
        "RegistrationSeriesReleasePolicy": {},
        "RegistrationSeriesPage": {
            "edges": [
                271
            ],
            "nodes": [
                268
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
                268
            ],
            "__typename": [
                1
            ]
        },
        "RegistrationSeriesEntry": {
            "kind": [
                273
            ],
            "status": [
                1
            ],
            "isManager": [
                4
            ],
            "eventId": [
                545
            ],
            "ticketConfigurationId": [
                545
            ],
            "reservationId": [
                545
            ],
            "waitlistEntryId": [
                545
            ],
            "tournamentId": [
                545
            ],
            "tournamentTeamId": [
                545
            ],
            "startsAt": [
                11
            ],
            "endsAt": [
                11
            ],
            "__typename": [
                1
            ]
        },
        "RegistrationSeriesEntryKind": {},
        "TournamentStepGroupRoundGame": {
            "id": [
                545
            ],
            "configuration": [
                26
            ],
            "status": [
                275
            ],
            "order": [
                17
            ],
            "tournamentStepGroupRoundId": [
                545
            ],
            "createdAt": [
                11
            ],
            "updatedAt": [
                11
            ],
            "matches": [
                251
            ],
            "gameLinks": [
                278
            ],
            "winningGameId": [
                545
            ],
            "losingGameId": [
                545
            ],
            "__typename": [
                1
            ]
        },
        "TournamentGameStatus": {},
        "TournamentStepGroupRound": {
            "id": [
                545
            ],
            "name": [
                1
            ],
            "configuration": [
                28
            ],
            "tournamentStepGroupId": [
                545
            ],
            "order": [
                17
            ],
            "createdAt": [
                11
            ],
            "updatedAt": [
                11
            ],
            "games": [
                274
            ],
            "__typename": [
                1
            ]
        },
        "TournamentStepGroup": {
            "id": [
                545
            ],
            "name": [
                1
            ],
            "description": [
                1
            ],
            "configuration": [
                29
            ],
            "tournamentStepId": [
                545
            ],
            "createdAt": [
                11
            ],
            "updatedAt": [
                11
            ],
            "order": [
                17
            ],
            "rounds": [
                276
            ],
            "__typename": [
                1
            ]
        },
        "GameLink": {
            "id": [
                545
            ],
            "sourceGameId": [
                545
            ],
            "targetGameId": [
                545
            ],
            "outcome": [
                279
            ],
            "__typename": [
                1
            ]
        },
        "GameLinkOutcome": {},
        "TournamentStepGroupRoundGameMatchScore": {
            "id": [
                545
            ],
            "matchId": [
                545
            ],
            "teamId": [
                545
            ],
            "score": [
                17
            ],
            "status": [
                281
            ],
            "createdAt": [
                11
            ],
            "updatedAt": [
                11
            ],
            "__typename": [
                1
            ]
        },
        "MatchScoreStatus": {},
        "TournamentStepGroupRoundGameMatchScores": {
            "edges": [
                283
            ],
            "nodes": [
                280
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
                280
            ],
            "__typename": [
                1
            ]
        },
        "TournamentAdmin": {
            "id": [
                545
            ],
            "tournamentId": [
                545
            ],
            "accountId": [
                545
            ],
            "permissions": [
                285
            ],
            "createdAt": [
                11
            ],
            "updatedAt": [
                11
            ],
            "account": [
                75
            ],
            "__typename": [
                1
            ]
        },
        "TournamentAdminPermissions": {},
        "RuleActionModel": {
            "type": [
                287
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
                545
            ],
            "name": [
                1
            ],
            "description": [
                1
            ],
            "order": [
                81
            ],
            "triggerType": [
                199
            ],
            "triggerScope": [
                1
            ],
            "condition": [
                1
            ],
            "actions": [
                286
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
                289
            ],
            "createdAt": [
                11
            ],
            "updatedAt": [
                11
            ],
            "__typename": [
                1
            ]
        },
        "AdvancementRulePurpose": {},
        "TiebreakerRuleModel": {
            "id": [
                545
            ],
            "order": [
                81
            ],
            "type": [
                291
            ],
            "formula": [
                1
            ],
            "sortOrder": [
                292
            ],
            "__typename": [
                1
            ]
        },
        "TiebreakerType": {},
        "SortOrder": {},
        "ScoringRuleSetModel": {
            "id": [
                545
            ],
            "aggregation": [
                294
            ],
            "formula": [
                1
            ],
            "winPoints": [
                81
            ],
            "lossPoints": [
                81
            ],
            "drawPoints": [
                81
            ],
            "forfeitPoints": [
                81
            ],
            "tiebreakers": [
                290
            ],
            "__typename": [
                1
            ]
        },
        "ScoreAggregationType": {},
        "GameTemplateModel": {
            "id": [
                545
            ],
            "order": [
                81
            ],
            "teamSlots": [
                81
            ],
            "bestOf": [
                81
            ],
            "onWinTarget": [
                1
            ],
            "onWinSourceSlot": [
                81
            ],
            "onWinTargetSlot": [
                81
            ],
            "onLossTarget": [
                1
            ],
            "onLossSourceSlot": [
                81
            ],
            "onLossTargetSlot": [
                81
            ],
            "__typename": [
                1
            ]
        },
        "RoundTemplateModel": {
            "id": [
                545
            ],
            "name": [
                1
            ],
            "order": [
                81
            ],
            "gameTemplates": [
                295
            ],
            "__typename": [
                1
            ]
        },
        "GroupTemplateModel": {
            "id": [
                545
            ],
            "name": [
                1
            ],
            "description": [
                1
            ],
            "order": [
                81
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
                296
            ],
            "__typename": [
                1
            ]
        },
        "StructureTemplateModel": {
            "id": [
                545
            ],
            "groupTemplates": [
                297
            ],
            "__typename": [
                1
            ]
        },
        "CrossStepUsageModel": {
            "type": [
                300
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
                545
            ],
            "sourceStepId": [
                545
            ],
            "sourceRelative": [
                302
            ],
            "dataSource": [
                201
            ],
            "usage": [
                299
            ],
            "__typename": [
                1
            ]
        },
        "StepRelativePosition": {},
        "StepRuleSetModel": {
            "id": [
                545
            ],
            "version": [
                81
            ],
            "presetName": [
                1
            ],
            "teamCount": [
                81
            ],
            "validated": [
                4
            ],
            "validatedAt": [
                11
            ],
            "scoringRuleSet": [
                293
            ],
            "advancementRules": [
                288
            ],
            "crossStepRules": [
                301
            ],
            "structureTemplate": [
                298
            ],
            "createdAt": [
                11
            ],
            "updatedAt": [
                11
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
                305
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
                545
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
                304
            ],
            "createdAt": [
                11
            ],
            "updatedAt": [
                11
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
                308
            ],
            "parameters": [
                304
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
                81
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
                311
            ],
            "line": [
                81
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
                81
            ],
            "column": [
                81
            ],
            "message": [
                1
            ],
            "code": [
                313
            ],
            "phase": [
                311
            ],
            "originHelper": [
                1
            ],
            "hint": [
                1
            ],
            "snippet": [
                309
            ],
            "stackFrames": [
                310
            ],
            "__typename": [
                1
            ]
        },
        "ScriptErrorCode": {},
        "ScriptWarningModel": {
            "line": [
                81
            ],
            "column": [
                81
            ],
            "message": [
                1
            ],
            "code": [
                315
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
                312
            ],
            "warnings": [
                314
            ],
            "__typename": [
                1
            ]
        },
        "SimulatedEffectModel": {
            "type": [
                318
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
                312
            ],
            "warnings": [
                314
            ],
            "effectsSummary": [
                317
            ],
            "partialEffectsSummary": [
                317
            ],
            "executionTimeMs": [
                81
            ],
            "instructionsUsed": [
                81
            ],
            "__typename": [
                1
            ]
        },
        "LuaErrorDetailModel": {
            "scriptContextType": [
                321
            ],
            "script": [
                1
            ],
            "line": [
                81
            ],
            "column": [
                81
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
                545
            ],
            "code": [
                323
            ],
            "message": [
                1
            ],
            "hint": [
                1
            ],
            "invariantCode": [
                324
            ],
            "luaError": [
                320
            ],
            "offender": [
                325
            ],
            "__typename": [
                1
            ]
        },
        "ValidationErrorCode": {},
        "InvariantCode": {},
        "InvariantOffenderUnion": {
            "on_RuleOffenderModel": [
                326
            ],
            "on_CrossStepRuleOffenderModel": [
                328
            ],
            "on_GameOffenderModel": [
                329
            ],
            "on_RoundOffenderModel": [
                331
            ],
            "on_GroupOffenderModel": [
                332
            ],
            "on_TeamOffenderModel": [
                333
            ],
            "on_ScoreRowOffenderModel": [
                334
            ],
            "__typename": [
                1
            ]
        },
        "RuleOffenderModel": {
            "kind": [
                327
            ],
            "ruleId": [
                545
            ],
            "ruleName": [
                1
            ],
            "trigger": [
                199
            ],
            "__typename": [
                1
            ]
        },
        "OffenderKind": {},
        "CrossStepRuleOffenderModel": {
            "kind": [
                327
            ],
            "crossStepRuleId": [
                545
            ],
            "dataSource": [
                201
            ],
            "usage": [
                300
            ],
            "__typename": [
                1
            ]
        },
        "GameOffenderModel": {
            "kind": [
                327
            ],
            "gameId": [
                545
            ],
            "groupIndex": [
                81
            ],
            "roundIndex": [
                81
            ],
            "gameIndex": [
                81
            ],
            "status": [
                330
            ],
            "__typename": [
                1
            ]
        },
        "GameStatus": {},
        "RoundOffenderModel": {
            "kind": [
                327
            ],
            "roundId": [
                545
            ],
            "groupIndex": [
                81
            ],
            "roundIndex": [
                81
            ],
            "__typename": [
                1
            ]
        },
        "GroupOffenderModel": {
            "kind": [
                327
            ],
            "groupId": [
                545
            ],
            "groupIndex": [
                81
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
                327
            ],
            "teamId": [
                545
            ],
            "teamName": [
                1
            ],
            "currentStatus": [
                204
            ],
            "__typename": [
                1
            ]
        },
        "ScoreRowOffenderModel": {
            "kind": [
                327
            ],
            "scope": [
                335
            ],
            "scoreRowId": [
                545
            ],
            "teamId": [
                545
            ],
            "score": [
                17
            ],
            "rank": [
                81
            ],
            "status": [
                204
            ],
            "__typename": [
                1
            ]
        },
        "ScoreRowScope": {},
        "InvariantResultModel": {
            "code": [
                324
            ],
            "severity": [
                337
            ],
            "passed": [
                4
            ],
            "message": [
                1
            ],
            "offenders": [
                325
            ],
            "__typename": [
                1
            ]
        },
        "InvariantSeverity": {},
        "RuleFireSummaryModel": {
            "ruleId": [
                545
            ],
            "ruleName": [
                1
            ],
            "trigger": [
                199
            ],
            "fireCount": [
                81
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
                81
            ],
            "totalMutations": [
                81
            ],
            "invariantResults": [
                336
            ],
            "errors": [
                322
            ],
            "ruleFiredSummary": [
                338
            ],
            "__typename": [
                1
            ]
        },
        "ValidationProgressModel": {
            "stage": [
                341
            ],
            "percent": [
                17
            ],
            "currentPhaseDetail": [
                1
            ],
            "rulesFired": [
                81
            ],
            "totalRulesDeclared": [
                81
            ],
            "totalMutations": [
                81
            ],
            "elapsedMs": [
                81
            ],
            "__typename": [
                1
            ]
        },
        "ValidationStage": {},
        "ValidationJobModel": {
            "id": [
                545
            ],
            "stepRuleSetId": [
                545
            ],
            "status": [
                343
            ],
            "stage": [
                341
            ],
            "progress": [
                340
            ],
            "result": [
                339
            ],
            "errorSummary": [
                1
            ],
            "startedAt": [
                11
            ],
            "completedAt": [
                11
            ],
            "__typename": [
                1
            ]
        },
        "ValidationJobStatus": {},
        "ValidationEventModel": {
            "id": [
                545
            ],
            "jobId": [
                545
            ],
            "sequence": [
                81
            ],
            "timestamp": [
                11
            ],
            "kind": [
                345
            ],
            "summary": [
                1
            ],
            "ruleId": [
                545
            ],
            "crossStepRuleId": [
                545
            ],
            "matchId": [
                545
            ],
            "gameId": [
                545
            ],
            "roundId": [
                545
            ],
            "groupId": [
                545
            ],
            "stepId": [
                545
            ],
            "teamId": [
                545
            ],
            "effectType": [
                346
            ],
            "statusBefore": [
                347
            ],
            "statusAfter": [
                347
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
                349
            ],
            "nodes": [
                342
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
                342
            ],
            "__typename": [
                1
            ]
        },
        "ValidationEvents": {
            "edges": [
                351
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
        "ValidationEventModelEdge": {
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
        "OpenPoolConfiguration": {
            "teamsPerMatch": [
                81
            ],
            "bestOf": [
                81
            ],
            "maxMatchesPerTeam": [
                81
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
                545
            ],
            "team": [
                260
            ],
            "status": [
                281
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
                545
            ],
            "gameId": [
                545
            ],
            "groupId": [
                545
            ],
            "stepId": [
                545
            ],
            "tournamentId": [
                545
            ],
            "label": [
                1
            ],
            "order": [
                81
            ],
            "status": [
                252
            ],
            "teams": [
                353
            ],
            "createdAt": [
                11
            ],
            "updatedAt": [
                11
            ],
            "__typename": [
                1
            ]
        },
        "OpenPoolMatches": {
            "edges": [
                356
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
        "OpenPoolMatchEdge": {
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
        "OpenPoolStanding": {
            "teamId": [
                545
            ],
            "team": [
                260
            ],
            "groupId": [
                545
            ],
            "rank": [
                81
            ],
            "status": [
                204
            ],
            "points": [
                17
            ],
            "played": [
                81
            ],
            "wins": [
                81
            ],
            "losses": [
                81
            ],
            "draws": [
                81
            ],
            "forfeits": [
                81
            ],
            "__typename": [
                1
            ]
        },
        "Currency": {
            "id": [
                545
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
                545
            ],
            "createdAt": [
                11
            ],
            "updatedAt": [
                11
            ],
            "metadata": [
                23
            ],
            "__typename": [
                1
            ]
        },
        "Currencies": {
            "edges": [
                360
            ],
            "nodes": [
                358
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
                358
            ],
            "__typename": [
                1
            ]
        },
        "PlayerCurrency": {
            "id": [
                545
            ],
            "playerProfileId": [
                545
            ],
            "currencyId": [
                545
            ],
            "balance": [
                17
            ],
            "createdAt": [
                11
            ],
            "updatedAt": [
                11
            ],
            "__typename": [
                1
            ]
        },
        "PlayerCurrencies": {
            "edges": [
                363
            ],
            "nodes": [
                361
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
                361
            ],
            "__typename": [
                1
            ]
        },
        "UserGroupConfiguration": {
            "maxSize": [
                81
            ],
            "minSize": [
                81
            ],
            "nameMinLength": [
                81
            ],
            "nameMaxLength": [
                81
            ],
            "__typename": [
                1
            ]
        },
        "UserGroupMember": {
            "id": [
                545
            ],
            "groupId": [
                545
            ],
            "playerProfileId": [
                545
            ],
            "status": [
                366
            ],
            "createdAt": [
                11
            ],
            "updatedAt": [
                11
            ],
            "__typename": [
                1
            ]
        },
        "UserGroupMemberStatus": {},
        "UserGroup": {
            "id": [
                545
            ],
            "organizationId": [
                545
            ],
            "managerId": [
                545
            ],
            "createdAt": [
                11
            ],
            "updatedAt": [
                11
            ],
            "status": [
                368
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
        "UserGroupEdge": {
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
        "UserGroupMembers": {
            "edges": [
                372
            ],
            "nodes": [
                365
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
                365
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
                373
            ],
            "__typename": [
                1
            ]
        },
        "EventVenueSeat": {
            "id": [
                545
            ],
            "name": [
                1
            ],
            "createdAt": [
                11
            ],
            "updatedAt": [
                11
            ],
            "configuration": [
                374
            ],
            "seatTypeId": [
                545
            ],
            "__typename": [
                1
            ]
        },
        "EventVenueSeatsUpdateResult": {
            "updatedSeats": [
                375
            ],
            "createdSeats": [
                375
            ],
            "deletedSeats": [
                375
            ],
            "__typename": [
                1
            ]
        },
        "EventVenueSeats": {
            "edges": [
                378
            ],
            "nodes": [
                375
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
                375
            ],
            "__typename": [
                1
            ]
        },
        "EventReservationTicketConfiguration": {
            "customFields": [
                22
            ],
            "__typename": [
                1
            ]
        },
        "EventReservationTicket": {
            "id": [
                545
            ],
            "ticketId": [
                545
            ],
            "reservationId": [
                545
            ],
            "groupMemberId": [
                545
            ],
            "seatId": [
                545
            ],
            "createdAt": [
                11
            ],
            "updatedAt": [
                11
            ],
            "configuration": [
                379
            ],
            "__typename": [
                1
            ]
        },
        "EventReservationTicketWithQrCode": {
            "id": [
                545
            ],
            "ticketId": [
                545
            ],
            "reservationId": [
                545
            ],
            "groupMemberId": [
                545
            ],
            "seatId": [
                545
            ],
            "createdAt": [
                11
            ],
            "updatedAt": [
                11
            ],
            "configuration": [
                379
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
                545
            ],
            "name": [
                1
            ],
            "status": [
                383
            ],
            "sessionValidUntil": [
                11
            ],
            "createdAt": [
                11
            ],
            "updatedAt": [
                11
            ],
            "eventId": [
                545
            ],
            "groupId": [
                545
            ],
            "tickets": [
                380
            ],
            "groupStatus": [
                368
            ],
            "replacesReservationId": [
                545
            ],
            "groupName": [
                1
            ],
            "tournamentTeamIds": [
                545
            ],
            "__typename": [
                1
            ]
        },
        "EventReservationStatus": {},
        "EventReservationWithTicketsAndQrCode": {
            "id": [
                545
            ],
            "name": [
                1
            ],
            "status": [
                383
            ],
            "sessionValidUntil": [
                11
            ],
            "createdAt": [
                11
            ],
            "updatedAt": [
                11
            ],
            "eventId": [
                545
            ],
            "groupId": [
                545
            ],
            "groupStatus": [
                368
            ],
            "replacesReservationId": [
                545
            ],
            "groupName": [
                1
            ],
            "tickets": [
                381
            ],
            "__typename": [
                1
            ]
        },
        "EventReservations": {
            "edges": [
                386
            ],
            "nodes": [
                387
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
                387
            ],
            "__typename": [
                1
            ]
        },
        "OmitObjectType": {
            "id": [
                545
            ],
            "name": [
                1
            ],
            "status": [
                383
            ],
            "sessionValidUntil": [
                11
            ],
            "createdAt": [
                11
            ],
            "updatedAt": [
                11
            ],
            "eventId": [
                545
            ],
            "groupId": [
                545
            ],
            "groupStatus": [
                368
            ],
            "replacesReservationId": [
                545
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
                545
            ],
            "name": [
                1
            ],
            "createdAt": [
                11
            ],
            "updatedAt": [
                11
            ],
            "configuration": [
                374
            ],
            "seatTypeId": [
                545
            ],
            "status": [
                390
            ],
            "reservedByTicketId": [
                545
            ],
            "reservedByReservationId": [
                545
            ],
            "reservedByGroupMemberId": [
                545
            ],
            "__typename": [
                1
            ]
        },
        "EventSeatStatus": {},
        "EventSeats": {
            "edges": [
                392
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
        "EventSeatEdge": {
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
        "EventWaitlistConfiguration": {
            "enabled": [
                4
            ],
            "offerDurationSeconds": [
                81
            ],
            "sameDayOfferDurationSeconds": [
                81
            ],
            "maxQuantity": [
                81
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
                81
            ],
            "changeScope": [
                395
            ],
            "__typename": [
                1
            ]
        },
        "EventReservationChangeScope": {},
        "EventConfiguration": {
            "customFields": [
                18
            ],
            "groupConfiguration": [
                364
            ],
            "maxTicketsPerReservation": [
                17
            ],
            "reservationStatusAfterPayment": [
                397
            ],
            "reservationStatusAfterRegistration": [
                398
            ],
            "sessionDuration": [
                17
            ],
            "allowForNewSessionAfterTimeout": [
                4
            ],
            "seatAssignmentMode": [
                399
            ],
            "allowForMoreTicketsThanGroupMembers": [
                4
            ],
            "waitlist": [
                393
            ],
            "selfService": [
                394
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
                545
            ],
            "title": [
                1
            ],
            "description": [
                1
            ],
            "createdAt": [
                11
            ],
            "updatedAt": [
                11
            ],
            "startAt": [
                11
            ],
            "endAt": [
                11
            ],
            "startRegistrationsAt": [
                11
            ],
            "endRegistrationsAt": [
                11
            ],
            "visibleAt": [
                11
            ],
            "configuration": [
                396
            ],
            "eventVenueId": [
                545
            ],
            "organizationId": [
                545
            ],
            "createdById": [
                545
            ],
            "tournamentId": [
                545
            ],
            "registrationSeriesId": [
                545
            ],
            "decryptionKey": [
                1
            ],
            "venue": [
                416
            ],
            "__typename": [
                1
            ]
        },
        "EventInterface": {
            "id": [
                545
            ],
            "title": [
                1
            ],
            "description": [
                1
            ],
            "createdAt": [
                11
            ],
            "updatedAt": [
                11
            ],
            "startAt": [
                11
            ],
            "endAt": [
                11
            ],
            "startRegistrationsAt": [
                11
            ],
            "endRegistrationsAt": [
                11
            ],
            "visibleAt": [
                11
            ],
            "configuration": [
                396
            ],
            "eventVenueId": [
                545
            ],
            "organizationId": [
                545
            ],
            "createdById": [
                545
            ],
            "tournamentId": [
                545
            ],
            "registrationSeriesId": [
                545
            ],
            "decryptionKey": [
                1
            ],
            "venue": [
                416
            ],
            "on_Event": [
                400
            ],
            "on_EventWithUserReservation": [
                402
            ],
            "__typename": [
                1
            ]
        },
        "EventWithUserReservation": {
            "id": [
                545
            ],
            "title": [
                1
            ],
            "description": [
                1
            ],
            "createdAt": [
                11
            ],
            "updatedAt": [
                11
            ],
            "startAt": [
                11
            ],
            "endAt": [
                11
            ],
            "startRegistrationsAt": [
                11
            ],
            "endRegistrationsAt": [
                11
            ],
            "visibleAt": [
                11
            ],
            "configuration": [
                396
            ],
            "eventVenueId": [
                545
            ],
            "organizationId": [
                545
            ],
            "createdById": [
                545
            ],
            "tournamentId": [
                545
            ],
            "registrationSeriesId": [
                545
            ],
            "decryptionKey": [
                1
            ],
            "venue": [
                416
            ],
            "myReservation": [
                384
            ],
            "__typename": [
                1
            ]
        },
        "Events": {
            "edges": [
                404
            ],
            "nodes": [
                400
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
                400
            ],
            "__typename": [
                1
            ]
        },
        "EventTicketConfigurationConfiguration": {
            "customFields": [
                18
            ],
            "__typename": [
                1
            ]
        },
        "EventTicketConfiguration": {
            "id": [
                545
            ],
            "name": [
                1
            ],
            "description": [
                1
            ],
            "createdAt": [
                11
            ],
            "updatedAt": [
                11
            ],
            "price": [
                17
            ],
            "currency": [
                407
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
                545
            ],
            "seatTypeId": [
                545
            ],
            "configuration": [
                405
            ],
            "startsAt": [
                11
            ],
            "endsAt": [
                11
            ],
            "state": [
                408
            ],
            "stateReason": [
                1
            ],
            "tournamentId": [
                545
            ],
            "freeCount": [
                81
            ],
            "effectiveState": [
                409
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
                400
            ],
            "createdEventCount": [
                81
            ],
            "existingEventCount": [
                81
            ],
            "createdSlotCount": [
                81
            ],
            "existingSlotCount": [
                81
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
                545
            ],
            "name": [
                1
            ],
            "description": [
                1
            ],
            "configuration": [
                411
            ],
            "createdAt": [
                11
            ],
            "updatedAt": [
                11
            ],
            "venueId": [
                545
            ],
            "__typename": [
                1
            ]
        },
        "EventVenueSeatTypes": {
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
        "EventVenueSeatTypeEdge": {
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
                545
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
                11
            ],
            "updatedAt": [
                11
            ],
            "configuration": [
                415
            ],
            "organizationId": [
                545
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
        "EventVenueEdge": {
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
        "EventWaitlistEntry": {
            "id": [
                545
            ],
            "eventId": [
                545
            ],
            "ticketConfigurationId": [
                545
            ],
            "playerId": [
                545
            ],
            "quantity": [
                81
            ],
            "status": [
                420
            ],
            "endedReason": [
                421
            ],
            "position": [
                81
            ],
            "offerReservationId": [
                545
            ],
            "offerExpiresAt": [
                11
            ],
            "createdAt": [
                11
            ],
            "updatedAt": [
                11
            ],
            "__typename": [
                1
            ]
        },
        "EventWaitlistEntryStatus": {},
        "EventWaitlistEndReason": {},
        "EventWaitlistEntries": {
            "edges": [
                423
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
        "EventWaitlistEntryEdge": {
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
        "Item": {
            "id": [
                545
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
                23
            ],
            "createdAt": [
                11
            ],
            "updatedAt": [
                11
            ],
            "organizationId": [
                545
            ],
            "categoryId": [
                545
            ],
            "__typename": [
                1
            ]
        },
        "Items": {
            "edges": [
                426
            ],
            "nodes": [
                424
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
                424
            ],
            "__typename": [
                1
            ]
        },
        "PlayerItem": {
            "id": [
                545
            ],
            "playerProfileId": [
                545
            ],
            "itemId": [
                545
            ],
            "createdAt": [
                11
            ],
            "updatedAt": [
                11
            ],
            "metadata": [
                23
            ],
            "quantity": [
                81
            ],
            "__typename": [
                1
            ]
        },
        "PlayerItems": {
            "edges": [
                429
            ],
            "nodes": [
                427
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
                427
            ],
            "__typename": [
                1
            ]
        },
        "ItemCategory": {
            "id": [
                545
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
                23
            ],
            "createdAt": [
                11
            ],
            "updatedAt": [
                11
            ],
            "organizationId": [
                545
            ],
            "__typename": [
                1
            ]
        },
        "ItemCategories": {
            "edges": [
                432
            ],
            "nodes": [
                430
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
                430
            ],
            "__typename": [
                1
            ]
        },
        "PlayerItemsTransferResult": {
            "from": [
                427
            ],
            "to": [
                427
            ],
            "__typename": [
                1
            ]
        },
        "JournalActor": {
            "type": [
                435
            ],
            "id": [
                545
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
                545
            ],
            "__typename": [
                1
            ]
        },
        "JournalEntry": {
            "id": [
                545
            ],
            "category": [
                438
            ],
            "type": [
                1
            ],
            "severity": [
                439
            ],
            "actor": [
                434
            ],
            "primaryResource": [
                436
            ],
            "secondaryResources": [
                436
            ],
            "payload": [
                0
            ],
            "parentEntryId": [
                545
            ],
            "correlationId": [
                545
            ],
            "createdAt": [
                11
            ],
            "children": [
                440,
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
                441
            ],
            "nodes": [
                437
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
                437
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
                545
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
                545
            ],
            "accountId": [
                545
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
                545
            ],
            "marketplaceAppId": [
                545
            ],
            "installationId": [
                545
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
                545
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
                545
            ],
            "deliveryId": [
                545
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
                545
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
                545
            ],
            "platformId": [
                545
            ],
            "marketplaceAppId": [
                545
            ],
            "moduleName": [
                1
            ],
            "props": [
                449
            ],
            "createdAt": [
                11
            ],
            "updatedAt": [
                11
            ],
            "__typename": [
                1
            ]
        },
        "ModuleTokenDto": {
            "appId": [
                545
            ],
            "marketplaceAppId": [
                545
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
                114
            ],
            "events": [
                116
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
                545
            ],
            "appId": [
                545
            ],
            "__typename": [
                1
            ]
        },
        "EntityMetafield": {
            "id": [
                545
            ],
            "organizationId": [
                545
            ],
            "appId": [
                545
            ],
            "namespace": [
                1
            ],
            "entityType": [
                1
            ],
            "entityId": [
                545
            ],
            "key": [
                1
            ],
            "value": [
                1
            ],
            "createdAt": [
                11
            ],
            "updatedAt": [
                11
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
                11
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
                457
            ],
            "visibility": [
                458
            ],
            "objectType": [
                459
            ],
            "objectId": [
                545
            ],
            "createdAt": [
                11
            ],
            "updatedAt": [
                11
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
                545
            ],
            "entries": [
                456
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
                545
            ],
            "objectType": [
                459
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
                463
            ],
            "required": [
                4
            ],
            "unique": [
                4
            ],
            "order": [
                81
            ],
            "visibility": [
                20
            ],
            "editability": [
                21
            ],
            "options": [
                461
            ],
            "defaultValue": [
                1
            ],
            "validationRegex": [
                1
            ],
            "createdAt": [
                11
            ],
            "updatedAt": [
                11
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
                462
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
                545
            ],
            "fields": [
                464
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
                147
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
                545
            ],
            "name": [
                1
            ],
            "createdAt": [
                11
            ],
            "updatedAt": [
                11
            ],
            "configuration": [
                469
            ],
            "organizationId": [
                545
            ],
            "appId": [
                1
            ],
            "customDomains": [
                466
            ],
            "__typename": [
                1
            ]
        },
        "PlatformTemplate": {
            "id": [
                545
            ],
            "name": [
                1
            ],
            "description": [
                1
            ],
            "screenshotUrl": [
                155
            ],
            "createdAt": [
                11
            ],
            "updatedAt": [
                11
            ],
            "ownerId": [
                545
            ],
            "organizationId": [
                545
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
                81
            ],
            "authenticatedSessions": [
                81
            ],
            "anonymousSessions": [
                81
            ],
            "__typename": [
                1
            ]
        },
        "UserConnectionEvent": {
            "sessionId": [
                545
            ],
            "serverId": [
                545
            ],
            "playerId": [
                545
            ],
            "accountId": [
                545
            ],
            "organizationId": [
                545
            ],
            "__typename": [
                1
            ]
        },
        "UsersConnectedEvent": {
            "usersConnected": [
                473
            ],
            "__typename": [
                1
            ]
        },
        "UserDisconnectEvent": {
            "sessionId": [
                545
            ],
            "serverId": [
                545
            ],
            "playerId": [
                545
            ],
            "accountId": [
                545
            ],
            "organizationId": [
                545
            ],
            "__typename": [
                1
            ]
        },
        "UsersDisconnectedEvent": {
            "usersDisconnected": [
                475
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
                545
            ],
            "playerProfileId": [
                545
            ],
            "shopProductId": [
                545
            ],
            "quantity": [
                17
            ],
            "createdAt": [
                11
            ],
            "updatedAt": [
                11
            ],
            "__typename": [
                1
            ]
        },
        "PlayerShopProductPurshasesDto": {
            "edges": [
                480
            ],
            "nodes": [
                478
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
                478
            ],
            "__typename": [
                1
            ]
        },
        "ShopCategory": {
            "id": [
                545
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
                23
            ],
            "createdAt": [
                11
            ],
            "updatedAt": [
                11
            ],
            "shopId": [
                545
            ],
            "__typename": [
                1
            ]
        },
        "ShopCategories": {
            "edges": [
                483
            ],
            "nodes": [
                481
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
                481
            ],
            "__typename": [
                1
            ]
        },
        "ShopProductConfiguration": {
            "minQuantity": [
                81
            ],
            "maxQuantity": [
                81
            ],
            "maxBoughtQuantity": [
                81
            ],
            "__typename": [
                1
            ]
        },
        "EntityQuantity": {
            "id": [
                545
            ],
            "quantity": [
                81
            ],
            "__typename": [
                1
            ]
        },
        "ShopItemQuantity": {
            "type": [
                487
            ],
            "id": [
                545
            ],
            "quantity": [
                81
            ],
            "__typename": [
                1
            ]
        },
        "ShopProductItemType": {},
        "ShopProduct": {
            "id": [
                545
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
                545
            ],
            "price": [
                17
            ],
            "configuration": [
                484
            ],
            "metadata": [
                23
            ],
            "createdAt": [
                11
            ],
            "updatedAt": [
                11
            ],
            "visibleAt": [
                11
            ],
            "shopId": [
                545
            ],
            "currency": [
                407
            ],
            "items": [
                486
            ],
            "currencyPrices": [
                485
            ],
            "__typename": [
                1
            ]
        },
        "ShopProducts": {
            "edges": [
                490
            ],
            "nodes": [
                488
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
                488
            ],
            "__typename": [
                1
            ]
        },
        "Shop": {
            "id": [
                545
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
                11
            ],
            "updatedAt": [
                11
            ],
            "organizationId": [
                545
            ],
            "metadata": [
                23
            ],
            "__typename": [
                1
            ]
        },
        "Shops": {
            "edges": [
                493
            ],
            "nodes": [
                491
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
                491
            ],
            "__typename": [
                1
            ]
        },
        "ShopProductItem": {
            "id": [
                545
            ],
            "currencyId": [
                545
            ],
            "createdAt": [
                11
            ],
            "updatedAt": [
                11
            ],
            "type": [
                487
            ],
            "shopItemId": [
                545
            ],
            "itemId": [
                545
            ],
            "quantity": [
                81
            ],
            "__typename": [
                1
            ]
        },
        "ShopProductItems": {
            "edges": [
                496
            ],
            "nodes": [
                494
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
                494
            ],
            "__typename": [
                1
            ]
        },
        "SkillRatingConfiguration": {
            "updateLeaderboardId": [
                545
            ],
            "__typename": [
                1
            ]
        },
        "OrganizationSkillRatingsRegisterMatchPlayer": {
            "id": [
                545
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
                545
            ],
            "name": [
                1
            ],
            "description": [
                1
            ],
            "type": [
                500
            ],
            "configuration": [
                497
            ],
            "organizationId": [
                545
            ],
            "createdAt": [
                11
            ],
            "updatedAt": [
                11
            ],
            "__typename": [
                1
            ]
        },
        "SkillRatingType": {},
        "LimitOverride": {
            "limit": [
                502
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
                545
            ],
            "name": [
                1
            ],
            "description": [
                1
            ],
            "limitsOverride": [
                501
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
                545
            ],
            "subscriptionItemId": [
                545
            ],
            "count": [
                17
            ],
            "createdAt": [
                11
            ],
            "endAt": [
                11
            ],
            "updatedAt": [
                11
            ],
            "subscriptionItem": [
                503
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
                505
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
                507
            ],
            "mappingConfiguration": [
                506
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
                19
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
            "visibility": [
                20
            ],
            "editability": [
                21
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
                512
            ],
            "scoreFormula": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "GameConfigurationInput": {
            "useMatchScoresAsGameScore": [
                4
            ],
            "teamsCount": [
                17
            ],
            "matchConfiguration": [
                513
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
                514
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
                516
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
                31
            ],
            "__typename": [
                1
            ]
        },
        "NumberConditionInput": {
            "conditionType": [
                33
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
                35
            ],
            "propertySource": [
                36
            ],
            "propertySourceId": [
                545
            ],
            "conditionType": [
                33
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
                38
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
                519
            ],
            "stringCondition": [
                521
            ],
            "propertyCondition": [
                40
            ],
            "__typename": [
                1
            ]
        },
        "PlayerFieldInput": {
            "propertySource": [
                36
            ],
            "propertySourceId": [
                545
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
                36
            ],
            "propertySourceId": [
                545
            ],
            "condition": [
                522
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
                521
            ],
            "numericCondition": [
                520
            ],
            "propertyCondition": [
                40
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
                525
            ],
            "memberConditions": [
                524
            ],
            "__typename": [
                1
            ]
        },
        "TournamentConfigurationInput": {
            "type": [
                31
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
                46
            ],
            "registrationConditions": [
                526
            ],
            "customFields": [
                510
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
                523
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
                529
            ],
            "__typename": [
                1
            ]
        },
        "UserGroupConfigurationInput": {
            "maxSize": [
                81
            ],
            "minSize": [
                81
            ],
            "nameMinLength": [
                81
            ],
            "nameMaxLength": [
                81
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
                532
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
                81
            ],
            "sameDayOfferDurationSeconds": [
                81
            ],
            "maxQuantity": [
                81
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
                81
            ],
            "changeScope": [
                395
            ],
            "__typename": [
                1
            ]
        },
        "EventConfigurationInput": {
            "customFields": [
                510
            ],
            "groupConfiguration": [
                531
            ],
            "maxTicketsPerReservation": [
                17
            ],
            "reservationStatusAfterPayment": [
                397
            ],
            "reservationStatusAfterRegistration": [
                398
            ],
            "sessionDuration": [
                17
            ],
            "allowForNewSessionAfterTimeout": [
                4
            ],
            "seatAssignmentMode": [
                399
            ],
            "allowForMoreTicketsThanGroupMembers": [
                4
            ],
            "waitlist": [
                534
            ],
            "selfService": [
                535
            ],
            "__typename": [
                1
            ]
        },
        "EventTicketConfigurationConfigurationInput": {
            "customFields": [
                510
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
                81
            ],
            "maxQuantity": [
                81
            ],
            "maxBoughtQuantity": [
                81
            ],
            "__typename": [
                1
            ]
        },
        "EntityQuantityInput": {
            "id": [
                545
            ],
            "quantity": [
                81
            ],
            "__typename": [
                1
            ]
        },
        "ShopItemQuantityInput": {
            "type": [
                487
            ],
            "id": [
                545
            ],
            "quantity": [
                81
            ],
            "__typename": [
                1
            ]
        },
        "SkillRatingConfigurationInput": {
            "updateLeaderboardId": [
                545
            ],
            "__typename": [
                1
            ]
        },
        "ID": {},
        "Query": {
            "getMyAccount": [
                75
            ],
            "configuration": [
                179,
                {
                    "id": [
                        545,
                        "ID!"
                    ]
                }
            ],
            "leaderboardCurrentPlayerRanking": [
                181,
                {
                    "input": [
                        547,
                        "LeaderboardGetPlayerRankingInput!"
                    ]
                }
            ],
            "leaderboards": [
                185,
                {
                    "page": [
                        58,
                        "PageInfo!"
                    ]
                }
            ],
            "leaderboard": [
                184,
                {
                    "id": [
                        545,
                        "ID!"
                    ]
                }
            ],
            "currentLeaderboardSeason": [
                187,
                {
                    "leaderboardId": [
                        545,
                        "ID!"
                    ]
                }
            ],
            "leaderboardSeasons": [
                188,
                {
                    "leaderboardId": [
                        545,
                        "ID!"
                    ],
                    "page": [
                        58,
                        "PageInfo!"
                    ]
                }
            ],
            "leaderboardSeason": [
                187,
                {
                    "id": [
                        545,
                        "ID!"
                    ]
                }
            ],
            "leaderboardSeasonBuckets": [
                192,
                {
                    "seasonId": [
                        545,
                        "ID!"
                    ],
                    "page": [
                        58,
                        "PageInfo!"
                    ]
                }
            ],
            "leaderboardSeasonBucket": [
                190,
                {
                    "id": [
                        545,
                        "ID!"
                    ]
                }
            ],
            "leaderboardSeasonBucketScores": [
                182,
                {
                    "leaderboardSeasonBucketId": [
                        545,
                        "ID!"
                    ],
                    "page": [
                        58,
                        "PageInfo!"
                    ]
                }
            ],
            "leaderboardFeeds": [
                222,
                {
                    "leaderboardId": [
                        545
                    ],
                    "tournamentId": [
                        545
                    ],
                    "page": [
                        58
                    ]
                }
            ],
            "organization": [
                69,
                {
                    "id": [
                        545,
                        "ID!"
                    ]
                }
            ],
            "limitDefinitions": [
                64,
                {
                    "limits": [
                        1,
                        "[String!]"
                    ]
                }
            ],
            "organizationLimits": [
                66,
                {
                    "limits": [
                        502,
                        "[OrganizationLimitsType!]"
                    ]
                }
            ],
            "userOrganizations": [
                69
            ],
            "organizationGroup": [
                9,
                {
                    "id": [
                        545,
                        "ID!"
                    ]
                }
            ],
            "organizationGroups": [
                15,
                {
                    "page": [
                        58,
                        "PageInfo!"
                    ]
                }
            ],
            "availablePermissions": [
                14
            ],
            "organizationMembers": [
                55,
                {
                    "page": [
                        58,
                        "PageInfo!"
                    ]
                }
            ],
            "identityProviders": [
                548
            ],
            "identityProvider": [
                239,
                {
                    "id": [
                        545,
                        "ID!"
                    ]
                }
            ],
            "organizationApp": [
                232,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "organizationApps": [
                233,
                {
                    "page": [
                        58,
                        "PageInfo!"
                    ]
                }
            ],
            "appReleasesByApp": [
                228,
                {
                    "appId": [
                        545,
                        "ID!"
                    ]
                }
            ],
            "appRelease": [
                228,
                {
                    "id": [
                        545,
                        "ID!"
                    ]
                }
            ],
            "webhookAvailableEvents": [
                52
            ],
            "webhooks": [
                245
            ],
            "webhook": [
                245,
                {
                    "id": [
                        545,
                        "ID!"
                    ]
                }
            ],
            "organizationAttachedApps": [
                237,
                {
                    "page": [
                        58,
                        "PageInfo!"
                    ]
                }
            ],
            "availableRootIdentityProvider": [
                226,
                {
                    "id": [
                        545,
                        "ID!"
                    ]
                }
            ],
            "getAvailableRootIdentityProviders": [
                226
            ],
            "emailTemplateConfigurations": [
                48
            ],
            "emailConfiguration": [
                50
            ],
            "emailTemplate": [
                86,
                {
                    "id": [
                        545,
                        "ID!"
                    ]
                }
            ],
            "emailTemplates": [
                87,
                {
                    "page": [
                        58,
                        "PageInfo!"
                    ]
                }
            ],
            "searchPlayer": [
                72,
                {
                    "username": [
                        1,
                        "String!"
                    ]
                }
            ],
            "players": [
                73,
                {
                    "ids": [
                        545,
                        "[ID!]"
                    ],
                    "page": [
                        58,
                        "PageInfo!"
                    ],
                    "identityProviders": [
                        545,
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
                72,
                {
                    "id": [
                        545
                    ],
                    "ownerId": [
                        545
                    ],
                    "customId": [
                        1
                    ]
                }
            ],
            "playerSkillRatings": [
                246,
                {
                    "playerId": [
                        545,
                        "ID!"
                    ],
                    "skillRatingIds": [
                        545,
                        "[ID!]"
                    ]
                }
            ],
            "playerMatchesHistory": [
                253,
                {
                    "page": [
                        58,
                        "PageInfo!"
                    ],
                    "playerId": [
                        545,
                        "ID!"
                    ]
                }
            ],
            "tournament": [
                57,
                {
                    "id": [
                        545,
                        "ID!"
                    ]
                }
            ],
            "tournaments": [
                266,
                {
                    "query": [
                        551,
                        "TournamentsQuery!"
                    ],
                    "page": [
                        58,
                        "PageInfo!"
                    ]
                }
            ],
            "tournamentSteps": [
                264,
                {
                    "tournamentId": [
                        545,
                        "ID!"
                    ]
                }
            ],
            "tournamentStep": [
                264,
                {
                    "id": [
                        545,
                        "ID!"
                    ]
                }
            ],
            "tournamentStepGeneratedShape": [
                277,
                {
                    "stepId": [
                        545,
                        "ID!"
                    ]
                }
            ],
            "match": [
                251,
                {
                    "matchId": [
                        545,
                        "ID!"
                    ]
                }
            ],
            "tournamentTeam": [
                260,
                {
                    "teamId": [
                        545,
                        "ID!"
                    ],
                    "memberStatus": [
                        257
                    ]
                }
            ],
            "tournamentTeams": [
                261,
                {
                    "tournamentId": [
                        545,
                        "ID!"
                    ],
                    "page": [
                        58,
                        "PageInfo!"
                    ],
                    "memberStatus": [
                        257
                    ],
                    "status": [
                        59
                    ],
                    "playerUsernameQuery": [
                        1
                    ],
                    "propertiesFilter": [
                        511,
                        "[PropertyValueInput!]"
                    ],
                    "playerPropertiesFilter": [
                        511,
                        "[PropertyValueInput!]"
                    ],
                    "playerIdentityProviderPropertiesFilter": [
                        556,
                        "[IdentityProviderPropertyInput!]"
                    ],
                    "playerProfileIds": [
                        545,
                        "[ID!]"
                    ]
                }
            ],
            "tournamentPlayers": [
                258,
                {
                    "page": [
                        58,
                        "PageInfo!"
                    ],
                    "tournamentId": [
                        545,
                        "ID!"
                    ],
                    "status": [
                        59
                    ],
                    "playerUsernameQuery": [
                        1
                    ],
                    "playerPropertiesFilter": [
                        511,
                        "[PropertyValueInput!]"
                    ],
                    "orderByProperty": [
                        557
                    ]
                }
            ],
            "tournamentTeamInvites": [
                258,
                {
                    "page": [
                        58,
                        "PageInfo!"
                    ],
                    "tournamentId": [
                        545
                    ],
                    "status": [
                        257
                    ]
                }
            ],
            "tournamentStepGroupRoundGameMatchScoresGetForStep": [
                282,
                {
                    "stepId": [
                        545,
                        "ID!"
                    ],
                    "page": [
                        58,
                        "PageInfo!"
                    ]
                }
            ],
            "tournamentAdmins": [
                284,
                {
                    "tournamentId": [
                        545,
                        "ID!"
                    ]
                }
            ],
            "openPoolMatches": [
                355,
                {
                    "stepId": [
                        545,
                        "ID!"
                    ],
                    "filter": [
                        558
                    ],
                    "page": [
                        58
                    ]
                }
            ],
            "openPoolStandings": [
                357,
                {
                    "stepId": [
                        545,
                        "ID!"
                    ],
                    "groupId": [
                        545
                    ]
                }
            ],
            "stepRuleSet": [
                303,
                {
                    "tournamentStepId": [
                        545,
                        "ID!"
                    ]
                }
            ],
            "presetScripts": [
                306
            ],
            "presetScript": [
                306,
                {
                    "id": [
                        545,
                        "ID!"
                    ]
                }
            ],
            "builtinPresets": [
                307,
                {
                    "category": [
                        308
                    ]
                }
            ],
            "builtinPreset": [
                307,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "validateScript": [
                316,
                {
                    "input": [
                        559,
                        "ValidateScriptInput!"
                    ]
                }
            ],
            "simulateScript": [
                319,
                {
                    "input": [
                        560,
                        "SimulateScriptInput!"
                    ]
                }
            ],
            "stepRuleSetValidationJob": [
                342,
                {
                    "jobId": [
                        545,
                        "ID!"
                    ]
                }
            ],
            "stepRuleSetValidationJobs": [
                348,
                {
                    "stepRuleSetId": [
                        545,
                        "ID!"
                    ],
                    "page": [
                        58,
                        "PageInfo!"
                    ]
                }
            ],
            "stepRuleSetValidationEvents": [
                350,
                {
                    "jobId": [
                        545,
                        "ID!"
                    ],
                    "page": [
                        58,
                        "PageInfo!"
                    ],
                    "kindFilter": [
                        345,
                        "[ValidationEventKind!]"
                    ]
                }
            ],
            "platformFiles": [
                151,
                {
                    "type": [
                        152
                    ],
                    "platformId": [
                        545
                    ],
                    "templateId": [
                        545
                    ]
                }
            ],
            "platformFile": [
                151,
                {
                    "id": [
                        545,
                        "ID!"
                    ]
                }
            ],
            "platforms": [
                470
            ],
            "platform": [
                470,
                {
                    "platformId": [
                        545,
                        "ID!"
                    ]
                }
            ],
            "platformFindFromDomain": [
                470,
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
                        155,
                        "URL!"
                    ]
                }
            ],
            "platformCustomDomains": [
                466,
                {
                    "platformId": [
                        545,
                        "ID!"
                    ]
                }
            ],
            "platformTemplatesPublic": [
                471
            ],
            "platformTemplates": [
                471
            ],
            "platformTemplate": [
                471,
                {
                    "platformTemplateId": [
                        545,
                        "ID!"
                    ]
                }
            ],
            "subscriptionItems": [
                503
            ],
            "organizationCurrentSubscriptionItems": [
                504
            ],
            "journalEntries": [
                440,
                {
                    "page": [
                        58
                    ],
                    "filters": [
                        566
                    ]
                }
            ],
            "journalEntry": [
                437,
                {
                    "id": [
                        545,
                        "ID!"
                    ]
                }
            ],
            "organizationSkillRatings": [
                499
            ],
            "organizationSkillRating": [
                499,
                {
                    "id": [
                        545,
                        "ID!"
                    ]
                }
            ],
            "event": [
                402,
                {
                    "id": [
                        545,
                        "ID!"
                    ]
                }
            ],
            "events": [
                403,
                {
                    "page": [
                        58,
                        "PageInfo!"
                    ],
                    "query": [
                        567
                    ],
                    "eventIds": [
                        545,
                        "[ID!]"
                    ]
                }
            ],
            "eventTicketConfiguration": [
                406,
                {
                    "id": [
                        545,
                        "ID!"
                    ]
                }
            ],
            "eventTicketConfigurations": [
                406,
                {
                    "eventId": [
                        545,
                        "ID!"
                    ]
                }
            ],
            "eventReservationsMyReservations": [
                385,
                {
                    "page": [
                        58,
                        "PageInfo!"
                    ],
                    "status": [
                        383
                    ],
                    "groupStatus": [
                        368
                    ],
                    "eventIds": [
                        545,
                        "[ID!]"
                    ]
                }
            ],
            "eventReservation": [
                382,
                {
                    "reservationId": [
                        545,
                        "ID!"
                    ]
                }
            ],
            "eventSeats": [
                391,
                {
                    "eventId": [
                        545,
                        "ID!"
                    ],
                    "page": [
                        58,
                        "PageInfo!"
                    ],
                    "eventVenueId": [
                        545
                    ],
                    "reservationIds": [
                        545,
                        "[ID!]"
                    ]
                }
            ],
            "eventReservations": [
                385,
                {
                    "eventId": [
                        545,
                        "ID!"
                    ],
                    "page": [
                        58,
                        "PageInfo!"
                    ],
                    "query": [
                        571,
                        "EventReservationsQueryInput!"
                    ]
                }
            ],
            "eventVenues": [
                417,
                {
                    "page": [
                        58,
                        "PageInfo!"
                    ]
                }
            ],
            "eventVenue": [
                416,
                {
                    "id": [
                        545,
                        "ID!"
                    ]
                }
            ],
            "eventVenueSeats": [
                377,
                {
                    "venueId": [
                        545,
                        "ID!"
                    ],
                    "page": [
                        58,
                        "PageInfo!"
                    ],
                    "seatTypeId": [
                        545
                    ]
                }
            ],
            "eventVenueSeatTypes": [
                413,
                {
                    "venueId": [
                        545,
                        "ID!"
                    ],
                    "page": [
                        58,
                        "PageInfo!"
                    ]
                }
            ],
            "eventSlots": [
                406,
                {
                    "filter": [
                        573,
                        "EventSlotsFilter!"
                    ]
                }
            ],
            "myWaitlistEntries": [
                419,
                {
                    "eventIds": [
                        545,
                        "[ID!]"
                    ],
                    "activeOnly": [
                        4
                    ]
                }
            ],
            "eventWaitlistEntries": [
                422,
                {
                    "eventId": [
                        545,
                        "ID!"
                    ],
                    "ticketConfigurationId": [
                        545
                    ],
                    "statuses": [
                        420,
                        "[EventWaitlistEntryStatus!]"
                    ],
                    "page": [
                        58,
                        "PageInfo!"
                    ]
                }
            ],
            "organizationPaymentCollectionConfiguration": [
                255
            ],
            "userGroupMembers": [
                371,
                {
                    "groupIds": [
                        545,
                        "[ID!]!"
                    ],
                    "page": [
                        58,
                        "PageInfo!"
                    ],
                    "status": [
                        366
                    ]
                }
            ],
            "userGroups": [
                369,
                {
                    "query": [
                        574,
                        "UserGroupsQueryInput!"
                    ],
                    "page": [
                        58,
                        "PageInfo!"
                    ]
                }
            ],
            "userGroupMyMemberships": [
                371,
                {
                    "page": [
                        58,
                        "PageInfo!"
                    ],
                    "status": [
                        366
                    ],
                    "entityType": [
                        1
                    ],
                    "entityId": [
                        545
                    ]
                }
            ],
            "presenceAnalytics": [
                472
            ],
            "shops": [
                492,
                {
                    "page": [
                        58
                    ],
                    "filter": [
                        575
                    ]
                }
            ],
            "shopCategories": [
                482,
                {
                    "page": [
                        58
                    ],
                    "filter": [
                        576
                    ]
                }
            ],
            "playerShopProductPurshases": [
                479,
                {
                    "page": [
                        58
                    ],
                    "filter": [
                        577
                    ]
                }
            ],
            "shopProducts": [
                489,
                {
                    "shopId": [
                        545,
                        "ID!"
                    ],
                    "page": [
                        58
                    ],
                    "filter": [
                        578
                    ]
                }
            ],
            "shopProductItems": [
                495,
                {
                    "shopProductId": [
                        545,
                        "ID!"
                    ],
                    "page": [
                        58
                    ]
                }
            ],
            "items": [
                425,
                {
                    "page": [
                        58
                    ],
                    "filter": [
                        579
                    ]
                }
            ],
            "playerItems": [
                428,
                {
                    "page": [
                        58
                    ],
                    "filter": [
                        580
                    ]
                }
            ],
            "itemCategories": [
                431,
                {
                    "page": [
                        58
                    ],
                    "filter": [
                        581
                    ]
                }
            ],
            "currencies": [
                359,
                {
                    "page": [
                        58
                    ],
                    "filter": [
                        582
                    ]
                }
            ],
            "playerCurrencies": [
                362,
                {
                    "page": [
                        58
                    ],
                    "filter": [
                        583
                    ]
                }
            ],
            "marketplaceApps": [
                167,
                {
                    "page": [
                        58
                    ],
                    "filter": [
                        584
                    ]
                }
            ],
            "marketplaceApp": [
                164,
                {
                    "id": [
                        545,
                        "ID!"
                    ]
                }
            ],
            "myMarketplaceInstallations": [
                174,
                {
                    "page": [
                        58
                    ]
                }
            ],
            "appReleases": [
                160,
                {
                    "marketplaceAppId": [
                        545,
                        "ID!"
                    ]
                }
            ],
            "moduleTokensForPlatform": [
                451,
                {
                    "platformId": [
                        545,
                        "ID!"
                    ]
                }
            ],
            "extensionToken": [
                452,
                {
                    "installationId": [
                        545,
                        "ID!"
                    ]
                }
            ],
            "platformModuleConfigs": [
                450,
                {
                    "platformId": [
                        545,
                        "ID!"
                    ]
                }
            ],
            "entityMetafields": [
                453,
                {
                    "entityType": [
                        1,
                        "String!"
                    ],
                    "entityId": [
                        545,
                        "ID!"
                    ],
                    "filter": [
                        585
                    ]
                }
            ],
            "allowedObjectTypes": [
                459
            ],
            "objectMetadata": [
                456,
                {
                    "objectType": [
                        459,
                        "ObjectType!"
                    ],
                    "objectId": [
                        545,
                        "ID!"
                    ]
                }
            ],
            "objectMetadataBatch": [
                460,
                {
                    "objectType": [
                        459,
                        "ObjectType!"
                    ],
                    "objectIds": [
                        545,
                        "[ID!]!"
                    ]
                }
            ],
            "customFieldDefinitions": [
                462,
                {
                    "objectType": [
                        459,
                        "ObjectType!"
                    ]
                }
            ],
            "customFieldValues": [
                464,
                {
                    "objectType": [
                        459,
                        "ObjectType!"
                    ],
                    "objectId": [
                        545,
                        "ID!"
                    ]
                }
            ],
            "customFieldValuesBatch": [
                465,
                {
                    "objectType": [
                        459,
                        "ObjectType!"
                    ],
                    "objectIds": [
                        545,
                        "[ID!]!"
                    ]
                }
            ],
            "guestMe": [
                94
            ],
            "guestConfiguration": [
                100
            ],
            "guestLinkResolve": [
                95,
                {
                    "token": [
                        1,
                        "String!"
                    ]
                }
            ],
            "appInstallationPublicConfig": [
                84,
                {
                    "appSlug": [
                        1,
                        "String!"
                    ]
                }
            ],
            "appInstallationConfig": [
                84,
                {
                    "appSlug": [
                        1,
                        "String!"
                    ]
                }
            ],
            "appFunctionRead": [
                82,
                {
                    "input": [
                        586,
                        "AppFunctionCallInput!"
                    ]
                }
            ],
            "permissionDefinitions": [
                111
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
            "registrationSeries": [
                268,
                {
                    "id": [
                        545,
                        "ID!"
                    ]
                }
            ],
            "registrationSeriesList": [
                270,
                {
                    "page": [
                        58,
                        "PageInfo!"
                    ]
                }
            ],
            "myActiveRegistrations": [
                272,
                {
                    "seriesId": [
                        545,
                        "ID!"
                    ]
                }
            ],
            "registrationSeriesPlayerEntries": [
                272,
                {
                    "seriesId": [
                        545,
                        "ID!"
                    ],
                    "playerId": [
                        545,
                        "ID!"
                    ]
                }
            ],
            "organizationModeration": [
                454
            ],
            "moderationCheck": [
                455,
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
                545
            ],
            "playerId": [
                545
            ],
            "seasonId": [
                545
            ],
            "__typename": [
                1
            ]
        },
        "OrganizationIdentityProviderInfo": {
            "on_OrganizationIdentityProvider": [
                239
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
                545
            ],
            "name": [
                1
            ],
            "organizationId": [
                545
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
                545
            ],
            "teamStatus": [
                59
            ],
            "memberStatus": [
                257
            ],
            "__typename": [
                1
            ]
        },
        "IdentityProviderPropertyInput": {
            "identityProviderId": [
                545
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
                252
            ],
            "teamId": [
                545
            ],
            "groupId": [
                545
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
                321
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
                321
            ],
            "overrides": [
                561
            ],
            "stepId": [
                545
            ],
            "__typename": [
                1
            ]
        },
        "SimulationContextOverridesInput": {
            "teamCount": [
                81
            ],
            "bestOf": [
                81
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
                81
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
                81
            ],
            "status": [
                204
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
        "JournalFiltersInput": {
            "categories": [
                438
            ],
            "types": [
                1
            ],
            "typePrefix": [
                1
            ],
            "actorType": [
                435
            ],
            "actorId": [
                545
            ],
            "primaryResourceType": [
                1
            ],
            "primaryResourceId": [
                545
            ],
            "severity": [
                439
            ],
            "rootOnly": [
                4
            ],
            "parentEntryId": [
                545
            ],
            "correlationId": [
                545
            ],
            "createdAfter": [
                11
            ],
            "createdBefore": [
                11
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
                568
            ],
            "orderDirection": [
                553
            ],
            "status": [
                569
            ],
            "showNotVisible": [
                4
            ],
            "filterByPlayers": [
                570
            ],
            "venueIds": [
                545
            ],
            "from": [
                11
            ],
            "to": [
                11
            ],
            "tournamentId": [
                545
            ],
            "registrationSeriesId": [
                545
            ],
            "__typename": [
                1
            ]
        },
        "EventsQueryOrderBy": {},
        "EventsQueryStatus": {},
        "EventsQueryPlayerIdWithTeamStatusInput": {
            "playerId": [
                545
            ],
            "reservationStatus": [
                383
            ],
            "memberStatus": [
                366
            ],
            "__typename": [
                1
            ]
        },
        "EventReservationsQueryInput": {
            "filterByRegistrationStatus": [
                383
            ],
            "retrieveOnlyGroupMembersWithStatus": [
                366
            ],
            "filterByPlayerUsernameQuery": [
                1
            ],
            "filterByReservationProperties": [
                511
            ],
            "filterByPlayerProperties": [
                511
            ],
            "filterByPlayerIdentityProviderProperties": [
                556
            ],
            "filterByPlayers": [
                572
            ],
            "filterByGroupStatus": [
                368
            ],
            "__typename": [
                1
            ]
        },
        "EventReservationsQueryPlayerIdWithGroupStatusInput": {
            "playerId": [
                545
            ],
            "memberStatus": [
                366
            ],
            "__typename": [
                1
            ]
        },
        "EventSlotsFilter": {
            "eventIds": [
                545
            ],
            "venueIds": [
                545
            ],
            "from": [
                11
            ],
            "to": [
                11
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
                545
            ],
            "__typename": [
                1
            ]
        },
        "ShopsFilterInput": {
            "ids": [
                545
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
                545
            ],
            "externalIds": [
                1
            ],
            "shopIds": [
                545
            ],
            "__typename": [
                1
            ]
        },
        "PlayerShopProductPurshasesFilterInput": {
            "shopProductIds": [
                545
            ],
            "playerProfileIds": [
                545
            ],
            "shopIds": [
                545
            ],
            "ids": [
                545
            ],
            "__typename": [
                1
            ]
        },
        "ShopProductsFilterInput": {
            "categoryIds": [
                545
            ],
            "ids": [
                545
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
                545
            ],
            "ids": [
                545
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
                545
            ],
            "playerProfileIds": [
                545
            ],
            "__typename": [
                1
            ]
        },
        "ItemCategoriesFilterInput": {
            "ids": [
                545
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
                545
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
                545
            ],
            "playerProfileIds": [
                545
            ],
            "__typename": [
                1
            ]
        },
        "MarketplaceAppsFilterInput": {
            "status": [
                165
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
                545
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
                        545,
                        "ID!"
                    ]
                }
            ],
            "accountIdentityGenerateAccessToken": [
                1,
                {
                    "identityProviderId": [
                        545,
                        "ID!"
                    ],
                    "accountId": [
                        545
                    ]
                }
            ],
            "accountIdentityRefresh": [
                71,
                {
                    "identityProviderId": [
                        545,
                        "ID!"
                    ],
                    "accountId": [
                        545
                    ]
                }
            ],
            "attachOrUpdateIdentityToAccount": [
                71,
                {
                    "identityProviderId": [
                        545,
                        "ID!"
                    ],
                    "token": [
                        1,
                        "String!"
                    ]
                }
            ],
            "generateIdentityLinkUrl": [
                77,
                {
                    "identityProviderId": [
                        545,
                        "ID!"
                    ]
                }
            ],
            "deleteAccountIdentity": [
                4,
                {
                    "identityProviderId": [
                        545,
                        "ID!"
                    ],
                    "accountId": [
                        545
                    ]
                }
            ],
            "updateConfiguration": [
                179,
                {
                    "id": [
                        545,
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
                        545,
                        "ID!"
                    ]
                }
            ],
            "leaderboardRegisterPlayerScore": [
                181,
                {
                    "input": [
                        591,
                        "LeaderboardRegisterPlayerScoreInput!"
                    ]
                }
            ],
            "createLeaderboard": [
                184,
                {
                    "input": [
                        593,
                        "CreateLeaderboardInput!"
                    ]
                }
            ],
            "updateLeaderboard": [
                184,
                {
                    "id": [
                        545,
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
                        545,
                        "ID!"
                    ]
                }
            ],
            "createLeaderboardSeason": [
                187,
                {
                    "leaderboardId": [
                        545,
                        "ID!"
                    ],
                    "input": [
                        596,
                        "CreateLeaderboardSeasonInput!"
                    ]
                }
            ],
            "updateLeaderboardSeason": [
                187,
                {
                    "id": [
                        545,
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
                        545,
                        "ID!"
                    ]
                }
            ],
            "createLeaderboardSeasonBucket": [
                190,
                {
                    "seasonId": [
                        545,
                        "ID!"
                    ],
                    "input": [
                        598,
                        "CreateLeaderboardSeasonBucketInput!"
                    ]
                }
            ],
            "updateLeaderboardSeasonBucket": [
                190,
                {
                    "id": [
                        545,
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
                        545,
                        "ID!"
                    ]
                }
            ],
            "createLeaderboardFeed": [
                221,
                {
                    "input": [
                        600,
                        "CreateLeaderboardFeedInput!"
                    ]
                }
            ],
            "updateLeaderboardFeed": [
                221,
                {
                    "id": [
                        545,
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
                        545,
                        "ID!"
                    ]
                }
            ],
            "reconcileLeaderboardFeed": [
                224,
                {
                    "id": [
                        545,
                        "ID!"
                    ]
                }
            ],
            "updateOrganization": [
                69,
                {
                    "organization": [
                        602,
                        "UpdateOrganizationInput!"
                    ]
                }
            ],
            "createOrganization": [
                69,
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
                        545,
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
                        545,
                        "ID!"
                    ]
                }
            ],
            "setOrganizationMembership": [
                54,
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
                239,
                {
                    "input": [
                        608,
                        "CreateOrganizationIdentityProvider!"
                    ]
                }
            ],
            "updateIdentityProvider": [
                239,
                {
                    "providerId": [
                        545,
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
                        545,
                        "ID!"
                    ]
                }
            ],
            "createOrganizationApp": [
                232,
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
                232,
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
                232,
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
                235,
                {
                    "id": [
                        545,
                        "ID!"
                    ]
                }
            ],
            "createAppRelease": [
                228,
                {
                    "appId": [
                        545,
                        "ID!"
                    ],
                    "input": [
                        634,
                        "CreateAppReleaseInput!"
                    ]
                }
            ],
            "createWebhook": [
                245,
                {
                    "input": [
                        635,
                        "CreateWebhookInput!"
                    ]
                }
            ],
            "updateWebhook": [
                245,
                {
                    "id": [
                        545,
                        "ID!"
                    ],
                    "input": [
                        636,
                        "UpdateWebhookInput!"
                    ]
                }
            ],
            "deleteWebhook": [
                245,
                {
                    "id": [
                        545,
                        "ID!"
                    ]
                }
            ],
            "regenerateWebhookSecret": [
                245,
                {
                    "id": [
                        545,
                        "ID!"
                    ]
                }
            ],
            "setOrganizationAttachedApp": [
                236,
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
                50,
                {
                    "input": [
                        528,
                        "EmailConfigurationInput!"
                    ]
                }
            ],
            "emailTemplateCreate": [
                86,
                {
                    "input": [
                        641,
                        "EmailTemplateCreateInput!"
                    ]
                }
            ],
            "emailTemplateUpdate": [
                86,
                {
                    "id": [
                        545,
                        "ID!"
                    ],
                    "input": [
                        642,
                        "EmailTemplateUpdateInput!"
                    ]
                }
            ],
            "emailTemplateDelete": [
                86,
                {
                    "id": [
                        545,
                        "ID!"
                    ]
                }
            ],
            "createPlayer": [
                72,
                {
                    "input": [
                        643,
                        "CreatePlayerInput!"
                    ]
                }
            ],
            "updatePlayer": [
                72,
                {
                    "input": [
                        645,
                        "UpdatePlayerInput!"
                    ],
                    "id": [
                        545
                    ],
                    "customId": [
                        1
                    ]
                }
            ],
            "createOrUpdateMyPlayerProfile": [
                72,
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
                        545
                    ],
                    "customId": [
                        545
                    ]
                }
            ],
            "createTournament": [
                57,
                {
                    "input": [
                        647,
                        "CreateTournamentInput!"
                    ]
                }
            ],
            "updateTournament": [
                57,
                {
                    "input": [
                        650,
                        "UpdateTournamentInput!"
                    ],
                    "id": [
                        545,
                        "ID!"
                    ]
                }
            ],
            "deleteTournament": [
                4,
                {
                    "id": [
                        545,
                        "ID!"
                    ]
                }
            ],
            "startTournamentStep": [
                4,
                {
                    "stepId": [
                        545,
                        "ID!"
                    ]
                }
            ],
            "createTournamentStep": [
                264,
                {
                    "tournamentId": [
                        545,
                        "ID!"
                    ],
                    "configuration": [
                        518
                    ],
                    "step": [
                        651,
                        "CreateTournamentStepInput!"
                    ]
                }
            ],
            "updateTournamentStep": [
                264,
                {
                    "stepId": [
                        545,
                        "ID!"
                    ],
                    "configuration": [
                        518
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
                        545,
                        "ID!"
                    ]
                }
            ],
            "generateTournamentStep": [
                4,
                {
                    "stepId": [
                        545,
                        "ID!"
                    ],
                    "teamsCount": [
                        81
                    ]
                }
            ],
            "seedTournamentStep": [
                264,
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
                264,
                {
                    "stepId": [
                        545,
                        "ID!"
                    ],
                    "orderedTeamIds": [
                        545,
                        "[ID!]!"
                    ]
                }
            ],
            "updateSeedingPins": [
                264,
                {
                    "stepId": [
                        545,
                        "ID!"
                    ],
                    "pins": [
                        653,
                        "[SeedingPinInput!]!"
                    ]
                }
            ],
            "withdrawTeamFromStep": [
                264,
                {
                    "stepId": [
                        545,
                        "ID!"
                    ],
                    "teamId": [
                        545,
                        "ID!"
                    ]
                }
            ],
            "reseedStep": [
                264,
                {
                    "stepId": [
                        545,
                        "ID!"
                    ]
                }
            ],
            "restartTournamentStep": [
                4,
                {
                    "stepId": [
                        545,
                        "ID!"
                    ]
                }
            ],
            "resetTournamentStepSeeding": [
                4,
                {
                    "stepId": [
                        545,
                        "ID!"
                    ]
                }
            ],
            "resetTournamentStep": [
                4,
                {
                    "stepId": [
                        545,
                        "ID!"
                    ]
                }
            ],
            "updateMatchScores": [
                251,
                {
                    "matchId": [
                        545,
                        "ID!"
                    ],
                    "input": [
                        660,
                        "[UpdateMatchScoreInput!]!"
                    ]
                }
            ],
            "registerCustomTournamentTeams": [
                260,
                {
                    "tournamentId": [
                        545,
                        "ID!"
                    ],
                    "input": [
                        662,
                        "RegisterCustomTeamsInput!"
                    ]
                }
            ],
            "registerTournamentTeam": [
                260,
                {
                    "tournamentId": [
                        545,
                        "ID!"
                    ],
                    "input": [
                        665,
                        "RegisterTournamentTeamInput!"
                    ]
                }
            ],
            "updateTournamentTeam": [
                260,
                {
                    "input": [
                        666,
                        "UpdateTournamentTeamInput!"
                    ],
                    "tournamentId": [
                        545
                    ],
                    "teamId": [
                        545
                    ]
                }
            ],
            "deleteTournamentTeam": [
                4,
                {
                    "tournamentId": [
                        545,
                        "ID!"
                    ]
                }
            ],
            "deleteAnyTournamentTeam": [
                4,
                {
                    "teamId": [
                        545,
                        "ID!"
                    ]
                }
            ],
            "confirmTournamentTeam": [
                260,
                {
                    "teamId": [
                        545,
                        "ID!"
                    ],
                    "confirm": [
                        4,
                        "Boolean!"
                    ]
                }
            ],
            "confirmTournamentAttendance": [
                260,
                {
                    "tournamentId": [
                        545,
                        "ID!"
                    ],
                    "attendance": [
                        4,
                        "Boolean!"
                    ]
                }
            ],
            "updateTournamentTeamStatus": [
                260,
                {
                    "tournamentTeamId": [
                        545,
                        "ID!"
                    ],
                    "status": [
                        59,
                        "TournamentTeamStatus!"
                    ]
                }
            ],
            "inviteTournamentTeamMember": [
                4,
                {
                    "tournamentId": [
                        545,
                        "ID!"
                    ],
                    "playerId": [
                        545,
                        "ID!"
                    ]
                }
            ],
            "answerToTournamentTeamInvite": [
                4,
                {
                    "teamId": [
                        545,
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
                        545,
                        "ID!"
                    ],
                    "playerId": [
                        545,
                        "ID!"
                    ]
                }
            ],
            "tournamentAdminUpsert": [
                284,
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
                354,
                {
                    "input": [
                        669,
                        "OpenPoolCreateMatchInput!"
                    ]
                }
            ],
            "openPoolAddTeams": [
                357,
                {
                    "stepId": [
                        545,
                        "ID!"
                    ],
                    "teamIds": [
                        545,
                        "[ID!]!"
                    ],
                    "groupId": [
                        545
                    ]
                }
            ],
            "openPoolCorrectMatch": [
                354,
                {
                    "matchId": [
                        545,
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
                        545,
                        "ID!"
                    ],
                    "reason": [
                        1
                    ]
                }
            ],
            "openPoolClose": [
                264,
                {
                    "stepId": [
                        545,
                        "ID!"
                    ],
                    "cancelPendingMatches": [
                        4,
                        "Boolean!"
                    ]
                }
            ],
            "openPoolReopen": [
                264,
                {
                    "stepId": [
                        545,
                        "ID!"
                    ]
                }
            ],
            "tournamentTeamMemberAdd": [
                260,
                {
                    "input": [
                        670,
                        "TournamentTeamMemberAddInput!"
                    ]
                }
            ],
            "tournamentTeamMemberRemove": [
                260,
                {
                    "teamId": [
                        545,
                        "ID!"
                    ],
                    "playerId": [
                        545,
                        "ID!"
                    ],
                    "newManagerId": [
                        545
                    ]
                }
            ],
            "createStepRuleSet": [
                303,
                {
                    "tournamentStepId": [
                        545,
                        "ID!"
                    ],
                    "input": [
                        671,
                        "CreateStepRuleSetInput!"
                    ]
                }
            ],
            "applyPresetScript": [
                303,
                {
                    "presetScriptId": [
                        545,
                        "ID!"
                    ],
                    "tournamentStepId": [
                        545,
                        "ID!"
                    ],
                    "parameters": [
                        1
                    ]
                }
            ],
            "applyBuiltinPreset": [
                303,
                {
                    "builtinPresetId": [
                        1,
                        "String!"
                    ],
                    "tournamentStepId": [
                        545,
                        "ID!"
                    ],
                    "parameters": [
                        1
                    ]
                }
            ],
            "duplicateBuiltinPreset": [
                306,
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
                306,
                {
                    "input": [
                        682,
                        "CreatePresetScriptInput!"
                    ]
                }
            ],
            "updatePresetScript": [
                306,
                {
                    "id": [
                        545,
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
                        545,
                        "ID!"
                    ]
                }
            ],
            "setStepWinners": [
                264,
                {
                    "stepId": [
                        545,
                        "ID!"
                    ],
                    "teamIds": [
                        545,
                        "[ID!]!"
                    ]
                }
            ],
            "setTournamentWinners": [
                57,
                {
                    "tournamentId": [
                        545,
                        "ID!"
                    ],
                    "teamIds": [
                        545,
                        "[ID!]!"
                    ]
                }
            ],
            "setStepTeamStatus": [
                4,
                {
                    "stepId": [
                        545,
                        "ID!"
                    ],
                    "teamId": [
                        545,
                        "ID!"
                    ],
                    "status": [
                        204,
                        "TeamScopeStatus!"
                    ]
                }
            ],
            "validateStepRuleSet": [
                342,
                {
                    "stepRuleSetId": [
                        545,
                        "ID!"
                    ]
                }
            ],
            "cancelStepRuleSetValidation": [
                342,
                {
                    "jobId": [
                        545,
                        "ID!"
                    ]
                }
            ],
            "stripeCreatePortalSession": [
                1
            ],
            "platformFileCreate": [
                151,
                {
                    "input": [
                        685,
                        "PlatformCdnFileCreateInput!"
                    ],
                    "platformId": [
                        545
                    ],
                    "templateId": [
                        545
                    ]
                }
            ],
            "platformFilePublish": [
                151,
                {
                    "id": [
                        545,
                        "ID!"
                    ]
                }
            ],
            "platformFileGenerateUploadUrl": [
                154,
                {
                    "id": [
                        545,
                        "ID!"
                    ],
                    "size": [
                        17,
                        "Float!"
                    ]
                }
            ],
            "platformFileValidateFileUpload": [
                151,
                {
                    "id": [
                        545,
                        "ID!"
                    ]
                }
            ],
            "platformFileUpdate": [
                151,
                {
                    "id": [
                        545,
                        "ID!"
                    ],
                    "input": [
                        686,
                        "PlatformFileUpdateInput!"
                    ]
                }
            ],
            "platformFileDelete": [
                595,
                {
                    "id": [
                        545,
                        "ID!"
                    ]
                }
            ],
            "platformCreate": [
                470,
                {
                    "input": [
                        687,
                        "CreatePlatformInput!"
                    ]
                }
            ],
            "platformUpdate": [
                470,
                {
                    "id": [
                        545,
                        "ID!"
                    ],
                    "input": [
                        688,
                        "UpdatePlatformInput!"
                    ]
                }
            ],
            "platformDelete": [
                595,
                {
                    "id": [
                        545,
                        "ID!"
                    ]
                }
            ],
            "platformThemeUpdate": [
                470,
                {
                    "platformId": [
                        545,
                        "ID!"
                    ],
                    "input": [
                        689,
                        "PlatformThemeInput!"
                    ]
                }
            ],
            "platformRegisterCustomDomain": [
                147,
                {
                    "platformId": [
                        545,
                        "ID!"
                    ],
                    "hostname": [
                        1,
                        "String!"
                    ]
                }
            ],
            "platformForceCustomDomainRecheck": [
                147,
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
                471,
                {
                    "input": [
                        692,
                        "CreatePlatformTemplateInput!"
                    ]
                }
            ],
            "platformTemplateUpdate": [
                471,
                {
                    "id": [
                        545,
                        "ID!"
                    ],
                    "input": [
                        693,
                        "UpdatePlatformTemplateInput!"
                    ]
                }
            ],
            "platformTemplateApply": [
                470,
                {
                    "platformTemplateId": [
                        545,
                        "ID!"
                    ],
                    "platformId": [
                        545,
                        "ID!"
                    ]
                }
            ],
            "platformTemplateDelete": [
                595,
                {
                    "id": [
                        545,
                        "ID!"
                    ]
                }
            ],
            "organizationSubscriptionItemsUpdate": [
                595,
                {
                    "items": [
                        694,
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
                498,
                {
                    "organizationSkillRatingId": [
                        545,
                        "ID!"
                    ],
                    "input": [
                        695,
                        "OrganizationSkillRatingsRegisterMatchInput!"
                    ]
                }
            ],
            "organizationSkillRatingCreate": [
                499,
                {
                    "input": [
                        697,
                        "OrganizationSkillRatingCreateInput!"
                    ]
                }
            ],
            "organizationSkillRatingUpdate": [
                499,
                {
                    "id": [
                        545,
                        "ID!"
                    ],
                    "input": [
                        698,
                        "OrganizationSkillRatingUpdateInput!"
                    ]
                }
            ],
            "organizationSkillRatingDelete": [
                595,
                {
                    "id": [
                        545,
                        "ID!"
                    ]
                }
            ],
            "eventCreate": [
                400,
                {
                    "input": [
                        699,
                        "EventCreateInput!"
                    ]
                }
            ],
            "eventUpdate": [
                400,
                {
                    "input": [
                        700,
                        "EventUpdateInput!"
                    ],
                    "id": [
                        545,
                        "ID!"
                    ]
                }
            ],
            "eventDelete": [
                4,
                {
                    "id": [
                        545,
                        "ID!"
                    ]
                }
            ],
            "eventTicketConfigurationCreate": [
                406,
                {
                    "input": [
                        701,
                        "EventTicketConfigurationCreateInput!"
                    ]
                }
            ],
            "eventTicketConfigurationUpdate": [
                406,
                {
                    "ticketConfigurationId": [
                        545,
                        "ID!"
                    ],
                    "input": [
                        702,
                        "EventTicketConfigurationUpdateInput!"
                    ]
                }
            ],
            "eventTicketConfigurationDelete": [
                406,
                {
                    "ticketConfigurationId": [
                        545,
                        "ID!"
                    ]
                }
            ],
            "eventReservationUpdateStatus": [
                382,
                {
                    "reservationId": [
                        545,
                        "ID!"
                    ],
                    "status": [
                        383,
                        "EventReservationStatus!"
                    ],
                    "confirmPaymentRefundOrCancel": [
                        4
                    ],
                    "refundPayment": [
                        4
                    ],
                    "ticketsToReserve": [
                        703
                    ]
                }
            ],
            "eventReservationConfirmPresence": [
                382,
                {
                    "eventId": [
                        545,
                        "ID!"
                    ],
                    "confirmed": [
                        4,
                        "Boolean!"
                    ]
                }
            ],
            "eventReservationValidateAndPay": [
                388,
                {
                    "eventId": [
                        545,
                        "ID!"
                    ],
                    "options": [
                        705,
                        "EventReservationValidateAndPayInput!"
                    ],
                    "ticketConfigurations": [
                        707,
                        "[EventReservationTicketConfigurationInput!]"
                    ]
                }
            ],
            "eventReservationCreate": [
                382,
                {
                    "eventId": [
                        545,
                        "ID!"
                    ],
                    "groupName": [
                        1
                    ]
                }
            ],
            "eventReservationUpdateTickets": [
                382,
                {
                    "reservationId": [
                        545,
                        "ID!"
                    ],
                    "input": [
                        708,
                        "EventReservationUpdateTicketsInput!"
                    ]
                }
            ],
            "eventReservationStartRegistrationSession": [
                382,
                {
                    "eventId": [
                        545,
                        "ID!"
                    ],
                    "input": [
                        703,
                        "EventReservationRegisterTicketsInput!"
                    ],
                    "replaceReservationId": [
                        545
                    ]
                }
            ],
            "eventReservationCancel": [
                382,
                {
                    "reservationId": [
                        545,
                        "ID!"
                    ]
                }
            ],
            "eventVenueRequestImageUpdate": [
                154,
                {
                    "id": [
                        545,
                        "ID!"
                    ],
                    "size": [
                        17,
                        "Float!"
                    ]
                }
            ],
            "eventVenueValidateImage": [
                416,
                {
                    "id": [
                        545,
                        "ID!"
                    ]
                }
            ],
            "eventVenueCreate": [
                416,
                {
                    "input": [
                        709,
                        "EventVenueCreateInput!"
                    ]
                }
            ],
            "eventVenueUpdate": [
                416,
                {
                    "id": [
                        545,
                        "ID!"
                    ],
                    "input": [
                        710,
                        "EventVenueUpdateInput!"
                    ]
                }
            ],
            "eventVenueDelete": [
                416,
                {
                    "id": [
                        545,
                        "ID!"
                    ]
                }
            ],
            "eventVenueSeatsUpdate": [
                376,
                {
                    "venueId": [
                        545,
                        "ID!"
                    ],
                    "input": [
                        711,
                        "EventVenueSeatsUpdateInput!"
                    ]
                }
            ],
            "eventVenueSeatTypeCreate": [
                412,
                {
                    "venueId": [
                        545,
                        "ID!"
                    ],
                    "input": [
                        714,
                        "EventVenueSeatTypeCreateInput!"
                    ]
                }
            ],
            "eventVenueSeatTypeUpdate": [
                412,
                {
                    "id": [
                        545,
                        "ID!"
                    ],
                    "input": [
                        715,
                        "EventVenueSeatTypeUpdateInput!"
                    ]
                }
            ],
            "eventVenueSeatTypeDelete": [
                412,
                {
                    "id": [
                        545,
                        "ID!"
                    ]
                }
            ],
            "eventCalendarGenerate": [
                410,
                {
                    "input": [
                        716,
                        "EventCalendarGenerateInput!"
                    ]
                }
            ],
            "eventWaitlistJoin": [
                419,
                {
                    "ticketConfigurationId": [
                        545,
                        "ID!"
                    ],
                    "quantity": [
                        81,
                        "Int!"
                    ],
                    "replaceEntryId": [
                        545
                    ]
                }
            ],
            "eventWaitlistLeave": [
                419,
                {
                    "entryId": [
                        545,
                        "ID!"
                    ]
                }
            ],
            "eventWaitlistRemoveEntry": [
                419,
                {
                    "entryId": [
                        545,
                        "ID!"
                    ]
                }
            ],
            "eventReservationChangeTickets": [
                382,
                {
                    "reservationId": [
                        545,
                        "ID!"
                    ],
                    "input": [
                        720,
                        "EventReservationChangeTicketsInput!"
                    ]
                }
            ],
            "eventReservationReleaseTickets": [
                382,
                {
                    "reservationId": [
                        545,
                        "ID!"
                    ],
                    "reservationTicketIds": [
                        545,
                        "[ID!]!"
                    ]
                }
            ],
            "organizationPaymentCollectionConfigurationCreateOrUpdateAccount": [
                1
            ],
            "userGroupInvite": [
                365,
                {
                    "groupId": [
                        545,
                        "ID!"
                    ],
                    "playerId": [
                        545,
                        "ID!"
                    ]
                }
            ],
            "userGroupUpdateName": [
                367,
                {
                    "groupId": [
                        545,
                        "ID!"
                    ],
                    "name": [
                        1
                    ]
                }
            ],
            "userGroupUpdateInvite": [
                365,
                {
                    "groupId": [
                        545,
                        "ID!"
                    ],
                    "status": [
                        366,
                        "UserGroupMemberStatus!"
                    ]
                }
            ],
            "userGroupDeleteInvite": [
                365,
                {
                    "groupId": [
                        545,
                        "ID!"
                    ],
                    "playerId": [
                        545
                    ]
                }
            ],
            "shopCreate": [
                491,
                {
                    "input": [
                        721,
                        "ShopCreateInput!"
                    ]
                }
            ],
            "shopUpdate": [
                491,
                {
                    "id": [
                        545,
                        "ID!"
                    ],
                    "input": [
                        722,
                        "ShopUpdateInput!"
                    ]
                }
            ],
            "shopDelete": [
                491,
                {
                    "id": [
                        545,
                        "ID!"
                    ]
                }
            ],
            "shopCategoryCreate": [
                481,
                {
                    "input": [
                        723,
                        "ShopCategoryCreateInput!"
                    ]
                }
            ],
            "shopCategoryUpdate": [
                481,
                {
                    "id": [
                        545,
                        "ID!"
                    ],
                    "input": [
                        724,
                        "ShopCategoryUpdateInput!"
                    ]
                }
            ],
            "shopCategoryDelete": [
                481,
                {
                    "id": [
                        545,
                        "ID!"
                    ]
                }
            ],
            "playerShopProductPurshase": [
                477,
                {
                    "shopId": [
                        545,
                        "ID!"
                    ],
                    "paymentConfig": [
                        725
                    ],
                    "input": [
                        726,
                        "PlayerShopProductPurshaseInput!"
                    ]
                }
            ],
            "shopProductCreate": [
                488,
                {
                    "shopId": [
                        545,
                        "ID!"
                    ],
                    "input": [
                        728,
                        "ShopProductCreateInput!"
                    ]
                }
            ],
            "shopProductUpdate": [
                488,
                {
                    "productId": [
                        545,
                        "ID!"
                    ],
                    "input": [
                        729,
                        "ShopProductUpdateInput!"
                    ]
                }
            ],
            "shopProductDelete": [
                488,
                {
                    "productId": [
                        545,
                        "ID!"
                    ]
                }
            ],
            "itemCreate": [
                424,
                {
                    "input": [
                        730,
                        "ItemCreateInput!"
                    ]
                }
            ],
            "itemUpdate": [
                424,
                {
                    "id": [
                        545,
                        "ID!"
                    ],
                    "input": [
                        731,
                        "ItemUpdateInput!"
                    ]
                }
            ],
            "itemDelete": [
                424,
                {
                    "id": [
                        545,
                        "ID!"
                    ]
                }
            ],
            "playerItemsUpdate": [
                427,
                {
                    "playerId": [
                        545,
                        "ID!"
                    ],
                    "input": [
                        732,
                        "PlayerItemsUpdateInput!"
                    ]
                }
            ],
            "itemCategoryCreate": [
                430,
                {
                    "input": [
                        734,
                        "ItemCategoryCreateInput!"
                    ]
                }
            ],
            "itemCategoryUpdate": [
                430,
                {
                    "id": [
                        545,
                        "ID!"
                    ],
                    "input": [
                        735,
                        "ItemCategoryUpdateInput!"
                    ]
                }
            ],
            "itemCategoryDelete": [
                430,
                {
                    "id": [
                        545,
                        "ID!"
                    ]
                }
            ],
            "playerItemsTransfer": [
                433,
                {
                    "input": [
                        736,
                        "PlayerItemsTransferInput!"
                    ]
                }
            ],
            "currencyCreate": [
                358,
                {
                    "input": [
                        738,
                        "CurrencyCreateInput!"
                    ]
                }
            ],
            "currencyUpdate": [
                358,
                {
                    "id": [
                        545,
                        "ID!"
                    ],
                    "input": [
                        739,
                        "CurrencyUpdateInput!"
                    ]
                }
            ],
            "currencyDelete": [
                358,
                {
                    "id": [
                        545,
                        "ID!"
                    ]
                }
            ],
            "playerCurrencyUpdate": [
                361,
                {
                    "playerId": [
                        545,
                        "ID!"
                    ],
                    "input": [
                        740,
                        "[PlayerCurrencyUpdateInput!]!"
                    ]
                }
            ],
            "publishMarketplaceApp": [
                164,
                {
                    "input": [
                        742,
                        "PublishMarketplaceAppInput!"
                    ]
                }
            ],
            "updateMarketplaceApp": [
                164,
                {
                    "id": [
                        545,
                        "ID!"
                    ],
                    "input": [
                        743,
                        "UpdateMarketplaceAppInput!"
                    ]
                }
            ],
            "installMarketplaceApp": [
                172,
                {
                    "input": [
                        744,
                        "InstallMarketplaceAppInput!"
                    ]
                }
            ],
            "uninstallMarketplaceApp": [
                4,
                {
                    "marketplaceAppId": [
                        545,
                        "ID!"
                    ]
                }
            ],
            "submitMarketplaceAppReview": [
                169,
                {
                    "input": [
                        745,
                        "SubmitMarketplaceAppReviewInput!"
                    ]
                }
            ],
            "setMarketplaceAppPricing": [
                177,
                {
                    "input": [
                        746,
                        "SetMarketplaceAppPricingInput!"
                    ]
                }
            ],
            "createMarketplaceCheckout": [
                1,
                {
                    "input": [
                        747,
                        "CreateMarketplaceCheckoutInput!"
                    ]
                }
            ],
            "appCreateRelease": [
                162,
                {
                    "marketplaceAppId": [
                        545,
                        "ID!"
                    ],
                    "input": [
                        748,
                        "AppCreateReleaseInput!"
                    ]
                }
            ],
            "appFinalizeRelease": [
                163,
                {
                    "releaseId": [
                        545,
                        "ID!"
                    ]
                }
            ],
            "appPublishRelease": [
                160,
                {
                    "releaseId": [
                        545,
                        "ID!"
                    ]
                }
            ],
            "platformModuleConfigSet": [
                450,
                {
                    "input": [
                        750,
                        "PlatformModuleConfigSetInput!"
                    ]
                }
            ],
            "platformModuleConfigDelete": [
                4,
                {
                    "input": [
                        752,
                        "PlatformModuleConfigDeleteInput!"
                    ]
                }
            ],
            "entityMetafieldSet": [
                453,
                {
                    "input": [
                        753,
                        "SetEntityMetafieldInput!"
                    ]
                }
            ],
            "entityMetafieldDelete": [
                4,
                {
                    "input": [
                        754,
                        "DeleteEntityMetafieldInput!"
                    ]
                }
            ],
            "setObjectMetadata": [
                456,
                {
                    "input": [
                        755,
                        "SetObjectMetadataInput!"
                    ]
                }
            ],
            "removeObjectMetadata": [
                4,
                {
                    "input": [
                        757,
                        "RemoveObjectMetadataInput!"
                    ]
                }
            ],
            "createCustomFieldDefinition": [
                462,
                {
                    "input": [
                        758,
                        "CreateCustomFieldDefinitionInput!"
                    ]
                }
            ],
            "updateCustomFieldDefinition": [
                462,
                {
                    "id": [
                        545,
                        "ID!"
                    ],
                    "input": [
                        760,
                        "UpdateCustomFieldDefinitionInput!"
                    ]
                }
            ],
            "deleteCustomFieldDefinition": [
                4,
                {
                    "id": [
                        545,
                        "ID!"
                    ]
                }
            ],
            "reorderCustomFieldDefinitions": [
                462,
                {
                    "objectType": [
                        459,
                        "ObjectType!"
                    ],
                    "orderedIds": [
                        545,
                        "[ID!]!"
                    ]
                }
            ],
            "setCustomFieldValues": [
                464,
                {
                    "input": [
                        761,
                        "SetCustomFieldValuesInput!"
                    ]
                }
            ],
            "appInstallationPin": [
                172,
                {
                    "input": [
                        763,
                        "AppInstallationPinInput!"
                    ]
                }
            ],
            "appFunctionsSetEnabled": [
                172,
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
                89,
                {
                    "input": [
                        764,
                        "GuestWardCreateInput!"
                    ]
                }
            ],
            "guestWardRemove": [
                4,
                {
                    "wardPlayerId": [
                        545,
                        "ID!"
                    ]
                }
            ],
            "guestProfileCreate": [
                98,
                {
                    "input": [
                        765,
                        "GuestProfileCreateInput!"
                    ]
                }
            ],
            "guestProfileUpdate": [
                89,
                {
                    "playerId": [
                        545,
                        "ID!"
                    ],
                    "input": [
                        766,
                        "GuestProfileUpdateInput!"
                    ]
                }
            ],
            "guestGuardianLinkCreate": [
                99,
                {
                    "guardianPlayerId": [
                        545,
                        "ID!"
                    ],
                    "wardPlayerId": [
                        545,
                        "ID!"
                    ]
                }
            ],
            "guestGuardianLinkDelete": [
                4,
                {
                    "id": [
                        545,
                        "ID!"
                    ]
                }
            ],
            "guestConfigurationUpdate": [
                100,
                {
                    "input": [
                        767,
                        "GuestConfigurationInput!"
                    ]
                }
            ],
            "guestLinkExchange": [
                92,
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
                97,
                {
                    "input": [
                        768,
                        "GuestLinkCreateInput!"
                    ]
                }
            ],
            "guestLinkRevoke": [
                81,
                {
                    "input": [
                        770,
                        "GuestLinkRevokeInput!"
                    ]
                }
            ],
            "guestSessionsRevoke": [
                81,
                {
                    "playerId": [
                        545,
                        "ID!"
                    ]
                }
            ],
            "guestEnter": [
                92,
                {
                    "input": [
                        771,
                        "GuestEnterInput!"
                    ]
                }
            ],
            "appInstallationConfigSet": [
                84,
                {
                    "appSlug": [
                        1,
                        "String!"
                    ],
                    "values": [
                        772,
                        "[AppConfigValueInput!]!"
                    ]
                }
            ],
            "appFunctionCall": [
                82,
                {
                    "input": [
                        586,
                        "AppFunctionCallInput!"
                    ]
                }
            ],
            "customPermissionCreate": [
                111,
                {
                    "input": [
                        773,
                        "CustomPermissionInput!"
                    ]
                }
            ],
            "customPermissionUpdate": [
                111,
                {
                    "id": [
                        1,
                        "String!"
                    ],
                    "input": [
                        774,
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
                268,
                {
                    "input": [
                        775,
                        "RegistrationSeriesCreateInput!"
                    ]
                }
            ],
            "registrationSeriesUpdate": [
                268,
                {
                    "id": [
                        545,
                        "ID!"
                    ],
                    "input": [
                        776,
                        "RegistrationSeriesUpdateInput!"
                    ]
                }
            ],
            "registrationSeriesDelete": [
                4,
                {
                    "id": [
                        545,
                        "ID!"
                    ]
                }
            ],
            "registrationSeriesAssign": [
                4,
                {
                    "seriesId": [
                        545
                    ],
                    "eventIds": [
                        545,
                        "[ID!]"
                    ],
                    "tournamentIds": [
                        545,
                        "[ID!]"
                    ]
                }
            ],
            "organizationModerationUpdate": [
                454,
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
                31
            ],
            "stepConfiguration": [
                518
            ],
            "tournamentConfiguration": [
                527
            ],
            "__typename": [
                1
            ]
        },
        "LeaderboardRegisterPlayerScoreInput": {
            "leaderboardId": [
                545
            ],
            "playerId": [
                545
            ],
            "score": [
                17
            ],
            "mode": [
                592
            ],
            "seasonId": [
                545
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
                11
            ],
            "end": [
                11
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
                11
            ],
            "end": [
                11
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
                191
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
                191
            ],
            "__typename": [
                1
            ]
        },
        "CreateLeaderboardFeedInput": {
            "leaderboardId": [
                545
            ],
            "tournamentId": [
                545
            ],
            "stepId": [
                545
            ],
            "seasonId": [
                545
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
                545
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
                510
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
                509
            ],
            "__typename": [
                1
            ]
        },
        "SetOrganizationMembershipInput": {
            "userId": [
                545
            ],
            "email": [
                76
            ],
            "permissions": [
                509
            ],
            "groupId": [
                545
            ],
            "__typename": [
                1
            ]
        },
        "DeleteOrganizationMembershipInput": {
            "userId": [
                545
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
                545
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
                508
            ],
            "issuer": [
                1
            ],
            "providerType": [
                242
            ],
            "clientId": [
                1
            ],
            "clientSecret": [
                1
            ],
            "tokenEndpointAuthMethod": [
                243
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
                508
            ],
            "issuer": [
                1
            ],
            "providerType": [
                242
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
            "wellPlayedAccountLogin": [
                4
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
            "wellPlayedAccountLogin": [
                4
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
                53
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
                120
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
                81
            ],
            "maxHeight": [
                81
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
                115
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
                85
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
                81
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
                122
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
                81
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
                139
            ],
            "runAs": [
                140
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
                131
            ],
            "readOnly": [
                4
            ],
            "cacheSeconds": [
                81
            ],
            "hookPoint": [
                132
            ],
            "onError": [
                133
            ],
            "timeoutMs": [
                81
            ],
            "events": [
                53
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
                134
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
                53
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
                53
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
                509
            ],
            "groupId": [
                545
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
                49
            ],
            "playerIds": [
                545
            ],
            "variables": [
                511
            ],
            "__typename": [
                1
            ]
        },
        "EmailSendFromCustomInput": {
            "emailField": [
                523
            ],
            "playerIds": [
                545
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
                49
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
                49
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
                545
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
                545
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
                11
            ],
            "endAt": [
                11
            ],
            "startRegistrationsAt": [
                11
            ],
            "endRegistrationsAt": [
                11
            ],
            "visibleAt": [
                11
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
                545
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
                31
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
                46
            ],
            "registrationConditions": [
                526
            ],
            "customFields": [
                510
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
                11
            ],
            "endAt": [
                11
            ],
            "startRegistrationsAt": [
                11
            ],
            "endRegistrationsAt": [
                11
            ],
            "visibleAt": [
                11
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
                265
            ],
            "properties": [
                511
            ],
            "__typename": [
                1
            ]
        },
        "SeedStepInput": {
            "stepId": [
                545
            ],
            "orderedTeamIds": [
                545
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
                545
            ],
            "groupId": [
                545
            ],
            "gameId": [
                545
            ],
            "slotIndex": [
                81
            ],
            "__typename": [
                1
            ]
        },
        "SeedStepLegacyInput": {
            "stepId": [
                545
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
                545
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
                545
            ],
            "teams": [
                545
            ],
            "__typename": [
                1
            ]
        },
        "UpdateMatchScoreInput": {
            "teamId": [
                545
            ],
            "variables": [
                661
            ],
            "forcedScoreValue": [
                17
            ],
            "status": [
                281
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
                511
            ],
            "fromExistingTeamId": [
                545
            ],
            "members": [
                664
            ],
            "status": [
                59
            ],
            "__typename": [
                1
            ]
        },
        "CustomTeamMemberInput": {
            "playerId": [
                545
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
                511
            ],
            "fromExistingTeamId": [
                545
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
                511
            ],
            "__typename": [
                1
            ]
        },
        "TournamentAdminUpsertInput": {
            "tournamentId": [
                545
            ],
            "accountId": [
                545
            ],
            "permissions": [
                285
            ],
            "__typename": [
                1
            ]
        },
        "TournamentAdminDeleteInput": {
            "tournamentId": [
                545
            ],
            "accountId": [
                545
            ],
            "__typename": [
                1
            ]
        },
        "OpenPoolCreateMatchInput": {
            "stepId": [
                545
            ],
            "teamIds": [
                545
            ],
            "groupId": [
                545
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
                545
            ],
            "playerId": [
                545
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
                294
            ],
            "formula": [
                1
            ],
            "winPoints": [
                81
            ],
            "lossPoints": [
                81
            ],
            "drawPoints": [
                81
            ],
            "forfeitPoints": [
                81
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
                81
            ],
            "type": [
                291
            ],
            "formula": [
                1
            ],
            "sortOrder": [
                292
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
                81
            ],
            "triggerType": [
                199
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
                289
            ],
            "__typename": [
                1
            ]
        },
        "RuleActionInput": {
            "type": [
                287
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
                545
            ],
            "sourceRelative": [
                302
            ],
            "dataSource": [
                201
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
                300
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
                81
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
                81
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
                81
            ],
            "teamSlots": [
                81
            ],
            "bestOf": [
                81
            ],
            "onWinTarget": [
                1
            ],
            "onWinSourceSlot": [
                81
            ],
            "onWinTargetSlot": [
                81
            ],
            "onLossTarget": [
                1
            ],
            "onLossSourceSlot": [
                81
            ],
            "onLossTargetSlot": [
                81
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
                305
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
        "PlatformCdnFileCreateInput": {
            "name": [
                1
            ],
            "type": [
                152
            ],
            "config": [
                530
            ],
            "__typename": [
                1
            ]
        },
        "PlatformFileUpdateInput": {
            "config": [
                530
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
                540
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
                540
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
                690
            ],
            "sections": [
                691
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
                155
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
                155
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
                545
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
                696
            ],
            "__typename": [
                1
            ]
        },
        "OrganizationSkillRatingsRegisterMatchTeamInput": {
            "players": [
                545
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
                500
            ],
            "configuration": [
                544
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
                500
            ],
            "configuration": [
                544
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
                11
            ],
            "endAt": [
                11
            ],
            "startRegistrationsAt": [
                11
            ],
            "endRegistrationsAt": [
                11
            ],
            "visibleAt": [
                11
            ],
            "configuration": [
                536
            ],
            "eventVenueId": [
                545
            ],
            "tournamentId": [
                545
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
                11
            ],
            "endAt": [
                11
            ],
            "startRegistrationsAt": [
                11
            ],
            "endRegistrationsAt": [
                11
            ],
            "visibleAt": [
                11
            ],
            "configuration": [
                536
            ],
            "eventVenueId": [
                545
            ],
            "tournamentId": [
                545
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
                407
            ],
            "maxCount": [
                17
            ],
            "buyable": [
                4
            ],
            "eventId": [
                545
            ],
            "seatTypeId": [
                545
            ],
            "configuration": [
                537
            ],
            "startsAt": [
                11
            ],
            "endsAt": [
                11
            ],
            "stateReason": [
                1
            ],
            "tournamentId": [
                545
            ],
            "state": [
                408
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
                407
            ],
            "maxCount": [
                17
            ],
            "buyable": [
                4
            ],
            "seatTypeId": [
                545
            ],
            "configuration": [
                537
            ],
            "startsAt": [
                11
            ],
            "endsAt": [
                11
            ],
            "stateReason": [
                1
            ],
            "tournamentId": [
                545
            ],
            "state": [
                408
            ],
            "__typename": [
                1
            ]
        },
        "EventReservationRegisterTicketsInput": {
            "tickets": [
                704
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
                545
            ],
            "quantity": [
                17
            ],
            "reservedSeats": [
                545
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
                706
            ],
            "__typename": [
                1
            ]
        },
        "StripeUiMode": {},
        "EventReservationTicketConfigurationInput": {
            "ticketId": [
                545
            ],
            "customFields": [
                511
            ],
            "__typename": [
                1
            ]
        },
        "EventReservationUpdateTicketsInput": {
            "ticketIdsToRelease": [
                545
            ],
            "ticketIdsToAdd": [
                704
            ],
            "ticketConfigurations": [
                707
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
                712
            ],
            "createSeats": [
                713
            ],
            "deleteSeats": [
                545
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
                533
            ],
            "seatTypeId": [
                545
            ],
            "id": [
                545
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
                533
            ],
            "seatTypeId": [
                545
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
                538
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
                538
            ],
            "__typename": [
                1
            ]
        },
        "EventCalendarGenerateInput": {
            "days": [
                717
            ],
            "slots": [
                718
            ],
            "event": [
                719
            ],
            "registrationSeriesId": [
                545
            ],
            "__typename": [
                1
            ]
        },
        "EventCalendarDayInput": {
            "venueId": [
                545
            ],
            "date": [
                1
            ],
            "tournamentId": [
                545
            ],
            "slots": [
                718
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
                81
            ],
            "durationMinutes": [
                81
            ],
            "maxCount": [
                81
            ],
            "price": [
                81
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
                536
            ],
            "startRegistrationsAt": [
                11
            ],
            "endRegistrationsAt": [
                11
            ],
            "visibleAt": [
                11
            ],
            "__typename": [
                1
            ]
        },
        "EventReservationChangeTicketsInput": {
            "targetEventId": [
                545
            ],
            "tickets": [
                704
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
                511
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
                511
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
                511
            ],
            "shopId": [
                545
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
                511
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
                706
            ],
            "__typename": [
                1
            ]
        },
        "PlayerShopProductPurshaseInput": {
            "items": [
                727
            ],
            "__typename": [
                1
            ]
        },
        "PlayerShopProductPurshaseItemInput": {
            "shopProductId": [
                545
            ],
            "quantity": [
                81
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
                545
            ],
            "price": [
                17
            ],
            "configuration": [
                541
            ],
            "metadata": [
                511
            ],
            "visibleAt": [
                11
            ],
            "currency": [
                407
            ],
            "items": [
                543
            ],
            "currencyPrices": [
                542
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
                545
            ],
            "price": [
                17
            ],
            "configuration": [
                541
            ],
            "metadata": [
                511
            ],
            "visibleAt": [
                11
            ],
            "currency": [
                407
            ],
            "items": [
                543
            ],
            "currencyPrices": [
                542
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
                511
            ],
            "categoryId": [
                545
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
                511
            ],
            "categoryId": [
                545
            ],
            "__typename": [
                1
            ]
        },
        "PlayerItemsUpdateInput": {
            "items": [
                733
            ],
            "__typename": [
                1
            ]
        },
        "PlayerItemsUpdateItemInput": {
            "itemId": [
                545
            ],
            "set": [
                81
            ],
            "add": [
                81
            ],
            "remove": [
                81
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
                511
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
                511
            ],
            "__typename": [
                1
            ]
        },
        "PlayerItemsTransferInput": {
            "fromPlayerId": [
                545
            ],
            "toPlayerId": [
                545
            ],
            "items": [
                737
            ],
            "__typename": [
                1
            ]
        },
        "PlayerItemsTransferItemInput": {
            "itemId": [
                545
            ],
            "quantity": [
                81
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
                511
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
                511
            ],
            "__typename": [
                1
            ]
        },
        "PlayerCurrencyUpdateInput": {
            "items": [
                741
            ],
            "__typename": [
                1
            ]
        },
        "PlayerCurrencyUpdateItemInput": {
            "currencyId": [
                545
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
                545
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
                166
            ],
            "allowedOrganizationIds": [
                545
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
                166
            ],
            "allowedOrganizationIds": [
                545
            ],
            "__typename": [
                1
            ]
        },
        "InstallMarketplaceAppInput": {
            "marketplaceAppId": [
                545
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
                545
            ],
            "rating": [
                81
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
                545
            ],
            "type": [
                178
            ],
            "priceAmountCents": [
                81
            ],
            "currency": [
                1
            ],
            "trialDays": [
                81
            ],
            "__typename": [
                1
            ]
        },
        "CreateMarketplaceCheckoutInput": {
            "marketplaceAppId": [
                545
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
                81
            ],
            "moduleBundleSize": [
                81
            ],
            "files": [
                749
            ],
            "__typename": [
                1
            ]
        },
        "AppReleaseFileInput": {
            "kind": [
                157
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
                545
            ],
            "marketplaceAppId": [
                545
            ],
            "moduleName": [
                1
            ],
            "props": [
                751
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
                545
            ],
            "marketplaceAppId": [
                545
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
                545
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
                545
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
                459
            ],
            "objectId": [
                545
            ],
            "entries": [
                756
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
                457
            ],
            "visibility": [
                458
            ],
            "__typename": [
                1
            ]
        },
        "RemoveObjectMetadataInput": {
            "objectType": [
                459
            ],
            "objectId": [
                545
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
                459
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
                463
            ],
            "required": [
                4
            ],
            "unique": [
                4
            ],
            "order": [
                81
            ],
            "visibility": [
                20
            ],
            "editability": [
                21
            ],
            "options": [
                759
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
                81
            ],
            "visibility": [
                20
            ],
            "editability": [
                21
            ],
            "options": [
                759
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
                459
            ],
            "objectId": [
                545
            ],
            "fields": [
                762
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
                76
            ],
            "firstName": [
                1
            ],
            "lastName": [
                1
            ],
            "origin": [
                90
            ],
            "guardianPlayerId": [
                545
            ],
            "__typename": [
                1
            ]
        },
        "GuestProfileUpdateInput": {
            "email": [
                76
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
                101
            ],
            "sessionTtlMinutes": [
                81
            ],
            "maxWardsPerGuardian": [
                81
            ],
            "__typename": [
                1
            ]
        },
        "GuestLinkCreateInput": {
            "playerId": [
                545
            ],
            "purpose": [
                1
            ],
            "expiresAt": [
                11
            ],
            "maxUses": [
                769
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
                545
            ],
            "playerId": [
                545
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
                76
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
                81
            ],
            "maxActiveWaitlistEntries": [
                81
            ],
            "allowWaitlistWhileRegistered": [
                4
            ],
            "leaveWaitlistsOnRegistration": [
                4
            ],
            "releasePolicy": [
                269
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
                81
            ],
            "maxActiveWaitlistEntries": [
                81
            ],
            "allowWaitlistWhileRegistered": [
                4
            ],
            "leaveWaitlistsOnRegistration": [
                4
            ],
            "releasePolicy": [
                269
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
                342,
                {
                    "jobId": [
                        545,
                        "ID!"
                    ]
                }
            ],
            "validationEvents": [
                344,
                {
                    "jobId": [
                        545,
                        "ID!"
                    ]
                }
            ],
            "journalEntryAdded": [
                437,
                {
                    "filters": [
                        566
                    ]
                }
            ],
            "presenceUserConnected": [
                474
            ],
            "presenceUserDisconnected": [
                476
            ],
            "__typename": [
                1
            ]
        }
    }
}