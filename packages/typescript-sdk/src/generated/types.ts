export default {
    "scalars": [
        1,
        2,
        8,
        9,
        15,
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
        52,
        53,
        54,
        67,
        71,
        81,
        87,
        90,
        92,
        93,
        96,
        108,
        109,
        112,
        120,
        124,
        130,
        131,
        135,
        139,
        143,
        152,
        159,
        161,
        173,
        174,
        175,
        185,
        192,
        202,
        205,
        212,
        223,
        250,
        256,
        258,
        297,
        304,
        305,
        306,
        311,
        312,
        320,
        323,
        355,
        356,
        384
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
                297
            ],
            "name": [
                1
            ],
            "permissions": [
                11
            ],
            "organizationId": [
                297
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
        "OrganizationMember": {
            "organizationId": [
                297
            ],
            "groupId": [
                297
            ],
            "memberId": [
                297
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
                66
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
                18
            ],
            "nodes": [
                16
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
                16
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
                15
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
                15
            ],
            "useMatchScoresAsGameScore": [
                2
            ],
            "teamsCount": [
                15
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
                15
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
                15
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
                297
            ],
            "conditionType": [
                34
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
                297
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
                297
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
                15
            ],
            "teamMaxSize": [
                15
            ],
            "teamsCount": [
                15
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
        "Tournament": {
            "id": [
                297
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
                297
            ],
            "configuration": [
                46
            ],
            "createdAt": [
                9
            ],
            "updatedAt": [
                9
            ],
            "createdById": [
                297
            ],
            "tournamentSeriesId": [
                297
            ],
            "visibleAt": [
                9
            ],
            "teams": [
                116,
                {
                    "page": [
                        49,
                        "PageInfo!"
                    ],
                    "status": [
                        50
                    ]
                }
            ],
            "steps": [
                129
            ],
            "createdBy": [
                66
            ],
            "myTeam": [
                115
            ],
            "teamScores": [
                128
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
                52
            ],
            "bucketDuration": [
                53
            ],
            "scope": [
                54
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
                51
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
                56
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
                297
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
                297
            ],
            "ownerId": [
                297
            ],
            "name": [
                1
            ],
            "description": [
                1
            ],
            "configuration": [
                58
            ],
            "tournaments": [
                48
            ],
            "members": [
                16
            ],
            "groups": [
                7
            ],
            "stripeConfigured": [
                2
            ],
            "identityProviders": [
                59,
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
                297
            ],
            "organizationIdentityProviderId": [
                297
            ],
            "properties": [
                61
            ],
            "createdAt": [
                9
            ],
            "updatedAt": [
                9
            ],
            "organizationIdentityProvider": [
                59
            ],
            "__typename": [
                1
            ]
        },
        "Player": {
            "id": [
                297
            ],
            "username": [
                1
            ],
            "description": [
                1
            ],
            "ownerId": [
                297
            ],
            "organizationCustomId": [
                297
            ],
            "updatedAt": [
                9
            ],
            "createdAt": [
                9
            ],
            "identities": [
                62
            ],
            "owner": [
                66
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
                65
            ],
            "nodes": [
                63
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
                63
            ],
            "__typename": [
                1
            ]
        },
        "Account": {
            "id": [
                297
            ],
            "email": [
                67
            ],
            "permissions": [
                11
            ],
            "profiles": [
                63
            ],
            "identities": [
                62,
                {
                    "properties": [
                        1,
                        "[String!]"
                    ],
                    "providerIds": [
                        297,
                        "[ID!]"
                    ]
                }
            ],
            "__typename": [
                1
            ]
        },
        "EmailAddress": {},
        "Configuration": {
            "id": [
                297
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
                69
            ],
            "createdById": [
                297
            ],
            "organizationId": [
                297
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
            "rank": [
                15
            ],
            "lastScore": [
                15
            ],
            "lastRank": [
                71
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
                297
            ],
            "playerProfileId": [
                297
            ],
            "__typename": [
                1
            ]
        },
        "Int": {},
        "LeaderboardSeasonBucketScores": {
            "edges": [
                73
            ],
            "nodes": [
                70
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
                70
            ],
            "__typename": [
                1
            ]
        },
        "Leaderboard": {
            "id": [
                297
            ],
            "organizationId": [
                297
            ],
            "ownerId": [
                297
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
                76
            ],
            "nodes": [
                74
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
                74
            ],
            "__typename": [
                1
            ]
        },
        "LeaderboardSeason": {
            "id": [
                297
            ],
            "leaderboardId": [
                297
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
        "LeaderboardSeasonEdge": {
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
        "LeaderboardSeasonBucket": {
            "id": [
                297
            ],
            "seasonId": [
                297
            ],
            "name": [
                1
            ],
            "minScore": [
                15
            ],
            "scoreCalculationType": [
                81
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
                83
            ],
            "nodes": [
                80
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
                80
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
                87
            ],
            "validation_errors": [
                85
            ],
            "validation_records": [
                84
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
                88
            ],
            "ssl": [
                86
            ],
            "status": [
                90
            ],
            "verification_errors": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "CustomDomainStatus": {},
        "LogData": {
            "oldValue": [
                92
            ],
            "newValue": [
                92
            ],
            "author": [
                1
            ],
            "authorType": [
                93
            ],
            "__typename": [
                1
            ]
        },
        "JSONObject": {},
        "LogAuthorType": {},
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
                297
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
                96
            ],
            "requirements": [
                94
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
                297
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
                97
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
                297
            ],
            "organizationId": [
                297
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
            "configuration": [
                98
            ],
            "creator": [
                66
            ],
            "__typename": [
                1
            ]
        },
        "OrganizationApps": {
            "edges": [
                101
            ],
            "nodes": [
                99
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
                99
            ],
            "__typename": [
                1
            ]
        },
        "OrganizationAttachedApp": {
            "organizationId": [
                297
            ],
            "groupId": [
                297
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
                99
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
                104
            ],
            "nodes": [
                102
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
                102
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
                297
            ],
            "identityProviderId": [
                297
            ],
            "configuration": [
                106
            ],
            "name": [
                1
            ],
            "organizationId": [
                297
            ],
            "createdAt": [
                9
            ],
            "updatedAt": [
                9
            ],
            "parentIdentityProvider": [
                95
            ],
            "__typename": [
                1
            ]
        },
        "IdentityProviderConfigurations": {
            "on_OAuthClientConfiguration": [
                107
            ],
            "on_OpenidConfiguration": [
                110
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
                108
            ],
            "clientId": [
                1
            ],
            "clientSecret": [
                1
            ],
            "tokenEndpointAuthMethod": [
                109
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
                108
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
        "TournamentTeamMemberDto": {
            "status": [
                112
            ],
            "tournamentTeamId": [
                297
            ],
            "playerProfileId": [
                297
            ],
            "createdAt": [
                9
            ],
            "updatedAt": [
                9
            ],
            "team": [
                115
            ],
            "__typename": [
                1
            ]
        },
        "TournamentTeamMemberStatus": {},
        "TeamMembers": {
            "edges": [
                114
            ],
            "nodes": [
                111
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
                111
            ],
            "__typename": [
                1
            ]
        },
        "TournamentTeam": {
            "id": [
                297
            ],
            "name": [
                1
            ],
            "tag": [
                1
            ],
            "teamId": [
                297
            ],
            "managerId": [
                297
            ],
            "tournamentId": [
                297
            ],
            "status": [
                50
            ],
            "createdAt": [
                9
            ],
            "updatedAt": [
                9
            ],
            "members": [
                111
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
                48
            ],
            "__typename": [
                1
            ]
        },
        "TournamentTeams": {
            "edges": [
                117
            ],
            "nodes": [
                115
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
                115
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
                118
            ],
            "__typename": [
                1
            ]
        },
        "WebhookEventConfiguration": {
            "type": [
                120
            ],
            "description": [
                1
            ],
            "payload": [
                118
            ],
            "answerPayload": [
                118
            ],
            "__typename": [
                1
            ]
        },
        "WebhookEventType": {},
        "Webhook": {
            "id": [
                297
            ],
            "organizationId": [
                297
            ],
            "events": [
                120
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
            "playerProfileId": [
                297
            ],
            "ratingId": [
                297
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
                63
            ],
            "__typename": [
                1
            ]
        },
        "TournamentStepGroupRoundGameMatch": {
            "id": [
                297
            ],
            "order": [
                15
            ],
            "status": [
                124
            ],
            "tournamentStepGroupRoundGameId": [
                297
            ],
            "configuration": [
                26
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
                126
            ],
            "nodes": [
                123
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
                123
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
        "TournamentTeamScore": {
            "teamId": [
                297
            ],
            "score": [
                15
            ],
            "team": [
                115
            ],
            "__typename": [
                1
            ]
        },
        "TournamentStep": {
            "id": [
                297
            ],
            "tournamentId": [
                297
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
                130
            ],
            "status": [
                131
            ],
            "configuration": [
                31
            ],
            "createdAt": [
                9
            ],
            "updatedAt": [
                9
            ],
            "teamScores": [
                128
            ],
            "tournament": [
                48
            ],
            "__typename": [
                1
            ]
        },
        "StepType": {},
        "StepStatus": {},
        "Tournaments": {
            "edges": [
                133
            ],
            "nodes": [
                48
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
                48
            ],
            "__typename": [
                1
            ]
        },
        "TournamentStepGroupRoundGame": {
            "id": [
                297
            ],
            "configuration": [
                27
            ],
            "status": [
                135
            ],
            "order": [
                15
            ],
            "tournamentStepGroupRoundId": [
                297
            ],
            "winningGameId": [
                297
            ],
            "losingGameId": [
                297
            ],
            "createdAt": [
                9
            ],
            "updatedAt": [
                9
            ],
            "matches": [
                123
            ],
            "__typename": [
                1
            ]
        },
        "TournamentGameStatus": {},
        "TournamentStepGroupRound": {
            "id": [
                297
            ],
            "name": [
                1
            ],
            "configuration": [
                29
            ],
            "tournamentStepGroupId": [
                297
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
                134
            ],
            "__typename": [
                1
            ]
        },
        "TournamentStepGroup": {
            "id": [
                297
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
                297
            ],
            "createdAt": [
                9
            ],
            "updatedAt": [
                9
            ],
            "rounds": [
                136
            ],
            "__typename": [
                1
            ]
        },
        "TournamentStepGroupRoundGameMatchScore": {
            "matchId": [
                297
            ],
            "teamId": [
                297
            ],
            "score": [
                15
            ],
            "status": [
                139
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
                141
            ],
            "nodes": [
                138
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
                138
            ],
            "__typename": [
                1
            ]
        },
        "TournamentAdmin": {
            "tournamentId": [
                297
            ],
            "accountId": [
                297
            ],
            "permissions": [
                143
            ],
            "createdAt": [
                9
            ],
            "updatedAt": [
                9
            ],
            "account": [
                66
            ],
            "__typename": [
                1
            ]
        },
        "TournamentAdminPermissions": {},
        "Currency": {
            "id": [
                297
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
                1
            ],
            "createdAt": [
                9
            ],
            "updatedAt": [
                9
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
                146
            ],
            "nodes": [
                144
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
                144
            ],
            "__typename": [
                1
            ]
        },
        "PlayerCurrency": {
            "id": [
                297
            ],
            "playerProfileId": [
                297
            ],
            "currencyId": [
                297
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
                149
            ],
            "nodes": [
                147
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
                147
            ],
            "__typename": [
                1
            ]
        },
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
                152
            ],
            "name": [
                1
            ],
            "description": [
                1
            ],
            "availableVariables": [
                150
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
                42
            ],
            "__typename": [
                1
            ]
        },
        "EmailTemplate": {
            "id": [
                297
            ],
            "triggerEvent": [
                152
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
                297
            ],
            "__typename": [
                1
            ]
        },
        "EmailTemplates": {
            "edges": [
                156
            ],
            "nodes": [
                154
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
                154
            ],
            "__typename": [
                1
            ]
        },
        "UserGroupConfiguration": {
            "maxSize": [
                71
            ],
            "minSize": [
                71
            ],
            "__typename": [
                1
            ]
        },
        "UserGroupMember": {
            "id": [
                297
            ],
            "groupId": [
                297
            ],
            "playerProfileId": [
                297
            ],
            "status": [
                159
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
                297
            ],
            "organizationId": [
                297
            ],
            "managerId": [
                297
            ],
            "createdAt": [
                9
            ],
            "updatedAt": [
                9
            ],
            "status": [
                161
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
                163
            ],
            "nodes": [
                160
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
                160
            ],
            "__typename": [
                1
            ]
        },
        "UserGroupMembers": {
            "edges": [
                165
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
        "UserGroupMemberEdge": {
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
                166
            ],
            "__typename": [
                1
            ]
        },
        "EventVenueSeat": {
            "id": [
                297
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
                167
            ],
            "seatTypeId": [
                297
            ],
            "__typename": [
                1
            ]
        },
        "EventVenueSeatsUpdateResult": {
            "updatedSeats": [
                168
            ],
            "createdSeats": [
                168
            ],
            "deletedSeats": [
                168
            ],
            "__typename": [
                1
            ]
        },
        "EventVenueSeats": {
            "edges": [
                171
            ],
            "nodes": [
                168
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
                168
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
                157
            ],
            "maxTicketsPerReservation": [
                15
            ],
            "reservationStatusAfterPayment": [
                173
            ],
            "reservationStatusAfterRegistration": [
                174
            ],
            "sessionDuration": [
                15
            ],
            "allowForNewSessionAfterTimeout": [
                2
            ],
            "seatAssignmentMode": [
                175
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
                297
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
                172
            ],
            "eventVenueId": [
                297
            ],
            "organizationId": [
                297
            ],
            "createdById": [
                297
            ],
            "decryptionKey": [
                1
            ],
            "venue": [
                207
            ],
            "__typename": [
                1
            ]
        },
        "EventInterface": {
            "id": [
                297
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
                172
            ],
            "eventVenueId": [
                297
            ],
            "organizationId": [
                297
            ],
            "createdById": [
                297
            ],
            "decryptionKey": [
                1
            ],
            "venue": [
                207
            ],
            "on_Event": [
                176
            ],
            "on_EventWithUserReservation": [
                178
            ],
            "__typename": [
                1
            ]
        },
        "EventWithUserReservation": {
            "id": [
                297
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
                172
            ],
            "eventVenueId": [
                297
            ],
            "organizationId": [
                297
            ],
            "createdById": [
                297
            ],
            "decryptionKey": [
                1
            ],
            "venue": [
                207
            ],
            "myReservation": [
                186
            ],
            "__typename": [
                1
            ]
        },
        "Events": {
            "edges": [
                180
            ],
            "nodes": [
                176
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
                176
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
                297
            ],
            "ticketId": [
                297
            ],
            "reservationId": [
                297
            ],
            "groupMemberId": [
                297
            ],
            "seatId": [
                297
            ],
            "createdAt": [
                9
            ],
            "updatedAt": [
                9
            ],
            "configuration": [
                181
            ],
            "__typename": [
                1
            ]
        },
        "EventReservationTicketWithQrCode": {
            "id": [
                297
            ],
            "ticketId": [
                297
            ],
            "reservationId": [
                297
            ],
            "groupMemberId": [
                297
            ],
            "seatId": [
                297
            ],
            "createdAt": [
                9
            ],
            "updatedAt": [
                9
            ],
            "configuration": [
                181
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
                297
            ],
            "name": [
                1
            ],
            "status": [
                185
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
                297
            ],
            "groupId": [
                297
            ],
            "tickets": [
                182
            ],
            "groupStatus": [
                161
            ],
            "__typename": [
                1
            ]
        },
        "EventReservationStatus": {},
        "EventReservationWithTicketsAndQrCode": {
            "id": [
                297
            ],
            "name": [
                1
            ],
            "status": [
                185
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
                297
            ],
            "groupId": [
                297
            ],
            "groupStatus": [
                161
            ],
            "tickets": [
                183
            ],
            "__typename": [
                1
            ]
        },
        "EventReservations": {
            "edges": [
                188
            ],
            "nodes": [
                189
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
                189
            ],
            "__typename": [
                1
            ]
        },
        "OmitObjectType": {
            "id": [
                297
            ],
            "name": [
                1
            ],
            "status": [
                185
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
                297
            ],
            "groupId": [
                297
            ],
            "groupStatus": [
                161
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
                297
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
                167
            ],
            "seatTypeId": [
                297
            ],
            "status": [
                192
            ],
            "reservedByTicketId": [
                297
            ],
            "reservedByReservationId": [
                297
            ],
            "reservedByGroupMemberId": [
                297
            ],
            "__typename": [
                1
            ]
        },
        "EventSeatStatus": {},
        "EventSeats": {
            "edges": [
                194
            ],
            "nodes": [
                191
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
                191
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
                297
            ],
            "name": [
                1
            ],
            "description": [
                1
            ],
            "configuration": [
                195
            ],
            "createdAt": [
                9
            ],
            "updatedAt": [
                9
            ],
            "venueId": [
                297
            ],
            "__typename": [
                1
            ]
        },
        "EventVenueSeatTypes": {
            "edges": [
                198
            ],
            "nodes": [
                196
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
                196
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
                199
            ],
            "__typename": [
                1
            ]
        },
        "PlatformCdnFile": {
            "id": [
                297
            ],
            "platformId": [
                297
            ],
            "platformTemplateId": [
                297
            ],
            "name": [
                1
            ],
            "type": [
                202
            ],
            "updatedAt": [
                9
            ],
            "createdAt": [
                9
            ],
            "config": [
                200
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
                203
            ],
            "url": [
                205
            ],
            "__typename": [
                1
            ]
        },
        "URL": {},
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
                297
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
                206
            ],
            "organizationId": [
                297
            ],
            "__typename": [
                1
            ]
        },
        "EventVenues": {
            "edges": [
                209
            ],
            "nodes": [
                207
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
                207
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
                297
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
                212
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
                297
            ],
            "seatTypeId": [
                297
            ],
            "configuration": [
                210
            ],
            "__typename": [
                1
            ]
        },
        "ShopCurrencies": {},
        "Item": {
            "id": [
                297
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
                9
            ],
            "updatedAt": [
                9
            ],
            "organizationId": [
                297
            ],
            "categoryId": [
                297
            ],
            "__typename": [
                1
            ]
        },
        "Items": {
            "edges": [
                215
            ],
            "nodes": [
                213
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
                213
            ],
            "__typename": [
                1
            ]
        },
        "PlayerItem": {
            "id": [
                297
            ],
            "playerProfileId": [
                297
            ],
            "itemId": [
                297
            ],
            "createdAt": [
                9
            ],
            "updatedAt": [
                9
            ],
            "metadata": [
                24
            ],
            "quantity": [
                71
            ],
            "__typename": [
                1
            ]
        },
        "PlayerItems": {
            "edges": [
                218
            ],
            "nodes": [
                216
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
                216
            ],
            "__typename": [
                1
            ]
        },
        "ItemCategory": {
            "id": [
                297
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
                9
            ],
            "updatedAt": [
                9
            ],
            "organizationId": [
                297
            ],
            "__typename": [
                1
            ]
        },
        "ItemCategories": {
            "edges": [
                221
            ],
            "nodes": [
                219
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
                219
            ],
            "__typename": [
                1
            ]
        },
        "Log": {
            "id": [
                297
            ],
            "type": [
                223
            ],
            "resourceId": [
                297
            ],
            "data": [
                91
            ],
            "organizationId": [
                297
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
                225
            ],
            "nodes": [
                222
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
                222
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
                89
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
                297
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
                227
            ],
            "organizationId": [
                297
            ],
            "appId": [
                1
            ],
            "customDomains": [
                226
            ],
            "__typename": [
                1
            ]
        },
        "PlatformTemplate": {
            "id": [
                297
            ],
            "name": [
                1
            ],
            "description": [
                1
            ],
            "screenshotUrl": [
                205
            ],
            "createdAt": [
                9
            ],
            "updatedAt": [
                9
            ],
            "ownerId": [
                297
            ],
            "organizationId": [
                297
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
                71
            ],
            "authenticatedSessions": [
                71
            ],
            "anonymousSessions": [
                71
            ],
            "__typename": [
                1
            ]
        },
        "UserConnectionEvent": {
            "sessionId": [
                297
            ],
            "serverId": [
                297
            ],
            "playerId": [
                297
            ],
            "accountId": [
                297
            ],
            "organizationId": [
                297
            ],
            "__typename": [
                1
            ]
        },
        "UsersConnectedEvent": {
            "usersConnected": [
                231
            ],
            "__typename": [
                1
            ]
        },
        "UserDisconnectEvent": {
            "sessionId": [
                297
            ],
            "serverId": [
                297
            ],
            "playerId": [
                297
            ],
            "accountId": [
                297
            ],
            "organizationId": [
                297
            ],
            "__typename": [
                1
            ]
        },
        "UsersDisconnectedEvent": {
            "usersDisconnected": [
                233
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
                297
            ],
            "playerProfileId": [
                297
            ],
            "shopProductId": [
                297
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
                238
            ],
            "nodes": [
                236
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
                236
            ],
            "__typename": [
                1
            ]
        },
        "ShopCategory": {
            "id": [
                297
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
                9
            ],
            "updatedAt": [
                9
            ],
            "shopId": [
                297
            ],
            "__typename": [
                1
            ]
        },
        "ShopCategories": {
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
        "ShopCategoryEdge": {
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
        "ShopProductConfiguration": {
            "minQuantity": [
                71
            ],
            "maxQuantity": [
                71
            ],
            "maxBoughtQuantity": [
                71
            ],
            "__typename": [
                1
            ]
        },
        "ShopProduct": {
            "id": [
                297
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
                297
            ],
            "price": [
                15
            ],
            "configuration": [
                242
            ],
            "metadata": [
                24
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
                297
            ],
            "currency": [
                212
            ],
            "__typename": [
                1
            ]
        },
        "ShopProducts": {
            "edges": [
                245
            ],
            "nodes": [
                243
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
                243
            ],
            "__typename": [
                1
            ]
        },
        "Shop": {
            "id": [
                297
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
                297
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
                248
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
        "ShopEdge": {
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
        "ShopProductItem": {
            "id": [
                297
            ],
            "currencyId": [
                297
            ],
            "createdAt": [
                9
            ],
            "updatedAt": [
                9
            ],
            "type": [
                250
            ],
            "shopItemId": [
                297
            ],
            "itemId": [
                297
            ],
            "quantity": [
                71
            ],
            "__typename": [
                1
            ]
        },
        "ShopProductItemType": {},
        "ShopProductItems": {
            "edges": [
                252
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
        "ShopProductItemEdge": {
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
        "SkillRatingConfiguration": {
            "updateLeaderboardId": [
                297
            ],
            "__typename": [
                1
            ]
        },
        "OrganizationSkillRatingsRegisterMatchPlayer": {
            "id": [
                297
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
                297
            ],
            "name": [
                1
            ],
            "description": [
                1
            ],
            "type": [
                256
            ],
            "configuration": [
                253
            ],
            "organizationId": [
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
        "SkillRatingType": {},
        "LimitOverride": {
            "limit": [
                258
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
                297
            ],
            "name": [
                1
            ],
            "description": [
                1
            ],
            "limitsOverride": [
                257
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
                297
            ],
            "subscriptionItemId": [
                297
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
                259
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
                261
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
                263
            ],
            "mappingConfiguration": [
                262
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
                15
            ],
            "__typename": [
                1
            ]
        },
        "MatchConfigurationInput": {
            "variables": [
                268
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
                269
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
                270
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
                272
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
                273
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
                15
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
                297
            ],
            "conditionType": [
                34
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
                275
            ],
            "stringCondition": [
                277
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
                297
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
                297
            ],
            "condition": [
                278
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
                277
            ],
            "numericCondition": [
                276
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
                281
            ],
            "memberConditions": [
                280
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
                15
            ],
            "teamMaxSize": [
                15
            ],
            "teamsCount": [
                15
            ],
            "teamStatusAfterRegistration": [
                47
            ],
            "registrationConditions": [
                282
            ],
            "customFields": [
                266
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
                279
            ],
            "__typename": [
                1
            ]
        },
        "UserGroupConfigurationInput": {
            "maxSize": [
                71
            ],
            "minSize": [
                71
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
                286
            ],
            "__typename": [
                1
            ]
        },
        "EventConfigurationInput": {
            "customFields": [
                266
            ],
            "groupConfiguration": [
                285
            ],
            "maxTicketsPerReservation": [
                15
            ],
            "reservationStatusAfterPayment": [
                173
            ],
            "reservationStatusAfterRegistration": [
                174
            ],
            "sessionDuration": [
                15
            ],
            "allowForNewSessionAfterTimeout": [
                2
            ],
            "seatAssignmentMode": [
                175
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
                290
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
                266
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
                71
            ],
            "maxQuantity": [
                71
            ],
            "maxBoughtQuantity": [
                71
            ],
            "__typename": [
                1
            ]
        },
        "SkillRatingConfigurationInput": {
            "updateLeaderboardId": [
                297
            ],
            "__typename": [
                1
            ]
        },
        "ID": {},
        "Query": {
            "logs": [
                224,
                {
                    "page": [
                        49
                    ],
                    "resourceId": [
                        297
                    ],
                    "types": [
                        223,
                        "[LogType!]"
                    ]
                }
            ],
            "getMyAccount": [
                66
            ],
            "configuration": [
                68,
                {
                    "id": [
                        297,
                        "ID!"
                    ]
                }
            ],
            "leaderboardCurrentPlayerRanking": [
                70,
                {
                    "input": [
                        299,
                        "LeaderboardGetPlayerRankingInput!"
                    ]
                }
            ],
            "leaderboards": [
                75,
                {
                    "page": [
                        49,
                        "PageInfo!"
                    ]
                }
            ],
            "leaderboard": [
                74,
                {
                    "id": [
                        297,
                        "ID!"
                    ]
                }
            ],
            "currentLeaderboardSeason": [
                77,
                {
                    "leaderboardId": [
                        297,
                        "ID!"
                    ]
                }
            ],
            "leaderboardSeasons": [
                78,
                {
                    "leaderboardId": [
                        297,
                        "ID!"
                    ],
                    "page": [
                        49,
                        "PageInfo!"
                    ]
                }
            ],
            "leaderboardSeason": [
                77,
                {
                    "id": [
                        297,
                        "ID!"
                    ]
                }
            ],
            "leaderboardSeasonBuckets": [
                82,
                {
                    "seasonId": [
                        297,
                        "ID!"
                    ],
                    "page": [
                        49,
                        "PageInfo!"
                    ]
                }
            ],
            "leaderboardSeasonBucket": [
                80,
                {
                    "id": [
                        297,
                        "ID!"
                    ]
                }
            ],
            "leaderboardSeasonBucketScores": [
                72,
                {
                    "leaderboardSeasonBucketId": [
                        297,
                        "ID!"
                    ],
                    "page": [
                        49,
                        "PageInfo!"
                    ]
                }
            ],
            "organization": [
                60,
                {
                    "id": [
                        297,
                        "ID!"
                    ]
                }
            ],
            "limitDefinitions": [
                55,
                {
                    "limits": [
                        1,
                        "[String!]"
                    ]
                }
            ],
            "organizationLimits": [
                57,
                {
                    "limits": [
                        258,
                        "[OrganizationLimitsType!]"
                    ]
                }
            ],
            "userOrganizations": [
                60
            ],
            "organizationGroup": [
                7,
                {
                    "id": [
                        297,
                        "ID!"
                    ]
                }
            ],
            "organizationGroups": [
                13,
                {
                    "page": [
                        49,
                        "PageInfo!"
                    ]
                }
            ],
            "availablePermissions": [
                12
            ],
            "organizationMembers": [
                17,
                {
                    "page": [
                        49,
                        "PageInfo!"
                    ]
                }
            ],
            "identityProviders": [
                300
            ],
            "identityProvider": [
                105,
                {
                    "id": [
                        297,
                        "ID!"
                    ]
                }
            ],
            "organizationApp": [
                99,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "organizationApps": [
                100,
                {
                    "page": [
                        49,
                        "PageInfo!"
                    ]
                }
            ],
            "webhookAvailableEvents": [
                119
            ],
            "webhooks": [
                121
            ],
            "webhook": [
                121,
                {
                    "id": [
                        297,
                        "ID!"
                    ]
                }
            ],
            "organizationAttachedApps": [
                103,
                {
                    "page": [
                        49,
                        "PageInfo!"
                    ]
                }
            ],
            "availableRootIdentityProvider": [
                95,
                {
                    "id": [
                        297,
                        "ID!"
                    ]
                }
            ],
            "getAvailableRootIdentityProviders": [
                95
            ],
            "searchPlayer": [
                63,
                {
                    "username": [
                        1,
                        "String!"
                    ]
                }
            ],
            "players": [
                64,
                {
                    "ids": [
                        297,
                        "[ID!]"
                    ],
                    "page": [
                        49,
                        "PageInfo!"
                    ],
                    "identityProviders": [
                        297,
                        "[ID!]"
                    ],
                    "identityProviderProperties": [
                        1,
                        "[String!]"
                    ],
                    "query": [
                        302
                    ]
                }
            ],
            "player": [
                63,
                {
                    "id": [
                        297
                    ],
                    "ownerId": [
                        297
                    ],
                    "customId": [
                        1
                    ]
                }
            ],
            "playerSkillRatings": [
                122,
                {
                    "playerId": [
                        297,
                        "ID!"
                    ],
                    "skillRatingIds": [
                        297,
                        "[ID!]"
                    ]
                }
            ],
            "playerMatchesHistory": [
                125,
                {
                    "page": [
                        49,
                        "PageInfo!"
                    ],
                    "playerId": [
                        297,
                        "ID!"
                    ]
                }
            ],
            "tournament": [
                48,
                {
                    "id": [
                        297,
                        "ID!"
                    ]
                }
            ],
            "tournaments": [
                132,
                {
                    "query": [
                        303,
                        "TournamentsQuery!"
                    ],
                    "page": [
                        49,
                        "PageInfo!"
                    ]
                }
            ],
            "tournamentSteps": [
                129,
                {
                    "tournamentId": [
                        297,
                        "ID!"
                    ]
                }
            ],
            "tournamentStep": [
                129,
                {
                    "id": [
                        297,
                        "ID!"
                    ]
                }
            ],
            "tournamentStepGeneratedShape": [
                137,
                {
                    "stepId": [
                        297,
                        "ID!"
                    ]
                }
            ],
            "match": [
                123,
                {
                    "matchId": [
                        297,
                        "ID!"
                    ]
                }
            ],
            "tournamentTeam": [
                115,
                {
                    "teamId": [
                        297,
                        "ID!"
                    ],
                    "memberStatus": [
                        112
                    ]
                }
            ],
            "tournamentTeams": [
                116,
                {
                    "tournamentId": [
                        297,
                        "ID!"
                    ],
                    "page": [
                        49,
                        "PageInfo!"
                    ],
                    "memberStatus": [
                        112
                    ],
                    "status": [
                        50
                    ],
                    "propertiesFilter": [
                        267,
                        "[PropertyValueInput!]"
                    ],
                    "playerUsernameQuery": [
                        1
                    ],
                    "playerPropertiesFilter": [
                        267,
                        "[PropertyValueInput!]"
                    ],
                    "playerIdentityProviderPropertiesFilter": [
                        308,
                        "[IdentityProviderPropertyInput!]"
                    ]
                }
            ],
            "tournamentPlayers": [
                113,
                {
                    "page": [
                        49,
                        "PageInfo!"
                    ],
                    "tournamentId": [
                        297,
                        "ID!"
                    ],
                    "status": [
                        50,
                        "TournamentTeamStatus!"
                    ],
                    "playerUsernameQuery": [
                        1
                    ],
                    "playerPropertiesFilter": [
                        267,
                        "[PropertyValueInput!]"
                    ],
                    "orderByProperty": [
                        309
                    ]
                }
            ],
            "tournamentTeamInvites": [
                113,
                {
                    "page": [
                        49,
                        "PageInfo!"
                    ],
                    "tournamentId": [
                        297
                    ],
                    "status": [
                        112
                    ]
                }
            ],
            "tournamentStepGroupRoundGameMatchScoresGetForStep": [
                140,
                {
                    "stepId": [
                        297,
                        "ID!"
                    ],
                    "page": [
                        49,
                        "PageInfo!"
                    ]
                }
            ],
            "tournamentAdmins": [
                142,
                {
                    "tournamentId": [
                        297,
                        "ID!"
                    ]
                }
            ],
            "platformFiles": [
                201,
                {
                    "type": [
                        202
                    ],
                    "platformId": [
                        297
                    ],
                    "templateId": [
                        297
                    ]
                }
            ],
            "platformFile": [
                201,
                {
                    "id": [
                        297,
                        "ID!"
                    ]
                }
            ],
            "platforms": [
                228
            ],
            "platform": [
                228,
                {
                    "platformId": [
                        297,
                        "ID!"
                    ]
                }
            ],
            "platformFindFromDomain": [
                228,
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
                        205,
                        "URL!"
                    ]
                }
            ],
            "platformCustomDomains": [
                226,
                {
                    "platformId": [
                        297,
                        "ID!"
                    ]
                }
            ],
            "platformTemplatesPublic": [
                229
            ],
            "platformTemplates": [
                229
            ],
            "platformTemplate": [
                229,
                {
                    "platformTemplateId": [
                        297,
                        "ID!"
                    ]
                }
            ],
            "subscriptionItems": [
                259
            ],
            "organizationCurrentSubscriptionItems": [
                260
            ],
            "organizationSkillRatings": [
                255
            ],
            "organizationSkillRating": [
                255,
                {
                    "id": [
                        297,
                        "ID!"
                    ]
                }
            ],
            "event": [
                178,
                {
                    "id": [
                        297,
                        "ID!"
                    ]
                }
            ],
            "events": [
                179,
                {
                    "page": [
                        49,
                        "PageInfo!"
                    ],
                    "query": [
                        310
                    ],
                    "eventIds": [
                        297,
                        "[ID!]"
                    ]
                }
            ],
            "eventTicketConfiguration": [
                211,
                {
                    "id": [
                        297,
                        "ID!"
                    ]
                }
            ],
            "eventTicketConfigurations": [
                211,
                {
                    "eventId": [
                        297,
                        "ID!"
                    ]
                }
            ],
            "eventReservationsMyReservations": [
                187,
                {
                    "page": [
                        49,
                        "PageInfo!"
                    ],
                    "status": [
                        185
                    ],
                    "groupStatus": [
                        161
                    ],
                    "eventIds": [
                        297,
                        "[ID!]"
                    ]
                }
            ],
            "eventReservation": [
                184,
                {
                    "reservationId": [
                        297,
                        "ID!"
                    ]
                }
            ],
            "eventSeats": [
                193,
                {
                    "eventId": [
                        297,
                        "ID!"
                    ],
                    "page": [
                        49,
                        "PageInfo!"
                    ],
                    "eventVenueId": [
                        297
                    ],
                    "reservationIds": [
                        297,
                        "[ID!]"
                    ]
                }
            ],
            "eventReservations": [
                187,
                {
                    "eventId": [
                        297,
                        "ID!"
                    ],
                    "page": [
                        49,
                        "PageInfo!"
                    ],
                    "query": [
                        314,
                        "EventReservationsQueryInput!"
                    ]
                }
            ],
            "eventVenues": [
                208,
                {
                    "page": [
                        49,
                        "PageInfo!"
                    ]
                }
            ],
            "eventVenue": [
                207,
                {
                    "id": [
                        297,
                        "ID!"
                    ]
                }
            ],
            "eventVenueSeats": [
                170,
                {
                    "venueId": [
                        297,
                        "ID!"
                    ],
                    "page": [
                        49,
                        "PageInfo!"
                    ],
                    "seatTypeId": [
                        297
                    ]
                }
            ],
            "eventVenueSeatTypes": [
                197,
                {
                    "venueId": [
                        297,
                        "ID!"
                    ],
                    "page": [
                        49,
                        "PageInfo!"
                    ]
                }
            ],
            "organizationPaymentCollectionConfiguration": [
                127
            ],
            "emailTemplateConfigurations": [
                151
            ],
            "emailConfiguration": [
                153
            ],
            "emailTemplate": [
                154,
                {
                    "id": [
                        297,
                        "ID!"
                    ]
                }
            ],
            "emailTemplates": [
                155,
                {
                    "page": [
                        49,
                        "PageInfo!"
                    ]
                }
            ],
            "userGroupMembers": [
                164,
                {
                    "groupIds": [
                        297,
                        "[ID!]!"
                    ],
                    "page": [
                        49,
                        "PageInfo!"
                    ],
                    "status": [
                        159
                    ]
                }
            ],
            "userGroups": [
                162,
                {
                    "query": [
                        316,
                        "UserGroupsQueryInput!"
                    ],
                    "page": [
                        49,
                        "PageInfo!"
                    ]
                }
            ],
            "userGroupMyMemberships": [
                164,
                {
                    "page": [
                        49,
                        "PageInfo!"
                    ],
                    "status": [
                        159
                    ],
                    "entityType": [
                        1
                    ],
                    "entityId": [
                        297
                    ]
                }
            ],
            "presenceAnalytics": [
                230
            ],
            "shops": [
                247,
                {
                    "page": [
                        49
                    ]
                }
            ],
            "shopCategories": [
                240,
                {
                    "page": [
                        49
                    ]
                }
            ],
            "playerShopProductPurshases": [
                237,
                {
                    "shopId": [
                        297,
                        "ID!"
                    ],
                    "playerId": [
                        297
                    ],
                    "page": [
                        49
                    ]
                }
            ],
            "shopProducts": [
                244,
                {
                    "shopId": [
                        297,
                        "ID!"
                    ],
                    "page": [
                        49
                    ]
                }
            ],
            "shopProductItems": [
                251,
                {
                    "shopProductId": [
                        297,
                        "ID!"
                    ],
                    "page": [
                        49
                    ]
                }
            ],
            "items": [
                214,
                {
                    "page": [
                        49
                    ]
                }
            ],
            "playerItems": [
                217,
                {
                    "playerId": [
                        297
                    ],
                    "page": [
                        49
                    ]
                }
            ],
            "itemCategories": [
                220,
                {
                    "page": [
                        49
                    ]
                }
            ],
            "currencies": [
                145,
                {
                    "page": [
                        49
                    ]
                }
            ],
            "playerCurrencies": [
                148,
                {
                    "playerId": [
                        297
                    ],
                    "page": [
                        49
                    ]
                }
            ],
            "__typename": [
                1
            ]
        },
        "LeaderboardGetPlayerRankingInput": {
            "leaderboardId": [
                297
            ],
            "playerId": [
                297
            ],
            "seasonId": [
                297
            ],
            "__typename": [
                1
            ]
        },
        "OrganizationIdentityProviderInfo": {
            "on_OrganizationIdentityProvider": [
                105
            ],
            "on_PublicOrganizationIdentityProviderV2": [
                301
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
                297
            ],
            "name": [
                1
            ],
            "organizationId": [
                297
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
                304
            ],
            "orderDirection": [
                305
            ],
            "status": [
                306
            ],
            "showNotVisible": [
                2
            ],
            "filterByPlayers": [
                307
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
                297
            ],
            "teamStatus": [
                50
            ],
            "memberStatus": [
                112
            ],
            "__typename": [
                1
            ]
        },
        "IdentityProviderPropertyInput": {
            "identityProviderId": [
                297
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
                305
            ],
            "__typename": [
                1
            ]
        },
        "EventsQuery": {
            "orderBy": [
                311
            ],
            "orderDirection": [
                305
            ],
            "status": [
                312
            ],
            "showNotVisible": [
                2
            ],
            "filterByPlayers": [
                313
            ],
            "__typename": [
                1
            ]
        },
        "EventsQueryOrderBy": {},
        "EventsQueryStatus": {},
        "EventsQueryPlayerIdWithTeamStatusInput": {
            "playerId": [
                297
            ],
            "reservationStatus": [
                185
            ],
            "memberStatus": [
                159
            ],
            "__typename": [
                1
            ]
        },
        "EventReservationsQueryInput": {
            "filterByRegistrationStatus": [
                185
            ],
            "retrieveOnlyGroupMembersWithStatus": [
                159
            ],
            "filterByPlayerUsernameQuery": [
                1
            ],
            "filterByReservationProperties": [
                267
            ],
            "filterByPlayerProperties": [
                267
            ],
            "filterByPlayerIdentityProviderProperties": [
                308
            ],
            "filterByPlayers": [
                315
            ],
            "filterByGroupStatus": [
                161
            ],
            "__typename": [
                1
            ]
        },
        "EventReservationsQueryPlayerIdWithGroupStatusInput": {
            "playerId": [
                297
            ],
            "memberStatus": [
                159
            ],
            "__typename": [
                1
            ]
        },
        "UserGroupsQueryInput": {
            "ids": [
                297
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
                        297,
                        "ID!"
                    ]
                }
            ],
            "accountIdentityGenerateAccessToken": [
                1,
                {
                    "identityProviderId": [
                        297,
                        "ID!"
                    ],
                    "accountId": [
                        297
                    ]
                }
            ],
            "accountIdentityRefresh": [
                62,
                {
                    "identityProviderId": [
                        297,
                        "ID!"
                    ],
                    "accountId": [
                        297
                    ]
                }
            ],
            "attachOrUpdateIdentityToAccount": [
                62,
                {
                    "identityProviderId": [
                        297,
                        "ID!"
                    ],
                    "token": [
                        1,
                        "String!"
                    ]
                }
            ],
            "updateConfiguration": [
                68,
                {
                    "id": [
                        297,
                        "ID!"
                    ],
                    "input": [
                        318,
                        "CreateConfigurationInput!"
                    ]
                }
            ],
            "deleteConfiguration": [
                2,
                {
                    "id": [
                        297,
                        "ID!"
                    ]
                }
            ],
            "leaderboardRegisterPlayerScore": [
                70,
                {
                    "input": [
                        319,
                        "LeaderboardRegisterPlayerScoreInput!"
                    ]
                }
            ],
            "createLeaderboard": [
                74,
                {
                    "input": [
                        321,
                        "CreateLeaderboardInput!"
                    ]
                }
            ],
            "updateLeaderboard": [
                74,
                {
                    "id": [
                        297,
                        "ID!"
                    ],
                    "input": [
                        322,
                        "UpdateLeaderboardInput!"
                    ]
                }
            ],
            "deleteLeaderboard": [
                323,
                {
                    "id": [
                        297,
                        "ID!"
                    ]
                }
            ],
            "createLeaderboardSeason": [
                77,
                {
                    "leaderboardId": [
                        297,
                        "ID!"
                    ],
                    "input": [
                        324,
                        "CreateLeaderboardSeasonInput!"
                    ]
                }
            ],
            "updateLeaderboardSeason": [
                77,
                {
                    "id": [
                        297,
                        "ID!"
                    ],
                    "input": [
                        325,
                        "UpdateLeaderboardSeasonInput!"
                    ]
                }
            ],
            "deleteLeaderboardSeason": [
                323,
                {
                    "id": [
                        297,
                        "ID!"
                    ]
                }
            ],
            "createLeaderboardSeasonBucket": [
                80,
                {
                    "seasonId": [
                        297,
                        "ID!"
                    ],
                    "input": [
                        326,
                        "CreateLeaderboardSeasonBucketInput!"
                    ]
                }
            ],
            "updateLeaderboardSeasonBucket": [
                80,
                {
                    "id": [
                        297,
                        "ID!"
                    ],
                    "input": [
                        327,
                        "UpdateLeaderboardSeasonBucketInput!"
                    ]
                }
            ],
            "deleteLeaderboardSeasonBucket": [
                323,
                {
                    "id": [
                        297,
                        "ID!"
                    ]
                }
            ],
            "updateOrganization": [
                60,
                {
                    "organization": [
                        328,
                        "UpdateOrganizationInput!"
                    ]
                }
            ],
            "createOrganization": [
                60,
                {
                    "organization": [
                        330,
                        "CreateOrganizationInput!"
                    ]
                }
            ],
            "createOrganizationGroup": [
                7,
                {
                    "input": [
                        331,
                        "CreateOrganizationGroupInput!"
                    ]
                }
            ],
            "updateOrganizationGroup": [
                7,
                {
                    "id": [
                        297,
                        "ID!"
                    ],
                    "input": [
                        331,
                        "CreateOrganizationGroupInput!"
                    ]
                }
            ],
            "deleteOrganizationGroup": [
                2,
                {
                    "id": [
                        297,
                        "ID!"
                    ]
                }
            ],
            "setOrganizationMembership": [
                16,
                {
                    "input": [
                        332,
                        "SetOrganizationMembershipInput!"
                    ]
                }
            ],
            "deleteOrganizationMembership": [
                2,
                {
                    "input": [
                        333,
                        "DeleteOrganizationMembershipInput!"
                    ]
                }
            ],
            "createIdentityProvider": [
                105,
                {
                    "input": [
                        334,
                        "CreateOrganizationIdentityProvider!"
                    ]
                }
            ],
            "updateIdentityProvider": [
                105,
                {
                    "providerId": [
                        297,
                        "ID!"
                    ],
                    "input": [
                        337,
                        "UpdateOrganizationIdentityProvider!"
                    ]
                }
            ],
            "deleteIdentityProvider": [
                2,
                {
                    "id": [
                        297,
                        "ID!"
                    ]
                }
            ],
            "createOrganizationApp": [
                99,
                {
                    "input": [
                        338,
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
                99,
                {
                    "id": [
                        1,
                        "String!"
                    ],
                    "input": [
                        339,
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
            "createWebhook": [
                121,
                {
                    "input": [
                        340,
                        "CreateWebhookInput!"
                    ]
                }
            ],
            "updateWebhook": [
                121,
                {
                    "id": [
                        297,
                        "ID!"
                    ],
                    "input": [
                        341,
                        "UpdateWebhookInput!"
                    ]
                }
            ],
            "deleteWebhook": [
                121,
                {
                    "id": [
                        297,
                        "ID!"
                    ]
                }
            ],
            "regenerateWebhookSecret": [
                121,
                {
                    "id": [
                        297,
                        "ID!"
                    ]
                }
            ],
            "setOrganizationAttachedApp": [
                102,
                {
                    "input": [
                        342,
                        "SetOrganizationAttachedAppInput!"
                    ]
                }
            ],
            "deleteOrganizationAttachedApp": [
                2,
                {
                    "input": [
                        343,
                        "DeleteOrganizationAttachedAppInput!"
                    ]
                }
            ],
            "createPlayer": [
                63,
                {
                    "input": [
                        344,
                        "CreatePlayerInput!"
                    ]
                }
            ],
            "updatePlayer": [
                63,
                {
                    "input": [
                        346,
                        "UpdatePlayerInput!"
                    ],
                    "id": [
                        297
                    ],
                    "customId": [
                        1
                    ]
                }
            ],
            "createOrUpdateMyPlayerProfile": [
                63,
                {
                    "input": [
                        347,
                        "UpdateMePlayerInput!"
                    ]
                }
            ],
            "deletePlayer": [
                2,
                {
                    "id": [
                        297
                    ],
                    "customId": [
                        297
                    ]
                }
            ],
            "createTournament": [
                48,
                {
                    "input": [
                        348,
                        "CreateTournamentInput!"
                    ]
                }
            ],
            "updateTournament": [
                48,
                {
                    "input": [
                        351,
                        "UpdateTournamentInput!"
                    ],
                    "id": [
                        297,
                        "ID!"
                    ]
                }
            ],
            "deleteTournament": [
                2,
                {
                    "id": [
                        297,
                        "ID!"
                    ]
                }
            ],
            "startTournamentStep": [
                2,
                {
                    "stepId": [
                        297,
                        "ID!"
                    ]
                }
            ],
            "createTournamentStep": [
                129,
                {
                    "tournamentId": [
                        297,
                        "ID!"
                    ],
                    "configuration": [
                        274,
                        "StepConfigurationInput!"
                    ],
                    "step": [
                        352,
                        "CreateTournamentStepInput!"
                    ]
                }
            ],
            "updateTournamentStep": [
                129,
                {
                    "stepId": [
                        297,
                        "ID!"
                    ],
                    "configuration": [
                        274,
                        "StepConfigurationInput!"
                    ],
                    "step": [
                        352,
                        "CreateTournamentStepInput!"
                    ]
                }
            ],
            "deleteTournamentStep": [
                2,
                {
                    "stepId": [
                        297,
                        "ID!"
                    ]
                }
            ],
            "generateTournamentStep": [
                2,
                {
                    "stepId": [
                        297,
                        "ID!"
                    ],
                    "teamsCount": [
                        71,
                        "Int!"
                    ]
                }
            ],
            "seedTournamentStep": [
                2,
                {
                    "stepId": [
                        297,
                        "ID!"
                    ],
                    "input": [
                        353,
                        "SeedingInput!"
                    ]
                }
            ],
            "updateMatchScores": [
                123,
                {
                    "matchId": [
                        297,
                        "ID!"
                    ],
                    "input": [
                        359,
                        "[UpdateMatchScoreInput!]!"
                    ]
                }
            ],
            "registerCustomTournamentTeams": [
                115,
                {
                    "tournamentId": [
                        297,
                        "ID!"
                    ],
                    "input": [
                        361,
                        "RegisterCustomTeamsInput!"
                    ]
                }
            ],
            "registerTournamentTeam": [
                115,
                {
                    "tournamentId": [
                        297,
                        "ID!"
                    ],
                    "input": [
                        364,
                        "RegisterTournamentTeamInput!"
                    ]
                }
            ],
            "updateTournamentTeam": [
                115,
                {
                    "input": [
                        365,
                        "UpdateTournamentTeamInput!"
                    ],
                    "tournamentId": [
                        297
                    ],
                    "teamId": [
                        297
                    ]
                }
            ],
            "deleteTournamentTeam": [
                2,
                {
                    "tournamentId": [
                        297,
                        "ID!"
                    ]
                }
            ],
            "deleteAnyTournamentTeam": [
                2,
                {
                    "teamId": [
                        297,
                        "ID!"
                    ]
                }
            ],
            "confirmTournamentTeam": [
                115,
                {
                    "teamId": [
                        297,
                        "ID!"
                    ],
                    "confirm": [
                        2,
                        "Boolean!"
                    ]
                }
            ],
            "confirmTournamentAttendance": [
                115,
                {
                    "tournamentId": [
                        297,
                        "ID!"
                    ],
                    "attendance": [
                        2,
                        "Boolean!"
                    ]
                }
            ],
            "updateTournamentTeamStatus": [
                115,
                {
                    "tournamentTeamId": [
                        297,
                        "ID!"
                    ],
                    "status": [
                        50,
                        "TournamentTeamStatus!"
                    ]
                }
            ],
            "inviteTournamentTeamMember": [
                2,
                {
                    "tournamentId": [
                        297,
                        "ID!"
                    ],
                    "playerId": [
                        297,
                        "ID!"
                    ]
                }
            ],
            "answerToTournamentTeamInvite": [
                2,
                {
                    "teamId": [
                        297,
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
                        297,
                        "ID!"
                    ],
                    "playerId": [
                        297,
                        "ID!"
                    ]
                }
            ],
            "tournamentAdminUpsert": [
                142,
                {
                    "input": [
                        366,
                        "TournamentAdminUpsertInput!"
                    ]
                }
            ],
            "tournamentAdminDelete": [
                2,
                {
                    "input": [
                        367,
                        "TournamentAdminDeleteInput!"
                    ]
                }
            ],
            "stripeCreatePortalSession": [
                1
            ],
            "platformFileCreate": [
                201,
                {
                    "input": [
                        368,
                        "PlatformCdnFileCreateInput!"
                    ],
                    "platformId": [
                        297
                    ],
                    "templateId": [
                        297
                    ]
                }
            ],
            "platformFilePublish": [
                201,
                {
                    "id": [
                        297,
                        "ID!"
                    ]
                }
            ],
            "platformFileGenerateUploadUrl": [
                204,
                {
                    "id": [
                        297,
                        "ID!"
                    ],
                    "size": [
                        15,
                        "Float!"
                    ]
                }
            ],
            "platformFileValidateFileUpload": [
                201,
                {
                    "id": [
                        297,
                        "ID!"
                    ]
                }
            ],
            "platformFileUpdate": [
                201,
                {
                    "id": [
                        297,
                        "ID!"
                    ],
                    "input": [
                        369,
                        "PlatformFileUpdateInput!"
                    ]
                }
            ],
            "platformFileDelete": [
                323,
                {
                    "id": [
                        297,
                        "ID!"
                    ]
                }
            ],
            "platformCreate": [
                228,
                {
                    "input": [
                        370,
                        "CreatePlatformInput!"
                    ]
                }
            ],
            "platformUpdate": [
                228,
                {
                    "id": [
                        297,
                        "ID!"
                    ],
                    "input": [
                        371,
                        "UpdatePlatformInput!"
                    ]
                }
            ],
            "platformDelete": [
                323,
                {
                    "id": [
                        297,
                        "ID!"
                    ]
                }
            ],
            "platformRegisterCustomDomain": [
                89,
                {
                    "platformId": [
                        297,
                        "ID!"
                    ],
                    "hostname": [
                        1,
                        "String!"
                    ]
                }
            ],
            "platformForceCustomDomainRecheck": [
                89,
                {
                    "hostname": [
                        1,
                        "String!"
                    ]
                }
            ],
            "platformRemoveCustomDomain": [
                323,
                {
                    "hostname": [
                        1,
                        "String!"
                    ]
                }
            ],
            "platformTemplateCreate": [
                229,
                {
                    "input": [
                        372,
                        "CreatePlatformTemplateInput!"
                    ]
                }
            ],
            "platformTemplateUpdate": [
                229,
                {
                    "id": [
                        297,
                        "ID!"
                    ],
                    "input": [
                        373,
                        "UpdatePlatformTemplateInput!"
                    ]
                }
            ],
            "platformTemplateApply": [
                228,
                {
                    "platformTemplateId": [
                        297,
                        "ID!"
                    ],
                    "platformId": [
                        297,
                        "ID!"
                    ]
                }
            ],
            "platformTemplateDelete": [
                323,
                {
                    "id": [
                        297,
                        "ID!"
                    ]
                }
            ],
            "organizationSubscriptionItemsUpdate": [
                323,
                {
                    "items": [
                        374,
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
                254,
                {
                    "organizationSkillRatingId": [
                        297,
                        "ID!"
                    ],
                    "input": [
                        375,
                        "OrganizationSkillRatingsRegisterMatchInput!"
                    ]
                }
            ],
            "organizationSkillRatingCreate": [
                255,
                {
                    "input": [
                        377,
                        "OrganizationSkillRatingCreateInput!"
                    ]
                }
            ],
            "organizationSkillRatingUpdate": [
                255,
                {
                    "id": [
                        297,
                        "ID!"
                    ],
                    "input": [
                        378,
                        "OrganizationSkillRatingUpdateInput!"
                    ]
                }
            ],
            "organizationSkillRatingDelete": [
                323,
                {
                    "id": [
                        297,
                        "ID!"
                    ]
                }
            ],
            "eventCreate": [
                176,
                {
                    "input": [
                        379,
                        "EventCreateInput!"
                    ]
                }
            ],
            "eventUpdate": [
                176,
                {
                    "input": [
                        380,
                        "EventUpdateInput!"
                    ],
                    "id": [
                        297,
                        "ID!"
                    ]
                }
            ],
            "eventDelete": [
                2,
                {
                    "id": [
                        297,
                        "ID!"
                    ]
                }
            ],
            "eventTicketConfigurationCreate": [
                211,
                {
                    "input": [
                        381,
                        "EventTicketConfigurationCreateInput!"
                    ]
                }
            ],
            "eventTicketConfigurationUpdate": [
                211,
                {
                    "ticketConfigurationId": [
                        297,
                        "ID!"
                    ],
                    "input": [
                        382,
                        "EventTicketConfigurationUpdateInput!"
                    ]
                }
            ],
            "eventTicketConfigurationDelete": [
                211,
                {
                    "ticketConfigurationId": [
                        297,
                        "ID!"
                    ]
                }
            ],
            "eventReservationUpdateStatus": [
                184,
                {
                    "reservationId": [
                        297,
                        "ID!"
                    ],
                    "status": [
                        185,
                        "EventReservationStatus!"
                    ],
                    "confirmPaymentRefundOrCancel": [
                        2
                    ]
                }
            ],
            "eventReservationConfirmPresence": [
                184,
                {
                    "eventId": [
                        297,
                        "ID!"
                    ],
                    "confirmed": [
                        2,
                        "Boolean!"
                    ]
                }
            ],
            "eventReservationValidateAndPay": [
                190,
                {
                    "eventId": [
                        297,
                        "ID!"
                    ],
                    "options": [
                        383,
                        "EventReservationValidateAndPayInput!"
                    ],
                    "ticketConfigurations": [
                        385,
                        "[EventReservationTicketConfigurationInput!]"
                    ]
                }
            ],
            "eventReservationCreate": [
                184,
                {
                    "eventId": [
                        297,
                        "ID!"
                    ]
                }
            ],
            "eventReservationUpdateTickets": [
                184,
                {
                    "reservationId": [
                        297,
                        "ID!"
                    ],
                    "input": [
                        386,
                        "EventReservationUpdateTicketsInput!"
                    ]
                }
            ],
            "eventReservationStartRegistrationSession": [
                184,
                {
                    "eventId": [
                        297,
                        "ID!"
                    ],
                    "input": [
                        388,
                        "EventReservationRegisterTicketsInput!"
                    ]
                }
            ],
            "eventReservationCancel": [
                184,
                {
                    "reservationId": [
                        297,
                        "ID!"
                    ]
                }
            ],
            "eventVenueRequestImageUpdate": [
                204,
                {
                    "id": [
                        297,
                        "ID!"
                    ],
                    "size": [
                        15,
                        "Float!"
                    ]
                }
            ],
            "eventVenueValidateImage": [
                207,
                {
                    "id": [
                        297,
                        "ID!"
                    ]
                }
            ],
            "eventVenueCreate": [
                207,
                {
                    "input": [
                        389,
                        "EventVenueCreateInput!"
                    ]
                }
            ],
            "eventVenueUpdate": [
                207,
                {
                    "id": [
                        297,
                        "ID!"
                    ],
                    "input": [
                        390,
                        "EventVenueUpdateInput!"
                    ]
                }
            ],
            "eventVenueDelete": [
                207,
                {
                    "id": [
                        297,
                        "ID!"
                    ]
                }
            ],
            "eventVenueSeatsUpdate": [
                169,
                {
                    "venueId": [
                        297,
                        "ID!"
                    ],
                    "input": [
                        391,
                        "EventVenueSeatsUpdateInput!"
                    ]
                }
            ],
            "eventVenueSeatTypeCreate": [
                196,
                {
                    "venueId": [
                        297,
                        "ID!"
                    ],
                    "input": [
                        394,
                        "EventVenueSeatTypeCreateInput!"
                    ]
                }
            ],
            "eventVenueSeatTypeUpdate": [
                196,
                {
                    "id": [
                        297,
                        "ID!"
                    ],
                    "input": [
                        395,
                        "EventVenueSeatTypeUpdateInput!"
                    ]
                }
            ],
            "eventVenueSeatTypeDelete": [
                196,
                {
                    "id": [
                        297,
                        "ID!"
                    ]
                }
            ],
            "organizationPaymentCollectionConfigurationCreateOrUpdateAccount": [
                1
            ],
            "emailSent": [
                2,
                {
                    "fromTemplate": [
                        396
                    ],
                    "fromCustom": [
                        397
                    ]
                }
            ],
            "emailConfigurationUpdate": [
                153,
                {
                    "input": [
                        284,
                        "EmailConfigurationInput!"
                    ]
                }
            ],
            "emailTemplateCreate": [
                154,
                {
                    "input": [
                        398,
                        "EmailTemplateCreateInput!"
                    ]
                }
            ],
            "emailTemplateUpdate": [
                154,
                {
                    "id": [
                        297,
                        "ID!"
                    ],
                    "input": [
                        399,
                        "EmailTemplateUpdateInput!"
                    ]
                }
            ],
            "emailTemplateDelete": [
                154,
                {
                    "id": [
                        297,
                        "ID!"
                    ]
                }
            ],
            "userGroupInvite": [
                158,
                {
                    "groupId": [
                        297,
                        "ID!"
                    ],
                    "playerId": [
                        297,
                        "ID!"
                    ]
                }
            ],
            "userGroupUpdateInvite": [
                158,
                {
                    "groupId": [
                        297,
                        "ID!"
                    ],
                    "status": [
                        159,
                        "UserGroupMemberStatus!"
                    ]
                }
            ],
            "userGroupDeleteInvite": [
                158,
                {
                    "groupId": [
                        297,
                        "ID!"
                    ],
                    "playerId": [
                        297
                    ]
                }
            ],
            "shopCreate": [
                246,
                {
                    "input": [
                        400,
                        "ShopCreateInput!"
                    ]
                }
            ],
            "shopUpdate": [
                246,
                {
                    "id": [
                        297,
                        "ID!"
                    ],
                    "input": [
                        401,
                        "ShopUpdateInput!"
                    ]
                }
            ],
            "shopDelete": [
                246,
                {
                    "id": [
                        297,
                        "ID!"
                    ]
                }
            ],
            "shopCategoryCreate": [
                239,
                {
                    "input": [
                        402,
                        "ShopCategoryCreateInput!"
                    ]
                }
            ],
            "shopCategoryUpdate": [
                239,
                {
                    "id": [
                        297,
                        "ID!"
                    ],
                    "input": [
                        403,
                        "ShopCategoryUpdateInput!"
                    ]
                }
            ],
            "shopCategoryDelete": [
                239,
                {
                    "id": [
                        297,
                        "ID!"
                    ]
                }
            ],
            "playerShopProductPurshase": [
                235,
                {
                    "shopId": [
                        297,
                        "ID!"
                    ],
                    "paymentConfig": [
                        404
                    ],
                    "input": [
                        405,
                        "PlayerShopProductPurshaseInput!"
                    ]
                }
            ],
            "shopProductCreate": [
                243,
                {
                    "shopId": [
                        297,
                        "ID!"
                    ],
                    "input": [
                        407,
                        "ShopProductCreateInput!"
                    ]
                }
            ],
            "shopProductUpdate": [
                243,
                {
                    "productId": [
                        297,
                        "ID!"
                    ],
                    "input": [
                        408,
                        "ShopProductUpdateInput!"
                    ]
                }
            ],
            "shopProductDelete": [
                243,
                {
                    "productId": [
                        297,
                        "ID!"
                    ]
                }
            ],
            "itemCreate": [
                213,
                {
                    "input": [
                        409,
                        "ItemCreateInput!"
                    ]
                }
            ],
            "itemUpdate": [
                213,
                {
                    "id": [
                        297,
                        "ID!"
                    ],
                    "input": [
                        410,
                        "ItemUpdateInput!"
                    ]
                }
            ],
            "itemDelete": [
                213,
                {
                    "id": [
                        297,
                        "ID!"
                    ]
                }
            ],
            "playerItemsUpdate": [
                216,
                {
                    "playerId": [
                        297,
                        "ID!"
                    ],
                    "input": [
                        411,
                        "PlayerItemsUpdateInput!"
                    ]
                }
            ],
            "itemCategoryCreate": [
                219,
                {
                    "input": [
                        413,
                        "ItemCategoryCreateInput!"
                    ]
                }
            ],
            "itemCategoryUpdate": [
                219,
                {
                    "id": [
                        297,
                        "ID!"
                    ],
                    "input": [
                        414,
                        "ItemCategoryUpdateInput!"
                    ]
                }
            ],
            "itemCategoryDelete": [
                219,
                {
                    "id": [
                        297,
                        "ID!"
                    ]
                }
            ],
            "currencyCreate": [
                144,
                {
                    "input": [
                        415,
                        "CurrencyCreateInput!"
                    ]
                }
            ],
            "currencyUpdate": [
                144,
                {
                    "id": [
                        297,
                        "ID!"
                    ],
                    "input": [
                        416,
                        "CurrencyUpdateInput!"
                    ]
                }
            ],
            "currencyDelete": [
                144,
                {
                    "id": [
                        297,
                        "ID!"
                    ]
                }
            ],
            "playerCurrencyUpdate": [
                147,
                {
                    "playerId": [
                        297,
                        "ID!"
                    ],
                    "input": [
                        417,
                        "[PlayerCurrencyUpdateInput!]!"
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
            "configuration": [
                92
            ],
            "__typename": [
                1
            ]
        },
        "LeaderboardRegisterPlayerScoreInput": {
            "leaderboardId": [
                297
            ],
            "playerId": [
                297
            ],
            "score": [
                320
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
                81
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
                81
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
                329
            ],
            "__typename": [
                1
            ]
        },
        "OrganizationConfigurationInput": {
            "customFields": [
                266
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
                329
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
                265
            ],
            "__typename": [
                1
            ]
        },
        "SetOrganizationMembershipInput": {
            "userId": [
                297
            ],
            "email": [
                67
            ],
            "permissions": [
                265
            ],
            "groupId": [
                297
            ],
            "__typename": [
                1
            ]
        },
        "DeleteOrganizationMembershipInput": {
            "userId": [
                297
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
                297
            ],
            "name": [
                1
            ],
            "oauth2Configuration": [
                335
            ],
            "openidConfiguration": [
                336
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
                264
            ],
            "issuer": [
                1
            ],
            "providerType": [
                108
            ],
            "clientId": [
                1
            ],
            "clientSecret": [
                1
            ],
            "tokenEndpointAuthMethod": [
                109
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
            "__typename": [
                1
            ]
        },
        "OpenidConfigurationInput": {
            "authorizationEndpoint": [
                1
            ],
            "dataRetrievers": [
                264
            ],
            "issuer": [
                1
            ],
            "providerType": [
                108
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
                335
            ],
            "openidConfiguration": [
                336
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
            "secret": [
                1
            ],
            "public": [
                2
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
            "secret": [
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
        "CreateWebhookInput": {
            "events": [
                120
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
                120
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
                265
            ],
            "groupId": [
                297
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
        "CreatePlayerInput": {
            "username": [
                1
            ],
            "description": [
                1
            ],
            "ownerId": [
                297
            ],
            "organizationCustomId": [
                1
            ],
            "customFields": [
                345
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
                297
            ],
            "organizationCustomId": [
                1
            ],
            "customFields": [
                345
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
                345
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
                349
            ],
            "__typename": [
                1
            ]
        },
        "UpdateTournamentConfigurationOrImportFromIdInput": {
            "fromId": [
                297
            ],
            "configuration": [
                350
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
                15
            ],
            "teamMaxSize": [
                15
            ],
            "teamsCount": [
                15
            ],
            "teamStatusAfterRegistration": [
                47
            ],
            "registrationConditions": [
                282
            ],
            "customFields": [
                266
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
                349
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
                130
            ],
            "properties": [
                267
            ],
            "__typename": [
                1
            ]
        },
        "SeedingInput": {
            "automaticSeeding": [
                354
            ],
            "manualSeeding": [
                357
            ],
            "__typename": [
                1
            ]
        },
        "AutomaticSeedingInput": {
            "seedingMechanism": [
                355
            ],
            "groupRepartitionMechanism": [
                356
            ],
            "teams": [
                297
            ],
            "__typename": [
                1
            ]
        },
        "SeedingMechanism": {},
        "GroupRepartitionMechanism": {},
        "ManualSeedingInput": {
            "groups": [
                358
            ],
            "__typename": [
                1
            ]
        },
        "ManualSeedingGroupInput": {
            "group": [
                297
            ],
            "teams": [
                297
            ],
            "__typename": [
                1
            ]
        },
        "UpdateMatchScoreInput": {
            "teamId": [
                297
            ],
            "variables": [
                360
            ],
            "forcedScoreValue": [
                15
            ],
            "status": [
                139
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
                362
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
                267
            ],
            "fromExistingTeamId": [
                297
            ],
            "members": [
                363
            ],
            "status": [
                50
            ],
            "__typename": [
                1
            ]
        },
        "CustomTeamMemberInput": {
            "playerId": [
                297
            ],
            "player": [
                344
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
                267
            ],
            "fromExistingTeamId": [
                297
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
                267
            ],
            "__typename": [
                1
            ]
        },
        "TournamentAdminUpsertInput": {
            "tournamentId": [
                297
            ],
            "accountId": [
                297
            ],
            "permissions": [
                143
            ],
            "__typename": [
                1
            ]
        },
        "TournamentAdminDeleteInput": {
            "tournamentId": [
                297
            ],
            "accountId": [
                297
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
                202
            ],
            "config": [
                291
            ],
            "__typename": [
                1
            ]
        },
        "PlatformFileUpdateInput": {
            "config": [
                291
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
                294
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
                294
            ],
            "appId": [
                1
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
                205
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
                205
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
                297
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
                376
            ],
            "__typename": [
                1
            ]
        },
        "OrganizationSkillRatingsRegisterMatchTeamInput": {
            "players": [
                297
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
                256
            ],
            "configuration": [
                296
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
                256
            ],
            "configuration": [
                296
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
                288
            ],
            "eventVenueId": [
                297
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
                288
            ],
            "eventVenueId": [
                297
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
                212
            ],
            "maxCount": [
                15
            ],
            "buyable": [
                2
            ],
            "eventId": [
                297
            ],
            "seatTypeId": [
                297
            ],
            "configuration": [
                293
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
                212
            ],
            "maxCount": [
                15
            ],
            "buyable": [
                2
            ],
            "seatTypeId": [
                297
            ],
            "configuration": [
                293
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
                384
            ],
            "__typename": [
                1
            ]
        },
        "StripeUiMode": {},
        "EventReservationTicketConfigurationInput": {
            "ticketId": [
                297
            ],
            "customFields": [
                267
            ],
            "__typename": [
                1
            ]
        },
        "EventReservationUpdateTicketsInput": {
            "ticketIdsToRelease": [
                297
            ],
            "ticketIdsToAdd": [
                387
            ],
            "ticketConfigurations": [
                385
            ],
            "__typename": [
                1
            ]
        },
        "EventReservationRegisterTicketInput": {
            "ticketConfigurationId": [
                297
            ],
            "quantity": [
                15
            ],
            "reservedSeats": [
                297
            ],
            "__typename": [
                1
            ]
        },
        "EventReservationRegisterTicketsInput": {
            "tickets": [
                387
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
                392
            ],
            "createSeats": [
                393
            ],
            "deleteSeats": [
                297
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
                287
            ],
            "seatTypeId": [
                297
            ],
            "id": [
                297
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
                287
            ],
            "seatTypeId": [
                297
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
                289
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
                289
            ],
            "__typename": [
                1
            ]
        },
        "EmailSentFromTemplateInput": {
            "triggerEvent": [
                152
            ],
            "playerIds": [
                297
            ],
            "variables": [
                267
            ],
            "__typename": [
                1
            ]
        },
        "EmailSentFromCustomInput": {
            "emailField": [
                279
            ],
            "playerIds": [
                297
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
                152
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
                152
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
        "ShopCreateInput": {
            "name": [
                1
            ],
            "description": [
                1
            ],
            "metadata": [
                267
            ],
            "__typename": [
                1
            ]
        },
        "ShopUpdateInput": {
            "name": [
                1
            ],
            "description": [
                1
            ],
            "metadata": [
                267
            ],
            "__typename": [
                1
            ]
        },
        "ShopCategoryCreateInput": {
            "name": [
                1
            ],
            "description": [
                1
            ],
            "metadata": [
                267
            ],
            "shopId": [
                297
            ],
            "__typename": [
                1
            ]
        },
        "ShopCategoryUpdateInput": {
            "name": [
                1
            ],
            "description": [
                1
            ],
            "metadata": [
                267
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
                384
            ],
            "__typename": [
                1
            ]
        },
        "PlayerShopProductPurshaseInput": {
            "items": [
                406
            ],
            "__typename": [
                1
            ]
        },
        "PlayerShopProductPurshaseItemInput": {
            "shopProductId": [
                297
            ],
            "quantity": [
                71
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
                297
            ],
            "price": [
                15
            ],
            "configuration": [
                295
            ],
            "metadata": [
                267
            ],
            "visibleAt": [
                9
            ],
            "currency": [
                212
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
                297
            ],
            "price": [
                15
            ],
            "configuration": [
                295
            ],
            "metadata": [
                267
            ],
            "visibleAt": [
                9
            ],
            "currency": [
                212
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
                267
            ],
            "categoryId": [
                297
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
                267
            ],
            "categoryId": [
                297
            ],
            "__typename": [
                1
            ]
        },
        "PlayerItemsUpdateInput": {
            "items": [
                412
            ],
            "__typename": [
                1
            ]
        },
        "PlayerItemsUpdateItemInput": {
            "itemId": [
                297
            ],
            "set": [
                71
            ],
            "add": [
                71
            ],
            "remove": [
                71
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
                267
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
                267
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
                267
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
                267
            ],
            "__typename": [
                1
            ]
        },
        "PlayerCurrencyUpdateInput": {
            "items": [
                418
            ],
            "__typename": [
                1
            ]
        },
        "PlayerCurrencyUpdateItemInput": {
            "currencyId": [
                297
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
        "Subscription": {
            "presenceUserConnected": [
                232
            ],
            "presenceUserDisconnected": [
                234
            ],
            "__typename": [
                1
            ]
        }
    }
}