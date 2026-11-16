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
        82,
        92,
        98,
        101,
        107,
        110,
        115,
        120,
        123,
        127,
        131,
        144,
        145,
        154,
        156,
        158,
        159,
        164,
        166,
        169,
        175,
        180,
        188,
        192,
        196,
        198,
        202,
        204,
        206,
        208,
        209,
        211,
        217,
        219,
        222,
        225,
        228,
        230,
        232,
        235,
        238,
        240,
        241,
        244,
        247,
        252,
        254,
        258,
        260,
        262,
        263,
        264,
        277,
        279,
        291,
        292,
        293,
        303,
        310,
        323,
        334,
        337,
        338,
        349,
        356,
        361,
        368,
        369,
        370,
        374,
        398,
        411,
        413,
        460,
        461,
        462,
        472,
        475,
        476,
        495,
        498,
        544,
        545,
        592
    ],
    "types": {
        "JournalPayload": {
            "_typename": [
                1
            ],
            "on_RuleEngineAdvancementRuleFiredPayload": [
                153
            ],
            "on_RuleEngineCrossStepTransferredPayload": [
                155
            ],
            "on_RuleEngineEffectAdvancePayload": [
                157
            ],
            "on_RuleEngineEffectCreateGroupPayload": [
                160
            ],
            "on_RuleEngineEffectEliminatePayload": [
                161
            ],
            "on_RuleEngineEffectEmitSeedingPinPayload": [
                162
            ],
            "on_RuleEngineEffectEndStepPayload": [
                163
            ],
            "on_RuleEngineEffectSetMetadataPayload": [
                165
            ],
            "on_RuleEngineGenerationScriptRanPayload": [
                167
            ],
            "on_RuleEngineManualOverridePayload": [
                168
            ],
            "on_TournamentsStepResetPayload": [
                171
            ],
            "on_TournamentsStepGeneratedPayload": [
                172
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
                341
            ],
            "on_PlayerActorContext": [
                342
            ],
            "on_SystemActorContext": [
                343
            ],
            "on_MarketplaceModuleActorContext": [
                344
            ],
            "on_ApiClientActorContext": [
                345
            ],
            "on_WebhookCallbackActorContext": [
                346
            ],
            "on_SimulationActorContext": [
                347
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
            "teams": [
                184,
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
                187
            ],
            "createdBy": [
                76
            ],
            "myTeam": [
                183
            ],
            "teamScores": [
                186
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
                80
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
                82
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
        "Int": {},
        "LeaderboardSeasonBucketScores": {
            "edges": [
                84
            ],
            "nodes": [
                81
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
                81
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
                87
            ],
            "nodes": [
                85
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
                85
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
                90
            ],
            "nodes": [
                88
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
                88
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
                92
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
                94
            ],
            "nodes": [
                91
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
                91
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
                98
            ],
            "validation_errors": [
                96
            ],
            "validation_records": [
                95
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
                99
            ],
            "ssl": [
                97
            ],
            "status": [
                101
            ],
            "verification_errors": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "CustomDomainStatus": {},
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
                104
            ],
            "nodes": [
                102
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
                102
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
                107
            ],
            "requirements": [
                105
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
                110
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
                108
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
                109
            ],
            "events": [
                111
            ],
            "__typename": [
                1
            ]
        },
        "ExtensionPointSizeModel": {
            "maxWidth": [
                82
            ],
            "maxHeight": [
                82
            ],
            "__typename": [
                1
            ]
        },
        "ExtensionPointModel": {
            "type": [
                115
            ],
            "label": [
                1
            ],
            "activePages": [
                1
            ],
            "size": [
                113
            ],
            "__typename": [
                1
            ]
        },
        "ExtensionPointType": {},
        "AppManifestModel": {
            "version": [
                1
            ],
            "permissions": [
                1
            ],
            "extensions": [
                114
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
                112
            ],
            "extensionCdnPath": [
                1
            ],
            "moduleCdnPath": [
                1
            ],
            "__typename": [
                1
            ]
        },
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
                117
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
                120
            ],
            "updatedAt": [
                12
            ],
            "createdAt": [
                12
            ],
            "config": [
                118
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
                121
            ],
            "url": [
                123
            ],
            "__typename": [
                1
            ]
        },
        "URL": {},
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
                124
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
                127
            ],
            "manifest": [
                116
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
                125
            ],
            "reviewedAt": [
                12
            ],
            "createdAt": [
                12
            ],
            "__typename": [
                1
            ]
        },
        "MarketplaceAppReleaseStatus": {},
        "AppReleaseWithUploadUrls": {
            "release": [
                126
            ],
            "extensionUploadUrl": [
                122
            ],
            "moduleUploadUrl": [
                122
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
                116
            ],
            "status": [
                131
            ],
            "reviewResult": [
                125
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
                132
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
                133
            ],
            "creator": [
                76
            ],
            "manifest": [
                116
            ],
            "releases": [
                130
            ],
            "appWebhooks": [
                137
            ],
            "__typename": [
                1
            ]
        },
        "OrganizationApps": {
            "edges": [
                136
            ],
            "nodes": [
                134
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
                134
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
                134
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
                140
            ],
            "nodes": [
                138
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
                138
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
                142
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
                106
            ],
            "__typename": [
                1
            ]
        },
        "IdentityProviderConfigurations": {
            "on_OAuthClientConfiguration": [
                143
            ],
            "on_OpenidConfiguration": [
                146
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
                144
            ],
            "clientId": [
                1
            ],
            "clientSecret": [
                1
            ],
            "tokenEndpointAuthMethod": [
                145
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
                144
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
                82
            ],
            "triggerType": [
                154
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
                150
            ],
            "actionSource": [
                1
            ],
            "engineTiming": [
                149
            ],
            "printOutput": [
                1
            ],
            "printOutputTruncated": [
                4
            ],
            "error": [
                151
            ],
            "manualOverride": [
                152
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
                156
            ],
            "keyCount": [
                82
            ],
            "firstKeySamples": [
                1
            ],
            "engineTiming": [
                149
            ],
            "error": [
                151
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
                158
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
                159
            ],
            "afterStatus": [
                159
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
                158
            ],
            "stepId": [
                10
            ],
            "groupId": [
                10
            ],
            "groupOrder": [
                82
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
                158
            ],
            "targetTeamId": [
                10
            ],
            "stepId": [
                10
            ],
            "beforeStatus": [
                159
            ],
            "afterStatus": [
                159
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
                158
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
                82
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
                158
            ],
            "stepId": [
                10
            ],
            "beforeStepStatus": [
                164
            ],
            "afterStepStatus": [
                164
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
                158
            ],
            "targetType": [
                166
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
                149
            ],
            "printOutput": [
                1
            ],
            "printOutputTruncated": [
                4
            ],
            "error": [
                151
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
                169
            ],
            "__typename": [
                1
            ]
        },
        "ManualOverrideEffect": {},
        "TournamentsStepResetCascadeInfo": {
            "affectedSteps": [
                82
            ],
            "affectedTeams": [
                82
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
                164
            ],
            "newStatus": [
                164
            ],
            "reason": [
                1
            ],
            "cascade": [
                170
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
                82
            ],
            "gameCount": [
                82
            ],
            "seededTeamCount": [
                82
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
                82
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
                175
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
                177
            ],
            "nodes": [
                174
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
                174
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
                180
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
                183
            ],
            "__typename": [
                1
            ]
        },
        "TournamentTeamMemberStatus": {},
        "TeamMembers": {
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
        "TournamentTeamMemberEdge": {
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
                179
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
        "TournamentTeamEdge": {
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
        "TournamentTeamScore": {
            "teamId": [
                10
            ],
            "score": [
                17
            ],
            "team": [
                183
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
                188
            ],
            "status": [
                164
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
                186
            ],
            "tournament": [
                58
            ],
            "manualPins": [
                173
            ],
            "__typename": [
                1
            ]
        },
        "StepType": {},
        "Tournaments": {
            "edges": [
                190
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
                192
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
                174
            ],
            "gameLinks": [
                195
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
                191
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
                193
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
                196
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
                198
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
                200
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
        "TournamentStepGroupRoundGameMatchScoreEdge": {
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
                202
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
                204
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
                82
            ],
            "triggerType": [
                154
            ],
            "triggerScope": [
                1
            ],
            "condition": [
                1
            ],
            "actions": [
                203
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
                206
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
                82
            ],
            "type": [
                208
            ],
            "formula": [
                1
            ],
            "sortOrder": [
                209
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
                211
            ],
            "formula": [
                1
            ],
            "winPoints": [
                82
            ],
            "lossPoints": [
                82
            ],
            "drawPoints": [
                82
            ],
            "forfeitPoints": [
                82
            ],
            "tiebreakers": [
                207
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
                82
            ],
            "teamSlots": [
                82
            ],
            "bestOf": [
                82
            ],
            "onWinTarget": [
                1
            ],
            "onWinSourceSlot": [
                82
            ],
            "onWinTargetSlot": [
                82
            ],
            "onLossTarget": [
                1
            ],
            "onLossSourceSlot": [
                82
            ],
            "onLossTargetSlot": [
                82
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
                82
            ],
            "gameTemplates": [
                212
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
                82
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
                213
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
                214
            ],
            "__typename": [
                1
            ]
        },
        "CrossStepUsageModel": {
            "type": [
                217
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
                219
            ],
            "dataSource": [
                156
            ],
            "usage": [
                216
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
                82
            ],
            "presetName": [
                1
            ],
            "teamCount": [
                82
            ],
            "validated": [
                4
            ],
            "validatedAt": [
                12
            ],
            "scoringRuleSet": [
                210
            ],
            "advancementRules": [
                205
            ],
            "crossStepRules": [
                218
            ],
            "structureTemplate": [
                215
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
                222
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
                221
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
                225
            ],
            "parameters": [
                221
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
                82
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
                228
            ],
            "line": [
                82
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
                82
            ],
            "column": [
                82
            ],
            "message": [
                1
            ],
            "code": [
                230
            ],
            "phase": [
                228
            ],
            "originHelper": [
                1
            ],
            "hint": [
                1
            ],
            "snippet": [
                226
            ],
            "stackFrames": [
                227
            ],
            "__typename": [
                1
            ]
        },
        "ScriptErrorCode": {},
        "ScriptWarningModel": {
            "line": [
                82
            ],
            "column": [
                82
            ],
            "message": [
                1
            ],
            "code": [
                232
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
                229
            ],
            "warnings": [
                231
            ],
            "__typename": [
                1
            ]
        },
        "SimulatedEffectModel": {
            "type": [
                235
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
                229
            ],
            "warnings": [
                231
            ],
            "effectsSummary": [
                234
            ],
            "partialEffectsSummary": [
                234
            ],
            "executionTimeMs": [
                82
            ],
            "instructionsUsed": [
                82
            ],
            "__typename": [
                1
            ]
        },
        "LuaErrorDetailModel": {
            "scriptContextType": [
                238
            ],
            "script": [
                1
            ],
            "line": [
                82
            ],
            "column": [
                82
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
                240
            ],
            "message": [
                1
            ],
            "hint": [
                1
            ],
            "invariantCode": [
                241
            ],
            "luaError": [
                237
            ],
            "offender": [
                242
            ],
            "__typename": [
                1
            ]
        },
        "ValidationErrorCode": {},
        "InvariantCode": {},
        "InvariantOffenderUnion": {
            "on_RuleOffenderModel": [
                243
            ],
            "on_CrossStepRuleOffenderModel": [
                245
            ],
            "on_GameOffenderModel": [
                246
            ],
            "on_RoundOffenderModel": [
                248
            ],
            "on_GroupOffenderModel": [
                249
            ],
            "on_TeamOffenderModel": [
                250
            ],
            "on_ScoreRowOffenderModel": [
                251
            ],
            "__typename": [
                1
            ]
        },
        "RuleOffenderModel": {
            "kind": [
                244
            ],
            "ruleId": [
                10
            ],
            "ruleName": [
                1
            ],
            "trigger": [
                154
            ],
            "__typename": [
                1
            ]
        },
        "OffenderKind": {},
        "CrossStepRuleOffenderModel": {
            "kind": [
                244
            ],
            "crossStepRuleId": [
                10
            ],
            "dataSource": [
                156
            ],
            "usage": [
                217
            ],
            "__typename": [
                1
            ]
        },
        "GameOffenderModel": {
            "kind": [
                244
            ],
            "gameId": [
                10
            ],
            "groupIndex": [
                82
            ],
            "roundIndex": [
                82
            ],
            "gameIndex": [
                82
            ],
            "status": [
                247
            ],
            "__typename": [
                1
            ]
        },
        "GameStatus": {},
        "RoundOffenderModel": {
            "kind": [
                244
            ],
            "roundId": [
                10
            ],
            "groupIndex": [
                82
            ],
            "roundIndex": [
                82
            ],
            "__typename": [
                1
            ]
        },
        "GroupOffenderModel": {
            "kind": [
                244
            ],
            "groupId": [
                10
            ],
            "groupIndex": [
                82
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
                244
            ],
            "teamId": [
                10
            ],
            "teamName": [
                1
            ],
            "currentStatus": [
                159
            ],
            "__typename": [
                1
            ]
        },
        "ScoreRowOffenderModel": {
            "kind": [
                244
            ],
            "scope": [
                252
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
                82
            ],
            "status": [
                159
            ],
            "__typename": [
                1
            ]
        },
        "ScoreRowScope": {},
        "InvariantResultModel": {
            "code": [
                241
            ],
            "severity": [
                254
            ],
            "passed": [
                4
            ],
            "message": [
                1
            ],
            "offenders": [
                242
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
                154
            ],
            "fireCount": [
                82
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
                82
            ],
            "totalMutations": [
                82
            ],
            "invariantResults": [
                253
            ],
            "errors": [
                239
            ],
            "ruleFiredSummary": [
                255
            ],
            "__typename": [
                1
            ]
        },
        "ValidationProgressModel": {
            "stage": [
                258
            ],
            "percent": [
                17
            ],
            "currentPhaseDetail": [
                1
            ],
            "rulesFired": [
                82
            ],
            "totalRulesDeclared": [
                82
            ],
            "totalMutations": [
                82
            ],
            "elapsedMs": [
                82
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
                260
            ],
            "stage": [
                258
            ],
            "progress": [
                257
            ],
            "result": [
                256
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
                82
            ],
            "timestamp": [
                12
            ],
            "kind": [
                262
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
                263
            ],
            "statusBefore": [
                264
            ],
            "statusAfter": [
                264
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
                266
            ],
            "nodes": [
                259
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
                259
            ],
            "__typename": [
                1
            ]
        },
        "ValidationEvents": {
            "edges": [
                268
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
        "ValidationEventModelEdge": {
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
                271
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
        "CurrencyEdge": {
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
                274
            ],
            "nodes": [
                272
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
                272
            ],
            "__typename": [
                1
            ]
        },
        "UserGroupConfiguration": {
            "maxSize": [
                82
            ],
            "minSize": [
                82
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
                277
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
                279
            ],
            "locked": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "UserGroupStatus": {},
        "UserGroups": {
            "edges": [
                281
            ],
            "nodes": [
                278
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
                278
            ],
            "__typename": [
                1
            ]
        },
        "UserGroupMembers": {
            "edges": [
                283
            ],
            "nodes": [
                276
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
                276
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
                284
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
                285
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
                286
            ],
            "createdSeats": [
                286
            ],
            "deletedSeats": [
                286
            ],
            "__typename": [
                1
            ]
        },
        "EventVenueSeats": {
            "edges": [
                289
            ],
            "nodes": [
                286
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
                286
            ],
            "__typename": [
                1
            ]
        },
        "EventConfiguration": {
            "customFields": [
                19
            ],
            "groupConfiguration": [
                275
            ],
            "maxTicketsPerReservation": [
                17
            ],
            "reservationStatusAfterPayment": [
                291
            ],
            "reservationStatusAfterRegistration": [
                292
            ],
            "sessionDuration": [
                17
            ],
            "allowForNewSessionAfterTimeout": [
                4
            ],
            "seatAssignmentMode": [
                293
            ],
            "allowForMoreTicketsThanGroupMembers": [
                4
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
                290
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
            "decryptionKey": [
                1
            ],
            "venue": [
                318
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
                290
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
            "decryptionKey": [
                1
            ],
            "venue": [
                318
            ],
            "on_Event": [
                294
            ],
            "on_EventWithUserReservation": [
                296
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
                290
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
            "decryptionKey": [
                1
            ],
            "venue": [
                318
            ],
            "myReservation": [
                304
            ],
            "__typename": [
                1
            ]
        },
        "Events": {
            "edges": [
                298
            ],
            "nodes": [
                294
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
                294
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
                299
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
                299
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
                303
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
                300
            ],
            "groupStatus": [
                279
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
                303
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
                279
            ],
            "tickets": [
                301
            ],
            "__typename": [
                1
            ]
        },
        "EventReservations": {
            "edges": [
                306
            ],
            "nodes": [
                307
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
                307
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
                303
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
                279
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
                285
            ],
            "seatTypeId": [
                10
            ],
            "status": [
                310
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
                312
            ],
            "nodes": [
                309
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
                309
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
                313
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
                316
            ],
            "nodes": [
                314
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
                314
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
                317
            ],
            "organizationId": [
                10
            ],
            "__typename": [
                1
            ]
        },
        "EventVenues": {
            "edges": [
                320
            ],
            "nodes": [
                318
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
                318
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
                323
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
                321
            ],
            "__typename": [
                1
            ]
        },
        "ShopCurrencies": {},
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
                326
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
        "ItemEdge": {
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
                82
            ],
            "__typename": [
                1
            ]
        },
        "PlayerItems": {
            "edges": [
                329
            ],
            "nodes": [
                327
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
                327
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
                332
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
        "ItemCategoryEdge": {
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
        "JournalActor": {
            "type": [
                334
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
                337
            ],
            "type": [
                1
            ],
            "severity": [
                338
            ],
            "actor": [
                333
            ],
            "primaryResource": [
                335
            ],
            "secondaryResources": [
                335
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
                339,
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
                340
            ],
            "nodes": [
                336
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
                336
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
        "MarketplaceApp": {
            "id": [
                10
            ],
            "organizationAppId": [
                10
            ],
            "status": [
                349
            ],
            "manifest": [
                116
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
            "reviews": [
                353,
                {
                    "page": [
                        59
                    ]
                }
            ],
            "stats": [
                359
            ],
            "installation": [
                355
            ],
            "pricing": [
                360
            ],
            "__typename": [
                1
            ]
        },
        "MarketplaceAppStatus": {},
        "MarketplaceApps": {
            "edges": [
                351
            ],
            "nodes": [
                348
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
                348
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
                82
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
                354
            ],
            "nodes": [
                352
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
                352
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
                356
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
            "marketplaceApp": [
                348
            ],
            "__typename": [
                1
            ]
        },
        "MarketplaceInstallationStatus": {},
        "MarketplaceAppInstallations": {
            "edges": [
                358
            ],
            "nodes": [
                355
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
                355
            ],
            "__typename": [
                1
            ]
        },
        "MarketplaceAppStats": {
            "totalInstallations": [
                82
            ],
            "averageRating": [
                17
            ],
            "totalReviews": [
                82
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
                361
            ],
            "priceAmountCents": [
                82
            ],
            "currency": [
                1
            ],
            "trialDays": [
                82
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
                362
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
                109
            ],
            "events": [
                111
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
        "ObjectMetadata": {
            "key": [
                1
            ],
            "value": [
                1
            ],
            "type": [
                368
            ],
            "visibility": [
                369
            ],
            "objectType": [
                370
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
                367
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
                370
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
                374
            ],
            "required": [
                4
            ],
            "unique": [
                4
            ],
            "order": [
                82
            ],
            "visibility": [
                21
            ],
            "editability": [
                22
            ],
            "options": [
                372
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
            "__typename": [
                1
            ]
        },
        "CustomFieldType": {},
        "CustomFieldWithValueModel": {
            "definition": [
                373
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
                375
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
                100
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
                380
            ],
            "organizationId": [
                10
            ],
            "appId": [
                1
            ],
            "customDomains": [
                377
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
                123
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
                82
            ],
            "authenticatedSessions": [
                82
            ],
            "anonymousSessions": [
                82
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
                384
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
                386
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
                391
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
        "PlayerShopProductPurshaseEdge": {
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
                394
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
        "ShopCategoryEdge": {
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
        "ShopProductConfiguration": {
            "minQuantity": [
                82
            ],
            "maxQuantity": [
                82
            ],
            "maxBoughtQuantity": [
                82
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
                82
            ],
            "__typename": [
                1
            ]
        },
        "ShopItemQuantity": {
            "type": [
                398
            ],
            "id": [
                10
            ],
            "quantity": [
                82
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
                395
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
                323
            ],
            "items": [
                397
            ],
            "currencyPrices": [
                396
            ],
            "__typename": [
                1
            ]
        },
        "ShopProducts": {
            "edges": [
                401
            ],
            "nodes": [
                399
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
                399
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
                404
            ],
            "nodes": [
                402
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
                402
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
                398
            ],
            "shopItemId": [
                10
            ],
            "itemId": [
                10
            ],
            "quantity": [
                82
            ],
            "__typename": [
                1
            ]
        },
        "ShopProductItems": {
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
        "ShopProductItemEdge": {
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
                411
            ],
            "configuration": [
                408
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
                413
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
                412
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
                414
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
                416
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
                418
            ],
            "mappingConfiguration": [
                417
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
                423
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
                424
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
                425
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
                427
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
                428
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
                430
            ],
            "stringCondition": [
                432
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
                433
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
                432
            ],
            "numericCondition": [
                431
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
                436
            ],
            "memberConditions": [
                435
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
                437
            ],
            "customFields": [
                421
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
                434
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
                440
            ],
            "__typename": [
                1
            ]
        },
        "UserGroupConfigurationInput": {
            "maxSize": [
                82
            ],
            "minSize": [
                82
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
                443
            ],
            "__typename": [
                1
            ]
        },
        "EventConfigurationInput": {
            "customFields": [
                421
            ],
            "groupConfiguration": [
                442
            ],
            "maxTicketsPerReservation": [
                17
            ],
            "reservationStatusAfterPayment": [
                291
            ],
            "reservationStatusAfterRegistration": [
                292
            ],
            "sessionDuration": [
                17
            ],
            "allowForNewSessionAfterTimeout": [
                4
            ],
            "seatAssignmentMode": [
                293
            ],
            "allowForMoreTicketsThanGroupMembers": [
                4
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
        "EventTicketConfigurationConfigurationInput": {
            "customFields": [
                421
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
                82
            ],
            "maxQuantity": [
                82
            ],
            "maxBoughtQuantity": [
                82
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
                82
            ],
            "__typename": [
                1
            ]
        },
        "ShopItemQuantityInput": {
            "type": [
                398
            ],
            "id": [
                10
            ],
            "quantity": [
                82
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
                79,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "leaderboardCurrentPlayerRanking": [
                81,
                {
                    "input": [
                        455,
                        "LeaderboardGetPlayerRankingInput!"
                    ]
                }
            ],
            "leaderboards": [
                86,
                {
                    "page": [
                        59,
                        "PageInfo!"
                    ]
                }
            ],
            "leaderboard": [
                85,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "currentLeaderboardSeason": [
                88,
                {
                    "leaderboardId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "leaderboardSeasons": [
                89,
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
                88,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "leaderboardSeasonBuckets": [
                93,
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
                91,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "leaderboardSeasonBucketScores": [
                83,
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
                        413,
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
                456
            ],
            "identityProvider": [
                141,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "organizationApp": [
                134,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "organizationApps": [
                135,
                {
                    "page": [
                        59,
                        "PageInfo!"
                    ]
                }
            ],
            "appReleasesByApp": [
                130,
                {
                    "appId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "appRelease": [
                130,
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
                147
            ],
            "webhook": [
                147,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "organizationAttachedApps": [
                139,
                {
                    "page": [
                        59,
                        "PageInfo!"
                    ]
                }
            ],
            "availableRootIdentityProvider": [
                106,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "getAvailableRootIdentityProviders": [
                106
            ],
            "emailTemplateConfigurations": [
                49
            ],
            "emailConfiguration": [
                51
            ],
            "emailTemplate": [
                102,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "emailTemplates": [
                103,
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
                        458
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
                148,
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
                176,
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
                189,
                {
                    "query": [
                        459,
                        "TournamentsQuery!"
                    ],
                    "page": [
                        59,
                        "PageInfo!"
                    ]
                }
            ],
            "tournamentSteps": [
                187,
                {
                    "tournamentId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "tournamentStep": [
                187,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "tournamentStepGeneratedShape": [
                194,
                {
                    "stepId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "match": [
                174,
                {
                    "matchId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "tournamentTeam": [
                183,
                {
                    "teamId": [
                        10,
                        "ID!"
                    ],
                    "memberStatus": [
                        180
                    ]
                }
            ],
            "tournamentTeams": [
                184,
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
                        180
                    ],
                    "status": [
                        60
                    ],
                    "playerUsernameQuery": [
                        1
                    ],
                    "propertiesFilter": [
                        422,
                        "[PropertyValueInput!]"
                    ],
                    "playerPropertiesFilter": [
                        422,
                        "[PropertyValueInput!]"
                    ],
                    "playerIdentityProviderPropertiesFilter": [
                        464,
                        "[IdentityProviderPropertyInput!]"
                    ],
                    "playerProfileIds": [
                        10,
                        "[ID!]"
                    ]
                }
            ],
            "tournamentPlayers": [
                181,
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
                        422,
                        "[PropertyValueInput!]"
                    ],
                    "orderByProperty": [
                        465
                    ]
                }
            ],
            "tournamentTeamInvites": [
                181,
                {
                    "page": [
                        59,
                        "PageInfo!"
                    ],
                    "tournamentId": [
                        10
                    ],
                    "status": [
                        180
                    ]
                }
            ],
            "tournamentStepGroupRoundGameMatchScoresGetForStep": [
                199,
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
                201,
                {
                    "tournamentId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "stepRuleSet": [
                220,
                {
                    "tournamentStepId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "presetScripts": [
                223
            ],
            "presetScript": [
                223,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "builtinPresets": [
                224,
                {
                    "category": [
                        225
                    ]
                }
            ],
            "builtinPreset": [
                224,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "validateScript": [
                233,
                {
                    "input": [
                        466,
                        "ValidateScriptInput!"
                    ]
                }
            ],
            "simulateScript": [
                236,
                {
                    "input": [
                        467,
                        "SimulateScriptInput!"
                    ]
                }
            ],
            "stepRuleSetValidationJob": [
                259,
                {
                    "jobId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "stepRuleSetValidationJobs": [
                265,
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
                267,
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
                        262,
                        "[ValidationEventKind!]"
                    ]
                }
            ],
            "platformFiles": [
                119,
                {
                    "type": [
                        120
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
                119,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "platforms": [
                381
            ],
            "platform": [
                381,
                {
                    "platformId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "platformFindFromDomain": [
                381,
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
                        123,
                        "URL!"
                    ]
                }
            ],
            "platformCustomDomains": [
                377,
                {
                    "platformId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "platformTemplatesPublic": [
                382
            ],
            "platformTemplates": [
                382
            ],
            "platformTemplate": [
                382,
                {
                    "platformTemplateId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "subscriptionItems": [
                414
            ],
            "organizationCurrentSubscriptionItems": [
                415
            ],
            "journalEntries": [
                339,
                {
                    "page": [
                        59
                    ],
                    "filters": [
                        473
                    ]
                }
            ],
            "journalEntry": [
                336,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "organizationSkillRatings": [
                410
            ],
            "organizationSkillRating": [
                410,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "event": [
                296,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "events": [
                297,
                {
                    "page": [
                        59,
                        "PageInfo!"
                    ],
                    "query": [
                        474
                    ],
                    "eventIds": [
                        10,
                        "[ID!]"
                    ]
                }
            ],
            "eventTicketConfiguration": [
                322,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "eventTicketConfigurations": [
                322,
                {
                    "eventId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "eventReservationsMyReservations": [
                305,
                {
                    "page": [
                        59,
                        "PageInfo!"
                    ],
                    "status": [
                        303
                    ],
                    "groupStatus": [
                        279
                    ],
                    "eventIds": [
                        10,
                        "[ID!]"
                    ]
                }
            ],
            "eventReservation": [
                302,
                {
                    "reservationId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "eventSeats": [
                311,
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
                305,
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
                        478,
                        "EventReservationsQueryInput!"
                    ]
                }
            ],
            "eventVenues": [
                319,
                {
                    "page": [
                        59,
                        "PageInfo!"
                    ]
                }
            ],
            "eventVenue": [
                318,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "eventVenueSeats": [
                288,
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
                315,
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
            "organizationPaymentCollectionConfiguration": [
                178
            ],
            "userGroupMembers": [
                282,
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
                        277
                    ]
                }
            ],
            "userGroups": [
                280,
                {
                    "query": [
                        480,
                        "UserGroupsQueryInput!"
                    ],
                    "page": [
                        59,
                        "PageInfo!"
                    ]
                }
            ],
            "userGroupMyMemberships": [
                282,
                {
                    "page": [
                        59,
                        "PageInfo!"
                    ],
                    "status": [
                        277
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
                383
            ],
            "shops": [
                403,
                {
                    "page": [
                        59
                    ],
                    "filter": [
                        481
                    ]
                }
            ],
            "shopCategories": [
                393,
                {
                    "page": [
                        59
                    ],
                    "filter": [
                        482
                    ]
                }
            ],
            "playerShopProductPurshases": [
                390,
                {
                    "page": [
                        59
                    ],
                    "filter": [
                        483
                    ]
                }
            ],
            "shopProducts": [
                400,
                {
                    "shopId": [
                        10,
                        "ID!"
                    ],
                    "page": [
                        59
                    ],
                    "filter": [
                        484
                    ]
                }
            ],
            "shopProductItems": [
                406,
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
                325,
                {
                    "page": [
                        59
                    ],
                    "filter": [
                        485
                    ]
                }
            ],
            "playerItems": [
                328,
                {
                    "page": [
                        59
                    ],
                    "filter": [
                        486
                    ]
                }
            ],
            "itemCategories": [
                331,
                {
                    "page": [
                        59
                    ],
                    "filter": [
                        487
                    ]
                }
            ],
            "currencies": [
                270,
                {
                    "page": [
                        59
                    ],
                    "filter": [
                        488
                    ]
                }
            ],
            "playerCurrencies": [
                273,
                {
                    "page": [
                        59
                    ],
                    "filter": [
                        489
                    ]
                }
            ],
            "marketplaceApps": [
                350,
                {
                    "page": [
                        59
                    ],
                    "filter": [
                        490
                    ]
                }
            ],
            "marketplaceApp": [
                348,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "myMarketplaceInstallations": [
                357,
                {
                    "page": [
                        59
                    ]
                }
            ],
            "appReleases": [
                126,
                {
                    "marketplaceAppId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "moduleTokensForPlatform": [
                364,
                {
                    "platformId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "extensionToken": [
                365,
                {
                    "installationId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "platformModuleConfigs": [
                363,
                {
                    "platformId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "entityMetafields": [
                366,
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
                        491
                    ]
                }
            ],
            "allowedObjectTypes": [
                370
            ],
            "objectMetadata": [
                367,
                {
                    "objectType": [
                        370,
                        "ObjectType!"
                    ],
                    "objectId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "objectMetadataBatch": [
                371,
                {
                    "objectType": [
                        370,
                        "ObjectType!"
                    ],
                    "objectIds": [
                        10,
                        "[ID!]!"
                    ]
                }
            ],
            "customFieldDefinitions": [
                373,
                {
                    "objectType": [
                        370,
                        "ObjectType!"
                    ]
                }
            ],
            "customFieldValues": [
                375,
                {
                    "objectType": [
                        370,
                        "ObjectType!"
                    ],
                    "objectId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "customFieldValuesBatch": [
                376,
                {
                    "objectType": [
                        370,
                        "ObjectType!"
                    ],
                    "objectIds": [
                        10,
                        "[ID!]!"
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
                141
            ],
            "on_PublicOrganizationIdentityProviderV2": [
                457
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
                460
            ],
            "orderDirection": [
                461
            ],
            "status": [
                462
            ],
            "showNotVisible": [
                4
            ],
            "filterByPlayers": [
                463
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
                180
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
                461
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
                238
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
                238
            ],
            "parameters": [
                1
            ],
            "overrides": [
                468
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
                82
            ],
            "bestOf": [
                82
            ],
            "teams": [
                469
            ],
            "presetParameters": [
                471
            ],
            "__typename": [
                1
            ]
        },
        "SimulationTeamOverrideInput": {
            "position": [
                82
            ],
            "id": [
                1
            ],
            "metadata": [
                470
            ],
            "customFields": [
                470
            ],
            "rank": [
                82
            ],
            "status": [
                159
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
                472
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
                337
            ],
            "types": [
                1
            ],
            "typePrefix": [
                1
            ],
            "actorType": [
                334
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
                338
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
                475
            ],
            "orderDirection": [
                461
            ],
            "status": [
                476
            ],
            "showNotVisible": [
                4
            ],
            "filterByPlayers": [
                477
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
                303
            ],
            "memberStatus": [
                277
            ],
            "__typename": [
                1
            ]
        },
        "EventReservationsQueryInput": {
            "filterByRegistrationStatus": [
                303
            ],
            "retrieveOnlyGroupMembersWithStatus": [
                277
            ],
            "filterByPlayerUsernameQuery": [
                1
            ],
            "filterByReservationProperties": [
                422
            ],
            "filterByPlayerProperties": [
                422
            ],
            "filterByPlayerIdentityProviderProperties": [
                464
            ],
            "filterByPlayers": [
                479
            ],
            "filterByGroupStatus": [
                279
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
                277
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
                349
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
                79,
                {
                    "id": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        493,
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
                81,
                {
                    "input": [
                        494,
                        "LeaderboardRegisterPlayerScoreInput!"
                    ]
                }
            ],
            "createLeaderboard": [
                85,
                {
                    "input": [
                        496,
                        "CreateLeaderboardInput!"
                    ]
                }
            ],
            "updateLeaderboard": [
                85,
                {
                    "id": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        497,
                        "UpdateLeaderboardInput!"
                    ]
                }
            ],
            "deleteLeaderboard": [
                498,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "createLeaderboardSeason": [
                88,
                {
                    "leaderboardId": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        499,
                        "CreateLeaderboardSeasonInput!"
                    ]
                }
            ],
            "updateLeaderboardSeason": [
                88,
                {
                    "id": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        500,
                        "UpdateLeaderboardSeasonInput!"
                    ]
                }
            ],
            "deleteLeaderboardSeason": [
                498,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "createLeaderboardSeasonBucket": [
                91,
                {
                    "seasonId": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        501,
                        "CreateLeaderboardSeasonBucketInput!"
                    ]
                }
            ],
            "updateLeaderboardSeasonBucket": [
                91,
                {
                    "id": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        502,
                        "UpdateLeaderboardSeasonBucketInput!"
                    ]
                }
            ],
            "deleteLeaderboardSeasonBucket": [
                498,
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
                        503,
                        "UpdateOrganizationInput!"
                    ]
                }
            ],
            "createOrganization": [
                70,
                {
                    "organization": [
                        505,
                        "CreateOrganizationInput!"
                    ]
                }
            ],
            "createOrganizationGroup": [
                9,
                {
                    "input": [
                        506,
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
                        506,
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
                        507,
                        "SetOrganizationMembershipInput!"
                    ]
                }
            ],
            "deleteOrganizationMembership": [
                4,
                {
                    "input": [
                        508,
                        "DeleteOrganizationMembershipInput!"
                    ]
                }
            ],
            "createIdentityProvider": [
                141,
                {
                    "input": [
                        509,
                        "CreateOrganizationIdentityProvider!"
                    ]
                }
            ],
            "updateIdentityProvider": [
                141,
                {
                    "providerId": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        512,
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
                134,
                {
                    "input": [
                        513,
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
                134,
                {
                    "id": [
                        1,
                        "String!"
                    ],
                    "input": [
                        514,
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
                134,
                {
                    "id": [
                        1,
                        "String!"
                    ],
                    "manifest": [
                        515,
                        "AppManifestInput!"
                    ]
                }
            ],
            "regenerateAppWebhookSecret": [
                137,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "createAppRelease": [
                130,
                {
                    "appId": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        522,
                        "CreateAppReleaseInput!"
                    ]
                }
            ],
            "createWebhook": [
                147,
                {
                    "input": [
                        523,
                        "CreateWebhookInput!"
                    ]
                }
            ],
            "updateWebhook": [
                147,
                {
                    "id": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        524,
                        "UpdateWebhookInput!"
                    ]
                }
            ],
            "deleteWebhook": [
                147,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "regenerateWebhookSecret": [
                147,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "setOrganizationAttachedApp": [
                138,
                {
                    "input": [
                        525,
                        "SetOrganizationAttachedAppInput!"
                    ]
                }
            ],
            "deleteOrganizationAttachedApp": [
                4,
                {
                    "input": [
                        526,
                        "DeleteOrganizationAttachedAppInput!"
                    ]
                }
            ],
            "emailSend": [
                4,
                {
                    "fromTemplate": [
                        527
                    ],
                    "fromCustom": [
                        528
                    ]
                }
            ],
            "emailConfigurationUpdate": [
                51,
                {
                    "input": [
                        439,
                        "EmailConfigurationInput!"
                    ]
                }
            ],
            "emailTemplateCreate": [
                102,
                {
                    "input": [
                        529,
                        "EmailTemplateCreateInput!"
                    ]
                }
            ],
            "emailTemplateUpdate": [
                102,
                {
                    "id": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        530,
                        "EmailTemplateUpdateInput!"
                    ]
                }
            ],
            "emailTemplateDelete": [
                102,
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
                        531,
                        "CreatePlayerInput!"
                    ]
                }
            ],
            "updatePlayer": [
                73,
                {
                    "input": [
                        533,
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
                        534,
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
                        535,
                        "CreateTournamentInput!"
                    ]
                }
            ],
            "updateTournament": [
                58,
                {
                    "input": [
                        538,
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
                187,
                {
                    "tournamentId": [
                        10,
                        "ID!"
                    ],
                    "configuration": [
                        429
                    ],
                    "step": [
                        539,
                        "CreateTournamentStepInput!"
                    ]
                }
            ],
            "updateTournamentStep": [
                187,
                {
                    "stepId": [
                        10,
                        "ID!"
                    ],
                    "configuration": [
                        429
                    ],
                    "step": [
                        539,
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
                        82
                    ]
                }
            ],
            "seedTournamentStep": [
                187,
                {
                    "input": [
                        540
                    ],
                    "legacyInput": [
                        542
                    ]
                }
            ],
            "updateSeedingOrder": [
                187,
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
                187,
                {
                    "stepId": [
                        10,
                        "ID!"
                    ],
                    "pins": [
                        541,
                        "[SeedingPinInput!]!"
                    ]
                }
            ],
            "withdrawTeamFromStep": [
                187,
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
                187,
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
                174,
                {
                    "matchId": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        548,
                        "[UpdateMatchScoreInput!]!"
                    ]
                }
            ],
            "registerCustomTournamentTeams": [
                183,
                {
                    "tournamentId": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        550,
                        "RegisterCustomTeamsInput!"
                    ]
                }
            ],
            "registerTournamentTeam": [
                183,
                {
                    "tournamentId": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        553,
                        "RegisterTournamentTeamInput!"
                    ]
                }
            ],
            "updateTournamentTeam": [
                183,
                {
                    "input": [
                        554,
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
                183,
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
                183,
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
                183,
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
                201,
                {
                    "input": [
                        555,
                        "TournamentAdminUpsertInput!"
                    ]
                }
            ],
            "tournamentAdminDelete": [
                4,
                {
                    "input": [
                        556,
                        "TournamentAdminDeleteInput!"
                    ]
                }
            ],
            "createStepRuleSet": [
                220,
                {
                    "tournamentStepId": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        557,
                        "CreateStepRuleSetInput!"
                    ]
                }
            ],
            "applyPresetScript": [
                220,
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
                220,
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
                223,
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
                223,
                {
                    "input": [
                        568,
                        "CreatePresetScriptInput!"
                    ]
                }
            ],
            "updatePresetScript": [
                223,
                {
                    "id": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        570,
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
                187,
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
                        159,
                        "TeamScopeStatus!"
                    ]
                }
            ],
            "validateStepRuleSet": [
                259,
                {
                    "stepRuleSetId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "cancelStepRuleSetValidation": [
                259,
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
                119,
                {
                    "input": [
                        571,
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
                119,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "platformFileGenerateUploadUrl": [
                122,
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
                119,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "platformFileUpdate": [
                119,
                {
                    "id": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        572,
                        "PlatformFileUpdateInput!"
                    ]
                }
            ],
            "platformFileDelete": [
                498,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "platformCreate": [
                381,
                {
                    "input": [
                        573,
                        "CreatePlatformInput!"
                    ]
                }
            ],
            "platformUpdate": [
                381,
                {
                    "id": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        574,
                        "UpdatePlatformInput!"
                    ]
                }
            ],
            "platformDelete": [
                498,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "platformThemeUpdate": [
                381,
                {
                    "platformId": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        575,
                        "PlatformThemeInput!"
                    ]
                }
            ],
            "platformRegisterCustomDomain": [
                100,
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
                100,
                {
                    "hostname": [
                        1,
                        "String!"
                    ]
                }
            ],
            "platformRemoveCustomDomain": [
                498,
                {
                    "hostname": [
                        1,
                        "String!"
                    ]
                }
            ],
            "platformTemplateCreate": [
                382,
                {
                    "input": [
                        578,
                        "CreatePlatformTemplateInput!"
                    ]
                }
            ],
            "platformTemplateUpdate": [
                382,
                {
                    "id": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        579,
                        "UpdatePlatformTemplateInput!"
                    ]
                }
            ],
            "platformTemplateApply": [
                381,
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
                498,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "organizationSubscriptionItemsUpdate": [
                498,
                {
                    "items": [
                        580,
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
                409,
                {
                    "organizationSkillRatingId": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        581,
                        "OrganizationSkillRatingsRegisterMatchInput!"
                    ]
                }
            ],
            "organizationSkillRatingCreate": [
                410,
                {
                    "input": [
                        583,
                        "OrganizationSkillRatingCreateInput!"
                    ]
                }
            ],
            "organizationSkillRatingUpdate": [
                410,
                {
                    "id": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        584,
                        "OrganizationSkillRatingUpdateInput!"
                    ]
                }
            ],
            "organizationSkillRatingDelete": [
                498,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "eventCreate": [
                294,
                {
                    "input": [
                        585,
                        "EventCreateInput!"
                    ]
                }
            ],
            "eventUpdate": [
                294,
                {
                    "input": [
                        586,
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
                322,
                {
                    "input": [
                        587,
                        "EventTicketConfigurationCreateInput!"
                    ]
                }
            ],
            "eventTicketConfigurationUpdate": [
                322,
                {
                    "ticketConfigurationId": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        588,
                        "EventTicketConfigurationUpdateInput!"
                    ]
                }
            ],
            "eventTicketConfigurationDelete": [
                322,
                {
                    "ticketConfigurationId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "eventReservationUpdateStatus": [
                302,
                {
                    "reservationId": [
                        10,
                        "ID!"
                    ],
                    "status": [
                        303,
                        "EventReservationStatus!"
                    ],
                    "confirmPaymentRefundOrCancel": [
                        4
                    ],
                    "refundPayment": [
                        4
                    ],
                    "ticketsToReserve": [
                        589
                    ]
                }
            ],
            "eventReservationConfirmPresence": [
                302,
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
                308,
                {
                    "eventId": [
                        10,
                        "ID!"
                    ],
                    "options": [
                        591,
                        "EventReservationValidateAndPayInput!"
                    ],
                    "ticketConfigurations": [
                        593,
                        "[EventReservationTicketConfigurationInput!]"
                    ]
                }
            ],
            "eventReservationCreate": [
                302,
                {
                    "eventId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "eventReservationUpdateTickets": [
                302,
                {
                    "reservationId": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        594,
                        "EventReservationUpdateTicketsInput!"
                    ]
                }
            ],
            "eventReservationStartRegistrationSession": [
                302,
                {
                    "eventId": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        589,
                        "EventReservationRegisterTicketsInput!"
                    ]
                }
            ],
            "eventReservationCancel": [
                302,
                {
                    "reservationId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "eventVenueRequestImageUpdate": [
                122,
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
                318,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "eventVenueCreate": [
                318,
                {
                    "input": [
                        595,
                        "EventVenueCreateInput!"
                    ]
                }
            ],
            "eventVenueUpdate": [
                318,
                {
                    "id": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        596,
                        "EventVenueUpdateInput!"
                    ]
                }
            ],
            "eventVenueDelete": [
                318,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "eventVenueSeatsUpdate": [
                287,
                {
                    "venueId": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        597,
                        "EventVenueSeatsUpdateInput!"
                    ]
                }
            ],
            "eventVenueSeatTypeCreate": [
                314,
                {
                    "venueId": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        600,
                        "EventVenueSeatTypeCreateInput!"
                    ]
                }
            ],
            "eventVenueSeatTypeUpdate": [
                314,
                {
                    "id": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        601,
                        "EventVenueSeatTypeUpdateInput!"
                    ]
                }
            ],
            "eventVenueSeatTypeDelete": [
                314,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "organizationPaymentCollectionConfigurationCreateOrUpdateAccount": [
                1
            ],
            "userGroupInvite": [
                276,
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
            "userGroupUpdateInvite": [
                276,
                {
                    "groupId": [
                        10,
                        "ID!"
                    ],
                    "status": [
                        277,
                        "UserGroupMemberStatus!"
                    ]
                }
            ],
            "userGroupDeleteInvite": [
                276,
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
                402,
                {
                    "input": [
                        602,
                        "ShopCreateInput!"
                    ]
                }
            ],
            "shopUpdate": [
                402,
                {
                    "id": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        603,
                        "ShopUpdateInput!"
                    ]
                }
            ],
            "shopDelete": [
                402,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "shopCategoryCreate": [
                392,
                {
                    "input": [
                        604,
                        "ShopCategoryCreateInput!"
                    ]
                }
            ],
            "shopCategoryUpdate": [
                392,
                {
                    "id": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        605,
                        "ShopCategoryUpdateInput!"
                    ]
                }
            ],
            "shopCategoryDelete": [
                392,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "playerShopProductPurshase": [
                388,
                {
                    "shopId": [
                        10,
                        "ID!"
                    ],
                    "paymentConfig": [
                        606
                    ],
                    "input": [
                        607,
                        "PlayerShopProductPurshaseInput!"
                    ]
                }
            ],
            "shopProductCreate": [
                399,
                {
                    "shopId": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        609,
                        "ShopProductCreateInput!"
                    ]
                }
            ],
            "shopProductUpdate": [
                399,
                {
                    "productId": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        610,
                        "ShopProductUpdateInput!"
                    ]
                }
            ],
            "shopProductDelete": [
                399,
                {
                    "productId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "itemCreate": [
                324,
                {
                    "input": [
                        611,
                        "ItemCreateInput!"
                    ]
                }
            ],
            "itemUpdate": [
                324,
                {
                    "id": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        612,
                        "ItemUpdateInput!"
                    ]
                }
            ],
            "itemDelete": [
                324,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "playerItemsUpdate": [
                327,
                {
                    "playerId": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        613,
                        "PlayerItemsUpdateInput!"
                    ]
                }
            ],
            "itemCategoryCreate": [
                330,
                {
                    "input": [
                        615,
                        "ItemCategoryCreateInput!"
                    ]
                }
            ],
            "itemCategoryUpdate": [
                330,
                {
                    "id": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        616,
                        "ItemCategoryUpdateInput!"
                    ]
                }
            ],
            "itemCategoryDelete": [
                330,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "currencyCreate": [
                269,
                {
                    "input": [
                        617,
                        "CurrencyCreateInput!"
                    ]
                }
            ],
            "currencyUpdate": [
                269,
                {
                    "id": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        618,
                        "CurrencyUpdateInput!"
                    ]
                }
            ],
            "currencyDelete": [
                269,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "playerCurrencyUpdate": [
                272,
                {
                    "playerId": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        619,
                        "[PlayerCurrencyUpdateInput!]!"
                    ]
                }
            ],
            "publishMarketplaceApp": [
                348,
                {
                    "input": [
                        621,
                        "PublishMarketplaceAppInput!"
                    ]
                }
            ],
            "updateMarketplaceApp": [
                348,
                {
                    "id": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        622,
                        "UpdateMarketplaceAppInput!"
                    ]
                }
            ],
            "installMarketplaceApp": [
                355,
                {
                    "input": [
                        623,
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
                352,
                {
                    "input": [
                        624,
                        "SubmitMarketplaceAppReviewInput!"
                    ]
                }
            ],
            "setMarketplaceAppPricing": [
                360,
                {
                    "input": [
                        625,
                        "SetMarketplaceAppPricingInput!"
                    ]
                }
            ],
            "createMarketplaceCheckout": [
                1,
                {
                    "input": [
                        626,
                        "CreateMarketplaceCheckoutInput!"
                    ]
                }
            ],
            "appCreateRelease": [
                128,
                {
                    "marketplaceAppId": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        627,
                        "AppCreateReleaseInput!"
                    ]
                }
            ],
            "appFinalizeRelease": [
                129,
                {
                    "releaseId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "appPublishRelease": [
                126,
                {
                    "releaseId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "platformModuleConfigSet": [
                363,
                {
                    "input": [
                        628,
                        "PlatformModuleConfigSetInput!"
                    ]
                }
            ],
            "platformModuleConfigDelete": [
                4,
                {
                    "input": [
                        630,
                        "PlatformModuleConfigDeleteInput!"
                    ]
                }
            ],
            "entityMetafieldSet": [
                366,
                {
                    "input": [
                        631,
                        "SetEntityMetafieldInput!"
                    ]
                }
            ],
            "entityMetafieldDelete": [
                4,
                {
                    "input": [
                        632,
                        "DeleteEntityMetafieldInput!"
                    ]
                }
            ],
            "setObjectMetadata": [
                367,
                {
                    "input": [
                        633,
                        "SetObjectMetadataInput!"
                    ]
                }
            ],
            "removeObjectMetadata": [
                4,
                {
                    "input": [
                        635,
                        "RemoveObjectMetadataInput!"
                    ]
                }
            ],
            "createCustomFieldDefinition": [
                373,
                {
                    "input": [
                        636,
                        "CreateCustomFieldDefinitionInput!"
                    ]
                }
            ],
            "updateCustomFieldDefinition": [
                373,
                {
                    "id": [
                        10,
                        "ID!"
                    ],
                    "input": [
                        638,
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
                373,
                {
                    "objectType": [
                        370,
                        "ObjectType!"
                    ],
                    "orderedIds": [
                        10,
                        "[ID!]!"
                    ]
                }
            ],
            "setCustomFieldValues": [
                375,
                {
                    "input": [
                        639,
                        "SetCustomFieldValuesInput!"
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
                429
            ],
            "tournamentConfiguration": [
                438
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
                495
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
                92
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
                92
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
                504
            ],
            "__typename": [
                1
            ]
        },
        "OrganizationConfigurationInput": {
            "customFields": [
                421
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
                504
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
                420
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
                420
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
                510
            ],
            "openidConfiguration": [
                511
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
                419
            ],
            "issuer": [
                1
            ],
            "providerType": [
                144
            ],
            "clientId": [
                1
            ],
            "clientSecret": [
                1
            ],
            "tokenEndpointAuthMethod": [
                145
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
                419
            ],
            "issuer": [
                1
            ],
            "providerType": [
                144
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
                510
            ],
            "openidConfiguration": [
                511
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
                516
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
                518
            ],
            "__typename": [
                1
            ]
        },
        "ExtensionPointInput": {
            "type": [
                115
            ],
            "label": [
                1
            ],
            "activePages": [
                1
            ],
            "size": [
                517
            ],
            "__typename": [
                1
            ]
        },
        "ExtensionPointSizeInput": {
            "maxWidth": [
                82
            ],
            "maxHeight": [
                82
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
                519
            ],
            "events": [
                521
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
                110
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
                520
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
                420
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
                422
            ],
            "__typename": [
                1
            ]
        },
        "EmailSendFromCustomInput": {
            "emailField": [
                434
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
                532
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
                532
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
                532
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
                536
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
                537
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
                437
            ],
            "customFields": [
                421
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
                536
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
                188
            ],
            "properties": [
                422
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
                541
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
                82
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
                543
            ],
            "manualSeeding": [
                546
            ],
            "__typename": [
                1
            ]
        },
        "AutomaticSeedingInput": {
            "seedingMechanism": [
                544
            ],
            "groupRepartitionMechanism": [
                545
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
                547
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
                549
            ],
            "forcedScoreValue": [
                17
            ],
            "status": [
                198
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
                551
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
                422
            ],
            "fromExistingTeamId": [
                10
            ],
            "members": [
                552
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
                531
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
                422
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
                422
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
                202
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
                558
            ],
            "advancementRules": [
                560
            ],
            "crossStepRules": [
                562
            ],
            "structureTemplate": [
                564
            ],
            "__typename": [
                1
            ]
        },
        "CreateScoringInput": {
            "aggregation": [
                211
            ],
            "formula": [
                1
            ],
            "winPoints": [
                82
            ],
            "lossPoints": [
                82
            ],
            "drawPoints": [
                82
            ],
            "forfeitPoints": [
                82
            ],
            "tiebreakers": [
                559
            ],
            "__typename": [
                1
            ]
        },
        "CreateTiebreakerInput": {
            "order": [
                82
            ],
            "type": [
                208
            ],
            "formula": [
                1
            ],
            "sortOrder": [
                209
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
                82
            ],
            "triggerType": [
                154
            ],
            "triggerScope": [
                1
            ],
            "condition": [
                1
            ],
            "actions": [
                561
            ],
            "autoExecute": [
                4
            ],
            "allowManualOverride": [
                4
            ],
            "purpose": [
                206
            ],
            "__typename": [
                1
            ]
        },
        "RuleActionInput": {
            "type": [
                204
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
                219
            ],
            "dataSource": [
                156
            ],
            "usage": [
                563
            ],
            "__typename": [
                1
            ]
        },
        "CrossStepUsageInput": {
            "type": [
                217
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
                565
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
                82
            ],
            "teamSlotsExpr": [
                1
            ],
            "generationScript": [
                1
            ],
            "roundTemplates": [
                566
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
                82
            ],
            "gameTemplates": [
                567
            ],
            "__typename": [
                1
            ]
        },
        "CreateGameTemplateInput": {
            "order": [
                82
            ],
            "teamSlots": [
                82
            ],
            "bestOf": [
                82
            ],
            "onWinTarget": [
                1
            ],
            "onWinSourceSlot": [
                82
            ],
            "onWinTargetSlot": [
                82
            ],
            "onLossTarget": [
                1
            ],
            "onLossSourceSlot": [
                82
            ],
            "onLossTargetSlot": [
                82
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
                569
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
                222
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
                569
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
                120
            ],
            "config": [
                441
            ],
            "__typename": [
                1
            ]
        },
        "PlatformFileUpdateInput": {
            "config": [
                441
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
                449
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
                449
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
                576
            ],
            "sections": [
                577
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
                123
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
                123
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
                582
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
                411
            ],
            "configuration": [
                453
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
                411
            ],
            "configuration": [
                453
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
                445
            ],
            "eventVenueId": [
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
                445
            ],
            "eventVenueId": [
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
                323
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
                448
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
                323
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
                448
            ],
            "__typename": [
                1
            ]
        },
        "EventReservationRegisterTicketsInput": {
            "tickets": [
                590
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
                592
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
                422
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
                590
            ],
            "ticketConfigurations": [
                593
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
            "__typename": [
                1
            ]
        },
        "EventVenueSeatsUpdateInput": {
            "updateSeats": [
                598
            ],
            "createSeats": [
                599
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
                444
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
                444
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
                446
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
                446
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
                422
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
                422
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
                422
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
                422
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
                592
            ],
            "__typename": [
                1
            ]
        },
        "PlayerShopProductPurshaseInput": {
            "items": [
                608
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
                82
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
                450
            ],
            "metadata": [
                422
            ],
            "visibleAt": [
                12
            ],
            "currency": [
                323
            ],
            "items": [
                452
            ],
            "currencyPrices": [
                451
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
                450
            ],
            "metadata": [
                422
            ],
            "visibleAt": [
                12
            ],
            "currency": [
                323
            ],
            "items": [
                452
            ],
            "currencyPrices": [
                451
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
                422
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
                422
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
                614
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
                82
            ],
            "add": [
                82
            ],
            "remove": [
                82
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
                422
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
                422
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
                422
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
                422
            ],
            "__typename": [
                1
            ]
        },
        "PlayerCurrencyUpdateInput": {
            "items": [
                620
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
                515
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
            "__typename": [
                1
            ]
        },
        "UpdateMarketplaceAppInput": {
            "manifest": [
                515
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
                82
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
                361
            ],
            "priceAmountCents": [
                82
            ],
            "currency": [
                1
            ],
            "trialDays": [
                82
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
                515
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
                82
            ],
            "moduleBundleSize": [
                82
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
                629
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
                370
            ],
            "objectId": [
                10
            ],
            "entries": [
                634
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
                368
            ],
            "visibility": [
                369
            ],
            "__typename": [
                1
            ]
        },
        "RemoveObjectMetadataInput": {
            "objectType": [
                370
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
                370
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
                374
            ],
            "required": [
                4
            ],
            "unique": [
                4
            ],
            "order": [
                82
            ],
            "visibility": [
                21
            ],
            "editability": [
                22
            ],
            "options": [
                637
            ],
            "defaultValue": [
                1
            ],
            "validationRegex": [
                1
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
                82
            ],
            "visibility": [
                21
            ],
            "editability": [
                22
            ],
            "options": [
                637
            ],
            "defaultValue": [
                1
            ],
            "validationRegex": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "SetCustomFieldValuesInput": {
            "objectType": [
                370
            ],
            "objectId": [
                10
            ],
            "fields": [
                640
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
        "Subscription": {
            "validationProgress": [
                259,
                {
                    "jobId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "validationEvents": [
                261,
                {
                    "jobId": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "journalEntryAdded": [
                336,
                {
                    "filters": [
                        473
                    ]
                }
            ],
            "presenceUserConnected": [
                385
            ],
            "presenceUserDisconnected": [
                387
            ],
            "__typename": [
                1
            ]
        }
    }
}