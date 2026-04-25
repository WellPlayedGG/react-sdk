export default {
    "scalars": [
        1,
        2,
        8,
        9,
        15,
        17,
        18,
        19,
        29,
        31,
        33,
        34,
        36,
        38,
        44,
        47,
        52,
        55,
        58,
        64,
        66,
        67,
        68,
        81,
        95,
        101,
        104,
        110,
        113,
        118,
        123,
        126,
        130,
        134,
        147,
        148,
        154,
        159,
        167,
        168,
        172,
        176,
        178,
        182,
        184,
        186,
        187,
        189,
        190,
        192,
        198,
        200,
        201,
        204,
        207,
        210,
        212,
        214,
        217,
        220,
        222,
        223,
        226,
        229,
        233,
        235,
        237,
        241,
        243,
        245,
        246,
        247,
        260,
        262,
        274,
        275,
        276,
        286,
        293,
        306,
        317,
        321,
        328,
        333,
        340,
        341,
        342,
        346,
        370,
        383,
        385,
        426,
        433,
        434,
        435,
        442,
        443,
        462,
        465,
        551
    ],
    "types": {
        "KeyMapping": {
            "path": [
                1
            ],
            "mappedTo": [
                1
            ],
            "private": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "String": {},
        "Boolean": {},
        "MappingConfiguration": {
            "mappings": [
                0
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
                4
            ],
            "mappingConfiguration": [
                3
            ],
            "__typename": [
                1
            ]
        },
        "ResponsePageInfo": {
            "hasNextPage": [
                2
            ],
            "hasPreviousPage": [
                2
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
                426
            ],
            "name": [
                1
            ],
            "permissions": [
                11
            ],
            "organizationId": [
                426
            ],
            "type": [
                8
            ],
            "createdAt": [
                9
            ],
            "updatedAt": [
                9
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
                10
            ],
            "__typename": [
                1
            ]
        },
        "OrganizationGroups": {
            "edges": [
                14
            ],
            "nodes": [
                7
            ],
            "pageInfo": [
                6
            ],
            "totalCount": [
                15
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
                7
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
                17
            ],
            "required": [
                2
            ],
            "order": [
                15
            ],
            "unique": [
                2
            ],
            "public": [
                2
            ],
            "visibility": [
                18
            ],
            "editability": [
                19
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
                17
            ],
            "required": [
                2
            ],
            "order": [
                15
            ],
            "unique": [
                2
            ],
            "public": [
                2
            ],
            "visibility": [
                18
            ],
            "editability": [
                19
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
                15
            ],
            "__typename": [
                1
            ]
        },
        "MatchConfiguration": {
            "variables": [
                22
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
                15
            ],
            "useMatchScoresAsGameScore": [
                2
            ],
            "teamsCount": [
                15
            ],
            "matchConfiguration": [
                23
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
                15
            ],
            "__typename": [
                1
            ]
        },
        "RoundConfiguration": {
            "game": [
                24
            ],
            "order": [
                15
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
                26
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
                29
            ],
            "groups": [
                27
            ],
            "__typename": [
                1
            ]
        },
        "ConfigurationType": {},
        "NumericCondition": {
            "conditionType": [
                31
            ],
            "value": [
                15
            ],
            "__typename": [
                1
            ]
        },
        "NumberConditionType": {},
        "TeamNumericCondition": {
            "aggregationType": [
                33
            ],
            "propertySource": [
                34
            ],
            "propertySourceId": [
                426
            ],
            "conditionType": [
                31
            ],
            "value": [
                15
            ],
            "__typename": [
                1
            ]
        },
        "AggregationType": {},
        "PlayerConditionDataSource": {},
        "StringCondition": {
            "conditionType": [
                36
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
                30
            ],
            "stringCondition": [
                35
            ],
            "propertyCondition": [
                38
            ],
            "__typename": [
                1
            ]
        },
        "PropertyCondition": {},
        "PlayerField": {
            "propertySource": [
                34
            ],
            "propertySourceId": [
                426
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
                34
            ],
            "propertySourceId": [
                426
            ],
            "condition": [
                37
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
                35
            ],
            "numericCondition": [
                32
            ],
            "propertyCondition": [
                38
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
                41
            ],
            "memberConditions": [
                40
            ],
            "__typename": [
                1
            ]
        },
        "TournamentConfiguration": {
            "type": [
                29
            ],
            "teamMinSize": [
                15
            ],
            "teamMaxSize": [
                15
            ],
            "teamsCount": [
                15
            ],
            "teamStatusAfterRegistration": [
                44
            ],
            "registrationConditions": [
                42
            ],
            "customFields": [
                16
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
                47
            ],
            "name": [
                1
            ],
            "description": [
                1
            ],
            "availableVariables": [
                45
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
                15
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
                2
            ],
            "emailField": [
                39
            ],
            "__typename": [
                1
            ]
        },
        "WebhookLogRequest": {
            "url": [
                1
            ],
            "body": [
                1
            ],
            "headers": [
                50
            ],
            "__typename": [
                1
            ]
        },
        "StringKeyValuePair": {
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
        "WebhookLogResponse": {
            "statusCode": [
                52
            ],
            "body": [
                1
            ],
            "headers": [
                50
            ],
            "__typename": [
                1
            ]
        },
        "Int": {},
        "WebhookCallLogValue": {
            "request": [
                49
            ],
            "response": [
                51
            ],
            "error": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "LogData": {
            "oldValue": [
                53
            ],
            "newValue": [
                53
            ],
            "author": [
                1
            ],
            "authorType": [
                55
            ],
            "__typename": [
                1
            ]
        },
        "LogAuthorType": {},
        "WebhookEventConfigurationProperties": {
            "name": [
                1
            ],
            "description": [
                1
            ],
            "array": [
                2
            ],
            "optional": [
                2
            ],
            "example": [
                1
            ],
            "type": [
                1
            ],
            "properties": [
                56
            ],
            "__typename": [
                1
            ]
        },
        "WebhookEventConfiguration": {
            "type": [
                58
            ],
            "description": [
                1
            ],
            "payload": [
                56
            ],
            "answerPayload": [
                56
            ],
            "__typename": [
                1
            ]
        },
        "WebhookEventType": {},
        "OrganizationMember": {
            "id": [
                426
            ],
            "organizationId": [
                426
            ],
            "groupId": [
                426
            ],
            "memberId": [
                426
            ],
            "permissions": [
                11
            ],
            "createdAt": [
                9
            ],
            "updatedAt": [
                9
            ],
            "account": [
                80
            ],
            "group": [
                7
            ],
            "__typename": [
                1
            ]
        },
        "OrganizationMembers": {
            "edges": [
                61
            ],
            "nodes": [
                59
            ],
            "pageInfo": [
                6
            ],
            "totalCount": [
                15
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
                59
            ],
            "__typename": [
                1
            ]
        },
        "Tournament": {
            "id": [
                426
            ],
            "title": [
                1
            ],
            "description": [
                1
            ],
            "startAt": [
                9
            ],
            "endAt": [
                9
            ],
            "startRegistrationsAt": [
                9
            ],
            "endRegistrationsAt": [
                9
            ],
            "organizationId": [
                426
            ],
            "configuration": [
                43
            ],
            "createdAt": [
                9
            ],
            "updatedAt": [
                9
            ],
            "createdById": [
                426
            ],
            "tournamentSeriesId": [
                426
            ],
            "visibleAt": [
                9
            ],
            "teams": [
                163,
                {
                    "page": [
                        63,
                        "PageInfo!"
                    ],
                    "status": [
                        64
                    ]
                }
            ],
            "steps": [
                166
            ],
            "createdBy": [
                80
            ],
            "myTeam": [
                162
            ],
            "teamScores": [
                165
            ],
            "__typename": [
                1
            ]
        },
        "PageInfo": {
            "first": [
                15
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
                15
            ],
            "description": [
                1
            ],
            "name": [
                1
            ],
            "type": [
                66
            ],
            "bucketDuration": [
                67
            ],
            "scope": [
                68
            ],
            "max": [
                15
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
                65
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
                15
            ],
            "current": [
                15
            ],
            "__typename": [
                1
            ]
        },
        "OrganizationLimits": {
            "limits": [
                70
            ],
            "__typename": [
                1
            ]
        },
        "OrganizationConfiguration": {
            "customFields": [
                16
            ],
            "__typename": [
                1
            ]
        },
        "PublicOrganizationIdentityProvider": {
            "id": [
                426
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
                2
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
                426
            ],
            "ownerId": [
                426
            ],
            "name": [
                1
            ],
            "description": [
                1
            ],
            "configuration": [
                72
            ],
            "tournaments": [
                62
            ],
            "members": [
                59
            ],
            "groups": [
                7
            ],
            "stripeConfigured": [
                2
            ],
            "identityProviders": [
                73,
                {
                    "login": [
                        2,
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
                426
            ],
            "organizationIdentityProviderId": [
                426
            ],
            "properties": [
                75
            ],
            "createdAt": [
                9
            ],
            "updatedAt": [
                9
            ],
            "organizationIdentityProvider": [
                73
            ],
            "__typename": [
                1
            ]
        },
        "Player": {
            "id": [
                426
            ],
            "username": [
                1
            ],
            "description": [
                1
            ],
            "ownerId": [
                426
            ],
            "organizationCustomId": [
                426
            ],
            "updatedAt": [
                9
            ],
            "createdAt": [
                9
            ],
            "identities": [
                76
            ],
            "owner": [
                80
            ],
            "customFields": [
                20,
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
                79
            ],
            "nodes": [
                77
            ],
            "pageInfo": [
                6
            ],
            "totalCount": [
                15
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
                77
            ],
            "__typename": [
                1
            ]
        },
        "Account": {
            "id": [
                426
            ],
            "email": [
                81
            ],
            "permissions": [
                11
            ],
            "profiles": [
                77
            ],
            "identities": [
                76,
                {
                    "properties": [
                        1,
                        "[String!]"
                    ],
                    "providerIds": [
                        426,
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
                426
            ],
            "name": [
                1
            ],
            "description": [
                1
            ],
            "createdAt": [
                9
            ],
            "updatedAt": [
                9
            ],
            "configuration": [
                84
            ],
            "createdById": [
                426
            ],
            "organizationId": [
                426
            ],
            "__typename": [
                1
            ]
        },
        "ConfigurationProperties": {
            "on_StepConfiguration": [
                28
            ],
            "on_TournamentConfiguration": [
                43
            ],
            "__typename": [
                1
            ]
        },
        "LeaderboardSeasonBucketScore": {
            "id": [
                426
            ],
            "rank": [
                15
            ],
            "lastScore": [
                15
            ],
            "lastRank": [
                52
            ],
            "createdAt": [
                9
            ],
            "updatedAt": [
                9
            ],
            "score": [
                15
            ],
            "leaderboardSeasonBucketId": [
                426
            ],
            "playerProfileId": [
                426
            ],
            "__typename": [
                1
            ]
        },
        "LeaderboardSeasonBucketScores": {
            "edges": [
                87
            ],
            "nodes": [
                85
            ],
            "pageInfo": [
                6
            ],
            "totalCount": [
                15
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
                85
            ],
            "__typename": [
                1
            ]
        },
        "Leaderboard": {
            "id": [
                426
            ],
            "organizationId": [
                426
            ],
            "ownerId": [
                426
            ],
            "name": [
                1
            ],
            "description": [
                1
            ],
            "createdAt": [
                9
            ],
            "updatedAt": [
                9
            ],
            "__typename": [
                1
            ]
        },
        "Leaderboards": {
            "edges": [
                90
            ],
            "nodes": [
                88
            ],
            "pageInfo": [
                6
            ],
            "totalCount": [
                15
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
                88
            ],
            "__typename": [
                1
            ]
        },
        "LeaderboardSeason": {
            "id": [
                426
            ],
            "leaderboardId": [
                426
            ],
            "name": [
                1
            ],
            "start": [
                9
            ],
            "end": [
                9
            ],
            "startingScore": [
                15
            ],
            "createdAt": [
                9
            ],
            "updatedAt": [
                9
            ],
            "__typename": [
                1
            ]
        },
        "LeaderboardSeasons": {
            "edges": [
                93
            ],
            "nodes": [
                91
            ],
            "pageInfo": [
                6
            ],
            "totalCount": [
                15
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
                91
            ],
            "__typename": [
                1
            ]
        },
        "LeaderboardSeasonBucket": {
            "id": [
                426
            ],
            "seasonId": [
                426
            ],
            "name": [
                1
            ],
            "minScore": [
                15
            ],
            "scoreCalculationType": [
                95
            ],
            "createdAt": [
                9
            ],
            "updatedAt": [
                9
            ],
            "__typename": [
                1
            ]
        },
        "LeaderboardScoreCalculationType": {},
        "LeaderboardSeasonBuckets": {
            "edges": [
                97
            ],
            "nodes": [
                94
            ],
            "pageInfo": [
                6
            ],
            "totalCount": [
                15
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
                94
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
                101
            ],
            "validation_errors": [
                99
            ],
            "validation_records": [
                98
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
                102
            ],
            "ssl": [
                100
            ],
            "status": [
                104
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
                426
            ],
            "triggerEvent": [
                47
            ],
            "default": [
                2
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
                9
            ],
            "updatedAt": [
                9
            ],
            "organizationId": [
                426
            ],
            "__typename": [
                1
            ]
        },
        "EmailTemplates": {
            "edges": [
                107
            ],
            "nodes": [
                105
            ],
            "pageInfo": [
                6
            ],
            "totalCount": [
                15
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
                105
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
                426
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
                110
            ],
            "requirements": [
                108
            ],
            "createdAt": [
                9
            ],
            "updatedAt": [
                9
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
                113
            ],
            "label": [
                1
            ],
            "description": [
                1
            ],
            "required": [
                2
            ],
            "defaultValue": [
                1
            ],
            "options": [
                111
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
                112
            ],
            "events": [
                114
            ],
            "__typename": [
                1
            ]
        },
        "ExtensionPointSizeModel": {
            "maxWidth": [
                52
            ],
            "maxHeight": [
                52
            ],
            "__typename": [
                1
            ]
        },
        "ExtensionPointModel": {
            "type": [
                118
            ],
            "label": [
                1
            ],
            "activePages": [
                1
            ],
            "size": [
                116
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
                117
            ],
            "webhookUrl": [
                1
            ],
            "webhookEvents": [
                58
            ],
            "metafieldNamespaces": [
                1
            ],
            "frontendModules": [
                115
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
                120
            ],
            "__typename": [
                1
            ]
        },
        "PlatformCdnFile": {
            "id": [
                426
            ],
            "platformId": [
                426
            ],
            "platformTemplateId": [
                426
            ],
            "name": [
                1
            ],
            "type": [
                123
            ],
            "updatedAt": [
                9
            ],
            "createdAt": [
                9
            ],
            "config": [
                121
            ],
            "size": [
                15
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
                124
            ],
            "url": [
                126
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
                2
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
                2
            ],
            "checks": [
                127
            ],
            "__typename": [
                1
            ]
        },
        "MarketplaceAppRelease": {
            "id": [
                426
            ],
            "marketplaceAppId": [
                426
            ],
            "version": [
                1
            ],
            "status": [
                130
            ],
            "manifest": [
                119
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
                128
            ],
            "reviewedAt": [
                9
            ],
            "createdAt": [
                9
            ],
            "__typename": [
                1
            ]
        },
        "MarketplaceAppReleaseStatus": {},
        "AppReleaseWithUploadUrls": {
            "release": [
                129
            ],
            "extensionUploadUrl": [
                125
            ],
            "moduleUploadUrl": [
                125
            ],
            "__typename": [
                1
            ]
        },
        "AppBundleValidationError": {
            "valid": [
                2
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
                426
            ],
            "appId": [
                426
            ],
            "version": [
                1
            ],
            "notes": [
                1
            ],
            "manifest": [
                119
            ],
            "status": [
                134
            ],
            "reviewResult": [
                128
            ],
            "createdAt": [
                9
            ],
            "updatedAt": [
                9
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
                2
            ],
            "public": [
                2
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
                426
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
                135
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
                426
            ],
            "organizationId": [
                426
            ],
            "createdAt": [
                9
            ],
            "updatedAt": [
                9
            ],
            "secret": [
                1
            ],
            "public": [
                2
            ],
            "icon": [
                1
            ],
            "shortDescription": [
                1
            ],
            "configuration": [
                136
            ],
            "creator": [
                80
            ],
            "manifest": [
                119
            ],
            "releases": [
                133
            ],
            "appWebhooks": [
                140
            ],
            "__typename": [
                1
            ]
        },
        "OrganizationApps": {
            "edges": [
                139
            ],
            "nodes": [
                137
            ],
            "pageInfo": [
                6
            ],
            "totalCount": [
                15
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
                137
            ],
            "__typename": [
                1
            ]
        },
        "AppWebhook": {
            "id": [
                426
            ],
            "appId": [
                426
            ],
            "installationId": [
                426
            ],
            "organizationId": [
                426
            ],
            "url": [
                1
            ],
            "events": [
                1
            ],
            "active": [
                2
            ],
            "createdAt": [
                9
            ],
            "updatedAt": [
                9
            ],
            "__typename": [
                1
            ]
        },
        "OrganizationAttachedApp": {
            "organizationId": [
                426
            ],
            "groupId": [
                426
            ],
            "appId": [
                1
            ],
            "permissions": [
                11
            ],
            "createdAt": [
                9
            ],
            "updatedAt": [
                9
            ],
            "app": [
                137
            ],
            "group": [
                7
            ],
            "__typename": [
                1
            ]
        },
        "OrganizationAttachedApps": {
            "edges": [
                143
            ],
            "nodes": [
                141
            ],
            "pageInfo": [
                6
            ],
            "totalCount": [
                15
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
                141
            ],
            "__typename": [
                1
            ]
        },
        "OrganizationIdentityProvider": {
            "enabled": [
                2
            ],
            "requiredForPlayerValidation": [
                2
            ],
            "allowLogin": [
                2
            ],
            "description": [
                1
            ],
            "icon": [
                1
            ],
            "id": [
                426
            ],
            "identityProviderId": [
                426
            ],
            "configuration": [
                145
            ],
            "name": [
                1
            ],
            "organizationId": [
                426
            ],
            "createdAt": [
                9
            ],
            "updatedAt": [
                9
            ],
            "parentIdentityProvider": [
                109
            ],
            "__typename": [
                1
            ]
        },
        "IdentityProviderConfigurations": {
            "on_OAuthClientConfiguration": [
                146
            ],
            "on_OpenidConfiguration": [
                149
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
                5
            ],
            "issuer": [
                1
            ],
            "providerType": [
                147
            ],
            "clientId": [
                1
            ],
            "clientSecret": [
                1
            ],
            "tokenEndpointAuthMethod": [
                148
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
                5
            ],
            "issuer": [
                1
            ],
            "providerType": [
                147
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
                426
            ],
            "organizationId": [
                426
            ],
            "events": [
                58
            ],
            "url": [
                1
            ],
            "description": [
                1
            ],
            "active": [
                2
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
                426
            ],
            "playerProfileId": [
                426
            ],
            "ratingId": [
                426
            ],
            "value": [
                15
            ],
            "createdAt": [
                9
            ],
            "updatedAt": [
                9
            ],
            "player": [
                77
            ],
            "__typename": [
                1
            ]
        },
        "SeedingPin": {
            "teamId": [
                426
            ],
            "groupId": [
                426
            ],
            "gameId": [
                426
            ],
            "slotIndex": [
                52
            ],
            "__typename": [
                1
            ]
        },
        "TournamentStepGroupRoundGameMatch": {
            "id": [
                426
            ],
            "order": [
                15
            ],
            "status": [
                154
            ],
            "tournamentStepGroupRoundGameId": [
                426
            ],
            "configuration": [
                23
            ],
            "createdAt": [
                9
            ],
            "updatedAt": [
                9
            ],
            "__typename": [
                1
            ]
        },
        "MatchStatus": {},
        "TournamentStepGroupRoundGameMatches": {
            "edges": [
                156
            ],
            "nodes": [
                153
            ],
            "pageInfo": [
                6
            ],
            "totalCount": [
                15
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
                153
            ],
            "__typename": [
                1
            ]
        },
        "OrganizationPaymentCollectionConfiguration": {
            "wellPlayedFeePercent": [
                15
            ],
            "wellPlayedMinimalFee": [
                15
            ],
            "__typename": [
                1
            ]
        },
        "TournamentTeamMemberDto": {
            "id": [
                426
            ],
            "status": [
                159
            ],
            "tournamentTeamId": [
                426
            ],
            "playerProfileId": [
                426
            ],
            "createdAt": [
                9
            ],
            "updatedAt": [
                9
            ],
            "team": [
                162
            ],
            "__typename": [
                1
            ]
        },
        "TournamentTeamMemberStatus": {},
        "TeamMembers": {
            "edges": [
                161
            ],
            "nodes": [
                158
            ],
            "pageInfo": [
                6
            ],
            "totalCount": [
                15
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
                158
            ],
            "__typename": [
                1
            ]
        },
        "TournamentTeam": {
            "id": [
                426
            ],
            "name": [
                1
            ],
            "tag": [
                1
            ],
            "teamId": [
                426
            ],
            "managerId": [
                426
            ],
            "tournamentId": [
                426
            ],
            "status": [
                64
            ],
            "withdrawnAt": [
                9
            ],
            "createdAt": [
                9
            ],
            "updatedAt": [
                9
            ],
            "members": [
                158
            ],
            "customFields": [
                20,
                {
                    "properties": [
                        1,
                        "[String!]"
                    ]
                }
            ],
            "tournament": [
                62
            ],
            "__typename": [
                1
            ]
        },
        "TournamentTeams": {
            "edges": [
                164
            ],
            "nodes": [
                162
            ],
            "pageInfo": [
                6
            ],
            "totalCount": [
                15
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
                162
            ],
            "__typename": [
                1
            ]
        },
        "TournamentTeamScore": {
            "teamId": [
                426
            ],
            "score": [
                15
            ],
            "team": [
                162
            ],
            "__typename": [
                1
            ]
        },
        "TournamentStep": {
            "id": [
                426
            ],
            "tournamentId": [
                426
            ],
            "name": [
                1
            ],
            "description": [
                1
            ],
            "order": [
                15
            ],
            "type": [
                167
            ],
            "status": [
                168
            ],
            "configuration": [
                28
            ],
            "seedingOrder": [
                426
            ],
            "createdAt": [
                9
            ],
            "updatedAt": [
                9
            ],
            "teamScores": [
                165
            ],
            "tournament": [
                62
            ],
            "manualPins": [
                152
            ],
            "__typename": [
                1
            ]
        },
        "StepType": {},
        "StepStatus": {},
        "Tournaments": {
            "edges": [
                170
            ],
            "nodes": [
                62
            ],
            "pageInfo": [
                6
            ],
            "totalCount": [
                15
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
                62
            ],
            "__typename": [
                1
            ]
        },
        "TournamentStepGroupRoundGame": {
            "id": [
                426
            ],
            "configuration": [
                24
            ],
            "status": [
                172
            ],
            "order": [
                15
            ],
            "tournamentStepGroupRoundId": [
                426
            ],
            "createdAt": [
                9
            ],
            "updatedAt": [
                9
            ],
            "matches": [
                153
            ],
            "gameLinks": [
                175
            ],
            "winningGameId": [
                426
            ],
            "losingGameId": [
                426
            ],
            "__typename": [
                1
            ]
        },
        "TournamentGameStatus": {},
        "TournamentStepGroupRound": {
            "id": [
                426
            ],
            "name": [
                1
            ],
            "configuration": [
                26
            ],
            "tournamentStepGroupId": [
                426
            ],
            "order": [
                15
            ],
            "createdAt": [
                9
            ],
            "updatedAt": [
                9
            ],
            "games": [
                171
            ],
            "__typename": [
                1
            ]
        },
        "TournamentStepGroup": {
            "id": [
                426
            ],
            "name": [
                1
            ],
            "description": [
                1
            ],
            "configuration": [
                27
            ],
            "tournamentStepId": [
                426
            ],
            "createdAt": [
                9
            ],
            "updatedAt": [
                9
            ],
            "order": [
                15
            ],
            "rounds": [
                173
            ],
            "__typename": [
                1
            ]
        },
        "GameLink": {
            "id": [
                426
            ],
            "sourceGameId": [
                426
            ],
            "targetGameId": [
                426
            ],
            "outcome": [
                176
            ],
            "__typename": [
                1
            ]
        },
        "GameLinkOutcome": {},
        "TournamentStepGroupRoundGameMatchScore": {
            "id": [
                426
            ],
            "matchId": [
                426
            ],
            "teamId": [
                426
            ],
            "score": [
                15
            ],
            "status": [
                178
            ],
            "createdAt": [
                9
            ],
            "updatedAt": [
                9
            ],
            "__typename": [
                1
            ]
        },
        "MatchScoreStatus": {},
        "TournamentStepGroupRoundGameMatchScores": {
            "edges": [
                180
            ],
            "nodes": [
                177
            ],
            "pageInfo": [
                6
            ],
            "totalCount": [
                15
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
                177
            ],
            "__typename": [
                1
            ]
        },
        "TournamentAdmin": {
            "id": [
                426
            ],
            "tournamentId": [
                426
            ],
            "accountId": [
                426
            ],
            "permissions": [
                182
            ],
            "createdAt": [
                9
            ],
            "updatedAt": [
                9
            ],
            "account": [
                80
            ],
            "__typename": [
                1
            ]
        },
        "TournamentAdminPermissions": {},
        "RuleActionModel": {
            "type": [
                184
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
                426
            ],
            "name": [
                1
            ],
            "description": [
                1
            ],
            "order": [
                52
            ],
            "triggerType": [
                186
            ],
            "triggerScope": [
                1
            ],
            "condition": [
                1
            ],
            "actions": [
                183
            ],
            "autoExecute": [
                2
            ],
            "allowManualOverride": [
                2
            ],
            "enabled": [
                2
            ],
            "purpose": [
                187
            ],
            "createdAt": [
                9
            ],
            "updatedAt": [
                9
            ],
            "__typename": [
                1
            ]
        },
        "RuleTriggerType": {},
        "AdvancementRulePurpose": {},
        "TiebreakerRuleModel": {
            "id": [
                426
            ],
            "order": [
                52
            ],
            "type": [
                189
            ],
            "formula": [
                1
            ],
            "sortOrder": [
                190
            ],
            "__typename": [
                1
            ]
        },
        "TiebreakerType": {},
        "SortOrder": {},
        "ScoringRuleSetModel": {
            "id": [
                426
            ],
            "aggregation": [
                192
            ],
            "formula": [
                1
            ],
            "winPoints": [
                52
            ],
            "lossPoints": [
                52
            ],
            "drawPoints": [
                52
            ],
            "forfeitPoints": [
                52
            ],
            "tiebreakers": [
                188
            ],
            "__typename": [
                1
            ]
        },
        "ScoreAggregationType": {},
        "GameTemplateModel": {
            "id": [
                426
            ],
            "order": [
                52
            ],
            "teamSlots": [
                52
            ],
            "bestOf": [
                52
            ],
            "onWinTarget": [
                1
            ],
            "onWinSourceSlot": [
                52
            ],
            "onWinTargetSlot": [
                52
            ],
            "onLossTarget": [
                1
            ],
            "onLossSourceSlot": [
                52
            ],
            "onLossTargetSlot": [
                52
            ],
            "__typename": [
                1
            ]
        },
        "RoundTemplateModel": {
            "id": [
                426
            ],
            "name": [
                1
            ],
            "order": [
                52
            ],
            "gameTemplates": [
                193
            ],
            "__typename": [
                1
            ]
        },
        "GroupTemplateModel": {
            "id": [
                426
            ],
            "name": [
                1
            ],
            "description": [
                1
            ],
            "order": [
                52
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
                194
            ],
            "__typename": [
                1
            ]
        },
        "StructureTemplateModel": {
            "id": [
                426
            ],
            "groupTemplates": [
                195
            ],
            "__typename": [
                1
            ]
        },
        "CrossStepUsageModel": {
            "type": [
                198
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
                426
            ],
            "sourceStepId": [
                426
            ],
            "sourceRelative": [
                200
            ],
            "dataSource": [
                201
            ],
            "usage": [
                197
            ],
            "__typename": [
                1
            ]
        },
        "StepRelativePosition": {},
        "CrossStepDataSource": {},
        "StepRuleSetModel": {
            "id": [
                426
            ],
            "version": [
                52
            ],
            "presetName": [
                1
            ],
            "teamCount": [
                52
            ],
            "validated": [
                2
            ],
            "validatedAt": [
                9
            ],
            "scoringRuleSet": [
                191
            ],
            "advancementRules": [
                185
            ],
            "crossStepRules": [
                199
            ],
            "structureTemplate": [
                196
            ],
            "createdAt": [
                9
            ],
            "updatedAt": [
                9
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
                204
            ],
            "required": [
                2
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
                426
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
                203
            ],
            "createdAt": [
                9
            ],
            "updatedAt": [
                9
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
                207
            ],
            "parameters": [
                203
            ],
            "source": [
                1
            ],
            "supportsPinning": [
                2
            ],
            "supportsGroupPinning": [
                2
            ],
            "supportsSlotPinning": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "BuiltinPresetCategory": {},
        "SourceSnippetLineModel": {
            "lineNumber": [
                52
            ],
            "source": [
                1
            ],
            "isErrorLine": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "ScriptStackFrameModel": {
            "phase": [
                210
            ],
            "line": [
                52
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
                52
            ],
            "column": [
                52
            ],
            "message": [
                1
            ],
            "code": [
                212
            ],
            "phase": [
                210
            ],
            "originHelper": [
                1
            ],
            "hint": [
                1
            ],
            "snippet": [
                208
            ],
            "stackFrames": [
                209
            ],
            "__typename": [
                1
            ]
        },
        "ScriptErrorCode": {},
        "ScriptWarningModel": {
            "line": [
                52
            ],
            "column": [
                52
            ],
            "message": [
                1
            ],
            "code": [
                214
            ],
            "__typename": [
                1
            ]
        },
        "ScriptWarningCode": {},
        "ScriptValidationResultModel": {
            "valid": [
                2
            ],
            "errors": [
                211
            ],
            "warnings": [
                213
            ],
            "__typename": [
                1
            ]
        },
        "SimulatedEffectModel": {
            "type": [
                217
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
                2
            ],
            "errors": [
                211
            ],
            "warnings": [
                213
            ],
            "effectsSummary": [
                216
            ],
            "partialEffectsSummary": [
                216
            ],
            "executionTimeMs": [
                52
            ],
            "instructionsUsed": [
                52
            ],
            "__typename": [
                1
            ]
        },
        "LuaErrorDetailModel": {
            "scriptContextType": [
                220
            ],
            "script": [
                1
            ],
            "line": [
                52
            ],
            "column": [
                52
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
                426
            ],
            "code": [
                222
            ],
            "message": [
                1
            ],
            "hint": [
                1
            ],
            "invariantCode": [
                223
            ],
            "luaError": [
                219
            ],
            "offender": [
                224
            ],
            "__typename": [
                1
            ]
        },
        "ValidationErrorCode": {},
        "InvariantCode": {},
        "InvariantOffenderUnion": {
            "on_RuleOffenderModel": [
                225
            ],
            "on_CrossStepRuleOffenderModel": [
                227
            ],
            "on_GameOffenderModel": [
                228
            ],
            "on_RoundOffenderModel": [
                230
            ],
            "on_GroupOffenderModel": [
                231
            ],
            "on_TeamOffenderModel": [
                232
            ],
            "on_ScoreRowOffenderModel": [
                234
            ],
            "__typename": [
                1
            ]
        },
        "RuleOffenderModel": {
            "kind": [
                226
            ],
            "ruleId": [
                426
            ],
            "ruleName": [
                1
            ],
            "trigger": [
                186
            ],
            "__typename": [
                1
            ]
        },
        "OffenderKind": {},
        "CrossStepRuleOffenderModel": {
            "kind": [
                226
            ],
            "crossStepRuleId": [
                426
            ],
            "dataSource": [
                201
            ],
            "usage": [
                198
            ],
            "__typename": [
                1
            ]
        },
        "GameOffenderModel": {
            "kind": [
                226
            ],
            "gameId": [
                426
            ],
            "groupIndex": [
                52
            ],
            "roundIndex": [
                52
            ],
            "gameIndex": [
                52
            ],
            "status": [
                229
            ],
            "__typename": [
                1
            ]
        },
        "GameStatus": {},
        "RoundOffenderModel": {
            "kind": [
                226
            ],
            "roundId": [
                426
            ],
            "groupIndex": [
                52
            ],
            "roundIndex": [
                52
            ],
            "__typename": [
                1
            ]
        },
        "GroupOffenderModel": {
            "kind": [
                226
            ],
            "groupId": [
                426
            ],
            "groupIndex": [
                52
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
                226
            ],
            "teamId": [
                426
            ],
            "teamName": [
                1
            ],
            "currentStatus": [
                233
            ],
            "__typename": [
                1
            ]
        },
        "TeamScopeStatus": {},
        "ScoreRowOffenderModel": {
            "kind": [
                226
            ],
            "scope": [
                235
            ],
            "scoreRowId": [
                426
            ],
            "teamId": [
                426
            ],
            "score": [
                15
            ],
            "rank": [
                52
            ],
            "status": [
                233
            ],
            "__typename": [
                1
            ]
        },
        "ScoreRowScope": {},
        "InvariantResultModel": {
            "code": [
                223
            ],
            "severity": [
                237
            ],
            "passed": [
                2
            ],
            "message": [
                1
            ],
            "offenders": [
                224
            ],
            "__typename": [
                1
            ]
        },
        "InvariantSeverity": {},
        "RuleFireSummaryModel": {
            "ruleId": [
                426
            ],
            "ruleName": [
                1
            ],
            "trigger": [
                186
            ],
            "fireCount": [
                52
            ],
            "__typename": [
                1
            ]
        },
        "ValidationResultModel": {
            "success": [
                2
            ],
            "durationMs": [
                52
            ],
            "totalMutations": [
                52
            ],
            "invariantResults": [
                236
            ],
            "errors": [
                221
            ],
            "ruleFiredSummary": [
                238
            ],
            "__typename": [
                1
            ]
        },
        "ValidationProgressModel": {
            "stage": [
                241
            ],
            "percent": [
                15
            ],
            "currentPhaseDetail": [
                1
            ],
            "rulesFired": [
                52
            ],
            "totalRulesDeclared": [
                52
            ],
            "totalMutations": [
                52
            ],
            "elapsedMs": [
                52
            ],
            "__typename": [
                1
            ]
        },
        "ValidationStage": {},
        "ValidationJobModel": {
            "id": [
                426
            ],
            "stepRuleSetId": [
                426
            ],
            "status": [
                243
            ],
            "stage": [
                241
            ],
            "progress": [
                240
            ],
            "result": [
                239
            ],
            "errorSummary": [
                1
            ],
            "startedAt": [
                9
            ],
            "completedAt": [
                9
            ],
            "__typename": [
                1
            ]
        },
        "ValidationJobStatus": {},
        "ValidationEventModel": {
            "id": [
                426
            ],
            "jobId": [
                426
            ],
            "sequence": [
                52
            ],
            "timestamp": [
                9
            ],
            "kind": [
                245
            ],
            "summary": [
                1
            ],
            "ruleId": [
                426
            ],
            "crossStepRuleId": [
                426
            ],
            "matchId": [
                426
            ],
            "gameId": [
                426
            ],
            "roundId": [
                426
            ],
            "groupId": [
                426
            ],
            "stepId": [
                426
            ],
            "teamId": [
                426
            ],
            "effectType": [
                246
            ],
            "statusBefore": [
                247
            ],
            "statusAfter": [
                247
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
                249
            ],
            "nodes": [
                242
            ],
            "pageInfo": [
                6
            ],
            "totalCount": [
                15
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
                242
            ],
            "__typename": [
                1
            ]
        },
        "ValidationEvents": {
            "edges": [
                251
            ],
            "nodes": [
                244
            ],
            "pageInfo": [
                6
            ],
            "totalCount": [
                15
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
                244
            ],
            "__typename": [
                1
            ]
        },
        "Currency": {
            "id": [
                426
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
                2
            ],
            "organizationId": [
                426
            ],
            "createdAt": [
                9
            ],
            "updatedAt": [
                9
            ],
            "metadata": [
                21
            ],
            "__typename": [
                1
            ]
        },
        "Currencies": {
            "edges": [
                254
            ],
            "nodes": [
                252
            ],
            "pageInfo": [
                6
            ],
            "totalCount": [
                15
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
                252
            ],
            "__typename": [
                1
            ]
        },
        "PlayerCurrency": {
            "id": [
                426
            ],
            "playerProfileId": [
                426
            ],
            "currencyId": [
                426
            ],
            "balance": [
                15
            ],
            "createdAt": [
                9
            ],
            "updatedAt": [
                9
            ],
            "__typename": [
                1
            ]
        },
        "PlayerCurrencies": {
            "edges": [
                257
            ],
            "nodes": [
                255
            ],
            "pageInfo": [
                6
            ],
            "totalCount": [
                15
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
                255
            ],
            "__typename": [
                1
            ]
        },
        "UserGroupConfiguration": {
            "maxSize": [
                52
            ],
            "minSize": [
                52
            ],
            "__typename": [
                1
            ]
        },
        "UserGroupMember": {
            "id": [
                426
            ],
            "groupId": [
                426
            ],
            "playerProfileId": [
                426
            ],
            "status": [
                260
            ],
            "createdAt": [
                9
            ],
            "updatedAt": [
                9
            ],
            "__typename": [
                1
            ]
        },
        "UserGroupMemberStatus": {},
        "UserGroup": {
            "id": [
                426
            ],
            "organizationId": [
                426
            ],
            "managerId": [
                426
            ],
            "createdAt": [
                9
            ],
            "updatedAt": [
                9
            ],
            "status": [
                262
            ],
            "locked": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "UserGroupStatus": {},
        "UserGroups": {
            "edges": [
                264
            ],
            "nodes": [
                261
            ],
            "pageInfo": [
                6
            ],
            "totalCount": [
                15
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
                261
            ],
            "__typename": [
                1
            ]
        },
        "UserGroupMembers": {
            "edges": [
                266
            ],
            "nodes": [
                259
            ],
            "pageInfo": [
                6
            ],
            "totalCount": [
                15
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
                259
            ],
            "__typename": [
                1
            ]
        },
        "Position": {
            "x": [
                15
            ],
            "y": [
                15
            ],
            "__typename": [
                1
            ]
        },
        "EventVenueSeatConfiguration": {
            "size": [
                15
            ],
            "svgUrl": [
                1
            ],
            "position": [
                267
            ],
            "__typename": [
                1
            ]
        },
        "EventVenueSeat": {
            "id": [
                426
            ],
            "name": [
                1
            ],
            "createdAt": [
                9
            ],
            "updatedAt": [
                9
            ],
            "configuration": [
                268
            ],
            "seatTypeId": [
                426
            ],
            "__typename": [
                1
            ]
        },
        "EventVenueSeatsUpdateResult": {
            "updatedSeats": [
                269
            ],
            "createdSeats": [
                269
            ],
            "deletedSeats": [
                269
            ],
            "__typename": [
                1
            ]
        },
        "EventVenueSeats": {
            "edges": [
                272
            ],
            "nodes": [
                269
            ],
            "pageInfo": [
                6
            ],
            "totalCount": [
                15
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
                269
            ],
            "__typename": [
                1
            ]
        },
        "EventConfiguration": {
            "customFields": [
                16
            ],
            "groupConfiguration": [
                258
            ],
            "maxTicketsPerReservation": [
                15
            ],
            "reservationStatusAfterPayment": [
                274
            ],
            "reservationStatusAfterRegistration": [
                275
            ],
            "sessionDuration": [
                15
            ],
            "allowForNewSessionAfterTimeout": [
                2
            ],
            "seatAssignmentMode": [
                276
            ],
            "allowForMoreTicketsThanGroupMembers": [
                2
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
                426
            ],
            "title": [
                1
            ],
            "description": [
                1
            ],
            "createdAt": [
                9
            ],
            "updatedAt": [
                9
            ],
            "startAt": [
                9
            ],
            "endAt": [
                9
            ],
            "startRegistrationsAt": [
                9
            ],
            "endRegistrationsAt": [
                9
            ],
            "visibleAt": [
                9
            ],
            "configuration": [
                273
            ],
            "eventVenueId": [
                426
            ],
            "organizationId": [
                426
            ],
            "createdById": [
                426
            ],
            "decryptionKey": [
                1
            ],
            "venue": [
                301
            ],
            "__typename": [
                1
            ]
        },
        "EventInterface": {
            "id": [
                426
            ],
            "title": [
                1
            ],
            "description": [
                1
            ],
            "createdAt": [
                9
            ],
            "updatedAt": [
                9
            ],
            "startAt": [
                9
            ],
            "endAt": [
                9
            ],
            "startRegistrationsAt": [
                9
            ],
            "endRegistrationsAt": [
                9
            ],
            "visibleAt": [
                9
            ],
            "configuration": [
                273
            ],
            "eventVenueId": [
                426
            ],
            "organizationId": [
                426
            ],
            "createdById": [
                426
            ],
            "decryptionKey": [
                1
            ],
            "venue": [
                301
            ],
            "on_Event": [
                277
            ],
            "on_EventWithUserReservation": [
                279
            ],
            "__typename": [
                1
            ]
        },
        "EventWithUserReservation": {
            "id": [
                426
            ],
            "title": [
                1
            ],
            "description": [
                1
            ],
            "createdAt": [
                9
            ],
            "updatedAt": [
                9
            ],
            "startAt": [
                9
            ],
            "endAt": [
                9
            ],
            "startRegistrationsAt": [
                9
            ],
            "endRegistrationsAt": [
                9
            ],
            "visibleAt": [
                9
            ],
            "configuration": [
                273
            ],
            "eventVenueId": [
                426
            ],
            "organizationId": [
                426
            ],
            "createdById": [
                426
            ],
            "decryptionKey": [
                1
            ],
            "venue": [
                301
            ],
            "myReservation": [
                287
            ],
            "__typename": [
                1
            ]
        },
        "Events": {
            "edges": [
                281
            ],
            "nodes": [
                277
            ],
            "pageInfo": [
                6
            ],
            "totalCount": [
                15
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
                277
            ],
            "__typename": [
                1
            ]
        },
        "EventReservationTicketConfiguration": {
            "customFields": [
                20
            ],
            "__typename": [
                1
            ]
        },
        "EventReservationTicket": {
            "id": [
                426
            ],
            "ticketId": [
                426
            ],
            "reservationId": [
                426
            ],
            "groupMemberId": [
                426
            ],
            "seatId": [
                426
            ],
            "createdAt": [
                9
            ],
            "updatedAt": [
                9
            ],
            "configuration": [
                282
            ],
            "__typename": [
                1
            ]
        },
        "EventReservationTicketWithQrCode": {
            "id": [
                426
            ],
            "ticketId": [
                426
            ],
            "reservationId": [
                426
            ],
            "groupMemberId": [
                426
            ],
            "seatId": [
                426
            ],
            "createdAt": [
                9
            ],
            "updatedAt": [
                9
            ],
            "configuration": [
                282
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
                426
            ],
            "name": [
                1
            ],
            "status": [
                286
            ],
            "sessionValidUntil": [
                9
            ],
            "createdAt": [
                9
            ],
            "updatedAt": [
                9
            ],
            "eventId": [
                426
            ],
            "groupId": [
                426
            ],
            "tickets": [
                283
            ],
            "groupStatus": [
                262
            ],
            "__typename": [
                1
            ]
        },
        "EventReservationStatus": {},
        "EventReservationWithTicketsAndQrCode": {
            "id": [
                426
            ],
            "name": [
                1
            ],
            "status": [
                286
            ],
            "sessionValidUntil": [
                9
            ],
            "createdAt": [
                9
            ],
            "updatedAt": [
                9
            ],
            "eventId": [
                426
            ],
            "groupId": [
                426
            ],
            "groupStatus": [
                262
            ],
            "tickets": [
                284
            ],
            "__typename": [
                1
            ]
        },
        "EventReservations": {
            "edges": [
                289
            ],
            "nodes": [
                290
            ],
            "pageInfo": [
                6
            ],
            "totalCount": [
                15
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
                290
            ],
            "__typename": [
                1
            ]
        },
        "OmitObjectType": {
            "id": [
                426
            ],
            "name": [
                1
            ],
            "status": [
                286
            ],
            "sessionValidUntil": [
                9
            ],
            "createdAt": [
                9
            ],
            "updatedAt": [
                9
            ],
            "eventId": [
                426
            ],
            "groupId": [
                426
            ],
            "groupStatus": [
                262
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
                426
            ],
            "name": [
                1
            ],
            "createdAt": [
                9
            ],
            "updatedAt": [
                9
            ],
            "configuration": [
                268
            ],
            "seatTypeId": [
                426
            ],
            "status": [
                293
            ],
            "reservedByTicketId": [
                426
            ],
            "reservedByReservationId": [
                426
            ],
            "reservedByGroupMemberId": [
                426
            ],
            "__typename": [
                1
            ]
        },
        "EventSeatStatus": {},
        "EventSeats": {
            "edges": [
                295
            ],
            "nodes": [
                292
            ],
            "pageInfo": [
                6
            ],
            "totalCount": [
                15
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
                292
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
                426
            ],
            "name": [
                1
            ],
            "description": [
                1
            ],
            "configuration": [
                296
            ],
            "createdAt": [
                9
            ],
            "updatedAt": [
                9
            ],
            "venueId": [
                426
            ],
            "__typename": [
                1
            ]
        },
        "EventVenueSeatTypes": {
            "edges": [
                299
            ],
            "nodes": [
                297
            ],
            "pageInfo": [
                6
            ],
            "totalCount": [
                15
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
                297
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
                426
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
                9
            ],
            "updatedAt": [
                9
            ],
            "configuration": [
                300
            ],
            "organizationId": [
                426
            ],
            "__typename": [
                1
            ]
        },
        "EventVenues": {
            "edges": [
                303
            ],
            "nodes": [
                301
            ],
            "pageInfo": [
                6
            ],
            "totalCount": [
                15
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
                301
            ],
            "__typename": [
                1
            ]
        },
        "EventTicketConfigurationConfiguration": {
            "customFields": [
                16
            ],
            "__typename": [
                1
            ]
        },
        "EventTicketConfiguration": {
            "id": [
                426
            ],
            "name": [
                1
            ],
            "description": [
                1
            ],
            "createdAt": [
                9
            ],
            "updatedAt": [
                9
            ],
            "price": [
                15
            ],
            "currency": [
                306
            ],
            "maxCount": [
                15
            ],
            "currentCount": [
                15
            ],
            "buyable": [
                2
            ],
            "eventId": [
                426
            ],
            "seatTypeId": [
                426
            ],
            "configuration": [
                304
            ],
            "__typename": [
                1
            ]
        },
        "ShopCurrencies": {},
        "Item": {
            "id": [
                426
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
                21
            ],
            "createdAt": [
                9
            ],
            "updatedAt": [
                9
            ],
            "organizationId": [
                426
            ],
            "categoryId": [
                426
            ],
            "__typename": [
                1
            ]
        },
        "Items": {
            "edges": [
                309
            ],
            "nodes": [
                307
            ],
            "pageInfo": [
                6
            ],
            "totalCount": [
                15
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
                307
            ],
            "__typename": [
                1
            ]
        },
        "PlayerItem": {
            "id": [
                426
            ],
            "playerProfileId": [
                426
            ],
            "itemId": [
                426
            ],
            "createdAt": [
                9
            ],
            "updatedAt": [
                9
            ],
            "metadata": [
                21
            ],
            "quantity": [
                52
            ],
            "__typename": [
                1
            ]
        },
        "PlayerItems": {
            "edges": [
                312
            ],
            "nodes": [
                310
            ],
            "pageInfo": [
                6
            ],
            "totalCount": [
                15
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
                310
            ],
            "__typename": [
                1
            ]
        },
        "ItemCategory": {
            "id": [
                426
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
                21
            ],
            "createdAt": [
                9
            ],
            "updatedAt": [
                9
            ],
            "organizationId": [
                426
            ],
            "__typename": [
                1
            ]
        },
        "ItemCategories": {
            "edges": [
                315
            ],
            "nodes": [
                313
            ],
            "pageInfo": [
                6
            ],
            "totalCount": [
                15
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
                313
            ],
            "__typename": [
                1
            ]
        },
        "Log": {
            "id": [
                426
            ],
            "type": [
                317
            ],
            "resourceId": [
                426
            ],
            "data": [
                54
            ],
            "organizationId": [
                426
            ],
            "createdAt": [
                9
            ],
            "__typename": [
                1
            ]
        },
        "LogType": {},
        "Logs": {
            "edges": [
                319
            ],
            "nodes": [
                316
            ],
            "pageInfo": [
                6
            ],
            "totalCount": [
                15
            ],
            "__typename": [
                1
            ]
        },
        "LogEdge": {
            "cursor": [
                1
            ],
            "node": [
                316
            ],
            "__typename": [
                1
            ]
        },
        "MarketplaceApp": {
            "id": [
                426
            ],
            "organizationAppId": [
                426
            ],
            "status": [
                321
            ],
            "manifest": [
                119
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
                9
            ],
            "updatedAt": [
                9
            ],
            "reviews": [
                325,
                {
                    "page": [
                        63
                    ]
                }
            ],
            "stats": [
                331
            ],
            "installation": [
                327
            ],
            "pricing": [
                332
            ],
            "__typename": [
                1
            ]
        },
        "MarketplaceAppStatus": {},
        "MarketplaceApps": {
            "edges": [
                323
            ],
            "nodes": [
                320
            ],
            "pageInfo": [
                6
            ],
            "totalCount": [
                15
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
                320
            ],
            "__typename": [
                1
            ]
        },
        "MarketplaceAppReview": {
            "id": [
                426
            ],
            "marketplaceAppId": [
                426
            ],
            "organizationId": [
                426
            ],
            "accountId": [
                426
            ],
            "rating": [
                52
            ],
            "title": [
                1
            ],
            "body": [
                1
            ],
            "createdAt": [
                9
            ],
            "updatedAt": [
                9
            ],
            "__typename": [
                1
            ]
        },
        "MarketplaceAppReviews": {
            "edges": [
                326
            ],
            "nodes": [
                324
            ],
            "pageInfo": [
                6
            ],
            "totalCount": [
                15
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
                324
            ],
            "__typename": [
                1
            ]
        },
        "MarketplaceAppInstallation": {
            "id": [
                426
            ],
            "marketplaceAppId": [
                426
            ],
            "organizationId": [
                426
            ],
            "installedById": [
                426
            ],
            "status": [
                328
            ],
            "grantedPermissions": [
                1
            ],
            "createdAt": [
                9
            ],
            "updatedAt": [
                9
            ],
            "marketplaceApp": [
                320
            ],
            "__typename": [
                1
            ]
        },
        "MarketplaceInstallationStatus": {},
        "MarketplaceAppInstallations": {
            "edges": [
                330
            ],
            "nodes": [
                327
            ],
            "pageInfo": [
                6
            ],
            "totalCount": [
                15
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
                327
            ],
            "__typename": [
                1
            ]
        },
        "MarketplaceAppStats": {
            "totalInstallations": [
                52
            ],
            "averageRating": [
                15
            ],
            "totalReviews": [
                52
            ],
            "__typename": [
                1
            ]
        },
        "MarketplaceAppPricing": {
            "id": [
                426
            ],
            "marketplaceAppId": [
                426
            ],
            "type": [
                333
            ],
            "priceAmountCents": [
                52
            ],
            "currency": [
                1
            ],
            "trialDays": [
                52
            ],
            "createdAt": [
                9
            ],
            "updatedAt": [
                9
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
                426
            ],
            "platformId": [
                426
            ],
            "marketplaceAppId": [
                426
            ],
            "moduleName": [
                1
            ],
            "props": [
                334
            ],
            "createdAt": [
                9
            ],
            "updatedAt": [
                9
            ],
            "__typename": [
                1
            ]
        },
        "ModuleTokenDto": {
            "appId": [
                426
            ],
            "marketplaceAppId": [
                426
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
                112
            ],
            "events": [
                114
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
                426
            ],
            "appId": [
                426
            ],
            "__typename": [
                1
            ]
        },
        "EntityMetafield": {
            "id": [
                426
            ],
            "organizationId": [
                426
            ],
            "appId": [
                426
            ],
            "namespace": [
                1
            ],
            "entityType": [
                1
            ],
            "entityId": [
                426
            ],
            "key": [
                1
            ],
            "value": [
                1
            ],
            "createdAt": [
                9
            ],
            "updatedAt": [
                9
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
                340
            ],
            "visibility": [
                341
            ],
            "objectType": [
                342
            ],
            "objectId": [
                426
            ],
            "createdAt": [
                9
            ],
            "updatedAt": [
                9
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
                426
            ],
            "entries": [
                339
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
                426
            ],
            "objectType": [
                342
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
                346
            ],
            "required": [
                2
            ],
            "unique": [
                2
            ],
            "order": [
                52
            ],
            "visibility": [
                18
            ],
            "editability": [
                19
            ],
            "options": [
                344
            ],
            "defaultValue": [
                1
            ],
            "validationRegex": [
                1
            ],
            "createdAt": [
                9
            ],
            "updatedAt": [
                9
            ],
            "__typename": [
                1
            ]
        },
        "CustomFieldType": {},
        "CustomFieldWithValueModel": {
            "definition": [
                345
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
                426
            ],
            "fields": [
                347
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
                103
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
                2
            ],
            "order": [
                15
            ],
            "__typename": [
                1
            ]
        },
        "PlatformConfiguration": {
            "whitelabel": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "Platform": {
            "id": [
                426
            ],
            "name": [
                1
            ],
            "createdAt": [
                9
            ],
            "updatedAt": [
                9
            ],
            "configuration": [
                352
            ],
            "organizationId": [
                426
            ],
            "appId": [
                1
            ],
            "customDomains": [
                349
            ],
            "__typename": [
                1
            ]
        },
        "PlatformTemplate": {
            "id": [
                426
            ],
            "name": [
                1
            ],
            "description": [
                1
            ],
            "screenshotUrl": [
                126
            ],
            "createdAt": [
                9
            ],
            "updatedAt": [
                9
            ],
            "ownerId": [
                426
            ],
            "organizationId": [
                426
            ],
            "public": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "PresenceAnalytics": {
            "totalSessions": [
                52
            ],
            "authenticatedSessions": [
                52
            ],
            "anonymousSessions": [
                52
            ],
            "__typename": [
                1
            ]
        },
        "UserConnectionEvent": {
            "sessionId": [
                426
            ],
            "serverId": [
                426
            ],
            "playerId": [
                426
            ],
            "accountId": [
                426
            ],
            "organizationId": [
                426
            ],
            "__typename": [
                1
            ]
        },
        "UsersConnectedEvent": {
            "usersConnected": [
                356
            ],
            "__typename": [
                1
            ]
        },
        "UserDisconnectEvent": {
            "sessionId": [
                426
            ],
            "serverId": [
                426
            ],
            "playerId": [
                426
            ],
            "accountId": [
                426
            ],
            "organizationId": [
                426
            ],
            "__typename": [
                1
            ]
        },
        "UsersDisconnectedEvent": {
            "usersDisconnected": [
                358
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
                426
            ],
            "playerProfileId": [
                426
            ],
            "shopProductId": [
                426
            ],
            "quantity": [
                15
            ],
            "createdAt": [
                9
            ],
            "updatedAt": [
                9
            ],
            "__typename": [
                1
            ]
        },
        "PlayerShopProductPurshasesDto": {
            "edges": [
                363
            ],
            "nodes": [
                361
            ],
            "pageInfo": [
                6
            ],
            "totalCount": [
                15
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
                361
            ],
            "__typename": [
                1
            ]
        },
        "ShopCategory": {
            "id": [
                426
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
                21
            ],
            "createdAt": [
                9
            ],
            "updatedAt": [
                9
            ],
            "shopId": [
                426
            ],
            "__typename": [
                1
            ]
        },
        "ShopCategories": {
            "edges": [
                366
            ],
            "nodes": [
                364
            ],
            "pageInfo": [
                6
            ],
            "totalCount": [
                15
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
                364
            ],
            "__typename": [
                1
            ]
        },
        "ShopProductConfiguration": {
            "minQuantity": [
                52
            ],
            "maxQuantity": [
                52
            ],
            "maxBoughtQuantity": [
                52
            ],
            "__typename": [
                1
            ]
        },
        "EntityQuantity": {
            "id": [
                426
            ],
            "quantity": [
                52
            ],
            "__typename": [
                1
            ]
        },
        "ShopItemQuantity": {
            "type": [
                370
            ],
            "id": [
                426
            ],
            "quantity": [
                52
            ],
            "__typename": [
                1
            ]
        },
        "ShopProductItemType": {},
        "ShopProduct": {
            "id": [
                426
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
                426
            ],
            "price": [
                15
            ],
            "configuration": [
                367
            ],
            "metadata": [
                21
            ],
            "createdAt": [
                9
            ],
            "updatedAt": [
                9
            ],
            "visibleAt": [
                9
            ],
            "shopId": [
                426
            ],
            "currency": [
                306
            ],
            "items": [
                369
            ],
            "currencyPrices": [
                368
            ],
            "__typename": [
                1
            ]
        },
        "ShopProducts": {
            "edges": [
                373
            ],
            "nodes": [
                371
            ],
            "pageInfo": [
                6
            ],
            "totalCount": [
                15
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
                371
            ],
            "__typename": [
                1
            ]
        },
        "Shop": {
            "id": [
                426
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
                9
            ],
            "updatedAt": [
                9
            ],
            "organizationId": [
                426
            ],
            "metadata": [
                21
            ],
            "__typename": [
                1
            ]
        },
        "Shops": {
            "edges": [
                376
            ],
            "nodes": [
                374
            ],
            "pageInfo": [
                6
            ],
            "totalCount": [
                15
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
                374
            ],
            "__typename": [
                1
            ]
        },
        "ShopProductItem": {
            "id": [
                426
            ],
            "currencyId": [
                426
            ],
            "createdAt": [
                9
            ],
            "updatedAt": [
                9
            ],
            "type": [
                370
            ],
            "shopItemId": [
                426
            ],
            "itemId": [
                426
            ],
            "quantity": [
                52
            ],
            "__typename": [
                1
            ]
        },
        "ShopProductItems": {
            "edges": [
                379
            ],
            "nodes": [
                377
            ],
            "pageInfo": [
                6
            ],
            "totalCount": [
                15
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
                377
            ],
            "__typename": [
                1
            ]
        },
        "SkillRatingConfiguration": {
            "updateLeaderboardId": [
                426
            ],
            "__typename": [
                1
            ]
        },
        "OrganizationSkillRatingsRegisterMatchPlayer": {
            "id": [
                426
            ],
            "newValue": [
                15
            ],
            "oldValue": [
                15
            ],
            "leaderboardPointsUpdate": [
                15
            ],
            "__typename": [
                1
            ]
        },
        "OrganizationSkillRating": {
            "id": [
                426
            ],
            "name": [
                1
            ],
            "description": [
                1
            ],
            "type": [
                383
            ],
            "configuration": [
                380
            ],
            "organizationId": [
                426
            ],
            "createdAt": [
                9
            ],
            "updatedAt": [
                9
            ],
            "__typename": [
                1
            ]
        },
        "SkillRatingType": {},
        "LimitOverride": {
            "limit": [
                385
            ],
            "value": [
                15
            ],
            "__typename": [
                1
            ]
        },
        "OrganizationLimitsType": {},
        "SubscriptionItem": {
            "id": [
                426
            ],
            "name": [
                1
            ],
            "description": [
                1
            ],
            "limitsOverride": [
                384
            ],
            "maxCount": [
                15
            ],
            "price": [
                15
            ],
            "__typename": [
                1
            ]
        },
        "OrganizationSubscriptionItem": {
            "organizationId": [
                426
            ],
            "subscriptionItemId": [
                426
            ],
            "count": [
                15
            ],
            "createdAt": [
                9
            ],
            "endAt": [
                9
            ],
            "updatedAt": [
                9
            ],
            "subscriptionItem": [
                386
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
                2
            ],
            "__typename": [
                1
            ]
        },
        "MappingConfigurationInput": {
            "mappings": [
                388
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
                390
            ],
            "mappingConfiguration": [
                389
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
                17
            ],
            "required": [
                2
            ],
            "order": [
                15
            ],
            "unique": [
                2
            ],
            "public": [
                2
            ],
            "visibility": [
                18
            ],
            "editability": [
                19
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
                15
            ],
            "__typename": [
                1
            ]
        },
        "MatchConfigurationInput": {
            "variables": [
                395
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
                15
            ],
            "useMatchScoresAsGameScore": [
                2
            ],
            "teamsCount": [
                15
            ],
            "matchConfiguration": [
                396
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
                15
            ],
            "__typename": [
                1
            ]
        },
        "RoundConfigurationInput": {
            "game": [
                397
            ],
            "order": [
                15
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
                399
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
                29
            ],
            "groups": [
                400
            ],
            "__typename": [
                1
            ]
        },
        "NumberConditionInput": {
            "conditionType": [
                31
            ],
            "value": [
                15
            ],
            "__typename": [
                1
            ]
        },
        "TeamNumericConditionInput": {
            "aggregationType": [
                33
            ],
            "propertySource": [
                34
            ],
            "propertySourceId": [
                426
            ],
            "conditionType": [
                31
            ],
            "value": [
                15
            ],
            "__typename": [
                1
            ]
        },
        "StringConditionInput": {
            "conditionType": [
                36
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
                402
            ],
            "stringCondition": [
                404
            ],
            "propertyCondition": [
                38
            ],
            "__typename": [
                1
            ]
        },
        "PlayerFieldInput": {
            "propertySource": [
                34
            ],
            "propertySourceId": [
                426
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
                34
            ],
            "propertySourceId": [
                426
            ],
            "condition": [
                405
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
                404
            ],
            "numericCondition": [
                403
            ],
            "propertyCondition": [
                38
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
                408
            ],
            "memberConditions": [
                407
            ],
            "__typename": [
                1
            ]
        },
        "TournamentConfigurationInput": {
            "type": [
                29
            ],
            "teamMinSize": [
                15
            ],
            "teamMaxSize": [
                15
            ],
            "teamsCount": [
                15
            ],
            "teamStatusAfterRegistration": [
                44
            ],
            "registrationConditions": [
                409
            ],
            "customFields": [
                393
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
                15
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
                2
            ],
            "emailField": [
                406
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
                412
            ],
            "__typename": [
                1
            ]
        },
        "UserGroupConfigurationInput": {
            "maxSize": [
                52
            ],
            "minSize": [
                52
            ],
            "__typename": [
                1
            ]
        },
        "PositionInput": {
            "x": [
                15
            ],
            "y": [
                15
            ],
            "__typename": [
                1
            ]
        },
        "EventVenueSeatConfigurationInput": {
            "size": [
                15
            ],
            "svgUrl": [
                1
            ],
            "position": [
                415
            ],
            "__typename": [
                1
            ]
        },
        "EventConfigurationInput": {
            "customFields": [
                393
            ],
            "groupConfiguration": [
                414
            ],
            "maxTicketsPerReservation": [
                15
            ],
            "reservationStatusAfterPayment": [
                274
            ],
            "reservationStatusAfterRegistration": [
                275
            ],
            "sessionDuration": [
                15
            ],
            "allowForNewSessionAfterTimeout": [
                2
            ],
            "seatAssignmentMode": [
                276
            ],
            "allowForMoreTicketsThanGroupMembers": [
                2
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
                393
            ],
            "__typename": [
                1
            ]
        },
        "PlatformConfigurationInput": {
            "whitelabel": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "ShopProductConfigurationInput": {
            "minQuantity": [
                52
            ],
            "maxQuantity": [
                52
            ],
            "maxBoughtQuantity": [
                52
            ],
            "__typename": [
                1
            ]
        },
        "EntityQuantityInput": {
            "id": [
                426
            ],
            "quantity": [
                52
            ],
            "__typename": [
                1
            ]
        },
        "ShopItemQuantityInput": {
            "type": [
                370
            ],
            "id": [
                426
            ],
            "quantity": [
                52
            ],
            "__typename": [
                1
            ]
        },
        "SkillRatingConfigurationInput": {
            "updateLeaderboardId": [
                426
            ],
            "__typename": [
                1
            ]
        },
        "ID": {},
        "Query": {
            "logs": [
                318,
                {
                    "page": [
                        63
                    ],
                    "resourceId": [
                        426
                    ],
                    "types": [
                        317,
                        "[LogType!]"
                    ]
                }
            ],
            "getMyAccount": [
                80
            ],
            "configuration": [
                83,
                {
                    "id": [
                        426,
                        "ID!"
                    ]
                }
            ],
            "leaderboardCurrentPlayerRanking": [
                85,
                {
                    "input": [
                        428,
                        "LeaderboardGetPlayerRankingInput!"
                    ]
                }
            ],
            "leaderboards": [
                89,
                {
                    "page": [
                        63,
                        "PageInfo!"
                    ]
                }
            ],
            "leaderboard": [
                88,
                {
                    "id": [
                        426,
                        "ID!"
                    ]
                }
            ],
            "currentLeaderboardSeason": [
                91,
                {
                    "leaderboardId": [
                        426,
                        "ID!"
                    ]
                }
            ],
            "leaderboardSeasons": [
                92,
                {
                    "leaderboardId": [
                        426,
                        "ID!"
                    ],
                    "page": [
                        63,
                        "PageInfo!"
                    ]
                }
            ],
            "leaderboardSeason": [
                91,
                {
                    "id": [
                        426,
                        "ID!"
                    ]
                }
            ],
            "leaderboardSeasonBuckets": [
                96,
                {
                    "seasonId": [
                        426,
                        "ID!"
                    ],
                    "page": [
                        63,
                        "PageInfo!"
                    ]
                }
            ],
            "leaderboardSeasonBucket": [
                94,
                {
                    "id": [
                        426,
                        "ID!"
                    ]
                }
            ],
            "leaderboardSeasonBucketScores": [
                86,
                {
                    "leaderboardSeasonBucketId": [
                        426,
                        "ID!"
                    ],
                    "page": [
                        63,
                        "PageInfo!"
                    ]
                }
            ],
            "organization": [
                74,
                {
                    "id": [
                        426,
                        "ID!"
                    ]
                }
            ],
            "limitDefinitions": [
                69,
                {
                    "limits": [
                        1,
                        "[String!]"
                    ]
                }
            ],
            "organizationLimits": [
                71,
                {
                    "limits": [
                        385,
                        "[OrganizationLimitsType!]"
                    ]
                }
            ],
            "userOrganizations": [
                74
            ],
            "organizationGroup": [
                7,
                {
                    "id": [
                        426,
                        "ID!"
                    ]
                }
            ],
            "organizationGroups": [
                13,
                {
                    "page": [
                        63,
                        "PageInfo!"
                    ]
                }
            ],
            "availablePermissions": [
                12
            ],
            "organizationMembers": [
                60,
                {
                    "page": [
                        63,
                        "PageInfo!"
                    ]
                }
            ],
            "identityProviders": [
                429
            ],
            "identityProvider": [
                144,
                {
                    "id": [
                        426,
                        "ID!"
                    ]
                }
            ],
            "organizationApp": [
                137,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "organizationApps": [
                138,
                {
                    "page": [
                        63,
                        "PageInfo!"
                    ]
                }
            ],
            "appReleasesByApp": [
                133,
                {
                    "appId": [
                        426,
                        "ID!"
                    ]
                }
            ],
            "appRelease": [
                133,
                {
                    "id": [
                        426,
                        "ID!"
                    ]
                }
            ],
            "webhookAvailableEvents": [
                57
            ],
            "webhooks": [
                150
            ],
            "webhook": [
                150,
                {
                    "id": [
                        426,
                        "ID!"
                    ]
                }
            ],
            "organizationAttachedApps": [
                142,
                {
                    "page": [
                        63,
                        "PageInfo!"
                    ]
                }
            ],
            "availableRootIdentityProvider": [
                109,
                {
                    "id": [
                        426,
                        "ID!"
                    ]
                }
            ],
            "getAvailableRootIdentityProviders": [
                109
            ],
            "emailTemplateConfigurations": [
                46
            ],
            "emailConfiguration": [
                48
            ],
            "emailTemplate": [
                105,
                {
                    "id": [
                        426,
                        "ID!"
                    ]
                }
            ],
            "emailTemplates": [
                106,
                {
                    "page": [
                        63,
                        "PageInfo!"
                    ]
                }
            ],
            "searchPlayer": [
                77,
                {
                    "username": [
                        1,
                        "String!"
                    ]
                }
            ],
            "players": [
                78,
                {
                    "ids": [
                        426,
                        "[ID!]"
                    ],
                    "page": [
                        63,
                        "PageInfo!"
                    ],
                    "identityProviders": [
                        426,
                        "[ID!]"
                    ],
                    "identityProviderProperties": [
                        1,
                        "[String!]"
                    ],
                    "query": [
                        431
                    ]
                }
            ],
            "player": [
                77,
                {
                    "id": [
                        426
                    ],
                    "ownerId": [
                        426
                    ],
                    "customId": [
                        1
                    ]
                }
            ],
            "playerSkillRatings": [
                151,
                {
                    "playerId": [
                        426,
                        "ID!"
                    ],
                    "skillRatingIds": [
                        426,
                        "[ID!]"
                    ]
                }
            ],
            "playerMatchesHistory": [
                155,
                {
                    "page": [
                        63,
                        "PageInfo!"
                    ],
                    "playerId": [
                        426,
                        "ID!"
                    ]
                }
            ],
            "tournament": [
                62,
                {
                    "id": [
                        426,
                        "ID!"
                    ]
                }
            ],
            "tournaments": [
                169,
                {
                    "query": [
                        432,
                        "TournamentsQuery!"
                    ],
                    "page": [
                        63,
                        "PageInfo!"
                    ]
                }
            ],
            "tournamentSteps": [
                166,
                {
                    "tournamentId": [
                        426,
                        "ID!"
                    ]
                }
            ],
            "tournamentStep": [
                166,
                {
                    "id": [
                        426,
                        "ID!"
                    ]
                }
            ],
            "tournamentStepGeneratedShape": [
                174,
                {
                    "stepId": [
                        426,
                        "ID!"
                    ]
                }
            ],
            "match": [
                153,
                {
                    "matchId": [
                        426,
                        "ID!"
                    ]
                }
            ],
            "tournamentTeam": [
                162,
                {
                    "teamId": [
                        426,
                        "ID!"
                    ],
                    "memberStatus": [
                        159
                    ]
                }
            ],
            "tournamentTeams": [
                163,
                {
                    "tournamentId": [
                        426,
                        "ID!"
                    ],
                    "page": [
                        63,
                        "PageInfo!"
                    ],
                    "memberStatus": [
                        159
                    ],
                    "status": [
                        64
                    ],
                    "propertiesFilter": [
                        394,
                        "[PropertyValueInput!]"
                    ],
                    "playerUsernameQuery": [
                        1
                    ],
                    "playerPropertiesFilter": [
                        394,
                        "[PropertyValueInput!]"
                    ],
                    "playerIdentityProviderPropertiesFilter": [
                        437,
                        "[IdentityProviderPropertyInput!]"
                    ]
                }
            ],
            "tournamentPlayers": [
                160,
                {
                    "page": [
                        63,
                        "PageInfo!"
                    ],
                    "tournamentId": [
                        426,
                        "ID!"
                    ],
                    "status": [
                        64,
                        "TournamentTeamStatus!"
                    ],
                    "playerUsernameQuery": [
                        1
                    ],
                    "playerPropertiesFilter": [
                        394,
                        "[PropertyValueInput!]"
                    ],
                    "orderByProperty": [
                        438
                    ]
                }
            ],
            "tournamentTeamInvites": [
                160,
                {
                    "page": [
                        63,
                        "PageInfo!"
                    ],
                    "tournamentId": [
                        426
                    ],
                    "status": [
                        159
                    ]
                }
            ],
            "tournamentStepGroupRoundGameMatchScoresGetForStep": [
                179,
                {
                    "stepId": [
                        426,
                        "ID!"
                    ],
                    "page": [
                        63,
                        "PageInfo!"
                    ]
                }
            ],
            "tournamentAdmins": [
                181,
                {
                    "tournamentId": [
                        426,
                        "ID!"
                    ]
                }
            ],
            "stepRuleSet": [
                202,
                {
                    "tournamentStepId": [
                        426,
                        "ID!"
                    ]
                }
            ],
            "presetScripts": [
                205
            ],
            "presetScript": [
                205,
                {
                    "id": [
                        426,
                        "ID!"
                    ]
                }
            ],
            "builtinPresets": [
                206,
                {
                    "category": [
                        207
                    ]
                }
            ],
            "builtinPreset": [
                206,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "validateScript": [
                215,
                {
                    "input": [
                        439,
                        "ValidateScriptInput!"
                    ]
                }
            ],
            "simulateScript": [
                218,
                {
                    "input": [
                        440,
                        "SimulateScriptInput!"
                    ]
                }
            ],
            "stepRuleSetValidationJob": [
                242,
                {
                    "jobId": [
                        426,
                        "ID!"
                    ]
                }
            ],
            "stepRuleSetValidationJobs": [
                248,
                {
                    "stepRuleSetId": [
                        426,
                        "ID!"
                    ],
                    "page": [
                        63,
                        "PageInfo!"
                    ]
                }
            ],
            "stepRuleSetValidationEvents": [
                250,
                {
                    "jobId": [
                        426,
                        "ID!"
                    ],
                    "page": [
                        63,
                        "PageInfo!"
                    ],
                    "kindFilter": [
                        245,
                        "[ValidationEventKind!]"
                    ]
                }
            ],
            "platformFiles": [
                122,
                {
                    "type": [
                        123
                    ],
                    "platformId": [
                        426
                    ],
                    "templateId": [
                        426
                    ]
                }
            ],
            "platformFile": [
                122,
                {
                    "id": [
                        426,
                        "ID!"
                    ]
                }
            ],
            "platforms": [
                353
            ],
            "platform": [
                353,
                {
                    "platformId": [
                        426,
                        "ID!"
                    ]
                }
            ],
            "platformFindFromDomain": [
                353,
                {
                    "domain": [
                        1,
                        "String!"
                    ]
                }
            ],
            "platformCheckDomainAvailability": [
                2,
                {
                    "domain": [
                        126,
                        "URL!"
                    ]
                }
            ],
            "platformCustomDomains": [
                349,
                {
                    "platformId": [
                        426,
                        "ID!"
                    ]
                }
            ],
            "platformTemplatesPublic": [
                354
            ],
            "platformTemplates": [
                354
            ],
            "platformTemplate": [
                354,
                {
                    "platformTemplateId": [
                        426,
                        "ID!"
                    ]
                }
            ],
            "subscriptionItems": [
                386
            ],
            "organizationCurrentSubscriptionItems": [
                387
            ],
            "organizationSkillRatings": [
                382
            ],
            "organizationSkillRating": [
                382,
                {
                    "id": [
                        426,
                        "ID!"
                    ]
                }
            ],
            "event": [
                279,
                {
                    "id": [
                        426,
                        "ID!"
                    ]
                }
            ],
            "events": [
                280,
                {
                    "page": [
                        63,
                        "PageInfo!"
                    ],
                    "query": [
                        441
                    ],
                    "eventIds": [
                        426,
                        "[ID!]"
                    ]
                }
            ],
            "eventTicketConfiguration": [
                305,
                {
                    "id": [
                        426,
                        "ID!"
                    ]
                }
            ],
            "eventTicketConfigurations": [
                305,
                {
                    "eventId": [
                        426,
                        "ID!"
                    ]
                }
            ],
            "eventReservationsMyReservations": [
                288,
                {
                    "page": [
                        63,
                        "PageInfo!"
                    ],
                    "status": [
                        286
                    ],
                    "groupStatus": [
                        262
                    ],
                    "eventIds": [
                        426,
                        "[ID!]"
                    ]
                }
            ],
            "eventReservation": [
                285,
                {
                    "reservationId": [
                        426,
                        "ID!"
                    ]
                }
            ],
            "eventSeats": [
                294,
                {
                    "eventId": [
                        426,
                        "ID!"
                    ],
                    "page": [
                        63,
                        "PageInfo!"
                    ],
                    "eventVenueId": [
                        426
                    ],
                    "reservationIds": [
                        426,
                        "[ID!]"
                    ]
                }
            ],
            "eventReservations": [
                288,
                {
                    "eventId": [
                        426,
                        "ID!"
                    ],
                    "page": [
                        63,
                        "PageInfo!"
                    ],
                    "query": [
                        445,
                        "EventReservationsQueryInput!"
                    ]
                }
            ],
            "eventVenues": [
                302,
                {
                    "page": [
                        63,
                        "PageInfo!"
                    ]
                }
            ],
            "eventVenue": [
                301,
                {
                    "id": [
                        426,
                        "ID!"
                    ]
                }
            ],
            "eventVenueSeats": [
                271,
                {
                    "venueId": [
                        426,
                        "ID!"
                    ],
                    "page": [
                        63,
                        "PageInfo!"
                    ],
                    "seatTypeId": [
                        426
                    ]
                }
            ],
            "eventVenueSeatTypes": [
                298,
                {
                    "venueId": [
                        426,
                        "ID!"
                    ],
                    "page": [
                        63,
                        "PageInfo!"
                    ]
                }
            ],
            "organizationPaymentCollectionConfiguration": [
                157
            ],
            "userGroupMembers": [
                265,
                {
                    "groupIds": [
                        426,
                        "[ID!]!"
                    ],
                    "page": [
                        63,
                        "PageInfo!"
                    ],
                    "status": [
                        260
                    ]
                }
            ],
            "userGroups": [
                263,
                {
                    "query": [
                        447,
                        "UserGroupsQueryInput!"
                    ],
                    "page": [
                        63,
                        "PageInfo!"
                    ]
                }
            ],
            "userGroupMyMemberships": [
                265,
                {
                    "page": [
                        63,
                        "PageInfo!"
                    ],
                    "status": [
                        260
                    ],
                    "entityType": [
                        1
                    ],
                    "entityId": [
                        426
                    ]
                }
            ],
            "presenceAnalytics": [
                355
            ],
            "shops": [
                375,
                {
                    "page": [
                        63
                    ],
                    "filter": [
                        448
                    ]
                }
            ],
            "shopCategories": [
                365,
                {
                    "page": [
                        63
                    ],
                    "filter": [
                        449
                    ]
                }
            ],
            "playerShopProductPurshases": [
                362,
                {
                    "page": [
                        63
                    ],
                    "filter": [
                        450
                    ]
                }
            ],
            "shopProducts": [
                372,
                {
                    "shopId": [
                        426,
                        "ID!"
                    ],
                    "page": [
                        63
                    ],
                    "filter": [
                        451
                    ]
                }
            ],
            "shopProductItems": [
                378,
                {
                    "shopProductId": [
                        426,
                        "ID!"
                    ],
                    "page": [
                        63
                    ]
                }
            ],
            "items": [
                308,
                {
                    "page": [
                        63
                    ],
                    "filter": [
                        452
                    ]
                }
            ],
            "playerItems": [
                311,
                {
                    "page": [
                        63
                    ],
                    "filter": [
                        453
                    ]
                }
            ],
            "itemCategories": [
                314,
                {
                    "page": [
                        63
                    ],
                    "filter": [
                        454
                    ]
                }
            ],
            "currencies": [
                253,
                {
                    "page": [
                        63
                    ],
                    "filter": [
                        455
                    ]
                }
            ],
            "playerCurrencies": [
                256,
                {
                    "page": [
                        63
                    ],
                    "filter": [
                        456
                    ]
                }
            ],
            "marketplaceApps": [
                322,
                {
                    "page": [
                        63
                    ],
                    "filter": [
                        457
                    ]
                }
            ],
            "marketplaceApp": [
                320,
                {
                    "id": [
                        426,
                        "ID!"
                    ]
                }
            ],
            "myMarketplaceInstallations": [
                329,
                {
                    "page": [
                        63
                    ]
                }
            ],
            "appReleases": [
                129,
                {
                    "marketplaceAppId": [
                        426,
                        "ID!"
                    ]
                }
            ],
            "moduleTokensForPlatform": [
                336,
                {
                    "platformId": [
                        426,
                        "ID!"
                    ]
                }
            ],
            "extensionToken": [
                337,
                {
                    "installationId": [
                        426,
                        "ID!"
                    ]
                }
            ],
            "platformModuleConfigs": [
                335,
                {
                    "platformId": [
                        426,
                        "ID!"
                    ]
                }
            ],
            "entityMetafields": [
                338,
                {
                    "entityType": [
                        1,
                        "String!"
                    ],
                    "entityId": [
                        426,
                        "ID!"
                    ],
                    "filter": [
                        458
                    ]
                }
            ],
            "allowedObjectTypes": [
                342
            ],
            "objectMetadata": [
                339,
                {
                    "objectType": [
                        342,
                        "ObjectType!"
                    ],
                    "objectId": [
                        426,
                        "ID!"
                    ]
                }
            ],
            "objectMetadataBatch": [
                343,
                {
                    "objectType": [
                        342,
                        "ObjectType!"
                    ],
                    "objectIds": [
                        426,
                        "[ID!]!"
                    ]
                }
            ],
            "customFieldDefinitions": [
                345,
                {
                    "objectType": [
                        342,
                        "ObjectType!"
                    ]
                }
            ],
            "customFieldValues": [
                347,
                {
                    "objectType": [
                        342,
                        "ObjectType!"
                    ],
                    "objectId": [
                        426,
                        "ID!"
                    ]
                }
            ],
            "customFieldValuesBatch": [
                348,
                {
                    "objectType": [
                        342,
                        "ObjectType!"
                    ],
                    "objectIds": [
                        426,
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
                426
            ],
            "playerId": [
                426
            ],
            "seasonId": [
                426
            ],
            "__typename": [
                1
            ]
        },
        "OrganizationIdentityProviderInfo": {
            "on_OrganizationIdentityProvider": [
                144
            ],
            "on_PublicOrganizationIdentityProviderV2": [
                430
            ],
            "__typename": [
                1
            ]
        },
        "PublicOrganizationIdentityProviderV2": {
            "requiredForPlayerValidation": [
                2
            ],
            "allowLogin": [
                2
            ],
            "description": [
                1
            ],
            "icon": [
                1
            ],
            "id": [
                426
            ],
            "name": [
                1
            ],
            "organizationId": [
                426
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
                2
            ],
            "__typename": [
                1
            ]
        },
        "TournamentsQuery": {
            "orderBy": [
                433
            ],
            "orderDirection": [
                434
            ],
            "status": [
                435
            ],
            "showNotVisible": [
                2
            ],
            "filterByPlayers": [
                436
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
                426
            ],
            "teamStatus": [
                64
            ],
            "memberStatus": [
                159
            ],
            "__typename": [
                1
            ]
        },
        "IdentityProviderPropertyInput": {
            "identityProviderId": [
                426
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
                434
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
                220
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
                220
            ],
            "parameters": [
                1
            ],
            "stepId": [
                426
            ],
            "__typename": [
                1
            ]
        },
        "EventsQuery": {
            "orderBy": [
                442
            ],
            "orderDirection": [
                434
            ],
            "status": [
                443
            ],
            "showNotVisible": [
                2
            ],
            "filterByPlayers": [
                444
            ],
            "__typename": [
                1
            ]
        },
        "EventsQueryOrderBy": {},
        "EventsQueryStatus": {},
        "EventsQueryPlayerIdWithTeamStatusInput": {
            "playerId": [
                426
            ],
            "reservationStatus": [
                286
            ],
            "memberStatus": [
                260
            ],
            "__typename": [
                1
            ]
        },
        "EventReservationsQueryInput": {
            "filterByRegistrationStatus": [
                286
            ],
            "retrieveOnlyGroupMembersWithStatus": [
                260
            ],
            "filterByPlayerUsernameQuery": [
                1
            ],
            "filterByReservationProperties": [
                394
            ],
            "filterByPlayerProperties": [
                394
            ],
            "filterByPlayerIdentityProviderProperties": [
                437
            ],
            "filterByPlayers": [
                446
            ],
            "filterByGroupStatus": [
                262
            ],
            "__typename": [
                1
            ]
        },
        "EventReservationsQueryPlayerIdWithGroupStatusInput": {
            "playerId": [
                426
            ],
            "memberStatus": [
                260
            ],
            "__typename": [
                1
            ]
        },
        "UserGroupsQueryInput": {
            "ids": [
                426
            ],
            "__typename": [
                1
            ]
        },
        "ShopsFilterInput": {
            "ids": [
                426
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
                426
            ],
            "externalIds": [
                1
            ],
            "shopIds": [
                426
            ],
            "__typename": [
                1
            ]
        },
        "PlayerShopProductPurshasesFilterInput": {
            "shopProductIds": [
                426
            ],
            "playerProfileIds": [
                426
            ],
            "shopIds": [
                426
            ],
            "ids": [
                426
            ],
            "__typename": [
                1
            ]
        },
        "ShopProductsFilterInput": {
            "categoryIds": [
                426
            ],
            "ids": [
                426
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
                426
            ],
            "ids": [
                426
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
                426
            ],
            "playerProfileIds": [
                426
            ],
            "__typename": [
                1
            ]
        },
        "ItemCategoriesFilterInput": {
            "ids": [
                426
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
                426
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
                426
            ],
            "playerProfileIds": [
                426
            ],
            "__typename": [
                1
            ]
        },
        "MarketplaceAppsFilterInput": {
            "status": [
                321
            ],
            "search": [
                1
            ],
            "categories": [
                1
            ],
            "ownedByMe": [
                2
            ],
            "hasModules": [
                2
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
                426
            ],
            "__typename": [
                1
            ]
        },
        "Mutation": {
            "deleteAccount": [
                2,
                {
                    "id": [
                        426,
                        "ID!"
                    ]
                }
            ],
            "accountIdentityGenerateAccessToken": [
                1,
                {
                    "identityProviderId": [
                        426,
                        "ID!"
                    ],
                    "accountId": [
                        426
                    ]
                }
            ],
            "accountIdentityRefresh": [
                76,
                {
                    "identityProviderId": [
                        426,
                        "ID!"
                    ],
                    "accountId": [
                        426
                    ]
                }
            ],
            "attachOrUpdateIdentityToAccount": [
                76,
                {
                    "identityProviderId": [
                        426,
                        "ID!"
                    ],
                    "token": [
                        1,
                        "String!"
                    ]
                }
            ],
            "generateIdentityLinkUrl": [
                82,
                {
                    "identityProviderId": [
                        426,
                        "ID!"
                    ]
                }
            ],
            "updateConfiguration": [
                83,
                {
                    "id": [
                        426,
                        "ID!"
                    ],
                    "input": [
                        460,
                        "CreateConfigurationInput!"
                    ]
                }
            ],
            "deleteConfiguration": [
                2,
                {
                    "id": [
                        426,
                        "ID!"
                    ]
                }
            ],
            "leaderboardRegisterPlayerScore": [
                85,
                {
                    "input": [
                        461,
                        "LeaderboardRegisterPlayerScoreInput!"
                    ]
                }
            ],
            "createLeaderboard": [
                88,
                {
                    "input": [
                        463,
                        "CreateLeaderboardInput!"
                    ]
                }
            ],
            "updateLeaderboard": [
                88,
                {
                    "id": [
                        426,
                        "ID!"
                    ],
                    "input": [
                        464,
                        "UpdateLeaderboardInput!"
                    ]
                }
            ],
            "deleteLeaderboard": [
                465,
                {
                    "id": [
                        426,
                        "ID!"
                    ]
                }
            ],
            "createLeaderboardSeason": [
                91,
                {
                    "leaderboardId": [
                        426,
                        "ID!"
                    ],
                    "input": [
                        466,
                        "CreateLeaderboardSeasonInput!"
                    ]
                }
            ],
            "updateLeaderboardSeason": [
                91,
                {
                    "id": [
                        426,
                        "ID!"
                    ],
                    "input": [
                        467,
                        "UpdateLeaderboardSeasonInput!"
                    ]
                }
            ],
            "deleteLeaderboardSeason": [
                465,
                {
                    "id": [
                        426,
                        "ID!"
                    ]
                }
            ],
            "createLeaderboardSeasonBucket": [
                94,
                {
                    "seasonId": [
                        426,
                        "ID!"
                    ],
                    "input": [
                        468,
                        "CreateLeaderboardSeasonBucketInput!"
                    ]
                }
            ],
            "updateLeaderboardSeasonBucket": [
                94,
                {
                    "id": [
                        426,
                        "ID!"
                    ],
                    "input": [
                        469,
                        "UpdateLeaderboardSeasonBucketInput!"
                    ]
                }
            ],
            "deleteLeaderboardSeasonBucket": [
                465,
                {
                    "id": [
                        426,
                        "ID!"
                    ]
                }
            ],
            "updateOrganization": [
                74,
                {
                    "organization": [
                        470,
                        "UpdateOrganizationInput!"
                    ]
                }
            ],
            "createOrganization": [
                74,
                {
                    "organization": [
                        472,
                        "CreateOrganizationInput!"
                    ]
                }
            ],
            "createOrganizationGroup": [
                7,
                {
                    "input": [
                        473,
                        "CreateOrganizationGroupInput!"
                    ]
                }
            ],
            "updateOrganizationGroup": [
                7,
                {
                    "id": [
                        426,
                        "ID!"
                    ],
                    "input": [
                        473,
                        "CreateOrganizationGroupInput!"
                    ]
                }
            ],
            "deleteOrganizationGroup": [
                2,
                {
                    "id": [
                        426,
                        "ID!"
                    ]
                }
            ],
            "setOrganizationMembership": [
                59,
                {
                    "input": [
                        474,
                        "SetOrganizationMembershipInput!"
                    ]
                }
            ],
            "deleteOrganizationMembership": [
                2,
                {
                    "input": [
                        475,
                        "DeleteOrganizationMembershipInput!"
                    ]
                }
            ],
            "createIdentityProvider": [
                144,
                {
                    "input": [
                        476,
                        "CreateOrganizationIdentityProvider!"
                    ]
                }
            ],
            "updateIdentityProvider": [
                144,
                {
                    "providerId": [
                        426,
                        "ID!"
                    ],
                    "input": [
                        479,
                        "UpdateOrganizationIdentityProvider!"
                    ]
                }
            ],
            "deleteIdentityProvider": [
                2,
                {
                    "id": [
                        426,
                        "ID!"
                    ]
                }
            ],
            "createOrganizationApp": [
                137,
                {
                    "input": [
                        480,
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
                137,
                {
                    "id": [
                        1,
                        "String!"
                    ],
                    "input": [
                        481,
                        "UpdateOrganizationAppInput!"
                    ]
                }
            ],
            "deleteOrganizationApp": [
                2,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "updateOrganizationAppManifest": [
                137,
                {
                    "id": [
                        1,
                        "String!"
                    ],
                    "manifest": [
                        482,
                        "AppManifestInput!"
                    ]
                }
            ],
            "createAppRelease": [
                133,
                {
                    "appId": [
                        426,
                        "ID!"
                    ],
                    "input": [
                        489,
                        "CreateAppReleaseInput!"
                    ]
                }
            ],
            "createWebhook": [
                150,
                {
                    "input": [
                        490,
                        "CreateWebhookInput!"
                    ]
                }
            ],
            "updateWebhook": [
                150,
                {
                    "id": [
                        426,
                        "ID!"
                    ],
                    "input": [
                        491,
                        "UpdateWebhookInput!"
                    ]
                }
            ],
            "deleteWebhook": [
                150,
                {
                    "id": [
                        426,
                        "ID!"
                    ]
                }
            ],
            "regenerateWebhookSecret": [
                150,
                {
                    "id": [
                        426,
                        "ID!"
                    ]
                }
            ],
            "setOrganizationAttachedApp": [
                141,
                {
                    "input": [
                        492,
                        "SetOrganizationAttachedAppInput!"
                    ]
                }
            ],
            "deleteOrganizationAttachedApp": [
                2,
                {
                    "input": [
                        493,
                        "DeleteOrganizationAttachedAppInput!"
                    ]
                }
            ],
            "emailSend": [
                2,
                {
                    "fromTemplate": [
                        494
                    ],
                    "fromCustom": [
                        495
                    ]
                }
            ],
            "emailConfigurationUpdate": [
                48,
                {
                    "input": [
                        411,
                        "EmailConfigurationInput!"
                    ]
                }
            ],
            "emailTemplateCreate": [
                105,
                {
                    "input": [
                        496,
                        "EmailTemplateCreateInput!"
                    ]
                }
            ],
            "emailTemplateUpdate": [
                105,
                {
                    "id": [
                        426,
                        "ID!"
                    ],
                    "input": [
                        497,
                        "EmailTemplateUpdateInput!"
                    ]
                }
            ],
            "emailTemplateDelete": [
                105,
                {
                    "id": [
                        426,
                        "ID!"
                    ]
                }
            ],
            "createPlayer": [
                77,
                {
                    "input": [
                        498,
                        "CreatePlayerInput!"
                    ]
                }
            ],
            "updatePlayer": [
                77,
                {
                    "input": [
                        500,
                        "UpdatePlayerInput!"
                    ],
                    "id": [
                        426
                    ],
                    "customId": [
                        1
                    ]
                }
            ],
            "createOrUpdateMyPlayerProfile": [
                77,
                {
                    "input": [
                        501,
                        "UpdateMePlayerInput!"
                    ]
                }
            ],
            "deletePlayer": [
                2,
                {
                    "id": [
                        426
                    ],
                    "customId": [
                        426
                    ]
                }
            ],
            "createTournament": [
                62,
                {
                    "input": [
                        502,
                        "CreateTournamentInput!"
                    ]
                }
            ],
            "updateTournament": [
                62,
                {
                    "input": [
                        505,
                        "UpdateTournamentInput!"
                    ],
                    "id": [
                        426,
                        "ID!"
                    ]
                }
            ],
            "deleteTournament": [
                2,
                {
                    "id": [
                        426,
                        "ID!"
                    ]
                }
            ],
            "startTournamentStep": [
                2,
                {
                    "stepId": [
                        426,
                        "ID!"
                    ]
                }
            ],
            "createTournamentStep": [
                166,
                {
                    "tournamentId": [
                        426,
                        "ID!"
                    ],
                    "configuration": [
                        401
                    ],
                    "step": [
                        506,
                        "CreateTournamentStepInput!"
                    ]
                }
            ],
            "updateTournamentStep": [
                166,
                {
                    "stepId": [
                        426,
                        "ID!"
                    ],
                    "configuration": [
                        401
                    ],
                    "step": [
                        506,
                        "CreateTournamentStepInput!"
                    ]
                }
            ],
            "deleteTournamentStep": [
                2,
                {
                    "stepId": [
                        426,
                        "ID!"
                    ]
                }
            ],
            "generateTournamentStep": [
                2,
                {
                    "stepId": [
                        426,
                        "ID!"
                    ],
                    "teamsCount": [
                        52
                    ]
                }
            ],
            "seedTournamentStep": [
                166,
                {
                    "input": [
                        507,
                        "SeedStepInput!"
                    ]
                }
            ],
            "updateSeedingOrder": [
                166,
                {
                    "stepId": [
                        426,
                        "ID!"
                    ],
                    "orderedTeamIds": [
                        426,
                        "[ID!]!"
                    ]
                }
            ],
            "updateSeedingPins": [
                166,
                {
                    "stepId": [
                        426,
                        "ID!"
                    ],
                    "pins": [
                        508,
                        "[SeedingPinInput!]!"
                    ]
                }
            ],
            "withdrawTeamFromStep": [
                166,
                {
                    "stepId": [
                        426,
                        "ID!"
                    ],
                    "teamId": [
                        426,
                        "ID!"
                    ]
                }
            ],
            "reseedStep": [
                166,
                {
                    "stepId": [
                        426,
                        "ID!"
                    ]
                }
            ],
            "restartTournamentStep": [
                2,
                {
                    "stepId": [
                        426,
                        "ID!"
                    ]
                }
            ],
            "resetTournamentStepSeeding": [
                2,
                {
                    "stepId": [
                        426,
                        "ID!"
                    ]
                }
            ],
            "resetTournamentStep": [
                2,
                {
                    "stepId": [
                        426,
                        "ID!"
                    ]
                }
            ],
            "updateMatchScores": [
                153,
                {
                    "matchId": [
                        426,
                        "ID!"
                    ],
                    "input": [
                        509,
                        "[UpdateMatchScoreInput!]!"
                    ]
                }
            ],
            "registerCustomTournamentTeams": [
                162,
                {
                    "tournamentId": [
                        426,
                        "ID!"
                    ],
                    "input": [
                        511,
                        "RegisterCustomTeamsInput!"
                    ]
                }
            ],
            "registerTournamentTeam": [
                162,
                {
                    "tournamentId": [
                        426,
                        "ID!"
                    ],
                    "input": [
                        514,
                        "RegisterTournamentTeamInput!"
                    ]
                }
            ],
            "updateTournamentTeam": [
                162,
                {
                    "input": [
                        515,
                        "UpdateTournamentTeamInput!"
                    ],
                    "tournamentId": [
                        426
                    ],
                    "teamId": [
                        426
                    ]
                }
            ],
            "deleteTournamentTeam": [
                2,
                {
                    "tournamentId": [
                        426,
                        "ID!"
                    ]
                }
            ],
            "deleteAnyTournamentTeam": [
                2,
                {
                    "teamId": [
                        426,
                        "ID!"
                    ]
                }
            ],
            "confirmTournamentTeam": [
                162,
                {
                    "teamId": [
                        426,
                        "ID!"
                    ],
                    "confirm": [
                        2,
                        "Boolean!"
                    ]
                }
            ],
            "confirmTournamentAttendance": [
                162,
                {
                    "tournamentId": [
                        426,
                        "ID!"
                    ],
                    "attendance": [
                        2,
                        "Boolean!"
                    ]
                }
            ],
            "updateTournamentTeamStatus": [
                162,
                {
                    "tournamentTeamId": [
                        426,
                        "ID!"
                    ],
                    "status": [
                        64,
                        "TournamentTeamStatus!"
                    ]
                }
            ],
            "inviteTournamentTeamMember": [
                2,
                {
                    "tournamentId": [
                        426,
                        "ID!"
                    ],
                    "playerId": [
                        426,
                        "ID!"
                    ]
                }
            ],
            "answerToTournamentTeamInvite": [
                2,
                {
                    "teamId": [
                        426,
                        "ID!"
                    ],
                    "accept": [
                        2,
                        "Boolean!"
                    ]
                }
            ],
            "deleteTournamentTeamInvite": [
                2,
                {
                    "teamId": [
                        426,
                        "ID!"
                    ],
                    "playerId": [
                        426,
                        "ID!"
                    ]
                }
            ],
            "tournamentAdminUpsert": [
                181,
                {
                    "input": [
                        516,
                        "TournamentAdminUpsertInput!"
                    ]
                }
            ],
            "tournamentAdminDelete": [
                2,
                {
                    "input": [
                        517,
                        "TournamentAdminDeleteInput!"
                    ]
                }
            ],
            "createStepRuleSet": [
                202,
                {
                    "tournamentStepId": [
                        426,
                        "ID!"
                    ],
                    "input": [
                        518,
                        "CreateStepRuleSetInput!"
                    ]
                }
            ],
            "applyPresetScript": [
                202,
                {
                    "presetScriptId": [
                        426,
                        "ID!"
                    ],
                    "tournamentStepId": [
                        426,
                        "ID!"
                    ],
                    "parameters": [
                        1
                    ]
                }
            ],
            "applyBuiltinPreset": [
                202,
                {
                    "builtinPresetId": [
                        1,
                        "String!"
                    ],
                    "tournamentStepId": [
                        426,
                        "ID!"
                    ],
                    "parameters": [
                        1
                    ]
                }
            ],
            "duplicateBuiltinPreset": [
                205,
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
                205,
                {
                    "input": [
                        529,
                        "CreatePresetScriptInput!"
                    ]
                }
            ],
            "updatePresetScript": [
                205,
                {
                    "id": [
                        426,
                        "ID!"
                    ],
                    "input": [
                        531,
                        "UpdatePresetScriptInput!"
                    ]
                }
            ],
            "deletePresetScript": [
                2,
                {
                    "id": [
                        426,
                        "ID!"
                    ]
                }
            ],
            "setStepWinners": [
                166,
                {
                    "stepId": [
                        426,
                        "ID!"
                    ],
                    "teamIds": [
                        426,
                        "[ID!]!"
                    ]
                }
            ],
            "setTournamentWinners": [
                62,
                {
                    "tournamentId": [
                        426,
                        "ID!"
                    ],
                    "teamIds": [
                        426,
                        "[ID!]!"
                    ]
                }
            ],
            "setStepTeamStatus": [
                2,
                {
                    "stepId": [
                        426,
                        "ID!"
                    ],
                    "teamId": [
                        426,
                        "ID!"
                    ],
                    "status": [
                        233,
                        "TeamScopeStatus!"
                    ]
                }
            ],
            "validateStepRuleSet": [
                242,
                {
                    "stepRuleSetId": [
                        426,
                        "ID!"
                    ]
                }
            ],
            "cancelStepRuleSetValidation": [
                242,
                {
                    "jobId": [
                        426,
                        "ID!"
                    ]
                }
            ],
            "stripeCreatePortalSession": [
                1
            ],
            "platformFileCreate": [
                122,
                {
                    "input": [
                        532,
                        "PlatformCdnFileCreateInput!"
                    ],
                    "platformId": [
                        426
                    ],
                    "templateId": [
                        426
                    ]
                }
            ],
            "platformFilePublish": [
                122,
                {
                    "id": [
                        426,
                        "ID!"
                    ]
                }
            ],
            "platformFileGenerateUploadUrl": [
                125,
                {
                    "id": [
                        426,
                        "ID!"
                    ],
                    "size": [
                        15,
                        "Float!"
                    ]
                }
            ],
            "platformFileValidateFileUpload": [
                122,
                {
                    "id": [
                        426,
                        "ID!"
                    ]
                }
            ],
            "platformFileUpdate": [
                122,
                {
                    "id": [
                        426,
                        "ID!"
                    ],
                    "input": [
                        533,
                        "PlatformFileUpdateInput!"
                    ]
                }
            ],
            "platformFileDelete": [
                465,
                {
                    "id": [
                        426,
                        "ID!"
                    ]
                }
            ],
            "platformCreate": [
                353,
                {
                    "input": [
                        534,
                        "CreatePlatformInput!"
                    ]
                }
            ],
            "platformUpdate": [
                353,
                {
                    "id": [
                        426,
                        "ID!"
                    ],
                    "input": [
                        535,
                        "UpdatePlatformInput!"
                    ]
                }
            ],
            "platformDelete": [
                465,
                {
                    "id": [
                        426,
                        "ID!"
                    ]
                }
            ],
            "platformThemeUpdate": [
                353,
                {
                    "platformId": [
                        426,
                        "ID!"
                    ],
                    "input": [
                        536,
                        "PlatformThemeInput!"
                    ]
                }
            ],
            "platformRegisterCustomDomain": [
                103,
                {
                    "platformId": [
                        426,
                        "ID!"
                    ],
                    "hostname": [
                        1,
                        "String!"
                    ]
                }
            ],
            "platformForceCustomDomainRecheck": [
                103,
                {
                    "hostname": [
                        1,
                        "String!"
                    ]
                }
            ],
            "platformRemoveCustomDomain": [
                465,
                {
                    "hostname": [
                        1,
                        "String!"
                    ]
                }
            ],
            "platformTemplateCreate": [
                354,
                {
                    "input": [
                        539,
                        "CreatePlatformTemplateInput!"
                    ]
                }
            ],
            "platformTemplateUpdate": [
                354,
                {
                    "id": [
                        426,
                        "ID!"
                    ],
                    "input": [
                        540,
                        "UpdatePlatformTemplateInput!"
                    ]
                }
            ],
            "platformTemplateApply": [
                353,
                {
                    "platformTemplateId": [
                        426,
                        "ID!"
                    ],
                    "platformId": [
                        426,
                        "ID!"
                    ]
                }
            ],
            "platformTemplateDelete": [
                465,
                {
                    "id": [
                        426,
                        "ID!"
                    ]
                }
            ],
            "organizationSubscriptionItemsUpdate": [
                465,
                {
                    "items": [
                        541,
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
                381,
                {
                    "organizationSkillRatingId": [
                        426,
                        "ID!"
                    ],
                    "input": [
                        542,
                        "OrganizationSkillRatingsRegisterMatchInput!"
                    ]
                }
            ],
            "organizationSkillRatingCreate": [
                382,
                {
                    "input": [
                        544,
                        "OrganizationSkillRatingCreateInput!"
                    ]
                }
            ],
            "organizationSkillRatingUpdate": [
                382,
                {
                    "id": [
                        426,
                        "ID!"
                    ],
                    "input": [
                        545,
                        "OrganizationSkillRatingUpdateInput!"
                    ]
                }
            ],
            "organizationSkillRatingDelete": [
                465,
                {
                    "id": [
                        426,
                        "ID!"
                    ]
                }
            ],
            "eventCreate": [
                277,
                {
                    "input": [
                        546,
                        "EventCreateInput!"
                    ]
                }
            ],
            "eventUpdate": [
                277,
                {
                    "input": [
                        547,
                        "EventUpdateInput!"
                    ],
                    "id": [
                        426,
                        "ID!"
                    ]
                }
            ],
            "eventDelete": [
                2,
                {
                    "id": [
                        426,
                        "ID!"
                    ]
                }
            ],
            "eventTicketConfigurationCreate": [
                305,
                {
                    "input": [
                        548,
                        "EventTicketConfigurationCreateInput!"
                    ]
                }
            ],
            "eventTicketConfigurationUpdate": [
                305,
                {
                    "ticketConfigurationId": [
                        426,
                        "ID!"
                    ],
                    "input": [
                        549,
                        "EventTicketConfigurationUpdateInput!"
                    ]
                }
            ],
            "eventTicketConfigurationDelete": [
                305,
                {
                    "ticketConfigurationId": [
                        426,
                        "ID!"
                    ]
                }
            ],
            "eventReservationUpdateStatus": [
                285,
                {
                    "reservationId": [
                        426,
                        "ID!"
                    ],
                    "status": [
                        286,
                        "EventReservationStatus!"
                    ],
                    "confirmPaymentRefundOrCancel": [
                        2
                    ]
                }
            ],
            "eventReservationConfirmPresence": [
                285,
                {
                    "eventId": [
                        426,
                        "ID!"
                    ],
                    "confirmed": [
                        2,
                        "Boolean!"
                    ]
                }
            ],
            "eventReservationValidateAndPay": [
                291,
                {
                    "eventId": [
                        426,
                        "ID!"
                    ],
                    "options": [
                        550,
                        "EventReservationValidateAndPayInput!"
                    ],
                    "ticketConfigurations": [
                        552,
                        "[EventReservationTicketConfigurationInput!]"
                    ]
                }
            ],
            "eventReservationCreate": [
                285,
                {
                    "eventId": [
                        426,
                        "ID!"
                    ]
                }
            ],
            "eventReservationUpdateTickets": [
                285,
                {
                    "reservationId": [
                        426,
                        "ID!"
                    ],
                    "input": [
                        553,
                        "EventReservationUpdateTicketsInput!"
                    ]
                }
            ],
            "eventReservationStartRegistrationSession": [
                285,
                {
                    "eventId": [
                        426,
                        "ID!"
                    ],
                    "input": [
                        555,
                        "EventReservationRegisterTicketsInput!"
                    ]
                }
            ],
            "eventReservationCancel": [
                285,
                {
                    "reservationId": [
                        426,
                        "ID!"
                    ]
                }
            ],
            "eventVenueRequestImageUpdate": [
                125,
                {
                    "id": [
                        426,
                        "ID!"
                    ],
                    "size": [
                        15,
                        "Float!"
                    ]
                }
            ],
            "eventVenueValidateImage": [
                301,
                {
                    "id": [
                        426,
                        "ID!"
                    ]
                }
            ],
            "eventVenueCreate": [
                301,
                {
                    "input": [
                        556,
                        "EventVenueCreateInput!"
                    ]
                }
            ],
            "eventVenueUpdate": [
                301,
                {
                    "id": [
                        426,
                        "ID!"
                    ],
                    "input": [
                        557,
                        "EventVenueUpdateInput!"
                    ]
                }
            ],
            "eventVenueDelete": [
                301,
                {
                    "id": [
                        426,
                        "ID!"
                    ]
                }
            ],
            "eventVenueSeatsUpdate": [
                270,
                {
                    "venueId": [
                        426,
                        "ID!"
                    ],
                    "input": [
                        558,
                        "EventVenueSeatsUpdateInput!"
                    ]
                }
            ],
            "eventVenueSeatTypeCreate": [
                297,
                {
                    "venueId": [
                        426,
                        "ID!"
                    ],
                    "input": [
                        561,
                        "EventVenueSeatTypeCreateInput!"
                    ]
                }
            ],
            "eventVenueSeatTypeUpdate": [
                297,
                {
                    "id": [
                        426,
                        "ID!"
                    ],
                    "input": [
                        562,
                        "EventVenueSeatTypeUpdateInput!"
                    ]
                }
            ],
            "eventVenueSeatTypeDelete": [
                297,
                {
                    "id": [
                        426,
                        "ID!"
                    ]
                }
            ],
            "organizationPaymentCollectionConfigurationCreateOrUpdateAccount": [
                1
            ],
            "userGroupInvite": [
                259,
                {
                    "groupId": [
                        426,
                        "ID!"
                    ],
                    "playerId": [
                        426,
                        "ID!"
                    ]
                }
            ],
            "userGroupUpdateInvite": [
                259,
                {
                    "groupId": [
                        426,
                        "ID!"
                    ],
                    "status": [
                        260,
                        "UserGroupMemberStatus!"
                    ]
                }
            ],
            "userGroupDeleteInvite": [
                259,
                {
                    "groupId": [
                        426,
                        "ID!"
                    ],
                    "playerId": [
                        426
                    ]
                }
            ],
            "shopCreate": [
                374,
                {
                    "input": [
                        563,
                        "ShopCreateInput!"
                    ]
                }
            ],
            "shopUpdate": [
                374,
                {
                    "id": [
                        426,
                        "ID!"
                    ],
                    "input": [
                        564,
                        "ShopUpdateInput!"
                    ]
                }
            ],
            "shopDelete": [
                374,
                {
                    "id": [
                        426,
                        "ID!"
                    ]
                }
            ],
            "shopCategoryCreate": [
                364,
                {
                    "input": [
                        565,
                        "ShopCategoryCreateInput!"
                    ]
                }
            ],
            "shopCategoryUpdate": [
                364,
                {
                    "id": [
                        426,
                        "ID!"
                    ],
                    "input": [
                        566,
                        "ShopCategoryUpdateInput!"
                    ]
                }
            ],
            "shopCategoryDelete": [
                364,
                {
                    "id": [
                        426,
                        "ID!"
                    ]
                }
            ],
            "playerShopProductPurshase": [
                360,
                {
                    "shopId": [
                        426,
                        "ID!"
                    ],
                    "paymentConfig": [
                        567
                    ],
                    "input": [
                        568,
                        "PlayerShopProductPurshaseInput!"
                    ]
                }
            ],
            "shopProductCreate": [
                371,
                {
                    "shopId": [
                        426,
                        "ID!"
                    ],
                    "input": [
                        570,
                        "ShopProductCreateInput!"
                    ]
                }
            ],
            "shopProductUpdate": [
                371,
                {
                    "productId": [
                        426,
                        "ID!"
                    ],
                    "input": [
                        571,
                        "ShopProductUpdateInput!"
                    ]
                }
            ],
            "shopProductDelete": [
                371,
                {
                    "productId": [
                        426,
                        "ID!"
                    ]
                }
            ],
            "itemCreate": [
                307,
                {
                    "input": [
                        572,
                        "ItemCreateInput!"
                    ]
                }
            ],
            "itemUpdate": [
                307,
                {
                    "id": [
                        426,
                        "ID!"
                    ],
                    "input": [
                        573,
                        "ItemUpdateInput!"
                    ]
                }
            ],
            "itemDelete": [
                307,
                {
                    "id": [
                        426,
                        "ID!"
                    ]
                }
            ],
            "playerItemsUpdate": [
                310,
                {
                    "playerId": [
                        426,
                        "ID!"
                    ],
                    "input": [
                        574,
                        "PlayerItemsUpdateInput!"
                    ]
                }
            ],
            "itemCategoryCreate": [
                313,
                {
                    "input": [
                        576,
                        "ItemCategoryCreateInput!"
                    ]
                }
            ],
            "itemCategoryUpdate": [
                313,
                {
                    "id": [
                        426,
                        "ID!"
                    ],
                    "input": [
                        577,
                        "ItemCategoryUpdateInput!"
                    ]
                }
            ],
            "itemCategoryDelete": [
                313,
                {
                    "id": [
                        426,
                        "ID!"
                    ]
                }
            ],
            "currencyCreate": [
                252,
                {
                    "input": [
                        578,
                        "CurrencyCreateInput!"
                    ]
                }
            ],
            "currencyUpdate": [
                252,
                {
                    "id": [
                        426,
                        "ID!"
                    ],
                    "input": [
                        579,
                        "CurrencyUpdateInput!"
                    ]
                }
            ],
            "currencyDelete": [
                252,
                {
                    "id": [
                        426,
                        "ID!"
                    ]
                }
            ],
            "playerCurrencyUpdate": [
                255,
                {
                    "playerId": [
                        426,
                        "ID!"
                    ],
                    "input": [
                        580,
                        "[PlayerCurrencyUpdateInput!]!"
                    ]
                }
            ],
            "publishMarketplaceApp": [
                320,
                {
                    "input": [
                        582,
                        "PublishMarketplaceAppInput!"
                    ]
                }
            ],
            "updateMarketplaceApp": [
                320,
                {
                    "id": [
                        426,
                        "ID!"
                    ],
                    "input": [
                        583,
                        "UpdateMarketplaceAppInput!"
                    ]
                }
            ],
            "installMarketplaceApp": [
                327,
                {
                    "input": [
                        584,
                        "InstallMarketplaceAppInput!"
                    ]
                }
            ],
            "uninstallMarketplaceApp": [
                2,
                {
                    "marketplaceAppId": [
                        426,
                        "ID!"
                    ]
                }
            ],
            "submitMarketplaceAppReview": [
                324,
                {
                    "input": [
                        585,
                        "SubmitMarketplaceAppReviewInput!"
                    ]
                }
            ],
            "setMarketplaceAppPricing": [
                332,
                {
                    "input": [
                        586,
                        "SetMarketplaceAppPricingInput!"
                    ]
                }
            ],
            "createMarketplaceCheckout": [
                1,
                {
                    "input": [
                        587,
                        "CreateMarketplaceCheckoutInput!"
                    ]
                }
            ],
            "appCreateRelease": [
                131,
                {
                    "marketplaceAppId": [
                        426,
                        "ID!"
                    ],
                    "input": [
                        588,
                        "AppCreateReleaseInput!"
                    ]
                }
            ],
            "appFinalizeRelease": [
                132,
                {
                    "releaseId": [
                        426,
                        "ID!"
                    ]
                }
            ],
            "appPublishRelease": [
                129,
                {
                    "releaseId": [
                        426,
                        "ID!"
                    ]
                }
            ],
            "platformModuleConfigSet": [
                335,
                {
                    "input": [
                        589,
                        "PlatformModuleConfigSetInput!"
                    ]
                }
            ],
            "platformModuleConfigDelete": [
                2,
                {
                    "input": [
                        591,
                        "PlatformModuleConfigDeleteInput!"
                    ]
                }
            ],
            "entityMetafieldSet": [
                338,
                {
                    "input": [
                        592,
                        "SetEntityMetafieldInput!"
                    ]
                }
            ],
            "entityMetafieldDelete": [
                2,
                {
                    "input": [
                        593,
                        "DeleteEntityMetafieldInput!"
                    ]
                }
            ],
            "setObjectMetadata": [
                339,
                {
                    "input": [
                        594,
                        "SetObjectMetadataInput!"
                    ]
                }
            ],
            "removeObjectMetadata": [
                2,
                {
                    "input": [
                        596,
                        "RemoveObjectMetadataInput!"
                    ]
                }
            ],
            "createCustomFieldDefinition": [
                345,
                {
                    "input": [
                        597,
                        "CreateCustomFieldDefinitionInput!"
                    ]
                }
            ],
            "updateCustomFieldDefinition": [
                345,
                {
                    "id": [
                        426,
                        "ID!"
                    ],
                    "input": [
                        599,
                        "UpdateCustomFieldDefinitionInput!"
                    ]
                }
            ],
            "deleteCustomFieldDefinition": [
                2,
                {
                    "id": [
                        426,
                        "ID!"
                    ]
                }
            ],
            "reorderCustomFieldDefinitions": [
                345,
                {
                    "objectType": [
                        342,
                        "ObjectType!"
                    ],
                    "orderedIds": [
                        426,
                        "[ID!]!"
                    ]
                }
            ],
            "setCustomFieldValues": [
                347,
                {
                    "input": [
                        600,
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
                29
            ],
            "stepConfiguration": [
                401
            ],
            "tournamentConfiguration": [
                410
            ],
            "__typename": [
                1
            ]
        },
        "LeaderboardRegisterPlayerScoreInput": {
            "leaderboardId": [
                426
            ],
            "playerId": [
                426
            ],
            "score": [
                462
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
                9
            ],
            "end": [
                9
            ],
            "startingScore": [
                15
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
                9
            ],
            "end": [
                9
            ],
            "startingScore": [
                15
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
                15
            ],
            "scoreCalculationType": [
                95
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
                15
            ],
            "scoreCalculationType": [
                95
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
                471
            ],
            "__typename": [
                1
            ]
        },
        "OrganizationConfigurationInput": {
            "customFields": [
                393
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
                471
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
                392
            ],
            "__typename": [
                1
            ]
        },
        "SetOrganizationMembershipInput": {
            "userId": [
                426
            ],
            "email": [
                81
            ],
            "permissions": [
                392
            ],
            "groupId": [
                426
            ],
            "__typename": [
                1
            ]
        },
        "DeleteOrganizationMembershipInput": {
            "userId": [
                426
            ],
            "__typename": [
                1
            ]
        },
        "CreateOrganizationIdentityProvider": {
            "enabled": [
                2
            ],
            "requiredForPlayerValidation": [
                2
            ],
            "allowLogin": [
                2
            ],
            "description": [
                1
            ],
            "icon": [
                1
            ],
            "identityProviderId": [
                426
            ],
            "name": [
                1
            ],
            "oauth2Configuration": [
                477
            ],
            "openidConfiguration": [
                478
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
                391
            ],
            "issuer": [
                1
            ],
            "providerType": [
                147
            ],
            "clientId": [
                1
            ],
            "clientSecret": [
                1
            ],
            "tokenEndpointAuthMethod": [
                148
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
                391
            ],
            "issuer": [
                1
            ],
            "providerType": [
                147
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
                2
            ],
            "requiredForPlayerValidation": [
                2
            ],
            "allowLogin": [
                2
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
                477
            ],
            "openidConfiguration": [
                478
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
                2
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
                2
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
                2
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
                483
            ],
            "webhookUrl": [
                1
            ],
            "webhookEvents": [
                58
            ],
            "metafieldNamespaces": [
                1
            ],
            "frontendModules": [
                485
            ],
            "__typename": [
                1
            ]
        },
        "ExtensionPointInput": {
            "type": [
                118
            ],
            "label": [
                1
            ],
            "activePages": [
                1
            ],
            "size": [
                484
            ],
            "__typename": [
                1
            ]
        },
        "ExtensionPointSizeInput": {
            "maxWidth": [
                52
            ],
            "maxHeight": [
                52
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
                486
            ],
            "events": [
                488
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
                113
            ],
            "label": [
                1
            ],
            "description": [
                1
            ],
            "required": [
                2
            ],
            "defaultValue": [
                1
            ],
            "options": [
                487
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
                58
            ],
            "url": [
                1
            ],
            "description": [
                1
            ],
            "active": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "UpdateWebhookInput": {
            "events": [
                58
            ],
            "url": [
                1
            ],
            "description": [
                1
            ],
            "active": [
                2
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
                392
            ],
            "groupId": [
                426
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
                47
            ],
            "playerIds": [
                426
            ],
            "variables": [
                394
            ],
            "__typename": [
                1
            ]
        },
        "EmailSendFromCustomInput": {
            "emailField": [
                406
            ],
            "playerIds": [
                426
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
                47
            ],
            "default": [
                2
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
                47
            ],
            "default": [
                2
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
                426
            ],
            "organizationCustomId": [
                1
            ],
            "customFields": [
                499
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
                426
            ],
            "organizationCustomId": [
                1
            ],
            "customFields": [
                499
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
                499
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
                9
            ],
            "endAt": [
                9
            ],
            "startRegistrationsAt": [
                9
            ],
            "endRegistrationsAt": [
                9
            ],
            "visibleAt": [
                9
            ],
            "configuration": [
                503
            ],
            "__typename": [
                1
            ]
        },
        "UpdateTournamentConfigurationOrImportFromIdInput": {
            "fromId": [
                426
            ],
            "configuration": [
                504
            ],
            "__typename": [
                1
            ]
        },
        "UpdateTournamentConfigurationInput": {
            "type": [
                29
            ],
            "teamMinSize": [
                15
            ],
            "teamMaxSize": [
                15
            ],
            "teamsCount": [
                15
            ],
            "teamStatusAfterRegistration": [
                44
            ],
            "registrationConditions": [
                409
            ],
            "customFields": [
                393
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
                9
            ],
            "endAt": [
                9
            ],
            "startRegistrationsAt": [
                9
            ],
            "endRegistrationsAt": [
                9
            ],
            "visibleAt": [
                9
            ],
            "configuration": [
                503
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
                15
            ],
            "type": [
                167
            ],
            "properties": [
                394
            ],
            "__typename": [
                1
            ]
        },
        "SeedStepInput": {
            "stepId": [
                426
            ],
            "orderedTeamIds": [
                426
            ],
            "pins": [
                508
            ],
            "__typename": [
                1
            ]
        },
        "SeedingPinInput": {
            "teamId": [
                426
            ],
            "groupId": [
                426
            ],
            "gameId": [
                426
            ],
            "slotIndex": [
                52
            ],
            "__typename": [
                1
            ]
        },
        "UpdateMatchScoreInput": {
            "teamId": [
                426
            ],
            "variables": [
                510
            ],
            "forcedScoreValue": [
                15
            ],
            "status": [
                178
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
                15
            ],
            "__typename": [
                1
            ]
        },
        "RegisterCustomTeamsInput": {
            "customTeams": [
                512
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
                394
            ],
            "fromExistingTeamId": [
                426
            ],
            "members": [
                513
            ],
            "status": [
                64
            ],
            "__typename": [
                1
            ]
        },
        "CustomTeamMemberInput": {
            "playerId": [
                426
            ],
            "player": [
                498
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
                394
            ],
            "fromExistingTeamId": [
                426
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
                394
            ],
            "__typename": [
                1
            ]
        },
        "TournamentAdminUpsertInput": {
            "id": [
                426
            ],
            "tournamentId": [
                426
            ],
            "accountId": [
                426
            ],
            "permissions": [
                182
            ],
            "__typename": [
                1
            ]
        },
        "TournamentAdminDeleteInput": {
            "id": [
                426
            ],
            "tournamentId": [
                426
            ],
            "accountId": [
                426
            ],
            "__typename": [
                1
            ]
        },
        "CreateStepRuleSetInput": {
            "scoring": [
                519
            ],
            "advancementRules": [
                521
            ],
            "crossStepRules": [
                523
            ],
            "structureTemplate": [
                525
            ],
            "__typename": [
                1
            ]
        },
        "CreateScoringInput": {
            "aggregation": [
                192
            ],
            "formula": [
                1
            ],
            "winPoints": [
                52
            ],
            "lossPoints": [
                52
            ],
            "drawPoints": [
                52
            ],
            "forfeitPoints": [
                52
            ],
            "tiebreakers": [
                520
            ],
            "__typename": [
                1
            ]
        },
        "CreateTiebreakerInput": {
            "order": [
                52
            ],
            "type": [
                189
            ],
            "formula": [
                1
            ],
            "sortOrder": [
                190
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
                52
            ],
            "triggerType": [
                186
            ],
            "triggerScope": [
                1
            ],
            "condition": [
                1
            ],
            "actions": [
                522
            ],
            "autoExecute": [
                2
            ],
            "allowManualOverride": [
                2
            ],
            "purpose": [
                187
            ],
            "__typename": [
                1
            ]
        },
        "RuleActionInput": {
            "type": [
                184
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
                426
            ],
            "sourceRelative": [
                200
            ],
            "dataSource": [
                201
            ],
            "usage": [
                524
            ],
            "__typename": [
                1
            ]
        },
        "CrossStepUsageInput": {
            "type": [
                198
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
                526
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
                52
            ],
            "teamSlotsExpr": [
                1
            ],
            "generationScript": [
                1
            ],
            "roundTemplates": [
                527
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
                52
            ],
            "gameTemplates": [
                528
            ],
            "__typename": [
                1
            ]
        },
        "CreateGameTemplateInput": {
            "order": [
                52
            ],
            "teamSlots": [
                52
            ],
            "bestOf": [
                52
            ],
            "onWinTarget": [
                1
            ],
            "onWinSourceSlot": [
                52
            ],
            "onWinTargetSlot": [
                52
            ],
            "onLossTarget": [
                1
            ],
            "onLossSourceSlot": [
                52
            ],
            "onLossTargetSlot": [
                52
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
                530
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
                204
            ],
            "required": [
                2
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
                530
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
                123
            ],
            "config": [
                413
            ],
            "__typename": [
                1
            ]
        },
        "PlatformFileUpdateInput": {
            "config": [
                413
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
                421
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
                421
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
                537
            ],
            "sections": [
                538
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
                2
            ],
            "order": [
                15
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
                126
            ],
            "public": [
                2
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
                126
            ],
            "public": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "OrganizationSubscriptionItemUpdateInput": {
            "subscriptionItemId": [
                426
            ],
            "count": [
                15
            ],
            "__typename": [
                1
            ]
        },
        "OrganizationSkillRatingsRegisterMatchInput": {
            "teams": [
                543
            ],
            "__typename": [
                1
            ]
        },
        "OrganizationSkillRatingsRegisterMatchTeamInput": {
            "players": [
                426
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
                383
            ],
            "configuration": [
                425
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
                383
            ],
            "configuration": [
                425
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
                9
            ],
            "endAt": [
                9
            ],
            "startRegistrationsAt": [
                9
            ],
            "endRegistrationsAt": [
                9
            ],
            "visibleAt": [
                9
            ],
            "configuration": [
                417
            ],
            "eventVenueId": [
                426
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
                9
            ],
            "endAt": [
                9
            ],
            "startRegistrationsAt": [
                9
            ],
            "endRegistrationsAt": [
                9
            ],
            "visibleAt": [
                9
            ],
            "configuration": [
                417
            ],
            "eventVenueId": [
                426
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
                15
            ],
            "currency": [
                306
            ],
            "maxCount": [
                15
            ],
            "buyable": [
                2
            ],
            "eventId": [
                426
            ],
            "seatTypeId": [
                426
            ],
            "configuration": [
                420
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
                15
            ],
            "currency": [
                306
            ],
            "maxCount": [
                15
            ],
            "buyable": [
                2
            ],
            "seatTypeId": [
                426
            ],
            "configuration": [
                420
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
                551
            ],
            "__typename": [
                1
            ]
        },
        "StripeUiMode": {},
        "EventReservationTicketConfigurationInput": {
            "ticketId": [
                426
            ],
            "customFields": [
                394
            ],
            "__typename": [
                1
            ]
        },
        "EventReservationUpdateTicketsInput": {
            "ticketIdsToRelease": [
                426
            ],
            "ticketIdsToAdd": [
                554
            ],
            "ticketConfigurations": [
                552
            ],
            "__typename": [
                1
            ]
        },
        "EventReservationRegisterTicketInput": {
            "ticketConfigurationId": [
                426
            ],
            "quantity": [
                15
            ],
            "reservedSeats": [
                426
            ],
            "__typename": [
                1
            ]
        },
        "EventReservationRegisterTicketsInput": {
            "tickets": [
                554
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
                559
            ],
            "createSeats": [
                560
            ],
            "deleteSeats": [
                426
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
                416
            ],
            "seatTypeId": [
                426
            ],
            "id": [
                426
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
                416
            ],
            "seatTypeId": [
                426
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
                418
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
                418
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
                394
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
                394
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
                394
            ],
            "shopId": [
                426
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
                394
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
                551
            ],
            "__typename": [
                1
            ]
        },
        "PlayerShopProductPurshaseInput": {
            "items": [
                569
            ],
            "__typename": [
                1
            ]
        },
        "PlayerShopProductPurshaseItemInput": {
            "shopProductId": [
                426
            ],
            "quantity": [
                52
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
                426
            ],
            "price": [
                15
            ],
            "configuration": [
                422
            ],
            "metadata": [
                394
            ],
            "visibleAt": [
                9
            ],
            "currency": [
                306
            ],
            "items": [
                424
            ],
            "currencyPrices": [
                423
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
                426
            ],
            "price": [
                15
            ],
            "configuration": [
                422
            ],
            "metadata": [
                394
            ],
            "visibleAt": [
                9
            ],
            "currency": [
                306
            ],
            "items": [
                424
            ],
            "currencyPrices": [
                423
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
                394
            ],
            "categoryId": [
                426
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
                394
            ],
            "categoryId": [
                426
            ],
            "__typename": [
                1
            ]
        },
        "PlayerItemsUpdateInput": {
            "items": [
                575
            ],
            "__typename": [
                1
            ]
        },
        "PlayerItemsUpdateItemInput": {
            "itemId": [
                426
            ],
            "set": [
                52
            ],
            "add": [
                52
            ],
            "remove": [
                52
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
                394
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
                394
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
                2
            ],
            "metadata": [
                394
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
                2
            ],
            "metadata": [
                394
            ],
            "__typename": [
                1
            ]
        },
        "PlayerCurrencyUpdateInput": {
            "items": [
                581
            ],
            "__typename": [
                1
            ]
        },
        "PlayerCurrencyUpdateItemInput": {
            "currencyId": [
                426
            ],
            "forceBalance": [
                15
            ],
            "add": [
                15
            ],
            "remove": [
                15
            ],
            "__typename": [
                1
            ]
        },
        "PublishMarketplaceAppInput": {
            "organizationAppId": [
                426
            ],
            "manifest": [
                482
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
                482
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
                426
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
                426
            ],
            "rating": [
                52
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
                426
            ],
            "type": [
                333
            ],
            "priceAmountCents": [
                52
            ],
            "currency": [
                1
            ],
            "trialDays": [
                52
            ],
            "__typename": [
                1
            ]
        },
        "CreateMarketplaceCheckoutInput": {
            "marketplaceAppId": [
                426
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
                482
            ],
            "releaseNotes": [
                1
            ],
            "hasExtensionBundle": [
                2
            ],
            "hasModuleBundle": [
                2
            ],
            "extensionBundleSize": [
                52
            ],
            "moduleBundleSize": [
                52
            ],
            "__typename": [
                1
            ]
        },
        "PlatformModuleConfigSetInput": {
            "platformId": [
                426
            ],
            "marketplaceAppId": [
                426
            ],
            "moduleName": [
                1
            ],
            "props": [
                590
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
                426
            ],
            "marketplaceAppId": [
                426
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
                426
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
                426
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
                342
            ],
            "objectId": [
                426
            ],
            "entries": [
                595
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
                340
            ],
            "visibility": [
                341
            ],
            "__typename": [
                1
            ]
        },
        "RemoveObjectMetadataInput": {
            "objectType": [
                342
            ],
            "objectId": [
                426
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
                342
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
                346
            ],
            "required": [
                2
            ],
            "unique": [
                2
            ],
            "order": [
                52
            ],
            "visibility": [
                18
            ],
            "editability": [
                19
            ],
            "options": [
                598
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
                2
            ],
            "unique": [
                2
            ],
            "order": [
                52
            ],
            "visibility": [
                18
            ],
            "editability": [
                19
            ],
            "options": [
                598
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
                342
            ],
            "objectId": [
                426
            ],
            "fields": [
                601
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
                242,
                {
                    "jobId": [
                        426,
                        "ID!"
                    ]
                }
            ],
            "validationEvents": [
                244,
                {
                    "jobId": [
                        426,
                        "ID!"
                    ]
                }
            ],
            "presenceUserConnected": [
                357
            ],
            "presenceUserDisconnected": [
                359
            ],
            "__typename": [
                1
            ]
        }
    }
}