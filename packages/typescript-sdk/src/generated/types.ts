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
        209,
        211,
        214,
        217,
        219,
        220,
        223,
        226,
        230,
        232,
        234,
        238,
        240,
        242,
        243,
        244,
        257,
        259,
        271,
        272,
        273,
        283,
        290,
        303,
        314,
        318,
        325,
        330,
        337,
        338,
        339,
        343,
        367,
        380,
        382,
        423,
        430,
        431,
        432,
        439,
        440,
        459,
        462,
        548
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
                423
            ],
            "name": [
                1
            ],
            "permissions": [
                11
            ],
            "organizationId": [
                423
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
                423
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
                423
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
                423
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
                423
            ],
            "organizationId": [
                423
            ],
            "groupId": [
                423
            ],
            "memberId": [
                423
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
                423
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
                423
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
                423
            ],
            "tournamentSeriesId": [
                423
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
                423
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
                423
            ],
            "ownerId": [
                423
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
                423
            ],
            "organizationIdentityProviderId": [
                423
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
                423
            ],
            "username": [
                1
            ],
            "description": [
                1
            ],
            "ownerId": [
                423
            ],
            "organizationCustomId": [
                423
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
                423
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
                        423,
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
                423
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
                423
            ],
            "organizationId": [
                423
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
                423
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
                423
            ],
            "playerProfileId": [
                423
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
                423
            ],
            "organizationId": [
                423
            ],
            "ownerId": [
                423
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
                423
            ],
            "leaderboardId": [
                423
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
                423
            ],
            "seasonId": [
                423
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
                423
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
                423
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
                423
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
                423
            ],
            "platformId": [
                423
            ],
            "platformTemplateId": [
                423
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
                423
            ],
            "marketplaceAppId": [
                423
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
                423
            ],
            "appId": [
                423
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
                423
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
                423
            ],
            "organizationId": [
                423
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
                423
            ],
            "appId": [
                423
            ],
            "installationId": [
                423
            ],
            "organizationId": [
                423
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
                423
            ],
            "groupId": [
                423
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
                423
            ],
            "identityProviderId": [
                423
            ],
            "configuration": [
                145
            ],
            "name": [
                1
            ],
            "organizationId": [
                423
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
                423
            ],
            "organizationId": [
                423
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
                423
            ],
            "playerProfileId": [
                423
            ],
            "ratingId": [
                423
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
                423
            ],
            "groupId": [
                423
            ],
            "gameId": [
                423
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
                423
            ],
            "order": [
                15
            ],
            "status": [
                154
            ],
            "tournamentStepGroupRoundGameId": [
                423
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
                423
            ],
            "status": [
                159
            ],
            "tournamentTeamId": [
                423
            ],
            "playerProfileId": [
                423
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
                423
            ],
            "name": [
                1
            ],
            "tag": [
                1
            ],
            "teamId": [
                423
            ],
            "managerId": [
                423
            ],
            "tournamentId": [
                423
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
                423
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
                423
            ],
            "tournamentId": [
                423
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
                423
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
                423
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
                423
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
                423
            ],
            "losingGameId": [
                423
            ],
            "__typename": [
                1
            ]
        },
        "TournamentGameStatus": {},
        "TournamentStepGroupRound": {
            "id": [
                423
            ],
            "name": [
                1
            ],
            "configuration": [
                26
            ],
            "tournamentStepGroupId": [
                423
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
                423
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
                423
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
                423
            ],
            "sourceGameId": [
                423
            ],
            "targetGameId": [
                423
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
                423
            ],
            "matchId": [
                423
            ],
            "teamId": [
                423
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
                423
            ],
            "tournamentId": [
                423
            ],
            "accountId": [
                423
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
                423
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
                423
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
                423
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
                423
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
                423
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
                423
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
                423
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
                423
            ],
            "sourceStepId": [
                423
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
                423
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
                423
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
                211
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
                208
            ],
            "warnings": [
                210
            ],
            "__typename": [
                1
            ]
        },
        "SimulatedEffectModel": {
            "type": [
                214
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
                208
            ],
            "warnings": [
                210
            ],
            "effectsSummary": [
                213
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
                217
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
                423
            ],
            "code": [
                219
            ],
            "message": [
                1
            ],
            "hint": [
                1
            ],
            "invariantCode": [
                220
            ],
            "luaError": [
                216
            ],
            "offender": [
                221
            ],
            "__typename": [
                1
            ]
        },
        "ValidationErrorCode": {},
        "InvariantCode": {},
        "InvariantOffenderUnion": {
            "on_RuleOffenderModel": [
                222
            ],
            "on_CrossStepRuleOffenderModel": [
                224
            ],
            "on_GameOffenderModel": [
                225
            ],
            "on_RoundOffenderModel": [
                227
            ],
            "on_GroupOffenderModel": [
                228
            ],
            "on_TeamOffenderModel": [
                229
            ],
            "on_ScoreRowOffenderModel": [
                231
            ],
            "__typename": [
                1
            ]
        },
        "RuleOffenderModel": {
            "kind": [
                223
            ],
            "ruleId": [
                423
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
                223
            ],
            "crossStepRuleId": [
                423
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
                223
            ],
            "gameId": [
                423
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
                226
            ],
            "__typename": [
                1
            ]
        },
        "GameStatus": {},
        "RoundOffenderModel": {
            "kind": [
                223
            ],
            "roundId": [
                423
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
                223
            ],
            "groupId": [
                423
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
                223
            ],
            "teamId": [
                423
            ],
            "teamName": [
                1
            ],
            "currentStatus": [
                230
            ],
            "__typename": [
                1
            ]
        },
        "TeamScopeStatus": {},
        "ScoreRowOffenderModel": {
            "kind": [
                223
            ],
            "scope": [
                232
            ],
            "scoreRowId": [
                423
            ],
            "teamId": [
                423
            ],
            "score": [
                15
            ],
            "rank": [
                52
            ],
            "status": [
                230
            ],
            "__typename": [
                1
            ]
        },
        "ScoreRowScope": {},
        "InvariantResultModel": {
            "code": [
                220
            ],
            "severity": [
                234
            ],
            "passed": [
                2
            ],
            "message": [
                1
            ],
            "offenders": [
                221
            ],
            "__typename": [
                1
            ]
        },
        "InvariantSeverity": {},
        "RuleFireSummaryModel": {
            "ruleId": [
                423
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
                233
            ],
            "errors": [
                218
            ],
            "ruleFiredSummary": [
                235
            ],
            "__typename": [
                1
            ]
        },
        "ValidationProgressModel": {
            "stage": [
                238
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
                423
            ],
            "stepRuleSetId": [
                423
            ],
            "status": [
                240
            ],
            "stage": [
                238
            ],
            "progress": [
                237
            ],
            "result": [
                236
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
                423
            ],
            "jobId": [
                423
            ],
            "sequence": [
                52
            ],
            "timestamp": [
                9
            ],
            "kind": [
                242
            ],
            "summary": [
                1
            ],
            "ruleId": [
                423
            ],
            "crossStepRuleId": [
                423
            ],
            "matchId": [
                423
            ],
            "gameId": [
                423
            ],
            "roundId": [
                423
            ],
            "groupId": [
                423
            ],
            "stepId": [
                423
            ],
            "teamId": [
                423
            ],
            "effectType": [
                243
            ],
            "statusBefore": [
                244
            ],
            "statusAfter": [
                244
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
                246
            ],
            "nodes": [
                239
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
                239
            ],
            "__typename": [
                1
            ]
        },
        "ValidationEvents": {
            "edges": [
                248
            ],
            "nodes": [
                241
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
                241
            ],
            "__typename": [
                1
            ]
        },
        "Currency": {
            "id": [
                423
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
                423
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
                251
            ],
            "nodes": [
                249
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
                249
            ],
            "__typename": [
                1
            ]
        },
        "PlayerCurrency": {
            "id": [
                423
            ],
            "playerProfileId": [
                423
            ],
            "currencyId": [
                423
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
        "PlayerCurrencyEdge": {
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
                423
            ],
            "groupId": [
                423
            ],
            "playerProfileId": [
                423
            ],
            "status": [
                257
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
                423
            ],
            "organizationId": [
                423
            ],
            "managerId": [
                423
            ],
            "createdAt": [
                9
            ],
            "updatedAt": [
                9
            ],
            "status": [
                259
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
                261
            ],
            "nodes": [
                258
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
                258
            ],
            "__typename": [
                1
            ]
        },
        "UserGroupMembers": {
            "edges": [
                263
            ],
            "nodes": [
                256
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
                256
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
                264
            ],
            "__typename": [
                1
            ]
        },
        "EventVenueSeat": {
            "id": [
                423
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
                265
            ],
            "seatTypeId": [
                423
            ],
            "__typename": [
                1
            ]
        },
        "EventVenueSeatsUpdateResult": {
            "updatedSeats": [
                266
            ],
            "createdSeats": [
                266
            ],
            "deletedSeats": [
                266
            ],
            "__typename": [
                1
            ]
        },
        "EventVenueSeats": {
            "edges": [
                269
            ],
            "nodes": [
                266
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
                266
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
                255
            ],
            "maxTicketsPerReservation": [
                15
            ],
            "reservationStatusAfterPayment": [
                271
            ],
            "reservationStatusAfterRegistration": [
                272
            ],
            "sessionDuration": [
                15
            ],
            "allowForNewSessionAfterTimeout": [
                2
            ],
            "seatAssignmentMode": [
                273
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
                423
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
                270
            ],
            "eventVenueId": [
                423
            ],
            "organizationId": [
                423
            ],
            "createdById": [
                423
            ],
            "decryptionKey": [
                1
            ],
            "venue": [
                298
            ],
            "__typename": [
                1
            ]
        },
        "EventInterface": {
            "id": [
                423
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
                270
            ],
            "eventVenueId": [
                423
            ],
            "organizationId": [
                423
            ],
            "createdById": [
                423
            ],
            "decryptionKey": [
                1
            ],
            "venue": [
                298
            ],
            "on_Event": [
                274
            ],
            "on_EventWithUserReservation": [
                276
            ],
            "__typename": [
                1
            ]
        },
        "EventWithUserReservation": {
            "id": [
                423
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
                270
            ],
            "eventVenueId": [
                423
            ],
            "organizationId": [
                423
            ],
            "createdById": [
                423
            ],
            "decryptionKey": [
                1
            ],
            "venue": [
                298
            ],
            "myReservation": [
                284
            ],
            "__typename": [
                1
            ]
        },
        "Events": {
            "edges": [
                278
            ],
            "nodes": [
                274
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
                274
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
                423
            ],
            "ticketId": [
                423
            ],
            "reservationId": [
                423
            ],
            "groupMemberId": [
                423
            ],
            "seatId": [
                423
            ],
            "createdAt": [
                9
            ],
            "updatedAt": [
                9
            ],
            "configuration": [
                279
            ],
            "__typename": [
                1
            ]
        },
        "EventReservationTicketWithQrCode": {
            "id": [
                423
            ],
            "ticketId": [
                423
            ],
            "reservationId": [
                423
            ],
            "groupMemberId": [
                423
            ],
            "seatId": [
                423
            ],
            "createdAt": [
                9
            ],
            "updatedAt": [
                9
            ],
            "configuration": [
                279
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
                423
            ],
            "name": [
                1
            ],
            "status": [
                283
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
                423
            ],
            "groupId": [
                423
            ],
            "tickets": [
                280
            ],
            "groupStatus": [
                259
            ],
            "__typename": [
                1
            ]
        },
        "EventReservationStatus": {},
        "EventReservationWithTicketsAndQrCode": {
            "id": [
                423
            ],
            "name": [
                1
            ],
            "status": [
                283
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
                423
            ],
            "groupId": [
                423
            ],
            "groupStatus": [
                259
            ],
            "tickets": [
                281
            ],
            "__typename": [
                1
            ]
        },
        "EventReservations": {
            "edges": [
                286
            ],
            "nodes": [
                287
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
                287
            ],
            "__typename": [
                1
            ]
        },
        "OmitObjectType": {
            "id": [
                423
            ],
            "name": [
                1
            ],
            "status": [
                283
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
                423
            ],
            "groupId": [
                423
            ],
            "groupStatus": [
                259
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
                423
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
                265
            ],
            "seatTypeId": [
                423
            ],
            "status": [
                290
            ],
            "reservedByTicketId": [
                423
            ],
            "reservedByReservationId": [
                423
            ],
            "reservedByGroupMemberId": [
                423
            ],
            "__typename": [
                1
            ]
        },
        "EventSeatStatus": {},
        "EventSeats": {
            "edges": [
                292
            ],
            "nodes": [
                289
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
                289
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
                423
            ],
            "name": [
                1
            ],
            "description": [
                1
            ],
            "configuration": [
                293
            ],
            "createdAt": [
                9
            ],
            "updatedAt": [
                9
            ],
            "venueId": [
                423
            ],
            "__typename": [
                1
            ]
        },
        "EventVenueSeatTypes": {
            "edges": [
                296
            ],
            "nodes": [
                294
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
                294
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
                423
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
                297
            ],
            "organizationId": [
                423
            ],
            "__typename": [
                1
            ]
        },
        "EventVenues": {
            "edges": [
                300
            ],
            "nodes": [
                298
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
                298
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
                423
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
                303
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
                423
            ],
            "seatTypeId": [
                423
            ],
            "configuration": [
                301
            ],
            "__typename": [
                1
            ]
        },
        "ShopCurrencies": {},
        "Item": {
            "id": [
                423
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
                423
            ],
            "categoryId": [
                423
            ],
            "__typename": [
                1
            ]
        },
        "Items": {
            "edges": [
                306
            ],
            "nodes": [
                304
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
                304
            ],
            "__typename": [
                1
            ]
        },
        "PlayerItem": {
            "id": [
                423
            ],
            "playerProfileId": [
                423
            ],
            "itemId": [
                423
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
        "PlayerItemEdge": {
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
        "ItemCategory": {
            "id": [
                423
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
                423
            ],
            "__typename": [
                1
            ]
        },
        "ItemCategories": {
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
        "ItemCategoryEdge": {
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
        "Log": {
            "id": [
                423
            ],
            "type": [
                314
            ],
            "resourceId": [
                423
            ],
            "data": [
                54
            ],
            "organizationId": [
                423
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
                316
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
        "LogEdge": {
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
        "MarketplaceApp": {
            "id": [
                423
            ],
            "organizationAppId": [
                423
            ],
            "status": [
                318
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
                322,
                {
                    "page": [
                        63
                    ]
                }
            ],
            "stats": [
                328
            ],
            "installation": [
                324
            ],
            "pricing": [
                329
            ],
            "__typename": [
                1
            ]
        },
        "MarketplaceAppStatus": {},
        "MarketplaceApps": {
            "edges": [
                320
            ],
            "nodes": [
                317
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
                317
            ],
            "__typename": [
                1
            ]
        },
        "MarketplaceAppReview": {
            "id": [
                423
            ],
            "marketplaceAppId": [
                423
            ],
            "organizationId": [
                423
            ],
            "accountId": [
                423
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
                323
            ],
            "nodes": [
                321
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
                321
            ],
            "__typename": [
                1
            ]
        },
        "MarketplaceAppInstallation": {
            "id": [
                423
            ],
            "marketplaceAppId": [
                423
            ],
            "organizationId": [
                423
            ],
            "installedById": [
                423
            ],
            "status": [
                325
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
                317
            ],
            "__typename": [
                1
            ]
        },
        "MarketplaceInstallationStatus": {},
        "MarketplaceAppInstallations": {
            "edges": [
                327
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
        "MarketplaceAppInstallationEdge": {
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
                423
            ],
            "marketplaceAppId": [
                423
            ],
            "type": [
                330
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
                423
            ],
            "platformId": [
                423
            ],
            "marketplaceAppId": [
                423
            ],
            "moduleName": [
                1
            ],
            "props": [
                331
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
                423
            ],
            "marketplaceAppId": [
                423
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
                423
            ],
            "appId": [
                423
            ],
            "__typename": [
                1
            ]
        },
        "EntityMetafield": {
            "id": [
                423
            ],
            "organizationId": [
                423
            ],
            "appId": [
                423
            ],
            "namespace": [
                1
            ],
            "entityType": [
                1
            ],
            "entityId": [
                423
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
                337
            ],
            "visibility": [
                338
            ],
            "objectType": [
                339
            ],
            "objectId": [
                423
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
                423
            ],
            "entries": [
                336
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
                423
            ],
            "objectType": [
                339
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
                343
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
                341
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
                342
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
                423
            ],
            "fields": [
                344
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
                423
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
                349
            ],
            "organizationId": [
                423
            ],
            "appId": [
                1
            ],
            "customDomains": [
                346
            ],
            "__typename": [
                1
            ]
        },
        "PlatformTemplate": {
            "id": [
                423
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
                423
            ],
            "organizationId": [
                423
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
                423
            ],
            "serverId": [
                423
            ],
            "playerId": [
                423
            ],
            "accountId": [
                423
            ],
            "organizationId": [
                423
            ],
            "__typename": [
                1
            ]
        },
        "UsersConnectedEvent": {
            "usersConnected": [
                353
            ],
            "__typename": [
                1
            ]
        },
        "UserDisconnectEvent": {
            "sessionId": [
                423
            ],
            "serverId": [
                423
            ],
            "playerId": [
                423
            ],
            "accountId": [
                423
            ],
            "organizationId": [
                423
            ],
            "__typename": [
                1
            ]
        },
        "UsersDisconnectedEvent": {
            "usersDisconnected": [
                355
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
                423
            ],
            "playerProfileId": [
                423
            ],
            "shopProductId": [
                423
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
                360
            ],
            "nodes": [
                358
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
                358
            ],
            "__typename": [
                1
            ]
        },
        "ShopCategory": {
            "id": [
                423
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
                423
            ],
            "__typename": [
                1
            ]
        },
        "ShopCategories": {
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
        "ShopCategoryEdge": {
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
                423
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
                367
            ],
            "id": [
                423
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
                423
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
                423
            ],
            "price": [
                15
            ],
            "configuration": [
                364
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
                423
            ],
            "currency": [
                303
            ],
            "items": [
                366
            ],
            "currencyPrices": [
                365
            ],
            "__typename": [
                1
            ]
        },
        "ShopProducts": {
            "edges": [
                370
            ],
            "nodes": [
                368
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
                368
            ],
            "__typename": [
                1
            ]
        },
        "Shop": {
            "id": [
                423
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
                423
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
        "ShopEdge": {
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
        "ShopProductItem": {
            "id": [
                423
            ],
            "currencyId": [
                423
            ],
            "createdAt": [
                9
            ],
            "updatedAt": [
                9
            ],
            "type": [
                367
            ],
            "shopItemId": [
                423
            ],
            "itemId": [
                423
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
        "ShopProductItemEdge": {
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
        "SkillRatingConfiguration": {
            "updateLeaderboardId": [
                423
            ],
            "__typename": [
                1
            ]
        },
        "OrganizationSkillRatingsRegisterMatchPlayer": {
            "id": [
                423
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
                423
            ],
            "name": [
                1
            ],
            "description": [
                1
            ],
            "type": [
                380
            ],
            "configuration": [
                377
            ],
            "organizationId": [
                423
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
                382
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
                423
            ],
            "name": [
                1
            ],
            "description": [
                1
            ],
            "limitsOverride": [
                381
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
                423
            ],
            "subscriptionItemId": [
                423
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
                383
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
                385
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
                387
            ],
            "mappingConfiguration": [
                386
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
                392
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
                393
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
                394
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
                396
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
                397
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
                423
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
                399
            ],
            "stringCondition": [
                401
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
                423
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
                423
            ],
            "condition": [
                402
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
                401
            ],
            "numericCondition": [
                400
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
                405
            ],
            "memberConditions": [
                404
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
                406
            ],
            "customFields": [
                390
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
                403
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
                409
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
                412
            ],
            "__typename": [
                1
            ]
        },
        "EventConfigurationInput": {
            "customFields": [
                390
            ],
            "groupConfiguration": [
                411
            ],
            "maxTicketsPerReservation": [
                15
            ],
            "reservationStatusAfterPayment": [
                271
            ],
            "reservationStatusAfterRegistration": [
                272
            ],
            "sessionDuration": [
                15
            ],
            "allowForNewSessionAfterTimeout": [
                2
            ],
            "seatAssignmentMode": [
                273
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
                390
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
                423
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
                367
            ],
            "id": [
                423
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
                423
            ],
            "__typename": [
                1
            ]
        },
        "ID": {},
        "Query": {
            "logs": [
                315,
                {
                    "page": [
                        63
                    ],
                    "resourceId": [
                        423
                    ],
                    "types": [
                        314,
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
                        423,
                        "ID!"
                    ]
                }
            ],
            "leaderboardCurrentPlayerRanking": [
                85,
                {
                    "input": [
                        425,
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
                        423,
                        "ID!"
                    ]
                }
            ],
            "currentLeaderboardSeason": [
                91,
                {
                    "leaderboardId": [
                        423,
                        "ID!"
                    ]
                }
            ],
            "leaderboardSeasons": [
                92,
                {
                    "leaderboardId": [
                        423,
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
                        423,
                        "ID!"
                    ]
                }
            ],
            "leaderboardSeasonBuckets": [
                96,
                {
                    "seasonId": [
                        423,
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
                        423,
                        "ID!"
                    ]
                }
            ],
            "leaderboardSeasonBucketScores": [
                86,
                {
                    "leaderboardSeasonBucketId": [
                        423,
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
                        423,
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
                        382,
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
                        423,
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
                426
            ],
            "identityProvider": [
                144,
                {
                    "id": [
                        423,
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
                        423,
                        "ID!"
                    ]
                }
            ],
            "appRelease": [
                133,
                {
                    "id": [
                        423,
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
                        423,
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
                        423,
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
                        423,
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
                        423,
                        "[ID!]"
                    ],
                    "page": [
                        63,
                        "PageInfo!"
                    ],
                    "identityProviders": [
                        423,
                        "[ID!]"
                    ],
                    "identityProviderProperties": [
                        1,
                        "[String!]"
                    ],
                    "query": [
                        428
                    ]
                }
            ],
            "player": [
                77,
                {
                    "id": [
                        423
                    ],
                    "ownerId": [
                        423
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
                        423,
                        "ID!"
                    ],
                    "skillRatingIds": [
                        423,
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
                        423,
                        "ID!"
                    ]
                }
            ],
            "tournament": [
                62,
                {
                    "id": [
                        423,
                        "ID!"
                    ]
                }
            ],
            "tournaments": [
                169,
                {
                    "query": [
                        429,
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
                        423,
                        "ID!"
                    ]
                }
            ],
            "tournamentStep": [
                166,
                {
                    "id": [
                        423,
                        "ID!"
                    ]
                }
            ],
            "tournamentStepGeneratedShape": [
                174,
                {
                    "stepId": [
                        423,
                        "ID!"
                    ]
                }
            ],
            "match": [
                153,
                {
                    "matchId": [
                        423,
                        "ID!"
                    ]
                }
            ],
            "tournamentTeam": [
                162,
                {
                    "teamId": [
                        423,
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
                        423,
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
                        391,
                        "[PropertyValueInput!]"
                    ],
                    "playerUsernameQuery": [
                        1
                    ],
                    "playerPropertiesFilter": [
                        391,
                        "[PropertyValueInput!]"
                    ],
                    "playerIdentityProviderPropertiesFilter": [
                        434,
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
                        423,
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
                        391,
                        "[PropertyValueInput!]"
                    ],
                    "orderByProperty": [
                        435
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
                        423
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
                        423,
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
                        423,
                        "ID!"
                    ]
                }
            ],
            "stepRuleSet": [
                202,
                {
                    "tournamentStepId": [
                        423,
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
                        423,
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
                212,
                {
                    "input": [
                        436,
                        "ValidateScriptInput!"
                    ]
                }
            ],
            "simulateScript": [
                215,
                {
                    "input": [
                        437,
                        "SimulateScriptInput!"
                    ]
                }
            ],
            "stepRuleSetValidationJob": [
                239,
                {
                    "jobId": [
                        423,
                        "ID!"
                    ]
                }
            ],
            "stepRuleSetValidationJobs": [
                245,
                {
                    "stepRuleSetId": [
                        423,
                        "ID!"
                    ],
                    "page": [
                        63,
                        "PageInfo!"
                    ]
                }
            ],
            "stepRuleSetValidationEvents": [
                247,
                {
                    "jobId": [
                        423,
                        "ID!"
                    ],
                    "page": [
                        63,
                        "PageInfo!"
                    ],
                    "kindFilter": [
                        242,
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
                        423
                    ],
                    "templateId": [
                        423
                    ]
                }
            ],
            "platformFile": [
                122,
                {
                    "id": [
                        423,
                        "ID!"
                    ]
                }
            ],
            "platforms": [
                350
            ],
            "platform": [
                350,
                {
                    "platformId": [
                        423,
                        "ID!"
                    ]
                }
            ],
            "platformFindFromDomain": [
                350,
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
                346,
                {
                    "platformId": [
                        423,
                        "ID!"
                    ]
                }
            ],
            "platformTemplatesPublic": [
                351
            ],
            "platformTemplates": [
                351
            ],
            "platformTemplate": [
                351,
                {
                    "platformTemplateId": [
                        423,
                        "ID!"
                    ]
                }
            ],
            "subscriptionItems": [
                383
            ],
            "organizationCurrentSubscriptionItems": [
                384
            ],
            "organizationSkillRatings": [
                379
            ],
            "organizationSkillRating": [
                379,
                {
                    "id": [
                        423,
                        "ID!"
                    ]
                }
            ],
            "event": [
                276,
                {
                    "id": [
                        423,
                        "ID!"
                    ]
                }
            ],
            "events": [
                277,
                {
                    "page": [
                        63,
                        "PageInfo!"
                    ],
                    "query": [
                        438
                    ],
                    "eventIds": [
                        423,
                        "[ID!]"
                    ]
                }
            ],
            "eventTicketConfiguration": [
                302,
                {
                    "id": [
                        423,
                        "ID!"
                    ]
                }
            ],
            "eventTicketConfigurations": [
                302,
                {
                    "eventId": [
                        423,
                        "ID!"
                    ]
                }
            ],
            "eventReservationsMyReservations": [
                285,
                {
                    "page": [
                        63,
                        "PageInfo!"
                    ],
                    "status": [
                        283
                    ],
                    "groupStatus": [
                        259
                    ],
                    "eventIds": [
                        423,
                        "[ID!]"
                    ]
                }
            ],
            "eventReservation": [
                282,
                {
                    "reservationId": [
                        423,
                        "ID!"
                    ]
                }
            ],
            "eventSeats": [
                291,
                {
                    "eventId": [
                        423,
                        "ID!"
                    ],
                    "page": [
                        63,
                        "PageInfo!"
                    ],
                    "eventVenueId": [
                        423
                    ],
                    "reservationIds": [
                        423,
                        "[ID!]"
                    ]
                }
            ],
            "eventReservations": [
                285,
                {
                    "eventId": [
                        423,
                        "ID!"
                    ],
                    "page": [
                        63,
                        "PageInfo!"
                    ],
                    "query": [
                        442,
                        "EventReservationsQueryInput!"
                    ]
                }
            ],
            "eventVenues": [
                299,
                {
                    "page": [
                        63,
                        "PageInfo!"
                    ]
                }
            ],
            "eventVenue": [
                298,
                {
                    "id": [
                        423,
                        "ID!"
                    ]
                }
            ],
            "eventVenueSeats": [
                268,
                {
                    "venueId": [
                        423,
                        "ID!"
                    ],
                    "page": [
                        63,
                        "PageInfo!"
                    ],
                    "seatTypeId": [
                        423
                    ]
                }
            ],
            "eventVenueSeatTypes": [
                295,
                {
                    "venueId": [
                        423,
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
                262,
                {
                    "groupIds": [
                        423,
                        "[ID!]!"
                    ],
                    "page": [
                        63,
                        "PageInfo!"
                    ],
                    "status": [
                        257
                    ]
                }
            ],
            "userGroups": [
                260,
                {
                    "query": [
                        444,
                        "UserGroupsQueryInput!"
                    ],
                    "page": [
                        63,
                        "PageInfo!"
                    ]
                }
            ],
            "userGroupMyMemberships": [
                262,
                {
                    "page": [
                        63,
                        "PageInfo!"
                    ],
                    "status": [
                        257
                    ],
                    "entityType": [
                        1
                    ],
                    "entityId": [
                        423
                    ]
                }
            ],
            "presenceAnalytics": [
                352
            ],
            "shops": [
                372,
                {
                    "page": [
                        63
                    ],
                    "filter": [
                        445
                    ]
                }
            ],
            "shopCategories": [
                362,
                {
                    "page": [
                        63
                    ],
                    "filter": [
                        446
                    ]
                }
            ],
            "playerShopProductPurshases": [
                359,
                {
                    "page": [
                        63
                    ],
                    "filter": [
                        447
                    ]
                }
            ],
            "shopProducts": [
                369,
                {
                    "shopId": [
                        423,
                        "ID!"
                    ],
                    "page": [
                        63
                    ],
                    "filter": [
                        448
                    ]
                }
            ],
            "shopProductItems": [
                375,
                {
                    "shopProductId": [
                        423,
                        "ID!"
                    ],
                    "page": [
                        63
                    ]
                }
            ],
            "items": [
                305,
                {
                    "page": [
                        63
                    ],
                    "filter": [
                        449
                    ]
                }
            ],
            "playerItems": [
                308,
                {
                    "page": [
                        63
                    ],
                    "filter": [
                        450
                    ]
                }
            ],
            "itemCategories": [
                311,
                {
                    "page": [
                        63
                    ],
                    "filter": [
                        451
                    ]
                }
            ],
            "currencies": [
                250,
                {
                    "page": [
                        63
                    ],
                    "filter": [
                        452
                    ]
                }
            ],
            "playerCurrencies": [
                253,
                {
                    "page": [
                        63
                    ],
                    "filter": [
                        453
                    ]
                }
            ],
            "marketplaceApps": [
                319,
                {
                    "page": [
                        63
                    ],
                    "filter": [
                        454
                    ]
                }
            ],
            "marketplaceApp": [
                317,
                {
                    "id": [
                        423,
                        "ID!"
                    ]
                }
            ],
            "myMarketplaceInstallations": [
                326,
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
                        423,
                        "ID!"
                    ]
                }
            ],
            "moduleTokensForPlatform": [
                333,
                {
                    "platformId": [
                        423,
                        "ID!"
                    ]
                }
            ],
            "extensionToken": [
                334,
                {
                    "installationId": [
                        423,
                        "ID!"
                    ]
                }
            ],
            "platformModuleConfigs": [
                332,
                {
                    "platformId": [
                        423,
                        "ID!"
                    ]
                }
            ],
            "entityMetafields": [
                335,
                {
                    "entityType": [
                        1,
                        "String!"
                    ],
                    "entityId": [
                        423,
                        "ID!"
                    ],
                    "filter": [
                        455
                    ]
                }
            ],
            "allowedObjectTypes": [
                339
            ],
            "objectMetadata": [
                336,
                {
                    "objectType": [
                        339,
                        "ObjectType!"
                    ],
                    "objectId": [
                        423,
                        "ID!"
                    ]
                }
            ],
            "objectMetadataBatch": [
                340,
                {
                    "objectType": [
                        339,
                        "ObjectType!"
                    ],
                    "objectIds": [
                        423,
                        "[ID!]!"
                    ]
                }
            ],
            "customFieldDefinitions": [
                342,
                {
                    "objectType": [
                        339,
                        "ObjectType!"
                    ]
                }
            ],
            "customFieldValues": [
                344,
                {
                    "objectType": [
                        339,
                        "ObjectType!"
                    ],
                    "objectId": [
                        423,
                        "ID!"
                    ]
                }
            ],
            "customFieldValuesBatch": [
                345,
                {
                    "objectType": [
                        339,
                        "ObjectType!"
                    ],
                    "objectIds": [
                        423,
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
                423
            ],
            "playerId": [
                423
            ],
            "seasonId": [
                423
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
                427
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
                423
            ],
            "name": [
                1
            ],
            "organizationId": [
                423
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
                430
            ],
            "orderDirection": [
                431
            ],
            "status": [
                432
            ],
            "showNotVisible": [
                2
            ],
            "filterByPlayers": [
                433
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
                423
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
                423
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
                431
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
                217
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
                217
            ],
            "parameters": [
                1
            ],
            "stepId": [
                423
            ],
            "__typename": [
                1
            ]
        },
        "EventsQuery": {
            "orderBy": [
                439
            ],
            "orderDirection": [
                431
            ],
            "status": [
                440
            ],
            "showNotVisible": [
                2
            ],
            "filterByPlayers": [
                441
            ],
            "__typename": [
                1
            ]
        },
        "EventsQueryOrderBy": {},
        "EventsQueryStatus": {},
        "EventsQueryPlayerIdWithTeamStatusInput": {
            "playerId": [
                423
            ],
            "reservationStatus": [
                283
            ],
            "memberStatus": [
                257
            ],
            "__typename": [
                1
            ]
        },
        "EventReservationsQueryInput": {
            "filterByRegistrationStatus": [
                283
            ],
            "retrieveOnlyGroupMembersWithStatus": [
                257
            ],
            "filterByPlayerUsernameQuery": [
                1
            ],
            "filterByReservationProperties": [
                391
            ],
            "filterByPlayerProperties": [
                391
            ],
            "filterByPlayerIdentityProviderProperties": [
                434
            ],
            "filterByPlayers": [
                443
            ],
            "filterByGroupStatus": [
                259
            ],
            "__typename": [
                1
            ]
        },
        "EventReservationsQueryPlayerIdWithGroupStatusInput": {
            "playerId": [
                423
            ],
            "memberStatus": [
                257
            ],
            "__typename": [
                1
            ]
        },
        "UserGroupsQueryInput": {
            "ids": [
                423
            ],
            "__typename": [
                1
            ]
        },
        "ShopsFilterInput": {
            "ids": [
                423
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
                423
            ],
            "externalIds": [
                1
            ],
            "shopIds": [
                423
            ],
            "__typename": [
                1
            ]
        },
        "PlayerShopProductPurshasesFilterInput": {
            "shopProductIds": [
                423
            ],
            "playerProfileIds": [
                423
            ],
            "shopIds": [
                423
            ],
            "ids": [
                423
            ],
            "__typename": [
                1
            ]
        },
        "ShopProductsFilterInput": {
            "categoryIds": [
                423
            ],
            "ids": [
                423
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
                423
            ],
            "ids": [
                423
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
                423
            ],
            "playerProfileIds": [
                423
            ],
            "__typename": [
                1
            ]
        },
        "ItemCategoriesFilterInput": {
            "ids": [
                423
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
                423
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
                423
            ],
            "playerProfileIds": [
                423
            ],
            "__typename": [
                1
            ]
        },
        "MarketplaceAppsFilterInput": {
            "status": [
                318
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
                423
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
                        423,
                        "ID!"
                    ]
                }
            ],
            "accountIdentityGenerateAccessToken": [
                1,
                {
                    "identityProviderId": [
                        423,
                        "ID!"
                    ],
                    "accountId": [
                        423
                    ]
                }
            ],
            "accountIdentityRefresh": [
                76,
                {
                    "identityProviderId": [
                        423,
                        "ID!"
                    ],
                    "accountId": [
                        423
                    ]
                }
            ],
            "attachOrUpdateIdentityToAccount": [
                76,
                {
                    "identityProviderId": [
                        423,
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
                        423,
                        "ID!"
                    ]
                }
            ],
            "updateConfiguration": [
                83,
                {
                    "id": [
                        423,
                        "ID!"
                    ],
                    "input": [
                        457,
                        "CreateConfigurationInput!"
                    ]
                }
            ],
            "deleteConfiguration": [
                2,
                {
                    "id": [
                        423,
                        "ID!"
                    ]
                }
            ],
            "leaderboardRegisterPlayerScore": [
                85,
                {
                    "input": [
                        458,
                        "LeaderboardRegisterPlayerScoreInput!"
                    ]
                }
            ],
            "createLeaderboard": [
                88,
                {
                    "input": [
                        460,
                        "CreateLeaderboardInput!"
                    ]
                }
            ],
            "updateLeaderboard": [
                88,
                {
                    "id": [
                        423,
                        "ID!"
                    ],
                    "input": [
                        461,
                        "UpdateLeaderboardInput!"
                    ]
                }
            ],
            "deleteLeaderboard": [
                462,
                {
                    "id": [
                        423,
                        "ID!"
                    ]
                }
            ],
            "createLeaderboardSeason": [
                91,
                {
                    "leaderboardId": [
                        423,
                        "ID!"
                    ],
                    "input": [
                        463,
                        "CreateLeaderboardSeasonInput!"
                    ]
                }
            ],
            "updateLeaderboardSeason": [
                91,
                {
                    "id": [
                        423,
                        "ID!"
                    ],
                    "input": [
                        464,
                        "UpdateLeaderboardSeasonInput!"
                    ]
                }
            ],
            "deleteLeaderboardSeason": [
                462,
                {
                    "id": [
                        423,
                        "ID!"
                    ]
                }
            ],
            "createLeaderboardSeasonBucket": [
                94,
                {
                    "seasonId": [
                        423,
                        "ID!"
                    ],
                    "input": [
                        465,
                        "CreateLeaderboardSeasonBucketInput!"
                    ]
                }
            ],
            "updateLeaderboardSeasonBucket": [
                94,
                {
                    "id": [
                        423,
                        "ID!"
                    ],
                    "input": [
                        466,
                        "UpdateLeaderboardSeasonBucketInput!"
                    ]
                }
            ],
            "deleteLeaderboardSeasonBucket": [
                462,
                {
                    "id": [
                        423,
                        "ID!"
                    ]
                }
            ],
            "updateOrganization": [
                74,
                {
                    "organization": [
                        467,
                        "UpdateOrganizationInput!"
                    ]
                }
            ],
            "createOrganization": [
                74,
                {
                    "organization": [
                        469,
                        "CreateOrganizationInput!"
                    ]
                }
            ],
            "createOrganizationGroup": [
                7,
                {
                    "input": [
                        470,
                        "CreateOrganizationGroupInput!"
                    ]
                }
            ],
            "updateOrganizationGroup": [
                7,
                {
                    "id": [
                        423,
                        "ID!"
                    ],
                    "input": [
                        470,
                        "CreateOrganizationGroupInput!"
                    ]
                }
            ],
            "deleteOrganizationGroup": [
                2,
                {
                    "id": [
                        423,
                        "ID!"
                    ]
                }
            ],
            "setOrganizationMembership": [
                59,
                {
                    "input": [
                        471,
                        "SetOrganizationMembershipInput!"
                    ]
                }
            ],
            "deleteOrganizationMembership": [
                2,
                {
                    "input": [
                        472,
                        "DeleteOrganizationMembershipInput!"
                    ]
                }
            ],
            "createIdentityProvider": [
                144,
                {
                    "input": [
                        473,
                        "CreateOrganizationIdentityProvider!"
                    ]
                }
            ],
            "updateIdentityProvider": [
                144,
                {
                    "providerId": [
                        423,
                        "ID!"
                    ],
                    "input": [
                        476,
                        "UpdateOrganizationIdentityProvider!"
                    ]
                }
            ],
            "deleteIdentityProvider": [
                2,
                {
                    "id": [
                        423,
                        "ID!"
                    ]
                }
            ],
            "createOrganizationApp": [
                137,
                {
                    "input": [
                        477,
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
                        478,
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
                        479,
                        "AppManifestInput!"
                    ]
                }
            ],
            "createAppRelease": [
                133,
                {
                    "appId": [
                        423,
                        "ID!"
                    ],
                    "input": [
                        486,
                        "CreateAppReleaseInput!"
                    ]
                }
            ],
            "createWebhook": [
                150,
                {
                    "input": [
                        487,
                        "CreateWebhookInput!"
                    ]
                }
            ],
            "updateWebhook": [
                150,
                {
                    "id": [
                        423,
                        "ID!"
                    ],
                    "input": [
                        488,
                        "UpdateWebhookInput!"
                    ]
                }
            ],
            "deleteWebhook": [
                150,
                {
                    "id": [
                        423,
                        "ID!"
                    ]
                }
            ],
            "regenerateWebhookSecret": [
                150,
                {
                    "id": [
                        423,
                        "ID!"
                    ]
                }
            ],
            "setOrganizationAttachedApp": [
                141,
                {
                    "input": [
                        489,
                        "SetOrganizationAttachedAppInput!"
                    ]
                }
            ],
            "deleteOrganizationAttachedApp": [
                2,
                {
                    "input": [
                        490,
                        "DeleteOrganizationAttachedAppInput!"
                    ]
                }
            ],
            "emailSend": [
                2,
                {
                    "fromTemplate": [
                        491
                    ],
                    "fromCustom": [
                        492
                    ]
                }
            ],
            "emailConfigurationUpdate": [
                48,
                {
                    "input": [
                        408,
                        "EmailConfigurationInput!"
                    ]
                }
            ],
            "emailTemplateCreate": [
                105,
                {
                    "input": [
                        493,
                        "EmailTemplateCreateInput!"
                    ]
                }
            ],
            "emailTemplateUpdate": [
                105,
                {
                    "id": [
                        423,
                        "ID!"
                    ],
                    "input": [
                        494,
                        "EmailTemplateUpdateInput!"
                    ]
                }
            ],
            "emailTemplateDelete": [
                105,
                {
                    "id": [
                        423,
                        "ID!"
                    ]
                }
            ],
            "createPlayer": [
                77,
                {
                    "input": [
                        495,
                        "CreatePlayerInput!"
                    ]
                }
            ],
            "updatePlayer": [
                77,
                {
                    "input": [
                        497,
                        "UpdatePlayerInput!"
                    ],
                    "id": [
                        423
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
                        498,
                        "UpdateMePlayerInput!"
                    ]
                }
            ],
            "deletePlayer": [
                2,
                {
                    "id": [
                        423
                    ],
                    "customId": [
                        423
                    ]
                }
            ],
            "createTournament": [
                62,
                {
                    "input": [
                        499,
                        "CreateTournamentInput!"
                    ]
                }
            ],
            "updateTournament": [
                62,
                {
                    "input": [
                        502,
                        "UpdateTournamentInput!"
                    ],
                    "id": [
                        423,
                        "ID!"
                    ]
                }
            ],
            "deleteTournament": [
                2,
                {
                    "id": [
                        423,
                        "ID!"
                    ]
                }
            ],
            "startTournamentStep": [
                2,
                {
                    "stepId": [
                        423,
                        "ID!"
                    ]
                }
            ],
            "createTournamentStep": [
                166,
                {
                    "tournamentId": [
                        423,
                        "ID!"
                    ],
                    "configuration": [
                        398
                    ],
                    "step": [
                        503,
                        "CreateTournamentStepInput!"
                    ]
                }
            ],
            "updateTournamentStep": [
                166,
                {
                    "stepId": [
                        423,
                        "ID!"
                    ],
                    "configuration": [
                        398
                    ],
                    "step": [
                        503,
                        "CreateTournamentStepInput!"
                    ]
                }
            ],
            "deleteTournamentStep": [
                2,
                {
                    "stepId": [
                        423,
                        "ID!"
                    ]
                }
            ],
            "generateTournamentStep": [
                2,
                {
                    "stepId": [
                        423,
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
                        504,
                        "SeedStepInput!"
                    ]
                }
            ],
            "updateSeedingOrder": [
                166,
                {
                    "stepId": [
                        423,
                        "ID!"
                    ],
                    "orderedTeamIds": [
                        423,
                        "[ID!]!"
                    ]
                }
            ],
            "updateSeedingPins": [
                166,
                {
                    "stepId": [
                        423,
                        "ID!"
                    ],
                    "pins": [
                        505,
                        "[SeedingPinInput!]!"
                    ]
                }
            ],
            "withdrawTeamFromStep": [
                166,
                {
                    "stepId": [
                        423,
                        "ID!"
                    ],
                    "teamId": [
                        423,
                        "ID!"
                    ]
                }
            ],
            "reseedStep": [
                166,
                {
                    "stepId": [
                        423,
                        "ID!"
                    ]
                }
            ],
            "restartTournamentStep": [
                2,
                {
                    "stepId": [
                        423,
                        "ID!"
                    ]
                }
            ],
            "resetTournamentStepSeeding": [
                2,
                {
                    "stepId": [
                        423,
                        "ID!"
                    ]
                }
            ],
            "resetTournamentStep": [
                2,
                {
                    "stepId": [
                        423,
                        "ID!"
                    ]
                }
            ],
            "updateMatchScores": [
                153,
                {
                    "matchId": [
                        423,
                        "ID!"
                    ],
                    "input": [
                        506,
                        "[UpdateMatchScoreInput!]!"
                    ]
                }
            ],
            "registerCustomTournamentTeams": [
                162,
                {
                    "tournamentId": [
                        423,
                        "ID!"
                    ],
                    "input": [
                        508,
                        "RegisterCustomTeamsInput!"
                    ]
                }
            ],
            "registerTournamentTeam": [
                162,
                {
                    "tournamentId": [
                        423,
                        "ID!"
                    ],
                    "input": [
                        511,
                        "RegisterTournamentTeamInput!"
                    ]
                }
            ],
            "updateTournamentTeam": [
                162,
                {
                    "input": [
                        512,
                        "UpdateTournamentTeamInput!"
                    ],
                    "tournamentId": [
                        423
                    ],
                    "teamId": [
                        423
                    ]
                }
            ],
            "deleteTournamentTeam": [
                2,
                {
                    "tournamentId": [
                        423,
                        "ID!"
                    ]
                }
            ],
            "deleteAnyTournamentTeam": [
                2,
                {
                    "teamId": [
                        423,
                        "ID!"
                    ]
                }
            ],
            "confirmTournamentTeam": [
                162,
                {
                    "teamId": [
                        423,
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
                        423,
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
                        423,
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
                        423,
                        "ID!"
                    ],
                    "playerId": [
                        423,
                        "ID!"
                    ]
                }
            ],
            "answerToTournamentTeamInvite": [
                2,
                {
                    "teamId": [
                        423,
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
                        423,
                        "ID!"
                    ],
                    "playerId": [
                        423,
                        "ID!"
                    ]
                }
            ],
            "tournamentAdminUpsert": [
                181,
                {
                    "input": [
                        513,
                        "TournamentAdminUpsertInput!"
                    ]
                }
            ],
            "tournamentAdminDelete": [
                2,
                {
                    "input": [
                        514,
                        "TournamentAdminDeleteInput!"
                    ]
                }
            ],
            "createStepRuleSet": [
                202,
                {
                    "tournamentStepId": [
                        423,
                        "ID!"
                    ],
                    "input": [
                        515,
                        "CreateStepRuleSetInput!"
                    ]
                }
            ],
            "applyPresetScript": [
                202,
                {
                    "presetScriptId": [
                        423,
                        "ID!"
                    ],
                    "tournamentStepId": [
                        423,
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
                        423,
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
                        526,
                        "CreatePresetScriptInput!"
                    ]
                }
            ],
            "updatePresetScript": [
                205,
                {
                    "id": [
                        423,
                        "ID!"
                    ],
                    "input": [
                        528,
                        "UpdatePresetScriptInput!"
                    ]
                }
            ],
            "deletePresetScript": [
                2,
                {
                    "id": [
                        423,
                        "ID!"
                    ]
                }
            ],
            "setStepWinners": [
                166,
                {
                    "stepId": [
                        423,
                        "ID!"
                    ],
                    "teamIds": [
                        423,
                        "[ID!]!"
                    ]
                }
            ],
            "setTournamentWinners": [
                62,
                {
                    "tournamentId": [
                        423,
                        "ID!"
                    ],
                    "teamIds": [
                        423,
                        "[ID!]!"
                    ]
                }
            ],
            "setStepTeamStatus": [
                2,
                {
                    "stepId": [
                        423,
                        "ID!"
                    ],
                    "teamId": [
                        423,
                        "ID!"
                    ],
                    "status": [
                        230,
                        "TeamScopeStatus!"
                    ]
                }
            ],
            "validateStepRuleSet": [
                239,
                {
                    "stepRuleSetId": [
                        423,
                        "ID!"
                    ]
                }
            ],
            "cancelStepRuleSetValidation": [
                239,
                {
                    "jobId": [
                        423,
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
                        529,
                        "PlatformCdnFileCreateInput!"
                    ],
                    "platformId": [
                        423
                    ],
                    "templateId": [
                        423
                    ]
                }
            ],
            "platformFilePublish": [
                122,
                {
                    "id": [
                        423,
                        "ID!"
                    ]
                }
            ],
            "platformFileGenerateUploadUrl": [
                125,
                {
                    "id": [
                        423,
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
                        423,
                        "ID!"
                    ]
                }
            ],
            "platformFileUpdate": [
                122,
                {
                    "id": [
                        423,
                        "ID!"
                    ],
                    "input": [
                        530,
                        "PlatformFileUpdateInput!"
                    ]
                }
            ],
            "platformFileDelete": [
                462,
                {
                    "id": [
                        423,
                        "ID!"
                    ]
                }
            ],
            "platformCreate": [
                350,
                {
                    "input": [
                        531,
                        "CreatePlatformInput!"
                    ]
                }
            ],
            "platformUpdate": [
                350,
                {
                    "id": [
                        423,
                        "ID!"
                    ],
                    "input": [
                        532,
                        "UpdatePlatformInput!"
                    ]
                }
            ],
            "platformDelete": [
                462,
                {
                    "id": [
                        423,
                        "ID!"
                    ]
                }
            ],
            "platformThemeUpdate": [
                350,
                {
                    "platformId": [
                        423,
                        "ID!"
                    ],
                    "input": [
                        533,
                        "PlatformThemeInput!"
                    ]
                }
            ],
            "platformRegisterCustomDomain": [
                103,
                {
                    "platformId": [
                        423,
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
                462,
                {
                    "hostname": [
                        1,
                        "String!"
                    ]
                }
            ],
            "platformTemplateCreate": [
                351,
                {
                    "input": [
                        536,
                        "CreatePlatformTemplateInput!"
                    ]
                }
            ],
            "platformTemplateUpdate": [
                351,
                {
                    "id": [
                        423,
                        "ID!"
                    ],
                    "input": [
                        537,
                        "UpdatePlatformTemplateInput!"
                    ]
                }
            ],
            "platformTemplateApply": [
                350,
                {
                    "platformTemplateId": [
                        423,
                        "ID!"
                    ],
                    "platformId": [
                        423,
                        "ID!"
                    ]
                }
            ],
            "platformTemplateDelete": [
                462,
                {
                    "id": [
                        423,
                        "ID!"
                    ]
                }
            ],
            "organizationSubscriptionItemsUpdate": [
                462,
                {
                    "items": [
                        538,
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
                378,
                {
                    "organizationSkillRatingId": [
                        423,
                        "ID!"
                    ],
                    "input": [
                        539,
                        "OrganizationSkillRatingsRegisterMatchInput!"
                    ]
                }
            ],
            "organizationSkillRatingCreate": [
                379,
                {
                    "input": [
                        541,
                        "OrganizationSkillRatingCreateInput!"
                    ]
                }
            ],
            "organizationSkillRatingUpdate": [
                379,
                {
                    "id": [
                        423,
                        "ID!"
                    ],
                    "input": [
                        542,
                        "OrganizationSkillRatingUpdateInput!"
                    ]
                }
            ],
            "organizationSkillRatingDelete": [
                462,
                {
                    "id": [
                        423,
                        "ID!"
                    ]
                }
            ],
            "eventCreate": [
                274,
                {
                    "input": [
                        543,
                        "EventCreateInput!"
                    ]
                }
            ],
            "eventUpdate": [
                274,
                {
                    "input": [
                        544,
                        "EventUpdateInput!"
                    ],
                    "id": [
                        423,
                        "ID!"
                    ]
                }
            ],
            "eventDelete": [
                2,
                {
                    "id": [
                        423,
                        "ID!"
                    ]
                }
            ],
            "eventTicketConfigurationCreate": [
                302,
                {
                    "input": [
                        545,
                        "EventTicketConfigurationCreateInput!"
                    ]
                }
            ],
            "eventTicketConfigurationUpdate": [
                302,
                {
                    "ticketConfigurationId": [
                        423,
                        "ID!"
                    ],
                    "input": [
                        546,
                        "EventTicketConfigurationUpdateInput!"
                    ]
                }
            ],
            "eventTicketConfigurationDelete": [
                302,
                {
                    "ticketConfigurationId": [
                        423,
                        "ID!"
                    ]
                }
            ],
            "eventReservationUpdateStatus": [
                282,
                {
                    "reservationId": [
                        423,
                        "ID!"
                    ],
                    "status": [
                        283,
                        "EventReservationStatus!"
                    ],
                    "confirmPaymentRefundOrCancel": [
                        2
                    ]
                }
            ],
            "eventReservationConfirmPresence": [
                282,
                {
                    "eventId": [
                        423,
                        "ID!"
                    ],
                    "confirmed": [
                        2,
                        "Boolean!"
                    ]
                }
            ],
            "eventReservationValidateAndPay": [
                288,
                {
                    "eventId": [
                        423,
                        "ID!"
                    ],
                    "options": [
                        547,
                        "EventReservationValidateAndPayInput!"
                    ],
                    "ticketConfigurations": [
                        549,
                        "[EventReservationTicketConfigurationInput!]"
                    ]
                }
            ],
            "eventReservationCreate": [
                282,
                {
                    "eventId": [
                        423,
                        "ID!"
                    ]
                }
            ],
            "eventReservationUpdateTickets": [
                282,
                {
                    "reservationId": [
                        423,
                        "ID!"
                    ],
                    "input": [
                        550,
                        "EventReservationUpdateTicketsInput!"
                    ]
                }
            ],
            "eventReservationStartRegistrationSession": [
                282,
                {
                    "eventId": [
                        423,
                        "ID!"
                    ],
                    "input": [
                        552,
                        "EventReservationRegisterTicketsInput!"
                    ]
                }
            ],
            "eventReservationCancel": [
                282,
                {
                    "reservationId": [
                        423,
                        "ID!"
                    ]
                }
            ],
            "eventVenueRequestImageUpdate": [
                125,
                {
                    "id": [
                        423,
                        "ID!"
                    ],
                    "size": [
                        15,
                        "Float!"
                    ]
                }
            ],
            "eventVenueValidateImage": [
                298,
                {
                    "id": [
                        423,
                        "ID!"
                    ]
                }
            ],
            "eventVenueCreate": [
                298,
                {
                    "input": [
                        553,
                        "EventVenueCreateInput!"
                    ]
                }
            ],
            "eventVenueUpdate": [
                298,
                {
                    "id": [
                        423,
                        "ID!"
                    ],
                    "input": [
                        554,
                        "EventVenueUpdateInput!"
                    ]
                }
            ],
            "eventVenueDelete": [
                298,
                {
                    "id": [
                        423,
                        "ID!"
                    ]
                }
            ],
            "eventVenueSeatsUpdate": [
                267,
                {
                    "venueId": [
                        423,
                        "ID!"
                    ],
                    "input": [
                        555,
                        "EventVenueSeatsUpdateInput!"
                    ]
                }
            ],
            "eventVenueSeatTypeCreate": [
                294,
                {
                    "venueId": [
                        423,
                        "ID!"
                    ],
                    "input": [
                        558,
                        "EventVenueSeatTypeCreateInput!"
                    ]
                }
            ],
            "eventVenueSeatTypeUpdate": [
                294,
                {
                    "id": [
                        423,
                        "ID!"
                    ],
                    "input": [
                        559,
                        "EventVenueSeatTypeUpdateInput!"
                    ]
                }
            ],
            "eventVenueSeatTypeDelete": [
                294,
                {
                    "id": [
                        423,
                        "ID!"
                    ]
                }
            ],
            "organizationPaymentCollectionConfigurationCreateOrUpdateAccount": [
                1
            ],
            "userGroupInvite": [
                256,
                {
                    "groupId": [
                        423,
                        "ID!"
                    ],
                    "playerId": [
                        423,
                        "ID!"
                    ]
                }
            ],
            "userGroupUpdateInvite": [
                256,
                {
                    "groupId": [
                        423,
                        "ID!"
                    ],
                    "status": [
                        257,
                        "UserGroupMemberStatus!"
                    ]
                }
            ],
            "userGroupDeleteInvite": [
                256,
                {
                    "groupId": [
                        423,
                        "ID!"
                    ],
                    "playerId": [
                        423
                    ]
                }
            ],
            "shopCreate": [
                371,
                {
                    "input": [
                        560,
                        "ShopCreateInput!"
                    ]
                }
            ],
            "shopUpdate": [
                371,
                {
                    "id": [
                        423,
                        "ID!"
                    ],
                    "input": [
                        561,
                        "ShopUpdateInput!"
                    ]
                }
            ],
            "shopDelete": [
                371,
                {
                    "id": [
                        423,
                        "ID!"
                    ]
                }
            ],
            "shopCategoryCreate": [
                361,
                {
                    "input": [
                        562,
                        "ShopCategoryCreateInput!"
                    ]
                }
            ],
            "shopCategoryUpdate": [
                361,
                {
                    "id": [
                        423,
                        "ID!"
                    ],
                    "input": [
                        563,
                        "ShopCategoryUpdateInput!"
                    ]
                }
            ],
            "shopCategoryDelete": [
                361,
                {
                    "id": [
                        423,
                        "ID!"
                    ]
                }
            ],
            "playerShopProductPurshase": [
                357,
                {
                    "shopId": [
                        423,
                        "ID!"
                    ],
                    "paymentConfig": [
                        564
                    ],
                    "input": [
                        565,
                        "PlayerShopProductPurshaseInput!"
                    ]
                }
            ],
            "shopProductCreate": [
                368,
                {
                    "shopId": [
                        423,
                        "ID!"
                    ],
                    "input": [
                        567,
                        "ShopProductCreateInput!"
                    ]
                }
            ],
            "shopProductUpdate": [
                368,
                {
                    "productId": [
                        423,
                        "ID!"
                    ],
                    "input": [
                        568,
                        "ShopProductUpdateInput!"
                    ]
                }
            ],
            "shopProductDelete": [
                368,
                {
                    "productId": [
                        423,
                        "ID!"
                    ]
                }
            ],
            "itemCreate": [
                304,
                {
                    "input": [
                        569,
                        "ItemCreateInput!"
                    ]
                }
            ],
            "itemUpdate": [
                304,
                {
                    "id": [
                        423,
                        "ID!"
                    ],
                    "input": [
                        570,
                        "ItemUpdateInput!"
                    ]
                }
            ],
            "itemDelete": [
                304,
                {
                    "id": [
                        423,
                        "ID!"
                    ]
                }
            ],
            "playerItemsUpdate": [
                307,
                {
                    "playerId": [
                        423,
                        "ID!"
                    ],
                    "input": [
                        571,
                        "PlayerItemsUpdateInput!"
                    ]
                }
            ],
            "itemCategoryCreate": [
                310,
                {
                    "input": [
                        573,
                        "ItemCategoryCreateInput!"
                    ]
                }
            ],
            "itemCategoryUpdate": [
                310,
                {
                    "id": [
                        423,
                        "ID!"
                    ],
                    "input": [
                        574,
                        "ItemCategoryUpdateInput!"
                    ]
                }
            ],
            "itemCategoryDelete": [
                310,
                {
                    "id": [
                        423,
                        "ID!"
                    ]
                }
            ],
            "currencyCreate": [
                249,
                {
                    "input": [
                        575,
                        "CurrencyCreateInput!"
                    ]
                }
            ],
            "currencyUpdate": [
                249,
                {
                    "id": [
                        423,
                        "ID!"
                    ],
                    "input": [
                        576,
                        "CurrencyUpdateInput!"
                    ]
                }
            ],
            "currencyDelete": [
                249,
                {
                    "id": [
                        423,
                        "ID!"
                    ]
                }
            ],
            "playerCurrencyUpdate": [
                252,
                {
                    "playerId": [
                        423,
                        "ID!"
                    ],
                    "input": [
                        577,
                        "[PlayerCurrencyUpdateInput!]!"
                    ]
                }
            ],
            "publishMarketplaceApp": [
                317,
                {
                    "input": [
                        579,
                        "PublishMarketplaceAppInput!"
                    ]
                }
            ],
            "updateMarketplaceApp": [
                317,
                {
                    "id": [
                        423,
                        "ID!"
                    ],
                    "input": [
                        580,
                        "UpdateMarketplaceAppInput!"
                    ]
                }
            ],
            "installMarketplaceApp": [
                324,
                {
                    "input": [
                        581,
                        "InstallMarketplaceAppInput!"
                    ]
                }
            ],
            "uninstallMarketplaceApp": [
                2,
                {
                    "marketplaceAppId": [
                        423,
                        "ID!"
                    ]
                }
            ],
            "submitMarketplaceAppReview": [
                321,
                {
                    "input": [
                        582,
                        "SubmitMarketplaceAppReviewInput!"
                    ]
                }
            ],
            "setMarketplaceAppPricing": [
                329,
                {
                    "input": [
                        583,
                        "SetMarketplaceAppPricingInput!"
                    ]
                }
            ],
            "createMarketplaceCheckout": [
                1,
                {
                    "input": [
                        584,
                        "CreateMarketplaceCheckoutInput!"
                    ]
                }
            ],
            "appCreateRelease": [
                131,
                {
                    "marketplaceAppId": [
                        423,
                        "ID!"
                    ],
                    "input": [
                        585,
                        "AppCreateReleaseInput!"
                    ]
                }
            ],
            "appFinalizeRelease": [
                132,
                {
                    "releaseId": [
                        423,
                        "ID!"
                    ]
                }
            ],
            "appPublishRelease": [
                129,
                {
                    "releaseId": [
                        423,
                        "ID!"
                    ]
                }
            ],
            "platformModuleConfigSet": [
                332,
                {
                    "input": [
                        586,
                        "PlatformModuleConfigSetInput!"
                    ]
                }
            ],
            "platformModuleConfigDelete": [
                2,
                {
                    "input": [
                        588,
                        "PlatformModuleConfigDeleteInput!"
                    ]
                }
            ],
            "entityMetafieldSet": [
                335,
                {
                    "input": [
                        589,
                        "SetEntityMetafieldInput!"
                    ]
                }
            ],
            "entityMetafieldDelete": [
                2,
                {
                    "input": [
                        590,
                        "DeleteEntityMetafieldInput!"
                    ]
                }
            ],
            "setObjectMetadata": [
                336,
                {
                    "input": [
                        591,
                        "SetObjectMetadataInput!"
                    ]
                }
            ],
            "removeObjectMetadata": [
                2,
                {
                    "input": [
                        593,
                        "RemoveObjectMetadataInput!"
                    ]
                }
            ],
            "createCustomFieldDefinition": [
                342,
                {
                    "input": [
                        594,
                        "CreateCustomFieldDefinitionInput!"
                    ]
                }
            ],
            "updateCustomFieldDefinition": [
                342,
                {
                    "id": [
                        423,
                        "ID!"
                    ],
                    "input": [
                        596,
                        "UpdateCustomFieldDefinitionInput!"
                    ]
                }
            ],
            "deleteCustomFieldDefinition": [
                2,
                {
                    "id": [
                        423,
                        "ID!"
                    ]
                }
            ],
            "reorderCustomFieldDefinitions": [
                342,
                {
                    "objectType": [
                        339,
                        "ObjectType!"
                    ],
                    "orderedIds": [
                        423,
                        "[ID!]!"
                    ]
                }
            ],
            "setCustomFieldValues": [
                344,
                {
                    "input": [
                        597,
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
                398
            ],
            "tournamentConfiguration": [
                407
            ],
            "__typename": [
                1
            ]
        },
        "LeaderboardRegisterPlayerScoreInput": {
            "leaderboardId": [
                423
            ],
            "playerId": [
                423
            ],
            "score": [
                459
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
                468
            ],
            "__typename": [
                1
            ]
        },
        "OrganizationConfigurationInput": {
            "customFields": [
                390
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
                468
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
                389
            ],
            "__typename": [
                1
            ]
        },
        "SetOrganizationMembershipInput": {
            "userId": [
                423
            ],
            "email": [
                81
            ],
            "permissions": [
                389
            ],
            "groupId": [
                423
            ],
            "__typename": [
                1
            ]
        },
        "DeleteOrganizationMembershipInput": {
            "userId": [
                423
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
                423
            ],
            "name": [
                1
            ],
            "oauth2Configuration": [
                474
            ],
            "openidConfiguration": [
                475
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
                388
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
                388
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
                474
            ],
            "openidConfiguration": [
                475
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
                480
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
                482
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
                481
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
                483
            ],
            "events": [
                485
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
                484
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
                389
            ],
            "groupId": [
                423
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
                423
            ],
            "variables": [
                391
            ],
            "__typename": [
                1
            ]
        },
        "EmailSendFromCustomInput": {
            "emailField": [
                403
            ],
            "playerIds": [
                423
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
                423
            ],
            "organizationCustomId": [
                1
            ],
            "customFields": [
                496
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
                423
            ],
            "organizationCustomId": [
                1
            ],
            "customFields": [
                496
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
                496
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
                500
            ],
            "__typename": [
                1
            ]
        },
        "UpdateTournamentConfigurationOrImportFromIdInput": {
            "fromId": [
                423
            ],
            "configuration": [
                501
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
                406
            ],
            "customFields": [
                390
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
                500
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
                391
            ],
            "__typename": [
                1
            ]
        },
        "SeedStepInput": {
            "stepId": [
                423
            ],
            "orderedTeamIds": [
                423
            ],
            "pins": [
                505
            ],
            "__typename": [
                1
            ]
        },
        "SeedingPinInput": {
            "teamId": [
                423
            ],
            "groupId": [
                423
            ],
            "gameId": [
                423
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
                423
            ],
            "variables": [
                507
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
                509
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
                391
            ],
            "fromExistingTeamId": [
                423
            ],
            "members": [
                510
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
                423
            ],
            "player": [
                495
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
                391
            ],
            "fromExistingTeamId": [
                423
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
                391
            ],
            "__typename": [
                1
            ]
        },
        "TournamentAdminUpsertInput": {
            "id": [
                423
            ],
            "tournamentId": [
                423
            ],
            "accountId": [
                423
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
                423
            ],
            "tournamentId": [
                423
            ],
            "accountId": [
                423
            ],
            "__typename": [
                1
            ]
        },
        "CreateStepRuleSetInput": {
            "scoring": [
                516
            ],
            "advancementRules": [
                518
            ],
            "crossStepRules": [
                520
            ],
            "structureTemplate": [
                522
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
                517
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
                519
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
                423
            ],
            "sourceRelative": [
                200
            ],
            "dataSource": [
                201
            ],
            "usage": [
                521
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
                523
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
                524
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
                525
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
                527
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
                527
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
                410
            ],
            "__typename": [
                1
            ]
        },
        "PlatformFileUpdateInput": {
            "config": [
                410
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
                418
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
                418
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
                534
            ],
            "sections": [
                535
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
                423
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
                540
            ],
            "__typename": [
                1
            ]
        },
        "OrganizationSkillRatingsRegisterMatchTeamInput": {
            "players": [
                423
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
                380
            ],
            "configuration": [
                422
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
                380
            ],
            "configuration": [
                422
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
                414
            ],
            "eventVenueId": [
                423
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
                414
            ],
            "eventVenueId": [
                423
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
                303
            ],
            "maxCount": [
                15
            ],
            "buyable": [
                2
            ],
            "eventId": [
                423
            ],
            "seatTypeId": [
                423
            ],
            "configuration": [
                417
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
                303
            ],
            "maxCount": [
                15
            ],
            "buyable": [
                2
            ],
            "seatTypeId": [
                423
            ],
            "configuration": [
                417
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
                548
            ],
            "__typename": [
                1
            ]
        },
        "StripeUiMode": {},
        "EventReservationTicketConfigurationInput": {
            "ticketId": [
                423
            ],
            "customFields": [
                391
            ],
            "__typename": [
                1
            ]
        },
        "EventReservationUpdateTicketsInput": {
            "ticketIdsToRelease": [
                423
            ],
            "ticketIdsToAdd": [
                551
            ],
            "ticketConfigurations": [
                549
            ],
            "__typename": [
                1
            ]
        },
        "EventReservationRegisterTicketInput": {
            "ticketConfigurationId": [
                423
            ],
            "quantity": [
                15
            ],
            "reservedSeats": [
                423
            ],
            "__typename": [
                1
            ]
        },
        "EventReservationRegisterTicketsInput": {
            "tickets": [
                551
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
                556
            ],
            "createSeats": [
                557
            ],
            "deleteSeats": [
                423
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
                413
            ],
            "seatTypeId": [
                423
            ],
            "id": [
                423
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
                413
            ],
            "seatTypeId": [
                423
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
                415
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
                415
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
                391
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
                391
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
                391
            ],
            "shopId": [
                423
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
                391
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
                548
            ],
            "__typename": [
                1
            ]
        },
        "PlayerShopProductPurshaseInput": {
            "items": [
                566
            ],
            "__typename": [
                1
            ]
        },
        "PlayerShopProductPurshaseItemInput": {
            "shopProductId": [
                423
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
                423
            ],
            "price": [
                15
            ],
            "configuration": [
                419
            ],
            "metadata": [
                391
            ],
            "visibleAt": [
                9
            ],
            "currency": [
                303
            ],
            "items": [
                421
            ],
            "currencyPrices": [
                420
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
                423
            ],
            "price": [
                15
            ],
            "configuration": [
                419
            ],
            "metadata": [
                391
            ],
            "visibleAt": [
                9
            ],
            "currency": [
                303
            ],
            "items": [
                421
            ],
            "currencyPrices": [
                420
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
                391
            ],
            "categoryId": [
                423
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
                391
            ],
            "categoryId": [
                423
            ],
            "__typename": [
                1
            ]
        },
        "PlayerItemsUpdateInput": {
            "items": [
                572
            ],
            "__typename": [
                1
            ]
        },
        "PlayerItemsUpdateItemInput": {
            "itemId": [
                423
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
                391
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
                391
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
                391
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
                391
            ],
            "__typename": [
                1
            ]
        },
        "PlayerCurrencyUpdateInput": {
            "items": [
                578
            ],
            "__typename": [
                1
            ]
        },
        "PlayerCurrencyUpdateItemInput": {
            "currencyId": [
                423
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
                423
            ],
            "manifest": [
                479
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
                479
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
                423
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
                423
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
                423
            ],
            "type": [
                330
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
                423
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
                479
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
                423
            ],
            "marketplaceAppId": [
                423
            ],
            "moduleName": [
                1
            ],
            "props": [
                587
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
                423
            ],
            "marketplaceAppId": [
                423
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
                423
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
                423
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
                339
            ],
            "objectId": [
                423
            ],
            "entries": [
                592
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
                337
            ],
            "visibility": [
                338
            ],
            "__typename": [
                1
            ]
        },
        "RemoveObjectMetadataInput": {
            "objectType": [
                339
            ],
            "objectId": [
                423
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
                339
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
                343
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
                595
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
                595
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
                339
            ],
            "objectId": [
                423
            ],
            "fields": [
                598
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
                239,
                {
                    "jobId": [
                        423,
                        "ID!"
                    ]
                }
            ],
            "validationEvents": [
                241,
                {
                    "jobId": [
                        423,
                        "ID!"
                    ]
                }
            ],
            "presenceUserConnected": [
                354
            ],
            "presenceUserDisconnected": [
                356
            ],
            "__typename": [
                1
            ]
        }
    }
}