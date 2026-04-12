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
        153,
        158,
        166,
        167,
        171,
        175,
        179,
        181,
        182,
        184,
        188,
        191,
        193,
        200,
        202,
        206,
        212,
        214,
        216,
        217,
        221,
        247,
        249,
        261,
        262,
        263,
        273,
        280,
        293,
        304,
        308,
        315,
        320,
        327,
        328,
        329,
        333,
        357,
        370,
        372,
        413,
        420,
        421,
        422,
        447,
        449,
        450,
        469,
        472,
        516,
        517,
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
                413
            ],
            "name": [
                1
            ],
            "permissions": [
                11
            ],
            "organizationId": [
                413
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
                413
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
                413
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
                413
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
                413
            ],
            "organizationId": [
                413
            ],
            "groupId": [
                413
            ],
            "memberId": [
                413
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
                413
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
                413
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
                413
            ],
            "tournamentSeriesId": [
                413
            ],
            "visibleAt": [
                9
            ],
            "teams": [
                162,
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
                165
            ],
            "createdBy": [
                80
            ],
            "myTeam": [
                161
            ],
            "teamScores": [
                164
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
                413
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
                413
            ],
            "ownerId": [
                413
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
                413
            ],
            "organizationIdentityProviderId": [
                413
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
                413
            ],
            "username": [
                1
            ],
            "description": [
                1
            ],
            "ownerId": [
                413
            ],
            "organizationCustomId": [
                413
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
                413
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
                        413,
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
                413
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
                413
            ],
            "organizationId": [
                413
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
                413
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
                413
            ],
            "playerProfileId": [
                413
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
                413
            ],
            "organizationId": [
                413
            ],
            "ownerId": [
                413
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
                413
            ],
            "leaderboardId": [
                413
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
                413
            ],
            "seasonId": [
                413
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
                413
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
                413
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
                413
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
                413
            ],
            "platformId": [
                413
            ],
            "platformTemplateId": [
                413
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
                413
            ],
            "marketplaceAppId": [
                413
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
                413
            ],
            "appId": [
                413
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
                413
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
                413
            ],
            "organizationId": [
                413
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
                413
            ],
            "appId": [
                413
            ],
            "installationId": [
                413
            ],
            "organizationId": [
                413
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
                413
            ],
            "groupId": [
                413
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
                413
            ],
            "identityProviderId": [
                413
            ],
            "configuration": [
                145
            ],
            "name": [
                1
            ],
            "organizationId": [
                413
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
                413
            ],
            "organizationId": [
                413
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
                413
            ],
            "playerProfileId": [
                413
            ],
            "ratingId": [
                413
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
        "TournamentStepGroupRoundGameMatch": {
            "id": [
                413
            ],
            "order": [
                15
            ],
            "status": [
                153
            ],
            "tournamentStepGroupRoundGameId": [
                413
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
                155
            ],
            "nodes": [
                152
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
                152
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
                413
            ],
            "status": [
                158
            ],
            "tournamentTeamId": [
                413
            ],
            "playerProfileId": [
                413
            ],
            "createdAt": [
                9
            ],
            "updatedAt": [
                9
            ],
            "team": [
                161
            ],
            "__typename": [
                1
            ]
        },
        "TournamentTeamMemberStatus": {},
        "TeamMembers": {
            "edges": [
                160
            ],
            "nodes": [
                157
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
                157
            ],
            "__typename": [
                1
            ]
        },
        "TournamentTeam": {
            "id": [
                413
            ],
            "name": [
                1
            ],
            "tag": [
                1
            ],
            "teamId": [
                413
            ],
            "managerId": [
                413
            ],
            "tournamentId": [
                413
            ],
            "status": [
                64
            ],
            "createdAt": [
                9
            ],
            "updatedAt": [
                9
            ],
            "members": [
                157
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
                163
            ],
            "nodes": [
                161
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
                161
            ],
            "__typename": [
                1
            ]
        },
        "TournamentTeamScore": {
            "teamId": [
                413
            ],
            "score": [
                15
            ],
            "team": [
                161
            ],
            "__typename": [
                1
            ]
        },
        "TournamentStep": {
            "id": [
                413
            ],
            "tournamentId": [
                413
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
                166
            ],
            "status": [
                167
            ],
            "configuration": [
                28
            ],
            "createdAt": [
                9
            ],
            "updatedAt": [
                9
            ],
            "teamScores": [
                164
            ],
            "tournament": [
                62
            ],
            "__typename": [
                1
            ]
        },
        "StepType": {},
        "StepStatus": {},
        "Tournaments": {
            "edges": [
                169
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
                413
            ],
            "configuration": [
                24
            ],
            "status": [
                171
            ],
            "order": [
                15
            ],
            "tournamentStepGroupRoundId": [
                413
            ],
            "winningGameId": [
                413
            ],
            "losingGameId": [
                413
            ],
            "createdAt": [
                9
            ],
            "updatedAt": [
                9
            ],
            "matches": [
                152
            ],
            "__typename": [
                1
            ]
        },
        "TournamentGameStatus": {},
        "TournamentStepGroupRound": {
            "id": [
                413
            ],
            "name": [
                1
            ],
            "configuration": [
                26
            ],
            "tournamentStepGroupId": [
                413
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
                170
            ],
            "__typename": [
                1
            ]
        },
        "TournamentStepGroup": {
            "id": [
                413
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
                413
            ],
            "createdAt": [
                9
            ],
            "updatedAt": [
                9
            ],
            "rounds": [
                172
            ],
            "__typename": [
                1
            ]
        },
        "TournamentStepGroupRoundGameMatchScore": {
            "id": [
                413
            ],
            "matchId": [
                413
            ],
            "teamId": [
                413
            ],
            "score": [
                15
            ],
            "status": [
                175
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
                177
            ],
            "nodes": [
                174
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
                174
            ],
            "__typename": [
                1
            ]
        },
        "TournamentAdmin": {
            "id": [
                413
            ],
            "tournamentId": [
                413
            ],
            "accountId": [
                413
            ],
            "permissions": [
                179
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
        "RuleConditionModel": {
            "field": [
                1
            ],
            "operator": [
                181
            ],
            "value": [
                1
            ],
            "scope": [
                182
            ],
            "__typename": [
                1
            ]
        },
        "RuleConditionOperatorType": {},
        "ConditionScopeType": {},
        "GameRefModel": {
            "type": [
                184
            ],
            "id": [
                413
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
            "slot": [
                52
            ],
            "__typename": [
                1
            ]
        },
        "RefType": {},
        "GroupRefModel": {
            "type": [
                184
            ],
            "id": [
                413
            ],
            "groupIndex": [
                52
            ],
            "__typename": [
                1
            ]
        },
        "RoundRefModel": {
            "type": [
                184
            ],
            "id": [
                413
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
        "StepRefModel": {
            "type": [
                184
            ],
            "id": [
                413
            ],
            "relative": [
                188
            ],
            "__typename": [
                1
            ]
        },
        "StepRelativePosition": {},
        "MatchConfigVariableModel": {
            "formulaName": [
                1
            ],
            "displayName": [
                1
            ],
            "defaultValue": [
                15
            ],
            "__typename": [
                1
            ]
        },
        "MatchConfigRefModel": {
            "source": [
                191
            ],
            "variables": [
                189
            ],
            "scoreFormula": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "MatchConfigSource": {},
        "AutoGenerateConfigModel": {
            "type": [
                193
            ],
            "fromTeamCount": [
                52
            ],
            "__typename": [
                1
            ]
        },
        "AutoGenerateType": {},
        "TriggerScopeModel": {
            "gameId": [
                413
            ],
            "roundId": [
                413
            ],
            "groupId": [
                413
            ],
            "__typename": [
                1
            ]
        },
        "RuleEventDataModel": {
            "teamIds": [
                1
            ],
            "scores": [
                1
            ],
            "matchResult": [
                1
            ],
            "gameId": [
                1
            ],
            "roundId": [
                1
            ],
            "groupId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "ConditionEvaluationModel": {
            "field": [
                1
            ],
            "operator": [
                1
            ],
            "value": [
                1
            ],
            "scope": [
                1
            ],
            "result": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "ActionResultModel": {
            "action": [
                198
            ],
            "success": [
                2
            ],
            "teamId": [
                1
            ],
            "details": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "RuleAction": {
            "on_AdvanceToGameActionModel": [
                199
            ],
            "on_AdvanceToGroupActionModel": [
                201
            ],
            "on_AdvanceToStepActionModel": [
                203
            ],
            "on_EliminateActionModel": [
                204
            ],
            "on_GenerateNextRoundActionModel": [
                205
            ],
            "on_EndGameActionModel": [
                207
            ],
            "on_EndRoundActionModel": [
                208
            ],
            "on_EndGroupActionModel": [
                209
            ],
            "on_SetTeamPropertyActionModel": [
                210
            ],
            "__typename": [
                1
            ]
        },
        "AdvanceToGameActionModel": {
            "type": [
                200
            ],
            "target": [
                183
            ],
            "__typename": [
                1
            ]
        },
        "RuleActionType": {},
        "AdvanceToGroupActionModel": {
            "type": [
                200
            ],
            "target": [
                185
            ],
            "rankMapping": [
                202
            ],
            "__typename": [
                1
            ]
        },
        "RankMappingType": {},
        "AdvanceToStepActionModel": {
            "type": [
                200
            ],
            "target": [
                187
            ],
            "rankMapping": [
                202
            ],
            "__typename": [
                1
            ]
        },
        "EliminateActionModel": {
            "type": [
                200
            ],
            "__typename": [
                1
            ]
        },
        "GenerateNextRoundActionModel": {
            "type": [
                200
            ],
            "pairingStrategy": [
                206
            ],
            "gamesPerRound": [
                52
            ],
            "teamSlotsPerGame": [
                52
            ],
            "bestOf": [
                52
            ],
            "matchConfiguration": [
                190
            ],
            "__typename": [
                1
            ]
        },
        "PairingStrategyType": {},
        "EndGameActionModel": {
            "type": [
                200
            ],
            "scope": [
                183
            ],
            "__typename": [
                1
            ]
        },
        "EndRoundActionModel": {
            "type": [
                200
            ],
            "scope": [
                186
            ],
            "__typename": [
                1
            ]
        },
        "EndGroupActionModel": {
            "type": [
                200
            ],
            "scope": [
                185
            ],
            "__typename": [
                1
            ]
        },
        "SetTeamPropertyActionModel": {
            "type": [
                200
            ],
            "key": [
                1
            ],
            "formula": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "TiebreakerRuleModel": {
            "id": [
                413
            ],
            "order": [
                15
            ],
            "type": [
                1
            ],
            "formula": [
                1
            ],
            "sortOrder": [
                212
            ],
            "__typename": [
                1
            ]
        },
        "RuleSortOrder": {},
        "ScoringRuleSetModel": {
            "id": [
                413
            ],
            "aggregation": [
                214
            ],
            "formula": [
                1
            ],
            "winPoints": [
                15
            ],
            "lossPoints": [
                15
            ],
            "drawPoints": [
                15
            ],
            "forfeitPoints": [
                15
            ],
            "tiebreakers": [
                211
            ],
            "__typename": [
                1
            ]
        },
        "ScoreAggregationType": {},
        "AdvancementRuleModel": {
            "id": [
                413
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
            "triggerType": [
                216
            ],
            "triggerScope": [
                194
            ],
            "conditionOperator": [
                217
            ],
            "conditions": [
                180
            ],
            "actions": [
                198
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
            "__typename": [
                1
            ]
        },
        "RuleTriggerType": {},
        "ConditionOperator": {},
        "CrossStepRuleModel": {
            "id": [
                413
            ],
            "sourceStepId": [
                413
            ],
            "sourceRelative": [
                1
            ],
            "dataSource": [
                1
            ],
            "usage": [
                219
            ],
            "__typename": [
                1
            ]
        },
        "CrossStepUsage": {
            "on_SeedOrderUsageModel": [
                220
            ],
            "on_QualifyUsageModel": [
                222
            ],
            "on_InjectScoreUsageModel": [
                223
            ],
            "__typename": [
                1
            ]
        },
        "SeedOrderUsageModel": {
            "type": [
                221
            ],
            "__typename": [
                1
            ]
        },
        "CrossStepUsageType": {},
        "QualifyUsageModel": {
            "type": [
                221
            ],
            "condition": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "InjectScoreUsageModel": {
            "type": [
                221
            ],
            "formula": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "GameTemplateModel": {
            "id": [
                413
            ],
            "order": [
                15
            ],
            "teamSlots": [
                15
            ],
            "bestOf": [
                15
            ],
            "matchConfiguration": [
                190
            ],
            "onWinTarget": [
                183
            ],
            "onLossTarget": [
                183
            ],
            "__typename": [
                1
            ]
        },
        "RoundTemplateModel": {
            "id": [
                413
            ],
            "name": [
                1
            ],
            "order": [
                15
            ],
            "gameTemplates": [
                224
            ],
            "__typename": [
                1
            ]
        },
        "MatchConfigurationVariableModel": {
            "formulaName": [
                1
            ],
            "displayName": [
                1
            ],
            "defaultValue": [
                15
            ],
            "__typename": [
                1
            ]
        },
        "MatchConfigurationModel": {
            "variables": [
                226
            ],
            "scoreFormula": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "GroupTemplateModel": {
            "id": [
                413
            ],
            "name": [
                1
            ],
            "order": [
                15
            ],
            "teamSlots": [
                15
            ],
            "autoGenerate": [
                192
            ],
            "autoGenerateType": [
                193
            ],
            "teamSlotsPerGame": [
                52
            ],
            "bestOf": [
                52
            ],
            "roundCount": [
                52
            ],
            "matchConfiguration": [
                227
            ],
            "roundTemplates": [
                225
            ],
            "__typename": [
                1
            ]
        },
        "StructureTemplateModel": {
            "id": [
                413
            ],
            "groupTemplates": [
                228
            ],
            "__typename": [
                1
            ]
        },
        "StepRuleSetModel": {
            "id": [
                413
            ],
            "version": [
                15
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
                213
            ],
            "advancementRules": [
                215
            ],
            "crossStepRules": [
                218
            ],
            "structureTemplate": [
                229
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
        "RuleExecutionLogModel": {
            "id": [
                413
            ],
            "advancementRuleId": [
                413
            ],
            "ruleSetVersion": [
                15
            ],
            "triggerEventData": [
                195
            ],
            "conditionsEvaluated": [
                196
            ],
            "conditionsMet": [
                2
            ],
            "actionsExecuted": [
                197
            ],
            "manualOverride": [
                2
            ],
            "overrideBy": [
                413
            ],
            "createdAt": [
                9
            ],
            "__typename": [
                1
            ]
        },
        "RuleValidationErrorModel": {
            "path": [
                1
            ],
            "message": [
                1
            ],
            "line": [
                15
            ],
            "column": [
                15
            ],
            "__typename": [
                1
            ]
        },
        "RuleValidationResultModel": {
            "valid": [
                2
            ],
            "errors": [
                232
            ],
            "warnings": [
                232
            ],
            "__typename": [
                1
            ]
        },
        "PaginatedRuleExecutionLogs": {
            "edges": [
                235
            ],
            "nodes": [
                231
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
        "RuleExecutionLogModelEdge": {
            "cursor": [
                1
            ],
            "node": [
                231
            ],
            "__typename": [
                1
            ]
        },
        "SimulatedGameSnapshotModel": {
            "gameId": [
                1
            ],
            "groupIndex": [
                15
            ],
            "roundIndex": [
                15
            ],
            "gameIndex": [
                15
            ],
            "assignedTeamIds": [
                1
            ],
            "completed": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "SimulationStepModel": {
            "iteration": [
                15
            ],
            "event": [
                1
            ],
            "description": [
                1
            ],
            "teamsAdvanced": [
                1
            ],
            "teamsEliminated": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "SimulationResultModel": {
            "success": [
                2
            ],
            "steps": [
                237
            ],
            "warnings": [
                1
            ],
            "errors": [
                1
            ],
            "structureSnapshot": [
                236
            ],
            "__typename": [
                1
            ]
        },
        "Currency": {
            "id": [
                413
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
                413
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
                241
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
        "CurrencyEdge": {
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
        "PlayerCurrency": {
            "id": [
                413
            ],
            "playerProfileId": [
                413
            ],
            "currencyId": [
                413
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
                244
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
        "PlayerCurrencyEdge": {
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
                413
            ],
            "groupId": [
                413
            ],
            "playerProfileId": [
                413
            ],
            "status": [
                247
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
                413
            ],
            "organizationId": [
                413
            ],
            "managerId": [
                413
            ],
            "createdAt": [
                9
            ],
            "updatedAt": [
                9
            ],
            "status": [
                249
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
                251
            ],
            "nodes": [
                248
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
                248
            ],
            "__typename": [
                1
            ]
        },
        "UserGroupMembers": {
            "edges": [
                253
            ],
            "nodes": [
                246
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
                246
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
                254
            ],
            "__typename": [
                1
            ]
        },
        "EventVenueSeat": {
            "id": [
                413
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
                255
            ],
            "seatTypeId": [
                413
            ],
            "__typename": [
                1
            ]
        },
        "EventVenueSeatsUpdateResult": {
            "updatedSeats": [
                256
            ],
            "createdSeats": [
                256
            ],
            "deletedSeats": [
                256
            ],
            "__typename": [
                1
            ]
        },
        "EventVenueSeats": {
            "edges": [
                259
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
        "EventVenueSeatEdge": {
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
        "EventConfiguration": {
            "customFields": [
                16
            ],
            "groupConfiguration": [
                245
            ],
            "maxTicketsPerReservation": [
                15
            ],
            "reservationStatusAfterPayment": [
                261
            ],
            "reservationStatusAfterRegistration": [
                262
            ],
            "sessionDuration": [
                15
            ],
            "allowForNewSessionAfterTimeout": [
                2
            ],
            "seatAssignmentMode": [
                263
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
                413
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
                260
            ],
            "eventVenueId": [
                413
            ],
            "organizationId": [
                413
            ],
            "createdById": [
                413
            ],
            "decryptionKey": [
                1
            ],
            "venue": [
                288
            ],
            "__typename": [
                1
            ]
        },
        "EventInterface": {
            "id": [
                413
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
                260
            ],
            "eventVenueId": [
                413
            ],
            "organizationId": [
                413
            ],
            "createdById": [
                413
            ],
            "decryptionKey": [
                1
            ],
            "venue": [
                288
            ],
            "on_Event": [
                264
            ],
            "on_EventWithUserReservation": [
                266
            ],
            "__typename": [
                1
            ]
        },
        "EventWithUserReservation": {
            "id": [
                413
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
                260
            ],
            "eventVenueId": [
                413
            ],
            "organizationId": [
                413
            ],
            "createdById": [
                413
            ],
            "decryptionKey": [
                1
            ],
            "venue": [
                288
            ],
            "myReservation": [
                274
            ],
            "__typename": [
                1
            ]
        },
        "Events": {
            "edges": [
                268
            ],
            "nodes": [
                264
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
                264
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
                413
            ],
            "ticketId": [
                413
            ],
            "reservationId": [
                413
            ],
            "groupMemberId": [
                413
            ],
            "seatId": [
                413
            ],
            "createdAt": [
                9
            ],
            "updatedAt": [
                9
            ],
            "configuration": [
                269
            ],
            "__typename": [
                1
            ]
        },
        "EventReservationTicketWithQrCode": {
            "id": [
                413
            ],
            "ticketId": [
                413
            ],
            "reservationId": [
                413
            ],
            "groupMemberId": [
                413
            ],
            "seatId": [
                413
            ],
            "createdAt": [
                9
            ],
            "updatedAt": [
                9
            ],
            "configuration": [
                269
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
                413
            ],
            "name": [
                1
            ],
            "status": [
                273
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
                413
            ],
            "groupId": [
                413
            ],
            "tickets": [
                270
            ],
            "groupStatus": [
                249
            ],
            "__typename": [
                1
            ]
        },
        "EventReservationStatus": {},
        "EventReservationWithTicketsAndQrCode": {
            "id": [
                413
            ],
            "name": [
                1
            ],
            "status": [
                273
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
                413
            ],
            "groupId": [
                413
            ],
            "groupStatus": [
                249
            ],
            "tickets": [
                271
            ],
            "__typename": [
                1
            ]
        },
        "EventReservations": {
            "edges": [
                276
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
        "OmitObjectTypeEdge": {
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
        "OmitObjectType": {
            "id": [
                413
            ],
            "name": [
                1
            ],
            "status": [
                273
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
                413
            ],
            "groupId": [
                413
            ],
            "groupStatus": [
                249
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
                413
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
                255
            ],
            "seatTypeId": [
                413
            ],
            "status": [
                280
            ],
            "reservedByTicketId": [
                413
            ],
            "reservedByReservationId": [
                413
            ],
            "reservedByGroupMemberId": [
                413
            ],
            "__typename": [
                1
            ]
        },
        "EventSeatStatus": {},
        "EventSeats": {
            "edges": [
                282
            ],
            "nodes": [
                279
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
                279
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
                413
            ],
            "name": [
                1
            ],
            "description": [
                1
            ],
            "configuration": [
                283
            ],
            "createdAt": [
                9
            ],
            "updatedAt": [
                9
            ],
            "venueId": [
                413
            ],
            "__typename": [
                1
            ]
        },
        "EventVenueSeatTypes": {
            "edges": [
                286
            ],
            "nodes": [
                284
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
                284
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
                413
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
                287
            ],
            "organizationId": [
                413
            ],
            "__typename": [
                1
            ]
        },
        "EventVenues": {
            "edges": [
                290
            ],
            "nodes": [
                288
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
                288
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
                413
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
                293
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
                413
            ],
            "seatTypeId": [
                413
            ],
            "configuration": [
                291
            ],
            "__typename": [
                1
            ]
        },
        "ShopCurrencies": {},
        "Item": {
            "id": [
                413
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
                413
            ],
            "categoryId": [
                413
            ],
            "__typename": [
                1
            ]
        },
        "Items": {
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
        "ItemEdge": {
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
        "PlayerItem": {
            "id": [
                413
            ],
            "playerProfileId": [
                413
            ],
            "itemId": [
                413
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
        "PlayerItemEdge": {
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
        "ItemCategory": {
            "id": [
                413
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
                413
            ],
            "__typename": [
                1
            ]
        },
        "ItemCategories": {
            "edges": [
                302
            ],
            "nodes": [
                300
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
                300
            ],
            "__typename": [
                1
            ]
        },
        "Log": {
            "id": [
                413
            ],
            "type": [
                304
            ],
            "resourceId": [
                413
            ],
            "data": [
                54
            ],
            "organizationId": [
                413
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
                306
            ],
            "nodes": [
                303
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
                303
            ],
            "__typename": [
                1
            ]
        },
        "MarketplaceApp": {
            "id": [
                413
            ],
            "organizationAppId": [
                413
            ],
            "status": [
                308
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
                312,
                {
                    "page": [
                        63
                    ]
                }
            ],
            "stats": [
                318
            ],
            "installation": [
                314
            ],
            "pricing": [
                319
            ],
            "__typename": [
                1
            ]
        },
        "MarketplaceAppStatus": {},
        "MarketplaceApps": {
            "edges": [
                310
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
        "MarketplaceAppEdge": {
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
        "MarketplaceAppReview": {
            "id": [
                413
            ],
            "marketplaceAppId": [
                413
            ],
            "organizationId": [
                413
            ],
            "accountId": [
                413
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
                313
            ],
            "nodes": [
                311
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
                311
            ],
            "__typename": [
                1
            ]
        },
        "MarketplaceAppInstallation": {
            "id": [
                413
            ],
            "marketplaceAppId": [
                413
            ],
            "organizationId": [
                413
            ],
            "installedById": [
                413
            ],
            "status": [
                315
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
                307
            ],
            "__typename": [
                1
            ]
        },
        "MarketplaceInstallationStatus": {},
        "MarketplaceAppInstallations": {
            "edges": [
                317
            ],
            "nodes": [
                314
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
                314
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
                413
            ],
            "marketplaceAppId": [
                413
            ],
            "type": [
                320
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
                413
            ],
            "platformId": [
                413
            ],
            "marketplaceAppId": [
                413
            ],
            "moduleName": [
                1
            ],
            "props": [
                321
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
                413
            ],
            "marketplaceAppId": [
                413
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
                413
            ],
            "appId": [
                413
            ],
            "__typename": [
                1
            ]
        },
        "EntityMetafield": {
            "id": [
                413
            ],
            "organizationId": [
                413
            ],
            "appId": [
                413
            ],
            "namespace": [
                1
            ],
            "entityType": [
                1
            ],
            "entityId": [
                413
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
                327
            ],
            "visibility": [
                328
            ],
            "objectType": [
                329
            ],
            "objectId": [
                413
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
                413
            ],
            "entries": [
                326
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
                413
            ],
            "objectType": [
                329
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
                333
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
                331
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
                332
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
                413
            ],
            "fields": [
                334
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
                413
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
                339
            ],
            "organizationId": [
                413
            ],
            "appId": [
                1
            ],
            "customDomains": [
                336
            ],
            "__typename": [
                1
            ]
        },
        "PlatformTemplate": {
            "id": [
                413
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
                413
            ],
            "organizationId": [
                413
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
                413
            ],
            "serverId": [
                413
            ],
            "playerId": [
                413
            ],
            "accountId": [
                413
            ],
            "organizationId": [
                413
            ],
            "__typename": [
                1
            ]
        },
        "UsersConnectedEvent": {
            "usersConnected": [
                343
            ],
            "__typename": [
                1
            ]
        },
        "UserDisconnectEvent": {
            "sessionId": [
                413
            ],
            "serverId": [
                413
            ],
            "playerId": [
                413
            ],
            "accountId": [
                413
            ],
            "organizationId": [
                413
            ],
            "__typename": [
                1
            ]
        },
        "UsersDisconnectedEvent": {
            "usersDisconnected": [
                345
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
                413
            ],
            "playerProfileId": [
                413
            ],
            "shopProductId": [
                413
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
                350
            ],
            "nodes": [
                348
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
                348
            ],
            "__typename": [
                1
            ]
        },
        "ShopCategory": {
            "id": [
                413
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
                413
            ],
            "__typename": [
                1
            ]
        },
        "ShopCategories": {
            "edges": [
                353
            ],
            "nodes": [
                351
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
                351
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
                413
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
                357
            ],
            "id": [
                413
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
                413
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
                413
            ],
            "price": [
                15
            ],
            "configuration": [
                354
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
                413
            ],
            "currency": [
                293
            ],
            "items": [
                356
            ],
            "currencyPrices": [
                355
            ],
            "__typename": [
                1
            ]
        },
        "ShopProducts": {
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
        "ShopProductEdge": {
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
        "Shop": {
            "id": [
                413
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
                413
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
        "ShopEdge": {
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
        "ShopProductItem": {
            "id": [
                413
            ],
            "currencyId": [
                413
            ],
            "createdAt": [
                9
            ],
            "updatedAt": [
                9
            ],
            "type": [
                357
            ],
            "shopItemId": [
                413
            ],
            "itemId": [
                413
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
        "ShopProductItemEdge": {
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
        "SkillRatingConfiguration": {
            "updateLeaderboardId": [
                413
            ],
            "__typename": [
                1
            ]
        },
        "OrganizationSkillRatingsRegisterMatchPlayer": {
            "id": [
                413
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
                413
            ],
            "name": [
                1
            ],
            "description": [
                1
            ],
            "type": [
                370
            ],
            "configuration": [
                367
            ],
            "organizationId": [
                413
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
                372
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
                413
            ],
            "name": [
                1
            ],
            "description": [
                1
            ],
            "limitsOverride": [
                371
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
                413
            ],
            "subscriptionItemId": [
                413
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
                373
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
                375
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
                377
            ],
            "mappingConfiguration": [
                376
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
                382
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
                383
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
                384
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
                386
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
                387
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
                413
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
                389
            ],
            "stringCondition": [
                391
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
                413
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
                413
            ],
            "condition": [
                392
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
                391
            ],
            "numericCondition": [
                390
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
                395
            ],
            "memberConditions": [
                394
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
                396
            ],
            "customFields": [
                380
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
                393
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
                399
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
                402
            ],
            "__typename": [
                1
            ]
        },
        "EventConfigurationInput": {
            "customFields": [
                380
            ],
            "groupConfiguration": [
                401
            ],
            "maxTicketsPerReservation": [
                15
            ],
            "reservationStatusAfterPayment": [
                261
            ],
            "reservationStatusAfterRegistration": [
                262
            ],
            "sessionDuration": [
                15
            ],
            "allowForNewSessionAfterTimeout": [
                2
            ],
            "seatAssignmentMode": [
                263
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
                380
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
                413
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
                357
            ],
            "id": [
                413
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
                413
            ],
            "__typename": [
                1
            ]
        },
        "ID": {},
        "Query": {
            "logs": [
                305,
                {
                    "page": [
                        63
                    ],
                    "resourceId": [
                        413
                    ],
                    "types": [
                        304,
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
                        413,
                        "ID!"
                    ]
                }
            ],
            "leaderboardCurrentPlayerRanking": [
                85,
                {
                    "input": [
                        415,
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
                        413,
                        "ID!"
                    ]
                }
            ],
            "currentLeaderboardSeason": [
                91,
                {
                    "leaderboardId": [
                        413,
                        "ID!"
                    ]
                }
            ],
            "leaderboardSeasons": [
                92,
                {
                    "leaderboardId": [
                        413,
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
                        413,
                        "ID!"
                    ]
                }
            ],
            "leaderboardSeasonBuckets": [
                96,
                {
                    "seasonId": [
                        413,
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
                        413,
                        "ID!"
                    ]
                }
            ],
            "leaderboardSeasonBucketScores": [
                86,
                {
                    "leaderboardSeasonBucketId": [
                        413,
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
                        413,
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
                        372,
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
                        413,
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
                416
            ],
            "identityProvider": [
                144,
                {
                    "id": [
                        413,
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
                        413,
                        "ID!"
                    ]
                }
            ],
            "appRelease": [
                133,
                {
                    "id": [
                        413,
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
                        413,
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
                        413,
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
                        413,
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
                        413,
                        "[ID!]"
                    ],
                    "page": [
                        63,
                        "PageInfo!"
                    ],
                    "identityProviders": [
                        413,
                        "[ID!]"
                    ],
                    "identityProviderProperties": [
                        1,
                        "[String!]"
                    ],
                    "query": [
                        418
                    ]
                }
            ],
            "player": [
                77,
                {
                    "id": [
                        413
                    ],
                    "ownerId": [
                        413
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
                        413,
                        "ID!"
                    ],
                    "skillRatingIds": [
                        413,
                        "[ID!]"
                    ]
                }
            ],
            "playerMatchesHistory": [
                154,
                {
                    "page": [
                        63,
                        "PageInfo!"
                    ],
                    "playerId": [
                        413,
                        "ID!"
                    ]
                }
            ],
            "tournament": [
                62,
                {
                    "id": [
                        413,
                        "ID!"
                    ]
                }
            ],
            "tournaments": [
                168,
                {
                    "query": [
                        419,
                        "TournamentsQuery!"
                    ],
                    "page": [
                        63,
                        "PageInfo!"
                    ]
                }
            ],
            "tournamentSteps": [
                165,
                {
                    "tournamentId": [
                        413,
                        "ID!"
                    ]
                }
            ],
            "tournamentStep": [
                165,
                {
                    "id": [
                        413,
                        "ID!"
                    ]
                }
            ],
            "tournamentStepGeneratedShape": [
                173,
                {
                    "stepId": [
                        413,
                        "ID!"
                    ]
                }
            ],
            "match": [
                152,
                {
                    "matchId": [
                        413,
                        "ID!"
                    ]
                }
            ],
            "tournamentTeam": [
                161,
                {
                    "teamId": [
                        413,
                        "ID!"
                    ],
                    "memberStatus": [
                        158
                    ]
                }
            ],
            "tournamentTeams": [
                162,
                {
                    "tournamentId": [
                        413,
                        "ID!"
                    ],
                    "page": [
                        63,
                        "PageInfo!"
                    ],
                    "memberStatus": [
                        158
                    ],
                    "status": [
                        64
                    ],
                    "propertiesFilter": [
                        381,
                        "[PropertyValueInput!]"
                    ],
                    "playerUsernameQuery": [
                        1
                    ],
                    "playerPropertiesFilter": [
                        381,
                        "[PropertyValueInput!]"
                    ],
                    "playerIdentityProviderPropertiesFilter": [
                        424,
                        "[IdentityProviderPropertyInput!]"
                    ]
                }
            ],
            "tournamentPlayers": [
                159,
                {
                    "page": [
                        63,
                        "PageInfo!"
                    ],
                    "tournamentId": [
                        413,
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
                        381,
                        "[PropertyValueInput!]"
                    ],
                    "orderByProperty": [
                        425
                    ]
                }
            ],
            "tournamentTeamInvites": [
                159,
                {
                    "page": [
                        63,
                        "PageInfo!"
                    ],
                    "tournamentId": [
                        413
                    ],
                    "status": [
                        158
                    ]
                }
            ],
            "tournamentStepGroupRoundGameMatchScoresGetForStep": [
                176,
                {
                    "stepId": [
                        413,
                        "ID!"
                    ],
                    "page": [
                        63,
                        "PageInfo!"
                    ]
                }
            ],
            "tournamentAdmins": [
                178,
                {
                    "tournamentId": [
                        413,
                        "ID!"
                    ]
                }
            ],
            "stepRuleSet": [
                230,
                {
                    "stepId": [
                        413,
                        "ID!"
                    ]
                }
            ],
            "stepRuleExecutionLogs": [
                234,
                {
                    "stepId": [
                        413,
                        "ID!"
                    ],
                    "pageInfo": [
                        63,
                        "PageInfo!"
                    ]
                }
            ],
            "stepRuleSetValidate": [
                233,
                {
                    "input": [
                        426,
                        "CreateStepRuleSetInput!"
                    ]
                }
            ],
            "stepRuleSetSimulate": [
                238,
                {
                    "stepId": [
                        413,
                        "ID!"
                    ],
                    "teamCount": [
                        52,
                        "Int!"
                    ]
                }
            ],
            "rulePresets": [
                447
            ],
            "platformFiles": [
                122,
                {
                    "type": [
                        123
                    ],
                    "platformId": [
                        413
                    ],
                    "templateId": [
                        413
                    ]
                }
            ],
            "platformFile": [
                122,
                {
                    "id": [
                        413,
                        "ID!"
                    ]
                }
            ],
            "platforms": [
                340
            ],
            "platform": [
                340,
                {
                    "platformId": [
                        413,
                        "ID!"
                    ]
                }
            ],
            "platformFindFromDomain": [
                340,
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
                336,
                {
                    "platformId": [
                        413,
                        "ID!"
                    ]
                }
            ],
            "platformTemplatesPublic": [
                341
            ],
            "platformTemplates": [
                341
            ],
            "platformTemplate": [
                341,
                {
                    "platformTemplateId": [
                        413,
                        "ID!"
                    ]
                }
            ],
            "subscriptionItems": [
                373
            ],
            "organizationCurrentSubscriptionItems": [
                374
            ],
            "organizationSkillRatings": [
                369
            ],
            "organizationSkillRating": [
                369,
                {
                    "id": [
                        413,
                        "ID!"
                    ]
                }
            ],
            "event": [
                266,
                {
                    "id": [
                        413,
                        "ID!"
                    ]
                }
            ],
            "events": [
                267,
                {
                    "page": [
                        63,
                        "PageInfo!"
                    ],
                    "query": [
                        448
                    ],
                    "eventIds": [
                        413,
                        "[ID!]"
                    ]
                }
            ],
            "eventTicketConfiguration": [
                292,
                {
                    "id": [
                        413,
                        "ID!"
                    ]
                }
            ],
            "eventTicketConfigurations": [
                292,
                {
                    "eventId": [
                        413,
                        "ID!"
                    ]
                }
            ],
            "eventReservationsMyReservations": [
                275,
                {
                    "page": [
                        63,
                        "PageInfo!"
                    ],
                    "status": [
                        273
                    ],
                    "groupStatus": [
                        249
                    ],
                    "eventIds": [
                        413,
                        "[ID!]"
                    ]
                }
            ],
            "eventReservation": [
                272,
                {
                    "reservationId": [
                        413,
                        "ID!"
                    ]
                }
            ],
            "eventSeats": [
                281,
                {
                    "eventId": [
                        413,
                        "ID!"
                    ],
                    "page": [
                        63,
                        "PageInfo!"
                    ],
                    "eventVenueId": [
                        413
                    ],
                    "reservationIds": [
                        413,
                        "[ID!]"
                    ]
                }
            ],
            "eventReservations": [
                275,
                {
                    "eventId": [
                        413,
                        "ID!"
                    ],
                    "page": [
                        63,
                        "PageInfo!"
                    ],
                    "query": [
                        452,
                        "EventReservationsQueryInput!"
                    ]
                }
            ],
            "eventVenues": [
                289,
                {
                    "page": [
                        63,
                        "PageInfo!"
                    ]
                }
            ],
            "eventVenue": [
                288,
                {
                    "id": [
                        413,
                        "ID!"
                    ]
                }
            ],
            "eventVenueSeats": [
                258,
                {
                    "venueId": [
                        413,
                        "ID!"
                    ],
                    "page": [
                        63,
                        "PageInfo!"
                    ],
                    "seatTypeId": [
                        413
                    ]
                }
            ],
            "eventVenueSeatTypes": [
                285,
                {
                    "venueId": [
                        413,
                        "ID!"
                    ],
                    "page": [
                        63,
                        "PageInfo!"
                    ]
                }
            ],
            "organizationPaymentCollectionConfiguration": [
                156
            ],
            "userGroupMembers": [
                252,
                {
                    "groupIds": [
                        413,
                        "[ID!]!"
                    ],
                    "page": [
                        63,
                        "PageInfo!"
                    ],
                    "status": [
                        247
                    ]
                }
            ],
            "userGroups": [
                250,
                {
                    "query": [
                        454,
                        "UserGroupsQueryInput!"
                    ],
                    "page": [
                        63,
                        "PageInfo!"
                    ]
                }
            ],
            "userGroupMyMemberships": [
                252,
                {
                    "page": [
                        63,
                        "PageInfo!"
                    ],
                    "status": [
                        247
                    ],
                    "entityType": [
                        1
                    ],
                    "entityId": [
                        413
                    ]
                }
            ],
            "presenceAnalytics": [
                342
            ],
            "shops": [
                362,
                {
                    "page": [
                        63
                    ],
                    "filter": [
                        455
                    ]
                }
            ],
            "shopCategories": [
                352,
                {
                    "page": [
                        63
                    ],
                    "filter": [
                        456
                    ]
                }
            ],
            "playerShopProductPurshases": [
                349,
                {
                    "page": [
                        63
                    ],
                    "filter": [
                        457
                    ]
                }
            ],
            "shopProducts": [
                359,
                {
                    "shopId": [
                        413,
                        "ID!"
                    ],
                    "page": [
                        63
                    ],
                    "filter": [
                        458
                    ]
                }
            ],
            "shopProductItems": [
                365,
                {
                    "shopProductId": [
                        413,
                        "ID!"
                    ],
                    "page": [
                        63
                    ]
                }
            ],
            "items": [
                295,
                {
                    "page": [
                        63
                    ],
                    "filter": [
                        459
                    ]
                }
            ],
            "playerItems": [
                298,
                {
                    "page": [
                        63
                    ],
                    "filter": [
                        460
                    ]
                }
            ],
            "itemCategories": [
                301,
                {
                    "page": [
                        63
                    ],
                    "filter": [
                        461
                    ]
                }
            ],
            "currencies": [
                240,
                {
                    "page": [
                        63
                    ],
                    "filter": [
                        462
                    ]
                }
            ],
            "playerCurrencies": [
                243,
                {
                    "page": [
                        63
                    ],
                    "filter": [
                        463
                    ]
                }
            ],
            "marketplaceApps": [
                309,
                {
                    "page": [
                        63
                    ],
                    "filter": [
                        464
                    ]
                }
            ],
            "marketplaceApp": [
                307,
                {
                    "id": [
                        413,
                        "ID!"
                    ]
                }
            ],
            "myMarketplaceInstallations": [
                316,
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
                        413,
                        "ID!"
                    ]
                }
            ],
            "moduleTokensForPlatform": [
                323,
                {
                    "platformId": [
                        413,
                        "ID!"
                    ]
                }
            ],
            "extensionToken": [
                324,
                {
                    "installationId": [
                        413,
                        "ID!"
                    ]
                }
            ],
            "platformModuleConfigs": [
                322,
                {
                    "platformId": [
                        413,
                        "ID!"
                    ]
                }
            ],
            "entityMetafields": [
                325,
                {
                    "entityType": [
                        1,
                        "String!"
                    ],
                    "entityId": [
                        413,
                        "ID!"
                    ],
                    "filter": [
                        465
                    ]
                }
            ],
            "allowedObjectTypes": [
                329
            ],
            "objectMetadata": [
                326,
                {
                    "objectType": [
                        329,
                        "ObjectType!"
                    ],
                    "objectId": [
                        413,
                        "ID!"
                    ]
                }
            ],
            "objectMetadataBatch": [
                330,
                {
                    "objectType": [
                        329,
                        "ObjectType!"
                    ],
                    "objectIds": [
                        413,
                        "[ID!]!"
                    ]
                }
            ],
            "customFieldDefinitions": [
                332,
                {
                    "objectType": [
                        329,
                        "ObjectType!"
                    ]
                }
            ],
            "customFieldValues": [
                334,
                {
                    "objectType": [
                        329,
                        "ObjectType!"
                    ],
                    "objectId": [
                        413,
                        "ID!"
                    ]
                }
            ],
            "customFieldValuesBatch": [
                335,
                {
                    "objectType": [
                        329,
                        "ObjectType!"
                    ],
                    "objectIds": [
                        413,
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
                413
            ],
            "playerId": [
                413
            ],
            "seasonId": [
                413
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
                417
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
                413
            ],
            "name": [
                1
            ],
            "organizationId": [
                413
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
                420
            ],
            "orderDirection": [
                421
            ],
            "status": [
                422
            ],
            "showNotVisible": [
                2
            ],
            "filterByPlayers": [
                423
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
                413
            ],
            "teamStatus": [
                64
            ],
            "memberStatus": [
                158
            ],
            "__typename": [
                1
            ]
        },
        "IdentityProviderPropertyInput": {
            "identityProviderId": [
                413
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
                421
            ],
            "__typename": [
                1
            ]
        },
        "CreateStepRuleSetInput": {
            "scoring": [
                427
            ],
            "advancementRules": [
                429
            ],
            "crossStepRules": [
                439
            ],
            "structureTemplate": [
                441
            ],
            "__typename": [
                1
            ]
        },
        "CreateScoringInput": {
            "aggregation": [
                214
            ],
            "formula": [
                1
            ],
            "winPoints": [
                15
            ],
            "lossPoints": [
                15
            ],
            "drawPoints": [
                15
            ],
            "forfeitPoints": [
                15
            ],
            "tiebreakers": [
                428
            ],
            "__typename": [
                1
            ]
        },
        "CreateTiebreakerInput": {
            "order": [
                15
            ],
            "type": [
                1
            ],
            "formula": [
                1
            ],
            "sortOrder": [
                212
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
                15
            ],
            "triggerType": [
                216
            ],
            "triggerScope": [
                430
            ],
            "conditionOperator": [
                217
            ],
            "conditions": [
                431
            ],
            "actions": [
                432
            ],
            "autoExecute": [
                2
            ],
            "allowManualOverride": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "TriggerScopeInput": {
            "gameId": [
                413
            ],
            "roundId": [
                413
            ],
            "groupId": [
                413
            ],
            "__typename": [
                1
            ]
        },
        "RuleConditionInput": {
            "field": [
                1
            ],
            "operator": [
                181
            ],
            "value": [
                1
            ],
            "scope": [
                182
            ],
            "__typename": [
                1
            ]
        },
        "RuleActionInput": {
            "type": [
                200
            ],
            "gameTarget": [
                433
            ],
            "groupTarget": [
                434
            ],
            "stepTarget": [
                435
            ],
            "rankMapping": [
                202
            ],
            "pairingStrategy": [
                206
            ],
            "gamesPerRound": [
                52
            ],
            "teamSlotsPerGame": [
                52
            ],
            "bestOf": [
                52
            ],
            "matchConfiguration": [
                436
            ],
            "gameScope": [
                433
            ],
            "roundScope": [
                438
            ],
            "groupScope": [
                434
            ],
            "key": [
                1
            ],
            "formula": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "GameRefInput": {
            "type": [
                184
            ],
            "id": [
                413
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
            "slot": [
                52
            ],
            "__typename": [
                1
            ]
        },
        "GroupRefInput": {
            "type": [
                184
            ],
            "id": [
                413
            ],
            "groupIndex": [
                52
            ],
            "__typename": [
                1
            ]
        },
        "StepRefInput": {
            "type": [
                184
            ],
            "id": [
                413
            ],
            "relative": [
                188
            ],
            "__typename": [
                1
            ]
        },
        "MatchConfigRefInput": {
            "source": [
                191
            ],
            "variables": [
                437
            ],
            "scoreFormula": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "MatchConfigVariableInput": {
            "formulaName": [
                1
            ],
            "displayName": [
                1
            ],
            "defaultValue": [
                15
            ],
            "__typename": [
                1
            ]
        },
        "RoundRefInput": {
            "type": [
                184
            ],
            "id": [
                413
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
        "CreateCrossStepRuleInput": {
            "sourceStepId": [
                413
            ],
            "sourceRelative": [
                1
            ],
            "dataSource": [
                1
            ],
            "usage": [
                440
            ],
            "__typename": [
                1
            ]
        },
        "CrossStepUsageInput": {
            "type": [
                221
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
                442
            ],
            "__typename": [
                1
            ]
        },
        "CreateGroupTemplateInput": {
            "name": [
                1
            ],
            "order": [
                15
            ],
            "teamSlots": [
                15
            ],
            "autoGenerate": [
                443
            ],
            "autoGenerateType": [
                193
            ],
            "teamSlotsPerGame": [
                52
            ],
            "bestOf": [
                52
            ],
            "roundCount": [
                52
            ],
            "matchConfiguration": [
                444
            ],
            "roundTemplates": [
                445
            ],
            "__typename": [
                1
            ]
        },
        "AutoGenerateConfigInput": {
            "type": [
                193
            ],
            "fromTeamCount": [
                52
            ],
            "__typename": [
                1
            ]
        },
        "GroupMatchConfigInput": {
            "variables": [
                437
            ],
            "scoreFormula": [
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
                15
            ],
            "gameTemplates": [
                446
            ],
            "__typename": [
                1
            ]
        },
        "CreateGameTemplateInput": {
            "order": [
                15
            ],
            "teamSlots": [
                15
            ],
            "bestOf": [
                15
            ],
            "matchConfiguration": [
                436
            ],
            "onWinTarget": [
                433
            ],
            "onLossTarget": [
                433
            ],
            "__typename": [
                1
            ]
        },
        "RulePresetName": {},
        "EventsQuery": {
            "orderBy": [
                449
            ],
            "orderDirection": [
                421
            ],
            "status": [
                450
            ],
            "showNotVisible": [
                2
            ],
            "filterByPlayers": [
                451
            ],
            "__typename": [
                1
            ]
        },
        "EventsQueryOrderBy": {},
        "EventsQueryStatus": {},
        "EventsQueryPlayerIdWithTeamStatusInput": {
            "playerId": [
                413
            ],
            "reservationStatus": [
                273
            ],
            "memberStatus": [
                247
            ],
            "__typename": [
                1
            ]
        },
        "EventReservationsQueryInput": {
            "filterByRegistrationStatus": [
                273
            ],
            "retrieveOnlyGroupMembersWithStatus": [
                247
            ],
            "filterByPlayerUsernameQuery": [
                1
            ],
            "filterByReservationProperties": [
                381
            ],
            "filterByPlayerProperties": [
                381
            ],
            "filterByPlayerIdentityProviderProperties": [
                424
            ],
            "filterByPlayers": [
                453
            ],
            "filterByGroupStatus": [
                249
            ],
            "__typename": [
                1
            ]
        },
        "EventReservationsQueryPlayerIdWithGroupStatusInput": {
            "playerId": [
                413
            ],
            "memberStatus": [
                247
            ],
            "__typename": [
                1
            ]
        },
        "UserGroupsQueryInput": {
            "ids": [
                413
            ],
            "__typename": [
                1
            ]
        },
        "ShopsFilterInput": {
            "ids": [
                413
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
                413
            ],
            "externalIds": [
                1
            ],
            "shopIds": [
                413
            ],
            "__typename": [
                1
            ]
        },
        "PlayerShopProductPurshasesFilterInput": {
            "shopProductIds": [
                413
            ],
            "playerProfileIds": [
                413
            ],
            "shopIds": [
                413
            ],
            "ids": [
                413
            ],
            "__typename": [
                1
            ]
        },
        "ShopProductsFilterInput": {
            "categoryIds": [
                413
            ],
            "ids": [
                413
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
                413
            ],
            "ids": [
                413
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
                413
            ],
            "playerProfileIds": [
                413
            ],
            "__typename": [
                1
            ]
        },
        "ItemCategoriesFilterInput": {
            "ids": [
                413
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
                413
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
                413
            ],
            "playerProfileIds": [
                413
            ],
            "__typename": [
                1
            ]
        },
        "MarketplaceAppsFilterInput": {
            "status": [
                308
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
                413
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
                        413,
                        "ID!"
                    ]
                }
            ],
            "accountIdentityGenerateAccessToken": [
                1,
                {
                    "identityProviderId": [
                        413,
                        "ID!"
                    ],
                    "accountId": [
                        413
                    ]
                }
            ],
            "accountIdentityRefresh": [
                76,
                {
                    "identityProviderId": [
                        413,
                        "ID!"
                    ],
                    "accountId": [
                        413
                    ]
                }
            ],
            "attachOrUpdateIdentityToAccount": [
                76,
                {
                    "identityProviderId": [
                        413,
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
                        413,
                        "ID!"
                    ]
                }
            ],
            "updateConfiguration": [
                83,
                {
                    "id": [
                        413,
                        "ID!"
                    ],
                    "input": [
                        467,
                        "CreateConfigurationInput!"
                    ]
                }
            ],
            "deleteConfiguration": [
                2,
                {
                    "id": [
                        413,
                        "ID!"
                    ]
                }
            ],
            "leaderboardRegisterPlayerScore": [
                85,
                {
                    "input": [
                        468,
                        "LeaderboardRegisterPlayerScoreInput!"
                    ]
                }
            ],
            "createLeaderboard": [
                88,
                {
                    "input": [
                        470,
                        "CreateLeaderboardInput!"
                    ]
                }
            ],
            "updateLeaderboard": [
                88,
                {
                    "id": [
                        413,
                        "ID!"
                    ],
                    "input": [
                        471,
                        "UpdateLeaderboardInput!"
                    ]
                }
            ],
            "deleteLeaderboard": [
                472,
                {
                    "id": [
                        413,
                        "ID!"
                    ]
                }
            ],
            "createLeaderboardSeason": [
                91,
                {
                    "leaderboardId": [
                        413,
                        "ID!"
                    ],
                    "input": [
                        473,
                        "CreateLeaderboardSeasonInput!"
                    ]
                }
            ],
            "updateLeaderboardSeason": [
                91,
                {
                    "id": [
                        413,
                        "ID!"
                    ],
                    "input": [
                        474,
                        "UpdateLeaderboardSeasonInput!"
                    ]
                }
            ],
            "deleteLeaderboardSeason": [
                472,
                {
                    "id": [
                        413,
                        "ID!"
                    ]
                }
            ],
            "createLeaderboardSeasonBucket": [
                94,
                {
                    "seasonId": [
                        413,
                        "ID!"
                    ],
                    "input": [
                        475,
                        "CreateLeaderboardSeasonBucketInput!"
                    ]
                }
            ],
            "updateLeaderboardSeasonBucket": [
                94,
                {
                    "id": [
                        413,
                        "ID!"
                    ],
                    "input": [
                        476,
                        "UpdateLeaderboardSeasonBucketInput!"
                    ]
                }
            ],
            "deleteLeaderboardSeasonBucket": [
                472,
                {
                    "id": [
                        413,
                        "ID!"
                    ]
                }
            ],
            "updateOrganization": [
                74,
                {
                    "organization": [
                        477,
                        "UpdateOrganizationInput!"
                    ]
                }
            ],
            "createOrganization": [
                74,
                {
                    "organization": [
                        479,
                        "CreateOrganizationInput!"
                    ]
                }
            ],
            "createOrganizationGroup": [
                7,
                {
                    "input": [
                        480,
                        "CreateOrganizationGroupInput!"
                    ]
                }
            ],
            "updateOrganizationGroup": [
                7,
                {
                    "id": [
                        413,
                        "ID!"
                    ],
                    "input": [
                        480,
                        "CreateOrganizationGroupInput!"
                    ]
                }
            ],
            "deleteOrganizationGroup": [
                2,
                {
                    "id": [
                        413,
                        "ID!"
                    ]
                }
            ],
            "setOrganizationMembership": [
                59,
                {
                    "input": [
                        481,
                        "SetOrganizationMembershipInput!"
                    ]
                }
            ],
            "deleteOrganizationMembership": [
                2,
                {
                    "input": [
                        482,
                        "DeleteOrganizationMembershipInput!"
                    ]
                }
            ],
            "createIdentityProvider": [
                144,
                {
                    "input": [
                        483,
                        "CreateOrganizationIdentityProvider!"
                    ]
                }
            ],
            "updateIdentityProvider": [
                144,
                {
                    "providerId": [
                        413,
                        "ID!"
                    ],
                    "input": [
                        486,
                        "UpdateOrganizationIdentityProvider!"
                    ]
                }
            ],
            "deleteIdentityProvider": [
                2,
                {
                    "id": [
                        413,
                        "ID!"
                    ]
                }
            ],
            "createOrganizationApp": [
                137,
                {
                    "input": [
                        487,
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
                        488,
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
                        489,
                        "AppManifestInput!"
                    ]
                }
            ],
            "createAppRelease": [
                133,
                {
                    "appId": [
                        413,
                        "ID!"
                    ],
                    "input": [
                        496,
                        "CreateAppReleaseInput!"
                    ]
                }
            ],
            "createWebhook": [
                150,
                {
                    "input": [
                        497,
                        "CreateWebhookInput!"
                    ]
                }
            ],
            "updateWebhook": [
                150,
                {
                    "id": [
                        413,
                        "ID!"
                    ],
                    "input": [
                        498,
                        "UpdateWebhookInput!"
                    ]
                }
            ],
            "deleteWebhook": [
                150,
                {
                    "id": [
                        413,
                        "ID!"
                    ]
                }
            ],
            "regenerateWebhookSecret": [
                150,
                {
                    "id": [
                        413,
                        "ID!"
                    ]
                }
            ],
            "setOrganizationAttachedApp": [
                141,
                {
                    "input": [
                        499,
                        "SetOrganizationAttachedAppInput!"
                    ]
                }
            ],
            "deleteOrganizationAttachedApp": [
                2,
                {
                    "input": [
                        500,
                        "DeleteOrganizationAttachedAppInput!"
                    ]
                }
            ],
            "emailSend": [
                2,
                {
                    "fromTemplate": [
                        501
                    ],
                    "fromCustom": [
                        502
                    ]
                }
            ],
            "emailConfigurationUpdate": [
                48,
                {
                    "input": [
                        398,
                        "EmailConfigurationInput!"
                    ]
                }
            ],
            "emailTemplateCreate": [
                105,
                {
                    "input": [
                        503,
                        "EmailTemplateCreateInput!"
                    ]
                }
            ],
            "emailTemplateUpdate": [
                105,
                {
                    "id": [
                        413,
                        "ID!"
                    ],
                    "input": [
                        504,
                        "EmailTemplateUpdateInput!"
                    ]
                }
            ],
            "emailTemplateDelete": [
                105,
                {
                    "id": [
                        413,
                        "ID!"
                    ]
                }
            ],
            "createPlayer": [
                77,
                {
                    "input": [
                        505,
                        "CreatePlayerInput!"
                    ]
                }
            ],
            "updatePlayer": [
                77,
                {
                    "input": [
                        507,
                        "UpdatePlayerInput!"
                    ],
                    "id": [
                        413
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
                        508,
                        "UpdateMePlayerInput!"
                    ]
                }
            ],
            "deletePlayer": [
                2,
                {
                    "id": [
                        413
                    ],
                    "customId": [
                        413
                    ]
                }
            ],
            "createTournament": [
                62,
                {
                    "input": [
                        509,
                        "CreateTournamentInput!"
                    ]
                }
            ],
            "updateTournament": [
                62,
                {
                    "input": [
                        512,
                        "UpdateTournamentInput!"
                    ],
                    "id": [
                        413,
                        "ID!"
                    ]
                }
            ],
            "deleteTournament": [
                2,
                {
                    "id": [
                        413,
                        "ID!"
                    ]
                }
            ],
            "startTournamentStep": [
                2,
                {
                    "stepId": [
                        413,
                        "ID!"
                    ]
                }
            ],
            "createTournamentStep": [
                165,
                {
                    "tournamentId": [
                        413,
                        "ID!"
                    ],
                    "configuration": [
                        388,
                        "StepConfigurationInput!"
                    ],
                    "step": [
                        513,
                        "CreateTournamentStepInput!"
                    ]
                }
            ],
            "updateTournamentStep": [
                165,
                {
                    "stepId": [
                        413,
                        "ID!"
                    ],
                    "configuration": [
                        388,
                        "StepConfigurationInput!"
                    ],
                    "step": [
                        513,
                        "CreateTournamentStepInput!"
                    ]
                }
            ],
            "deleteTournamentStep": [
                2,
                {
                    "stepId": [
                        413,
                        "ID!"
                    ]
                }
            ],
            "generateTournamentStep": [
                2,
                {
                    "stepId": [
                        413,
                        "ID!"
                    ],
                    "teamsCount": [
                        52
                    ]
                }
            ],
            "seedTournamentStep": [
                2,
                {
                    "stepId": [
                        413,
                        "ID!"
                    ],
                    "input": [
                        514,
                        "SeedingInput!"
                    ]
                }
            ],
            "resetTournamentStepSeeding": [
                2,
                {
                    "stepId": [
                        413,
                        "ID!"
                    ]
                }
            ],
            "resetTournamentStep": [
                2,
                {
                    "stepId": [
                        413,
                        "ID!"
                    ]
                }
            ],
            "updateMatchScores": [
                152,
                {
                    "matchId": [
                        413,
                        "ID!"
                    ],
                    "input": [
                        520,
                        "[UpdateMatchScoreInput!]!"
                    ]
                }
            ],
            "registerCustomTournamentTeams": [
                161,
                {
                    "tournamentId": [
                        413,
                        "ID!"
                    ],
                    "input": [
                        522,
                        "RegisterCustomTeamsInput!"
                    ]
                }
            ],
            "registerTournamentTeam": [
                161,
                {
                    "tournamentId": [
                        413,
                        "ID!"
                    ],
                    "input": [
                        525,
                        "RegisterTournamentTeamInput!"
                    ]
                }
            ],
            "updateTournamentTeam": [
                161,
                {
                    "input": [
                        526,
                        "UpdateTournamentTeamInput!"
                    ],
                    "tournamentId": [
                        413
                    ],
                    "teamId": [
                        413
                    ]
                }
            ],
            "deleteTournamentTeam": [
                2,
                {
                    "tournamentId": [
                        413,
                        "ID!"
                    ]
                }
            ],
            "deleteAnyTournamentTeam": [
                2,
                {
                    "teamId": [
                        413,
                        "ID!"
                    ]
                }
            ],
            "confirmTournamentTeam": [
                161,
                {
                    "teamId": [
                        413,
                        "ID!"
                    ],
                    "confirm": [
                        2,
                        "Boolean!"
                    ]
                }
            ],
            "confirmTournamentAttendance": [
                161,
                {
                    "tournamentId": [
                        413,
                        "ID!"
                    ],
                    "attendance": [
                        2,
                        "Boolean!"
                    ]
                }
            ],
            "updateTournamentTeamStatus": [
                161,
                {
                    "tournamentTeamId": [
                        413,
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
                        413,
                        "ID!"
                    ],
                    "playerId": [
                        413,
                        "ID!"
                    ]
                }
            ],
            "answerToTournamentTeamInvite": [
                2,
                {
                    "teamId": [
                        413,
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
                        413,
                        "ID!"
                    ],
                    "playerId": [
                        413,
                        "ID!"
                    ]
                }
            ],
            "tournamentAdminUpsert": [
                178,
                {
                    "input": [
                        527,
                        "TournamentAdminUpsertInput!"
                    ]
                }
            ],
            "tournamentAdminDelete": [
                2,
                {
                    "input": [
                        528,
                        "TournamentAdminDeleteInput!"
                    ]
                }
            ],
            "stepRuleSetCreate": [
                230,
                {
                    "stepId": [
                        413,
                        "ID!"
                    ],
                    "input": [
                        426,
                        "CreateStepRuleSetInput!"
                    ]
                }
            ],
            "scoringRulesUpdate": [
                230,
                {
                    "stepId": [
                        413,
                        "ID!"
                    ],
                    "input": [
                        529,
                        "UpdateScoringRulesInput!"
                    ]
                }
            ],
            "advancementRulesUpdate": [
                230,
                {
                    "stepId": [
                        413,
                        "ID!"
                    ],
                    "input": [
                        530,
                        "UpdateAdvancementRulesInput!"
                    ]
                }
            ],
            "structureTemplateUpdate": [
                230,
                {
                    "stepId": [
                        413,
                        "ID!"
                    ],
                    "input": [
                        441,
                        "CreateStructureTemplateInput!"
                    ]
                }
            ],
            "crossStepRuleCreate": [
                230,
                {
                    "stepId": [
                        413,
                        "ID!"
                    ],
                    "input": [
                        439,
                        "CreateCrossStepRuleInput!"
                    ]
                }
            ],
            "crossStepRuleDelete": [
                230,
                {
                    "ruleId": [
                        413,
                        "ID!"
                    ]
                }
            ],
            "manualAdvancementExecute": [
                230,
                {
                    "stepId": [
                        413,
                        "ID!"
                    ],
                    "input": [
                        531,
                        "ManualAdvancementInput!"
                    ]
                }
            ],
            "manualRuleTrigger": [
                230,
                {
                    "stepId": [
                        413,
                        "ID!"
                    ],
                    "ruleId": [
                        413,
                        "ID!"
                    ]
                }
            ],
            "pendingActionApprove": [
                230,
                {
                    "logId": [
                        413,
                        "ID!"
                    ]
                }
            ],
            "rulePresetApply": [
                230,
                {
                    "stepId": [
                        413,
                        "ID!"
                    ],
                    "presetName": [
                        447,
                        "RulePresetName!"
                    ],
                    "teamCount": [
                        52,
                        "Int!"
                    ],
                    "bestOf": [
                        52
                    ],
                    "teamSlotsPerGame": [
                        52
                    ],
                    "roundCount": [
                        52
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
                        413
                    ],
                    "templateId": [
                        413
                    ]
                }
            ],
            "platformFilePublish": [
                122,
                {
                    "id": [
                        413,
                        "ID!"
                    ]
                }
            ],
            "platformFileGenerateUploadUrl": [
                125,
                {
                    "id": [
                        413,
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
                        413,
                        "ID!"
                    ]
                }
            ],
            "platformFileUpdate": [
                122,
                {
                    "id": [
                        413,
                        "ID!"
                    ],
                    "input": [
                        533,
                        "PlatformFileUpdateInput!"
                    ]
                }
            ],
            "platformFileDelete": [
                472,
                {
                    "id": [
                        413,
                        "ID!"
                    ]
                }
            ],
            "platformCreate": [
                340,
                {
                    "input": [
                        534,
                        "CreatePlatformInput!"
                    ]
                }
            ],
            "platformUpdate": [
                340,
                {
                    "id": [
                        413,
                        "ID!"
                    ],
                    "input": [
                        535,
                        "UpdatePlatformInput!"
                    ]
                }
            ],
            "platformDelete": [
                472,
                {
                    "id": [
                        413,
                        "ID!"
                    ]
                }
            ],
            "platformThemeUpdate": [
                340,
                {
                    "platformId": [
                        413,
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
                        413,
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
                472,
                {
                    "hostname": [
                        1,
                        "String!"
                    ]
                }
            ],
            "platformTemplateCreate": [
                341,
                {
                    "input": [
                        539,
                        "CreatePlatformTemplateInput!"
                    ]
                }
            ],
            "platformTemplateUpdate": [
                341,
                {
                    "id": [
                        413,
                        "ID!"
                    ],
                    "input": [
                        540,
                        "UpdatePlatformTemplateInput!"
                    ]
                }
            ],
            "platformTemplateApply": [
                340,
                {
                    "platformTemplateId": [
                        413,
                        "ID!"
                    ],
                    "platformId": [
                        413,
                        "ID!"
                    ]
                }
            ],
            "platformTemplateDelete": [
                472,
                {
                    "id": [
                        413,
                        "ID!"
                    ]
                }
            ],
            "organizationSubscriptionItemsUpdate": [
                472,
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
                368,
                {
                    "organizationSkillRatingId": [
                        413,
                        "ID!"
                    ],
                    "input": [
                        542,
                        "OrganizationSkillRatingsRegisterMatchInput!"
                    ]
                }
            ],
            "organizationSkillRatingCreate": [
                369,
                {
                    "input": [
                        544,
                        "OrganizationSkillRatingCreateInput!"
                    ]
                }
            ],
            "organizationSkillRatingUpdate": [
                369,
                {
                    "id": [
                        413,
                        "ID!"
                    ],
                    "input": [
                        545,
                        "OrganizationSkillRatingUpdateInput!"
                    ]
                }
            ],
            "organizationSkillRatingDelete": [
                472,
                {
                    "id": [
                        413,
                        "ID!"
                    ]
                }
            ],
            "eventCreate": [
                264,
                {
                    "input": [
                        546,
                        "EventCreateInput!"
                    ]
                }
            ],
            "eventUpdate": [
                264,
                {
                    "input": [
                        547,
                        "EventUpdateInput!"
                    ],
                    "id": [
                        413,
                        "ID!"
                    ]
                }
            ],
            "eventDelete": [
                2,
                {
                    "id": [
                        413,
                        "ID!"
                    ]
                }
            ],
            "eventTicketConfigurationCreate": [
                292,
                {
                    "input": [
                        548,
                        "EventTicketConfigurationCreateInput!"
                    ]
                }
            ],
            "eventTicketConfigurationUpdate": [
                292,
                {
                    "ticketConfigurationId": [
                        413,
                        "ID!"
                    ],
                    "input": [
                        549,
                        "EventTicketConfigurationUpdateInput!"
                    ]
                }
            ],
            "eventTicketConfigurationDelete": [
                292,
                {
                    "ticketConfigurationId": [
                        413,
                        "ID!"
                    ]
                }
            ],
            "eventReservationUpdateStatus": [
                272,
                {
                    "reservationId": [
                        413,
                        "ID!"
                    ],
                    "status": [
                        273,
                        "EventReservationStatus!"
                    ],
                    "confirmPaymentRefundOrCancel": [
                        2
                    ]
                }
            ],
            "eventReservationConfirmPresence": [
                272,
                {
                    "eventId": [
                        413,
                        "ID!"
                    ],
                    "confirmed": [
                        2,
                        "Boolean!"
                    ]
                }
            ],
            "eventReservationValidateAndPay": [
                278,
                {
                    "eventId": [
                        413,
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
                272,
                {
                    "eventId": [
                        413,
                        "ID!"
                    ]
                }
            ],
            "eventReservationUpdateTickets": [
                272,
                {
                    "reservationId": [
                        413,
                        "ID!"
                    ],
                    "input": [
                        553,
                        "EventReservationUpdateTicketsInput!"
                    ]
                }
            ],
            "eventReservationStartRegistrationSession": [
                272,
                {
                    "eventId": [
                        413,
                        "ID!"
                    ],
                    "input": [
                        555,
                        "EventReservationRegisterTicketsInput!"
                    ]
                }
            ],
            "eventReservationCancel": [
                272,
                {
                    "reservationId": [
                        413,
                        "ID!"
                    ]
                }
            ],
            "eventVenueRequestImageUpdate": [
                125,
                {
                    "id": [
                        413,
                        "ID!"
                    ],
                    "size": [
                        15,
                        "Float!"
                    ]
                }
            ],
            "eventVenueValidateImage": [
                288,
                {
                    "id": [
                        413,
                        "ID!"
                    ]
                }
            ],
            "eventVenueCreate": [
                288,
                {
                    "input": [
                        556,
                        "EventVenueCreateInput!"
                    ]
                }
            ],
            "eventVenueUpdate": [
                288,
                {
                    "id": [
                        413,
                        "ID!"
                    ],
                    "input": [
                        557,
                        "EventVenueUpdateInput!"
                    ]
                }
            ],
            "eventVenueDelete": [
                288,
                {
                    "id": [
                        413,
                        "ID!"
                    ]
                }
            ],
            "eventVenueSeatsUpdate": [
                257,
                {
                    "venueId": [
                        413,
                        "ID!"
                    ],
                    "input": [
                        558,
                        "EventVenueSeatsUpdateInput!"
                    ]
                }
            ],
            "eventVenueSeatTypeCreate": [
                284,
                {
                    "venueId": [
                        413,
                        "ID!"
                    ],
                    "input": [
                        561,
                        "EventVenueSeatTypeCreateInput!"
                    ]
                }
            ],
            "eventVenueSeatTypeUpdate": [
                284,
                {
                    "id": [
                        413,
                        "ID!"
                    ],
                    "input": [
                        562,
                        "EventVenueSeatTypeUpdateInput!"
                    ]
                }
            ],
            "eventVenueSeatTypeDelete": [
                284,
                {
                    "id": [
                        413,
                        "ID!"
                    ]
                }
            ],
            "organizationPaymentCollectionConfigurationCreateOrUpdateAccount": [
                1
            ],
            "userGroupInvite": [
                246,
                {
                    "groupId": [
                        413,
                        "ID!"
                    ],
                    "playerId": [
                        413,
                        "ID!"
                    ]
                }
            ],
            "userGroupUpdateInvite": [
                246,
                {
                    "groupId": [
                        413,
                        "ID!"
                    ],
                    "status": [
                        247,
                        "UserGroupMemberStatus!"
                    ]
                }
            ],
            "userGroupDeleteInvite": [
                246,
                {
                    "groupId": [
                        413,
                        "ID!"
                    ],
                    "playerId": [
                        413
                    ]
                }
            ],
            "shopCreate": [
                361,
                {
                    "input": [
                        563,
                        "ShopCreateInput!"
                    ]
                }
            ],
            "shopUpdate": [
                361,
                {
                    "id": [
                        413,
                        "ID!"
                    ],
                    "input": [
                        564,
                        "ShopUpdateInput!"
                    ]
                }
            ],
            "shopDelete": [
                361,
                {
                    "id": [
                        413,
                        "ID!"
                    ]
                }
            ],
            "shopCategoryCreate": [
                351,
                {
                    "input": [
                        565,
                        "ShopCategoryCreateInput!"
                    ]
                }
            ],
            "shopCategoryUpdate": [
                351,
                {
                    "id": [
                        413,
                        "ID!"
                    ],
                    "input": [
                        566,
                        "ShopCategoryUpdateInput!"
                    ]
                }
            ],
            "shopCategoryDelete": [
                351,
                {
                    "id": [
                        413,
                        "ID!"
                    ]
                }
            ],
            "playerShopProductPurshase": [
                347,
                {
                    "shopId": [
                        413,
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
                358,
                {
                    "shopId": [
                        413,
                        "ID!"
                    ],
                    "input": [
                        570,
                        "ShopProductCreateInput!"
                    ]
                }
            ],
            "shopProductUpdate": [
                358,
                {
                    "productId": [
                        413,
                        "ID!"
                    ],
                    "input": [
                        571,
                        "ShopProductUpdateInput!"
                    ]
                }
            ],
            "shopProductDelete": [
                358,
                {
                    "productId": [
                        413,
                        "ID!"
                    ]
                }
            ],
            "itemCreate": [
                294,
                {
                    "input": [
                        572,
                        "ItemCreateInput!"
                    ]
                }
            ],
            "itemUpdate": [
                294,
                {
                    "id": [
                        413,
                        "ID!"
                    ],
                    "input": [
                        573,
                        "ItemUpdateInput!"
                    ]
                }
            ],
            "itemDelete": [
                294,
                {
                    "id": [
                        413,
                        "ID!"
                    ]
                }
            ],
            "playerItemsUpdate": [
                297,
                {
                    "playerId": [
                        413,
                        "ID!"
                    ],
                    "input": [
                        574,
                        "PlayerItemsUpdateInput!"
                    ]
                }
            ],
            "itemCategoryCreate": [
                300,
                {
                    "input": [
                        576,
                        "ItemCategoryCreateInput!"
                    ]
                }
            ],
            "itemCategoryUpdate": [
                300,
                {
                    "id": [
                        413,
                        "ID!"
                    ],
                    "input": [
                        577,
                        "ItemCategoryUpdateInput!"
                    ]
                }
            ],
            "itemCategoryDelete": [
                300,
                {
                    "id": [
                        413,
                        "ID!"
                    ]
                }
            ],
            "currencyCreate": [
                239,
                {
                    "input": [
                        578,
                        "CurrencyCreateInput!"
                    ]
                }
            ],
            "currencyUpdate": [
                239,
                {
                    "id": [
                        413,
                        "ID!"
                    ],
                    "input": [
                        579,
                        "CurrencyUpdateInput!"
                    ]
                }
            ],
            "currencyDelete": [
                239,
                {
                    "id": [
                        413,
                        "ID!"
                    ]
                }
            ],
            "playerCurrencyUpdate": [
                242,
                {
                    "playerId": [
                        413,
                        "ID!"
                    ],
                    "input": [
                        580,
                        "[PlayerCurrencyUpdateInput!]!"
                    ]
                }
            ],
            "publishMarketplaceApp": [
                307,
                {
                    "input": [
                        582,
                        "PublishMarketplaceAppInput!"
                    ]
                }
            ],
            "updateMarketplaceApp": [
                307,
                {
                    "id": [
                        413,
                        "ID!"
                    ],
                    "input": [
                        583,
                        "UpdateMarketplaceAppInput!"
                    ]
                }
            ],
            "installMarketplaceApp": [
                314,
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
                        413,
                        "ID!"
                    ]
                }
            ],
            "submitMarketplaceAppReview": [
                311,
                {
                    "input": [
                        585,
                        "SubmitMarketplaceAppReviewInput!"
                    ]
                }
            ],
            "setMarketplaceAppPricing": [
                319,
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
                        413,
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
                        413,
                        "ID!"
                    ]
                }
            ],
            "appPublishRelease": [
                129,
                {
                    "releaseId": [
                        413,
                        "ID!"
                    ]
                }
            ],
            "platformModuleConfigSet": [
                322,
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
                325,
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
                326,
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
                332,
                {
                    "input": [
                        597,
                        "CreateCustomFieldDefinitionInput!"
                    ]
                }
            ],
            "updateCustomFieldDefinition": [
                332,
                {
                    "id": [
                        413,
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
                        413,
                        "ID!"
                    ]
                }
            ],
            "reorderCustomFieldDefinitions": [
                332,
                {
                    "objectType": [
                        329,
                        "ObjectType!"
                    ],
                    "orderedIds": [
                        413,
                        "[ID!]!"
                    ]
                }
            ],
            "setCustomFieldValues": [
                334,
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
                388
            ],
            "tournamentConfiguration": [
                397
            ],
            "__typename": [
                1
            ]
        },
        "LeaderboardRegisterPlayerScoreInput": {
            "leaderboardId": [
                413
            ],
            "playerId": [
                413
            ],
            "score": [
                469
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
                478
            ],
            "__typename": [
                1
            ]
        },
        "OrganizationConfigurationInput": {
            "customFields": [
                380
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
                478
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
                379
            ],
            "__typename": [
                1
            ]
        },
        "SetOrganizationMembershipInput": {
            "userId": [
                413
            ],
            "email": [
                81
            ],
            "permissions": [
                379
            ],
            "groupId": [
                413
            ],
            "__typename": [
                1
            ]
        },
        "DeleteOrganizationMembershipInput": {
            "userId": [
                413
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
                413
            ],
            "name": [
                1
            ],
            "oauth2Configuration": [
                484
            ],
            "openidConfiguration": [
                485
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
                378
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
                378
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
                484
            ],
            "openidConfiguration": [
                485
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
                490
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
                492
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
                491
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
                493
            ],
            "events": [
                495
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
                494
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
                379
            ],
            "groupId": [
                413
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
                413
            ],
            "variables": [
                381
            ],
            "__typename": [
                1
            ]
        },
        "EmailSendFromCustomInput": {
            "emailField": [
                393
            ],
            "playerIds": [
                413
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
                413
            ],
            "organizationCustomId": [
                1
            ],
            "customFields": [
                506
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
                413
            ],
            "organizationCustomId": [
                1
            ],
            "customFields": [
                506
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
                506
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
                510
            ],
            "__typename": [
                1
            ]
        },
        "UpdateTournamentConfigurationOrImportFromIdInput": {
            "fromId": [
                413
            ],
            "configuration": [
                511
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
                396
            ],
            "customFields": [
                380
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
                510
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
                166
            ],
            "properties": [
                381
            ],
            "__typename": [
                1
            ]
        },
        "SeedingInput": {
            "automaticSeeding": [
                515
            ],
            "manualSeeding": [
                518
            ],
            "__typename": [
                1
            ]
        },
        "AutomaticSeedingInput": {
            "seedingMechanism": [
                516
            ],
            "groupRepartitionMechanism": [
                517
            ],
            "teams": [
                413
            ],
            "__typename": [
                1
            ]
        },
        "SeedingMechanism": {},
        "GroupRepartitionMechanism": {},
        "ManualSeedingInput": {
            "groups": [
                519
            ],
            "__typename": [
                1
            ]
        },
        "ManualSeedingGroupInput": {
            "group": [
                413
            ],
            "teams": [
                413
            ],
            "__typename": [
                1
            ]
        },
        "UpdateMatchScoreInput": {
            "teamId": [
                413
            ],
            "variables": [
                521
            ],
            "forcedScoreValue": [
                15
            ],
            "status": [
                175
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
                523
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
                381
            ],
            "fromExistingTeamId": [
                413
            ],
            "members": [
                524
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
                413
            ],
            "player": [
                505
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
                381
            ],
            "fromExistingTeamId": [
                413
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
                381
            ],
            "__typename": [
                1
            ]
        },
        "TournamentAdminUpsertInput": {
            "id": [
                413
            ],
            "tournamentId": [
                413
            ],
            "accountId": [
                413
            ],
            "permissions": [
                179
            ],
            "__typename": [
                1
            ]
        },
        "TournamentAdminDeleteInput": {
            "id": [
                413
            ],
            "tournamentId": [
                413
            ],
            "accountId": [
                413
            ],
            "__typename": [
                1
            ]
        },
        "UpdateScoringRulesInput": {
            "aggregation": [
                214
            ],
            "formula": [
                1
            ],
            "winPoints": [
                15
            ],
            "lossPoints": [
                15
            ],
            "drawPoints": [
                15
            ],
            "forfeitPoints": [
                15
            ],
            "tiebreakers": [
                428
            ],
            "__typename": [
                1
            ]
        },
        "UpdateAdvancementRulesInput": {
            "advancementRules": [
                429
            ],
            "__typename": [
                1
            ]
        },
        "ManualAdvancementInput": {
            "teamId": [
                413
            ],
            "targetGameId": [
                413
            ],
            "targetGameRef": [
                433
            ],
            "targetSlot": [
                15
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
                400
            ],
            "__typename": [
                1
            ]
        },
        "PlatformFileUpdateInput": {
            "config": [
                400
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
                408
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
                408
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
                413
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
                413
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
                370
            ],
            "configuration": [
                412
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
                370
            ],
            "configuration": [
                412
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
                404
            ],
            "eventVenueId": [
                413
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
                404
            ],
            "eventVenueId": [
                413
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
                293
            ],
            "maxCount": [
                15
            ],
            "buyable": [
                2
            ],
            "eventId": [
                413
            ],
            "seatTypeId": [
                413
            ],
            "configuration": [
                407
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
                293
            ],
            "maxCount": [
                15
            ],
            "buyable": [
                2
            ],
            "seatTypeId": [
                413
            ],
            "configuration": [
                407
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
                413
            ],
            "customFields": [
                381
            ],
            "__typename": [
                1
            ]
        },
        "EventReservationUpdateTicketsInput": {
            "ticketIdsToRelease": [
                413
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
                413
            ],
            "quantity": [
                15
            ],
            "reservedSeats": [
                413
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
                413
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
                403
            ],
            "seatTypeId": [
                413
            ],
            "id": [
                413
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
                403
            ],
            "seatTypeId": [
                413
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
                405
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
                405
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
                381
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
                381
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
                381
            ],
            "shopId": [
                413
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
                381
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
                413
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
                413
            ],
            "price": [
                15
            ],
            "configuration": [
                409
            ],
            "metadata": [
                381
            ],
            "visibleAt": [
                9
            ],
            "currency": [
                293
            ],
            "items": [
                411
            ],
            "currencyPrices": [
                410
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
                413
            ],
            "price": [
                15
            ],
            "configuration": [
                409
            ],
            "metadata": [
                381
            ],
            "visibleAt": [
                9
            ],
            "currency": [
                293
            ],
            "items": [
                411
            ],
            "currencyPrices": [
                410
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
                381
            ],
            "categoryId": [
                413
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
                381
            ],
            "categoryId": [
                413
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
                413
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
                381
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
                381
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
                381
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
                381
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
                413
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
                413
            ],
            "manifest": [
                489
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
                489
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
                413
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
                413
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
                413
            ],
            "type": [
                320
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
                413
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
                489
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
                413
            ],
            "marketplaceAppId": [
                413
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
                413
            ],
            "marketplaceAppId": [
                413
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
                413
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
                413
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
                329
            ],
            "objectId": [
                413
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
                327
            ],
            "visibility": [
                328
            ],
            "__typename": [
                1
            ]
        },
        "RemoveObjectMetadataInput": {
            "objectType": [
                329
            ],
            "objectId": [
                413
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
                329
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
                333
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
                329
            ],
            "objectId": [
                413
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
            "presenceUserConnected": [
                344
            ],
            "presenceUserDisconnected": [
                346
            ],
            "__typename": [
                1
            ]
        }
    }
}