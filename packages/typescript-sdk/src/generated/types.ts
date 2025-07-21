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
        31,
        33,
        35,
        36,
        38,
        40,
        46,
        49,
        51,
        52,
        53,
        66,
        70,
        80,
        86,
        89,
        91,
        92,
        95,
        107,
        108,
        111,
        119,
        123,
        129,
        130,
        134,
        138,
        142,
        145,
        152,
        154,
        166,
        167,
        168,
        177,
        184,
        194,
        197,
        203,
        205,
        220,
        222,
        258,
        265,
        266,
        267,
        273,
        274,
        282,
        285,
        317,
        318,
        346
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
                258
            ],
            "name": [
                1
            ],
            "permissions": [
                11
            ],
            "organizationId": [
                258
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
                258
            ],
            "groupId": [
                258
            ],
            "memberId": [
                258
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
                65
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
                15
            ],
            "useMatchScoresAsGameScore": [
                2
            ],
            "teamsCount": [
                15
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
                15
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
                15
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
                258
            ],
            "conditionType": [
                33
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
                258
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
                258
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
                15
            ],
            "teamMaxSize": [
                15
            ],
            "teamsCount": [
                15
            ],
            "teamStatusAfterRegistration": [
                46
            ],
            "registrationConditions": [
                44
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
                258
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
                258
            ],
            "configuration": [
                45
            ],
            "createdAt": [
                9
            ],
            "updatedAt": [
                9
            ],
            "createdById": [
                258
            ],
            "tournamentSeriesId": [
                258
            ],
            "visibleAt": [
                9
            ],
            "teams": [
                115,
                {
                    "page": [
                        48,
                        "PageInfo!"
                    ],
                    "status": [
                        49
                    ]
                }
            ],
            "steps": [
                128
            ],
            "createdBy": [
                65
            ],
            "myTeam": [
                114
            ],
            "teamScores": [
                127
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
                51
            ],
            "bucketDuration": [
                52
            ],
            "scope": [
                53
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
                50
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
                55
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
                258
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
                258
            ],
            "ownerId": [
                258
            ],
            "name": [
                1
            ],
            "description": [
                1
            ],
            "configuration": [
                57
            ],
            "tournaments": [
                47
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
                58,
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
                258
            ],
            "organizationIdentityProviderId": [
                258
            ],
            "properties": [
                60
            ],
            "createdAt": [
                9
            ],
            "updatedAt": [
                9
            ],
            "organizationIdentityProvider": [
                58
            ],
            "__typename": [
                1
            ]
        },
        "Player": {
            "id": [
                258
            ],
            "username": [
                1
            ],
            "description": [
                1
            ],
            "ownerId": [
                258
            ],
            "organizationCustomId": [
                258
            ],
            "updatedAt": [
                9
            ],
            "createdAt": [
                9
            ],
            "identities": [
                61
            ],
            "owner": [
                65
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
                64
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
        "PlayerEdge": {
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
        "Account": {
            "id": [
                258
            ],
            "email": [
                66
            ],
            "permissions": [
                11
            ],
            "profiles": [
                62
            ],
            "identities": [
                61,
                {
                    "properties": [
                        1,
                        "[String!]"
                    ],
                    "providerIds": [
                        258,
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
                258
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
                68
            ],
            "createdById": [
                258
            ],
            "organizationId": [
                258
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
            "rank": [
                15
            ],
            "lastScore": [
                15
            ],
            "lastRank": [
                70
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
                258
            ],
            "playerProfileId": [
                258
            ],
            "__typename": [
                1
            ]
        },
        "Int": {},
        "LeaderboardSeasonBucketScores": {
            "edges": [
                72
            ],
            "nodes": [
                69
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
                69
            ],
            "__typename": [
                1
            ]
        },
        "Leaderboard": {
            "id": [
                258
            ],
            "organizationId": [
                258
            ],
            "ownerId": [
                258
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
                75
            ],
            "nodes": [
                73
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
                73
            ],
            "__typename": [
                1
            ]
        },
        "LeaderboardSeason": {
            "id": [
                258
            ],
            "leaderboardId": [
                258
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
                78
            ],
            "nodes": [
                76
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
                76
            ],
            "__typename": [
                1
            ]
        },
        "LeaderboardSeasonBucket": {
            "id": [
                258
            ],
            "seasonId": [
                258
            ],
            "name": [
                1
            ],
            "minScore": [
                15
            ],
            "scoreCalculationType": [
                80
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
                82
            ],
            "nodes": [
                79
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
                79
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
                86
            ],
            "validation_errors": [
                84
            ],
            "validation_records": [
                83
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
                87
            ],
            "ssl": [
                85
            ],
            "status": [
                89
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
                91
            ],
            "newValue": [
                91
            ],
            "author": [
                1
            ],
            "authorType": [
                92
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
                258
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
                95
            ],
            "requirements": [
                93
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
                258
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
                96
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
                258
            ],
            "organizationId": [
                258
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
                97
            ],
            "creator": [
                65
            ],
            "__typename": [
                1
            ]
        },
        "OrganizationApps": {
            "edges": [
                100
            ],
            "nodes": [
                98
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
                98
            ],
            "__typename": [
                1
            ]
        },
        "OrganizationAttachedApp": {
            "organizationId": [
                258
            ],
            "groupId": [
                258
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
                98
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
                103
            ],
            "nodes": [
                101
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
                101
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
                258
            ],
            "identityProviderId": [
                258
            ],
            "configuration": [
                105
            ],
            "name": [
                1
            ],
            "organizationId": [
                258
            ],
            "createdAt": [
                9
            ],
            "updatedAt": [
                9
            ],
            "parentIdentityProvider": [
                94
            ],
            "__typename": [
                1
            ]
        },
        "IdentityProviderConfigurations": {
            "on_OAuthClientConfiguration": [
                106
            ],
            "on_OpenidConfiguration": [
                109
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
                107
            ],
            "clientId": [
                1
            ],
            "clientSecret": [
                1
            ],
            "tokenEndpointAuthMethod": [
                108
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
                107
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
                111
            ],
            "tournamentTeamId": [
                258
            ],
            "playerProfileId": [
                258
            ],
            "createdAt": [
                9
            ],
            "updatedAt": [
                9
            ],
            "team": [
                114
            ],
            "__typename": [
                1
            ]
        },
        "TournamentTeamMemberStatus": {},
        "TeamMembers": {
            "edges": [
                113
            ],
            "nodes": [
                110
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
                110
            ],
            "__typename": [
                1
            ]
        },
        "TournamentTeam": {
            "id": [
                258
            ],
            "name": [
                1
            ],
            "tag": [
                1
            ],
            "teamId": [
                258
            ],
            "managerId": [
                258
            ],
            "tournamentId": [
                258
            ],
            "status": [
                49
            ],
            "createdAt": [
                9
            ],
            "updatedAt": [
                9
            ],
            "members": [
                110
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
                47
            ],
            "__typename": [
                1
            ]
        },
        "TournamentTeams": {
            "edges": [
                116
            ],
            "nodes": [
                114
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
                114
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
                117
            ],
            "__typename": [
                1
            ]
        },
        "WebhookEventConfiguration": {
            "type": [
                119
            ],
            "description": [
                1
            ],
            "payload": [
                117
            ],
            "answerPayload": [
                117
            ],
            "__typename": [
                1
            ]
        },
        "WebhookEventType": {},
        "Webhook": {
            "id": [
                258
            ],
            "organizationId": [
                258
            ],
            "events": [
                119
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
                258
            ],
            "ratingId": [
                258
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
                62
            ],
            "__typename": [
                1
            ]
        },
        "TournamentStepGroupRoundGameMatch": {
            "id": [
                258
            ],
            "order": [
                15
            ],
            "status": [
                123
            ],
            "tournamentStepGroupRoundGameId": [
                258
            ],
            "configuration": [
                25
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
                125
            ],
            "nodes": [
                122
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
                122
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
                258
            ],
            "score": [
                15
            ],
            "team": [
                114
            ],
            "__typename": [
                1
            ]
        },
        "TournamentStep": {
            "id": [
                258
            ],
            "tournamentId": [
                258
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
                129
            ],
            "status": [
                130
            ],
            "configuration": [
                30
            ],
            "createdAt": [
                9
            ],
            "updatedAt": [
                9
            ],
            "teamScores": [
                127
            ],
            "tournament": [
                47
            ],
            "__typename": [
                1
            ]
        },
        "StepType": {},
        "StepStatus": {},
        "Tournaments": {
            "edges": [
                132
            ],
            "nodes": [
                47
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
                47
            ],
            "__typename": [
                1
            ]
        },
        "TournamentStepGroupRoundGame": {
            "id": [
                258
            ],
            "configuration": [
                26
            ],
            "status": [
                134
            ],
            "order": [
                15
            ],
            "tournamentStepGroupRoundId": [
                258
            ],
            "winningGameId": [
                258
            ],
            "losingGameId": [
                258
            ],
            "createdAt": [
                9
            ],
            "updatedAt": [
                9
            ],
            "matches": [
                122
            ],
            "__typename": [
                1
            ]
        },
        "TournamentGameStatus": {},
        "TournamentStepGroupRound": {
            "id": [
                258
            ],
            "name": [
                1
            ],
            "configuration": [
                28
            ],
            "tournamentStepGroupId": [
                258
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
                133
            ],
            "__typename": [
                1
            ]
        },
        "TournamentStepGroup": {
            "id": [
                258
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
                258
            ],
            "createdAt": [
                9
            ],
            "updatedAt": [
                9
            ],
            "rounds": [
                135
            ],
            "__typename": [
                1
            ]
        },
        "TournamentStepGroupRoundGameMatchScore": {
            "matchId": [
                258
            ],
            "teamId": [
                258
            ],
            "score": [
                15
            ],
            "status": [
                138
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
                140
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
        "TournamentStepGroupRoundGameMatchScoreEdge": {
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
        "TournamentAdmin": {
            "tournamentId": [
                258
            ],
            "accountId": [
                258
            ],
            "permissions": [
                142
            ],
            "createdAt": [
                9
            ],
            "updatedAt": [
                9
            ],
            "account": [
                65
            ],
            "__typename": [
                1
            ]
        },
        "TournamentAdminPermissions": {},
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
                145
            ],
            "name": [
                1
            ],
            "description": [
                1
            ],
            "availableVariables": [
                143
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
                41
            ],
            "__typename": [
                1
            ]
        },
        "EmailTemplate": {
            "id": [
                258
            ],
            "triggerEvent": [
                145
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
                258
            ],
            "__typename": [
                1
            ]
        },
        "EmailTemplates": {
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
        "EmailTemplateEdge": {
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
        "UserGroupConfiguration": {
            "maxSize": [
                70
            ],
            "minSize": [
                70
            ],
            "__typename": [
                1
            ]
        },
        "UserGroupMember": {
            "id": [
                258
            ],
            "groupId": [
                258
            ],
            "playerProfileId": [
                258
            ],
            "status": [
                152
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
                258
            ],
            "organizationId": [
                258
            ],
            "managerId": [
                258
            ],
            "createdAt": [
                9
            ],
            "updatedAt": [
                9
            ],
            "status": [
                154
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
        "UserGroupEdge": {
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
        "UserGroupMembers": {
            "edges": [
                158
            ],
            "nodes": [
                151
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
                151
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
                159
            ],
            "__typename": [
                1
            ]
        },
        "EventVenueSeat": {
            "id": [
                258
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
                160
            ],
            "seatTypeId": [
                258
            ],
            "__typename": [
                1
            ]
        },
        "EventVenueSeatsUpdateResult": {
            "updatedSeats": [
                161
            ],
            "createdSeats": [
                161
            ],
            "deletedSeats": [
                161
            ],
            "__typename": [
                1
            ]
        },
        "EventVenueSeats": {
            "edges": [
                164
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
        "EventVenueSeatEdge": {
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
        "EventConfiguration": {
            "customFields": [
                19
            ],
            "groupConfiguration": [
                150
            ],
            "maxTicketsPerReservation": [
                15
            ],
            "reservationStatusAfterPayment": [
                166
            ],
            "reservationStatusAfterRegistration": [
                167
            ],
            "sessionDuration": [
                15
            ],
            "allowForNewSessionAfterTimeout": [
                2
            ],
            "seatAssignmentMode": [
                168
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
                258
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
                165
            ],
            "eventVenueId": [
                258
            ],
            "organizationId": [
                258
            ],
            "createdById": [
                258
            ],
            "decryptionKey": [
                1
            ],
            "venue": [
                199
            ],
            "__typename": [
                1
            ]
        },
        "EventInterface": {
            "id": [
                258
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
                165
            ],
            "eventVenueId": [
                258
            ],
            "organizationId": [
                258
            ],
            "createdById": [
                258
            ],
            "decryptionKey": [
                1
            ],
            "venue": [
                199
            ],
            "on_Event": [
                169
            ],
            "on_EventWithUserReservation": [
                171
            ],
            "__typename": [
                1
            ]
        },
        "EventWithUserReservation": {
            "id": [
                258
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
                165
            ],
            "eventVenueId": [
                258
            ],
            "organizationId": [
                258
            ],
            "createdById": [
                258
            ],
            "decryptionKey": [
                1
            ],
            "venue": [
                199
            ],
            "myReservation": [
                178
            ],
            "__typename": [
                1
            ]
        },
        "Events": {
            "edges": [
                173
            ],
            "nodes": [
                169
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
                169
            ],
            "__typename": [
                1
            ]
        },
        "EventReservationTicket": {
            "id": [
                258
            ],
            "ticketId": [
                258
            ],
            "reservationId": [
                258
            ],
            "groupMemberId": [
                258
            ],
            "seatId": [
                258
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
        "EventReservationTicketWithQrCode": {
            "id": [
                258
            ],
            "ticketId": [
                258
            ],
            "reservationId": [
                258
            ],
            "groupMemberId": [
                258
            ],
            "seatId": [
                258
            ],
            "createdAt": [
                9
            ],
            "updatedAt": [
                9
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
                258
            ],
            "name": [
                1
            ],
            "status": [
                177
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
                258
            ],
            "groupId": [
                258
            ],
            "tickets": [
                174
            ],
            "groupStatus": [
                154
            ],
            "__typename": [
                1
            ]
        },
        "EventReservationStatus": {},
        "EventReservationWithTicketsAndQrCode": {
            "id": [
                258
            ],
            "name": [
                1
            ],
            "status": [
                177
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
                258
            ],
            "groupId": [
                258
            ],
            "groupStatus": [
                154
            ],
            "tickets": [
                175
            ],
            "__typename": [
                1
            ]
        },
        "EventReservations": {
            "edges": [
                180
            ],
            "nodes": [
                181
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
                181
            ],
            "__typename": [
                1
            ]
        },
        "OmitObjectType": {
            "id": [
                258
            ],
            "name": [
                1
            ],
            "status": [
                177
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
                258
            ],
            "groupId": [
                258
            ],
            "groupStatus": [
                154
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
                258
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
                160
            ],
            "seatTypeId": [
                258
            ],
            "status": [
                184
            ],
            "reservedByTicketId": [
                258
            ],
            "reservedByReservationId": [
                258
            ],
            "reservedByGroupMemberId": [
                258
            ],
            "__typename": [
                1
            ]
        },
        "EventSeatStatus": {},
        "EventSeats": {
            "edges": [
                186
            ],
            "nodes": [
                183
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
                183
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
                258
            ],
            "name": [
                1
            ],
            "description": [
                1
            ],
            "configuration": [
                187
            ],
            "createdAt": [
                9
            ],
            "updatedAt": [
                9
            ],
            "venueId": [
                258
            ],
            "__typename": [
                1
            ]
        },
        "EventVenueSeatTypes": {
            "edges": [
                190
            ],
            "nodes": [
                188
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
                188
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
                191
            ],
            "__typename": [
                1
            ]
        },
        "PlatformCdnFile": {
            "id": [
                258
            ],
            "platformId": [
                258
            ],
            "platformTemplateId": [
                258
            ],
            "name": [
                1
            ],
            "type": [
                194
            ],
            "updatedAt": [
                9
            ],
            "createdAt": [
                9
            ],
            "config": [
                192
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
                195
            ],
            "url": [
                197
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
                258
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
                198
            ],
            "organizationId": [
                258
            ],
            "__typename": [
                1
            ]
        },
        "EventVenues": {
            "edges": [
                201
            ],
            "nodes": [
                199
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
                199
            ],
            "__typename": [
                1
            ]
        },
        "EventTicketConfiguration": {
            "id": [
                258
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
                203
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
                258
            ],
            "seatTypeId": [
                258
            ],
            "__typename": [
                1
            ]
        },
        "Currencies": {},
        "Log": {
            "id": [
                258
            ],
            "type": [
                205
            ],
            "resourceId": [
                258
            ],
            "data": [
                90
            ],
            "organizationId": [
                258
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
                207
            ],
            "nodes": [
                204
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
                204
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
                88
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
                258
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
                209
            ],
            "organizationId": [
                258
            ],
            "appId": [
                1
            ],
            "customDomains": [
                208
            ],
            "__typename": [
                1
            ]
        },
        "PlatformTemplate": {
            "id": [
                258
            ],
            "name": [
                1
            ],
            "description": [
                1
            ],
            "screenshotUrl": [
                197
            ],
            "createdAt": [
                9
            ],
            "updatedAt": [
                9
            ],
            "ownerId": [
                258
            ],
            "organizationId": [
                258
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
                70
            ],
            "authenticatedSessions": [
                70
            ],
            "anonymousSessions": [
                70
            ],
            "__typename": [
                1
            ]
        },
        "UserConnectionEvent": {
            "sessionId": [
                258
            ],
            "serverId": [
                258
            ],
            "playerId": [
                258
            ],
            "accountId": [
                258
            ],
            "organizationId": [
                258
            ],
            "__typename": [
                1
            ]
        },
        "UsersConnectedEvent": {
            "usersConnected": [
                213
            ],
            "__typename": [
                1
            ]
        },
        "UserDisconnectEvent": {
            "sessionId": [
                258
            ],
            "serverId": [
                258
            ],
            "playerId": [
                258
            ],
            "accountId": [
                258
            ],
            "organizationId": [
                258
            ],
            "__typename": [
                1
            ]
        },
        "UsersDisconnectedEvent": {
            "usersDisconnected": [
                215
            ],
            "__typename": [
                1
            ]
        },
        "SkillRatingConfiguration": {
            "updateLeaderboardId": [
                258
            ],
            "__typename": [
                1
            ]
        },
        "OrganizationSkillRatingsRegisterMatchPlayer": {
            "id": [
                258
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
                258
            ],
            "name": [
                1
            ],
            "description": [
                1
            ],
            "type": [
                220
            ],
            "configuration": [
                217
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
                222
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
                258
            ],
            "name": [
                1
            ],
            "description": [
                1
            ],
            "limitsOverride": [
                221
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
                258
            ],
            "subscriptionItemId": [
                258
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
                223
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
                225
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
                227
            ],
            "mappingConfiguration": [
                226
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
                231
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
                232
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
                233
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
                235
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
                236
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
                15
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
                258
            ],
            "conditionType": [
                33
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
                238
            ],
            "stringCondition": [
                240
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
                258
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
                258
            ],
            "condition": [
                241
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
                240
            ],
            "numericCondition": [
                239
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
                244
            ],
            "memberConditions": [
                243
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
                15
            ],
            "teamMaxSize": [
                15
            ],
            "teamsCount": [
                15
            ],
            "teamStatusAfterRegistration": [
                46
            ],
            "registrationConditions": [
                245
            ],
            "customFields": [
                230
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
                242
            ],
            "__typename": [
                1
            ]
        },
        "UserGroupConfigurationInput": {
            "maxSize": [
                70
            ],
            "minSize": [
                70
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
                249
            ],
            "__typename": [
                1
            ]
        },
        "EventConfigurationInput": {
            "customFields": [
                230
            ],
            "groupConfiguration": [
                248
            ],
            "maxTicketsPerReservation": [
                15
            ],
            "reservationStatusAfterPayment": [
                166
            ],
            "reservationStatusAfterRegistration": [
                167
            ],
            "sessionDuration": [
                15
            ],
            "allowForNewSessionAfterTimeout": [
                2
            ],
            "seatAssignmentMode": [
                168
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
                253
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
                2
            ],
            "__typename": [
                1
            ]
        },
        "SkillRatingConfigurationInput": {
            "updateLeaderboardId": [
                258
            ],
            "__typename": [
                1
            ]
        },
        "ID": {},
        "Query": {
            "logs": [
                206,
                {
                    "page": [
                        48
                    ],
                    "resourceId": [
                        258
                    ],
                    "types": [
                        205,
                        "[LogType!]"
                    ]
                }
            ],
            "getMyAccount": [
                65
            ],
            "configuration": [
                67,
                {
                    "id": [
                        258,
                        "ID!"
                    ]
                }
            ],
            "leaderboardCurrentPlayerRanking": [
                69,
                {
                    "input": [
                        260,
                        "LeaderboardGetPlayerRankingInput!"
                    ]
                }
            ],
            "leaderboards": [
                74,
                {
                    "page": [
                        48,
                        "PageInfo!"
                    ]
                }
            ],
            "leaderboard": [
                73,
                {
                    "id": [
                        258,
                        "ID!"
                    ]
                }
            ],
            "currentLeaderboardSeason": [
                76,
                {
                    "leaderboardId": [
                        258,
                        "ID!"
                    ]
                }
            ],
            "leaderboardSeasons": [
                77,
                {
                    "leaderboardId": [
                        258,
                        "ID!"
                    ],
                    "page": [
                        48,
                        "PageInfo!"
                    ]
                }
            ],
            "leaderboardSeason": [
                76,
                {
                    "id": [
                        258,
                        "ID!"
                    ]
                }
            ],
            "leaderboardSeasonBuckets": [
                81,
                {
                    "seasonId": [
                        258,
                        "ID!"
                    ],
                    "page": [
                        48,
                        "PageInfo!"
                    ]
                }
            ],
            "leaderboardSeasonBucket": [
                79,
                {
                    "id": [
                        258,
                        "ID!"
                    ]
                }
            ],
            "leaderboardSeasonBucketScores": [
                71,
                {
                    "leaderboardSeasonBucketId": [
                        258,
                        "ID!"
                    ],
                    "page": [
                        48,
                        "PageInfo!"
                    ]
                }
            ],
            "organization": [
                59,
                {
                    "id": [
                        258,
                        "ID!"
                    ]
                }
            ],
            "limitDefinitions": [
                54,
                {
                    "limits": [
                        1,
                        "[String!]"
                    ]
                }
            ],
            "organizationLimits": [
                56,
                {
                    "limits": [
                        222,
                        "[OrganizationLimitsType!]"
                    ]
                }
            ],
            "userOrganizations": [
                59
            ],
            "organizationGroup": [
                7,
                {
                    "id": [
                        258,
                        "ID!"
                    ]
                }
            ],
            "organizationGroups": [
                13,
                {
                    "page": [
                        48,
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
                        48,
                        "PageInfo!"
                    ]
                }
            ],
            "identityProviders": [
                261
            ],
            "identityProvider": [
                104,
                {
                    "id": [
                        258,
                        "ID!"
                    ]
                }
            ],
            "organizationApp": [
                98,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "organizationApps": [
                99,
                {
                    "page": [
                        48,
                        "PageInfo!"
                    ]
                }
            ],
            "webhookAvailableEvents": [
                118
            ],
            "webhooks": [
                120
            ],
            "webhook": [
                120,
                {
                    "id": [
                        258,
                        "ID!"
                    ]
                }
            ],
            "organizationAttachedApps": [
                102,
                {
                    "page": [
                        48,
                        "PageInfo!"
                    ]
                }
            ],
            "availableRootIdentityProvider": [
                94,
                {
                    "id": [
                        258,
                        "ID!"
                    ]
                }
            ],
            "getAvailableRootIdentityProviders": [
                94
            ],
            "searchPlayer": [
                62,
                {
                    "username": [
                        1,
                        "String!"
                    ]
                }
            ],
            "players": [
                63,
                {
                    "ids": [
                        258,
                        "[ID!]"
                    ],
                    "page": [
                        48,
                        "PageInfo!"
                    ],
                    "identityProviders": [
                        258,
                        "[ID!]"
                    ],
                    "identityProviderProperties": [
                        1,
                        "[String!]"
                    ],
                    "query": [
                        263
                    ]
                }
            ],
            "player": [
                62,
                {
                    "id": [
                        258
                    ],
                    "ownerId": [
                        258
                    ],
                    "customId": [
                        1
                    ]
                }
            ],
            "playerSkillRatings": [
                121,
                {
                    "playerId": [
                        258,
                        "ID!"
                    ],
                    "skillRatingIds": [
                        258,
                        "[ID!]"
                    ]
                }
            ],
            "playerMatchesHistory": [
                124,
                {
                    "page": [
                        48,
                        "PageInfo!"
                    ],
                    "playerId": [
                        258,
                        "ID!"
                    ]
                }
            ],
            "tournament": [
                47,
                {
                    "id": [
                        258,
                        "ID!"
                    ]
                }
            ],
            "tournaments": [
                131,
                {
                    "query": [
                        264,
                        "TournamentsQuery!"
                    ],
                    "page": [
                        48,
                        "PageInfo!"
                    ]
                }
            ],
            "tournamentSteps": [
                128,
                {
                    "tournamentId": [
                        258,
                        "ID!"
                    ]
                }
            ],
            "tournamentStep": [
                128,
                {
                    "id": [
                        258,
                        "ID!"
                    ]
                }
            ],
            "tournamentStepGeneratedShape": [
                136,
                {
                    "stepId": [
                        258,
                        "ID!"
                    ]
                }
            ],
            "match": [
                122,
                {
                    "matchId": [
                        258,
                        "ID!"
                    ]
                }
            ],
            "tournamentTeam": [
                114,
                {
                    "teamId": [
                        258,
                        "ID!"
                    ],
                    "memberStatus": [
                        111
                    ]
                }
            ],
            "tournamentTeams": [
                115,
                {
                    "tournamentId": [
                        258,
                        "ID!"
                    ],
                    "page": [
                        48,
                        "PageInfo!"
                    ],
                    "memberStatus": [
                        111
                    ],
                    "status": [
                        49
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
                        270,
                        "[IdentityProviderPropertyInput!]"
                    ]
                }
            ],
            "tournamentPlayers": [
                112,
                {
                    "page": [
                        48,
                        "PageInfo!"
                    ],
                    "tournamentId": [
                        258,
                        "ID!"
                    ],
                    "status": [
                        49,
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
                        271
                    ]
                }
            ],
            "tournamentTeamInvites": [
                112,
                {
                    "page": [
                        48,
                        "PageInfo!"
                    ],
                    "tournamentId": [
                        258
                    ],
                    "status": [
                        111
                    ]
                }
            ],
            "tournamentStepGroupRoundGameMatchScoresGetForStep": [
                139,
                {
                    "stepId": [
                        258,
                        "ID!"
                    ],
                    "page": [
                        48,
                        "PageInfo!"
                    ]
                }
            ],
            "tournamentAdmins": [
                141,
                {
                    "tournamentId": [
                        258,
                        "ID!"
                    ]
                }
            ],
            "platformFiles": [
                193,
                {
                    "type": [
                        194
                    ],
                    "platformId": [
                        258
                    ],
                    "templateId": [
                        258
                    ]
                }
            ],
            "platformFile": [
                193,
                {
                    "id": [
                        258,
                        "ID!"
                    ]
                }
            ],
            "platforms": [
                210
            ],
            "platform": [
                210,
                {
                    "platformId": [
                        258,
                        "ID!"
                    ]
                }
            ],
            "platformFindFromDomain": [
                210,
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
                        197,
                        "URL!"
                    ]
                }
            ],
            "platformCustomDomains": [
                208,
                {
                    "platformId": [
                        258,
                        "ID!"
                    ]
                }
            ],
            "platformTemplatesPublic": [
                211
            ],
            "platformTemplates": [
                211
            ],
            "platformTemplate": [
                211,
                {
                    "platformTemplateId": [
                        258,
                        "ID!"
                    ]
                }
            ],
            "subscriptionItems": [
                223
            ],
            "organizationCurrentSubscriptionItems": [
                224
            ],
            "organizationSkillRatings": [
                219
            ],
            "organizationSkillRating": [
                219,
                {
                    "id": [
                        258,
                        "ID!"
                    ]
                }
            ],
            "event": [
                171,
                {
                    "id": [
                        258,
                        "ID!"
                    ]
                }
            ],
            "events": [
                172,
                {
                    "page": [
                        48,
                        "PageInfo!"
                    ],
                    "query": [
                        272
                    ],
                    "eventIds": [
                        258,
                        "[ID!]"
                    ]
                }
            ],
            "eventTicketConfiguration": [
                202,
                {
                    "id": [
                        258,
                        "ID!"
                    ]
                }
            ],
            "eventTicketConfigurations": [
                202,
                {
                    "eventId": [
                        258,
                        "ID!"
                    ]
                }
            ],
            "eventReservationsMyReservations": [
                179,
                {
                    "page": [
                        48,
                        "PageInfo!"
                    ],
                    "status": [
                        177
                    ],
                    "groupStatus": [
                        154
                    ],
                    "eventIds": [
                        258,
                        "[ID!]"
                    ]
                }
            ],
            "eventReservation": [
                176,
                {
                    "reservationId": [
                        258,
                        "ID!"
                    ]
                }
            ],
            "eventSeats": [
                185,
                {
                    "eventId": [
                        258,
                        "ID!"
                    ],
                    "page": [
                        48,
                        "PageInfo!"
                    ],
                    "eventVenueId": [
                        258
                    ],
                    "reservationIds": [
                        258,
                        "[ID!]"
                    ]
                }
            ],
            "eventReservations": [
                179,
                {
                    "eventId": [
                        258,
                        "ID!"
                    ],
                    "page": [
                        48,
                        "PageInfo!"
                    ],
                    "query": [
                        276,
                        "EventReservationsQueryInput!"
                    ]
                }
            ],
            "eventVenues": [
                200,
                {
                    "page": [
                        48,
                        "PageInfo!"
                    ]
                }
            ],
            "eventVenue": [
                199,
                {
                    "id": [
                        258,
                        "ID!"
                    ]
                }
            ],
            "eventVenueSeats": [
                163,
                {
                    "venueId": [
                        258,
                        "ID!"
                    ],
                    "page": [
                        48,
                        "PageInfo!"
                    ],
                    "seatTypeId": [
                        258
                    ]
                }
            ],
            "eventVenueSeatTypes": [
                189,
                {
                    "venueId": [
                        258,
                        "ID!"
                    ],
                    "page": [
                        48,
                        "PageInfo!"
                    ]
                }
            ],
            "organizationPaymentCollectionConfiguration": [
                126
            ],
            "emailTemplateConfigurations": [
                144
            ],
            "emailConfiguration": [
                146
            ],
            "emailTemplate": [
                147,
                {
                    "id": [
                        258,
                        "ID!"
                    ]
                }
            ],
            "emailTemplates": [
                148,
                {
                    "page": [
                        48,
                        "PageInfo!"
                    ]
                }
            ],
            "userGroupMembers": [
                157,
                {
                    "groupIds": [
                        258,
                        "[ID!]!"
                    ],
                    "page": [
                        48,
                        "PageInfo!"
                    ],
                    "status": [
                        152
                    ]
                }
            ],
            "userGroups": [
                155,
                {
                    "query": [
                        278,
                        "UserGroupsQueryInput!"
                    ],
                    "page": [
                        48,
                        "PageInfo!"
                    ]
                }
            ],
            "userGroupMyMemberships": [
                157,
                {
                    "page": [
                        48,
                        "PageInfo!"
                    ],
                    "status": [
                        152
                    ],
                    "entityType": [
                        1
                    ],
                    "entityId": [
                        258
                    ]
                }
            ],
            "presenceAnalytics": [
                212
            ],
            "__typename": [
                1
            ]
        },
        "LeaderboardGetPlayerRankingInput": {
            "leaderboardId": [
                258
            ],
            "playerId": [
                258
            ],
            "seasonId": [
                258
            ],
            "__typename": [
                1
            ]
        },
        "OrganizationIdentityProviderInfo": {
            "on_OrganizationIdentityProvider": [
                104
            ],
            "on_PublicOrganizationIdentityProviderV2": [
                262
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
                258
            ],
            "name": [
                1
            ],
            "organizationId": [
                258
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
                265
            ],
            "orderDirection": [
                266
            ],
            "status": [
                267
            ],
            "showNotVisible": [
                2
            ],
            "filterByPlayers": [
                268
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
                258
            ],
            "teamStatus": [
                49
            ],
            "memberStatus": [
                111
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
        "IdentityProviderPropertyInput": {
            "identityProviderId": [
                258
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
                266
            ],
            "__typename": [
                1
            ]
        },
        "EventsQuery": {
            "orderBy": [
                273
            ],
            "orderDirection": [
                266
            ],
            "status": [
                274
            ],
            "showNotVisible": [
                2
            ],
            "filterByPlayers": [
                275
            ],
            "__typename": [
                1
            ]
        },
        "EventsQueryOrderBy": {},
        "EventsQueryStatus": {},
        "EventsQueryPlayerIdWithTeamStatusInput": {
            "playerId": [
                258
            ],
            "reservationStatus": [
                177
            ],
            "memberStatus": [
                152
            ],
            "__typename": [
                1
            ]
        },
        "EventReservationsQueryInput": {
            "filterByRegistrationStatus": [
                177
            ],
            "retrieveOnlyGroupMembersWithStatus": [
                152
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
                270
            ],
            "filterByPlayers": [
                277
            ],
            "filterByGroupStatus": [
                154
            ],
            "__typename": [
                1
            ]
        },
        "EventReservationsQueryPlayerIdWithGroupStatusInput": {
            "playerId": [
                258
            ],
            "memberStatus": [
                152
            ],
            "__typename": [
                1
            ]
        },
        "UserGroupsQueryInput": {
            "ids": [
                258
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
                        258,
                        "ID!"
                    ]
                }
            ],
            "accountIdentityGenerateAccessToken": [
                1,
                {
                    "identityProviderId": [
                        258,
                        "ID!"
                    ],
                    "accountId": [
                        258
                    ]
                }
            ],
            "accountIdentityRefresh": [
                61,
                {
                    "identityProviderId": [
                        258,
                        "ID!"
                    ],
                    "accountId": [
                        258
                    ]
                }
            ],
            "attachOrUpdateIdentityToAccount": [
                61,
                {
                    "identityProviderId": [
                        258,
                        "ID!"
                    ],
                    "token": [
                        1,
                        "String!"
                    ]
                }
            ],
            "updateConfiguration": [
                67,
                {
                    "id": [
                        258,
                        "ID!"
                    ],
                    "input": [
                        280,
                        "CreateConfigurationInput!"
                    ]
                }
            ],
            "deleteConfiguration": [
                2,
                {
                    "id": [
                        258,
                        "ID!"
                    ]
                }
            ],
            "leaderboardRegisterPlayerScore": [
                69,
                {
                    "input": [
                        281,
                        "LeaderboardRegisterPlayerScoreInput!"
                    ]
                }
            ],
            "createLeaderboard": [
                73,
                {
                    "input": [
                        283,
                        "CreateLeaderboardInput!"
                    ]
                }
            ],
            "updateLeaderboard": [
                73,
                {
                    "id": [
                        258,
                        "ID!"
                    ],
                    "input": [
                        284,
                        "UpdateLeaderboardInput!"
                    ]
                }
            ],
            "deleteLeaderboard": [
                285,
                {
                    "id": [
                        258,
                        "ID!"
                    ]
                }
            ],
            "createLeaderboardSeason": [
                76,
                {
                    "leaderboardId": [
                        258,
                        "ID!"
                    ],
                    "input": [
                        286,
                        "CreateLeaderboardSeasonInput!"
                    ]
                }
            ],
            "updateLeaderboardSeason": [
                76,
                {
                    "id": [
                        258,
                        "ID!"
                    ],
                    "input": [
                        287,
                        "UpdateLeaderboardSeasonInput!"
                    ]
                }
            ],
            "deleteLeaderboardSeason": [
                285,
                {
                    "id": [
                        258,
                        "ID!"
                    ]
                }
            ],
            "createLeaderboardSeasonBucket": [
                79,
                {
                    "seasonId": [
                        258,
                        "ID!"
                    ],
                    "input": [
                        288,
                        "CreateLeaderboardSeasonBucketInput!"
                    ]
                }
            ],
            "updateLeaderboardSeasonBucket": [
                79,
                {
                    "id": [
                        258,
                        "ID!"
                    ],
                    "input": [
                        289,
                        "UpdateLeaderboardSeasonBucketInput!"
                    ]
                }
            ],
            "deleteLeaderboardSeasonBucket": [
                285,
                {
                    "id": [
                        258,
                        "ID!"
                    ]
                }
            ],
            "updateOrganization": [
                59,
                {
                    "organization": [
                        290,
                        "UpdateOrganizationInput!"
                    ]
                }
            ],
            "createOrganization": [
                59,
                {
                    "organization": [
                        292,
                        "CreateOrganizationInput!"
                    ]
                }
            ],
            "createOrganizationGroup": [
                7,
                {
                    "input": [
                        293,
                        "CreateOrganizationGroupInput!"
                    ]
                }
            ],
            "updateOrganizationGroup": [
                7,
                {
                    "id": [
                        258,
                        "ID!"
                    ],
                    "input": [
                        293,
                        "CreateOrganizationGroupInput!"
                    ]
                }
            ],
            "deleteOrganizationGroup": [
                2,
                {
                    "id": [
                        258,
                        "ID!"
                    ]
                }
            ],
            "setOrganizationMembership": [
                16,
                {
                    "input": [
                        294,
                        "SetOrganizationMembershipInput!"
                    ]
                }
            ],
            "deleteOrganizationMembership": [
                2,
                {
                    "input": [
                        295,
                        "DeleteOrganizationMembershipInput!"
                    ]
                }
            ],
            "createIdentityProvider": [
                104,
                {
                    "input": [
                        296,
                        "CreateOrganizationIdentityProvider!"
                    ]
                }
            ],
            "updateIdentityProvider": [
                104,
                {
                    "providerId": [
                        258,
                        "ID!"
                    ],
                    "input": [
                        299,
                        "UpdateOrganizationIdentityProvider!"
                    ]
                }
            ],
            "deleteIdentityProvider": [
                2,
                {
                    "id": [
                        258,
                        "ID!"
                    ]
                }
            ],
            "createOrganizationApp": [
                98,
                {
                    "input": [
                        300,
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
                98,
                {
                    "id": [
                        1,
                        "String!"
                    ],
                    "input": [
                        301,
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
                120,
                {
                    "input": [
                        302,
                        "CreateWebhookInput!"
                    ]
                }
            ],
            "updateWebhook": [
                120,
                {
                    "id": [
                        258,
                        "ID!"
                    ],
                    "input": [
                        303,
                        "UpdateWebhookInput!"
                    ]
                }
            ],
            "deleteWebhook": [
                120,
                {
                    "id": [
                        258,
                        "ID!"
                    ]
                }
            ],
            "regenerateWebhookSecret": [
                120,
                {
                    "id": [
                        258,
                        "ID!"
                    ]
                }
            ],
            "setOrganizationAttachedApp": [
                101,
                {
                    "input": [
                        304,
                        "SetOrganizationAttachedAppInput!"
                    ]
                }
            ],
            "deleteOrganizationAttachedApp": [
                2,
                {
                    "input": [
                        305,
                        "DeleteOrganizationAttachedAppInput!"
                    ]
                }
            ],
            "createPlayer": [
                62,
                {
                    "input": [
                        306,
                        "CreatePlayerInput!"
                    ]
                }
            ],
            "updatePlayer": [
                62,
                {
                    "input": [
                        308,
                        "UpdatePlayerInput!"
                    ],
                    "id": [
                        258
                    ],
                    "customId": [
                        1
                    ]
                }
            ],
            "createOrUpdateMyPlayerProfile": [
                62,
                {
                    "input": [
                        309,
                        "UpdateMePlayerInput!"
                    ]
                }
            ],
            "deletePlayer": [
                2,
                {
                    "id": [
                        258
                    ],
                    "customId": [
                        258
                    ]
                }
            ],
            "createTournament": [
                47,
                {
                    "input": [
                        310,
                        "CreateTournamentInput!"
                    ]
                }
            ],
            "updateTournament": [
                47,
                {
                    "input": [
                        313,
                        "UpdateTournamentInput!"
                    ],
                    "id": [
                        258,
                        "ID!"
                    ]
                }
            ],
            "deleteTournament": [
                2,
                {
                    "id": [
                        258,
                        "ID!"
                    ]
                }
            ],
            "startTournamentStep": [
                2,
                {
                    "stepId": [
                        258,
                        "ID!"
                    ]
                }
            ],
            "createTournamentStep": [
                128,
                {
                    "tournamentId": [
                        258,
                        "ID!"
                    ],
                    "configuration": [
                        237,
                        "StepConfigurationInput!"
                    ],
                    "step": [
                        314,
                        "CreateTournamentStepInput!"
                    ]
                }
            ],
            "updateTournamentStep": [
                128,
                {
                    "stepId": [
                        258,
                        "ID!"
                    ],
                    "configuration": [
                        237,
                        "StepConfigurationInput!"
                    ],
                    "step": [
                        314,
                        "CreateTournamentStepInput!"
                    ]
                }
            ],
            "deleteTournamentStep": [
                2,
                {
                    "stepId": [
                        258,
                        "ID!"
                    ]
                }
            ],
            "generateTournamentStep": [
                2,
                {
                    "stepId": [
                        258,
                        "ID!"
                    ],
                    "teamsCount": [
                        70,
                        "Int!"
                    ]
                }
            ],
            "seedTournamentStep": [
                2,
                {
                    "stepId": [
                        258,
                        "ID!"
                    ],
                    "input": [
                        315,
                        "SeedingInput!"
                    ]
                }
            ],
            "updateMatchScores": [
                122,
                {
                    "matchId": [
                        258,
                        "ID!"
                    ],
                    "input": [
                        321,
                        "[UpdateMatchScoreInput!]!"
                    ]
                }
            ],
            "registerCustomTournamentTeams": [
                114,
                {
                    "tournamentId": [
                        258,
                        "ID!"
                    ],
                    "input": [
                        323,
                        "RegisterCustomTeamsInput!"
                    ]
                }
            ],
            "registerTournamentTeam": [
                114,
                {
                    "tournamentId": [
                        258,
                        "ID!"
                    ],
                    "input": [
                        326,
                        "RegisterTournamentTeamInput!"
                    ]
                }
            ],
            "updateTournamentTeam": [
                114,
                {
                    "input": [
                        327,
                        "UpdateTournamentTeamInput!"
                    ],
                    "tournamentId": [
                        258
                    ],
                    "teamId": [
                        258
                    ]
                }
            ],
            "deleteTournamentTeam": [
                2,
                {
                    "tournamentId": [
                        258,
                        "ID!"
                    ]
                }
            ],
            "deleteAnyTournamentTeam": [
                2,
                {
                    "teamId": [
                        258,
                        "ID!"
                    ]
                }
            ],
            "confirmTournamentTeam": [
                114,
                {
                    "teamId": [
                        258,
                        "ID!"
                    ],
                    "confirm": [
                        2,
                        "Boolean!"
                    ]
                }
            ],
            "confirmTournamentAttendance": [
                114,
                {
                    "tournamentId": [
                        258,
                        "ID!"
                    ],
                    "attendance": [
                        2,
                        "Boolean!"
                    ]
                }
            ],
            "updateTournamentTeamStatus": [
                114,
                {
                    "tournamentTeamId": [
                        258,
                        "ID!"
                    ],
                    "status": [
                        49,
                        "TournamentTeamStatus!"
                    ]
                }
            ],
            "inviteTournamentTeamMember": [
                2,
                {
                    "tournamentId": [
                        258,
                        "ID!"
                    ],
                    "playerId": [
                        258,
                        "ID!"
                    ]
                }
            ],
            "answerToTournamentTeamInvite": [
                2,
                {
                    "teamId": [
                        258,
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
                        258,
                        "ID!"
                    ],
                    "playerId": [
                        258,
                        "ID!"
                    ]
                }
            ],
            "tournamentAdminUpsert": [
                141,
                {
                    "input": [
                        328,
                        "TournamentAdminUpsertInput!"
                    ]
                }
            ],
            "tournamentAdminDelete": [
                2,
                {
                    "input": [
                        329,
                        "TournamentAdminDeleteInput!"
                    ]
                }
            ],
            "stripeCreatePortalSession": [
                1
            ],
            "platformFileCreate": [
                193,
                {
                    "input": [
                        330,
                        "PlatformCdnFileCreateInput!"
                    ],
                    "platformId": [
                        258
                    ],
                    "templateId": [
                        258
                    ]
                }
            ],
            "platformFilePublish": [
                193,
                {
                    "id": [
                        258,
                        "ID!"
                    ]
                }
            ],
            "platformFileGenerateUploadUrl": [
                196,
                {
                    "id": [
                        258,
                        "ID!"
                    ],
                    "size": [
                        15,
                        "Float!"
                    ]
                }
            ],
            "platformFileValidateFileUpload": [
                193,
                {
                    "id": [
                        258,
                        "ID!"
                    ]
                }
            ],
            "platformFileUpdate": [
                193,
                {
                    "id": [
                        258,
                        "ID!"
                    ],
                    "input": [
                        331,
                        "PlatformFileUpdateInput!"
                    ]
                }
            ],
            "platformFileDelete": [
                285,
                {
                    "id": [
                        258,
                        "ID!"
                    ]
                }
            ],
            "platformCreate": [
                210,
                {
                    "input": [
                        332,
                        "CreatePlatformInput!"
                    ]
                }
            ],
            "platformUpdate": [
                210,
                {
                    "id": [
                        258,
                        "ID!"
                    ],
                    "input": [
                        333,
                        "UpdatePlatformInput!"
                    ]
                }
            ],
            "platformDelete": [
                285,
                {
                    "id": [
                        258,
                        "ID!"
                    ]
                }
            ],
            "platformRegisterCustomDomain": [
                88,
                {
                    "platformId": [
                        258,
                        "ID!"
                    ],
                    "hostname": [
                        1,
                        "String!"
                    ]
                }
            ],
            "platformForceCustomDomainRecheck": [
                88,
                {
                    "hostname": [
                        1,
                        "String!"
                    ]
                }
            ],
            "platformRemoveCustomDomain": [
                285,
                {
                    "hostname": [
                        1,
                        "String!"
                    ]
                }
            ],
            "platformTemplateCreate": [
                211,
                {
                    "input": [
                        334,
                        "CreatePlatformTemplateInput!"
                    ]
                }
            ],
            "platformTemplateUpdate": [
                211,
                {
                    "id": [
                        258,
                        "ID!"
                    ],
                    "input": [
                        335,
                        "UpdatePlatformTemplateInput!"
                    ]
                }
            ],
            "platformTemplateApply": [
                210,
                {
                    "platformTemplateId": [
                        258,
                        "ID!"
                    ],
                    "platformId": [
                        258,
                        "ID!"
                    ]
                }
            ],
            "platformTemplateDelete": [
                285,
                {
                    "id": [
                        258,
                        "ID!"
                    ]
                }
            ],
            "organizationSubscriptionItemsUpdate": [
                285,
                {
                    "items": [
                        336,
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
                218,
                {
                    "organizationSkillRatingId": [
                        258,
                        "ID!"
                    ],
                    "input": [
                        337,
                        "OrganizationSkillRatingsRegisterMatchInput!"
                    ]
                }
            ],
            "organizationSkillRatingCreate": [
                219,
                {
                    "input": [
                        339,
                        "OrganizationSkillRatingCreateInput!"
                    ]
                }
            ],
            "organizationSkillRatingUpdate": [
                219,
                {
                    "id": [
                        258,
                        "ID!"
                    ],
                    "input": [
                        340,
                        "OrganizationSkillRatingUpdateInput!"
                    ]
                }
            ],
            "organizationSkillRatingDelete": [
                285,
                {
                    "id": [
                        258,
                        "ID!"
                    ]
                }
            ],
            "eventCreate": [
                169,
                {
                    "input": [
                        341,
                        "EventCreateInput!"
                    ]
                }
            ],
            "eventUpdate": [
                169,
                {
                    "input": [
                        342,
                        "EventUpdateInput!"
                    ],
                    "id": [
                        258,
                        "ID!"
                    ]
                }
            ],
            "eventDelete": [
                2,
                {
                    "id": [
                        258,
                        "ID!"
                    ]
                }
            ],
            "eventTicketConfigurationCreate": [
                202,
                {
                    "input": [
                        343,
                        "EventTicketConfigurationCreateInput!"
                    ]
                }
            ],
            "eventTicketConfigurationUpdate": [
                202,
                {
                    "ticketConfigurationId": [
                        258,
                        "ID!"
                    ],
                    "input": [
                        344,
                        "EventTicketConfigurationUpdateInput!"
                    ]
                }
            ],
            "eventTicketConfigurationDelete": [
                202,
                {
                    "ticketConfigurationId": [
                        258,
                        "ID!"
                    ]
                }
            ],
            "eventReservationUpdateStatus": [
                176,
                {
                    "reservationId": [
                        258,
                        "ID!"
                    ],
                    "status": [
                        177,
                        "EventReservationStatus!"
                    ],
                    "confirmPaymentRefundOrCancel": [
                        2
                    ]
                }
            ],
            "eventReservationConfirmPresence": [
                176,
                {
                    "eventId": [
                        258,
                        "ID!"
                    ],
                    "confirmed": [
                        2,
                        "Boolean!"
                    ]
                }
            ],
            "eventReservationValidateAndPay": [
                182,
                {
                    "eventId": [
                        258,
                        "ID!"
                    ],
                    "options": [
                        345,
                        "EventReservationValidateAndPayInput!"
                    ]
                }
            ],
            "eventReservationCreate": [
                176,
                {
                    "eventId": [
                        258,
                        "ID!"
                    ]
                }
            ],
            "eventReservationUpdateTickets": [
                176,
                {
                    "reservationId": [
                        258,
                        "ID!"
                    ],
                    "input": [
                        347,
                        "EventReservationUpdateTicketsInput!"
                    ]
                }
            ],
            "eventReservationStartRegistrationSession": [
                176,
                {
                    "eventId": [
                        258,
                        "ID!"
                    ],
                    "input": [
                        349,
                        "EventReservationRegisterTicketsInput!"
                    ]
                }
            ],
            "eventReservationCancel": [
                176,
                {
                    "reservationId": [
                        258,
                        "ID!"
                    ]
                }
            ],
            "eventVenueRequestImageUpdate": [
                196,
                {
                    "id": [
                        258,
                        "ID!"
                    ],
                    "size": [
                        15,
                        "Float!"
                    ]
                }
            ],
            "eventVenueValidateImage": [
                199,
                {
                    "id": [
                        258,
                        "ID!"
                    ]
                }
            ],
            "eventVenueCreate": [
                199,
                {
                    "input": [
                        350,
                        "EventVenueCreateInput!"
                    ]
                }
            ],
            "eventVenueUpdate": [
                199,
                {
                    "id": [
                        258,
                        "ID!"
                    ],
                    "input": [
                        351,
                        "EventVenueUpdateInput!"
                    ]
                }
            ],
            "eventVenueDelete": [
                199,
                {
                    "id": [
                        258,
                        "ID!"
                    ]
                }
            ],
            "eventVenueSeatsUpdate": [
                162,
                {
                    "venueId": [
                        258,
                        "ID!"
                    ],
                    "input": [
                        352,
                        "EventVenueSeatsUpdateInput!"
                    ]
                }
            ],
            "eventVenueSeatTypeCreate": [
                188,
                {
                    "venueId": [
                        258,
                        "ID!"
                    ],
                    "input": [
                        355,
                        "EventVenueSeatTypeCreateInput!"
                    ]
                }
            ],
            "eventVenueSeatTypeUpdate": [
                188,
                {
                    "id": [
                        258,
                        "ID!"
                    ],
                    "input": [
                        356,
                        "EventVenueSeatTypeUpdateInput!"
                    ]
                }
            ],
            "eventVenueSeatTypeDelete": [
                188,
                {
                    "id": [
                        258,
                        "ID!"
                    ]
                }
            ],
            "organizationPaymentCollectionConfigurationCreateOrUpdateAccount": [
                1
            ],
            "emailConfigurationUpdate": [
                146,
                {
                    "input": [
                        247,
                        "EmailConfigurationInput!"
                    ]
                }
            ],
            "emailTemplateCreate": [
                147,
                {
                    "input": [
                        357,
                        "EmailTemplateCreateInput!"
                    ]
                }
            ],
            "emailTemplateUpdate": [
                147,
                {
                    "id": [
                        258,
                        "ID!"
                    ],
                    "input": [
                        358,
                        "EmailTemplateUpdateInput!"
                    ]
                }
            ],
            "emailTemplateDelete": [
                147,
                {
                    "id": [
                        258,
                        "ID!"
                    ]
                }
            ],
            "userGroupInvite": [
                151,
                {
                    "groupId": [
                        258,
                        "ID!"
                    ],
                    "playerId": [
                        258,
                        "ID!"
                    ]
                }
            ],
            "userGroupUpdateInvite": [
                151,
                {
                    "groupId": [
                        258,
                        "ID!"
                    ],
                    "status": [
                        152,
                        "UserGroupMemberStatus!"
                    ]
                }
            ],
            "userGroupDeleteInvite": [
                151,
                {
                    "groupId": [
                        258,
                        "ID!"
                    ],
                    "playerId": [
                        258
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
                91
            ],
            "__typename": [
                1
            ]
        },
        "LeaderboardRegisterPlayerScoreInput": {
            "leaderboardId": [
                258
            ],
            "playerId": [
                258
            ],
            "score": [
                282
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
                80
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
                80
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
                291
            ],
            "__typename": [
                1
            ]
        },
        "OrganizationConfigurationInput": {
            "customFields": [
                230
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
                291
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
                229
            ],
            "__typename": [
                1
            ]
        },
        "SetOrganizationMembershipInput": {
            "userId": [
                258
            ],
            "email": [
                66
            ],
            "permissions": [
                229
            ],
            "groupId": [
                258
            ],
            "__typename": [
                1
            ]
        },
        "DeleteOrganizationMembershipInput": {
            "userId": [
                258
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
                258
            ],
            "name": [
                1
            ],
            "oauth2Configuration": [
                297
            ],
            "openidConfiguration": [
                298
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
                228
            ],
            "issuer": [
                1
            ],
            "providerType": [
                107
            ],
            "clientId": [
                1
            ],
            "clientSecret": [
                1
            ],
            "tokenEndpointAuthMethod": [
                108
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
                228
            ],
            "issuer": [
                1
            ],
            "providerType": [
                107
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
                297
            ],
            "openidConfiguration": [
                298
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
                119
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
                119
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
                229
            ],
            "groupId": [
                258
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
                258
            ],
            "organizationCustomId": [
                1
            ],
            "customFields": [
                307
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
                258
            ],
            "organizationCustomId": [
                1
            ],
            "customFields": [
                307
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
                307
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
                311
            ],
            "__typename": [
                1
            ]
        },
        "UpdateTournamentConfigurationOrImportFromIdInput": {
            "fromId": [
                258
            ],
            "configuration": [
                312
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
                15
            ],
            "teamMaxSize": [
                15
            ],
            "teamsCount": [
                15
            ],
            "teamStatusAfterRegistration": [
                46
            ],
            "registrationConditions": [
                245
            ],
            "customFields": [
                230
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
                311
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
                129
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
                316
            ],
            "manualSeeding": [
                319
            ],
            "__typename": [
                1
            ]
        },
        "AutomaticSeedingInput": {
            "seedingMechanism": [
                317
            ],
            "groupRepartitionMechanism": [
                318
            ],
            "teams": [
                258
            ],
            "__typename": [
                1
            ]
        },
        "SeedingMechanism": {},
        "GroupRepartitionMechanism": {},
        "ManualSeedingInput": {
            "groups": [
                320
            ],
            "__typename": [
                1
            ]
        },
        "ManualSeedingGroupInput": {
            "group": [
                258
            ],
            "teams": [
                258
            ],
            "__typename": [
                1
            ]
        },
        "UpdateMatchScoreInput": {
            "teamId": [
                258
            ],
            "variables": [
                322
            ],
            "forcedScoreValue": [
                15
            ],
            "status": [
                138
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
                324
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
                258
            ],
            "members": [
                325
            ],
            "status": [
                49
            ],
            "__typename": [
                1
            ]
        },
        "CustomTeamMemberInput": {
            "playerId": [
                258
            ],
            "player": [
                306
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
                258
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
                258
            ],
            "accountId": [
                258
            ],
            "permissions": [
                142
            ],
            "__typename": [
                1
            ]
        },
        "TournamentAdminDeleteInput": {
            "tournamentId": [
                258
            ],
            "accountId": [
                258
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
                194
            ],
            "config": [
                254
            ],
            "__typename": [
                1
            ]
        },
        "PlatformFileUpdateInput": {
            "config": [
                254
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
                256
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
                256
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
                197
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
                197
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
                258
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
                338
            ],
            "__typename": [
                1
            ]
        },
        "OrganizationSkillRatingsRegisterMatchTeamInput": {
            "players": [
                258
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
                220
            ],
            "configuration": [
                257
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
                220
            ],
            "configuration": [
                257
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
                251
            ],
            "eventVenueId": [
                258
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
                251
            ],
            "eventVenueId": [
                258
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
                203
            ],
            "maxCount": [
                15
            ],
            "buyable": [
                2
            ],
            "eventId": [
                258
            ],
            "seatTypeId": [
                258
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
                203
            ],
            "maxCount": [
                15
            ],
            "buyable": [
                2
            ],
            "seatTypeId": [
                258
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
                346
            ],
            "__typename": [
                1
            ]
        },
        "StripeUiMode": {},
        "EventReservationUpdateTicketsInput": {
            "ticketIdsToRelease": [
                258
            ],
            "ticketIdsToAdd": [
                348
            ],
            "__typename": [
                1
            ]
        },
        "EventReservationRegisterTicketInput": {
            "ticketConfigurationId": [
                258
            ],
            "quantity": [
                15
            ],
            "reservedSeats": [
                258
            ],
            "__typename": [
                1
            ]
        },
        "EventReservationRegisterTicketsInput": {
            "tickets": [
                348
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
                353
            ],
            "createSeats": [
                354
            ],
            "deleteSeats": [
                258
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
                250
            ],
            "seatTypeId": [
                258
            ],
            "id": [
                258
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
                250
            ],
            "seatTypeId": [
                258
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
                252
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
                252
            ],
            "__typename": [
                1
            ]
        },
        "EmailTemplateCreateInput": {
            "triggerEvent": [
                145
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
                145
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
        "Subscription": {
            "presenceUserConnected": [
                214
            ],
            "presenceUserDisconnected": [
                216
            ],
            "__typename": [
                1
            ]
        }
    }
}