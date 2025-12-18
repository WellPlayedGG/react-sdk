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
        245,
        258,
        260,
        301,
        308,
        309,
        310,
        315,
        316,
        329,
        332,
        364,
        365,
        393
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
                301
            ],
            "name": [
                1
            ],
            "permissions": [
                11
            ],
            "organizationId": [
                301
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
                301
            ],
            "groupId": [
                301
            ],
            "memberId": [
                301
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
                301
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
                301
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
                301
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
                301
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
                301
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
                301
            ],
            "tournamentSeriesId": [
                301
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
                301
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
                301
            ],
            "ownerId": [
                301
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
                301
            ],
            "organizationIdentityProviderId": [
                301
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
                301
            ],
            "username": [
                1
            ],
            "description": [
                1
            ],
            "ownerId": [
                301
            ],
            "organizationCustomId": [
                301
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
                301
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
                        301,
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
                301
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
                301
            ],
            "organizationId": [
                301
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
                301
            ],
            "playerProfileId": [
                301
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
                301
            ],
            "organizationId": [
                301
            ],
            "ownerId": [
                301
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
                301
            ],
            "leaderboardId": [
                301
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
                301
            ],
            "seasonId": [
                301
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
                301
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
                301
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
                301
            ],
            "organizationId": [
                301
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
                301
            ],
            "groupId": [
                301
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
                301
            ],
            "identityProviderId": [
                301
            ],
            "configuration": [
                106
            ],
            "name": [
                1
            ],
            "organizationId": [
                301
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
                301
            ],
            "playerProfileId": [
                301
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
                301
            ],
            "name": [
                1
            ],
            "tag": [
                1
            ],
            "teamId": [
                301
            ],
            "managerId": [
                301
            ],
            "tournamentId": [
                301
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
                301
            ],
            "organizationId": [
                301
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
                301
            ],
            "ratingId": [
                301
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
                301
            ],
            "order": [
                15
            ],
            "status": [
                124
            ],
            "tournamentStepGroupRoundGameId": [
                301
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
                301
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
                301
            ],
            "tournamentId": [
                301
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
                301
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
                301
            ],
            "winningGameId": [
                301
            ],
            "losingGameId": [
                301
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
                301
            ],
            "name": [
                1
            ],
            "configuration": [
                29
            ],
            "tournamentStepGroupId": [
                301
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
                301
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
                301
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
                301
            ],
            "teamId": [
                301
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
                301
            ],
            "accountId": [
                301
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
                301
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
                301
            ],
            "playerProfileId": [
                301
            ],
            "currencyId": [
                301
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
                301
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
                301
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
                301
            ],
            "groupId": [
                301
            ],
            "playerProfileId": [
                301
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
                301
            ],
            "organizationId": [
                301
            ],
            "managerId": [
                301
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
                301
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
                301
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
                301
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
                301
            ],
            "organizationId": [
                301
            ],
            "createdById": [
                301
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
                301
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
                301
            ],
            "organizationId": [
                301
            ],
            "createdById": [
                301
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
                301
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
                301
            ],
            "organizationId": [
                301
            ],
            "createdById": [
                301
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
                301
            ],
            "ticketId": [
                301
            ],
            "reservationId": [
                301
            ],
            "groupMemberId": [
                301
            ],
            "seatId": [
                301
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
                301
            ],
            "ticketId": [
                301
            ],
            "reservationId": [
                301
            ],
            "groupMemberId": [
                301
            ],
            "seatId": [
                301
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
                301
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
                301
            ],
            "groupId": [
                301
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
                301
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
                301
            ],
            "groupId": [
                301
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
                301
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
                301
            ],
            "groupId": [
                301
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
                301
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
                301
            ],
            "status": [
                192
            ],
            "reservedByTicketId": [
                301
            ],
            "reservedByReservationId": [
                301
            ],
            "reservedByGroupMemberId": [
                301
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
                301
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
                301
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
                301
            ],
            "platformId": [
                301
            ],
            "platformTemplateId": [
                301
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
                301
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
                301
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
                301
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
                301
            ],
            "seatTypeId": [
                301
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
                301
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
                301
            ],
            "categoryId": [
                301
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
                301
            ],
            "playerProfileId": [
                301
            ],
            "itemId": [
                301
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
                301
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
                301
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
                301
            ],
            "type": [
                223
            ],
            "resourceId": [
                301
            ],
            "data": [
                91
            ],
            "organizationId": [
                301
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
                301
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
                301
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
                301
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
                301
            ],
            "organizationId": [
                301
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
                301
            ],
            "serverId": [
                301
            ],
            "playerId": [
                301
            ],
            "accountId": [
                301
            ],
            "organizationId": [
                301
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
                301
            ],
            "serverId": [
                301
            ],
            "playerId": [
                301
            ],
            "accountId": [
                301
            ],
            "organizationId": [
                301
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
                301
            ],
            "playerProfileId": [
                301
            ],
            "shopProductId": [
                301
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
                301
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
                301
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
        "EntityQuantity": {
            "id": [
                301
            ],
            "quantity": [
                71
            ],
            "__typename": [
                1
            ]
        },
        "ShopItemQuantity": {
            "type": [
                245
            ],
            "id": [
                301
            ],
            "quantity": [
                71
            ],
            "__typename": [
                1
            ]
        },
        "ShopProductItemType": {},
        "ShopProduct": {
            "id": [
                301
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
                301
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
                301
            ],
            "currency": [
                212
            ],
            "items": [
                244
            ],
            "currencyPrices": [
                243
            ],
            "__typename": [
                1
            ]
        },
        "ShopProducts": {
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
        "ShopProductEdge": {
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
        "Shop": {
            "id": [
                301
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
                301
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
        "ShopEdge": {
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
        "ShopProductItem": {
            "id": [
                301
            ],
            "currencyId": [
                301
            ],
            "createdAt": [
                9
            ],
            "updatedAt": [
                9
            ],
            "type": [
                245
            ],
            "shopItemId": [
                301
            ],
            "itemId": [
                301
            ],
            "quantity": [
                71
            ],
            "__typename": [
                1
            ]
        },
        "ShopProductItems": {
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
        "ShopProductItemEdge": {
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
        "SkillRatingConfiguration": {
            "updateLeaderboardId": [
                301
            ],
            "__typename": [
                1
            ]
        },
        "OrganizationSkillRatingsRegisterMatchPlayer": {
            "id": [
                301
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
                301
            ],
            "name": [
                1
            ],
            "description": [
                1
            ],
            "type": [
                258
            ],
            "configuration": [
                255
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
                260
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
                301
            ],
            "name": [
                1
            ],
            "description": [
                1
            ],
            "limitsOverride": [
                259
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
                301
            ],
            "subscriptionItemId": [
                301
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
                261
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
                263
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
                265
            ],
            "mappingConfiguration": [
                264
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
                270
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
                271
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
                272
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
                274
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
                275
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
                301
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
                277
            ],
            "stringCondition": [
                279
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
                301
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
                301
            ],
            "condition": [
                280
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
                279
            ],
            "numericCondition": [
                278
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
                283
            ],
            "memberConditions": [
                282
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
                284
            ],
            "customFields": [
                268
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
                281
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
                288
            ],
            "__typename": [
                1
            ]
        },
        "EventConfigurationInput": {
            "customFields": [
                268
            ],
            "groupConfiguration": [
                287
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
                292
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
                268
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
        "EntityQuantityInput": {
            "id": [
                301
            ],
            "quantity": [
                71
            ],
            "__typename": [
                1
            ]
        },
        "ShopItemQuantityInput": {
            "type": [
                245
            ],
            "id": [
                301
            ],
            "quantity": [
                71
            ],
            "__typename": [
                1
            ]
        },
        "SkillRatingConfigurationInput": {
            "updateLeaderboardId": [
                301
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
                        301
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
                        301,
                        "ID!"
                    ]
                }
            ],
            "leaderboardCurrentPlayerRanking": [
                70,
                {
                    "input": [
                        303,
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
                        301,
                        "ID!"
                    ]
                }
            ],
            "currentLeaderboardSeason": [
                77,
                {
                    "leaderboardId": [
                        301,
                        "ID!"
                    ]
                }
            ],
            "leaderboardSeasons": [
                78,
                {
                    "leaderboardId": [
                        301,
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
                        301,
                        "ID!"
                    ]
                }
            ],
            "leaderboardSeasonBuckets": [
                82,
                {
                    "seasonId": [
                        301,
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
                        301,
                        "ID!"
                    ]
                }
            ],
            "leaderboardSeasonBucketScores": [
                72,
                {
                    "leaderboardSeasonBucketId": [
                        301,
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
                        301,
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
                        260,
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
                        301,
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
                304
            ],
            "identityProvider": [
                105,
                {
                    "id": [
                        301,
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
                        301,
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
                        301,
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
                        301,
                        "[ID!]"
                    ],
                    "page": [
                        49,
                        "PageInfo!"
                    ],
                    "identityProviders": [
                        301,
                        "[ID!]"
                    ],
                    "identityProviderProperties": [
                        1,
                        "[String!]"
                    ],
                    "query": [
                        306
                    ]
                }
            ],
            "player": [
                63,
                {
                    "id": [
                        301
                    ],
                    "ownerId": [
                        301
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
                        301,
                        "ID!"
                    ],
                    "skillRatingIds": [
                        301,
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
                        301,
                        "ID!"
                    ]
                }
            ],
            "tournament": [
                48,
                {
                    "id": [
                        301,
                        "ID!"
                    ]
                }
            ],
            "tournaments": [
                132,
                {
                    "query": [
                        307,
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
                        301,
                        "ID!"
                    ]
                }
            ],
            "tournamentStep": [
                129,
                {
                    "id": [
                        301,
                        "ID!"
                    ]
                }
            ],
            "tournamentStepGeneratedShape": [
                137,
                {
                    "stepId": [
                        301,
                        "ID!"
                    ]
                }
            ],
            "match": [
                123,
                {
                    "matchId": [
                        301,
                        "ID!"
                    ]
                }
            ],
            "tournamentTeam": [
                115,
                {
                    "teamId": [
                        301,
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
                        301,
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
                        269,
                        "[PropertyValueInput!]"
                    ],
                    "playerUsernameQuery": [
                        1
                    ],
                    "playerPropertiesFilter": [
                        269,
                        "[PropertyValueInput!]"
                    ],
                    "playerIdentityProviderPropertiesFilter": [
                        312,
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
                        301,
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
                        269,
                        "[PropertyValueInput!]"
                    ],
                    "orderByProperty": [
                        313
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
                        301
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
                        301,
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
                        301,
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
                        301
                    ],
                    "templateId": [
                        301
                    ]
                }
            ],
            "platformFile": [
                201,
                {
                    "id": [
                        301,
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
                        301,
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
                        301,
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
                        301,
                        "ID!"
                    ]
                }
            ],
            "subscriptionItems": [
                261
            ],
            "organizationCurrentSubscriptionItems": [
                262
            ],
            "organizationSkillRatings": [
                257
            ],
            "organizationSkillRating": [
                257,
                {
                    "id": [
                        301,
                        "ID!"
                    ]
                }
            ],
            "event": [
                178,
                {
                    "id": [
                        301,
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
                        314
                    ],
                    "eventIds": [
                        301,
                        "[ID!]"
                    ]
                }
            ],
            "eventTicketConfiguration": [
                211,
                {
                    "id": [
                        301,
                        "ID!"
                    ]
                }
            ],
            "eventTicketConfigurations": [
                211,
                {
                    "eventId": [
                        301,
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
                        301,
                        "[ID!]"
                    ]
                }
            ],
            "eventReservation": [
                184,
                {
                    "reservationId": [
                        301,
                        "ID!"
                    ]
                }
            ],
            "eventSeats": [
                193,
                {
                    "eventId": [
                        301,
                        "ID!"
                    ],
                    "page": [
                        49,
                        "PageInfo!"
                    ],
                    "eventVenueId": [
                        301
                    ],
                    "reservationIds": [
                        301,
                        "[ID!]"
                    ]
                }
            ],
            "eventReservations": [
                187,
                {
                    "eventId": [
                        301,
                        "ID!"
                    ],
                    "page": [
                        49,
                        "PageInfo!"
                    ],
                    "query": [
                        318,
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
                        301,
                        "ID!"
                    ]
                }
            ],
            "eventVenueSeats": [
                170,
                {
                    "venueId": [
                        301,
                        "ID!"
                    ],
                    "page": [
                        49,
                        "PageInfo!"
                    ],
                    "seatTypeId": [
                        301
                    ]
                }
            ],
            "eventVenueSeatTypes": [
                197,
                {
                    "venueId": [
                        301,
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
                        301,
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
                        301,
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
                        320,
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
                        301
                    ]
                }
            ],
            "presenceAnalytics": [
                230
            ],
            "shops": [
                250,
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
                        301,
                        "ID!"
                    ],
                    "playerId": [
                        301
                    ],
                    "page": [
                        49
                    ]
                }
            ],
            "shopProducts": [
                247,
                {
                    "shopId": [
                        301,
                        "ID!"
                    ],
                    "page": [
                        49
                    ],
                    "filter": [
                        321
                    ]
                }
            ],
            "shopProductItems": [
                253,
                {
                    "shopProductId": [
                        301,
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
                    ],
                    "filter": [
                        322
                    ]
                }
            ],
            "playerItems": [
                217,
                {
                    "playerId": [
                        301
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
                    ],
                    "filter": [
                        323
                    ]
                }
            ],
            "currencies": [
                145,
                {
                    "page": [
                        49
                    ],
                    "filter": [
                        324
                    ]
                }
            ],
            "playerCurrencies": [
                148,
                {
                    "playerId": [
                        301
                    ],
                    "page": [
                        49
                    ],
                    "filter": [
                        325
                    ]
                }
            ],
            "__typename": [
                1
            ]
        },
        "LeaderboardGetPlayerRankingInput": {
            "leaderboardId": [
                301
            ],
            "playerId": [
                301
            ],
            "seasonId": [
                301
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
                305
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
                301
            ],
            "name": [
                1
            ],
            "organizationId": [
                301
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
                308
            ],
            "orderDirection": [
                309
            ],
            "status": [
                310
            ],
            "showNotVisible": [
                2
            ],
            "filterByPlayers": [
                311
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
                301
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
                301
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
                309
            ],
            "__typename": [
                1
            ]
        },
        "EventsQuery": {
            "orderBy": [
                315
            ],
            "orderDirection": [
                309
            ],
            "status": [
                316
            ],
            "showNotVisible": [
                2
            ],
            "filterByPlayers": [
                317
            ],
            "__typename": [
                1
            ]
        },
        "EventsQueryOrderBy": {},
        "EventsQueryStatus": {},
        "EventsQueryPlayerIdWithTeamStatusInput": {
            "playerId": [
                301
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
                269
            ],
            "filterByPlayerProperties": [
                269
            ],
            "filterByPlayerIdentityProviderProperties": [
                312
            ],
            "filterByPlayers": [
                319
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
                301
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
                301
            ],
            "__typename": [
                1
            ]
        },
        "ShopProductsFilterInput": {
            "categoryIds": [
                301
            ],
            "ids": [
                301
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
                301
            ],
            "ids": [
                301
            ],
            "externalIds": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "ItemCategoriesFilterInput": {
            "ids": [
                301
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
                301
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
                301
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
                        301,
                        "ID!"
                    ]
                }
            ],
            "accountIdentityGenerateAccessToken": [
                1,
                {
                    "identityProviderId": [
                        301,
                        "ID!"
                    ],
                    "accountId": [
                        301
                    ]
                }
            ],
            "accountIdentityRefresh": [
                62,
                {
                    "identityProviderId": [
                        301,
                        "ID!"
                    ],
                    "accountId": [
                        301
                    ]
                }
            ],
            "attachOrUpdateIdentityToAccount": [
                62,
                {
                    "identityProviderId": [
                        301,
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
                        301,
                        "ID!"
                    ],
                    "input": [
                        327,
                        "CreateConfigurationInput!"
                    ]
                }
            ],
            "deleteConfiguration": [
                2,
                {
                    "id": [
                        301,
                        "ID!"
                    ]
                }
            ],
            "leaderboardRegisterPlayerScore": [
                70,
                {
                    "input": [
                        328,
                        "LeaderboardRegisterPlayerScoreInput!"
                    ]
                }
            ],
            "createLeaderboard": [
                74,
                {
                    "input": [
                        330,
                        "CreateLeaderboardInput!"
                    ]
                }
            ],
            "updateLeaderboard": [
                74,
                {
                    "id": [
                        301,
                        "ID!"
                    ],
                    "input": [
                        331,
                        "UpdateLeaderboardInput!"
                    ]
                }
            ],
            "deleteLeaderboard": [
                332,
                {
                    "id": [
                        301,
                        "ID!"
                    ]
                }
            ],
            "createLeaderboardSeason": [
                77,
                {
                    "leaderboardId": [
                        301,
                        "ID!"
                    ],
                    "input": [
                        333,
                        "CreateLeaderboardSeasonInput!"
                    ]
                }
            ],
            "updateLeaderboardSeason": [
                77,
                {
                    "id": [
                        301,
                        "ID!"
                    ],
                    "input": [
                        334,
                        "UpdateLeaderboardSeasonInput!"
                    ]
                }
            ],
            "deleteLeaderboardSeason": [
                332,
                {
                    "id": [
                        301,
                        "ID!"
                    ]
                }
            ],
            "createLeaderboardSeasonBucket": [
                80,
                {
                    "seasonId": [
                        301,
                        "ID!"
                    ],
                    "input": [
                        335,
                        "CreateLeaderboardSeasonBucketInput!"
                    ]
                }
            ],
            "updateLeaderboardSeasonBucket": [
                80,
                {
                    "id": [
                        301,
                        "ID!"
                    ],
                    "input": [
                        336,
                        "UpdateLeaderboardSeasonBucketInput!"
                    ]
                }
            ],
            "deleteLeaderboardSeasonBucket": [
                332,
                {
                    "id": [
                        301,
                        "ID!"
                    ]
                }
            ],
            "updateOrganization": [
                60,
                {
                    "organization": [
                        337,
                        "UpdateOrganizationInput!"
                    ]
                }
            ],
            "createOrganization": [
                60,
                {
                    "organization": [
                        339,
                        "CreateOrganizationInput!"
                    ]
                }
            ],
            "createOrganizationGroup": [
                7,
                {
                    "input": [
                        340,
                        "CreateOrganizationGroupInput!"
                    ]
                }
            ],
            "updateOrganizationGroup": [
                7,
                {
                    "id": [
                        301,
                        "ID!"
                    ],
                    "input": [
                        340,
                        "CreateOrganizationGroupInput!"
                    ]
                }
            ],
            "deleteOrganizationGroup": [
                2,
                {
                    "id": [
                        301,
                        "ID!"
                    ]
                }
            ],
            "setOrganizationMembership": [
                16,
                {
                    "input": [
                        341,
                        "SetOrganizationMembershipInput!"
                    ]
                }
            ],
            "deleteOrganizationMembership": [
                2,
                {
                    "input": [
                        342,
                        "DeleteOrganizationMembershipInput!"
                    ]
                }
            ],
            "createIdentityProvider": [
                105,
                {
                    "input": [
                        343,
                        "CreateOrganizationIdentityProvider!"
                    ]
                }
            ],
            "updateIdentityProvider": [
                105,
                {
                    "providerId": [
                        301,
                        "ID!"
                    ],
                    "input": [
                        346,
                        "UpdateOrganizationIdentityProvider!"
                    ]
                }
            ],
            "deleteIdentityProvider": [
                2,
                {
                    "id": [
                        301,
                        "ID!"
                    ]
                }
            ],
            "createOrganizationApp": [
                99,
                {
                    "input": [
                        347,
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
                        348,
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
                        349,
                        "CreateWebhookInput!"
                    ]
                }
            ],
            "updateWebhook": [
                121,
                {
                    "id": [
                        301,
                        "ID!"
                    ],
                    "input": [
                        350,
                        "UpdateWebhookInput!"
                    ]
                }
            ],
            "deleteWebhook": [
                121,
                {
                    "id": [
                        301,
                        "ID!"
                    ]
                }
            ],
            "regenerateWebhookSecret": [
                121,
                {
                    "id": [
                        301,
                        "ID!"
                    ]
                }
            ],
            "setOrganizationAttachedApp": [
                102,
                {
                    "input": [
                        351,
                        "SetOrganizationAttachedAppInput!"
                    ]
                }
            ],
            "deleteOrganizationAttachedApp": [
                2,
                {
                    "input": [
                        352,
                        "DeleteOrganizationAttachedAppInput!"
                    ]
                }
            ],
            "createPlayer": [
                63,
                {
                    "input": [
                        353,
                        "CreatePlayerInput!"
                    ]
                }
            ],
            "updatePlayer": [
                63,
                {
                    "input": [
                        355,
                        "UpdatePlayerInput!"
                    ],
                    "id": [
                        301
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
                        356,
                        "UpdateMePlayerInput!"
                    ]
                }
            ],
            "deletePlayer": [
                2,
                {
                    "id": [
                        301
                    ],
                    "customId": [
                        301
                    ]
                }
            ],
            "createTournament": [
                48,
                {
                    "input": [
                        357,
                        "CreateTournamentInput!"
                    ]
                }
            ],
            "updateTournament": [
                48,
                {
                    "input": [
                        360,
                        "UpdateTournamentInput!"
                    ],
                    "id": [
                        301,
                        "ID!"
                    ]
                }
            ],
            "deleteTournament": [
                2,
                {
                    "id": [
                        301,
                        "ID!"
                    ]
                }
            ],
            "startTournamentStep": [
                2,
                {
                    "stepId": [
                        301,
                        "ID!"
                    ]
                }
            ],
            "createTournamentStep": [
                129,
                {
                    "tournamentId": [
                        301,
                        "ID!"
                    ],
                    "configuration": [
                        276,
                        "StepConfigurationInput!"
                    ],
                    "step": [
                        361,
                        "CreateTournamentStepInput!"
                    ]
                }
            ],
            "updateTournamentStep": [
                129,
                {
                    "stepId": [
                        301,
                        "ID!"
                    ],
                    "configuration": [
                        276,
                        "StepConfigurationInput!"
                    ],
                    "step": [
                        361,
                        "CreateTournamentStepInput!"
                    ]
                }
            ],
            "deleteTournamentStep": [
                2,
                {
                    "stepId": [
                        301,
                        "ID!"
                    ]
                }
            ],
            "generateTournamentStep": [
                2,
                {
                    "stepId": [
                        301,
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
                        301,
                        "ID!"
                    ],
                    "input": [
                        362,
                        "SeedingInput!"
                    ]
                }
            ],
            "updateMatchScores": [
                123,
                {
                    "matchId": [
                        301,
                        "ID!"
                    ],
                    "input": [
                        368,
                        "[UpdateMatchScoreInput!]!"
                    ]
                }
            ],
            "registerCustomTournamentTeams": [
                115,
                {
                    "tournamentId": [
                        301,
                        "ID!"
                    ],
                    "input": [
                        370,
                        "RegisterCustomTeamsInput!"
                    ]
                }
            ],
            "registerTournamentTeam": [
                115,
                {
                    "tournamentId": [
                        301,
                        "ID!"
                    ],
                    "input": [
                        373,
                        "RegisterTournamentTeamInput!"
                    ]
                }
            ],
            "updateTournamentTeam": [
                115,
                {
                    "input": [
                        374,
                        "UpdateTournamentTeamInput!"
                    ],
                    "tournamentId": [
                        301
                    ],
                    "teamId": [
                        301
                    ]
                }
            ],
            "deleteTournamentTeam": [
                2,
                {
                    "tournamentId": [
                        301,
                        "ID!"
                    ]
                }
            ],
            "deleteAnyTournamentTeam": [
                2,
                {
                    "teamId": [
                        301,
                        "ID!"
                    ]
                }
            ],
            "confirmTournamentTeam": [
                115,
                {
                    "teamId": [
                        301,
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
                        301,
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
                        301,
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
                        301,
                        "ID!"
                    ],
                    "playerId": [
                        301,
                        "ID!"
                    ]
                }
            ],
            "answerToTournamentTeamInvite": [
                2,
                {
                    "teamId": [
                        301,
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
                        301,
                        "ID!"
                    ],
                    "playerId": [
                        301,
                        "ID!"
                    ]
                }
            ],
            "tournamentAdminUpsert": [
                142,
                {
                    "input": [
                        375,
                        "TournamentAdminUpsertInput!"
                    ]
                }
            ],
            "tournamentAdminDelete": [
                2,
                {
                    "input": [
                        376,
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
                        377,
                        "PlatformCdnFileCreateInput!"
                    ],
                    "platformId": [
                        301
                    ],
                    "templateId": [
                        301
                    ]
                }
            ],
            "platformFilePublish": [
                201,
                {
                    "id": [
                        301,
                        "ID!"
                    ]
                }
            ],
            "platformFileGenerateUploadUrl": [
                204,
                {
                    "id": [
                        301,
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
                        301,
                        "ID!"
                    ]
                }
            ],
            "platformFileUpdate": [
                201,
                {
                    "id": [
                        301,
                        "ID!"
                    ],
                    "input": [
                        378,
                        "PlatformFileUpdateInput!"
                    ]
                }
            ],
            "platformFileDelete": [
                332,
                {
                    "id": [
                        301,
                        "ID!"
                    ]
                }
            ],
            "platformCreate": [
                228,
                {
                    "input": [
                        379,
                        "CreatePlatformInput!"
                    ]
                }
            ],
            "platformUpdate": [
                228,
                {
                    "id": [
                        301,
                        "ID!"
                    ],
                    "input": [
                        380,
                        "UpdatePlatformInput!"
                    ]
                }
            ],
            "platformDelete": [
                332,
                {
                    "id": [
                        301,
                        "ID!"
                    ]
                }
            ],
            "platformRegisterCustomDomain": [
                89,
                {
                    "platformId": [
                        301,
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
                332,
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
                        381,
                        "CreatePlatformTemplateInput!"
                    ]
                }
            ],
            "platformTemplateUpdate": [
                229,
                {
                    "id": [
                        301,
                        "ID!"
                    ],
                    "input": [
                        382,
                        "UpdatePlatformTemplateInput!"
                    ]
                }
            ],
            "platformTemplateApply": [
                228,
                {
                    "platformTemplateId": [
                        301,
                        "ID!"
                    ],
                    "platformId": [
                        301,
                        "ID!"
                    ]
                }
            ],
            "platformTemplateDelete": [
                332,
                {
                    "id": [
                        301,
                        "ID!"
                    ]
                }
            ],
            "organizationSubscriptionItemsUpdate": [
                332,
                {
                    "items": [
                        383,
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
                256,
                {
                    "organizationSkillRatingId": [
                        301,
                        "ID!"
                    ],
                    "input": [
                        384,
                        "OrganizationSkillRatingsRegisterMatchInput!"
                    ]
                }
            ],
            "organizationSkillRatingCreate": [
                257,
                {
                    "input": [
                        386,
                        "OrganizationSkillRatingCreateInput!"
                    ]
                }
            ],
            "organizationSkillRatingUpdate": [
                257,
                {
                    "id": [
                        301,
                        "ID!"
                    ],
                    "input": [
                        387,
                        "OrganizationSkillRatingUpdateInput!"
                    ]
                }
            ],
            "organizationSkillRatingDelete": [
                332,
                {
                    "id": [
                        301,
                        "ID!"
                    ]
                }
            ],
            "eventCreate": [
                176,
                {
                    "input": [
                        388,
                        "EventCreateInput!"
                    ]
                }
            ],
            "eventUpdate": [
                176,
                {
                    "input": [
                        389,
                        "EventUpdateInput!"
                    ],
                    "id": [
                        301,
                        "ID!"
                    ]
                }
            ],
            "eventDelete": [
                2,
                {
                    "id": [
                        301,
                        "ID!"
                    ]
                }
            ],
            "eventTicketConfigurationCreate": [
                211,
                {
                    "input": [
                        390,
                        "EventTicketConfigurationCreateInput!"
                    ]
                }
            ],
            "eventTicketConfigurationUpdate": [
                211,
                {
                    "ticketConfigurationId": [
                        301,
                        "ID!"
                    ],
                    "input": [
                        391,
                        "EventTicketConfigurationUpdateInput!"
                    ]
                }
            ],
            "eventTicketConfigurationDelete": [
                211,
                {
                    "ticketConfigurationId": [
                        301,
                        "ID!"
                    ]
                }
            ],
            "eventReservationUpdateStatus": [
                184,
                {
                    "reservationId": [
                        301,
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
                        301,
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
                        301,
                        "ID!"
                    ],
                    "options": [
                        392,
                        "EventReservationValidateAndPayInput!"
                    ],
                    "ticketConfigurations": [
                        394,
                        "[EventReservationTicketConfigurationInput!]"
                    ]
                }
            ],
            "eventReservationCreate": [
                184,
                {
                    "eventId": [
                        301,
                        "ID!"
                    ]
                }
            ],
            "eventReservationUpdateTickets": [
                184,
                {
                    "reservationId": [
                        301,
                        "ID!"
                    ],
                    "input": [
                        395,
                        "EventReservationUpdateTicketsInput!"
                    ]
                }
            ],
            "eventReservationStartRegistrationSession": [
                184,
                {
                    "eventId": [
                        301,
                        "ID!"
                    ],
                    "input": [
                        397,
                        "EventReservationRegisterTicketsInput!"
                    ]
                }
            ],
            "eventReservationCancel": [
                184,
                {
                    "reservationId": [
                        301,
                        "ID!"
                    ]
                }
            ],
            "eventVenueRequestImageUpdate": [
                204,
                {
                    "id": [
                        301,
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
                        301,
                        "ID!"
                    ]
                }
            ],
            "eventVenueCreate": [
                207,
                {
                    "input": [
                        398,
                        "EventVenueCreateInput!"
                    ]
                }
            ],
            "eventVenueUpdate": [
                207,
                {
                    "id": [
                        301,
                        "ID!"
                    ],
                    "input": [
                        399,
                        "EventVenueUpdateInput!"
                    ]
                }
            ],
            "eventVenueDelete": [
                207,
                {
                    "id": [
                        301,
                        "ID!"
                    ]
                }
            ],
            "eventVenueSeatsUpdate": [
                169,
                {
                    "venueId": [
                        301,
                        "ID!"
                    ],
                    "input": [
                        400,
                        "EventVenueSeatsUpdateInput!"
                    ]
                }
            ],
            "eventVenueSeatTypeCreate": [
                196,
                {
                    "venueId": [
                        301,
                        "ID!"
                    ],
                    "input": [
                        403,
                        "EventVenueSeatTypeCreateInput!"
                    ]
                }
            ],
            "eventVenueSeatTypeUpdate": [
                196,
                {
                    "id": [
                        301,
                        "ID!"
                    ],
                    "input": [
                        404,
                        "EventVenueSeatTypeUpdateInput!"
                    ]
                }
            ],
            "eventVenueSeatTypeDelete": [
                196,
                {
                    "id": [
                        301,
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
                        405
                    ],
                    "fromCustom": [
                        406
                    ]
                }
            ],
            "emailConfigurationUpdate": [
                153,
                {
                    "input": [
                        286,
                        "EmailConfigurationInput!"
                    ]
                }
            ],
            "emailTemplateCreate": [
                154,
                {
                    "input": [
                        407,
                        "EmailTemplateCreateInput!"
                    ]
                }
            ],
            "emailTemplateUpdate": [
                154,
                {
                    "id": [
                        301,
                        "ID!"
                    ],
                    "input": [
                        408,
                        "EmailTemplateUpdateInput!"
                    ]
                }
            ],
            "emailTemplateDelete": [
                154,
                {
                    "id": [
                        301,
                        "ID!"
                    ]
                }
            ],
            "userGroupInvite": [
                158,
                {
                    "groupId": [
                        301,
                        "ID!"
                    ],
                    "playerId": [
                        301,
                        "ID!"
                    ]
                }
            ],
            "userGroupUpdateInvite": [
                158,
                {
                    "groupId": [
                        301,
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
                        301,
                        "ID!"
                    ],
                    "playerId": [
                        301
                    ]
                }
            ],
            "shopCreate": [
                249,
                {
                    "input": [
                        409,
                        "ShopCreateInput!"
                    ]
                }
            ],
            "shopUpdate": [
                249,
                {
                    "id": [
                        301,
                        "ID!"
                    ],
                    "input": [
                        410,
                        "ShopUpdateInput!"
                    ]
                }
            ],
            "shopDelete": [
                249,
                {
                    "id": [
                        301,
                        "ID!"
                    ]
                }
            ],
            "shopCategoryCreate": [
                239,
                {
                    "input": [
                        411,
                        "ShopCategoryCreateInput!"
                    ]
                }
            ],
            "shopCategoryUpdate": [
                239,
                {
                    "id": [
                        301,
                        "ID!"
                    ],
                    "input": [
                        412,
                        "ShopCategoryUpdateInput!"
                    ]
                }
            ],
            "shopCategoryDelete": [
                239,
                {
                    "id": [
                        301,
                        "ID!"
                    ]
                }
            ],
            "playerShopProductPurshase": [
                235,
                {
                    "shopId": [
                        301,
                        "ID!"
                    ],
                    "paymentConfig": [
                        413
                    ],
                    "input": [
                        414,
                        "PlayerShopProductPurshaseInput!"
                    ]
                }
            ],
            "shopProductCreate": [
                246,
                {
                    "shopId": [
                        301,
                        "ID!"
                    ],
                    "input": [
                        416,
                        "ShopProductCreateInput!"
                    ]
                }
            ],
            "shopProductUpdate": [
                246,
                {
                    "productId": [
                        301,
                        "ID!"
                    ],
                    "input": [
                        417,
                        "ShopProductUpdateInput!"
                    ]
                }
            ],
            "shopProductDelete": [
                246,
                {
                    "productId": [
                        301,
                        "ID!"
                    ]
                }
            ],
            "itemCreate": [
                213,
                {
                    "input": [
                        418,
                        "ItemCreateInput!"
                    ]
                }
            ],
            "itemUpdate": [
                213,
                {
                    "id": [
                        301,
                        "ID!"
                    ],
                    "input": [
                        419,
                        "ItemUpdateInput!"
                    ]
                }
            ],
            "itemDelete": [
                213,
                {
                    "id": [
                        301,
                        "ID!"
                    ]
                }
            ],
            "playerItemsUpdate": [
                216,
                {
                    "playerId": [
                        301,
                        "ID!"
                    ],
                    "input": [
                        420,
                        "PlayerItemsUpdateInput!"
                    ]
                }
            ],
            "itemCategoryCreate": [
                219,
                {
                    "input": [
                        422,
                        "ItemCategoryCreateInput!"
                    ]
                }
            ],
            "itemCategoryUpdate": [
                219,
                {
                    "id": [
                        301,
                        "ID!"
                    ],
                    "input": [
                        423,
                        "ItemCategoryUpdateInput!"
                    ]
                }
            ],
            "itemCategoryDelete": [
                219,
                {
                    "id": [
                        301,
                        "ID!"
                    ]
                }
            ],
            "currencyCreate": [
                144,
                {
                    "input": [
                        424,
                        "CurrencyCreateInput!"
                    ]
                }
            ],
            "currencyUpdate": [
                144,
                {
                    "id": [
                        301,
                        "ID!"
                    ],
                    "input": [
                        425,
                        "CurrencyUpdateInput!"
                    ]
                }
            ],
            "currencyDelete": [
                144,
                {
                    "id": [
                        301,
                        "ID!"
                    ]
                }
            ],
            "playerCurrencyUpdate": [
                147,
                {
                    "playerId": [
                        301,
                        "ID!"
                    ],
                    "input": [
                        426,
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
                301
            ],
            "playerId": [
                301
            ],
            "score": [
                329
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
                338
            ],
            "__typename": [
                1
            ]
        },
        "OrganizationConfigurationInput": {
            "customFields": [
                268
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
                338
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
                267
            ],
            "__typename": [
                1
            ]
        },
        "SetOrganizationMembershipInput": {
            "userId": [
                301
            ],
            "email": [
                67
            ],
            "permissions": [
                267
            ],
            "groupId": [
                301
            ],
            "__typename": [
                1
            ]
        },
        "DeleteOrganizationMembershipInput": {
            "userId": [
                301
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
                301
            ],
            "name": [
                1
            ],
            "oauth2Configuration": [
                344
            ],
            "openidConfiguration": [
                345
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
                266
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
                266
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
                344
            ],
            "openidConfiguration": [
                345
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
                267
            ],
            "groupId": [
                301
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
                301
            ],
            "organizationCustomId": [
                1
            ],
            "customFields": [
                354
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
                301
            ],
            "organizationCustomId": [
                1
            ],
            "customFields": [
                354
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
                354
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
                358
            ],
            "__typename": [
                1
            ]
        },
        "UpdateTournamentConfigurationOrImportFromIdInput": {
            "fromId": [
                301
            ],
            "configuration": [
                359
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
                284
            ],
            "customFields": [
                268
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
                358
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
                269
            ],
            "__typename": [
                1
            ]
        },
        "SeedingInput": {
            "automaticSeeding": [
                363
            ],
            "manualSeeding": [
                366
            ],
            "__typename": [
                1
            ]
        },
        "AutomaticSeedingInput": {
            "seedingMechanism": [
                364
            ],
            "groupRepartitionMechanism": [
                365
            ],
            "teams": [
                301
            ],
            "__typename": [
                1
            ]
        },
        "SeedingMechanism": {},
        "GroupRepartitionMechanism": {},
        "ManualSeedingInput": {
            "groups": [
                367
            ],
            "__typename": [
                1
            ]
        },
        "ManualSeedingGroupInput": {
            "group": [
                301
            ],
            "teams": [
                301
            ],
            "__typename": [
                1
            ]
        },
        "UpdateMatchScoreInput": {
            "teamId": [
                301
            ],
            "variables": [
                369
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
                371
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
                269
            ],
            "fromExistingTeamId": [
                301
            ],
            "members": [
                372
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
                301
            ],
            "player": [
                353
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
                269
            ],
            "fromExistingTeamId": [
                301
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
                269
            ],
            "__typename": [
                1
            ]
        },
        "TournamentAdminUpsertInput": {
            "tournamentId": [
                301
            ],
            "accountId": [
                301
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
                301
            ],
            "accountId": [
                301
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
                293
            ],
            "__typename": [
                1
            ]
        },
        "PlatformFileUpdateInput": {
            "config": [
                293
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
                296
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
                296
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
                301
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
                385
            ],
            "__typename": [
                1
            ]
        },
        "OrganizationSkillRatingsRegisterMatchTeamInput": {
            "players": [
                301
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
                258
            ],
            "configuration": [
                300
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
                258
            ],
            "configuration": [
                300
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
                290
            ],
            "eventVenueId": [
                301
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
                290
            ],
            "eventVenueId": [
                301
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
                301
            ],
            "seatTypeId": [
                301
            ],
            "configuration": [
                295
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
                301
            ],
            "configuration": [
                295
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
                393
            ],
            "__typename": [
                1
            ]
        },
        "StripeUiMode": {},
        "EventReservationTicketConfigurationInput": {
            "ticketId": [
                301
            ],
            "customFields": [
                269
            ],
            "__typename": [
                1
            ]
        },
        "EventReservationUpdateTicketsInput": {
            "ticketIdsToRelease": [
                301
            ],
            "ticketIdsToAdd": [
                396
            ],
            "ticketConfigurations": [
                394
            ],
            "__typename": [
                1
            ]
        },
        "EventReservationRegisterTicketInput": {
            "ticketConfigurationId": [
                301
            ],
            "quantity": [
                15
            ],
            "reservedSeats": [
                301
            ],
            "__typename": [
                1
            ]
        },
        "EventReservationRegisterTicketsInput": {
            "tickets": [
                396
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
                401
            ],
            "createSeats": [
                402
            ],
            "deleteSeats": [
                301
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
                289
            ],
            "seatTypeId": [
                301
            ],
            "id": [
                301
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
                289
            ],
            "seatTypeId": [
                301
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
                291
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
                291
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
                301
            ],
            "variables": [
                269
            ],
            "__typename": [
                1
            ]
        },
        "EmailSentFromCustomInput": {
            "emailField": [
                281
            ],
            "playerIds": [
                301
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
                269
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
                269
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
                269
            ],
            "shopId": [
                301
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
                269
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
                393
            ],
            "__typename": [
                1
            ]
        },
        "PlayerShopProductPurshaseInput": {
            "items": [
                415
            ],
            "__typename": [
                1
            ]
        },
        "PlayerShopProductPurshaseItemInput": {
            "shopProductId": [
                301
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
                301
            ],
            "price": [
                15
            ],
            "configuration": [
                297
            ],
            "metadata": [
                269
            ],
            "visibleAt": [
                9
            ],
            "currency": [
                212
            ],
            "items": [
                299
            ],
            "currencyPrices": [
                298
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
                301
            ],
            "price": [
                15
            ],
            "configuration": [
                297
            ],
            "metadata": [
                269
            ],
            "visibleAt": [
                9
            ],
            "currency": [
                212
            ],
            "items": [
                299
            ],
            "currencyPrices": [
                298
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
                269
            ],
            "categoryId": [
                301
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
                269
            ],
            "categoryId": [
                301
            ],
            "__typename": [
                1
            ]
        },
        "PlayerItemsUpdateInput": {
            "items": [
                421
            ],
            "__typename": [
                1
            ]
        },
        "PlayerItemsUpdateItemInput": {
            "itemId": [
                301
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
                269
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
                269
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
                269
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
                269
            ],
            "__typename": [
                1
            ]
        },
        "PlayerCurrencyUpdateInput": {
            "items": [
                427
            ],
            "__typename": [
                1
            ]
        },
        "PlayerCurrencyUpdateItemInput": {
            "currencyId": [
                301
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