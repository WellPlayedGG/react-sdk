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
        81,
        91,
        97,
        100,
        106,
        109,
        114,
        119,
        122,
        126,
        130,
        143,
        144,
        153,
        155,
        157,
        158,
        163,
        165,
        168,
        174,
        179,
        187,
        191,
        195,
        197,
        201,
        203,
        205,
        207,
        208,
        210,
        216,
        218,
        221,
        224,
        227,
        229,
        231,
        234,
        237,
        239,
        240,
        243,
        246,
        251,
        253,
        257,
        259,
        261,
        262,
        263,
        276,
        278,
        290,
        291,
        292,
        302,
        309,
        322,
        333,
        336,
        337,
        348,
        355,
        360,
        367,
        368,
        369,
        373,
        397,
        410,
        412,
        453,
        460,
        461,
        462,
        472,
        475,
        476,
        495,
        498,
        584
    ],
    "types": {
        "JournalPayload": {
            "_typename": [
                1
            ],
            "on_RuleEngineAdvancementRuleFiredPayload": [
                152
            ],
            "on_RuleEngineCrossStepTransferredPayload": [
                154
            ],
            "on_RuleEngineEffectAdvancePayload": [
                156
            ],
            "on_RuleEngineEffectCreateGroupPayload": [
                159
            ],
            "on_RuleEngineEffectEliminatePayload": [
                160
            ],
            "on_RuleEngineEffectEmitSeedingPinPayload": [
                161
            ],
            "on_RuleEngineEffectEndStepPayload": [
                162
            ],
            "on_RuleEngineEffectSetMetadataPayload": [
                164
            ],
            "on_RuleEngineGenerationScriptRanPayload": [
                166
            ],
            "on_RuleEngineManualOverridePayload": [
                167
            ],
            "on_TournamentsStepResetPayload": [
                170
            ],
            "on_TournamentsStepGeneratedPayload": [
                171
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
                340
            ],
            "on_PlayerActorContext": [
                341
            ],
            "on_SystemActorContext": [
                342
            ],
            "on_MarketplaceModuleActorContext": [
                343
            ],
            "on_ApiClientActorContext": [
                344
            ],
            "on_WebhookCallbackActorContext": [
                345
            ],
            "on_SimulationActorContext": [
                346
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
                453
            ],
            "name": [
                1
            ],
            "permissions": [
                13
            ],
            "organizationId": [
                453
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
                453
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
                453
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
                453
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
                453
            ],
            "organizationId": [
                453
            ],
            "groupId": [
                453
            ],
            "memberId": [
                453
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
                453
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
                453
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
                453
            ],
            "tournamentSeriesId": [
                453
            ],
            "visibleAt": [
                11
            ],
            "teams": [
                183,
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
                186
            ],
            "createdBy": [
                75
            ],
            "myTeam": [
                182
            ],
            "teamScores": [
                185
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
                453
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
                453
            ],
            "ownerId": [
                453
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
                453
            ],
            "organizationIdentityProviderId": [
                453
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
            "organizationIdentityProvider": [
                68
            ],
            "__typename": [
                1
            ]
        },
        "Player": {
            "id": [
                453
            ],
            "username": [
                1
            ],
            "description": [
                1
            ],
            "ownerId": [
                453
            ],
            "organizationCustomId": [
                453
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
                453
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
                        453,
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
                453
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
                79
            ],
            "createdById": [
                453
            ],
            "organizationId": [
                453
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
                453
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
                453
            ],
            "playerProfileId": [
                453
            ],
            "__typename": [
                1
            ]
        },
        "Int": {},
        "LeaderboardSeasonBucketScores": {
            "edges": [
                83
            ],
            "nodes": [
                80
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
                80
            ],
            "__typename": [
                1
            ]
        },
        "Leaderboard": {
            "id": [
                453
            ],
            "organizationId": [
                453
            ],
            "ownerId": [
                453
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
                86
            ],
            "nodes": [
                84
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
                84
            ],
            "__typename": [
                1
            ]
        },
        "LeaderboardSeason": {
            "id": [
                453
            ],
            "leaderboardId": [
                453
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
        "LeaderboardSeasonEdge": {
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
        "LeaderboardSeasonBucket": {
            "id": [
                453
            ],
            "seasonId": [
                453
            ],
            "name": [
                1
            ],
            "minScore": [
                17
            ],
            "scoreCalculationType": [
                91
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
                93
            ],
            "nodes": [
                90
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
                90
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
                97
            ],
            "validation_errors": [
                95
            ],
            "validation_records": [
                94
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
                98
            ],
            "ssl": [
                96
            ],
            "status": [
                100
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
                453
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
                453
            ],
            "__typename": [
                1
            ]
        },
        "EmailTemplates": {
            "edges": [
                103
            ],
            "nodes": [
                101
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
                101
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
                453
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
                106
            ],
            "requirements": [
                104
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
                109
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
                107
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
                108
            ],
            "events": [
                110
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
                114
            ],
            "label": [
                1
            ],
            "activePages": [
                1
            ],
            "size": [
                112
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
                113
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
                111
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
                116
            ],
            "__typename": [
                1
            ]
        },
        "PlatformCdnFile": {
            "id": [
                453
            ],
            "platformId": [
                453
            ],
            "platformTemplateId": [
                453
            ],
            "name": [
                1
            ],
            "type": [
                119
            ],
            "updatedAt": [
                11
            ],
            "createdAt": [
                11
            ],
            "config": [
                117
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
                120
            ],
            "url": [
                122
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
                123
            ],
            "__typename": [
                1
            ]
        },
        "MarketplaceAppRelease": {
            "id": [
                453
            ],
            "marketplaceAppId": [
                453
            ],
            "version": [
                1
            ],
            "status": [
                126
            ],
            "manifest": [
                115
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
                124
            ],
            "reviewedAt": [
                11
            ],
            "createdAt": [
                11
            ],
            "__typename": [
                1
            ]
        },
        "MarketplaceAppReleaseStatus": {},
        "AppReleaseWithUploadUrls": {
            "release": [
                125
            ],
            "extensionUploadUrl": [
                121
            ],
            "moduleUploadUrl": [
                121
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
                453
            ],
            "appId": [
                453
            ],
            "version": [
                1
            ],
            "notes": [
                1
            ],
            "manifest": [
                115
            ],
            "status": [
                130
            ],
            "reviewResult": [
                124
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
                453
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
                131
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
                453
            ],
            "organizationId": [
                453
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
            "configuration": [
                132
            ],
            "creator": [
                75
            ],
            "manifest": [
                115
            ],
            "releases": [
                129
            ],
            "appWebhooks": [
                136
            ],
            "__typename": [
                1
            ]
        },
        "OrganizationApps": {
            "edges": [
                135
            ],
            "nodes": [
                133
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
                133
            ],
            "__typename": [
                1
            ]
        },
        "AppWebhook": {
            "id": [
                453
            ],
            "appId": [
                453
            ],
            "installationId": [
                453
            ],
            "organizationId": [
                453
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
            "__typename": [
                1
            ]
        },
        "OrganizationAttachedApp": {
            "organizationId": [
                453
            ],
            "groupId": [
                453
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
                133
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
                139
            ],
            "nodes": [
                137
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
                137
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
                453
            ],
            "identityProviderId": [
                453
            ],
            "configuration": [
                141
            ],
            "name": [
                1
            ],
            "organizationId": [
                453
            ],
            "createdAt": [
                11
            ],
            "updatedAt": [
                11
            ],
            "parentIdentityProvider": [
                105
            ],
            "__typename": [
                1
            ]
        },
        "IdentityProviderConfigurations": {
            "on_OAuthClientConfiguration": [
                142
            ],
            "on_OpenidConfiguration": [
                145
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
                143
            ],
            "clientId": [
                1
            ],
            "clientSecret": [
                1
            ],
            "tokenEndpointAuthMethod": [
                144
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
                143
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
                453
            ],
            "organizationId": [
                453
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
                453
            ],
            "playerProfileId": [
                453
            ],
            "ratingId": [
                453
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
                453
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
                453
            ],
            "ruleName": [
                1
            ],
            "ruleSetId": [
                453
            ],
            "ruleSetVersion": [
                81
            ],
            "triggerType": [
                153
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
                149
            ],
            "actionSource": [
                1
            ],
            "engineTiming": [
                148
            ],
            "printOutput": [
                1
            ],
            "printOutputTruncated": [
                4
            ],
            "error": [
                150
            ],
            "manualOverride": [
                151
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
                453
            ],
            "targetStepId": [
                453
            ],
            "dataSource": [
                155
            ],
            "keyCount": [
                81
            ],
            "firstKeySamples": [
                1
            ],
            "engineTiming": [
                148
            ],
            "error": [
                150
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
                157
            ],
            "targetTeamId": [
                453
            ],
            "fromStepId": [
                453
            ],
            "toStepId": [
                453
            ],
            "beforeStatus": [
                158
            ],
            "afterStatus": [
                158
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
                157
            ],
            "stepId": [
                453
            ],
            "groupId": [
                453
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
                157
            ],
            "targetTeamId": [
                453
            ],
            "stepId": [
                453
            ],
            "beforeStatus": [
                158
            ],
            "afterStatus": [
                158
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
                157
            ],
            "stepId": [
                453
            ],
            "groupId": [
                453
            ],
            "gameId": [
                453
            ],
            "slotIndex": [
                81
            ],
            "targetTeamId": [
                453
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
                157
            ],
            "stepId": [
                453
            ],
            "beforeStepStatus": [
                163
            ],
            "afterStepStatus": [
                163
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
                157
            ],
            "targetType": [
                165
            ],
            "targetId": [
                453
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
                453
            ],
            "script": [
                1
            ],
            "engineTiming": [
                148
            ],
            "printOutput": [
                1
            ],
            "printOutputTruncated": [
                4
            ],
            "error": [
                150
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
                453
            ],
            "overriddenBy": [
                453
            ],
            "reason": [
                1
            ],
            "effect": [
                168
            ],
            "__typename": [
                1
            ]
        },
        "ManualOverrideEffect": {},
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
                453
            ],
            "previousStatus": [
                163
            ],
            "newStatus": [
                163
            ],
            "reason": [
                1
            ],
            "cascade": [
                169
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
                453
            ],
            "ruleSetId": [
                453
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
                453
            ],
            "groupId": [
                453
            ],
            "gameId": [
                453
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
                453
            ],
            "order": [
                17
            ],
            "status": [
                174
            ],
            "tournamentStepGroupRoundGameId": [
                453
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
        "TournamentStepGroupRoundGameMatchEdge": {
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
                453
            ],
            "status": [
                179
            ],
            "tournamentTeamId": [
                453
            ],
            "playerProfileId": [
                453
            ],
            "createdAt": [
                11
            ],
            "updatedAt": [
                11
            ],
            "team": [
                182
            ],
            "__typename": [
                1
            ]
        },
        "TournamentTeamMemberStatus": {},
        "TeamMembers": {
            "edges": [
                181
            ],
            "nodes": [
                178
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
                178
            ],
            "__typename": [
                1
            ]
        },
        "TournamentTeam": {
            "id": [
                453
            ],
            "name": [
                1
            ],
            "tag": [
                1
            ],
            "teamId": [
                453
            ],
            "managerId": [
                453
            ],
            "tournamentId": [
                453
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
                178
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
        "TournamentTeamEdge": {
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
        "TournamentTeamScore": {
            "teamId": [
                453
            ],
            "score": [
                17
            ],
            "team": [
                182
            ],
            "__typename": [
                1
            ]
        },
        "TournamentStep": {
            "id": [
                453
            ],
            "tournamentId": [
                453
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
                187
            ],
            "status": [
                163
            ],
            "configuration": [
                30
            ],
            "seedingOrder": [
                453
            ],
            "createdAt": [
                11
            ],
            "updatedAt": [
                11
            ],
            "teamScores": [
                185
            ],
            "tournament": [
                57
            ],
            "manualPins": [
                172
            ],
            "__typename": [
                1
            ]
        },
        "StepType": {},
        "Tournaments": {
            "edges": [
                189
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
        "TournamentStepGroupRoundGame": {
            "id": [
                453
            ],
            "configuration": [
                26
            ],
            "status": [
                191
            ],
            "order": [
                17
            ],
            "tournamentStepGroupRoundId": [
                453
            ],
            "createdAt": [
                11
            ],
            "updatedAt": [
                11
            ],
            "matches": [
                173
            ],
            "gameLinks": [
                194
            ],
            "winningGameId": [
                453
            ],
            "losingGameId": [
                453
            ],
            "__typename": [
                1
            ]
        },
        "TournamentGameStatus": {},
        "TournamentStepGroupRound": {
            "id": [
                453
            ],
            "name": [
                1
            ],
            "configuration": [
                28
            ],
            "tournamentStepGroupId": [
                453
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
                190
            ],
            "__typename": [
                1
            ]
        },
        "TournamentStepGroup": {
            "id": [
                453
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
                453
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
                192
            ],
            "__typename": [
                1
            ]
        },
        "GameLink": {
            "id": [
                453
            ],
            "sourceGameId": [
                453
            ],
            "targetGameId": [
                453
            ],
            "outcome": [
                195
            ],
            "__typename": [
                1
            ]
        },
        "GameLinkOutcome": {},
        "TournamentStepGroupRoundGameMatchScore": {
            "id": [
                453
            ],
            "matchId": [
                453
            ],
            "teamId": [
                453
            ],
            "score": [
                17
            ],
            "status": [
                197
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
                199
            ],
            "nodes": [
                196
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
                196
            ],
            "__typename": [
                1
            ]
        },
        "TournamentAdmin": {
            "id": [
                453
            ],
            "tournamentId": [
                453
            ],
            "accountId": [
                453
            ],
            "permissions": [
                201
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
                203
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
                453
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
                153
            ],
            "triggerScope": [
                1
            ],
            "condition": [
                1
            ],
            "actions": [
                202
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
                205
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
                453
            ],
            "order": [
                81
            ],
            "type": [
                207
            ],
            "formula": [
                1
            ],
            "sortOrder": [
                208
            ],
            "__typename": [
                1
            ]
        },
        "TiebreakerType": {},
        "SortOrder": {},
        "ScoringRuleSetModel": {
            "id": [
                453
            ],
            "aggregation": [
                210
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
                206
            ],
            "__typename": [
                1
            ]
        },
        "ScoreAggregationType": {},
        "GameTemplateModel": {
            "id": [
                453
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
                453
            ],
            "name": [
                1
            ],
            "order": [
                81
            ],
            "gameTemplates": [
                211
            ],
            "__typename": [
                1
            ]
        },
        "GroupTemplateModel": {
            "id": [
                453
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
                212
            ],
            "__typename": [
                1
            ]
        },
        "StructureTemplateModel": {
            "id": [
                453
            ],
            "groupTemplates": [
                213
            ],
            "__typename": [
                1
            ]
        },
        "CrossStepUsageModel": {
            "type": [
                216
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
                453
            ],
            "sourceStepId": [
                453
            ],
            "sourceRelative": [
                218
            ],
            "dataSource": [
                155
            ],
            "usage": [
                215
            ],
            "__typename": [
                1
            ]
        },
        "StepRelativePosition": {},
        "StepRuleSetModel": {
            "id": [
                453
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
                209
            ],
            "advancementRules": [
                204
            ],
            "crossStepRules": [
                217
            ],
            "structureTemplate": [
                214
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
                221
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
                453
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
                220
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
                224
            ],
            "parameters": [
                220
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
                227
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
                229
            ],
            "phase": [
                227
            ],
            "originHelper": [
                1
            ],
            "hint": [
                1
            ],
            "snippet": [
                225
            ],
            "stackFrames": [
                226
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
                231
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
                228
            ],
            "warnings": [
                230
            ],
            "__typename": [
                1
            ]
        },
        "SimulatedEffectModel": {
            "type": [
                234
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
                228
            ],
            "warnings": [
                230
            ],
            "effectsSummary": [
                233
            ],
            "partialEffectsSummary": [
                233
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
                237
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
                453
            ],
            "code": [
                239
            ],
            "message": [
                1
            ],
            "hint": [
                1
            ],
            "invariantCode": [
                240
            ],
            "luaError": [
                236
            ],
            "offender": [
                241
            ],
            "__typename": [
                1
            ]
        },
        "ValidationErrorCode": {},
        "InvariantCode": {},
        "InvariantOffenderUnion": {
            "on_RuleOffenderModel": [
                242
            ],
            "on_CrossStepRuleOffenderModel": [
                244
            ],
            "on_GameOffenderModel": [
                245
            ],
            "on_RoundOffenderModel": [
                247
            ],
            "on_GroupOffenderModel": [
                248
            ],
            "on_TeamOffenderModel": [
                249
            ],
            "on_ScoreRowOffenderModel": [
                250
            ],
            "__typename": [
                1
            ]
        },
        "RuleOffenderModel": {
            "kind": [
                243
            ],
            "ruleId": [
                453
            ],
            "ruleName": [
                1
            ],
            "trigger": [
                153
            ],
            "__typename": [
                1
            ]
        },
        "OffenderKind": {},
        "CrossStepRuleOffenderModel": {
            "kind": [
                243
            ],
            "crossStepRuleId": [
                453
            ],
            "dataSource": [
                155
            ],
            "usage": [
                216
            ],
            "__typename": [
                1
            ]
        },
        "GameOffenderModel": {
            "kind": [
                243
            ],
            "gameId": [
                453
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
                246
            ],
            "__typename": [
                1
            ]
        },
        "GameStatus": {},
        "RoundOffenderModel": {
            "kind": [
                243
            ],
            "roundId": [
                453
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
                243
            ],
            "groupId": [
                453
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
                243
            ],
            "teamId": [
                453
            ],
            "teamName": [
                1
            ],
            "currentStatus": [
                158
            ],
            "__typename": [
                1
            ]
        },
        "ScoreRowOffenderModel": {
            "kind": [
                243
            ],
            "scope": [
                251
            ],
            "scoreRowId": [
                453
            ],
            "teamId": [
                453
            ],
            "score": [
                17
            ],
            "rank": [
                81
            ],
            "status": [
                158
            ],
            "__typename": [
                1
            ]
        },
        "ScoreRowScope": {},
        "InvariantResultModel": {
            "code": [
                240
            ],
            "severity": [
                253
            ],
            "passed": [
                4
            ],
            "message": [
                1
            ],
            "offenders": [
                241
            ],
            "__typename": [
                1
            ]
        },
        "InvariantSeverity": {},
        "RuleFireSummaryModel": {
            "ruleId": [
                453
            ],
            "ruleName": [
                1
            ],
            "trigger": [
                153
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
                252
            ],
            "errors": [
                238
            ],
            "ruleFiredSummary": [
                254
            ],
            "__typename": [
                1
            ]
        },
        "ValidationProgressModel": {
            "stage": [
                257
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
                453
            ],
            "stepRuleSetId": [
                453
            ],
            "status": [
                259
            ],
            "stage": [
                257
            ],
            "progress": [
                256
            ],
            "result": [
                255
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
                453
            ],
            "jobId": [
                453
            ],
            "sequence": [
                81
            ],
            "timestamp": [
                11
            ],
            "kind": [
                261
            ],
            "summary": [
                1
            ],
            "ruleId": [
                453
            ],
            "crossStepRuleId": [
                453
            ],
            "matchId": [
                453
            ],
            "gameId": [
                453
            ],
            "roundId": [
                453
            ],
            "groupId": [
                453
            ],
            "stepId": [
                453
            ],
            "teamId": [
                453
            ],
            "effectType": [
                262
            ],
            "statusBefore": [
                263
            ],
            "statusAfter": [
                263
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
                265
            ],
            "nodes": [
                258
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
                258
            ],
            "__typename": [
                1
            ]
        },
        "ValidationEvents": {
            "edges": [
                267
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
        "ValidationEventModelEdge": {
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
        "Currency": {
            "id": [
                453
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
                453
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
                270
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
        "CurrencyEdge": {
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
        "PlayerCurrency": {
            "id": [
                453
            ],
            "playerProfileId": [
                453
            ],
            "currencyId": [
                453
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
                273
            ],
            "nodes": [
                271
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
                271
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
            "__typename": [
                1
            ]
        },
        "UserGroupMember": {
            "id": [
                453
            ],
            "groupId": [
                453
            ],
            "playerProfileId": [
                453
            ],
            "status": [
                276
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
                453
            ],
            "organizationId": [
                453
            ],
            "managerId": [
                453
            ],
            "createdAt": [
                11
            ],
            "updatedAt": [
                11
            ],
            "status": [
                278
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
                280
            ],
            "nodes": [
                277
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
                277
            ],
            "__typename": [
                1
            ]
        },
        "UserGroupMembers": {
            "edges": [
                282
            ],
            "nodes": [
                275
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
                275
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
                283
            ],
            "__typename": [
                1
            ]
        },
        "EventVenueSeat": {
            "id": [
                453
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
                284
            ],
            "seatTypeId": [
                453
            ],
            "__typename": [
                1
            ]
        },
        "EventVenueSeatsUpdateResult": {
            "updatedSeats": [
                285
            ],
            "createdSeats": [
                285
            ],
            "deletedSeats": [
                285
            ],
            "__typename": [
                1
            ]
        },
        "EventVenueSeats": {
            "edges": [
                288
            ],
            "nodes": [
                285
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
                285
            ],
            "__typename": [
                1
            ]
        },
        "EventConfiguration": {
            "customFields": [
                18
            ],
            "groupConfiguration": [
                274
            ],
            "maxTicketsPerReservation": [
                17
            ],
            "reservationStatusAfterPayment": [
                290
            ],
            "reservationStatusAfterRegistration": [
                291
            ],
            "sessionDuration": [
                17
            ],
            "allowForNewSessionAfterTimeout": [
                4
            ],
            "seatAssignmentMode": [
                292
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
                453
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
                289
            ],
            "eventVenueId": [
                453
            ],
            "organizationId": [
                453
            ],
            "createdById": [
                453
            ],
            "decryptionKey": [
                1
            ],
            "venue": [
                317
            ],
            "__typename": [
                1
            ]
        },
        "EventInterface": {
            "id": [
                453
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
                289
            ],
            "eventVenueId": [
                453
            ],
            "organizationId": [
                453
            ],
            "createdById": [
                453
            ],
            "decryptionKey": [
                1
            ],
            "venue": [
                317
            ],
            "on_Event": [
                293
            ],
            "on_EventWithUserReservation": [
                295
            ],
            "__typename": [
                1
            ]
        },
        "EventWithUserReservation": {
            "id": [
                453
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
                289
            ],
            "eventVenueId": [
                453
            ],
            "organizationId": [
                453
            ],
            "createdById": [
                453
            ],
            "decryptionKey": [
                1
            ],
            "venue": [
                317
            ],
            "myReservation": [
                303
            ],
            "__typename": [
                1
            ]
        },
        "Events": {
            "edges": [
                297
            ],
            "nodes": [
                293
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
                293
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
                453
            ],
            "ticketId": [
                453
            ],
            "reservationId": [
                453
            ],
            "groupMemberId": [
                453
            ],
            "seatId": [
                453
            ],
            "createdAt": [
                11
            ],
            "updatedAt": [
                11
            ],
            "configuration": [
                298
            ],
            "__typename": [
                1
            ]
        },
        "EventReservationTicketWithQrCode": {
            "id": [
                453
            ],
            "ticketId": [
                453
            ],
            "reservationId": [
                453
            ],
            "groupMemberId": [
                453
            ],
            "seatId": [
                453
            ],
            "createdAt": [
                11
            ],
            "updatedAt": [
                11
            ],
            "configuration": [
                298
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
                453
            ],
            "name": [
                1
            ],
            "status": [
                302
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
                453
            ],
            "groupId": [
                453
            ],
            "tickets": [
                299
            ],
            "groupStatus": [
                278
            ],
            "__typename": [
                1
            ]
        },
        "EventReservationStatus": {},
        "EventReservationWithTicketsAndQrCode": {
            "id": [
                453
            ],
            "name": [
                1
            ],
            "status": [
                302
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
                453
            ],
            "groupId": [
                453
            ],
            "groupStatus": [
                278
            ],
            "tickets": [
                300
            ],
            "__typename": [
                1
            ]
        },
        "EventReservations": {
            "edges": [
                305
            ],
            "nodes": [
                306
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
                306
            ],
            "__typename": [
                1
            ]
        },
        "OmitObjectType": {
            "id": [
                453
            ],
            "name": [
                1
            ],
            "status": [
                302
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
                453
            ],
            "groupId": [
                453
            ],
            "groupStatus": [
                278
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
                453
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
                284
            ],
            "seatTypeId": [
                453
            ],
            "status": [
                309
            ],
            "reservedByTicketId": [
                453
            ],
            "reservedByReservationId": [
                453
            ],
            "reservedByGroupMemberId": [
                453
            ],
            "__typename": [
                1
            ]
        },
        "EventSeatStatus": {},
        "EventSeats": {
            "edges": [
                311
            ],
            "nodes": [
                308
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
                308
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
                453
            ],
            "name": [
                1
            ],
            "description": [
                1
            ],
            "configuration": [
                312
            ],
            "createdAt": [
                11
            ],
            "updatedAt": [
                11
            ],
            "venueId": [
                453
            ],
            "__typename": [
                1
            ]
        },
        "EventVenueSeatTypes": {
            "edges": [
                315
            ],
            "nodes": [
                313
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
                313
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
                453
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
                316
            ],
            "organizationId": [
                453
            ],
            "__typename": [
                1
            ]
        },
        "EventVenues": {
            "edges": [
                319
            ],
            "nodes": [
                317
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
                317
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
                453
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
                322
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
                453
            ],
            "seatTypeId": [
                453
            ],
            "configuration": [
                320
            ],
            "__typename": [
                1
            ]
        },
        "ShopCurrencies": {},
        "Item": {
            "id": [
                453
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
                453
            ],
            "categoryId": [
                453
            ],
            "__typename": [
                1
            ]
        },
        "Items": {
            "edges": [
                325
            ],
            "nodes": [
                323
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
                323
            ],
            "__typename": [
                1
            ]
        },
        "PlayerItem": {
            "id": [
                453
            ],
            "playerProfileId": [
                453
            ],
            "itemId": [
                453
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
                328
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
        "PlayerItemEdge": {
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
        "ItemCategory": {
            "id": [
                453
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
                453
            ],
            "__typename": [
                1
            ]
        },
        "ItemCategories": {
            "edges": [
                331
            ],
            "nodes": [
                329
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
                329
            ],
            "__typename": [
                1
            ]
        },
        "JournalActor": {
            "type": [
                333
            ],
            "id": [
                453
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
                453
            ],
            "__typename": [
                1
            ]
        },
        "JournalEntry": {
            "id": [
                453
            ],
            "category": [
                336
            ],
            "type": [
                1
            ],
            "severity": [
                337
            ],
            "actor": [
                332
            ],
            "primaryResource": [
                334
            ],
            "secondaryResources": [
                334
            ],
            "payload": [
                0
            ],
            "parentEntryId": [
                453
            ],
            "correlationId": [
                453
            ],
            "createdAt": [
                11
            ],
            "children": [
                338,
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
                339
            ],
            "nodes": [
                335
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
                335
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
                453
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
                453
            ],
            "accountId": [
                453
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
                453
            ],
            "marketplaceAppId": [
                453
            ],
            "installationId": [
                453
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
                453
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
                453
            ],
            "deliveryId": [
                453
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
                453
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
                453
            ],
            "organizationAppId": [
                453
            ],
            "status": [
                348
            ],
            "manifest": [
                115
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
            "reviews": [
                352,
                {
                    "page": [
                        58
                    ]
                }
            ],
            "stats": [
                358
            ],
            "installation": [
                354
            ],
            "pricing": [
                359
            ],
            "__typename": [
                1
            ]
        },
        "MarketplaceAppStatus": {},
        "MarketplaceApps": {
            "edges": [
                350
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
        "MarketplaceAppEdge": {
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
        "MarketplaceAppReview": {
            "id": [
                453
            ],
            "marketplaceAppId": [
                453
            ],
            "organizationId": [
                453
            ],
            "accountId": [
                453
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
                353
            ],
            "nodes": [
                351
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
                351
            ],
            "__typename": [
                1
            ]
        },
        "MarketplaceAppInstallation": {
            "id": [
                453
            ],
            "marketplaceAppId": [
                453
            ],
            "organizationId": [
                453
            ],
            "installedById": [
                453
            ],
            "status": [
                355
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
            "marketplaceApp": [
                347
            ],
            "__typename": [
                1
            ]
        },
        "MarketplaceInstallationStatus": {},
        "MarketplaceAppInstallations": {
            "edges": [
                357
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
        "MarketplaceAppInstallationEdge": {
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
                453
            ],
            "marketplaceAppId": [
                453
            ],
            "type": [
                360
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
                453
            ],
            "platformId": [
                453
            ],
            "marketplaceAppId": [
                453
            ],
            "moduleName": [
                1
            ],
            "props": [
                361
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
                453
            ],
            "marketplaceAppId": [
                453
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
                108
            ],
            "events": [
                110
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
                453
            ],
            "appId": [
                453
            ],
            "__typename": [
                1
            ]
        },
        "EntityMetafield": {
            "id": [
                453
            ],
            "organizationId": [
                453
            ],
            "appId": [
                453
            ],
            "namespace": [
                1
            ],
            "entityType": [
                1
            ],
            "entityId": [
                453
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
        "ObjectMetadata": {
            "key": [
                1
            ],
            "value": [
                1
            ],
            "type": [
                367
            ],
            "visibility": [
                368
            ],
            "objectType": [
                369
            ],
            "objectId": [
                453
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
                453
            ],
            "entries": [
                366
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
                453
            ],
            "objectType": [
                369
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
                373
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
                371
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
            "__typename": [
                1
            ]
        },
        "CustomFieldType": {},
        "CustomFieldWithValueModel": {
            "definition": [
                372
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
                453
            ],
            "fields": [
                374
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
                99
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
                453
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
                379
            ],
            "organizationId": [
                453
            ],
            "appId": [
                1
            ],
            "customDomains": [
                376
            ],
            "__typename": [
                1
            ]
        },
        "PlatformTemplate": {
            "id": [
                453
            ],
            "name": [
                1
            ],
            "description": [
                1
            ],
            "screenshotUrl": [
                122
            ],
            "createdAt": [
                11
            ],
            "updatedAt": [
                11
            ],
            "ownerId": [
                453
            ],
            "organizationId": [
                453
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
                453
            ],
            "serverId": [
                453
            ],
            "playerId": [
                453
            ],
            "accountId": [
                453
            ],
            "organizationId": [
                453
            ],
            "__typename": [
                1
            ]
        },
        "UsersConnectedEvent": {
            "usersConnected": [
                383
            ],
            "__typename": [
                1
            ]
        },
        "UserDisconnectEvent": {
            "sessionId": [
                453
            ],
            "serverId": [
                453
            ],
            "playerId": [
                453
            ],
            "accountId": [
                453
            ],
            "organizationId": [
                453
            ],
            "__typename": [
                1
            ]
        },
        "UsersDisconnectedEvent": {
            "usersDisconnected": [
                385
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
                453
            ],
            "playerProfileId": [
                453
            ],
            "shopProductId": [
                453
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
                390
            ],
            "nodes": [
                388
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
                388
            ],
            "__typename": [
                1
            ]
        },
        "ShopCategory": {
            "id": [
                453
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
                453
            ],
            "__typename": [
                1
            ]
        },
        "ShopCategories": {
            "edges": [
                393
            ],
            "nodes": [
                391
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
                391
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
                453
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
                397
            ],
            "id": [
                453
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
                453
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
                453
            ],
            "price": [
                17
            ],
            "configuration": [
                394
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
                453
            ],
            "currency": [
                322
            ],
            "items": [
                396
            ],
            "currencyPrices": [
                395
            ],
            "__typename": [
                1
            ]
        },
        "ShopProducts": {
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
        "ShopProductEdge": {
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
        "Shop": {
            "id": [
                453
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
                453
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
        "ShopEdge": {
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
        "ShopProductItem": {
            "id": [
                453
            ],
            "currencyId": [
                453
            ],
            "createdAt": [
                11
            ],
            "updatedAt": [
                11
            ],
            "type": [
                397
            ],
            "shopItemId": [
                453
            ],
            "itemId": [
                453
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
        "ShopProductItemEdge": {
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
        "SkillRatingConfiguration": {
            "updateLeaderboardId": [
                453
            ],
            "__typename": [
                1
            ]
        },
        "OrganizationSkillRatingsRegisterMatchPlayer": {
            "id": [
                453
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
                453
            ],
            "name": [
                1
            ],
            "description": [
                1
            ],
            "type": [
                410
            ],
            "configuration": [
                407
            ],
            "organizationId": [
                453
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
                412
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
                453
            ],
            "name": [
                1
            ],
            "description": [
                1
            ],
            "limitsOverride": [
                411
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
                453
            ],
            "subscriptionItemId": [
                453
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
                413
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
                415
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
                417
            ],
            "mappingConfiguration": [
                416
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
                422
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
                423
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
                424
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
                426
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
            "groups": [
                427
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
                453
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
                429
            ],
            "stringCondition": [
                431
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
                453
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
                453
            ],
            "condition": [
                432
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
                431
            ],
            "numericCondition": [
                430
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
                435
            ],
            "memberConditions": [
                434
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
                436
            ],
            "customFields": [
                420
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
                433
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
                439
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
                442
            ],
            "__typename": [
                1
            ]
        },
        "EventConfigurationInput": {
            "customFields": [
                420
            ],
            "groupConfiguration": [
                441
            ],
            "maxTicketsPerReservation": [
                17
            ],
            "reservationStatusAfterPayment": [
                290
            ],
            "reservationStatusAfterRegistration": [
                291
            ],
            "sessionDuration": [
                17
            ],
            "allowForNewSessionAfterTimeout": [
                4
            ],
            "seatAssignmentMode": [
                292
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
                420
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
                453
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
                397
            ],
            "id": [
                453
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
                453
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
                78,
                {
                    "id": [
                        453,
                        "ID!"
                    ]
                }
            ],
            "leaderboardCurrentPlayerRanking": [
                80,
                {
                    "input": [
                        455,
                        "LeaderboardGetPlayerRankingInput!"
                    ]
                }
            ],
            "leaderboards": [
                85,
                {
                    "page": [
                        58,
                        "PageInfo!"
                    ]
                }
            ],
            "leaderboard": [
                84,
                {
                    "id": [
                        453,
                        "ID!"
                    ]
                }
            ],
            "currentLeaderboardSeason": [
                87,
                {
                    "leaderboardId": [
                        453,
                        "ID!"
                    ]
                }
            ],
            "leaderboardSeasons": [
                88,
                {
                    "leaderboardId": [
                        453,
                        "ID!"
                    ],
                    "page": [
                        58,
                        "PageInfo!"
                    ]
                }
            ],
            "leaderboardSeason": [
                87,
                {
                    "id": [
                        453,
                        "ID!"
                    ]
                }
            ],
            "leaderboardSeasonBuckets": [
                92,
                {
                    "seasonId": [
                        453,
                        "ID!"
                    ],
                    "page": [
                        58,
                        "PageInfo!"
                    ]
                }
            ],
            "leaderboardSeasonBucket": [
                90,
                {
                    "id": [
                        453,
                        "ID!"
                    ]
                }
            ],
            "leaderboardSeasonBucketScores": [
                82,
                {
                    "leaderboardSeasonBucketId": [
                        453,
                        "ID!"
                    ],
                    "page": [
                        58,
                        "PageInfo!"
                    ]
                }
            ],
            "organization": [
                69,
                {
                    "id": [
                        453,
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
                        412,
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
                        453,
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
                456
            ],
            "identityProvider": [
                140,
                {
                    "id": [
                        453,
                        "ID!"
                    ]
                }
            ],
            "organizationApp": [
                133,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "organizationApps": [
                134,
                {
                    "page": [
                        58,
                        "PageInfo!"
                    ]
                }
            ],
            "appReleasesByApp": [
                129,
                {
                    "appId": [
                        453,
                        "ID!"
                    ]
                }
            ],
            "appRelease": [
                129,
                {
                    "id": [
                        453,
                        "ID!"
                    ]
                }
            ],
            "webhookAvailableEvents": [
                52
            ],
            "webhooks": [
                146
            ],
            "webhook": [
                146,
                {
                    "id": [
                        453,
                        "ID!"
                    ]
                }
            ],
            "organizationAttachedApps": [
                138,
                {
                    "page": [
                        58,
                        "PageInfo!"
                    ]
                }
            ],
            "availableRootIdentityProvider": [
                105,
                {
                    "id": [
                        453,
                        "ID!"
                    ]
                }
            ],
            "getAvailableRootIdentityProviders": [
                105
            ],
            "emailTemplateConfigurations": [
                48
            ],
            "emailConfiguration": [
                50
            ],
            "emailTemplate": [
                101,
                {
                    "id": [
                        453,
                        "ID!"
                    ]
                }
            ],
            "emailTemplates": [
                102,
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
                        453,
                        "[ID!]"
                    ],
                    "page": [
                        58,
                        "PageInfo!"
                    ],
                    "identityProviders": [
                        453,
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
                72,
                {
                    "id": [
                        453
                    ],
                    "ownerId": [
                        453
                    ],
                    "customId": [
                        1
                    ]
                }
            ],
            "playerSkillRatings": [
                147,
                {
                    "playerId": [
                        453,
                        "ID!"
                    ],
                    "skillRatingIds": [
                        453,
                        "[ID!]"
                    ]
                }
            ],
            "playerMatchesHistory": [
                175,
                {
                    "page": [
                        58,
                        "PageInfo!"
                    ],
                    "playerId": [
                        453,
                        "ID!"
                    ]
                }
            ],
            "tournament": [
                57,
                {
                    "id": [
                        453,
                        "ID!"
                    ]
                }
            ],
            "tournaments": [
                188,
                {
                    "query": [
                        459,
                        "TournamentsQuery!"
                    ],
                    "page": [
                        58,
                        "PageInfo!"
                    ]
                }
            ],
            "tournamentSteps": [
                186,
                {
                    "tournamentId": [
                        453,
                        "ID!"
                    ]
                }
            ],
            "tournamentStep": [
                186,
                {
                    "id": [
                        453,
                        "ID!"
                    ]
                }
            ],
            "tournamentStepGeneratedShape": [
                193,
                {
                    "stepId": [
                        453,
                        "ID!"
                    ]
                }
            ],
            "match": [
                173,
                {
                    "matchId": [
                        453,
                        "ID!"
                    ]
                }
            ],
            "tournamentTeam": [
                182,
                {
                    "teamId": [
                        453,
                        "ID!"
                    ],
                    "memberStatus": [
                        179
                    ]
                }
            ],
            "tournamentTeams": [
                183,
                {
                    "tournamentId": [
                        453,
                        "ID!"
                    ],
                    "page": [
                        58,
                        "PageInfo!"
                    ],
                    "memberStatus": [
                        179
                    ],
                    "status": [
                        59
                    ],
                    "playerUsernameQuery": [
                        1
                    ],
                    "propertiesFilter": [
                        421,
                        "[PropertyValueInput!]"
                    ],
                    "playerPropertiesFilter": [
                        421,
                        "[PropertyValueInput!]"
                    ],
                    "playerIdentityProviderPropertiesFilter": [
                        464,
                        "[IdentityProviderPropertyInput!]"
                    ],
                    "playerProfileIds": [
                        453,
                        "[ID!]"
                    ]
                }
            ],
            "tournamentPlayers": [
                180,
                {
                    "page": [
                        58,
                        "PageInfo!"
                    ],
                    "tournamentId": [
                        453,
                        "ID!"
                    ],
                    "status": [
                        59,
                        "TournamentTeamStatus!"
                    ],
                    "playerUsernameQuery": [
                        1
                    ],
                    "playerPropertiesFilter": [
                        421,
                        "[PropertyValueInput!]"
                    ],
                    "orderByProperty": [
                        465
                    ]
                }
            ],
            "tournamentTeamInvites": [
                180,
                {
                    "page": [
                        58,
                        "PageInfo!"
                    ],
                    "tournamentId": [
                        453
                    ],
                    "status": [
                        179
                    ]
                }
            ],
            "tournamentStepGroupRoundGameMatchScoresGetForStep": [
                198,
                {
                    "stepId": [
                        453,
                        "ID!"
                    ],
                    "page": [
                        58,
                        "PageInfo!"
                    ]
                }
            ],
            "tournamentAdmins": [
                200,
                {
                    "tournamentId": [
                        453,
                        "ID!"
                    ]
                }
            ],
            "stepRuleSet": [
                219,
                {
                    "tournamentStepId": [
                        453,
                        "ID!"
                    ]
                }
            ],
            "presetScripts": [
                222
            ],
            "presetScript": [
                222,
                {
                    "id": [
                        453,
                        "ID!"
                    ]
                }
            ],
            "builtinPresets": [
                223,
                {
                    "category": [
                        224
                    ]
                }
            ],
            "builtinPreset": [
                223,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "validateScript": [
                232,
                {
                    "input": [
                        466,
                        "ValidateScriptInput!"
                    ]
                }
            ],
            "simulateScript": [
                235,
                {
                    "input": [
                        467,
                        "SimulateScriptInput!"
                    ]
                }
            ],
            "stepRuleSetValidationJob": [
                258,
                {
                    "jobId": [
                        453,
                        "ID!"
                    ]
                }
            ],
            "stepRuleSetValidationJobs": [
                264,
                {
                    "stepRuleSetId": [
                        453,
                        "ID!"
                    ],
                    "page": [
                        58,
                        "PageInfo!"
                    ]
                }
            ],
            "stepRuleSetValidationEvents": [
                266,
                {
                    "jobId": [
                        453,
                        "ID!"
                    ],
                    "page": [
                        58,
                        "PageInfo!"
                    ],
                    "kindFilter": [
                        261,
                        "[ValidationEventKind!]"
                    ]
                }
            ],
            "platformFiles": [
                118,
                {
                    "type": [
                        119
                    ],
                    "platformId": [
                        453
                    ],
                    "templateId": [
                        453
                    ]
                }
            ],
            "platformFile": [
                118,
                {
                    "id": [
                        453,
                        "ID!"
                    ]
                }
            ],
            "platforms": [
                380
            ],
            "platform": [
                380,
                {
                    "platformId": [
                        453,
                        "ID!"
                    ]
                }
            ],
            "platformFindFromDomain": [
                380,
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
                        122,
                        "URL!"
                    ]
                }
            ],
            "platformCustomDomains": [
                376,
                {
                    "platformId": [
                        453,
                        "ID!"
                    ]
                }
            ],
            "platformTemplatesPublic": [
                381
            ],
            "platformTemplates": [
                381
            ],
            "platformTemplate": [
                381,
                {
                    "platformTemplateId": [
                        453,
                        "ID!"
                    ]
                }
            ],
            "subscriptionItems": [
                413
            ],
            "organizationCurrentSubscriptionItems": [
                414
            ],
            "journalEntries": [
                338,
                {
                    "page": [
                        58
                    ],
                    "filters": [
                        473
                    ]
                }
            ],
            "journalEntry": [
                335,
                {
                    "id": [
                        453,
                        "ID!"
                    ]
                }
            ],
            "organizationSkillRatings": [
                409
            ],
            "organizationSkillRating": [
                409,
                {
                    "id": [
                        453,
                        "ID!"
                    ]
                }
            ],
            "event": [
                295,
                {
                    "id": [
                        453,
                        "ID!"
                    ]
                }
            ],
            "events": [
                296,
                {
                    "page": [
                        58,
                        "PageInfo!"
                    ],
                    "query": [
                        474
                    ],
                    "eventIds": [
                        453,
                        "[ID!]"
                    ]
                }
            ],
            "eventTicketConfiguration": [
                321,
                {
                    "id": [
                        453,
                        "ID!"
                    ]
                }
            ],
            "eventTicketConfigurations": [
                321,
                {
                    "eventId": [
                        453,
                        "ID!"
                    ]
                }
            ],
            "eventReservationsMyReservations": [
                304,
                {
                    "page": [
                        58,
                        "PageInfo!"
                    ],
                    "status": [
                        302
                    ],
                    "groupStatus": [
                        278
                    ],
                    "eventIds": [
                        453,
                        "[ID!]"
                    ]
                }
            ],
            "eventReservation": [
                301,
                {
                    "reservationId": [
                        453,
                        "ID!"
                    ]
                }
            ],
            "eventSeats": [
                310,
                {
                    "eventId": [
                        453,
                        "ID!"
                    ],
                    "page": [
                        58,
                        "PageInfo!"
                    ],
                    "eventVenueId": [
                        453
                    ],
                    "reservationIds": [
                        453,
                        "[ID!]"
                    ]
                }
            ],
            "eventReservations": [
                304,
                {
                    "eventId": [
                        453,
                        "ID!"
                    ],
                    "page": [
                        58,
                        "PageInfo!"
                    ],
                    "query": [
                        478,
                        "EventReservationsQueryInput!"
                    ]
                }
            ],
            "eventVenues": [
                318,
                {
                    "page": [
                        58,
                        "PageInfo!"
                    ]
                }
            ],
            "eventVenue": [
                317,
                {
                    "id": [
                        453,
                        "ID!"
                    ]
                }
            ],
            "eventVenueSeats": [
                287,
                {
                    "venueId": [
                        453,
                        "ID!"
                    ],
                    "page": [
                        58,
                        "PageInfo!"
                    ],
                    "seatTypeId": [
                        453
                    ]
                }
            ],
            "eventVenueSeatTypes": [
                314,
                {
                    "venueId": [
                        453,
                        "ID!"
                    ],
                    "page": [
                        58,
                        "PageInfo!"
                    ]
                }
            ],
            "organizationPaymentCollectionConfiguration": [
                177
            ],
            "userGroupMembers": [
                281,
                {
                    "groupIds": [
                        453,
                        "[ID!]!"
                    ],
                    "page": [
                        58,
                        "PageInfo!"
                    ],
                    "status": [
                        276
                    ]
                }
            ],
            "userGroups": [
                279,
                {
                    "query": [
                        480,
                        "UserGroupsQueryInput!"
                    ],
                    "page": [
                        58,
                        "PageInfo!"
                    ]
                }
            ],
            "userGroupMyMemberships": [
                281,
                {
                    "page": [
                        58,
                        "PageInfo!"
                    ],
                    "status": [
                        276
                    ],
                    "entityType": [
                        1
                    ],
                    "entityId": [
                        453
                    ]
                }
            ],
            "presenceAnalytics": [
                382
            ],
            "shops": [
                402,
                {
                    "page": [
                        58
                    ],
                    "filter": [
                        481
                    ]
                }
            ],
            "shopCategories": [
                392,
                {
                    "page": [
                        58
                    ],
                    "filter": [
                        482
                    ]
                }
            ],
            "playerShopProductPurshases": [
                389,
                {
                    "page": [
                        58
                    ],
                    "filter": [
                        483
                    ]
                }
            ],
            "shopProducts": [
                399,
                {
                    "shopId": [
                        453,
                        "ID!"
                    ],
                    "page": [
                        58
                    ],
                    "filter": [
                        484
                    ]
                }
            ],
            "shopProductItems": [
                405,
                {
                    "shopProductId": [
                        453,
                        "ID!"
                    ],
                    "page": [
                        58
                    ]
                }
            ],
            "items": [
                324,
                {
                    "page": [
                        58
                    ],
                    "filter": [
                        485
                    ]
                }
            ],
            "playerItems": [
                327,
                {
                    "page": [
                        58
                    ],
                    "filter": [
                        486
                    ]
                }
            ],
            "itemCategories": [
                330,
                {
                    "page": [
                        58
                    ],
                    "filter": [
                        487
                    ]
                }
            ],
            "currencies": [
                269,
                {
                    "page": [
                        58
                    ],
                    "filter": [
                        488
                    ]
                }
            ],
            "playerCurrencies": [
                272,
                {
                    "page": [
                        58
                    ],
                    "filter": [
                        489
                    ]
                }
            ],
            "marketplaceApps": [
                349,
                {
                    "page": [
                        58
                    ],
                    "filter": [
                        490
                    ]
                }
            ],
            "marketplaceApp": [
                347,
                {
                    "id": [
                        453,
                        "ID!"
                    ]
                }
            ],
            "myMarketplaceInstallations": [
                356,
                {
                    "page": [
                        58
                    ]
                }
            ],
            "appReleases": [
                125,
                {
                    "marketplaceAppId": [
                        453,
                        "ID!"
                    ]
                }
            ],
            "moduleTokensForPlatform": [
                363,
                {
                    "platformId": [
                        453,
                        "ID!"
                    ]
                }
            ],
            "extensionToken": [
                364,
                {
                    "installationId": [
                        453,
                        "ID!"
                    ]
                }
            ],
            "platformModuleConfigs": [
                362,
                {
                    "platformId": [
                        453,
                        "ID!"
                    ]
                }
            ],
            "entityMetafields": [
                365,
                {
                    "entityType": [
                        1,
                        "String!"
                    ],
                    "entityId": [
                        453,
                        "ID!"
                    ],
                    "filter": [
                        491
                    ]
                }
            ],
            "allowedObjectTypes": [
                369
            ],
            "objectMetadata": [
                366,
                {
                    "objectType": [
                        369,
                        "ObjectType!"
                    ],
                    "objectId": [
                        453,
                        "ID!"
                    ]
                }
            ],
            "objectMetadataBatch": [
                370,
                {
                    "objectType": [
                        369,
                        "ObjectType!"
                    ],
                    "objectIds": [
                        453,
                        "[ID!]!"
                    ]
                }
            ],
            "customFieldDefinitions": [
                372,
                {
                    "objectType": [
                        369,
                        "ObjectType!"
                    ]
                }
            ],
            "customFieldValues": [
                374,
                {
                    "objectType": [
                        369,
                        "ObjectType!"
                    ],
                    "objectId": [
                        453,
                        "ID!"
                    ]
                }
            ],
            "customFieldValuesBatch": [
                375,
                {
                    "objectType": [
                        369,
                        "ObjectType!"
                    ],
                    "objectIds": [
                        453,
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
                453
            ],
            "playerId": [
                453
            ],
            "seasonId": [
                453
            ],
            "__typename": [
                1
            ]
        },
        "OrganizationIdentityProviderInfo": {
            "on_OrganizationIdentityProvider": [
                140
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
                453
            ],
            "name": [
                1
            ],
            "organizationId": [
                453
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
                453
            ],
            "teamStatus": [
                59
            ],
            "memberStatus": [
                179
            ],
            "__typename": [
                1
            ]
        },
        "IdentityProviderPropertyInput": {
            "identityProviderId": [
                453
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
                237
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
                237
            ],
            "parameters": [
                1
            ],
            "overrides": [
                468
            ],
            "stepId": [
                453
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
                81
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
                81
            ],
            "status": [
                158
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
                336
            ],
            "types": [
                1
            ],
            "typePrefix": [
                1
            ],
            "actorType": [
                333
            ],
            "actorId": [
                453
            ],
            "primaryResourceType": [
                1
            ],
            "primaryResourceId": [
                453
            ],
            "severity": [
                337
            ],
            "rootOnly": [
                4
            ],
            "parentEntryId": [
                453
            ],
            "correlationId": [
                453
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
                453
            ],
            "reservationStatus": [
                302
            ],
            "memberStatus": [
                276
            ],
            "__typename": [
                1
            ]
        },
        "EventReservationsQueryInput": {
            "filterByRegistrationStatus": [
                302
            ],
            "retrieveOnlyGroupMembersWithStatus": [
                276
            ],
            "filterByPlayerUsernameQuery": [
                1
            ],
            "filterByReservationProperties": [
                421
            ],
            "filterByPlayerProperties": [
                421
            ],
            "filterByPlayerIdentityProviderProperties": [
                464
            ],
            "filterByPlayers": [
                479
            ],
            "filterByGroupStatus": [
                278
            ],
            "__typename": [
                1
            ]
        },
        "EventReservationsQueryPlayerIdWithGroupStatusInput": {
            "playerId": [
                453
            ],
            "memberStatus": [
                276
            ],
            "__typename": [
                1
            ]
        },
        "UserGroupsQueryInput": {
            "ids": [
                453
            ],
            "__typename": [
                1
            ]
        },
        "ShopsFilterInput": {
            "ids": [
                453
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
                453
            ],
            "externalIds": [
                1
            ],
            "shopIds": [
                453
            ],
            "__typename": [
                1
            ]
        },
        "PlayerShopProductPurshasesFilterInput": {
            "shopProductIds": [
                453
            ],
            "playerProfileIds": [
                453
            ],
            "shopIds": [
                453
            ],
            "ids": [
                453
            ],
            "__typename": [
                1
            ]
        },
        "ShopProductsFilterInput": {
            "categoryIds": [
                453
            ],
            "ids": [
                453
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
                453
            ],
            "ids": [
                453
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
                453
            ],
            "playerProfileIds": [
                453
            ],
            "__typename": [
                1
            ]
        },
        "ItemCategoriesFilterInput": {
            "ids": [
                453
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
                453
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
                453
            ],
            "playerProfileIds": [
                453
            ],
            "__typename": [
                1
            ]
        },
        "MarketplaceAppsFilterInput": {
            "status": [
                348
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
                453
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
                        453,
                        "ID!"
                    ]
                }
            ],
            "accountIdentityGenerateAccessToken": [
                1,
                {
                    "identityProviderId": [
                        453,
                        "ID!"
                    ],
                    "accountId": [
                        453
                    ]
                }
            ],
            "accountIdentityRefresh": [
                71,
                {
                    "identityProviderId": [
                        453,
                        "ID!"
                    ],
                    "accountId": [
                        453
                    ]
                }
            ],
            "attachOrUpdateIdentityToAccount": [
                71,
                {
                    "identityProviderId": [
                        453,
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
                        453,
                        "ID!"
                    ]
                }
            ],
            "updateConfiguration": [
                78,
                {
                    "id": [
                        453,
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
                        453,
                        "ID!"
                    ]
                }
            ],
            "leaderboardRegisterPlayerScore": [
                80,
                {
                    "input": [
                        494,
                        "LeaderboardRegisterPlayerScoreInput!"
                    ]
                }
            ],
            "createLeaderboard": [
                84,
                {
                    "input": [
                        496,
                        "CreateLeaderboardInput!"
                    ]
                }
            ],
            "updateLeaderboard": [
                84,
                {
                    "id": [
                        453,
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
                        453,
                        "ID!"
                    ]
                }
            ],
            "createLeaderboardSeason": [
                87,
                {
                    "leaderboardId": [
                        453,
                        "ID!"
                    ],
                    "input": [
                        499,
                        "CreateLeaderboardSeasonInput!"
                    ]
                }
            ],
            "updateLeaderboardSeason": [
                87,
                {
                    "id": [
                        453,
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
                        453,
                        "ID!"
                    ]
                }
            ],
            "createLeaderboardSeasonBucket": [
                90,
                {
                    "seasonId": [
                        453,
                        "ID!"
                    ],
                    "input": [
                        501,
                        "CreateLeaderboardSeasonBucketInput!"
                    ]
                }
            ],
            "updateLeaderboardSeasonBucket": [
                90,
                {
                    "id": [
                        453,
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
                        453,
                        "ID!"
                    ]
                }
            ],
            "updateOrganization": [
                69,
                {
                    "organization": [
                        503,
                        "UpdateOrganizationInput!"
                    ]
                }
            ],
            "createOrganization": [
                69,
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
                        453,
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
                        453,
                        "ID!"
                    ]
                }
            ],
            "setOrganizationMembership": [
                54,
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
                140,
                {
                    "input": [
                        509,
                        "CreateOrganizationIdentityProvider!"
                    ]
                }
            ],
            "updateIdentityProvider": [
                140,
                {
                    "providerId": [
                        453,
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
                        453,
                        "ID!"
                    ]
                }
            ],
            "createOrganizationApp": [
                133,
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
                133,
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
                133,
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
            "createAppRelease": [
                129,
                {
                    "appId": [
                        453,
                        "ID!"
                    ],
                    "input": [
                        522,
                        "CreateAppReleaseInput!"
                    ]
                }
            ],
            "createWebhook": [
                146,
                {
                    "input": [
                        523,
                        "CreateWebhookInput!"
                    ]
                }
            ],
            "updateWebhook": [
                146,
                {
                    "id": [
                        453,
                        "ID!"
                    ],
                    "input": [
                        524,
                        "UpdateWebhookInput!"
                    ]
                }
            ],
            "deleteWebhook": [
                146,
                {
                    "id": [
                        453,
                        "ID!"
                    ]
                }
            ],
            "regenerateWebhookSecret": [
                146,
                {
                    "id": [
                        453,
                        "ID!"
                    ]
                }
            ],
            "setOrganizationAttachedApp": [
                137,
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
                50,
                {
                    "input": [
                        438,
                        "EmailConfigurationInput!"
                    ]
                }
            ],
            "emailTemplateCreate": [
                101,
                {
                    "input": [
                        529,
                        "EmailTemplateCreateInput!"
                    ]
                }
            ],
            "emailTemplateUpdate": [
                101,
                {
                    "id": [
                        453,
                        "ID!"
                    ],
                    "input": [
                        530,
                        "EmailTemplateUpdateInput!"
                    ]
                }
            ],
            "emailTemplateDelete": [
                101,
                {
                    "id": [
                        453,
                        "ID!"
                    ]
                }
            ],
            "createPlayer": [
                72,
                {
                    "input": [
                        531,
                        "CreatePlayerInput!"
                    ]
                }
            ],
            "updatePlayer": [
                72,
                {
                    "input": [
                        533,
                        "UpdatePlayerInput!"
                    ],
                    "id": [
                        453
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
                        534,
                        "UpdateMePlayerInput!"
                    ]
                }
            ],
            "deletePlayer": [
                4,
                {
                    "id": [
                        453
                    ],
                    "customId": [
                        453
                    ]
                }
            ],
            "createTournament": [
                57,
                {
                    "input": [
                        535,
                        "CreateTournamentInput!"
                    ]
                }
            ],
            "updateTournament": [
                57,
                {
                    "input": [
                        538,
                        "UpdateTournamentInput!"
                    ],
                    "id": [
                        453,
                        "ID!"
                    ]
                }
            ],
            "deleteTournament": [
                4,
                {
                    "id": [
                        453,
                        "ID!"
                    ]
                }
            ],
            "startTournamentStep": [
                4,
                {
                    "stepId": [
                        453,
                        "ID!"
                    ]
                }
            ],
            "createTournamentStep": [
                186,
                {
                    "tournamentId": [
                        453,
                        "ID!"
                    ],
                    "configuration": [
                        428
                    ],
                    "step": [
                        539,
                        "CreateTournamentStepInput!"
                    ]
                }
            ],
            "updateTournamentStep": [
                186,
                {
                    "stepId": [
                        453,
                        "ID!"
                    ],
                    "configuration": [
                        428
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
                        453,
                        "ID!"
                    ]
                }
            ],
            "generateTournamentStep": [
                4,
                {
                    "stepId": [
                        453,
                        "ID!"
                    ],
                    "teamsCount": [
                        81
                    ]
                }
            ],
            "seedTournamentStep": [
                186,
                {
                    "input": [
                        540,
                        "SeedStepInput!"
                    ]
                }
            ],
            "updateSeedingOrder": [
                186,
                {
                    "stepId": [
                        453,
                        "ID!"
                    ],
                    "orderedTeamIds": [
                        453,
                        "[ID!]!"
                    ]
                }
            ],
            "updateSeedingPins": [
                186,
                {
                    "stepId": [
                        453,
                        "ID!"
                    ],
                    "pins": [
                        541,
                        "[SeedingPinInput!]!"
                    ]
                }
            ],
            "withdrawTeamFromStep": [
                186,
                {
                    "stepId": [
                        453,
                        "ID!"
                    ],
                    "teamId": [
                        453,
                        "ID!"
                    ]
                }
            ],
            "reseedStep": [
                186,
                {
                    "stepId": [
                        453,
                        "ID!"
                    ]
                }
            ],
            "restartTournamentStep": [
                4,
                {
                    "stepId": [
                        453,
                        "ID!"
                    ]
                }
            ],
            "resetTournamentStepSeeding": [
                4,
                {
                    "stepId": [
                        453,
                        "ID!"
                    ]
                }
            ],
            "resetTournamentStep": [
                4,
                {
                    "stepId": [
                        453,
                        "ID!"
                    ]
                }
            ],
            "updateMatchScores": [
                173,
                {
                    "matchId": [
                        453,
                        "ID!"
                    ],
                    "input": [
                        542,
                        "[UpdateMatchScoreInput!]!"
                    ]
                }
            ],
            "registerCustomTournamentTeams": [
                182,
                {
                    "tournamentId": [
                        453,
                        "ID!"
                    ],
                    "input": [
                        544,
                        "RegisterCustomTeamsInput!"
                    ]
                }
            ],
            "registerTournamentTeam": [
                182,
                {
                    "tournamentId": [
                        453,
                        "ID!"
                    ],
                    "input": [
                        547,
                        "RegisterTournamentTeamInput!"
                    ]
                }
            ],
            "updateTournamentTeam": [
                182,
                {
                    "input": [
                        548,
                        "UpdateTournamentTeamInput!"
                    ],
                    "tournamentId": [
                        453
                    ],
                    "teamId": [
                        453
                    ]
                }
            ],
            "deleteTournamentTeam": [
                4,
                {
                    "tournamentId": [
                        453,
                        "ID!"
                    ]
                }
            ],
            "deleteAnyTournamentTeam": [
                4,
                {
                    "teamId": [
                        453,
                        "ID!"
                    ]
                }
            ],
            "confirmTournamentTeam": [
                182,
                {
                    "teamId": [
                        453,
                        "ID!"
                    ],
                    "confirm": [
                        4,
                        "Boolean!"
                    ]
                }
            ],
            "confirmTournamentAttendance": [
                182,
                {
                    "tournamentId": [
                        453,
                        "ID!"
                    ],
                    "attendance": [
                        4,
                        "Boolean!"
                    ]
                }
            ],
            "updateTournamentTeamStatus": [
                182,
                {
                    "tournamentTeamId": [
                        453,
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
                        453,
                        "ID!"
                    ],
                    "playerId": [
                        453,
                        "ID!"
                    ]
                }
            ],
            "answerToTournamentTeamInvite": [
                4,
                {
                    "teamId": [
                        453,
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
                        453,
                        "ID!"
                    ],
                    "playerId": [
                        453,
                        "ID!"
                    ]
                }
            ],
            "tournamentAdminUpsert": [
                200,
                {
                    "input": [
                        549,
                        "TournamentAdminUpsertInput!"
                    ]
                }
            ],
            "tournamentAdminDelete": [
                4,
                {
                    "input": [
                        550,
                        "TournamentAdminDeleteInput!"
                    ]
                }
            ],
            "createStepRuleSet": [
                219,
                {
                    "tournamentStepId": [
                        453,
                        "ID!"
                    ],
                    "input": [
                        551,
                        "CreateStepRuleSetInput!"
                    ]
                }
            ],
            "applyPresetScript": [
                219,
                {
                    "presetScriptId": [
                        453,
                        "ID!"
                    ],
                    "tournamentStepId": [
                        453,
                        "ID!"
                    ],
                    "parameters": [
                        1
                    ]
                }
            ],
            "applyBuiltinPreset": [
                219,
                {
                    "builtinPresetId": [
                        1,
                        "String!"
                    ],
                    "tournamentStepId": [
                        453,
                        "ID!"
                    ],
                    "parameters": [
                        1
                    ]
                }
            ],
            "duplicateBuiltinPreset": [
                222,
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
                222,
                {
                    "input": [
                        562,
                        "CreatePresetScriptInput!"
                    ]
                }
            ],
            "updatePresetScript": [
                222,
                {
                    "id": [
                        453,
                        "ID!"
                    ],
                    "input": [
                        564,
                        "UpdatePresetScriptInput!"
                    ]
                }
            ],
            "deletePresetScript": [
                4,
                {
                    "id": [
                        453,
                        "ID!"
                    ]
                }
            ],
            "setStepWinners": [
                186,
                {
                    "stepId": [
                        453,
                        "ID!"
                    ],
                    "teamIds": [
                        453,
                        "[ID!]!"
                    ]
                }
            ],
            "setTournamentWinners": [
                57,
                {
                    "tournamentId": [
                        453,
                        "ID!"
                    ],
                    "teamIds": [
                        453,
                        "[ID!]!"
                    ]
                }
            ],
            "setStepTeamStatus": [
                4,
                {
                    "stepId": [
                        453,
                        "ID!"
                    ],
                    "teamId": [
                        453,
                        "ID!"
                    ],
                    "status": [
                        158,
                        "TeamScopeStatus!"
                    ]
                }
            ],
            "validateStepRuleSet": [
                258,
                {
                    "stepRuleSetId": [
                        453,
                        "ID!"
                    ]
                }
            ],
            "cancelStepRuleSetValidation": [
                258,
                {
                    "jobId": [
                        453,
                        "ID!"
                    ]
                }
            ],
            "stripeCreatePortalSession": [
                1
            ],
            "platformFileCreate": [
                118,
                {
                    "input": [
                        565,
                        "PlatformCdnFileCreateInput!"
                    ],
                    "platformId": [
                        453
                    ],
                    "templateId": [
                        453
                    ]
                }
            ],
            "platformFilePublish": [
                118,
                {
                    "id": [
                        453,
                        "ID!"
                    ]
                }
            ],
            "platformFileGenerateUploadUrl": [
                121,
                {
                    "id": [
                        453,
                        "ID!"
                    ],
                    "size": [
                        17,
                        "Float!"
                    ]
                }
            ],
            "platformFileValidateFileUpload": [
                118,
                {
                    "id": [
                        453,
                        "ID!"
                    ]
                }
            ],
            "platformFileUpdate": [
                118,
                {
                    "id": [
                        453,
                        "ID!"
                    ],
                    "input": [
                        566,
                        "PlatformFileUpdateInput!"
                    ]
                }
            ],
            "platformFileDelete": [
                498,
                {
                    "id": [
                        453,
                        "ID!"
                    ]
                }
            ],
            "platformCreate": [
                380,
                {
                    "input": [
                        567,
                        "CreatePlatformInput!"
                    ]
                }
            ],
            "platformUpdate": [
                380,
                {
                    "id": [
                        453,
                        "ID!"
                    ],
                    "input": [
                        568,
                        "UpdatePlatformInput!"
                    ]
                }
            ],
            "platformDelete": [
                498,
                {
                    "id": [
                        453,
                        "ID!"
                    ]
                }
            ],
            "platformThemeUpdate": [
                380,
                {
                    "platformId": [
                        453,
                        "ID!"
                    ],
                    "input": [
                        569,
                        "PlatformThemeInput!"
                    ]
                }
            ],
            "platformRegisterCustomDomain": [
                99,
                {
                    "platformId": [
                        453,
                        "ID!"
                    ],
                    "hostname": [
                        1,
                        "String!"
                    ]
                }
            ],
            "platformForceCustomDomainRecheck": [
                99,
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
                381,
                {
                    "input": [
                        572,
                        "CreatePlatformTemplateInput!"
                    ]
                }
            ],
            "platformTemplateUpdate": [
                381,
                {
                    "id": [
                        453,
                        "ID!"
                    ],
                    "input": [
                        573,
                        "UpdatePlatformTemplateInput!"
                    ]
                }
            ],
            "platformTemplateApply": [
                380,
                {
                    "platformTemplateId": [
                        453,
                        "ID!"
                    ],
                    "platformId": [
                        453,
                        "ID!"
                    ]
                }
            ],
            "platformTemplateDelete": [
                498,
                {
                    "id": [
                        453,
                        "ID!"
                    ]
                }
            ],
            "organizationSubscriptionItemsUpdate": [
                498,
                {
                    "items": [
                        574,
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
                408,
                {
                    "organizationSkillRatingId": [
                        453,
                        "ID!"
                    ],
                    "input": [
                        575,
                        "OrganizationSkillRatingsRegisterMatchInput!"
                    ]
                }
            ],
            "organizationSkillRatingCreate": [
                409,
                {
                    "input": [
                        577,
                        "OrganizationSkillRatingCreateInput!"
                    ]
                }
            ],
            "organizationSkillRatingUpdate": [
                409,
                {
                    "id": [
                        453,
                        "ID!"
                    ],
                    "input": [
                        578,
                        "OrganizationSkillRatingUpdateInput!"
                    ]
                }
            ],
            "organizationSkillRatingDelete": [
                498,
                {
                    "id": [
                        453,
                        "ID!"
                    ]
                }
            ],
            "eventCreate": [
                293,
                {
                    "input": [
                        579,
                        "EventCreateInput!"
                    ]
                }
            ],
            "eventUpdate": [
                293,
                {
                    "input": [
                        580,
                        "EventUpdateInput!"
                    ],
                    "id": [
                        453,
                        "ID!"
                    ]
                }
            ],
            "eventDelete": [
                4,
                {
                    "id": [
                        453,
                        "ID!"
                    ]
                }
            ],
            "eventTicketConfigurationCreate": [
                321,
                {
                    "input": [
                        581,
                        "EventTicketConfigurationCreateInput!"
                    ]
                }
            ],
            "eventTicketConfigurationUpdate": [
                321,
                {
                    "ticketConfigurationId": [
                        453,
                        "ID!"
                    ],
                    "input": [
                        582,
                        "EventTicketConfigurationUpdateInput!"
                    ]
                }
            ],
            "eventTicketConfigurationDelete": [
                321,
                {
                    "ticketConfigurationId": [
                        453,
                        "ID!"
                    ]
                }
            ],
            "eventReservationUpdateStatus": [
                301,
                {
                    "reservationId": [
                        453,
                        "ID!"
                    ],
                    "status": [
                        302,
                        "EventReservationStatus!"
                    ],
                    "confirmPaymentRefundOrCancel": [
                        4
                    ]
                }
            ],
            "eventReservationConfirmPresence": [
                301,
                {
                    "eventId": [
                        453,
                        "ID!"
                    ],
                    "confirmed": [
                        4,
                        "Boolean!"
                    ]
                }
            ],
            "eventReservationValidateAndPay": [
                307,
                {
                    "eventId": [
                        453,
                        "ID!"
                    ],
                    "options": [
                        583,
                        "EventReservationValidateAndPayInput!"
                    ],
                    "ticketConfigurations": [
                        585,
                        "[EventReservationTicketConfigurationInput!]"
                    ]
                }
            ],
            "eventReservationCreate": [
                301,
                {
                    "eventId": [
                        453,
                        "ID!"
                    ]
                }
            ],
            "eventReservationUpdateTickets": [
                301,
                {
                    "reservationId": [
                        453,
                        "ID!"
                    ],
                    "input": [
                        586,
                        "EventReservationUpdateTicketsInput!"
                    ]
                }
            ],
            "eventReservationStartRegistrationSession": [
                301,
                {
                    "eventId": [
                        453,
                        "ID!"
                    ],
                    "input": [
                        588,
                        "EventReservationRegisterTicketsInput!"
                    ]
                }
            ],
            "eventReservationCancel": [
                301,
                {
                    "reservationId": [
                        453,
                        "ID!"
                    ]
                }
            ],
            "eventVenueRequestImageUpdate": [
                121,
                {
                    "id": [
                        453,
                        "ID!"
                    ],
                    "size": [
                        17,
                        "Float!"
                    ]
                }
            ],
            "eventVenueValidateImage": [
                317,
                {
                    "id": [
                        453,
                        "ID!"
                    ]
                }
            ],
            "eventVenueCreate": [
                317,
                {
                    "input": [
                        589,
                        "EventVenueCreateInput!"
                    ]
                }
            ],
            "eventVenueUpdate": [
                317,
                {
                    "id": [
                        453,
                        "ID!"
                    ],
                    "input": [
                        590,
                        "EventVenueUpdateInput!"
                    ]
                }
            ],
            "eventVenueDelete": [
                317,
                {
                    "id": [
                        453,
                        "ID!"
                    ]
                }
            ],
            "eventVenueSeatsUpdate": [
                286,
                {
                    "venueId": [
                        453,
                        "ID!"
                    ],
                    "input": [
                        591,
                        "EventVenueSeatsUpdateInput!"
                    ]
                }
            ],
            "eventVenueSeatTypeCreate": [
                313,
                {
                    "venueId": [
                        453,
                        "ID!"
                    ],
                    "input": [
                        594,
                        "EventVenueSeatTypeCreateInput!"
                    ]
                }
            ],
            "eventVenueSeatTypeUpdate": [
                313,
                {
                    "id": [
                        453,
                        "ID!"
                    ],
                    "input": [
                        595,
                        "EventVenueSeatTypeUpdateInput!"
                    ]
                }
            ],
            "eventVenueSeatTypeDelete": [
                313,
                {
                    "id": [
                        453,
                        "ID!"
                    ]
                }
            ],
            "organizationPaymentCollectionConfigurationCreateOrUpdateAccount": [
                1
            ],
            "userGroupInvite": [
                275,
                {
                    "groupId": [
                        453,
                        "ID!"
                    ],
                    "playerId": [
                        453,
                        "ID!"
                    ]
                }
            ],
            "userGroupUpdateInvite": [
                275,
                {
                    "groupId": [
                        453,
                        "ID!"
                    ],
                    "status": [
                        276,
                        "UserGroupMemberStatus!"
                    ]
                }
            ],
            "userGroupDeleteInvite": [
                275,
                {
                    "groupId": [
                        453,
                        "ID!"
                    ],
                    "playerId": [
                        453
                    ]
                }
            ],
            "shopCreate": [
                401,
                {
                    "input": [
                        596,
                        "ShopCreateInput!"
                    ]
                }
            ],
            "shopUpdate": [
                401,
                {
                    "id": [
                        453,
                        "ID!"
                    ],
                    "input": [
                        597,
                        "ShopUpdateInput!"
                    ]
                }
            ],
            "shopDelete": [
                401,
                {
                    "id": [
                        453,
                        "ID!"
                    ]
                }
            ],
            "shopCategoryCreate": [
                391,
                {
                    "input": [
                        598,
                        "ShopCategoryCreateInput!"
                    ]
                }
            ],
            "shopCategoryUpdate": [
                391,
                {
                    "id": [
                        453,
                        "ID!"
                    ],
                    "input": [
                        599,
                        "ShopCategoryUpdateInput!"
                    ]
                }
            ],
            "shopCategoryDelete": [
                391,
                {
                    "id": [
                        453,
                        "ID!"
                    ]
                }
            ],
            "playerShopProductPurshase": [
                387,
                {
                    "shopId": [
                        453,
                        "ID!"
                    ],
                    "paymentConfig": [
                        600
                    ],
                    "input": [
                        601,
                        "PlayerShopProductPurshaseInput!"
                    ]
                }
            ],
            "shopProductCreate": [
                398,
                {
                    "shopId": [
                        453,
                        "ID!"
                    ],
                    "input": [
                        603,
                        "ShopProductCreateInput!"
                    ]
                }
            ],
            "shopProductUpdate": [
                398,
                {
                    "productId": [
                        453,
                        "ID!"
                    ],
                    "input": [
                        604,
                        "ShopProductUpdateInput!"
                    ]
                }
            ],
            "shopProductDelete": [
                398,
                {
                    "productId": [
                        453,
                        "ID!"
                    ]
                }
            ],
            "itemCreate": [
                323,
                {
                    "input": [
                        605,
                        "ItemCreateInput!"
                    ]
                }
            ],
            "itemUpdate": [
                323,
                {
                    "id": [
                        453,
                        "ID!"
                    ],
                    "input": [
                        606,
                        "ItemUpdateInput!"
                    ]
                }
            ],
            "itemDelete": [
                323,
                {
                    "id": [
                        453,
                        "ID!"
                    ]
                }
            ],
            "playerItemsUpdate": [
                326,
                {
                    "playerId": [
                        453,
                        "ID!"
                    ],
                    "input": [
                        607,
                        "PlayerItemsUpdateInput!"
                    ]
                }
            ],
            "itemCategoryCreate": [
                329,
                {
                    "input": [
                        609,
                        "ItemCategoryCreateInput!"
                    ]
                }
            ],
            "itemCategoryUpdate": [
                329,
                {
                    "id": [
                        453,
                        "ID!"
                    ],
                    "input": [
                        610,
                        "ItemCategoryUpdateInput!"
                    ]
                }
            ],
            "itemCategoryDelete": [
                329,
                {
                    "id": [
                        453,
                        "ID!"
                    ]
                }
            ],
            "currencyCreate": [
                268,
                {
                    "input": [
                        611,
                        "CurrencyCreateInput!"
                    ]
                }
            ],
            "currencyUpdate": [
                268,
                {
                    "id": [
                        453,
                        "ID!"
                    ],
                    "input": [
                        612,
                        "CurrencyUpdateInput!"
                    ]
                }
            ],
            "currencyDelete": [
                268,
                {
                    "id": [
                        453,
                        "ID!"
                    ]
                }
            ],
            "playerCurrencyUpdate": [
                271,
                {
                    "playerId": [
                        453,
                        "ID!"
                    ],
                    "input": [
                        613,
                        "[PlayerCurrencyUpdateInput!]!"
                    ]
                }
            ],
            "publishMarketplaceApp": [
                347,
                {
                    "input": [
                        615,
                        "PublishMarketplaceAppInput!"
                    ]
                }
            ],
            "updateMarketplaceApp": [
                347,
                {
                    "id": [
                        453,
                        "ID!"
                    ],
                    "input": [
                        616,
                        "UpdateMarketplaceAppInput!"
                    ]
                }
            ],
            "installMarketplaceApp": [
                354,
                {
                    "input": [
                        617,
                        "InstallMarketplaceAppInput!"
                    ]
                }
            ],
            "uninstallMarketplaceApp": [
                4,
                {
                    "marketplaceAppId": [
                        453,
                        "ID!"
                    ]
                }
            ],
            "submitMarketplaceAppReview": [
                351,
                {
                    "input": [
                        618,
                        "SubmitMarketplaceAppReviewInput!"
                    ]
                }
            ],
            "setMarketplaceAppPricing": [
                359,
                {
                    "input": [
                        619,
                        "SetMarketplaceAppPricingInput!"
                    ]
                }
            ],
            "createMarketplaceCheckout": [
                1,
                {
                    "input": [
                        620,
                        "CreateMarketplaceCheckoutInput!"
                    ]
                }
            ],
            "appCreateRelease": [
                127,
                {
                    "marketplaceAppId": [
                        453,
                        "ID!"
                    ],
                    "input": [
                        621,
                        "AppCreateReleaseInput!"
                    ]
                }
            ],
            "appFinalizeRelease": [
                128,
                {
                    "releaseId": [
                        453,
                        "ID!"
                    ]
                }
            ],
            "appPublishRelease": [
                125,
                {
                    "releaseId": [
                        453,
                        "ID!"
                    ]
                }
            ],
            "platformModuleConfigSet": [
                362,
                {
                    "input": [
                        622,
                        "PlatformModuleConfigSetInput!"
                    ]
                }
            ],
            "platformModuleConfigDelete": [
                4,
                {
                    "input": [
                        624,
                        "PlatformModuleConfigDeleteInput!"
                    ]
                }
            ],
            "entityMetafieldSet": [
                365,
                {
                    "input": [
                        625,
                        "SetEntityMetafieldInput!"
                    ]
                }
            ],
            "entityMetafieldDelete": [
                4,
                {
                    "input": [
                        626,
                        "DeleteEntityMetafieldInput!"
                    ]
                }
            ],
            "setObjectMetadata": [
                366,
                {
                    "input": [
                        627,
                        "SetObjectMetadataInput!"
                    ]
                }
            ],
            "removeObjectMetadata": [
                4,
                {
                    "input": [
                        629,
                        "RemoveObjectMetadataInput!"
                    ]
                }
            ],
            "createCustomFieldDefinition": [
                372,
                {
                    "input": [
                        630,
                        "CreateCustomFieldDefinitionInput!"
                    ]
                }
            ],
            "updateCustomFieldDefinition": [
                372,
                {
                    "id": [
                        453,
                        "ID!"
                    ],
                    "input": [
                        632,
                        "UpdateCustomFieldDefinitionInput!"
                    ]
                }
            ],
            "deleteCustomFieldDefinition": [
                4,
                {
                    "id": [
                        453,
                        "ID!"
                    ]
                }
            ],
            "reorderCustomFieldDefinitions": [
                372,
                {
                    "objectType": [
                        369,
                        "ObjectType!"
                    ],
                    "orderedIds": [
                        453,
                        "[ID!]!"
                    ]
                }
            ],
            "setCustomFieldValues": [
                374,
                {
                    "input": [
                        633,
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
                31
            ],
            "stepConfiguration": [
                428
            ],
            "tournamentConfiguration": [
                437
            ],
            "__typename": [
                1
            ]
        },
        "LeaderboardRegisterPlayerScoreInput": {
            "leaderboardId": [
                453
            ],
            "playerId": [
                453
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
                91
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
                91
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
                420
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
                419
            ],
            "__typename": [
                1
            ]
        },
        "SetOrganizationMembershipInput": {
            "userId": [
                453
            ],
            "email": [
                76
            ],
            "permissions": [
                419
            ],
            "groupId": [
                453
            ],
            "__typename": [
                1
            ]
        },
        "DeleteOrganizationMembershipInput": {
            "userId": [
                453
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
                453
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
                418
            ],
            "issuer": [
                1
            ],
            "providerType": [
                143
            ],
            "clientId": [
                1
            ],
            "clientSecret": [
                1
            ],
            "tokenEndpointAuthMethod": [
                144
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
                418
            ],
            "issuer": [
                1
            ],
            "providerType": [
                143
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
                53
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
                114
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
                109
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
                419
            ],
            "groupId": [
                453
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
                453
            ],
            "variables": [
                421
            ],
            "__typename": [
                1
            ]
        },
        "EmailSendFromCustomInput": {
            "emailField": [
                433
            ],
            "playerIds": [
                453
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
                453
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
                453
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
            "__typename": [
                1
            ]
        },
        "UpdateTournamentConfigurationOrImportFromIdInput": {
            "fromId": [
                453
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
                436
            ],
            "customFields": [
                420
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
                187
            ],
            "properties": [
                421
            ],
            "__typename": [
                1
            ]
        },
        "SeedStepInput": {
            "stepId": [
                453
            ],
            "orderedTeamIds": [
                453
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
                453
            ],
            "groupId": [
                453
            ],
            "gameId": [
                453
            ],
            "slotIndex": [
                81
            ],
            "__typename": [
                1
            ]
        },
        "UpdateMatchScoreInput": {
            "teamId": [
                453
            ],
            "variables": [
                543
            ],
            "forcedScoreValue": [
                17
            ],
            "status": [
                197
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
                545
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
                421
            ],
            "fromExistingTeamId": [
                453
            ],
            "members": [
                546
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
                453
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
                421
            ],
            "fromExistingTeamId": [
                453
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
                421
            ],
            "__typename": [
                1
            ]
        },
        "TournamentAdminUpsertInput": {
            "tournamentId": [
                453
            ],
            "accountId": [
                453
            ],
            "permissions": [
                201
            ],
            "__typename": [
                1
            ]
        },
        "TournamentAdminDeleteInput": {
            "tournamentId": [
                453
            ],
            "accountId": [
                453
            ],
            "__typename": [
                1
            ]
        },
        "CreateStepRuleSetInput": {
            "scoring": [
                552
            ],
            "advancementRules": [
                554
            ],
            "crossStepRules": [
                556
            ],
            "structureTemplate": [
                558
            ],
            "__typename": [
                1
            ]
        },
        "CreateScoringInput": {
            "aggregation": [
                210
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
                553
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
                207
            ],
            "formula": [
                1
            ],
            "sortOrder": [
                208
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
                153
            ],
            "triggerScope": [
                1
            ],
            "condition": [
                1
            ],
            "actions": [
                555
            ],
            "autoExecute": [
                4
            ],
            "allowManualOverride": [
                4
            ],
            "purpose": [
                205
            ],
            "__typename": [
                1
            ]
        },
        "RuleActionInput": {
            "type": [
                203
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
                453
            ],
            "sourceRelative": [
                218
            ],
            "dataSource": [
                155
            ],
            "usage": [
                557
            ],
            "__typename": [
                1
            ]
        },
        "CrossStepUsageInput": {
            "type": [
                216
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
                559
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
                560
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
                561
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
                563
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
                221
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
                563
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
                119
            ],
            "config": [
                440
            ],
            "__typename": [
                1
            ]
        },
        "PlatformFileUpdateInput": {
            "config": [
                440
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
                448
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
                448
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
                570
            ],
            "sections": [
                571
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
                122
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
                122
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
                453
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
                576
            ],
            "__typename": [
                1
            ]
        },
        "OrganizationSkillRatingsRegisterMatchTeamInput": {
            "players": [
                453
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
                410
            ],
            "configuration": [
                452
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
                410
            ],
            "configuration": [
                452
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
                444
            ],
            "eventVenueId": [
                453
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
                444
            ],
            "eventVenueId": [
                453
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
                322
            ],
            "maxCount": [
                17
            ],
            "buyable": [
                4
            ],
            "eventId": [
                453
            ],
            "seatTypeId": [
                453
            ],
            "configuration": [
                447
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
                322
            ],
            "maxCount": [
                17
            ],
            "buyable": [
                4
            ],
            "seatTypeId": [
                453
            ],
            "configuration": [
                447
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
                584
            ],
            "__typename": [
                1
            ]
        },
        "StripeUiMode": {},
        "EventReservationTicketConfigurationInput": {
            "ticketId": [
                453
            ],
            "customFields": [
                421
            ],
            "__typename": [
                1
            ]
        },
        "EventReservationUpdateTicketsInput": {
            "ticketIdsToRelease": [
                453
            ],
            "ticketIdsToAdd": [
                587
            ],
            "ticketConfigurations": [
                585
            ],
            "__typename": [
                1
            ]
        },
        "EventReservationRegisterTicketInput": {
            "ticketConfigurationId": [
                453
            ],
            "quantity": [
                17
            ],
            "reservedSeats": [
                453
            ],
            "__typename": [
                1
            ]
        },
        "EventReservationRegisterTicketsInput": {
            "tickets": [
                587
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
                592
            ],
            "createSeats": [
                593
            ],
            "deleteSeats": [
                453
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
                443
            ],
            "seatTypeId": [
                453
            ],
            "id": [
                453
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
                443
            ],
            "seatTypeId": [
                453
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
                445
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
                445
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
                421
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
                421
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
                421
            ],
            "shopId": [
                453
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
                421
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
                584
            ],
            "__typename": [
                1
            ]
        },
        "PlayerShopProductPurshaseInput": {
            "items": [
                602
            ],
            "__typename": [
                1
            ]
        },
        "PlayerShopProductPurshaseItemInput": {
            "shopProductId": [
                453
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
                453
            ],
            "price": [
                17
            ],
            "configuration": [
                449
            ],
            "metadata": [
                421
            ],
            "visibleAt": [
                11
            ],
            "currency": [
                322
            ],
            "items": [
                451
            ],
            "currencyPrices": [
                450
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
                453
            ],
            "price": [
                17
            ],
            "configuration": [
                449
            ],
            "metadata": [
                421
            ],
            "visibleAt": [
                11
            ],
            "currency": [
                322
            ],
            "items": [
                451
            ],
            "currencyPrices": [
                450
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
                421
            ],
            "categoryId": [
                453
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
                421
            ],
            "categoryId": [
                453
            ],
            "__typename": [
                1
            ]
        },
        "PlayerItemsUpdateInput": {
            "items": [
                608
            ],
            "__typename": [
                1
            ]
        },
        "PlayerItemsUpdateItemInput": {
            "itemId": [
                453
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
                421
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
                421
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
                421
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
                421
            ],
            "__typename": [
                1
            ]
        },
        "PlayerCurrencyUpdateInput": {
            "items": [
                614
            ],
            "__typename": [
                1
            ]
        },
        "PlayerCurrencyUpdateItemInput": {
            "currencyId": [
                453
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
                453
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
                453
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
                453
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
                453
            ],
            "type": [
                360
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
                453
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
                81
            ],
            "moduleBundleSize": [
                81
            ],
            "__typename": [
                1
            ]
        },
        "PlatformModuleConfigSetInput": {
            "platformId": [
                453
            ],
            "marketplaceAppId": [
                453
            ],
            "moduleName": [
                1
            ],
            "props": [
                623
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
                453
            ],
            "marketplaceAppId": [
                453
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
                453
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
                453
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
                369
            ],
            "objectId": [
                453
            ],
            "entries": [
                628
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
                367
            ],
            "visibility": [
                368
            ],
            "__typename": [
                1
            ]
        },
        "RemoveObjectMetadataInput": {
            "objectType": [
                369
            ],
            "objectId": [
                453
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
                369
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
                373
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
                631
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
                81
            ],
            "visibility": [
                20
            ],
            "editability": [
                21
            ],
            "options": [
                631
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
                369
            ],
            "objectId": [
                453
            ],
            "fields": [
                634
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
                258,
                {
                    "jobId": [
                        453,
                        "ID!"
                    ]
                }
            ],
            "validationEvents": [
                260,
                {
                    "jobId": [
                        453,
                        "ID!"
                    ]
                }
            ],
            "journalEntryAdded": [
                335,
                {
                    "filters": [
                        473
                    ]
                }
            ],
            "presenceUserConnected": [
                384
            ],
            "presenceUserDisconnected": [
                386
            ],
            "__typename": [
                1
            ]
        }
    }
}