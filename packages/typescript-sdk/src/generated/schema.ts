// @ts-nocheck
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Scalars = {
    String: string,
    Boolean: boolean,
    DateTime: any,
    Float: number,
    EmailAddress: any,
    Int: number,
    JSONObject: any,
    URL: any,
    ID: string,
    PositiveInt: any,
    Void: any,
}

export interface KeyMapping {
    path: Scalars['String']
    mappedTo: Scalars['String']
    private: (Scalars['Boolean'] | null)
    __typename: 'KeyMapping'
}

export interface MappingConfiguration {
    mappings: KeyMapping[]
    __typename: 'MappingConfiguration'
}

export interface Header {
    name: Scalars['String']
    value: Scalars['String']
    __typename: 'Header'
}

export interface DataRetrievalConfig {
    url: Scalars['String']
    headers: Header[]
    mappingConfiguration: MappingConfiguration
    __typename: 'DataRetrievalConfig'
}

export interface ResponsePageInfo {
    hasNextPage: Scalars['Boolean']
    hasPreviousPage: Scalars['Boolean']
    startCursor: (Scalars['String'] | null)
    endCursor: (Scalars['String'] | null)
    __typename: 'ResponsePageInfo'
}

export interface OrganizationGroup {
    id: Scalars['ID']
    name: Scalars['String']
    permissions: GroupPermission[]
    organizationId: Scalars['ID']
    type: OrganizationGroupType
    createdAt: Scalars['DateTime']
    updatedAt: Scalars['DateTime']
    __typename: 'OrganizationGroup'
}

export type OrganizationGroupType = 'ANONYMOUS' | 'CONNECTED' | 'MEMBER' | 'ADMIN'

export interface Permission {
    id: Scalars['String']
    description: Scalars['String']
    resources: Scalars['String'][]
    availableVariables: Scalars['String'][]
    __typename: 'Permission'
}

export interface GroupPermission {
    id: Scalars['String']
    resources: Scalars['String'][]
    __typename: 'GroupPermission'
}

export interface Permissions {
    organizationPermissions: Permission[]
    __typename: 'Permissions'
}

export interface OrganizationGroups {
    edges: OrganizationGroupEdge[]
    nodes: OrganizationGroup[]
    pageInfo: ResponsePageInfo
    totalCount: (Scalars['Float'] | null)
    __typename: 'OrganizationGroups'
}

export interface OrganizationGroupEdge {
    cursor: Scalars['String']
    node: OrganizationGroup[]
    __typename: 'OrganizationGroupEdge'
}

export interface OrganizationMember {
    organizationId: Scalars['ID']
    groupId: Scalars['ID']
    memberId: Scalars['ID']
    permissions: (GroupPermission[] | null)
    createdAt: Scalars['DateTime']
    updatedAt: Scalars['DateTime']
    account: Account
    group: OrganizationGroup
    __typename: 'OrganizationMember'
}

export interface OrganizationMembers {
    edges: OrganizationMemberEdge[]
    nodes: OrganizationMember[]
    pageInfo: ResponsePageInfo
    totalCount: (Scalars['Float'] | null)
    __typename: 'OrganizationMembers'
}

export interface OrganizationMemberEdge {
    cursor: Scalars['String']
    node: OrganizationMember[]
    __typename: 'OrganizationMemberEdge'
}

export interface Property {
    property: Scalars['String']
    name: Scalars['String']
    type: PropertyType
    required: Scalars['Boolean']
    order: Scalars['Float']
    unique: Scalars['Boolean']
    /** @deprecated use visibility instead */
    public: (Scalars['Boolean'] | null)
    visibility: (PropertyVisibility | null)
    editability: (ProperyEditability | null)
    __typename: 'Property'
}

export type PropertyType = 'DATE' | 'COUNTRY' | 'STRING' | 'BOOLEAN' | 'PHONE' | 'EMAIL' | 'URL' | 'NUMBER'

export type PropertyVisibility = 'PUBLIC' | 'OWNER' | 'OWNER_OR_PERMISSION' | 'WITH_PERMISSION'

export type ProperyEditability = 'ALWAYS' | 'ONE_TIME' | 'WITH_PERMISSION'

export interface PropertyConfigWithValue {
    property: Scalars['String']
    name: Scalars['String']
    type: PropertyType
    required: Scalars['Boolean']
    order: Scalars['Float']
    unique: Scalars['Boolean']
    /** @deprecated use visibility instead */
    public: (Scalars['Boolean'] | null)
    visibility: (PropertyVisibility | null)
    editability: (ProperyEditability | null)
    value: (Scalars['String'] | null)
    __typename: 'PropertyConfigWithValue'
}

export interface PropertyValue {
    property: Scalars['String']
    value: Scalars['String']
    __typename: 'PropertyValue'
}

export interface MatchVariable {
    formulaName: Scalars['String']
    displayName: Scalars['String']
    displayIcon: (Scalars['String'] | null)
    defaultValue: Scalars['Float']
    __typename: 'MatchVariable'
}

export interface MatchConfiguration {
    variables: MatchVariable[]
    scoreFormula: (Scalars['String'] | null)
    __typename: 'MatchConfiguration'
}

export interface GameConfiguration {
    wonMatchCountToWinGame: Scalars['Float']
    useMatchScoresAsGameScore: Scalars['Boolean']
    teamsCount: Scalars['Float']
    matchConfiguration: MatchConfiguration
    __typename: 'GameConfiguration'
}

export interface Variable {
    name: Scalars['String']
    defaultValue: Scalars['Float']
    __typename: 'Variable'
}

export interface RoundConfiguration {
    game: GameConfiguration
    order: Scalars['Float']
    name: Scalars['String']
    __typename: 'RoundConfiguration'
}

export interface GroupConfiguration {
    rounds: RoundConfiguration[]
    name: Scalars['String']
    description: (Scalars['String'] | null)
    __typename: 'GroupConfiguration'
}

export interface StepConfiguration {
    type: ConfigurationType
    groups: GroupConfiguration[]
    __typename: 'StepConfiguration'
}

export type ConfigurationType = 'TOURNAMENT' | 'STEP'

export interface NumericCondition {
    conditionType: NumberConditionType
    value: Scalars['Float']
    __typename: 'NumericCondition'
}

export type NumberConditionType = 'LT' | 'BT' | 'LTE' | 'BTE' | 'EQ' | 'NEQ'

export interface TeamNumericCondition {
    aggregationType: (AggregationType | null)
    propertySource: (PlayerConditionDataSource | null)
    propertySourceId: (Scalars['ID'] | null)
    conditionType: NumberConditionType
    value: Scalars['Float']
    __typename: 'TeamNumericCondition'
}

export type AggregationType = 'SUM' | 'AVG' | 'MIN' | 'MAX'

export type PlayerConditionDataSource = 'PLAYER' | 'IDENTITY_PROVIDER'

export interface StringCondition {
    conditionType: StringConditionType
    value: Scalars['String']
    __typename: 'StringCondition'
}

export type StringConditionType = 'EQ' | 'NEQ'

export interface Condition {
    property: Scalars['String']
    numericCondition: (NumericCondition | null)
    stringCondition: (StringCondition | null)
    propertyCondition: PropertyCondition
    __typename: 'Condition'
}

export type PropertyCondition = 'EXISTS' | 'DONT_EXIST'

export interface PlayerField {
    propertySource: PlayerConditionDataSource
    propertySourceId: (Scalars['ID'] | null)
    property: Scalars['String']
    __typename: 'PlayerField'
}

export interface PlayerCondition {
    propertySource: PlayerConditionDataSource
    propertySourceId: (Scalars['ID'] | null)
    condition: Condition
    errorMessage: (Scalars['String'] | null)
    ruleDescription: (Scalars['String'] | null)
    __typename: 'PlayerCondition'
}

export interface TeamCondition {
    property: Scalars['String']
    stringCondition: (StringCondition | null)
    numericCondition: (TeamNumericCondition | null)
    propertyCondition: PropertyCondition
    errorMessage: (Scalars['String'] | null)
    __typename: 'TeamCondition'
}

export interface RegistrationConditions {
    teamConditions: TeamCondition[]
    memberConditions: PlayerCondition[]
    __typename: 'RegistrationConditions'
}

export interface TournamentConfiguration {
    type: ConfigurationType
    /** Minimum team size to register to the tournament */
    teamMinSize: (Scalars['Float'] | null)
    /** Maximum team size to register to the tournament */
    teamMaxSize: (Scalars['Float'] | null)
    /** Maximum number of registered teams */
    teamsCount: (Scalars['Float'] | null)
    /** Status of the team after registration, REGISTERED is the default state, AWAITING_FOR_PRESENCE_CONFIRMATION means that the team has been validated and is waiting for presence confirmation, AWAITING_FOR_PAYMENT means that the team has to pay to be validated */
    teamStatusAfterRegistration: (TeamStatusAfterRegistration | null)
    /** Condition rules to register to the tournament */
    registrationConditions: (RegistrationConditions | null)
    /** Custom fields that are defined on each teams */
    customFields: (Property[] | null)
    __typename: 'TournamentConfiguration'
}

export type TeamStatusAfterRegistration = 'REGISTERED' | 'AWAITING_FOR_PRESENCE_CONFIRMATION' | 'AWAITING_FOR_PAYMENT'

export interface Tournament {
    id: Scalars['ID']
    title: Scalars['String']
    description: Scalars['String']
    startAt: (Scalars['DateTime'] | null)
    endAt: (Scalars['DateTime'] | null)
    startRegistrationsAt: (Scalars['DateTime'] | null)
    endRegistrationsAt: (Scalars['DateTime'] | null)
    organizationId: Scalars['ID']
    configuration: (TournamentConfiguration | null)
    createdAt: Scalars['DateTime']
    updatedAt: Scalars['DateTime']
    createdById: Scalars['ID']
    tournamentSeriesId: (Scalars['ID'] | null)
    visibleAt: (Scalars['DateTime'] | null)
    /** Teams registered to this tournament */
    teams: TournamentTeams
    /** Steps registered for this tournament */
    steps: TournamentStep[]
    /** Account that created this tournament */
    createdBy: Account
    /** Current authenticated team registered to this event */
    myTeam: (TournamentTeam | null)
    teamScores: TournamentTeamScore[]
    __typename: 'Tournament'
}

export type TournamentTeamStatus = 'NOT_ATTENDING' | 'NOT_VALID' | 'REGISTERED' | 'AWAITING_FOR_PAYMENT' | 'AWAITING_FOR_PRESENCE_CONFIRMATION' | 'CONFIRMED' | 'DENIED'

export interface Limit {
    id: Scalars['String']
    default: Scalars['Float']
    description: Scalars['String']
    name: Scalars['String']
    type: OrganizationLimitType
    bucketDuration: (BucketDuration | null)
    scope: LimitScope
    max: (Scalars['Float'] | null)
    __typename: 'Limit'
}

export type OrganizationLimitType = 'BOOLEAN' | 'DAYS' | 'NUMBER' | 'BYTES'

export type BucketDuration = 'MINUTE' | 'HOUR' | 'DAILY' | 'MONTHLY' | 'YEARLY'

export type LimitScope = 'ORGANIZATION' | 'RESOURCE'

export interface Limits {
    limits: Limit[]
    __typename: 'Limits'
}

export interface OrganizationLimit {
    id: Scalars['String']
    max: Scalars['Float']
    current: Scalars['Float']
    __typename: 'OrganizationLimit'
}

export interface OrganizationLimits {
    limits: OrganizationLimit[]
    __typename: 'OrganizationLimits'
}

export interface OrganizationConfiguration {
    customFields: Property[]
    __typename: 'OrganizationConfiguration'
}

export interface PublicOrganizationIdentityProvider {
    id: Scalars['ID']
    name: Scalars['String']
    description: Scalars['String']
    icon: (Scalars['String'] | null)
    allowLogin: Scalars['Boolean']
    authorizationUrl: Scalars['String']
    __typename: 'PublicOrganizationIdentityProvider'
}

export interface Organization {
    id: Scalars['ID']
    ownerId: (Scalars['ID'] | null)
    name: Scalars['String']
    description: Scalars['String']
    configuration: OrganizationConfiguration
    tournaments: Tournament[]
    members: OrganizationMember[]
    groups: OrganizationGroup[]
    stripeConfigured: (Scalars['Boolean'] | null)
    identityProviders: PublicOrganizationIdentityProvider[]
    __typename: 'Organization'
}

export interface AccountIdentityProperty {
    property: Scalars['String']
    value: Scalars['String']
    __typename: 'AccountIdentityProperty'
}

export interface AccountIdentity {
    providerId: Scalars['String']
    accountId: Scalars['ID']
    organizationIdentityProviderId: Scalars['ID']
    properties: AccountIdentityProperty[]
    createdAt: Scalars['DateTime']
    updatedAt: Scalars['DateTime']
    organizationIdentityProvider: (PublicOrganizationIdentityProvider | null)
    __typename: 'AccountIdentity'
}

export interface Player {
    id: Scalars['ID']
    username: Scalars['String']
    description: Scalars['String']
    ownerId: (Scalars['ID'] | null)
    organizationCustomId: (Scalars['ID'] | null)
    updatedAt: Scalars['DateTime']
    createdAt: Scalars['DateTime']
    identities: (AccountIdentity[] | null)
    owner: (Account | null)
    customFields: PropertyConfigWithValue[]
    __typename: 'Player'
}

export interface Players {
    edges: PlayerEdge[]
    nodes: Player[]
    pageInfo: ResponsePageInfo
    totalCount: (Scalars['Float'] | null)
    __typename: 'Players'
}

export interface PlayerEdge {
    cursor: Scalars['String']
    node: Player[]
    __typename: 'PlayerEdge'
}

export interface Account {
    /** The ID of the account */
    id: Scalars['ID']
    email: (Scalars['EmailAddress'] | null)
    permissions: GroupPermission[]
    profiles: Player[]
    identities: AccountIdentity[]
    __typename: 'Account'
}

export interface Configuration {
    id: Scalars['ID']
    name: Scalars['String']
    description: Scalars['String']
    createdAt: Scalars['DateTime']
    updatedAt: Scalars['DateTime']
    configuration: ConfigurationProperties
    createdById: Scalars['ID']
    organizationId: Scalars['ID']
    __typename: 'Configuration'
}

export type ConfigurationProperties = (StepConfiguration | TournamentConfiguration) & { __isUnion?: true }

export interface LeaderboardSeasonBucketScore {
    rank: Scalars['Float']
    lastScore: (Scalars['Float'] | null)
    lastRank: (Scalars['Int'] | null)
    createdAt: Scalars['DateTime']
    updatedAt: Scalars['DateTime']
    score: Scalars['Float']
    leaderboardSeasonBucketId: Scalars['ID']
    playerProfileId: Scalars['ID']
    __typename: 'LeaderboardSeasonBucketScore'
}

export interface LeaderboardSeasonBucketScores {
    edges: LeaderboardSeasonBucketScoreEdge[]
    nodes: LeaderboardSeasonBucketScore[]
    pageInfo: ResponsePageInfo
    totalCount: (Scalars['Float'] | null)
    __typename: 'LeaderboardSeasonBucketScores'
}

export interface LeaderboardSeasonBucketScoreEdge {
    cursor: Scalars['String']
    node: LeaderboardSeasonBucketScore[]
    __typename: 'LeaderboardSeasonBucketScoreEdge'
}

export interface Leaderboard {
    /** The ID of the leaderboard */
    id: Scalars['ID']
    /** The ID of the organization this leaderboard belongs to */
    organizationId: Scalars['ID']
    /** The ID of the creator of this leaderboard */
    ownerId: Scalars['ID']
    /** The name of the leaderboard */
    name: Scalars['String']
    /** The description of the leaderboard */
    description: Scalars['String']
    createdAt: Scalars['DateTime']
    updatedAt: Scalars['DateTime']
    __typename: 'Leaderboard'
}

export interface Leaderboards {
    edges: LeaderboardEdge[]
    nodes: Leaderboard[]
    pageInfo: ResponsePageInfo
    totalCount: (Scalars['Float'] | null)
    __typename: 'Leaderboards'
}

export interface LeaderboardEdge {
    cursor: Scalars['String']
    node: Leaderboard[]
    __typename: 'LeaderboardEdge'
}

export interface LeaderboardSeason {
    id: Scalars['ID']
    leaderboardId: Scalars['ID']
    name: Scalars['String']
    start: Scalars['DateTime']
    end: Scalars['DateTime']
    startingScore: Scalars['Float']
    createdAt: Scalars['DateTime']
    updatedAt: Scalars['DateTime']
    __typename: 'LeaderboardSeason'
}

export interface LeaderboardSeasons {
    edges: LeaderboardSeasonEdge[]
    nodes: LeaderboardSeason[]
    pageInfo: ResponsePageInfo
    totalCount: (Scalars['Float'] | null)
    __typename: 'LeaderboardSeasons'
}

export interface LeaderboardSeasonEdge {
    cursor: Scalars['String']
    node: LeaderboardSeason[]
    __typename: 'LeaderboardSeasonEdge'
}

export interface LeaderboardSeasonBucket {
    id: Scalars['ID']
    seasonId: Scalars['ID']
    name: Scalars['String']
    minScore: Scalars['Float']
    scoreCalculationType: LeaderboardScoreCalculationType
    createdAt: Scalars['DateTime']
    updatedAt: Scalars['DateTime']
    __typename: 'LeaderboardSeasonBucket'
}

export type LeaderboardScoreCalculationType = 'SCORE'

export interface LeaderboardSeasonBuckets {
    edges: LeaderboardSeasonBucketEdge[]
    nodes: LeaderboardSeasonBucket[]
    pageInfo: ResponsePageInfo
    totalCount: (Scalars['Float'] | null)
    __typename: 'LeaderboardSeasonBuckets'
}

export interface LeaderboardSeasonBucketEdge {
    cursor: Scalars['String']
    node: LeaderboardSeasonBucket[]
    __typename: 'LeaderboardSeasonBucketEdge'
}

export interface CustomDomainSslValidationRecord {
    txt_name: (Scalars['String'] | null)
    txt_value: (Scalars['String'] | null)
    __typename: 'CustomDomainSslValidationRecord'
}

export interface CustomDomainSslValidationError {
    message: (Scalars['String'] | null)
    __typename: 'CustomDomainSslValidationError'
}

export interface CustomDomainSsl {
    status: (CustomDomainValidationStatus | null)
    validation_errors: (CustomDomainSslValidationError[] | null)
    validation_records: (CustomDomainSslValidationRecord[] | null)
    __typename: 'CustomDomainSsl'
}

export type CustomDomainValidationStatus = 'initializing' | 'pending_validation' | 'deleted' | 'pending_issuance' | 'pending_deployment' | 'pending_deletion' | 'pending_expiration' | 'expired' | 'active' | 'initializing_timed_out' | 'validation_timed_out' | 'issuance_timed_out' | 'deployment_timed_out' | 'deletion_timed_out' | 'pending_cleanup' | 'staging_deployment' | 'staging_active' | 'deactivating' | 'inactive' | 'backup_issued' | 'holding_deployment'

export interface CustomDomainOwnershipVerification {
    name: (Scalars['String'] | null)
    value: (Scalars['String'] | null)
    __typename: 'CustomDomainOwnershipVerification'
}

export interface CustomDomainData {
    hostname: Scalars['String']
    ownership_verification: (CustomDomainOwnershipVerification | null)
    ssl: CustomDomainSsl
    status: (CustomDomainStatus | null)
    verification_errors: (Scalars['String'][] | null)
    __typename: 'CustomDomainData'
}

export type CustomDomainStatus = 'active' | 'pending' | 'active_redeploying' | 'moved' | 'pending_deletion' | 'deleted' | 'pending_blocked' | 'pending_migration' | 'pending_provisioned' | 'test_pending' | 'test_active' | 'test_active_apex' | 'test_blocked' | 'test_failed' | 'provisioned' | 'blocked'

export interface LogData {
    oldValue: (Scalars['JSONObject'] | null)
    newValue: Scalars['JSONObject']
    author: (Scalars['String'] | null)
    authorType: LogAuthorType
    __typename: 'LogData'
}

export type LogAuthorType = 'SYSTEM' | 'USER' | 'APP'

export interface IdentityProviderRequirements {
    requiredFields: Scalars['String'][]
    __typename: 'IdentityProviderRequirements'
}

export interface PublicIdentityProvider {
    /** The ID of the identity provider. */
    id: Scalars['ID']
    /** The name of the identity provider. */
    name: Scalars['String']
    /** The description of the identity provider. */
    description: (Scalars['String'] | null)
    /** The icon URL of the identity provider. */
    icon: (Scalars['String'] | null)
    /** The availability of the identity provider. */
    availability: IdentityProviderAvailability
    /** Identity provider create and update requirements */
    requirements: IdentityProviderRequirements
    createdAt: Scalars['DateTime']
    updatedAt: Scalars['DateTime']
    __typename: 'PublicIdentityProvider'
}

export type IdentityProviderAvailability = 'PUBLIC' | 'PREVIEW' | 'PRIVATE'

export interface OrganizationAppConfigMetadata {
    loginUrl: Scalars['String']
    consentUrl: Scalars['String']
    creatorId: Scalars['String']
    requiresConsent: Scalars['Boolean']
    public: Scalars['Boolean']
    __typename: 'OrganizationAppConfigMetadata'
}

export interface OrganizationAppConfig {
    name: Scalars['String']
    organizationId: Scalars['ID']
    redirectUrls: Scalars['String'][]
    logoutRedirectUrls: Scalars['String'][]
    scope: Scalars['String']
    metadata: OrganizationAppConfigMetadata
    __typename: 'OrganizationAppConfig'
}

export interface OrganizationApp {
    id: Scalars['String']
    name: Scalars['String']
    description: Scalars['String']
    creatorId: Scalars['ID']
    organizationId: Scalars['ID']
    createdAt: Scalars['DateTime']
    updatedAt: Scalars['DateTime']
    secret: (Scalars['String'] | null)
    public: (Scalars['Boolean'] | null)
    configuration: OrganizationAppConfig
    creator: Account
    __typename: 'OrganizationApp'
}

export interface OrganizationApps {
    edges: OrganizationAppEdge[]
    nodes: OrganizationApp[]
    pageInfo: ResponsePageInfo
    totalCount: (Scalars['Float'] | null)
    __typename: 'OrganizationApps'
}

export interface OrganizationAppEdge {
    cursor: Scalars['String']
    node: OrganizationApp[]
    __typename: 'OrganizationAppEdge'
}

export interface OrganizationAttachedApp {
    organizationId: Scalars['ID']
    groupId: Scalars['ID']
    appId: Scalars['String']
    permissions: (GroupPermission[] | null)
    createdAt: Scalars['DateTime']
    updatedAt: Scalars['DateTime']
    app: OrganizationApp
    group: OrganizationGroup
    __typename: 'OrganizationAttachedApp'
}

export interface OrganizationAttachedApps {
    edges: OrganizationAttachedAppEdge[]
    nodes: OrganizationAttachedApp[]
    pageInfo: ResponsePageInfo
    totalCount: (Scalars['Float'] | null)
    __typename: 'OrganizationAttachedApps'
}

export interface OrganizationAttachedAppEdge {
    cursor: Scalars['String']
    node: OrganizationAttachedApp[]
    __typename: 'OrganizationAttachedAppEdge'
}

export interface OrganizationIdentityProvider {
    enabled: Scalars['Boolean']
    requiredForPlayerValidation: Scalars['Boolean']
    allowLogin: Scalars['Boolean']
    description: Scalars['String']
    icon: (Scalars['String'] | null)
    id: Scalars['ID']
    identityProviderId: (Scalars['ID'] | null)
    configuration: (IdentityProviderConfigurations | null)
    name: Scalars['String']
    organizationId: (Scalars['ID'] | null)
    createdAt: Scalars['DateTime']
    updatedAt: Scalars['DateTime']
    parentIdentityProvider: (PublicIdentityProvider | null)
    __typename: 'OrganizationIdentityProvider'
}

export type IdentityProviderConfigurations = (OAuthClientConfiguration | OpenidConfiguration) & { __isUnion?: true }

export interface OAuthClientConfiguration {
    authorizationEndpoint: (Scalars['String'] | null)
    dataRetrievers: DataRetrievalConfig[]
    issuer: (Scalars['String'] | null)
    providerType: IdentityProviderType
    clientId: Scalars['String']
    clientSecret: Scalars['String']
    tokenEndpointAuthMethod: (OauthEndpointAuthMethod | null)
    redirectUrl: Scalars['String']
    tokenEndpoint: (Scalars['String'] | null)
    authorizationUrl: (Scalars['String'] | null)
    __typename: 'OAuthClientConfiguration'
}

export type IdentityProviderType = 'OPENID' | 'OAUTH2'

export type OauthEndpointAuthMethod = 'CLIENT_SECRET_POST' | 'CLIENT_SECRET_BASIC' | 'CLIENT_SECRET_JWT' | 'PRIVATE_KEY_JWT' | 'TLS_CLIENT_AUTH' | 'SELF_SIGNED_TLS_CLIENT_AUTH' | 'NONE'

export interface OpenidConfiguration {
    authorizationEndpoint: (Scalars['String'] | null)
    dataRetrievers: DataRetrievalConfig[]
    issuer: (Scalars['String'] | null)
    providerType: IdentityProviderType
    clientId: Scalars['String']
    clientSecret: Scalars['String']
    redirectUrl: Scalars['String']
    __typename: 'OpenidConfiguration'
}

export interface TournamentTeamMemberDto {
    status: TournamentTeamMemberStatus
    tournamentTeamId: Scalars['ID']
    playerProfileId: Scalars['ID']
    createdAt: Scalars['DateTime']
    updatedAt: Scalars['DateTime']
    team: TournamentTeam
    __typename: 'TournamentTeamMemberDto'
}

export type TournamentTeamMemberStatus = 'AWAITING' | 'ACCEPTED' | 'DENIED'

export interface TeamMembers {
    edges: TournamentTeamMemberEdge[]
    nodes: TournamentTeamMemberDto[]
    pageInfo: ResponsePageInfo
    totalCount: (Scalars['Float'] | null)
    __typename: 'TeamMembers'
}

export interface TournamentTeamMemberEdge {
    cursor: Scalars['String']
    node: TournamentTeamMemberDto[]
    __typename: 'TournamentTeamMemberEdge'
}

export interface TournamentTeam {
    id: Scalars['ID']
    name: Scalars['String']
    tag: Scalars['String']
    teamId: (Scalars['ID'] | null)
    managerId: (Scalars['ID'] | null)
    tournamentId: Scalars['ID']
    status: TournamentTeamStatus
    createdAt: Scalars['DateTime']
    updatedAt: Scalars['DateTime']
    members: TournamentTeamMemberDto[]
    customFields: PropertyConfigWithValue[]
    tournament: Tournament
    __typename: 'TournamentTeam'
}

export interface TournamentTeams {
    edges: TournamentTeamEdge[]
    nodes: TournamentTeam[]
    pageInfo: ResponsePageInfo
    totalCount: (Scalars['Float'] | null)
    __typename: 'TournamentTeams'
}

export interface TournamentTeamEdge {
    cursor: Scalars['String']
    node: TournamentTeam[]
    __typename: 'TournamentTeamEdge'
}

export interface WebhookEventConfigurationProperties {
    name: Scalars['String']
    description: (Scalars['String'] | null)
    array: Scalars['Boolean']
    optional: Scalars['Boolean']
    example: (Scalars['String'] | null)
    type: Scalars['String']
    properties: (WebhookEventConfigurationProperties[] | null)
    __typename: 'WebhookEventConfigurationProperties'
}

export interface WebhookEventConfiguration {
    type: WebhookEventType
    description: Scalars['String']
    payload: WebhookEventConfigurationProperties
    /** If this property is available, it means that the event is a "RPC" event and that an answer is expected from the webhook called */
    answerPayload: (WebhookEventConfigurationProperties | null)
    __typename: 'WebhookEventConfiguration'
}

export type WebhookEventType = 'TOURNAMENT_TEAM_DELETED_ADMIN' | 'TOURNAMENT_TEAM_DELETED' | 'TOURNAMENT_TEAM_STATUS_UPDATED' | 'TOURNAMENT_TEAM_ATTENDANCE_UPDATED' | 'TOURNAMENT_TEAM_CONFIRMATION_UPDATED'

export interface Webhook {
    id: Scalars['ID']
    organizationId: Scalars['ID']
    events: WebhookEventType[]
    url: Scalars['String']
    description: Scalars['String']
    active: Scalars['Boolean']
    secret: Scalars['String']
    __typename: 'Webhook'
}

export interface PlayerSkillRating {
    playerProfileId: Scalars['ID']
    ratingId: Scalars['ID']
    value: Scalars['Float']
    createdAt: Scalars['DateTime']
    updatedAt: Scalars['DateTime']
    player: Player
    __typename: 'PlayerSkillRating'
}

export interface TournamentStepGroupRoundGameMatch {
    id: Scalars['ID']
    order: Scalars['Float']
    status: MatchStatus
    tournamentStepGroupRoundGameId: Scalars['ID']
    configuration: MatchConfiguration
    createdAt: Scalars['DateTime']
    updatedAt: Scalars['DateTime']
    __typename: 'TournamentStepGroupRoundGameMatch'
}

export type MatchStatus = 'WAITING' | 'STARTED' | 'ENDED'

export interface TournamentStepGroupRoundGameMatches {
    edges: TournamentStepGroupRoundGameMatchEdge[]
    nodes: TournamentStepGroupRoundGameMatch[]
    pageInfo: ResponsePageInfo
    totalCount: (Scalars['Float'] | null)
    __typename: 'TournamentStepGroupRoundGameMatches'
}

export interface TournamentStepGroupRoundGameMatchEdge {
    cursor: Scalars['String']
    node: TournamentStepGroupRoundGameMatch[]
    __typename: 'TournamentStepGroupRoundGameMatchEdge'
}

export interface OrganizationPaymentCollectionConfiguration {
    wellPlayedFeePercent: Scalars['Float']
    wellPlayedMinimalFee: Scalars['Float']
    __typename: 'OrganizationPaymentCollectionConfiguration'
}

export interface TournamentTeamScore {
    teamId: Scalars['ID']
    score: Scalars['Float']
    team: TournamentTeam
    __typename: 'TournamentTeamScore'
}

export interface TournamentStep {
    id: Scalars['ID']
    tournamentId: Scalars['ID']
    name: Scalars['String']
    description: Scalars['String']
    order: Scalars['Float']
    type: StepType
    status: StepStatus
    configuration: StepConfiguration
    createdAt: Scalars['DateTime']
    updatedAt: Scalars['DateTime']
    teamScores: TournamentTeamScore[]
    tournament: Tournament
    __typename: 'TournamentStep'
}

export type StepType = 'SCORE' | 'ROUND_ROBIN' | 'SINGLE_ELIM' | 'DOUBLE_ELIM' | 'CUSTOM'

export type StepStatus = 'CONFIGURED' | 'GENERATING' | 'GENERATED' | 'SEEDING' | 'SEEDED' | 'STARTED' | 'ENDED'

export interface Tournaments {
    edges: TournamentEdge[]
    nodes: Tournament[]
    pageInfo: ResponsePageInfo
    totalCount: (Scalars['Float'] | null)
    __typename: 'Tournaments'
}

export interface TournamentEdge {
    cursor: Scalars['String']
    node: Tournament[]
    __typename: 'TournamentEdge'
}

export interface TournamentStepGroupRoundGame {
    id: Scalars['ID']
    configuration: GameConfiguration
    status: TournamentGameStatus
    order: Scalars['Float']
    tournamentStepGroupRoundId: Scalars['ID']
    winningGameId: (Scalars['ID'] | null)
    losingGameId: (Scalars['ID'] | null)
    createdAt: Scalars['DateTime']
    updatedAt: Scalars['DateTime']
    matches: TournamentStepGroupRoundGameMatch[]
    __typename: 'TournamentStepGroupRoundGame'
}

export type TournamentGameStatus = 'WAITING' | 'STARTED' | 'ENDED'

export interface TournamentStepGroupRound {
    id: Scalars['ID']
    name: Scalars['String']
    configuration: RoundConfiguration
    tournamentStepGroupId: Scalars['ID']
    order: Scalars['Float']
    createdAt: Scalars['DateTime']
    updatedAt: Scalars['DateTime']
    games: TournamentStepGroupRoundGame[]
    __typename: 'TournamentStepGroupRound'
}

export interface TournamentStepGroup {
    id: Scalars['ID']
    name: Scalars['String']
    description: Scalars['String']
    configuration: GroupConfiguration
    tournamentStepId: Scalars['ID']
    createdAt: Scalars['DateTime']
    updatedAt: Scalars['DateTime']
    rounds: TournamentStepGroupRound[]
    __typename: 'TournamentStepGroup'
}

export interface TournamentStepGroupRoundGameMatchScore {
    matchId: Scalars['ID']
    teamId: Scalars['ID']
    score: Scalars['Float']
    status: MatchScoreStatus
    createdAt: Scalars['DateTime']
    updatedAt: Scalars['DateTime']
    __typename: 'TournamentStepGroupRoundGameMatchScore'
}

export type MatchScoreStatus = 'WAITING' | 'WINNER' | 'LOSER' | 'FORFEIT'

export interface TournamentStepGroupRoundGameMatchScores {
    edges: TournamentStepGroupRoundGameMatchScoreEdge[]
    nodes: TournamentStepGroupRoundGameMatchScore[]
    pageInfo: ResponsePageInfo
    totalCount: (Scalars['Float'] | null)
    __typename: 'TournamentStepGroupRoundGameMatchScores'
}

export interface TournamentStepGroupRoundGameMatchScoreEdge {
    cursor: Scalars['String']
    node: TournamentStepGroupRoundGameMatchScore[]
    __typename: 'TournamentStepGroupRoundGameMatchScoreEdge'
}

export interface TournamentAdmin {
    tournamentId: Scalars['ID']
    accountId: Scalars['ID']
    permissions: TournamentAdminPermissions[]
    createdAt: Scalars['DateTime']
    updatedAt: Scalars['DateTime']
    account: Account
    __typename: 'TournamentAdmin'
}

export type TournamentAdminPermissions = 'MANAGE_TOURNAMENT' | 'MANAGE_TEAMS' | 'MANAGE_SCORES' | 'MANAGE_PERMISSIONS'

export interface Currency {
    id: Scalars['ID']
    symbol: Scalars['String']
    name: Scalars['String']
    externalId: (Scalars['String'] | null)
    description: Scalars['String']
    hidden: Scalars['Boolean']
    organizationId: Scalars['String']
    createdAt: Scalars['DateTime']
    updatedAt: Scalars['DateTime']
    metadata: PropertyValue[]
    __typename: 'Currency'
}

export interface Currencies {
    edges: CurrencyEdge[]
    nodes: Currency[]
    pageInfo: ResponsePageInfo
    totalCount: (Scalars['Float'] | null)
    __typename: 'Currencies'
}

export interface CurrencyEdge {
    cursor: Scalars['String']
    node: Currency[]
    __typename: 'CurrencyEdge'
}

export interface PlayerCurrency {
    id: Scalars['ID']
    playerProfileId: Scalars['ID']
    currencyId: Scalars['ID']
    balance: Scalars['Float']
    createdAt: Scalars['DateTime']
    updatedAt: Scalars['DateTime']
    __typename: 'PlayerCurrency'
}

export interface PlayerCurrencies {
    edges: PlayerCurrencyEdge[]
    nodes: PlayerCurrency[]
    pageInfo: ResponsePageInfo
    totalCount: (Scalars['Float'] | null)
    __typename: 'PlayerCurrencies'
}

export interface PlayerCurrencyEdge {
    cursor: Scalars['String']
    node: PlayerCurrency[]
    __typename: 'PlayerCurrencyEdge'
}

export interface EmailTemplateConfigurationAvailableVariables {
    name: Scalars['String']
    description: Scalars['String']
    __typename: 'EmailTemplateConfigurationAvailableVariables'
}

export interface EmailTemplateConfiguration {
    triggerEvent: EmailTriggerEvents
    name: Scalars['String']
    description: Scalars['String']
    availableVariables: EmailTemplateConfigurationAvailableVariables[]
    __typename: 'EmailTemplateConfiguration'
}

export type EmailTriggerEvents = 'EVENT_REGISTRATION_COMPLETED' | 'EVENT_REGISTRATION_ADMIN_UPDATE_STATUS_NONE' | 'EVENT_REGISTRATION_ADMIN_UPDATE_STATUS_REQUIRES_ADMIN_APPROVAL' | 'EVENT_REGISTRATION_ADMIN_UPDATE_STATUS_PENDING' | 'EVENT_REGISTRATION_ADMIN_UPDATE_STATUS_SESSION_EXPIRED' | 'EVENT_REGISTRATION_ADMIN_UPDATE_STATUS_NOT_ATTENDING' | 'EVENT_REGISTRATION_ADMIN_UPDATE_STATUS_REGISTERED' | 'EVENT_REGISTRATION_ADMIN_UPDATE_STATUS_PRESENCE_CONFIRMATION_PENDING' | 'EVENT_REGISTRATION_ADMIN_UPDATE_STATUS_CONFIRMED' | 'EVENT_REGISTRATION_ADMIN_UPDATE_STATUS_DENIED'

export interface EmailConfiguration {
    host: Scalars['String']
    port: (Scalars['Float'] | null)
    username: (Scalars['String'] | null)
    password: (Scalars['String'] | null)
    from: Scalars['String']
    fromName: (Scalars['String'] | null)
    replyTo: (Scalars['String'] | null)
    replyToName: (Scalars['String'] | null)
    secure: Scalars['Boolean']
    emailField: PlayerField
    __typename: 'EmailConfiguration'
}

export interface EmailTemplate {
    id: Scalars['ID']
    triggerEvent: EmailTriggerEvents
    default: Scalars['Boolean']
    name: Scalars['String']
    title: Scalars['String']
    contents: Scalars['String']
    createdAt: Scalars['DateTime']
    updatedAt: Scalars['DateTime']
    organizationId: Scalars['ID']
    __typename: 'EmailTemplate'
}

export interface EmailTemplates {
    edges: EmailTemplateEdge[]
    nodes: EmailTemplate[]
    pageInfo: ResponsePageInfo
    totalCount: (Scalars['Float'] | null)
    __typename: 'EmailTemplates'
}

export interface EmailTemplateEdge {
    cursor: Scalars['String']
    node: EmailTemplate[]
    __typename: 'EmailTemplateEdge'
}

export interface UserGroupConfiguration {
    maxSize: Scalars['Int']
    minSize: Scalars['Int']
    __typename: 'UserGroupConfiguration'
}

export interface UserGroupMember {
    id: Scalars['ID']
    groupId: Scalars['ID']
    playerProfileId: Scalars['ID']
    status: UserGroupMemberStatus
    createdAt: Scalars['DateTime']
    updatedAt: Scalars['DateTime']
    __typename: 'UserGroupMember'
}

export type UserGroupMemberStatus = 'PENDING' | 'ACCEPTED' | 'DENIED'

export interface UserGroup {
    id: Scalars['ID']
    organizationId: Scalars['ID']
    managerId: Scalars['ID']
    createdAt: Scalars['DateTime']
    updatedAt: Scalars['DateTime']
    status: UserGroupStatus
    locked: Scalars['Boolean']
    __typename: 'UserGroup'
}

export type UserGroupStatus = 'VALID' | 'INVALID'

export interface UserGroups {
    edges: UserGroupEdge[]
    nodes: UserGroup[]
    pageInfo: ResponsePageInfo
    totalCount: (Scalars['Float'] | null)
    __typename: 'UserGroups'
}

export interface UserGroupEdge {
    cursor: Scalars['String']
    node: UserGroup[]
    __typename: 'UserGroupEdge'
}

export interface UserGroupMembers {
    edges: UserGroupMemberEdge[]
    nodes: UserGroupMember[]
    pageInfo: ResponsePageInfo
    totalCount: (Scalars['Float'] | null)
    __typename: 'UserGroupMembers'
}

export interface UserGroupMemberEdge {
    cursor: Scalars['String']
    node: UserGroupMember[]
    __typename: 'UserGroupMemberEdge'
}

export interface Position {
    x: Scalars['Float']
    y: Scalars['Float']
    __typename: 'Position'
}

export interface EventVenueSeatConfiguration {
    size: (Scalars['Float'] | null)
    svgUrl: (Scalars['String'] | null)
    position: Position
    __typename: 'EventVenueSeatConfiguration'
}

export interface EventVenueSeat {
    id: Scalars['ID']
    name: Scalars['String']
    createdAt: Scalars['DateTime']
    updatedAt: Scalars['DateTime']
    configuration: EventVenueSeatConfiguration
    seatTypeId: Scalars['ID']
    __typename: 'EventVenueSeat'
}

export interface EventVenueSeatsUpdateResult {
    updatedSeats: EventVenueSeat[]
    createdSeats: EventVenueSeat[]
    deletedSeats: EventVenueSeat[]
    __typename: 'EventVenueSeatsUpdateResult'
}

export interface EventVenueSeats {
    edges: EventVenueSeatEdge[]
    nodes: EventVenueSeat[]
    pageInfo: ResponsePageInfo
    totalCount: (Scalars['Float'] | null)
    __typename: 'EventVenueSeats'
}

export interface EventVenueSeatEdge {
    cursor: Scalars['String']
    node: EventVenueSeat[]
    __typename: 'EventVenueSeatEdge'
}

export interface EventConfiguration {
    /** Custom fields that are defined on each teams */
    customFields: (Property[] | null)
    /** Configuration of the group */
    groupConfiguration: (UserGroupConfiguration | null)
    /** Maximum number of tickets per reservation */
    maxTicketsPerReservation: (Scalars['Float'] | null)
    /** Status of the reservation after payment validation, REGISTERED is the default state, CONFIRMED means that the registration has been validated by an admin, PRESENCE_CONFIRMATION_PENDING means that the registration is validated but the presence of the users is not confirmed yet */
    reservationStatusAfterPayment: (EventReservationStatusAfterPayment | null)
    /** Status of the reservation after registration, PENDING is the default state meaning that the session is started, REQUIRES_ADMIN_APPROVAL means that the registration is pending to be validated by an admin. After validation, a session will be started. */
    reservationStatusAfterRegistration: (EventReservationStatusAfterRegistration | null)
    /** The number of seconds before registration session expires, default is 15 minutes */
    sessionDuration: (Scalars['Float'] | null)
    /** If true, a new session will be allowed after the previous one has expired */
    allowForNewSessionAfterTimeout: (Scalars['Boolean'] | null)
    /** If set, the seat assignment will be required for the reservation, NONE means that there is no seat assignment, REQUIRED means that the seat assignment is required, OPTIONAL means that the seat assignment is optional, default is OPTIONAL */
    seatAssignmentMode: (SeatAssignmentMode | null)
    /** Allow to reserve more tickets than group members */
    allowForMoreTicketsThanGroupMembers: (Scalars['Boolean'] | null)
    __typename: 'EventConfiguration'
}

export type EventReservationStatusAfterPayment = 'PRESENCE_CONFIRMATION_PENDING' | 'REGISTERED' | 'CONFIRMED'

export type EventReservationStatusAfterRegistration = 'NONE' | 'REQUIRES_ADMIN_APPROVAL' | 'PENDING'

export type SeatAssignmentMode = 'NONE' | 'REQUIRED' | 'OPTIONAL'

export interface Event {
    id: Scalars['ID']
    title: Scalars['String']
    description: Scalars['String']
    createdAt: Scalars['DateTime']
    updatedAt: Scalars['DateTime']
    startAt: (Scalars['DateTime'] | null)
    endAt: (Scalars['DateTime'] | null)
    startRegistrationsAt: (Scalars['DateTime'] | null)
    endRegistrationsAt: (Scalars['DateTime'] | null)
    visibleAt: (Scalars['DateTime'] | null)
    configuration: (EventConfiguration | null)
    eventVenueId: (Scalars['ID'] | null)
    organizationId: Scalars['ID']
    createdById: Scalars['ID']
    decryptionKey: Scalars['String']
    /** The venue where this event is taking place */
    venue: (EventVenue | null)
    __typename: 'Event'
}

export type EventInterface = (Event | EventWithUserReservation) & { __isUnion?: true }

export interface EventWithUserReservation {
    id: Scalars['ID']
    title: Scalars['String']
    description: Scalars['String']
    createdAt: Scalars['DateTime']
    updatedAt: Scalars['DateTime']
    startAt: (Scalars['DateTime'] | null)
    endAt: (Scalars['DateTime'] | null)
    startRegistrationsAt: (Scalars['DateTime'] | null)
    endRegistrationsAt: (Scalars['DateTime'] | null)
    visibleAt: (Scalars['DateTime'] | null)
    configuration: (EventConfiguration | null)
    eventVenueId: (Scalars['ID'] | null)
    organizationId: Scalars['ID']
    createdById: Scalars['ID']
    decryptionKey: Scalars['String']
    /** The venue where this event is taking place */
    venue: (EventVenue | null)
    /** The reservation of the current user for this event */
    myReservation: (EventReservationWithTicketsAndQrCode | null)
    __typename: 'EventWithUserReservation'
}

export interface Events {
    edges: EventEdge[]
    nodes: Event[]
    pageInfo: ResponsePageInfo
    totalCount: (Scalars['Float'] | null)
    __typename: 'Events'
}

export interface EventEdge {
    cursor: Scalars['String']
    node: Event[]
    __typename: 'EventEdge'
}

export interface EventReservationTicketConfiguration {
    customFields: PropertyConfigWithValue[]
    __typename: 'EventReservationTicketConfiguration'
}

export interface EventReservationTicket {
    id: Scalars['ID']
    ticketId: Scalars['ID']
    reservationId: Scalars['ID']
    groupMemberId: (Scalars['ID'] | null)
    seatId: (Scalars['ID'] | null)
    createdAt: Scalars['DateTime']
    updatedAt: Scalars['DateTime']
    configuration: (EventReservationTicketConfiguration | null)
    __typename: 'EventReservationTicket'
}

export interface EventReservationTicketWithQrCode {
    id: Scalars['ID']
    ticketId: Scalars['ID']
    reservationId: Scalars['ID']
    groupMemberId: (Scalars['ID'] | null)
    seatId: (Scalars['ID'] | null)
    createdAt: Scalars['DateTime']
    updatedAt: Scalars['DateTime']
    configuration: (EventReservationTicketConfiguration | null)
    qrCode: Scalars['String']
    __typename: 'EventReservationTicketWithQrCode'
}

export interface EventReservation {
    id: Scalars['ID']
    name: Scalars['String']
    status: EventReservationStatus
    sessionValidUntil: Scalars['DateTime']
    createdAt: Scalars['DateTime']
    updatedAt: Scalars['DateTime']
    eventId: Scalars['ID']
    groupId: Scalars['ID']
    tickets: EventReservationTicket[]
    groupStatus: UserGroupStatus
    __typename: 'EventReservation'
}

export type EventReservationStatus = 'NONE' | 'REQUIRES_ADMIN_APPROVAL' | 'PENDING' | 'SESSION_EXPIRED' | 'NOT_ATTENDING' | 'PAYMENT_PENDING' | 'PAYMENT_FAILED' | 'PAYMENT_REFUNDED' | 'REGISTERED' | 'PRESENCE_CONFIRMATION_PENDING' | 'CONFIRMED' | 'DENIED'

export interface EventReservationWithTicketsAndQrCode {
    id: Scalars['ID']
    name: Scalars['String']
    status: EventReservationStatus
    sessionValidUntil: Scalars['DateTime']
    createdAt: Scalars['DateTime']
    updatedAt: Scalars['DateTime']
    eventId: Scalars['ID']
    groupId: Scalars['ID']
    groupStatus: UserGroupStatus
    tickets: EventReservationTicketWithQrCode[]
    __typename: 'EventReservationWithTicketsAndQrCode'
}

export interface EventReservations {
    edges: OmitObjectTypeEdge[]
    nodes: OmitObjectType[]
    pageInfo: ResponsePageInfo
    totalCount: (Scalars['Float'] | null)
    __typename: 'EventReservations'
}

export interface OmitObjectTypeEdge {
    cursor: Scalars['String']
    node: OmitObjectType[]
    __typename: 'OmitObjectTypeEdge'
}

export interface OmitObjectType {
    id: Scalars['ID']
    name: Scalars['String']
    status: EventReservationStatus
    sessionValidUntil: Scalars['DateTime']
    createdAt: Scalars['DateTime']
    updatedAt: Scalars['DateTime']
    eventId: Scalars['ID']
    groupId: Scalars['ID']
    groupStatus: UserGroupStatus
    __typename: 'OmitObjectType'
}

export interface EventReservationValidateAndPay {
    paymentUrl: (Scalars['String'] | null)
    clientSecret: (Scalars['String'] | null)
    __typename: 'EventReservationValidateAndPay'
}

export interface EventSeat {
    id: Scalars['ID']
    name: Scalars['String']
    createdAt: Scalars['DateTime']
    updatedAt: Scalars['DateTime']
    configuration: EventVenueSeatConfiguration
    seatTypeId: Scalars['ID']
    status: EventSeatStatus
    reservedByTicketId: (Scalars['ID'] | null)
    reservedByReservationId: (Scalars['ID'] | null)
    reservedByGroupMemberId: (Scalars['ID'] | null)
    __typename: 'EventSeat'
}

export type EventSeatStatus = 'AVAILABLE' | 'RESERVED' | 'SOLD'

export interface EventSeats {
    edges: EventSeatEdge[]
    nodes: EventSeat[]
    pageInfo: ResponsePageInfo
    totalCount: (Scalars['Float'] | null)
    __typename: 'EventSeats'
}

export interface EventSeatEdge {
    cursor: Scalars['String']
    node: EventSeat[]
    __typename: 'EventSeatEdge'
}

export interface EventVenueSeatTypeConfiguration {
    nonce: (Scalars['String'] | null)
    __typename: 'EventVenueSeatTypeConfiguration'
}

export interface EventVenueSeatType {
    id: Scalars['ID']
    name: Scalars['String']
    description: Scalars['String']
    configuration: EventVenueSeatTypeConfiguration
    createdAt: Scalars['DateTime']
    updatedAt: Scalars['DateTime']
    venueId: Scalars['ID']
    __typename: 'EventVenueSeatType'
}

export interface EventVenueSeatTypes {
    edges: EventVenueSeatTypeEdge[]
    nodes: EventVenueSeatType[]
    pageInfo: ResponsePageInfo
    totalCount: (Scalars['Float'] | null)
    __typename: 'EventVenueSeatTypes'
}

export interface EventVenueSeatTypeEdge {
    cursor: Scalars['String']
    node: EventVenueSeatType[]
    __typename: 'EventVenueSeatTypeEdge'
}

export interface PlatformCdnFilePageConfig {
    path: Scalars['String']
    __typename: 'PlatformCdnFilePageConfig'
}

export interface PlatformCdnFileConfigs {
    pageConfig: (PlatformCdnFilePageConfig | null)
    __typename: 'PlatformCdnFileConfigs'
}

export interface PlatformCdnFile {
    id: Scalars['ID']
    platformId: (Scalars['ID'] | null)
    platformTemplateId: (Scalars['ID'] | null)
    name: Scalars['String']
    type: PlatformCdnFileType
    updatedAt: Scalars['DateTime']
    createdAt: Scalars['DateTime']
    config: (PlatformCdnFileConfigs | null)
    size: Scalars['Float']
    prodCdnPath: (Scalars['String'] | null)
    devCdnPath: (Scalars['String'] | null)
    contents: (Scalars['String'] | null)
    __typename: 'PlatformCdnFile'
}

export type PlatformCdnFileType = 'PAGE' | 'COMPONENT' | 'TEXT' | 'IMAGE'

export interface PresignedUrlField {
    key: Scalars['String']
    value: Scalars['String']
    __typename: 'PresignedUrlField'
}

export interface PresignedUrl {
    fields: PresignedUrlField[]
    url: Scalars['URL']
    __typename: 'PresignedUrl'
}

export interface EventVenueConfiguration {
    imageUrl: (Scalars['String'] | null)
    __typename: 'EventVenueConfiguration'
}

export interface EventVenue {
    id: Scalars['ID']
    name: Scalars['String']
    description: Scalars['String']
    address: Scalars['String']
    city: Scalars['String']
    state: Scalars['String']
    country: Scalars['String']
    postalCode: Scalars['String']
    createdAt: Scalars['DateTime']
    updatedAt: Scalars['DateTime']
    configuration: EventVenueConfiguration
    organizationId: Scalars['ID']
    __typename: 'EventVenue'
}

export interface EventVenues {
    edges: EventVenueEdge[]
    nodes: EventVenue[]
    pageInfo: ResponsePageInfo
    totalCount: (Scalars['Float'] | null)
    __typename: 'EventVenues'
}

export interface EventVenueEdge {
    cursor: Scalars['String']
    node: EventVenue[]
    __typename: 'EventVenueEdge'
}

export interface EventTicketConfigurationConfiguration {
    customFields: Property[]
    __typename: 'EventTicketConfigurationConfiguration'
}

export interface EventTicketConfiguration {
    id: Scalars['ID']
    name: Scalars['String']
    description: Scalars['String']
    createdAt: Scalars['DateTime']
    updatedAt: Scalars['DateTime']
    price: Scalars['Float']
    currency: ShopCurrencies
    maxCount: Scalars['Float']
    currentCount: Scalars['Float']
    buyable: Scalars['Boolean']
    eventId: Scalars['ID']
    seatTypeId: (Scalars['ID'] | null)
    configuration: (EventTicketConfigurationConfiguration | null)
    __typename: 'EventTicketConfiguration'
}

export type ShopCurrencies = 'USD' | 'EUR' | 'GBP'

export interface Item {
    id: Scalars['ID']
    name: Scalars['String']
    externalId: (Scalars['String'] | null)
    description: Scalars['String']
    metadata: PropertyValue[]
    createdAt: Scalars['DateTime']
    updatedAt: Scalars['DateTime']
    organizationId: Scalars['ID']
    categoryId: (Scalars['ID'] | null)
    __typename: 'Item'
}

export interface Items {
    edges: ItemEdge[]
    nodes: Item[]
    pageInfo: ResponsePageInfo
    totalCount: (Scalars['Float'] | null)
    __typename: 'Items'
}

export interface ItemEdge {
    cursor: Scalars['String']
    node: Item[]
    __typename: 'ItemEdge'
}

export interface PlayerItem {
    id: Scalars['ID']
    playerProfileId: Scalars['ID']
    itemId: Scalars['ID']
    createdAt: Scalars['DateTime']
    updatedAt: Scalars['DateTime']
    metadata: PropertyValue[]
    quantity: Scalars['Int']
    __typename: 'PlayerItem'
}

export interface PlayerItems {
    edges: PlayerItemEdge[]
    nodes: PlayerItem[]
    pageInfo: ResponsePageInfo
    totalCount: (Scalars['Float'] | null)
    __typename: 'PlayerItems'
}

export interface PlayerItemEdge {
    cursor: Scalars['String']
    node: PlayerItem[]
    __typename: 'PlayerItemEdge'
}

export interface ItemCategory {
    id: Scalars['ID']
    name: Scalars['String']
    externalId: (Scalars['String'] | null)
    description: Scalars['String']
    metadata: PropertyValue[]
    createdAt: Scalars['DateTime']
    updatedAt: Scalars['DateTime']
    organizationId: Scalars['ID']
    __typename: 'ItemCategory'
}

export interface ItemCategories {
    edges: ItemCategoryEdge[]
    nodes: ItemCategory[]
    pageInfo: ResponsePageInfo
    totalCount: (Scalars['Float'] | null)
    __typename: 'ItemCategories'
}

export interface ItemCategoryEdge {
    cursor: Scalars['String']
    node: ItemCategory[]
    __typename: 'ItemCategoryEdge'
}

export interface Log {
    id: Scalars['ID']
    type: LogType
    resourceId: Scalars['ID']
    data: LogData
    organizationId: Scalars['ID']
    createdAt: Scalars['DateTime']
    __typename: 'Log'
}

export type LogType = 'WEBHOOK_CALL' | 'WEBHOOK_CALL_ERROR'

export interface Logs {
    edges: LogEdge[]
    nodes: Log[]
    pageInfo: ResponsePageInfo
    totalCount: (Scalars['Float'] | null)
    __typename: 'Logs'
}

export interface LogEdge {
    cursor: Scalars['String']
    node: Log[]
    __typename: 'LogEdge'
}

export interface PlatformCustomDomainData {
    domain: Scalars['String']
    configuration: (CustomDomainData | null)
    __typename: 'PlatformCustomDomainData'
}

export interface PlatformConfiguration {
    whitelabel: (Scalars['Boolean'] | null)
    __typename: 'PlatformConfiguration'
}

export interface Platform {
    id: Scalars['ID']
    name: Scalars['String']
    createdAt: Scalars['DateTime']
    updatedAt: Scalars['DateTime']
    configuration: (PlatformConfiguration | null)
    organizationId: Scalars['ID']
    appId: (Scalars['String'] | null)
    customDomains: PlatformCustomDomainData[]
    __typename: 'Platform'
}

export interface PlatformTemplate {
    id: Scalars['ID']
    name: Scalars['String']
    description: Scalars['String']
    screenshotUrl: Scalars['URL']
    createdAt: Scalars['DateTime']
    updatedAt: Scalars['DateTime']
    ownerId: Scalars['ID']
    organizationId: Scalars['ID']
    public: Scalars['Boolean']
    __typename: 'PlatformTemplate'
}

export interface PresenceAnalytics {
    totalSessions: Scalars['Int']
    authenticatedSessions: Scalars['Int']
    anonymousSessions: Scalars['Int']
    __typename: 'PresenceAnalytics'
}

export interface UserConnectionEvent {
    sessionId: Scalars['ID']
    serverId: Scalars['ID']
    playerId: (Scalars['ID'] | null)
    accountId: (Scalars['ID'] | null)
    organizationId: Scalars['ID']
    __typename: 'UserConnectionEvent'
}

export interface UsersConnectedEvent {
    usersConnected: UserConnectionEvent[]
    __typename: 'UsersConnectedEvent'
}

export interface UserDisconnectEvent {
    sessionId: Scalars['ID']
    serverId: Scalars['ID']
    playerId: (Scalars['ID'] | null)
    accountId: (Scalars['ID'] | null)
    organizationId: Scalars['ID']
    __typename: 'UserDisconnectEvent'
}

export interface UsersDisconnectedEvent {
    usersDisconnected: UserDisconnectEvent[]
    __typename: 'UsersDisconnectedEvent'
}

export interface PaymentUrlAndClientSecret {
    paymentUrl: (Scalars['String'] | null)
    clientSecret: (Scalars['String'] | null)
    __typename: 'PaymentUrlAndClientSecret'
}

export interface PlayerShopProductPurshase {
    id: Scalars['ID']
    playerProfileId: Scalars['ID']
    shopProductId: Scalars['ID']
    quantity: Scalars['Float']
    createdAt: Scalars['DateTime']
    updatedAt: Scalars['DateTime']
    __typename: 'PlayerShopProductPurshase'
}

export interface PlayerShopProductPurshasesDto {
    edges: PlayerShopProductPurshaseEdge[]
    nodes: PlayerShopProductPurshase[]
    pageInfo: ResponsePageInfo
    totalCount: (Scalars['Float'] | null)
    __typename: 'PlayerShopProductPurshasesDto'
}

export interface PlayerShopProductPurshaseEdge {
    cursor: Scalars['String']
    node: PlayerShopProductPurshase[]
    __typename: 'PlayerShopProductPurshaseEdge'
}

export interface ShopCategory {
    id: Scalars['ID']
    externalId: (Scalars['String'] | null)
    name: Scalars['String']
    description: Scalars['String']
    metadata: PropertyValue[]
    createdAt: Scalars['DateTime']
    updatedAt: Scalars['DateTime']
    shopId: Scalars['ID']
    __typename: 'ShopCategory'
}

export interface ShopCategories {
    edges: ShopCategoryEdge[]
    nodes: ShopCategory[]
    pageInfo: ResponsePageInfo
    totalCount: (Scalars['Float'] | null)
    __typename: 'ShopCategories'
}

export interface ShopCategoryEdge {
    cursor: Scalars['String']
    node: ShopCategory[]
    __typename: 'ShopCategoryEdge'
}

export interface ShopProductConfiguration {
    minQuantity: (Scalars['Int'] | null)
    maxQuantity: (Scalars['Int'] | null)
    maxBoughtQuantity: (Scalars['Int'] | null)
    __typename: 'ShopProductConfiguration'
}

export interface EntityQuantity {
    id: Scalars['ID']
    quantity: Scalars['Int']
    __typename: 'EntityQuantity'
}

export interface ShopItemQuantity {
    type: ShopProductItemType
    id: Scalars['ID']
    quantity: Scalars['Int']
    __typename: 'ShopItemQuantity'
}

export type ShopProductItemType = 'CURRENCY' | 'ITEM'

export interface ShopProduct {
    id: Scalars['ID']
    name: Scalars['String']
    externalId: (Scalars['String'] | null)
    description: Scalars['String']
    categoryId: (Scalars['ID'] | null)
    price: (Scalars['Float'] | null)
    configuration: ShopProductConfiguration
    metadata: PropertyValue[]
    createdAt: Scalars['DateTime']
    updatedAt: Scalars['DateTime']
    visibleAt: (Scalars['DateTime'] | null)
    shopId: Scalars['ID']
    currency: ShopCurrencies
    items: ShopItemQuantity[]
    currencyPrices: EntityQuantity[]
    __typename: 'ShopProduct'
}

export interface ShopProducts {
    edges: ShopProductEdge[]
    nodes: ShopProduct[]
    pageInfo: ResponsePageInfo
    totalCount: (Scalars['Float'] | null)
    __typename: 'ShopProducts'
}

export interface ShopProductEdge {
    cursor: Scalars['String']
    node: ShopProduct[]
    __typename: 'ShopProductEdge'
}

export interface Shop {
    id: Scalars['ID']
    externalId: (Scalars['String'] | null)
    name: Scalars['String']
    description: Scalars['String']
    createdAt: Scalars['DateTime']
    updatedAt: Scalars['DateTime']
    organizationId: Scalars['ID']
    metadata: PropertyValue[]
    __typename: 'Shop'
}

export interface Shops {
    edges: ShopEdge[]
    nodes: Shop[]
    pageInfo: ResponsePageInfo
    totalCount: (Scalars['Float'] | null)
    __typename: 'Shops'
}

export interface ShopEdge {
    cursor: Scalars['String']
    node: Shop[]
    __typename: 'ShopEdge'
}

export interface ShopProductItem {
    id: Scalars['ID']
    currencyId: (Scalars['ID'] | null)
    createdAt: Scalars['DateTime']
    updatedAt: Scalars['DateTime']
    type: ShopProductItemType
    shopItemId: Scalars['ID']
    itemId: (Scalars['ID'] | null)
    quantity: Scalars['Int']
    __typename: 'ShopProductItem'
}

export interface ShopProductItems {
    edges: ShopProductItemEdge[]
    nodes: ShopProductItem[]
    pageInfo: ResponsePageInfo
    totalCount: (Scalars['Float'] | null)
    __typename: 'ShopProductItems'
}

export interface ShopProductItemEdge {
    cursor: Scalars['String']
    node: ShopProductItem[]
    __typename: 'ShopProductItemEdge'
}

export interface SkillRatingConfiguration {
    updateLeaderboardId: (Scalars['ID'] | null)
    __typename: 'SkillRatingConfiguration'
}

export interface OrganizationSkillRatingsRegisterMatchPlayer {
    id: Scalars['ID']
    newValue: Scalars['Float']
    oldValue: Scalars['Float']
    leaderboardPointsUpdate: (Scalars['Float'] | null)
    __typename: 'OrganizationSkillRatingsRegisterMatchPlayer'
}

export interface OrganizationSkillRating {
    id: Scalars['ID']
    name: Scalars['String']
    description: Scalars['String']
    type: SkillRatingType
    configuration: SkillRatingConfiguration
    organizationId: Scalars['String']
    createdAt: Scalars['DateTime']
    updatedAt: Scalars['DateTime']
    __typename: 'OrganizationSkillRating'
}

export type SkillRatingType = 'BREDLEY_TERRY_FULL' | 'BRADLEY_TERRY_PART' | 'THURSTONE_MOSTELLER_FULL' | 'THURSTONE_MOSTELLER_PART' | 'PLACKETT_LUCE'

export interface LimitOverride {
    limit: OrganizationLimitsType
    value: Scalars['Float']
    __typename: 'LimitOverride'
}

export type OrganizationLimitsType = 'REGISTERED_USERS' | 'ORGANIZATION_GROUPS' | 'ORGANIZATION_MEMBERS' | 'CUSTOM_FIELDS' | 'TOURNAMENT_STEPS' | 'TOURNAMENT_STEP_GROUPS' | 'TOURNAMENT_TEAMS_REGISTERED' | 'TOURNAMENT_TEAM_SIZE' | 'TOURNAMENT_REGISTRATION_RULES' | 'WEBHOOKS' | 'ANONYMOUS_PLAYER_PROFILES' | 'WHITE_LABEL' | 'LEADERBOARDS' | 'LEADERBOARD_ENTRIES' | 'LEADERBOARD_BUCKETS' | 'LEADERBOARD_SEASONS' | 'SKILL_RATINGS' | 'PLATFORMS' | 'PLATFORM_TEMPLATES' | 'ORGANIZATION_STORAGE_SIZE' | 'PLATFORM_CUSTOM_DOMAINS' | 'CUSTOM_IDENTITY_PROVIDERS' | 'APPS' | 'ATTACHED_APPS' | 'EVENTS_MAX_TICKETS_TYPES' | 'EVENTS_MAX_TICKETS' | 'EVENTS_MAX_GROUP_SIZE' | 'EVENTS_MAX_REGISTRATION_RULES' | 'EVENT_VENUES' | 'EVENT_VENUE_MAX_SEAT_TYPES' | 'EVENT_VENUE_MAX_SEATS' | 'EVENTS_MAX_TICKET_CONFIGURATION_CUSTOM_FIELDS' | 'CURRENCIES' | 'ITEM_CATEGORIES' | 'ITEMS' | 'SHOPS' | 'SHOP_CATEGORIES' | 'SHOP_PRODUCTS'

export interface SubscriptionItem {
    id: Scalars['ID']
    name: Scalars['String']
    description: Scalars['String']
    limitsOverride: LimitOverride[]
    maxCount: (Scalars['Float'] | null)
    price: Scalars['Float']
    __typename: 'SubscriptionItem'
}

export interface OrganizationSubscriptionItem {
    organizationId: Scalars['ID']
    subscriptionItemId: Scalars['ID']
    count: Scalars['Float']
    createdAt: Scalars['DateTime']
    endAt: Scalars['DateTime']
    updatedAt: Scalars['DateTime']
    subscriptionItem: SubscriptionItem
    __typename: 'OrganizationSubscriptionItem'
}

export interface Query {
    logs: Logs
    getMyAccount: Account
    configuration: Configuration
    leaderboardCurrentPlayerRanking: LeaderboardSeasonBucketScore
    leaderboards: Leaderboards
    leaderboard: Leaderboard
    currentLeaderboardSeason: LeaderboardSeason
    leaderboardSeasons: LeaderboardSeasons
    leaderboardSeason: LeaderboardSeason
    leaderboardSeasonBuckets: LeaderboardSeasonBuckets
    leaderboardSeasonBucket: LeaderboardSeasonBucket
    leaderboardSeasonBucketScores: LeaderboardSeasonBucketScores
    organization: Organization
    limitDefinitions: Limits
    organizationLimits: OrganizationLimits
    userOrganizations: Organization[]
    organizationGroup: OrganizationGroup
    organizationGroups: OrganizationGroups
    availablePermissions: Permissions
    organizationMembers: OrganizationMembers
    identityProviders: OrganizationIdentityProviderInfo[]
    identityProvider: OrganizationIdentityProvider
    organizationApp: OrganizationApp
    organizationApps: OrganizationApps
    webhookAvailableEvents: WebhookEventConfiguration[]
    webhooks: Webhook[]
    webhook: Webhook
    organizationAttachedApps: OrganizationAttachedApps
    availableRootIdentityProvider: PublicIdentityProvider
    getAvailableRootIdentityProviders: PublicIdentityProvider[]
    searchPlayer: Player[]
    players: Players
    player: Player
    playerSkillRatings: PlayerSkillRating[]
    playerMatchesHistory: TournamentStepGroupRoundGameMatches
    tournament: Tournament
    tournaments: Tournaments
    tournamentSteps: TournamentStep[]
    tournamentStep: TournamentStep
    tournamentStepGeneratedShape: TournamentStepGroup[]
    match: TournamentStepGroupRoundGameMatch
    tournamentTeam: TournamentTeam
    tournamentTeams: TournamentTeams
    tournamentPlayers: TeamMembers
    tournamentTeamInvites: TeamMembers
    tournamentStepGroupRoundGameMatchScoresGetForStep: TournamentStepGroupRoundGameMatchScores
    tournamentAdmins: TournamentAdmin[]
    platformFiles: PlatformCdnFile[]
    platformFile: PlatformCdnFile
    platforms: Platform[]
    platform: (Platform | null)
    platformFindFromDomain: Platform
    platformCheckDomainAvailability: Scalars['Boolean']
    platformCustomDomains: PlatformCustomDomainData[]
    platformTemplatesPublic: PlatformTemplate[]
    platformTemplates: PlatformTemplate[]
    platformTemplate: (PlatformTemplate | null)
    subscriptionItems: SubscriptionItem[]
    organizationCurrentSubscriptionItems: OrganizationSubscriptionItem[]
    organizationSkillRatings: OrganizationSkillRating[]
    organizationSkillRating: OrganizationSkillRating
    event: EventWithUserReservation
    events: Events
    eventTicketConfiguration: EventTicketConfiguration
    eventTicketConfigurations: EventTicketConfiguration[]
    eventReservationsMyReservations: EventReservations
    eventReservation: EventReservation
    eventSeats: EventSeats
    eventReservations: EventReservations
    eventVenues: EventVenues
    eventVenue: EventVenue
    eventVenueSeats: EventVenueSeats
    eventVenueSeatTypes: EventVenueSeatTypes
    organizationPaymentCollectionConfiguration: (OrganizationPaymentCollectionConfiguration | null)
    emailTemplateConfigurations: EmailTemplateConfiguration[]
    emailConfiguration: (EmailConfiguration | null)
    emailTemplate: EmailTemplate
    emailTemplates: EmailTemplates
    userGroupMembers: UserGroupMembers
    userGroups: UserGroups
    userGroupMyMemberships: UserGroupMembers
    presenceAnalytics: PresenceAnalytics
    shops: Shops
    shopCategories: ShopCategories
    playerShopProductPurshases: PlayerShopProductPurshasesDto
    shopProducts: ShopProducts
    shopProductItems: ShopProductItems
    items: Items
    playerItems: PlayerItems
    itemCategories: ItemCategories
    currencies: Currencies
    playerCurrencies: PlayerCurrencies
    __typename: 'Query'
}

export type OrganizationIdentityProviderInfo = (OrganizationIdentityProvider | PublicOrganizationIdentityProviderV2) & { __isUnion?: true }

export interface PublicOrganizationIdentityProviderV2 {
    requiredForPlayerValidation: Scalars['Boolean']
    allowLogin: Scalars['Boolean']
    description: Scalars['String']
    icon: (Scalars['String'] | null)
    id: Scalars['ID']
    name: Scalars['String']
    organizationId: (Scalars['ID'] | null)
    redirectUrl: (Scalars['String'] | null)
    __typename: 'PublicOrganizationIdentityProviderV2'
}

export type TournamentsQueryOrderBy = 'START_AT' | 'REGISTRATIONS_START_AT' | 'END_AT' | 'REGISTRATIONS_END_AT'

export type OrderDirection = 'ASC' | 'DESC'

export type TournamentsQueryStatus = 'ALL' | 'STARTED' | 'ENDED' | 'REGISTRATIONS_OPEN' | 'REGISTRATIONS_ENDED' | 'REGISTRATIONS_CLOSED'

export type EventsQueryOrderBy = 'START_AT' | 'REGISTRATIONS_START_AT' | 'END_AT' | 'REGISTRATIONS_END_AT'

export type EventsQueryStatus = 'ALL' | 'STARTED' | 'ENDED' | 'REGISTRATIONS_OPEN' | 'REGISTRATIONS_ENDED' | 'REGISTRATIONS_CLOSED'

export interface Mutation {
    deleteAccount: Scalars['Boolean']
    /** Generates access token for an account identity provider with the stored refresh token */
    accountIdentityGenerateAccessToken: Scalars['String']
    accountIdentityRefresh: AccountIdentity
    attachOrUpdateIdentityToAccount: AccountIdentity
    updateConfiguration: Configuration
    deleteConfiguration: Scalars['Boolean']
    leaderboardRegisterPlayerScore: LeaderboardSeasonBucketScore
    createLeaderboard: Leaderboard
    updateLeaderboard: Leaderboard
    deleteLeaderboard: Scalars['Void']
    createLeaderboardSeason: LeaderboardSeason
    updateLeaderboardSeason: LeaderboardSeason
    deleteLeaderboardSeason: Scalars['Void']
    createLeaderboardSeasonBucket: LeaderboardSeasonBucket
    updateLeaderboardSeasonBucket: LeaderboardSeasonBucket
    deleteLeaderboardSeasonBucket: Scalars['Void']
    updateOrganization: Organization
    createOrganization: Organization
    createOrganizationGroup: OrganizationGroup
    updateOrganizationGroup: OrganizationGroup
    deleteOrganizationGroup: Scalars['Boolean']
    setOrganizationMembership: OrganizationMember
    deleteOrganizationMembership: Scalars['Boolean']
    createIdentityProvider: OrganizationIdentityProvider
    updateIdentityProvider: OrganizationIdentityProvider
    deleteIdentityProvider: Scalars['Boolean']
    createOrganizationApp: OrganizationApp
    resetOrganizationAppSecret: Scalars['String']
    updateOrganizationApp: OrganizationApp
    deleteOrganizationApp: Scalars['Boolean']
    createWebhook: Webhook
    updateWebhook: Webhook
    deleteWebhook: Webhook
    regenerateWebhookSecret: Webhook
    setOrganizationAttachedApp: OrganizationAttachedApp
    deleteOrganizationAttachedApp: Scalars['Boolean']
    createPlayer: Player
    updatePlayer: Player
    createOrUpdateMyPlayerProfile: Player
    deletePlayer: Scalars['Boolean']
    /** Create a new tournament */
    createTournament: Tournament
    /** Update a tournament */
    updateTournament: Tournament
    /** Delete a tournament */
    deleteTournament: Scalars['Boolean']
    startTournamentStep: Scalars['Boolean']
    createTournamentStep: TournamentStep
    updateTournamentStep: TournamentStep
    deleteTournamentStep: Scalars['Boolean']
    generateTournamentStep: Scalars['Boolean']
    seedTournamentStep: Scalars['Boolean']
    updateMatchScores: TournamentStepGroupRoundGameMatch
    registerCustomTournamentTeams: TournamentTeam[]
    registerTournamentTeam: TournamentTeam
    updateTournamentTeam: TournamentTeam
    deleteTournamentTeam: Scalars['Boolean']
    deleteAnyTournamentTeam: Scalars['Boolean']
    confirmTournamentTeam: TournamentTeam
    confirmTournamentAttendance: TournamentTeam
    updateTournamentTeamStatus: TournamentTeam
    inviteTournamentTeamMember: Scalars['Boolean']
    answerToTournamentTeamInvite: Scalars['Boolean']
    deleteTournamentTeamInvite: Scalars['Boolean']
    tournamentAdminUpsert: TournamentAdmin
    tournamentAdminDelete: Scalars['Boolean']
    stripeCreatePortalSession: Scalars['String']
    platformFileCreate: PlatformCdnFile
    platformFilePublish: PlatformCdnFile
    platformFileGenerateUploadUrl: PresignedUrl
    platformFileValidateFileUpload: PlatformCdnFile
    platformFileUpdate: PlatformCdnFile
    platformFileDelete: Scalars['Void']
    platformCreate: Platform
    platformUpdate: Platform
    platformDelete: Scalars['Void']
    platformRegisterCustomDomain: CustomDomainData
    platformForceCustomDomainRecheck: CustomDomainData
    platformRemoveCustomDomain: Scalars['Void']
    platformTemplateCreate: PlatformTemplate
    platformTemplateUpdate: PlatformTemplate
    platformTemplateApply: Platform
    platformTemplateDelete: Scalars['Void']
    organizationSubscriptionItemsUpdate: Scalars['Void']
    organizationSkillRatingsRegisterMatch: OrganizationSkillRatingsRegisterMatchPlayer[]
    organizationSkillRatingCreate: OrganizationSkillRating
    organizationSkillRatingUpdate: OrganizationSkillRating
    organizationSkillRatingDelete: Scalars['Void']
    /** Create a new event */
    eventCreate: Event
    /** Update an event */
    eventUpdate: Event
    /** Delete an event */
    eventDelete: Scalars['Boolean']
    eventTicketConfigurationCreate: EventTicketConfiguration
    eventTicketConfigurationUpdate: EventTicketConfiguration
    eventTicketConfigurationDelete: EventTicketConfiguration
    eventReservationUpdateStatus: EventReservation
    eventReservationConfirmPresence: EventReservation
    eventReservationValidateAndPay: EventReservationValidateAndPay
    eventReservationCreate: EventReservation
    eventReservationUpdateTickets: EventReservation
    eventReservationStartRegistrationSession: EventReservation
    eventReservationCancel: EventReservation
    eventVenueRequestImageUpdate: PresignedUrl
    eventVenueValidateImage: EventVenue
    eventVenueCreate: EventVenue
    eventVenueUpdate: EventVenue
    eventVenueDelete: EventVenue
    eventVenueSeatsUpdate: EventVenueSeatsUpdateResult
    eventVenueSeatTypeCreate: EventVenueSeatType
    eventVenueSeatTypeUpdate: EventVenueSeatType
    eventVenueSeatTypeDelete: EventVenueSeatType
    organizationPaymentCollectionConfigurationCreateOrUpdateAccount: Scalars['String']
    emailSent: Scalars['Boolean']
    emailConfigurationUpdate: EmailConfiguration
    emailTemplateCreate: EmailTemplate
    emailTemplateUpdate: EmailTemplate
    emailTemplateDelete: EmailTemplate
    userGroupInvite: UserGroupMember
    userGroupUpdateInvite: UserGroupMember
    userGroupDeleteInvite: UserGroupMember
    shopCreate: Shop
    shopUpdate: Shop
    shopDelete: Shop
    shopCategoryCreate: ShopCategory
    shopCategoryUpdate: ShopCategory
    shopCategoryDelete: ShopCategory
    playerShopProductPurshase: (PaymentUrlAndClientSecret | null)
    shopProductCreate: ShopProduct
    shopProductUpdate: ShopProduct
    shopProductDelete: ShopProduct
    itemCreate: Item
    itemUpdate: Item
    itemDelete: Item
    playerItemsUpdate: PlayerItem[]
    itemCategoryCreate: ItemCategory
    itemCategoryUpdate: ItemCategory
    itemCategoryDelete: ItemCategory
    currencyCreate: Currency
    currencyUpdate: Currency
    currencyDelete: Currency
    playerCurrencyUpdate: PlayerCurrency
    __typename: 'Mutation'
}

export type SeedingMechanism = 'NONE' | 'REVERSE' | 'HALF_SHIFT' | 'REVERSE_HALF_SHIFT' | 'PAIR_FLIP'

export type GroupRepartitionMechanism = 'BALANCED' | 'SEED_OPTIMIZED'

export type StripeUiMode = 'EMBEDDED' | 'HOSTED'

export interface Subscription {
    presenceUserConnected: UsersConnectedEvent
    presenceUserDisconnected: UsersDisconnectedEvent
    __typename: 'Subscription'
}

export interface KeyMappingGenqlSelection{
    path?: boolean | number
    mappedTo?: boolean | number
    private?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface MappingConfigurationGenqlSelection{
    mappings?: KeyMappingGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface HeaderGenqlSelection{
    name?: boolean | number
    value?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface DataRetrievalConfigGenqlSelection{
    url?: boolean | number
    headers?: HeaderGenqlSelection
    mappingConfiguration?: MappingConfigurationGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ResponsePageInfoGenqlSelection{
    hasNextPage?: boolean | number
    hasPreviousPage?: boolean | number
    startCursor?: boolean | number
    endCursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface OrganizationGroupGenqlSelection{
    id?: boolean | number
    name?: boolean | number
    permissions?: GroupPermissionGenqlSelection
    organizationId?: boolean | number
    type?: boolean | number
    createdAt?: boolean | number
    updatedAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PermissionGenqlSelection{
    id?: boolean | number
    description?: boolean | number
    resources?: boolean | number
    availableVariables?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GroupPermissionGenqlSelection{
    id?: boolean | number
    resources?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PermissionsGenqlSelection{
    organizationPermissions?: PermissionGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface OrganizationGroupsGenqlSelection{
    edges?: OrganizationGroupEdgeGenqlSelection
    nodes?: OrganizationGroupGenqlSelection
    pageInfo?: ResponsePageInfoGenqlSelection
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface OrganizationGroupEdgeGenqlSelection{
    cursor?: boolean | number
    node?: OrganizationGroupGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface OrganizationMemberGenqlSelection{
    organizationId?: boolean | number
    groupId?: boolean | number
    memberId?: boolean | number
    permissions?: GroupPermissionGenqlSelection
    createdAt?: boolean | number
    updatedAt?: boolean | number
    account?: AccountGenqlSelection
    group?: OrganizationGroupGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface OrganizationMembersGenqlSelection{
    edges?: OrganizationMemberEdgeGenqlSelection
    nodes?: OrganizationMemberGenqlSelection
    pageInfo?: ResponsePageInfoGenqlSelection
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface OrganizationMemberEdgeGenqlSelection{
    cursor?: boolean | number
    node?: OrganizationMemberGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PropertyGenqlSelection{
    property?: boolean | number
    name?: boolean | number
    type?: boolean | number
    required?: boolean | number
    order?: boolean | number
    unique?: boolean | number
    /** @deprecated use visibility instead */
    public?: boolean | number
    visibility?: boolean | number
    editability?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PropertyConfigWithValueGenqlSelection{
    property?: boolean | number
    name?: boolean | number
    type?: boolean | number
    required?: boolean | number
    order?: boolean | number
    unique?: boolean | number
    /** @deprecated use visibility instead */
    public?: boolean | number
    visibility?: boolean | number
    editability?: boolean | number
    value?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PropertyValueGenqlSelection{
    property?: boolean | number
    value?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface MatchVariableGenqlSelection{
    formulaName?: boolean | number
    displayName?: boolean | number
    displayIcon?: boolean | number
    defaultValue?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface MatchConfigurationGenqlSelection{
    variables?: MatchVariableGenqlSelection
    scoreFormula?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GameConfigurationGenqlSelection{
    wonMatchCountToWinGame?: boolean | number
    useMatchScoresAsGameScore?: boolean | number
    teamsCount?: boolean | number
    matchConfiguration?: MatchConfigurationGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface VariableGenqlSelection{
    name?: boolean | number
    defaultValue?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface RoundConfigurationGenqlSelection{
    game?: GameConfigurationGenqlSelection
    order?: boolean | number
    name?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GroupConfigurationGenqlSelection{
    rounds?: RoundConfigurationGenqlSelection
    name?: boolean | number
    description?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface StepConfigurationGenqlSelection{
    type?: boolean | number
    groups?: GroupConfigurationGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface NumericConditionGenqlSelection{
    conditionType?: boolean | number
    value?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface TeamNumericConditionGenqlSelection{
    aggregationType?: boolean | number
    propertySource?: boolean | number
    propertySourceId?: boolean | number
    conditionType?: boolean | number
    value?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface StringConditionGenqlSelection{
    conditionType?: boolean | number
    value?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ConditionGenqlSelection{
    property?: boolean | number
    numericCondition?: NumericConditionGenqlSelection
    stringCondition?: StringConditionGenqlSelection
    propertyCondition?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PlayerFieldGenqlSelection{
    propertySource?: boolean | number
    propertySourceId?: boolean | number
    property?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PlayerConditionGenqlSelection{
    propertySource?: boolean | number
    propertySourceId?: boolean | number
    condition?: ConditionGenqlSelection
    errorMessage?: boolean | number
    ruleDescription?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface TeamConditionGenqlSelection{
    property?: boolean | number
    stringCondition?: StringConditionGenqlSelection
    numericCondition?: TeamNumericConditionGenqlSelection
    propertyCondition?: boolean | number
    errorMessage?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface RegistrationConditionsGenqlSelection{
    teamConditions?: TeamConditionGenqlSelection
    memberConditions?: PlayerConditionGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface TournamentConfigurationGenqlSelection{
    type?: boolean | number
    /** Minimum team size to register to the tournament */
    teamMinSize?: boolean | number
    /** Maximum team size to register to the tournament */
    teamMaxSize?: boolean | number
    /** Maximum number of registered teams */
    teamsCount?: boolean | number
    /** Status of the team after registration, REGISTERED is the default state, AWAITING_FOR_PRESENCE_CONFIRMATION means that the team has been validated and is waiting for presence confirmation, AWAITING_FOR_PAYMENT means that the team has to pay to be validated */
    teamStatusAfterRegistration?: boolean | number
    /** Condition rules to register to the tournament */
    registrationConditions?: RegistrationConditionsGenqlSelection
    /** Custom fields that are defined on each teams */
    customFields?: PropertyGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface TournamentGenqlSelection{
    id?: boolean | number
    title?: boolean | number
    description?: boolean | number
    startAt?: boolean | number
    endAt?: boolean | number
    startRegistrationsAt?: boolean | number
    endRegistrationsAt?: boolean | number
    organizationId?: boolean | number
    configuration?: TournamentConfigurationGenqlSelection
    createdAt?: boolean | number
    updatedAt?: boolean | number
    createdById?: boolean | number
    tournamentSeriesId?: boolean | number
    visibleAt?: boolean | number
    /** Teams registered to this tournament */
    teams?: (TournamentTeamsGenqlSelection & { __args: {page: PageInfo, status?: (TournamentTeamStatus | null)} })
    /** Steps registered for this tournament */
    steps?: TournamentStepGenqlSelection
    /** Account that created this tournament */
    createdBy?: AccountGenqlSelection
    /** Current authenticated team registered to this event */
    myTeam?: TournamentTeamGenqlSelection
    teamScores?: TournamentTeamScoreGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PageInfo {first?: (Scalars['Float'] | null),after?: (Scalars['String'] | null)}

export interface LimitGenqlSelection{
    id?: boolean | number
    default?: boolean | number
    description?: boolean | number
    name?: boolean | number
    type?: boolean | number
    bucketDuration?: boolean | number
    scope?: boolean | number
    max?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface LimitsGenqlSelection{
    limits?: LimitGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface OrganizationLimitGenqlSelection{
    id?: boolean | number
    max?: boolean | number
    current?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface OrganizationLimitsGenqlSelection{
    limits?: OrganizationLimitGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface OrganizationConfigurationGenqlSelection{
    customFields?: PropertyGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PublicOrganizationIdentityProviderGenqlSelection{
    id?: boolean | number
    name?: boolean | number
    description?: boolean | number
    icon?: boolean | number
    allowLogin?: boolean | number
    authorizationUrl?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface OrganizationGenqlSelection{
    id?: boolean | number
    ownerId?: boolean | number
    name?: boolean | number
    description?: boolean | number
    configuration?: OrganizationConfigurationGenqlSelection
    tournaments?: TournamentGenqlSelection
    members?: OrganizationMemberGenqlSelection
    groups?: OrganizationGroupGenqlSelection
    stripeConfigured?: boolean | number
    identityProviders?: (PublicOrganizationIdentityProviderGenqlSelection & { __args: {login: Scalars['Boolean']} })
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface AccountIdentityPropertyGenqlSelection{
    property?: boolean | number
    value?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface AccountIdentityGenqlSelection{
    providerId?: boolean | number
    accountId?: boolean | number
    organizationIdentityProviderId?: boolean | number
    properties?: AccountIdentityPropertyGenqlSelection
    createdAt?: boolean | number
    updatedAt?: boolean | number
    organizationIdentityProvider?: PublicOrganizationIdentityProviderGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PlayerGenqlSelection{
    id?: boolean | number
    username?: boolean | number
    description?: boolean | number
    ownerId?: boolean | number
    organizationCustomId?: boolean | number
    updatedAt?: boolean | number
    createdAt?: boolean | number
    identities?: AccountIdentityGenqlSelection
    owner?: AccountGenqlSelection
    customFields?: (PropertyConfigWithValueGenqlSelection & { __args?: {properties?: (Scalars['String'][] | null)} })
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PlayersGenqlSelection{
    edges?: PlayerEdgeGenqlSelection
    nodes?: PlayerGenqlSelection
    pageInfo?: ResponsePageInfoGenqlSelection
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PlayerEdgeGenqlSelection{
    cursor?: boolean | number
    node?: PlayerGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface AccountGenqlSelection{
    /** The ID of the account */
    id?: boolean | number
    email?: boolean | number
    permissions?: GroupPermissionGenqlSelection
    profiles?: PlayerGenqlSelection
    identities?: (AccountIdentityGenqlSelection & { __args?: {properties?: (Scalars['String'][] | null), providerIds?: (Scalars['ID'][] | null)} })
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ConfigurationGenqlSelection{
    id?: boolean | number
    name?: boolean | number
    description?: boolean | number
    createdAt?: boolean | number
    updatedAt?: boolean | number
    configuration?: ConfigurationPropertiesGenqlSelection
    createdById?: boolean | number
    organizationId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ConfigurationPropertiesGenqlSelection{
    on_StepConfiguration?:StepConfigurationGenqlSelection,
    on_TournamentConfiguration?:TournamentConfigurationGenqlSelection,
    __typename?: boolean | number
}

export interface LeaderboardSeasonBucketScoreGenqlSelection{
    rank?: boolean | number
    lastScore?: boolean | number
    lastRank?: boolean | number
    createdAt?: boolean | number
    updatedAt?: boolean | number
    score?: boolean | number
    leaderboardSeasonBucketId?: boolean | number
    playerProfileId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface LeaderboardSeasonBucketScoresGenqlSelection{
    edges?: LeaderboardSeasonBucketScoreEdgeGenqlSelection
    nodes?: LeaderboardSeasonBucketScoreGenqlSelection
    pageInfo?: ResponsePageInfoGenqlSelection
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface LeaderboardSeasonBucketScoreEdgeGenqlSelection{
    cursor?: boolean | number
    node?: LeaderboardSeasonBucketScoreGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface LeaderboardGenqlSelection{
    /** The ID of the leaderboard */
    id?: boolean | number
    /** The ID of the organization this leaderboard belongs to */
    organizationId?: boolean | number
    /** The ID of the creator of this leaderboard */
    ownerId?: boolean | number
    /** The name of the leaderboard */
    name?: boolean | number
    /** The description of the leaderboard */
    description?: boolean | number
    createdAt?: boolean | number
    updatedAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface LeaderboardsGenqlSelection{
    edges?: LeaderboardEdgeGenqlSelection
    nodes?: LeaderboardGenqlSelection
    pageInfo?: ResponsePageInfoGenqlSelection
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface LeaderboardEdgeGenqlSelection{
    cursor?: boolean | number
    node?: LeaderboardGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface LeaderboardSeasonGenqlSelection{
    id?: boolean | number
    leaderboardId?: boolean | number
    name?: boolean | number
    start?: boolean | number
    end?: boolean | number
    startingScore?: boolean | number
    createdAt?: boolean | number
    updatedAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface LeaderboardSeasonsGenqlSelection{
    edges?: LeaderboardSeasonEdgeGenqlSelection
    nodes?: LeaderboardSeasonGenqlSelection
    pageInfo?: ResponsePageInfoGenqlSelection
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface LeaderboardSeasonEdgeGenqlSelection{
    cursor?: boolean | number
    node?: LeaderboardSeasonGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface LeaderboardSeasonBucketGenqlSelection{
    id?: boolean | number
    seasonId?: boolean | number
    name?: boolean | number
    minScore?: boolean | number
    scoreCalculationType?: boolean | number
    createdAt?: boolean | number
    updatedAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface LeaderboardSeasonBucketsGenqlSelection{
    edges?: LeaderboardSeasonBucketEdgeGenqlSelection
    nodes?: LeaderboardSeasonBucketGenqlSelection
    pageInfo?: ResponsePageInfoGenqlSelection
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface LeaderboardSeasonBucketEdgeGenqlSelection{
    cursor?: boolean | number
    node?: LeaderboardSeasonBucketGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CustomDomainSslValidationRecordGenqlSelection{
    txt_name?: boolean | number
    txt_value?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CustomDomainSslValidationErrorGenqlSelection{
    message?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CustomDomainSslGenqlSelection{
    status?: boolean | number
    validation_errors?: CustomDomainSslValidationErrorGenqlSelection
    validation_records?: CustomDomainSslValidationRecordGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CustomDomainOwnershipVerificationGenqlSelection{
    name?: boolean | number
    value?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CustomDomainDataGenqlSelection{
    hostname?: boolean | number
    ownership_verification?: CustomDomainOwnershipVerificationGenqlSelection
    ssl?: CustomDomainSslGenqlSelection
    status?: boolean | number
    verification_errors?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface LogDataGenqlSelection{
    oldValue?: boolean | number
    newValue?: boolean | number
    author?: boolean | number
    authorType?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface IdentityProviderRequirementsGenqlSelection{
    requiredFields?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PublicIdentityProviderGenqlSelection{
    /** The ID of the identity provider. */
    id?: boolean | number
    /** The name of the identity provider. */
    name?: boolean | number
    /** The description of the identity provider. */
    description?: boolean | number
    /** The icon URL of the identity provider. */
    icon?: boolean | number
    /** The availability of the identity provider. */
    availability?: boolean | number
    /** Identity provider create and update requirements */
    requirements?: IdentityProviderRequirementsGenqlSelection
    createdAt?: boolean | number
    updatedAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface OrganizationAppConfigMetadataGenqlSelection{
    loginUrl?: boolean | number
    consentUrl?: boolean | number
    creatorId?: boolean | number
    requiresConsent?: boolean | number
    public?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface OrganizationAppConfigGenqlSelection{
    name?: boolean | number
    organizationId?: boolean | number
    redirectUrls?: boolean | number
    logoutRedirectUrls?: boolean | number
    scope?: boolean | number
    metadata?: OrganizationAppConfigMetadataGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface OrganizationAppGenqlSelection{
    id?: boolean | number
    name?: boolean | number
    description?: boolean | number
    creatorId?: boolean | number
    organizationId?: boolean | number
    createdAt?: boolean | number
    updatedAt?: boolean | number
    secret?: boolean | number
    public?: boolean | number
    configuration?: OrganizationAppConfigGenqlSelection
    creator?: AccountGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface OrganizationAppsGenqlSelection{
    edges?: OrganizationAppEdgeGenqlSelection
    nodes?: OrganizationAppGenqlSelection
    pageInfo?: ResponsePageInfoGenqlSelection
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface OrganizationAppEdgeGenqlSelection{
    cursor?: boolean | number
    node?: OrganizationAppGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface OrganizationAttachedAppGenqlSelection{
    organizationId?: boolean | number
    groupId?: boolean | number
    appId?: boolean | number
    permissions?: GroupPermissionGenqlSelection
    createdAt?: boolean | number
    updatedAt?: boolean | number
    app?: OrganizationAppGenqlSelection
    group?: OrganizationGroupGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface OrganizationAttachedAppsGenqlSelection{
    edges?: OrganizationAttachedAppEdgeGenqlSelection
    nodes?: OrganizationAttachedAppGenqlSelection
    pageInfo?: ResponsePageInfoGenqlSelection
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface OrganizationAttachedAppEdgeGenqlSelection{
    cursor?: boolean | number
    node?: OrganizationAttachedAppGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface OrganizationIdentityProviderGenqlSelection{
    enabled?: boolean | number
    requiredForPlayerValidation?: boolean | number
    allowLogin?: boolean | number
    description?: boolean | number
    icon?: boolean | number
    id?: boolean | number
    identityProviderId?: boolean | number
    configuration?: IdentityProviderConfigurationsGenqlSelection
    name?: boolean | number
    organizationId?: boolean | number
    createdAt?: boolean | number
    updatedAt?: boolean | number
    parentIdentityProvider?: PublicIdentityProviderGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface IdentityProviderConfigurationsGenqlSelection{
    on_OAuthClientConfiguration?:OAuthClientConfigurationGenqlSelection,
    on_OpenidConfiguration?:OpenidConfigurationGenqlSelection,
    __typename?: boolean | number
}

export interface OAuthClientConfigurationGenqlSelection{
    authorizationEndpoint?: boolean | number
    dataRetrievers?: DataRetrievalConfigGenqlSelection
    issuer?: boolean | number
    providerType?: boolean | number
    clientId?: boolean | number
    clientSecret?: boolean | number
    tokenEndpointAuthMethod?: boolean | number
    redirectUrl?: boolean | number
    tokenEndpoint?: boolean | number
    authorizationUrl?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface OpenidConfigurationGenqlSelection{
    authorizationEndpoint?: boolean | number
    dataRetrievers?: DataRetrievalConfigGenqlSelection
    issuer?: boolean | number
    providerType?: boolean | number
    clientId?: boolean | number
    clientSecret?: boolean | number
    redirectUrl?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface TournamentTeamMemberDtoGenqlSelection{
    status?: boolean | number
    tournamentTeamId?: boolean | number
    playerProfileId?: boolean | number
    createdAt?: boolean | number
    updatedAt?: boolean | number
    team?: TournamentTeamGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface TeamMembersGenqlSelection{
    edges?: TournamentTeamMemberEdgeGenqlSelection
    nodes?: TournamentTeamMemberDtoGenqlSelection
    pageInfo?: ResponsePageInfoGenqlSelection
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface TournamentTeamMemberEdgeGenqlSelection{
    cursor?: boolean | number
    node?: TournamentTeamMemberDtoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface TournamentTeamGenqlSelection{
    id?: boolean | number
    name?: boolean | number
    tag?: boolean | number
    teamId?: boolean | number
    managerId?: boolean | number
    tournamentId?: boolean | number
    status?: boolean | number
    createdAt?: boolean | number
    updatedAt?: boolean | number
    members?: TournamentTeamMemberDtoGenqlSelection
    customFields?: (PropertyConfigWithValueGenqlSelection & { __args?: {properties?: (Scalars['String'][] | null)} })
    tournament?: TournamentGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface TournamentTeamsGenqlSelection{
    edges?: TournamentTeamEdgeGenqlSelection
    nodes?: TournamentTeamGenqlSelection
    pageInfo?: ResponsePageInfoGenqlSelection
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface TournamentTeamEdgeGenqlSelection{
    cursor?: boolean | number
    node?: TournamentTeamGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface WebhookEventConfigurationPropertiesGenqlSelection{
    name?: boolean | number
    description?: boolean | number
    array?: boolean | number
    optional?: boolean | number
    example?: boolean | number
    type?: boolean | number
    properties?: WebhookEventConfigurationPropertiesGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface WebhookEventConfigurationGenqlSelection{
    type?: boolean | number
    description?: boolean | number
    payload?: WebhookEventConfigurationPropertiesGenqlSelection
    /** If this property is available, it means that the event is a "RPC" event and that an answer is expected from the webhook called */
    answerPayload?: WebhookEventConfigurationPropertiesGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface WebhookGenqlSelection{
    id?: boolean | number
    organizationId?: boolean | number
    events?: boolean | number
    url?: boolean | number
    description?: boolean | number
    active?: boolean | number
    secret?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PlayerSkillRatingGenqlSelection{
    playerProfileId?: boolean | number
    ratingId?: boolean | number
    value?: boolean | number
    createdAt?: boolean | number
    updatedAt?: boolean | number
    player?: PlayerGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface TournamentStepGroupRoundGameMatchGenqlSelection{
    id?: boolean | number
    order?: boolean | number
    status?: boolean | number
    tournamentStepGroupRoundGameId?: boolean | number
    configuration?: MatchConfigurationGenqlSelection
    createdAt?: boolean | number
    updatedAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface TournamentStepGroupRoundGameMatchesGenqlSelection{
    edges?: TournamentStepGroupRoundGameMatchEdgeGenqlSelection
    nodes?: TournamentStepGroupRoundGameMatchGenqlSelection
    pageInfo?: ResponsePageInfoGenqlSelection
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface TournamentStepGroupRoundGameMatchEdgeGenqlSelection{
    cursor?: boolean | number
    node?: TournamentStepGroupRoundGameMatchGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface OrganizationPaymentCollectionConfigurationGenqlSelection{
    wellPlayedFeePercent?: boolean | number
    wellPlayedMinimalFee?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface TournamentTeamScoreGenqlSelection{
    teamId?: boolean | number
    score?: boolean | number
    team?: TournamentTeamGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface TournamentStepGenqlSelection{
    id?: boolean | number
    tournamentId?: boolean | number
    name?: boolean | number
    description?: boolean | number
    order?: boolean | number
    type?: boolean | number
    status?: boolean | number
    configuration?: StepConfigurationGenqlSelection
    createdAt?: boolean | number
    updatedAt?: boolean | number
    teamScores?: TournamentTeamScoreGenqlSelection
    tournament?: TournamentGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface TournamentsGenqlSelection{
    edges?: TournamentEdgeGenqlSelection
    nodes?: TournamentGenqlSelection
    pageInfo?: ResponsePageInfoGenqlSelection
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface TournamentEdgeGenqlSelection{
    cursor?: boolean | number
    node?: TournamentGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface TournamentStepGroupRoundGameGenqlSelection{
    id?: boolean | number
    configuration?: GameConfigurationGenqlSelection
    status?: boolean | number
    order?: boolean | number
    tournamentStepGroupRoundId?: boolean | number
    winningGameId?: boolean | number
    losingGameId?: boolean | number
    createdAt?: boolean | number
    updatedAt?: boolean | number
    matches?: TournamentStepGroupRoundGameMatchGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface TournamentStepGroupRoundGenqlSelection{
    id?: boolean | number
    name?: boolean | number
    configuration?: RoundConfigurationGenqlSelection
    tournamentStepGroupId?: boolean | number
    order?: boolean | number
    createdAt?: boolean | number
    updatedAt?: boolean | number
    games?: TournamentStepGroupRoundGameGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface TournamentStepGroupGenqlSelection{
    id?: boolean | number
    name?: boolean | number
    description?: boolean | number
    configuration?: GroupConfigurationGenqlSelection
    tournamentStepId?: boolean | number
    createdAt?: boolean | number
    updatedAt?: boolean | number
    rounds?: TournamentStepGroupRoundGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface TournamentStepGroupRoundGameMatchScoreGenqlSelection{
    matchId?: boolean | number
    teamId?: boolean | number
    score?: boolean | number
    status?: boolean | number
    createdAt?: boolean | number
    updatedAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface TournamentStepGroupRoundGameMatchScoresGenqlSelection{
    edges?: TournamentStepGroupRoundGameMatchScoreEdgeGenqlSelection
    nodes?: TournamentStepGroupRoundGameMatchScoreGenqlSelection
    pageInfo?: ResponsePageInfoGenqlSelection
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface TournamentStepGroupRoundGameMatchScoreEdgeGenqlSelection{
    cursor?: boolean | number
    node?: TournamentStepGroupRoundGameMatchScoreGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface TournamentAdminGenqlSelection{
    tournamentId?: boolean | number
    accountId?: boolean | number
    permissions?: boolean | number
    createdAt?: boolean | number
    updatedAt?: boolean | number
    account?: AccountGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CurrencyGenqlSelection{
    id?: boolean | number
    symbol?: boolean | number
    name?: boolean | number
    externalId?: boolean | number
    description?: boolean | number
    hidden?: boolean | number
    organizationId?: boolean | number
    createdAt?: boolean | number
    updatedAt?: boolean | number
    metadata?: PropertyValueGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CurrenciesGenqlSelection{
    edges?: CurrencyEdgeGenqlSelection
    nodes?: CurrencyGenqlSelection
    pageInfo?: ResponsePageInfoGenqlSelection
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CurrencyEdgeGenqlSelection{
    cursor?: boolean | number
    node?: CurrencyGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PlayerCurrencyGenqlSelection{
    id?: boolean | number
    playerProfileId?: boolean | number
    currencyId?: boolean | number
    balance?: boolean | number
    createdAt?: boolean | number
    updatedAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PlayerCurrenciesGenqlSelection{
    edges?: PlayerCurrencyEdgeGenqlSelection
    nodes?: PlayerCurrencyGenqlSelection
    pageInfo?: ResponsePageInfoGenqlSelection
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PlayerCurrencyEdgeGenqlSelection{
    cursor?: boolean | number
    node?: PlayerCurrencyGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface EmailTemplateConfigurationAvailableVariablesGenqlSelection{
    name?: boolean | number
    description?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface EmailTemplateConfigurationGenqlSelection{
    triggerEvent?: boolean | number
    name?: boolean | number
    description?: boolean | number
    availableVariables?: EmailTemplateConfigurationAvailableVariablesGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface EmailConfigurationGenqlSelection{
    host?: boolean | number
    port?: boolean | number
    username?: boolean | number
    password?: boolean | number
    from?: boolean | number
    fromName?: boolean | number
    replyTo?: boolean | number
    replyToName?: boolean | number
    secure?: boolean | number
    emailField?: PlayerFieldGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface EmailTemplateGenqlSelection{
    id?: boolean | number
    triggerEvent?: boolean | number
    default?: boolean | number
    name?: boolean | number
    title?: boolean | number
    contents?: boolean | number
    createdAt?: boolean | number
    updatedAt?: boolean | number
    organizationId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface EmailTemplatesGenqlSelection{
    edges?: EmailTemplateEdgeGenqlSelection
    nodes?: EmailTemplateGenqlSelection
    pageInfo?: ResponsePageInfoGenqlSelection
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface EmailTemplateEdgeGenqlSelection{
    cursor?: boolean | number
    node?: EmailTemplateGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UserGroupConfigurationGenqlSelection{
    maxSize?: boolean | number
    minSize?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UserGroupMemberGenqlSelection{
    id?: boolean | number
    groupId?: boolean | number
    playerProfileId?: boolean | number
    status?: boolean | number
    createdAt?: boolean | number
    updatedAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UserGroupGenqlSelection{
    id?: boolean | number
    organizationId?: boolean | number
    managerId?: boolean | number
    createdAt?: boolean | number
    updatedAt?: boolean | number
    status?: boolean | number
    locked?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UserGroupsGenqlSelection{
    edges?: UserGroupEdgeGenqlSelection
    nodes?: UserGroupGenqlSelection
    pageInfo?: ResponsePageInfoGenqlSelection
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UserGroupEdgeGenqlSelection{
    cursor?: boolean | number
    node?: UserGroupGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UserGroupMembersGenqlSelection{
    edges?: UserGroupMemberEdgeGenqlSelection
    nodes?: UserGroupMemberGenqlSelection
    pageInfo?: ResponsePageInfoGenqlSelection
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UserGroupMemberEdgeGenqlSelection{
    cursor?: boolean | number
    node?: UserGroupMemberGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PositionGenqlSelection{
    x?: boolean | number
    y?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface EventVenueSeatConfigurationGenqlSelection{
    size?: boolean | number
    svgUrl?: boolean | number
    position?: PositionGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface EventVenueSeatGenqlSelection{
    id?: boolean | number
    name?: boolean | number
    createdAt?: boolean | number
    updatedAt?: boolean | number
    configuration?: EventVenueSeatConfigurationGenqlSelection
    seatTypeId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface EventVenueSeatsUpdateResultGenqlSelection{
    updatedSeats?: EventVenueSeatGenqlSelection
    createdSeats?: EventVenueSeatGenqlSelection
    deletedSeats?: EventVenueSeatGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface EventVenueSeatsGenqlSelection{
    edges?: EventVenueSeatEdgeGenqlSelection
    nodes?: EventVenueSeatGenqlSelection
    pageInfo?: ResponsePageInfoGenqlSelection
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface EventVenueSeatEdgeGenqlSelection{
    cursor?: boolean | number
    node?: EventVenueSeatGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface EventConfigurationGenqlSelection{
    /** Custom fields that are defined on each teams */
    customFields?: PropertyGenqlSelection
    /** Configuration of the group */
    groupConfiguration?: UserGroupConfigurationGenqlSelection
    /** Maximum number of tickets per reservation */
    maxTicketsPerReservation?: boolean | number
    /** Status of the reservation after payment validation, REGISTERED is the default state, CONFIRMED means that the registration has been validated by an admin, PRESENCE_CONFIRMATION_PENDING means that the registration is validated but the presence of the users is not confirmed yet */
    reservationStatusAfterPayment?: boolean | number
    /** Status of the reservation after registration, PENDING is the default state meaning that the session is started, REQUIRES_ADMIN_APPROVAL means that the registration is pending to be validated by an admin. After validation, a session will be started. */
    reservationStatusAfterRegistration?: boolean | number
    /** The number of seconds before registration session expires, default is 15 minutes */
    sessionDuration?: boolean | number
    /** If true, a new session will be allowed after the previous one has expired */
    allowForNewSessionAfterTimeout?: boolean | number
    /** If set, the seat assignment will be required for the reservation, NONE means that there is no seat assignment, REQUIRED means that the seat assignment is required, OPTIONAL means that the seat assignment is optional, default is OPTIONAL */
    seatAssignmentMode?: boolean | number
    /** Allow to reserve more tickets than group members */
    allowForMoreTicketsThanGroupMembers?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface EventGenqlSelection{
    id?: boolean | number
    title?: boolean | number
    description?: boolean | number
    createdAt?: boolean | number
    updatedAt?: boolean | number
    startAt?: boolean | number
    endAt?: boolean | number
    startRegistrationsAt?: boolean | number
    endRegistrationsAt?: boolean | number
    visibleAt?: boolean | number
    configuration?: EventConfigurationGenqlSelection
    eventVenueId?: boolean | number
    organizationId?: boolean | number
    createdById?: boolean | number
    decryptionKey?: boolean | number
    /** The venue where this event is taking place */
    venue?: EventVenueGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface EventInterfaceGenqlSelection{
    id?: boolean | number
    title?: boolean | number
    description?: boolean | number
    createdAt?: boolean | number
    updatedAt?: boolean | number
    startAt?: boolean | number
    endAt?: boolean | number
    startRegistrationsAt?: boolean | number
    endRegistrationsAt?: boolean | number
    visibleAt?: boolean | number
    configuration?: EventConfigurationGenqlSelection
    eventVenueId?: boolean | number
    organizationId?: boolean | number
    createdById?: boolean | number
    decryptionKey?: boolean | number
    /** The venue where this event is taking place */
    venue?: EventVenueGenqlSelection
    on_Event?: EventGenqlSelection
    on_EventWithUserReservation?: EventWithUserReservationGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface EventWithUserReservationGenqlSelection{
    id?: boolean | number
    title?: boolean | number
    description?: boolean | number
    createdAt?: boolean | number
    updatedAt?: boolean | number
    startAt?: boolean | number
    endAt?: boolean | number
    startRegistrationsAt?: boolean | number
    endRegistrationsAt?: boolean | number
    visibleAt?: boolean | number
    configuration?: EventConfigurationGenqlSelection
    eventVenueId?: boolean | number
    organizationId?: boolean | number
    createdById?: boolean | number
    decryptionKey?: boolean | number
    /** The venue where this event is taking place */
    venue?: EventVenueGenqlSelection
    /** The reservation of the current user for this event */
    myReservation?: EventReservationWithTicketsAndQrCodeGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface EventsGenqlSelection{
    edges?: EventEdgeGenqlSelection
    nodes?: EventGenqlSelection
    pageInfo?: ResponsePageInfoGenqlSelection
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface EventEdgeGenqlSelection{
    cursor?: boolean | number
    node?: EventGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface EventReservationTicketConfigurationGenqlSelection{
    customFields?: PropertyConfigWithValueGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface EventReservationTicketGenqlSelection{
    id?: boolean | number
    ticketId?: boolean | number
    reservationId?: boolean | number
    groupMemberId?: boolean | number
    seatId?: boolean | number
    createdAt?: boolean | number
    updatedAt?: boolean | number
    configuration?: EventReservationTicketConfigurationGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface EventReservationTicketWithQrCodeGenqlSelection{
    id?: boolean | number
    ticketId?: boolean | number
    reservationId?: boolean | number
    groupMemberId?: boolean | number
    seatId?: boolean | number
    createdAt?: boolean | number
    updatedAt?: boolean | number
    configuration?: EventReservationTicketConfigurationGenqlSelection
    qrCode?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface EventReservationGenqlSelection{
    id?: boolean | number
    name?: boolean | number
    status?: boolean | number
    sessionValidUntil?: boolean | number
    createdAt?: boolean | number
    updatedAt?: boolean | number
    eventId?: boolean | number
    groupId?: boolean | number
    tickets?: EventReservationTicketGenqlSelection
    groupStatus?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface EventReservationWithTicketsAndQrCodeGenqlSelection{
    id?: boolean | number
    name?: boolean | number
    status?: boolean | number
    sessionValidUntil?: boolean | number
    createdAt?: boolean | number
    updatedAt?: boolean | number
    eventId?: boolean | number
    groupId?: boolean | number
    groupStatus?: boolean | number
    tickets?: EventReservationTicketWithQrCodeGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface EventReservationsGenqlSelection{
    edges?: OmitObjectTypeEdgeGenqlSelection
    nodes?: OmitObjectTypeGenqlSelection
    pageInfo?: ResponsePageInfoGenqlSelection
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface OmitObjectTypeEdgeGenqlSelection{
    cursor?: boolean | number
    node?: OmitObjectTypeGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface OmitObjectTypeGenqlSelection{
    id?: boolean | number
    name?: boolean | number
    status?: boolean | number
    sessionValidUntil?: boolean | number
    createdAt?: boolean | number
    updatedAt?: boolean | number
    eventId?: boolean | number
    groupId?: boolean | number
    groupStatus?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface EventReservationValidateAndPayGenqlSelection{
    paymentUrl?: boolean | number
    clientSecret?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface EventSeatGenqlSelection{
    id?: boolean | number
    name?: boolean | number
    createdAt?: boolean | number
    updatedAt?: boolean | number
    configuration?: EventVenueSeatConfigurationGenqlSelection
    seatTypeId?: boolean | number
    status?: boolean | number
    reservedByTicketId?: boolean | number
    reservedByReservationId?: boolean | number
    reservedByGroupMemberId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface EventSeatsGenqlSelection{
    edges?: EventSeatEdgeGenqlSelection
    nodes?: EventSeatGenqlSelection
    pageInfo?: ResponsePageInfoGenqlSelection
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface EventSeatEdgeGenqlSelection{
    cursor?: boolean | number
    node?: EventSeatGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface EventVenueSeatTypeConfigurationGenqlSelection{
    nonce?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface EventVenueSeatTypeGenqlSelection{
    id?: boolean | number
    name?: boolean | number
    description?: boolean | number
    configuration?: EventVenueSeatTypeConfigurationGenqlSelection
    createdAt?: boolean | number
    updatedAt?: boolean | number
    venueId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface EventVenueSeatTypesGenqlSelection{
    edges?: EventVenueSeatTypeEdgeGenqlSelection
    nodes?: EventVenueSeatTypeGenqlSelection
    pageInfo?: ResponsePageInfoGenqlSelection
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface EventVenueSeatTypeEdgeGenqlSelection{
    cursor?: boolean | number
    node?: EventVenueSeatTypeGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PlatformCdnFilePageConfigGenqlSelection{
    path?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PlatformCdnFileConfigsGenqlSelection{
    pageConfig?: PlatformCdnFilePageConfigGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PlatformCdnFileGenqlSelection{
    id?: boolean | number
    platformId?: boolean | number
    platformTemplateId?: boolean | number
    name?: boolean | number
    type?: boolean | number
    updatedAt?: boolean | number
    createdAt?: boolean | number
    config?: PlatformCdnFileConfigsGenqlSelection
    size?: boolean | number
    prodCdnPath?: boolean | number
    devCdnPath?: boolean | number
    contents?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PresignedUrlFieldGenqlSelection{
    key?: boolean | number
    value?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PresignedUrlGenqlSelection{
    fields?: PresignedUrlFieldGenqlSelection
    url?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface EventVenueConfigurationGenqlSelection{
    imageUrl?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface EventVenueGenqlSelection{
    id?: boolean | number
    name?: boolean | number
    description?: boolean | number
    address?: boolean | number
    city?: boolean | number
    state?: boolean | number
    country?: boolean | number
    postalCode?: boolean | number
    createdAt?: boolean | number
    updatedAt?: boolean | number
    configuration?: EventVenueConfigurationGenqlSelection
    organizationId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface EventVenuesGenqlSelection{
    edges?: EventVenueEdgeGenqlSelection
    nodes?: EventVenueGenqlSelection
    pageInfo?: ResponsePageInfoGenqlSelection
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface EventVenueEdgeGenqlSelection{
    cursor?: boolean | number
    node?: EventVenueGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface EventTicketConfigurationConfigurationGenqlSelection{
    customFields?: PropertyGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface EventTicketConfigurationGenqlSelection{
    id?: boolean | number
    name?: boolean | number
    description?: boolean | number
    createdAt?: boolean | number
    updatedAt?: boolean | number
    price?: boolean | number
    currency?: boolean | number
    maxCount?: boolean | number
    currentCount?: boolean | number
    buyable?: boolean | number
    eventId?: boolean | number
    seatTypeId?: boolean | number
    configuration?: EventTicketConfigurationConfigurationGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ItemGenqlSelection{
    id?: boolean | number
    name?: boolean | number
    externalId?: boolean | number
    description?: boolean | number
    metadata?: PropertyValueGenqlSelection
    createdAt?: boolean | number
    updatedAt?: boolean | number
    organizationId?: boolean | number
    categoryId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ItemsGenqlSelection{
    edges?: ItemEdgeGenqlSelection
    nodes?: ItemGenqlSelection
    pageInfo?: ResponsePageInfoGenqlSelection
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ItemEdgeGenqlSelection{
    cursor?: boolean | number
    node?: ItemGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PlayerItemGenqlSelection{
    id?: boolean | number
    playerProfileId?: boolean | number
    itemId?: boolean | number
    createdAt?: boolean | number
    updatedAt?: boolean | number
    metadata?: PropertyValueGenqlSelection
    quantity?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PlayerItemsGenqlSelection{
    edges?: PlayerItemEdgeGenqlSelection
    nodes?: PlayerItemGenqlSelection
    pageInfo?: ResponsePageInfoGenqlSelection
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PlayerItemEdgeGenqlSelection{
    cursor?: boolean | number
    node?: PlayerItemGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ItemCategoryGenqlSelection{
    id?: boolean | number
    name?: boolean | number
    externalId?: boolean | number
    description?: boolean | number
    metadata?: PropertyValueGenqlSelection
    createdAt?: boolean | number
    updatedAt?: boolean | number
    organizationId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ItemCategoriesGenqlSelection{
    edges?: ItemCategoryEdgeGenqlSelection
    nodes?: ItemCategoryGenqlSelection
    pageInfo?: ResponsePageInfoGenqlSelection
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ItemCategoryEdgeGenqlSelection{
    cursor?: boolean | number
    node?: ItemCategoryGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface LogGenqlSelection{
    id?: boolean | number
    type?: boolean | number
    resourceId?: boolean | number
    data?: LogDataGenqlSelection
    organizationId?: boolean | number
    createdAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface LogsGenqlSelection{
    edges?: LogEdgeGenqlSelection
    nodes?: LogGenqlSelection
    pageInfo?: ResponsePageInfoGenqlSelection
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface LogEdgeGenqlSelection{
    cursor?: boolean | number
    node?: LogGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PlatformCustomDomainDataGenqlSelection{
    domain?: boolean | number
    configuration?: CustomDomainDataGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PlatformConfigurationGenqlSelection{
    whitelabel?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PlatformGenqlSelection{
    id?: boolean | number
    name?: boolean | number
    createdAt?: boolean | number
    updatedAt?: boolean | number
    configuration?: PlatformConfigurationGenqlSelection
    organizationId?: boolean | number
    appId?: boolean | number
    customDomains?: PlatformCustomDomainDataGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PlatformTemplateGenqlSelection{
    id?: boolean | number
    name?: boolean | number
    description?: boolean | number
    screenshotUrl?: boolean | number
    createdAt?: boolean | number
    updatedAt?: boolean | number
    ownerId?: boolean | number
    organizationId?: boolean | number
    public?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PresenceAnalyticsGenqlSelection{
    totalSessions?: boolean | number
    authenticatedSessions?: boolean | number
    anonymousSessions?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UserConnectionEventGenqlSelection{
    sessionId?: boolean | number
    serverId?: boolean | number
    playerId?: boolean | number
    accountId?: boolean | number
    organizationId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UsersConnectedEventGenqlSelection{
    usersConnected?: UserConnectionEventGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UserDisconnectEventGenqlSelection{
    sessionId?: boolean | number
    serverId?: boolean | number
    playerId?: boolean | number
    accountId?: boolean | number
    organizationId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UsersDisconnectedEventGenqlSelection{
    usersDisconnected?: UserDisconnectEventGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PaymentUrlAndClientSecretGenqlSelection{
    paymentUrl?: boolean | number
    clientSecret?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PlayerShopProductPurshaseGenqlSelection{
    id?: boolean | number
    playerProfileId?: boolean | number
    shopProductId?: boolean | number
    quantity?: boolean | number
    createdAt?: boolean | number
    updatedAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PlayerShopProductPurshasesDtoGenqlSelection{
    edges?: PlayerShopProductPurshaseEdgeGenqlSelection
    nodes?: PlayerShopProductPurshaseGenqlSelection
    pageInfo?: ResponsePageInfoGenqlSelection
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PlayerShopProductPurshaseEdgeGenqlSelection{
    cursor?: boolean | number
    node?: PlayerShopProductPurshaseGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ShopCategoryGenqlSelection{
    id?: boolean | number
    externalId?: boolean | number
    name?: boolean | number
    description?: boolean | number
    metadata?: PropertyValueGenqlSelection
    createdAt?: boolean | number
    updatedAt?: boolean | number
    shopId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ShopCategoriesGenqlSelection{
    edges?: ShopCategoryEdgeGenqlSelection
    nodes?: ShopCategoryGenqlSelection
    pageInfo?: ResponsePageInfoGenqlSelection
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ShopCategoryEdgeGenqlSelection{
    cursor?: boolean | number
    node?: ShopCategoryGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ShopProductConfigurationGenqlSelection{
    minQuantity?: boolean | number
    maxQuantity?: boolean | number
    maxBoughtQuantity?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface EntityQuantityGenqlSelection{
    id?: boolean | number
    quantity?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ShopItemQuantityGenqlSelection{
    type?: boolean | number
    id?: boolean | number
    quantity?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ShopProductGenqlSelection{
    id?: boolean | number
    name?: boolean | number
    externalId?: boolean | number
    description?: boolean | number
    categoryId?: boolean | number
    price?: boolean | number
    configuration?: ShopProductConfigurationGenqlSelection
    metadata?: PropertyValueGenqlSelection
    createdAt?: boolean | number
    updatedAt?: boolean | number
    visibleAt?: boolean | number
    shopId?: boolean | number
    currency?: boolean | number
    items?: ShopItemQuantityGenqlSelection
    currencyPrices?: EntityQuantityGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ShopProductsGenqlSelection{
    edges?: ShopProductEdgeGenqlSelection
    nodes?: ShopProductGenqlSelection
    pageInfo?: ResponsePageInfoGenqlSelection
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ShopProductEdgeGenqlSelection{
    cursor?: boolean | number
    node?: ShopProductGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ShopGenqlSelection{
    id?: boolean | number
    externalId?: boolean | number
    name?: boolean | number
    description?: boolean | number
    createdAt?: boolean | number
    updatedAt?: boolean | number
    organizationId?: boolean | number
    metadata?: PropertyValueGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ShopsGenqlSelection{
    edges?: ShopEdgeGenqlSelection
    nodes?: ShopGenqlSelection
    pageInfo?: ResponsePageInfoGenqlSelection
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ShopEdgeGenqlSelection{
    cursor?: boolean | number
    node?: ShopGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ShopProductItemGenqlSelection{
    id?: boolean | number
    currencyId?: boolean | number
    createdAt?: boolean | number
    updatedAt?: boolean | number
    type?: boolean | number
    shopItemId?: boolean | number
    itemId?: boolean | number
    quantity?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ShopProductItemsGenqlSelection{
    edges?: ShopProductItemEdgeGenqlSelection
    nodes?: ShopProductItemGenqlSelection
    pageInfo?: ResponsePageInfoGenqlSelection
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ShopProductItemEdgeGenqlSelection{
    cursor?: boolean | number
    node?: ShopProductItemGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SkillRatingConfigurationGenqlSelection{
    updateLeaderboardId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface OrganizationSkillRatingsRegisterMatchPlayerGenqlSelection{
    id?: boolean | number
    newValue?: boolean | number
    oldValue?: boolean | number
    leaderboardPointsUpdate?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface OrganizationSkillRatingGenqlSelection{
    id?: boolean | number
    name?: boolean | number
    description?: boolean | number
    type?: boolean | number
    configuration?: SkillRatingConfigurationGenqlSelection
    organizationId?: boolean | number
    createdAt?: boolean | number
    updatedAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface LimitOverrideGenqlSelection{
    limit?: boolean | number
    value?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SubscriptionItemGenqlSelection{
    id?: boolean | number
    name?: boolean | number
    description?: boolean | number
    limitsOverride?: LimitOverrideGenqlSelection
    maxCount?: boolean | number
    price?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface OrganizationSubscriptionItemGenqlSelection{
    organizationId?: boolean | number
    subscriptionItemId?: boolean | number
    count?: boolean | number
    createdAt?: boolean | number
    endAt?: boolean | number
    updatedAt?: boolean | number
    subscriptionItem?: SubscriptionItemGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface KeyMappingInput {path: Scalars['String'],mappedTo: Scalars['String'],private?: (Scalars['Boolean'] | null)}

export interface MappingConfigurationInput {mappings: KeyMappingInput[]}

export interface HeaderInput {name: Scalars['String'],value: Scalars['String']}

export interface DataRetrievalConfigInput {url: Scalars['String'],headers: HeaderInput[],mappingConfiguration: MappingConfigurationInput}

export interface GroupPermissionInput {id: Scalars['String'],resources: Scalars['String'][]}

export interface PropertyInput {property: Scalars['String'],name: Scalars['String'],type: PropertyType,required: Scalars['Boolean'],order: Scalars['Float'],unique: Scalars['Boolean'],public?: (Scalars['Boolean'] | null),visibility?: (PropertyVisibility | null),editability?: (ProperyEditability | null)}

export interface PropertyValueInput {property: Scalars['String'],value: Scalars['String']}

export interface MatchVariableInput {formulaName: Scalars['String'],displayName: Scalars['String'],displayIcon?: (Scalars['String'] | null),defaultValue: Scalars['Float']}

export interface MatchConfigurationInput {variables: MatchVariableInput[],scoreFormula?: (Scalars['String'] | null)}

export interface GameConfigurationInput {wonMatchCountToWinGame: Scalars['Float'],useMatchScoresAsGameScore: Scalars['Boolean'],teamsCount: Scalars['Float'],matchConfiguration: MatchConfigurationInput}

export interface VariableInput {name: Scalars['String'],defaultValue: Scalars['Float']}

export interface RoundConfigurationInput {game: GameConfigurationInput,order: Scalars['Float'],name: Scalars['String']}

export interface GroupConfigurationInput {rounds: RoundConfigurationInput[],name: Scalars['String'],description?: (Scalars['String'] | null)}

export interface StepConfigurationInput {type?: ConfigurationType,groups: GroupConfigurationInput[]}

export interface NumberConditionInput {conditionType: NumberConditionType,value: Scalars['Float']}

export interface TeamNumericConditionInput {aggregationType?: (AggregationType | null),propertySource?: (PlayerConditionDataSource | null),propertySourceId?: (Scalars['ID'] | null),conditionType: NumberConditionType,value: Scalars['Float']}

export interface StringConditionInput {conditionType: StringConditionType,value: Scalars['String']}

export interface ConditionInput {property: Scalars['String'],numericCondition?: (NumberConditionInput | null),stringCondition?: (StringConditionInput | null),propertyCondition: PropertyCondition}

export interface PlayerFieldInput {propertySource: PlayerConditionDataSource,propertySourceId?: (Scalars['ID'] | null),property: Scalars['String']}

export interface PlayerConditionInput {propertySource: PlayerConditionDataSource,propertySourceId?: (Scalars['ID'] | null),condition: ConditionInput,errorMessage?: (Scalars['String'] | null),ruleDescription?: (Scalars['String'] | null)}

export interface TeamConditionInput {property: Scalars['String'],stringCondition?: (StringConditionInput | null),numericCondition?: (TeamNumericConditionInput | null),propertyCondition: PropertyCondition,errorMessage?: (Scalars['String'] | null)}

export interface RegistrationConditionsInput {teamConditions: TeamConditionInput[],memberConditions: PlayerConditionInput[]}

export interface TournamentConfigurationInput {type?: ConfigurationType,
/** Minimum team size to register to the tournament */
teamMinSize?: (Scalars['Float'] | null),
/** Maximum team size to register to the tournament */
teamMaxSize?: (Scalars['Float'] | null),
/** Maximum number of registered teams */
teamsCount?: (Scalars['Float'] | null),
/** Status of the team after registration, REGISTERED is the default state, AWAITING_FOR_PRESENCE_CONFIRMATION means that the team has been validated and is waiting for presence confirmation, AWAITING_FOR_PAYMENT means that the team has to pay to be validated */
teamStatusAfterRegistration?: (TeamStatusAfterRegistration | null),
/** Condition rules to register to the tournament */
registrationConditions?: (RegistrationConditionsInput | null),
/** Custom fields that are defined on each teams */
customFields?: (PropertyInput[] | null)}

export interface EmailConfigurationInput {host: Scalars['String'],port?: (Scalars['Float'] | null),username?: (Scalars['String'] | null),password?: (Scalars['String'] | null),from: Scalars['String'],fromName?: (Scalars['String'] | null),replyTo?: (Scalars['String'] | null),replyToName?: (Scalars['String'] | null),secure: Scalars['Boolean'],emailField: PlayerFieldInput}

export interface UserGroupConfigurationInput {maxSize: Scalars['Int'],minSize: Scalars['Int']}

export interface PositionInput {x: Scalars['Float'],y: Scalars['Float']}

export interface EventVenueSeatConfigurationInput {size?: (Scalars['Float'] | null),svgUrl?: (Scalars['String'] | null),position: PositionInput}

export interface EventConfigurationInput {
/** Custom fields that are defined on each teams */
customFields?: (PropertyInput[] | null),
/** Configuration of the group */
groupConfiguration?: (UserGroupConfigurationInput | null),
/** Maximum number of tickets per reservation */
maxTicketsPerReservation?: (Scalars['Float'] | null),
/** Status of the reservation after payment validation, REGISTERED is the default state, CONFIRMED means that the registration has been validated by an admin, PRESENCE_CONFIRMATION_PENDING means that the registration is validated but the presence of the users is not confirmed yet */
reservationStatusAfterPayment?: (EventReservationStatusAfterPayment | null),
/** Status of the reservation after registration, PENDING is the default state meaning that the session is started, REQUIRES_ADMIN_APPROVAL means that the registration is pending to be validated by an admin. After validation, a session will be started. */
reservationStatusAfterRegistration?: (EventReservationStatusAfterRegistration | null),
/** The number of seconds before registration session expires, default is 15 minutes */
sessionDuration?: (Scalars['Float'] | null),
/** If true, a new session will be allowed after the previous one has expired */
allowForNewSessionAfterTimeout?: (Scalars['Boolean'] | null),
/** If set, the seat assignment will be required for the reservation, NONE means that there is no seat assignment, REQUIRED means that the seat assignment is required, OPTIONAL means that the seat assignment is optional, default is OPTIONAL */
seatAssignmentMode?: (SeatAssignmentMode | null),
/** Allow to reserve more tickets than group members */
allowForMoreTicketsThanGroupMembers?: (Scalars['Boolean'] | null)}

export interface EventVenueSeatTypeConfigurationInput {nonce?: (Scalars['String'] | null)}

export interface PlatformCdnFilePageConfigInput {path: Scalars['String']}

export interface PlatformCdnFileConfigsInput {pageConfig?: (PlatformCdnFilePageConfigInput | null)}

export interface EventVenueConfigurationInput {imageUrl?: (Scalars['String'] | null)}

export interface EventTicketConfigurationConfigurationInput {customFields: PropertyInput[]}

export interface PlatformConfigurationInput {whitelabel?: (Scalars['Boolean'] | null)}

export interface ShopProductConfigurationInput {minQuantity?: (Scalars['Int'] | null),maxQuantity?: (Scalars['Int'] | null),maxBoughtQuantity?: (Scalars['Int'] | null)}

export interface EntityQuantityInput {id: Scalars['ID'],quantity: Scalars['Int']}

export interface ShopItemQuantityInput {type: ShopProductItemType,id: Scalars['ID'],quantity: Scalars['Int']}

export interface SkillRatingConfigurationInput {updateLeaderboardId?: (Scalars['ID'] | null)}

export interface QueryGenqlSelection{
    logs?: (LogsGenqlSelection & { __args?: {page?: (PageInfo | null), resourceId?: (Scalars['ID'] | null), types?: (LogType[] | null)} })
    getMyAccount?: AccountGenqlSelection
    configuration?: (ConfigurationGenqlSelection & { __args: {id: Scalars['ID']} })
    leaderboardCurrentPlayerRanking?: (LeaderboardSeasonBucketScoreGenqlSelection & { __args: {input: LeaderboardGetPlayerRankingInput} })
    leaderboards?: (LeaderboardsGenqlSelection & { __args: {page: PageInfo} })
    leaderboard?: (LeaderboardGenqlSelection & { __args: {id: Scalars['ID']} })
    currentLeaderboardSeason?: (LeaderboardSeasonGenqlSelection & { __args: {leaderboardId: Scalars['ID']} })
    leaderboardSeasons?: (LeaderboardSeasonsGenqlSelection & { __args: {leaderboardId: Scalars['ID'], page: PageInfo} })
    leaderboardSeason?: (LeaderboardSeasonGenqlSelection & { __args: {id: Scalars['ID']} })
    leaderboardSeasonBuckets?: (LeaderboardSeasonBucketsGenqlSelection & { __args: {seasonId: Scalars['ID'], page: PageInfo} })
    leaderboardSeasonBucket?: (LeaderboardSeasonBucketGenqlSelection & { __args: {id: Scalars['ID']} })
    leaderboardSeasonBucketScores?: (LeaderboardSeasonBucketScoresGenqlSelection & { __args: {leaderboardSeasonBucketId: Scalars['ID'], page: PageInfo} })
    organization?: (OrganizationGenqlSelection & { __args: {id: Scalars['ID']} })
    limitDefinitions?: (LimitsGenqlSelection & { __args?: {limits?: (Scalars['String'][] | null)} })
    organizationLimits?: (OrganizationLimitsGenqlSelection & { __args?: {limits?: (OrganizationLimitsType[] | null)} })
    userOrganizations?: OrganizationGenqlSelection
    organizationGroup?: (OrganizationGroupGenqlSelection & { __args: {id: Scalars['ID']} })
    organizationGroups?: (OrganizationGroupsGenqlSelection & { __args: {page: PageInfo} })
    availablePermissions?: PermissionsGenqlSelection
    organizationMembers?: (OrganizationMembersGenqlSelection & { __args: {page: PageInfo} })
    identityProviders?: OrganizationIdentityProviderInfoGenqlSelection
    identityProvider?: (OrganizationIdentityProviderGenqlSelection & { __args: {id: Scalars['ID']} })
    organizationApp?: (OrganizationAppGenqlSelection & { __args: {id: Scalars['String']} })
    organizationApps?: (OrganizationAppsGenqlSelection & { __args: {page: PageInfo} })
    webhookAvailableEvents?: WebhookEventConfigurationGenqlSelection
    webhooks?: WebhookGenqlSelection
    webhook?: (WebhookGenqlSelection & { __args: {id: Scalars['ID']} })
    organizationAttachedApps?: (OrganizationAttachedAppsGenqlSelection & { __args: {page: PageInfo} })
    availableRootIdentityProvider?: (PublicIdentityProviderGenqlSelection & { __args: {id: Scalars['ID']} })
    getAvailableRootIdentityProviders?: PublicIdentityProviderGenqlSelection
    searchPlayer?: (PlayerGenqlSelection & { __args: {username: Scalars['String']} })
    players?: (PlayersGenqlSelection & { __args: {ids?: (Scalars['ID'][] | null), page: PageInfo, identityProviders?: (Scalars['ID'][] | null), identityProviderProperties?: (Scalars['String'][] | null), query?: (QueryPlayersInput | null)} })
    player?: (PlayerGenqlSelection & { __args?: {id?: (Scalars['ID'] | null), ownerId?: (Scalars['ID'] | null), customId?: (Scalars['String'] | null)} })
    playerSkillRatings?: (PlayerSkillRatingGenqlSelection & { __args: {playerId: Scalars['ID'], 
    /** Filter by specific skill rating ids */
    skillRatingIds?: (Scalars['ID'][] | null)} })
    playerMatchesHistory?: (TournamentStepGroupRoundGameMatchesGenqlSelection & { __args: {page: PageInfo, playerId: Scalars['ID']} })
    tournament?: (TournamentGenqlSelection & { __args: {id: Scalars['ID']} })
    tournaments?: (TournamentsGenqlSelection & { __args: {query: TournamentsQuery, page: PageInfo} })
    tournamentSteps?: (TournamentStepGenqlSelection & { __args: {tournamentId: Scalars['ID']} })
    tournamentStep?: (TournamentStepGenqlSelection & { __args: {id: Scalars['ID']} })
    tournamentStepGeneratedShape?: (TournamentStepGroupGenqlSelection & { __args: {stepId: Scalars['ID']} })
    match?: (TournamentStepGroupRoundGameMatchGenqlSelection & { __args: {matchId: Scalars['ID']} })
    tournamentTeam?: (TournamentTeamGenqlSelection & { __args: {teamId: Scalars['ID'], memberStatus?: (TournamentTeamMemberStatus | null)} })
    tournamentTeams?: (TournamentTeamsGenqlSelection & { __args: {tournamentId: Scalars['ID'], page: PageInfo, memberStatus?: (TournamentTeamMemberStatus | null), status?: (TournamentTeamStatus | null), propertiesFilter?: (PropertyValueInput[] | null), playerUsernameQuery?: (Scalars['String'] | null), playerPropertiesFilter?: (PropertyValueInput[] | null), playerIdentityProviderPropertiesFilter?: (IdentityProviderPropertyInput[] | null)} })
    tournamentPlayers?: (TeamMembersGenqlSelection & { __args: {page: PageInfo, tournamentId: Scalars['ID'], status: TournamentTeamStatus, playerUsernameQuery?: (Scalars['String'] | null), playerPropertiesFilter?: (PropertyValueInput[] | null), orderByProperty?: (OrderByProperty | null)} })
    tournamentTeamInvites?: (TeamMembersGenqlSelection & { __args: {page: PageInfo, tournamentId?: (Scalars['ID'] | null), status?: (TournamentTeamMemberStatus | null)} })
    tournamentStepGroupRoundGameMatchScoresGetForStep?: (TournamentStepGroupRoundGameMatchScoresGenqlSelection & { __args: {stepId: Scalars['ID'], page: PageInfo} })
    tournamentAdmins?: (TournamentAdminGenqlSelection & { __args: {tournamentId: Scalars['ID']} })
    platformFiles?: (PlatformCdnFileGenqlSelection & { __args?: {type?: (PlatformCdnFileType | null), platformId?: (Scalars['ID'] | null), templateId?: (Scalars['ID'] | null)} })
    platformFile?: (PlatformCdnFileGenqlSelection & { __args: {id: Scalars['ID']} })
    platforms?: PlatformGenqlSelection
    platform?: (PlatformGenqlSelection & { __args: {platformId: Scalars['ID']} })
    platformFindFromDomain?: (PlatformGenqlSelection & { __args: {domain: Scalars['String']} })
    platformCheckDomainAvailability?: { __args: {domain: Scalars['URL']} }
    platformCustomDomains?: (PlatformCustomDomainDataGenqlSelection & { __args: {platformId: Scalars['ID']} })
    platformTemplatesPublic?: PlatformTemplateGenqlSelection
    platformTemplates?: PlatformTemplateGenqlSelection
    platformTemplate?: (PlatformTemplateGenqlSelection & { __args: {platformTemplateId: Scalars['ID']} })
    subscriptionItems?: SubscriptionItemGenqlSelection
    organizationCurrentSubscriptionItems?: OrganizationSubscriptionItemGenqlSelection
    organizationSkillRatings?: OrganizationSkillRatingGenqlSelection
    organizationSkillRating?: (OrganizationSkillRatingGenqlSelection & { __args: {id: Scalars['ID']} })
    event?: (EventWithUserReservationGenqlSelection & { __args: {id: Scalars['ID']} })
    events?: (EventsGenqlSelection & { __args: {page: PageInfo, query?: (EventsQuery | null), eventIds?: (Scalars['ID'][] | null)} })
    eventTicketConfiguration?: (EventTicketConfigurationGenqlSelection & { __args: {id: Scalars['ID']} })
    eventTicketConfigurations?: (EventTicketConfigurationGenqlSelection & { __args: {eventId: Scalars['ID']} })
    eventReservationsMyReservations?: (EventReservationsGenqlSelection & { __args: {page: PageInfo, status?: (EventReservationStatus | null), groupStatus?: (UserGroupStatus | null), eventIds?: (Scalars['ID'][] | null)} })
    eventReservation?: (EventReservationGenqlSelection & { __args: {reservationId: Scalars['ID']} })
    eventSeats?: (EventSeatsGenqlSelection & { __args: {eventId: Scalars['ID'], page: PageInfo, eventVenueId?: (Scalars['ID'] | null), reservationIds?: (Scalars['ID'][] | null)} })
    eventReservations?: (EventReservationsGenqlSelection & { __args: {eventId: Scalars['ID'], page: PageInfo, query: EventReservationsQueryInput} })
    eventVenues?: (EventVenuesGenqlSelection & { __args: {page: PageInfo} })
    eventVenue?: (EventVenueGenqlSelection & { __args: {id: Scalars['ID']} })
    eventVenueSeats?: (EventVenueSeatsGenqlSelection & { __args: {venueId: Scalars['ID'], page: PageInfo, seatTypeId?: (Scalars['ID'] | null)} })
    eventVenueSeatTypes?: (EventVenueSeatTypesGenqlSelection & { __args: {venueId: Scalars['ID'], page: PageInfo} })
    organizationPaymentCollectionConfiguration?: OrganizationPaymentCollectionConfigurationGenqlSelection
    emailTemplateConfigurations?: EmailTemplateConfigurationGenqlSelection
    emailConfiguration?: EmailConfigurationGenqlSelection
    emailTemplate?: (EmailTemplateGenqlSelection & { __args: {id: Scalars['ID']} })
    emailTemplates?: (EmailTemplatesGenqlSelection & { __args: {page: PageInfo} })
    userGroupMembers?: (UserGroupMembersGenqlSelection & { __args: {groupIds: Scalars['ID'][], page: PageInfo, status?: (UserGroupMemberStatus | null)} })
    userGroups?: (UserGroupsGenqlSelection & { __args: {query: UserGroupsQueryInput, page: PageInfo} })
    userGroupMyMemberships?: (UserGroupMembersGenqlSelection & { __args: {page: PageInfo, status?: (UserGroupMemberStatus | null), entityType?: (Scalars['String'] | null), entityId?: (Scalars['ID'] | null)} })
    presenceAnalytics?: PresenceAnalyticsGenqlSelection
    shops?: (ShopsGenqlSelection & { __args?: {page?: (PageInfo | null), filter?: (ShopsFilterInput | null)} })
    shopCategories?: (ShopCategoriesGenqlSelection & { __args?: {page?: (PageInfo | null), filter?: (ShopCategoriesFilterInput | null)} })
    playerShopProductPurshases?: (PlayerShopProductPurshasesDtoGenqlSelection & { __args?: {page?: (PageInfo | null), filter?: (PlayerShopProductPurshasesFilterInput | null)} })
    shopProducts?: (ShopProductsGenqlSelection & { __args: {shopId: Scalars['ID'], page?: (PageInfo | null), filter?: (ShopProductsFilterInput | null)} })
    shopProductItems?: (ShopProductItemsGenqlSelection & { __args: {shopProductId: Scalars['ID'], page?: (PageInfo | null)} })
    items?: (ItemsGenqlSelection & { __args?: {page?: (PageInfo | null), filter?: (ItemsFilterInput | null)} })
    playerItems?: (PlayerItemsGenqlSelection & { __args?: {page?: (PageInfo | null), filter?: (PlayerItemsFilterInput | null)} })
    itemCategories?: (ItemCategoriesGenqlSelection & { __args?: {page?: (PageInfo | null), filter?: (ItemCategoriesFilterInput | null)} })
    currencies?: (CurrenciesGenqlSelection & { __args?: {page?: (PageInfo | null), filter?: (CurrenciesFilterInput | null)} })
    playerCurrencies?: (PlayerCurrenciesGenqlSelection & { __args?: {page?: (PageInfo | null), filter?: (PlayerCurrenciesFilterInput | null)} })
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface LeaderboardGetPlayerRankingInput {leaderboardId: Scalars['ID'],playerId: Scalars['ID'],
/** If not set, the current active season will be selected */
seasonId?: (Scalars['ID'] | null)}

export interface OrganizationIdentityProviderInfoGenqlSelection{
    on_OrganizationIdentityProvider?:OrganizationIdentityProviderGenqlSelection,
    on_PublicOrganizationIdentityProviderV2?:PublicOrganizationIdentityProviderV2GenqlSelection,
    __typename?: boolean | number
}

export interface PublicOrganizationIdentityProviderV2GenqlSelection{
    requiredForPlayerValidation?: boolean | number
    allowLogin?: boolean | number
    description?: boolean | number
    icon?: boolean | number
    id?: boolean | number
    name?: boolean | number
    organizationId?: boolean | number
    redirectUrl?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface QueryPlayersInput {anonymous?: (Scalars['Boolean'] | null)}

export interface TournamentsQuery {
/** Order by type */
orderBy?: TournamentsQueryOrderBy,
/** Order direction */
orderDirection?: OrderDirection,
/** Filter by tournament status */
status?: TournamentsQueryStatus,
/** Show not visible tournaments, only usable if the user has the correct permission */
showNotVisible?: (Scalars['Boolean'] | null),filterByPlayers?: (TournamentsQueryPlayerIdWithTeamStatus[] | null)}

export interface TournamentsQueryPlayerIdWithTeamStatus {
/** Player id */
playerId: Scalars['ID'],
/** Team status */
teamStatus: TournamentTeamStatus,memberStatus: TournamentTeamMemberStatus}

export interface IdentityProviderPropertyInput {identityProviderId: Scalars['ID'],property: Scalars['String'],value: Scalars['String']}

export interface OrderByProperty {property: Scalars['String'],order?: (OrderDirection | null)}

export interface EventsQuery {
/** Order by type */
orderBy?: EventsQueryOrderBy,
/** Order direction */
orderDirection?: OrderDirection,
/** Filter by event status */
status?: EventsQueryStatus,
/** Show not visible events, only usable if the user has the correct permission */
showNotVisible?: (Scalars['Boolean'] | null),filterByPlayers?: (EventsQueryPlayerIdWithTeamStatusInput[] | null)}

export interface EventsQueryPlayerIdWithTeamStatusInput {
/** Player id */
playerId: Scalars['ID'],reservationStatus?: (EventReservationStatus | null),memberStatus?: (UserGroupMemberStatus | null)}

export interface EventReservationsQueryInput {filterByRegistrationStatus?: (EventReservationStatus | null),retrieveOnlyGroupMembersWithStatus?: (UserGroupMemberStatus | null),filterByPlayerUsernameQuery?: (Scalars['String'] | null),filterByReservationProperties?: (PropertyValueInput[] | null),filterByPlayerProperties?: (PropertyValueInput[] | null),filterByPlayerIdentityProviderProperties?: (IdentityProviderPropertyInput[] | null),filterByPlayers?: (EventReservationsQueryPlayerIdWithGroupStatusInput[] | null),filterByGroupStatus?: (UserGroupStatus | null)}

export interface EventReservationsQueryPlayerIdWithGroupStatusInput {
/** Player id */
playerId: Scalars['ID'],memberStatus?: (UserGroupMemberStatus | null)}

export interface UserGroupsQueryInput {ids: Scalars['ID'][]}

export interface ShopsFilterInput {ids?: (Scalars['ID'][] | null),externalIds?: (Scalars['String'][] | null)}

export interface ShopCategoriesFilterInput {ids?: (Scalars['ID'][] | null),externalIds?: (Scalars['String'][] | null),shopIds?: (Scalars['ID'][] | null)}

export interface PlayerShopProductPurshasesFilterInput {shopProductIds?: (Scalars['ID'][] | null),playerProfileIds?: (Scalars['ID'][] | null),shopIds?: (Scalars['ID'][] | null),ids?: (Scalars['ID'][] | null)}

export interface ShopProductsFilterInput {categoryIds?: (Scalars['ID'][] | null),ids?: (Scalars['ID'][] | null),externalIds?: (Scalars['String'][] | null)}

export interface ItemsFilterInput {categoryIds?: (Scalars['ID'][] | null),ids?: (Scalars['ID'][] | null),externalIds?: (Scalars['String'][] | null)}

export interface PlayerItemsFilterInput {itemIds?: (Scalars['ID'][] | null),playerProfileIds?: (Scalars['ID'][] | null)}

export interface ItemCategoriesFilterInput {ids?: (Scalars['ID'][] | null),externalIds?: (Scalars['String'][] | null)}

export interface CurrenciesFilterInput {ids?: (Scalars['ID'][] | null),externalIds?: (Scalars['String'][] | null)}

export interface PlayerCurrenciesFilterInput {currencyIds?: (Scalars['ID'][] | null),playerProfileIds?: (Scalars['ID'][] | null)}

export interface MutationGenqlSelection{
    deleteAccount?: { __args: {id: Scalars['ID']} }
    /** Generates access token for an account identity provider with the stored refresh token */
    accountIdentityGenerateAccessToken?: { __args: {identityProviderId: Scalars['ID'], 
    /** if not provided, the current account id will be used */
    accountId?: (Scalars['ID'] | null)} }
    accountIdentityRefresh?: (AccountIdentityGenqlSelection & { __args: {identityProviderId: Scalars['ID'], 
    /** if not provided, the current account id will be used */
    accountId?: (Scalars['ID'] | null)} })
    attachOrUpdateIdentityToAccount?: (AccountIdentityGenqlSelection & { __args: {identityProviderId: Scalars['ID'], token: Scalars['String']} })
    updateConfiguration?: (ConfigurationGenqlSelection & { __args: {id: Scalars['ID'], input: CreateConfigurationInput} })
    deleteConfiguration?: { __args: {id: Scalars['ID']} }
    leaderboardRegisterPlayerScore?: (LeaderboardSeasonBucketScoreGenqlSelection & { __args: {input: LeaderboardRegisterPlayerScoreInput} })
    createLeaderboard?: (LeaderboardGenqlSelection & { __args: {input: CreateLeaderboardInput} })
    updateLeaderboard?: (LeaderboardGenqlSelection & { __args: {id: Scalars['ID'], input: UpdateLeaderboardInput} })
    deleteLeaderboard?: { __args: {id: Scalars['ID']} }
    createLeaderboardSeason?: (LeaderboardSeasonGenqlSelection & { __args: {leaderboardId: Scalars['ID'], input: CreateLeaderboardSeasonInput} })
    updateLeaderboardSeason?: (LeaderboardSeasonGenqlSelection & { __args: {id: Scalars['ID'], input: UpdateLeaderboardSeasonInput} })
    deleteLeaderboardSeason?: { __args: {id: Scalars['ID']} }
    createLeaderboardSeasonBucket?: (LeaderboardSeasonBucketGenqlSelection & { __args: {seasonId: Scalars['ID'], input: CreateLeaderboardSeasonBucketInput} })
    updateLeaderboardSeasonBucket?: (LeaderboardSeasonBucketGenqlSelection & { __args: {id: Scalars['ID'], input: UpdateLeaderboardSeasonBucketInput} })
    deleteLeaderboardSeasonBucket?: { __args: {id: Scalars['ID']} }
    updateOrganization?: (OrganizationGenqlSelection & { __args: {organization: UpdateOrganizationInput} })
    createOrganization?: (OrganizationGenqlSelection & { __args: {organization: CreateOrganizationInput} })
    createOrganizationGroup?: (OrganizationGroupGenqlSelection & { __args: {input: CreateOrganizationGroupInput} })
    updateOrganizationGroup?: (OrganizationGroupGenqlSelection & { __args: {id: Scalars['ID'], input: CreateOrganizationGroupInput} })
    deleteOrganizationGroup?: { __args: {id: Scalars['ID']} }
    setOrganizationMembership?: (OrganizationMemberGenqlSelection & { __args: {input: SetOrganizationMembershipInput} })
    deleteOrganizationMembership?: { __args: {input: DeleteOrganizationMembershipInput} }
    createIdentityProvider?: (OrganizationIdentityProviderGenqlSelection & { __args: {input: CreateOrganizationIdentityProvider} })
    updateIdentityProvider?: (OrganizationIdentityProviderGenqlSelection & { __args: {providerId: Scalars['ID'], input: UpdateOrganizationIdentityProvider} })
    deleteIdentityProvider?: { __args: {id: Scalars['ID']} }
    createOrganizationApp?: (OrganizationAppGenqlSelection & { __args: {input: CreateOrganizationAppInput} })
    resetOrganizationAppSecret?: { __args: {id: Scalars['String']} }
    updateOrganizationApp?: (OrganizationAppGenqlSelection & { __args: {id: Scalars['String'], input: UpdateOrganizationAppInput} })
    deleteOrganizationApp?: { __args: {id: Scalars['String']} }
    createWebhook?: (WebhookGenqlSelection & { __args: {input: CreateWebhookInput} })
    updateWebhook?: (WebhookGenqlSelection & { __args: {id: Scalars['ID'], input: UpdateWebhookInput} })
    deleteWebhook?: (WebhookGenqlSelection & { __args: {id: Scalars['ID']} })
    regenerateWebhookSecret?: (WebhookGenqlSelection & { __args: {id: Scalars['ID']} })
    setOrganizationAttachedApp?: (OrganizationAttachedAppGenqlSelection & { __args: {input: SetOrganizationAttachedAppInput} })
    deleteOrganizationAttachedApp?: { __args: {input: DeleteOrganizationAttachedAppInput} }
    createPlayer?: (PlayerGenqlSelection & { __args: {input: CreatePlayerInput} })
    updatePlayer?: (PlayerGenqlSelection & { __args: {input: UpdatePlayerInput, id?: (Scalars['ID'] | null), customId?: (Scalars['String'] | null)} })
    createOrUpdateMyPlayerProfile?: (PlayerGenqlSelection & { __args: {input: UpdateMePlayerInput} })
    deletePlayer?: { __args: {id?: (Scalars['ID'] | null), customId?: (Scalars['ID'] | null)} } | boolean | number
    /** Create a new tournament */
    createTournament?: (TournamentGenqlSelection & { __args: {input: CreateTournamentInput} })
    /** Update a tournament */
    updateTournament?: (TournamentGenqlSelection & { __args: {input: UpdateTournamentInput, id: Scalars['ID']} })
    /** Delete a tournament */
    deleteTournament?: { __args: {id: Scalars['ID']} }
    startTournamentStep?: { __args: {stepId: Scalars['ID']} }
    createTournamentStep?: (TournamentStepGenqlSelection & { __args: {tournamentId: Scalars['ID'], configuration: StepConfigurationInput, step: CreateTournamentStepInput} })
    updateTournamentStep?: (TournamentStepGenqlSelection & { __args: {stepId: Scalars['ID'], configuration: StepConfigurationInput, step: CreateTournamentStepInput} })
    deleteTournamentStep?: { __args: {stepId: Scalars['ID']} }
    generateTournamentStep?: { __args: {stepId: Scalars['ID'], teamsCount: Scalars['Int']} }
    seedTournamentStep?: { __args: {stepId: Scalars['ID'], input: SeedingInput} }
    updateMatchScores?: (TournamentStepGroupRoundGameMatchGenqlSelection & { __args: {matchId: Scalars['ID'], input: UpdateMatchScoreInput[]} })
    registerCustomTournamentTeams?: (TournamentTeamGenqlSelection & { __args: {tournamentId: Scalars['ID'], input: RegisterCustomTeamsInput} })
    registerTournamentTeam?: (TournamentTeamGenqlSelection & { __args: {tournamentId: Scalars['ID'], input: RegisterTournamentTeamInput} })
    updateTournamentTeam?: (TournamentTeamGenqlSelection & { __args: {input: UpdateTournamentTeamInput, tournamentId?: (Scalars['ID'] | null), teamId?: (Scalars['ID'] | null)} })
    deleteTournamentTeam?: { __args: {tournamentId: Scalars['ID']} }
    deleteAnyTournamentTeam?: { __args: {teamId: Scalars['ID']} }
    confirmTournamentTeam?: (TournamentTeamGenqlSelection & { __args: {teamId: Scalars['ID'], confirm: Scalars['Boolean']} })
    confirmTournamentAttendance?: (TournamentTeamGenqlSelection & { __args: {tournamentId: Scalars['ID'], attendance: Scalars['Boolean']} })
    updateTournamentTeamStatus?: (TournamentTeamGenqlSelection & { __args: {tournamentTeamId: Scalars['ID'], status: TournamentTeamStatus} })
    inviteTournamentTeamMember?: { __args: {tournamentId: Scalars['ID'], playerId: Scalars['ID']} }
    answerToTournamentTeamInvite?: { __args: {teamId: Scalars['ID'], accept: Scalars['Boolean']} }
    deleteTournamentTeamInvite?: { __args: {teamId: Scalars['ID'], playerId: Scalars['ID']} }
    tournamentAdminUpsert?: (TournamentAdminGenqlSelection & { __args: {input: TournamentAdminUpsertInput} })
    tournamentAdminDelete?: { __args: {input: TournamentAdminDeleteInput} }
    stripeCreatePortalSession?: boolean | number
    platformFileCreate?: (PlatformCdnFileGenqlSelection & { __args: {input: PlatformCdnFileCreateInput, platformId?: (Scalars['ID'] | null), templateId?: (Scalars['ID'] | null)} })
    platformFilePublish?: (PlatformCdnFileGenqlSelection & { __args: {id: Scalars['ID']} })
    platformFileGenerateUploadUrl?: (PresignedUrlGenqlSelection & { __args: {id: Scalars['ID'], size: Scalars['Float']} })
    platformFileValidateFileUpload?: (PlatformCdnFileGenqlSelection & { __args: {id: Scalars['ID']} })
    platformFileUpdate?: (PlatformCdnFileGenqlSelection & { __args: {id: Scalars['ID'], input: PlatformFileUpdateInput} })
    platformFileDelete?: { __args: {id: Scalars['ID']} }
    platformCreate?: (PlatformGenqlSelection & { __args: {input: CreatePlatformInput} })
    platformUpdate?: (PlatformGenqlSelection & { __args: {id: Scalars['ID'], input: UpdatePlatformInput} })
    platformDelete?: { __args: {id: Scalars['ID']} }
    platformRegisterCustomDomain?: (CustomDomainDataGenqlSelection & { __args: {platformId: Scalars['ID'], hostname: Scalars['String']} })
    platformForceCustomDomainRecheck?: (CustomDomainDataGenqlSelection & { __args: {hostname: Scalars['String']} })
    platformRemoveCustomDomain?: { __args: {hostname: Scalars['String']} }
    platformTemplateCreate?: (PlatformTemplateGenqlSelection & { __args: {input: CreatePlatformTemplateInput} })
    platformTemplateUpdate?: (PlatformTemplateGenqlSelection & { __args: {id: Scalars['ID'], input: UpdatePlatformTemplateInput} })
    platformTemplateApply?: (PlatformGenqlSelection & { __args: {platformTemplateId: Scalars['ID'], platformId: Scalars['ID']} })
    platformTemplateDelete?: { __args: {id: Scalars['ID']} }
    organizationSubscriptionItemsUpdate?: { __args: {items: OrganizationSubscriptionItemUpdateInput[], coupon?: (Scalars['String'] | null), referral?: (Scalars['String'] | null)} }
    organizationSkillRatingsRegisterMatch?: (OrganizationSkillRatingsRegisterMatchPlayerGenqlSelection & { __args: {organizationSkillRatingId: Scalars['ID'], input: OrganizationSkillRatingsRegisterMatchInput} })
    organizationSkillRatingCreate?: (OrganizationSkillRatingGenqlSelection & { __args: {input: OrganizationSkillRatingCreateInput} })
    organizationSkillRatingUpdate?: (OrganizationSkillRatingGenqlSelection & { __args: {id: Scalars['ID'], input: OrganizationSkillRatingUpdateInput} })
    organizationSkillRatingDelete?: { __args: {id: Scalars['ID']} }
    /** Create a new event */
    eventCreate?: (EventGenqlSelection & { __args: {input: EventCreateInput} })
    /** Update an event */
    eventUpdate?: (EventGenqlSelection & { __args: {input: EventUpdateInput, id: Scalars['ID']} })
    /** Delete an event */
    eventDelete?: { __args: {id: Scalars['ID']} }
    eventTicketConfigurationCreate?: (EventTicketConfigurationGenqlSelection & { __args: {input: EventTicketConfigurationCreateInput} })
    eventTicketConfigurationUpdate?: (EventTicketConfigurationGenqlSelection & { __args: {ticketConfigurationId: Scalars['ID'], input: EventTicketConfigurationUpdateInput} })
    eventTicketConfigurationDelete?: (EventTicketConfigurationGenqlSelection & { __args: {ticketConfigurationId: Scalars['ID']} })
    eventReservationUpdateStatus?: (EventReservationGenqlSelection & { __args: {reservationId: Scalars['ID'], status: EventReservationStatus, confirmPaymentRefundOrCancel?: (Scalars['Boolean'] | null)} })
    eventReservationConfirmPresence?: (EventReservationGenqlSelection & { __args: {eventId: Scalars['ID'], confirmed: Scalars['Boolean']} })
    eventReservationValidateAndPay?: (EventReservationValidateAndPayGenqlSelection & { __args: {eventId: Scalars['ID'], options: EventReservationValidateAndPayInput, ticketConfigurations?: (EventReservationTicketConfigurationInput[] | null)} })
    eventReservationCreate?: (EventReservationGenqlSelection & { __args: {eventId: Scalars['ID']} })
    eventReservationUpdateTickets?: (EventReservationGenqlSelection & { __args: {reservationId: Scalars['ID'], input: EventReservationUpdateTicketsInput} })
    eventReservationStartRegistrationSession?: (EventReservationGenqlSelection & { __args: {eventId: Scalars['ID'], input: EventReservationRegisterTicketsInput} })
    eventReservationCancel?: (EventReservationGenqlSelection & { __args: {reservationId: Scalars['ID']} })
    eventVenueRequestImageUpdate?: (PresignedUrlGenqlSelection & { __args: {id: Scalars['ID'], size: Scalars['Float']} })
    eventVenueValidateImage?: (EventVenueGenqlSelection & { __args: {id: Scalars['ID']} })
    eventVenueCreate?: (EventVenueGenqlSelection & { __args: {input: EventVenueCreateInput} })
    eventVenueUpdate?: (EventVenueGenqlSelection & { __args: {id: Scalars['ID'], input: EventVenueUpdateInput} })
    eventVenueDelete?: (EventVenueGenqlSelection & { __args: {id: Scalars['ID']} })
    eventVenueSeatsUpdate?: (EventVenueSeatsUpdateResultGenqlSelection & { __args: {venueId: Scalars['ID'], input: EventVenueSeatsUpdateInput} })
    eventVenueSeatTypeCreate?: (EventVenueSeatTypeGenqlSelection & { __args: {venueId: Scalars['ID'], input: EventVenueSeatTypeCreateInput} })
    eventVenueSeatTypeUpdate?: (EventVenueSeatTypeGenqlSelection & { __args: {id: Scalars['ID'], input: EventVenueSeatTypeUpdateInput} })
    eventVenueSeatTypeDelete?: (EventVenueSeatTypeGenqlSelection & { __args: {id: Scalars['ID']} })
    organizationPaymentCollectionConfigurationCreateOrUpdateAccount?: boolean | number
    emailSent?: { __args: {fromTemplate?: (EmailSentFromTemplateInput | null), fromCustom?: (EmailSentFromCustomInput | null)} } | boolean | number
    emailConfigurationUpdate?: (EmailConfigurationGenqlSelection & { __args: {input: EmailConfigurationInput} })
    emailTemplateCreate?: (EmailTemplateGenqlSelection & { __args: {input: EmailTemplateCreateInput} })
    emailTemplateUpdate?: (EmailTemplateGenqlSelection & { __args: {id: Scalars['ID'], input: EmailTemplateUpdateInput} })
    emailTemplateDelete?: (EmailTemplateGenqlSelection & { __args: {id: Scalars['ID']} })
    userGroupInvite?: (UserGroupMemberGenqlSelection & { __args: {groupId: Scalars['ID'], playerId: Scalars['ID']} })
    userGroupUpdateInvite?: (UserGroupMemberGenqlSelection & { __args: {groupId: Scalars['ID'], status: UserGroupMemberStatus} })
    userGroupDeleteInvite?: (UserGroupMemberGenqlSelection & { __args: {groupId: Scalars['ID'], 
    /** Used by manager of the group to delete the invite of a player */
    playerId?: (Scalars['ID'] | null)} })
    shopCreate?: (ShopGenqlSelection & { __args: {input: ShopCreateInput} })
    shopUpdate?: (ShopGenqlSelection & { __args: {id: Scalars['ID'], input: ShopUpdateInput} })
    shopDelete?: (ShopGenqlSelection & { __args: {id: Scalars['ID']} })
    shopCategoryCreate?: (ShopCategoryGenqlSelection & { __args: {input: ShopCategoryCreateInput} })
    shopCategoryUpdate?: (ShopCategoryGenqlSelection & { __args: {id: Scalars['ID'], input: ShopCategoryUpdateInput} })
    shopCategoryDelete?: (ShopCategoryGenqlSelection & { __args: {id: Scalars['ID']} })
    playerShopProductPurshase?: (PaymentUrlAndClientSecretGenqlSelection & { __args: {shopId: Scalars['ID'], paymentConfig?: (PaymentInput | null), input: PlayerShopProductPurshaseInput} })
    shopProductCreate?: (ShopProductGenqlSelection & { __args: {shopId: Scalars['ID'], input: ShopProductCreateInput} })
    shopProductUpdate?: (ShopProductGenqlSelection & { __args: {productId: Scalars['ID'], input: ShopProductUpdateInput} })
    shopProductDelete?: (ShopProductGenqlSelection & { __args: {productId: Scalars['ID']} })
    itemCreate?: (ItemGenqlSelection & { __args: {input: ItemCreateInput} })
    itemUpdate?: (ItemGenqlSelection & { __args: {id: Scalars['ID'], input: ItemUpdateInput} })
    itemDelete?: (ItemGenqlSelection & { __args: {id: Scalars['ID']} })
    playerItemsUpdate?: (PlayerItemGenqlSelection & { __args: {playerId: Scalars['ID'], input: PlayerItemsUpdateInput} })
    itemCategoryCreate?: (ItemCategoryGenqlSelection & { __args: {input: ItemCategoryCreateInput} })
    itemCategoryUpdate?: (ItemCategoryGenqlSelection & { __args: {id: Scalars['ID'], input: ItemCategoryUpdateInput} })
    itemCategoryDelete?: (ItemCategoryGenqlSelection & { __args: {id: Scalars['ID']} })
    currencyCreate?: (CurrencyGenqlSelection & { __args: {input: CurrencyCreateInput} })
    currencyUpdate?: (CurrencyGenqlSelection & { __args: {id: Scalars['ID'], input: CurrencyUpdateInput} })
    currencyDelete?: (CurrencyGenqlSelection & { __args: {id: Scalars['ID']} })
    playerCurrencyUpdate?: (PlayerCurrencyGenqlSelection & { __args: {playerId: Scalars['ID'], input: PlayerCurrencyUpdateInput[]} })
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CreateConfigurationInput {name: Scalars['String'],description: Scalars['String'],configuration: Scalars['JSONObject']}

export interface LeaderboardRegisterPlayerScoreInput {
/** The ID of the leaderboard to register the score to */
leaderboardId: Scalars['ID'],playerId: Scalars['ID'],score: Scalars['PositiveInt']}

export interface CreateLeaderboardInput {
/** The name of the leaderboard */
name: Scalars['String'],
/** The description of the leaderboard */
description: Scalars['String']}

export interface UpdateLeaderboardInput {
/** The name of the leaderboard */
name?: (Scalars['String'] | null),
/** The description of the leaderboard */
description?: (Scalars['String'] | null)}

export interface CreateLeaderboardSeasonInput {name: Scalars['String'],start: Scalars['DateTime'],end: Scalars['DateTime'],startingScore: Scalars['Float']}

export interface UpdateLeaderboardSeasonInput {name?: (Scalars['String'] | null),start?: (Scalars['DateTime'] | null),end?: (Scalars['DateTime'] | null),startingScore?: (Scalars['Float'] | null)}

export interface CreateLeaderboardSeasonBucketInput {name: Scalars['String'],minScore: Scalars['Float'],scoreCalculationType: LeaderboardScoreCalculationType}

export interface UpdateLeaderboardSeasonBucketInput {name?: (Scalars['String'] | null),minScore?: (Scalars['Float'] | null),scoreCalculationType?: (LeaderboardScoreCalculationType | null)}

export interface UpdateOrganizationInput {name: Scalars['String'],description: Scalars['String'],configuration: OrganizationConfigurationInput}

export interface OrganizationConfigurationInput {customFields: PropertyInput[]}

export interface CreateOrganizationInput {name: Scalars['String'],description: Scalars['String'],configuration: OrganizationConfigurationInput}

export interface CreateOrganizationGroupInput {name: Scalars['String'],permissions: GroupPermissionInput[]}

export interface SetOrganizationMembershipInput {userId?: (Scalars['ID'] | null),email?: (Scalars['EmailAddress'] | null),permissions?: (GroupPermissionInput[] | null),groupId?: (Scalars['ID'] | null)}

export interface DeleteOrganizationMembershipInput {userId: Scalars['ID']}

export interface CreateOrganizationIdentityProvider {enabled: Scalars['Boolean'],requiredForPlayerValidation: Scalars['Boolean'],allowLogin: Scalars['Boolean'],description: Scalars['String'],icon?: (Scalars['String'] | null),identityProviderId?: (Scalars['ID'] | null),name: Scalars['String'],oauth2Configuration?: (OAuthClientConfigurationInput | null),openidConfiguration?: (OpenidConfigurationInput | null)}

export interface OAuthClientConfigurationInput {authorizationEndpoint?: (Scalars['String'] | null),dataRetrievers: DataRetrievalConfigInput[],issuer?: (Scalars['String'] | null),providerType: IdentityProviderType,clientId: Scalars['String'],clientSecret: Scalars['String'],tokenEndpointAuthMethod?: (OauthEndpointAuthMethod | null),redirectUrl: Scalars['String'],tokenEndpoint?: (Scalars['String'] | null),authorizationUrl?: (Scalars['String'] | null)}

export interface OpenidConfigurationInput {authorizationEndpoint?: (Scalars['String'] | null),dataRetrievers: DataRetrievalConfigInput[],issuer?: (Scalars['String'] | null),providerType: IdentityProviderType,clientId: Scalars['String'],clientSecret: Scalars['String'],redirectUrl: Scalars['String']}

export interface UpdateOrganizationIdentityProvider {enabled: Scalars['Boolean'],requiredForPlayerValidation: Scalars['Boolean'],allowLogin: Scalars['Boolean'],description: Scalars['String'],icon?: (Scalars['String'] | null),name: Scalars['String'],oauth2Configuration?: (OAuthClientConfigurationInput | null),openidConfiguration?: (OpenidConfigurationInput | null)}

export interface CreateOrganizationAppInput {name: Scalars['String'],description: Scalars['String'],secret?: (Scalars['String'] | null),public?: (Scalars['Boolean'] | null),redirectUrls: Scalars['String'][],logoutRedirectUrls: Scalars['String'][],loginUrl: Scalars['String'],consentUrl: Scalars['String'],requiresConsent: Scalars['Boolean']}

export interface UpdateOrganizationAppInput {name?: (Scalars['String'] | null),description?: (Scalars['String'] | null),secret?: (Scalars['String'] | null),redirectUrls: Scalars['String'][],logoutRedirectUrls: Scalars['String'][],loginUrl: Scalars['String'],consentUrl: Scalars['String'],requiresConsent: Scalars['Boolean']}

export interface CreateWebhookInput {events: WebhookEventType[],url: Scalars['String'],description: Scalars['String'],active: Scalars['Boolean']}

export interface UpdateWebhookInput {events?: (WebhookEventType[] | null),url?: (Scalars['String'] | null),description?: (Scalars['String'] | null),active?: (Scalars['Boolean'] | null)}

export interface SetOrganizationAttachedAppInput {appId: Scalars['String'],permissions?: (GroupPermissionInput[] | null),groupId?: (Scalars['ID'] | null)}

export interface DeleteOrganizationAttachedAppInput {appId: Scalars['String']}

export interface CreatePlayerInput {username: Scalars['String'],description: Scalars['String'],ownerId?: (Scalars['ID'] | null),organizationCustomId?: (Scalars['String'] | null),customFields: PlayerCustomFieldInput[]}

export interface PlayerCustomFieldInput {property: Scalars['String'],value: Scalars['String']}

export interface UpdatePlayerInput {username?: (Scalars['String'] | null),description?: (Scalars['String'] | null),ownerId?: (Scalars['ID'] | null),organizationCustomId?: (Scalars['String'] | null),customFields?: (PlayerCustomFieldInput[] | null)}

export interface UpdateMePlayerInput {username: Scalars['String'],description: Scalars['String'],customFields: PlayerCustomFieldInput[]}

export interface CreateTournamentInput {
/** Tournament title */
title: Scalars['String'],
/** Tournament description */
description: Scalars['String'],
/** Tournament start date */
startAt?: (Scalars['DateTime'] | null),
/** Tournament end date */
endAt?: (Scalars['DateTime'] | null),
/** Tournament registrations start date */
startRegistrationsAt?: (Scalars['DateTime'] | null),
/** Tournament registrations end date */
endRegistrationsAt?: (Scalars['DateTime'] | null),
/** Tournament visibility date, the tournament will be visible from this date in the tournaments list */
visibleAt?: (Scalars['DateTime'] | null),
/** Tournament configuration */
configuration?: (UpdateTournamentConfigurationOrImportFromIdInput | null)}

export interface UpdateTournamentConfigurationOrImportFromIdInput {
/** Import configuration from a saved configuration */
fromId?: (Scalars['ID'] | null),
/** Tournament configuration */
configuration?: (UpdateTournamentConfigurationInput | null)}

export interface UpdateTournamentConfigurationInput {type?: (ConfigurationType | null),
/** Minimum team size to register to the tournament */
teamMinSize?: (Scalars['Float'] | null),
/** Maximum team size to register to the tournament */
teamMaxSize?: (Scalars['Float'] | null),
/** Maximum number of registered teams */
teamsCount?: (Scalars['Float'] | null),
/** Status of the team after registration, REGISTERED is the default state, AWAITING_FOR_PRESENCE_CONFIRMATION means that the team has been validated and is waiting for presence confirmation, AWAITING_FOR_PAYMENT means that the team has to pay to be validated */
teamStatusAfterRegistration?: (TeamStatusAfterRegistration | null),
/** Condition rules to register to the tournament */
registrationConditions?: (RegistrationConditionsInput | null),
/** Custom fields that are defined on each teams */
customFields?: (PropertyInput[] | null)}

export interface UpdateTournamentInput {
/** Tournament title */
title?: (Scalars['String'] | null),
/** Tournament description */
description?: (Scalars['String'] | null),
/** Tournament start date */
startAt?: (Scalars['DateTime'] | null),
/** Tournament end date */
endAt?: (Scalars['DateTime'] | null),
/** Tournament registrations start date */
startRegistrationsAt?: (Scalars['DateTime'] | null),
/** Tournament registrations end date */
endRegistrationsAt?: (Scalars['DateTime'] | null),
/** Tournament visibility date, the tournament will be visible from this date in the tournaments list */
visibleAt?: (Scalars['DateTime'] | null),
/** Tournament configuration */
configuration?: (UpdateTournamentConfigurationOrImportFromIdInput | null)}

export interface CreateTournamentStepInput {name: Scalars['String'],description: Scalars['String'],order: Scalars['Float'],type: StepType,properties?: (PropertyValueInput[] | null)}


/** automaticSeeding or manualSeeding must be set */
export interface SeedingInput {automaticSeeding?: (AutomaticSeedingInput | null),manualSeeding?: (ManualSeedingInput | null)}

export interface AutomaticSeedingInput {seedingMechanism: SeedingMechanism,groupRepartitionMechanism: GroupRepartitionMechanism,teams: Scalars['ID'][]}

export interface ManualSeedingInput {groups: ManualSeedingGroupInput[]}

export interface ManualSeedingGroupInput {group: Scalars['ID'],teams: Scalars['ID'][]}

export interface UpdateMatchScoreInput {teamId: Scalars['ID'],variables?: (UpdateTournamentMatchScoreVariablesInput[] | null),forcedScoreValue?: (Scalars['Float'] | null),status?: (MatchScoreStatus | null)}

export interface UpdateTournamentMatchScoreVariablesInput {formulaName: Scalars['String'],value: Scalars['Float']}

export interface RegisterCustomTeamsInput {customTeams: RegisterCustomTeamInput[]}

export interface RegisterCustomTeamInput {name: Scalars['String'],tag: Scalars['String'],customFields?: (PropertyValueInput[] | null),fromExistingTeamId?: (Scalars['ID'] | null),members?: (CustomTeamMemberInput[] | null),status: TournamentTeamStatus}

export interface CustomTeamMemberInput {
/** An existing player profile ID to use for this team, you have to set either playerId or player, not both */
playerId?: (Scalars['ID'] | null),
/** A custom created player, will create a real player profile if set. You should set either player or playerId, not both */
player?: (CreatePlayerInput | null)}

export interface RegisterTournamentTeamInput {name: Scalars['String'],tag: Scalars['String'],customFields?: (PropertyValueInput[] | null),fromExistingTeamId?: (Scalars['ID'] | null)}

export interface UpdateTournamentTeamInput {name: Scalars['String'],tag: Scalars['String'],customFields?: (PropertyValueInput[] | null)}

export interface TournamentAdminUpsertInput {tournamentId: Scalars['ID'],accountId: Scalars['ID'],permissions: TournamentAdminPermissions[]}

export interface TournamentAdminDeleteInput {tournamentId: Scalars['ID'],accountId: Scalars['ID']}

export interface PlatformCdnFileCreateInput {name: Scalars['String'],type: PlatformCdnFileType,config?: (PlatformCdnFileConfigsInput | null)}

export interface PlatformFileUpdateInput {config?: (PlatformCdnFileConfigsInput | null)}

export interface CreatePlatformInput {name: Scalars['String'],configuration?: (PlatformConfigurationInput | null),appId?: (Scalars['String'] | null),subdomain: Scalars['String']}

export interface UpdatePlatformInput {name: Scalars['String'],configuration?: (PlatformConfigurationInput | null),appId?: (Scalars['String'] | null)}

export interface CreatePlatformTemplateInput {name: Scalars['String'],description: Scalars['String'],screenshotUrl: Scalars['URL'],public: Scalars['Boolean']}

export interface UpdatePlatformTemplateInput {name?: (Scalars['String'] | null),description?: (Scalars['String'] | null),screenshotUrl?: (Scalars['URL'] | null),public?: (Scalars['Boolean'] | null)}

export interface OrganizationSubscriptionItemUpdateInput {subscriptionItemId: Scalars['ID'],count: Scalars['Float']}

export interface OrganizationSkillRatingsRegisterMatchInput {teams: OrganizationSkillRatingsRegisterMatchTeamInput[]}

export interface OrganizationSkillRatingsRegisterMatchTeamInput {players: Scalars['ID'][]}

export interface OrganizationSkillRatingCreateInput {name: Scalars['String'],description: Scalars['String'],type: SkillRatingType,configuration: SkillRatingConfigurationInput}

export interface OrganizationSkillRatingUpdateInput {name?: (Scalars['String'] | null),description?: (Scalars['String'] | null),type?: (SkillRatingType | null),configuration?: (SkillRatingConfigurationInput | null)}

export interface EventCreateInput {title: Scalars['String'],description: Scalars['String'],startAt?: (Scalars['DateTime'] | null),endAt?: (Scalars['DateTime'] | null),startRegistrationsAt?: (Scalars['DateTime'] | null),endRegistrationsAt?: (Scalars['DateTime'] | null),visibleAt?: (Scalars['DateTime'] | null),configuration?: (EventConfigurationInput | null),eventVenueId?: (Scalars['ID'] | null)}

export interface EventUpdateInput {title?: (Scalars['String'] | null),description?: (Scalars['String'] | null),startAt?: (Scalars['DateTime'] | null),endAt?: (Scalars['DateTime'] | null),startRegistrationsAt?: (Scalars['DateTime'] | null),endRegistrationsAt?: (Scalars['DateTime'] | null),visibleAt?: (Scalars['DateTime'] | null),configuration?: (EventConfigurationInput | null),eventVenueId?: (Scalars['ID'] | null)}

export interface EventTicketConfigurationCreateInput {name: Scalars['String'],description: Scalars['String'],price: Scalars['Float'],currency: ShopCurrencies,maxCount: Scalars['Float'],buyable: Scalars['Boolean'],eventId: Scalars['ID'],seatTypeId?: (Scalars['ID'] | null),configuration?: (EventTicketConfigurationConfigurationInput | null)}

export interface EventTicketConfigurationUpdateInput {name?: (Scalars['String'] | null),description?: (Scalars['String'] | null),price?: (Scalars['Float'] | null),currency?: (ShopCurrencies | null),maxCount?: (Scalars['Float'] | null),buyable?: (Scalars['Boolean'] | null),seatTypeId?: (Scalars['ID'] | null),configuration?: (EventTicketConfigurationConfigurationInput | null)}

export interface EventReservationValidateAndPayInput {
/** The URL to which Stripe should send customers when payment or setup is complete. This parameter is not allowed if uiMode is "embedded". */
successUrl?: (Scalars['String'] | null),
/** If set, Checkout displays a back button and customers will be directed to this URL if they decide to cancel payment and return to your website. This parameter is not allowed if uiMode is 'embedded'. */
canceledUrl?: (Scalars['String'] | null),
/** The URL to redirect your customer back to after they authenticate or cancel their payment on the payment method's app or site. This parameter is required if uiMode is 'embedded'. */
returnUrl?: (Scalars['String'] | null),uiMode?: (StripeUiMode | null)}

export interface EventReservationTicketConfigurationInput {ticketId: Scalars['ID'],customFields: PropertyValueInput[]}

export interface EventReservationUpdateTicketsInput {ticketIdsToRelease?: (Scalars['ID'][] | null),ticketIdsToAdd?: (EventReservationRegisterTicketInput[] | null),ticketConfigurations?: (EventReservationTicketConfigurationInput[] | null)}

export interface EventReservationRegisterTicketInput {ticketConfigurationId: Scalars['ID'],quantity: Scalars['Float'],reservedSeats: Scalars['ID'][]}

export interface EventReservationRegisterTicketsInput {tickets: EventReservationRegisterTicketInput[]}

export interface EventVenueCreateInput {name: Scalars['String'],description: Scalars['String'],address: Scalars['String'],city: Scalars['String'],state: Scalars['String'],country: Scalars['String'],postalCode: Scalars['String']}

export interface EventVenueUpdateInput {name?: (Scalars['String'] | null),description?: (Scalars['String'] | null),address?: (Scalars['String'] | null),city?: (Scalars['String'] | null),state?: (Scalars['String'] | null),country?: (Scalars['String'] | null),postalCode?: (Scalars['String'] | null)}

export interface EventVenueSeatsUpdateInput {updateSeats?: (EventVenueSeatUpdateInput[] | null),createSeats?: (EventVenueSeatCreateInput[] | null),deleteSeats?: (Scalars['ID'][] | null)}

export interface EventVenueSeatUpdateInput {name?: (Scalars['String'] | null),configuration?: (EventVenueSeatConfigurationInput | null),seatTypeId?: (Scalars['ID'] | null),id: Scalars['ID']}

export interface EventVenueSeatCreateInput {name: Scalars['String'],configuration: EventVenueSeatConfigurationInput,seatTypeId: Scalars['ID']}

export interface EventVenueSeatTypeCreateInput {name: Scalars['String'],description: Scalars['String'],configuration: EventVenueSeatTypeConfigurationInput}

export interface EventVenueSeatTypeUpdateInput {name?: (Scalars['String'] | null),description?: (Scalars['String'] | null),configuration?: (EventVenueSeatTypeConfigurationInput | null)}

export interface EmailSentFromTemplateInput {triggerEvent: EmailTriggerEvents,playerIds?: (Scalars['ID'] | null),variables: PropertyValueInput[]}

export interface EmailSentFromCustomInput {emailField: PlayerFieldInput,playerIds?: (Scalars['ID'] | null),subject: Scalars['String'],body: Scalars['String']}

export interface EmailTemplateCreateInput {triggerEvent: EmailTriggerEvents,default: Scalars['Boolean'],name: Scalars['String'],title: Scalars['String'],contents: Scalars['String']}

export interface EmailTemplateUpdateInput {triggerEvent?: (EmailTriggerEvents | null),default?: (Scalars['Boolean'] | null),name?: (Scalars['String'] | null),title?: (Scalars['String'] | null),contents?: (Scalars['String'] | null)}

export interface ShopCreateInput {externalId?: (Scalars['String'] | null),name: Scalars['String'],description: Scalars['String'],metadata: PropertyValueInput[]}

export interface ShopUpdateInput {externalId?: (Scalars['String'] | null),name?: (Scalars['String'] | null),description?: (Scalars['String'] | null),metadata?: (PropertyValueInput[] | null)}

export interface ShopCategoryCreateInput {externalId?: (Scalars['String'] | null),name: Scalars['String'],description: Scalars['String'],metadata: PropertyValueInput[],shopId: Scalars['ID']}

export interface ShopCategoryUpdateInput {externalId?: (Scalars['String'] | null),name?: (Scalars['String'] | null),description?: (Scalars['String'] | null),metadata?: (PropertyValueInput[] | null)}

export interface PaymentInput {
/** The URL to which Stripe should send customers when payment or setup is complete. This parameter is not allowed if uiMode is "embedded". */
successUrl?: (Scalars['String'] | null),
/** If set, Checkout displays a back button and customers will be directed to this URL if they decide to cancel payment and return to your website. This parameter is not allowed if uiMode is 'embedded'. */
canceledUrl?: (Scalars['String'] | null),
/** The URL to redirect your customer back to after they authenticate or cancel their payment on the payment method's app or site. This parameter is required if uiMode is 'embedded'. */
returnUrl?: (Scalars['String'] | null),uiMode?: (StripeUiMode | null)}

export interface PlayerShopProductPurshaseInput {items: PlayerShopProductPurshaseItemInput[]}

export interface PlayerShopProductPurshaseItemInput {shopProductId: Scalars['ID'],quantity: Scalars['Int']}

export interface ShopProductCreateInput {name: Scalars['String'],externalId?: (Scalars['String'] | null),description: Scalars['String'],categoryId?: (Scalars['ID'] | null),price?: (Scalars['Float'] | null),configuration: ShopProductConfigurationInput,metadata: PropertyValueInput[],visibleAt?: (Scalars['DateTime'] | null),currency: ShopCurrencies,items: ShopItemQuantityInput[],currencyPrices: EntityQuantityInput[]}

export interface ShopProductUpdateInput {name?: (Scalars['String'] | null),externalId?: (Scalars['String'] | null),description?: (Scalars['String'] | null),categoryId?: (Scalars['ID'] | null),price?: (Scalars['Float'] | null),configuration?: (ShopProductConfigurationInput | null),metadata?: (PropertyValueInput[] | null),visibleAt?: (Scalars['DateTime'] | null),currency?: (ShopCurrencies | null),items?: (ShopItemQuantityInput[] | null),currencyPrices?: (EntityQuantityInput[] | null)}

export interface ItemCreateInput {name: Scalars['String'],externalId?: (Scalars['String'] | null),description: Scalars['String'],metadata: PropertyValueInput[],categoryId?: (Scalars['ID'] | null)}

export interface ItemUpdateInput {name?: (Scalars['String'] | null),externalId?: (Scalars['String'] | null),description?: (Scalars['String'] | null),metadata?: (PropertyValueInput[] | null),categoryId?: (Scalars['ID'] | null)}

export interface PlayerItemsUpdateInput {items: PlayerItemsUpdateItemInput[]}

export interface PlayerItemsUpdateItemInput {itemId: Scalars['ID'],set?: (Scalars['Int'] | null),add?: (Scalars['Int'] | null),remove?: (Scalars['Int'] | null)}

export interface ItemCategoryCreateInput {name: Scalars['String'],externalId?: (Scalars['String'] | null),description: Scalars['String'],metadata: PropertyValueInput[]}

export interface ItemCategoryUpdateInput {name?: (Scalars['String'] | null),externalId?: (Scalars['String'] | null),description?: (Scalars['String'] | null),metadata?: (PropertyValueInput[] | null)}

export interface CurrencyCreateInput {symbol: Scalars['String'],name: Scalars['String'],externalId?: (Scalars['String'] | null),description: Scalars['String'],hidden: Scalars['Boolean'],metadata: PropertyValueInput[]}

export interface CurrencyUpdateInput {symbol?: (Scalars['String'] | null),name?: (Scalars['String'] | null),externalId?: (Scalars['String'] | null),description?: (Scalars['String'] | null),hidden?: (Scalars['Boolean'] | null),metadata?: (PropertyValueInput[] | null)}

export interface PlayerCurrencyUpdateInput {items: PlayerCurrencyUpdateItemInput[]}

export interface PlayerCurrencyUpdateItemInput {currencyId: Scalars['ID'],forceBalance?: (Scalars['Float'] | null),add?: (Scalars['Float'] | null),remove?: (Scalars['Float'] | null)}

export interface SubscriptionGenqlSelection{
    presenceUserConnected?: UsersConnectedEventGenqlSelection
    presenceUserDisconnected?: UsersDisconnectedEventGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


    const KeyMapping_possibleTypes: string[] = ['KeyMapping']
    export const isKeyMapping = (obj?: { __typename?: any } | null): obj is KeyMapping => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isKeyMapping"')
      return KeyMapping_possibleTypes.includes(obj.__typename)
    }
    


    const MappingConfiguration_possibleTypes: string[] = ['MappingConfiguration']
    export const isMappingConfiguration = (obj?: { __typename?: any } | null): obj is MappingConfiguration => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMappingConfiguration"')
      return MappingConfiguration_possibleTypes.includes(obj.__typename)
    }
    


    const Header_possibleTypes: string[] = ['Header']
    export const isHeader = (obj?: { __typename?: any } | null): obj is Header => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isHeader"')
      return Header_possibleTypes.includes(obj.__typename)
    }
    


    const DataRetrievalConfig_possibleTypes: string[] = ['DataRetrievalConfig']
    export const isDataRetrievalConfig = (obj?: { __typename?: any } | null): obj is DataRetrievalConfig => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isDataRetrievalConfig"')
      return DataRetrievalConfig_possibleTypes.includes(obj.__typename)
    }
    


    const ResponsePageInfo_possibleTypes: string[] = ['ResponsePageInfo']
    export const isResponsePageInfo = (obj?: { __typename?: any } | null): obj is ResponsePageInfo => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isResponsePageInfo"')
      return ResponsePageInfo_possibleTypes.includes(obj.__typename)
    }
    


    const OrganizationGroup_possibleTypes: string[] = ['OrganizationGroup']
    export const isOrganizationGroup = (obj?: { __typename?: any } | null): obj is OrganizationGroup => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isOrganizationGroup"')
      return OrganizationGroup_possibleTypes.includes(obj.__typename)
    }
    


    const Permission_possibleTypes: string[] = ['Permission']
    export const isPermission = (obj?: { __typename?: any } | null): obj is Permission => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPermission"')
      return Permission_possibleTypes.includes(obj.__typename)
    }
    


    const GroupPermission_possibleTypes: string[] = ['GroupPermission']
    export const isGroupPermission = (obj?: { __typename?: any } | null): obj is GroupPermission => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGroupPermission"')
      return GroupPermission_possibleTypes.includes(obj.__typename)
    }
    


    const Permissions_possibleTypes: string[] = ['Permissions']
    export const isPermissions = (obj?: { __typename?: any } | null): obj is Permissions => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPermissions"')
      return Permissions_possibleTypes.includes(obj.__typename)
    }
    


    const OrganizationGroups_possibleTypes: string[] = ['OrganizationGroups']
    export const isOrganizationGroups = (obj?: { __typename?: any } | null): obj is OrganizationGroups => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isOrganizationGroups"')
      return OrganizationGroups_possibleTypes.includes(obj.__typename)
    }
    


    const OrganizationGroupEdge_possibleTypes: string[] = ['OrganizationGroupEdge']
    export const isOrganizationGroupEdge = (obj?: { __typename?: any } | null): obj is OrganizationGroupEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isOrganizationGroupEdge"')
      return OrganizationGroupEdge_possibleTypes.includes(obj.__typename)
    }
    


    const OrganizationMember_possibleTypes: string[] = ['OrganizationMember']
    export const isOrganizationMember = (obj?: { __typename?: any } | null): obj is OrganizationMember => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isOrganizationMember"')
      return OrganizationMember_possibleTypes.includes(obj.__typename)
    }
    


    const OrganizationMembers_possibleTypes: string[] = ['OrganizationMembers']
    export const isOrganizationMembers = (obj?: { __typename?: any } | null): obj is OrganizationMembers => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isOrganizationMembers"')
      return OrganizationMembers_possibleTypes.includes(obj.__typename)
    }
    


    const OrganizationMemberEdge_possibleTypes: string[] = ['OrganizationMemberEdge']
    export const isOrganizationMemberEdge = (obj?: { __typename?: any } | null): obj is OrganizationMemberEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isOrganizationMemberEdge"')
      return OrganizationMemberEdge_possibleTypes.includes(obj.__typename)
    }
    


    const Property_possibleTypes: string[] = ['Property']
    export const isProperty = (obj?: { __typename?: any } | null): obj is Property => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isProperty"')
      return Property_possibleTypes.includes(obj.__typename)
    }
    


    const PropertyConfigWithValue_possibleTypes: string[] = ['PropertyConfigWithValue']
    export const isPropertyConfigWithValue = (obj?: { __typename?: any } | null): obj is PropertyConfigWithValue => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPropertyConfigWithValue"')
      return PropertyConfigWithValue_possibleTypes.includes(obj.__typename)
    }
    


    const PropertyValue_possibleTypes: string[] = ['PropertyValue']
    export const isPropertyValue = (obj?: { __typename?: any } | null): obj is PropertyValue => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPropertyValue"')
      return PropertyValue_possibleTypes.includes(obj.__typename)
    }
    


    const MatchVariable_possibleTypes: string[] = ['MatchVariable']
    export const isMatchVariable = (obj?: { __typename?: any } | null): obj is MatchVariable => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMatchVariable"')
      return MatchVariable_possibleTypes.includes(obj.__typename)
    }
    


    const MatchConfiguration_possibleTypes: string[] = ['MatchConfiguration']
    export const isMatchConfiguration = (obj?: { __typename?: any } | null): obj is MatchConfiguration => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMatchConfiguration"')
      return MatchConfiguration_possibleTypes.includes(obj.__typename)
    }
    


    const GameConfiguration_possibleTypes: string[] = ['GameConfiguration']
    export const isGameConfiguration = (obj?: { __typename?: any } | null): obj is GameConfiguration => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGameConfiguration"')
      return GameConfiguration_possibleTypes.includes(obj.__typename)
    }
    


    const Variable_possibleTypes: string[] = ['Variable']
    export const isVariable = (obj?: { __typename?: any } | null): obj is Variable => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isVariable"')
      return Variable_possibleTypes.includes(obj.__typename)
    }
    


    const RoundConfiguration_possibleTypes: string[] = ['RoundConfiguration']
    export const isRoundConfiguration = (obj?: { __typename?: any } | null): obj is RoundConfiguration => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRoundConfiguration"')
      return RoundConfiguration_possibleTypes.includes(obj.__typename)
    }
    


    const GroupConfiguration_possibleTypes: string[] = ['GroupConfiguration']
    export const isGroupConfiguration = (obj?: { __typename?: any } | null): obj is GroupConfiguration => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGroupConfiguration"')
      return GroupConfiguration_possibleTypes.includes(obj.__typename)
    }
    


    const StepConfiguration_possibleTypes: string[] = ['StepConfiguration']
    export const isStepConfiguration = (obj?: { __typename?: any } | null): obj is StepConfiguration => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isStepConfiguration"')
      return StepConfiguration_possibleTypes.includes(obj.__typename)
    }
    


    const NumericCondition_possibleTypes: string[] = ['NumericCondition']
    export const isNumericCondition = (obj?: { __typename?: any } | null): obj is NumericCondition => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isNumericCondition"')
      return NumericCondition_possibleTypes.includes(obj.__typename)
    }
    


    const TeamNumericCondition_possibleTypes: string[] = ['TeamNumericCondition']
    export const isTeamNumericCondition = (obj?: { __typename?: any } | null): obj is TeamNumericCondition => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTeamNumericCondition"')
      return TeamNumericCondition_possibleTypes.includes(obj.__typename)
    }
    


    const StringCondition_possibleTypes: string[] = ['StringCondition']
    export const isStringCondition = (obj?: { __typename?: any } | null): obj is StringCondition => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isStringCondition"')
      return StringCondition_possibleTypes.includes(obj.__typename)
    }
    


    const Condition_possibleTypes: string[] = ['Condition']
    export const isCondition = (obj?: { __typename?: any } | null): obj is Condition => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCondition"')
      return Condition_possibleTypes.includes(obj.__typename)
    }
    


    const PlayerField_possibleTypes: string[] = ['PlayerField']
    export const isPlayerField = (obj?: { __typename?: any } | null): obj is PlayerField => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPlayerField"')
      return PlayerField_possibleTypes.includes(obj.__typename)
    }
    


    const PlayerCondition_possibleTypes: string[] = ['PlayerCondition']
    export const isPlayerCondition = (obj?: { __typename?: any } | null): obj is PlayerCondition => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPlayerCondition"')
      return PlayerCondition_possibleTypes.includes(obj.__typename)
    }
    


    const TeamCondition_possibleTypes: string[] = ['TeamCondition']
    export const isTeamCondition = (obj?: { __typename?: any } | null): obj is TeamCondition => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTeamCondition"')
      return TeamCondition_possibleTypes.includes(obj.__typename)
    }
    


    const RegistrationConditions_possibleTypes: string[] = ['RegistrationConditions']
    export const isRegistrationConditions = (obj?: { __typename?: any } | null): obj is RegistrationConditions => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRegistrationConditions"')
      return RegistrationConditions_possibleTypes.includes(obj.__typename)
    }
    


    const TournamentConfiguration_possibleTypes: string[] = ['TournamentConfiguration']
    export const isTournamentConfiguration = (obj?: { __typename?: any } | null): obj is TournamentConfiguration => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTournamentConfiguration"')
      return TournamentConfiguration_possibleTypes.includes(obj.__typename)
    }
    


    const Tournament_possibleTypes: string[] = ['Tournament']
    export const isTournament = (obj?: { __typename?: any } | null): obj is Tournament => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTournament"')
      return Tournament_possibleTypes.includes(obj.__typename)
    }
    


    const Limit_possibleTypes: string[] = ['Limit']
    export const isLimit = (obj?: { __typename?: any } | null): obj is Limit => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isLimit"')
      return Limit_possibleTypes.includes(obj.__typename)
    }
    


    const Limits_possibleTypes: string[] = ['Limits']
    export const isLimits = (obj?: { __typename?: any } | null): obj is Limits => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isLimits"')
      return Limits_possibleTypes.includes(obj.__typename)
    }
    


    const OrganizationLimit_possibleTypes: string[] = ['OrganizationLimit']
    export const isOrganizationLimit = (obj?: { __typename?: any } | null): obj is OrganizationLimit => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isOrganizationLimit"')
      return OrganizationLimit_possibleTypes.includes(obj.__typename)
    }
    


    const OrganizationLimits_possibleTypes: string[] = ['OrganizationLimits']
    export const isOrganizationLimits = (obj?: { __typename?: any } | null): obj is OrganizationLimits => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isOrganizationLimits"')
      return OrganizationLimits_possibleTypes.includes(obj.__typename)
    }
    


    const OrganizationConfiguration_possibleTypes: string[] = ['OrganizationConfiguration']
    export const isOrganizationConfiguration = (obj?: { __typename?: any } | null): obj is OrganizationConfiguration => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isOrganizationConfiguration"')
      return OrganizationConfiguration_possibleTypes.includes(obj.__typename)
    }
    


    const PublicOrganizationIdentityProvider_possibleTypes: string[] = ['PublicOrganizationIdentityProvider']
    export const isPublicOrganizationIdentityProvider = (obj?: { __typename?: any } | null): obj is PublicOrganizationIdentityProvider => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPublicOrganizationIdentityProvider"')
      return PublicOrganizationIdentityProvider_possibleTypes.includes(obj.__typename)
    }
    


    const Organization_possibleTypes: string[] = ['Organization']
    export const isOrganization = (obj?: { __typename?: any } | null): obj is Organization => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isOrganization"')
      return Organization_possibleTypes.includes(obj.__typename)
    }
    


    const AccountIdentityProperty_possibleTypes: string[] = ['AccountIdentityProperty']
    export const isAccountIdentityProperty = (obj?: { __typename?: any } | null): obj is AccountIdentityProperty => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAccountIdentityProperty"')
      return AccountIdentityProperty_possibleTypes.includes(obj.__typename)
    }
    


    const AccountIdentity_possibleTypes: string[] = ['AccountIdentity']
    export const isAccountIdentity = (obj?: { __typename?: any } | null): obj is AccountIdentity => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAccountIdentity"')
      return AccountIdentity_possibleTypes.includes(obj.__typename)
    }
    


    const Player_possibleTypes: string[] = ['Player']
    export const isPlayer = (obj?: { __typename?: any } | null): obj is Player => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPlayer"')
      return Player_possibleTypes.includes(obj.__typename)
    }
    


    const Players_possibleTypes: string[] = ['Players']
    export const isPlayers = (obj?: { __typename?: any } | null): obj is Players => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPlayers"')
      return Players_possibleTypes.includes(obj.__typename)
    }
    


    const PlayerEdge_possibleTypes: string[] = ['PlayerEdge']
    export const isPlayerEdge = (obj?: { __typename?: any } | null): obj is PlayerEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPlayerEdge"')
      return PlayerEdge_possibleTypes.includes(obj.__typename)
    }
    


    const Account_possibleTypes: string[] = ['Account']
    export const isAccount = (obj?: { __typename?: any } | null): obj is Account => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAccount"')
      return Account_possibleTypes.includes(obj.__typename)
    }
    


    const Configuration_possibleTypes: string[] = ['Configuration']
    export const isConfiguration = (obj?: { __typename?: any } | null): obj is Configuration => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isConfiguration"')
      return Configuration_possibleTypes.includes(obj.__typename)
    }
    


    const ConfigurationProperties_possibleTypes: string[] = ['StepConfiguration','TournamentConfiguration']
    export const isConfigurationProperties = (obj?: { __typename?: any } | null): obj is ConfigurationProperties => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isConfigurationProperties"')
      return ConfigurationProperties_possibleTypes.includes(obj.__typename)
    }
    


    const LeaderboardSeasonBucketScore_possibleTypes: string[] = ['LeaderboardSeasonBucketScore']
    export const isLeaderboardSeasonBucketScore = (obj?: { __typename?: any } | null): obj is LeaderboardSeasonBucketScore => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isLeaderboardSeasonBucketScore"')
      return LeaderboardSeasonBucketScore_possibleTypes.includes(obj.__typename)
    }
    


    const LeaderboardSeasonBucketScores_possibleTypes: string[] = ['LeaderboardSeasonBucketScores']
    export const isLeaderboardSeasonBucketScores = (obj?: { __typename?: any } | null): obj is LeaderboardSeasonBucketScores => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isLeaderboardSeasonBucketScores"')
      return LeaderboardSeasonBucketScores_possibleTypes.includes(obj.__typename)
    }
    


    const LeaderboardSeasonBucketScoreEdge_possibleTypes: string[] = ['LeaderboardSeasonBucketScoreEdge']
    export const isLeaderboardSeasonBucketScoreEdge = (obj?: { __typename?: any } | null): obj is LeaderboardSeasonBucketScoreEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isLeaderboardSeasonBucketScoreEdge"')
      return LeaderboardSeasonBucketScoreEdge_possibleTypes.includes(obj.__typename)
    }
    


    const Leaderboard_possibleTypes: string[] = ['Leaderboard']
    export const isLeaderboard = (obj?: { __typename?: any } | null): obj is Leaderboard => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isLeaderboard"')
      return Leaderboard_possibleTypes.includes(obj.__typename)
    }
    


    const Leaderboards_possibleTypes: string[] = ['Leaderboards']
    export const isLeaderboards = (obj?: { __typename?: any } | null): obj is Leaderboards => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isLeaderboards"')
      return Leaderboards_possibleTypes.includes(obj.__typename)
    }
    


    const LeaderboardEdge_possibleTypes: string[] = ['LeaderboardEdge']
    export const isLeaderboardEdge = (obj?: { __typename?: any } | null): obj is LeaderboardEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isLeaderboardEdge"')
      return LeaderboardEdge_possibleTypes.includes(obj.__typename)
    }
    


    const LeaderboardSeason_possibleTypes: string[] = ['LeaderboardSeason']
    export const isLeaderboardSeason = (obj?: { __typename?: any } | null): obj is LeaderboardSeason => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isLeaderboardSeason"')
      return LeaderboardSeason_possibleTypes.includes(obj.__typename)
    }
    


    const LeaderboardSeasons_possibleTypes: string[] = ['LeaderboardSeasons']
    export const isLeaderboardSeasons = (obj?: { __typename?: any } | null): obj is LeaderboardSeasons => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isLeaderboardSeasons"')
      return LeaderboardSeasons_possibleTypes.includes(obj.__typename)
    }
    


    const LeaderboardSeasonEdge_possibleTypes: string[] = ['LeaderboardSeasonEdge']
    export const isLeaderboardSeasonEdge = (obj?: { __typename?: any } | null): obj is LeaderboardSeasonEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isLeaderboardSeasonEdge"')
      return LeaderboardSeasonEdge_possibleTypes.includes(obj.__typename)
    }
    


    const LeaderboardSeasonBucket_possibleTypes: string[] = ['LeaderboardSeasonBucket']
    export const isLeaderboardSeasonBucket = (obj?: { __typename?: any } | null): obj is LeaderboardSeasonBucket => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isLeaderboardSeasonBucket"')
      return LeaderboardSeasonBucket_possibleTypes.includes(obj.__typename)
    }
    


    const LeaderboardSeasonBuckets_possibleTypes: string[] = ['LeaderboardSeasonBuckets']
    export const isLeaderboardSeasonBuckets = (obj?: { __typename?: any } | null): obj is LeaderboardSeasonBuckets => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isLeaderboardSeasonBuckets"')
      return LeaderboardSeasonBuckets_possibleTypes.includes(obj.__typename)
    }
    


    const LeaderboardSeasonBucketEdge_possibleTypes: string[] = ['LeaderboardSeasonBucketEdge']
    export const isLeaderboardSeasonBucketEdge = (obj?: { __typename?: any } | null): obj is LeaderboardSeasonBucketEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isLeaderboardSeasonBucketEdge"')
      return LeaderboardSeasonBucketEdge_possibleTypes.includes(obj.__typename)
    }
    


    const CustomDomainSslValidationRecord_possibleTypes: string[] = ['CustomDomainSslValidationRecord']
    export const isCustomDomainSslValidationRecord = (obj?: { __typename?: any } | null): obj is CustomDomainSslValidationRecord => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCustomDomainSslValidationRecord"')
      return CustomDomainSslValidationRecord_possibleTypes.includes(obj.__typename)
    }
    


    const CustomDomainSslValidationError_possibleTypes: string[] = ['CustomDomainSslValidationError']
    export const isCustomDomainSslValidationError = (obj?: { __typename?: any } | null): obj is CustomDomainSslValidationError => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCustomDomainSslValidationError"')
      return CustomDomainSslValidationError_possibleTypes.includes(obj.__typename)
    }
    


    const CustomDomainSsl_possibleTypes: string[] = ['CustomDomainSsl']
    export const isCustomDomainSsl = (obj?: { __typename?: any } | null): obj is CustomDomainSsl => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCustomDomainSsl"')
      return CustomDomainSsl_possibleTypes.includes(obj.__typename)
    }
    


    const CustomDomainOwnershipVerification_possibleTypes: string[] = ['CustomDomainOwnershipVerification']
    export const isCustomDomainOwnershipVerification = (obj?: { __typename?: any } | null): obj is CustomDomainOwnershipVerification => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCustomDomainOwnershipVerification"')
      return CustomDomainOwnershipVerification_possibleTypes.includes(obj.__typename)
    }
    


    const CustomDomainData_possibleTypes: string[] = ['CustomDomainData']
    export const isCustomDomainData = (obj?: { __typename?: any } | null): obj is CustomDomainData => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCustomDomainData"')
      return CustomDomainData_possibleTypes.includes(obj.__typename)
    }
    


    const LogData_possibleTypes: string[] = ['LogData']
    export const isLogData = (obj?: { __typename?: any } | null): obj is LogData => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isLogData"')
      return LogData_possibleTypes.includes(obj.__typename)
    }
    


    const IdentityProviderRequirements_possibleTypes: string[] = ['IdentityProviderRequirements']
    export const isIdentityProviderRequirements = (obj?: { __typename?: any } | null): obj is IdentityProviderRequirements => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isIdentityProviderRequirements"')
      return IdentityProviderRequirements_possibleTypes.includes(obj.__typename)
    }
    


    const PublicIdentityProvider_possibleTypes: string[] = ['PublicIdentityProvider']
    export const isPublicIdentityProvider = (obj?: { __typename?: any } | null): obj is PublicIdentityProvider => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPublicIdentityProvider"')
      return PublicIdentityProvider_possibleTypes.includes(obj.__typename)
    }
    


    const OrganizationAppConfigMetadata_possibleTypes: string[] = ['OrganizationAppConfigMetadata']
    export const isOrganizationAppConfigMetadata = (obj?: { __typename?: any } | null): obj is OrganizationAppConfigMetadata => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isOrganizationAppConfigMetadata"')
      return OrganizationAppConfigMetadata_possibleTypes.includes(obj.__typename)
    }
    


    const OrganizationAppConfig_possibleTypes: string[] = ['OrganizationAppConfig']
    export const isOrganizationAppConfig = (obj?: { __typename?: any } | null): obj is OrganizationAppConfig => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isOrganizationAppConfig"')
      return OrganizationAppConfig_possibleTypes.includes(obj.__typename)
    }
    


    const OrganizationApp_possibleTypes: string[] = ['OrganizationApp']
    export const isOrganizationApp = (obj?: { __typename?: any } | null): obj is OrganizationApp => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isOrganizationApp"')
      return OrganizationApp_possibleTypes.includes(obj.__typename)
    }
    


    const OrganizationApps_possibleTypes: string[] = ['OrganizationApps']
    export const isOrganizationApps = (obj?: { __typename?: any } | null): obj is OrganizationApps => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isOrganizationApps"')
      return OrganizationApps_possibleTypes.includes(obj.__typename)
    }
    


    const OrganizationAppEdge_possibleTypes: string[] = ['OrganizationAppEdge']
    export const isOrganizationAppEdge = (obj?: { __typename?: any } | null): obj is OrganizationAppEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isOrganizationAppEdge"')
      return OrganizationAppEdge_possibleTypes.includes(obj.__typename)
    }
    


    const OrganizationAttachedApp_possibleTypes: string[] = ['OrganizationAttachedApp']
    export const isOrganizationAttachedApp = (obj?: { __typename?: any } | null): obj is OrganizationAttachedApp => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isOrganizationAttachedApp"')
      return OrganizationAttachedApp_possibleTypes.includes(obj.__typename)
    }
    


    const OrganizationAttachedApps_possibleTypes: string[] = ['OrganizationAttachedApps']
    export const isOrganizationAttachedApps = (obj?: { __typename?: any } | null): obj is OrganizationAttachedApps => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isOrganizationAttachedApps"')
      return OrganizationAttachedApps_possibleTypes.includes(obj.__typename)
    }
    


    const OrganizationAttachedAppEdge_possibleTypes: string[] = ['OrganizationAttachedAppEdge']
    export const isOrganizationAttachedAppEdge = (obj?: { __typename?: any } | null): obj is OrganizationAttachedAppEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isOrganizationAttachedAppEdge"')
      return OrganizationAttachedAppEdge_possibleTypes.includes(obj.__typename)
    }
    


    const OrganizationIdentityProvider_possibleTypes: string[] = ['OrganizationIdentityProvider']
    export const isOrganizationIdentityProvider = (obj?: { __typename?: any } | null): obj is OrganizationIdentityProvider => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isOrganizationIdentityProvider"')
      return OrganizationIdentityProvider_possibleTypes.includes(obj.__typename)
    }
    


    const IdentityProviderConfigurations_possibleTypes: string[] = ['OAuthClientConfiguration','OpenidConfiguration']
    export const isIdentityProviderConfigurations = (obj?: { __typename?: any } | null): obj is IdentityProviderConfigurations => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isIdentityProviderConfigurations"')
      return IdentityProviderConfigurations_possibleTypes.includes(obj.__typename)
    }
    


    const OAuthClientConfiguration_possibleTypes: string[] = ['OAuthClientConfiguration']
    export const isOAuthClientConfiguration = (obj?: { __typename?: any } | null): obj is OAuthClientConfiguration => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isOAuthClientConfiguration"')
      return OAuthClientConfiguration_possibleTypes.includes(obj.__typename)
    }
    


    const OpenidConfiguration_possibleTypes: string[] = ['OpenidConfiguration']
    export const isOpenidConfiguration = (obj?: { __typename?: any } | null): obj is OpenidConfiguration => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isOpenidConfiguration"')
      return OpenidConfiguration_possibleTypes.includes(obj.__typename)
    }
    


    const TournamentTeamMemberDto_possibleTypes: string[] = ['TournamentTeamMemberDto']
    export const isTournamentTeamMemberDto = (obj?: { __typename?: any } | null): obj is TournamentTeamMemberDto => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTournamentTeamMemberDto"')
      return TournamentTeamMemberDto_possibleTypes.includes(obj.__typename)
    }
    


    const TeamMembers_possibleTypes: string[] = ['TeamMembers']
    export const isTeamMembers = (obj?: { __typename?: any } | null): obj is TeamMembers => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTeamMembers"')
      return TeamMembers_possibleTypes.includes(obj.__typename)
    }
    


    const TournamentTeamMemberEdge_possibleTypes: string[] = ['TournamentTeamMemberEdge']
    export const isTournamentTeamMemberEdge = (obj?: { __typename?: any } | null): obj is TournamentTeamMemberEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTournamentTeamMemberEdge"')
      return TournamentTeamMemberEdge_possibleTypes.includes(obj.__typename)
    }
    


    const TournamentTeam_possibleTypes: string[] = ['TournamentTeam']
    export const isTournamentTeam = (obj?: { __typename?: any } | null): obj is TournamentTeam => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTournamentTeam"')
      return TournamentTeam_possibleTypes.includes(obj.__typename)
    }
    


    const TournamentTeams_possibleTypes: string[] = ['TournamentTeams']
    export const isTournamentTeams = (obj?: { __typename?: any } | null): obj is TournamentTeams => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTournamentTeams"')
      return TournamentTeams_possibleTypes.includes(obj.__typename)
    }
    


    const TournamentTeamEdge_possibleTypes: string[] = ['TournamentTeamEdge']
    export const isTournamentTeamEdge = (obj?: { __typename?: any } | null): obj is TournamentTeamEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTournamentTeamEdge"')
      return TournamentTeamEdge_possibleTypes.includes(obj.__typename)
    }
    


    const WebhookEventConfigurationProperties_possibleTypes: string[] = ['WebhookEventConfigurationProperties']
    export const isWebhookEventConfigurationProperties = (obj?: { __typename?: any } | null): obj is WebhookEventConfigurationProperties => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isWebhookEventConfigurationProperties"')
      return WebhookEventConfigurationProperties_possibleTypes.includes(obj.__typename)
    }
    


    const WebhookEventConfiguration_possibleTypes: string[] = ['WebhookEventConfiguration']
    export const isWebhookEventConfiguration = (obj?: { __typename?: any } | null): obj is WebhookEventConfiguration => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isWebhookEventConfiguration"')
      return WebhookEventConfiguration_possibleTypes.includes(obj.__typename)
    }
    


    const Webhook_possibleTypes: string[] = ['Webhook']
    export const isWebhook = (obj?: { __typename?: any } | null): obj is Webhook => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isWebhook"')
      return Webhook_possibleTypes.includes(obj.__typename)
    }
    


    const PlayerSkillRating_possibleTypes: string[] = ['PlayerSkillRating']
    export const isPlayerSkillRating = (obj?: { __typename?: any } | null): obj is PlayerSkillRating => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPlayerSkillRating"')
      return PlayerSkillRating_possibleTypes.includes(obj.__typename)
    }
    


    const TournamentStepGroupRoundGameMatch_possibleTypes: string[] = ['TournamentStepGroupRoundGameMatch']
    export const isTournamentStepGroupRoundGameMatch = (obj?: { __typename?: any } | null): obj is TournamentStepGroupRoundGameMatch => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTournamentStepGroupRoundGameMatch"')
      return TournamentStepGroupRoundGameMatch_possibleTypes.includes(obj.__typename)
    }
    


    const TournamentStepGroupRoundGameMatches_possibleTypes: string[] = ['TournamentStepGroupRoundGameMatches']
    export const isTournamentStepGroupRoundGameMatches = (obj?: { __typename?: any } | null): obj is TournamentStepGroupRoundGameMatches => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTournamentStepGroupRoundGameMatches"')
      return TournamentStepGroupRoundGameMatches_possibleTypes.includes(obj.__typename)
    }
    


    const TournamentStepGroupRoundGameMatchEdge_possibleTypes: string[] = ['TournamentStepGroupRoundGameMatchEdge']
    export const isTournamentStepGroupRoundGameMatchEdge = (obj?: { __typename?: any } | null): obj is TournamentStepGroupRoundGameMatchEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTournamentStepGroupRoundGameMatchEdge"')
      return TournamentStepGroupRoundGameMatchEdge_possibleTypes.includes(obj.__typename)
    }
    


    const OrganizationPaymentCollectionConfiguration_possibleTypes: string[] = ['OrganizationPaymentCollectionConfiguration']
    export const isOrganizationPaymentCollectionConfiguration = (obj?: { __typename?: any } | null): obj is OrganizationPaymentCollectionConfiguration => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isOrganizationPaymentCollectionConfiguration"')
      return OrganizationPaymentCollectionConfiguration_possibleTypes.includes(obj.__typename)
    }
    


    const TournamentTeamScore_possibleTypes: string[] = ['TournamentTeamScore']
    export const isTournamentTeamScore = (obj?: { __typename?: any } | null): obj is TournamentTeamScore => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTournamentTeamScore"')
      return TournamentTeamScore_possibleTypes.includes(obj.__typename)
    }
    


    const TournamentStep_possibleTypes: string[] = ['TournamentStep']
    export const isTournamentStep = (obj?: { __typename?: any } | null): obj is TournamentStep => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTournamentStep"')
      return TournamentStep_possibleTypes.includes(obj.__typename)
    }
    


    const Tournaments_possibleTypes: string[] = ['Tournaments']
    export const isTournaments = (obj?: { __typename?: any } | null): obj is Tournaments => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTournaments"')
      return Tournaments_possibleTypes.includes(obj.__typename)
    }
    


    const TournamentEdge_possibleTypes: string[] = ['TournamentEdge']
    export const isTournamentEdge = (obj?: { __typename?: any } | null): obj is TournamentEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTournamentEdge"')
      return TournamentEdge_possibleTypes.includes(obj.__typename)
    }
    


    const TournamentStepGroupRoundGame_possibleTypes: string[] = ['TournamentStepGroupRoundGame']
    export const isTournamentStepGroupRoundGame = (obj?: { __typename?: any } | null): obj is TournamentStepGroupRoundGame => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTournamentStepGroupRoundGame"')
      return TournamentStepGroupRoundGame_possibleTypes.includes(obj.__typename)
    }
    


    const TournamentStepGroupRound_possibleTypes: string[] = ['TournamentStepGroupRound']
    export const isTournamentStepGroupRound = (obj?: { __typename?: any } | null): obj is TournamentStepGroupRound => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTournamentStepGroupRound"')
      return TournamentStepGroupRound_possibleTypes.includes(obj.__typename)
    }
    


    const TournamentStepGroup_possibleTypes: string[] = ['TournamentStepGroup']
    export const isTournamentStepGroup = (obj?: { __typename?: any } | null): obj is TournamentStepGroup => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTournamentStepGroup"')
      return TournamentStepGroup_possibleTypes.includes(obj.__typename)
    }
    


    const TournamentStepGroupRoundGameMatchScore_possibleTypes: string[] = ['TournamentStepGroupRoundGameMatchScore']
    export const isTournamentStepGroupRoundGameMatchScore = (obj?: { __typename?: any } | null): obj is TournamentStepGroupRoundGameMatchScore => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTournamentStepGroupRoundGameMatchScore"')
      return TournamentStepGroupRoundGameMatchScore_possibleTypes.includes(obj.__typename)
    }
    


    const TournamentStepGroupRoundGameMatchScores_possibleTypes: string[] = ['TournamentStepGroupRoundGameMatchScores']
    export const isTournamentStepGroupRoundGameMatchScores = (obj?: { __typename?: any } | null): obj is TournamentStepGroupRoundGameMatchScores => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTournamentStepGroupRoundGameMatchScores"')
      return TournamentStepGroupRoundGameMatchScores_possibleTypes.includes(obj.__typename)
    }
    


    const TournamentStepGroupRoundGameMatchScoreEdge_possibleTypes: string[] = ['TournamentStepGroupRoundGameMatchScoreEdge']
    export const isTournamentStepGroupRoundGameMatchScoreEdge = (obj?: { __typename?: any } | null): obj is TournamentStepGroupRoundGameMatchScoreEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTournamentStepGroupRoundGameMatchScoreEdge"')
      return TournamentStepGroupRoundGameMatchScoreEdge_possibleTypes.includes(obj.__typename)
    }
    


    const TournamentAdmin_possibleTypes: string[] = ['TournamentAdmin']
    export const isTournamentAdmin = (obj?: { __typename?: any } | null): obj is TournamentAdmin => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTournamentAdmin"')
      return TournamentAdmin_possibleTypes.includes(obj.__typename)
    }
    


    const Currency_possibleTypes: string[] = ['Currency']
    export const isCurrency = (obj?: { __typename?: any } | null): obj is Currency => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCurrency"')
      return Currency_possibleTypes.includes(obj.__typename)
    }
    


    const Currencies_possibleTypes: string[] = ['Currencies']
    export const isCurrencies = (obj?: { __typename?: any } | null): obj is Currencies => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCurrencies"')
      return Currencies_possibleTypes.includes(obj.__typename)
    }
    


    const CurrencyEdge_possibleTypes: string[] = ['CurrencyEdge']
    export const isCurrencyEdge = (obj?: { __typename?: any } | null): obj is CurrencyEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCurrencyEdge"')
      return CurrencyEdge_possibleTypes.includes(obj.__typename)
    }
    


    const PlayerCurrency_possibleTypes: string[] = ['PlayerCurrency']
    export const isPlayerCurrency = (obj?: { __typename?: any } | null): obj is PlayerCurrency => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPlayerCurrency"')
      return PlayerCurrency_possibleTypes.includes(obj.__typename)
    }
    


    const PlayerCurrencies_possibleTypes: string[] = ['PlayerCurrencies']
    export const isPlayerCurrencies = (obj?: { __typename?: any } | null): obj is PlayerCurrencies => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPlayerCurrencies"')
      return PlayerCurrencies_possibleTypes.includes(obj.__typename)
    }
    


    const PlayerCurrencyEdge_possibleTypes: string[] = ['PlayerCurrencyEdge']
    export const isPlayerCurrencyEdge = (obj?: { __typename?: any } | null): obj is PlayerCurrencyEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPlayerCurrencyEdge"')
      return PlayerCurrencyEdge_possibleTypes.includes(obj.__typename)
    }
    


    const EmailTemplateConfigurationAvailableVariables_possibleTypes: string[] = ['EmailTemplateConfigurationAvailableVariables']
    export const isEmailTemplateConfigurationAvailableVariables = (obj?: { __typename?: any } | null): obj is EmailTemplateConfigurationAvailableVariables => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isEmailTemplateConfigurationAvailableVariables"')
      return EmailTemplateConfigurationAvailableVariables_possibleTypes.includes(obj.__typename)
    }
    


    const EmailTemplateConfiguration_possibleTypes: string[] = ['EmailTemplateConfiguration']
    export const isEmailTemplateConfiguration = (obj?: { __typename?: any } | null): obj is EmailTemplateConfiguration => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isEmailTemplateConfiguration"')
      return EmailTemplateConfiguration_possibleTypes.includes(obj.__typename)
    }
    


    const EmailConfiguration_possibleTypes: string[] = ['EmailConfiguration']
    export const isEmailConfiguration = (obj?: { __typename?: any } | null): obj is EmailConfiguration => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isEmailConfiguration"')
      return EmailConfiguration_possibleTypes.includes(obj.__typename)
    }
    


    const EmailTemplate_possibleTypes: string[] = ['EmailTemplate']
    export const isEmailTemplate = (obj?: { __typename?: any } | null): obj is EmailTemplate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isEmailTemplate"')
      return EmailTemplate_possibleTypes.includes(obj.__typename)
    }
    


    const EmailTemplates_possibleTypes: string[] = ['EmailTemplates']
    export const isEmailTemplates = (obj?: { __typename?: any } | null): obj is EmailTemplates => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isEmailTemplates"')
      return EmailTemplates_possibleTypes.includes(obj.__typename)
    }
    


    const EmailTemplateEdge_possibleTypes: string[] = ['EmailTemplateEdge']
    export const isEmailTemplateEdge = (obj?: { __typename?: any } | null): obj is EmailTemplateEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isEmailTemplateEdge"')
      return EmailTemplateEdge_possibleTypes.includes(obj.__typename)
    }
    


    const UserGroupConfiguration_possibleTypes: string[] = ['UserGroupConfiguration']
    export const isUserGroupConfiguration = (obj?: { __typename?: any } | null): obj is UserGroupConfiguration => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserGroupConfiguration"')
      return UserGroupConfiguration_possibleTypes.includes(obj.__typename)
    }
    


    const UserGroupMember_possibleTypes: string[] = ['UserGroupMember']
    export const isUserGroupMember = (obj?: { __typename?: any } | null): obj is UserGroupMember => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserGroupMember"')
      return UserGroupMember_possibleTypes.includes(obj.__typename)
    }
    


    const UserGroup_possibleTypes: string[] = ['UserGroup']
    export const isUserGroup = (obj?: { __typename?: any } | null): obj is UserGroup => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserGroup"')
      return UserGroup_possibleTypes.includes(obj.__typename)
    }
    


    const UserGroups_possibleTypes: string[] = ['UserGroups']
    export const isUserGroups = (obj?: { __typename?: any } | null): obj is UserGroups => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserGroups"')
      return UserGroups_possibleTypes.includes(obj.__typename)
    }
    


    const UserGroupEdge_possibleTypes: string[] = ['UserGroupEdge']
    export const isUserGroupEdge = (obj?: { __typename?: any } | null): obj is UserGroupEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserGroupEdge"')
      return UserGroupEdge_possibleTypes.includes(obj.__typename)
    }
    


    const UserGroupMembers_possibleTypes: string[] = ['UserGroupMembers']
    export const isUserGroupMembers = (obj?: { __typename?: any } | null): obj is UserGroupMembers => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserGroupMembers"')
      return UserGroupMembers_possibleTypes.includes(obj.__typename)
    }
    


    const UserGroupMemberEdge_possibleTypes: string[] = ['UserGroupMemberEdge']
    export const isUserGroupMemberEdge = (obj?: { __typename?: any } | null): obj is UserGroupMemberEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserGroupMemberEdge"')
      return UserGroupMemberEdge_possibleTypes.includes(obj.__typename)
    }
    


    const Position_possibleTypes: string[] = ['Position']
    export const isPosition = (obj?: { __typename?: any } | null): obj is Position => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPosition"')
      return Position_possibleTypes.includes(obj.__typename)
    }
    


    const EventVenueSeatConfiguration_possibleTypes: string[] = ['EventVenueSeatConfiguration']
    export const isEventVenueSeatConfiguration = (obj?: { __typename?: any } | null): obj is EventVenueSeatConfiguration => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isEventVenueSeatConfiguration"')
      return EventVenueSeatConfiguration_possibleTypes.includes(obj.__typename)
    }
    


    const EventVenueSeat_possibleTypes: string[] = ['EventVenueSeat']
    export const isEventVenueSeat = (obj?: { __typename?: any } | null): obj is EventVenueSeat => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isEventVenueSeat"')
      return EventVenueSeat_possibleTypes.includes(obj.__typename)
    }
    


    const EventVenueSeatsUpdateResult_possibleTypes: string[] = ['EventVenueSeatsUpdateResult']
    export const isEventVenueSeatsUpdateResult = (obj?: { __typename?: any } | null): obj is EventVenueSeatsUpdateResult => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isEventVenueSeatsUpdateResult"')
      return EventVenueSeatsUpdateResult_possibleTypes.includes(obj.__typename)
    }
    


    const EventVenueSeats_possibleTypes: string[] = ['EventVenueSeats']
    export const isEventVenueSeats = (obj?: { __typename?: any } | null): obj is EventVenueSeats => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isEventVenueSeats"')
      return EventVenueSeats_possibleTypes.includes(obj.__typename)
    }
    


    const EventVenueSeatEdge_possibleTypes: string[] = ['EventVenueSeatEdge']
    export const isEventVenueSeatEdge = (obj?: { __typename?: any } | null): obj is EventVenueSeatEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isEventVenueSeatEdge"')
      return EventVenueSeatEdge_possibleTypes.includes(obj.__typename)
    }
    


    const EventConfiguration_possibleTypes: string[] = ['EventConfiguration']
    export const isEventConfiguration = (obj?: { __typename?: any } | null): obj is EventConfiguration => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isEventConfiguration"')
      return EventConfiguration_possibleTypes.includes(obj.__typename)
    }
    


    const Event_possibleTypes: string[] = ['Event']
    export const isEvent = (obj?: { __typename?: any } | null): obj is Event => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isEvent"')
      return Event_possibleTypes.includes(obj.__typename)
    }
    


    const EventInterface_possibleTypes: string[] = ['Event','EventWithUserReservation']
    export const isEventInterface = (obj?: { __typename?: any } | null): obj is EventInterface => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isEventInterface"')
      return EventInterface_possibleTypes.includes(obj.__typename)
    }
    


    const EventWithUserReservation_possibleTypes: string[] = ['EventWithUserReservation']
    export const isEventWithUserReservation = (obj?: { __typename?: any } | null): obj is EventWithUserReservation => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isEventWithUserReservation"')
      return EventWithUserReservation_possibleTypes.includes(obj.__typename)
    }
    


    const Events_possibleTypes: string[] = ['Events']
    export const isEvents = (obj?: { __typename?: any } | null): obj is Events => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isEvents"')
      return Events_possibleTypes.includes(obj.__typename)
    }
    


    const EventEdge_possibleTypes: string[] = ['EventEdge']
    export const isEventEdge = (obj?: { __typename?: any } | null): obj is EventEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isEventEdge"')
      return EventEdge_possibleTypes.includes(obj.__typename)
    }
    


    const EventReservationTicketConfiguration_possibleTypes: string[] = ['EventReservationTicketConfiguration']
    export const isEventReservationTicketConfiguration = (obj?: { __typename?: any } | null): obj is EventReservationTicketConfiguration => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isEventReservationTicketConfiguration"')
      return EventReservationTicketConfiguration_possibleTypes.includes(obj.__typename)
    }
    


    const EventReservationTicket_possibleTypes: string[] = ['EventReservationTicket']
    export const isEventReservationTicket = (obj?: { __typename?: any } | null): obj is EventReservationTicket => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isEventReservationTicket"')
      return EventReservationTicket_possibleTypes.includes(obj.__typename)
    }
    


    const EventReservationTicketWithQrCode_possibleTypes: string[] = ['EventReservationTicketWithQrCode']
    export const isEventReservationTicketWithQrCode = (obj?: { __typename?: any } | null): obj is EventReservationTicketWithQrCode => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isEventReservationTicketWithQrCode"')
      return EventReservationTicketWithQrCode_possibleTypes.includes(obj.__typename)
    }
    


    const EventReservation_possibleTypes: string[] = ['EventReservation']
    export const isEventReservation = (obj?: { __typename?: any } | null): obj is EventReservation => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isEventReservation"')
      return EventReservation_possibleTypes.includes(obj.__typename)
    }
    


    const EventReservationWithTicketsAndQrCode_possibleTypes: string[] = ['EventReservationWithTicketsAndQrCode']
    export const isEventReservationWithTicketsAndQrCode = (obj?: { __typename?: any } | null): obj is EventReservationWithTicketsAndQrCode => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isEventReservationWithTicketsAndQrCode"')
      return EventReservationWithTicketsAndQrCode_possibleTypes.includes(obj.__typename)
    }
    


    const EventReservations_possibleTypes: string[] = ['EventReservations']
    export const isEventReservations = (obj?: { __typename?: any } | null): obj is EventReservations => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isEventReservations"')
      return EventReservations_possibleTypes.includes(obj.__typename)
    }
    


    const OmitObjectTypeEdge_possibleTypes: string[] = ['OmitObjectTypeEdge']
    export const isOmitObjectTypeEdge = (obj?: { __typename?: any } | null): obj is OmitObjectTypeEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isOmitObjectTypeEdge"')
      return OmitObjectTypeEdge_possibleTypes.includes(obj.__typename)
    }
    


    const OmitObjectType_possibleTypes: string[] = ['OmitObjectType']
    export const isOmitObjectType = (obj?: { __typename?: any } | null): obj is OmitObjectType => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isOmitObjectType"')
      return OmitObjectType_possibleTypes.includes(obj.__typename)
    }
    


    const EventReservationValidateAndPay_possibleTypes: string[] = ['EventReservationValidateAndPay']
    export const isEventReservationValidateAndPay = (obj?: { __typename?: any } | null): obj is EventReservationValidateAndPay => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isEventReservationValidateAndPay"')
      return EventReservationValidateAndPay_possibleTypes.includes(obj.__typename)
    }
    


    const EventSeat_possibleTypes: string[] = ['EventSeat']
    export const isEventSeat = (obj?: { __typename?: any } | null): obj is EventSeat => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isEventSeat"')
      return EventSeat_possibleTypes.includes(obj.__typename)
    }
    


    const EventSeats_possibleTypes: string[] = ['EventSeats']
    export const isEventSeats = (obj?: { __typename?: any } | null): obj is EventSeats => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isEventSeats"')
      return EventSeats_possibleTypes.includes(obj.__typename)
    }
    


    const EventSeatEdge_possibleTypes: string[] = ['EventSeatEdge']
    export const isEventSeatEdge = (obj?: { __typename?: any } | null): obj is EventSeatEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isEventSeatEdge"')
      return EventSeatEdge_possibleTypes.includes(obj.__typename)
    }
    


    const EventVenueSeatTypeConfiguration_possibleTypes: string[] = ['EventVenueSeatTypeConfiguration']
    export const isEventVenueSeatTypeConfiguration = (obj?: { __typename?: any } | null): obj is EventVenueSeatTypeConfiguration => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isEventVenueSeatTypeConfiguration"')
      return EventVenueSeatTypeConfiguration_possibleTypes.includes(obj.__typename)
    }
    


    const EventVenueSeatType_possibleTypes: string[] = ['EventVenueSeatType']
    export const isEventVenueSeatType = (obj?: { __typename?: any } | null): obj is EventVenueSeatType => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isEventVenueSeatType"')
      return EventVenueSeatType_possibleTypes.includes(obj.__typename)
    }
    


    const EventVenueSeatTypes_possibleTypes: string[] = ['EventVenueSeatTypes']
    export const isEventVenueSeatTypes = (obj?: { __typename?: any } | null): obj is EventVenueSeatTypes => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isEventVenueSeatTypes"')
      return EventVenueSeatTypes_possibleTypes.includes(obj.__typename)
    }
    


    const EventVenueSeatTypeEdge_possibleTypes: string[] = ['EventVenueSeatTypeEdge']
    export const isEventVenueSeatTypeEdge = (obj?: { __typename?: any } | null): obj is EventVenueSeatTypeEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isEventVenueSeatTypeEdge"')
      return EventVenueSeatTypeEdge_possibleTypes.includes(obj.__typename)
    }
    


    const PlatformCdnFilePageConfig_possibleTypes: string[] = ['PlatformCdnFilePageConfig']
    export const isPlatformCdnFilePageConfig = (obj?: { __typename?: any } | null): obj is PlatformCdnFilePageConfig => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPlatformCdnFilePageConfig"')
      return PlatformCdnFilePageConfig_possibleTypes.includes(obj.__typename)
    }
    


    const PlatformCdnFileConfigs_possibleTypes: string[] = ['PlatformCdnFileConfigs']
    export const isPlatformCdnFileConfigs = (obj?: { __typename?: any } | null): obj is PlatformCdnFileConfigs => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPlatformCdnFileConfigs"')
      return PlatformCdnFileConfigs_possibleTypes.includes(obj.__typename)
    }
    


    const PlatformCdnFile_possibleTypes: string[] = ['PlatformCdnFile']
    export const isPlatformCdnFile = (obj?: { __typename?: any } | null): obj is PlatformCdnFile => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPlatformCdnFile"')
      return PlatformCdnFile_possibleTypes.includes(obj.__typename)
    }
    


    const PresignedUrlField_possibleTypes: string[] = ['PresignedUrlField']
    export const isPresignedUrlField = (obj?: { __typename?: any } | null): obj is PresignedUrlField => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPresignedUrlField"')
      return PresignedUrlField_possibleTypes.includes(obj.__typename)
    }
    


    const PresignedUrl_possibleTypes: string[] = ['PresignedUrl']
    export const isPresignedUrl = (obj?: { __typename?: any } | null): obj is PresignedUrl => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPresignedUrl"')
      return PresignedUrl_possibleTypes.includes(obj.__typename)
    }
    


    const EventVenueConfiguration_possibleTypes: string[] = ['EventVenueConfiguration']
    export const isEventVenueConfiguration = (obj?: { __typename?: any } | null): obj is EventVenueConfiguration => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isEventVenueConfiguration"')
      return EventVenueConfiguration_possibleTypes.includes(obj.__typename)
    }
    


    const EventVenue_possibleTypes: string[] = ['EventVenue']
    export const isEventVenue = (obj?: { __typename?: any } | null): obj is EventVenue => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isEventVenue"')
      return EventVenue_possibleTypes.includes(obj.__typename)
    }
    


    const EventVenues_possibleTypes: string[] = ['EventVenues']
    export const isEventVenues = (obj?: { __typename?: any } | null): obj is EventVenues => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isEventVenues"')
      return EventVenues_possibleTypes.includes(obj.__typename)
    }
    


    const EventVenueEdge_possibleTypes: string[] = ['EventVenueEdge']
    export const isEventVenueEdge = (obj?: { __typename?: any } | null): obj is EventVenueEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isEventVenueEdge"')
      return EventVenueEdge_possibleTypes.includes(obj.__typename)
    }
    


    const EventTicketConfigurationConfiguration_possibleTypes: string[] = ['EventTicketConfigurationConfiguration']
    export const isEventTicketConfigurationConfiguration = (obj?: { __typename?: any } | null): obj is EventTicketConfigurationConfiguration => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isEventTicketConfigurationConfiguration"')
      return EventTicketConfigurationConfiguration_possibleTypes.includes(obj.__typename)
    }
    


    const EventTicketConfiguration_possibleTypes: string[] = ['EventTicketConfiguration']
    export const isEventTicketConfiguration = (obj?: { __typename?: any } | null): obj is EventTicketConfiguration => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isEventTicketConfiguration"')
      return EventTicketConfiguration_possibleTypes.includes(obj.__typename)
    }
    


    const Item_possibleTypes: string[] = ['Item']
    export const isItem = (obj?: { __typename?: any } | null): obj is Item => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isItem"')
      return Item_possibleTypes.includes(obj.__typename)
    }
    


    const Items_possibleTypes: string[] = ['Items']
    export const isItems = (obj?: { __typename?: any } | null): obj is Items => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isItems"')
      return Items_possibleTypes.includes(obj.__typename)
    }
    


    const ItemEdge_possibleTypes: string[] = ['ItemEdge']
    export const isItemEdge = (obj?: { __typename?: any } | null): obj is ItemEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isItemEdge"')
      return ItemEdge_possibleTypes.includes(obj.__typename)
    }
    


    const PlayerItem_possibleTypes: string[] = ['PlayerItem']
    export const isPlayerItem = (obj?: { __typename?: any } | null): obj is PlayerItem => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPlayerItem"')
      return PlayerItem_possibleTypes.includes(obj.__typename)
    }
    


    const PlayerItems_possibleTypes: string[] = ['PlayerItems']
    export const isPlayerItems = (obj?: { __typename?: any } | null): obj is PlayerItems => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPlayerItems"')
      return PlayerItems_possibleTypes.includes(obj.__typename)
    }
    


    const PlayerItemEdge_possibleTypes: string[] = ['PlayerItemEdge']
    export const isPlayerItemEdge = (obj?: { __typename?: any } | null): obj is PlayerItemEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPlayerItemEdge"')
      return PlayerItemEdge_possibleTypes.includes(obj.__typename)
    }
    


    const ItemCategory_possibleTypes: string[] = ['ItemCategory']
    export const isItemCategory = (obj?: { __typename?: any } | null): obj is ItemCategory => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isItemCategory"')
      return ItemCategory_possibleTypes.includes(obj.__typename)
    }
    


    const ItemCategories_possibleTypes: string[] = ['ItemCategories']
    export const isItemCategories = (obj?: { __typename?: any } | null): obj is ItemCategories => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isItemCategories"')
      return ItemCategories_possibleTypes.includes(obj.__typename)
    }
    


    const ItemCategoryEdge_possibleTypes: string[] = ['ItemCategoryEdge']
    export const isItemCategoryEdge = (obj?: { __typename?: any } | null): obj is ItemCategoryEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isItemCategoryEdge"')
      return ItemCategoryEdge_possibleTypes.includes(obj.__typename)
    }
    


    const Log_possibleTypes: string[] = ['Log']
    export const isLog = (obj?: { __typename?: any } | null): obj is Log => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isLog"')
      return Log_possibleTypes.includes(obj.__typename)
    }
    


    const Logs_possibleTypes: string[] = ['Logs']
    export const isLogs = (obj?: { __typename?: any } | null): obj is Logs => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isLogs"')
      return Logs_possibleTypes.includes(obj.__typename)
    }
    


    const LogEdge_possibleTypes: string[] = ['LogEdge']
    export const isLogEdge = (obj?: { __typename?: any } | null): obj is LogEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isLogEdge"')
      return LogEdge_possibleTypes.includes(obj.__typename)
    }
    


    const PlatformCustomDomainData_possibleTypes: string[] = ['PlatformCustomDomainData']
    export const isPlatformCustomDomainData = (obj?: { __typename?: any } | null): obj is PlatformCustomDomainData => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPlatformCustomDomainData"')
      return PlatformCustomDomainData_possibleTypes.includes(obj.__typename)
    }
    


    const PlatformConfiguration_possibleTypes: string[] = ['PlatformConfiguration']
    export const isPlatformConfiguration = (obj?: { __typename?: any } | null): obj is PlatformConfiguration => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPlatformConfiguration"')
      return PlatformConfiguration_possibleTypes.includes(obj.__typename)
    }
    


    const Platform_possibleTypes: string[] = ['Platform']
    export const isPlatform = (obj?: { __typename?: any } | null): obj is Platform => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPlatform"')
      return Platform_possibleTypes.includes(obj.__typename)
    }
    


    const PlatformTemplate_possibleTypes: string[] = ['PlatformTemplate']
    export const isPlatformTemplate = (obj?: { __typename?: any } | null): obj is PlatformTemplate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPlatformTemplate"')
      return PlatformTemplate_possibleTypes.includes(obj.__typename)
    }
    


    const PresenceAnalytics_possibleTypes: string[] = ['PresenceAnalytics']
    export const isPresenceAnalytics = (obj?: { __typename?: any } | null): obj is PresenceAnalytics => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPresenceAnalytics"')
      return PresenceAnalytics_possibleTypes.includes(obj.__typename)
    }
    


    const UserConnectionEvent_possibleTypes: string[] = ['UserConnectionEvent']
    export const isUserConnectionEvent = (obj?: { __typename?: any } | null): obj is UserConnectionEvent => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserConnectionEvent"')
      return UserConnectionEvent_possibleTypes.includes(obj.__typename)
    }
    


    const UsersConnectedEvent_possibleTypes: string[] = ['UsersConnectedEvent']
    export const isUsersConnectedEvent = (obj?: { __typename?: any } | null): obj is UsersConnectedEvent => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUsersConnectedEvent"')
      return UsersConnectedEvent_possibleTypes.includes(obj.__typename)
    }
    


    const UserDisconnectEvent_possibleTypes: string[] = ['UserDisconnectEvent']
    export const isUserDisconnectEvent = (obj?: { __typename?: any } | null): obj is UserDisconnectEvent => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserDisconnectEvent"')
      return UserDisconnectEvent_possibleTypes.includes(obj.__typename)
    }
    


    const UsersDisconnectedEvent_possibleTypes: string[] = ['UsersDisconnectedEvent']
    export const isUsersDisconnectedEvent = (obj?: { __typename?: any } | null): obj is UsersDisconnectedEvent => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUsersDisconnectedEvent"')
      return UsersDisconnectedEvent_possibleTypes.includes(obj.__typename)
    }
    


    const PaymentUrlAndClientSecret_possibleTypes: string[] = ['PaymentUrlAndClientSecret']
    export const isPaymentUrlAndClientSecret = (obj?: { __typename?: any } | null): obj is PaymentUrlAndClientSecret => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPaymentUrlAndClientSecret"')
      return PaymentUrlAndClientSecret_possibleTypes.includes(obj.__typename)
    }
    


    const PlayerShopProductPurshase_possibleTypes: string[] = ['PlayerShopProductPurshase']
    export const isPlayerShopProductPurshase = (obj?: { __typename?: any } | null): obj is PlayerShopProductPurshase => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPlayerShopProductPurshase"')
      return PlayerShopProductPurshase_possibleTypes.includes(obj.__typename)
    }
    


    const PlayerShopProductPurshasesDto_possibleTypes: string[] = ['PlayerShopProductPurshasesDto']
    export const isPlayerShopProductPurshasesDto = (obj?: { __typename?: any } | null): obj is PlayerShopProductPurshasesDto => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPlayerShopProductPurshasesDto"')
      return PlayerShopProductPurshasesDto_possibleTypes.includes(obj.__typename)
    }
    


    const PlayerShopProductPurshaseEdge_possibleTypes: string[] = ['PlayerShopProductPurshaseEdge']
    export const isPlayerShopProductPurshaseEdge = (obj?: { __typename?: any } | null): obj is PlayerShopProductPurshaseEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPlayerShopProductPurshaseEdge"')
      return PlayerShopProductPurshaseEdge_possibleTypes.includes(obj.__typename)
    }
    


    const ShopCategory_possibleTypes: string[] = ['ShopCategory']
    export const isShopCategory = (obj?: { __typename?: any } | null): obj is ShopCategory => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isShopCategory"')
      return ShopCategory_possibleTypes.includes(obj.__typename)
    }
    


    const ShopCategories_possibleTypes: string[] = ['ShopCategories']
    export const isShopCategories = (obj?: { __typename?: any } | null): obj is ShopCategories => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isShopCategories"')
      return ShopCategories_possibleTypes.includes(obj.__typename)
    }
    


    const ShopCategoryEdge_possibleTypes: string[] = ['ShopCategoryEdge']
    export const isShopCategoryEdge = (obj?: { __typename?: any } | null): obj is ShopCategoryEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isShopCategoryEdge"')
      return ShopCategoryEdge_possibleTypes.includes(obj.__typename)
    }
    


    const ShopProductConfiguration_possibleTypes: string[] = ['ShopProductConfiguration']
    export const isShopProductConfiguration = (obj?: { __typename?: any } | null): obj is ShopProductConfiguration => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isShopProductConfiguration"')
      return ShopProductConfiguration_possibleTypes.includes(obj.__typename)
    }
    


    const EntityQuantity_possibleTypes: string[] = ['EntityQuantity']
    export const isEntityQuantity = (obj?: { __typename?: any } | null): obj is EntityQuantity => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isEntityQuantity"')
      return EntityQuantity_possibleTypes.includes(obj.__typename)
    }
    


    const ShopItemQuantity_possibleTypes: string[] = ['ShopItemQuantity']
    export const isShopItemQuantity = (obj?: { __typename?: any } | null): obj is ShopItemQuantity => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isShopItemQuantity"')
      return ShopItemQuantity_possibleTypes.includes(obj.__typename)
    }
    


    const ShopProduct_possibleTypes: string[] = ['ShopProduct']
    export const isShopProduct = (obj?: { __typename?: any } | null): obj is ShopProduct => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isShopProduct"')
      return ShopProduct_possibleTypes.includes(obj.__typename)
    }
    


    const ShopProducts_possibleTypes: string[] = ['ShopProducts']
    export const isShopProducts = (obj?: { __typename?: any } | null): obj is ShopProducts => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isShopProducts"')
      return ShopProducts_possibleTypes.includes(obj.__typename)
    }
    


    const ShopProductEdge_possibleTypes: string[] = ['ShopProductEdge']
    export const isShopProductEdge = (obj?: { __typename?: any } | null): obj is ShopProductEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isShopProductEdge"')
      return ShopProductEdge_possibleTypes.includes(obj.__typename)
    }
    


    const Shop_possibleTypes: string[] = ['Shop']
    export const isShop = (obj?: { __typename?: any } | null): obj is Shop => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isShop"')
      return Shop_possibleTypes.includes(obj.__typename)
    }
    


    const Shops_possibleTypes: string[] = ['Shops']
    export const isShops = (obj?: { __typename?: any } | null): obj is Shops => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isShops"')
      return Shops_possibleTypes.includes(obj.__typename)
    }
    


    const ShopEdge_possibleTypes: string[] = ['ShopEdge']
    export const isShopEdge = (obj?: { __typename?: any } | null): obj is ShopEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isShopEdge"')
      return ShopEdge_possibleTypes.includes(obj.__typename)
    }
    


    const ShopProductItem_possibleTypes: string[] = ['ShopProductItem']
    export const isShopProductItem = (obj?: { __typename?: any } | null): obj is ShopProductItem => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isShopProductItem"')
      return ShopProductItem_possibleTypes.includes(obj.__typename)
    }
    


    const ShopProductItems_possibleTypes: string[] = ['ShopProductItems']
    export const isShopProductItems = (obj?: { __typename?: any } | null): obj is ShopProductItems => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isShopProductItems"')
      return ShopProductItems_possibleTypes.includes(obj.__typename)
    }
    


    const ShopProductItemEdge_possibleTypes: string[] = ['ShopProductItemEdge']
    export const isShopProductItemEdge = (obj?: { __typename?: any } | null): obj is ShopProductItemEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isShopProductItemEdge"')
      return ShopProductItemEdge_possibleTypes.includes(obj.__typename)
    }
    


    const SkillRatingConfiguration_possibleTypes: string[] = ['SkillRatingConfiguration']
    export const isSkillRatingConfiguration = (obj?: { __typename?: any } | null): obj is SkillRatingConfiguration => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSkillRatingConfiguration"')
      return SkillRatingConfiguration_possibleTypes.includes(obj.__typename)
    }
    


    const OrganizationSkillRatingsRegisterMatchPlayer_possibleTypes: string[] = ['OrganizationSkillRatingsRegisterMatchPlayer']
    export const isOrganizationSkillRatingsRegisterMatchPlayer = (obj?: { __typename?: any } | null): obj is OrganizationSkillRatingsRegisterMatchPlayer => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isOrganizationSkillRatingsRegisterMatchPlayer"')
      return OrganizationSkillRatingsRegisterMatchPlayer_possibleTypes.includes(obj.__typename)
    }
    


    const OrganizationSkillRating_possibleTypes: string[] = ['OrganizationSkillRating']
    export const isOrganizationSkillRating = (obj?: { __typename?: any } | null): obj is OrganizationSkillRating => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isOrganizationSkillRating"')
      return OrganizationSkillRating_possibleTypes.includes(obj.__typename)
    }
    


    const LimitOverride_possibleTypes: string[] = ['LimitOverride']
    export const isLimitOverride = (obj?: { __typename?: any } | null): obj is LimitOverride => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isLimitOverride"')
      return LimitOverride_possibleTypes.includes(obj.__typename)
    }
    


    const SubscriptionItem_possibleTypes: string[] = ['SubscriptionItem']
    export const isSubscriptionItem = (obj?: { __typename?: any } | null): obj is SubscriptionItem => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSubscriptionItem"')
      return SubscriptionItem_possibleTypes.includes(obj.__typename)
    }
    


    const OrganizationSubscriptionItem_possibleTypes: string[] = ['OrganizationSubscriptionItem']
    export const isOrganizationSubscriptionItem = (obj?: { __typename?: any } | null): obj is OrganizationSubscriptionItem => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isOrganizationSubscriptionItem"')
      return OrganizationSubscriptionItem_possibleTypes.includes(obj.__typename)
    }
    


    const Query_possibleTypes: string[] = ['Query']
    export const isQuery = (obj?: { __typename?: any } | null): obj is Query => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isQuery"')
      return Query_possibleTypes.includes(obj.__typename)
    }
    


    const OrganizationIdentityProviderInfo_possibleTypes: string[] = ['OrganizationIdentityProvider','PublicOrganizationIdentityProviderV2']
    export const isOrganizationIdentityProviderInfo = (obj?: { __typename?: any } | null): obj is OrganizationIdentityProviderInfo => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isOrganizationIdentityProviderInfo"')
      return OrganizationIdentityProviderInfo_possibleTypes.includes(obj.__typename)
    }
    


    const PublicOrganizationIdentityProviderV2_possibleTypes: string[] = ['PublicOrganizationIdentityProviderV2']
    export const isPublicOrganizationIdentityProviderV2 = (obj?: { __typename?: any } | null): obj is PublicOrganizationIdentityProviderV2 => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPublicOrganizationIdentityProviderV2"')
      return PublicOrganizationIdentityProviderV2_possibleTypes.includes(obj.__typename)
    }
    


    const Mutation_possibleTypes: string[] = ['Mutation']
    export const isMutation = (obj?: { __typename?: any } | null): obj is Mutation => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMutation"')
      return Mutation_possibleTypes.includes(obj.__typename)
    }
    


    const Subscription_possibleTypes: string[] = ['Subscription']
    export const isSubscription = (obj?: { __typename?: any } | null): obj is Subscription => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSubscription"')
      return Subscription_possibleTypes.includes(obj.__typename)
    }
    

export const enumOrganizationGroupType = {
   ANONYMOUS: 'ANONYMOUS' as const,
   CONNECTED: 'CONNECTED' as const,
   MEMBER: 'MEMBER' as const,
   ADMIN: 'ADMIN' as const
}

export const enumPropertyType = {
   DATE: 'DATE' as const,
   COUNTRY: 'COUNTRY' as const,
   STRING: 'STRING' as const,
   BOOLEAN: 'BOOLEAN' as const,
   PHONE: 'PHONE' as const,
   EMAIL: 'EMAIL' as const,
   URL: 'URL' as const,
   NUMBER: 'NUMBER' as const
}

export const enumPropertyVisibility = {
   PUBLIC: 'PUBLIC' as const,
   OWNER: 'OWNER' as const,
   OWNER_OR_PERMISSION: 'OWNER_OR_PERMISSION' as const,
   WITH_PERMISSION: 'WITH_PERMISSION' as const
}

export const enumProperyEditability = {
   ALWAYS: 'ALWAYS' as const,
   ONE_TIME: 'ONE_TIME' as const,
   WITH_PERMISSION: 'WITH_PERMISSION' as const
}

export const enumConfigurationType = {
   TOURNAMENT: 'TOURNAMENT' as const,
   STEP: 'STEP' as const
}

export const enumNumberConditionType = {
   LT: 'LT' as const,
   BT: 'BT' as const,
   LTE: 'LTE' as const,
   BTE: 'BTE' as const,
   EQ: 'EQ' as const,
   NEQ: 'NEQ' as const
}

export const enumAggregationType = {
   SUM: 'SUM' as const,
   AVG: 'AVG' as const,
   MIN: 'MIN' as const,
   MAX: 'MAX' as const
}

export const enumPlayerConditionDataSource = {
   PLAYER: 'PLAYER' as const,
   IDENTITY_PROVIDER: 'IDENTITY_PROVIDER' as const
}

export const enumStringConditionType = {
   EQ: 'EQ' as const,
   NEQ: 'NEQ' as const
}

export const enumPropertyCondition = {
   EXISTS: 'EXISTS' as const,
   DONT_EXIST: 'DONT_EXIST' as const
}

export const enumTeamStatusAfterRegistration = {
   REGISTERED: 'REGISTERED' as const,
   AWAITING_FOR_PRESENCE_CONFIRMATION: 'AWAITING_FOR_PRESENCE_CONFIRMATION' as const,
   AWAITING_FOR_PAYMENT: 'AWAITING_FOR_PAYMENT' as const
}

export const enumTournamentTeamStatus = {
   NOT_ATTENDING: 'NOT_ATTENDING' as const,
   NOT_VALID: 'NOT_VALID' as const,
   REGISTERED: 'REGISTERED' as const,
   AWAITING_FOR_PAYMENT: 'AWAITING_FOR_PAYMENT' as const,
   AWAITING_FOR_PRESENCE_CONFIRMATION: 'AWAITING_FOR_PRESENCE_CONFIRMATION' as const,
   CONFIRMED: 'CONFIRMED' as const,
   DENIED: 'DENIED' as const
}

export const enumOrganizationLimitType = {
   BOOLEAN: 'BOOLEAN' as const,
   DAYS: 'DAYS' as const,
   NUMBER: 'NUMBER' as const,
   BYTES: 'BYTES' as const
}

export const enumBucketDuration = {
   MINUTE: 'MINUTE' as const,
   HOUR: 'HOUR' as const,
   DAILY: 'DAILY' as const,
   MONTHLY: 'MONTHLY' as const,
   YEARLY: 'YEARLY' as const
}

export const enumLimitScope = {
   ORGANIZATION: 'ORGANIZATION' as const,
   RESOURCE: 'RESOURCE' as const
}

export const enumLeaderboardScoreCalculationType = {
   SCORE: 'SCORE' as const
}

export const enumCustomDomainValidationStatus = {
   initializing: 'initializing' as const,
   pending_validation: 'pending_validation' as const,
   deleted: 'deleted' as const,
   pending_issuance: 'pending_issuance' as const,
   pending_deployment: 'pending_deployment' as const,
   pending_deletion: 'pending_deletion' as const,
   pending_expiration: 'pending_expiration' as const,
   expired: 'expired' as const,
   active: 'active' as const,
   initializing_timed_out: 'initializing_timed_out' as const,
   validation_timed_out: 'validation_timed_out' as const,
   issuance_timed_out: 'issuance_timed_out' as const,
   deployment_timed_out: 'deployment_timed_out' as const,
   deletion_timed_out: 'deletion_timed_out' as const,
   pending_cleanup: 'pending_cleanup' as const,
   staging_deployment: 'staging_deployment' as const,
   staging_active: 'staging_active' as const,
   deactivating: 'deactivating' as const,
   inactive: 'inactive' as const,
   backup_issued: 'backup_issued' as const,
   holding_deployment: 'holding_deployment' as const
}

export const enumCustomDomainStatus = {
   active: 'active' as const,
   pending: 'pending' as const,
   active_redeploying: 'active_redeploying' as const,
   moved: 'moved' as const,
   pending_deletion: 'pending_deletion' as const,
   deleted: 'deleted' as const,
   pending_blocked: 'pending_blocked' as const,
   pending_migration: 'pending_migration' as const,
   pending_provisioned: 'pending_provisioned' as const,
   test_pending: 'test_pending' as const,
   test_active: 'test_active' as const,
   test_active_apex: 'test_active_apex' as const,
   test_blocked: 'test_blocked' as const,
   test_failed: 'test_failed' as const,
   provisioned: 'provisioned' as const,
   blocked: 'blocked' as const
}

export const enumLogAuthorType = {
   SYSTEM: 'SYSTEM' as const,
   USER: 'USER' as const,
   APP: 'APP' as const
}

export const enumIdentityProviderAvailability = {
   PUBLIC: 'PUBLIC' as const,
   PREVIEW: 'PREVIEW' as const,
   PRIVATE: 'PRIVATE' as const
}

export const enumIdentityProviderType = {
   OPENID: 'OPENID' as const,
   OAUTH2: 'OAUTH2' as const
}

export const enumOauthEndpointAuthMethod = {
   CLIENT_SECRET_POST: 'CLIENT_SECRET_POST' as const,
   CLIENT_SECRET_BASIC: 'CLIENT_SECRET_BASIC' as const,
   CLIENT_SECRET_JWT: 'CLIENT_SECRET_JWT' as const,
   PRIVATE_KEY_JWT: 'PRIVATE_KEY_JWT' as const,
   TLS_CLIENT_AUTH: 'TLS_CLIENT_AUTH' as const,
   SELF_SIGNED_TLS_CLIENT_AUTH: 'SELF_SIGNED_TLS_CLIENT_AUTH' as const,
   NONE: 'NONE' as const
}

export const enumTournamentTeamMemberStatus = {
   AWAITING: 'AWAITING' as const,
   ACCEPTED: 'ACCEPTED' as const,
   DENIED: 'DENIED' as const
}

export const enumWebhookEventType = {
   TOURNAMENT_TEAM_DELETED_ADMIN: 'TOURNAMENT_TEAM_DELETED_ADMIN' as const,
   TOURNAMENT_TEAM_DELETED: 'TOURNAMENT_TEAM_DELETED' as const,
   TOURNAMENT_TEAM_STATUS_UPDATED: 'TOURNAMENT_TEAM_STATUS_UPDATED' as const,
   TOURNAMENT_TEAM_ATTENDANCE_UPDATED: 'TOURNAMENT_TEAM_ATTENDANCE_UPDATED' as const,
   TOURNAMENT_TEAM_CONFIRMATION_UPDATED: 'TOURNAMENT_TEAM_CONFIRMATION_UPDATED' as const
}

export const enumMatchStatus = {
   WAITING: 'WAITING' as const,
   STARTED: 'STARTED' as const,
   ENDED: 'ENDED' as const
}

export const enumStepType = {
   SCORE: 'SCORE' as const,
   ROUND_ROBIN: 'ROUND_ROBIN' as const,
   SINGLE_ELIM: 'SINGLE_ELIM' as const,
   DOUBLE_ELIM: 'DOUBLE_ELIM' as const,
   CUSTOM: 'CUSTOM' as const
}

export const enumStepStatus = {
   CONFIGURED: 'CONFIGURED' as const,
   GENERATING: 'GENERATING' as const,
   GENERATED: 'GENERATED' as const,
   SEEDING: 'SEEDING' as const,
   SEEDED: 'SEEDED' as const,
   STARTED: 'STARTED' as const,
   ENDED: 'ENDED' as const
}

export const enumTournamentGameStatus = {
   WAITING: 'WAITING' as const,
   STARTED: 'STARTED' as const,
   ENDED: 'ENDED' as const
}

export const enumMatchScoreStatus = {
   WAITING: 'WAITING' as const,
   WINNER: 'WINNER' as const,
   LOSER: 'LOSER' as const,
   FORFEIT: 'FORFEIT' as const
}

export const enumTournamentAdminPermissions = {
   MANAGE_TOURNAMENT: 'MANAGE_TOURNAMENT' as const,
   MANAGE_TEAMS: 'MANAGE_TEAMS' as const,
   MANAGE_SCORES: 'MANAGE_SCORES' as const,
   MANAGE_PERMISSIONS: 'MANAGE_PERMISSIONS' as const
}

export const enumEmailTriggerEvents = {
   EVENT_REGISTRATION_COMPLETED: 'EVENT_REGISTRATION_COMPLETED' as const,
   EVENT_REGISTRATION_ADMIN_UPDATE_STATUS_NONE: 'EVENT_REGISTRATION_ADMIN_UPDATE_STATUS_NONE' as const,
   EVENT_REGISTRATION_ADMIN_UPDATE_STATUS_REQUIRES_ADMIN_APPROVAL: 'EVENT_REGISTRATION_ADMIN_UPDATE_STATUS_REQUIRES_ADMIN_APPROVAL' as const,
   EVENT_REGISTRATION_ADMIN_UPDATE_STATUS_PENDING: 'EVENT_REGISTRATION_ADMIN_UPDATE_STATUS_PENDING' as const,
   EVENT_REGISTRATION_ADMIN_UPDATE_STATUS_SESSION_EXPIRED: 'EVENT_REGISTRATION_ADMIN_UPDATE_STATUS_SESSION_EXPIRED' as const,
   EVENT_REGISTRATION_ADMIN_UPDATE_STATUS_NOT_ATTENDING: 'EVENT_REGISTRATION_ADMIN_UPDATE_STATUS_NOT_ATTENDING' as const,
   EVENT_REGISTRATION_ADMIN_UPDATE_STATUS_REGISTERED: 'EVENT_REGISTRATION_ADMIN_UPDATE_STATUS_REGISTERED' as const,
   EVENT_REGISTRATION_ADMIN_UPDATE_STATUS_PRESENCE_CONFIRMATION_PENDING: 'EVENT_REGISTRATION_ADMIN_UPDATE_STATUS_PRESENCE_CONFIRMATION_PENDING' as const,
   EVENT_REGISTRATION_ADMIN_UPDATE_STATUS_CONFIRMED: 'EVENT_REGISTRATION_ADMIN_UPDATE_STATUS_CONFIRMED' as const,
   EVENT_REGISTRATION_ADMIN_UPDATE_STATUS_DENIED: 'EVENT_REGISTRATION_ADMIN_UPDATE_STATUS_DENIED' as const
}

export const enumUserGroupMemberStatus = {
   PENDING: 'PENDING' as const,
   ACCEPTED: 'ACCEPTED' as const,
   DENIED: 'DENIED' as const
}

export const enumUserGroupStatus = {
   VALID: 'VALID' as const,
   INVALID: 'INVALID' as const
}

export const enumEventReservationStatusAfterPayment = {
   PRESENCE_CONFIRMATION_PENDING: 'PRESENCE_CONFIRMATION_PENDING' as const,
   REGISTERED: 'REGISTERED' as const,
   CONFIRMED: 'CONFIRMED' as const
}

export const enumEventReservationStatusAfterRegistration = {
   NONE: 'NONE' as const,
   REQUIRES_ADMIN_APPROVAL: 'REQUIRES_ADMIN_APPROVAL' as const,
   PENDING: 'PENDING' as const
}

export const enumSeatAssignmentMode = {
   NONE: 'NONE' as const,
   REQUIRED: 'REQUIRED' as const,
   OPTIONAL: 'OPTIONAL' as const
}

export const enumEventReservationStatus = {
   NONE: 'NONE' as const,
   REQUIRES_ADMIN_APPROVAL: 'REQUIRES_ADMIN_APPROVAL' as const,
   PENDING: 'PENDING' as const,
   SESSION_EXPIRED: 'SESSION_EXPIRED' as const,
   NOT_ATTENDING: 'NOT_ATTENDING' as const,
   PAYMENT_PENDING: 'PAYMENT_PENDING' as const,
   PAYMENT_FAILED: 'PAYMENT_FAILED' as const,
   PAYMENT_REFUNDED: 'PAYMENT_REFUNDED' as const,
   REGISTERED: 'REGISTERED' as const,
   PRESENCE_CONFIRMATION_PENDING: 'PRESENCE_CONFIRMATION_PENDING' as const,
   CONFIRMED: 'CONFIRMED' as const,
   DENIED: 'DENIED' as const
}

export const enumEventSeatStatus = {
   AVAILABLE: 'AVAILABLE' as const,
   RESERVED: 'RESERVED' as const,
   SOLD: 'SOLD' as const
}

export const enumPlatformCdnFileType = {
   PAGE: 'PAGE' as const,
   COMPONENT: 'COMPONENT' as const,
   TEXT: 'TEXT' as const,
   IMAGE: 'IMAGE' as const
}

export const enumShopCurrencies = {
   USD: 'USD' as const,
   EUR: 'EUR' as const,
   GBP: 'GBP' as const
}

export const enumLogType = {
   WEBHOOK_CALL: 'WEBHOOK_CALL' as const,
   WEBHOOK_CALL_ERROR: 'WEBHOOK_CALL_ERROR' as const
}

export const enumShopProductItemType = {
   CURRENCY: 'CURRENCY' as const,
   ITEM: 'ITEM' as const
}

export const enumSkillRatingType = {
   BREDLEY_TERRY_FULL: 'BREDLEY_TERRY_FULL' as const,
   BRADLEY_TERRY_PART: 'BRADLEY_TERRY_PART' as const,
   THURSTONE_MOSTELLER_FULL: 'THURSTONE_MOSTELLER_FULL' as const,
   THURSTONE_MOSTELLER_PART: 'THURSTONE_MOSTELLER_PART' as const,
   PLACKETT_LUCE: 'PLACKETT_LUCE' as const
}

export const enumOrganizationLimitsType = {
   REGISTERED_USERS: 'REGISTERED_USERS' as const,
   ORGANIZATION_GROUPS: 'ORGANIZATION_GROUPS' as const,
   ORGANIZATION_MEMBERS: 'ORGANIZATION_MEMBERS' as const,
   CUSTOM_FIELDS: 'CUSTOM_FIELDS' as const,
   TOURNAMENT_STEPS: 'TOURNAMENT_STEPS' as const,
   TOURNAMENT_STEP_GROUPS: 'TOURNAMENT_STEP_GROUPS' as const,
   TOURNAMENT_TEAMS_REGISTERED: 'TOURNAMENT_TEAMS_REGISTERED' as const,
   TOURNAMENT_TEAM_SIZE: 'TOURNAMENT_TEAM_SIZE' as const,
   TOURNAMENT_REGISTRATION_RULES: 'TOURNAMENT_REGISTRATION_RULES' as const,
   WEBHOOKS: 'WEBHOOKS' as const,
   ANONYMOUS_PLAYER_PROFILES: 'ANONYMOUS_PLAYER_PROFILES' as const,
   WHITE_LABEL: 'WHITE_LABEL' as const,
   LEADERBOARDS: 'LEADERBOARDS' as const,
   LEADERBOARD_ENTRIES: 'LEADERBOARD_ENTRIES' as const,
   LEADERBOARD_BUCKETS: 'LEADERBOARD_BUCKETS' as const,
   LEADERBOARD_SEASONS: 'LEADERBOARD_SEASONS' as const,
   SKILL_RATINGS: 'SKILL_RATINGS' as const,
   PLATFORMS: 'PLATFORMS' as const,
   PLATFORM_TEMPLATES: 'PLATFORM_TEMPLATES' as const,
   ORGANIZATION_STORAGE_SIZE: 'ORGANIZATION_STORAGE_SIZE' as const,
   PLATFORM_CUSTOM_DOMAINS: 'PLATFORM_CUSTOM_DOMAINS' as const,
   CUSTOM_IDENTITY_PROVIDERS: 'CUSTOM_IDENTITY_PROVIDERS' as const,
   APPS: 'APPS' as const,
   ATTACHED_APPS: 'ATTACHED_APPS' as const,
   EVENTS_MAX_TICKETS_TYPES: 'EVENTS_MAX_TICKETS_TYPES' as const,
   EVENTS_MAX_TICKETS: 'EVENTS_MAX_TICKETS' as const,
   EVENTS_MAX_GROUP_SIZE: 'EVENTS_MAX_GROUP_SIZE' as const,
   EVENTS_MAX_REGISTRATION_RULES: 'EVENTS_MAX_REGISTRATION_RULES' as const,
   EVENT_VENUES: 'EVENT_VENUES' as const,
   EVENT_VENUE_MAX_SEAT_TYPES: 'EVENT_VENUE_MAX_SEAT_TYPES' as const,
   EVENT_VENUE_MAX_SEATS: 'EVENT_VENUE_MAX_SEATS' as const,
   EVENTS_MAX_TICKET_CONFIGURATION_CUSTOM_FIELDS: 'EVENTS_MAX_TICKET_CONFIGURATION_CUSTOM_FIELDS' as const,
   CURRENCIES: 'CURRENCIES' as const,
   ITEM_CATEGORIES: 'ITEM_CATEGORIES' as const,
   ITEMS: 'ITEMS' as const,
   SHOPS: 'SHOPS' as const,
   SHOP_CATEGORIES: 'SHOP_CATEGORIES' as const,
   SHOP_PRODUCTS: 'SHOP_PRODUCTS' as const
}

export const enumTournamentsQueryOrderBy = {
   START_AT: 'START_AT' as const,
   REGISTRATIONS_START_AT: 'REGISTRATIONS_START_AT' as const,
   END_AT: 'END_AT' as const,
   REGISTRATIONS_END_AT: 'REGISTRATIONS_END_AT' as const
}

export const enumOrderDirection = {
   ASC: 'ASC' as const,
   DESC: 'DESC' as const
}

export const enumTournamentsQueryStatus = {
   ALL: 'ALL' as const,
   STARTED: 'STARTED' as const,
   ENDED: 'ENDED' as const,
   REGISTRATIONS_OPEN: 'REGISTRATIONS_OPEN' as const,
   REGISTRATIONS_ENDED: 'REGISTRATIONS_ENDED' as const,
   REGISTRATIONS_CLOSED: 'REGISTRATIONS_CLOSED' as const
}

export const enumEventsQueryOrderBy = {
   START_AT: 'START_AT' as const,
   REGISTRATIONS_START_AT: 'REGISTRATIONS_START_AT' as const,
   END_AT: 'END_AT' as const,
   REGISTRATIONS_END_AT: 'REGISTRATIONS_END_AT' as const
}

export const enumEventsQueryStatus = {
   ALL: 'ALL' as const,
   STARTED: 'STARTED' as const,
   ENDED: 'ENDED' as const,
   REGISTRATIONS_OPEN: 'REGISTRATIONS_OPEN' as const,
   REGISTRATIONS_ENDED: 'REGISTRATIONS_ENDED' as const,
   REGISTRATIONS_CLOSED: 'REGISTRATIONS_CLOSED' as const
}

export const enumSeedingMechanism = {
   NONE: 'NONE' as const,
   REVERSE: 'REVERSE' as const,
   HALF_SHIFT: 'HALF_SHIFT' as const,
   REVERSE_HALF_SHIFT: 'REVERSE_HALF_SHIFT' as const,
   PAIR_FLIP: 'PAIR_FLIP' as const
}

export const enumGroupRepartitionMechanism = {
   BALANCED: 'BALANCED' as const,
   SEED_OPTIMIZED: 'SEED_OPTIMIZED' as const
}

export const enumStripeUiMode = {
   EMBEDDED: 'EMBEDDED' as const,
   HOSTED: 'HOSTED' as const
}
