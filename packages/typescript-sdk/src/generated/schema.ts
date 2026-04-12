// @ts-nocheck
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Scalars = {
    String: string,
    Boolean: boolean,
    DateTime: any,
    Float: number,
    Int: number,
    EmailAddress: any,
    URL: any,
    ID: string,
    PositiveInt: any,
    Void: any,
}


/** A mapping from a source path to a target key */
export interface KeyMapping {
    /** The dot-notation path to the source value in the object */
    path: Scalars['String']
    /** The target key name to map the value to */
    mappedTo: Scalars['String']
    /** Whether this mapped value should be treated as private */
    private: (Scalars['Boolean'] | null)
    __typename: 'KeyMapping'
}


/** Configuration defining how object properties are mapped */
export interface MappingConfiguration {
    /** The list of key mappings to apply */
    mappings: KeyMapping[]
    __typename: 'MappingConfiguration'
}


/** An HTTP header key-value pair used in identity provider data retrieval requests */
export interface Header {
    /** Name of the HTTP header */
    name: Scalars['String']
    /** Value of the HTTP header */
    value: Scalars['String']
    __typename: 'Header'
}


/** Configuration for retrieving user data from an external identity provider endpoint */
export interface DataRetrievalConfig {
    /** URL of the external endpoint to fetch user data from */
    url: Scalars['String']
    /** HTTP headers to include in the data retrieval request */
    headers: Header[]
    /** Configuration for mapping retrieved data fields to player profile properties */
    mappingConfiguration: MappingConfiguration
    __typename: 'DataRetrievalConfig'
}


/** Relay-style pagination metadata for cursor-based navigation */
export interface ResponsePageInfo {
    /** Whether there are more items after the last returned edge */
    hasNextPage: Scalars['Boolean']
    /** Whether there are more items before the first returned edge */
    hasPreviousPage: Scalars['Boolean']
    /** Cursor pointing to the first edge in the current page */
    startCursor: (Scalars['String'] | null)
    /** Cursor pointing to the last edge in the current page */
    endCursor: (Scalars['String'] | null)
    __typename: 'ResponsePageInfo'
}


/** A permission group within an organization that defines access control for members and apps */
export interface OrganizationGroup {
    /** Unique identifier of the organization group */
    id: Scalars['ID']
    /** Display name of the group */
    name: Scalars['String']
    /** List of permissions assigned to this group */
    permissions: GroupPermission[]
    /** The ID of the organization this group belongs to */
    organizationId: Scalars['ID']
    /** The type of group (e.g. MEMBER, ADMIN, ANONYMOUS) */
    type: OrganizationGroupType
    /** When this group was created */
    createdAt: Scalars['DateTime']
    /** When this group was last updated */
    updatedAt: Scalars['DateTime']
    __typename: 'OrganizationGroup'
}

export type OrganizationGroupType = 'ANONYMOUS' | 'CONNECTED' | 'MEMBER' | 'ADMIN'


/** A permission definition with its associated resources and available template variables */
export interface Permission {
    /** Unique identifier of the permission */
    id: Scalars['String']
    /** Human-readable description of what this permission grants */
    description: Scalars['String']
    /** Resource patterns this permission can be scoped to */
    resources: Scalars['String'][]
    /** Template variables available for resource scoping */
    availableVariables: Scalars['String'][]
    __typename: 'Permission'
}


/** A permission entry mapping a permission ID to its allowed resource scopes */
export interface GroupPermission {
    /** The permission identifier */
    id: Scalars['String']
    /** Resource identifiers this permission is scoped to */
    resources: Scalars['String'][]
    __typename: 'GroupPermission'
}


/** Container for all available permission definitions */
export interface Permissions {
    /** All available organization-level permissions */
    organizationPermissions: Permission[]
    __typename: 'Permissions'
}


/** Paginated list of organization permission groups */
export interface OrganizationGroups {
    /** List of edges containing cursor and node pairs */
    edges: OrganizationGroupEdge[]
    /** Flat list of items in the current page */
    nodes: OrganizationGroup[]
    /** Pagination metadata for navigating between pages */
    pageInfo: ResponsePageInfo
    /** Total number of items across all pages */
    totalCount: (Scalars['Float'] | null)
    __typename: 'OrganizationGroups'
}


/** An edge in a paginated connection containing a cursor and node */
export interface OrganizationGroupEdge {
    /** Opaque cursor string for this edge, used for pagination */
    cursor: Scalars['String']
    /** The item at this edge */
    node: OrganizationGroup[]
    __typename: 'OrganizationGroupEdge'
}


/** Definition of a custom field property with its validation rules and visibility settings */
export interface Property {
    /** Unique key identifier for this property */
    property: Scalars['String']
    /** Human-readable display name of the property */
    name: Scalars['String']
    /** Data type of the property value (e.g. STRING, DATE, EMAIL) */
    type: PropertyType
    /** Whether this property must be filled in */
    required: Scalars['Boolean']
    /** Display order position of this property */
    order: Scalars['Float']
    /** Whether the value must be unique across all entities */
    unique: Scalars['Boolean']
    /**
     * @deprecated use visibility instead
     * Whether the property is publicly visible (deprecated, use visibility instead)
     */
    public: (Scalars['Boolean'] | null)
    /** Visibility level controlling who can view this property value */
    visibility: (PropertyVisibility | null)
    /** Editability rule controlling when and by whom this property can be modified */
    editability: (ProperyEditability | null)
    __typename: 'Property'
}

export type PropertyType = 'DATE' | 'COUNTRY' | 'STRING' | 'BOOLEAN' | 'PHONE' | 'EMAIL' | 'URL' | 'NUMBER'

export type PropertyVisibility = 'PUBLIC' | 'OWNER' | 'OWNER_OR_PERMISSION' | 'WITH_PERMISSION'

export type ProperyEditability = 'ALWAYS' | 'ONE_TIME' | 'WITH_PERMISSION'


/** A property definition combined with its current value for a specific entity */
export interface PropertyConfigWithValue {
    /** Unique key identifier for this property */
    property: Scalars['String']
    /** Human-readable display name of the property */
    name: Scalars['String']
    /** Data type of the property value (e.g. STRING, DATE, EMAIL) */
    type: PropertyType
    /** Whether this property must be filled in */
    required: Scalars['Boolean']
    /** Display order position of this property */
    order: Scalars['Float']
    /** Whether the value must be unique across all entities */
    unique: Scalars['Boolean']
    /**
     * @deprecated use visibility instead
     * Whether the property is publicly visible (deprecated, use visibility instead)
     */
    public: (Scalars['Boolean'] | null)
    /** Visibility level controlling who can view this property value */
    visibility: (PropertyVisibility | null)
    /** Editability rule controlling when and by whom this property can be modified */
    editability: (ProperyEditability | null)
    /** Current value of this property for the entity */
    value: (Scalars['String'] | null)
    __typename: 'PropertyConfigWithValue'
}


/** A key-value pair representing a custom field property and its value */
export interface PropertyValue {
    /** Key identifier of the property */
    property: Scalars['String']
    /** Value assigned to the property */
    value: Scalars['String']
    __typename: 'PropertyValue'
}


/** A variable used in match score calculations */
export interface MatchVariable {
    /** Name used in score formulas to reference this variable */
    formulaName: Scalars['String']
    /** Human-readable display name for the variable */
    displayName: Scalars['String']
    /** Optional icon identifier for display purposes */
    displayIcon: (Scalars['String'] | null)
    /** Default numeric value when no input is provided */
    defaultValue: Scalars['Float']
    __typename: 'MatchVariable'
}


/** Configuration for how matches are scored */
export interface MatchConfiguration {
    /** List of variables available for score calculation */
    variables: MatchVariable[]
    /** Formula expression used to compute the match score */
    scoreFormula: (Scalars['String'] | null)
    __typename: 'MatchConfiguration'
}


/** Configuration for how a game is played and scored */
export interface GameConfiguration {
    /** Number of match wins required to win the game (best-of format) */
    wonMatchCountToWinGame: Scalars['Float']
    /** Whether individual match scores are aggregated as the game score */
    useMatchScoresAsGameScore: Scalars['Boolean']
    /** Number of teams participating in each game */
    teamsCount: Scalars['Float']
    /** Scoring configuration for matches within this game */
    matchConfiguration: MatchConfiguration
    __typename: 'GameConfiguration'
}


/** A named variable with a default value for score formulas */
export interface Variable {
    /** Name of the variable used in formulas */
    name: Scalars['String']
    /** Default numeric value for the variable */
    defaultValue: Scalars['Float']
    __typename: 'Variable'
}


/** Configuration for a tournament round including game settings */
export interface RoundConfiguration {
    /** Game configuration for this round */
    game: GameConfiguration
    /** Ordering position of this round within its group */
    order: Scalars['Float']
    /** Display name of the round */
    name: Scalars['String']
    __typename: 'RoundConfiguration'
}


/** Configuration for a tournament group containing multiple rounds */
export interface GroupConfiguration {
    /** List of round configurations in this group */
    rounds: RoundConfiguration[]
    /** Display name of the group */
    name: Scalars['String']
    /** Optional description of the group */
    description: (Scalars['String'] | null)
    __typename: 'GroupConfiguration'
}


/** Configuration for a tournament step containing groups of rounds */
export interface StepConfiguration {
    /** Discriminator type, always STEP for step configurations */
    type: ConfigurationType
    /** List of group configurations within this step */
    groups: GroupConfiguration[]
    __typename: 'StepConfiguration'
}

export type ConfigurationType = 'TOURNAMENT' | 'STEP'


/** A numeric comparison condition with an operator and value */
export interface NumericCondition {
    /** Comparison operator (LT, BT, LTE, BTE, EQ, NEQ) */
    conditionType: NumberConditionType
    /** Numeric value to compare against */
    value: Scalars['Float']
    __typename: 'NumericCondition'
}

export type NumberConditionType = 'LT' | 'BT' | 'LTE' | 'BTE' | 'EQ' | 'NEQ'


/** A numeric condition applied to team members with optional aggregation */
export interface TeamNumericCondition {
    /** Aggregation method (SUM, AVG, MIN, MAX) applied across team members */
    aggregationType: (AggregationType | null)
    /** Source of the property data (PLAYER or IDENTITY_PROVIDER) */
    propertySource: (PlayerConditionDataSource | null)
    /** Identifier of the property data source (e.g., identity provider ID) */
    propertySourceId: (Scalars['ID'] | null)
    /** Comparison operator for the numeric condition */
    conditionType: NumberConditionType
    /** Numeric value to compare against */
    value: Scalars['Float']
    __typename: 'TeamNumericCondition'
}

export type AggregationType = 'SUM' | 'AVG' | 'MIN' | 'MAX'

export type PlayerConditionDataSource = 'PLAYER' | 'IDENTITY_PROVIDER'


/** A string comparison condition with an operator and value */
export interface StringCondition {
    /** Comparison operator (EQ or NEQ) */
    conditionType: StringConditionType
    /** String value to compare against */
    value: Scalars['String']
    __typename: 'StringCondition'
}

export type StringConditionType = 'EQ' | 'NEQ'


/** A condition rule that checks a property using numeric, string, or existence checks */
export interface Condition {
    /** Name of the property to evaluate */
    property: Scalars['String']
    /** Numeric comparison to apply to the property value */
    numericCondition: (NumericCondition | null)
    /** String comparison to apply to the property value */
    stringCondition: (StringCondition | null)
    /** Whether the property must exist or not exist */
    propertyCondition: PropertyCondition
    __typename: 'Condition'
}

export type PropertyCondition = 'EXISTS' | 'DONT_EXIST'


/** Reference to a player property field from a specific data source */
export interface PlayerField {
    /** Source of the player data (PLAYER or IDENTITY_PROVIDER) */
    propertySource: PlayerConditionDataSource
    /** Identifier of the data source (e.g., identity provider ID) */
    propertySourceId: (Scalars['ID'] | null)
    /** Name of the property to reference */
    property: Scalars['String']
    __typename: 'PlayerField'
}


/** A registration condition that validates player properties against rules */
export interface PlayerCondition {
    /** Source of the player data (PLAYER or IDENTITY_PROVIDER) */
    propertySource: PlayerConditionDataSource
    /** Identifier of the data source (e.g., identity provider ID) */
    propertySourceId: (Scalars['ID'] | null)
    /** The condition rule to evaluate against the player property */
    condition: Condition
    /** Custom error message shown when the condition fails */
    errorMessage: (Scalars['String'] | null)
    /** Human-readable description of the rule for display purposes */
    ruleDescription: (Scalars['String'] | null)
    __typename: 'PlayerCondition'
}


/** A registration condition that validates team-level properties */
export interface TeamCondition {
    /** Name of the team property to evaluate */
    property: Scalars['String']
    /** String comparison to apply to the team property */
    stringCondition: (StringCondition | null)
    /** Numeric comparison with optional aggregation for team members */
    numericCondition: (TeamNumericCondition | null)
    /** Whether the property must exist or not exist */
    propertyCondition: PropertyCondition
    /** Custom error message shown when the condition fails */
    errorMessage: (Scalars['String'] | null)
    __typename: 'TeamCondition'
}


/** Set of conditions that teams and players must meet to register */
export interface RegistrationConditions {
    /** Conditions applied at the team level during registration */
    teamConditions: TeamCondition[]
    /** Conditions applied to each team member during registration */
    memberConditions: PlayerCondition[]
    __typename: 'RegistrationConditions'
}


/** Configuration for tournament registration rules, team sizes, and custom fields */
export interface TournamentConfiguration {
    /** Discriminator type, always TOURNAMENT for tournament configurations */
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


/** A template variable available for use in an email template */
export interface EmailTemplateConfigurationAvailableVariables {
    /** Variable name used in template placeholders (e.g., {{name}}) */
    name: Scalars['String']
    /** Human-readable description of what this variable contains */
    description: Scalars['String']
    __typename: 'EmailTemplateConfigurationAvailableVariables'
}


/** Describes an email template trigger event and its available variables */
export interface EmailTemplateConfiguration {
    /** The trigger event this configuration applies to */
    triggerEvent: EmailTriggerEvents
    /** Display name of the email template configuration */
    name: Scalars['String']
    /** Description of when this email is triggered */
    description: Scalars['String']
    /** List of variables available for use in templates for this event */
    availableVariables: EmailTemplateConfigurationAvailableVariables[]
    __typename: 'EmailTemplateConfiguration'
}

export type EmailTriggerEvents = 'EVENT_REGISTRATION_COMPLETED' | 'EVENT_REGISTRATION_ADMIN_UPDATE_STATUS_NONE' | 'EVENT_REGISTRATION_ADMIN_UPDATE_STATUS_REQUIRES_ADMIN_APPROVAL' | 'EVENT_REGISTRATION_ADMIN_UPDATE_STATUS_PENDING' | 'EVENT_REGISTRATION_ADMIN_UPDATE_STATUS_SESSION_EXPIRED' | 'EVENT_REGISTRATION_ADMIN_UPDATE_STATUS_NOT_ATTENDING' | 'EVENT_REGISTRATION_ADMIN_UPDATE_STATUS_REGISTERED' | 'EVENT_REGISTRATION_ADMIN_UPDATE_STATUS_PRESENCE_CONFIRMATION_PENDING' | 'EVENT_REGISTRATION_ADMIN_UPDATE_STATUS_CONFIRMED' | 'EVENT_REGISTRATION_ADMIN_UPDATE_STATUS_DENIED' | 'TOURNAMENT_TEAM_REGISTERED' | 'TOURNAMENT_TEAM_DELETED' | 'TOURNAMENT_TEAM_MEMBER_INVITED' | 'TOURNAMENT_TEAM_MEMBER_INVITE_ACCEPTED' | 'TOURNAMENT_TEAM_MEMBER_INVITE_REJECTED' | 'TOURNAMENT_TEAM_MEMBER_REMOVED' | 'TOURNAMENT_TEAM_CONFIRMED' | 'TOURNAMENT_TEAM_ATTENDANCE_UPDATED' | 'TOURNAMENT_TEAM_STATUS_UPDATE_NOT_ATTENDING' | 'TOURNAMENT_TEAM_STATUS_UPDATE_NOT_VALID' | 'TOURNAMENT_TEAM_STATUS_UPDATE_REGISTERED' | 'TOURNAMENT_TEAM_STATUS_UPDATE_AWAITING_FOR_PAYMENT' | 'TOURNAMENT_TEAM_STATUS_UPDATE_AWAITING_FOR_PRESENCE_CONFIRMATION' | 'TOURNAMENT_TEAM_STATUS_UPDATE_CONFIRMED' | 'TOURNAMENT_TEAM_STATUS_UPDATE_DENIED' | 'SHOP_PURCHASE_COMPLETED' | 'ORGANIZATION_MEMBER_ADDED' | 'ORGANIZATION_MEMBER_REMOVED'


/** SMTP email configuration for an organization */
export interface EmailConfiguration {
    /** SMTP server hostname */
    host: Scalars['String']
    /** SMTP server port number */
    port: (Scalars['Float'] | null)
    /** SMTP authentication username */
    username: (Scalars['String'] | null)
    /** SMTP authentication password */
    password: (Scalars['String'] | null)
    /** Sender email address */
    from: Scalars['String']
    /** Sender display name shown in the From header */
    fromName: (Scalars['String'] | null)
    /** Reply-to email address */
    replyTo: (Scalars['String'] | null)
    /** Reply-to display name */
    replyToName: (Scalars['String'] | null)
    /** Whether to use TLS/SSL for the SMTP connection */
    secure: Scalars['Boolean']
    /** Player property field that contains recipient email addresses */
    emailField: PlayerField
    __typename: 'EmailConfiguration'
}


/** Details of an outgoing webhook HTTP request */
export interface WebhookLogRequest {
    /** URL the webhook was sent to */
    url: Scalars['String']
    /** Serialized request body */
    body: Scalars['String']
    /** Request headers sent with the webhook */
    headers: StringKeyValuePair[]
    __typename: 'WebhookLogRequest'
}


/** A generic string key-value pair */
export interface StringKeyValuePair {
    /** Key name */
    key: Scalars['String']
    /** Value */
    value: Scalars['String']
    __typename: 'StringKeyValuePair'
}


/** Details of a webhook HTTP response */
export interface WebhookLogResponse {
    /** HTTP status code returned by the endpoint */
    statusCode: Scalars['Int']
    /** Response body returned by the endpoint */
    body: (Scalars['String'] | null)
    /** Response headers returned by the endpoint */
    headers: (StringKeyValuePair[] | null)
    __typename: 'WebhookLogResponse'
}


/** Structured value representing a webhook call log entry */
export interface WebhookCallLogValue {
    /** The outgoing webhook request details */
    request: WebhookLogRequest
    /** The webhook response details (absent if request failed to connect) */
    response: (WebhookLogResponse | null)
    /** Error message if the webhook call failed */
    error: (Scalars['String'] | null)
    __typename: 'WebhookCallLogValue'
}


/** Data payload for an audit log entry capturing a change event */
export interface LogData {
    /** Previous state of the resource before the change */
    oldValue: (WebhookCallLogValue | null)
    /** New state of the resource after the change */
    newValue: (WebhookCallLogValue | null)
    /** ID of the account or system that performed the action */
    author: (Scalars['String'] | null)
    /** Type of actor that performed the action (SYSTEM, USER, or APP) */
    authorType: LogAuthorType
    __typename: 'LogData'
}

export type LogAuthorType = 'SYSTEM' | 'USER' | 'APP'


/** Schema definition for a single field within a webhook event payload */
export interface WebhookEventConfigurationProperties {
    /** Name of the field in the webhook payload */
    name: Scalars['String']
    /** Human-readable description of what this field represents */
    description: (Scalars['String'] | null)
    /** Whether this field contains an array of values */
    array: Scalars['Boolean']
    /** Whether this field is optional in the payload */
    optional: Scalars['Boolean']
    /** Example value for documentation purposes */
    example: (Scalars['String'] | null)
    /** Data type of the field (e.g. string, number, Date, object) */
    type: Scalars['String']
    /** Nested field definitions for object-type fields */
    properties: (WebhookEventConfigurationProperties[] | null)
    __typename: 'WebhookEventConfigurationProperties'
}


/** Configuration describing a webhook event type, its payload schema, and optional RPC answer schema */
export interface WebhookEventConfiguration {
    /** The webhook event type identifier */
    type: WebhookEventType
    /** Human-readable description of when this event is triggered */
    description: Scalars['String']
    /** Schema definition for the event payload sent to webhook endpoints */
    payload: WebhookEventConfigurationProperties
    /** If this property is available, it means that the event is a "RPC" event and that an answer is expected from the webhook called */
    answerPayload: (WebhookEventConfigurationProperties | null)
    __typename: 'WebhookEventConfiguration'
}

export type WebhookEventType = 'PLAYER_CREATED' | 'PLAYER_UPDATED' | 'PLAYER_DELETED' | 'TOURNAMENT_CREATED' | 'TOURNAMENT_UPDATED' | 'TOURNAMENT_DELETED' | 'TOURNAMENT_STEP_CREATED' | 'TOURNAMENT_STEP_UPDATED' | 'TOURNAMENT_STEP_DELETED' | 'TOURNAMENT_STEP_GENERATED' | 'TOURNAMENT_STEP_SEEDED' | 'TOURNAMENT_TEAM_REGISTERED' | 'TOURNAMENT_TEAM_UPDATED' | 'TOURNAMENT_TEAM_DELETED_ADMIN' | 'TOURNAMENT_TEAM_DELETED' | 'TOURNAMENT_TEAM_STATUS_UPDATED' | 'TOURNAMENT_TEAM_ATTENDANCE_UPDATED' | 'TOURNAMENT_TEAM_CONFIRMATION_UPDATED' | 'TOURNAMENT_TEAM_MEMBER_UPDATED' | 'TOURNAMENT_MATCH_SCORE_UPDATED' | 'TOURNAMENT_MATCH_STATUS_UPDATED' | 'ORGANIZATION_MEMBER_ADDED' | 'ORGANIZATION_MEMBER_REMOVED' | 'EVENT_CREATED' | 'EVENT_UPDATED' | 'EVENT_DELETED' | 'EVENT_RESERVATION_CREATED' | 'EVENT_RESERVATION_CANCELLED' | 'EVENT_RESERVATION_STATUS_UPDATED' | 'EVENT_RESERVATION_PRESENCE_CONFIRMED' | 'SHOP_PURCHASE_COMPLETED' | 'SHOP_PURCHASE_FAILED' | 'SHOP_PRODUCT_CREATED' | 'PLAYER_CURRENCY_UPDATED' | 'PLAYER_ITEM_UPDATED' | 'CURRENCY_CREATED' | 'ITEM_CREATED' | 'LEADERBOARD_SCORE_REGISTERED' | 'LEADERBOARD_CREATED' | 'LEADERBOARD_DELETED' | 'SKILL_RATING_MATCH_REGISTERED' | 'PLATFORM_CREATED' | 'PLATFORM_UPDATED' | 'PLATFORM_DELETED'


/** A member of an organization with their group assignment and permissions */
export interface OrganizationMember {
    /** Unique identifier for this membership */
    id: Scalars['ID']
    /** The ID of the organization this membership belongs to */
    organizationId: Scalars['ID']
    /** The permission group assigned to this member */
    groupId: Scalars['ID']
    /** The account ID of the member */
    memberId: Scalars['ID']
    /** Additional permissions granted to this specific member */
    permissions: (GroupPermission[] | null)
    /** When this membership was created */
    createdAt: Scalars['DateTime']
    /** When this membership was last updated */
    updatedAt: Scalars['DateTime']
    /** The account details of this organization member */
    account: Account
    /** The permission group assigned to this member */
    group: OrganizationGroup
    __typename: 'OrganizationMember'
}


/** Paginated list of organization members */
export interface OrganizationMembers {
    /** List of edges containing cursor and node pairs */
    edges: OrganizationMemberEdge[]
    /** Flat list of items in the current page */
    nodes: OrganizationMember[]
    /** Pagination metadata for navigating between pages */
    pageInfo: ResponsePageInfo
    /** Total number of items across all pages */
    totalCount: (Scalars['Float'] | null)
    __typename: 'OrganizationMembers'
}


/** An edge in a paginated connection containing a cursor and node */
export interface OrganizationMemberEdge {
    /** Opaque cursor string for this edge, used for pagination */
    cursor: Scalars['String']
    /** The item at this edge */
    node: OrganizationMember[]
    __typename: 'OrganizationMemberEdge'
}


/** A tournament within an organization */
export interface Tournament {
    /** Unique identifier of the tournament */
    id: Scalars['ID']
    /** Title of the tournament */
    title: Scalars['String']
    /** Description of the tournament */
    description: Scalars['String']
    /** Date and time when the tournament starts */
    startAt: (Scalars['DateTime'] | null)
    /** Date and time when the tournament ends */
    endAt: (Scalars['DateTime'] | null)
    /** Date and time when registrations open */
    startRegistrationsAt: (Scalars['DateTime'] | null)
    /** Date and time when registrations close */
    endRegistrationsAt: (Scalars['DateTime'] | null)
    /** ID of the organization that owns this tournament */
    organizationId: Scalars['ID']
    /** Tournament configuration including team size, registration conditions, and custom fields */
    configuration: (TournamentConfiguration | null)
    /** Date and time when the tournament was created */
    createdAt: Scalars['DateTime']
    /** Date and time when the tournament was last updated */
    updatedAt: Scalars['DateTime']
    /** ID of the account that created this tournament */
    createdById: Scalars['ID']
    /** ID of the tournament series this tournament belongs to */
    tournamentSeriesId: (Scalars['ID'] | null)
    /** Date and time from which the tournament is visible in public listings */
    visibleAt: (Scalars['DateTime'] | null)
    /** Teams registered to this tournament */
    teams: TournamentTeams
    /** Steps registered for this tournament */
    steps: TournamentStep[]
    /** Account that created this tournament */
    createdBy: Account
    /** Current authenticated team registered to this event */
    myTeam: (TournamentTeam | null)
    /** Aggregated team scores across all steps of this tournament */
    teamScores: TournamentTeamScore[]
    __typename: 'Tournament'
}

export type TournamentTeamStatus = 'NOT_ATTENDING' | 'NOT_VALID' | 'REGISTERED' | 'AWAITING_FOR_PAYMENT' | 'AWAITING_FOR_PRESENCE_CONFIRMATION' | 'CONFIRMED' | 'DENIED'


/** Definition of a single platform usage limit */
export interface Limit {
    /** Unique identifier of the limit definition */
    id: Scalars['String']
    /** Default quota value for this limit */
    default: Scalars['Float']
    /** Human-readable description of what this limit controls */
    description: Scalars['String']
    /** Display name of the limit */
    name: Scalars['String']
    /** Type of limit (e.g. quota, rate) */
    type: OrganizationLimitType
    /** Time window for rate-based limits */
    bucketDuration: (BucketDuration | null)
    /** Scope at which this limit is enforced */
    scope: LimitScope
    /** Maximum configurable value for this limit */
    max: (Scalars['Float'] | null)
    __typename: 'Limit'
}

export type OrganizationLimitType = 'BOOLEAN' | 'DAYS' | 'NUMBER' | 'BYTES'

export type BucketDuration = 'MINUTE' | 'HOUR' | 'DAILY' | 'MONTHLY' | 'YEARLY'

export type LimitScope = 'ORGANIZATION' | 'RESOURCE'


/** Collection of platform limit definitions */
export interface Limits {
    /** List of limit definitions */
    limits: Limit[]
    __typename: 'Limits'
}


/** Current usage and quota for a single organization limit */
export interface OrganizationLimit {
    /** Limit definition identifier */
    id: Scalars['String']
    /** Maximum allowed value for this limit */
    max: Scalars['Float']
    /** Current usage count against this limit */
    current: Scalars['Float']
    __typename: 'OrganizationLimit'
}


/** Current usage and quotas for an organization across all limits */
export interface OrganizationLimits {
    /** List of organization limit usages */
    limits: OrganizationLimit[]
    __typename: 'OrganizationLimits'
}


/** Configuration settings for an organization */
export interface OrganizationConfiguration {
    /** Custom field definitions configured for this organization */
    customFields: Property[]
    __typename: 'OrganizationConfiguration'
}


/** Public-facing identity provider linked to an organization */
export interface PublicOrganizationIdentityProvider {
    /** Unique identifier of the identity provider link */
    id: Scalars['ID']
    /** Display name of the identity provider */
    name: Scalars['String']
    /** Description of the identity provider */
    description: Scalars['String']
    /** URL of the identity provider icon */
    icon: (Scalars['String'] | null)
    /** Whether this provider can be used for login */
    allowLogin: Scalars['Boolean']
    /** OAuth2 authorization URL for initiating login */
    authorizationUrl: Scalars['String']
    __typename: 'PublicOrganizationIdentityProvider'
}


/** An organization (tenant) on the platform */
export interface Organization {
    /** Unique identifier of the organization */
    id: Scalars['ID']
    /** ID of the account that owns this organization */
    ownerId: (Scalars['ID'] | null)
    /** Display name of the organization */
    name: Scalars['String']
    /** Description of the organization */
    description: Scalars['String']
    /** Configuration settings including custom fields */
    configuration: OrganizationConfiguration
    /** Tournaments belonging to this organization */
    tournaments: Tournament[]
    /** Members belonging to this organization */
    members: OrganizationMember[]
    /** Permission groups within this organization */
    groups: OrganizationGroup[]
    /** Whether this organization has Stripe billing configured */
    stripeConfigured: (Scalars['Boolean'] | null)
    /** Identity providers linked to this organization, optionally filtered to login-enabled only */
    identityProviders: PublicOrganizationIdentityProvider[]
    __typename: 'Organization'
}


/** A key-value property of an account identity */
export interface AccountIdentityProperty {
    /** The property key name */
    property: Scalars['String']
    /** The property value */
    value: Scalars['String']
    __typename: 'AccountIdentityProperty'
}


/** A linked identity from an external identity provider for an account */
export interface AccountIdentity {
    /** The external provider-assigned identifier for this identity */
    providerId: Scalars['String']
    /** The ID of the account this identity belongs to */
    accountId: Scalars['ID']
    /** The ID of the organization identity provider configuration */
    organizationIdentityProviderId: Scalars['ID']
    /** The properties associated with this identity */
    properties: AccountIdentityProperty[]
    /** When this identity was first linked */
    createdAt: Scalars['DateTime']
    /** When this identity was last updated */
    updatedAt: Scalars['DateTime']
    /** Resolves the public identity provider configuration for this identity */
    organizationIdentityProvider: (PublicOrganizationIdentityProvider | null)
    __typename: 'AccountIdentity'
}


/** Represents a player profile within an organization */
export interface Player {
    /** The unique identifier of the player */
    id: Scalars['ID']
    /** The display username of the player */
    username: Scalars['String']
    /** A text description or bio for the player */
    description: Scalars['String']
    /** The ID of the account that owns this player profile */
    ownerId: (Scalars['ID'] | null)
    /** A custom external identifier assigned by the organization */
    organizationCustomId: (Scalars['ID'] | null)
    /** The date and time the player profile was last updated */
    updatedAt: Scalars['DateTime']
    /** The date and time the player profile was created */
    createdAt: Scalars['DateTime']
    /** The identity provider identities linked to the player account */
    identities: (AccountIdentity[] | null)
    /** The account that owns this player profile */
    owner: (Account | null)
    /** The custom fields configured for this player profile */
    customFields: PropertyConfigWithValue[]
    __typename: 'Player'
}


/** Paginated list of player profiles */
export interface Players {
    /** List of edges containing cursor and node pairs */
    edges: PlayerEdge[]
    /** Flat list of items in the current page */
    nodes: Player[]
    /** Pagination metadata for navigating between pages */
    pageInfo: ResponsePageInfo
    /** Total number of items across all pages */
    totalCount: (Scalars['Float'] | null)
    __typename: 'Players'
}


/** An edge in a paginated connection containing a cursor and node */
export interface PlayerEdge {
    /** Opaque cursor string for this edge, used for pagination */
    cursor: Scalars['String']
    /** The item at this edge */
    node: Player[]
    __typename: 'PlayerEdge'
}


/** Represents a user account in the platform */
export interface Account {
    /** The ID of the account */
    id: Scalars['ID']
    /** The email address associated with the account */
    email: (Scalars['EmailAddress'] | null)
    /** Resolves the permission set for the account within the organization */
    permissions: GroupPermission[]
    /** Resolves the player profiles associated with the account */
    profiles: Player[]
    /** Resolves the linked identity provider identities for the account */
    identities: AccountIdentity[]
    __typename: 'Account'
}


/** Contains a URL for linking an identity provider to an account */
export interface IdentityLinkUrl {
    /** The redirect URL for identity provider linking */
    url: Scalars['String']
    __typename: 'IdentityLinkUrl'
}


/** A reusable configuration preset for tournaments or steps */
export interface Configuration {
    /** Unique identifier of the configuration */
    id: Scalars['ID']
    /** Display name of the configuration */
    name: Scalars['String']
    /** Description of the configuration purpose */
    description: Scalars['String']
    /** Timestamp when the configuration was created */
    createdAt: Scalars['DateTime']
    /** Timestamp when the configuration was last updated */
    updatedAt: Scalars['DateTime']
    /** The configuration properties, either step or tournament type */
    configuration: ConfigurationProperties
    /** ID of the account that created this configuration */
    createdById: Scalars['ID']
    /** ID of the organization that owns this configuration */
    organizationId: Scalars['ID']
    __typename: 'Configuration'
}

export type ConfigurationProperties = (StepConfiguration | TournamentConfiguration) & { __isUnion?: true }


/** Represents a player score entry within a leaderboard season bucket */
export interface LeaderboardSeasonBucketScore {
    /** Unique identifier for this score entry */
    id: Scalars['ID']
    /** Current rank position of the player in this bucket */
    rank: Scalars['Float']
    /** The player score from the previous ranking period */
    lastScore: (Scalars['Float'] | null)
    /** The player rank from the previous ranking period */
    lastRank: (Scalars['Int'] | null)
    /** Timestamp when this score entry was created */
    createdAt: Scalars['DateTime']
    /** Timestamp when this score entry was last updated */
    updatedAt: Scalars['DateTime']
    /** Current score value of the player */
    score: Scalars['Float']
    /** ID of the bucket this score belongs to */
    leaderboardSeasonBucketId: Scalars['ID']
    /** ID of the player profile this score belongs to */
    playerProfileId: Scalars['ID']
    __typename: 'LeaderboardSeasonBucketScore'
}


/** Paginated list of leaderboard season bucket scores */
export interface LeaderboardSeasonBucketScores {
    /** List of edges containing cursor and node pairs */
    edges: LeaderboardSeasonBucketScoreEdge[]
    /** Flat list of items in the current page */
    nodes: LeaderboardSeasonBucketScore[]
    /** Pagination metadata for navigating between pages */
    pageInfo: ResponsePageInfo
    /** Total number of items across all pages */
    totalCount: (Scalars['Float'] | null)
    __typename: 'LeaderboardSeasonBucketScores'
}


/** An edge in a paginated connection containing a cursor and node */
export interface LeaderboardSeasonBucketScoreEdge {
    /** Opaque cursor string for this edge, used for pagination */
    cursor: Scalars['String']
    /** The item at this edge */
    node: LeaderboardSeasonBucketScore[]
    __typename: 'LeaderboardSeasonBucketScoreEdge'
}


/** Represents a leaderboard for tracking and ranking player scores */
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
    /** Timestamp when the leaderboard was created */
    createdAt: Scalars['DateTime']
    /** Timestamp when the leaderboard was last updated */
    updatedAt: Scalars['DateTime']
    __typename: 'Leaderboard'
}


/** Paginated list of leaderboards */
export interface Leaderboards {
    /** List of edges containing cursor and node pairs */
    edges: LeaderboardEdge[]
    /** Flat list of items in the current page */
    nodes: Leaderboard[]
    /** Pagination metadata for navigating between pages */
    pageInfo: ResponsePageInfo
    /** Total number of items across all pages */
    totalCount: (Scalars['Float'] | null)
    __typename: 'Leaderboards'
}


/** An edge in a paginated connection containing a cursor and node */
export interface LeaderboardEdge {
    /** Opaque cursor string for this edge, used for pagination */
    cursor: Scalars['String']
    /** The item at this edge */
    node: Leaderboard[]
    __typename: 'LeaderboardEdge'
}


/** Represents a time-bound season within a leaderboard */
export interface LeaderboardSeason {
    /** Unique identifier of the season */
    id: Scalars['ID']
    /** ID of the leaderboard this season belongs to */
    leaderboardId: Scalars['ID']
    /** Display name of the season */
    name: Scalars['String']
    /** Start date and time of the season */
    start: Scalars['DateTime']
    /** End date and time of the season */
    end: Scalars['DateTime']
    /** Initial score assigned to players when they join this season */
    startingScore: Scalars['Float']
    /** Timestamp when the season was created */
    createdAt: Scalars['DateTime']
    /** Timestamp when the season was last updated */
    updatedAt: Scalars['DateTime']
    __typename: 'LeaderboardSeason'
}


/** Paginated list of leaderboard seasons */
export interface LeaderboardSeasons {
    /** List of edges containing cursor and node pairs */
    edges: LeaderboardSeasonEdge[]
    /** Flat list of items in the current page */
    nodes: LeaderboardSeason[]
    /** Pagination metadata for navigating between pages */
    pageInfo: ResponsePageInfo
    /** Total number of items across all pages */
    totalCount: (Scalars['Float'] | null)
    __typename: 'LeaderboardSeasons'
}


/** An edge in a paginated connection containing a cursor and node */
export interface LeaderboardSeasonEdge {
    /** Opaque cursor string for this edge, used for pagination */
    cursor: Scalars['String']
    /** The item at this edge */
    node: LeaderboardSeason[]
    __typename: 'LeaderboardSeasonEdge'
}


/** Represents a score bucket (tier/division) within a leaderboard season */
export interface LeaderboardSeasonBucket {
    /** Unique identifier of the bucket */
    id: Scalars['ID']
    /** ID of the season this bucket belongs to */
    seasonId: Scalars['ID']
    /** Display name of the bucket (e.g., Gold, Silver, Bronze) */
    name: Scalars['String']
    /** Minimum score required to be placed in this bucket */
    minScore: Scalars['Float']
    /** Method used to calculate scores within this bucket */
    scoreCalculationType: LeaderboardScoreCalculationType
    /** Timestamp when the bucket was created */
    createdAt: Scalars['DateTime']
    /** Timestamp when the bucket was last updated */
    updatedAt: Scalars['DateTime']
    __typename: 'LeaderboardSeasonBucket'
}

export type LeaderboardScoreCalculationType = 'SCORE'


/** Paginated list of leaderboard season buckets */
export interface LeaderboardSeasonBuckets {
    /** List of edges containing cursor and node pairs */
    edges: LeaderboardSeasonBucketEdge[]
    /** Flat list of items in the current page */
    nodes: LeaderboardSeasonBucket[]
    /** Pagination metadata for navigating between pages */
    pageInfo: ResponsePageInfo
    /** Total number of items across all pages */
    totalCount: (Scalars['Float'] | null)
    __typename: 'LeaderboardSeasonBuckets'
}


/** An edge in a paginated connection containing a cursor and node */
export interface LeaderboardSeasonBucketEdge {
    /** Opaque cursor string for this edge, used for pagination */
    cursor: Scalars['String']
    /** The item at this edge */
    node: LeaderboardSeasonBucket[]
    __typename: 'LeaderboardSeasonBucketEdge'
}


/** DNS TXT record required for SSL certificate validation of a custom domain */
export interface CustomDomainSslValidationRecord {
    /** Name of the TXT DNS record to create for validation */
    txt_name: (Scalars['String'] | null)
    /** Value of the TXT DNS record to create for validation */
    txt_value: (Scalars['String'] | null)
    __typename: 'CustomDomainSslValidationRecord'
}


/** An error encountered during SSL certificate validation for a custom domain */
export interface CustomDomainSslValidationError {
    /** Human-readable error message describing the validation failure */
    message: (Scalars['String'] | null)
    __typename: 'CustomDomainSslValidationError'
}


/** SSL certificate status and validation details for a custom domain */
export interface CustomDomainSsl {
    /** Current status of the SSL certificate validation process */
    status: (CustomDomainValidationStatus | null)
    /** List of validation errors encountered during SSL provisioning */
    validation_errors: (CustomDomainSslValidationError[] | null)
    /** DNS records required for SSL certificate validation */
    validation_records: (CustomDomainSslValidationRecord[] | null)
    __typename: 'CustomDomainSsl'
}

export type CustomDomainValidationStatus = 'initializing' | 'pending_validation' | 'deleted' | 'pending_issuance' | 'pending_deployment' | 'pending_deletion' | 'pending_expiration' | 'expired' | 'active' | 'initializing_timed_out' | 'validation_timed_out' | 'issuance_timed_out' | 'deployment_timed_out' | 'deletion_timed_out' | 'pending_cleanup' | 'staging_deployment' | 'staging_active' | 'deactivating' | 'inactive' | 'backup_issued' | 'holding_deployment'


/** DNS record required to verify ownership of a custom domain */
export interface CustomDomainOwnershipVerification {
    /** Name of the DNS record to create for ownership verification */
    name: (Scalars['String'] | null)
    /** Value of the DNS record to create for ownership verification */
    value: (Scalars['String'] | null)
    __typename: 'CustomDomainOwnershipVerification'
}


/** Custom domain registration data from Cloudflare, including SSL and ownership verification status */
export interface CustomDomainData {
    /** The hostname of the custom domain */
    hostname: Scalars['String']
    /** Ownership verification DNS record details */
    ownership_verification: (CustomDomainOwnershipVerification | null)
    /** SSL certificate status and validation information */
    ssl: CustomDomainSsl
    /** Current provisioning status of the custom domain */
    status: (CustomDomainStatus | null)
    /** List of verification error messages, if any */
    verification_errors: (Scalars['String'][] | null)
    __typename: 'CustomDomainData'
}

export type CustomDomainStatus = 'active' | 'pending' | 'active_redeploying' | 'moved' | 'pending_deletion' | 'deleted' | 'pending_blocked' | 'pending_migration' | 'pending_provisioned' | 'test_pending' | 'test_active' | 'test_active_apex' | 'test_blocked' | 'test_failed' | 'provisioned' | 'blocked'


/** An email template associated with a trigger event */
export interface EmailTemplate {
    /** Unique identifier of the email template */
    id: Scalars['ID']
    /** Event that triggers this email template */
    triggerEvent: EmailTriggerEvents
    /** Whether this is the default template for the trigger event */
    default: Scalars['Boolean']
    /** Display name of the email template */
    name: Scalars['String']
    /** Subject line of the email, supports template variables */
    title: Scalars['String']
    /** HTML body content of the email, supports template variables */
    contents: Scalars['String']
    /** Timestamp when the template was created */
    createdAt: Scalars['DateTime']
    /** Timestamp when the template was last updated */
    updatedAt: Scalars['DateTime']
    /** ID of the organization that owns this template */
    organizationId: Scalars['ID']
    __typename: 'EmailTemplate'
}


/** Paginated list of email templates */
export interface EmailTemplates {
    /** List of edges containing cursor and node pairs */
    edges: EmailTemplateEdge[]
    /** Flat list of items in the current page */
    nodes: EmailTemplate[]
    /** Pagination metadata for navigating between pages */
    pageInfo: ResponsePageInfo
    /** Total number of items across all pages */
    totalCount: (Scalars['Float'] | null)
    __typename: 'EmailTemplates'
}


/** An edge in a paginated connection containing a cursor and node */
export interface EmailTemplateEdge {
    /** Opaque cursor string for this edge, used for pagination */
    cursor: Scalars['String']
    /** The item at this edge */
    node: EmailTemplate[]
    __typename: 'EmailTemplateEdge'
}


/** The required fields for creating or updating an identity on a provider */
export interface IdentityProviderRequirements {
    /** The list of field names that must be provided */
    requiredFields: Scalars['String'][]
    __typename: 'IdentityProviderRequirements'
}


/** A publicly visible identity provider without sensitive configuration details */
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
    /** The date and time the identity provider was created */
    createdAt: Scalars['DateTime']
    /** The date and time the identity provider was last updated */
    updatedAt: Scalars['DateTime']
    __typename: 'PublicIdentityProvider'
}

export type IdentityProviderAvailability = 'PUBLIC' | 'PREVIEW' | 'PRIVATE'


/** A selectable option for a frontend module prop of type "select" */
export interface FrontendModulePropOptionModel {
    /** Display label for this option */
    label: Scalars['String']
    /** Value for this option */
    value: Scalars['String']
    __typename: 'FrontendModulePropOptionModel'
}


/** Schema definition for a single prop of a frontend module */
export interface FrontendModulePropSchemaModel {
    /** Property key/name */
    key: Scalars['String']
    /** Data type of this prop */
    type: FrontendModulePropType
    /** Display label for this prop */
    label: Scalars['String']
    /** Description of what this prop controls */
    description: (Scalars['String'] | null)
    /** Whether this prop is required */
    required: Scalars['Boolean']
    /** Default value for this prop (serialized as string) */
    defaultValue: (Scalars['String'] | null)
    /** Available options for select-type props */
    options: (FrontendModulePropOptionModel[] | null)
    /** Route parameter name for route-param type props */
    param: (Scalars['String'] | null)
    __typename: 'FrontendModulePropSchemaModel'
}

export type FrontendModulePropType = 'STRING' | 'NUMBER' | 'BOOLEAN' | 'SELECT' | 'ROUTE_PARAM'


/** An event that a frontend module can emit */
export interface FrontendModuleEventModel {
    /** Unique event name identifier */
    name: Scalars['String']
    /** Description of when this event is emitted */
    description: (Scalars['String'] | null)
    __typename: 'FrontendModuleEventModel'
}


/** A frontend micro-frontend module registered by a marketplace app */
export interface FrontendModuleModel {
    /** Unique name identifier for this module */
    name: Scalars['String']
    /** Human-readable display name for this module */
    displayName: Scalars['String']
    /** Description of what this module provides */
    description: (Scalars['String'] | null)
    /** Named export from the bundle to use as the module entry point */
    exportName: Scalars['String']
    /** Semantic version of this module */
    version: Scalars['String']
    /** Schema defining the props this module accepts */
    propsSchema: FrontendModulePropSchemaModel[]
    /** Events this module can emit */
    events: FrontendModuleEventModel[]
    __typename: 'FrontendModuleModel'
}


/** Size constraints for an extension point iframe */
export interface ExtensionPointSizeModel {
    /** Maximum width in pixels for the extension point */
    maxWidth: (Scalars['Int'] | null)
    /** Maximum height in pixels for the extension point */
    maxHeight: (Scalars['Int'] | null)
    __typename: 'ExtensionPointSizeModel'
}


/** A UI extension point where an app renders content within the platform */
export interface ExtensionPointModel {
    /** Location type where this extension point is rendered */
    type: ExtensionPointType
    /** Display label for the extension point tab or widget */
    label: Scalars['String']
    /** URL patterns where this extension is active (e.g. "/tournaments/:tournamentId/overview") */
    activePages: Scalars['String'][]
    /** Optional size constraints for the extension point iframe */
    size: (ExtensionPointSizeModel | null)
    __typename: 'ExtensionPointModel'
}

export type ExtensionPointType = 'TAB' | 'DASHBOARD_WIDGET' | 'ADMIN_NAVIGATION'


/** The manifest describing a marketplace app capabilities and configuration */
export interface AppManifestModel {
    /** Manifest schema version */
    version: Scalars['String']
    /** Permissions requested by this app (OrganizationPermission IDs) */
    permissions: Scalars['String'][]
    /** UI extensions registered by this app */
    extensions: ExtensionPointModel[]
    /** URL to receive webhook events when app is installed */
    webhookUrl: (Scalars['String'] | null)
    /** Webhook event types this app subscribes to */
    webhookEvents: WebhookEventType[]
    /** Metafield namespaces this app is allowed to use */
    metafieldNamespaces: Scalars['String'][]
    /** Frontend micro-frontend modules registered by this app */
    frontendModules: FrontendModuleModel[]
    /** S3 CDN path for the extension bundle (injected on publish) */
    extensionCdnPath: (Scalars['String'] | null)
    /** S3 CDN path for the module bundle (injected on publish) */
    moduleCdnPath: (Scalars['String'] | null)
    __typename: 'AppManifestModel'
}


/** Page-specific configuration for a CDN file, defining the URL path it serves */
export interface PlatformCdnFilePageConfig {
    /** The URL path pattern this page responds to (e.g. /events/:id) */
    path: Scalars['String']
    __typename: 'PlatformCdnFilePageConfig'
}


/** Configuration options for a CDN file */
export interface PlatformCdnFileConfigs {
    /** Page-specific configuration, required for PAGE type files */
    pageConfig: (PlatformCdnFilePageConfig | null)
    __typename: 'PlatformCdnFileConfigs'
}


/** A file stored on the platform CDN, such as a page template, component, text asset, or image */
export interface PlatformCdnFile {
    /** Unique identifier of the CDN file */
    id: Scalars['ID']
    /** The platform this file belongs to, if associated with a platform */
    platformId: (Scalars['ID'] | null)
    /** The platform template this file belongs to, if associated with a template */
    platformTemplateId: (Scalars['ID'] | null)
    /** The file name including path segments */
    name: Scalars['String']
    /** The type of CDN file (PAGE, COMPONENT, TEXT, or IMAGE) */
    type: PlatformCdnFileType
    /** When this file was last updated */
    updatedAt: Scalars['DateTime']
    /** When this file was created */
    createdAt: Scalars['DateTime']
    /** File configuration options such as page routing config */
    config: (PlatformCdnFileConfigs | null)
    /** File size in bytes */
    size: Scalars['Float']
    /** The CDN path for the published production version of this file */
    prodCdnPath: (Scalars['String'] | null)
    /** The CDN path for the development version of this file, visible only to authorized editors */
    devCdnPath: (Scalars['String'] | null)
    /** The text contents of the file, if applicable */
    contents: (Scalars['String'] | null)
    __typename: 'PlatformCdnFile'
}

export type PlatformCdnFileType = 'PAGE' | 'COMPONENT' | 'TEXT' | 'IMAGE'


/** A key-value pair representing a field in a presigned upload form */
export interface PresignedUrlField {
    /** The form field name */
    key: Scalars['String']
    /** The form field value */
    value: Scalars['String']
    __typename: 'PresignedUrlField'
}


/** A presigned URL with form fields for uploading a file directly to S3 */
export interface PresignedUrl {
    /** Form fields required for the presigned POST upload */
    fields: PresignedUrlField[]
    /** The S3 endpoint URL to POST the file upload to */
    url: Scalars['URL']
    __typename: 'PresignedUrl'
}


/** Result of a single automated review check */
export interface AppReviewCheck {
    /** Name identifier of the check (e.g. manifest_valid, urls_https) */
    name: Scalars['String']
    /** Whether this check passed */
    passed: Scalars['Boolean']
    /** Details or error message for this check */
    details: (Scalars['String'] | null)
    __typename: 'AppReviewCheck'
}


/** Result of the automated app review process */
export interface AppReviewResult {
    /** Whether all review checks passed */
    passed: Scalars['Boolean']
    /** Individual check results */
    checks: AppReviewCheck[]
    __typename: 'AppReviewResult'
}


/** A versioned release of a marketplace app */
export interface MarketplaceAppRelease {
    /** Unique identifier of the release */
    id: Scalars['ID']
    /** ID of the marketplace app */
    marketplaceAppId: Scalars['ID']
    /** Semantic version string */
    version: Scalars['String']
    /** Current review status of the release */
    status: MarketplaceAppReleaseStatus
    /** App manifest for this release */
    manifest: AppManifestModel
    /** S3 key for the extension bundle */
    extensionBundleKey: (Scalars['String'] | null)
    /** S3 key for the module bundle */
    moduleBundleKey: (Scalars['String'] | null)
    /** Release notes describing changes */
    releaseNotes: (Scalars['String'] | null)
    /** Automated review result details */
    reviewResult: (AppReviewResult | null)
    /** When the release was reviewed */
    reviewedAt: (Scalars['DateTime'] | null)
    /** When the release was created */
    createdAt: Scalars['DateTime']
    __typename: 'MarketplaceAppRelease'
}


/** Status of a marketplace app release */
export type MarketplaceAppReleaseStatus = 'PENDING_REVIEW' | 'APPROVED' | 'REJECTED'


/** A release with presigned URLs for bundle upload */
export interface AppReleaseWithUploadUrls {
    /** The created release */
    release: MarketplaceAppRelease
    /** Presigned POST data for extension bundle upload */
    extensionUploadUrl: (PresignedUrl | null)
    /** Presigned POST data for module bundle upload */
    moduleUploadUrl: (PresignedUrl | null)
    __typename: 'AppReleaseWithUploadUrls'
}


/** Bundle validation error details */
export interface AppBundleValidationError {
    /** Whether validation passed */
    valid: Scalars['Boolean']
    /** List of validation errors */
    errors: Scalars['String'][]
    __typename: 'AppBundleValidationError'
}


/** A versioned release of an app with a snapshot of its manifest */
export interface AppRelease {
    /** Unique identifier of the release */
    id: Scalars['ID']
    /** ID of the app */
    appId: Scalars['ID']
    /** Semantic version string (e.g. 1.0.0) */
    version: Scalars['String']
    /** Release notes */
    notes: (Scalars['String'] | null)
    /** Manifest snapshot at release time */
    manifest: AppManifestModel
    /** Current status of the release */
    status: AppReleaseStatus
    /** Review result details */
    reviewResult: (AppReviewResult | null)
    /** When the release was created */
    createdAt: Scalars['DateTime']
    /** When the release was last updated */
    updatedAt: Scalars['DateTime']
    __typename: 'AppRelease'
}


/** Status of an app release */
export type AppReleaseStatus = 'DRAFT' | 'PENDING_REVIEW' | 'APPROVED' | 'REJECTED'


/** OAuth2 client metadata for an organization app */
export interface OrganizationAppConfigMetadata {
    /** URL where users are redirected to log in */
    loginUrl: Scalars['String']
    /** URL where users are redirected to grant consent */
    consentUrl: Scalars['String']
    /** ID of the account that created this app */
    creatorId: Scalars['String']
    /** Whether the app requires explicit user consent during authorization */
    requiresConsent: Scalars['Boolean']
    /** Whether this is a public OAuth2 client (no client secret) */
    public: Scalars['Boolean']
    __typename: 'OrganizationAppConfigMetadata'
}


/** OAuth2 client configuration for an organization app */
export interface OrganizationAppConfig {
    /** Display name of the OAuth2 client */
    name: Scalars['String']
    /** ID of the organization that owns this app */
    organizationId: Scalars['ID']
    /** Allowed OAuth2 redirect URLs after authorization */
    redirectUrls: Scalars['String'][]
    /** Allowed redirect URLs after logout */
    logoutRedirectUrls: Scalars['String'][]
    /** OAuth2 scopes available to this client */
    scope: Scalars['String']
    /** Additional metadata for the OAuth2 client */
    metadata: OrganizationAppConfigMetadata
    __typename: 'OrganizationAppConfig'
}


/** An OAuth2 application registered by an organization */
export interface OrganizationApp {
    /** Unique identifier of the app (also the OAuth2 client ID) */
    id: Scalars['String']
    /** Display name of the app */
    name: Scalars['String']
    /** Description of the app */
    description: Scalars['String']
    /** ID of the account that created this app */
    creatorId: Scalars['ID']
    /** ID of the organization that owns this app */
    organizationId: Scalars['ID']
    /** Timestamp when the app was created */
    createdAt: Scalars['DateTime']
    /** Timestamp when the app was last updated */
    updatedAt: Scalars['DateTime']
    /** OAuth2 client secret (only returned on creation or secret reset) */
    secret: (Scalars['String'] | null)
    /** Whether this is a public OAuth2 client (no client secret required) */
    public: (Scalars['Boolean'] | null)
    /** App icon URL */
    icon: (Scalars['String'] | null)
    /** Short description of the app */
    shortDescription: (Scalars['String'] | null)
    /** OAuth2 client configuration for this app */
    configuration: OrganizationAppConfig
    /** Account that created this app */
    creator: Account
    /** Working copy of the app manifest */
    manifest: (AppManifestModel | null)
    /** Releases for this app */
    releases: AppRelease[]
    /** Active webhooks for this app */
    appWebhooks: AppWebhook[]
    __typename: 'OrganizationApp'
}


/** Paginated list of organization apps */
export interface OrganizationApps {
    /** List of edges containing cursor and node pairs */
    edges: OrganizationAppEdge[]
    /** Flat list of items in the current page */
    nodes: OrganizationApp[]
    /** Pagination metadata for navigating between pages */
    pageInfo: ResponsePageInfo
    /** Total number of items across all pages */
    totalCount: (Scalars['Float'] | null)
    __typename: 'OrganizationApps'
}


/** An edge in a paginated connection containing a cursor and node */
export interface OrganizationAppEdge {
    /** Opaque cursor string for this edge, used for pagination */
    cursor: Scalars['String']
    /** The item at this edge */
    node: OrganizationApp[]
    __typename: 'OrganizationAppEdge'
}


/** A webhook auto-created when an app is installed on an organization */
export interface AppWebhook {
    /** Unique identifier of the webhook */
    id: Scalars['ID']
    /** ID of the app */
    appId: Scalars['ID']
    /** ID of the marketplace installation (null for private apps) */
    installationId: (Scalars['ID'] | null)
    /** ID of the organization where the app is installed */
    organizationId: Scalars['ID']
    /** URL where webhook events are sent */
    url: Scalars['String']
    /** Event types this webhook subscribes to */
    events: Scalars['String'][]
    /** Whether this webhook is currently active */
    active: Scalars['Boolean']
    /** When the webhook was created */
    createdAt: Scalars['DateTime']
    /** When the webhook was last updated */
    updatedAt: Scalars['DateTime']
    __typename: 'AppWebhook'
}


/** An application attached to an organization with associated permissions and group assignment */
export interface OrganizationAttachedApp {
    /** The ID of the organization this app is attached to */
    organizationId: Scalars['ID']
    /** The ID of the permission group assigned to this attached app */
    groupId: (Scalars['ID'] | null)
    /** The unique identifier of the attached application */
    appId: Scalars['String']
    /** The set of permissions granted to this attached app */
    permissions: (GroupPermission[] | null)
    /** When this app attachment was created */
    createdAt: Scalars['DateTime']
    /** When this app attachment was last updated */
    updatedAt: Scalars['DateTime']
    /** The application details for this attached app */
    app: OrganizationApp
    /** The permission group assigned to this attached app */
    group: (OrganizationGroup | null)
    __typename: 'OrganizationAttachedApp'
}


/** Paginated list of applications attached to an organization */
export interface OrganizationAttachedApps {
    /** List of edges containing cursor and node pairs */
    edges: OrganizationAttachedAppEdge[]
    /** Flat list of items in the current page */
    nodes: OrganizationAttachedApp[]
    /** Pagination metadata for navigating between pages */
    pageInfo: ResponsePageInfo
    /** Total number of items across all pages */
    totalCount: (Scalars['Float'] | null)
    __typename: 'OrganizationAttachedApps'
}


/** An edge in a paginated connection containing a cursor and node */
export interface OrganizationAttachedAppEdge {
    /** Opaque cursor string for this edge, used for pagination */
    cursor: Scalars['String']
    /** The item at this edge */
    node: OrganizationAttachedApp[]
    __typename: 'OrganizationAttachedAppEdge'
}


/** An identity provider configured for an organization, supporting OAuth2 or OpenID Connect authentication */
export interface OrganizationIdentityProvider {
    /** Whether this identity provider is currently active */
    enabled: Scalars['Boolean']
    /** Whether player accounts must be validated through this provider */
    requiredForPlayerValidation: Scalars['Boolean']
    /** Whether users can log in using this identity provider */
    allowLogin: Scalars['Boolean']
    /** Human-readable description of this identity provider */
    description: Scalars['String']
    /** URL or identifier for the provider icon */
    icon: (Scalars['String'] | null)
    /** Unique identifier of this identity provider */
    id: Scalars['ID']
    /** Reference to the parent root identity provider, if derived from one */
    identityProviderId: (Scalars['ID'] | null)
    /** The OAuth2 or OpenID Connect configuration for this provider */
    configuration: (IdentityProviderConfigurations | null)
    /** Display name of the identity provider */
    name: Scalars['String']
    /** The organization this provider belongs to */
    organizationId: (Scalars['ID'] | null)
    /** When this identity provider was created */
    createdAt: Scalars['DateTime']
    /** When this identity provider was last updated */
    updatedAt: Scalars['DateTime']
    /** The root identity provider this organization provider was derived from */
    parentIdentityProvider: (PublicIdentityProvider | null)
    __typename: 'OrganizationIdentityProvider'
}

export type IdentityProviderConfigurations = (OAuthClientConfiguration | OpenidConfiguration) & { __isUnion?: true }


/** Configuration for an OAuth2 identity provider client */
export interface OAuthClientConfiguration {
    /** OAuth2/OIDC authorization endpoint URL */
    authorizationEndpoint: (Scalars['String'] | null)
    /** List of endpoints to retrieve user data from after authentication */
    dataRetrievers: DataRetrievalConfig[]
    /** Issuer identifier for the identity provider */
    issuer: (Scalars['String'] | null)
    /** Type of identity provider (OPENID or OAUTH2) */
    providerType: IdentityProviderType
    /** OAuth2 client ID issued by the identity provider */
    clientId: Scalars['String']
    /** OAuth2 client secret issued by the identity provider */
    clientSecret: Scalars['String']
    /** Authentication method used when calling the token endpoint */
    tokenEndpointAuthMethod: (OauthEndpointAuthMethod | null)
    /** URL to redirect users back to after authentication */
    redirectUrl: Scalars['String']
    /** URL of the OAuth2 token endpoint for exchanging authorization codes */
    tokenEndpoint: (Scalars['String'] | null)
    /** URL of the OAuth2 authorization endpoint where users are redirected to authenticate */
    authorizationUrl: (Scalars['String'] | null)
    /** URL where users are redirected after the identity linking process completes. Required for the IDP-based identity linking flow via generateIdentityLinkUrl. */
    linkRedirectUrl: (Scalars['String'] | null)
    __typename: 'OAuthClientConfiguration'
}

export type IdentityProviderType = 'OPENID' | 'OAUTH2'

export type OauthEndpointAuthMethod = 'CLIENT_SECRET_POST' | 'CLIENT_SECRET_BASIC' | 'CLIENT_SECRET_JWT' | 'PRIVATE_KEY_JWT' | 'TLS_CLIENT_AUTH' | 'SELF_SIGNED_TLS_CLIENT_AUTH' | 'NONE'


/** Configuration for an OpenID Connect identity provider client */
export interface OpenidConfiguration {
    /** OAuth2/OIDC authorization endpoint URL */
    authorizationEndpoint: (Scalars['String'] | null)
    /** List of endpoints to retrieve user data from after authentication */
    dataRetrievers: DataRetrievalConfig[]
    /** Issuer identifier for the identity provider */
    issuer: (Scalars['String'] | null)
    /** Type of identity provider (OPENID or OAUTH2) */
    providerType: IdentityProviderType
    /** OpenID Connect client ID issued by the identity provider */
    clientId: Scalars['String']
    /** OpenID Connect client secret issued by the identity provider */
    clientSecret: Scalars['String']
    /** URL to redirect users back to after OpenID authentication */
    redirectUrl: Scalars['String']
    __typename: 'OpenidConfiguration'
}


/** A webhook endpoint configured to receive event notifications for an organization */
export interface Webhook {
    /** Unique identifier of the webhook */
    id: Scalars['ID']
    /** The organization this webhook belongs to */
    organizationId: Scalars['ID']
    /** The event types this webhook is subscribed to */
    events: WebhookEventType[]
    /** The URL that will receive webhook POST requests */
    url: Scalars['String']
    /** Human-readable description of this webhook */
    description: Scalars['String']
    /** Whether this webhook is currently active and receiving events */
    active: Scalars['Boolean']
    /** The secret key used to sign webhook payloads for verification */
    secret: Scalars['String']
    __typename: 'Webhook'
}


/** A skill rating value assigned to a player for a specific rating definition */
export interface PlayerSkillRating {
    /** Unique identifier for this skill rating entry */
    id: Scalars['ID']
    /** The ID of the player profile this rating belongs to */
    playerProfileId: Scalars['ID']
    /** The ID of the skill rating definition */
    ratingId: Scalars['ID']
    /** The numeric skill rating value */
    value: Scalars['Float']
    /** The date and time this skill rating was created */
    createdAt: Scalars['DateTime']
    /** The date and time this skill rating was last updated */
    updatedAt: Scalars['DateTime']
    /** The player profile associated with this skill rating */
    player: Player
    __typename: 'PlayerSkillRating'
}


/** A single match within a game, representing one play session between teams */
export interface TournamentStepGroupRoundGameMatch {
    /** Unique identifier for the match */
    id: Scalars['ID']
    /** Sort order of this match within the game (for best-of series) */
    order: Scalars['Float']
    /** Current status of the match (WAITING, STARTED, ENDED) */
    status: MatchStatus
    /** ID of the parent game */
    tournamentStepGroupRoundGameId: Scalars['ID']
    /** Configuration settings for the match including scoring variables */
    configuration: MatchConfiguration
    /** Timestamp when the match was created */
    createdAt: Scalars['DateTime']
    /** Timestamp when the match was last updated */
    updatedAt: Scalars['DateTime']
    __typename: 'TournamentStepGroupRoundGameMatch'
}

export type MatchStatus = 'WAITING' | 'STARTED' | 'ENDED'


/** Paginated list of tournament match results for a player */
export interface TournamentStepGroupRoundGameMatches {
    /** List of edges containing cursor and node pairs */
    edges: TournamentStepGroupRoundGameMatchEdge[]
    /** Flat list of items in the current page */
    nodes: TournamentStepGroupRoundGameMatch[]
    /** Pagination metadata for navigating between pages */
    pageInfo: ResponsePageInfo
    /** Total number of items across all pages */
    totalCount: (Scalars['Float'] | null)
    __typename: 'TournamentStepGroupRoundGameMatches'
}


/** An edge in a paginated connection containing a cursor and node */
export interface TournamentStepGroupRoundGameMatchEdge {
    /** Opaque cursor string for this edge, used for pagination */
    cursor: Scalars['String']
    /** The item at this edge */
    node: TournamentStepGroupRoundGameMatch[]
    __typename: 'TournamentStepGroupRoundGameMatchEdge'
}


/** Configuration for collecting payments through the organization, including platform fees and Stripe account */
export interface OrganizationPaymentCollectionConfiguration {
    /** The percentage fee charged by WellPlayed on each transaction (e.g. 0.02 = 2%) */
    wellPlayedFeePercent: Scalars['Float']
    /** The minimum fee in cents charged by WellPlayed per transaction */
    wellPlayedMinimalFee: Scalars['Float']
    __typename: 'OrganizationPaymentCollectionConfiguration'
}


/** A member of a tournament team */
export interface TournamentTeamMemberDto {
    /** Unique identifier for this team membership */
    id: Scalars['ID']
    /** Current status of this team member (accepted, awaiting, denied) */
    status: TournamentTeamMemberStatus
    /** ID of the tournament team this member belongs to */
    tournamentTeamId: Scalars['ID']
    /** ID of the player profile for this member */
    playerProfileId: Scalars['ID']
    /** Date and time when this membership was created */
    createdAt: Scalars['DateTime']
    /** Date and time when this membership was last updated */
    updatedAt: Scalars['DateTime']
    /** The tournament team this member belongs to */
    team: TournamentTeam
    __typename: 'TournamentTeamMemberDto'
}

export type TournamentTeamMemberStatus = 'AWAITING' | 'ACCEPTED' | 'DENIED'


/** Paginated list of tournament team members */
export interface TeamMembers {
    /** List of edges containing cursor and node pairs */
    edges: TournamentTeamMemberEdge[]
    /** Flat list of items in the current page */
    nodes: TournamentTeamMemberDto[]
    /** Pagination metadata for navigating between pages */
    pageInfo: ResponsePageInfo
    /** Total number of items across all pages */
    totalCount: (Scalars['Float'] | null)
    __typename: 'TeamMembers'
}


/** An edge in a paginated connection containing a cursor and node */
export interface TournamentTeamMemberEdge {
    /** Opaque cursor string for this edge, used for pagination */
    cursor: Scalars['String']
    /** The item at this edge */
    node: TournamentTeamMemberDto[]
    __typename: 'TournamentTeamMemberEdge'
}


/** A team registered to a tournament */
export interface TournamentTeam {
    /** Unique identifier of the tournament team */
    id: Scalars['ID']
    /** Display name of the team */
    name: Scalars['String']
    /** Short tag or abbreviation for the team */
    tag: Scalars['String']
    /** ID of the permanent team this tournament team was created from */
    teamId: (Scalars['ID'] | null)
    /** ID of the player profile who manages this team */
    managerId: (Scalars['ID'] | null)
    /** ID of the tournament this team is registered to */
    tournamentId: Scalars['ID']
    /** Current registration and validation status of the team */
    status: TournamentTeamStatus
    /** Date and time when the team was registered */
    createdAt: Scalars['DateTime']
    /** Date and time when the team was last updated */
    updatedAt: Scalars['DateTime']
    /** List of members belonging to this team */
    members: TournamentTeamMemberDto[]
    /** Custom fields configured for this tournament team with their values and visibility rules */
    customFields: PropertyConfigWithValue[]
    /** The tournament this team is registered to */
    tournament: Tournament
    __typename: 'TournamentTeam'
}


/** Paginated list of tournament teams */
export interface TournamentTeams {
    /** List of edges containing cursor and node pairs */
    edges: TournamentTeamEdge[]
    /** Flat list of items in the current page */
    nodes: TournamentTeam[]
    /** Pagination metadata for navigating between pages */
    pageInfo: ResponsePageInfo
    /** Total number of items across all pages */
    totalCount: (Scalars['Float'] | null)
    __typename: 'TournamentTeams'
}


/** An edge in a paginated connection containing a cursor and node */
export interface TournamentTeamEdge {
    /** Opaque cursor string for this edge, used for pagination */
    cursor: Scalars['String']
    /** The item at this edge */
    node: TournamentTeam[]
    __typename: 'TournamentTeamEdge'
}


/** Score entry for a tournament team */
export interface TournamentTeamScore {
    /** ID of the tournament team */
    teamId: Scalars['ID']
    /** Accumulated score for this team */
    score: Scalars['Float']
    /** The tournament team associated with this score */
    team: TournamentTeam
    __typename: 'TournamentTeamScore'
}


/** A step (phase) within a tournament, representing a bracket or competition stage */
export interface TournamentStep {
    /** Unique identifier of the tournament step */
    id: Scalars['ID']
    /** ID of the tournament this step belongs to */
    tournamentId: Scalars['ID']
    /** Name of the tournament step */
    name: Scalars['String']
    /** Description of the tournament step */
    description: Scalars['String']
    /** Display order of this step within the tournament */
    order: Scalars['Float']
    /** Type of bracket or competition format (single elimination, double elimination, round robin, etc.) */
    type: StepType
    /** Current lifecycle status of this step (configured, generated, seeded, started, ended) */
    status: StepStatus
    /** Detailed configuration for the step including groups, rounds, and game settings */
    configuration: StepConfiguration
    /** Date and time when the step was created */
    createdAt: Scalars['DateTime']
    /** Date and time when the step was last updated */
    updatedAt: Scalars['DateTime']
    /** Team scores accumulated within this tournament step */
    teamScores: TournamentTeamScore[]
    /** The tournament this step belongs to */
    tournament: Tournament
    __typename: 'TournamentStep'
}

export type StepType = 'SCORE' | 'ROUND_ROBIN' | 'SINGLE_ELIM' | 'DOUBLE_ELIM' | 'CUSTOM'

export type StepStatus = 'CONFIGURED' | 'GENERATING' | 'GENERATED' | 'SEEDING' | 'SEEDED' | 'STARTED' | 'ENDED'


/** Paginated list of tournaments */
export interface Tournaments {
    /** List of edges containing cursor and node pairs */
    edges: TournamentEdge[]
    /** Flat list of items in the current page */
    nodes: Tournament[]
    /** Pagination metadata for navigating between pages */
    pageInfo: ResponsePageInfo
    /** Total number of items across all pages */
    totalCount: (Scalars['Float'] | null)
    __typename: 'Tournaments'
}


/** An edge in a paginated connection containing a cursor and node */
export interface TournamentEdge {
    /** Opaque cursor string for this edge, used for pagination */
    cursor: Scalars['String']
    /** The item at this edge */
    node: Tournament[]
    __typename: 'TournamentEdge'
}


/** A game within a tournament round, containing matches between teams */
export interface TournamentStepGroupRoundGame {
    /** Unique identifier for the game */
    id: Scalars['ID']
    /** Configuration settings for the game */
    configuration: GameConfiguration
    /** Current status of the game (WAITING, STARTED, ENDED) */
    status: TournamentGameStatus
    /** Sort order of this game within the round */
    order: Scalars['Float']
    /** ID of the parent round */
    tournamentStepGroupRoundId: Scalars['ID']
    /** ID of the game the winner advances to */
    winningGameId: (Scalars['ID'] | null)
    /** ID of the game the loser drops to (e.g. losers bracket) */
    losingGameId: (Scalars['ID'] | null)
    /** Timestamp when the game was created */
    createdAt: Scalars['DateTime']
    /** Timestamp when the game was last updated */
    updatedAt: Scalars['DateTime']
    /** Matches within this game (best-of series) */
    matches: TournamentStepGroupRoundGameMatch[]
    __typename: 'TournamentStepGroupRoundGame'
}

export type TournamentGameStatus = 'WAITING' | 'STARTED' | 'ENDED'


/** A round within a tournament group, containing games */
export interface TournamentStepGroupRound {
    /** Unique identifier for the round */
    id: Scalars['ID']
    /** Display name of the round */
    name: Scalars['String']
    /** Configuration settings for the round */
    configuration: RoundConfiguration
    /** ID of the parent group */
    tournamentStepGroupId: Scalars['ID']
    /** Sort order of this round within the group */
    order: Scalars['Float']
    /** Timestamp when the round was created */
    createdAt: Scalars['DateTime']
    /** Timestamp when the round was last updated */
    updatedAt: Scalars['DateTime']
    /** Games within this round */
    games: TournamentStepGroupRoundGame[]
    __typename: 'TournamentStepGroupRound'
}


/** A group within a tournament step, containing rounds and team matchups */
export interface TournamentStepGroup {
    /** Unique identifier for the group */
    id: Scalars['ID']
    /** Display name of the group */
    name: Scalars['String']
    /** Detailed description of the group */
    description: Scalars['String']
    /** Configuration settings for the group */
    configuration: GroupConfiguration
    /** ID of the parent tournament step */
    tournamentStepId: Scalars['ID']
    /** Timestamp when the group was created */
    createdAt: Scalars['DateTime']
    /** Timestamp when the group was last updated */
    updatedAt: Scalars['DateTime']
    /** Rounds within this group */
    rounds: TournamentStepGroupRound[]
    __typename: 'TournamentStepGroup'
}


/** A team score entry for a specific match */
export interface TournamentStepGroupRoundGameMatchScore {
    /** Unique identifier for this match score */
    id: Scalars['ID']
    /** ID of the match this score belongs to */
    matchId: Scalars['ID']
    /** ID of the team this score belongs to */
    teamId: Scalars['ID']
    /** Numeric score value for this team in this match */
    score: Scalars['Float']
    /** Status of this score (WAITING, WINNER, LOSER, FORFEIT) */
    status: MatchScoreStatus
    /** Timestamp when the score was created */
    createdAt: Scalars['DateTime']
    /** Timestamp when the score was last updated */
    updatedAt: Scalars['DateTime']
    __typename: 'TournamentStepGroupRoundGameMatchScore'
}

export type MatchScoreStatus = 'WAITING' | 'WINNER' | 'LOSER' | 'FORFEIT'


/** Paginated list of match scores */
export interface TournamentStepGroupRoundGameMatchScores {
    /** List of edges containing cursor and node pairs */
    edges: TournamentStepGroupRoundGameMatchScoreEdge[]
    /** Flat list of items in the current page */
    nodes: TournamentStepGroupRoundGameMatchScore[]
    /** Pagination metadata for navigating between pages */
    pageInfo: ResponsePageInfo
    /** Total number of items across all pages */
    totalCount: (Scalars['Float'] | null)
    __typename: 'TournamentStepGroupRoundGameMatchScores'
}


/** An edge in a paginated connection containing a cursor and node */
export interface TournamentStepGroupRoundGameMatchScoreEdge {
    /** Opaque cursor string for this edge, used for pagination */
    cursor: Scalars['String']
    /** The item at this edge */
    node: TournamentStepGroupRoundGameMatchScore[]
    __typename: 'TournamentStepGroupRoundGameMatchScoreEdge'
}


/** An administrator assigned to a tournament with specific permissions */
export interface TournamentAdmin {
    /** Unique identifier for this admin assignment */
    id: Scalars['ID']
    /** ID of the tournament this admin is assigned to */
    tournamentId: Scalars['ID']
    /** ID of the account that has admin access */
    accountId: Scalars['ID']
    /** List of permissions granted to this tournament admin */
    permissions: TournamentAdminPermissions[]
    /** Date and time when this admin assignment was created */
    createdAt: Scalars['DateTime']
    /** Date and time when this admin assignment was last updated */
    updatedAt: Scalars['DateTime']
    /** The account associated with this tournament admin */
    account: Account
    __typename: 'TournamentAdmin'
}

export type TournamentAdminPermissions = 'MANAGE_TOURNAMENT' | 'MANAGE_TEAMS' | 'MANAGE_SCORES' | 'MANAGE_PERMISSIONS'


/** A condition that must be met for a rule to execute */
export interface RuleConditionModel {
    /** Formula string for the field to check (left side) */
    field: Scalars['String']
    /** Comparison operator (EQ, NEQ, GT, GTE, LT, LTE, etc.) */
    operator: RuleConditionOperatorType
    /** Formula string for the value to compare against (right side) */
    value: Scalars['String']
    /** Scope at which this condition is evaluated (e.g. PER_TEAM, ALL_TEAMS) */
    scope: (ConditionScopeType | null)
    __typename: 'RuleConditionModel'
}

export type RuleConditionOperatorType = 'eq' | 'neq' | 'gt' | 'gte' | 'lt' | 'lte' | 'in' | 'between'

export type ConditionScopeType = 'MATCH' | 'GAME' | 'ROUND' | 'GROUP' | 'STEP'


/** Reference to a game by absolute ID or relative indices within the bracket structure */
export interface GameRefModel {
    /** Reference type (ABSOLUTE by ID or RELATIVE by indices) */
    type: RefType
    /** Absolute game ID (used when type is ABSOLUTE) */
    id: (Scalars['ID'] | null)
    /** Zero-based group index (used when type is RELATIVE) */
    groupIndex: (Scalars['Int'] | null)
    /** Zero-based round index within the group (used when type is RELATIVE) */
    roundIndex: (Scalars['Int'] | null)
    /** Zero-based game index within the round (used when type is RELATIVE) */
    gameIndex: (Scalars['Int'] | null)
    /** Zero-based team slot index within the game */
    slot: (Scalars['Int'] | null)
    __typename: 'GameRefModel'
}

export type RefType = 'ID' | 'RELATIVE'


/** Reference to a group by absolute ID or relative index */
export interface GroupRefModel {
    /** Reference type (ABSOLUTE by ID or RELATIVE by index) */
    type: RefType
    /** Absolute group ID (used when type is ABSOLUTE) */
    id: (Scalars['ID'] | null)
    /** Zero-based group index (used when type is RELATIVE) */
    groupIndex: (Scalars['Int'] | null)
    __typename: 'GroupRefModel'
}


/** Reference to a round by absolute ID or relative indices */
export interface RoundRefModel {
    /** Reference type (ABSOLUTE by ID or RELATIVE by indices) */
    type: RefType
    /** Absolute round ID (used when type is ABSOLUTE) */
    id: (Scalars['ID'] | null)
    /** Zero-based group index (used when type is RELATIVE) */
    groupIndex: (Scalars['Int'] | null)
    /** Zero-based round index within the group (used when type is RELATIVE) */
    roundIndex: (Scalars['Int'] | null)
    __typename: 'RoundRefModel'
}


/** Reference to a tournament step by absolute ID or relative position */
export interface StepRefModel {
    /** Reference type (ABSOLUTE by ID or RELATIVE by position) */
    type: RefType
    /** Absolute step ID (used when type is ABSOLUTE) */
    id: (Scalars['ID'] | null)
    /** Relative position (PREVIOUS, NEXT, CURRENT) when type is RELATIVE */
    relative: (StepRelativePosition | null)
    __typename: 'StepRefModel'
}

export type StepRelativePosition = 'PREVIOUS' | 'NEXT' | 'CURRENT'


/** Variable definition used in match score formula computation */
export interface MatchConfigVariableModel {
    /** Variable name used in the scoring formula */
    formulaName: Scalars['String']
    /** Human-readable label for the variable */
    displayName: Scalars['String']
    /** Default numeric value if not explicitly provided */
    defaultValue: Scalars['Float']
    __typename: 'MatchConfigVariableModel'
}


/** Match configuration reference specifying where to source match settings from */
export interface MatchConfigRefModel {
    /** Source of the match configuration (INLINE, INHERIT, etc.) */
    source: MatchConfigSource
    /** Inline scoring variables (used when source is INLINE) */
    variables: (MatchConfigVariableModel[] | null)
    /** Inline score formula expression (used when source is INLINE) */
    scoreFormula: (Scalars['String'] | null)
    __typename: 'MatchConfigRefModel'
}

export type MatchConfigSource = 'STEP_CONFIG' | 'INLINE'


/** Configuration for auto-generating bracket structure from a team count */
export interface AutoGenerateConfigModel {
    /** Auto-generation algorithm type (SINGLE_ELIM, ROUND_ROBIN, etc.) */
    type: AutoGenerateType
    /** Minimum team count to trigger auto-generation */
    fromTeamCount: (Scalars['Int'] | null)
    __typename: 'AutoGenerateConfigModel'
}

export type AutoGenerateType = 'ROUND_ROBIN_PAIRS' | 'BRACKET' | 'SWISS_PAIRS' | 'LOWER_BRACKET' | 'STEP_LADDER' | 'DOUBLE_ROUND_ROBIN_PAIRS' | 'PAGE_PLAYOFF' | 'GSL_DUAL_TOURNAMENT'


/** Scope that restricts when a rule triggers by limiting to specific game, round, or group */
export interface TriggerScopeModel {
    /** Restrict trigger to events within this specific game */
    gameId: (Scalars['ID'] | null)
    /** Restrict trigger to events within this specific round */
    roundId: (Scalars['ID'] | null)
    /** Restrict trigger to events within this specific group */
    groupId: (Scalars['ID'] | null)
    __typename: 'TriggerScopeModel'
}


/** Event data that triggered a rule execution */
export interface RuleEventDataModel {
    /** IDs of teams involved in the triggering event */
    teamIds: Scalars['String'][]
    /** Serialized scores map */
    scores: (Scalars['String'] | null)
    /** Serialized match result map */
    matchResult: (Scalars['String'] | null)
    /** ID of the game that triggered the event */
    gameId: (Scalars['String'] | null)
    /** ID of the round that triggered the event */
    roundId: (Scalars['String'] | null)
    /** ID of the group that triggered the event */
    groupId: (Scalars['String'] | null)
    __typename: 'RuleEventDataModel'
}


/** Result of evaluating a single condition during rule execution */
export interface ConditionEvaluationModel {
    /** Left-side field expression that was evaluated */
    field: Scalars['String']
    /** Comparison operator used */
    operator: Scalars['String']
    /** Right-side value expression that was evaluated */
    value: Scalars['String']
    /** Scope at which the condition was evaluated */
    scope: (Scalars['String'] | null)
    /** Whether the condition evaluated to true */
    result: Scalars['Boolean']
    __typename: 'ConditionEvaluationModel'
}


/** Result of executing a single action during rule execution */
export interface ActionResultModel {
    /** The action that was executed */
    action: RuleAction
    /** Whether the action executed successfully */
    success: Scalars['Boolean']
    /** ID of the team the action was applied to */
    teamId: Scalars['String']
    /** Human-readable details of the action result */
    details: Scalars['String']
    __typename: 'ActionResultModel'
}

export type RuleAction = (AdvanceToGameActionModel | AdvanceToGroupActionModel | AdvanceToStepActionModel | EliminateActionModel | GenerateNextRoundActionModel | EndGameActionModel | EndRoundActionModel | EndGroupActionModel | SetTeamPropertyActionModel) & { __isUnion?: true }


/** Action that advances a team to a specific game in the bracket */
export interface AdvanceToGameActionModel {
    /** Action type discriminator */
    type: RuleActionType
    /** Reference to the target game */
    target: GameRefModel
    __typename: 'AdvanceToGameActionModel'
}

export type RuleActionType = 'ADVANCE_TO_GAME' | 'ADVANCE_TO_GROUP' | 'ADVANCE_TO_STEP' | 'ELIMINATE' | 'GENERATE_NEXT_ROUND' | 'END_GAME' | 'END_ROUND' | 'END_GROUP' | 'SET_TEAM_PROPERTY'


/** Action that advances a team to a specific group */
export interface AdvanceToGroupActionModel {
    /** Action type discriminator */
    type: RuleActionType
    /** Reference to the target group */
    target: GroupRefModel
    /** Strategy for mapping team rankings into the target group */
    rankMapping: RankMappingType
    __typename: 'AdvanceToGroupActionModel'
}

export type RankMappingType = 'BY_RANK' | 'SEED_OPTIMIZED' | 'RANDOM'


/** Action that advances a team to a different tournament step */
export interface AdvanceToStepActionModel {
    /** Action type discriminator */
    type: RuleActionType
    /** Reference to the target step */
    target: StepRefModel
    /** Strategy for mapping team rankings into the target step */
    rankMapping: RankMappingType
    __typename: 'AdvanceToStepActionModel'
}


/** Action that eliminates a team from the tournament */
export interface EliminateActionModel {
    /** Action type discriminator */
    type: RuleActionType
    __typename: 'EliminateActionModel'
}


/** Action that generates a new round with paired games based on a pairing strategy */
export interface GenerateNextRoundActionModel {
    /** Action type discriminator */
    type: RuleActionType
    /** Algorithm used to pair teams into games */
    pairingStrategy: PairingStrategyType
    /** Number of games to create in the generated round */
    gamesPerRound: (Scalars['Int'] | null)
    /** Number of team slots per generated game */
    teamSlotsPerGame: (Scalars['Int'] | null)
    /** Best-of series count for generated matches */
    bestOf: (Scalars['Int'] | null)
    /** Match configuration for generated games */
    matchConfiguration: (MatchConfigRefModel | null)
    __typename: 'GenerateNextRoundActionModel'
}

export type PairingStrategyType = 'SWISS_DUTCH' | 'SWISS_MONRAD' | 'RANDOM' | 'BY_RANK'


/** Action that forcefully ends a game */
export interface EndGameActionModel {
    /** Action type discriminator */
    type: RuleActionType
    /** Optional scope limiting which game to end */
    scope: (GameRefModel | null)
    __typename: 'EndGameActionModel'
}


/** Action that forcefully ends a round */
export interface EndRoundActionModel {
    /** Action type discriminator */
    type: RuleActionType
    /** Optional scope limiting which round to end */
    scope: (RoundRefModel | null)
    __typename: 'EndRoundActionModel'
}


/** Action that forcefully ends a group */
export interface EndGroupActionModel {
    /** Action type discriminator */
    type: RuleActionType
    /** Optional scope limiting which group to end */
    scope: (GroupRefModel | null)
    __typename: 'EndGroupActionModel'
}


/** Action that sets a custom property on a team */
export interface SetTeamPropertyActionModel {
    /** Action type discriminator */
    type: RuleActionType
    /** Property key to set on the team */
    key: Scalars['String']
    /** Formula string for the computed value */
    formula: Scalars['String']
    __typename: 'SetTeamPropertyActionModel'
}


/** Tiebreaker rule used to resolve tied scores in a scoring rule set */
export interface TiebreakerRuleModel {
    /** Unique identifier for the tiebreaker rule */
    id: Scalars['ID']
    /** Priority order of this tiebreaker (lower runs first) */
    order: Scalars['Float']
    /** Type of tiebreaker algorithm (e.g. HEAD_TO_HEAD, BUCHHOLZ) */
    type: Scalars['String']
    /** Human-readable formula string */
    formula: (Scalars['String'] | null)
    /** Sort direction for this tiebreaker (ASC or DESC) */
    sortOrder: RuleSortOrder
    __typename: 'TiebreakerRuleModel'
}

export type RuleSortOrder = 'ASC' | 'DESC'


/** Scoring configuration defining how team scores are calculated and aggregated */
export interface ScoringRuleSetModel {
    /** Unique identifier for the scoring rule set */
    id: Scalars['ID']
    /** Method used to aggregate scores across matches (SUM, AVERAGE, etc.) */
    aggregation: ScoreAggregationType
    /** Human-readable formula string */
    formula: (Scalars['String'] | null)
    /** Points awarded for a win */
    winPoints: Scalars['Float']
    /** Points awarded for a loss */
    lossPoints: Scalars['Float']
    /** Points awarded for a draw */
    drawPoints: Scalars['Float']
    /** Points awarded for a forfeit */
    forfeitPoints: Scalars['Float']
    /** Ordered list of tiebreaker rules for resolving equal scores */
    tiebreakers: TiebreakerRuleModel[]
    __typename: 'ScoringRuleSetModel'
}

export type ScoreAggregationType = 'SUM' | 'AVERAGE' | 'POINTS' | 'FORMULA'


/** Rule that defines how teams advance, are eliminated, or how rounds are generated */
export interface AdvancementRuleModel {
    /** Unique identifier for the advancement rule */
    id: Scalars['ID']
    /** Display name of the rule */
    name: Scalars['String']
    /** Human-readable description of what this rule does */
    description: (Scalars['String'] | null)
    /** Execution priority order (lower runs first) */
    order: Scalars['Float']
    /** Event type that triggers this rule */
    triggerType: RuleTriggerType
    /** Scope restricting when the rule triggers */
    triggerScope: (TriggerScopeModel | null)
    /** Logical operator combining conditions (AND or OR) */
    conditionOperator: ConditionOperator
    /** Array of RuleCondition objects */
    conditions: RuleConditionModel[]
    /** Array of RuleAction objects */
    actions: RuleAction[]
    /** Whether actions execute automatically when conditions are met */
    autoExecute: Scalars['Boolean']
    /** Whether an admin can manually trigger or override this rule */
    allowManualOverride: Scalars['Boolean']
    /** Whether this rule is currently active */
    enabled: Scalars['Boolean']
    __typename: 'AdvancementRuleModel'
}

export type RuleTriggerType = 'MATCH_ENDED' | 'GAME_ENDED' | 'ROUND_ENDED' | 'GROUP_ENDED' | 'STEP_ENDED' | 'MANUAL'

export type ConditionOperator = 'AND' | 'OR'


/** Rule that transfers data (rankings, scores, teams) between tournament steps */
export interface CrossStepRuleModel {
    /** Unique identifier for the cross-step rule */
    id: Scalars['ID']
    /** Explicit source step ID */
    sourceStepId: (Scalars['ID'] | null)
    /** Relative reference (PREVIOUS, NEXT, CURRENT) */
    sourceRelative: (Scalars['String'] | null)
    /** Data source: RANKINGS, SCORES, TEAMS */
    dataSource: Scalars['String']
    /** CrossStepUsage discriminated union */
    usage: CrossStepUsage
    __typename: 'CrossStepRuleModel'
}

export type CrossStepUsage = (SeedOrderUsageModel | QualifyUsageModel | InjectScoreUsageModel) & { __isUnion?: true }


/** Cross-step usage that seeds teams based on rankings from another step */
export interface SeedOrderUsageModel {
    /** Usage type discriminator */
    type: CrossStepUsageType
    __typename: 'SeedOrderUsageModel'
}

export type CrossStepUsageType = 'SEED_ORDER' | 'QUALIFY' | 'INJECT_SCORE'


/** Cross-step usage that qualifies teams based on a condition evaluated against source step data */
export interface QualifyUsageModel {
    /** Usage type discriminator */
    type: CrossStepUsageType
    /** Formula string for the qualification condition */
    condition: Scalars['String']
    __typename: 'QualifyUsageModel'
}


/** Cross-step usage that injects scores from another step into the current step */
export interface InjectScoreUsageModel {
    /** Usage type discriminator */
    type: CrossStepUsageType
    /** Formula string for the score injection */
    formula: Scalars['String']
    __typename: 'InjectScoreUsageModel'
}


/** Template defining a game slot in the bracket structure */
export interface GameTemplateModel {
    /** Unique identifier for the game template */
    id: Scalars['ID']
    /** Sort order of this game within its round */
    order: Scalars['Float']
    /** Number of team slots in this game */
    teamSlots: Scalars['Float']
    /** Number of matches in the best-of series */
    bestOf: Scalars['Float']
    /** Match configuration for this game template */
    matchConfiguration: (MatchConfigRefModel | null)
    /** Target reference on win */
    onWinTarget: (GameRefModel | null)
    /** Target reference on loss */
    onLossTarget: (GameRefModel | null)
    __typename: 'GameTemplateModel'
}


/** Template defining a round and its game slots within a group */
export interface RoundTemplateModel {
    /** Unique identifier for the round template */
    id: Scalars['ID']
    /** Display name of the round */
    name: Scalars['String']
    /** Sort order of this round within its group */
    order: Scalars['Float']
    /** Game templates within this round */
    gameTemplates: GameTemplateModel[]
    __typename: 'RoundTemplateModel'
}


/** Variable definition used in match score formula computation */
export interface MatchConfigurationVariableModel {
    /** Variable name used in the scoring formula */
    formulaName: Scalars['String']
    /** Human-readable label for the variable */
    displayName: Scalars['String']
    /** Default numeric value if not explicitly provided */
    defaultValue: Scalars['Float']
    __typename: 'MatchConfigurationVariableModel'
}


/** Match configuration defining scoring variables and formula */
export interface MatchConfigurationModel {
    /** Variables available for score computation */
    variables: MatchConfigurationVariableModel[]
    /** Formula expression used to compute the final score from variables */
    scoreFormula: (Scalars['String'] | null)
    __typename: 'MatchConfigurationModel'
}


/** Template defining a group in the bracket structure with its rounds and generation settings */
export interface GroupTemplateModel {
    /** Unique identifier for the group template */
    id: Scalars['ID']
    /** Display name of the group */
    name: Scalars['String']
    /** Sort order of this group within the structure */
    order: Scalars['Float']
    /** Number of team slots available in this group */
    teamSlots: Scalars['Float']
    /** AutoGenerateConfig for this group (legacy JSON) */
    autoGenerate: (AutoGenerateConfigModel | null)
    /** Auto-generate algorithm type */
    autoGenerateType: (AutoGenerateType | null)
    /** Number of team slots per game */
    teamSlotsPerGame: Scalars['Int']
    /** Best-of series count */
    bestOf: Scalars['Int']
    /** Override round count */
    roundCount: (Scalars['Int'] | null)
    /** Match configuration for generated games */
    matchConfiguration: (MatchConfigurationModel | null)
    /** Round templates within this group */
    roundTemplates: RoundTemplateModel[]
    __typename: 'GroupTemplateModel'
}


/** Top-level structure template defining the bracket layout for a step */
export interface StructureTemplateModel {
    /** Unique identifier for the structure template */
    id: Scalars['ID']
    /** Group templates that make up the bracket structure */
    groupTemplates: GroupTemplateModel[]
    __typename: 'StructureTemplateModel'
}


/** Top-level rule set aggregate for a tournament step, containing scoring, advancement, cross-step rules, and structure */
export interface StepRuleSetModel {
    /** Unique identifier for the rule set */
    id: Scalars['ID']
    /** Current version number, incremented on each update */
    version: Scalars['Float']
    /** Name of the preset used to generate this rule set, if any */
    presetName: (Scalars['String'] | null)
    /** Team count this rule set was configured for */
    teamCount: (Scalars['Int'] | null)
    /** Whether this rule set has been validated via simulation */
    validated: Scalars['Boolean']
    /** Timestamp of the most recent successful validation */
    validatedAt: (Scalars['DateTime'] | null)
    /** Scoring configuration for this step */
    scoringRuleSet: ScoringRuleSetModel
    /** Ordered list of advancement rules */
    advancementRules: AdvancementRuleModel[]
    /** Cross-step data transfer rules */
    crossStepRules: CrossStepRuleModel[]
    /** Bracket structure template for this step */
    structureTemplate: (StructureTemplateModel | null)
    /** Timestamp when the rule set was created */
    createdAt: Scalars['DateTime']
    /** Timestamp when the rule set was last updated */
    updatedAt: Scalars['DateTime']
    __typename: 'StepRuleSetModel'
}


/** Audit log entry for a single rule execution, recording event, conditions, and actions */
export interface RuleExecutionLogModel {
    /** Unique identifier for the log entry */
    id: Scalars['ID']
    /** ID of the advancement rule that was executed */
    advancementRuleId: Scalars['ID']
    /** Version of the rule set at the time of execution */
    ruleSetVersion: Scalars['Float']
    /** Trigger event payload */
    triggerEventData: RuleEventDataModel
    /** Evaluated condition results */
    conditionsEvaluated: ConditionEvaluationModel[]
    /** Whether all conditions were satisfied */
    conditionsMet: Scalars['Boolean']
    /** Executed action results */
    actionsExecuted: ActionResultModel[]
    /** Whether this execution was a manual override by an admin */
    manualOverride: Scalars['Boolean']
    /** Account ID of the admin who performed the manual override */
    overrideBy: (Scalars['ID'] | null)
    /** Timestamp when the rule was executed */
    createdAt: Scalars['DateTime']
    __typename: 'RuleExecutionLogModel'
}


/** A single validation error or warning for a rule set */
export interface RuleValidationErrorModel {
    /** Dot-separated path to the invalid field (e.g. rules[0].conditions[1].field) */
    path: Scalars['String']
    /** Human-readable description of the validation issue */
    message: Scalars['String']
    /** Line number in the expression where the error occurred */
    line: (Scalars['Float'] | null)
    /** Column number in the expression where the error occurred */
    column: (Scalars['Float'] | null)
    __typename: 'RuleValidationErrorModel'
}


/** Result of validating a rule set configuration */
export interface RuleValidationResultModel {
    /** Whether the rule set passed validation without errors */
    valid: Scalars['Boolean']
    /** Validation errors that must be fixed */
    errors: RuleValidationErrorModel[]
    /** Validation warnings that should be reviewed */
    warnings: RuleValidationErrorModel[]
    __typename: 'RuleValidationResultModel'
}


/** Paginated list of rule execution audit logs */
export interface PaginatedRuleExecutionLogs {
    /** List of edges containing cursor and node pairs */
    edges: RuleExecutionLogModelEdge[]
    /** Flat list of items in the current page */
    nodes: RuleExecutionLogModel[]
    /** Pagination metadata for navigating between pages */
    pageInfo: ResponsePageInfo
    /** Total number of items across all pages */
    totalCount: (Scalars['Float'] | null)
    __typename: 'PaginatedRuleExecutionLogs'
}


/** An edge in a paginated connection containing a cursor and node */
export interface RuleExecutionLogModelEdge {
    /** Opaque cursor string for this edge, used for pagination */
    cursor: Scalars['String']
    /** The item at this edge */
    node: RuleExecutionLogModel[]
    __typename: 'RuleExecutionLogModelEdge'
}


/** Snapshot of a game state during simulation */
export interface SimulatedGameSnapshotModel {
    /** Identifier of the simulated game */
    gameId: Scalars['String']
    /** Zero-based index of the group this game belongs to */
    groupIndex: Scalars['Float']
    /** Zero-based index of the round within the group */
    roundIndex: Scalars['Float']
    /** Zero-based index of the game within the round */
    gameIndex: Scalars['Float']
    /** IDs of teams assigned to this game */
    assignedTeamIds: Scalars['String'][]
    /** Whether this game has been completed in the simulation */
    completed: Scalars['Boolean']
    __typename: 'SimulatedGameSnapshotModel'
}


/** A single step in the simulation execution trace */
export interface SimulationStepModel {
    /** Iteration number within the simulation */
    iteration: Scalars['Float']
    /** Event type that triggered this step */
    event: Scalars['String']
    /** Human-readable description of what happened in this step */
    description: Scalars['String']
    /** IDs of teams that advanced during this step */
    teamsAdvanced: Scalars['String'][]
    /** IDs of teams that were eliminated during this step */
    teamsEliminated: Scalars['String'][]
    __typename: 'SimulationStepModel'
}


/** Result of a dry-run rule set simulation */
export interface SimulationResultModel {
    /** Whether the simulation completed successfully without errors */
    success: Scalars['Boolean']
    /** Ordered execution trace of the simulation */
    steps: SimulationStepModel[]
    /** Non-fatal warnings produced during the simulation */
    warnings: Scalars['String'][]
    /** Fatal errors that caused the simulation to fail */
    errors: Scalars['String'][]
    /** Final state of all games in the simulated bracket structure */
    structureSnapshot: SimulatedGameSnapshotModel[]
    __typename: 'SimulationResultModel'
}


/** A virtual currency defined within an organization */
export interface Currency {
    /** Unique identifier of the currency */
    id: Scalars['ID']
    /** Short symbol representing the currency (e.g., GP, CR) */
    symbol: Scalars['String']
    /** Display name of the currency */
    name: Scalars['String']
    /** External system identifier for third-party integrations */
    externalId: (Scalars['String'] | null)
    /** Description of the currency purpose */
    description: Scalars['String']
    /** Whether the currency is hidden from players */
    hidden: Scalars['Boolean']
    /** ID of the organization that owns this currency */
    organizationId: Scalars['ID']
    /** Timestamp when the currency was created */
    createdAt: Scalars['DateTime']
    /** Timestamp when the currency was last updated */
    updatedAt: Scalars['DateTime']
    /** Custom metadata key-value pairs attached to the currency */
    metadata: PropertyValue[]
    __typename: 'Currency'
}


/** Paginated list of currencies */
export interface Currencies {
    /** List of edges containing cursor and node pairs */
    edges: CurrencyEdge[]
    /** Flat list of items in the current page */
    nodes: Currency[]
    /** Pagination metadata for navigating between pages */
    pageInfo: ResponsePageInfo
    /** Total number of items across all pages */
    totalCount: (Scalars['Float'] | null)
    __typename: 'Currencies'
}


/** An edge in a paginated connection containing a cursor and node */
export interface CurrencyEdge {
    /** Opaque cursor string for this edge, used for pagination */
    cursor: Scalars['String']
    /** The item at this edge */
    node: Currency[]
    __typename: 'CurrencyEdge'
}


/** A player's balance for a specific currency */
export interface PlayerCurrency {
    /** Unique identifier of the player currency record */
    id: Scalars['ID']
    /** ID of the player profile that owns this balance */
    playerProfileId: Scalars['ID']
    /** ID of the currency this balance is for */
    currencyId: Scalars['ID']
    /** Current balance amount for this currency */
    balance: Scalars['Float']
    /** Timestamp when the player currency record was created */
    createdAt: Scalars['DateTime']
    /** Timestamp when the balance was last updated */
    updatedAt: Scalars['DateTime']
    __typename: 'PlayerCurrency'
}


/** Paginated list of player currency balances */
export interface PlayerCurrencies {
    /** List of edges containing cursor and node pairs */
    edges: PlayerCurrencyEdge[]
    /** Flat list of items in the current page */
    nodes: PlayerCurrency[]
    /** Pagination metadata for navigating between pages */
    pageInfo: ResponsePageInfo
    /** Total number of items across all pages */
    totalCount: (Scalars['Float'] | null)
    __typename: 'PlayerCurrencies'
}


/** An edge in a paginated connection containing a cursor and node */
export interface PlayerCurrencyEdge {
    /** Opaque cursor string for this edge, used for pagination */
    cursor: Scalars['String']
    /** The item at this edge */
    node: PlayerCurrency[]
    __typename: 'PlayerCurrencyEdge'
}


/** Configuration defining size constraints for a user group */
export interface UserGroupConfiguration {
    /** Maximum number of accepted members allowed in the group */
    maxSize: Scalars['Int']
    /** Minimum number of accepted members required for the group to be valid */
    minSize: Scalars['Int']
    __typename: 'UserGroupConfiguration'
}


/** A member entry within a user group, representing a player and their membership status */
export interface UserGroupMember {
    /** Unique identifier of the membership record */
    id: Scalars['ID']
    /** ID of the user group this membership belongs to */
    groupId: Scalars['ID']
    /** ID of the player profile who is a member */
    playerProfileId: Scalars['ID']
    /** Current status of this membership (e.g. PENDING, ACCEPTED, DECLINED) */
    status: UserGroupMemberStatus
    /** Timestamp when the membership was created */
    createdAt: Scalars['DateTime']
    /** Timestamp when the membership was last updated */
    updatedAt: Scalars['DateTime']
    __typename: 'UserGroupMember'
}

export type UserGroupMemberStatus = 'PENDING' | 'ACCEPTED' | 'DENIED'


/** A user group that organizes players together, typically for team-based activities */
export interface UserGroup {
    /** Unique identifier of the user group */
    id: Scalars['ID']
    /** ID of the organization this group belongs to */
    organizationId: Scalars['ID']
    /** Player profile ID of the group manager */
    managerId: Scalars['ID']
    /** Timestamp when the group was created */
    createdAt: Scalars['DateTime']
    /** Timestamp when the group was last updated */
    updatedAt: Scalars['DateTime']
    /** Current validation status of the group based on member count constraints */
    status: UserGroupStatus
    /** Whether the group is locked and cannot be modified */
    locked: Scalars['Boolean']
    __typename: 'UserGroup'
}

export type UserGroupStatus = 'VALID' | 'INVALID'


/** Paginated list of user groups */
export interface UserGroups {
    /** List of edges containing cursor and node pairs */
    edges: UserGroupEdge[]
    /** Flat list of items in the current page */
    nodes: UserGroup[]
    /** Pagination metadata for navigating between pages */
    pageInfo: ResponsePageInfo
    /** Total number of items across all pages */
    totalCount: (Scalars['Float'] | null)
    __typename: 'UserGroups'
}


/** An edge in a paginated connection containing a cursor and node */
export interface UserGroupEdge {
    /** Opaque cursor string for this edge, used for pagination */
    cursor: Scalars['String']
    /** The item at this edge */
    node: UserGroup[]
    __typename: 'UserGroupEdge'
}


/** Paginated list of user group members */
export interface UserGroupMembers {
    /** List of edges containing cursor and node pairs */
    edges: UserGroupMemberEdge[]
    /** Flat list of items in the current page */
    nodes: UserGroupMember[]
    /** Pagination metadata for navigating between pages */
    pageInfo: ResponsePageInfo
    /** Total number of items across all pages */
    totalCount: (Scalars['Float'] | null)
    __typename: 'UserGroupMembers'
}


/** An edge in a paginated connection containing a cursor and node */
export interface UserGroupMemberEdge {
    /** Opaque cursor string for this edge, used for pagination */
    cursor: Scalars['String']
    /** The item at this edge */
    node: UserGroupMember[]
    __typename: 'UserGroupMemberEdge'
}


/** A 2D coordinate position for seat placement on a venue map */
export interface Position {
    /** Horizontal position coordinate */
    x: Scalars['Float']
    /** Vertical position coordinate */
    y: Scalars['Float']
    __typename: 'Position'
}


/** Visual configuration of a venue seat including size, icon, and position */
export interface EventVenueSeatConfiguration {
    /** Visual size of the seat on the venue map */
    size: (Scalars['Float'] | null)
    /** URL of a custom SVG icon for the seat */
    svgUrl: (Scalars['String'] | null)
    /** Position of the seat on the venue map */
    position: Position
    __typename: 'EventVenueSeatConfiguration'
}


/** An individual seat within an event venue */
export interface EventVenueSeat {
    /** Unique identifier of the seat */
    id: Scalars['ID']
    /** Display name or label of the seat */
    name: Scalars['String']
    /** Timestamp when the seat was created */
    createdAt: Scalars['DateTime']
    /** Timestamp when the seat was last updated */
    updatedAt: Scalars['DateTime']
    /** Visual configuration of the seat including position and appearance */
    configuration: EventVenueSeatConfiguration
    /** Identifier of the seat type this seat belongs to */
    seatTypeId: Scalars['ID']
    __typename: 'EventVenueSeat'
}


/** Result of a batch venue seats update operation */
export interface EventVenueSeatsUpdateResult {
    /** List of seats that were updated */
    updatedSeats: EventVenueSeat[]
    /** List of seats that were created */
    createdSeats: EventVenueSeat[]
    /** List of seats that were deleted */
    deletedSeats: EventVenueSeat[]
    __typename: 'EventVenueSeatsUpdateResult'
}


/** Paginated list of venue seats */
export interface EventVenueSeats {
    /** List of edges containing cursor and node pairs */
    edges: EventVenueSeatEdge[]
    /** Flat list of items in the current page */
    nodes: EventVenueSeat[]
    /** Pagination metadata for navigating between pages */
    pageInfo: ResponsePageInfo
    /** Total number of items across all pages */
    totalCount: (Scalars['Float'] | null)
    __typename: 'EventVenueSeats'
}


/** An edge in a paginated connection containing a cursor and node */
export interface EventVenueSeatEdge {
    /** Opaque cursor string for this edge, used for pagination */
    cursor: Scalars['String']
    /** The item at this edge */
    node: EventVenueSeat[]
    __typename: 'EventVenueSeatEdge'
}


/** Configuration settings for an event including registration, ticketing, and seating options */
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


/** Represents an event within the platform */
export interface Event {
    /** Unique identifier of the event */
    id: Scalars['ID']
    /** Display title of the event */
    title: Scalars['String']
    /** Detailed description of the event */
    description: Scalars['String']
    /** Timestamp when the event was created */
    createdAt: Scalars['DateTime']
    /** Timestamp when the event was last updated */
    updatedAt: Scalars['DateTime']
    /** Scheduled start date and time of the event */
    startAt: (Scalars['DateTime'] | null)
    /** Scheduled end date and time of the event */
    endAt: (Scalars['DateTime'] | null)
    /** Date and time when registrations open */
    startRegistrationsAt: (Scalars['DateTime'] | null)
    /** Date and time when registrations close */
    endRegistrationsAt: (Scalars['DateTime'] | null)
    /** Date and time when the event becomes publicly visible */
    visibleAt: (Scalars['DateTime'] | null)
    /** Event configuration including group, ticketing, and registration settings */
    configuration: (EventConfiguration | null)
    /** Identifier of the venue where the event takes place */
    eventVenueId: (Scalars['ID'] | null)
    /** Identifier of the organization that owns this event */
    organizationId: Scalars['ID']
    /** Identifier of the account that created this event */
    createdById: Scalars['ID']
    /** Public decryption key used for verifying ticket QR codes */
    decryptionKey: Scalars['String']
    /** The venue where this event is taking place */
    venue: (EventVenue | null)
    __typename: 'Event'
}


/** Base interface for all event types */
export type EventInterface = (Event | EventWithUserReservation) & { __isUnion?: true }


/** Event with the current authenticated user's reservation details */
export interface EventWithUserReservation {
    /** Unique identifier of the event */
    id: Scalars['ID']
    /** Display title of the event */
    title: Scalars['String']
    /** Detailed description of the event */
    description: Scalars['String']
    /** Timestamp when the event was created */
    createdAt: Scalars['DateTime']
    /** Timestamp when the event was last updated */
    updatedAt: Scalars['DateTime']
    /** Scheduled start date and time of the event */
    startAt: (Scalars['DateTime'] | null)
    /** Scheduled end date and time of the event */
    endAt: (Scalars['DateTime'] | null)
    /** Date and time when registrations open */
    startRegistrationsAt: (Scalars['DateTime'] | null)
    /** Date and time when registrations close */
    endRegistrationsAt: (Scalars['DateTime'] | null)
    /** Date and time when the event becomes publicly visible */
    visibleAt: (Scalars['DateTime'] | null)
    /** Event configuration including group, ticketing, and registration settings */
    configuration: (EventConfiguration | null)
    /** Identifier of the venue where the event takes place */
    eventVenueId: (Scalars['ID'] | null)
    /** Identifier of the organization that owns this event */
    organizationId: Scalars['ID']
    /** Identifier of the account that created this event */
    createdById: Scalars['ID']
    /** Public decryption key used for verifying ticket QR codes */
    decryptionKey: Scalars['String']
    /** The venue where this event is taking place */
    venue: (EventVenue | null)
    /** The reservation of the current user for this event */
    myReservation: (EventReservationWithTicketsAndQrCode | null)
    __typename: 'EventWithUserReservation'
}


/** Paginated list of events */
export interface Events {
    /** List of edges containing cursor and node pairs */
    edges: EventEdge[]
    /** Flat list of items in the current page */
    nodes: Event[]
    /** Pagination metadata for navigating between pages */
    pageInfo: ResponsePageInfo
    /** Total number of items across all pages */
    totalCount: (Scalars['Float'] | null)
    __typename: 'Events'
}


/** An edge in a paginated connection containing a cursor and node */
export interface EventEdge {
    /** Opaque cursor string for this edge, used for pagination */
    cursor: Scalars['String']
    /** The item at this edge */
    node: Event[]
    __typename: 'EventEdge'
}


/** Configuration of a reservation ticket including custom field values */
export interface EventReservationTicketConfiguration {
    /** Custom fields with their configured properties and filled values */
    customFields: PropertyConfigWithValue[]
    __typename: 'EventReservationTicketConfiguration'
}


/** A ticket issued as part of an event reservation */
export interface EventReservationTicket {
    /** Unique identifier of the reservation ticket */
    id: Scalars['ID']
    /** Identifier of the ticket configuration this ticket was created from */
    ticketId: Scalars['ID']
    /** Identifier of the reservation this ticket belongs to */
    reservationId: Scalars['ID']
    /** Identifier of the group member this ticket is assigned to */
    groupMemberId: (Scalars['ID'] | null)
    /** Identifier of the venue seat assigned to this ticket */
    seatId: (Scalars['ID'] | null)
    /** Timestamp when the ticket was created */
    createdAt: Scalars['DateTime']
    /** Timestamp when the ticket was last updated */
    updatedAt: Scalars['DateTime']
    /** Custom field configuration and values for this ticket */
    configuration: (EventReservationTicketConfiguration | null)
    __typename: 'EventReservationTicket'
}


/** A reservation ticket with an attached QR code for event entry */
export interface EventReservationTicketWithQrCode {
    /** Unique identifier of the reservation ticket */
    id: Scalars['ID']
    /** Identifier of the ticket configuration this ticket was created from */
    ticketId: Scalars['ID']
    /** Identifier of the reservation this ticket belongs to */
    reservationId: Scalars['ID']
    /** Identifier of the group member this ticket is assigned to */
    groupMemberId: (Scalars['ID'] | null)
    /** Identifier of the venue seat assigned to this ticket */
    seatId: (Scalars['ID'] | null)
    /** Timestamp when the ticket was created */
    createdAt: Scalars['DateTime']
    /** Timestamp when the ticket was last updated */
    updatedAt: Scalars['DateTime']
    /** Custom field configuration and values for this ticket */
    configuration: (EventReservationTicketConfiguration | null)
    /** Encrypted QR code data for ticket verification at the event */
    qrCode: Scalars['String']
    __typename: 'EventReservationTicketWithQrCode'
}


/** Represents a reservation for an event, including group and ticket information */
export interface EventReservation {
    /** Unique identifier of the reservation */
    id: Scalars['ID']
    /** Display name of the reservation, typically the group manager's username */
    name: Scalars['String']
    /** Current status of the reservation in the registration workflow */
    status: EventReservationStatus
    /** Expiration timestamp for the current registration session */
    sessionValidUntil: Scalars['DateTime']
    /** Timestamp when the reservation was created */
    createdAt: Scalars['DateTime']
    /** Timestamp when the reservation was last updated */
    updatedAt: Scalars['DateTime']
    /** Identifier of the event this reservation is for */
    eventId: Scalars['ID']
    /** Identifier of the user group associated with this reservation */
    groupId: Scalars['ID']
    /** List of tickets included in this reservation */
    tickets: EventReservationTicket[]
    /** Current validation status of the associated user group */
    groupStatus: UserGroupStatus
    __typename: 'EventReservation'
}

export type EventReservationStatus = 'NONE' | 'REQUIRES_ADMIN_APPROVAL' | 'PENDING' | 'SESSION_EXPIRED' | 'NOT_ATTENDING' | 'PAYMENT_PENDING' | 'PAYMENT_FAILED' | 'PAYMENT_REFUNDED' | 'REGISTERED' | 'PRESENCE_CONFIRMATION_PENDING' | 'CONFIRMED' | 'DENIED'


/** Event reservation with tickets that include QR codes for event entry */
export interface EventReservationWithTicketsAndQrCode {
    /** Unique identifier of the reservation */
    id: Scalars['ID']
    /** Display name of the reservation, typically the group manager's username */
    name: Scalars['String']
    /** Current status of the reservation in the registration workflow */
    status: EventReservationStatus
    /** Expiration timestamp for the current registration session */
    sessionValidUntil: Scalars['DateTime']
    /** Timestamp when the reservation was created */
    createdAt: Scalars['DateTime']
    /** Timestamp when the reservation was last updated */
    updatedAt: Scalars['DateTime']
    /** Identifier of the event this reservation is for */
    eventId: Scalars['ID']
    /** Identifier of the user group associated with this reservation */
    groupId: Scalars['ID']
    /** Current validation status of the associated user group */
    groupStatus: UserGroupStatus
    /** List of tickets with QR codes for this reservation */
    tickets: EventReservationTicketWithQrCode[]
    __typename: 'EventReservationWithTicketsAndQrCode'
}


/** Paginated list of event reservations without ticket details */
export interface EventReservations {
    /** List of edges containing cursor and node pairs */
    edges: OmitObjectTypeEdge[]
    /** Flat list of items in the current page */
    nodes: OmitObjectType[]
    /** Pagination metadata for navigating between pages */
    pageInfo: ResponsePageInfo
    /** Total number of items across all pages */
    totalCount: (Scalars['Float'] | null)
    __typename: 'EventReservations'
}


/** An edge in a paginated connection containing a cursor and node */
export interface OmitObjectTypeEdge {
    /** Opaque cursor string for this edge, used for pagination */
    cursor: Scalars['String']
    /** The item at this edge */
    node: OmitObjectType[]
    __typename: 'OmitObjectTypeEdge'
}

export interface OmitObjectType {
    /** Unique identifier of the reservation */
    id: Scalars['ID']
    /** Display name of the reservation, typically the group manager's username */
    name: Scalars['String']
    /** Current status of the reservation in the registration workflow */
    status: EventReservationStatus
    /** Expiration timestamp for the current registration session */
    sessionValidUntil: Scalars['DateTime']
    /** Timestamp when the reservation was created */
    createdAt: Scalars['DateTime']
    /** Timestamp when the reservation was last updated */
    updatedAt: Scalars['DateTime']
    /** Identifier of the event this reservation is for */
    eventId: Scalars['ID']
    /** Identifier of the user group associated with this reservation */
    groupId: Scalars['ID']
    /** Current validation status of the associated user group */
    groupStatus: UserGroupStatus
    __typename: 'OmitObjectType'
}


/** Payment session details returned after validating a reservation for payment */
export interface EventReservationValidateAndPay {
    /** Stripe Checkout URL to redirect the user to for payment (hosted mode) */
    paymentUrl: (Scalars['String'] | null)
    /** Stripe client secret for embedded payment UI integration */
    clientSecret: (Scalars['String'] | null)
    __typename: 'EventReservationValidateAndPay'
}


/** A venue seat with its current availability status for a specific event */
export interface EventSeat {
    /** Unique identifier of the seat */
    id: Scalars['ID']
    /** Display name or label of the seat */
    name: Scalars['String']
    /** Timestamp when the seat was created */
    createdAt: Scalars['DateTime']
    /** Timestamp when the seat was last updated */
    updatedAt: Scalars['DateTime']
    /** Visual configuration of the seat including position and appearance */
    configuration: EventVenueSeatConfiguration
    /** Identifier of the seat type this seat belongs to */
    seatTypeId: Scalars['ID']
    /** Current status of the seat (available, reserved, or sold) */
    status: EventSeatStatus
    /** Identifier of the ticket that reserved this seat */
    reservedByTicketId: (Scalars['ID'] | null)
    /** Identifier of the reservation that holds this seat */
    reservedByReservationId: (Scalars['ID'] | null)
    /** Identifier of the group member assigned to this seat */
    reservedByGroupMemberId: (Scalars['ID'] | null)
    __typename: 'EventSeat'
}

export type EventSeatStatus = 'AVAILABLE' | 'RESERVED' | 'SOLD'


/** Paginated list of event seats with their statuses */
export interface EventSeats {
    /** List of edges containing cursor and node pairs */
    edges: EventSeatEdge[]
    /** Flat list of items in the current page */
    nodes: EventSeat[]
    /** Pagination metadata for navigating between pages */
    pageInfo: ResponsePageInfo
    /** Total number of items across all pages */
    totalCount: (Scalars['Float'] | null)
    __typename: 'EventSeats'
}


/** An edge in a paginated connection containing a cursor and node */
export interface EventSeatEdge {
    /** Opaque cursor string for this edge, used for pagination */
    cursor: Scalars['String']
    /** The item at this edge */
    node: EventSeat[]
    __typename: 'EventSeatEdge'
}


/** Configuration settings for a venue seat type */
export interface EventVenueSeatTypeConfiguration {
    /** Arbitrary nonce value for cache-busting or versioning */
    nonce: (Scalars['String'] | null)
    __typename: 'EventVenueSeatTypeConfiguration'
}


/** A category or type of seats within an event venue (e.g., VIP, standard, standing) */
export interface EventVenueSeatType {
    /** Unique identifier of the seat type */
    id: Scalars['ID']
    /** Display name of the seat type */
    name: Scalars['String']
    /** Detailed description of the seat type */
    description: Scalars['String']
    /** Configuration settings for this seat type */
    configuration: EventVenueSeatTypeConfiguration
    /** Timestamp when the seat type was created */
    createdAt: Scalars['DateTime']
    /** Timestamp when the seat type was last updated */
    updatedAt: Scalars['DateTime']
    /** Identifier of the venue this seat type belongs to */
    venueId: Scalars['ID']
    __typename: 'EventVenueSeatType'
}


/** Paginated list of venue seat types */
export interface EventVenueSeatTypes {
    /** List of edges containing cursor and node pairs */
    edges: EventVenueSeatTypeEdge[]
    /** Flat list of items in the current page */
    nodes: EventVenueSeatType[]
    /** Pagination metadata for navigating between pages */
    pageInfo: ResponsePageInfo
    /** Total number of items across all pages */
    totalCount: (Scalars['Float'] | null)
    __typename: 'EventVenueSeatTypes'
}


/** An edge in a paginated connection containing a cursor and node */
export interface EventVenueSeatTypeEdge {
    /** Opaque cursor string for this edge, used for pagination */
    cursor: Scalars['String']
    /** The item at this edge */
    node: EventVenueSeatType[]
    __typename: 'EventVenueSeatTypeEdge'
}


/** Configuration settings for an event venue */
export interface EventVenueConfiguration {
    /** URL or S3 key of the venue image */
    imageUrl: (Scalars['String'] | null)
    __typename: 'EventVenueConfiguration'
}


/** A physical venue where events take place */
export interface EventVenue {
    /** Unique identifier of the venue */
    id: Scalars['ID']
    /** Display name of the venue */
    name: Scalars['String']
    /** Detailed description of the venue */
    description: Scalars['String']
    /** Street address of the venue */
    address: Scalars['String']
    /** City where the venue is located */
    city: Scalars['String']
    /** State or province where the venue is located */
    state: Scalars['String']
    /** Country where the venue is located */
    country: Scalars['String']
    /** Postal or ZIP code of the venue */
    postalCode: Scalars['String']
    /** Timestamp when the venue was created */
    createdAt: Scalars['DateTime']
    /** Timestamp when the venue was last updated */
    updatedAt: Scalars['DateTime']
    /** Venue configuration including image settings */
    configuration: EventVenueConfiguration
    /** Identifier of the organization that owns this venue */
    organizationId: Scalars['ID']
    __typename: 'EventVenue'
}


/** Paginated list of event venues */
export interface EventVenues {
    /** List of edges containing cursor and node pairs */
    edges: EventVenueEdge[]
    /** Flat list of items in the current page */
    nodes: EventVenue[]
    /** Pagination metadata for navigating between pages */
    pageInfo: ResponsePageInfo
    /** Total number of items across all pages */
    totalCount: (Scalars['Float'] | null)
    __typename: 'EventVenues'
}


/** An edge in a paginated connection containing a cursor and node */
export interface EventVenueEdge {
    /** Opaque cursor string for this edge, used for pagination */
    cursor: Scalars['String']
    /** The item at this edge */
    node: EventVenue[]
    __typename: 'EventVenueEdge'
}


/** Configuration for a ticket type including custom fields that attendees must fill */
export interface EventTicketConfigurationConfiguration {
    /** Custom fields that attendees must fill when purchasing this ticket type */
    customFields: Property[]
    __typename: 'EventTicketConfigurationConfiguration'
}


/** A ticket type configuration for an event, defining pricing, availability, and custom fields */
export interface EventTicketConfiguration {
    /** Unique identifier of the ticket configuration */
    id: Scalars['ID']
    /** Display name of the ticket type */
    name: Scalars['String']
    /** Description of what this ticket type includes */
    description: Scalars['String']
    /** Timestamp when the ticket configuration was created */
    createdAt: Scalars['DateTime']
    /** Timestamp when the ticket configuration was last updated */
    updatedAt: Scalars['DateTime']
    /** Price of the ticket in the smallest currency unit (e.g., cents) */
    price: Scalars['Float']
    /** Currency code for the ticket price */
    currency: ShopCurrencies
    /** Maximum number of tickets available for this configuration */
    maxCount: Scalars['Float']
    /** Current number of tickets that have been sold or reserved */
    currentCount: Scalars['Float']
    /** Whether this ticket type is currently available for purchase */
    buyable: Scalars['Boolean']
    /** Identifier of the event this ticket configuration belongs to */
    eventId: Scalars['ID']
    /** Identifier of the venue seat type associated with this ticket */
    seatTypeId: (Scalars['ID'] | null)
    /** Additional configuration including custom fields for this ticket type */
    configuration: (EventTicketConfigurationConfiguration | null)
    __typename: 'EventTicketConfiguration'
}

export type ShopCurrencies = 'USD' | 'EUR' | 'GBP'


/** Represents a virtual item that can be assigned to players */
export interface Item {
    /** Unique identifier of the item */
    id: Scalars['ID']
    /** Display name of the item */
    name: Scalars['String']
    /** External identifier for third-party system integration */
    externalId: (Scalars['String'] | null)
    /** Detailed description of the item */
    description: Scalars['String']
    /** Custom metadata key-value pairs associated with the item */
    metadata: PropertyValue[]
    /** Timestamp when the item was created */
    createdAt: Scalars['DateTime']
    /** Timestamp when the item was last updated */
    updatedAt: Scalars['DateTime']
    /** ID of the organization this item belongs to */
    organizationId: Scalars['ID']
    /** ID of the category this item is assigned to */
    categoryId: (Scalars['ID'] | null)
    __typename: 'Item'
}


/** Paginated list of items */
export interface Items {
    /** List of edges containing cursor and node pairs */
    edges: ItemEdge[]
    /** Flat list of items in the current page */
    nodes: Item[]
    /** Pagination metadata for navigating between pages */
    pageInfo: ResponsePageInfo
    /** Total number of items across all pages */
    totalCount: (Scalars['Float'] | null)
    __typename: 'Items'
}


/** An edge in a paginated connection containing a cursor and node */
export interface ItemEdge {
    /** Opaque cursor string for this edge, used for pagination */
    cursor: Scalars['String']
    /** The item at this edge */
    node: Item[]
    __typename: 'ItemEdge'
}


/** Represents an item owned by a player with a quantity */
export interface PlayerItem {
    /** Unique identifier of the player item record */
    id: Scalars['ID']
    /** ID of the player profile that owns this item */
    playerProfileId: Scalars['ID']
    /** ID of the item definition */
    itemId: Scalars['ID']
    /** Timestamp when this player item was created */
    createdAt: Scalars['DateTime']
    /** Timestamp when this player item was last updated */
    updatedAt: Scalars['DateTime']
    /** Custom metadata key-value pairs for this player item */
    metadata: PropertyValue[]
    /** Number of this item the player owns */
    quantity: Scalars['Int']
    __typename: 'PlayerItem'
}


/** Paginated list of player items */
export interface PlayerItems {
    /** List of edges containing cursor and node pairs */
    edges: PlayerItemEdge[]
    /** Flat list of items in the current page */
    nodes: PlayerItem[]
    /** Pagination metadata for navigating between pages */
    pageInfo: ResponsePageInfo
    /** Total number of items across all pages */
    totalCount: (Scalars['Float'] | null)
    __typename: 'PlayerItems'
}


/** An edge in a paginated connection containing a cursor and node */
export interface PlayerItemEdge {
    /** Opaque cursor string for this edge, used for pagination */
    cursor: Scalars['String']
    /** The item at this edge */
    node: PlayerItem[]
    __typename: 'PlayerItemEdge'
}


/** Represents a category used to organize items */
export interface ItemCategory {
    /** Unique identifier of the item category */
    id: Scalars['ID']
    /** Display name of the category */
    name: Scalars['String']
    /** External identifier for third-party system integration */
    externalId: (Scalars['String'] | null)
    /** Detailed description of the category */
    description: Scalars['String']
    /** Custom metadata key-value pairs associated with the category */
    metadata: PropertyValue[]
    /** Timestamp when the category was created */
    createdAt: Scalars['DateTime']
    /** Timestamp when the category was last updated */
    updatedAt: Scalars['DateTime']
    /** ID of the organization this category belongs to */
    organizationId: Scalars['ID']
    __typename: 'ItemCategory'
}


/** Paginated list of item categories */
export interface ItemCategories {
    /** List of edges containing cursor and node pairs */
    edges: ItemCategoryEdge[]
    /** Flat list of items in the current page */
    nodes: ItemCategory[]
    /** Pagination metadata for navigating between pages */
    pageInfo: ResponsePageInfo
    /** Total number of items across all pages */
    totalCount: (Scalars['Float'] | null)
    __typename: 'ItemCategories'
}


/** An edge in a paginated connection containing a cursor and node */
export interface ItemCategoryEdge {
    /** Opaque cursor string for this edge, used for pagination */
    cursor: Scalars['String']
    /** The item at this edge */
    node: ItemCategory[]
    __typename: 'ItemCategoryEdge'
}


/** Represents an audit log entry for tracking actions within the organization */
export interface Log {
    /** Unique identifier of the log entry */
    id: Scalars['ID']
    /** Type of action that was logged */
    type: LogType
    /** ID of the resource this log entry is associated with */
    resourceId: Scalars['ID']
    /** Structured data payload of the log entry */
    data: LogData
    /** ID of the organization this log belongs to */
    organizationId: Scalars['ID']
    /** Timestamp when the log entry was created */
    createdAt: Scalars['DateTime']
    __typename: 'Log'
}

export type LogType = 'WEBHOOK_CALL' | 'WEBHOOK_CALL_ERROR'


/** Paginated list of audit log entries */
export interface Logs {
    /** List of edges containing cursor and node pairs */
    edges: LogEdge[]
    /** Flat list of items in the current page */
    nodes: Log[]
    /** Pagination metadata for navigating between pages */
    pageInfo: ResponsePageInfo
    /** Total number of items across all pages */
    totalCount: (Scalars['Float'] | null)
    __typename: 'Logs'
}


/** An edge in a paginated connection containing a cursor and node */
export interface LogEdge {
    /** Opaque cursor string for this edge, used for pagination */
    cursor: Scalars['String']
    /** The item at this edge */
    node: Log[]
    __typename: 'LogEdge'
}


/** A published app listing in the marketplace */
export interface MarketplaceApp {
    /** Unique identifier of the marketplace app */
    id: Scalars['ID']
    /** ID of the underlying organization app */
    organizationAppId: Scalars['ID']
    /** Current publication status of the app */
    status: MarketplaceAppStatus
    /** App manifest describing capabilities and configuration */
    manifest: AppManifestModel
    /** Display name of the marketplace app */
    name: Scalars['String']
    /** Full description of the app */
    description: Scalars['String']
    /** Short summary displayed on app cards */
    shortDescription: Scalars['String']
    /** URL of the app icon image */
    icon: (Scalars['String'] | null)
    /** URLs of app screenshot images */
    screenshots: Scalars['String'][]
    /** Category tags for filtering and discovery */
    categories: Scalars['String'][]
    /** Current semantic version of the app */
    version: Scalars['String']
    /** URL to the app privacy policy */
    privacyPolicyUrl: (Scalars['String'] | null)
    /** URL to the app support page */
    supportUrl: (Scalars['String'] | null)
    /** URL to the app website */
    websiteUrl: (Scalars['String'] | null)
    /** Timestamp when the app was first published */
    createdAt: Scalars['DateTime']
    /** Timestamp when the app listing was last updated */
    updatedAt: Scalars['DateTime']
    /** Reviews for this marketplace app */
    reviews: MarketplaceAppReviews
    /** Aggregated stats for this marketplace app */
    stats: MarketplaceAppStats
    /** Current organization installation of this app, if any */
    installation: (MarketplaceAppInstallation | null)
    /** Pricing information for this marketplace app */
    pricing: (MarketplaceAppPricing | null)
    __typename: 'MarketplaceApp'
}


/** Status of a marketplace app listing */
export type MarketplaceAppStatus = 'DRAFT' | 'IN_REVIEW' | 'PUBLISHED' | 'REJECTED' | 'SUSPENDED'


/** Paginated list of marketplace apps */
export interface MarketplaceApps {
    /** List of edges containing cursor and node pairs */
    edges: MarketplaceAppEdge[]
    /** Flat list of items in the current page */
    nodes: MarketplaceApp[]
    /** Pagination metadata for navigating between pages */
    pageInfo: ResponsePageInfo
    /** Total number of items across all pages */
    totalCount: (Scalars['Float'] | null)
    __typename: 'MarketplaceApps'
}


/** An edge in a paginated connection containing a cursor and node */
export interface MarketplaceAppEdge {
    /** Opaque cursor string for this edge, used for pagination */
    cursor: Scalars['String']
    /** The item at this edge */
    node: MarketplaceApp[]
    __typename: 'MarketplaceAppEdge'
}


/** A user review and rating for a marketplace app */
export interface MarketplaceAppReview {
    /** Unique identifier of the review */
    id: Scalars['ID']
    /** ID of the marketplace app being reviewed */
    marketplaceAppId: Scalars['ID']
    /** ID of the organization that submitted the review */
    organizationId: Scalars['ID']
    /** ID of the account that authored the review */
    accountId: Scalars['ID']
    /** Star rating from 1 to 5 */
    rating: Scalars['Int']
    /** Review title */
    title: Scalars['String']
    /** Review body text */
    body: Scalars['String']
    /** Timestamp when the review was created */
    createdAt: Scalars['DateTime']
    /** Timestamp when the review was last updated */
    updatedAt: Scalars['DateTime']
    __typename: 'MarketplaceAppReview'
}


/** Paginated list of marketplace app reviews */
export interface MarketplaceAppReviews {
    /** List of edges containing cursor and node pairs */
    edges: MarketplaceAppReviewEdge[]
    /** Flat list of items in the current page */
    nodes: MarketplaceAppReview[]
    /** Pagination metadata for navigating between pages */
    pageInfo: ResponsePageInfo
    /** Total number of items across all pages */
    totalCount: (Scalars['Float'] | null)
    __typename: 'MarketplaceAppReviews'
}


/** An edge in a paginated connection containing a cursor and node */
export interface MarketplaceAppReviewEdge {
    /** Opaque cursor string for this edge, used for pagination */
    cursor: Scalars['String']
    /** The item at this edge */
    node: MarketplaceAppReview[]
    __typename: 'MarketplaceAppReviewEdge'
}


/** A marketplace app installation within an organization */
export interface MarketplaceAppInstallation {
    /** Unique identifier of the installation */
    id: Scalars['ID']
    /** ID of the installed marketplace app */
    marketplaceAppId: Scalars['ID']
    /** ID of the organization where the app is installed */
    organizationId: Scalars['ID']
    /** ID of the account that performed the installation */
    installedById: Scalars['ID']
    /** Current status of the installation */
    status: MarketplaceInstallationStatus
    /** Permissions granted to this app by the organization (OrganizationPermission IDs) */
    grantedPermissions: Scalars['String'][]
    /** Timestamp when the app was installed */
    createdAt: Scalars['DateTime']
    /** Timestamp when the installation was last updated */
    updatedAt: Scalars['DateTime']
    /** The marketplace app for this installation */
    marketplaceApp: MarketplaceApp
    __typename: 'MarketplaceAppInstallation'
}


/** Status of a marketplace app installation */
export type MarketplaceInstallationStatus = 'ACTIVE' | 'SUSPENDED' | 'UNINSTALLED'


/** Paginated list of marketplace app installations */
export interface MarketplaceAppInstallations {
    /** List of edges containing cursor and node pairs */
    edges: MarketplaceAppInstallationEdge[]
    /** Flat list of items in the current page */
    nodes: MarketplaceAppInstallation[]
    /** Pagination metadata for navigating between pages */
    pageInfo: ResponsePageInfo
    /** Total number of items across all pages */
    totalCount: (Scalars['Float'] | null)
    __typename: 'MarketplaceAppInstallations'
}


/** An edge in a paginated connection containing a cursor and node */
export interface MarketplaceAppInstallationEdge {
    /** Opaque cursor string for this edge, used for pagination */
    cursor: Scalars['String']
    /** The item at this edge */
    node: MarketplaceAppInstallation[]
    __typename: 'MarketplaceAppInstallationEdge'
}


/** Aggregated statistics for a marketplace app */
export interface MarketplaceAppStats {
    /** Total number of active installations across all organizations */
    totalInstallations: Scalars['Int']
    /** Average star rating from all reviews */
    averageRating: (Scalars['Float'] | null)
    /** Total number of reviews submitted for this app */
    totalReviews: Scalars['Int']
    __typename: 'MarketplaceAppStats'
}


/** Pricing configuration for a marketplace app */
export interface MarketplaceAppPricing {
    /** Unique identifier of the pricing record */
    id: Scalars['ID']
    /** ID of the marketplace app this pricing applies to */
    marketplaceAppId: Scalars['ID']
    /** Pricing model type (e.g. one-time, subscription, free) */
    type: MarketplacePricingType
    /** Price amount in the smallest currency unit (e.g. cents) */
    priceAmountCents: Scalars['Int']
    /** ISO 4217 currency code */
    currency: Scalars['String']
    /** Number of free trial days for subscription pricing */
    trialDays: Scalars['Int']
    /** Timestamp when the pricing was created */
    createdAt: Scalars['DateTime']
    /** Timestamp when the pricing was last updated */
    updatedAt: Scalars['DateTime']
    __typename: 'MarketplaceAppPricing'
}


/** Pricing model for a marketplace app */
export type MarketplacePricingType = 'FREE' | 'ONE_TIME' | 'SUBSCRIPTION'


/** A single configuration property for a platform module */
export interface ModuleConfigProp {
    /** Configuration property key */
    key: Scalars['String']
    /** Configuration property value (serialized as string) */
    value: Scalars['String']
    __typename: 'ModuleConfigProp'
}


/** Configuration for a platform module installed from the marketplace */
export interface PlatformModuleConfig {
    /** Unique identifier */
    id: Scalars['ID']
    /** Platform this config belongs to */
    platformId: Scalars['ID']
    /** Marketplace app that provides this module */
    marketplaceAppId: Scalars['ID']
    /** Module name within the app */
    moduleName: Scalars['String']
    /** Module configuration props as key-value pairs */
    props: ModuleConfigProp[]
    /** When the config was created */
    createdAt: Scalars['DateTime']
    /** When the config was last updated */
    updatedAt: Scalars['DateTime']
    __typename: 'PlatformModuleConfig'
}

export interface ModuleTokenDto {
    appId: Scalars['ID']
    marketplaceAppId: Scalars['ID']
    moduleName: Scalars['String']
    displayName: Scalars['String']
    token: Scalars['String']
    /** S3 CDN path for the module bundle */
    cdnPath: Scalars['String']
    exportName: Scalars['String']
    version: Scalars['String']
    propsSchema: FrontendModulePropSchemaModel[]
    events: FrontendModuleEventModel[]
    grantedPermissions: Scalars['String'][]
    __typename: 'ModuleTokenDto'
}

export interface ExtensionTokenDto {
    token: Scalars['String']
    marketplaceAppId: Scalars['ID']
    appId: Scalars['ID']
    __typename: 'ExtensionTokenDto'
}


/** A key-value metafield attached to an entity by a marketplace app */
export interface EntityMetafield {
    /** Unique identifier of the metafield */
    id: Scalars['ID']
    /** ID of the organization that owns this metafield */
    organizationId: Scalars['ID']
    /** ID of the app that created this metafield */
    appId: Scalars['ID']
    /** Namespace scoping this metafield to a specific app */
    namespace: Scalars['String']
    /** Type of entity this metafield is attached to */
    entityType: Scalars['String']
    /** ID of the entity this metafield is attached to */
    entityId: Scalars['ID']
    /** Key name for this metafield within the namespace */
    key: Scalars['String']
    /** JSON-serialized value */
    value: Scalars['String']
    /** Timestamp when the metafield was created */
    createdAt: Scalars['DateTime']
    /** Timestamp when the metafield was last updated */
    updatedAt: Scalars['DateTime']
    __typename: 'EntityMetafield'
}


/** A typed metadata entry attached to an organization object */
export interface ObjectMetadata {
    /** Key name for this metadata entry */
    key: Scalars['String']
    /** Value of the metadata entry */
    value: Scalars['String']
    /** Type of the metadata value (STRING, BOOLEAN, IMAGE_URL, URL) */
    type: MetadataType
    /** Visibility of the metadata entry (PUBLIC or PRIVATE) */
    visibility: MetadataVisibility
    /** Prisma model name of the object this metadata is attached to */
    objectType: ObjectType
    /** Short ID of the object this metadata is attached to */
    objectId: Scalars['ID']
    /** Timestamp when the metadata entry was created */
    createdAt: Scalars['DateTime']
    /** Timestamp when the metadata entry was last updated */
    updatedAt: Scalars['DateTime']
    __typename: 'ObjectMetadata'
}

export type MetadataType = 'STRING' | 'BOOLEAN' | 'IMAGE_URL' | 'URL'

export type MetadataVisibility = 'PUBLIC' | 'PRIVATE'


/** Prisma model types that support metadata and custom fields */
export type ObjectType = 'Account' | 'ClanGroup' | 'ClanMember' | 'Clan' | 'Configuration' | 'LeaderboardSeasonBucketScore' | 'LeaderboardSeasonBucket' | 'LeaderboardSeason' | 'Leaderboard' | 'OrganizationGroup' | 'OrganizationMember' | 'OrganizationApp' | 'Organization' | 'EmailConfiguration' | 'EmailTemplate' | 'OrganizationIdentityProvider' | 'IdentityProvider' | 'PlayerProfile' | 'SkillRating' | 'PlayerSkillRating' | 'TeamMember' | 'Team' | 'TournamentStepGroupRoundGameMatchScores' | 'TournamentStepGroupRoundGameMatch' | 'TournamentStepGroupRoundGameTeamScore' | 'TournamentStepGroupRoundGame' | 'TournamentStepGroupRoundTeamScore' | 'TournamentStepGroupRound' | 'TournamentStepGroupTeamScore' | 'TournamentStepGroup' | 'TournamentStepTeamScore' | 'TournamentStep' | 'TournamentTeamMember' | 'TournamentTeam' | 'TournamentTeamScore' | 'Tournament' | 'TournamentAdmin' | 'TournamentFeature' | 'EventVenueSeat' | 'EventVenueSeatType' | 'EventVenue' | 'EventSeatStatus' | 'EventTicketConfiguration' | 'EventReservationTicket' | 'EventReservation' | 'Event' | 'UserGroupConfiguration' | 'UserGroup' | 'UserGroupMember' | 'SubscriptionItem' | 'Log' | 'PlatformTemplate' | 'Platform' | 'PlatformCdnFile' | 'PlatformModuleConfig' | 'Webhook' | 'Payments' | 'Currency' | 'PlayerCurrency' | 'ItemCategory' | 'Item' | 'PlayerItem' | 'Shop' | 'ShopCategory' | 'PlayerShopProductPurshase' | 'ShopProductItem' | 'ShopProduct' | 'StepRuleSet' | 'RuleSetVersion' | 'ScoringRuleSet' | 'TiebreakerRule' | 'AdvancementRule' | 'RuleExecutionLog' | 'CrossStepRule' | 'StructureTemplate' | 'GroupTemplate' | 'RoundTemplate' | 'GameTemplate' | 'AppWebhook' | 'AppRelease' | 'MarketplaceApp' | 'MarketplaceAppPricing' | 'MarketplaceAppRelease' | 'MarketplaceAppReview' | 'MarketplaceAppInstallation'


/** Metadata entries grouped by object ID for batch queries */
export interface ObjectMetadataBatchResult {
    /** ID of the object */
    objectId: Scalars['ID']
    /** Metadata entries for this object */
    entries: ObjectMetadata[]
    __typename: 'ObjectMetadataBatchResult'
}


/** A label/value pair option for SELECT or MULTI_SELECT custom fields */
export interface CustomFieldOptionModel {
    /** Human-readable label for this option */
    label: Scalars['String']
    /** Stored value for this option */
    value: Scalars['String']
    __typename: 'CustomFieldOptionModel'
}


/** Definition of a custom field attached to an organization and object type */
export interface CustomFieldDefinitionModel {
    /** Unique identifier of the custom field definition */
    id: Scalars['ID']
    /** Type of object this field is attached to (e.g. Tournament, Account) */
    objectType: ObjectType
    /** Unique key identifier for this field within the object type */
    key: Scalars['String']
    /** Human-readable display name of the field */
    name: Scalars['String']
    /** Optional description explaining the purpose of this field */
    description: (Scalars['String'] | null)
    /** Data type of the field value */
    type: CustomFieldType
    /** Whether this field must be filled in */
    required: Scalars['Boolean']
    /** Whether the value must be unique across all objects of this type */
    unique: Scalars['Boolean']
    /** Display order position of this field */
    order: Scalars['Int']
    /** Visibility level controlling who can view this field value */
    visibility: PropertyVisibility
    /** Editability rule controlling when and by whom this field can be modified */
    editability: ProperyEditability
    /** Available options for SELECT or MULTI_SELECT fields */
    options: (CustomFieldOptionModel[] | null)
    /** Default value applied when no value is provided */
    defaultValue: (Scalars['String'] | null)
    /** Optional regex pattern the value must match */
    validationRegex: (Scalars['String'] | null)
    /** Timestamp when the definition was created */
    createdAt: Scalars['DateTime']
    /** Timestamp when the definition was last updated */
    updatedAt: Scalars['DateTime']
    __typename: 'CustomFieldDefinitionModel'
}

export type CustomFieldType = 'STRING' | 'NUMBER' | 'BOOLEAN' | 'DATE' | 'EMAIL' | 'PHONE' | 'URL' | 'COUNTRY' | 'SELECT' | 'MULTI_SELECT' | 'IMAGE'


/** A custom field definition paired with its current value for a specific object */
export interface CustomFieldWithValueModel {
    /** The field definition */
    definition: CustomFieldDefinitionModel
    /** Current value of this field for the object */
    value: (Scalars['String'] | null)
    __typename: 'CustomFieldWithValueModel'
}


/** Custom field values grouped by object ID for batch queries */
export interface CustomFieldValuesBatchResultModel {
    /** ID of the object */
    objectId: Scalars['ID']
    /** Custom field values for this object */
    fields: CustomFieldWithValueModel[]
    __typename: 'CustomFieldValuesBatchResultModel'
}


/** A custom domain associated with a platform, including its DNS and SSL configuration status */
export interface PlatformCustomDomainData {
    /** The custom domain hostname */
    domain: Scalars['String']
    /** The Cloudflare custom domain configuration and validation status */
    configuration: (CustomDomainData | null)
    __typename: 'PlatformCustomDomainData'
}


/** Social media links for a platform theme */
export interface PlatformThemeSocialLinksModel {
    /** Twitter/X profile URL */
    twitter: (Scalars['String'] | null)
    /** Discord server invite URL */
    discord: (Scalars['String'] | null)
    /** Twitch channel URL */
    twitch: (Scalars['String'] | null)
    __typename: 'PlatformThemeSocialLinksModel'
}


/** Configuration for a platform homepage section */
export interface PlatformThemeSectionConfigModel {
    /** Section identifier name */
    name: Scalars['String']
    /** Whether the section is visible on the platform */
    visible: Scalars['Boolean']
    /** Display order of the section */
    order: Scalars['Float']
    __typename: 'PlatformThemeSectionConfigModel'
}


/** Configuration options for a platform instance */
export interface PlatformConfiguration {
    /** Whether to enable white-label mode, removing WellPlayed branding */
    whitelabel: (Scalars['Boolean'] | null)
    __typename: 'PlatformConfiguration'
}


/** A platform instance representing a hosted website for an organization */
export interface Platform {
    /** Unique identifier of the platform */
    id: Scalars['ID']
    /** Display name of the platform */
    name: Scalars['String']
    /** When this platform was created */
    createdAt: Scalars['DateTime']
    /** When this platform was last updated */
    updatedAt: Scalars['DateTime']
    /** Platform configuration settings including white-label options */
    configuration: (PlatformConfiguration | null)
    /** The organization this platform belongs to */
    organizationId: Scalars['ID']
    /** The OAuth application ID associated with this platform */
    appId: (Scalars['String'] | null)
    /** The custom domains configured for this platform */
    customDomains: PlatformCustomDomainData[]
    __typename: 'Platform'
}


/** A reusable template that can be applied to platforms, containing predefined CDN files and configurations */
export interface PlatformTemplate {
    /** Unique identifier of the template */
    id: Scalars['ID']
    /** Display name of the template */
    name: Scalars['String']
    /** Human-readable description of the template */
    description: Scalars['String']
    /** URL of the template preview screenshot */
    screenshotUrl: Scalars['URL']
    /** When this template was created */
    createdAt: Scalars['DateTime']
    /** When this template was last updated */
    updatedAt: Scalars['DateTime']
    /** The account ID of the template creator */
    ownerId: Scalars['ID']
    /** The organization this template belongs to */
    organizationId: Scalars['ID']
    /** Whether this template is publicly available to all organizations */
    public: Scalars['Boolean']
    __typename: 'PlatformTemplate'
}


/** Analytics data for real-time user presence sessions within an organization */
export interface PresenceAnalytics {
    /** The total number of active sessions (authenticated and anonymous combined) */
    totalSessions: Scalars['Int']
    /** The number of active sessions from authenticated users */
    authenticatedSessions: Scalars['Int']
    /** The number of active sessions from anonymous (unauthenticated) users */
    anonymousSessions: Scalars['Int']
    __typename: 'PresenceAnalytics'
}


/** Represents a user connection event in the presence system */
export interface UserConnectionEvent {
    /** The unique session identifier */
    sessionId: Scalars['ID']
    /** The ID of the server handling this session */
    serverId: Scalars['ID']
    /** The player profile ID associated with this session, if any */
    playerId: (Scalars['ID'] | null)
    /** The account ID associated with this session, if authenticated */
    accountId: (Scalars['ID'] | null)
    /** The organization ID this session belongs to */
    organizationId: Scalars['ID']
    __typename: 'UserConnectionEvent'
}


/** Event payload containing a batch of user connection events */
export interface UsersConnectedEvent {
    /** The list of users who connected */
    usersConnected: UserConnectionEvent[]
    __typename: 'UsersConnectedEvent'
}


/** Represents a user disconnection event in the presence system */
export interface UserDisconnectEvent {
    /** The unique session identifier */
    sessionId: Scalars['ID']
    /** The ID of the server handling this session */
    serverId: Scalars['ID']
    /** The player profile ID associated with this session, if any */
    playerId: (Scalars['ID'] | null)
    /** The account ID associated with this session, if authenticated */
    accountId: (Scalars['ID'] | null)
    /** The organization ID this session belongs to */
    organizationId: Scalars['ID']
    __typename: 'UserDisconnectEvent'
}


/** Event payload containing a batch of user disconnection events */
export interface UsersDisconnectedEvent {
    /** The list of users who disconnected */
    usersDisconnected: UserDisconnectEvent[]
    __typename: 'UsersDisconnectedEvent'
}


/** Payment session information returned after initiating a shop purchase */
export interface PaymentUrlAndClientSecret {
    /** The Stripe checkout URL for redirect-based payment flows */
    paymentUrl: (Scalars['String'] | null)
    /** The Stripe client secret for embedded payment flows */
    clientSecret: (Scalars['String'] | null)
    __typename: 'PaymentUrlAndClientSecret'
}


/** A record of a player purchasing a shop product */
export interface PlayerShopProductPurshase {
    /** The unique identifier of the purchase record */
    id: Scalars['ID']
    /** The ID of the player who made the purchase */
    playerProfileId: Scalars['ID']
    /** The ID of the shop product that was purchased */
    shopProductId: Scalars['ID']
    /** The quantity of the product purchased */
    quantity: Scalars['Float']
    /** The date and time the purchase was made */
    createdAt: Scalars['DateTime']
    /** The date and time the purchase record was last updated */
    updatedAt: Scalars['DateTime']
    __typename: 'PlayerShopProductPurshase'
}


/** Paginated list of player shop product purchases */
export interface PlayerShopProductPurshasesDto {
    /** List of edges containing cursor and node pairs */
    edges: PlayerShopProductPurshaseEdge[]
    /** Flat list of items in the current page */
    nodes: PlayerShopProductPurshase[]
    /** Pagination metadata for navigating between pages */
    pageInfo: ResponsePageInfo
    /** Total number of items across all pages */
    totalCount: (Scalars['Float'] | null)
    __typename: 'PlayerShopProductPurshasesDto'
}


/** An edge in a paginated connection containing a cursor and node */
export interface PlayerShopProductPurshaseEdge {
    /** Opaque cursor string for this edge, used for pagination */
    cursor: Scalars['String']
    /** The item at this edge */
    node: PlayerShopProductPurshase[]
    __typename: 'PlayerShopProductPurshaseEdge'
}


/** A category within a shop used to organize products */
export interface ShopCategory {
    /** The unique identifier of the shop category */
    id: Scalars['ID']
    /** An optional external identifier for integrations */
    externalId: (Scalars['String'] | null)
    /** The display name of the category */
    name: Scalars['String']
    /** A text description of the category */
    description: Scalars['String']
    /** Custom metadata key-value pairs associated with the category */
    metadata: PropertyValue[]
    /** The date and time the category was created */
    createdAt: Scalars['DateTime']
    /** The date and time the category was last updated */
    updatedAt: Scalars['DateTime']
    /** The ID of the shop this category belongs to */
    shopId: Scalars['ID']
    __typename: 'ShopCategory'
}


/** Paginated list of shop categories */
export interface ShopCategories {
    /** List of edges containing cursor and node pairs */
    edges: ShopCategoryEdge[]
    /** Flat list of items in the current page */
    nodes: ShopCategory[]
    /** Pagination metadata for navigating between pages */
    pageInfo: ResponsePageInfo
    /** Total number of items across all pages */
    totalCount: (Scalars['Float'] | null)
    __typename: 'ShopCategories'
}


/** An edge in a paginated connection containing a cursor and node */
export interface ShopCategoryEdge {
    /** Opaque cursor string for this edge, used for pagination */
    cursor: Scalars['String']
    /** The item at this edge */
    node: ShopCategory[]
    __typename: 'ShopCategoryEdge'
}


/** Configuration constraints for purchasing a shop product */
export interface ShopProductConfiguration {
    /** The minimum quantity allowed per purchase */
    minQuantity: (Scalars['Int'] | null)
    /** The maximum quantity allowed per purchase */
    maxQuantity: (Scalars['Int'] | null)
    /** The maximum total quantity a player can buy across all purchases */
    maxBoughtQuantity: (Scalars['Int'] | null)
    __typename: 'ShopProductConfiguration'
}


/** An entity-quantity pair representing a referenced entity and its associated quantity */
export interface EntityQuantity {
    /** The ID of the referenced entity */
    id: Scalars['ID']
    /** The quantity associated with this entity */
    quantity: Scalars['Int']
    __typename: 'EntityQuantity'
}


/** A shop item with its type, reference, and quantity */
export interface ShopItemQuantity {
    /** The type of the shop item (ITEM or CURRENCY) */
    type: ShopProductItemType
    /** The ID of the item or currency */
    id: Scalars['ID']
    /** The quantity of the item included in the product */
    quantity: Scalars['Int']
    __typename: 'ShopItemQuantity'
}

export type ShopProductItemType = 'CURRENCY' | 'ITEM'


/** A product available for purchase within a shop */
export interface ShopProduct {
    /** The unique identifier of the shop product */
    id: Scalars['ID']
    /** The display name of the product */
    name: Scalars['String']
    /** An optional external identifier for integrations */
    externalId: (Scalars['String'] | null)
    /** A text description of the product */
    description: Scalars['String']
    /** The ID of the category this product belongs to */
    categoryId: (Scalars['ID'] | null)
    /** The real-money price of the product in the specified currency */
    price: (Scalars['Float'] | null)
    /** Purchase constraints such as min/max quantities */
    configuration: ShopProductConfiguration
    /** Custom metadata key-value pairs associated with the product */
    metadata: PropertyValue[]
    /** The date and time the product was created */
    createdAt: Scalars['DateTime']
    /** The date and time the product was last updated */
    updatedAt: Scalars['DateTime']
    /** The date and time after which the product becomes visible */
    visibleAt: (Scalars['DateTime'] | null)
    /** The ID of the shop this product belongs to */
    shopId: Scalars['ID']
    /** The real-money currency code for the product price */
    currency: ShopCurrencies
    /** The items and currencies bundled with this product */
    items: ShopItemQuantity[]
    /** The in-game currency prices for purchasing this product */
    currencyPrices: EntityQuantity[]
    __typename: 'ShopProduct'
}


/** Paginated list of shop products */
export interface ShopProducts {
    /** List of edges containing cursor and node pairs */
    edges: ShopProductEdge[]
    /** Flat list of items in the current page */
    nodes: ShopProduct[]
    /** Pagination metadata for navigating between pages */
    pageInfo: ResponsePageInfo
    /** Total number of items across all pages */
    totalCount: (Scalars['Float'] | null)
    __typename: 'ShopProducts'
}


/** An edge in a paginated connection containing a cursor and node */
export interface ShopProductEdge {
    /** Opaque cursor string for this edge, used for pagination */
    cursor: Scalars['String']
    /** The item at this edge */
    node: ShopProduct[]
    __typename: 'ShopProductEdge'
}


/** A shop belonging to an organization for selling products */
export interface Shop {
    /** The unique identifier of the shop */
    id: Scalars['ID']
    /** An optional external identifier for integrations */
    externalId: (Scalars['String'] | null)
    /** The display name of the shop */
    name: Scalars['String']
    /** A text description of the shop */
    description: Scalars['String']
    /** The date and time the shop was created */
    createdAt: Scalars['DateTime']
    /** The date and time the shop was last updated */
    updatedAt: Scalars['DateTime']
    /** The ID of the organization this shop belongs to */
    organizationId: Scalars['ID']
    /** Custom metadata key-value pairs associated with the shop */
    metadata: PropertyValue[]
    __typename: 'Shop'
}


/** Paginated list of shops */
export interface Shops {
    /** List of edges containing cursor and node pairs */
    edges: ShopEdge[]
    /** Flat list of items in the current page */
    nodes: Shop[]
    /** Pagination metadata for navigating between pages */
    pageInfo: ResponsePageInfo
    /** Total number of items across all pages */
    totalCount: (Scalars['Float'] | null)
    __typename: 'Shops'
}


/** An edge in a paginated connection containing a cursor and node */
export interface ShopEdge {
    /** Opaque cursor string for this edge, used for pagination */
    cursor: Scalars['String']
    /** The item at this edge */
    node: Shop[]
    __typename: 'ShopEdge'
}


/** An individual item or currency within a shop product bundle */
export interface ShopProductItem {
    /** The unique identifier of the shop product item */
    id: Scalars['ID']
    /** The ID of the currency, if this item is of type CURRENCY */
    currencyId: (Scalars['ID'] | null)
    /** The date and time this item entry was created */
    createdAt: Scalars['DateTime']
    /** The date and time this item entry was last updated */
    updatedAt: Scalars['DateTime']
    /** The type of the shop item (ITEM or CURRENCY) */
    type: ShopProductItemType
    /** The ID of the parent shop product */
    shopItemId: Scalars['ID']
    /** The ID of the item, if this item is of type ITEM */
    itemId: (Scalars['ID'] | null)
    /** The quantity of this item included in the product */
    quantity: Scalars['Int']
    __typename: 'ShopProductItem'
}


/** Paginated list of shop product items */
export interface ShopProductItems {
    /** List of edges containing cursor and node pairs */
    edges: ShopProductItemEdge[]
    /** Flat list of items in the current page */
    nodes: ShopProductItem[]
    /** Pagination metadata for navigating between pages */
    pageInfo: ResponsePageInfo
    /** Total number of items across all pages */
    totalCount: (Scalars['Float'] | null)
    __typename: 'ShopProductItems'
}


/** An edge in a paginated connection containing a cursor and node */
export interface ShopProductItemEdge {
    /** Opaque cursor string for this edge, used for pagination */
    cursor: Scalars['String']
    /** The item at this edge */
    node: ShopProductItem[]
    __typename: 'ShopProductItemEdge'
}


/** Configuration settings for a skill rating */
export interface SkillRatingConfiguration {
    /** Optional leaderboard ID to automatically update when match results are registered */
    updateLeaderboardId: (Scalars['ID'] | null)
    __typename: 'SkillRatingConfiguration'
}


/** Result of a skill rating update for an individual player after a match */
export interface OrganizationSkillRatingsRegisterMatchPlayer {
    /** Player profile ID */
    id: Scalars['ID']
    /** New skill rating value after the match */
    newValue: Scalars['Float']
    /** Previous skill rating value before the match */
    oldValue: Scalars['Float']
    /** Points added or subtracted from the linked leaderboard, if configured */
    leaderboardPointsUpdate: (Scalars['Float'] | null)
    __typename: 'OrganizationSkillRatingsRegisterMatchPlayer'
}


/** A skill rating configuration belonging to an organization */
export interface OrganizationSkillRating {
    /** Unique identifier of the skill rating */
    id: Scalars['ID']
    /** Display name of the skill rating */
    name: Scalars['String']
    /** Description of what this skill rating measures */
    description: Scalars['String']
    /** Algorithm type used for rating calculation */
    type: SkillRatingType
    /** Configuration options for this skill rating */
    configuration: SkillRatingConfiguration
    /** ID of the organization that owns this skill rating */
    organizationId: Scalars['ID']
    /** Timestamp when the skill rating was created */
    createdAt: Scalars['DateTime']
    /** Timestamp when the skill rating was last updated */
    updatedAt: Scalars['DateTime']
    __typename: 'OrganizationSkillRating'
}

export type SkillRatingType = 'BREDLEY_TERRY_FULL' | 'BRADLEY_TERRY_PART' | 'THURSTONE_MOSTELLER_FULL' | 'THURSTONE_MOSTELLER_PART' | 'PLACKETT_LUCE'


/** An override for an organization limit provided by a subscription item */
export interface LimitOverride {
    /** The limit type being overridden */
    limit: OrganizationLimitsType
    /** The override value for this limit */
    value: Scalars['Float']
    __typename: 'LimitOverride'
}

export type OrganizationLimitsType = 'REGISTERED_USERS' | 'ORGANIZATION_GROUPS' | 'ORGANIZATION_MEMBERS' | 'CUSTOM_FIELDS' | 'TOURNAMENT_STEPS' | 'TOURNAMENT_STEP_GROUPS' | 'TOURNAMENT_TEAMS_REGISTERED' | 'TOURNAMENT_TEAM_SIZE' | 'TOURNAMENT_REGISTRATION_RULES' | 'TOURNAMENT_STEP_RULE_SETS' | 'WEBHOOKS' | 'ANONYMOUS_PLAYER_PROFILES' | 'WHITE_LABEL' | 'LEADERBOARDS' | 'LEADERBOARD_ENTRIES' | 'LEADERBOARD_BUCKETS' | 'LEADERBOARD_SEASONS' | 'SKILL_RATINGS' | 'PLATFORMS' | 'PLATFORM_TEMPLATES' | 'ORGANIZATION_STORAGE_SIZE' | 'PLATFORM_CUSTOM_DOMAINS' | 'CUSTOM_IDENTITY_PROVIDERS' | 'APPS' | 'ATTACHED_APPS' | 'EVENTS_MAX_TICKETS_TYPES' | 'EVENTS_MAX_TICKETS' | 'EVENTS_MAX_GROUP_SIZE' | 'EVENTS_MAX_REGISTRATION_RULES' | 'EVENT_VENUES' | 'EVENT_VENUE_MAX_SEAT_TYPES' | 'EVENT_VENUE_MAX_SEATS' | 'EVENTS_MAX_TICKET_CONFIGURATION_CUSTOM_FIELDS' | 'CURRENCIES' | 'ITEM_CATEGORIES' | 'ITEMS' | 'SHOPS' | 'SHOP_CATEGORIES' | 'SHOP_PRODUCTS' | 'MARKETPLACE_PUBLISHED_APPS' | 'MARKETPLACE_INSTALLATIONS'


/** A purchasable subscription item that provides limit overrides to an organization */
export interface SubscriptionItem {
    /** Unique identifier of the subscription item */
    id: Scalars['ID']
    /** Display name of the subscription item */
    name: Scalars['String']
    /** Description of what this subscription item provides */
    description: Scalars['String']
    /** List of organization limit overrides granted by this item */
    limitsOverride: LimitOverride[]
    /** Maximum quantity of this item an organization can purchase */
    maxCount: (Scalars['Float'] | null)
    /** Price of the subscription item in cents */
    price: Scalars['Float']
    __typename: 'SubscriptionItem'
}


/** A subscription item currently active for an organization */
export interface OrganizationSubscriptionItem {
    /** ID of the organization that owns this subscription */
    organizationId: Scalars['ID']
    /** ID of the subscription item */
    subscriptionItemId: Scalars['ID']
    /** Quantity of this subscription item purchased */
    count: Scalars['Float']
    /** Timestamp when the subscription item was first activated */
    createdAt: Scalars['DateTime']
    /** Timestamp when the subscription item expires */
    endAt: Scalars['DateTime']
    /** Timestamp when the subscription item was last modified */
    updatedAt: Scalars['DateTime']
    /** Resolve the subscription item details for an organization subscription item */
    subscriptionItem: SubscriptionItem
    __typename: 'OrganizationSubscriptionItem'
}

export interface Query {
    /** Retrieves a paginated list of audit logs for the organization, optionally filtered by resource and log type */
    logs: Logs
    /** Retrieves the currently authenticated account */
    getMyAccount: Account
    /** Retrieves a single configuration preset by ID */
    configuration: Configuration
    /** Retrieves the current ranking of a player on a leaderboard */
    leaderboardCurrentPlayerRanking: LeaderboardSeasonBucketScore
    /** Retrieves a paginated list of leaderboards for the organization */
    leaderboards: Leaderboards
    /** Retrieves a single leaderboard by ID */
    leaderboard: Leaderboard
    /** Retrieves the currently active season for a leaderboard */
    currentLeaderboardSeason: LeaderboardSeason
    /** Retrieves a paginated list of seasons for a leaderboard */
    leaderboardSeasons: LeaderboardSeasons
    /** Retrieves a single leaderboard season by ID */
    leaderboardSeason: LeaderboardSeason
    /** Retrieves a paginated list of buckets for a leaderboard season */
    leaderboardSeasonBuckets: LeaderboardSeasonBuckets
    /** Retrieves a single leaderboard season bucket by ID */
    leaderboardSeasonBucket: LeaderboardSeasonBucket
    /** Retrieves a paginated and ranked list of player scores within a leaderboard season bucket */
    leaderboardSeasonBucketScores: LeaderboardSeasonBucketScores
    /** Get an organization by its ID */
    organization: Organization
    /** Get platform limit definitions, optionally filtered by ID */
    limitDefinitions: Limits
    /** Get current usage and quotas for the organization */
    organizationLimits: OrganizationLimits
    /** List all organizations the current user owns or is a member of */
    userOrganizations: Organization[]
    /** Retrieve a single organization group by its ID */
    organizationGroup: OrganizationGroup
    /** Retrieve a paginated list of all groups in the current organization */
    organizationGroups: OrganizationGroups
    /** Retrieve all available permission definitions that can be assigned to groups */
    availablePermissions: Permissions
    /** Retrieve a paginated list of all members in the current organization */
    organizationMembers: OrganizationMembers
    /** List all identity providers for the current organization, returning full or public details based on permissions */
    identityProviders: OrganizationIdentityProviderInfo[]
    /** Retrieve a single identity provider by ID with full configuration details */
    identityProvider: OrganizationIdentityProvider
    /** Get a single organization app by ID */
    organizationApp: OrganizationApp
    /** List all apps for the current organization */
    organizationApps: OrganizationApps
    /** List releases for an app */
    appReleasesByApp: AppRelease[]
    /** Get a single app release */
    appRelease: (AppRelease | null)
    /** List all available webhook event types that can be subscribed to */
    webhookAvailableEvents: WebhookEventConfiguration[]
    /** List all webhooks configured for the current organization */
    webhooks: Webhook[]
    /** Retrieve a single webhook by its ID */
    webhook: Webhook
    /** Retrieve a paginated list of apps attached to the current organization */
    organizationAttachedApps: OrganizationAttachedApps
    /** Retrieve a single available root identity provider by ID */
    availableRootIdentityProvider: PublicIdentityProvider
    /** Retrieve all available root identity providers */
    getAvailableRootIdentityProviders: PublicIdentityProvider[]
    /** Retrieves all available email template configurations with their trigger events and variables */
    emailTemplateConfigurations: EmailTemplateConfiguration[]
    /** Retrieves the SMTP email configuration for the organization */
    emailConfiguration: (EmailConfiguration | null)
    /** Retrieves a single email template by ID */
    emailTemplate: EmailTemplate
    /** Retrieves a paginated list of email templates for the organization */
    emailTemplates: EmailTemplates
    /** Search for players by username prefix within the current organization */
    searchPlayer: Player[]
    /** Retrieve a paginated list of players in the current organization */
    players: Players
    /** Retrieve a single player by ID, owner ID, or custom ID */
    player: Player
    /** Retrieve skill ratings for a specific player, optionally filtered by rating IDs */
    playerSkillRatings: PlayerSkillRating[]
    /** Retrieve the paginated match history for a specific player */
    playerMatchesHistory: TournamentStepGroupRoundGameMatches
    /** Retrieve a single tournament by its ID */
    tournament: Tournament
    /** Retrieve a paginated list of tournaments with filtering and ordering */
    tournaments: Tournaments
    /** List all steps for a tournament that the current user has permission to view */
    tournamentSteps: TournamentStep[]
    /** Retrieve a single tournament step by its ID */
    tournamentStep: TournamentStep
    /** Retrieve the generated bracket structure of a tournament step including groups, rounds, games, and matches */
    tournamentStepGeneratedShape: TournamentStepGroup[]
    /** Retrieve a single match by its ID */
    match: TournamentStepGroupRoundGameMatch
    /** Retrieve a single tournament team by its ID */
    tournamentTeam: TournamentTeam
    /** Retrieve a paginated list of teams registered to a tournament with optional filters */
    tournamentTeams: TournamentTeams
    /** Retrieve a paginated list of tournament players with optional filtering by username, properties, and team status */
    tournamentPlayers: TeamMembers
    /** Retrieve a paginated list of team invitations for the current authenticated player */
    tournamentTeamInvites: TeamMembers
    /** Retrieve all match scores for a tournament step with pagination */
    tournamentStepGroupRoundGameMatchScoresGetForStep: TournamentStepGroupRoundGameMatchScores
    /** List all administrators for a specific tournament */
    tournamentAdmins: TournamentAdmin[]
    /** Get rule set for a tournament step */
    stepRuleSet: (StepRuleSetModel | null)
    /** Get rule execution audit trail for a step */
    stepRuleExecutionLogs: PaginatedRuleExecutionLogs
    /** Dry validation of a rule set without saving */
    stepRuleSetValidate: RuleValidationResultModel
    /** Dry-run simulation of a rule set */
    stepRuleSetSimulate: SimulationResultModel
    /** List available rule preset names */
    rulePresets: RulePresetName[]
    /** List all CDN files for a platform or template, optionally filtered by file type */
    platformFiles: PlatformCdnFile[]
    /** Retrieve a single CDN file by its ID, including a signed dev URL for authorized editors */
    platformFile: PlatformCdnFile
    /** List all platforms owned by the current organization */
    platforms: Platform[]
    /** Retrieve a single platform by its ID */
    platform: (Platform | null)
    /** Look up a platform by its domain name */
    platformFindFromDomain: Platform
    /** Check whether a domain name is already registered to a platform */
    platformCheckDomainAvailability: Scalars['Boolean']
    /** List all custom domains configured for a specific platform */
    platformCustomDomains: PlatformCustomDomainData[]
    /** List all publicly available platform templates */
    platformTemplatesPublic: PlatformTemplate[]
    /** List all platform templates owned by the current organization */
    platformTemplates: PlatformTemplate[]
    /** Retrieve a single platform template by its ID */
    platformTemplate: (PlatformTemplate | null)
    /** Retrieve all available subscription items */
    subscriptionItems: SubscriptionItem[]
    /** Retrieve the current subscription items active for the organization */
    organizationCurrentSubscriptionItems: OrganizationSubscriptionItem[]
    /** Retrieve all skill ratings for the current organization */
    organizationSkillRatings: OrganizationSkillRating[]
    /** Retrieve a single skill rating by its ID */
    organizationSkillRating: OrganizationSkillRating
    /** Retrieve a single event by ID, including the current user's reservation if any */
    event: EventWithUserReservation
    /** Retrieve a paginated list of events with optional filtering and ordering */
    events: Events
    /** Retrieve a single ticket configuration by ID */
    eventTicketConfiguration: EventTicketConfiguration
    /** Retrieve all ticket configurations for a specific event */
    eventTicketConfigurations: EventTicketConfiguration[]
    /** Retrieve the current player's event reservations with optional status and event filters */
    eventReservationsMyReservations: EventReservations
    /** Retrieve a single event reservation by ID with ticket and custom field details */
    eventReservation: EventReservation
    /** Retrieve a paginated list of seat statuses for a specific event */
    eventSeats: EventSeats
    /** Retrieve a paginated list of reservations for a specific event with advanced filtering */
    eventReservations: EventReservations
    /** Retrieve a paginated list of event venues for the organization */
    eventVenues: EventVenues
    /** Retrieve a single event venue by ID */
    eventVenue: EventVenue
    /** Retrieve a paginated list of seats for a venue, optionally filtered by seat type */
    eventVenueSeats: EventVenueSeats
    /** Retrieve a paginated list of seat types for a specific venue */
    eventVenueSeatTypes: EventVenueSeatTypes
    /** Retrieve the payment collection configuration for the current organization, including Stripe account details and fees */
    organizationPaymentCollectionConfiguration: (OrganizationPaymentCollectionConfiguration | null)
    /** Retrieve paginated members of specified user groups */
    userGroupMembers: UserGroupMembers
    /** Retrieve paginated user groups by their IDs */
    userGroups: UserGroups
    /** Retrieve the current player's group memberships, optionally filtered by status or entity */
    userGroupMyMemberships: UserGroupMembers
    /** Retrieve presence analytics for the current organization */
    presenceAnalytics: PresenceAnalytics
    /** Retrieve a paginated list of shops in the current organization */
    shops: Shops
    /** Retrieve a paginated list of shop categories in the current organization */
    shopCategories: ShopCategories
    /** Retrieve a paginated list of shop product purchases for the current player or specified players */
    playerShopProductPurshases: PlayerShopProductPurshasesDto
    /** Retrieve a paginated list of products within a specific shop */
    shopProducts: ShopProducts
    /** Retrieve a paginated list of items within a specific shop product */
    shopProductItems: ShopProductItems
    /** Retrieves a paginated list of items for the organization */
    items: Items
    /** Retrieves a paginated list of items owned by players */
    playerItems: PlayerItems
    /** Retrieves a paginated list of item categories for the organization */
    itemCategories: ItemCategories
    /** Retrieves a paginated list of currencies for the organization */
    currencies: Currencies
    /** Retrieves a paginated list of player currency balances */
    playerCurrencies: PlayerCurrencies
    /** Browse published marketplace apps */
    marketplaceApps: MarketplaceApps
    /** Get a single marketplace app */
    marketplaceApp: MarketplaceApp
    /** List marketplace apps installed in the current organization */
    myMarketplaceInstallations: MarketplaceAppInstallations
    /** List releases for a marketplace app */
    appReleases: MarketplaceAppRelease[]
    moduleTokensForPlatform: ModuleTokenDto[]
    extensionToken: ExtensionTokenDto
    /** List all module configurations for a platform */
    platformModuleConfigs: PlatformModuleConfig[]
    /** Retrieve metafields for a specific entity */
    entityMetafields: EntityMetafield[]
    /** Returns all object types that support metadata and custom fields */
    allowedObjectTypes: ObjectType[]
    /** Get metadata entries for an object */
    objectMetadata: ObjectMetadata[]
    /** Get metadata entries for multiple objects of the same type in a single query */
    objectMetadataBatch: ObjectMetadataBatchResult[]
    /** List all custom field definitions for a given object type */
    customFieldDefinitions: CustomFieldDefinitionModel[]
    /** Get custom field values for an object */
    customFieldValues: CustomFieldWithValueModel[]
    /** Get custom field values for multiple objects of the same type in a single query */
    customFieldValuesBatch: CustomFieldValuesBatchResultModel[]
    __typename: 'Query'
}

export type OrganizationIdentityProviderInfo = (OrganizationIdentityProvider | PublicOrganizationIdentityProviderV2) & { __isUnion?: true }


/** Public-facing identity provider information with redirect URL, excluding sensitive configuration details */
export interface PublicOrganizationIdentityProviderV2 {
    /** Whether player accounts must be validated through this provider */
    requiredForPlayerValidation: Scalars['Boolean']
    /** Whether users can log in using this identity provider */
    allowLogin: Scalars['Boolean']
    /** Human-readable description of this identity provider */
    description: Scalars['String']
    /** URL or identifier for the provider icon */
    icon: (Scalars['String'] | null)
    /** Unique identifier of this identity provider */
    id: Scalars['ID']
    /** Display name of the identity provider */
    name: Scalars['String']
    /** The organization this provider belongs to */
    organizationId: (Scalars['ID'] | null)
    /** The authorization URL users are redirected to for authentication */
    redirectUrl: (Scalars['String'] | null)
    __typename: 'PublicOrganizationIdentityProviderV2'
}

export type TournamentsQueryOrderBy = 'START_AT' | 'REGISTRATIONS_START_AT' | 'END_AT' | 'REGISTRATIONS_END_AT'

export type OrderDirection = 'ASC' | 'DESC'

export type TournamentsQueryStatus = 'ALL' | 'STARTED' | 'ENDED' | 'REGISTRATIONS_OPEN' | 'REGISTRATIONS_ENDED' | 'REGISTRATIONS_CLOSED'

export type RulePresetName = 'SINGLE_ELIM' | 'DOUBLE_ELIM' | 'ROUND_ROBIN' | 'SWISS' | 'BUCHHOLZ_GROUPS' | 'ROUND_ROBIN_BO3' | 'LEAGUE_HOME_AWAY' | 'SWISS_ACCELERATED' | 'SINGLE_ELIM_CONSOLATION' | 'RANDOM_DRAW_KNOCKOUT' | 'STEP_LADDER' | 'PAGE_PLAYOFF' | 'GAUNTLET' | 'DOUBLE_ELIM_TRUE_FINALS' | 'GSL_FORMAT' | 'SWISS_MCMAHON' | 'TRIPLE_ELIM' | 'POINTS_RACE' | 'BATTLE_ROYALE' | 'ROUND_ROBIN_PLAYOFFS' | 'CONQUEST' | 'KING_OF_THE_HILL_BO5'

export type EventsQueryOrderBy = 'START_AT' | 'REGISTRATIONS_START_AT' | 'END_AT' | 'REGISTRATIONS_END_AT'

export type EventsQueryStatus = 'ALL' | 'STARTED' | 'ENDED' | 'REGISTRATIONS_OPEN' | 'REGISTRATIONS_ENDED' | 'REGISTRATIONS_CLOSED'

export interface Mutation {
    /** Deletes an account by ID from the current organization */
    deleteAccount: Scalars['Boolean']
    /** Generates access token for an account identity provider with the stored refresh token */
    accountIdentityGenerateAccessToken: Scalars['String']
    /** Refreshes an account identity by re-fetching data using the stored refresh token */
    accountIdentityRefresh: AccountIdentity
    /** Attaches or updates an identity provider identity to the current account using a token */
    attachOrUpdateIdentityToAccount: AccountIdentity
    /** Generates a URL to redirect the user to for linking an identity provider to their account */
    generateIdentityLinkUrl: IdentityLinkUrl
    /** Updates an existing configuration preset */
    updateConfiguration: Configuration
    /** Deletes a configuration preset by ID */
    deleteConfiguration: Scalars['Boolean']
    /** Registers a new score for a player on a leaderboard */
    leaderboardRegisterPlayerScore: LeaderboardSeasonBucketScore
    /** Creates a new leaderboard within the organization */
    createLeaderboard: Leaderboard
    /** Updates an existing leaderboard by ID */
    updateLeaderboard: Leaderboard
    /** Deletes a leaderboard by ID and adjusts organization limits */
    deleteLeaderboard: Scalars['Void']
    /** Creates a new season for a leaderboard */
    createLeaderboardSeason: LeaderboardSeason
    /** Updates an existing leaderboard season by ID */
    updateLeaderboardSeason: LeaderboardSeason
    /** Deletes a leaderboard season by ID and adjusts resource limits */
    deleteLeaderboardSeason: Scalars['Void']
    /** Creates a new score bucket within a leaderboard season */
    createLeaderboardSeasonBucket: LeaderboardSeasonBucket
    /** Updates an existing leaderboard season bucket by ID */
    updateLeaderboardSeasonBucket: LeaderboardSeasonBucket
    /** Deletes a leaderboard season bucket by ID and adjusts resource limits */
    deleteLeaderboardSeasonBucket: Scalars['Void']
    /** Update an existing organization name, description, or configuration */
    updateOrganization: Organization
    /** Create a new organization with default permission groups */
    createOrganization: Organization
    /** Create a new permission group within the organization */
    createOrganizationGroup: OrganizationGroup
    /** Update the name and permissions of an existing organization group */
    updateOrganizationGroup: OrganizationGroup
    /** Delete a custom (non-default) organization group */
    deleteOrganizationGroup: Scalars['Boolean']
    /** Add a new member to the organization or update an existing membership */
    setOrganizationMembership: OrganizationMember
    /** Remove a member from the organization */
    deleteOrganizationMembership: Scalars['Boolean']
    /** Create a new identity provider for the organization with OAuth2 or OpenID Connect configuration */
    createIdentityProvider: OrganizationIdentityProvider
    /** Update an existing identity provider configuration */
    updateIdentityProvider: OrganizationIdentityProvider
    /** Delete an identity provider from the organization */
    deleteIdentityProvider: Scalars['Boolean']
    /** Create a new OAuth2 app for the organization */
    createOrganizationApp: OrganizationApp
    /** Regenerate the OAuth2 client secret for an organization app */
    resetOrganizationAppSecret: Scalars['String']
    /** Update an existing organization app configuration */
    updateOrganizationApp: OrganizationApp
    /** Delete an organization app and its OAuth2 client */
    deleteOrganizationApp: Scalars['Boolean']
    /** Update the working manifest for an organization app */
    updateOrganizationAppManifest: OrganizationApp
    /** Create a new release for an app (snapshots current manifest) */
    createAppRelease: AppRelease
    /** Create a new webhook endpoint for the organization with a generated signing secret */
    createWebhook: Webhook
    /** Update an existing webhook configuration */
    updateWebhook: Webhook
    /** Delete a webhook endpoint from the organization */
    deleteWebhook: Webhook
    /** Regenerate the signing secret for a webhook, invalidating the previous secret */
    regenerateWebhookSecret: Webhook
    /** Attach an application to the organization or update its permissions and group assignment */
    setOrganizationAttachedApp: OrganizationAttachedApp
    /** Detach an application from the organization */
    deleteOrganizationAttachedApp: Scalars['Boolean']
    /** Sends emails to players using a template or custom content */
    emailSend: Scalars['Boolean']
    /** Creates or updates the SMTP email configuration for the organization */
    emailConfigurationUpdate: EmailConfiguration
    /** Creates a new email template for a trigger event */
    emailTemplateCreate: EmailTemplate
    /** Updates an existing email template by ID */
    emailTemplateUpdate: EmailTemplate
    /** Deletes an email template by ID */
    emailTemplateDelete: EmailTemplate
    /** Create a new player profile in the current organization */
    createPlayer: Player
    /** Update an existing player profile by ID or custom ID */
    updatePlayer: Player
    /** Create or update the authenticated user own player profile */
    createOrUpdateMyPlayerProfile: Player
    /** Delete a player profile by ID or custom ID */
    deletePlayer: Scalars['Boolean']
    /** Create a new tournament */
    createTournament: Tournament
    /** Update a tournament */
    updateTournament: Tournament
    /** Delete a tournament */
    deleteTournament: Scalars['Boolean']
    /** Start a tournament step that has been seeded, transitioning it to STARTED status */
    startTournamentStep: Scalars['Boolean']
    /** Create a new tournament step with its bracket configuration */
    createTournamentStep: TournamentStep
    /** Update a tournament step configuration, resetting it to CONFIGURED status */
    updateTournamentStep: TournamentStep
    /** Delete a tournament step and all its associated groups, rounds, and games */
    deleteTournamentStep: Scalars['Boolean']
    /** Generate the bracket structure for a tournament step based on its configuration or rule set */
    generateTournamentStep: Scalars['Boolean']
    /** Seed teams into a generated tournament step using automatic or manual seeding */
    seedTournamentStep: Scalars['Boolean']
    /** Reset seeding: SEEDED → GENERATED. Clears team assignments and scores but keeps bracket structure. */
    resetTournamentStepSeeding: Scalars['Boolean']
    /** Full reset: → CONFIGURED. Deletes all generated brackets and scores. */
    resetTournamentStep: Scalars['Boolean']
    /** Update team scores for a match, handling formula computation and bracket progression */
    updateMatchScores: TournamentStepGroupRoundGameMatch
    /** Register multiple custom teams to a tournament as an admin, optionally creating new player profiles */
    registerCustomTournamentTeams: TournamentTeam[]
    /** Register a new team to a tournament as the current authenticated player */
    registerTournamentTeam: TournamentTeam
    /** Update a tournament team name, tag, or custom fields */
    updateTournamentTeam: TournamentTeam
    /** Delete the current player own tournament team while registrations are open */
    deleteTournamentTeam: Scalars['Boolean']
    /** Delete any tournament team as an admin regardless of ownership */
    deleteAnyTournamentTeam: Scalars['Boolean']
    /** Confirm or unconfirm a tournament team registration after validation */
    confirmTournamentTeam: TournamentTeam
    /** Confirm or decline attendance for a tournament team awaiting presence confirmation */
    confirmTournamentAttendance: TournamentTeam
    /** Update the status of a tournament team as an admin */
    updateTournamentTeamStatus: TournamentTeam
    /** Invite a player to join a tournament team as the team manager */
    inviteTournamentTeamMember: Scalars['Boolean']
    /** Accept or decline an invitation to join a tournament team */
    answerToTournamentTeamInvite: Scalars['Boolean']
    /** Remove a team member or cancel a pending invitation */
    deleteTournamentTeamInvite: Scalars['Boolean']
    /** Create or update a tournament administrator and their permissions */
    tournamentAdminUpsert: TournamentAdmin
    /** Remove a tournament administrator */
    tournamentAdminDelete: Scalars['Boolean']
    /** Create rule set for a tournament step */
    stepRuleSetCreate: StepRuleSetModel
    /** Update scoring rules (versioned) */
    scoringRulesUpdate: StepRuleSetModel
    /** Update advancement rules (versioned) */
    advancementRulesUpdate: StepRuleSetModel
    /** Update structure template (only when CONFIGURED) */
    structureTemplateUpdate: StepRuleSetModel
    /** Add a cross-step rule */
    crossStepRuleCreate: StepRuleSetModel
    /** Remove a cross-step rule */
    crossStepRuleDelete: StepRuleSetModel
    /** Manual team advancement */
    manualAdvancementExecute: StepRuleSetModel
    /** Trigger a MANUAL rule */
    manualRuleTrigger: StepRuleSetModel
    /** Approve a pending action from an autoExecute=false rule */
    pendingActionApprove: StepRuleSetModel
    /** Apply a preset rule configuration to a step */
    rulePresetApply: StepRuleSetModel
    /** Create a Stripe customer portal session URL for managing the organization subscription */
    stripeCreatePortalSession: Scalars['String']
    /** Create a new CDN file record for a platform or template */
    platformFileCreate: PlatformCdnFile
    /** Publish the development version of a CDN file to production */
    platformFilePublish: PlatformCdnFile
    /** Generate a presigned S3 upload URL for uploading file content to a CDN file */
    platformFileGenerateUploadUrl: PresignedUrl
    /** Validate and finalize an uploaded file, checking content type and moving it from temporary to dev storage */
    platformFileValidateFileUpload: PlatformCdnFile
    /** Update the configuration of an existing CDN file */
    platformFileUpdate: PlatformCdnFile
    /** Delete a CDN file and remove its dev, tmp, and production assets from S3 */
    platformFileDelete: Scalars['Void']
    /** Create a new platform with a subdomain and associated OAuth application */
    platformCreate: Platform
    /** Update an existing platform name and configuration */
    platformUpdate: Platform
    /** Delete a platform and its associated OAuth application */
    platformDelete: Scalars['Void']
    /** Update the theme configuration for a platform */
    platformThemeUpdate: Platform
    /** Register a new custom domain for a platform via Cloudflare */
    platformRegisterCustomDomain: CustomDomainData
    /** Force a DNS/SSL validation recheck for a custom domain */
    platformForceCustomDomainRecheck: CustomDomainData
    /** Remove a custom domain from a platform and clean up Cloudflare and OAuth configurations */
    platformRemoveCustomDomain: Scalars['Void']
    /** Create a new platform template for the organization */
    platformTemplateCreate: PlatformTemplate
    /** Update an existing platform template */
    platformTemplateUpdate: PlatformTemplate
    /** Apply a template to a platform, copying all published template files to the target platform */
    platformTemplateApply: Platform
    /** Delete a platform template from the organization */
    platformTemplateDelete: Scalars['Void']
    /** Update the organization subscription by changing item quantities, applying coupons or referrals */
    organizationSubscriptionItemsUpdate: Scalars['Void']
    /** Register a match result and update player skill ratings accordingly */
    organizationSkillRatingsRegisterMatch: OrganizationSkillRatingsRegisterMatchPlayer[]
    /** Create a new skill rating for the current organization */
    organizationSkillRatingCreate: OrganizationSkillRating
    /** Update an existing skill rating configuration */
    organizationSkillRatingUpdate: OrganizationSkillRating
    /** Delete a skill rating from the current organization */
    organizationSkillRatingDelete: Scalars['Void']
    /** Create a new event */
    eventCreate: Event
    /** Update an event */
    eventUpdate: Event
    /** Delete an event */
    eventDelete: Scalars['Boolean']
    /** Create a new ticket configuration for an event */
    eventTicketConfigurationCreate: EventTicketConfiguration
    /** Update an existing ticket configuration for an event */
    eventTicketConfigurationUpdate: EventTicketConfiguration
    /** Delete a ticket configuration from an event */
    eventTicketConfigurationDelete: EventTicketConfiguration
    /** Update the status of an event reservation as an administrator */
    eventReservationUpdateStatus: EventReservation
    /** Confirm or decline attendance for an event reservation as the group manager */
    eventReservationConfirmPresence: EventReservation
    /** Validate a reservation and initiate the Stripe payment session */
    eventReservationValidateAndPay: EventReservationValidateAndPay
    /** Create a new event reservation for events that require admin approval or have no-session registration flow */
    eventReservationCreate: EventReservation
    /** Add, release, or update tickets within an active reservation session */
    eventReservationUpdateTickets: EventReservation
    /** Start a new registration session for an event, reserving tickets and creating a time-limited session */
    eventReservationStartRegistrationSession: EventReservation
    /** Cancel an event reservation, releasing all tickets and deleting the associated group */
    eventReservationCancel: EventReservation
    /** Request a presigned URL to upload a new image for an event venue */
    eventVenueRequestImageUpdate: PresignedUrl
    /** Validate and finalize a previously uploaded venue image */
    eventVenueValidateImage: EventVenue
    /** Create a new event venue for the organization */
    eventVenueCreate: EventVenue
    /** Update an existing event venue */
    eventVenueUpdate: EventVenue
    /** Delete an event venue from the organization */
    eventVenueDelete: EventVenue
    /** Batch create, update, and delete seats for a venue in a single transaction */
    eventVenueSeatsUpdate: EventVenueSeatsUpdateResult
    /** Create a new seat type for a venue */
    eventVenueSeatTypeCreate: EventVenueSeatType
    /** Update an existing seat type */
    eventVenueSeatTypeUpdate: EventVenueSeatType
    /** Delete a seat type from a venue */
    eventVenueSeatTypeDelete: EventVenueSeatType
    /** Create or update the Stripe Connect account for the organization and return the onboarding/update URL */
    organizationPaymentCollectionConfigurationCreateOrUpdateAccount: Scalars['String']
    /** Invite a player to join a user group */
    userGroupInvite: UserGroupMember
    /** Accept or decline a pending user group invitation */
    userGroupUpdateInvite: UserGroupMember
    /** Remove a player from a user group or cancel a pending invitation */
    userGroupDeleteInvite: UserGroupMember
    /** Create a new shop in the current organization */
    shopCreate: Shop
    /** Update an existing shop by ID */
    shopUpdate: Shop
    /** Delete a shop by ID and return the deleted shop */
    shopDelete: Shop
    /** Create a new shop category within a shop */
    shopCategoryCreate: ShopCategory
    /** Update an existing shop category by ID */
    shopCategoryUpdate: ShopCategory
    /** Delete a shop category by ID and return the deleted category */
    shopCategoryDelete: ShopCategory
    /** Purchase shop products, returning payment session info if real payment is required or null for free/currency-only purchases */
    playerShopProductPurshase: (PaymentUrlAndClientSecret | null)
    /** Create a new product within a shop */
    shopProductCreate: ShopProduct
    /** Update an existing shop product by ID */
    shopProductUpdate: ShopProduct
    /** Delete a shop product by ID and return the deleted product */
    shopProductDelete: ShopProduct
    /** Creates a new item within the organization */
    itemCreate: Item
    /** Updates an existing item by ID */
    itemUpdate: Item
    /** Deletes an item by ID and adjusts organization limits */
    itemDelete: Item
    /** Bulk updates item quantities for a player, creating or removing items as needed */
    playerItemsUpdate: PlayerItem[]
    /** Creates a new item category within the organization */
    itemCategoryCreate: ItemCategory
    /** Updates an existing item category by ID */
    itemCategoryUpdate: ItemCategory
    /** Deletes an item category by ID and adjusts organization limits */
    itemCategoryDelete: ItemCategory
    /** Creates a new currency for the organization */
    currencyCreate: Currency
    /** Updates an existing currency by ID */
    currencyUpdate: Currency
    /** Deletes a currency by ID and adjusts the organization limit */
    currencyDelete: Currency
    /** Updates one or more currency balances for a player in a single transaction */
    playerCurrencyUpdate: PlayerCurrency
    /** Publish an app to the marketplace */
    publishMarketplaceApp: MarketplaceApp
    /** Update a marketplace app listing */
    updateMarketplaceApp: MarketplaceApp
    /** Install a marketplace app */
    installMarketplaceApp: MarketplaceAppInstallation
    /** Uninstall a marketplace app */
    uninstallMarketplaceApp: Scalars['Boolean']
    /** Submit or update a review for a marketplace app */
    submitMarketplaceAppReview: MarketplaceAppReview
    /** Set or update pricing for a marketplace app */
    setMarketplaceAppPricing: MarketplaceAppPricing
    /** Create a Stripe Checkout session for a paid marketplace app */
    createMarketplaceCheckout: Scalars['String']
    /** Create a new release for a marketplace app and get presigned upload URLs */
    appCreateRelease: AppReleaseWithUploadUrls
    /** Finalize a release: validate bundles and enqueue review job */
    appFinalizeRelease: AppBundleValidationError
    /** Manually publish a release (admin fallback) */
    appPublishRelease: MarketplaceAppRelease
    /** Set (upsert) a module configuration on a platform */
    platformModuleConfigSet: PlatformModuleConfig
    /** Delete a module configuration from a platform */
    platformModuleConfigDelete: Scalars['Boolean']
    /** Create or update a metafield on an entity */
    entityMetafieldSet: EntityMetafield
    /** Delete a metafield from an entity */
    entityMetafieldDelete: Scalars['Boolean']
    /** Set (create or update) metadata entries on an object */
    setObjectMetadata: ObjectMetadata[]
    /** Remove metadata entries from an object by key */
    removeObjectMetadata: Scalars['Boolean']
    /** Create a new custom field definition */
    createCustomFieldDefinition: CustomFieldDefinitionModel
    /** Update an existing custom field definition */
    updateCustomFieldDefinition: CustomFieldDefinitionModel
    /** Delete a custom field definition and all its values */
    deleteCustomFieldDefinition: Scalars['Boolean']
    /** Reorder custom field definitions for an object type */
    reorderCustomFieldDefinitions: CustomFieldDefinitionModel[]
    /** Set custom field values on an object */
    setCustomFieldValues: CustomFieldWithValueModel[]
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


/** A mapping from a source path to a target key */
export interface KeyMappingGenqlSelection{
    /** The dot-notation path to the source value in the object */
    path?: boolean | number
    /** The target key name to map the value to */
    mappedTo?: boolean | number
    /** Whether this mapped value should be treated as private */
    private?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Configuration defining how object properties are mapped */
export interface MappingConfigurationGenqlSelection{
    /** The list of key mappings to apply */
    mappings?: KeyMappingGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An HTTP header key-value pair used in identity provider data retrieval requests */
export interface HeaderGenqlSelection{
    /** Name of the HTTP header */
    name?: boolean | number
    /** Value of the HTTP header */
    value?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Configuration for retrieving user data from an external identity provider endpoint */
export interface DataRetrievalConfigGenqlSelection{
    /** URL of the external endpoint to fetch user data from */
    url?: boolean | number
    /** HTTP headers to include in the data retrieval request */
    headers?: HeaderGenqlSelection
    /** Configuration for mapping retrieved data fields to player profile properties */
    mappingConfiguration?: MappingConfigurationGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Relay-style pagination metadata for cursor-based navigation */
export interface ResponsePageInfoGenqlSelection{
    /** Whether there are more items after the last returned edge */
    hasNextPage?: boolean | number
    /** Whether there are more items before the first returned edge */
    hasPreviousPage?: boolean | number
    /** Cursor pointing to the first edge in the current page */
    startCursor?: boolean | number
    /** Cursor pointing to the last edge in the current page */
    endCursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A permission group within an organization that defines access control for members and apps */
export interface OrganizationGroupGenqlSelection{
    /** Unique identifier of the organization group */
    id?: boolean | number
    /** Display name of the group */
    name?: boolean | number
    /** List of permissions assigned to this group */
    permissions?: GroupPermissionGenqlSelection
    /** The ID of the organization this group belongs to */
    organizationId?: boolean | number
    /** The type of group (e.g. MEMBER, ADMIN, ANONYMOUS) */
    type?: boolean | number
    /** When this group was created */
    createdAt?: boolean | number
    /** When this group was last updated */
    updatedAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A permission definition with its associated resources and available template variables */
export interface PermissionGenqlSelection{
    /** Unique identifier of the permission */
    id?: boolean | number
    /** Human-readable description of what this permission grants */
    description?: boolean | number
    /** Resource patterns this permission can be scoped to */
    resources?: boolean | number
    /** Template variables available for resource scoping */
    availableVariables?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A permission entry mapping a permission ID to its allowed resource scopes */
export interface GroupPermissionGenqlSelection{
    /** The permission identifier */
    id?: boolean | number
    /** Resource identifiers this permission is scoped to */
    resources?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Container for all available permission definitions */
export interface PermissionsGenqlSelection{
    /** All available organization-level permissions */
    organizationPermissions?: PermissionGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Paginated list of organization permission groups */
export interface OrganizationGroupsGenqlSelection{
    /** List of edges containing cursor and node pairs */
    edges?: OrganizationGroupEdgeGenqlSelection
    /** Flat list of items in the current page */
    nodes?: OrganizationGroupGenqlSelection
    /** Pagination metadata for navigating between pages */
    pageInfo?: ResponsePageInfoGenqlSelection
    /** Total number of items across all pages */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An edge in a paginated connection containing a cursor and node */
export interface OrganizationGroupEdgeGenqlSelection{
    /** Opaque cursor string for this edge, used for pagination */
    cursor?: boolean | number
    /** The item at this edge */
    node?: OrganizationGroupGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Definition of a custom field property with its validation rules and visibility settings */
export interface PropertyGenqlSelection{
    /** Unique key identifier for this property */
    property?: boolean | number
    /** Human-readable display name of the property */
    name?: boolean | number
    /** Data type of the property value (e.g. STRING, DATE, EMAIL) */
    type?: boolean | number
    /** Whether this property must be filled in */
    required?: boolean | number
    /** Display order position of this property */
    order?: boolean | number
    /** Whether the value must be unique across all entities */
    unique?: boolean | number
    /**
     * @deprecated use visibility instead
     * Whether the property is publicly visible (deprecated, use visibility instead)
     */
    public?: boolean | number
    /** Visibility level controlling who can view this property value */
    visibility?: boolean | number
    /** Editability rule controlling when and by whom this property can be modified */
    editability?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A property definition combined with its current value for a specific entity */
export interface PropertyConfigWithValueGenqlSelection{
    /** Unique key identifier for this property */
    property?: boolean | number
    /** Human-readable display name of the property */
    name?: boolean | number
    /** Data type of the property value (e.g. STRING, DATE, EMAIL) */
    type?: boolean | number
    /** Whether this property must be filled in */
    required?: boolean | number
    /** Display order position of this property */
    order?: boolean | number
    /** Whether the value must be unique across all entities */
    unique?: boolean | number
    /**
     * @deprecated use visibility instead
     * Whether the property is publicly visible (deprecated, use visibility instead)
     */
    public?: boolean | number
    /** Visibility level controlling who can view this property value */
    visibility?: boolean | number
    /** Editability rule controlling when and by whom this property can be modified */
    editability?: boolean | number
    /** Current value of this property for the entity */
    value?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A key-value pair representing a custom field property and its value */
export interface PropertyValueGenqlSelection{
    /** Key identifier of the property */
    property?: boolean | number
    /** Value assigned to the property */
    value?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A variable used in match score calculations */
export interface MatchVariableGenqlSelection{
    /** Name used in score formulas to reference this variable */
    formulaName?: boolean | number
    /** Human-readable display name for the variable */
    displayName?: boolean | number
    /** Optional icon identifier for display purposes */
    displayIcon?: boolean | number
    /** Default numeric value when no input is provided */
    defaultValue?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Configuration for how matches are scored */
export interface MatchConfigurationGenqlSelection{
    /** List of variables available for score calculation */
    variables?: MatchVariableGenqlSelection
    /** Formula expression used to compute the match score */
    scoreFormula?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Configuration for how a game is played and scored */
export interface GameConfigurationGenqlSelection{
    /** Number of match wins required to win the game (best-of format) */
    wonMatchCountToWinGame?: boolean | number
    /** Whether individual match scores are aggregated as the game score */
    useMatchScoresAsGameScore?: boolean | number
    /** Number of teams participating in each game */
    teamsCount?: boolean | number
    /** Scoring configuration for matches within this game */
    matchConfiguration?: MatchConfigurationGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A named variable with a default value for score formulas */
export interface VariableGenqlSelection{
    /** Name of the variable used in formulas */
    name?: boolean | number
    /** Default numeric value for the variable */
    defaultValue?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Configuration for a tournament round including game settings */
export interface RoundConfigurationGenqlSelection{
    /** Game configuration for this round */
    game?: GameConfigurationGenqlSelection
    /** Ordering position of this round within its group */
    order?: boolean | number
    /** Display name of the round */
    name?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Configuration for a tournament group containing multiple rounds */
export interface GroupConfigurationGenqlSelection{
    /** List of round configurations in this group */
    rounds?: RoundConfigurationGenqlSelection
    /** Display name of the group */
    name?: boolean | number
    /** Optional description of the group */
    description?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Configuration for a tournament step containing groups of rounds */
export interface StepConfigurationGenqlSelection{
    /** Discriminator type, always STEP for step configurations */
    type?: boolean | number
    /** List of group configurations within this step */
    groups?: GroupConfigurationGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A numeric comparison condition with an operator and value */
export interface NumericConditionGenqlSelection{
    /** Comparison operator (LT, BT, LTE, BTE, EQ, NEQ) */
    conditionType?: boolean | number
    /** Numeric value to compare against */
    value?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A numeric condition applied to team members with optional aggregation */
export interface TeamNumericConditionGenqlSelection{
    /** Aggregation method (SUM, AVG, MIN, MAX) applied across team members */
    aggregationType?: boolean | number
    /** Source of the property data (PLAYER or IDENTITY_PROVIDER) */
    propertySource?: boolean | number
    /** Identifier of the property data source (e.g., identity provider ID) */
    propertySourceId?: boolean | number
    /** Comparison operator for the numeric condition */
    conditionType?: boolean | number
    /** Numeric value to compare against */
    value?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A string comparison condition with an operator and value */
export interface StringConditionGenqlSelection{
    /** Comparison operator (EQ or NEQ) */
    conditionType?: boolean | number
    /** String value to compare against */
    value?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A condition rule that checks a property using numeric, string, or existence checks */
export interface ConditionGenqlSelection{
    /** Name of the property to evaluate */
    property?: boolean | number
    /** Numeric comparison to apply to the property value */
    numericCondition?: NumericConditionGenqlSelection
    /** String comparison to apply to the property value */
    stringCondition?: StringConditionGenqlSelection
    /** Whether the property must exist or not exist */
    propertyCondition?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Reference to a player property field from a specific data source */
export interface PlayerFieldGenqlSelection{
    /** Source of the player data (PLAYER or IDENTITY_PROVIDER) */
    propertySource?: boolean | number
    /** Identifier of the data source (e.g., identity provider ID) */
    propertySourceId?: boolean | number
    /** Name of the property to reference */
    property?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A registration condition that validates player properties against rules */
export interface PlayerConditionGenqlSelection{
    /** Source of the player data (PLAYER or IDENTITY_PROVIDER) */
    propertySource?: boolean | number
    /** Identifier of the data source (e.g., identity provider ID) */
    propertySourceId?: boolean | number
    /** The condition rule to evaluate against the player property */
    condition?: ConditionGenqlSelection
    /** Custom error message shown when the condition fails */
    errorMessage?: boolean | number
    /** Human-readable description of the rule for display purposes */
    ruleDescription?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A registration condition that validates team-level properties */
export interface TeamConditionGenqlSelection{
    /** Name of the team property to evaluate */
    property?: boolean | number
    /** String comparison to apply to the team property */
    stringCondition?: StringConditionGenqlSelection
    /** Numeric comparison with optional aggregation for team members */
    numericCondition?: TeamNumericConditionGenqlSelection
    /** Whether the property must exist or not exist */
    propertyCondition?: boolean | number
    /** Custom error message shown when the condition fails */
    errorMessage?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Set of conditions that teams and players must meet to register */
export interface RegistrationConditionsGenqlSelection{
    /** Conditions applied at the team level during registration */
    teamConditions?: TeamConditionGenqlSelection
    /** Conditions applied to each team member during registration */
    memberConditions?: PlayerConditionGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Configuration for tournament registration rules, team sizes, and custom fields */
export interface TournamentConfigurationGenqlSelection{
    /** Discriminator type, always TOURNAMENT for tournament configurations */
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


/** A template variable available for use in an email template */
export interface EmailTemplateConfigurationAvailableVariablesGenqlSelection{
    /** Variable name used in template placeholders (e.g., {{name}}) */
    name?: boolean | number
    /** Human-readable description of what this variable contains */
    description?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Describes an email template trigger event and its available variables */
export interface EmailTemplateConfigurationGenqlSelection{
    /** The trigger event this configuration applies to */
    triggerEvent?: boolean | number
    /** Display name of the email template configuration */
    name?: boolean | number
    /** Description of when this email is triggered */
    description?: boolean | number
    /** List of variables available for use in templates for this event */
    availableVariables?: EmailTemplateConfigurationAvailableVariablesGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** SMTP email configuration for an organization */
export interface EmailConfigurationGenqlSelection{
    /** SMTP server hostname */
    host?: boolean | number
    /** SMTP server port number */
    port?: boolean | number
    /** SMTP authentication username */
    username?: boolean | number
    /** SMTP authentication password */
    password?: boolean | number
    /** Sender email address */
    from?: boolean | number
    /** Sender display name shown in the From header */
    fromName?: boolean | number
    /** Reply-to email address */
    replyTo?: boolean | number
    /** Reply-to display name */
    replyToName?: boolean | number
    /** Whether to use TLS/SSL for the SMTP connection */
    secure?: boolean | number
    /** Player property field that contains recipient email addresses */
    emailField?: PlayerFieldGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Details of an outgoing webhook HTTP request */
export interface WebhookLogRequestGenqlSelection{
    /** URL the webhook was sent to */
    url?: boolean | number
    /** Serialized request body */
    body?: boolean | number
    /** Request headers sent with the webhook */
    headers?: StringKeyValuePairGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A generic string key-value pair */
export interface StringKeyValuePairGenqlSelection{
    /** Key name */
    key?: boolean | number
    /** Value */
    value?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Details of a webhook HTTP response */
export interface WebhookLogResponseGenqlSelection{
    /** HTTP status code returned by the endpoint */
    statusCode?: boolean | number
    /** Response body returned by the endpoint */
    body?: boolean | number
    /** Response headers returned by the endpoint */
    headers?: StringKeyValuePairGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Structured value representing a webhook call log entry */
export interface WebhookCallLogValueGenqlSelection{
    /** The outgoing webhook request details */
    request?: WebhookLogRequestGenqlSelection
    /** The webhook response details (absent if request failed to connect) */
    response?: WebhookLogResponseGenqlSelection
    /** Error message if the webhook call failed */
    error?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Data payload for an audit log entry capturing a change event */
export interface LogDataGenqlSelection{
    /** Previous state of the resource before the change */
    oldValue?: WebhookCallLogValueGenqlSelection
    /** New state of the resource after the change */
    newValue?: WebhookCallLogValueGenqlSelection
    /** ID of the account or system that performed the action */
    author?: boolean | number
    /** Type of actor that performed the action (SYSTEM, USER, or APP) */
    authorType?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Schema definition for a single field within a webhook event payload */
export interface WebhookEventConfigurationPropertiesGenqlSelection{
    /** Name of the field in the webhook payload */
    name?: boolean | number
    /** Human-readable description of what this field represents */
    description?: boolean | number
    /** Whether this field contains an array of values */
    array?: boolean | number
    /** Whether this field is optional in the payload */
    optional?: boolean | number
    /** Example value for documentation purposes */
    example?: boolean | number
    /** Data type of the field (e.g. string, number, Date, object) */
    type?: boolean | number
    /** Nested field definitions for object-type fields */
    properties?: WebhookEventConfigurationPropertiesGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Configuration describing a webhook event type, its payload schema, and optional RPC answer schema */
export interface WebhookEventConfigurationGenqlSelection{
    /** The webhook event type identifier */
    type?: boolean | number
    /** Human-readable description of when this event is triggered */
    description?: boolean | number
    /** Schema definition for the event payload sent to webhook endpoints */
    payload?: WebhookEventConfigurationPropertiesGenqlSelection
    /** If this property is available, it means that the event is a "RPC" event and that an answer is expected from the webhook called */
    answerPayload?: WebhookEventConfigurationPropertiesGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A member of an organization with their group assignment and permissions */
export interface OrganizationMemberGenqlSelection{
    /** Unique identifier for this membership */
    id?: boolean | number
    /** The ID of the organization this membership belongs to */
    organizationId?: boolean | number
    /** The permission group assigned to this member */
    groupId?: boolean | number
    /** The account ID of the member */
    memberId?: boolean | number
    /** Additional permissions granted to this specific member */
    permissions?: GroupPermissionGenqlSelection
    /** When this membership was created */
    createdAt?: boolean | number
    /** When this membership was last updated */
    updatedAt?: boolean | number
    /** The account details of this organization member */
    account?: AccountGenqlSelection
    /** The permission group assigned to this member */
    group?: OrganizationGroupGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Paginated list of organization members */
export interface OrganizationMembersGenqlSelection{
    /** List of edges containing cursor and node pairs */
    edges?: OrganizationMemberEdgeGenqlSelection
    /** Flat list of items in the current page */
    nodes?: OrganizationMemberGenqlSelection
    /** Pagination metadata for navigating between pages */
    pageInfo?: ResponsePageInfoGenqlSelection
    /** Total number of items across all pages */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An edge in a paginated connection containing a cursor and node */
export interface OrganizationMemberEdgeGenqlSelection{
    /** Opaque cursor string for this edge, used for pagination */
    cursor?: boolean | number
    /** The item at this edge */
    node?: OrganizationMemberGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A tournament within an organization */
export interface TournamentGenqlSelection{
    /** Unique identifier of the tournament */
    id?: boolean | number
    /** Title of the tournament */
    title?: boolean | number
    /** Description of the tournament */
    description?: boolean | number
    /** Date and time when the tournament starts */
    startAt?: boolean | number
    /** Date and time when the tournament ends */
    endAt?: boolean | number
    /** Date and time when registrations open */
    startRegistrationsAt?: boolean | number
    /** Date and time when registrations close */
    endRegistrationsAt?: boolean | number
    /** ID of the organization that owns this tournament */
    organizationId?: boolean | number
    /** Tournament configuration including team size, registration conditions, and custom fields */
    configuration?: TournamentConfigurationGenqlSelection
    /** Date and time when the tournament was created */
    createdAt?: boolean | number
    /** Date and time when the tournament was last updated */
    updatedAt?: boolean | number
    /** ID of the account that created this tournament */
    createdById?: boolean | number
    /** ID of the tournament series this tournament belongs to */
    tournamentSeriesId?: boolean | number
    /** Date and time from which the tournament is visible in public listings */
    visibleAt?: boolean | number
    /** Teams registered to this tournament */
    teams?: (TournamentTeamsGenqlSelection & { __args: {page: PageInfo, status?: (TournamentTeamStatus | null)} })
    /** Steps registered for this tournament */
    steps?: TournamentStepGenqlSelection
    /** Account that created this tournament */
    createdBy?: AccountGenqlSelection
    /** Current authenticated team registered to this event */
    myTeam?: TournamentTeamGenqlSelection
    /** Aggregated team scores across all steps of this tournament */
    teamScores?: TournamentTeamScoreGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Cursor-based pagination input arguments */
export interface PageInfo {
/** Number of items to return from the beginning of the list */
first?: (Scalars['Float'] | null),
/** Cursor to start fetching items after (forward pagination) */
after?: (Scalars['String'] | null)}


/** Definition of a single platform usage limit */
export interface LimitGenqlSelection{
    /** Unique identifier of the limit definition */
    id?: boolean | number
    /** Default quota value for this limit */
    default?: boolean | number
    /** Human-readable description of what this limit controls */
    description?: boolean | number
    /** Display name of the limit */
    name?: boolean | number
    /** Type of limit (e.g. quota, rate) */
    type?: boolean | number
    /** Time window for rate-based limits */
    bucketDuration?: boolean | number
    /** Scope at which this limit is enforced */
    scope?: boolean | number
    /** Maximum configurable value for this limit */
    max?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Collection of platform limit definitions */
export interface LimitsGenqlSelection{
    /** List of limit definitions */
    limits?: LimitGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Current usage and quota for a single organization limit */
export interface OrganizationLimitGenqlSelection{
    /** Limit definition identifier */
    id?: boolean | number
    /** Maximum allowed value for this limit */
    max?: boolean | number
    /** Current usage count against this limit */
    current?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Current usage and quotas for an organization across all limits */
export interface OrganizationLimitsGenqlSelection{
    /** List of organization limit usages */
    limits?: OrganizationLimitGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Configuration settings for an organization */
export interface OrganizationConfigurationGenqlSelection{
    /** Custom field definitions configured for this organization */
    customFields?: PropertyGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Public-facing identity provider linked to an organization */
export interface PublicOrganizationIdentityProviderGenqlSelection{
    /** Unique identifier of the identity provider link */
    id?: boolean | number
    /** Display name of the identity provider */
    name?: boolean | number
    /** Description of the identity provider */
    description?: boolean | number
    /** URL of the identity provider icon */
    icon?: boolean | number
    /** Whether this provider can be used for login */
    allowLogin?: boolean | number
    /** OAuth2 authorization URL for initiating login */
    authorizationUrl?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An organization (tenant) on the platform */
export interface OrganizationGenqlSelection{
    /** Unique identifier of the organization */
    id?: boolean | number
    /** ID of the account that owns this organization */
    ownerId?: boolean | number
    /** Display name of the organization */
    name?: boolean | number
    /** Description of the organization */
    description?: boolean | number
    /** Configuration settings including custom fields */
    configuration?: OrganizationConfigurationGenqlSelection
    /** Tournaments belonging to this organization */
    tournaments?: TournamentGenqlSelection
    /** Members belonging to this organization */
    members?: OrganizationMemberGenqlSelection
    /** Permission groups within this organization */
    groups?: OrganizationGroupGenqlSelection
    /** Whether this organization has Stripe billing configured */
    stripeConfigured?: boolean | number
    /** Identity providers linked to this organization, optionally filtered to login-enabled only */
    identityProviders?: (PublicOrganizationIdentityProviderGenqlSelection & { __args: {login: Scalars['Boolean']} })
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A key-value property of an account identity */
export interface AccountIdentityPropertyGenqlSelection{
    /** The property key name */
    property?: boolean | number
    /** The property value */
    value?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A linked identity from an external identity provider for an account */
export interface AccountIdentityGenqlSelection{
    /** The external provider-assigned identifier for this identity */
    providerId?: boolean | number
    /** The ID of the account this identity belongs to */
    accountId?: boolean | number
    /** The ID of the organization identity provider configuration */
    organizationIdentityProviderId?: boolean | number
    /** The properties associated with this identity */
    properties?: AccountIdentityPropertyGenqlSelection
    /** When this identity was first linked */
    createdAt?: boolean | number
    /** When this identity was last updated */
    updatedAt?: boolean | number
    /** Resolves the public identity provider configuration for this identity */
    organizationIdentityProvider?: PublicOrganizationIdentityProviderGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Represents a player profile within an organization */
export interface PlayerGenqlSelection{
    /** The unique identifier of the player */
    id?: boolean | number
    /** The display username of the player */
    username?: boolean | number
    /** A text description or bio for the player */
    description?: boolean | number
    /** The ID of the account that owns this player profile */
    ownerId?: boolean | number
    /** A custom external identifier assigned by the organization */
    organizationCustomId?: boolean | number
    /** The date and time the player profile was last updated */
    updatedAt?: boolean | number
    /** The date and time the player profile was created */
    createdAt?: boolean | number
    /** The identity provider identities linked to the player account */
    identities?: AccountIdentityGenqlSelection
    /** The account that owns this player profile */
    owner?: AccountGenqlSelection
    /** The custom fields configured for this player profile */
    customFields?: (PropertyConfigWithValueGenqlSelection & { __args?: {properties?: (Scalars['String'][] | null)} })
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Paginated list of player profiles */
export interface PlayersGenqlSelection{
    /** List of edges containing cursor and node pairs */
    edges?: PlayerEdgeGenqlSelection
    /** Flat list of items in the current page */
    nodes?: PlayerGenqlSelection
    /** Pagination metadata for navigating between pages */
    pageInfo?: ResponsePageInfoGenqlSelection
    /** Total number of items across all pages */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An edge in a paginated connection containing a cursor and node */
export interface PlayerEdgeGenqlSelection{
    /** Opaque cursor string for this edge, used for pagination */
    cursor?: boolean | number
    /** The item at this edge */
    node?: PlayerGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Represents a user account in the platform */
export interface AccountGenqlSelection{
    /** The ID of the account */
    id?: boolean | number
    /** The email address associated with the account */
    email?: boolean | number
    /** Resolves the permission set for the account within the organization */
    permissions?: GroupPermissionGenqlSelection
    /** Resolves the player profiles associated with the account */
    profiles?: PlayerGenqlSelection
    /** Resolves the linked identity provider identities for the account */
    identities?: (AccountIdentityGenqlSelection & { __args?: {properties?: (Scalars['String'][] | null), providerIds?: (Scalars['ID'][] | null)} })
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Contains a URL for linking an identity provider to an account */
export interface IdentityLinkUrlGenqlSelection{
    /** The redirect URL for identity provider linking */
    url?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A reusable configuration preset for tournaments or steps */
export interface ConfigurationGenqlSelection{
    /** Unique identifier of the configuration */
    id?: boolean | number
    /** Display name of the configuration */
    name?: boolean | number
    /** Description of the configuration purpose */
    description?: boolean | number
    /** Timestamp when the configuration was created */
    createdAt?: boolean | number
    /** Timestamp when the configuration was last updated */
    updatedAt?: boolean | number
    /** The configuration properties, either step or tournament type */
    configuration?: ConfigurationPropertiesGenqlSelection
    /** ID of the account that created this configuration */
    createdById?: boolean | number
    /** ID of the organization that owns this configuration */
    organizationId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ConfigurationPropertiesGenqlSelection{
    on_StepConfiguration?:StepConfigurationGenqlSelection,
    on_TournamentConfiguration?:TournamentConfigurationGenqlSelection,
    __typename?: boolean | number
}


/** Represents a player score entry within a leaderboard season bucket */
export interface LeaderboardSeasonBucketScoreGenqlSelection{
    /** Unique identifier for this score entry */
    id?: boolean | number
    /** Current rank position of the player in this bucket */
    rank?: boolean | number
    /** The player score from the previous ranking period */
    lastScore?: boolean | number
    /** The player rank from the previous ranking period */
    lastRank?: boolean | number
    /** Timestamp when this score entry was created */
    createdAt?: boolean | number
    /** Timestamp when this score entry was last updated */
    updatedAt?: boolean | number
    /** Current score value of the player */
    score?: boolean | number
    /** ID of the bucket this score belongs to */
    leaderboardSeasonBucketId?: boolean | number
    /** ID of the player profile this score belongs to */
    playerProfileId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Paginated list of leaderboard season bucket scores */
export interface LeaderboardSeasonBucketScoresGenqlSelection{
    /** List of edges containing cursor and node pairs */
    edges?: LeaderboardSeasonBucketScoreEdgeGenqlSelection
    /** Flat list of items in the current page */
    nodes?: LeaderboardSeasonBucketScoreGenqlSelection
    /** Pagination metadata for navigating between pages */
    pageInfo?: ResponsePageInfoGenqlSelection
    /** Total number of items across all pages */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An edge in a paginated connection containing a cursor and node */
export interface LeaderboardSeasonBucketScoreEdgeGenqlSelection{
    /** Opaque cursor string for this edge, used for pagination */
    cursor?: boolean | number
    /** The item at this edge */
    node?: LeaderboardSeasonBucketScoreGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Represents a leaderboard for tracking and ranking player scores */
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
    /** Timestamp when the leaderboard was created */
    createdAt?: boolean | number
    /** Timestamp when the leaderboard was last updated */
    updatedAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Paginated list of leaderboards */
export interface LeaderboardsGenqlSelection{
    /** List of edges containing cursor and node pairs */
    edges?: LeaderboardEdgeGenqlSelection
    /** Flat list of items in the current page */
    nodes?: LeaderboardGenqlSelection
    /** Pagination metadata for navigating between pages */
    pageInfo?: ResponsePageInfoGenqlSelection
    /** Total number of items across all pages */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An edge in a paginated connection containing a cursor and node */
export interface LeaderboardEdgeGenqlSelection{
    /** Opaque cursor string for this edge, used for pagination */
    cursor?: boolean | number
    /** The item at this edge */
    node?: LeaderboardGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Represents a time-bound season within a leaderboard */
export interface LeaderboardSeasonGenqlSelection{
    /** Unique identifier of the season */
    id?: boolean | number
    /** ID of the leaderboard this season belongs to */
    leaderboardId?: boolean | number
    /** Display name of the season */
    name?: boolean | number
    /** Start date and time of the season */
    start?: boolean | number
    /** End date and time of the season */
    end?: boolean | number
    /** Initial score assigned to players when they join this season */
    startingScore?: boolean | number
    /** Timestamp when the season was created */
    createdAt?: boolean | number
    /** Timestamp when the season was last updated */
    updatedAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Paginated list of leaderboard seasons */
export interface LeaderboardSeasonsGenqlSelection{
    /** List of edges containing cursor and node pairs */
    edges?: LeaderboardSeasonEdgeGenqlSelection
    /** Flat list of items in the current page */
    nodes?: LeaderboardSeasonGenqlSelection
    /** Pagination metadata for navigating between pages */
    pageInfo?: ResponsePageInfoGenqlSelection
    /** Total number of items across all pages */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An edge in a paginated connection containing a cursor and node */
export interface LeaderboardSeasonEdgeGenqlSelection{
    /** Opaque cursor string for this edge, used for pagination */
    cursor?: boolean | number
    /** The item at this edge */
    node?: LeaderboardSeasonGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Represents a score bucket (tier/division) within a leaderboard season */
export interface LeaderboardSeasonBucketGenqlSelection{
    /** Unique identifier of the bucket */
    id?: boolean | number
    /** ID of the season this bucket belongs to */
    seasonId?: boolean | number
    /** Display name of the bucket (e.g., Gold, Silver, Bronze) */
    name?: boolean | number
    /** Minimum score required to be placed in this bucket */
    minScore?: boolean | number
    /** Method used to calculate scores within this bucket */
    scoreCalculationType?: boolean | number
    /** Timestamp when the bucket was created */
    createdAt?: boolean | number
    /** Timestamp when the bucket was last updated */
    updatedAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Paginated list of leaderboard season buckets */
export interface LeaderboardSeasonBucketsGenqlSelection{
    /** List of edges containing cursor and node pairs */
    edges?: LeaderboardSeasonBucketEdgeGenqlSelection
    /** Flat list of items in the current page */
    nodes?: LeaderboardSeasonBucketGenqlSelection
    /** Pagination metadata for navigating between pages */
    pageInfo?: ResponsePageInfoGenqlSelection
    /** Total number of items across all pages */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An edge in a paginated connection containing a cursor and node */
export interface LeaderboardSeasonBucketEdgeGenqlSelection{
    /** Opaque cursor string for this edge, used for pagination */
    cursor?: boolean | number
    /** The item at this edge */
    node?: LeaderboardSeasonBucketGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** DNS TXT record required for SSL certificate validation of a custom domain */
export interface CustomDomainSslValidationRecordGenqlSelection{
    /** Name of the TXT DNS record to create for validation */
    txt_name?: boolean | number
    /** Value of the TXT DNS record to create for validation */
    txt_value?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An error encountered during SSL certificate validation for a custom domain */
export interface CustomDomainSslValidationErrorGenqlSelection{
    /** Human-readable error message describing the validation failure */
    message?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** SSL certificate status and validation details for a custom domain */
export interface CustomDomainSslGenqlSelection{
    /** Current status of the SSL certificate validation process */
    status?: boolean | number
    /** List of validation errors encountered during SSL provisioning */
    validation_errors?: CustomDomainSslValidationErrorGenqlSelection
    /** DNS records required for SSL certificate validation */
    validation_records?: CustomDomainSslValidationRecordGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** DNS record required to verify ownership of a custom domain */
export interface CustomDomainOwnershipVerificationGenqlSelection{
    /** Name of the DNS record to create for ownership verification */
    name?: boolean | number
    /** Value of the DNS record to create for ownership verification */
    value?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Custom domain registration data from Cloudflare, including SSL and ownership verification status */
export interface CustomDomainDataGenqlSelection{
    /** The hostname of the custom domain */
    hostname?: boolean | number
    /** Ownership verification DNS record details */
    ownership_verification?: CustomDomainOwnershipVerificationGenqlSelection
    /** SSL certificate status and validation information */
    ssl?: CustomDomainSslGenqlSelection
    /** Current provisioning status of the custom domain */
    status?: boolean | number
    /** List of verification error messages, if any */
    verification_errors?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An email template associated with a trigger event */
export interface EmailTemplateGenqlSelection{
    /** Unique identifier of the email template */
    id?: boolean | number
    /** Event that triggers this email template */
    triggerEvent?: boolean | number
    /** Whether this is the default template for the trigger event */
    default?: boolean | number
    /** Display name of the email template */
    name?: boolean | number
    /** Subject line of the email, supports template variables */
    title?: boolean | number
    /** HTML body content of the email, supports template variables */
    contents?: boolean | number
    /** Timestamp when the template was created */
    createdAt?: boolean | number
    /** Timestamp when the template was last updated */
    updatedAt?: boolean | number
    /** ID of the organization that owns this template */
    organizationId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Paginated list of email templates */
export interface EmailTemplatesGenqlSelection{
    /** List of edges containing cursor and node pairs */
    edges?: EmailTemplateEdgeGenqlSelection
    /** Flat list of items in the current page */
    nodes?: EmailTemplateGenqlSelection
    /** Pagination metadata for navigating between pages */
    pageInfo?: ResponsePageInfoGenqlSelection
    /** Total number of items across all pages */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An edge in a paginated connection containing a cursor and node */
export interface EmailTemplateEdgeGenqlSelection{
    /** Opaque cursor string for this edge, used for pagination */
    cursor?: boolean | number
    /** The item at this edge */
    node?: EmailTemplateGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** The required fields for creating or updating an identity on a provider */
export interface IdentityProviderRequirementsGenqlSelection{
    /** The list of field names that must be provided */
    requiredFields?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A publicly visible identity provider without sensitive configuration details */
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
    /** The date and time the identity provider was created */
    createdAt?: boolean | number
    /** The date and time the identity provider was last updated */
    updatedAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A selectable option for a frontend module prop of type "select" */
export interface FrontendModulePropOptionModelGenqlSelection{
    /** Display label for this option */
    label?: boolean | number
    /** Value for this option */
    value?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Schema definition for a single prop of a frontend module */
export interface FrontendModulePropSchemaModelGenqlSelection{
    /** Property key/name */
    key?: boolean | number
    /** Data type of this prop */
    type?: boolean | number
    /** Display label for this prop */
    label?: boolean | number
    /** Description of what this prop controls */
    description?: boolean | number
    /** Whether this prop is required */
    required?: boolean | number
    /** Default value for this prop (serialized as string) */
    defaultValue?: boolean | number
    /** Available options for select-type props */
    options?: FrontendModulePropOptionModelGenqlSelection
    /** Route parameter name for route-param type props */
    param?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An event that a frontend module can emit */
export interface FrontendModuleEventModelGenqlSelection{
    /** Unique event name identifier */
    name?: boolean | number
    /** Description of when this event is emitted */
    description?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A frontend micro-frontend module registered by a marketplace app */
export interface FrontendModuleModelGenqlSelection{
    /** Unique name identifier for this module */
    name?: boolean | number
    /** Human-readable display name for this module */
    displayName?: boolean | number
    /** Description of what this module provides */
    description?: boolean | number
    /** Named export from the bundle to use as the module entry point */
    exportName?: boolean | number
    /** Semantic version of this module */
    version?: boolean | number
    /** Schema defining the props this module accepts */
    propsSchema?: FrontendModulePropSchemaModelGenqlSelection
    /** Events this module can emit */
    events?: FrontendModuleEventModelGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Size constraints for an extension point iframe */
export interface ExtensionPointSizeModelGenqlSelection{
    /** Maximum width in pixels for the extension point */
    maxWidth?: boolean | number
    /** Maximum height in pixels for the extension point */
    maxHeight?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A UI extension point where an app renders content within the platform */
export interface ExtensionPointModelGenqlSelection{
    /** Location type where this extension point is rendered */
    type?: boolean | number
    /** Display label for the extension point tab or widget */
    label?: boolean | number
    /** URL patterns where this extension is active (e.g. "/tournaments/:tournamentId/overview") */
    activePages?: boolean | number
    /** Optional size constraints for the extension point iframe */
    size?: ExtensionPointSizeModelGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** The manifest describing a marketplace app capabilities and configuration */
export interface AppManifestModelGenqlSelection{
    /** Manifest schema version */
    version?: boolean | number
    /** Permissions requested by this app (OrganizationPermission IDs) */
    permissions?: boolean | number
    /** UI extensions registered by this app */
    extensions?: ExtensionPointModelGenqlSelection
    /** URL to receive webhook events when app is installed */
    webhookUrl?: boolean | number
    /** Webhook event types this app subscribes to */
    webhookEvents?: boolean | number
    /** Metafield namespaces this app is allowed to use */
    metafieldNamespaces?: boolean | number
    /** Frontend micro-frontend modules registered by this app */
    frontendModules?: FrontendModuleModelGenqlSelection
    /** S3 CDN path for the extension bundle (injected on publish) */
    extensionCdnPath?: boolean | number
    /** S3 CDN path for the module bundle (injected on publish) */
    moduleCdnPath?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Page-specific configuration for a CDN file, defining the URL path it serves */
export interface PlatformCdnFilePageConfigGenqlSelection{
    /** The URL path pattern this page responds to (e.g. /events/:id) */
    path?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Configuration options for a CDN file */
export interface PlatformCdnFileConfigsGenqlSelection{
    /** Page-specific configuration, required for PAGE type files */
    pageConfig?: PlatformCdnFilePageConfigGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A file stored on the platform CDN, such as a page template, component, text asset, or image */
export interface PlatformCdnFileGenqlSelection{
    /** Unique identifier of the CDN file */
    id?: boolean | number
    /** The platform this file belongs to, if associated with a platform */
    platformId?: boolean | number
    /** The platform template this file belongs to, if associated with a template */
    platformTemplateId?: boolean | number
    /** The file name including path segments */
    name?: boolean | number
    /** The type of CDN file (PAGE, COMPONENT, TEXT, or IMAGE) */
    type?: boolean | number
    /** When this file was last updated */
    updatedAt?: boolean | number
    /** When this file was created */
    createdAt?: boolean | number
    /** File configuration options such as page routing config */
    config?: PlatformCdnFileConfigsGenqlSelection
    /** File size in bytes */
    size?: boolean | number
    /** The CDN path for the published production version of this file */
    prodCdnPath?: boolean | number
    /** The CDN path for the development version of this file, visible only to authorized editors */
    devCdnPath?: boolean | number
    /** The text contents of the file, if applicable */
    contents?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A key-value pair representing a field in a presigned upload form */
export interface PresignedUrlFieldGenqlSelection{
    /** The form field name */
    key?: boolean | number
    /** The form field value */
    value?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A presigned URL with form fields for uploading a file directly to S3 */
export interface PresignedUrlGenqlSelection{
    /** Form fields required for the presigned POST upload */
    fields?: PresignedUrlFieldGenqlSelection
    /** The S3 endpoint URL to POST the file upload to */
    url?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Result of a single automated review check */
export interface AppReviewCheckGenqlSelection{
    /** Name identifier of the check (e.g. manifest_valid, urls_https) */
    name?: boolean | number
    /** Whether this check passed */
    passed?: boolean | number
    /** Details or error message for this check */
    details?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Result of the automated app review process */
export interface AppReviewResultGenqlSelection{
    /** Whether all review checks passed */
    passed?: boolean | number
    /** Individual check results */
    checks?: AppReviewCheckGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A versioned release of a marketplace app */
export interface MarketplaceAppReleaseGenqlSelection{
    /** Unique identifier of the release */
    id?: boolean | number
    /** ID of the marketplace app */
    marketplaceAppId?: boolean | number
    /** Semantic version string */
    version?: boolean | number
    /** Current review status of the release */
    status?: boolean | number
    /** App manifest for this release */
    manifest?: AppManifestModelGenqlSelection
    /** S3 key for the extension bundle */
    extensionBundleKey?: boolean | number
    /** S3 key for the module bundle */
    moduleBundleKey?: boolean | number
    /** Release notes describing changes */
    releaseNotes?: boolean | number
    /** Automated review result details */
    reviewResult?: AppReviewResultGenqlSelection
    /** When the release was reviewed */
    reviewedAt?: boolean | number
    /** When the release was created */
    createdAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A release with presigned URLs for bundle upload */
export interface AppReleaseWithUploadUrlsGenqlSelection{
    /** The created release */
    release?: MarketplaceAppReleaseGenqlSelection
    /** Presigned POST data for extension bundle upload */
    extensionUploadUrl?: PresignedUrlGenqlSelection
    /** Presigned POST data for module bundle upload */
    moduleUploadUrl?: PresignedUrlGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Bundle validation error details */
export interface AppBundleValidationErrorGenqlSelection{
    /** Whether validation passed */
    valid?: boolean | number
    /** List of validation errors */
    errors?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A versioned release of an app with a snapshot of its manifest */
export interface AppReleaseGenqlSelection{
    /** Unique identifier of the release */
    id?: boolean | number
    /** ID of the app */
    appId?: boolean | number
    /** Semantic version string (e.g. 1.0.0) */
    version?: boolean | number
    /** Release notes */
    notes?: boolean | number
    /** Manifest snapshot at release time */
    manifest?: AppManifestModelGenqlSelection
    /** Current status of the release */
    status?: boolean | number
    /** Review result details */
    reviewResult?: AppReviewResultGenqlSelection
    /** When the release was created */
    createdAt?: boolean | number
    /** When the release was last updated */
    updatedAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** OAuth2 client metadata for an organization app */
export interface OrganizationAppConfigMetadataGenqlSelection{
    /** URL where users are redirected to log in */
    loginUrl?: boolean | number
    /** URL where users are redirected to grant consent */
    consentUrl?: boolean | number
    /** ID of the account that created this app */
    creatorId?: boolean | number
    /** Whether the app requires explicit user consent during authorization */
    requiresConsent?: boolean | number
    /** Whether this is a public OAuth2 client (no client secret) */
    public?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** OAuth2 client configuration for an organization app */
export interface OrganizationAppConfigGenqlSelection{
    /** Display name of the OAuth2 client */
    name?: boolean | number
    /** ID of the organization that owns this app */
    organizationId?: boolean | number
    /** Allowed OAuth2 redirect URLs after authorization */
    redirectUrls?: boolean | number
    /** Allowed redirect URLs after logout */
    logoutRedirectUrls?: boolean | number
    /** OAuth2 scopes available to this client */
    scope?: boolean | number
    /** Additional metadata for the OAuth2 client */
    metadata?: OrganizationAppConfigMetadataGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An OAuth2 application registered by an organization */
export interface OrganizationAppGenqlSelection{
    /** Unique identifier of the app (also the OAuth2 client ID) */
    id?: boolean | number
    /** Display name of the app */
    name?: boolean | number
    /** Description of the app */
    description?: boolean | number
    /** ID of the account that created this app */
    creatorId?: boolean | number
    /** ID of the organization that owns this app */
    organizationId?: boolean | number
    /** Timestamp when the app was created */
    createdAt?: boolean | number
    /** Timestamp when the app was last updated */
    updatedAt?: boolean | number
    /** OAuth2 client secret (only returned on creation or secret reset) */
    secret?: boolean | number
    /** Whether this is a public OAuth2 client (no client secret required) */
    public?: boolean | number
    /** App icon URL */
    icon?: boolean | number
    /** Short description of the app */
    shortDescription?: boolean | number
    /** OAuth2 client configuration for this app */
    configuration?: OrganizationAppConfigGenqlSelection
    /** Account that created this app */
    creator?: AccountGenqlSelection
    /** Working copy of the app manifest */
    manifest?: AppManifestModelGenqlSelection
    /** Releases for this app */
    releases?: AppReleaseGenqlSelection
    /** Active webhooks for this app */
    appWebhooks?: AppWebhookGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Paginated list of organization apps */
export interface OrganizationAppsGenqlSelection{
    /** List of edges containing cursor and node pairs */
    edges?: OrganizationAppEdgeGenqlSelection
    /** Flat list of items in the current page */
    nodes?: OrganizationAppGenqlSelection
    /** Pagination metadata for navigating between pages */
    pageInfo?: ResponsePageInfoGenqlSelection
    /** Total number of items across all pages */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An edge in a paginated connection containing a cursor and node */
export interface OrganizationAppEdgeGenqlSelection{
    /** Opaque cursor string for this edge, used for pagination */
    cursor?: boolean | number
    /** The item at this edge */
    node?: OrganizationAppGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A webhook auto-created when an app is installed on an organization */
export interface AppWebhookGenqlSelection{
    /** Unique identifier of the webhook */
    id?: boolean | number
    /** ID of the app */
    appId?: boolean | number
    /** ID of the marketplace installation (null for private apps) */
    installationId?: boolean | number
    /** ID of the organization where the app is installed */
    organizationId?: boolean | number
    /** URL where webhook events are sent */
    url?: boolean | number
    /** Event types this webhook subscribes to */
    events?: boolean | number
    /** Whether this webhook is currently active */
    active?: boolean | number
    /** When the webhook was created */
    createdAt?: boolean | number
    /** When the webhook was last updated */
    updatedAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An application attached to an organization with associated permissions and group assignment */
export interface OrganizationAttachedAppGenqlSelection{
    /** The ID of the organization this app is attached to */
    organizationId?: boolean | number
    /** The ID of the permission group assigned to this attached app */
    groupId?: boolean | number
    /** The unique identifier of the attached application */
    appId?: boolean | number
    /** The set of permissions granted to this attached app */
    permissions?: GroupPermissionGenqlSelection
    /** When this app attachment was created */
    createdAt?: boolean | number
    /** When this app attachment was last updated */
    updatedAt?: boolean | number
    /** The application details for this attached app */
    app?: OrganizationAppGenqlSelection
    /** The permission group assigned to this attached app */
    group?: OrganizationGroupGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Paginated list of applications attached to an organization */
export interface OrganizationAttachedAppsGenqlSelection{
    /** List of edges containing cursor and node pairs */
    edges?: OrganizationAttachedAppEdgeGenqlSelection
    /** Flat list of items in the current page */
    nodes?: OrganizationAttachedAppGenqlSelection
    /** Pagination metadata for navigating between pages */
    pageInfo?: ResponsePageInfoGenqlSelection
    /** Total number of items across all pages */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An edge in a paginated connection containing a cursor and node */
export interface OrganizationAttachedAppEdgeGenqlSelection{
    /** Opaque cursor string for this edge, used for pagination */
    cursor?: boolean | number
    /** The item at this edge */
    node?: OrganizationAttachedAppGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An identity provider configured for an organization, supporting OAuth2 or OpenID Connect authentication */
export interface OrganizationIdentityProviderGenqlSelection{
    /** Whether this identity provider is currently active */
    enabled?: boolean | number
    /** Whether player accounts must be validated through this provider */
    requiredForPlayerValidation?: boolean | number
    /** Whether users can log in using this identity provider */
    allowLogin?: boolean | number
    /** Human-readable description of this identity provider */
    description?: boolean | number
    /** URL or identifier for the provider icon */
    icon?: boolean | number
    /** Unique identifier of this identity provider */
    id?: boolean | number
    /** Reference to the parent root identity provider, if derived from one */
    identityProviderId?: boolean | number
    /** The OAuth2 or OpenID Connect configuration for this provider */
    configuration?: IdentityProviderConfigurationsGenqlSelection
    /** Display name of the identity provider */
    name?: boolean | number
    /** The organization this provider belongs to */
    organizationId?: boolean | number
    /** When this identity provider was created */
    createdAt?: boolean | number
    /** When this identity provider was last updated */
    updatedAt?: boolean | number
    /** The root identity provider this organization provider was derived from */
    parentIdentityProvider?: PublicIdentityProviderGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface IdentityProviderConfigurationsGenqlSelection{
    on_OAuthClientConfiguration?:OAuthClientConfigurationGenqlSelection,
    on_OpenidConfiguration?:OpenidConfigurationGenqlSelection,
    __typename?: boolean | number
}


/** Configuration for an OAuth2 identity provider client */
export interface OAuthClientConfigurationGenqlSelection{
    /** OAuth2/OIDC authorization endpoint URL */
    authorizationEndpoint?: boolean | number
    /** List of endpoints to retrieve user data from after authentication */
    dataRetrievers?: DataRetrievalConfigGenqlSelection
    /** Issuer identifier for the identity provider */
    issuer?: boolean | number
    /** Type of identity provider (OPENID or OAUTH2) */
    providerType?: boolean | number
    /** OAuth2 client ID issued by the identity provider */
    clientId?: boolean | number
    /** OAuth2 client secret issued by the identity provider */
    clientSecret?: boolean | number
    /** Authentication method used when calling the token endpoint */
    tokenEndpointAuthMethod?: boolean | number
    /** URL to redirect users back to after authentication */
    redirectUrl?: boolean | number
    /** URL of the OAuth2 token endpoint for exchanging authorization codes */
    tokenEndpoint?: boolean | number
    /** URL of the OAuth2 authorization endpoint where users are redirected to authenticate */
    authorizationUrl?: boolean | number
    /** URL where users are redirected after the identity linking process completes. Required for the IDP-based identity linking flow via generateIdentityLinkUrl. */
    linkRedirectUrl?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Configuration for an OpenID Connect identity provider client */
export interface OpenidConfigurationGenqlSelection{
    /** OAuth2/OIDC authorization endpoint URL */
    authorizationEndpoint?: boolean | number
    /** List of endpoints to retrieve user data from after authentication */
    dataRetrievers?: DataRetrievalConfigGenqlSelection
    /** Issuer identifier for the identity provider */
    issuer?: boolean | number
    /** Type of identity provider (OPENID or OAUTH2) */
    providerType?: boolean | number
    /** OpenID Connect client ID issued by the identity provider */
    clientId?: boolean | number
    /** OpenID Connect client secret issued by the identity provider */
    clientSecret?: boolean | number
    /** URL to redirect users back to after OpenID authentication */
    redirectUrl?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A webhook endpoint configured to receive event notifications for an organization */
export interface WebhookGenqlSelection{
    /** Unique identifier of the webhook */
    id?: boolean | number
    /** The organization this webhook belongs to */
    organizationId?: boolean | number
    /** The event types this webhook is subscribed to */
    events?: boolean | number
    /** The URL that will receive webhook POST requests */
    url?: boolean | number
    /** Human-readable description of this webhook */
    description?: boolean | number
    /** Whether this webhook is currently active and receiving events */
    active?: boolean | number
    /** The secret key used to sign webhook payloads for verification */
    secret?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A skill rating value assigned to a player for a specific rating definition */
export interface PlayerSkillRatingGenqlSelection{
    /** Unique identifier for this skill rating entry */
    id?: boolean | number
    /** The ID of the player profile this rating belongs to */
    playerProfileId?: boolean | number
    /** The ID of the skill rating definition */
    ratingId?: boolean | number
    /** The numeric skill rating value */
    value?: boolean | number
    /** The date and time this skill rating was created */
    createdAt?: boolean | number
    /** The date and time this skill rating was last updated */
    updatedAt?: boolean | number
    /** The player profile associated with this skill rating */
    player?: PlayerGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A single match within a game, representing one play session between teams */
export interface TournamentStepGroupRoundGameMatchGenqlSelection{
    /** Unique identifier for the match */
    id?: boolean | number
    /** Sort order of this match within the game (for best-of series) */
    order?: boolean | number
    /** Current status of the match (WAITING, STARTED, ENDED) */
    status?: boolean | number
    /** ID of the parent game */
    tournamentStepGroupRoundGameId?: boolean | number
    /** Configuration settings for the match including scoring variables */
    configuration?: MatchConfigurationGenqlSelection
    /** Timestamp when the match was created */
    createdAt?: boolean | number
    /** Timestamp when the match was last updated */
    updatedAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Paginated list of tournament match results for a player */
export interface TournamentStepGroupRoundGameMatchesGenqlSelection{
    /** List of edges containing cursor and node pairs */
    edges?: TournamentStepGroupRoundGameMatchEdgeGenqlSelection
    /** Flat list of items in the current page */
    nodes?: TournamentStepGroupRoundGameMatchGenqlSelection
    /** Pagination metadata for navigating between pages */
    pageInfo?: ResponsePageInfoGenqlSelection
    /** Total number of items across all pages */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An edge in a paginated connection containing a cursor and node */
export interface TournamentStepGroupRoundGameMatchEdgeGenqlSelection{
    /** Opaque cursor string for this edge, used for pagination */
    cursor?: boolean | number
    /** The item at this edge */
    node?: TournamentStepGroupRoundGameMatchGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Configuration for collecting payments through the organization, including platform fees and Stripe account */
export interface OrganizationPaymentCollectionConfigurationGenqlSelection{
    /** The percentage fee charged by WellPlayed on each transaction (e.g. 0.02 = 2%) */
    wellPlayedFeePercent?: boolean | number
    /** The minimum fee in cents charged by WellPlayed per transaction */
    wellPlayedMinimalFee?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A member of a tournament team */
export interface TournamentTeamMemberDtoGenqlSelection{
    /** Unique identifier for this team membership */
    id?: boolean | number
    /** Current status of this team member (accepted, awaiting, denied) */
    status?: boolean | number
    /** ID of the tournament team this member belongs to */
    tournamentTeamId?: boolean | number
    /** ID of the player profile for this member */
    playerProfileId?: boolean | number
    /** Date and time when this membership was created */
    createdAt?: boolean | number
    /** Date and time when this membership was last updated */
    updatedAt?: boolean | number
    /** The tournament team this member belongs to */
    team?: TournamentTeamGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Paginated list of tournament team members */
export interface TeamMembersGenqlSelection{
    /** List of edges containing cursor and node pairs */
    edges?: TournamentTeamMemberEdgeGenqlSelection
    /** Flat list of items in the current page */
    nodes?: TournamentTeamMemberDtoGenqlSelection
    /** Pagination metadata for navigating between pages */
    pageInfo?: ResponsePageInfoGenqlSelection
    /** Total number of items across all pages */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An edge in a paginated connection containing a cursor and node */
export interface TournamentTeamMemberEdgeGenqlSelection{
    /** Opaque cursor string for this edge, used for pagination */
    cursor?: boolean | number
    /** The item at this edge */
    node?: TournamentTeamMemberDtoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A team registered to a tournament */
export interface TournamentTeamGenqlSelection{
    /** Unique identifier of the tournament team */
    id?: boolean | number
    /** Display name of the team */
    name?: boolean | number
    /** Short tag or abbreviation for the team */
    tag?: boolean | number
    /** ID of the permanent team this tournament team was created from */
    teamId?: boolean | number
    /** ID of the player profile who manages this team */
    managerId?: boolean | number
    /** ID of the tournament this team is registered to */
    tournamentId?: boolean | number
    /** Current registration and validation status of the team */
    status?: boolean | number
    /** Date and time when the team was registered */
    createdAt?: boolean | number
    /** Date and time when the team was last updated */
    updatedAt?: boolean | number
    /** List of members belonging to this team */
    members?: TournamentTeamMemberDtoGenqlSelection
    /** Custom fields configured for this tournament team with their values and visibility rules */
    customFields?: (PropertyConfigWithValueGenqlSelection & { __args?: {properties?: (Scalars['String'][] | null)} })
    /** The tournament this team is registered to */
    tournament?: TournamentGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Paginated list of tournament teams */
export interface TournamentTeamsGenqlSelection{
    /** List of edges containing cursor and node pairs */
    edges?: TournamentTeamEdgeGenqlSelection
    /** Flat list of items in the current page */
    nodes?: TournamentTeamGenqlSelection
    /** Pagination metadata for navigating between pages */
    pageInfo?: ResponsePageInfoGenqlSelection
    /** Total number of items across all pages */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An edge in a paginated connection containing a cursor and node */
export interface TournamentTeamEdgeGenqlSelection{
    /** Opaque cursor string for this edge, used for pagination */
    cursor?: boolean | number
    /** The item at this edge */
    node?: TournamentTeamGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Score entry for a tournament team */
export interface TournamentTeamScoreGenqlSelection{
    /** ID of the tournament team */
    teamId?: boolean | number
    /** Accumulated score for this team */
    score?: boolean | number
    /** The tournament team associated with this score */
    team?: TournamentTeamGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A step (phase) within a tournament, representing a bracket or competition stage */
export interface TournamentStepGenqlSelection{
    /** Unique identifier of the tournament step */
    id?: boolean | number
    /** ID of the tournament this step belongs to */
    tournamentId?: boolean | number
    /** Name of the tournament step */
    name?: boolean | number
    /** Description of the tournament step */
    description?: boolean | number
    /** Display order of this step within the tournament */
    order?: boolean | number
    /** Type of bracket or competition format (single elimination, double elimination, round robin, etc.) */
    type?: boolean | number
    /** Current lifecycle status of this step (configured, generated, seeded, started, ended) */
    status?: boolean | number
    /** Detailed configuration for the step including groups, rounds, and game settings */
    configuration?: StepConfigurationGenqlSelection
    /** Date and time when the step was created */
    createdAt?: boolean | number
    /** Date and time when the step was last updated */
    updatedAt?: boolean | number
    /** Team scores accumulated within this tournament step */
    teamScores?: TournamentTeamScoreGenqlSelection
    /** The tournament this step belongs to */
    tournament?: TournamentGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Paginated list of tournaments */
export interface TournamentsGenqlSelection{
    /** List of edges containing cursor and node pairs */
    edges?: TournamentEdgeGenqlSelection
    /** Flat list of items in the current page */
    nodes?: TournamentGenqlSelection
    /** Pagination metadata for navigating between pages */
    pageInfo?: ResponsePageInfoGenqlSelection
    /** Total number of items across all pages */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An edge in a paginated connection containing a cursor and node */
export interface TournamentEdgeGenqlSelection{
    /** Opaque cursor string for this edge, used for pagination */
    cursor?: boolean | number
    /** The item at this edge */
    node?: TournamentGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A game within a tournament round, containing matches between teams */
export interface TournamentStepGroupRoundGameGenqlSelection{
    /** Unique identifier for the game */
    id?: boolean | number
    /** Configuration settings for the game */
    configuration?: GameConfigurationGenqlSelection
    /** Current status of the game (WAITING, STARTED, ENDED) */
    status?: boolean | number
    /** Sort order of this game within the round */
    order?: boolean | number
    /** ID of the parent round */
    tournamentStepGroupRoundId?: boolean | number
    /** ID of the game the winner advances to */
    winningGameId?: boolean | number
    /** ID of the game the loser drops to (e.g. losers bracket) */
    losingGameId?: boolean | number
    /** Timestamp when the game was created */
    createdAt?: boolean | number
    /** Timestamp when the game was last updated */
    updatedAt?: boolean | number
    /** Matches within this game (best-of series) */
    matches?: TournamentStepGroupRoundGameMatchGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A round within a tournament group, containing games */
export interface TournamentStepGroupRoundGenqlSelection{
    /** Unique identifier for the round */
    id?: boolean | number
    /** Display name of the round */
    name?: boolean | number
    /** Configuration settings for the round */
    configuration?: RoundConfigurationGenqlSelection
    /** ID of the parent group */
    tournamentStepGroupId?: boolean | number
    /** Sort order of this round within the group */
    order?: boolean | number
    /** Timestamp when the round was created */
    createdAt?: boolean | number
    /** Timestamp when the round was last updated */
    updatedAt?: boolean | number
    /** Games within this round */
    games?: TournamentStepGroupRoundGameGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A group within a tournament step, containing rounds and team matchups */
export interface TournamentStepGroupGenqlSelection{
    /** Unique identifier for the group */
    id?: boolean | number
    /** Display name of the group */
    name?: boolean | number
    /** Detailed description of the group */
    description?: boolean | number
    /** Configuration settings for the group */
    configuration?: GroupConfigurationGenqlSelection
    /** ID of the parent tournament step */
    tournamentStepId?: boolean | number
    /** Timestamp when the group was created */
    createdAt?: boolean | number
    /** Timestamp when the group was last updated */
    updatedAt?: boolean | number
    /** Rounds within this group */
    rounds?: TournamentStepGroupRoundGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A team score entry for a specific match */
export interface TournamentStepGroupRoundGameMatchScoreGenqlSelection{
    /** Unique identifier for this match score */
    id?: boolean | number
    /** ID of the match this score belongs to */
    matchId?: boolean | number
    /** ID of the team this score belongs to */
    teamId?: boolean | number
    /** Numeric score value for this team in this match */
    score?: boolean | number
    /** Status of this score (WAITING, WINNER, LOSER, FORFEIT) */
    status?: boolean | number
    /** Timestamp when the score was created */
    createdAt?: boolean | number
    /** Timestamp when the score was last updated */
    updatedAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Paginated list of match scores */
export interface TournamentStepGroupRoundGameMatchScoresGenqlSelection{
    /** List of edges containing cursor and node pairs */
    edges?: TournamentStepGroupRoundGameMatchScoreEdgeGenqlSelection
    /** Flat list of items in the current page */
    nodes?: TournamentStepGroupRoundGameMatchScoreGenqlSelection
    /** Pagination metadata for navigating between pages */
    pageInfo?: ResponsePageInfoGenqlSelection
    /** Total number of items across all pages */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An edge in a paginated connection containing a cursor and node */
export interface TournamentStepGroupRoundGameMatchScoreEdgeGenqlSelection{
    /** Opaque cursor string for this edge, used for pagination */
    cursor?: boolean | number
    /** The item at this edge */
    node?: TournamentStepGroupRoundGameMatchScoreGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An administrator assigned to a tournament with specific permissions */
export interface TournamentAdminGenqlSelection{
    /** Unique identifier for this admin assignment */
    id?: boolean | number
    /** ID of the tournament this admin is assigned to */
    tournamentId?: boolean | number
    /** ID of the account that has admin access */
    accountId?: boolean | number
    /** List of permissions granted to this tournament admin */
    permissions?: boolean | number
    /** Date and time when this admin assignment was created */
    createdAt?: boolean | number
    /** Date and time when this admin assignment was last updated */
    updatedAt?: boolean | number
    /** The account associated with this tournament admin */
    account?: AccountGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A condition that must be met for a rule to execute */
export interface RuleConditionModelGenqlSelection{
    /** Formula string for the field to check (left side) */
    field?: boolean | number
    /** Comparison operator (EQ, NEQ, GT, GTE, LT, LTE, etc.) */
    operator?: boolean | number
    /** Formula string for the value to compare against (right side) */
    value?: boolean | number
    /** Scope at which this condition is evaluated (e.g. PER_TEAM, ALL_TEAMS) */
    scope?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Reference to a game by absolute ID or relative indices within the bracket structure */
export interface GameRefModelGenqlSelection{
    /** Reference type (ABSOLUTE by ID or RELATIVE by indices) */
    type?: boolean | number
    /** Absolute game ID (used when type is ABSOLUTE) */
    id?: boolean | number
    /** Zero-based group index (used when type is RELATIVE) */
    groupIndex?: boolean | number
    /** Zero-based round index within the group (used when type is RELATIVE) */
    roundIndex?: boolean | number
    /** Zero-based game index within the round (used when type is RELATIVE) */
    gameIndex?: boolean | number
    /** Zero-based team slot index within the game */
    slot?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Reference to a group by absolute ID or relative index */
export interface GroupRefModelGenqlSelection{
    /** Reference type (ABSOLUTE by ID or RELATIVE by index) */
    type?: boolean | number
    /** Absolute group ID (used when type is ABSOLUTE) */
    id?: boolean | number
    /** Zero-based group index (used when type is RELATIVE) */
    groupIndex?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Reference to a round by absolute ID or relative indices */
export interface RoundRefModelGenqlSelection{
    /** Reference type (ABSOLUTE by ID or RELATIVE by indices) */
    type?: boolean | number
    /** Absolute round ID (used when type is ABSOLUTE) */
    id?: boolean | number
    /** Zero-based group index (used when type is RELATIVE) */
    groupIndex?: boolean | number
    /** Zero-based round index within the group (used when type is RELATIVE) */
    roundIndex?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Reference to a tournament step by absolute ID or relative position */
export interface StepRefModelGenqlSelection{
    /** Reference type (ABSOLUTE by ID or RELATIVE by position) */
    type?: boolean | number
    /** Absolute step ID (used when type is ABSOLUTE) */
    id?: boolean | number
    /** Relative position (PREVIOUS, NEXT, CURRENT) when type is RELATIVE */
    relative?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Variable definition used in match score formula computation */
export interface MatchConfigVariableModelGenqlSelection{
    /** Variable name used in the scoring formula */
    formulaName?: boolean | number
    /** Human-readable label for the variable */
    displayName?: boolean | number
    /** Default numeric value if not explicitly provided */
    defaultValue?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Match configuration reference specifying where to source match settings from */
export interface MatchConfigRefModelGenqlSelection{
    /** Source of the match configuration (INLINE, INHERIT, etc.) */
    source?: boolean | number
    /** Inline scoring variables (used when source is INLINE) */
    variables?: MatchConfigVariableModelGenqlSelection
    /** Inline score formula expression (used when source is INLINE) */
    scoreFormula?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Configuration for auto-generating bracket structure from a team count */
export interface AutoGenerateConfigModelGenqlSelection{
    /** Auto-generation algorithm type (SINGLE_ELIM, ROUND_ROBIN, etc.) */
    type?: boolean | number
    /** Minimum team count to trigger auto-generation */
    fromTeamCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Scope that restricts when a rule triggers by limiting to specific game, round, or group */
export interface TriggerScopeModelGenqlSelection{
    /** Restrict trigger to events within this specific game */
    gameId?: boolean | number
    /** Restrict trigger to events within this specific round */
    roundId?: boolean | number
    /** Restrict trigger to events within this specific group */
    groupId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Event data that triggered a rule execution */
export interface RuleEventDataModelGenqlSelection{
    /** IDs of teams involved in the triggering event */
    teamIds?: boolean | number
    /** Serialized scores map */
    scores?: boolean | number
    /** Serialized match result map */
    matchResult?: boolean | number
    /** ID of the game that triggered the event */
    gameId?: boolean | number
    /** ID of the round that triggered the event */
    roundId?: boolean | number
    /** ID of the group that triggered the event */
    groupId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Result of evaluating a single condition during rule execution */
export interface ConditionEvaluationModelGenqlSelection{
    /** Left-side field expression that was evaluated */
    field?: boolean | number
    /** Comparison operator used */
    operator?: boolean | number
    /** Right-side value expression that was evaluated */
    value?: boolean | number
    /** Scope at which the condition was evaluated */
    scope?: boolean | number
    /** Whether the condition evaluated to true */
    result?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Result of executing a single action during rule execution */
export interface ActionResultModelGenqlSelection{
    /** The action that was executed */
    action?: RuleActionGenqlSelection
    /** Whether the action executed successfully */
    success?: boolean | number
    /** ID of the team the action was applied to */
    teamId?: boolean | number
    /** Human-readable details of the action result */
    details?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface RuleActionGenqlSelection{
    on_AdvanceToGameActionModel?:AdvanceToGameActionModelGenqlSelection,
    on_AdvanceToGroupActionModel?:AdvanceToGroupActionModelGenqlSelection,
    on_AdvanceToStepActionModel?:AdvanceToStepActionModelGenqlSelection,
    on_EliminateActionModel?:EliminateActionModelGenqlSelection,
    on_GenerateNextRoundActionModel?:GenerateNextRoundActionModelGenqlSelection,
    on_EndGameActionModel?:EndGameActionModelGenqlSelection,
    on_EndRoundActionModel?:EndRoundActionModelGenqlSelection,
    on_EndGroupActionModel?:EndGroupActionModelGenqlSelection,
    on_SetTeamPropertyActionModel?:SetTeamPropertyActionModelGenqlSelection,
    __typename?: boolean | number
}


/** Action that advances a team to a specific game in the bracket */
export interface AdvanceToGameActionModelGenqlSelection{
    /** Action type discriminator */
    type?: boolean | number
    /** Reference to the target game */
    target?: GameRefModelGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Action that advances a team to a specific group */
export interface AdvanceToGroupActionModelGenqlSelection{
    /** Action type discriminator */
    type?: boolean | number
    /** Reference to the target group */
    target?: GroupRefModelGenqlSelection
    /** Strategy for mapping team rankings into the target group */
    rankMapping?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Action that advances a team to a different tournament step */
export interface AdvanceToStepActionModelGenqlSelection{
    /** Action type discriminator */
    type?: boolean | number
    /** Reference to the target step */
    target?: StepRefModelGenqlSelection
    /** Strategy for mapping team rankings into the target step */
    rankMapping?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Action that eliminates a team from the tournament */
export interface EliminateActionModelGenqlSelection{
    /** Action type discriminator */
    type?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Action that generates a new round with paired games based on a pairing strategy */
export interface GenerateNextRoundActionModelGenqlSelection{
    /** Action type discriminator */
    type?: boolean | number
    /** Algorithm used to pair teams into games */
    pairingStrategy?: boolean | number
    /** Number of games to create in the generated round */
    gamesPerRound?: boolean | number
    /** Number of team slots per generated game */
    teamSlotsPerGame?: boolean | number
    /** Best-of series count for generated matches */
    bestOf?: boolean | number
    /** Match configuration for generated games */
    matchConfiguration?: MatchConfigRefModelGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Action that forcefully ends a game */
export interface EndGameActionModelGenqlSelection{
    /** Action type discriminator */
    type?: boolean | number
    /** Optional scope limiting which game to end */
    scope?: GameRefModelGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Action that forcefully ends a round */
export interface EndRoundActionModelGenqlSelection{
    /** Action type discriminator */
    type?: boolean | number
    /** Optional scope limiting which round to end */
    scope?: RoundRefModelGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Action that forcefully ends a group */
export interface EndGroupActionModelGenqlSelection{
    /** Action type discriminator */
    type?: boolean | number
    /** Optional scope limiting which group to end */
    scope?: GroupRefModelGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Action that sets a custom property on a team */
export interface SetTeamPropertyActionModelGenqlSelection{
    /** Action type discriminator */
    type?: boolean | number
    /** Property key to set on the team */
    key?: boolean | number
    /** Formula string for the computed value */
    formula?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Tiebreaker rule used to resolve tied scores in a scoring rule set */
export interface TiebreakerRuleModelGenqlSelection{
    /** Unique identifier for the tiebreaker rule */
    id?: boolean | number
    /** Priority order of this tiebreaker (lower runs first) */
    order?: boolean | number
    /** Type of tiebreaker algorithm (e.g. HEAD_TO_HEAD, BUCHHOLZ) */
    type?: boolean | number
    /** Human-readable formula string */
    formula?: boolean | number
    /** Sort direction for this tiebreaker (ASC or DESC) */
    sortOrder?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Scoring configuration defining how team scores are calculated and aggregated */
export interface ScoringRuleSetModelGenqlSelection{
    /** Unique identifier for the scoring rule set */
    id?: boolean | number
    /** Method used to aggregate scores across matches (SUM, AVERAGE, etc.) */
    aggregation?: boolean | number
    /** Human-readable formula string */
    formula?: boolean | number
    /** Points awarded for a win */
    winPoints?: boolean | number
    /** Points awarded for a loss */
    lossPoints?: boolean | number
    /** Points awarded for a draw */
    drawPoints?: boolean | number
    /** Points awarded for a forfeit */
    forfeitPoints?: boolean | number
    /** Ordered list of tiebreaker rules for resolving equal scores */
    tiebreakers?: TiebreakerRuleModelGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Rule that defines how teams advance, are eliminated, or how rounds are generated */
export interface AdvancementRuleModelGenqlSelection{
    /** Unique identifier for the advancement rule */
    id?: boolean | number
    /** Display name of the rule */
    name?: boolean | number
    /** Human-readable description of what this rule does */
    description?: boolean | number
    /** Execution priority order (lower runs first) */
    order?: boolean | number
    /** Event type that triggers this rule */
    triggerType?: boolean | number
    /** Scope restricting when the rule triggers */
    triggerScope?: TriggerScopeModelGenqlSelection
    /** Logical operator combining conditions (AND or OR) */
    conditionOperator?: boolean | number
    /** Array of RuleCondition objects */
    conditions?: RuleConditionModelGenqlSelection
    /** Array of RuleAction objects */
    actions?: RuleActionGenqlSelection
    /** Whether actions execute automatically when conditions are met */
    autoExecute?: boolean | number
    /** Whether an admin can manually trigger or override this rule */
    allowManualOverride?: boolean | number
    /** Whether this rule is currently active */
    enabled?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Rule that transfers data (rankings, scores, teams) between tournament steps */
export interface CrossStepRuleModelGenqlSelection{
    /** Unique identifier for the cross-step rule */
    id?: boolean | number
    /** Explicit source step ID */
    sourceStepId?: boolean | number
    /** Relative reference (PREVIOUS, NEXT, CURRENT) */
    sourceRelative?: boolean | number
    /** Data source: RANKINGS, SCORES, TEAMS */
    dataSource?: boolean | number
    /** CrossStepUsage discriminated union */
    usage?: CrossStepUsageGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CrossStepUsageGenqlSelection{
    on_SeedOrderUsageModel?:SeedOrderUsageModelGenqlSelection,
    on_QualifyUsageModel?:QualifyUsageModelGenqlSelection,
    on_InjectScoreUsageModel?:InjectScoreUsageModelGenqlSelection,
    __typename?: boolean | number
}


/** Cross-step usage that seeds teams based on rankings from another step */
export interface SeedOrderUsageModelGenqlSelection{
    /** Usage type discriminator */
    type?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Cross-step usage that qualifies teams based on a condition evaluated against source step data */
export interface QualifyUsageModelGenqlSelection{
    /** Usage type discriminator */
    type?: boolean | number
    /** Formula string for the qualification condition */
    condition?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Cross-step usage that injects scores from another step into the current step */
export interface InjectScoreUsageModelGenqlSelection{
    /** Usage type discriminator */
    type?: boolean | number
    /** Formula string for the score injection */
    formula?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Template defining a game slot in the bracket structure */
export interface GameTemplateModelGenqlSelection{
    /** Unique identifier for the game template */
    id?: boolean | number
    /** Sort order of this game within its round */
    order?: boolean | number
    /** Number of team slots in this game */
    teamSlots?: boolean | number
    /** Number of matches in the best-of series */
    bestOf?: boolean | number
    /** Match configuration for this game template */
    matchConfiguration?: MatchConfigRefModelGenqlSelection
    /** Target reference on win */
    onWinTarget?: GameRefModelGenqlSelection
    /** Target reference on loss */
    onLossTarget?: GameRefModelGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Template defining a round and its game slots within a group */
export interface RoundTemplateModelGenqlSelection{
    /** Unique identifier for the round template */
    id?: boolean | number
    /** Display name of the round */
    name?: boolean | number
    /** Sort order of this round within its group */
    order?: boolean | number
    /** Game templates within this round */
    gameTemplates?: GameTemplateModelGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Variable definition used in match score formula computation */
export interface MatchConfigurationVariableModelGenqlSelection{
    /** Variable name used in the scoring formula */
    formulaName?: boolean | number
    /** Human-readable label for the variable */
    displayName?: boolean | number
    /** Default numeric value if not explicitly provided */
    defaultValue?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Match configuration defining scoring variables and formula */
export interface MatchConfigurationModelGenqlSelection{
    /** Variables available for score computation */
    variables?: MatchConfigurationVariableModelGenqlSelection
    /** Formula expression used to compute the final score from variables */
    scoreFormula?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Template defining a group in the bracket structure with its rounds and generation settings */
export interface GroupTemplateModelGenqlSelection{
    /** Unique identifier for the group template */
    id?: boolean | number
    /** Display name of the group */
    name?: boolean | number
    /** Sort order of this group within the structure */
    order?: boolean | number
    /** Number of team slots available in this group */
    teamSlots?: boolean | number
    /** AutoGenerateConfig for this group (legacy JSON) */
    autoGenerate?: AutoGenerateConfigModelGenqlSelection
    /** Auto-generate algorithm type */
    autoGenerateType?: boolean | number
    /** Number of team slots per game */
    teamSlotsPerGame?: boolean | number
    /** Best-of series count */
    bestOf?: boolean | number
    /** Override round count */
    roundCount?: boolean | number
    /** Match configuration for generated games */
    matchConfiguration?: MatchConfigurationModelGenqlSelection
    /** Round templates within this group */
    roundTemplates?: RoundTemplateModelGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Top-level structure template defining the bracket layout for a step */
export interface StructureTemplateModelGenqlSelection{
    /** Unique identifier for the structure template */
    id?: boolean | number
    /** Group templates that make up the bracket structure */
    groupTemplates?: GroupTemplateModelGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Top-level rule set aggregate for a tournament step, containing scoring, advancement, cross-step rules, and structure */
export interface StepRuleSetModelGenqlSelection{
    /** Unique identifier for the rule set */
    id?: boolean | number
    /** Current version number, incremented on each update */
    version?: boolean | number
    /** Name of the preset used to generate this rule set, if any */
    presetName?: boolean | number
    /** Team count this rule set was configured for */
    teamCount?: boolean | number
    /** Whether this rule set has been validated via simulation */
    validated?: boolean | number
    /** Timestamp of the most recent successful validation */
    validatedAt?: boolean | number
    /** Scoring configuration for this step */
    scoringRuleSet?: ScoringRuleSetModelGenqlSelection
    /** Ordered list of advancement rules */
    advancementRules?: AdvancementRuleModelGenqlSelection
    /** Cross-step data transfer rules */
    crossStepRules?: CrossStepRuleModelGenqlSelection
    /** Bracket structure template for this step */
    structureTemplate?: StructureTemplateModelGenqlSelection
    /** Timestamp when the rule set was created */
    createdAt?: boolean | number
    /** Timestamp when the rule set was last updated */
    updatedAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Audit log entry for a single rule execution, recording event, conditions, and actions */
export interface RuleExecutionLogModelGenqlSelection{
    /** Unique identifier for the log entry */
    id?: boolean | number
    /** ID of the advancement rule that was executed */
    advancementRuleId?: boolean | number
    /** Version of the rule set at the time of execution */
    ruleSetVersion?: boolean | number
    /** Trigger event payload */
    triggerEventData?: RuleEventDataModelGenqlSelection
    /** Evaluated condition results */
    conditionsEvaluated?: ConditionEvaluationModelGenqlSelection
    /** Whether all conditions were satisfied */
    conditionsMet?: boolean | number
    /** Executed action results */
    actionsExecuted?: ActionResultModelGenqlSelection
    /** Whether this execution was a manual override by an admin */
    manualOverride?: boolean | number
    /** Account ID of the admin who performed the manual override */
    overrideBy?: boolean | number
    /** Timestamp when the rule was executed */
    createdAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A single validation error or warning for a rule set */
export interface RuleValidationErrorModelGenqlSelection{
    /** Dot-separated path to the invalid field (e.g. rules[0].conditions[1].field) */
    path?: boolean | number
    /** Human-readable description of the validation issue */
    message?: boolean | number
    /** Line number in the expression where the error occurred */
    line?: boolean | number
    /** Column number in the expression where the error occurred */
    column?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Result of validating a rule set configuration */
export interface RuleValidationResultModelGenqlSelection{
    /** Whether the rule set passed validation without errors */
    valid?: boolean | number
    /** Validation errors that must be fixed */
    errors?: RuleValidationErrorModelGenqlSelection
    /** Validation warnings that should be reviewed */
    warnings?: RuleValidationErrorModelGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Paginated list of rule execution audit logs */
export interface PaginatedRuleExecutionLogsGenqlSelection{
    /** List of edges containing cursor and node pairs */
    edges?: RuleExecutionLogModelEdgeGenqlSelection
    /** Flat list of items in the current page */
    nodes?: RuleExecutionLogModelGenqlSelection
    /** Pagination metadata for navigating between pages */
    pageInfo?: ResponsePageInfoGenqlSelection
    /** Total number of items across all pages */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An edge in a paginated connection containing a cursor and node */
export interface RuleExecutionLogModelEdgeGenqlSelection{
    /** Opaque cursor string for this edge, used for pagination */
    cursor?: boolean | number
    /** The item at this edge */
    node?: RuleExecutionLogModelGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Snapshot of a game state during simulation */
export interface SimulatedGameSnapshotModelGenqlSelection{
    /** Identifier of the simulated game */
    gameId?: boolean | number
    /** Zero-based index of the group this game belongs to */
    groupIndex?: boolean | number
    /** Zero-based index of the round within the group */
    roundIndex?: boolean | number
    /** Zero-based index of the game within the round */
    gameIndex?: boolean | number
    /** IDs of teams assigned to this game */
    assignedTeamIds?: boolean | number
    /** Whether this game has been completed in the simulation */
    completed?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A single step in the simulation execution trace */
export interface SimulationStepModelGenqlSelection{
    /** Iteration number within the simulation */
    iteration?: boolean | number
    /** Event type that triggered this step */
    event?: boolean | number
    /** Human-readable description of what happened in this step */
    description?: boolean | number
    /** IDs of teams that advanced during this step */
    teamsAdvanced?: boolean | number
    /** IDs of teams that were eliminated during this step */
    teamsEliminated?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Result of a dry-run rule set simulation */
export interface SimulationResultModelGenqlSelection{
    /** Whether the simulation completed successfully without errors */
    success?: boolean | number
    /** Ordered execution trace of the simulation */
    steps?: SimulationStepModelGenqlSelection
    /** Non-fatal warnings produced during the simulation */
    warnings?: boolean | number
    /** Fatal errors that caused the simulation to fail */
    errors?: boolean | number
    /** Final state of all games in the simulated bracket structure */
    structureSnapshot?: SimulatedGameSnapshotModelGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A virtual currency defined within an organization */
export interface CurrencyGenqlSelection{
    /** Unique identifier of the currency */
    id?: boolean | number
    /** Short symbol representing the currency (e.g., GP, CR) */
    symbol?: boolean | number
    /** Display name of the currency */
    name?: boolean | number
    /** External system identifier for third-party integrations */
    externalId?: boolean | number
    /** Description of the currency purpose */
    description?: boolean | number
    /** Whether the currency is hidden from players */
    hidden?: boolean | number
    /** ID of the organization that owns this currency */
    organizationId?: boolean | number
    /** Timestamp when the currency was created */
    createdAt?: boolean | number
    /** Timestamp when the currency was last updated */
    updatedAt?: boolean | number
    /** Custom metadata key-value pairs attached to the currency */
    metadata?: PropertyValueGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Paginated list of currencies */
export interface CurrenciesGenqlSelection{
    /** List of edges containing cursor and node pairs */
    edges?: CurrencyEdgeGenqlSelection
    /** Flat list of items in the current page */
    nodes?: CurrencyGenqlSelection
    /** Pagination metadata for navigating between pages */
    pageInfo?: ResponsePageInfoGenqlSelection
    /** Total number of items across all pages */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An edge in a paginated connection containing a cursor and node */
export interface CurrencyEdgeGenqlSelection{
    /** Opaque cursor string for this edge, used for pagination */
    cursor?: boolean | number
    /** The item at this edge */
    node?: CurrencyGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A player's balance for a specific currency */
export interface PlayerCurrencyGenqlSelection{
    /** Unique identifier of the player currency record */
    id?: boolean | number
    /** ID of the player profile that owns this balance */
    playerProfileId?: boolean | number
    /** ID of the currency this balance is for */
    currencyId?: boolean | number
    /** Current balance amount for this currency */
    balance?: boolean | number
    /** Timestamp when the player currency record was created */
    createdAt?: boolean | number
    /** Timestamp when the balance was last updated */
    updatedAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Paginated list of player currency balances */
export interface PlayerCurrenciesGenqlSelection{
    /** List of edges containing cursor and node pairs */
    edges?: PlayerCurrencyEdgeGenqlSelection
    /** Flat list of items in the current page */
    nodes?: PlayerCurrencyGenqlSelection
    /** Pagination metadata for navigating between pages */
    pageInfo?: ResponsePageInfoGenqlSelection
    /** Total number of items across all pages */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An edge in a paginated connection containing a cursor and node */
export interface PlayerCurrencyEdgeGenqlSelection{
    /** Opaque cursor string for this edge, used for pagination */
    cursor?: boolean | number
    /** The item at this edge */
    node?: PlayerCurrencyGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Configuration defining size constraints for a user group */
export interface UserGroupConfigurationGenqlSelection{
    /** Maximum number of accepted members allowed in the group */
    maxSize?: boolean | number
    /** Minimum number of accepted members required for the group to be valid */
    minSize?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A member entry within a user group, representing a player and their membership status */
export interface UserGroupMemberGenqlSelection{
    /** Unique identifier of the membership record */
    id?: boolean | number
    /** ID of the user group this membership belongs to */
    groupId?: boolean | number
    /** ID of the player profile who is a member */
    playerProfileId?: boolean | number
    /** Current status of this membership (e.g. PENDING, ACCEPTED, DECLINED) */
    status?: boolean | number
    /** Timestamp when the membership was created */
    createdAt?: boolean | number
    /** Timestamp when the membership was last updated */
    updatedAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A user group that organizes players together, typically for team-based activities */
export interface UserGroupGenqlSelection{
    /** Unique identifier of the user group */
    id?: boolean | number
    /** ID of the organization this group belongs to */
    organizationId?: boolean | number
    /** Player profile ID of the group manager */
    managerId?: boolean | number
    /** Timestamp when the group was created */
    createdAt?: boolean | number
    /** Timestamp when the group was last updated */
    updatedAt?: boolean | number
    /** Current validation status of the group based on member count constraints */
    status?: boolean | number
    /** Whether the group is locked and cannot be modified */
    locked?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Paginated list of user groups */
export interface UserGroupsGenqlSelection{
    /** List of edges containing cursor and node pairs */
    edges?: UserGroupEdgeGenqlSelection
    /** Flat list of items in the current page */
    nodes?: UserGroupGenqlSelection
    /** Pagination metadata for navigating between pages */
    pageInfo?: ResponsePageInfoGenqlSelection
    /** Total number of items across all pages */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An edge in a paginated connection containing a cursor and node */
export interface UserGroupEdgeGenqlSelection{
    /** Opaque cursor string for this edge, used for pagination */
    cursor?: boolean | number
    /** The item at this edge */
    node?: UserGroupGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Paginated list of user group members */
export interface UserGroupMembersGenqlSelection{
    /** List of edges containing cursor and node pairs */
    edges?: UserGroupMemberEdgeGenqlSelection
    /** Flat list of items in the current page */
    nodes?: UserGroupMemberGenqlSelection
    /** Pagination metadata for navigating between pages */
    pageInfo?: ResponsePageInfoGenqlSelection
    /** Total number of items across all pages */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An edge in a paginated connection containing a cursor and node */
export interface UserGroupMemberEdgeGenqlSelection{
    /** Opaque cursor string for this edge, used for pagination */
    cursor?: boolean | number
    /** The item at this edge */
    node?: UserGroupMemberGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A 2D coordinate position for seat placement on a venue map */
export interface PositionGenqlSelection{
    /** Horizontal position coordinate */
    x?: boolean | number
    /** Vertical position coordinate */
    y?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Visual configuration of a venue seat including size, icon, and position */
export interface EventVenueSeatConfigurationGenqlSelection{
    /** Visual size of the seat on the venue map */
    size?: boolean | number
    /** URL of a custom SVG icon for the seat */
    svgUrl?: boolean | number
    /** Position of the seat on the venue map */
    position?: PositionGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An individual seat within an event venue */
export interface EventVenueSeatGenqlSelection{
    /** Unique identifier of the seat */
    id?: boolean | number
    /** Display name or label of the seat */
    name?: boolean | number
    /** Timestamp when the seat was created */
    createdAt?: boolean | number
    /** Timestamp when the seat was last updated */
    updatedAt?: boolean | number
    /** Visual configuration of the seat including position and appearance */
    configuration?: EventVenueSeatConfigurationGenqlSelection
    /** Identifier of the seat type this seat belongs to */
    seatTypeId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Result of a batch venue seats update operation */
export interface EventVenueSeatsUpdateResultGenqlSelection{
    /** List of seats that were updated */
    updatedSeats?: EventVenueSeatGenqlSelection
    /** List of seats that were created */
    createdSeats?: EventVenueSeatGenqlSelection
    /** List of seats that were deleted */
    deletedSeats?: EventVenueSeatGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Paginated list of venue seats */
export interface EventVenueSeatsGenqlSelection{
    /** List of edges containing cursor and node pairs */
    edges?: EventVenueSeatEdgeGenqlSelection
    /** Flat list of items in the current page */
    nodes?: EventVenueSeatGenqlSelection
    /** Pagination metadata for navigating between pages */
    pageInfo?: ResponsePageInfoGenqlSelection
    /** Total number of items across all pages */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An edge in a paginated connection containing a cursor and node */
export interface EventVenueSeatEdgeGenqlSelection{
    /** Opaque cursor string for this edge, used for pagination */
    cursor?: boolean | number
    /** The item at this edge */
    node?: EventVenueSeatGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Configuration settings for an event including registration, ticketing, and seating options */
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


/** Represents an event within the platform */
export interface EventGenqlSelection{
    /** Unique identifier of the event */
    id?: boolean | number
    /** Display title of the event */
    title?: boolean | number
    /** Detailed description of the event */
    description?: boolean | number
    /** Timestamp when the event was created */
    createdAt?: boolean | number
    /** Timestamp when the event was last updated */
    updatedAt?: boolean | number
    /** Scheduled start date and time of the event */
    startAt?: boolean | number
    /** Scheduled end date and time of the event */
    endAt?: boolean | number
    /** Date and time when registrations open */
    startRegistrationsAt?: boolean | number
    /** Date and time when registrations close */
    endRegistrationsAt?: boolean | number
    /** Date and time when the event becomes publicly visible */
    visibleAt?: boolean | number
    /** Event configuration including group, ticketing, and registration settings */
    configuration?: EventConfigurationGenqlSelection
    /** Identifier of the venue where the event takes place */
    eventVenueId?: boolean | number
    /** Identifier of the organization that owns this event */
    organizationId?: boolean | number
    /** Identifier of the account that created this event */
    createdById?: boolean | number
    /** Public decryption key used for verifying ticket QR codes */
    decryptionKey?: boolean | number
    /** The venue where this event is taking place */
    venue?: EventVenueGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Base interface for all event types */
export interface EventInterfaceGenqlSelection{
    /** Unique identifier of the event */
    id?: boolean | number
    /** Display title of the event */
    title?: boolean | number
    /** Detailed description of the event */
    description?: boolean | number
    /** Timestamp when the event was created */
    createdAt?: boolean | number
    /** Timestamp when the event was last updated */
    updatedAt?: boolean | number
    /** Scheduled start date and time of the event */
    startAt?: boolean | number
    /** Scheduled end date and time of the event */
    endAt?: boolean | number
    /** Date and time when registrations open */
    startRegistrationsAt?: boolean | number
    /** Date and time when registrations close */
    endRegistrationsAt?: boolean | number
    /** Date and time when the event becomes publicly visible */
    visibleAt?: boolean | number
    /** Event configuration including group, ticketing, and registration settings */
    configuration?: EventConfigurationGenqlSelection
    /** Identifier of the venue where the event takes place */
    eventVenueId?: boolean | number
    /** Identifier of the organization that owns this event */
    organizationId?: boolean | number
    /** Identifier of the account that created this event */
    createdById?: boolean | number
    /** Public decryption key used for verifying ticket QR codes */
    decryptionKey?: boolean | number
    /** The venue where this event is taking place */
    venue?: EventVenueGenqlSelection
    on_Event?: EventGenqlSelection
    on_EventWithUserReservation?: EventWithUserReservationGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Event with the current authenticated user's reservation details */
export interface EventWithUserReservationGenqlSelection{
    /** Unique identifier of the event */
    id?: boolean | number
    /** Display title of the event */
    title?: boolean | number
    /** Detailed description of the event */
    description?: boolean | number
    /** Timestamp when the event was created */
    createdAt?: boolean | number
    /** Timestamp when the event was last updated */
    updatedAt?: boolean | number
    /** Scheduled start date and time of the event */
    startAt?: boolean | number
    /** Scheduled end date and time of the event */
    endAt?: boolean | number
    /** Date and time when registrations open */
    startRegistrationsAt?: boolean | number
    /** Date and time when registrations close */
    endRegistrationsAt?: boolean | number
    /** Date and time when the event becomes publicly visible */
    visibleAt?: boolean | number
    /** Event configuration including group, ticketing, and registration settings */
    configuration?: EventConfigurationGenqlSelection
    /** Identifier of the venue where the event takes place */
    eventVenueId?: boolean | number
    /** Identifier of the organization that owns this event */
    organizationId?: boolean | number
    /** Identifier of the account that created this event */
    createdById?: boolean | number
    /** Public decryption key used for verifying ticket QR codes */
    decryptionKey?: boolean | number
    /** The venue where this event is taking place */
    venue?: EventVenueGenqlSelection
    /** The reservation of the current user for this event */
    myReservation?: EventReservationWithTicketsAndQrCodeGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Paginated list of events */
export interface EventsGenqlSelection{
    /** List of edges containing cursor and node pairs */
    edges?: EventEdgeGenqlSelection
    /** Flat list of items in the current page */
    nodes?: EventGenqlSelection
    /** Pagination metadata for navigating between pages */
    pageInfo?: ResponsePageInfoGenqlSelection
    /** Total number of items across all pages */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An edge in a paginated connection containing a cursor and node */
export interface EventEdgeGenqlSelection{
    /** Opaque cursor string for this edge, used for pagination */
    cursor?: boolean | number
    /** The item at this edge */
    node?: EventGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Configuration of a reservation ticket including custom field values */
export interface EventReservationTicketConfigurationGenqlSelection{
    /** Custom fields with their configured properties and filled values */
    customFields?: PropertyConfigWithValueGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A ticket issued as part of an event reservation */
export interface EventReservationTicketGenqlSelection{
    /** Unique identifier of the reservation ticket */
    id?: boolean | number
    /** Identifier of the ticket configuration this ticket was created from */
    ticketId?: boolean | number
    /** Identifier of the reservation this ticket belongs to */
    reservationId?: boolean | number
    /** Identifier of the group member this ticket is assigned to */
    groupMemberId?: boolean | number
    /** Identifier of the venue seat assigned to this ticket */
    seatId?: boolean | number
    /** Timestamp when the ticket was created */
    createdAt?: boolean | number
    /** Timestamp when the ticket was last updated */
    updatedAt?: boolean | number
    /** Custom field configuration and values for this ticket */
    configuration?: EventReservationTicketConfigurationGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A reservation ticket with an attached QR code for event entry */
export interface EventReservationTicketWithQrCodeGenqlSelection{
    /** Unique identifier of the reservation ticket */
    id?: boolean | number
    /** Identifier of the ticket configuration this ticket was created from */
    ticketId?: boolean | number
    /** Identifier of the reservation this ticket belongs to */
    reservationId?: boolean | number
    /** Identifier of the group member this ticket is assigned to */
    groupMemberId?: boolean | number
    /** Identifier of the venue seat assigned to this ticket */
    seatId?: boolean | number
    /** Timestamp when the ticket was created */
    createdAt?: boolean | number
    /** Timestamp when the ticket was last updated */
    updatedAt?: boolean | number
    /** Custom field configuration and values for this ticket */
    configuration?: EventReservationTicketConfigurationGenqlSelection
    /** Encrypted QR code data for ticket verification at the event */
    qrCode?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Represents a reservation for an event, including group and ticket information */
export interface EventReservationGenqlSelection{
    /** Unique identifier of the reservation */
    id?: boolean | number
    /** Display name of the reservation, typically the group manager's username */
    name?: boolean | number
    /** Current status of the reservation in the registration workflow */
    status?: boolean | number
    /** Expiration timestamp for the current registration session */
    sessionValidUntil?: boolean | number
    /** Timestamp when the reservation was created */
    createdAt?: boolean | number
    /** Timestamp when the reservation was last updated */
    updatedAt?: boolean | number
    /** Identifier of the event this reservation is for */
    eventId?: boolean | number
    /** Identifier of the user group associated with this reservation */
    groupId?: boolean | number
    /** List of tickets included in this reservation */
    tickets?: EventReservationTicketGenqlSelection
    /** Current validation status of the associated user group */
    groupStatus?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Event reservation with tickets that include QR codes for event entry */
export interface EventReservationWithTicketsAndQrCodeGenqlSelection{
    /** Unique identifier of the reservation */
    id?: boolean | number
    /** Display name of the reservation, typically the group manager's username */
    name?: boolean | number
    /** Current status of the reservation in the registration workflow */
    status?: boolean | number
    /** Expiration timestamp for the current registration session */
    sessionValidUntil?: boolean | number
    /** Timestamp when the reservation was created */
    createdAt?: boolean | number
    /** Timestamp when the reservation was last updated */
    updatedAt?: boolean | number
    /** Identifier of the event this reservation is for */
    eventId?: boolean | number
    /** Identifier of the user group associated with this reservation */
    groupId?: boolean | number
    /** Current validation status of the associated user group */
    groupStatus?: boolean | number
    /** List of tickets with QR codes for this reservation */
    tickets?: EventReservationTicketWithQrCodeGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Paginated list of event reservations without ticket details */
export interface EventReservationsGenqlSelection{
    /** List of edges containing cursor and node pairs */
    edges?: OmitObjectTypeEdgeGenqlSelection
    /** Flat list of items in the current page */
    nodes?: OmitObjectTypeGenqlSelection
    /** Pagination metadata for navigating between pages */
    pageInfo?: ResponsePageInfoGenqlSelection
    /** Total number of items across all pages */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An edge in a paginated connection containing a cursor and node */
export interface OmitObjectTypeEdgeGenqlSelection{
    /** Opaque cursor string for this edge, used for pagination */
    cursor?: boolean | number
    /** The item at this edge */
    node?: OmitObjectTypeGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface OmitObjectTypeGenqlSelection{
    /** Unique identifier of the reservation */
    id?: boolean | number
    /** Display name of the reservation, typically the group manager's username */
    name?: boolean | number
    /** Current status of the reservation in the registration workflow */
    status?: boolean | number
    /** Expiration timestamp for the current registration session */
    sessionValidUntil?: boolean | number
    /** Timestamp when the reservation was created */
    createdAt?: boolean | number
    /** Timestamp when the reservation was last updated */
    updatedAt?: boolean | number
    /** Identifier of the event this reservation is for */
    eventId?: boolean | number
    /** Identifier of the user group associated with this reservation */
    groupId?: boolean | number
    /** Current validation status of the associated user group */
    groupStatus?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Payment session details returned after validating a reservation for payment */
export interface EventReservationValidateAndPayGenqlSelection{
    /** Stripe Checkout URL to redirect the user to for payment (hosted mode) */
    paymentUrl?: boolean | number
    /** Stripe client secret for embedded payment UI integration */
    clientSecret?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A venue seat with its current availability status for a specific event */
export interface EventSeatGenqlSelection{
    /** Unique identifier of the seat */
    id?: boolean | number
    /** Display name or label of the seat */
    name?: boolean | number
    /** Timestamp when the seat was created */
    createdAt?: boolean | number
    /** Timestamp when the seat was last updated */
    updatedAt?: boolean | number
    /** Visual configuration of the seat including position and appearance */
    configuration?: EventVenueSeatConfigurationGenqlSelection
    /** Identifier of the seat type this seat belongs to */
    seatTypeId?: boolean | number
    /** Current status of the seat (available, reserved, or sold) */
    status?: boolean | number
    /** Identifier of the ticket that reserved this seat */
    reservedByTicketId?: boolean | number
    /** Identifier of the reservation that holds this seat */
    reservedByReservationId?: boolean | number
    /** Identifier of the group member assigned to this seat */
    reservedByGroupMemberId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Paginated list of event seats with their statuses */
export interface EventSeatsGenqlSelection{
    /** List of edges containing cursor and node pairs */
    edges?: EventSeatEdgeGenqlSelection
    /** Flat list of items in the current page */
    nodes?: EventSeatGenqlSelection
    /** Pagination metadata for navigating between pages */
    pageInfo?: ResponsePageInfoGenqlSelection
    /** Total number of items across all pages */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An edge in a paginated connection containing a cursor and node */
export interface EventSeatEdgeGenqlSelection{
    /** Opaque cursor string for this edge, used for pagination */
    cursor?: boolean | number
    /** The item at this edge */
    node?: EventSeatGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Configuration settings for a venue seat type */
export interface EventVenueSeatTypeConfigurationGenqlSelection{
    /** Arbitrary nonce value for cache-busting or versioning */
    nonce?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A category or type of seats within an event venue (e.g., VIP, standard, standing) */
export interface EventVenueSeatTypeGenqlSelection{
    /** Unique identifier of the seat type */
    id?: boolean | number
    /** Display name of the seat type */
    name?: boolean | number
    /** Detailed description of the seat type */
    description?: boolean | number
    /** Configuration settings for this seat type */
    configuration?: EventVenueSeatTypeConfigurationGenqlSelection
    /** Timestamp when the seat type was created */
    createdAt?: boolean | number
    /** Timestamp when the seat type was last updated */
    updatedAt?: boolean | number
    /** Identifier of the venue this seat type belongs to */
    venueId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Paginated list of venue seat types */
export interface EventVenueSeatTypesGenqlSelection{
    /** List of edges containing cursor and node pairs */
    edges?: EventVenueSeatTypeEdgeGenqlSelection
    /** Flat list of items in the current page */
    nodes?: EventVenueSeatTypeGenqlSelection
    /** Pagination metadata for navigating between pages */
    pageInfo?: ResponsePageInfoGenqlSelection
    /** Total number of items across all pages */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An edge in a paginated connection containing a cursor and node */
export interface EventVenueSeatTypeEdgeGenqlSelection{
    /** Opaque cursor string for this edge, used for pagination */
    cursor?: boolean | number
    /** The item at this edge */
    node?: EventVenueSeatTypeGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Configuration settings for an event venue */
export interface EventVenueConfigurationGenqlSelection{
    /** URL or S3 key of the venue image */
    imageUrl?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A physical venue where events take place */
export interface EventVenueGenqlSelection{
    /** Unique identifier of the venue */
    id?: boolean | number
    /** Display name of the venue */
    name?: boolean | number
    /** Detailed description of the venue */
    description?: boolean | number
    /** Street address of the venue */
    address?: boolean | number
    /** City where the venue is located */
    city?: boolean | number
    /** State or province where the venue is located */
    state?: boolean | number
    /** Country where the venue is located */
    country?: boolean | number
    /** Postal or ZIP code of the venue */
    postalCode?: boolean | number
    /** Timestamp when the venue was created */
    createdAt?: boolean | number
    /** Timestamp when the venue was last updated */
    updatedAt?: boolean | number
    /** Venue configuration including image settings */
    configuration?: EventVenueConfigurationGenqlSelection
    /** Identifier of the organization that owns this venue */
    organizationId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Paginated list of event venues */
export interface EventVenuesGenqlSelection{
    /** List of edges containing cursor and node pairs */
    edges?: EventVenueEdgeGenqlSelection
    /** Flat list of items in the current page */
    nodes?: EventVenueGenqlSelection
    /** Pagination metadata for navigating between pages */
    pageInfo?: ResponsePageInfoGenqlSelection
    /** Total number of items across all pages */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An edge in a paginated connection containing a cursor and node */
export interface EventVenueEdgeGenqlSelection{
    /** Opaque cursor string for this edge, used for pagination */
    cursor?: boolean | number
    /** The item at this edge */
    node?: EventVenueGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Configuration for a ticket type including custom fields that attendees must fill */
export interface EventTicketConfigurationConfigurationGenqlSelection{
    /** Custom fields that attendees must fill when purchasing this ticket type */
    customFields?: PropertyGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A ticket type configuration for an event, defining pricing, availability, and custom fields */
export interface EventTicketConfigurationGenqlSelection{
    /** Unique identifier of the ticket configuration */
    id?: boolean | number
    /** Display name of the ticket type */
    name?: boolean | number
    /** Description of what this ticket type includes */
    description?: boolean | number
    /** Timestamp when the ticket configuration was created */
    createdAt?: boolean | number
    /** Timestamp when the ticket configuration was last updated */
    updatedAt?: boolean | number
    /** Price of the ticket in the smallest currency unit (e.g., cents) */
    price?: boolean | number
    /** Currency code for the ticket price */
    currency?: boolean | number
    /** Maximum number of tickets available for this configuration */
    maxCount?: boolean | number
    /** Current number of tickets that have been sold or reserved */
    currentCount?: boolean | number
    /** Whether this ticket type is currently available for purchase */
    buyable?: boolean | number
    /** Identifier of the event this ticket configuration belongs to */
    eventId?: boolean | number
    /** Identifier of the venue seat type associated with this ticket */
    seatTypeId?: boolean | number
    /** Additional configuration including custom fields for this ticket type */
    configuration?: EventTicketConfigurationConfigurationGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Represents a virtual item that can be assigned to players */
export interface ItemGenqlSelection{
    /** Unique identifier of the item */
    id?: boolean | number
    /** Display name of the item */
    name?: boolean | number
    /** External identifier for third-party system integration */
    externalId?: boolean | number
    /** Detailed description of the item */
    description?: boolean | number
    /** Custom metadata key-value pairs associated with the item */
    metadata?: PropertyValueGenqlSelection
    /** Timestamp when the item was created */
    createdAt?: boolean | number
    /** Timestamp when the item was last updated */
    updatedAt?: boolean | number
    /** ID of the organization this item belongs to */
    organizationId?: boolean | number
    /** ID of the category this item is assigned to */
    categoryId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Paginated list of items */
export interface ItemsGenqlSelection{
    /** List of edges containing cursor and node pairs */
    edges?: ItemEdgeGenqlSelection
    /** Flat list of items in the current page */
    nodes?: ItemGenqlSelection
    /** Pagination metadata for navigating between pages */
    pageInfo?: ResponsePageInfoGenqlSelection
    /** Total number of items across all pages */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An edge in a paginated connection containing a cursor and node */
export interface ItemEdgeGenqlSelection{
    /** Opaque cursor string for this edge, used for pagination */
    cursor?: boolean | number
    /** The item at this edge */
    node?: ItemGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Represents an item owned by a player with a quantity */
export interface PlayerItemGenqlSelection{
    /** Unique identifier of the player item record */
    id?: boolean | number
    /** ID of the player profile that owns this item */
    playerProfileId?: boolean | number
    /** ID of the item definition */
    itemId?: boolean | number
    /** Timestamp when this player item was created */
    createdAt?: boolean | number
    /** Timestamp when this player item was last updated */
    updatedAt?: boolean | number
    /** Custom metadata key-value pairs for this player item */
    metadata?: PropertyValueGenqlSelection
    /** Number of this item the player owns */
    quantity?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Paginated list of player items */
export interface PlayerItemsGenqlSelection{
    /** List of edges containing cursor and node pairs */
    edges?: PlayerItemEdgeGenqlSelection
    /** Flat list of items in the current page */
    nodes?: PlayerItemGenqlSelection
    /** Pagination metadata for navigating between pages */
    pageInfo?: ResponsePageInfoGenqlSelection
    /** Total number of items across all pages */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An edge in a paginated connection containing a cursor and node */
export interface PlayerItemEdgeGenqlSelection{
    /** Opaque cursor string for this edge, used for pagination */
    cursor?: boolean | number
    /** The item at this edge */
    node?: PlayerItemGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Represents a category used to organize items */
export interface ItemCategoryGenqlSelection{
    /** Unique identifier of the item category */
    id?: boolean | number
    /** Display name of the category */
    name?: boolean | number
    /** External identifier for third-party system integration */
    externalId?: boolean | number
    /** Detailed description of the category */
    description?: boolean | number
    /** Custom metadata key-value pairs associated with the category */
    metadata?: PropertyValueGenqlSelection
    /** Timestamp when the category was created */
    createdAt?: boolean | number
    /** Timestamp when the category was last updated */
    updatedAt?: boolean | number
    /** ID of the organization this category belongs to */
    organizationId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Paginated list of item categories */
export interface ItemCategoriesGenqlSelection{
    /** List of edges containing cursor and node pairs */
    edges?: ItemCategoryEdgeGenqlSelection
    /** Flat list of items in the current page */
    nodes?: ItemCategoryGenqlSelection
    /** Pagination metadata for navigating between pages */
    pageInfo?: ResponsePageInfoGenqlSelection
    /** Total number of items across all pages */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An edge in a paginated connection containing a cursor and node */
export interface ItemCategoryEdgeGenqlSelection{
    /** Opaque cursor string for this edge, used for pagination */
    cursor?: boolean | number
    /** The item at this edge */
    node?: ItemCategoryGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Represents an audit log entry for tracking actions within the organization */
export interface LogGenqlSelection{
    /** Unique identifier of the log entry */
    id?: boolean | number
    /** Type of action that was logged */
    type?: boolean | number
    /** ID of the resource this log entry is associated with */
    resourceId?: boolean | number
    /** Structured data payload of the log entry */
    data?: LogDataGenqlSelection
    /** ID of the organization this log belongs to */
    organizationId?: boolean | number
    /** Timestamp when the log entry was created */
    createdAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Paginated list of audit log entries */
export interface LogsGenqlSelection{
    /** List of edges containing cursor and node pairs */
    edges?: LogEdgeGenqlSelection
    /** Flat list of items in the current page */
    nodes?: LogGenqlSelection
    /** Pagination metadata for navigating between pages */
    pageInfo?: ResponsePageInfoGenqlSelection
    /** Total number of items across all pages */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An edge in a paginated connection containing a cursor and node */
export interface LogEdgeGenqlSelection{
    /** Opaque cursor string for this edge, used for pagination */
    cursor?: boolean | number
    /** The item at this edge */
    node?: LogGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A published app listing in the marketplace */
export interface MarketplaceAppGenqlSelection{
    /** Unique identifier of the marketplace app */
    id?: boolean | number
    /** ID of the underlying organization app */
    organizationAppId?: boolean | number
    /** Current publication status of the app */
    status?: boolean | number
    /** App manifest describing capabilities and configuration */
    manifest?: AppManifestModelGenqlSelection
    /** Display name of the marketplace app */
    name?: boolean | number
    /** Full description of the app */
    description?: boolean | number
    /** Short summary displayed on app cards */
    shortDescription?: boolean | number
    /** URL of the app icon image */
    icon?: boolean | number
    /** URLs of app screenshot images */
    screenshots?: boolean | number
    /** Category tags for filtering and discovery */
    categories?: boolean | number
    /** Current semantic version of the app */
    version?: boolean | number
    /** URL to the app privacy policy */
    privacyPolicyUrl?: boolean | number
    /** URL to the app support page */
    supportUrl?: boolean | number
    /** URL to the app website */
    websiteUrl?: boolean | number
    /** Timestamp when the app was first published */
    createdAt?: boolean | number
    /** Timestamp when the app listing was last updated */
    updatedAt?: boolean | number
    /** Reviews for this marketplace app */
    reviews?: (MarketplaceAppReviewsGenqlSelection & { __args?: {page?: (PageInfo | null)} })
    /** Aggregated stats for this marketplace app */
    stats?: MarketplaceAppStatsGenqlSelection
    /** Current organization installation of this app, if any */
    installation?: MarketplaceAppInstallationGenqlSelection
    /** Pricing information for this marketplace app */
    pricing?: MarketplaceAppPricingGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Paginated list of marketplace apps */
export interface MarketplaceAppsGenqlSelection{
    /** List of edges containing cursor and node pairs */
    edges?: MarketplaceAppEdgeGenqlSelection
    /** Flat list of items in the current page */
    nodes?: MarketplaceAppGenqlSelection
    /** Pagination metadata for navigating between pages */
    pageInfo?: ResponsePageInfoGenqlSelection
    /** Total number of items across all pages */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An edge in a paginated connection containing a cursor and node */
export interface MarketplaceAppEdgeGenqlSelection{
    /** Opaque cursor string for this edge, used for pagination */
    cursor?: boolean | number
    /** The item at this edge */
    node?: MarketplaceAppGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A user review and rating for a marketplace app */
export interface MarketplaceAppReviewGenqlSelection{
    /** Unique identifier of the review */
    id?: boolean | number
    /** ID of the marketplace app being reviewed */
    marketplaceAppId?: boolean | number
    /** ID of the organization that submitted the review */
    organizationId?: boolean | number
    /** ID of the account that authored the review */
    accountId?: boolean | number
    /** Star rating from 1 to 5 */
    rating?: boolean | number
    /** Review title */
    title?: boolean | number
    /** Review body text */
    body?: boolean | number
    /** Timestamp when the review was created */
    createdAt?: boolean | number
    /** Timestamp when the review was last updated */
    updatedAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Paginated list of marketplace app reviews */
export interface MarketplaceAppReviewsGenqlSelection{
    /** List of edges containing cursor and node pairs */
    edges?: MarketplaceAppReviewEdgeGenqlSelection
    /** Flat list of items in the current page */
    nodes?: MarketplaceAppReviewGenqlSelection
    /** Pagination metadata for navigating between pages */
    pageInfo?: ResponsePageInfoGenqlSelection
    /** Total number of items across all pages */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An edge in a paginated connection containing a cursor and node */
export interface MarketplaceAppReviewEdgeGenqlSelection{
    /** Opaque cursor string for this edge, used for pagination */
    cursor?: boolean | number
    /** The item at this edge */
    node?: MarketplaceAppReviewGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A marketplace app installation within an organization */
export interface MarketplaceAppInstallationGenqlSelection{
    /** Unique identifier of the installation */
    id?: boolean | number
    /** ID of the installed marketplace app */
    marketplaceAppId?: boolean | number
    /** ID of the organization where the app is installed */
    organizationId?: boolean | number
    /** ID of the account that performed the installation */
    installedById?: boolean | number
    /** Current status of the installation */
    status?: boolean | number
    /** Permissions granted to this app by the organization (OrganizationPermission IDs) */
    grantedPermissions?: boolean | number
    /** Timestamp when the app was installed */
    createdAt?: boolean | number
    /** Timestamp when the installation was last updated */
    updatedAt?: boolean | number
    /** The marketplace app for this installation */
    marketplaceApp?: MarketplaceAppGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Paginated list of marketplace app installations */
export interface MarketplaceAppInstallationsGenqlSelection{
    /** List of edges containing cursor and node pairs */
    edges?: MarketplaceAppInstallationEdgeGenqlSelection
    /** Flat list of items in the current page */
    nodes?: MarketplaceAppInstallationGenqlSelection
    /** Pagination metadata for navigating between pages */
    pageInfo?: ResponsePageInfoGenqlSelection
    /** Total number of items across all pages */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An edge in a paginated connection containing a cursor and node */
export interface MarketplaceAppInstallationEdgeGenqlSelection{
    /** Opaque cursor string for this edge, used for pagination */
    cursor?: boolean | number
    /** The item at this edge */
    node?: MarketplaceAppInstallationGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Aggregated statistics for a marketplace app */
export interface MarketplaceAppStatsGenqlSelection{
    /** Total number of active installations across all organizations */
    totalInstallations?: boolean | number
    /** Average star rating from all reviews */
    averageRating?: boolean | number
    /** Total number of reviews submitted for this app */
    totalReviews?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Pricing configuration for a marketplace app */
export interface MarketplaceAppPricingGenqlSelection{
    /** Unique identifier of the pricing record */
    id?: boolean | number
    /** ID of the marketplace app this pricing applies to */
    marketplaceAppId?: boolean | number
    /** Pricing model type (e.g. one-time, subscription, free) */
    type?: boolean | number
    /** Price amount in the smallest currency unit (e.g. cents) */
    priceAmountCents?: boolean | number
    /** ISO 4217 currency code */
    currency?: boolean | number
    /** Number of free trial days for subscription pricing */
    trialDays?: boolean | number
    /** Timestamp when the pricing was created */
    createdAt?: boolean | number
    /** Timestamp when the pricing was last updated */
    updatedAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A single configuration property for a platform module */
export interface ModuleConfigPropGenqlSelection{
    /** Configuration property key */
    key?: boolean | number
    /** Configuration property value (serialized as string) */
    value?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Configuration for a platform module installed from the marketplace */
export interface PlatformModuleConfigGenqlSelection{
    /** Unique identifier */
    id?: boolean | number
    /** Platform this config belongs to */
    platformId?: boolean | number
    /** Marketplace app that provides this module */
    marketplaceAppId?: boolean | number
    /** Module name within the app */
    moduleName?: boolean | number
    /** Module configuration props as key-value pairs */
    props?: ModuleConfigPropGenqlSelection
    /** When the config was created */
    createdAt?: boolean | number
    /** When the config was last updated */
    updatedAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ModuleTokenDtoGenqlSelection{
    appId?: boolean | number
    marketplaceAppId?: boolean | number
    moduleName?: boolean | number
    displayName?: boolean | number
    token?: boolean | number
    /** S3 CDN path for the module bundle */
    cdnPath?: boolean | number
    exportName?: boolean | number
    version?: boolean | number
    propsSchema?: FrontendModulePropSchemaModelGenqlSelection
    events?: FrontendModuleEventModelGenqlSelection
    grantedPermissions?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ExtensionTokenDtoGenqlSelection{
    token?: boolean | number
    marketplaceAppId?: boolean | number
    appId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A key-value metafield attached to an entity by a marketplace app */
export interface EntityMetafieldGenqlSelection{
    /** Unique identifier of the metafield */
    id?: boolean | number
    /** ID of the organization that owns this metafield */
    organizationId?: boolean | number
    /** ID of the app that created this metafield */
    appId?: boolean | number
    /** Namespace scoping this metafield to a specific app */
    namespace?: boolean | number
    /** Type of entity this metafield is attached to */
    entityType?: boolean | number
    /** ID of the entity this metafield is attached to */
    entityId?: boolean | number
    /** Key name for this metafield within the namespace */
    key?: boolean | number
    /** JSON-serialized value */
    value?: boolean | number
    /** Timestamp when the metafield was created */
    createdAt?: boolean | number
    /** Timestamp when the metafield was last updated */
    updatedAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A typed metadata entry attached to an organization object */
export interface ObjectMetadataGenqlSelection{
    /** Key name for this metadata entry */
    key?: boolean | number
    /** Value of the metadata entry */
    value?: boolean | number
    /** Type of the metadata value (STRING, BOOLEAN, IMAGE_URL, URL) */
    type?: boolean | number
    /** Visibility of the metadata entry (PUBLIC or PRIVATE) */
    visibility?: boolean | number
    /** Prisma model name of the object this metadata is attached to */
    objectType?: boolean | number
    /** Short ID of the object this metadata is attached to */
    objectId?: boolean | number
    /** Timestamp when the metadata entry was created */
    createdAt?: boolean | number
    /** Timestamp when the metadata entry was last updated */
    updatedAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Metadata entries grouped by object ID for batch queries */
export interface ObjectMetadataBatchResultGenqlSelection{
    /** ID of the object */
    objectId?: boolean | number
    /** Metadata entries for this object */
    entries?: ObjectMetadataGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A label/value pair option for SELECT or MULTI_SELECT custom fields */
export interface CustomFieldOptionModelGenqlSelection{
    /** Human-readable label for this option */
    label?: boolean | number
    /** Stored value for this option */
    value?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Definition of a custom field attached to an organization and object type */
export interface CustomFieldDefinitionModelGenqlSelection{
    /** Unique identifier of the custom field definition */
    id?: boolean | number
    /** Type of object this field is attached to (e.g. Tournament, Account) */
    objectType?: boolean | number
    /** Unique key identifier for this field within the object type */
    key?: boolean | number
    /** Human-readable display name of the field */
    name?: boolean | number
    /** Optional description explaining the purpose of this field */
    description?: boolean | number
    /** Data type of the field value */
    type?: boolean | number
    /** Whether this field must be filled in */
    required?: boolean | number
    /** Whether the value must be unique across all objects of this type */
    unique?: boolean | number
    /** Display order position of this field */
    order?: boolean | number
    /** Visibility level controlling who can view this field value */
    visibility?: boolean | number
    /** Editability rule controlling when and by whom this field can be modified */
    editability?: boolean | number
    /** Available options for SELECT or MULTI_SELECT fields */
    options?: CustomFieldOptionModelGenqlSelection
    /** Default value applied when no value is provided */
    defaultValue?: boolean | number
    /** Optional regex pattern the value must match */
    validationRegex?: boolean | number
    /** Timestamp when the definition was created */
    createdAt?: boolean | number
    /** Timestamp when the definition was last updated */
    updatedAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A custom field definition paired with its current value for a specific object */
export interface CustomFieldWithValueModelGenqlSelection{
    /** The field definition */
    definition?: CustomFieldDefinitionModelGenqlSelection
    /** Current value of this field for the object */
    value?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Custom field values grouped by object ID for batch queries */
export interface CustomFieldValuesBatchResultModelGenqlSelection{
    /** ID of the object */
    objectId?: boolean | number
    /** Custom field values for this object */
    fields?: CustomFieldWithValueModelGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A custom domain associated with a platform, including its DNS and SSL configuration status */
export interface PlatformCustomDomainDataGenqlSelection{
    /** The custom domain hostname */
    domain?: boolean | number
    /** The Cloudflare custom domain configuration and validation status */
    configuration?: CustomDomainDataGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Social media links for a platform theme */
export interface PlatformThemeSocialLinksModelGenqlSelection{
    /** Twitter/X profile URL */
    twitter?: boolean | number
    /** Discord server invite URL */
    discord?: boolean | number
    /** Twitch channel URL */
    twitch?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Configuration for a platform homepage section */
export interface PlatformThemeSectionConfigModelGenqlSelection{
    /** Section identifier name */
    name?: boolean | number
    /** Whether the section is visible on the platform */
    visible?: boolean | number
    /** Display order of the section */
    order?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Configuration options for a platform instance */
export interface PlatformConfigurationGenqlSelection{
    /** Whether to enable white-label mode, removing WellPlayed branding */
    whitelabel?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A platform instance representing a hosted website for an organization */
export interface PlatformGenqlSelection{
    /** Unique identifier of the platform */
    id?: boolean | number
    /** Display name of the platform */
    name?: boolean | number
    /** When this platform was created */
    createdAt?: boolean | number
    /** When this platform was last updated */
    updatedAt?: boolean | number
    /** Platform configuration settings including white-label options */
    configuration?: PlatformConfigurationGenqlSelection
    /** The organization this platform belongs to */
    organizationId?: boolean | number
    /** The OAuth application ID associated with this platform */
    appId?: boolean | number
    /** The custom domains configured for this platform */
    customDomains?: PlatformCustomDomainDataGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A reusable template that can be applied to platforms, containing predefined CDN files and configurations */
export interface PlatformTemplateGenqlSelection{
    /** Unique identifier of the template */
    id?: boolean | number
    /** Display name of the template */
    name?: boolean | number
    /** Human-readable description of the template */
    description?: boolean | number
    /** URL of the template preview screenshot */
    screenshotUrl?: boolean | number
    /** When this template was created */
    createdAt?: boolean | number
    /** When this template was last updated */
    updatedAt?: boolean | number
    /** The account ID of the template creator */
    ownerId?: boolean | number
    /** The organization this template belongs to */
    organizationId?: boolean | number
    /** Whether this template is publicly available to all organizations */
    public?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Analytics data for real-time user presence sessions within an organization */
export interface PresenceAnalyticsGenqlSelection{
    /** The total number of active sessions (authenticated and anonymous combined) */
    totalSessions?: boolean | number
    /** The number of active sessions from authenticated users */
    authenticatedSessions?: boolean | number
    /** The number of active sessions from anonymous (unauthenticated) users */
    anonymousSessions?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Represents a user connection event in the presence system */
export interface UserConnectionEventGenqlSelection{
    /** The unique session identifier */
    sessionId?: boolean | number
    /** The ID of the server handling this session */
    serverId?: boolean | number
    /** The player profile ID associated with this session, if any */
    playerId?: boolean | number
    /** The account ID associated with this session, if authenticated */
    accountId?: boolean | number
    /** The organization ID this session belongs to */
    organizationId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Event payload containing a batch of user connection events */
export interface UsersConnectedEventGenqlSelection{
    /** The list of users who connected */
    usersConnected?: UserConnectionEventGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Represents a user disconnection event in the presence system */
export interface UserDisconnectEventGenqlSelection{
    /** The unique session identifier */
    sessionId?: boolean | number
    /** The ID of the server handling this session */
    serverId?: boolean | number
    /** The player profile ID associated with this session, if any */
    playerId?: boolean | number
    /** The account ID associated with this session, if authenticated */
    accountId?: boolean | number
    /** The organization ID this session belongs to */
    organizationId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Event payload containing a batch of user disconnection events */
export interface UsersDisconnectedEventGenqlSelection{
    /** The list of users who disconnected */
    usersDisconnected?: UserDisconnectEventGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Payment session information returned after initiating a shop purchase */
export interface PaymentUrlAndClientSecretGenqlSelection{
    /** The Stripe checkout URL for redirect-based payment flows */
    paymentUrl?: boolean | number
    /** The Stripe client secret for embedded payment flows */
    clientSecret?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A record of a player purchasing a shop product */
export interface PlayerShopProductPurshaseGenqlSelection{
    /** The unique identifier of the purchase record */
    id?: boolean | number
    /** The ID of the player who made the purchase */
    playerProfileId?: boolean | number
    /** The ID of the shop product that was purchased */
    shopProductId?: boolean | number
    /** The quantity of the product purchased */
    quantity?: boolean | number
    /** The date and time the purchase was made */
    createdAt?: boolean | number
    /** The date and time the purchase record was last updated */
    updatedAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Paginated list of player shop product purchases */
export interface PlayerShopProductPurshasesDtoGenqlSelection{
    /** List of edges containing cursor and node pairs */
    edges?: PlayerShopProductPurshaseEdgeGenqlSelection
    /** Flat list of items in the current page */
    nodes?: PlayerShopProductPurshaseGenqlSelection
    /** Pagination metadata for navigating between pages */
    pageInfo?: ResponsePageInfoGenqlSelection
    /** Total number of items across all pages */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An edge in a paginated connection containing a cursor and node */
export interface PlayerShopProductPurshaseEdgeGenqlSelection{
    /** Opaque cursor string for this edge, used for pagination */
    cursor?: boolean | number
    /** The item at this edge */
    node?: PlayerShopProductPurshaseGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A category within a shop used to organize products */
export interface ShopCategoryGenqlSelection{
    /** The unique identifier of the shop category */
    id?: boolean | number
    /** An optional external identifier for integrations */
    externalId?: boolean | number
    /** The display name of the category */
    name?: boolean | number
    /** A text description of the category */
    description?: boolean | number
    /** Custom metadata key-value pairs associated with the category */
    metadata?: PropertyValueGenqlSelection
    /** The date and time the category was created */
    createdAt?: boolean | number
    /** The date and time the category was last updated */
    updatedAt?: boolean | number
    /** The ID of the shop this category belongs to */
    shopId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Paginated list of shop categories */
export interface ShopCategoriesGenqlSelection{
    /** List of edges containing cursor and node pairs */
    edges?: ShopCategoryEdgeGenqlSelection
    /** Flat list of items in the current page */
    nodes?: ShopCategoryGenqlSelection
    /** Pagination metadata for navigating between pages */
    pageInfo?: ResponsePageInfoGenqlSelection
    /** Total number of items across all pages */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An edge in a paginated connection containing a cursor and node */
export interface ShopCategoryEdgeGenqlSelection{
    /** Opaque cursor string for this edge, used for pagination */
    cursor?: boolean | number
    /** The item at this edge */
    node?: ShopCategoryGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Configuration constraints for purchasing a shop product */
export interface ShopProductConfigurationGenqlSelection{
    /** The minimum quantity allowed per purchase */
    minQuantity?: boolean | number
    /** The maximum quantity allowed per purchase */
    maxQuantity?: boolean | number
    /** The maximum total quantity a player can buy across all purchases */
    maxBoughtQuantity?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An entity-quantity pair representing a referenced entity and its associated quantity */
export interface EntityQuantityGenqlSelection{
    /** The ID of the referenced entity */
    id?: boolean | number
    /** The quantity associated with this entity */
    quantity?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A shop item with its type, reference, and quantity */
export interface ShopItemQuantityGenqlSelection{
    /** The type of the shop item (ITEM or CURRENCY) */
    type?: boolean | number
    /** The ID of the item or currency */
    id?: boolean | number
    /** The quantity of the item included in the product */
    quantity?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A product available for purchase within a shop */
export interface ShopProductGenqlSelection{
    /** The unique identifier of the shop product */
    id?: boolean | number
    /** The display name of the product */
    name?: boolean | number
    /** An optional external identifier for integrations */
    externalId?: boolean | number
    /** A text description of the product */
    description?: boolean | number
    /** The ID of the category this product belongs to */
    categoryId?: boolean | number
    /** The real-money price of the product in the specified currency */
    price?: boolean | number
    /** Purchase constraints such as min/max quantities */
    configuration?: ShopProductConfigurationGenqlSelection
    /** Custom metadata key-value pairs associated with the product */
    metadata?: PropertyValueGenqlSelection
    /** The date and time the product was created */
    createdAt?: boolean | number
    /** The date and time the product was last updated */
    updatedAt?: boolean | number
    /** The date and time after which the product becomes visible */
    visibleAt?: boolean | number
    /** The ID of the shop this product belongs to */
    shopId?: boolean | number
    /** The real-money currency code for the product price */
    currency?: boolean | number
    /** The items and currencies bundled with this product */
    items?: ShopItemQuantityGenqlSelection
    /** The in-game currency prices for purchasing this product */
    currencyPrices?: EntityQuantityGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Paginated list of shop products */
export interface ShopProductsGenqlSelection{
    /** List of edges containing cursor and node pairs */
    edges?: ShopProductEdgeGenqlSelection
    /** Flat list of items in the current page */
    nodes?: ShopProductGenqlSelection
    /** Pagination metadata for navigating between pages */
    pageInfo?: ResponsePageInfoGenqlSelection
    /** Total number of items across all pages */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An edge in a paginated connection containing a cursor and node */
export interface ShopProductEdgeGenqlSelection{
    /** Opaque cursor string for this edge, used for pagination */
    cursor?: boolean | number
    /** The item at this edge */
    node?: ShopProductGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A shop belonging to an organization for selling products */
export interface ShopGenqlSelection{
    /** The unique identifier of the shop */
    id?: boolean | number
    /** An optional external identifier for integrations */
    externalId?: boolean | number
    /** The display name of the shop */
    name?: boolean | number
    /** A text description of the shop */
    description?: boolean | number
    /** The date and time the shop was created */
    createdAt?: boolean | number
    /** The date and time the shop was last updated */
    updatedAt?: boolean | number
    /** The ID of the organization this shop belongs to */
    organizationId?: boolean | number
    /** Custom metadata key-value pairs associated with the shop */
    metadata?: PropertyValueGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Paginated list of shops */
export interface ShopsGenqlSelection{
    /** List of edges containing cursor and node pairs */
    edges?: ShopEdgeGenqlSelection
    /** Flat list of items in the current page */
    nodes?: ShopGenqlSelection
    /** Pagination metadata for navigating between pages */
    pageInfo?: ResponsePageInfoGenqlSelection
    /** Total number of items across all pages */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An edge in a paginated connection containing a cursor and node */
export interface ShopEdgeGenqlSelection{
    /** Opaque cursor string for this edge, used for pagination */
    cursor?: boolean | number
    /** The item at this edge */
    node?: ShopGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An individual item or currency within a shop product bundle */
export interface ShopProductItemGenqlSelection{
    /** The unique identifier of the shop product item */
    id?: boolean | number
    /** The ID of the currency, if this item is of type CURRENCY */
    currencyId?: boolean | number
    /** The date and time this item entry was created */
    createdAt?: boolean | number
    /** The date and time this item entry was last updated */
    updatedAt?: boolean | number
    /** The type of the shop item (ITEM or CURRENCY) */
    type?: boolean | number
    /** The ID of the parent shop product */
    shopItemId?: boolean | number
    /** The ID of the item, if this item is of type ITEM */
    itemId?: boolean | number
    /** The quantity of this item included in the product */
    quantity?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Paginated list of shop product items */
export interface ShopProductItemsGenqlSelection{
    /** List of edges containing cursor and node pairs */
    edges?: ShopProductItemEdgeGenqlSelection
    /** Flat list of items in the current page */
    nodes?: ShopProductItemGenqlSelection
    /** Pagination metadata for navigating between pages */
    pageInfo?: ResponsePageInfoGenqlSelection
    /** Total number of items across all pages */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An edge in a paginated connection containing a cursor and node */
export interface ShopProductItemEdgeGenqlSelection{
    /** Opaque cursor string for this edge, used for pagination */
    cursor?: boolean | number
    /** The item at this edge */
    node?: ShopProductItemGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Configuration settings for a skill rating */
export interface SkillRatingConfigurationGenqlSelection{
    /** Optional leaderboard ID to automatically update when match results are registered */
    updateLeaderboardId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Result of a skill rating update for an individual player after a match */
export interface OrganizationSkillRatingsRegisterMatchPlayerGenqlSelection{
    /** Player profile ID */
    id?: boolean | number
    /** New skill rating value after the match */
    newValue?: boolean | number
    /** Previous skill rating value before the match */
    oldValue?: boolean | number
    /** Points added or subtracted from the linked leaderboard, if configured */
    leaderboardPointsUpdate?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A skill rating configuration belonging to an organization */
export interface OrganizationSkillRatingGenqlSelection{
    /** Unique identifier of the skill rating */
    id?: boolean | number
    /** Display name of the skill rating */
    name?: boolean | number
    /** Description of what this skill rating measures */
    description?: boolean | number
    /** Algorithm type used for rating calculation */
    type?: boolean | number
    /** Configuration options for this skill rating */
    configuration?: SkillRatingConfigurationGenqlSelection
    /** ID of the organization that owns this skill rating */
    organizationId?: boolean | number
    /** Timestamp when the skill rating was created */
    createdAt?: boolean | number
    /** Timestamp when the skill rating was last updated */
    updatedAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An override for an organization limit provided by a subscription item */
export interface LimitOverrideGenqlSelection{
    /** The limit type being overridden */
    limit?: boolean | number
    /** The override value for this limit */
    value?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A purchasable subscription item that provides limit overrides to an organization */
export interface SubscriptionItemGenqlSelection{
    /** Unique identifier of the subscription item */
    id?: boolean | number
    /** Display name of the subscription item */
    name?: boolean | number
    /** Description of what this subscription item provides */
    description?: boolean | number
    /** List of organization limit overrides granted by this item */
    limitsOverride?: LimitOverrideGenqlSelection
    /** Maximum quantity of this item an organization can purchase */
    maxCount?: boolean | number
    /** Price of the subscription item in cents */
    price?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A subscription item currently active for an organization */
export interface OrganizationSubscriptionItemGenqlSelection{
    /** ID of the organization that owns this subscription */
    organizationId?: boolean | number
    /** ID of the subscription item */
    subscriptionItemId?: boolean | number
    /** Quantity of this subscription item purchased */
    count?: boolean | number
    /** Timestamp when the subscription item was first activated */
    createdAt?: boolean | number
    /** Timestamp when the subscription item expires */
    endAt?: boolean | number
    /** Timestamp when the subscription item was last modified */
    updatedAt?: boolean | number
    /** Resolve the subscription item details for an organization subscription item */
    subscriptionItem?: SubscriptionItemGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Input for defining a key mapping from source path to target */
export interface KeyMappingInput {
/** The dot-notation path to the source value in the object */
path: Scalars['String'],
/** The target key name to map the value to */
mappedTo: Scalars['String'],
/** Whether this mapped value should be treated as private */
private?: (Scalars['Boolean'] | null)}


/** Input for defining property mapping configuration */
export interface MappingConfigurationInput {
/** The list of key mappings to apply */
mappings: KeyMappingInput[]}

export interface HeaderInput {
/** Name of the HTTP header */
name: Scalars['String'],
/** Value of the HTTP header */
value: Scalars['String']}

export interface DataRetrievalConfigInput {
/** URL of the external endpoint to fetch user data from */
url: Scalars['String'],
/** HTTP headers to include in the data retrieval request */
headers: HeaderInput[],
/** Configuration for mapping retrieved data fields to player profile properties */
mappingConfiguration: MappingConfigurationInput}


/** Input for specifying a permission with its resource scopes */
export interface GroupPermissionInput {
/** The permission identifier */
id: Scalars['String'],
/** Resource identifiers this permission is scoped to */
resources: Scalars['String'][]}

export interface PropertyInput {
/** Unique key identifier for this property */
property: Scalars['String'],
/** Human-readable display name of the property */
name: Scalars['String'],
/** Data type of the property value (e.g. STRING, DATE, EMAIL) */
type: PropertyType,
/** Whether this property must be filled in */
required: Scalars['Boolean'],
/** Display order position of this property */
order: Scalars['Float'],
/** Whether the value must be unique across all entities */
unique: Scalars['Boolean'],
/** Whether the property is publicly visible (deprecated, use visibility instead) */
public?: (Scalars['Boolean'] | null),
/** Visibility level controlling who can view this property value */
visibility?: (PropertyVisibility | null),
/** Editability rule controlling when and by whom this property can be modified */
editability?: (ProperyEditability | null)}

export interface PropertyValueInput {
/** Key identifier of the property */
property: Scalars['String'],
/** Value assigned to the property */
value: Scalars['String']}


/** Input for a match scoring variable */
export interface MatchVariableInput {
/** Name used in score formulas to reference this variable */
formulaName: Scalars['String'],
/** Human-readable display name for the variable */
displayName: Scalars['String'],
/** Optional icon identifier for display purposes */
displayIcon?: (Scalars['String'] | null),
/** Default numeric value when no input is provided */
defaultValue: Scalars['Float']}


/** Input for match scoring configuration */
export interface MatchConfigurationInput {
/** List of variables available for score calculation */
variables: MatchVariableInput[],
/** Formula expression used to compute the match score */
scoreFormula?: (Scalars['String'] | null)}


/** Input for game-level configuration within a round */
export interface GameConfigurationInput {
/** Number of match wins required to win the game (best-of format) */
wonMatchCountToWinGame: Scalars['Float'],
/** Whether individual match scores are aggregated as the game score */
useMatchScoresAsGameScore: Scalars['Boolean'],
/** Number of teams participating in each game */
teamsCount: Scalars['Float'],
/** Scoring configuration for matches within this game */
matchConfiguration: MatchConfigurationInput}


/** Input for a score configuration variable */
export interface VariableInput {
/** Name of the variable used in formulas */
name: Scalars['String'],
/** Default numeric value for the variable */
defaultValue: Scalars['Float']}


/** Input for a single round within a group */
export interface RoundConfigurationInput {
/** Game configuration for this round */
game: GameConfigurationInput,
/** Ordering position of this round within its group */
order: Scalars['Float'],
/** Display name of the round */
name: Scalars['String']}


/** Input for a group of rounds within a step */
export interface GroupConfigurationInput {
/** List of round configurations in this group */
rounds: RoundConfigurationInput[],
/** Display name of the group */
name: Scalars['String'],
/** Optional description of the group */
description?: (Scalars['String'] | null)}


/** Input for a tournament step configuration */
export interface StepConfigurationInput {
/** Discriminator type, always STEP for step configurations */
type?: ConfigurationType,
/** List of group configurations within this step */
groups: GroupConfigurationInput[]}


/** Input for a numeric comparison condition */
export interface NumberConditionInput {
/** Comparison operator (LT, BT, LTE, BTE, EQ, NEQ) */
conditionType: NumberConditionType,
/** Numeric value to compare against */
value: Scalars['Float']}


/** Input for a team-level numeric condition with optional aggregation */
export interface TeamNumericConditionInput {
/** Aggregation method (SUM, AVG, MIN, MAX) applied across team members */
aggregationType?: (AggregationType | null),
/** Source of the property data (PLAYER or IDENTITY_PROVIDER) */
propertySource?: (PlayerConditionDataSource | null),
/** Identifier of the property data source (e.g., identity provider ID) */
propertySourceId?: (Scalars['ID'] | null),
/** Comparison operator for the numeric condition */
conditionType: NumberConditionType,
/** Numeric value to compare against */
value: Scalars['Float']}


/** Input for a string comparison condition */
export interface StringConditionInput {
/** Comparison operator (EQ or NEQ) */
conditionType: StringConditionType,
/** String value to compare against */
value: Scalars['String']}


/** Input for a property-based condition rule */
export interface ConditionInput {
/** Name of the property to evaluate */
property: Scalars['String'],
/** Numeric comparison to apply to the property value */
numericCondition?: (NumberConditionInput | null),
/** String comparison to apply to the property value */
stringCondition?: (StringConditionInput | null),
/** Whether the property must exist or not exist */
propertyCondition: PropertyCondition}


/** Input specifying a player property field and its data source */
export interface PlayerFieldInput {
/** Source of the player data (PLAYER or IDENTITY_PROVIDER) */
propertySource: PlayerConditionDataSource,
/** Identifier of the data source (e.g., identity provider ID) */
propertySourceId?: (Scalars['ID'] | null),
/** Name of the property to reference */
property: Scalars['String']}


/** Input for a registration condition applied to individual players */
export interface PlayerConditionInput {
/** Source of the player data (PLAYER or IDENTITY_PROVIDER) */
propertySource: PlayerConditionDataSource,
/** Identifier of the data source (e.g., identity provider ID) */
propertySourceId?: (Scalars['ID'] | null),
/** The condition rule to evaluate against the player property */
condition: ConditionInput,
/** Custom error message shown when the condition fails */
errorMessage?: (Scalars['String'] | null),
/** Human-readable description of the rule for display purposes */
ruleDescription?: (Scalars['String'] | null)}


/** Input for a registration condition applied to teams */
export interface TeamConditionInput {
/** Name of the team property to evaluate */
property: Scalars['String'],
/** String comparison to apply to the team property */
stringCondition?: (StringConditionInput | null),
/** Numeric comparison with optional aggregation for team members */
numericCondition?: (TeamNumericConditionInput | null),
/** Whether the property must exist or not exist */
propertyCondition: PropertyCondition,
/** Custom error message shown when the condition fails */
errorMessage?: (Scalars['String'] | null)}


/** Input for tournament registration validation conditions */
export interface RegistrationConditionsInput {
/** Conditions applied at the team level during registration */
teamConditions: TeamConditionInput[],
/** Conditions applied to each team member during registration */
memberConditions: PlayerConditionInput[]}


/** Input for tournament-level configuration settings */
export interface TournamentConfigurationInput {
/** Discriminator type, always TOURNAMENT for tournament configurations */
type?: ConfigurationType,
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


/** Input for SMTP email configuration settings */
export interface EmailConfigurationInput {
/** SMTP server hostname */
host: Scalars['String'],
/** SMTP server port number */
port?: (Scalars['Float'] | null),
/** SMTP authentication username */
username?: (Scalars['String'] | null),
/** SMTP authentication password */
password?: (Scalars['String'] | null),
/** Sender email address */
from: Scalars['String'],
/** Sender display name shown in the From header */
fromName?: (Scalars['String'] | null),
/** Reply-to email address */
replyTo?: (Scalars['String'] | null),
/** Reply-to display name */
replyToName?: (Scalars['String'] | null),
/** Whether to use TLS/SSL for the SMTP connection */
secure: Scalars['Boolean'],
/** Player property field that contains recipient email addresses */
emailField: PlayerFieldInput}


/** Input for page-specific CDN file configuration */
export interface PlatformCdnFilePageConfigInput {
/** The URL path pattern this page responds to (e.g. /events/:id) */
path: Scalars['String']}


/** Input for CDN file configuration options */
export interface PlatformCdnFileConfigsInput {
/** Page-specific configuration, required for PAGE type files */
pageConfig?: (PlatformCdnFilePageConfigInput | null)}

export interface UserGroupConfigurationInput {
/** Maximum number of accepted members allowed in the group */
maxSize: Scalars['Int'],
/** Minimum number of accepted members required for the group to be valid */
minSize: Scalars['Int']}


/** Input for a 2D coordinate position */
export interface PositionInput {
/** Horizontal position coordinate */
x: Scalars['Float'],
/** Vertical position coordinate */
y: Scalars['Float']}


/** Input for venue seat visual configuration */
export interface EventVenueSeatConfigurationInput {
/** Visual size of the seat on the venue map */
size?: (Scalars['Float'] | null),
/** URL of a custom SVG icon for the seat */
svgUrl?: (Scalars['String'] | null),
/** Position of the seat on the venue map */
position: PositionInput}


/** Input for event configuration settings */
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


/** Input for venue seat type configuration settings */
export interface EventVenueSeatTypeConfigurationInput {
/** Arbitrary nonce value for cache-busting or versioning */
nonce?: (Scalars['String'] | null)}


/** Input for event venue configuration settings */
export interface EventVenueConfigurationInput {
/** URL or S3 key of the venue image */
imageUrl?: (Scalars['String'] | null)}


/** Input for ticket configuration settings */
export interface EventTicketConfigurationConfigurationInput {
/** Custom fields that attendees must fill when purchasing this ticket type */
customFields: PropertyInput[]}


/** Input for platform configuration settings */
export interface PlatformConfigurationInput {
/** Whether to enable white-label mode, removing WellPlayed branding */
whitelabel?: (Scalars['Boolean'] | null)}

export interface ShopProductConfigurationInput {
/** The minimum quantity allowed per purchase */
minQuantity?: (Scalars['Int'] | null),
/** The maximum quantity allowed per purchase */
maxQuantity?: (Scalars['Int'] | null),
/** The maximum total quantity a player can buy across all purchases */
maxBoughtQuantity?: (Scalars['Int'] | null)}

export interface EntityQuantityInput {
/** The ID of the referenced entity */
id: Scalars['ID'],
/** The quantity associated with this entity */
quantity: Scalars['Int']}

export interface ShopItemQuantityInput {
/** The type of the shop item (ITEM or CURRENCY) */
type: ShopProductItemType,
/** The ID of the item or currency */
id: Scalars['ID'],
/** The quantity of the item included in the product */
quantity: Scalars['Int']}

export interface SkillRatingConfigurationInput {
/** Optional leaderboard ID to automatically update when match results are registered */
updateLeaderboardId?: (Scalars['ID'] | null)}

export interface QueryGenqlSelection{
    /** Retrieves a paginated list of audit logs for the organization, optionally filtered by resource and log type */
    logs?: (LogsGenqlSelection & { __args?: {page?: (PageInfo | null), resourceId?: (Scalars['ID'] | null), types?: (LogType[] | null)} })
    /** Retrieves the currently authenticated account */
    getMyAccount?: AccountGenqlSelection
    /** Retrieves a single configuration preset by ID */
    configuration?: (ConfigurationGenqlSelection & { __args: {id: Scalars['ID']} })
    /** Retrieves the current ranking of a player on a leaderboard */
    leaderboardCurrentPlayerRanking?: (LeaderboardSeasonBucketScoreGenqlSelection & { __args: {input: LeaderboardGetPlayerRankingInput} })
    /** Retrieves a paginated list of leaderboards for the organization */
    leaderboards?: (LeaderboardsGenqlSelection & { __args: {page: PageInfo} })
    /** Retrieves a single leaderboard by ID */
    leaderboard?: (LeaderboardGenqlSelection & { __args: {id: Scalars['ID']} })
    /** Retrieves the currently active season for a leaderboard */
    currentLeaderboardSeason?: (LeaderboardSeasonGenqlSelection & { __args: {leaderboardId: Scalars['ID']} })
    /** Retrieves a paginated list of seasons for a leaderboard */
    leaderboardSeasons?: (LeaderboardSeasonsGenqlSelection & { __args: {leaderboardId: Scalars['ID'], page: PageInfo} })
    /** Retrieves a single leaderboard season by ID */
    leaderboardSeason?: (LeaderboardSeasonGenqlSelection & { __args: {id: Scalars['ID']} })
    /** Retrieves a paginated list of buckets for a leaderboard season */
    leaderboardSeasonBuckets?: (LeaderboardSeasonBucketsGenqlSelection & { __args: {seasonId: Scalars['ID'], page: PageInfo} })
    /** Retrieves a single leaderboard season bucket by ID */
    leaderboardSeasonBucket?: (LeaderboardSeasonBucketGenqlSelection & { __args: {id: Scalars['ID']} })
    /** Retrieves a paginated and ranked list of player scores within a leaderboard season bucket */
    leaderboardSeasonBucketScores?: (LeaderboardSeasonBucketScoresGenqlSelection & { __args: {leaderboardSeasonBucketId: Scalars['ID'], page: PageInfo} })
    /** Get an organization by its ID */
    organization?: (OrganizationGenqlSelection & { __args: {id: Scalars['ID']} })
    /** Get platform limit definitions, optionally filtered by ID */
    limitDefinitions?: (LimitsGenqlSelection & { __args?: {limits?: (Scalars['String'][] | null)} })
    /** Get current usage and quotas for the organization */
    organizationLimits?: (OrganizationLimitsGenqlSelection & { __args?: {limits?: (OrganizationLimitsType[] | null)} })
    /** List all organizations the current user owns or is a member of */
    userOrganizations?: OrganizationGenqlSelection
    /** Retrieve a single organization group by its ID */
    organizationGroup?: (OrganizationGroupGenqlSelection & { __args: {id: Scalars['ID']} })
    /** Retrieve a paginated list of all groups in the current organization */
    organizationGroups?: (OrganizationGroupsGenqlSelection & { __args: {page: PageInfo} })
    /** Retrieve all available permission definitions that can be assigned to groups */
    availablePermissions?: PermissionsGenqlSelection
    /** Retrieve a paginated list of all members in the current organization */
    organizationMembers?: (OrganizationMembersGenqlSelection & { __args: {page: PageInfo} })
    /** List all identity providers for the current organization, returning full or public details based on permissions */
    identityProviders?: OrganizationIdentityProviderInfoGenqlSelection
    /** Retrieve a single identity provider by ID with full configuration details */
    identityProvider?: (OrganizationIdentityProviderGenqlSelection & { __args: {id: Scalars['ID']} })
    /** Get a single organization app by ID */
    organizationApp?: (OrganizationAppGenqlSelection & { __args: {id: Scalars['String']} })
    /** List all apps for the current organization */
    organizationApps?: (OrganizationAppsGenqlSelection & { __args: {page: PageInfo} })
    /** List releases for an app */
    appReleasesByApp?: (AppReleaseGenqlSelection & { __args: {appId: Scalars['ID']} })
    /** Get a single app release */
    appRelease?: (AppReleaseGenqlSelection & { __args: {id: Scalars['ID']} })
    /** List all available webhook event types that can be subscribed to */
    webhookAvailableEvents?: WebhookEventConfigurationGenqlSelection
    /** List all webhooks configured for the current organization */
    webhooks?: WebhookGenqlSelection
    /** Retrieve a single webhook by its ID */
    webhook?: (WebhookGenqlSelection & { __args: {id: Scalars['ID']} })
    /** Retrieve a paginated list of apps attached to the current organization */
    organizationAttachedApps?: (OrganizationAttachedAppsGenqlSelection & { __args: {page: PageInfo} })
    /** Retrieve a single available root identity provider by ID */
    availableRootIdentityProvider?: (PublicIdentityProviderGenqlSelection & { __args: {id: Scalars['ID']} })
    /** Retrieve all available root identity providers */
    getAvailableRootIdentityProviders?: PublicIdentityProviderGenqlSelection
    /** Retrieves all available email template configurations with their trigger events and variables */
    emailTemplateConfigurations?: EmailTemplateConfigurationGenqlSelection
    /** Retrieves the SMTP email configuration for the organization */
    emailConfiguration?: EmailConfigurationGenqlSelection
    /** Retrieves a single email template by ID */
    emailTemplate?: (EmailTemplateGenqlSelection & { __args: {id: Scalars['ID']} })
    /** Retrieves a paginated list of email templates for the organization */
    emailTemplates?: (EmailTemplatesGenqlSelection & { __args: {page: PageInfo} })
    /** Search for players by username prefix within the current organization */
    searchPlayer?: (PlayerGenqlSelection & { __args: {username: Scalars['String']} })
    /** Retrieve a paginated list of players in the current organization */
    players?: (PlayersGenqlSelection & { __args: {
    /** Filter by specific player IDs (max 100) */
    ids?: (Scalars['ID'][] | null), page: PageInfo, identityProviders?: (Scalars['ID'][] | null), identityProviderProperties?: (Scalars['String'][] | null), query?: (QueryPlayersInput | null)} })
    /** Retrieve a single player by ID, owner ID, or custom ID */
    player?: (PlayerGenqlSelection & { __args?: {id?: (Scalars['ID'] | null), ownerId?: (Scalars['ID'] | null), customId?: (Scalars['String'] | null)} })
    /** Retrieve skill ratings for a specific player, optionally filtered by rating IDs */
    playerSkillRatings?: (PlayerSkillRatingGenqlSelection & { __args: {playerId: Scalars['ID'], 
    /** Filter by specific skill rating ids */
    skillRatingIds?: (Scalars['ID'][] | null)} })
    /** Retrieve the paginated match history for a specific player */
    playerMatchesHistory?: (TournamentStepGroupRoundGameMatchesGenqlSelection & { __args: {page: PageInfo, playerId: Scalars['ID']} })
    /** Retrieve a single tournament by its ID */
    tournament?: (TournamentGenqlSelection & { __args: {id: Scalars['ID']} })
    /** Retrieve a paginated list of tournaments with filtering and ordering */
    tournaments?: (TournamentsGenqlSelection & { __args: {query: TournamentsQuery, page: PageInfo} })
    /** List all steps for a tournament that the current user has permission to view */
    tournamentSteps?: (TournamentStepGenqlSelection & { __args: {tournamentId: Scalars['ID']} })
    /** Retrieve a single tournament step by its ID */
    tournamentStep?: (TournamentStepGenqlSelection & { __args: {id: Scalars['ID']} })
    /** Retrieve the generated bracket structure of a tournament step including groups, rounds, games, and matches */
    tournamentStepGeneratedShape?: (TournamentStepGroupGenqlSelection & { __args: {stepId: Scalars['ID']} })
    /** Retrieve a single match by its ID */
    match?: (TournamentStepGroupRoundGameMatchGenqlSelection & { __args: {matchId: Scalars['ID']} })
    /** Retrieve a single tournament team by its ID */
    tournamentTeam?: (TournamentTeamGenqlSelection & { __args: {teamId: Scalars['ID'], memberStatus?: (TournamentTeamMemberStatus | null)} })
    /** Retrieve a paginated list of teams registered to a tournament with optional filters */
    tournamentTeams?: (TournamentTeamsGenqlSelection & { __args: {tournamentId: Scalars['ID'], page: PageInfo, memberStatus?: (TournamentTeamMemberStatus | null), status?: (TournamentTeamStatus | null), propertiesFilter?: (PropertyValueInput[] | null), playerUsernameQuery?: (Scalars['String'] | null), playerPropertiesFilter?: (PropertyValueInput[] | null), playerIdentityProviderPropertiesFilter?: (IdentityProviderPropertyInput[] | null)} })
    /** Retrieve a paginated list of tournament players with optional filtering by username, properties, and team status */
    tournamentPlayers?: (TeamMembersGenqlSelection & { __args: {page: PageInfo, tournamentId: Scalars['ID'], status: TournamentTeamStatus, playerUsernameQuery?: (Scalars['String'] | null), playerPropertiesFilter?: (PropertyValueInput[] | null), orderByProperty?: (OrderByProperty | null)} })
    /** Retrieve a paginated list of team invitations for the current authenticated player */
    tournamentTeamInvites?: (TeamMembersGenqlSelection & { __args: {page: PageInfo, tournamentId?: (Scalars['ID'] | null), status?: (TournamentTeamMemberStatus | null)} })
    /** Retrieve all match scores for a tournament step with pagination */
    tournamentStepGroupRoundGameMatchScoresGetForStep?: (TournamentStepGroupRoundGameMatchScoresGenqlSelection & { __args: {stepId: Scalars['ID'], page: PageInfo} })
    /** List all administrators for a specific tournament */
    tournamentAdmins?: (TournamentAdminGenqlSelection & { __args: {tournamentId: Scalars['ID']} })
    /** Get rule set for a tournament step */
    stepRuleSet?: (StepRuleSetModelGenqlSelection & { __args: {stepId: Scalars['ID']} })
    /** Get rule execution audit trail for a step */
    stepRuleExecutionLogs?: (PaginatedRuleExecutionLogsGenqlSelection & { __args: {stepId: Scalars['ID'], 
    /** Cursor-based pagination parameters */
    pageInfo: PageInfo} })
    /** Dry validation of a rule set without saving */
    stepRuleSetValidate?: (RuleValidationResultModelGenqlSelection & { __args: {input: CreateStepRuleSetInput} })
    /** Dry-run simulation of a rule set */
    stepRuleSetSimulate?: (SimulationResultModelGenqlSelection & { __args: {stepId: Scalars['ID'], teamCount: Scalars['Int']} })
    /** List available rule preset names */
    rulePresets?: boolean | number
    /** List all CDN files for a platform or template, optionally filtered by file type */
    platformFiles?: (PlatformCdnFileGenqlSelection & { __args?: {type?: (PlatformCdnFileType | null), platformId?: (Scalars['ID'] | null), templateId?: (Scalars['ID'] | null)} })
    /** Retrieve a single CDN file by its ID, including a signed dev URL for authorized editors */
    platformFile?: (PlatformCdnFileGenqlSelection & { __args: {id: Scalars['ID']} })
    /** List all platforms owned by the current organization */
    platforms?: PlatformGenqlSelection
    /** Retrieve a single platform by its ID */
    platform?: (PlatformGenqlSelection & { __args: {platformId: Scalars['ID']} })
    /** Look up a platform by its domain name */
    platformFindFromDomain?: (PlatformGenqlSelection & { __args: {domain: Scalars['String']} })
    /** Check whether a domain name is already registered to a platform */
    platformCheckDomainAvailability?: { __args: {domain: Scalars['URL']} }
    /** List all custom domains configured for a specific platform */
    platformCustomDomains?: (PlatformCustomDomainDataGenqlSelection & { __args: {platformId: Scalars['ID']} })
    /** List all publicly available platform templates */
    platformTemplatesPublic?: PlatformTemplateGenqlSelection
    /** List all platform templates owned by the current organization */
    platformTemplates?: PlatformTemplateGenqlSelection
    /** Retrieve a single platform template by its ID */
    platformTemplate?: (PlatformTemplateGenqlSelection & { __args: {platformTemplateId: Scalars['ID']} })
    /** Retrieve all available subscription items */
    subscriptionItems?: SubscriptionItemGenqlSelection
    /** Retrieve the current subscription items active for the organization */
    organizationCurrentSubscriptionItems?: OrganizationSubscriptionItemGenqlSelection
    /** Retrieve all skill ratings for the current organization */
    organizationSkillRatings?: OrganizationSkillRatingGenqlSelection
    /** Retrieve a single skill rating by its ID */
    organizationSkillRating?: (OrganizationSkillRatingGenqlSelection & { __args: {id: Scalars['ID']} })
    /** Retrieve a single event by ID, including the current user's reservation if any */
    event?: (EventWithUserReservationGenqlSelection & { __args: {id: Scalars['ID']} })
    /** Retrieve a paginated list of events with optional filtering and ordering */
    events?: (EventsGenqlSelection & { __args: {page: PageInfo, query?: (EventsQuery | null), eventIds?: (Scalars['ID'][] | null)} })
    /** Retrieve a single ticket configuration by ID */
    eventTicketConfiguration?: (EventTicketConfigurationGenqlSelection & { __args: {id: Scalars['ID']} })
    /** Retrieve all ticket configurations for a specific event */
    eventTicketConfigurations?: (EventTicketConfigurationGenqlSelection & { __args: {eventId: Scalars['ID']} })
    /** Retrieve the current player's event reservations with optional status and event filters */
    eventReservationsMyReservations?: (EventReservationsGenqlSelection & { __args: {page: PageInfo, status?: (EventReservationStatus | null), groupStatus?: (UserGroupStatus | null), eventIds?: (Scalars['ID'][] | null)} })
    /** Retrieve a single event reservation by ID with ticket and custom field details */
    eventReservation?: (EventReservationGenqlSelection & { __args: {reservationId: Scalars['ID']} })
    /** Retrieve a paginated list of seat statuses for a specific event */
    eventSeats?: (EventSeatsGenqlSelection & { __args: {eventId: Scalars['ID'], page: PageInfo, eventVenueId?: (Scalars['ID'] | null), reservationIds?: (Scalars['ID'][] | null)} })
    /** Retrieve a paginated list of reservations for a specific event with advanced filtering */
    eventReservations?: (EventReservationsGenqlSelection & { __args: {eventId: Scalars['ID'], page: PageInfo, query: EventReservationsQueryInput} })
    /** Retrieve a paginated list of event venues for the organization */
    eventVenues?: (EventVenuesGenqlSelection & { __args: {page: PageInfo} })
    /** Retrieve a single event venue by ID */
    eventVenue?: (EventVenueGenqlSelection & { __args: {id: Scalars['ID']} })
    /** Retrieve a paginated list of seats for a venue, optionally filtered by seat type */
    eventVenueSeats?: (EventVenueSeatsGenqlSelection & { __args: {venueId: Scalars['ID'], page: PageInfo, seatTypeId?: (Scalars['ID'] | null)} })
    /** Retrieve a paginated list of seat types for a specific venue */
    eventVenueSeatTypes?: (EventVenueSeatTypesGenqlSelection & { __args: {venueId: Scalars['ID'], page: PageInfo} })
    /** Retrieve the payment collection configuration for the current organization, including Stripe account details and fees */
    organizationPaymentCollectionConfiguration?: OrganizationPaymentCollectionConfigurationGenqlSelection
    /** Retrieve paginated members of specified user groups */
    userGroupMembers?: (UserGroupMembersGenqlSelection & { __args: {groupIds: Scalars['ID'][], page: PageInfo, status?: (UserGroupMemberStatus | null)} })
    /** Retrieve paginated user groups by their IDs */
    userGroups?: (UserGroupsGenqlSelection & { __args: {query: UserGroupsQueryInput, page: PageInfo} })
    /** Retrieve the current player's group memberships, optionally filtered by status or entity */
    userGroupMyMemberships?: (UserGroupMembersGenqlSelection & { __args: {page: PageInfo, status?: (UserGroupMemberStatus | null), entityType?: (Scalars['String'] | null), entityId?: (Scalars['ID'] | null)} })
    /** Retrieve presence analytics for the current organization */
    presenceAnalytics?: PresenceAnalyticsGenqlSelection
    /** Retrieve a paginated list of shops in the current organization */
    shops?: (ShopsGenqlSelection & { __args?: {page?: (PageInfo | null), filter?: (ShopsFilterInput | null)} })
    /** Retrieve a paginated list of shop categories in the current organization */
    shopCategories?: (ShopCategoriesGenqlSelection & { __args?: {page?: (PageInfo | null), filter?: (ShopCategoriesFilterInput | null)} })
    /** Retrieve a paginated list of shop product purchases for the current player or specified players */
    playerShopProductPurshases?: (PlayerShopProductPurshasesDtoGenqlSelection & { __args?: {page?: (PageInfo | null), filter?: (PlayerShopProductPurshasesFilterInput | null)} })
    /** Retrieve a paginated list of products within a specific shop */
    shopProducts?: (ShopProductsGenqlSelection & { __args: {shopId: Scalars['ID'], page?: (PageInfo | null), filter?: (ShopProductsFilterInput | null)} })
    /** Retrieve a paginated list of items within a specific shop product */
    shopProductItems?: (ShopProductItemsGenqlSelection & { __args: {shopProductId: Scalars['ID'], page?: (PageInfo | null)} })
    /** Retrieves a paginated list of items for the organization */
    items?: (ItemsGenqlSelection & { __args?: {page?: (PageInfo | null), filter?: (ItemsFilterInput | null)} })
    /** Retrieves a paginated list of items owned by players */
    playerItems?: (PlayerItemsGenqlSelection & { __args?: {page?: (PageInfo | null), filter?: (PlayerItemsFilterInput | null)} })
    /** Retrieves a paginated list of item categories for the organization */
    itemCategories?: (ItemCategoriesGenqlSelection & { __args?: {page?: (PageInfo | null), filter?: (ItemCategoriesFilterInput | null)} })
    /** Retrieves a paginated list of currencies for the organization */
    currencies?: (CurrenciesGenqlSelection & { __args?: {page?: (PageInfo | null), filter?: (CurrenciesFilterInput | null)} })
    /** Retrieves a paginated list of player currency balances */
    playerCurrencies?: (PlayerCurrenciesGenqlSelection & { __args?: {page?: (PageInfo | null), filter?: (PlayerCurrenciesFilterInput | null)} })
    /** Browse published marketplace apps */
    marketplaceApps?: (MarketplaceAppsGenqlSelection & { __args?: {page?: (PageInfo | null), filter?: (MarketplaceAppsFilterInput | null)} })
    /** Get a single marketplace app */
    marketplaceApp?: (MarketplaceAppGenqlSelection & { __args: {id: Scalars['ID']} })
    /** List marketplace apps installed in the current organization */
    myMarketplaceInstallations?: (MarketplaceAppInstallationsGenqlSelection & { __args?: {page?: (PageInfo | null)} })
    /** List releases for a marketplace app */
    appReleases?: (MarketplaceAppReleaseGenqlSelection & { __args: {marketplaceAppId: Scalars['ID']} })
    moduleTokensForPlatform?: (ModuleTokenDtoGenqlSelection & { __args: {platformId: Scalars['ID']} })
    extensionToken?: (ExtensionTokenDtoGenqlSelection & { __args: {installationId: Scalars['ID']} })
    /** List all module configurations for a platform */
    platformModuleConfigs?: (PlatformModuleConfigGenqlSelection & { __args: {platformId: Scalars['ID']} })
    /** Retrieve metafields for a specific entity */
    entityMetafields?: (EntityMetafieldGenqlSelection & { __args: {entityType: Scalars['String'], entityId: Scalars['ID'], filter?: (EntityMetafieldsFilterInput | null)} })
    /** Returns all object types that support metadata and custom fields */
    allowedObjectTypes?: boolean | number
    /** Get metadata entries for an object */
    objectMetadata?: (ObjectMetadataGenqlSelection & { __args: {objectType: ObjectType, objectId: Scalars['ID']} })
    /** Get metadata entries for multiple objects of the same type in a single query */
    objectMetadataBatch?: (ObjectMetadataBatchResultGenqlSelection & { __args: {objectType: ObjectType, objectIds: Scalars['ID'][]} })
    /** List all custom field definitions for a given object type */
    customFieldDefinitions?: (CustomFieldDefinitionModelGenqlSelection & { __args: {objectType: ObjectType} })
    /** Get custom field values for an object */
    customFieldValues?: (CustomFieldWithValueModelGenqlSelection & { __args: {objectType: ObjectType, objectId: Scalars['ID']} })
    /** Get custom field values for multiple objects of the same type in a single query */
    customFieldValuesBatch?: (CustomFieldValuesBatchResultModelGenqlSelection & { __args: {objectType: ObjectType, objectIds: Scalars['ID'][]} })
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Input for retrieving a player ranking on a leaderboard */
export interface LeaderboardGetPlayerRankingInput {
/** ID of the leaderboard to look up */
leaderboardId: Scalars['ID'],
/** ID of the player to get the ranking for */
playerId: Scalars['ID'],
/** If not set, the current active season will be selected */
seasonId?: (Scalars['ID'] | null)}

export interface OrganizationIdentityProviderInfoGenqlSelection{
    on_OrganizationIdentityProvider?:OrganizationIdentityProviderGenqlSelection,
    on_PublicOrganizationIdentityProviderV2?:PublicOrganizationIdentityProviderV2GenqlSelection,
    __typename?: boolean | number
}


/** Public-facing identity provider information with redirect URL, excluding sensitive configuration details */
export interface PublicOrganizationIdentityProviderV2GenqlSelection{
    /** Whether player accounts must be validated through this provider */
    requiredForPlayerValidation?: boolean | number
    /** Whether users can log in using this identity provider */
    allowLogin?: boolean | number
    /** Human-readable description of this identity provider */
    description?: boolean | number
    /** URL or identifier for the provider icon */
    icon?: boolean | number
    /** Unique identifier of this identity provider */
    id?: boolean | number
    /** Display name of the identity provider */
    name?: boolean | number
    /** The organization this provider belongs to */
    organizationId?: boolean | number
    /** The authorization URL users are redirected to for authentication */
    redirectUrl?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Filter options for querying players */
export interface QueryPlayersInput {
/** If true, return only anonymous players (no owner). If false, return only owned players. */
anonymous?: (Scalars['Boolean'] | null)}


/** Query parameters for filtering and ordering the tournaments list */
export interface TournamentsQuery {
/** Order by type */
orderBy?: TournamentsQueryOrderBy,
/** Order direction */
orderDirection?: OrderDirection,
/** Filter by tournament status */
status?: TournamentsQueryStatus,
/** Show not visible tournaments, only usable if the user has the correct permission */
showNotVisible?: (Scalars['Boolean'] | null),
/** Filter tournaments by player IDs and their associated team statuses */
filterByPlayers?: (TournamentsQueryPlayerIdWithTeamStatus[] | null)}


/** Filter tournaments by a specific player ID and their team status */
export interface TournamentsQueryPlayerIdWithTeamStatus {
/** Player id */
playerId: Scalars['ID'],
/** Team status */
teamStatus: TournamentTeamStatus,
/** Team member status filter */
memberStatus: TournamentTeamMemberStatus}

export interface IdentityProviderPropertyInput {
/** ID of the identity provider that supplied this property */
identityProviderId: Scalars['ID'],
/** Key identifier of the property */
property: Scalars['String'],
/** Value of the property from the identity provider */
value: Scalars['String']}


/** Input for sorting results by a custom property field */
export interface OrderByProperty {
/** Key identifier of the property to sort by */
property: Scalars['String'],
/** Sort direction (ASC or DESC), defaults to ASC */
order?: (OrderDirection | null)}


/** Input for creating a complete step rule set with scoring, advancement, cross-step rules, and structure */
export interface CreateStepRuleSetInput {
/** Scoring configuration for this step */
scoring: CreateScoringInput,
/** Ordered list of advancement rules */
advancementRules: CreateAdvancementRuleInput[],
/** Cross-step data transfer rules */
crossStepRules?: (CreateCrossStepRuleInput[] | null),
/** Bracket structure template for this step */
structureTemplate?: (CreateStructureTemplateInput | null)}


/** Input for creating a scoring configuration */
export interface CreateScoringInput {
/** Method used to aggregate scores across matches */
aggregation: ScoreAggregationType,
/** Human-readable formula string */
formula?: (Scalars['String'] | null),
/** Points awarded for a win */
winPoints: Scalars['Float'],
/** Points awarded for a loss */
lossPoints: Scalars['Float'],
/** Points awarded for a draw */
drawPoints: Scalars['Float'],
/** Points awarded for a forfeit */
forfeitPoints: Scalars['Float'],
/** Ordered list of tiebreaker rules */
tiebreakers: CreateTiebreakerInput[]}


/** Input for creating a tiebreaker rule within a scoring rule set */
export interface CreateTiebreakerInput {
/** Priority order of this tiebreaker (lower runs first) */
order: Scalars['Float'],
/** Type of tiebreaker algorithm (e.g. HEAD_TO_HEAD, BUCHHOLZ) */
type: Scalars['String'],
/** Human-readable formula string */
formula?: (Scalars['String'] | null),
/** Sort direction for this tiebreaker (ASC or DESC) */
sortOrder: RuleSortOrder}


/** Input for creating an advancement rule */
export interface CreateAdvancementRuleInput {
/** Display name of the rule */
name: Scalars['String'],
/** Human-readable description of what this rule does */
description?: (Scalars['String'] | null),
/** Execution priority order (lower runs first) */
order: Scalars['Float'],
/** Event type that triggers this rule */
triggerType: RuleTriggerType,
/** Scope restricting when the rule triggers */
triggerScope?: (TriggerScopeInput | null),
/** Logical operator combining conditions (AND or OR) */
conditionOperator: ConditionOperator,
/** Array of RuleCondition objects */
conditions: RuleConditionInput[],
/** Array of RuleAction objects */
actions: RuleActionInput[],
/** Whether actions execute automatically when conditions are met */
autoExecute?: Scalars['Boolean'],
/** Whether an admin can manually trigger or override this rule */
allowManualOverride?: Scalars['Boolean']}


/** Input for restricting when a rule triggers by limiting to specific game, round, or group */
export interface TriggerScopeInput {
/** Restrict trigger to events within this specific game */
gameId?: (Scalars['ID'] | null),
/** Restrict trigger to events within this specific round */
roundId?: (Scalars['ID'] | null),
/** Restrict trigger to events within this specific group */
groupId?: (Scalars['ID'] | null)}


/** Input for defining a rule condition */
export interface RuleConditionInput {
/** Formula string for the field to check (left side) */
field: Scalars['String'],
/** Comparison operator (EQ, NEQ, GT, GTE, LT, LTE, etc.) */
operator: RuleConditionOperatorType,
/** Formula string for the value to compare against (right side) */
value: Scalars['String'],
/** Scope at which this condition is evaluated (e.g. PER_TEAM, ALL_TEAMS) */
scope?: (ConditionScopeType | null)}


/** Flat discriminated input for rule actions (GraphQL does not support union inputs) */
export interface RuleActionInput {
/** Action type discriminator */
type: RuleActionType,
/** Target game reference for ADVANCE_TO_GAME action */
gameTarget?: (GameRefInput | null),
/** Target group reference for ADVANCE_TO_GROUP action */
groupTarget?: (GroupRefInput | null),
/** Target step reference for ADVANCE_TO_STEP action */
stepTarget?: (StepRefInput | null),
/** Strategy for mapping team rankings into the target */
rankMapping?: (RankMappingType | null),
/** Pairing algorithm for GENERATE_NEXT_ROUND action */
pairingStrategy?: (PairingStrategyType | null),
/** Number of games to create in the generated round */
gamesPerRound?: (Scalars['Int'] | null),
/** Number of team slots per generated game */
teamSlotsPerGame?: (Scalars['Int'] | null),
/** Best-of series count for generated matches */
bestOf?: (Scalars['Int'] | null),
/** Match configuration for generated games */
matchConfiguration?: (MatchConfigRefInput | null),
/** Scope limiting which game to end for END_GAME action */
gameScope?: (GameRefInput | null),
/** Scope limiting which round to end for END_ROUND action */
roundScope?: (RoundRefInput | null),
/** Scope limiting which group to end for END_GROUP action */
groupScope?: (GroupRefInput | null),
/** Property key for SET_TEAM_PROPERTY action */
key?: (Scalars['String'] | null),
/** Formula string for the computed value */
formula?: (Scalars['String'] | null)}


/** Input for referencing a game by absolute ID or relative indices */
export interface GameRefInput {
/** Reference type (ABSOLUTE by ID or RELATIVE by indices) */
type: RefType,
/** Absolute game ID (used when type is ABSOLUTE) */
id?: (Scalars['ID'] | null),
/** Zero-based group index (used when type is RELATIVE) */
groupIndex?: (Scalars['Int'] | null),
/** Zero-based round index within the group (used when type is RELATIVE) */
roundIndex?: (Scalars['Int'] | null),
/** Zero-based game index within the round (used when type is RELATIVE) */
gameIndex?: (Scalars['Int'] | null),
/** Zero-based team slot index within the game */
slot?: (Scalars['Int'] | null)}


/** Input for referencing a group by absolute ID or relative index */
export interface GroupRefInput {
/** Reference type (ABSOLUTE by ID or RELATIVE by index) */
type: RefType,
/** Absolute group ID (used when type is ABSOLUTE) */
id?: (Scalars['ID'] | null),
/** Zero-based group index (used when type is RELATIVE) */
groupIndex?: (Scalars['Int'] | null)}


/** Input for referencing a tournament step by absolute ID or relative position */
export interface StepRefInput {
/** Reference type (ABSOLUTE by ID or RELATIVE by position) */
type: RefType,
/** Absolute step ID (used when type is ABSOLUTE) */
id?: (Scalars['ID'] | null),
/** Relative position (PREVIOUS, NEXT, CURRENT) when type is RELATIVE */
relative?: (StepRelativePosition | null)}


/** Input for specifying match configuration source and inline settings */
export interface MatchConfigRefInput {
/** Source of the match configuration (INLINE, INHERIT, etc.) */
source: MatchConfigSource,
/** Inline scoring variables (used when source is INLINE) */
variables?: (MatchConfigVariableInput[] | null),
/** Inline score formula expression (used when source is INLINE) */
scoreFormula?: (Scalars['String'] | null)}


/** Input for defining a match score formula variable */
export interface MatchConfigVariableInput {
/** Variable name used in the scoring formula */
formulaName: Scalars['String'],
/** Human-readable label for the variable */
displayName: Scalars['String'],
/** Default numeric value if not explicitly provided */
defaultValue: Scalars['Float']}


/** Input for referencing a round by absolute ID or relative indices */
export interface RoundRefInput {
/** Reference type (ABSOLUTE by ID or RELATIVE by indices) */
type: RefType,
/** Absolute round ID (used when type is ABSOLUTE) */
id?: (Scalars['ID'] | null),
/** Zero-based group index (used when type is RELATIVE) */
groupIndex?: (Scalars['Int'] | null),
/** Zero-based round index within the group (used when type is RELATIVE) */
roundIndex?: (Scalars['Int'] | null)}


/** Input for creating a cross-step data transfer rule */
export interface CreateCrossStepRuleInput {
/** Explicit source step ID */
sourceStepId?: (Scalars['ID'] | null),
/** Relative reference (PREVIOUS, NEXT, CURRENT) */
sourceRelative?: (Scalars['String'] | null),
/** Data source: RANKINGS, SCORES, TEAMS */
dataSource: Scalars['String'],
/** CrossStepUsage configuration */
usage: CrossStepUsageInput}


/** Flat discriminated input for cross-step usage configuration */
export interface CrossStepUsageInput {
/** Usage type discriminator (SEED_ORDER, QUALIFY, INJECT_SCORE) */
type: CrossStepUsageType,
/** Formula string for QUALIFY condition */
condition?: (Scalars['String'] | null),
/** Formula string for INJECT_SCORE formula */
formula?: (Scalars['String'] | null)}


/** Input for creating a bracket structure template */
export interface CreateStructureTemplateInput {
/** Group templates that make up the bracket structure */
groupTemplates: CreateGroupTemplateInput[]}


/** Input for creating a group template with its rounds and generation settings */
export interface CreateGroupTemplateInput {
/** Display name of the group */
name: Scalars['String'],
/** Sort order of this group within the structure */
order: Scalars['Float'],
/** Number of team slots available in this group */
teamSlots: Scalars['Float'],
/** AutoGenerateConfig for this group (legacy JSON) */
autoGenerate?: (AutoGenerateConfigInput | null),
/** Auto-generate algorithm type */
autoGenerateType?: (AutoGenerateType | null),
/** Number of team slots per game (default: 2) */
teamSlotsPerGame?: (Scalars['Int'] | null),
/** Best-of series count (default: 1) */
bestOf?: (Scalars['Int'] | null),
/** Override round count */
roundCount?: (Scalars['Int'] | null),
/** Match configuration for generated games */
matchConfiguration?: (GroupMatchConfigInput | null),
/** Round templates within this group */
roundTemplates: CreateRoundTemplateInput[]}


/** Input for configuring auto-generation of bracket structure */
export interface AutoGenerateConfigInput {
/** Auto-generation algorithm type (SINGLE_ELIM, ROUND_ROBIN, etc.) */
type: AutoGenerateType,
/** Minimum team count to trigger auto-generation */
fromTeamCount?: (Scalars['Int'] | null)}


/** Input for match configuration with scoring variables and formula */
export interface GroupMatchConfigInput {
/** Variables available for score computation */
variables?: (MatchConfigVariableInput[] | null),
/** Formula expression used to compute the final score from variables */
scoreFormula?: (Scalars['String'] | null)}


/** Input for creating a round template within a group */
export interface CreateRoundTemplateInput {
/** Display name of the round */
name: Scalars['String'],
/** Sort order of this round within its group */
order: Scalars['Float'],
/** Game templates within this round */
gameTemplates: CreateGameTemplateInput[]}


/** Input for creating a game template within a round */
export interface CreateGameTemplateInput {
/** Sort order of this game within the round */
order: Scalars['Float'],
/** Number of team slots in this game */
teamSlots?: Scalars['Float'],
/** Number of matches in the best-of series */
bestOf?: Scalars['Float'],
/** Match configuration for this game template */
matchConfiguration?: (MatchConfigRefInput | null),
/** Target reference on win */
onWinTarget?: (GameRefInput | null),
/** Target reference on loss */
onLossTarget?: (GameRefInput | null)}


/** Query parameters for filtering and ordering events */
export interface EventsQuery {
/** Order by type */
orderBy?: EventsQueryOrderBy,
/** Order direction */
orderDirection?: OrderDirection,
/** Filter by event status */
status?: EventsQueryStatus,
/** Show not visible events, only usable if the user has the correct permission */
showNotVisible?: (Scalars['Boolean'] | null),
/** Filter events by specific players and their statuses */
filterByPlayers?: (EventsQueryPlayerIdWithTeamStatusInput[] | null)}


/** Filter input combining a player ID with optional reservation and member statuses */
export interface EventsQueryPlayerIdWithTeamStatusInput {
/** Player id */
playerId: Scalars['ID'],
/** Filter by reservation status for this player */
reservationStatus?: (EventReservationStatus | null),
/** Filter by group member status for this player */
memberStatus?: (UserGroupMemberStatus | null)}


/** Query parameters for filtering event reservations */
export interface EventReservationsQueryInput {
/** Filter reservations by their registration status */
filterByRegistrationStatus?: (EventReservationStatus | null),
/** Only retrieve group members matching this status */
retrieveOnlyGroupMembersWithStatus?: (UserGroupMemberStatus | null),
/** Filter by player username prefix (case-insensitive) */
filterByPlayerUsernameQuery?: (Scalars['String'] | null),
/** Filter reservations by custom property values on the reservation */
filterByReservationProperties?: (PropertyValueInput[] | null),
/** Filter reservations by custom property values on the player profile */
filterByPlayerProperties?: (PropertyValueInput[] | null),
/** Filter reservations by identity provider properties of the player */
filterByPlayerIdentityProviderProperties?: (IdentityProviderPropertyInput[] | null),
/** Filter reservations by specific players and their group member statuses */
filterByPlayers?: (EventReservationsQueryPlayerIdWithGroupStatusInput[] | null),
/** Filter reservations by the status of their associated user group */
filterByGroupStatus?: (UserGroupStatus | null)}


/** Filter input combining a player ID with an optional group member status */
export interface EventReservationsQueryPlayerIdWithGroupStatusInput {
/** Player id */
playerId: Scalars['ID'],
/** Filter by the player's member status within the group */
memberStatus?: (UserGroupMemberStatus | null)}


/** Query input for filtering user groups by their IDs */
export interface UserGroupsQueryInput {
/** List of user group IDs to retrieve */
ids: Scalars['ID'][]}


/** Filter options for querying shops */
export interface ShopsFilterInput {
/** Filter by specific shop IDs */
ids?: (Scalars['ID'][] | null),
/** Filter by external identifiers */
externalIds?: (Scalars['String'][] | null)}


/** Filter options for querying shop categories */
export interface ShopCategoriesFilterInput {
/** Filter by specific category IDs */
ids?: (Scalars['ID'][] | null),
/** Filter by external identifiers */
externalIds?: (Scalars['String'][] | null),
/** Filter by parent shop IDs */
shopIds?: (Scalars['ID'][] | null)}


/** Filter options for querying player shop product purchases */
export interface PlayerShopProductPurshasesFilterInput {
/** Filter by specific shop product IDs */
shopProductIds?: (Scalars['ID'][] | null),
/** Filter by specific player profile IDs */
playerProfileIds?: (Scalars['ID'][] | null),
/** Filter by specific shop IDs */
shopIds?: (Scalars['ID'][] | null),
/** Filter by specific purchase record IDs */
ids?: (Scalars['ID'][] | null)}


/** Filter options for querying shop products */
export interface ShopProductsFilterInput {
/** Filter by category IDs */
categoryIds?: (Scalars['ID'][] | null),
/** Filter by specific product IDs */
ids?: (Scalars['ID'][] | null),
/** Filter by external identifiers */
externalIds?: (Scalars['String'][] | null)}


/** Filter criteria for querying items */
export interface ItemsFilterInput {
/** Filter items by category IDs */
categoryIds?: (Scalars['ID'][] | null),
/** Filter items by their IDs */
ids?: (Scalars['ID'][] | null),
/** Filter items by external IDs */
externalIds?: (Scalars['String'][] | null)}


/** Filter criteria for querying player items */
export interface PlayerItemsFilterInput {
/** Filter by item definition IDs */
itemIds?: (Scalars['ID'][] | null),
/** Filter by player profile IDs */
playerProfileIds?: (Scalars['ID'][] | null)}


/** Filter criteria for querying item categories */
export interface ItemCategoriesFilterInput {
/** Filter categories by their IDs */
ids?: (Scalars['ID'][] | null),
/** Filter categories by external IDs */
externalIds?: (Scalars['String'][] | null)}


/** Filter options for querying currencies */
export interface CurrenciesFilterInput {
/** Filter by specific currency IDs */
ids?: (Scalars['ID'][] | null),
/** Filter by external system identifiers */
externalIds?: (Scalars['String'][] | null)}


/** Filter options for querying player currency balances */
export interface PlayerCurrenciesFilterInput {
/** Filter by specific currency IDs */
currencyIds?: (Scalars['ID'][] | null),
/** Filter by specific player profile IDs */
playerProfileIds?: (Scalars['ID'][] | null)}


/** Filter options for browsing marketplace apps */
export interface MarketplaceAppsFilterInput {
/** Filter by app publication status */
status?: (MarketplaceAppStatus | null),
/** Search by name */
search?: (Scalars['String'] | null),
/** Filter by categories */
categories?: (Scalars['String'][] | null),
/** Only show apps owned by the current organization */
ownedByMe?: (Scalars['Boolean'] | null),
/** Only show apps that have frontend modules in their manifest */
hasModules?: (Scalars['Boolean'] | null)}


/** Filter options for querying entity metafields */
export interface EntityMetafieldsFilterInput {
/** Filter by metafield namespace */
namespace?: (Scalars['String'] | null),
/** Filter by the app ID that owns the metafields */
appId?: (Scalars['ID'] | null)}

export interface MutationGenqlSelection{
    /** Deletes an account by ID from the current organization */
    deleteAccount?: { __args: {id: Scalars['ID']} }
    /** Generates access token for an account identity provider with the stored refresh token */
    accountIdentityGenerateAccessToken?: { __args: {identityProviderId: Scalars['ID'], 
    /** if not provided, the current account id will be used */
    accountId?: (Scalars['ID'] | null)} }
    /** Refreshes an account identity by re-fetching data using the stored refresh token */
    accountIdentityRefresh?: (AccountIdentityGenqlSelection & { __args: {identityProviderId: Scalars['ID'], 
    /** if not provided, the current account id will be used */
    accountId?: (Scalars['ID'] | null)} })
    /** Attaches or updates an identity provider identity to the current account using a token */
    attachOrUpdateIdentityToAccount?: (AccountIdentityGenqlSelection & { __args: {identityProviderId: Scalars['ID'], token: Scalars['String']} })
    /** Generates a URL to redirect the user to for linking an identity provider to their account */
    generateIdentityLinkUrl?: (IdentityLinkUrlGenqlSelection & { __args: {identityProviderId: Scalars['ID']} })
    /** Updates an existing configuration preset */
    updateConfiguration?: (ConfigurationGenqlSelection & { __args: {id: Scalars['ID'], input: CreateConfigurationInput} })
    /** Deletes a configuration preset by ID */
    deleteConfiguration?: { __args: {id: Scalars['ID']} }
    /** Registers a new score for a player on a leaderboard */
    leaderboardRegisterPlayerScore?: (LeaderboardSeasonBucketScoreGenqlSelection & { __args: {input: LeaderboardRegisterPlayerScoreInput} })
    /** Creates a new leaderboard within the organization */
    createLeaderboard?: (LeaderboardGenqlSelection & { __args: {input: CreateLeaderboardInput} })
    /** Updates an existing leaderboard by ID */
    updateLeaderboard?: (LeaderboardGenqlSelection & { __args: {id: Scalars['ID'], input: UpdateLeaderboardInput} })
    /** Deletes a leaderboard by ID and adjusts organization limits */
    deleteLeaderboard?: { __args: {id: Scalars['ID']} }
    /** Creates a new season for a leaderboard */
    createLeaderboardSeason?: (LeaderboardSeasonGenqlSelection & { __args: {leaderboardId: Scalars['ID'], input: CreateLeaderboardSeasonInput} })
    /** Updates an existing leaderboard season by ID */
    updateLeaderboardSeason?: (LeaderboardSeasonGenqlSelection & { __args: {id: Scalars['ID'], input: UpdateLeaderboardSeasonInput} })
    /** Deletes a leaderboard season by ID and adjusts resource limits */
    deleteLeaderboardSeason?: { __args: {id: Scalars['ID']} }
    /** Creates a new score bucket within a leaderboard season */
    createLeaderboardSeasonBucket?: (LeaderboardSeasonBucketGenqlSelection & { __args: {seasonId: Scalars['ID'], input: CreateLeaderboardSeasonBucketInput} })
    /** Updates an existing leaderboard season bucket by ID */
    updateLeaderboardSeasonBucket?: (LeaderboardSeasonBucketGenqlSelection & { __args: {id: Scalars['ID'], input: UpdateLeaderboardSeasonBucketInput} })
    /** Deletes a leaderboard season bucket by ID and adjusts resource limits */
    deleteLeaderboardSeasonBucket?: { __args: {id: Scalars['ID']} }
    /** Update an existing organization name, description, or configuration */
    updateOrganization?: (OrganizationGenqlSelection & { __args: {organization: UpdateOrganizationInput} })
    /** Create a new organization with default permission groups */
    createOrganization?: (OrganizationGenqlSelection & { __args: {organization: CreateOrganizationInput} })
    /** Create a new permission group within the organization */
    createOrganizationGroup?: (OrganizationGroupGenqlSelection & { __args: {input: CreateOrganizationGroupInput} })
    /** Update the name and permissions of an existing organization group */
    updateOrganizationGroup?: (OrganizationGroupGenqlSelection & { __args: {id: Scalars['ID'], input: CreateOrganizationGroupInput} })
    /** Delete a custom (non-default) organization group */
    deleteOrganizationGroup?: { __args: {id: Scalars['ID']} }
    /** Add a new member to the organization or update an existing membership */
    setOrganizationMembership?: (OrganizationMemberGenqlSelection & { __args: {input: SetOrganizationMembershipInput} })
    /** Remove a member from the organization */
    deleteOrganizationMembership?: { __args: {input: DeleteOrganizationMembershipInput} }
    /** Create a new identity provider for the organization with OAuth2 or OpenID Connect configuration */
    createIdentityProvider?: (OrganizationIdentityProviderGenqlSelection & { __args: {input: CreateOrganizationIdentityProvider} })
    /** Update an existing identity provider configuration */
    updateIdentityProvider?: (OrganizationIdentityProviderGenqlSelection & { __args: {providerId: Scalars['ID'], input: UpdateOrganizationIdentityProvider} })
    /** Delete an identity provider from the organization */
    deleteIdentityProvider?: { __args: {id: Scalars['ID']} }
    /** Create a new OAuth2 app for the organization */
    createOrganizationApp?: (OrganizationAppGenqlSelection & { __args: {input: CreateOrganizationAppInput} })
    /** Regenerate the OAuth2 client secret for an organization app */
    resetOrganizationAppSecret?: { __args: {id: Scalars['String']} }
    /** Update an existing organization app configuration */
    updateOrganizationApp?: (OrganizationAppGenqlSelection & { __args: {id: Scalars['String'], input: UpdateOrganizationAppInput} })
    /** Delete an organization app and its OAuth2 client */
    deleteOrganizationApp?: { __args: {id: Scalars['String']} }
    /** Update the working manifest for an organization app */
    updateOrganizationAppManifest?: (OrganizationAppGenqlSelection & { __args: {id: Scalars['String'], manifest: AppManifestInput} })
    /** Create a new release for an app (snapshots current manifest) */
    createAppRelease?: (AppReleaseGenqlSelection & { __args: {appId: Scalars['ID'], input: CreateAppReleaseInput} })
    /** Create a new webhook endpoint for the organization with a generated signing secret */
    createWebhook?: (WebhookGenqlSelection & { __args: {input: CreateWebhookInput} })
    /** Update an existing webhook configuration */
    updateWebhook?: (WebhookGenqlSelection & { __args: {id: Scalars['ID'], input: UpdateWebhookInput} })
    /** Delete a webhook endpoint from the organization */
    deleteWebhook?: (WebhookGenqlSelection & { __args: {id: Scalars['ID']} })
    /** Regenerate the signing secret for a webhook, invalidating the previous secret */
    regenerateWebhookSecret?: (WebhookGenqlSelection & { __args: {id: Scalars['ID']} })
    /** Attach an application to the organization or update its permissions and group assignment */
    setOrganizationAttachedApp?: (OrganizationAttachedAppGenqlSelection & { __args: {input: SetOrganizationAttachedAppInput} })
    /** Detach an application from the organization */
    deleteOrganizationAttachedApp?: { __args: {input: DeleteOrganizationAttachedAppInput} }
    /** Sends emails to players using a template or custom content */
    emailSend?: { __args: {fromTemplate?: (EmailSendFromTemplateInput | null), fromCustom?: (EmailSendFromCustomInput | null)} } | boolean | number
    /** Creates or updates the SMTP email configuration for the organization */
    emailConfigurationUpdate?: (EmailConfigurationGenqlSelection & { __args: {input: EmailConfigurationInput} })
    /** Creates a new email template for a trigger event */
    emailTemplateCreate?: (EmailTemplateGenqlSelection & { __args: {input: EmailTemplateCreateInput} })
    /** Updates an existing email template by ID */
    emailTemplateUpdate?: (EmailTemplateGenqlSelection & { __args: {id: Scalars['ID'], input: EmailTemplateUpdateInput} })
    /** Deletes an email template by ID */
    emailTemplateDelete?: (EmailTemplateGenqlSelection & { __args: {id: Scalars['ID']} })
    /** Create a new player profile in the current organization */
    createPlayer?: (PlayerGenqlSelection & { __args: {input: CreatePlayerInput} })
    /** Update an existing player profile by ID or custom ID */
    updatePlayer?: (PlayerGenqlSelection & { __args: {input: UpdatePlayerInput, id?: (Scalars['ID'] | null), customId?: (Scalars['String'] | null)} })
    /** Create or update the authenticated user own player profile */
    createOrUpdateMyPlayerProfile?: (PlayerGenqlSelection & { __args: {input: UpdateMePlayerInput} })
    /** Delete a player profile by ID or custom ID */
    deletePlayer?: { __args: {id?: (Scalars['ID'] | null), customId?: (Scalars['ID'] | null)} } | boolean | number
    /** Create a new tournament */
    createTournament?: (TournamentGenqlSelection & { __args: {input: CreateTournamentInput} })
    /** Update a tournament */
    updateTournament?: (TournamentGenqlSelection & { __args: {input: UpdateTournamentInput, id: Scalars['ID']} })
    /** Delete a tournament */
    deleteTournament?: { __args: {id: Scalars['ID']} }
    /** Start a tournament step that has been seeded, transitioning it to STARTED status */
    startTournamentStep?: { __args: {stepId: Scalars['ID']} }
    /** Create a new tournament step with its bracket configuration */
    createTournamentStep?: (TournamentStepGenqlSelection & { __args: {tournamentId: Scalars['ID'], configuration: StepConfigurationInput, step: CreateTournamentStepInput} })
    /** Update a tournament step configuration, resetting it to CONFIGURED status */
    updateTournamentStep?: (TournamentStepGenqlSelection & { __args: {stepId: Scalars['ID'], configuration: StepConfigurationInput, step: CreateTournamentStepInput} })
    /** Delete a tournament step and all its associated groups, rounds, and games */
    deleteTournamentStep?: { __args: {stepId: Scalars['ID']} }
    /** Generate the bracket structure for a tournament step based on its configuration or rule set */
    generateTournamentStep?: { __args: {stepId: Scalars['ID'], teamsCount?: (Scalars['Int'] | null)} }
    /** Seed teams into a generated tournament step using automatic or manual seeding */
    seedTournamentStep?: { __args: {stepId: Scalars['ID'], input: SeedingInput} }
    /** Reset seeding: SEEDED → GENERATED. Clears team assignments and scores but keeps bracket structure. */
    resetTournamentStepSeeding?: { __args: {stepId: Scalars['ID']} }
    /** Full reset: → CONFIGURED. Deletes all generated brackets and scores. */
    resetTournamentStep?: { __args: {stepId: Scalars['ID']} }
    /** Update team scores for a match, handling formula computation and bracket progression */
    updateMatchScores?: (TournamentStepGroupRoundGameMatchGenqlSelection & { __args: {matchId: Scalars['ID'], input: UpdateMatchScoreInput[]} })
    /** Register multiple custom teams to a tournament as an admin, optionally creating new player profiles */
    registerCustomTournamentTeams?: (TournamentTeamGenqlSelection & { __args: {tournamentId: Scalars['ID'], input: RegisterCustomTeamsInput} })
    /** Register a new team to a tournament as the current authenticated player */
    registerTournamentTeam?: (TournamentTeamGenqlSelection & { __args: {tournamentId: Scalars['ID'], input: RegisterTournamentTeamInput} })
    /** Update a tournament team name, tag, or custom fields */
    updateTournamentTeam?: (TournamentTeamGenqlSelection & { __args: {input: UpdateTournamentTeamInput, tournamentId?: (Scalars['ID'] | null), teamId?: (Scalars['ID'] | null)} })
    /** Delete the current player own tournament team while registrations are open */
    deleteTournamentTeam?: { __args: {tournamentId: Scalars['ID']} }
    /** Delete any tournament team as an admin regardless of ownership */
    deleteAnyTournamentTeam?: { __args: {teamId: Scalars['ID']} }
    /** Confirm or unconfirm a tournament team registration after validation */
    confirmTournamentTeam?: (TournamentTeamGenqlSelection & { __args: {teamId: Scalars['ID'], confirm: Scalars['Boolean']} })
    /** Confirm or decline attendance for a tournament team awaiting presence confirmation */
    confirmTournamentAttendance?: (TournamentTeamGenqlSelection & { __args: {tournamentId: Scalars['ID'], attendance: Scalars['Boolean']} })
    /** Update the status of a tournament team as an admin */
    updateTournamentTeamStatus?: (TournamentTeamGenqlSelection & { __args: {tournamentTeamId: Scalars['ID'], status: TournamentTeamStatus} })
    /** Invite a player to join a tournament team as the team manager */
    inviteTournamentTeamMember?: { __args: {tournamentId: Scalars['ID'], playerId: Scalars['ID']} }
    /** Accept or decline an invitation to join a tournament team */
    answerToTournamentTeamInvite?: { __args: {teamId: Scalars['ID'], accept: Scalars['Boolean']} }
    /** Remove a team member or cancel a pending invitation */
    deleteTournamentTeamInvite?: { __args: {teamId: Scalars['ID'], playerId: Scalars['ID']} }
    /** Create or update a tournament administrator and their permissions */
    tournamentAdminUpsert?: (TournamentAdminGenqlSelection & { __args: {input: TournamentAdminUpsertInput} })
    /** Remove a tournament administrator */
    tournamentAdminDelete?: { __args: {input: TournamentAdminDeleteInput} }
    /** Create rule set for a tournament step */
    stepRuleSetCreate?: (StepRuleSetModelGenqlSelection & { __args: {stepId: Scalars['ID'], input: CreateStepRuleSetInput} })
    /** Update scoring rules (versioned) */
    scoringRulesUpdate?: (StepRuleSetModelGenqlSelection & { __args: {stepId: Scalars['ID'], input: UpdateScoringRulesInput} })
    /** Update advancement rules (versioned) */
    advancementRulesUpdate?: (StepRuleSetModelGenqlSelection & { __args: {stepId: Scalars['ID'], input: UpdateAdvancementRulesInput} })
    /** Update structure template (only when CONFIGURED) */
    structureTemplateUpdate?: (StepRuleSetModelGenqlSelection & { __args: {stepId: Scalars['ID'], input: CreateStructureTemplateInput} })
    /** Add a cross-step rule */
    crossStepRuleCreate?: (StepRuleSetModelGenqlSelection & { __args: {stepId: Scalars['ID'], input: CreateCrossStepRuleInput} })
    /** Remove a cross-step rule */
    crossStepRuleDelete?: (StepRuleSetModelGenqlSelection & { __args: {ruleId: Scalars['ID']} })
    /** Manual team advancement */
    manualAdvancementExecute?: (StepRuleSetModelGenqlSelection & { __args: {stepId: Scalars['ID'], input: ManualAdvancementInput} })
    /** Trigger a MANUAL rule */
    manualRuleTrigger?: (StepRuleSetModelGenqlSelection & { __args: {stepId: Scalars['ID'], ruleId: Scalars['ID']} })
    /** Approve a pending action from an autoExecute=false rule */
    pendingActionApprove?: (StepRuleSetModelGenqlSelection & { __args: {logId: Scalars['ID']} })
    /** Apply a preset rule configuration to a step */
    rulePresetApply?: (StepRuleSetModelGenqlSelection & { __args: {stepId: Scalars['ID'], presetName: RulePresetName, teamCount: Scalars['Int'], bestOf?: (Scalars['Int'] | null), teamSlotsPerGame?: (Scalars['Int'] | null), roundCount?: (Scalars['Int'] | null)} })
    /** Create a Stripe customer portal session URL for managing the organization subscription */
    stripeCreatePortalSession?: boolean | number
    /** Create a new CDN file record for a platform or template */
    platformFileCreate?: (PlatformCdnFileGenqlSelection & { __args: {input: PlatformCdnFileCreateInput, platformId?: (Scalars['ID'] | null), templateId?: (Scalars['ID'] | null)} })
    /** Publish the development version of a CDN file to production */
    platformFilePublish?: (PlatformCdnFileGenqlSelection & { __args: {id: Scalars['ID']} })
    /** Generate a presigned S3 upload URL for uploading file content to a CDN file */
    platformFileGenerateUploadUrl?: (PresignedUrlGenqlSelection & { __args: {id: Scalars['ID'], size: Scalars['Float']} })
    /** Validate and finalize an uploaded file, checking content type and moving it from temporary to dev storage */
    platformFileValidateFileUpload?: (PlatformCdnFileGenqlSelection & { __args: {id: Scalars['ID']} })
    /** Update the configuration of an existing CDN file */
    platformFileUpdate?: (PlatformCdnFileGenqlSelection & { __args: {id: Scalars['ID'], input: PlatformFileUpdateInput} })
    /** Delete a CDN file and remove its dev, tmp, and production assets from S3 */
    platformFileDelete?: { __args: {id: Scalars['ID']} }
    /** Create a new platform with a subdomain and associated OAuth application */
    platformCreate?: (PlatformGenqlSelection & { __args: {input: CreatePlatformInput} })
    /** Update an existing platform name and configuration */
    platformUpdate?: (PlatformGenqlSelection & { __args: {id: Scalars['ID'], input: UpdatePlatformInput} })
    /** Delete a platform and its associated OAuth application */
    platformDelete?: { __args: {id: Scalars['ID']} }
    /** Update the theme configuration for a platform */
    platformThemeUpdate?: (PlatformGenqlSelection & { __args: {platformId: Scalars['ID'], input: PlatformThemeInput} })
    /** Register a new custom domain for a platform via Cloudflare */
    platformRegisterCustomDomain?: (CustomDomainDataGenqlSelection & { __args: {platformId: Scalars['ID'], hostname: Scalars['String']} })
    /** Force a DNS/SSL validation recheck for a custom domain */
    platformForceCustomDomainRecheck?: (CustomDomainDataGenqlSelection & { __args: {hostname: Scalars['String']} })
    /** Remove a custom domain from a platform and clean up Cloudflare and OAuth configurations */
    platformRemoveCustomDomain?: { __args: {hostname: Scalars['String']} }
    /** Create a new platform template for the organization */
    platformTemplateCreate?: (PlatformTemplateGenqlSelection & { __args: {input: CreatePlatformTemplateInput} })
    /** Update an existing platform template */
    platformTemplateUpdate?: (PlatformTemplateGenqlSelection & { __args: {id: Scalars['ID'], input: UpdatePlatformTemplateInput} })
    /** Apply a template to a platform, copying all published template files to the target platform */
    platformTemplateApply?: (PlatformGenqlSelection & { __args: {platformTemplateId: Scalars['ID'], platformId: Scalars['ID']} })
    /** Delete a platform template from the organization */
    platformTemplateDelete?: { __args: {id: Scalars['ID']} }
    /** Update the organization subscription by changing item quantities, applying coupons or referrals */
    organizationSubscriptionItemsUpdate?: { __args: {items: OrganizationSubscriptionItemUpdateInput[], coupon?: (Scalars['String'] | null), referral?: (Scalars['String'] | null)} }
    /** Register a match result and update player skill ratings accordingly */
    organizationSkillRatingsRegisterMatch?: (OrganizationSkillRatingsRegisterMatchPlayerGenqlSelection & { __args: {organizationSkillRatingId: Scalars['ID'], input: OrganizationSkillRatingsRegisterMatchInput} })
    /** Create a new skill rating for the current organization */
    organizationSkillRatingCreate?: (OrganizationSkillRatingGenqlSelection & { __args: {input: OrganizationSkillRatingCreateInput} })
    /** Update an existing skill rating configuration */
    organizationSkillRatingUpdate?: (OrganizationSkillRatingGenqlSelection & { __args: {id: Scalars['ID'], input: OrganizationSkillRatingUpdateInput} })
    /** Delete a skill rating from the current organization */
    organizationSkillRatingDelete?: { __args: {id: Scalars['ID']} }
    /** Create a new event */
    eventCreate?: (EventGenqlSelection & { __args: {input: EventCreateInput} })
    /** Update an event */
    eventUpdate?: (EventGenqlSelection & { __args: {input: EventUpdateInput, id: Scalars['ID']} })
    /** Delete an event */
    eventDelete?: { __args: {id: Scalars['ID']} }
    /** Create a new ticket configuration for an event */
    eventTicketConfigurationCreate?: (EventTicketConfigurationGenqlSelection & { __args: {input: EventTicketConfigurationCreateInput} })
    /** Update an existing ticket configuration for an event */
    eventTicketConfigurationUpdate?: (EventTicketConfigurationGenqlSelection & { __args: {ticketConfigurationId: Scalars['ID'], input: EventTicketConfigurationUpdateInput} })
    /** Delete a ticket configuration from an event */
    eventTicketConfigurationDelete?: (EventTicketConfigurationGenqlSelection & { __args: {ticketConfigurationId: Scalars['ID']} })
    /** Update the status of an event reservation as an administrator */
    eventReservationUpdateStatus?: (EventReservationGenqlSelection & { __args: {reservationId: Scalars['ID'], status: EventReservationStatus, confirmPaymentRefundOrCancel?: (Scalars['Boolean'] | null)} })
    /** Confirm or decline attendance for an event reservation as the group manager */
    eventReservationConfirmPresence?: (EventReservationGenqlSelection & { __args: {eventId: Scalars['ID'], confirmed: Scalars['Boolean']} })
    /** Validate a reservation and initiate the Stripe payment session */
    eventReservationValidateAndPay?: (EventReservationValidateAndPayGenqlSelection & { __args: {eventId: Scalars['ID'], options: EventReservationValidateAndPayInput, ticketConfigurations?: (EventReservationTicketConfigurationInput[] | null)} })
    /** Create a new event reservation for events that require admin approval or have no-session registration flow */
    eventReservationCreate?: (EventReservationGenqlSelection & { __args: {eventId: Scalars['ID']} })
    /** Add, release, or update tickets within an active reservation session */
    eventReservationUpdateTickets?: (EventReservationGenqlSelection & { __args: {reservationId: Scalars['ID'], input: EventReservationUpdateTicketsInput} })
    /** Start a new registration session for an event, reserving tickets and creating a time-limited session */
    eventReservationStartRegistrationSession?: (EventReservationGenqlSelection & { __args: {eventId: Scalars['ID'], input: EventReservationRegisterTicketsInput} })
    /** Cancel an event reservation, releasing all tickets and deleting the associated group */
    eventReservationCancel?: (EventReservationGenqlSelection & { __args: {reservationId: Scalars['ID']} })
    /** Request a presigned URL to upload a new image for an event venue */
    eventVenueRequestImageUpdate?: (PresignedUrlGenqlSelection & { __args: {id: Scalars['ID'], size: Scalars['Float']} })
    /** Validate and finalize a previously uploaded venue image */
    eventVenueValidateImage?: (EventVenueGenqlSelection & { __args: {id: Scalars['ID']} })
    /** Create a new event venue for the organization */
    eventVenueCreate?: (EventVenueGenqlSelection & { __args: {input: EventVenueCreateInput} })
    /** Update an existing event venue */
    eventVenueUpdate?: (EventVenueGenqlSelection & { __args: {id: Scalars['ID'], input: EventVenueUpdateInput} })
    /** Delete an event venue from the organization */
    eventVenueDelete?: (EventVenueGenqlSelection & { __args: {id: Scalars['ID']} })
    /** Batch create, update, and delete seats for a venue in a single transaction */
    eventVenueSeatsUpdate?: (EventVenueSeatsUpdateResultGenqlSelection & { __args: {venueId: Scalars['ID'], input: EventVenueSeatsUpdateInput} })
    /** Create a new seat type for a venue */
    eventVenueSeatTypeCreate?: (EventVenueSeatTypeGenqlSelection & { __args: {venueId: Scalars['ID'], input: EventVenueSeatTypeCreateInput} })
    /** Update an existing seat type */
    eventVenueSeatTypeUpdate?: (EventVenueSeatTypeGenqlSelection & { __args: {id: Scalars['ID'], input: EventVenueSeatTypeUpdateInput} })
    /** Delete a seat type from a venue */
    eventVenueSeatTypeDelete?: (EventVenueSeatTypeGenqlSelection & { __args: {id: Scalars['ID']} })
    /** Create or update the Stripe Connect account for the organization and return the onboarding/update URL */
    organizationPaymentCollectionConfigurationCreateOrUpdateAccount?: boolean | number
    /** Invite a player to join a user group */
    userGroupInvite?: (UserGroupMemberGenqlSelection & { __args: {groupId: Scalars['ID'], playerId: Scalars['ID']} })
    /** Accept or decline a pending user group invitation */
    userGroupUpdateInvite?: (UserGroupMemberGenqlSelection & { __args: {groupId: Scalars['ID'], status: UserGroupMemberStatus} })
    /** Remove a player from a user group or cancel a pending invitation */
    userGroupDeleteInvite?: (UserGroupMemberGenqlSelection & { __args: {groupId: Scalars['ID'], 
    /** Used by manager of the group to delete the invite of a player */
    playerId?: (Scalars['ID'] | null)} })
    /** Create a new shop in the current organization */
    shopCreate?: (ShopGenqlSelection & { __args: {input: ShopCreateInput} })
    /** Update an existing shop by ID */
    shopUpdate?: (ShopGenqlSelection & { __args: {id: Scalars['ID'], input: ShopUpdateInput} })
    /** Delete a shop by ID and return the deleted shop */
    shopDelete?: (ShopGenqlSelection & { __args: {id: Scalars['ID']} })
    /** Create a new shop category within a shop */
    shopCategoryCreate?: (ShopCategoryGenqlSelection & { __args: {input: ShopCategoryCreateInput} })
    /** Update an existing shop category by ID */
    shopCategoryUpdate?: (ShopCategoryGenqlSelection & { __args: {id: Scalars['ID'], input: ShopCategoryUpdateInput} })
    /** Delete a shop category by ID and return the deleted category */
    shopCategoryDelete?: (ShopCategoryGenqlSelection & { __args: {id: Scalars['ID']} })
    /** Purchase shop products, returning payment session info if real payment is required or null for free/currency-only purchases */
    playerShopProductPurshase?: (PaymentUrlAndClientSecretGenqlSelection & { __args: {shopId: Scalars['ID'], paymentConfig?: (PaymentInput | null), input: PlayerShopProductPurshaseInput} })
    /** Create a new product within a shop */
    shopProductCreate?: (ShopProductGenqlSelection & { __args: {shopId: Scalars['ID'], input: ShopProductCreateInput} })
    /** Update an existing shop product by ID */
    shopProductUpdate?: (ShopProductGenqlSelection & { __args: {productId: Scalars['ID'], input: ShopProductUpdateInput} })
    /** Delete a shop product by ID and return the deleted product */
    shopProductDelete?: (ShopProductGenqlSelection & { __args: {productId: Scalars['ID']} })
    /** Creates a new item within the organization */
    itemCreate?: (ItemGenqlSelection & { __args: {input: ItemCreateInput} })
    /** Updates an existing item by ID */
    itemUpdate?: (ItemGenqlSelection & { __args: {id: Scalars['ID'], input: ItemUpdateInput} })
    /** Deletes an item by ID and adjusts organization limits */
    itemDelete?: (ItemGenqlSelection & { __args: {id: Scalars['ID']} })
    /** Bulk updates item quantities for a player, creating or removing items as needed */
    playerItemsUpdate?: (PlayerItemGenqlSelection & { __args: {playerId: Scalars['ID'], input: PlayerItemsUpdateInput} })
    /** Creates a new item category within the organization */
    itemCategoryCreate?: (ItemCategoryGenqlSelection & { __args: {input: ItemCategoryCreateInput} })
    /** Updates an existing item category by ID */
    itemCategoryUpdate?: (ItemCategoryGenqlSelection & { __args: {id: Scalars['ID'], input: ItemCategoryUpdateInput} })
    /** Deletes an item category by ID and adjusts organization limits */
    itemCategoryDelete?: (ItemCategoryGenqlSelection & { __args: {id: Scalars['ID']} })
    /** Creates a new currency for the organization */
    currencyCreate?: (CurrencyGenqlSelection & { __args: {input: CurrencyCreateInput} })
    /** Updates an existing currency by ID */
    currencyUpdate?: (CurrencyGenqlSelection & { __args: {id: Scalars['ID'], input: CurrencyUpdateInput} })
    /** Deletes a currency by ID and adjusts the organization limit */
    currencyDelete?: (CurrencyGenqlSelection & { __args: {id: Scalars['ID']} })
    /** Updates one or more currency balances for a player in a single transaction */
    playerCurrencyUpdate?: (PlayerCurrencyGenqlSelection & { __args: {playerId: Scalars['ID'], input: PlayerCurrencyUpdateInput[]} })
    /** Publish an app to the marketplace */
    publishMarketplaceApp?: (MarketplaceAppGenqlSelection & { __args: {input: PublishMarketplaceAppInput} })
    /** Update a marketplace app listing */
    updateMarketplaceApp?: (MarketplaceAppGenqlSelection & { __args: {id: Scalars['ID'], input: UpdateMarketplaceAppInput} })
    /** Install a marketplace app */
    installMarketplaceApp?: (MarketplaceAppInstallationGenqlSelection & { __args: {input: InstallMarketplaceAppInput} })
    /** Uninstall a marketplace app */
    uninstallMarketplaceApp?: { __args: {marketplaceAppId: Scalars['ID']} }
    /** Submit or update a review for a marketplace app */
    submitMarketplaceAppReview?: (MarketplaceAppReviewGenqlSelection & { __args: {input: SubmitMarketplaceAppReviewInput} })
    /** Set or update pricing for a marketplace app */
    setMarketplaceAppPricing?: (MarketplaceAppPricingGenqlSelection & { __args: {input: SetMarketplaceAppPricingInput} })
    /** Create a Stripe Checkout session for a paid marketplace app */
    createMarketplaceCheckout?: { __args: {input: CreateMarketplaceCheckoutInput} }
    /** Create a new release for a marketplace app and get presigned upload URLs */
    appCreateRelease?: (AppReleaseWithUploadUrlsGenqlSelection & { __args: {marketplaceAppId: Scalars['ID'], input: AppCreateReleaseInput} })
    /** Finalize a release: validate bundles and enqueue review job */
    appFinalizeRelease?: (AppBundleValidationErrorGenqlSelection & { __args: {releaseId: Scalars['ID']} })
    /** Manually publish a release (admin fallback) */
    appPublishRelease?: (MarketplaceAppReleaseGenqlSelection & { __args: {releaseId: Scalars['ID']} })
    /** Set (upsert) a module configuration on a platform */
    platformModuleConfigSet?: (PlatformModuleConfigGenqlSelection & { __args: {input: PlatformModuleConfigSetInput} })
    /** Delete a module configuration from a platform */
    platformModuleConfigDelete?: { __args: {input: PlatformModuleConfigDeleteInput} }
    /** Create or update a metafield on an entity */
    entityMetafieldSet?: (EntityMetafieldGenqlSelection & { __args: {input: SetEntityMetafieldInput} })
    /** Delete a metafield from an entity */
    entityMetafieldDelete?: { __args: {input: DeleteEntityMetafieldInput} }
    /** Set (create or update) metadata entries on an object */
    setObjectMetadata?: (ObjectMetadataGenqlSelection & { __args: {input: SetObjectMetadataInput} })
    /** Remove metadata entries from an object by key */
    removeObjectMetadata?: { __args: {input: RemoveObjectMetadataInput} }
    /** Create a new custom field definition */
    createCustomFieldDefinition?: (CustomFieldDefinitionModelGenqlSelection & { __args: {input: CreateCustomFieldDefinitionInput} })
    /** Update an existing custom field definition */
    updateCustomFieldDefinition?: (CustomFieldDefinitionModelGenqlSelection & { __args: {id: Scalars['ID'], input: UpdateCustomFieldDefinitionInput} })
    /** Delete a custom field definition and all its values */
    deleteCustomFieldDefinition?: { __args: {id: Scalars['ID']} }
    /** Reorder custom field definitions for an object type */
    reorderCustomFieldDefinitions?: (CustomFieldDefinitionModelGenqlSelection & { __args: {objectType: ObjectType, orderedIds: Scalars['ID'][]} })
    /** Set custom field values on an object */
    setCustomFieldValues?: (CustomFieldWithValueModelGenqlSelection & { __args: {input: SetCustomFieldValuesInput} })
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Input for creating or updating a reusable configuration preset */
export interface CreateConfigurationInput {
/** Display name of the configuration */
name: Scalars['String'],
/** Description of the configuration purpose */
description: Scalars['String'],
/** Type of configuration (TOURNAMENT or STEP) */
type: ConfigurationType,
/** Step configuration data, required when type is STEP */
stepConfiguration?: (StepConfigurationInput | null),
/** Tournament configuration data, required when type is TOURNAMENT */
tournamentConfiguration?: (TournamentConfigurationInput | null)}


/** Input for registering a player score on a leaderboard */
export interface LeaderboardRegisterPlayerScoreInput {
/** The ID of the leaderboard to register the score to */
leaderboardId: Scalars['ID'],
/** ID of the player to register the score for */
playerId: Scalars['ID'],
/** The score value to register */
score: Scalars['PositiveInt']}


/** Input for creating a new leaderboard */
export interface CreateLeaderboardInput {
/** The name of the leaderboard */
name: Scalars['String'],
/** The description of the leaderboard */
description: Scalars['String']}


/** Input for updating an existing leaderboard with partial fields */
export interface UpdateLeaderboardInput {
/** The name of the leaderboard */
name?: (Scalars['String'] | null),
/** The description of the leaderboard */
description?: (Scalars['String'] | null)}


/** Input for creating a new leaderboard season */
export interface CreateLeaderboardSeasonInput {
/** Display name of the season */
name: Scalars['String'],
/** Start date and time of the season */
start: Scalars['DateTime'],
/** End date and time of the season */
end: Scalars['DateTime'],
/** Initial score assigned to players when they join this season */
startingScore: Scalars['Float']}


/** Input for updating an existing leaderboard season with partial fields */
export interface UpdateLeaderboardSeasonInput {
/** Display name of the season */
name?: (Scalars['String'] | null),
/** Start date and time of the season */
start?: (Scalars['DateTime'] | null),
/** End date and time of the season */
end?: (Scalars['DateTime'] | null),
/** Initial score assigned to players when they join this season */
startingScore?: (Scalars['Float'] | null)}


/** Input for creating a new score bucket within a leaderboard season */
export interface CreateLeaderboardSeasonBucketInput {
/** Display name of the bucket (e.g., Gold, Silver, Bronze) */
name: Scalars['String'],
/** Minimum score required to be placed in this bucket */
minScore: Scalars['Float'],
/** Method used to calculate scores within this bucket */
scoreCalculationType: LeaderboardScoreCalculationType}


/** Input for updating an existing leaderboard season bucket with partial fields */
export interface UpdateLeaderboardSeasonBucketInput {
/** Display name of the bucket (e.g., Gold, Silver, Bronze) */
name?: (Scalars['String'] | null),
/** Minimum score required to be placed in this bucket */
minScore?: (Scalars['Float'] | null),
/** Method used to calculate scores within this bucket */
scoreCalculationType?: (LeaderboardScoreCalculationType | null)}


/** Input for updating an existing organization */
export interface UpdateOrganizationInput {
/** Display name of the organization (3-50 characters, letters and spaces) */
name: Scalars['String'],
/** Description of the organization */
description: Scalars['String'],
/** Initial configuration settings for the organization */
configuration: OrganizationConfigurationInput}


/** Input for updating organization configuration settings */
export interface OrganizationConfigurationInput {
/** Custom field definitions to configure */
customFields: PropertyInput[]}


/** Input for creating a new organization */
export interface CreateOrganizationInput {
/** Display name of the organization (3-50 characters, letters and spaces) */
name: Scalars['String'],
/** Description of the organization */
description: Scalars['String'],
/** Initial configuration settings for the organization */
configuration: OrganizationConfigurationInput}


/** Input for creating a new organization permission group */
export interface CreateOrganizationGroupInput {
/** Display name for the new group */
name: Scalars['String'],
/** Permissions to assign to the new group */
permissions: GroupPermissionInput[]}


/** Input for adding or updating an organization membership by user ID or email */
export interface SetOrganizationMembershipInput {
/** The account ID of the user to add or update, mutually exclusive with email */
userId?: (Scalars['ID'] | null),
/** The email address of the user to add or update, mutually exclusive with userId */
email?: (Scalars['EmailAddress'] | null),
/** Additional permissions to grant to this member */
permissions?: (GroupPermissionInput[] | null),
/** The permission group to assign to this member */
groupId?: (Scalars['ID'] | null)}


/** Input for removing a member from an organization */
export interface DeleteOrganizationMembershipInput {
/** The account ID of the member to remove */
userId: Scalars['ID']}


/** Input for creating a new identity provider for an organization */
export interface CreateOrganizationIdentityProvider {
/** Whether this identity provider is currently active */
enabled: Scalars['Boolean'],
/** Whether player accounts must be validated through this provider */
requiredForPlayerValidation: Scalars['Boolean'],
/** Whether users can log in using this identity provider */
allowLogin: Scalars['Boolean'],
/** Human-readable description of this identity provider */
description: Scalars['String'],
/** URL or identifier for the provider icon */
icon?: (Scalars['String'] | null),
/** Reference to the parent root identity provider, if derived from one */
identityProviderId?: (Scalars['ID'] | null),
/** Display name of the identity provider */
name: Scalars['String'],
/** OAuth2 client configuration, mutually exclusive with openidConfiguration */
oauth2Configuration?: (OAuthClientConfigurationInput | null),
/** OpenID Connect configuration, mutually exclusive with oauth2Configuration */
openidConfiguration?: (OpenidConfigurationInput | null)}


/** Input for configuring an OAuth2 identity provider client */
export interface OAuthClientConfigurationInput {
/** OAuth2/OIDC authorization endpoint URL */
authorizationEndpoint?: (Scalars['String'] | null),
/** List of endpoints to retrieve user data from after authentication */
dataRetrievers: DataRetrievalConfigInput[],
/** Issuer identifier for the identity provider */
issuer?: (Scalars['String'] | null),
/** Type of identity provider (OPENID or OAUTH2) */
providerType: IdentityProviderType,
/** OAuth2 client ID issued by the identity provider */
clientId: Scalars['String'],
/** OAuth2 client secret issued by the identity provider */
clientSecret: Scalars['String'],
/** Authentication method used when calling the token endpoint */
tokenEndpointAuthMethod?: (OauthEndpointAuthMethod | null),
/** URL to redirect users back to after authentication */
redirectUrl: Scalars['String'],
/** URL of the OAuth2 token endpoint for exchanging authorization codes */
tokenEndpoint?: (Scalars['String'] | null),
/** URL of the OAuth2 authorization endpoint where users are redirected to authenticate */
authorizationUrl?: (Scalars['String'] | null),
/** URL where users are redirected after the identity linking process completes. Required for the IDP-based identity linking flow via generateIdentityLinkUrl. */
linkRedirectUrl?: (Scalars['String'] | null)}

export interface OpenidConfigurationInput {
/** OAuth2/OIDC authorization endpoint URL */
authorizationEndpoint?: (Scalars['String'] | null),
/** List of endpoints to retrieve user data from after authentication */
dataRetrievers: DataRetrievalConfigInput[],
/** Issuer identifier for the identity provider */
issuer?: (Scalars['String'] | null),
/** Type of identity provider (OPENID or OAUTH2) */
providerType: IdentityProviderType,
/** OpenID Connect client ID issued by the identity provider */
clientId: Scalars['String'],
/** OpenID Connect client secret issued by the identity provider */
clientSecret: Scalars['String'],
/** URL to redirect users back to after OpenID authentication */
redirectUrl: Scalars['String']}


/** Input for updating an existing identity provider configuration */
export interface UpdateOrganizationIdentityProvider {
/** Whether this identity provider is currently active */
enabled: Scalars['Boolean'],
/** Whether player accounts must be validated through this provider */
requiredForPlayerValidation: Scalars['Boolean'],
/** Whether users can log in using this identity provider */
allowLogin: Scalars['Boolean'],
/** Human-readable description of this identity provider */
description: Scalars['String'],
/** URL or identifier for the provider icon */
icon?: (Scalars['String'] | null),
/** Display name of the identity provider */
name: Scalars['String'],
/** OAuth2 client configuration, mutually exclusive with openidConfiguration */
oauth2Configuration?: (OAuthClientConfigurationInput | null),
/** OpenID Connect configuration, mutually exclusive with oauth2Configuration */
openidConfiguration?: (OpenidConfigurationInput | null)}


/** Input for creating a new organization app with OAuth2 configuration */
export interface CreateOrganizationAppInput {
/** Display name of the app */
name: Scalars['String'],
/** Description of the app */
description: Scalars['String'],
/** Whether this is a public OAuth2 client (no client secret required) */
public?: (Scalars['Boolean'] | null),
/** App icon URL */
icon?: (Scalars['String'] | null),
/** Short description of the app */
shortDescription?: (Scalars['String'] | null),
/** Allowed OAuth2 redirect URLs after authorization */
redirectUrls: Scalars['String'][],
/** Allowed redirect URLs after logout */
logoutRedirectUrls: Scalars['String'][],
/** URL where users are redirected to log in */
loginUrl: Scalars['String'],
/** URL where users are redirected to grant consent */
consentUrl: Scalars['String'],
/** Whether the app requires explicit user consent during authorization */
requiresConsent: Scalars['Boolean']}


/** Input for updating an existing organization app configuration */
export interface UpdateOrganizationAppInput {
/** Display name of the app */
name?: (Scalars['String'] | null),
/** Description of the app */
description?: (Scalars['String'] | null),
/** App icon URL */
icon?: (Scalars['String'] | null),
/** Short description of the app */
shortDescription?: (Scalars['String'] | null),
/** Allowed OAuth2 redirect URLs after authorization */
redirectUrls: Scalars['String'][],
/** Allowed redirect URLs after logout */
logoutRedirectUrls: Scalars['String'][],
/** URL where users are redirected to log in */
loginUrl: Scalars['String'],
/** URL where users are redirected to grant consent */
consentUrl: Scalars['String'],
/** Whether the app requires explicit user consent during authorization */
requiresConsent: Scalars['Boolean']}


/** Input for defining a marketplace app manifest */
export interface AppManifestInput {
/** Manifest schema version */
version?: Scalars['String'],
/** Permissions requested by this app (OrganizationPermission IDs) */
permissions: Scalars['String'][],
/** UI extensions registered by this app */
extensions?: ExtensionPointInput[],
/** URL to receive webhook events when app is installed */
webhookUrl?: (Scalars['String'] | null),
/** Webhook event types this app subscribes to */
webhookEvents?: WebhookEventType[],
/** Metafield namespaces this app is allowed to use */
metafieldNamespaces?: Scalars['String'][],
/** Frontend micro-frontend modules registered by this app */
frontendModules?: FrontendModuleInput[]}


/** Input for defining a UI extension point in an app manifest */
export interface ExtensionPointInput {
/** Location type where this extension point is rendered */
type: ExtensionPointType,
/** Display label for the extension point tab or widget */
label: Scalars['String'],
/** URL patterns where this extension is active (e.g. "/tournaments/:tournamentId/overview") */
activePages: Scalars['String'][],
/** Optional size constraints for the extension point iframe */
size?: (ExtensionPointSizeInput | null)}


/** Input for specifying extension point size constraints */
export interface ExtensionPointSizeInput {
/** Maximum width in pixels (100-2000) */
maxWidth?: (Scalars['Int'] | null),
/** Maximum height in pixels (100-2000) */
maxHeight?: (Scalars['Int'] | null)}


/** Input for defining a frontend micro-frontend module in an app manifest */
export interface FrontendModuleInput {
/** Unique name identifier for this module (alphanumeric, hyphens, underscores) */
name: Scalars['String'],
/** Human-readable display name for this module */
displayName: Scalars['String'],
/** Description of what this module provides */
description?: (Scalars['String'] | null),
/** Named export from the bundle to use as the module entry point */
exportName?: Scalars['String'],
/** Semantic version of this module */
version: Scalars['String'],
/** Schema defining the props this module accepts */
propsSchema?: FrontendModulePropEntryInput[],
/** Events this module can emit */
events?: FrontendModuleEventInput[]}


/** Input for defining a frontend module prop schema entry (key + schema) */
export interface FrontendModulePropEntryInput {
/** Property key/name */
key: Scalars['String'],
/** Data type of this prop */
type: FrontendModulePropType,
/** Display label for this prop */
label: Scalars['String'],
/** Description of what this prop controls */
description?: (Scalars['String'] | null),
/** Whether this prop is required */
required?: Scalars['Boolean'],
/** Default value for this prop (serialized as string) */
defaultValue?: (Scalars['String'] | null),
/** Available options for select-type props */
options?: (FrontendModulePropOptionInput[] | null),
/** Route parameter name for route-param type props */
param?: (Scalars['String'] | null)}


/** Input for defining a selectable option for a frontend module prop */
export interface FrontendModulePropOptionInput {
/** Display label for this option */
label: Scalars['String'],
/** Value for this option */
value: Scalars['String']}


/** Input for defining a frontend module event */
export interface FrontendModuleEventInput {
/** Unique event name identifier (alphanumeric, hyphens, underscores) */
name: Scalars['String'],
/** Description of when this event is emitted */
description?: (Scalars['String'] | null)}


/** Input for creating a new app release */
export interface CreateAppReleaseInput {
/** Semantic version string (e.g. 1.0.0) */
version: Scalars['String'],
/** Release notes */
notes?: (Scalars['String'] | null)}


/** Input for creating a new webhook endpoint */
export interface CreateWebhookInput {
/** The event types this webhook is subscribed to */
events: WebhookEventType[],
/** The URL that will receive webhook POST requests */
url: Scalars['String'],
/** Human-readable description of this webhook */
description: Scalars['String'],
/** Whether this webhook is currently active and receiving events */
active: Scalars['Boolean']}


/** Input for partially updating an existing webhook configuration */
export interface UpdateWebhookInput {
/** The event types this webhook is subscribed to */
events?: (WebhookEventType[] | null),
/** The URL that will receive webhook POST requests */
url?: (Scalars['String'] | null),
/** Human-readable description of this webhook */
description?: (Scalars['String'] | null),
/** Whether this webhook is currently active and receiving events */
active?: (Scalars['Boolean'] | null)}


/** Input for attaching or updating an application within an organization */
export interface SetOrganizationAttachedAppInput {
/** The ID of the application to attach */
appId: Scalars['String'],
/** Permissions to grant to the attached application */
permissions?: (GroupPermissionInput[] | null),
/** The permission group to assign to this attached app */
groupId?: (Scalars['ID'] | null)}


/** Input for detaching an application from an organization */
export interface DeleteOrganizationAttachedAppInput {
/** The ID of the application to detach */
appId: Scalars['String']}


/** Input for sending an email using an existing template */
export interface EmailSendFromTemplateInput {
/** Trigger event whose default template will be used */
triggerEvent: EmailTriggerEvents,
/** Specific player IDs to send to, or all players if omitted */
playerIds?: (Scalars['ID'] | null),
/** Template variable values to interpolate into the email */
variables: PropertyValueInput[]}


/** Input for sending a custom email with inline subject and body */
export interface EmailSendFromCustomInput {
/** Player property field that contains the email address */
emailField: PlayerFieldInput,
/** Specific player IDs to send to, or all players if omitted */
playerIds?: (Scalars['ID'] | null),
/** Subject line of the custom email */
subject: Scalars['String'],
/** HTML body content of the custom email */
body: Scalars['String']}


/** Input for creating a new email template */
export interface EmailTemplateCreateInput {
/** Event that triggers this email template */
triggerEvent: EmailTriggerEvents,
/** Whether this is the default template for the trigger event */
default: Scalars['Boolean'],
/** Display name of the email template */
name: Scalars['String'],
/** Subject line of the email, supports template variables */
title: Scalars['String'],
/** HTML body content of the email, supports template variables */
contents: Scalars['String']}


/** Input for partially updating an existing email template */
export interface EmailTemplateUpdateInput {
/** Event that triggers this email template */
triggerEvent?: (EmailTriggerEvents | null),
/** Whether this is the default template for the trigger event */
default?: (Scalars['Boolean'] | null),
/** Display name of the email template */
name?: (Scalars['String'] | null),
/** Subject line of the email, supports template variables */
title?: (Scalars['String'] | null),
/** HTML body content of the email, supports template variables */
contents?: (Scalars['String'] | null)}


/** Input for creating a new player profile */
export interface CreatePlayerInput {
/** The display username (3-50 alphanumeric characters, hyphens, underscores) */
username: Scalars['String'],
/** A text description or bio for the player */
description: Scalars['String'],
/** The ID of the account that will own this player profile */
ownerId?: (Scalars['ID'] | null),
/** A custom external identifier assigned by the organization */
organizationCustomId?: (Scalars['String'] | null),
/** Custom fields to set on the player profile */
customFields: PlayerCustomFieldInput[]}


/** Input for a single custom field on a player profile */
export interface PlayerCustomFieldInput {
/** The custom field property key */
property: Scalars['String'],
/** The custom field value */
value: Scalars['String']}


/** Input for updating an existing player profile (all fields optional) */
export interface UpdatePlayerInput {
/** The display username (3-50 alphanumeric characters, hyphens, underscores) */
username?: (Scalars['String'] | null),
/** A text description or bio for the player */
description?: (Scalars['String'] | null),
/** The ID of the account that will own this player profile */
ownerId?: (Scalars['ID'] | null),
/** A custom external identifier assigned by the organization */
organizationCustomId?: (Scalars['String'] | null),
/** Custom fields to set on the player profile */
customFields?: (PlayerCustomFieldInput[] | null)}


/** Input for creating or updating the current user own player profile */
export interface UpdateMePlayerInput {
/** The display username (3-50 alphanumeric characters, hyphens, underscores) */
username: Scalars['String'],
/** A text description or bio for the player */
description: Scalars['String'],
/** Custom fields to set on the player profile */
customFields: PlayerCustomFieldInput[]}


/** Input for creating a new tournament */
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


/** Provide a tournament configuration inline or import one from a saved configuration by ID */
export interface UpdateTournamentConfigurationOrImportFromIdInput {
/** Import configuration from a saved configuration */
fromId?: (Scalars['ID'] | null),
/** Tournament configuration */
configuration?: (UpdateTournamentConfigurationInput | null)}


/** Input for partially updating a tournament configuration */
export interface UpdateTournamentConfigurationInput {
/** Discriminator type, always TOURNAMENT for tournament configurations */
type?: (ConfigurationType | null),
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


/** Input for updating an existing tournament, all fields are optional */
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


/** Input for creating a new tournament step */
export interface CreateTournamentStepInput {
/** Name of the tournament step */
name: Scalars['String'],
/** Description of the tournament step */
description: Scalars['String'],
/** Display order of this step within the tournament */
order: Scalars['Float'],
/** Type of bracket or competition format for this step */
type: StepType,
/** Custom properties for this step */
properties?: (PropertyValueInput[] | null)}


/** automaticSeeding or manualSeeding must be set */
export interface SeedingInput {
/** Use automatic seeding with a chosen algorithm */
automaticSeeding?: (AutomaticSeedingInput | null),
/** Use manual seeding with explicit team-to-group assignments */
manualSeeding?: (ManualSeedingInput | null)}


/** Input for automatic seeding of teams into a tournament step */
export interface AutomaticSeedingInput {
/** Algorithm to use for ordering teams during seeding */
seedingMechanism: SeedingMechanism,
/** Algorithm to use for distributing teams across groups */
groupRepartitionMechanism: GroupRepartitionMechanism,
/** Specific team IDs to seed; if omitted, all confirmed teams are used */
teams: Scalars['ID'][]}


/** Input for manually assigning teams to specific groups */
export interface ManualSeedingInput {
/** List of group-to-teams assignments */
groups: ManualSeedingGroupInput[]}


/** Manual seeding assignment for a single group */
export interface ManualSeedingGroupInput {
/** ID of the group to seed teams into */
group: Scalars['ID'],
/** Ordered list of team IDs to seed into this group */
teams: Scalars['ID'][]}


/** Input for updating a team score within a match */
export interface UpdateMatchScoreInput {
/** ID of the team whose score is being updated */
teamId: Scalars['ID'],
/** Variable values used to compute the score via formula */
variables?: (UpdateTournamentMatchScoreVariablesInput[] | null),
/** Override the computed score with a fixed value */
forcedScoreValue?: (Scalars['Float'] | null),
/** Status of this team score (WAITING, WINNER, LOSER, FORFEIT) */
status?: (MatchScoreStatus | null)}


/** Variable name-value pair used to compute a match score via formula */
export interface UpdateTournamentMatchScoreVariablesInput {
/** Formula variable name as defined in the match configuration */
formulaName: Scalars['String'],
/** Numeric value for this variable */
value: Scalars['Float']}


/** Input for batch-registering multiple custom teams to a tournament */
export interface RegisterCustomTeamsInput {
/** List of custom teams to register (1 to 100) */
customTeams: RegisterCustomTeamInput[]}


/** Input for a single custom team to register with members and status */
export interface RegisterCustomTeamInput {
/** New display name for the team */
name: Scalars['String'],
/** New short tag or abbreviation for the team */
tag: Scalars['String'],
/** Custom field values to set on the team */
customFields?: (PropertyValueInput[] | null),
/** ID of an existing permanent team to import members and properties from */
fromExistingTeamId?: (Scalars['ID'] | null),
/** List of members to add to this custom team */
members?: (CustomTeamMemberInput[] | null),
/** Initial status to assign to this custom team */
status: TournamentTeamStatus}


/** A member to add to a custom team, either by existing player ID or by creating a new player profile */
export interface CustomTeamMemberInput {
/** An existing player profile ID to use for this team, you have to set either playerId or player, not both */
playerId?: (Scalars['ID'] | null),
/** A custom created player, will create a real player profile if set. You should set either player or playerId, not both */
player?: (CreatePlayerInput | null)}


/** Input for registering a new team to a tournament */
export interface RegisterTournamentTeamInput {
/** New display name for the team */
name: Scalars['String'],
/** New short tag or abbreviation for the team */
tag: Scalars['String'],
/** Custom field values to set on the team */
customFields?: (PropertyValueInput[] | null),
/** ID of an existing permanent team to import members and properties from */
fromExistingTeamId?: (Scalars['ID'] | null)}


/** Input for updating a tournament team */
export interface UpdateTournamentTeamInput {
/** New display name for the team */
name: Scalars['String'],
/** New short tag or abbreviation for the team */
tag: Scalars['String'],
/** Custom field values to set on the team */
customFields?: (PropertyValueInput[] | null)}


/** Input for creating or updating a tournament admin with permissions */
export interface TournamentAdminUpsertInput {
/** Unique identifier for this admin assignment */
id: Scalars['ID'],
/** ID of the tournament this admin is assigned to */
tournamentId: Scalars['ID'],
/** ID of the account that has admin access */
accountId: Scalars['ID'],
/** List of permissions granted to this tournament admin */
permissions: TournamentAdminPermissions[]}


/** Input for removing a tournament admin */
export interface TournamentAdminDeleteInput {
/** Unique identifier for this admin assignment */
id: Scalars['ID'],
/** ID of the tournament this admin is assigned to */
tournamentId: Scalars['ID'],
/** ID of the account that has admin access */
accountId: Scalars['ID']}


/** Input for partially updating scoring rules */
export interface UpdateScoringRulesInput {
/** Method used to aggregate scores across matches */
aggregation?: (ScoreAggregationType | null),
/** Human-readable formula string */
formula?: (Scalars['String'] | null),
/** Points awarded for a win */
winPoints?: (Scalars['Float'] | null),
/** Points awarded for a loss */
lossPoints?: (Scalars['Float'] | null),
/** Points awarded for a draw */
drawPoints?: (Scalars['Float'] | null),
/** Points awarded for a forfeit */
forfeitPoints?: (Scalars['Float'] | null),
/** Ordered list of tiebreaker rules */
tiebreakers?: (CreateTiebreakerInput[] | null)}


/** Input for replacing all advancement rules in a rule set */
export interface UpdateAdvancementRulesInput {
/** Complete list of advancement rules to replace existing ones */
advancementRules: CreateAdvancementRuleInput[]}


/** Input for manually advancing a team within a tournament step */
export interface ManualAdvancementInput {
/** ID of the team to advance */
teamId: Scalars['ID'],
/** Target game by ID */
targetGameId?: (Scalars['ID'] | null),
/** Target game by relative reference */
targetGameRef?: (GameRefInput | null),
/** Target slot index in the game (0-based) */
targetSlot?: (Scalars['Float'] | null)}


/** Input for creating a new CDN file on a platform or template */
export interface PlatformCdnFileCreateInput {
/** The file name including path segments */
name: Scalars['String'],
/** The type of CDN file (PAGE, COMPONENT, TEXT, or IMAGE) */
type: PlatformCdnFileType,
/** File configuration options such as page routing config */
config?: (PlatformCdnFileConfigsInput | null)}


/** Input for updating the configuration of an existing CDN file */
export interface PlatformFileUpdateInput {
/** File configuration options such as page routing config */
config?: (PlatformCdnFileConfigsInput | null)}


/** Input for creating a new platform with a subdomain */
export interface CreatePlatformInput {
/** Display name of the platform */
name: Scalars['String'],
/** Platform configuration settings including white-label options */
configuration?: (PlatformConfigurationInput | null),
/** The OAuth application ID associated with this platform */
appId?: (Scalars['String'] | null),
/** The subdomain for the platform (3-25 alphanumeric characters with optional hyphens) */
subdomain: Scalars['String']}


/** Input for updating an existing platform configuration */
export interface UpdatePlatformInput {
/** Display name of the platform */
name: Scalars['String'],
/** Platform configuration settings including white-label options */
configuration?: (PlatformConfigurationInput | null),
/** The OAuth application ID associated with this platform */
appId?: (Scalars['String'] | null)}


/** Input for updating platform theme configuration */
export interface PlatformThemeInput {
/** Primary brand color (hex) */
primaryColor?: (Scalars['String'] | null),
/** Secondary brand color (hex) */
secondaryColor?: (Scalars['String'] | null),
/** Page background color (hex) */
backgroundColor?: (Scalars['String'] | null),
/** Surface/card background color (hex) */
surfaceColor?: (Scalars['String'] | null),
/** Primary text color (hex) */
textColor?: (Scalars['String'] | null),
/** Muted/secondary text color (hex) */
textMutedColor?: (Scalars['String'] | null),
/** Primary font family name */
fontFamily?: (Scalars['String'] | null),
/** Heading font family name */
headingFont?: (Scalars['String'] | null),
/** Border radius value (e.g. "8px", "0.5rem") */
borderRadius?: (Scalars['String'] | null),
/** URL of the platform logo image */
logoUrl?: (Scalars['String'] | null),
/** Social media links displayed on the platform */
socialLinks?: (PlatformThemeSocialLinksInput | null),
/** Homepage section visibility and ordering configuration */
sections?: (PlatformThemeSectionConfigInput[] | null)}


/** Input for platform theme social media links */
export interface PlatformThemeSocialLinksInput {
/** Twitter/X profile URL */
twitter?: (Scalars['String'] | null),
/** Discord server invite URL */
discord?: (Scalars['String'] | null),
/** Twitch channel URL */
twitch?: (Scalars['String'] | null)}


/** Input for a platform homepage section configuration */
export interface PlatformThemeSectionConfigInput {
/** Section identifier name */
name: Scalars['String'],
/** Whether the section is visible on the platform */
visible: Scalars['Boolean'],
/** Display order of the section */
order: Scalars['Float']}


/** Input for creating a new platform template */
export interface CreatePlatformTemplateInput {
/** Display name of the template */
name: Scalars['String'],
/** Human-readable description of the template */
description: Scalars['String'],
/** URL of the template preview screenshot */
screenshotUrl: Scalars['URL'],
/** Whether this template is publicly available to all organizations */
public: Scalars['Boolean']}


/** Input for partially updating an existing platform template */
export interface UpdatePlatformTemplateInput {
/** Display name of the template */
name?: (Scalars['String'] | null),
/** Human-readable description of the template */
description?: (Scalars['String'] | null),
/** URL of the template preview screenshot */
screenshotUrl?: (Scalars['URL'] | null),
/** Whether this template is publicly available to all organizations */
public?: (Scalars['Boolean'] | null)}


/** Input for updating the quantity of a subscription item for an organization */
export interface OrganizationSubscriptionItemUpdateInput {
/** ID of the subscription item to update */
subscriptionItemId: Scalars['ID'],
/** New quantity for the subscription item */
count: Scalars['Float']}


/** Input for registering a match result with team compositions and rankings */
export interface OrganizationSkillRatingsRegisterMatchInput {
/** Ordered list of teams, ranked by placement (first = winner) */
teams: OrganizationSkillRatingsRegisterMatchTeamInput[]}


/** Input representing a team in a skill rating match registration */
export interface OrganizationSkillRatingsRegisterMatchTeamInput {
/** List of player profile IDs on this team */
players: Scalars['ID'][]}


/** Input for creating a new organization skill rating */
export interface OrganizationSkillRatingCreateInput {
/** Display name of the skill rating */
name: Scalars['String'],
/** Description of what this skill rating measures */
description: Scalars['String'],
/** Algorithm type used for rating calculation */
type: SkillRatingType,
/** Configuration options for this skill rating */
configuration: SkillRatingConfigurationInput}


/** Input for updating an existing organization skill rating */
export interface OrganizationSkillRatingUpdateInput {
/** Display name of the skill rating */
name?: (Scalars['String'] | null),
/** Description of what this skill rating measures */
description?: (Scalars['String'] | null),
/** Algorithm type used for rating calculation */
type?: (SkillRatingType | null),
/** Configuration options for this skill rating */
configuration?: (SkillRatingConfigurationInput | null)}


/** Input for creating a new event */
export interface EventCreateInput {
/** Display title of the event */
title: Scalars['String'],
/** Detailed description of the event */
description: Scalars['String'],
/** Scheduled start date and time of the event */
startAt?: (Scalars['DateTime'] | null),
/** Scheduled end date and time of the event */
endAt?: (Scalars['DateTime'] | null),
/** Date and time when registrations open */
startRegistrationsAt?: (Scalars['DateTime'] | null),
/** Date and time when registrations close */
endRegistrationsAt?: (Scalars['DateTime'] | null),
/** Date and time when the event becomes publicly visible */
visibleAt?: (Scalars['DateTime'] | null),
/** Event configuration including group, ticketing, and registration settings */
configuration?: (EventConfigurationInput | null),
/** Identifier of the venue where the event takes place */
eventVenueId?: (Scalars['ID'] | null)}


/** Input for updating an existing event with partial fields */
export interface EventUpdateInput {
/** Display title of the event */
title?: (Scalars['String'] | null),
/** Detailed description of the event */
description?: (Scalars['String'] | null),
/** Scheduled start date and time of the event */
startAt?: (Scalars['DateTime'] | null),
/** Scheduled end date and time of the event */
endAt?: (Scalars['DateTime'] | null),
/** Date and time when registrations open */
startRegistrationsAt?: (Scalars['DateTime'] | null),
/** Date and time when registrations close */
endRegistrationsAt?: (Scalars['DateTime'] | null),
/** Date and time when the event becomes publicly visible */
visibleAt?: (Scalars['DateTime'] | null),
/** Event configuration including group, ticketing, and registration settings */
configuration?: (EventConfigurationInput | null),
/** Identifier of the venue where the event takes place */
eventVenueId?: (Scalars['ID'] | null)}


/** Input for creating a new ticket configuration for an event */
export interface EventTicketConfigurationCreateInput {
/** Display name of the ticket type */
name: Scalars['String'],
/** Description of what this ticket type includes */
description: Scalars['String'],
/** Price of the ticket in the smallest currency unit (e.g., cents) */
price: Scalars['Float'],
/** Currency code for the ticket price */
currency: ShopCurrencies,
/** Maximum number of tickets available for this configuration */
maxCount: Scalars['Float'],
/** Whether this ticket type is currently available for purchase */
buyable: Scalars['Boolean'],
/** Identifier of the event this ticket configuration belongs to */
eventId: Scalars['ID'],
/** Identifier of the venue seat type associated with this ticket */
seatTypeId?: (Scalars['ID'] | null),
/** Additional configuration including custom fields for this ticket type */
configuration?: (EventTicketConfigurationConfigurationInput | null)}


/** Input for updating an existing ticket configuration with partial fields */
export interface EventTicketConfigurationUpdateInput {
/** Display name of the ticket type */
name?: (Scalars['String'] | null),
/** Description of what this ticket type includes */
description?: (Scalars['String'] | null),
/** Price of the ticket in the smallest currency unit (e.g., cents) */
price?: (Scalars['Float'] | null),
/** Currency code for the ticket price */
currency?: (ShopCurrencies | null),
/** Maximum number of tickets available for this configuration */
maxCount?: (Scalars['Float'] | null),
/** Whether this ticket type is currently available for purchase */
buyable?: (Scalars['Boolean'] | null),
/** Identifier of the venue seat type associated with this ticket */
seatTypeId?: (Scalars['ID'] | null),
/** Additional configuration including custom fields for this ticket type */
configuration?: (EventTicketConfigurationConfigurationInput | null)}


/** Input options for the payment session including redirect URLs and UI mode */
export interface EventReservationValidateAndPayInput {
/** The URL to which Stripe should send customers when payment or setup is complete. This parameter is not allowed if uiMode is "embedded". */
successUrl?: (Scalars['String'] | null),
/** If set, Checkout displays a back button and customers will be directed to this URL if they decide to cancel payment and return to your website. This parameter is not allowed if uiMode is 'embedded'. */
canceledUrl?: (Scalars['String'] | null),
/** The URL to redirect your customer back to after they authenticate or cancel their payment on the payment method's app or site. This parameter is required if uiMode is 'embedded'. */
returnUrl?: (Scalars['String'] | null),
/** Stripe UI mode for the payment session (hosted or embedded) */
uiMode?: (StripeUiMode | null)}


/** Input for updating custom field values on a reservation ticket */
export interface EventReservationTicketConfigurationInput {
/** Identifier of the reservation ticket to configure */
ticketId: Scalars['ID'],
/** Custom field values to set on the ticket */
customFields: PropertyValueInput[]}


/** Input for modifying tickets in an existing reservation session */
export interface EventReservationUpdateTicketsInput {
/** List of ticket IDs to release from the reservation */
ticketIdsToRelease?: (Scalars['ID'][] | null),
/** List of new ticket configurations and quantities to add to the reservation */
ticketIdsToAdd?: (EventReservationRegisterTicketInput[] | null),
/** Custom field configurations to apply to specific tickets */
ticketConfigurations?: (EventReservationTicketConfigurationInput[] | null)}


/** Input for registering tickets of a specific configuration in a reservation */
export interface EventReservationRegisterTicketInput {
/** Identifier of the ticket configuration to reserve */
ticketConfigurationId: Scalars['ID'],
/** Number of tickets to reserve for this configuration */
quantity: Scalars['Float'],
/** List of seat IDs to reserve for these tickets */
reservedSeats: Scalars['ID'][]}


/** Input containing the list of ticket registrations for a reservation session */
export interface EventReservationRegisterTicketsInput {
/** List of ticket configurations and quantities to reserve */
tickets: EventReservationRegisterTicketInput[]}


/** Input for creating a new event venue */
export interface EventVenueCreateInput {
/** Display name of the venue */
name: Scalars['String'],
/** Detailed description of the venue */
description: Scalars['String'],
/** Street address of the venue */
address: Scalars['String'],
/** City where the venue is located */
city: Scalars['String'],
/** State or province where the venue is located */
state: Scalars['String'],
/** Country where the venue is located */
country: Scalars['String'],
/** Postal or ZIP code of the venue */
postalCode: Scalars['String']}


/** Input for updating an existing event venue with partial fields */
export interface EventVenueUpdateInput {
/** Display name of the venue */
name?: (Scalars['String'] | null),
/** Detailed description of the venue */
description?: (Scalars['String'] | null),
/** Street address of the venue */
address?: (Scalars['String'] | null),
/** City where the venue is located */
city?: (Scalars['String'] | null),
/** State or province where the venue is located */
state?: (Scalars['String'] | null),
/** Country where the venue is located */
country?: (Scalars['String'] | null),
/** Postal or ZIP code of the venue */
postalCode?: (Scalars['String'] | null)}


/** Batch input for creating, updating, and deleting venue seats in a single operation */
export interface EventVenueSeatsUpdateInput {
/** List of existing seats to update */
updateSeats?: (EventVenueSeatUpdateInput[] | null),
/** List of new seats to create */
createSeats?: (EventVenueSeatCreateInput[] | null),
/** List of seat IDs to delete */
deleteSeats?: (Scalars['ID'][] | null)}


/** Input for updating an existing venue seat */
export interface EventVenueSeatUpdateInput {
/** Display name or label of the seat */
name?: (Scalars['String'] | null),
/** Visual configuration of the seat including position and appearance */
configuration?: (EventVenueSeatConfigurationInput | null),
/** Identifier of the seat type this seat belongs to */
seatTypeId?: (Scalars['ID'] | null),
/** Identifier of the seat to update */
id: Scalars['ID']}


/** Input for creating a new venue seat */
export interface EventVenueSeatCreateInput {
/** Display name or label of the seat */
name: Scalars['String'],
/** Visual configuration of the seat including position and appearance */
configuration: EventVenueSeatConfigurationInput,
/** Identifier of the seat type this seat belongs to */
seatTypeId: Scalars['ID']}


/** Input for creating a new venue seat type */
export interface EventVenueSeatTypeCreateInput {
/** Display name of the seat type */
name: Scalars['String'],
/** Detailed description of the seat type */
description: Scalars['String'],
/** Configuration settings for this seat type */
configuration: EventVenueSeatTypeConfigurationInput}


/** Input for updating an existing venue seat type with partial fields */
export interface EventVenueSeatTypeUpdateInput {
/** Display name of the seat type */
name?: (Scalars['String'] | null),
/** Detailed description of the seat type */
description?: (Scalars['String'] | null),
/** Configuration settings for this seat type */
configuration?: (EventVenueSeatTypeConfigurationInput | null)}


/** Input for creating a new shop */
export interface ShopCreateInput {
/** An optional external identifier for integrations */
externalId?: (Scalars['String'] | null),
/** The display name of the shop */
name: Scalars['String'],
/** A text description of the shop */
description: Scalars['String'],
/** Custom metadata key-value pairs associated with the shop */
metadata: PropertyValueInput[]}


/** Input for updating an existing shop (all fields optional) */
export interface ShopUpdateInput {
/** An optional external identifier for integrations */
externalId?: (Scalars['String'] | null),
/** The display name of the shop */
name?: (Scalars['String'] | null),
/** A text description of the shop */
description?: (Scalars['String'] | null),
/** Custom metadata key-value pairs associated with the shop */
metadata?: (PropertyValueInput[] | null)}


/** Input for creating a new shop category */
export interface ShopCategoryCreateInput {
/** An optional external identifier for integrations */
externalId?: (Scalars['String'] | null),
/** The display name of the category */
name: Scalars['String'],
/** A text description of the category */
description: Scalars['String'],
/** Custom metadata key-value pairs associated with the category */
metadata: PropertyValueInput[],
/** The ID of the shop this category belongs to */
shopId: Scalars['ID']}


/** Input for updating an existing shop category (all fields optional) */
export interface ShopCategoryUpdateInput {
/** An optional external identifier for integrations */
externalId?: (Scalars['String'] | null),
/** The display name of the category */
name?: (Scalars['String'] | null),
/** A text description of the category */
description?: (Scalars['String'] | null),
/** Custom metadata key-value pairs associated with the category */
metadata?: (PropertyValueInput[] | null)}


/** Configuration for Stripe payment session URLs and UI mode */
export interface PaymentInput {
/** The URL to which Stripe should send customers when payment or setup is complete. This parameter is not allowed if uiMode is "embedded". */
successUrl?: (Scalars['String'] | null),
/** If set, Checkout displays a back button and customers will be directed to this URL if they decide to cancel payment and return to your website. This parameter is not allowed if uiMode is 'embedded'. */
canceledUrl?: (Scalars['String'] | null),
/** The URL to redirect your customer back to after they authenticate or cancel their payment on the payment method's app or site. This parameter is required if uiMode is 'embedded'. */
returnUrl?: (Scalars['String'] | null),
/** The Stripe UI mode for the checkout session (hosted or embedded) */
uiMode?: (StripeUiMode | null)}


/** Input for initiating a shop product purchase containing one or more items */
export interface PlayerShopProductPurshaseInput {
/** The list of products and quantities to purchase (1-10 items) */
items: PlayerShopProductPurshaseItemInput[]}


/** A single item within a shop purchase request */
export interface PlayerShopProductPurshaseItemInput {
/** The ID of the shop product to purchase */
shopProductId: Scalars['ID'],
/** The quantity to purchase */
quantity: Scalars['Int']}


/** Input for creating a new shop product */
export interface ShopProductCreateInput {
/** The display name of the product */
name: Scalars['String'],
/** An optional external identifier for integrations */
externalId?: (Scalars['String'] | null),
/** A text description of the product */
description: Scalars['String'],
/** The ID of the category this product belongs to */
categoryId?: (Scalars['ID'] | null),
/** The real-money price of the product in the specified currency */
price?: (Scalars['Float'] | null),
/** Purchase constraints such as min/max quantities */
configuration: ShopProductConfigurationInput,
/** Custom metadata key-value pairs associated with the product */
metadata: PropertyValueInput[],
/** The date and time after which the product becomes visible */
visibleAt?: (Scalars['DateTime'] | null),
/** The real-money currency code for the product price */
currency: ShopCurrencies,
/** The items and currencies bundled with this product */
items: ShopItemQuantityInput[],
/** The in-game currency prices for purchasing this product */
currencyPrices: EntityQuantityInput[]}


/** Input for updating an existing shop product (all fields optional) */
export interface ShopProductUpdateInput {
/** The display name of the product */
name?: (Scalars['String'] | null),
/** An optional external identifier for integrations */
externalId?: (Scalars['String'] | null),
/** A text description of the product */
description?: (Scalars['String'] | null),
/** The ID of the category this product belongs to */
categoryId?: (Scalars['ID'] | null),
/** The real-money price of the product in the specified currency */
price?: (Scalars['Float'] | null),
/** Purchase constraints such as min/max quantities */
configuration?: (ShopProductConfigurationInput | null),
/** Custom metadata key-value pairs associated with the product */
metadata?: (PropertyValueInput[] | null),
/** The date and time after which the product becomes visible */
visibleAt?: (Scalars['DateTime'] | null),
/** The real-money currency code for the product price */
currency?: (ShopCurrencies | null),
/** The items and currencies bundled with this product */
items?: (ShopItemQuantityInput[] | null),
/** The in-game currency prices for purchasing this product */
currencyPrices?: (EntityQuantityInput[] | null)}


/** Input for creating a new item */
export interface ItemCreateInput {
/** Display name of the item */
name: Scalars['String'],
/** External identifier for third-party system integration */
externalId?: (Scalars['String'] | null),
/** Detailed description of the item */
description: Scalars['String'],
/** Custom metadata key-value pairs associated with the item */
metadata: PropertyValueInput[],
/** ID of the category this item is assigned to */
categoryId?: (Scalars['ID'] | null)}


/** Input for updating an existing item with partial fields */
export interface ItemUpdateInput {
/** Display name of the item */
name?: (Scalars['String'] | null),
/** External identifier for third-party system integration */
externalId?: (Scalars['String'] | null),
/** Detailed description of the item */
description?: (Scalars['String'] | null),
/** Custom metadata key-value pairs associated with the item */
metadata?: (PropertyValueInput[] | null),
/** ID of the category this item is assigned to */
categoryId?: (Scalars['ID'] | null)}


/** Input for bulk updating player item quantities */
export interface PlayerItemsUpdateInput {
/** List of item quantity adjustments to apply */
items: PlayerItemsUpdateItemInput[]}


/** Quantity adjustment for a single item in a bulk update */
export interface PlayerItemsUpdateItemInput {
/** ID of the item to update */
itemId: Scalars['ID'],
/** Set the quantity to this exact value */
set?: (Scalars['Int'] | null),
/** Add this amount to the current quantity */
add?: (Scalars['Int'] | null),
/** Remove this amount from the current quantity */
remove?: (Scalars['Int'] | null)}


/** Input for creating a new item category */
export interface ItemCategoryCreateInput {
/** Display name of the category */
name: Scalars['String'],
/** External identifier for third-party system integration */
externalId?: (Scalars['String'] | null),
/** Detailed description of the category */
description: Scalars['String'],
/** Custom metadata key-value pairs associated with the category */
metadata: PropertyValueInput[]}


/** Input for updating an existing item category with partial fields */
export interface ItemCategoryUpdateInput {
/** Display name of the category */
name?: (Scalars['String'] | null),
/** External identifier for third-party system integration */
externalId?: (Scalars['String'] | null),
/** Detailed description of the category */
description?: (Scalars['String'] | null),
/** Custom metadata key-value pairs associated with the category */
metadata?: (PropertyValueInput[] | null)}


/** Input for creating a new currency */
export interface CurrencyCreateInput {
/** Short symbol representing the currency (e.g., GP, CR) */
symbol: Scalars['String'],
/** Display name of the currency */
name: Scalars['String'],
/** External system identifier for third-party integrations */
externalId?: (Scalars['String'] | null),
/** Description of the currency purpose */
description: Scalars['String'],
/** Whether the currency is hidden from players */
hidden: Scalars['Boolean'],
/** Custom metadata key-value pairs attached to the currency */
metadata: PropertyValueInput[]}


/** Input for partially updating an existing currency */
export interface CurrencyUpdateInput {
/** Short symbol representing the currency (e.g., GP, CR) */
symbol?: (Scalars['String'] | null),
/** Display name of the currency */
name?: (Scalars['String'] | null),
/** External system identifier for third-party integrations */
externalId?: (Scalars['String'] | null),
/** Description of the currency purpose */
description?: (Scalars['String'] | null),
/** Whether the currency is hidden from players */
hidden?: (Scalars['Boolean'] | null),
/** Custom metadata key-value pairs attached to the currency */
metadata?: (PropertyValueInput[] | null)}


/** Input for batch updating player currency balances */
export interface PlayerCurrencyUpdateInput {
/** List of currency balance updates to apply (1-20 items) */
items: PlayerCurrencyUpdateItemInput[]}


/** A single currency balance update operation for a player */
export interface PlayerCurrencyUpdateItemInput {
/** ID of the currency to update */
currencyId: Scalars['ID'],
/** Set the balance to this exact value (mutually exclusive with add/remove) */
forceBalance?: (Scalars['Float'] | null),
/** Amount to add to the current balance */
add?: (Scalars['Float'] | null),
/** Amount to subtract from the current balance */
remove?: (Scalars['Float'] | null)}


/** Input for publishing an organization app to the marketplace */
export interface PublishMarketplaceAppInput {
/** The OrganizationApp to publish */
organizationAppId: Scalars['ID'],
/** App manifest */
manifest: AppManifestInput,
/** App name */
name: Scalars['String'],
/** Full description */
description: Scalars['String'],
/** Short description for cards */
shortDescription: Scalars['String'],
/** Icon URL */
icon?: (Scalars['String'] | null),
/** Screenshot URLs */
screenshots?: Scalars['String'][],
/** Category tags */
categories?: Scalars['String'][],
/** Semantic version string */
version: Scalars['String'],
/** Privacy policy URL */
privacyPolicyUrl?: (Scalars['String'] | null),
/** Support URL */
supportUrl?: (Scalars['String'] | null),
/** Website URL */
websiteUrl?: (Scalars['String'] | null)}


/** Input for updating an existing marketplace app listing */
export interface UpdateMarketplaceAppInput {
/** Updated manifest */
manifest?: (AppManifestInput | null),
/** App name */
name?: (Scalars['String'] | null),
/** Full description */
description?: (Scalars['String'] | null),
/** Short description for cards */
shortDescription?: (Scalars['String'] | null),
/** Icon URL */
icon?: (Scalars['String'] | null),
/** Screenshot URLs */
screenshots?: (Scalars['String'][] | null),
/** Category tags */
categories?: (Scalars['String'][] | null),
/** Semantic version string */
version?: (Scalars['String'] | null),
/** Privacy policy URL */
privacyPolicyUrl?: (Scalars['String'] | null),
/** Support URL */
supportUrl?: (Scalars['String'] | null),
/** Website URL */
websiteUrl?: (Scalars['String'] | null)}


/** Input for installing a marketplace app into an organization */
export interface InstallMarketplaceAppInput {
/** Marketplace app ID to install */
marketplaceAppId: Scalars['ID'],
/** Permissions the org grants to this app (OrganizationPermission IDs) */
grantedPermissions: Scalars['String'][]}


/** Input for submitting or updating a review for a marketplace app */
export interface SubmitMarketplaceAppReviewInput {
/** Marketplace app ID to review */
marketplaceAppId: Scalars['ID'],
/** Rating 1-5 */
rating: Scalars['Int'],
/** Review title */
title: Scalars['String'],
/** Review body */
body: Scalars['String']}


/** Input for setting or updating pricing for a marketplace app */
export interface SetMarketplaceAppPricingInput {
/** Marketplace app ID */
marketplaceAppId: Scalars['ID'],
/** Pricing type */
type: MarketplacePricingType,
/** Price in cents */
priceAmountCents?: Scalars['Int'],
/** Currency code (ISO 4217) */
currency?: Scalars['String'],
/** Trial period in days for subscriptions */
trialDays?: Scalars['Int']}


/** Input for creating a Stripe Checkout session for a paid marketplace app */
export interface CreateMarketplaceCheckoutInput {
/** Marketplace app ID to purchase */
marketplaceAppId: Scalars['ID'],
/** URL to redirect to after successful payment */
successUrl: Scalars['String'],
/** URL to redirect to if payment is cancelled */
cancelUrl: Scalars['String']}


/** Input for creating a new app release */
export interface AppCreateReleaseInput {
/** Semantic version string (e.g. 1.0.0) */
version: Scalars['String'],
/** App manifest */
manifest: AppManifestInput,
/** Release notes */
releaseNotes?: (Scalars['String'] | null),
/** Whether this release includes an extension bundle */
hasExtensionBundle: Scalars['Boolean'],
/** Whether this release includes a module bundle */
hasModuleBundle: Scalars['Boolean'],
/** Estimated extension bundle size in bytes for presigned URL */
extensionBundleSize?: (Scalars['Int'] | null),
/** Estimated module bundle size in bytes for presigned URL */
moduleBundleSize?: (Scalars['Int'] | null)}


/** Input for setting module configuration on a platform */
export interface PlatformModuleConfigSetInput {
/** Platform ID */
platformId: Scalars['ID'],
/** Marketplace app ID */
marketplaceAppId: Scalars['ID'],
/** Module name within the app */
moduleName: Scalars['String'],
/** Module props configuration as key-value pairs */
props: ModuleConfigPropInput[]}


/** A single configuration property key-value input */
export interface ModuleConfigPropInput {
/** Configuration property key */
key: Scalars['String'],
/** Configuration property value (serialized as string) */
value: Scalars['String']}


/** Input for deleting a module configuration */
export interface PlatformModuleConfigDeleteInput {
/** Platform ID */
platformId: Scalars['ID'],
/** Marketplace app ID */
marketplaceAppId: Scalars['ID'],
/** Module name within the app */
moduleName: Scalars['String']}


/** Input for creating or updating a metafield on an entity */
export interface SetEntityMetafieldInput {
/** Namespace scoping this metafield to a specific app (alphanumeric, hyphens, underscores) */
namespace: Scalars['String'],
/** Type of entity this metafield is attached to (e.g. tournament, player) */
entityType: Scalars['String'],
/** ID of the entity this metafield is attached to */
entityId: Scalars['ID'],
/** Key name for this metafield within the namespace */
key: Scalars['String'],
/** JSON-serialized value */
value: Scalars['String']}


/** Input for deleting a metafield from an entity */
export interface DeleteEntityMetafieldInput {
/** Namespace of the metafield to delete */
namespace: Scalars['String'],
/** Type of entity the metafield is attached to */
entityType: Scalars['String'],
/** ID of the entity the metafield is attached to */
entityId: Scalars['ID'],
/** Key name of the metafield to delete */
key: Scalars['String']}


/** Input for setting metadata entries on an object */
export interface SetObjectMetadataInput {
/** Prisma model name of the object to attach metadata to */
objectType: ObjectType,
/** ID of the object to attach metadata to */
objectId: Scalars['ID'],
/** List of metadata entries to set (max 50) */
entries: MetadataEntryInput[]}


/** A single metadata key-value entry with type and visibility */
export interface MetadataEntryInput {
/** Key name for this metadata entry (alphanumeric, hyphens, underscores, 1-100 chars) */
key: Scalars['String'],
/** Value of the metadata entry (max 4096 chars) */
value: Scalars['String'],
/** Type of the metadata value (STRING, BOOLEAN, IMAGE_URL, URL) */
type: MetadataType,
/** Visibility of the metadata entry (PUBLIC or PRIVATE) */
visibility: MetadataVisibility}


/** Input for removing metadata entries from an object */
export interface RemoveObjectMetadataInput {
/** Prisma model name of the object to remove metadata from */
objectType: ObjectType,
/** ID of the object to remove metadata from */
objectId: Scalars['ID'],
/** List of metadata keys to remove */
keys: Scalars['String'][]}


/** Input for creating a new custom field definition */
export interface CreateCustomFieldDefinitionInput {
/** Type of object this field applies to (e.g. Tournament, Account) */
objectType: ObjectType,
/** Unique key identifier (alphanumeric, hyphens, underscores, 1-100 chars) */
key: Scalars['String'],
/** Human-readable display name of the field */
name: Scalars['String'],
/** Optional description explaining the purpose of this field */
description?: (Scalars['String'] | null),
/** Data type of the field value */
type: CustomFieldType,
/** Whether this field must be filled in */
required?: (Scalars['Boolean'] | null),
/** Whether the value must be unique across all objects of this type */
unique?: (Scalars['Boolean'] | null),
/** Display order position of this field */
order?: (Scalars['Int'] | null),
/** Visibility level controlling who can view this field value */
visibility: PropertyVisibility,
/** Editability rule controlling when and by whom this field can be modified */
editability: ProperyEditability,
/** Options for SELECT or MULTI_SELECT fields */
options?: (CustomFieldOptionInput[] | null),
/** Default value applied when no value is provided */
defaultValue?: (Scalars['String'] | null),
/** Optional regex pattern the value must match */
validationRegex?: (Scalars['String'] | null)}


/** A label/value option for SELECT or MULTI_SELECT custom fields */
export interface CustomFieldOptionInput {
/** Human-readable label for this option */
label: Scalars['String'],
/** Stored value for this option */
value: Scalars['String']}


/** Input for updating an existing custom field definition */
export interface UpdateCustomFieldDefinitionInput {
/** Updated human-readable display name */
name?: (Scalars['String'] | null),
/** Updated description */
description?: (Scalars['String'] | null),
/** Whether this field must be filled in */
required?: (Scalars['Boolean'] | null),
/** Whether the value must be unique across all objects of this type */
unique?: (Scalars['Boolean'] | null),
/** Updated display order position */
order?: (Scalars['Int'] | null),
/** Updated visibility level */
visibility?: (PropertyVisibility | null),
/** Updated editability rule */
editability?: (ProperyEditability | null),
/** Updated options for SELECT or MULTI_SELECT fields */
options?: (CustomFieldOptionInput[] | null),
/** Updated default value */
defaultValue?: (Scalars['String'] | null),
/** Updated regex validation pattern */
validationRegex?: (Scalars['String'] | null)}


/** Input for setting custom field values on an object */
export interface SetCustomFieldValuesInput {
/** Type of object to set field values on */
objectType: ObjectType,
/** ID of the object to set field values on */
objectId: Scalars['ID'],
/** List of field key-value pairs to set */
fields: CustomFieldValueInput[]}


/** A single key-value pair for setting a custom field */
export interface CustomFieldValueInput {
/** Key of the custom field definition */
key: Scalars['String'],
/** Value to set for this field */
value: Scalars['String']}

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
    


    const WebhookLogRequest_possibleTypes: string[] = ['WebhookLogRequest']
    export const isWebhookLogRequest = (obj?: { __typename?: any } | null): obj is WebhookLogRequest => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isWebhookLogRequest"')
      return WebhookLogRequest_possibleTypes.includes(obj.__typename)
    }
    


    const StringKeyValuePair_possibleTypes: string[] = ['StringKeyValuePair']
    export const isStringKeyValuePair = (obj?: { __typename?: any } | null): obj is StringKeyValuePair => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isStringKeyValuePair"')
      return StringKeyValuePair_possibleTypes.includes(obj.__typename)
    }
    


    const WebhookLogResponse_possibleTypes: string[] = ['WebhookLogResponse']
    export const isWebhookLogResponse = (obj?: { __typename?: any } | null): obj is WebhookLogResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isWebhookLogResponse"')
      return WebhookLogResponse_possibleTypes.includes(obj.__typename)
    }
    


    const WebhookCallLogValue_possibleTypes: string[] = ['WebhookCallLogValue']
    export const isWebhookCallLogValue = (obj?: { __typename?: any } | null): obj is WebhookCallLogValue => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isWebhookCallLogValue"')
      return WebhookCallLogValue_possibleTypes.includes(obj.__typename)
    }
    


    const LogData_possibleTypes: string[] = ['LogData']
    export const isLogData = (obj?: { __typename?: any } | null): obj is LogData => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isLogData"')
      return LogData_possibleTypes.includes(obj.__typename)
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
    


    const IdentityLinkUrl_possibleTypes: string[] = ['IdentityLinkUrl']
    export const isIdentityLinkUrl = (obj?: { __typename?: any } | null): obj is IdentityLinkUrl => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isIdentityLinkUrl"')
      return IdentityLinkUrl_possibleTypes.includes(obj.__typename)
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
    


    const FrontendModulePropOptionModel_possibleTypes: string[] = ['FrontendModulePropOptionModel']
    export const isFrontendModulePropOptionModel = (obj?: { __typename?: any } | null): obj is FrontendModulePropOptionModel => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isFrontendModulePropOptionModel"')
      return FrontendModulePropOptionModel_possibleTypes.includes(obj.__typename)
    }
    


    const FrontendModulePropSchemaModel_possibleTypes: string[] = ['FrontendModulePropSchemaModel']
    export const isFrontendModulePropSchemaModel = (obj?: { __typename?: any } | null): obj is FrontendModulePropSchemaModel => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isFrontendModulePropSchemaModel"')
      return FrontendModulePropSchemaModel_possibleTypes.includes(obj.__typename)
    }
    


    const FrontendModuleEventModel_possibleTypes: string[] = ['FrontendModuleEventModel']
    export const isFrontendModuleEventModel = (obj?: { __typename?: any } | null): obj is FrontendModuleEventModel => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isFrontendModuleEventModel"')
      return FrontendModuleEventModel_possibleTypes.includes(obj.__typename)
    }
    


    const FrontendModuleModel_possibleTypes: string[] = ['FrontendModuleModel']
    export const isFrontendModuleModel = (obj?: { __typename?: any } | null): obj is FrontendModuleModel => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isFrontendModuleModel"')
      return FrontendModuleModel_possibleTypes.includes(obj.__typename)
    }
    


    const ExtensionPointSizeModel_possibleTypes: string[] = ['ExtensionPointSizeModel']
    export const isExtensionPointSizeModel = (obj?: { __typename?: any } | null): obj is ExtensionPointSizeModel => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isExtensionPointSizeModel"')
      return ExtensionPointSizeModel_possibleTypes.includes(obj.__typename)
    }
    


    const ExtensionPointModel_possibleTypes: string[] = ['ExtensionPointModel']
    export const isExtensionPointModel = (obj?: { __typename?: any } | null): obj is ExtensionPointModel => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isExtensionPointModel"')
      return ExtensionPointModel_possibleTypes.includes(obj.__typename)
    }
    


    const AppManifestModel_possibleTypes: string[] = ['AppManifestModel']
    export const isAppManifestModel = (obj?: { __typename?: any } | null): obj is AppManifestModel => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAppManifestModel"')
      return AppManifestModel_possibleTypes.includes(obj.__typename)
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
    


    const AppReviewCheck_possibleTypes: string[] = ['AppReviewCheck']
    export const isAppReviewCheck = (obj?: { __typename?: any } | null): obj is AppReviewCheck => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAppReviewCheck"')
      return AppReviewCheck_possibleTypes.includes(obj.__typename)
    }
    


    const AppReviewResult_possibleTypes: string[] = ['AppReviewResult']
    export const isAppReviewResult = (obj?: { __typename?: any } | null): obj is AppReviewResult => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAppReviewResult"')
      return AppReviewResult_possibleTypes.includes(obj.__typename)
    }
    


    const MarketplaceAppRelease_possibleTypes: string[] = ['MarketplaceAppRelease']
    export const isMarketplaceAppRelease = (obj?: { __typename?: any } | null): obj is MarketplaceAppRelease => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMarketplaceAppRelease"')
      return MarketplaceAppRelease_possibleTypes.includes(obj.__typename)
    }
    


    const AppReleaseWithUploadUrls_possibleTypes: string[] = ['AppReleaseWithUploadUrls']
    export const isAppReleaseWithUploadUrls = (obj?: { __typename?: any } | null): obj is AppReleaseWithUploadUrls => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAppReleaseWithUploadUrls"')
      return AppReleaseWithUploadUrls_possibleTypes.includes(obj.__typename)
    }
    


    const AppBundleValidationError_possibleTypes: string[] = ['AppBundleValidationError']
    export const isAppBundleValidationError = (obj?: { __typename?: any } | null): obj is AppBundleValidationError => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAppBundleValidationError"')
      return AppBundleValidationError_possibleTypes.includes(obj.__typename)
    }
    


    const AppRelease_possibleTypes: string[] = ['AppRelease']
    export const isAppRelease = (obj?: { __typename?: any } | null): obj is AppRelease => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAppRelease"')
      return AppRelease_possibleTypes.includes(obj.__typename)
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
    


    const AppWebhook_possibleTypes: string[] = ['AppWebhook']
    export const isAppWebhook = (obj?: { __typename?: any } | null): obj is AppWebhook => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAppWebhook"')
      return AppWebhook_possibleTypes.includes(obj.__typename)
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
    


    const RuleConditionModel_possibleTypes: string[] = ['RuleConditionModel']
    export const isRuleConditionModel = (obj?: { __typename?: any } | null): obj is RuleConditionModel => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRuleConditionModel"')
      return RuleConditionModel_possibleTypes.includes(obj.__typename)
    }
    


    const GameRefModel_possibleTypes: string[] = ['GameRefModel']
    export const isGameRefModel = (obj?: { __typename?: any } | null): obj is GameRefModel => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGameRefModel"')
      return GameRefModel_possibleTypes.includes(obj.__typename)
    }
    


    const GroupRefModel_possibleTypes: string[] = ['GroupRefModel']
    export const isGroupRefModel = (obj?: { __typename?: any } | null): obj is GroupRefModel => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGroupRefModel"')
      return GroupRefModel_possibleTypes.includes(obj.__typename)
    }
    


    const RoundRefModel_possibleTypes: string[] = ['RoundRefModel']
    export const isRoundRefModel = (obj?: { __typename?: any } | null): obj is RoundRefModel => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRoundRefModel"')
      return RoundRefModel_possibleTypes.includes(obj.__typename)
    }
    


    const StepRefModel_possibleTypes: string[] = ['StepRefModel']
    export const isStepRefModel = (obj?: { __typename?: any } | null): obj is StepRefModel => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isStepRefModel"')
      return StepRefModel_possibleTypes.includes(obj.__typename)
    }
    


    const MatchConfigVariableModel_possibleTypes: string[] = ['MatchConfigVariableModel']
    export const isMatchConfigVariableModel = (obj?: { __typename?: any } | null): obj is MatchConfigVariableModel => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMatchConfigVariableModel"')
      return MatchConfigVariableModel_possibleTypes.includes(obj.__typename)
    }
    


    const MatchConfigRefModel_possibleTypes: string[] = ['MatchConfigRefModel']
    export const isMatchConfigRefModel = (obj?: { __typename?: any } | null): obj is MatchConfigRefModel => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMatchConfigRefModel"')
      return MatchConfigRefModel_possibleTypes.includes(obj.__typename)
    }
    


    const AutoGenerateConfigModel_possibleTypes: string[] = ['AutoGenerateConfigModel']
    export const isAutoGenerateConfigModel = (obj?: { __typename?: any } | null): obj is AutoGenerateConfigModel => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAutoGenerateConfigModel"')
      return AutoGenerateConfigModel_possibleTypes.includes(obj.__typename)
    }
    


    const TriggerScopeModel_possibleTypes: string[] = ['TriggerScopeModel']
    export const isTriggerScopeModel = (obj?: { __typename?: any } | null): obj is TriggerScopeModel => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTriggerScopeModel"')
      return TriggerScopeModel_possibleTypes.includes(obj.__typename)
    }
    


    const RuleEventDataModel_possibleTypes: string[] = ['RuleEventDataModel']
    export const isRuleEventDataModel = (obj?: { __typename?: any } | null): obj is RuleEventDataModel => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRuleEventDataModel"')
      return RuleEventDataModel_possibleTypes.includes(obj.__typename)
    }
    


    const ConditionEvaluationModel_possibleTypes: string[] = ['ConditionEvaluationModel']
    export const isConditionEvaluationModel = (obj?: { __typename?: any } | null): obj is ConditionEvaluationModel => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isConditionEvaluationModel"')
      return ConditionEvaluationModel_possibleTypes.includes(obj.__typename)
    }
    


    const ActionResultModel_possibleTypes: string[] = ['ActionResultModel']
    export const isActionResultModel = (obj?: { __typename?: any } | null): obj is ActionResultModel => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isActionResultModel"')
      return ActionResultModel_possibleTypes.includes(obj.__typename)
    }
    


    const RuleAction_possibleTypes: string[] = ['AdvanceToGameActionModel','AdvanceToGroupActionModel','AdvanceToStepActionModel','EliminateActionModel','GenerateNextRoundActionModel','EndGameActionModel','EndRoundActionModel','EndGroupActionModel','SetTeamPropertyActionModel']
    export const isRuleAction = (obj?: { __typename?: any } | null): obj is RuleAction => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRuleAction"')
      return RuleAction_possibleTypes.includes(obj.__typename)
    }
    


    const AdvanceToGameActionModel_possibleTypes: string[] = ['AdvanceToGameActionModel']
    export const isAdvanceToGameActionModel = (obj?: { __typename?: any } | null): obj is AdvanceToGameActionModel => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAdvanceToGameActionModel"')
      return AdvanceToGameActionModel_possibleTypes.includes(obj.__typename)
    }
    


    const AdvanceToGroupActionModel_possibleTypes: string[] = ['AdvanceToGroupActionModel']
    export const isAdvanceToGroupActionModel = (obj?: { __typename?: any } | null): obj is AdvanceToGroupActionModel => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAdvanceToGroupActionModel"')
      return AdvanceToGroupActionModel_possibleTypes.includes(obj.__typename)
    }
    


    const AdvanceToStepActionModel_possibleTypes: string[] = ['AdvanceToStepActionModel']
    export const isAdvanceToStepActionModel = (obj?: { __typename?: any } | null): obj is AdvanceToStepActionModel => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAdvanceToStepActionModel"')
      return AdvanceToStepActionModel_possibleTypes.includes(obj.__typename)
    }
    


    const EliminateActionModel_possibleTypes: string[] = ['EliminateActionModel']
    export const isEliminateActionModel = (obj?: { __typename?: any } | null): obj is EliminateActionModel => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isEliminateActionModel"')
      return EliminateActionModel_possibleTypes.includes(obj.__typename)
    }
    


    const GenerateNextRoundActionModel_possibleTypes: string[] = ['GenerateNextRoundActionModel']
    export const isGenerateNextRoundActionModel = (obj?: { __typename?: any } | null): obj is GenerateNextRoundActionModel => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGenerateNextRoundActionModel"')
      return GenerateNextRoundActionModel_possibleTypes.includes(obj.__typename)
    }
    


    const EndGameActionModel_possibleTypes: string[] = ['EndGameActionModel']
    export const isEndGameActionModel = (obj?: { __typename?: any } | null): obj is EndGameActionModel => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isEndGameActionModel"')
      return EndGameActionModel_possibleTypes.includes(obj.__typename)
    }
    


    const EndRoundActionModel_possibleTypes: string[] = ['EndRoundActionModel']
    export const isEndRoundActionModel = (obj?: { __typename?: any } | null): obj is EndRoundActionModel => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isEndRoundActionModel"')
      return EndRoundActionModel_possibleTypes.includes(obj.__typename)
    }
    


    const EndGroupActionModel_possibleTypes: string[] = ['EndGroupActionModel']
    export const isEndGroupActionModel = (obj?: { __typename?: any } | null): obj is EndGroupActionModel => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isEndGroupActionModel"')
      return EndGroupActionModel_possibleTypes.includes(obj.__typename)
    }
    


    const SetTeamPropertyActionModel_possibleTypes: string[] = ['SetTeamPropertyActionModel']
    export const isSetTeamPropertyActionModel = (obj?: { __typename?: any } | null): obj is SetTeamPropertyActionModel => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSetTeamPropertyActionModel"')
      return SetTeamPropertyActionModel_possibleTypes.includes(obj.__typename)
    }
    


    const TiebreakerRuleModel_possibleTypes: string[] = ['TiebreakerRuleModel']
    export const isTiebreakerRuleModel = (obj?: { __typename?: any } | null): obj is TiebreakerRuleModel => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTiebreakerRuleModel"')
      return TiebreakerRuleModel_possibleTypes.includes(obj.__typename)
    }
    


    const ScoringRuleSetModel_possibleTypes: string[] = ['ScoringRuleSetModel']
    export const isScoringRuleSetModel = (obj?: { __typename?: any } | null): obj is ScoringRuleSetModel => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isScoringRuleSetModel"')
      return ScoringRuleSetModel_possibleTypes.includes(obj.__typename)
    }
    


    const AdvancementRuleModel_possibleTypes: string[] = ['AdvancementRuleModel']
    export const isAdvancementRuleModel = (obj?: { __typename?: any } | null): obj is AdvancementRuleModel => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAdvancementRuleModel"')
      return AdvancementRuleModel_possibleTypes.includes(obj.__typename)
    }
    


    const CrossStepRuleModel_possibleTypes: string[] = ['CrossStepRuleModel']
    export const isCrossStepRuleModel = (obj?: { __typename?: any } | null): obj is CrossStepRuleModel => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCrossStepRuleModel"')
      return CrossStepRuleModel_possibleTypes.includes(obj.__typename)
    }
    


    const CrossStepUsage_possibleTypes: string[] = ['SeedOrderUsageModel','QualifyUsageModel','InjectScoreUsageModel']
    export const isCrossStepUsage = (obj?: { __typename?: any } | null): obj is CrossStepUsage => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCrossStepUsage"')
      return CrossStepUsage_possibleTypes.includes(obj.__typename)
    }
    


    const SeedOrderUsageModel_possibleTypes: string[] = ['SeedOrderUsageModel']
    export const isSeedOrderUsageModel = (obj?: { __typename?: any } | null): obj is SeedOrderUsageModel => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSeedOrderUsageModel"')
      return SeedOrderUsageModel_possibleTypes.includes(obj.__typename)
    }
    


    const QualifyUsageModel_possibleTypes: string[] = ['QualifyUsageModel']
    export const isQualifyUsageModel = (obj?: { __typename?: any } | null): obj is QualifyUsageModel => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isQualifyUsageModel"')
      return QualifyUsageModel_possibleTypes.includes(obj.__typename)
    }
    


    const InjectScoreUsageModel_possibleTypes: string[] = ['InjectScoreUsageModel']
    export const isInjectScoreUsageModel = (obj?: { __typename?: any } | null): obj is InjectScoreUsageModel => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isInjectScoreUsageModel"')
      return InjectScoreUsageModel_possibleTypes.includes(obj.__typename)
    }
    


    const GameTemplateModel_possibleTypes: string[] = ['GameTemplateModel']
    export const isGameTemplateModel = (obj?: { __typename?: any } | null): obj is GameTemplateModel => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGameTemplateModel"')
      return GameTemplateModel_possibleTypes.includes(obj.__typename)
    }
    


    const RoundTemplateModel_possibleTypes: string[] = ['RoundTemplateModel']
    export const isRoundTemplateModel = (obj?: { __typename?: any } | null): obj is RoundTemplateModel => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRoundTemplateModel"')
      return RoundTemplateModel_possibleTypes.includes(obj.__typename)
    }
    


    const MatchConfigurationVariableModel_possibleTypes: string[] = ['MatchConfigurationVariableModel']
    export const isMatchConfigurationVariableModel = (obj?: { __typename?: any } | null): obj is MatchConfigurationVariableModel => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMatchConfigurationVariableModel"')
      return MatchConfigurationVariableModel_possibleTypes.includes(obj.__typename)
    }
    


    const MatchConfigurationModel_possibleTypes: string[] = ['MatchConfigurationModel']
    export const isMatchConfigurationModel = (obj?: { __typename?: any } | null): obj is MatchConfigurationModel => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMatchConfigurationModel"')
      return MatchConfigurationModel_possibleTypes.includes(obj.__typename)
    }
    


    const GroupTemplateModel_possibleTypes: string[] = ['GroupTemplateModel']
    export const isGroupTemplateModel = (obj?: { __typename?: any } | null): obj is GroupTemplateModel => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGroupTemplateModel"')
      return GroupTemplateModel_possibleTypes.includes(obj.__typename)
    }
    


    const StructureTemplateModel_possibleTypes: string[] = ['StructureTemplateModel']
    export const isStructureTemplateModel = (obj?: { __typename?: any } | null): obj is StructureTemplateModel => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isStructureTemplateModel"')
      return StructureTemplateModel_possibleTypes.includes(obj.__typename)
    }
    


    const StepRuleSetModel_possibleTypes: string[] = ['StepRuleSetModel']
    export const isStepRuleSetModel = (obj?: { __typename?: any } | null): obj is StepRuleSetModel => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isStepRuleSetModel"')
      return StepRuleSetModel_possibleTypes.includes(obj.__typename)
    }
    


    const RuleExecutionLogModel_possibleTypes: string[] = ['RuleExecutionLogModel']
    export const isRuleExecutionLogModel = (obj?: { __typename?: any } | null): obj is RuleExecutionLogModel => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRuleExecutionLogModel"')
      return RuleExecutionLogModel_possibleTypes.includes(obj.__typename)
    }
    


    const RuleValidationErrorModel_possibleTypes: string[] = ['RuleValidationErrorModel']
    export const isRuleValidationErrorModel = (obj?: { __typename?: any } | null): obj is RuleValidationErrorModel => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRuleValidationErrorModel"')
      return RuleValidationErrorModel_possibleTypes.includes(obj.__typename)
    }
    


    const RuleValidationResultModel_possibleTypes: string[] = ['RuleValidationResultModel']
    export const isRuleValidationResultModel = (obj?: { __typename?: any } | null): obj is RuleValidationResultModel => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRuleValidationResultModel"')
      return RuleValidationResultModel_possibleTypes.includes(obj.__typename)
    }
    


    const PaginatedRuleExecutionLogs_possibleTypes: string[] = ['PaginatedRuleExecutionLogs']
    export const isPaginatedRuleExecutionLogs = (obj?: { __typename?: any } | null): obj is PaginatedRuleExecutionLogs => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPaginatedRuleExecutionLogs"')
      return PaginatedRuleExecutionLogs_possibleTypes.includes(obj.__typename)
    }
    


    const RuleExecutionLogModelEdge_possibleTypes: string[] = ['RuleExecutionLogModelEdge']
    export const isRuleExecutionLogModelEdge = (obj?: { __typename?: any } | null): obj is RuleExecutionLogModelEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRuleExecutionLogModelEdge"')
      return RuleExecutionLogModelEdge_possibleTypes.includes(obj.__typename)
    }
    


    const SimulatedGameSnapshotModel_possibleTypes: string[] = ['SimulatedGameSnapshotModel']
    export const isSimulatedGameSnapshotModel = (obj?: { __typename?: any } | null): obj is SimulatedGameSnapshotModel => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSimulatedGameSnapshotModel"')
      return SimulatedGameSnapshotModel_possibleTypes.includes(obj.__typename)
    }
    


    const SimulationStepModel_possibleTypes: string[] = ['SimulationStepModel']
    export const isSimulationStepModel = (obj?: { __typename?: any } | null): obj is SimulationStepModel => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSimulationStepModel"')
      return SimulationStepModel_possibleTypes.includes(obj.__typename)
    }
    


    const SimulationResultModel_possibleTypes: string[] = ['SimulationResultModel']
    export const isSimulationResultModel = (obj?: { __typename?: any } | null): obj is SimulationResultModel => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSimulationResultModel"')
      return SimulationResultModel_possibleTypes.includes(obj.__typename)
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
    


    const MarketplaceApp_possibleTypes: string[] = ['MarketplaceApp']
    export const isMarketplaceApp = (obj?: { __typename?: any } | null): obj is MarketplaceApp => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMarketplaceApp"')
      return MarketplaceApp_possibleTypes.includes(obj.__typename)
    }
    


    const MarketplaceApps_possibleTypes: string[] = ['MarketplaceApps']
    export const isMarketplaceApps = (obj?: { __typename?: any } | null): obj is MarketplaceApps => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMarketplaceApps"')
      return MarketplaceApps_possibleTypes.includes(obj.__typename)
    }
    


    const MarketplaceAppEdge_possibleTypes: string[] = ['MarketplaceAppEdge']
    export const isMarketplaceAppEdge = (obj?: { __typename?: any } | null): obj is MarketplaceAppEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMarketplaceAppEdge"')
      return MarketplaceAppEdge_possibleTypes.includes(obj.__typename)
    }
    


    const MarketplaceAppReview_possibleTypes: string[] = ['MarketplaceAppReview']
    export const isMarketplaceAppReview = (obj?: { __typename?: any } | null): obj is MarketplaceAppReview => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMarketplaceAppReview"')
      return MarketplaceAppReview_possibleTypes.includes(obj.__typename)
    }
    


    const MarketplaceAppReviews_possibleTypes: string[] = ['MarketplaceAppReviews']
    export const isMarketplaceAppReviews = (obj?: { __typename?: any } | null): obj is MarketplaceAppReviews => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMarketplaceAppReviews"')
      return MarketplaceAppReviews_possibleTypes.includes(obj.__typename)
    }
    


    const MarketplaceAppReviewEdge_possibleTypes: string[] = ['MarketplaceAppReviewEdge']
    export const isMarketplaceAppReviewEdge = (obj?: { __typename?: any } | null): obj is MarketplaceAppReviewEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMarketplaceAppReviewEdge"')
      return MarketplaceAppReviewEdge_possibleTypes.includes(obj.__typename)
    }
    


    const MarketplaceAppInstallation_possibleTypes: string[] = ['MarketplaceAppInstallation']
    export const isMarketplaceAppInstallation = (obj?: { __typename?: any } | null): obj is MarketplaceAppInstallation => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMarketplaceAppInstallation"')
      return MarketplaceAppInstallation_possibleTypes.includes(obj.__typename)
    }
    


    const MarketplaceAppInstallations_possibleTypes: string[] = ['MarketplaceAppInstallations']
    export const isMarketplaceAppInstallations = (obj?: { __typename?: any } | null): obj is MarketplaceAppInstallations => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMarketplaceAppInstallations"')
      return MarketplaceAppInstallations_possibleTypes.includes(obj.__typename)
    }
    


    const MarketplaceAppInstallationEdge_possibleTypes: string[] = ['MarketplaceAppInstallationEdge']
    export const isMarketplaceAppInstallationEdge = (obj?: { __typename?: any } | null): obj is MarketplaceAppInstallationEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMarketplaceAppInstallationEdge"')
      return MarketplaceAppInstallationEdge_possibleTypes.includes(obj.__typename)
    }
    


    const MarketplaceAppStats_possibleTypes: string[] = ['MarketplaceAppStats']
    export const isMarketplaceAppStats = (obj?: { __typename?: any } | null): obj is MarketplaceAppStats => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMarketplaceAppStats"')
      return MarketplaceAppStats_possibleTypes.includes(obj.__typename)
    }
    


    const MarketplaceAppPricing_possibleTypes: string[] = ['MarketplaceAppPricing']
    export const isMarketplaceAppPricing = (obj?: { __typename?: any } | null): obj is MarketplaceAppPricing => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMarketplaceAppPricing"')
      return MarketplaceAppPricing_possibleTypes.includes(obj.__typename)
    }
    


    const ModuleConfigProp_possibleTypes: string[] = ['ModuleConfigProp']
    export const isModuleConfigProp = (obj?: { __typename?: any } | null): obj is ModuleConfigProp => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isModuleConfigProp"')
      return ModuleConfigProp_possibleTypes.includes(obj.__typename)
    }
    


    const PlatformModuleConfig_possibleTypes: string[] = ['PlatformModuleConfig']
    export const isPlatformModuleConfig = (obj?: { __typename?: any } | null): obj is PlatformModuleConfig => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPlatformModuleConfig"')
      return PlatformModuleConfig_possibleTypes.includes(obj.__typename)
    }
    


    const ModuleTokenDto_possibleTypes: string[] = ['ModuleTokenDto']
    export const isModuleTokenDto = (obj?: { __typename?: any } | null): obj is ModuleTokenDto => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isModuleTokenDto"')
      return ModuleTokenDto_possibleTypes.includes(obj.__typename)
    }
    


    const ExtensionTokenDto_possibleTypes: string[] = ['ExtensionTokenDto']
    export const isExtensionTokenDto = (obj?: { __typename?: any } | null): obj is ExtensionTokenDto => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isExtensionTokenDto"')
      return ExtensionTokenDto_possibleTypes.includes(obj.__typename)
    }
    


    const EntityMetafield_possibleTypes: string[] = ['EntityMetafield']
    export const isEntityMetafield = (obj?: { __typename?: any } | null): obj is EntityMetafield => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isEntityMetafield"')
      return EntityMetafield_possibleTypes.includes(obj.__typename)
    }
    


    const ObjectMetadata_possibleTypes: string[] = ['ObjectMetadata']
    export const isObjectMetadata = (obj?: { __typename?: any } | null): obj is ObjectMetadata => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isObjectMetadata"')
      return ObjectMetadata_possibleTypes.includes(obj.__typename)
    }
    


    const ObjectMetadataBatchResult_possibleTypes: string[] = ['ObjectMetadataBatchResult']
    export const isObjectMetadataBatchResult = (obj?: { __typename?: any } | null): obj is ObjectMetadataBatchResult => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isObjectMetadataBatchResult"')
      return ObjectMetadataBatchResult_possibleTypes.includes(obj.__typename)
    }
    


    const CustomFieldOptionModel_possibleTypes: string[] = ['CustomFieldOptionModel']
    export const isCustomFieldOptionModel = (obj?: { __typename?: any } | null): obj is CustomFieldOptionModel => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCustomFieldOptionModel"')
      return CustomFieldOptionModel_possibleTypes.includes(obj.__typename)
    }
    


    const CustomFieldDefinitionModel_possibleTypes: string[] = ['CustomFieldDefinitionModel']
    export const isCustomFieldDefinitionModel = (obj?: { __typename?: any } | null): obj is CustomFieldDefinitionModel => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCustomFieldDefinitionModel"')
      return CustomFieldDefinitionModel_possibleTypes.includes(obj.__typename)
    }
    


    const CustomFieldWithValueModel_possibleTypes: string[] = ['CustomFieldWithValueModel']
    export const isCustomFieldWithValueModel = (obj?: { __typename?: any } | null): obj is CustomFieldWithValueModel => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCustomFieldWithValueModel"')
      return CustomFieldWithValueModel_possibleTypes.includes(obj.__typename)
    }
    


    const CustomFieldValuesBatchResultModel_possibleTypes: string[] = ['CustomFieldValuesBatchResultModel']
    export const isCustomFieldValuesBatchResultModel = (obj?: { __typename?: any } | null): obj is CustomFieldValuesBatchResultModel => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCustomFieldValuesBatchResultModel"')
      return CustomFieldValuesBatchResultModel_possibleTypes.includes(obj.__typename)
    }
    


    const PlatformCustomDomainData_possibleTypes: string[] = ['PlatformCustomDomainData']
    export const isPlatformCustomDomainData = (obj?: { __typename?: any } | null): obj is PlatformCustomDomainData => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPlatformCustomDomainData"')
      return PlatformCustomDomainData_possibleTypes.includes(obj.__typename)
    }
    


    const PlatformThemeSocialLinksModel_possibleTypes: string[] = ['PlatformThemeSocialLinksModel']
    export const isPlatformThemeSocialLinksModel = (obj?: { __typename?: any } | null): obj is PlatformThemeSocialLinksModel => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPlatformThemeSocialLinksModel"')
      return PlatformThemeSocialLinksModel_possibleTypes.includes(obj.__typename)
    }
    


    const PlatformThemeSectionConfigModel_possibleTypes: string[] = ['PlatformThemeSectionConfigModel']
    export const isPlatformThemeSectionConfigModel = (obj?: { __typename?: any } | null): obj is PlatformThemeSectionConfigModel => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPlatformThemeSectionConfigModel"')
      return PlatformThemeSectionConfigModel_possibleTypes.includes(obj.__typename)
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
   EVENT_REGISTRATION_ADMIN_UPDATE_STATUS_DENIED: 'EVENT_REGISTRATION_ADMIN_UPDATE_STATUS_DENIED' as const,
   TOURNAMENT_TEAM_REGISTERED: 'TOURNAMENT_TEAM_REGISTERED' as const,
   TOURNAMENT_TEAM_DELETED: 'TOURNAMENT_TEAM_DELETED' as const,
   TOURNAMENT_TEAM_MEMBER_INVITED: 'TOURNAMENT_TEAM_MEMBER_INVITED' as const,
   TOURNAMENT_TEAM_MEMBER_INVITE_ACCEPTED: 'TOURNAMENT_TEAM_MEMBER_INVITE_ACCEPTED' as const,
   TOURNAMENT_TEAM_MEMBER_INVITE_REJECTED: 'TOURNAMENT_TEAM_MEMBER_INVITE_REJECTED' as const,
   TOURNAMENT_TEAM_MEMBER_REMOVED: 'TOURNAMENT_TEAM_MEMBER_REMOVED' as const,
   TOURNAMENT_TEAM_CONFIRMED: 'TOURNAMENT_TEAM_CONFIRMED' as const,
   TOURNAMENT_TEAM_ATTENDANCE_UPDATED: 'TOURNAMENT_TEAM_ATTENDANCE_UPDATED' as const,
   TOURNAMENT_TEAM_STATUS_UPDATE_NOT_ATTENDING: 'TOURNAMENT_TEAM_STATUS_UPDATE_NOT_ATTENDING' as const,
   TOURNAMENT_TEAM_STATUS_UPDATE_NOT_VALID: 'TOURNAMENT_TEAM_STATUS_UPDATE_NOT_VALID' as const,
   TOURNAMENT_TEAM_STATUS_UPDATE_REGISTERED: 'TOURNAMENT_TEAM_STATUS_UPDATE_REGISTERED' as const,
   TOURNAMENT_TEAM_STATUS_UPDATE_AWAITING_FOR_PAYMENT: 'TOURNAMENT_TEAM_STATUS_UPDATE_AWAITING_FOR_PAYMENT' as const,
   TOURNAMENT_TEAM_STATUS_UPDATE_AWAITING_FOR_PRESENCE_CONFIRMATION: 'TOURNAMENT_TEAM_STATUS_UPDATE_AWAITING_FOR_PRESENCE_CONFIRMATION' as const,
   TOURNAMENT_TEAM_STATUS_UPDATE_CONFIRMED: 'TOURNAMENT_TEAM_STATUS_UPDATE_CONFIRMED' as const,
   TOURNAMENT_TEAM_STATUS_UPDATE_DENIED: 'TOURNAMENT_TEAM_STATUS_UPDATE_DENIED' as const,
   SHOP_PURCHASE_COMPLETED: 'SHOP_PURCHASE_COMPLETED' as const,
   ORGANIZATION_MEMBER_ADDED: 'ORGANIZATION_MEMBER_ADDED' as const,
   ORGANIZATION_MEMBER_REMOVED: 'ORGANIZATION_MEMBER_REMOVED' as const
}

export const enumLogAuthorType = {
   SYSTEM: 'SYSTEM' as const,
   USER: 'USER' as const,
   APP: 'APP' as const
}

export const enumWebhookEventType = {
   PLAYER_CREATED: 'PLAYER_CREATED' as const,
   PLAYER_UPDATED: 'PLAYER_UPDATED' as const,
   PLAYER_DELETED: 'PLAYER_DELETED' as const,
   TOURNAMENT_CREATED: 'TOURNAMENT_CREATED' as const,
   TOURNAMENT_UPDATED: 'TOURNAMENT_UPDATED' as const,
   TOURNAMENT_DELETED: 'TOURNAMENT_DELETED' as const,
   TOURNAMENT_STEP_CREATED: 'TOURNAMENT_STEP_CREATED' as const,
   TOURNAMENT_STEP_UPDATED: 'TOURNAMENT_STEP_UPDATED' as const,
   TOURNAMENT_STEP_DELETED: 'TOURNAMENT_STEP_DELETED' as const,
   TOURNAMENT_STEP_GENERATED: 'TOURNAMENT_STEP_GENERATED' as const,
   TOURNAMENT_STEP_SEEDED: 'TOURNAMENT_STEP_SEEDED' as const,
   TOURNAMENT_TEAM_REGISTERED: 'TOURNAMENT_TEAM_REGISTERED' as const,
   TOURNAMENT_TEAM_UPDATED: 'TOURNAMENT_TEAM_UPDATED' as const,
   TOURNAMENT_TEAM_DELETED_ADMIN: 'TOURNAMENT_TEAM_DELETED_ADMIN' as const,
   TOURNAMENT_TEAM_DELETED: 'TOURNAMENT_TEAM_DELETED' as const,
   TOURNAMENT_TEAM_STATUS_UPDATED: 'TOURNAMENT_TEAM_STATUS_UPDATED' as const,
   TOURNAMENT_TEAM_ATTENDANCE_UPDATED: 'TOURNAMENT_TEAM_ATTENDANCE_UPDATED' as const,
   TOURNAMENT_TEAM_CONFIRMATION_UPDATED: 'TOURNAMENT_TEAM_CONFIRMATION_UPDATED' as const,
   TOURNAMENT_TEAM_MEMBER_UPDATED: 'TOURNAMENT_TEAM_MEMBER_UPDATED' as const,
   TOURNAMENT_MATCH_SCORE_UPDATED: 'TOURNAMENT_MATCH_SCORE_UPDATED' as const,
   TOURNAMENT_MATCH_STATUS_UPDATED: 'TOURNAMENT_MATCH_STATUS_UPDATED' as const,
   ORGANIZATION_MEMBER_ADDED: 'ORGANIZATION_MEMBER_ADDED' as const,
   ORGANIZATION_MEMBER_REMOVED: 'ORGANIZATION_MEMBER_REMOVED' as const,
   EVENT_CREATED: 'EVENT_CREATED' as const,
   EVENT_UPDATED: 'EVENT_UPDATED' as const,
   EVENT_DELETED: 'EVENT_DELETED' as const,
   EVENT_RESERVATION_CREATED: 'EVENT_RESERVATION_CREATED' as const,
   EVENT_RESERVATION_CANCELLED: 'EVENT_RESERVATION_CANCELLED' as const,
   EVENT_RESERVATION_STATUS_UPDATED: 'EVENT_RESERVATION_STATUS_UPDATED' as const,
   EVENT_RESERVATION_PRESENCE_CONFIRMED: 'EVENT_RESERVATION_PRESENCE_CONFIRMED' as const,
   SHOP_PURCHASE_COMPLETED: 'SHOP_PURCHASE_COMPLETED' as const,
   SHOP_PURCHASE_FAILED: 'SHOP_PURCHASE_FAILED' as const,
   SHOP_PRODUCT_CREATED: 'SHOP_PRODUCT_CREATED' as const,
   PLAYER_CURRENCY_UPDATED: 'PLAYER_CURRENCY_UPDATED' as const,
   PLAYER_ITEM_UPDATED: 'PLAYER_ITEM_UPDATED' as const,
   CURRENCY_CREATED: 'CURRENCY_CREATED' as const,
   ITEM_CREATED: 'ITEM_CREATED' as const,
   LEADERBOARD_SCORE_REGISTERED: 'LEADERBOARD_SCORE_REGISTERED' as const,
   LEADERBOARD_CREATED: 'LEADERBOARD_CREATED' as const,
   LEADERBOARD_DELETED: 'LEADERBOARD_DELETED' as const,
   SKILL_RATING_MATCH_REGISTERED: 'SKILL_RATING_MATCH_REGISTERED' as const,
   PLATFORM_CREATED: 'PLATFORM_CREATED' as const,
   PLATFORM_UPDATED: 'PLATFORM_UPDATED' as const,
   PLATFORM_DELETED: 'PLATFORM_DELETED' as const
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

export const enumIdentityProviderAvailability = {
   PUBLIC: 'PUBLIC' as const,
   PREVIEW: 'PREVIEW' as const,
   PRIVATE: 'PRIVATE' as const
}

export const enumFrontendModulePropType = {
   STRING: 'STRING' as const,
   NUMBER: 'NUMBER' as const,
   BOOLEAN: 'BOOLEAN' as const,
   SELECT: 'SELECT' as const,
   ROUTE_PARAM: 'ROUTE_PARAM' as const
}

export const enumExtensionPointType = {
   TAB: 'TAB' as const,
   DASHBOARD_WIDGET: 'DASHBOARD_WIDGET' as const,
   ADMIN_NAVIGATION: 'ADMIN_NAVIGATION' as const
}

export const enumPlatformCdnFileType = {
   PAGE: 'PAGE' as const,
   COMPONENT: 'COMPONENT' as const,
   TEXT: 'TEXT' as const,
   IMAGE: 'IMAGE' as const
}

export const enumMarketplaceAppReleaseStatus = {
   PENDING_REVIEW: 'PENDING_REVIEW' as const,
   APPROVED: 'APPROVED' as const,
   REJECTED: 'REJECTED' as const
}

export const enumAppReleaseStatus = {
   DRAFT: 'DRAFT' as const,
   PENDING_REVIEW: 'PENDING_REVIEW' as const,
   APPROVED: 'APPROVED' as const,
   REJECTED: 'REJECTED' as const
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

export const enumMatchStatus = {
   WAITING: 'WAITING' as const,
   STARTED: 'STARTED' as const,
   ENDED: 'ENDED' as const
}

export const enumTournamentTeamMemberStatus = {
   AWAITING: 'AWAITING' as const,
   ACCEPTED: 'ACCEPTED' as const,
   DENIED: 'DENIED' as const
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

export const enumRuleConditionOperatorType = {
   eq: 'eq' as const,
   neq: 'neq' as const,
   gt: 'gt' as const,
   gte: 'gte' as const,
   lt: 'lt' as const,
   lte: 'lte' as const,
   in: 'in' as const,
   between: 'between' as const
}

export const enumConditionScopeType = {
   MATCH: 'MATCH' as const,
   GAME: 'GAME' as const,
   ROUND: 'ROUND' as const,
   GROUP: 'GROUP' as const,
   STEP: 'STEP' as const
}

export const enumRefType = {
   ID: 'ID' as const,
   RELATIVE: 'RELATIVE' as const
}

export const enumStepRelativePosition = {
   PREVIOUS: 'PREVIOUS' as const,
   NEXT: 'NEXT' as const,
   CURRENT: 'CURRENT' as const
}

export const enumMatchConfigSource = {
   STEP_CONFIG: 'STEP_CONFIG' as const,
   INLINE: 'INLINE' as const
}

export const enumAutoGenerateType = {
   ROUND_ROBIN_PAIRS: 'ROUND_ROBIN_PAIRS' as const,
   BRACKET: 'BRACKET' as const,
   SWISS_PAIRS: 'SWISS_PAIRS' as const,
   LOWER_BRACKET: 'LOWER_BRACKET' as const,
   STEP_LADDER: 'STEP_LADDER' as const,
   DOUBLE_ROUND_ROBIN_PAIRS: 'DOUBLE_ROUND_ROBIN_PAIRS' as const,
   PAGE_PLAYOFF: 'PAGE_PLAYOFF' as const,
   GSL_DUAL_TOURNAMENT: 'GSL_DUAL_TOURNAMENT' as const
}

export const enumRuleActionType = {
   ADVANCE_TO_GAME: 'ADVANCE_TO_GAME' as const,
   ADVANCE_TO_GROUP: 'ADVANCE_TO_GROUP' as const,
   ADVANCE_TO_STEP: 'ADVANCE_TO_STEP' as const,
   ELIMINATE: 'ELIMINATE' as const,
   GENERATE_NEXT_ROUND: 'GENERATE_NEXT_ROUND' as const,
   END_GAME: 'END_GAME' as const,
   END_ROUND: 'END_ROUND' as const,
   END_GROUP: 'END_GROUP' as const,
   SET_TEAM_PROPERTY: 'SET_TEAM_PROPERTY' as const
}

export const enumRankMappingType = {
   BY_RANK: 'BY_RANK' as const,
   SEED_OPTIMIZED: 'SEED_OPTIMIZED' as const,
   RANDOM: 'RANDOM' as const
}

export const enumPairingStrategyType = {
   SWISS_DUTCH: 'SWISS_DUTCH' as const,
   SWISS_MONRAD: 'SWISS_MONRAD' as const,
   RANDOM: 'RANDOM' as const,
   BY_RANK: 'BY_RANK' as const
}

export const enumRuleSortOrder = {
   ASC: 'ASC' as const,
   DESC: 'DESC' as const
}

export const enumScoreAggregationType = {
   SUM: 'SUM' as const,
   AVERAGE: 'AVERAGE' as const,
   POINTS: 'POINTS' as const,
   FORMULA: 'FORMULA' as const
}

export const enumRuleTriggerType = {
   MATCH_ENDED: 'MATCH_ENDED' as const,
   GAME_ENDED: 'GAME_ENDED' as const,
   ROUND_ENDED: 'ROUND_ENDED' as const,
   GROUP_ENDED: 'GROUP_ENDED' as const,
   STEP_ENDED: 'STEP_ENDED' as const,
   MANUAL: 'MANUAL' as const
}

export const enumConditionOperator = {
   AND: 'AND' as const,
   OR: 'OR' as const
}

export const enumCrossStepUsageType = {
   SEED_ORDER: 'SEED_ORDER' as const,
   QUALIFY: 'QUALIFY' as const,
   INJECT_SCORE: 'INJECT_SCORE' as const
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

export const enumShopCurrencies = {
   USD: 'USD' as const,
   EUR: 'EUR' as const,
   GBP: 'GBP' as const
}

export const enumLogType = {
   WEBHOOK_CALL: 'WEBHOOK_CALL' as const,
   WEBHOOK_CALL_ERROR: 'WEBHOOK_CALL_ERROR' as const
}

export const enumMarketplaceAppStatus = {
   DRAFT: 'DRAFT' as const,
   IN_REVIEW: 'IN_REVIEW' as const,
   PUBLISHED: 'PUBLISHED' as const,
   REJECTED: 'REJECTED' as const,
   SUSPENDED: 'SUSPENDED' as const
}

export const enumMarketplaceInstallationStatus = {
   ACTIVE: 'ACTIVE' as const,
   SUSPENDED: 'SUSPENDED' as const,
   UNINSTALLED: 'UNINSTALLED' as const
}

export const enumMarketplacePricingType = {
   FREE: 'FREE' as const,
   ONE_TIME: 'ONE_TIME' as const,
   SUBSCRIPTION: 'SUBSCRIPTION' as const
}

export const enumMetadataType = {
   STRING: 'STRING' as const,
   BOOLEAN: 'BOOLEAN' as const,
   IMAGE_URL: 'IMAGE_URL' as const,
   URL: 'URL' as const
}

export const enumMetadataVisibility = {
   PUBLIC: 'PUBLIC' as const,
   PRIVATE: 'PRIVATE' as const
}

export const enumObjectType = {
   Account: 'Account' as const,
   ClanGroup: 'ClanGroup' as const,
   ClanMember: 'ClanMember' as const,
   Clan: 'Clan' as const,
   Configuration: 'Configuration' as const,
   LeaderboardSeasonBucketScore: 'LeaderboardSeasonBucketScore' as const,
   LeaderboardSeasonBucket: 'LeaderboardSeasonBucket' as const,
   LeaderboardSeason: 'LeaderboardSeason' as const,
   Leaderboard: 'Leaderboard' as const,
   OrganizationGroup: 'OrganizationGroup' as const,
   OrganizationMember: 'OrganizationMember' as const,
   OrganizationApp: 'OrganizationApp' as const,
   Organization: 'Organization' as const,
   EmailConfiguration: 'EmailConfiguration' as const,
   EmailTemplate: 'EmailTemplate' as const,
   OrganizationIdentityProvider: 'OrganizationIdentityProvider' as const,
   IdentityProvider: 'IdentityProvider' as const,
   PlayerProfile: 'PlayerProfile' as const,
   SkillRating: 'SkillRating' as const,
   PlayerSkillRating: 'PlayerSkillRating' as const,
   TeamMember: 'TeamMember' as const,
   Team: 'Team' as const,
   TournamentStepGroupRoundGameMatchScores: 'TournamentStepGroupRoundGameMatchScores' as const,
   TournamentStepGroupRoundGameMatch: 'TournamentStepGroupRoundGameMatch' as const,
   TournamentStepGroupRoundGameTeamScore: 'TournamentStepGroupRoundGameTeamScore' as const,
   TournamentStepGroupRoundGame: 'TournamentStepGroupRoundGame' as const,
   TournamentStepGroupRoundTeamScore: 'TournamentStepGroupRoundTeamScore' as const,
   TournamentStepGroupRound: 'TournamentStepGroupRound' as const,
   TournamentStepGroupTeamScore: 'TournamentStepGroupTeamScore' as const,
   TournamentStepGroup: 'TournamentStepGroup' as const,
   TournamentStepTeamScore: 'TournamentStepTeamScore' as const,
   TournamentStep: 'TournamentStep' as const,
   TournamentTeamMember: 'TournamentTeamMember' as const,
   TournamentTeam: 'TournamentTeam' as const,
   TournamentTeamScore: 'TournamentTeamScore' as const,
   Tournament: 'Tournament' as const,
   TournamentAdmin: 'TournamentAdmin' as const,
   TournamentFeature: 'TournamentFeature' as const,
   EventVenueSeat: 'EventVenueSeat' as const,
   EventVenueSeatType: 'EventVenueSeatType' as const,
   EventVenue: 'EventVenue' as const,
   EventSeatStatus: 'EventSeatStatus' as const,
   EventTicketConfiguration: 'EventTicketConfiguration' as const,
   EventReservationTicket: 'EventReservationTicket' as const,
   EventReservation: 'EventReservation' as const,
   Event: 'Event' as const,
   UserGroupConfiguration: 'UserGroupConfiguration' as const,
   UserGroup: 'UserGroup' as const,
   UserGroupMember: 'UserGroupMember' as const,
   SubscriptionItem: 'SubscriptionItem' as const,
   Log: 'Log' as const,
   PlatformTemplate: 'PlatformTemplate' as const,
   Platform: 'Platform' as const,
   PlatformCdnFile: 'PlatformCdnFile' as const,
   PlatformModuleConfig: 'PlatformModuleConfig' as const,
   Webhook: 'Webhook' as const,
   Payments: 'Payments' as const,
   Currency: 'Currency' as const,
   PlayerCurrency: 'PlayerCurrency' as const,
   ItemCategory: 'ItemCategory' as const,
   Item: 'Item' as const,
   PlayerItem: 'PlayerItem' as const,
   Shop: 'Shop' as const,
   ShopCategory: 'ShopCategory' as const,
   PlayerShopProductPurshase: 'PlayerShopProductPurshase' as const,
   ShopProductItem: 'ShopProductItem' as const,
   ShopProduct: 'ShopProduct' as const,
   StepRuleSet: 'StepRuleSet' as const,
   RuleSetVersion: 'RuleSetVersion' as const,
   ScoringRuleSet: 'ScoringRuleSet' as const,
   TiebreakerRule: 'TiebreakerRule' as const,
   AdvancementRule: 'AdvancementRule' as const,
   RuleExecutionLog: 'RuleExecutionLog' as const,
   CrossStepRule: 'CrossStepRule' as const,
   StructureTemplate: 'StructureTemplate' as const,
   GroupTemplate: 'GroupTemplate' as const,
   RoundTemplate: 'RoundTemplate' as const,
   GameTemplate: 'GameTemplate' as const,
   AppWebhook: 'AppWebhook' as const,
   AppRelease: 'AppRelease' as const,
   MarketplaceApp: 'MarketplaceApp' as const,
   MarketplaceAppPricing: 'MarketplaceAppPricing' as const,
   MarketplaceAppRelease: 'MarketplaceAppRelease' as const,
   MarketplaceAppReview: 'MarketplaceAppReview' as const,
   MarketplaceAppInstallation: 'MarketplaceAppInstallation' as const
}

export const enumCustomFieldType = {
   STRING: 'STRING' as const,
   NUMBER: 'NUMBER' as const,
   BOOLEAN: 'BOOLEAN' as const,
   DATE: 'DATE' as const,
   EMAIL: 'EMAIL' as const,
   PHONE: 'PHONE' as const,
   URL: 'URL' as const,
   COUNTRY: 'COUNTRY' as const,
   SELECT: 'SELECT' as const,
   MULTI_SELECT: 'MULTI_SELECT' as const,
   IMAGE: 'IMAGE' as const
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
   TOURNAMENT_STEP_RULE_SETS: 'TOURNAMENT_STEP_RULE_SETS' as const,
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
   SHOP_PRODUCTS: 'SHOP_PRODUCTS' as const,
   MARKETPLACE_PUBLISHED_APPS: 'MARKETPLACE_PUBLISHED_APPS' as const,
   MARKETPLACE_INSTALLATIONS: 'MARKETPLACE_INSTALLATIONS' as const
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

export const enumRulePresetName = {
   SINGLE_ELIM: 'SINGLE_ELIM' as const,
   DOUBLE_ELIM: 'DOUBLE_ELIM' as const,
   ROUND_ROBIN: 'ROUND_ROBIN' as const,
   SWISS: 'SWISS' as const,
   BUCHHOLZ_GROUPS: 'BUCHHOLZ_GROUPS' as const,
   ROUND_ROBIN_BO3: 'ROUND_ROBIN_BO3' as const,
   LEAGUE_HOME_AWAY: 'LEAGUE_HOME_AWAY' as const,
   SWISS_ACCELERATED: 'SWISS_ACCELERATED' as const,
   SINGLE_ELIM_CONSOLATION: 'SINGLE_ELIM_CONSOLATION' as const,
   RANDOM_DRAW_KNOCKOUT: 'RANDOM_DRAW_KNOCKOUT' as const,
   STEP_LADDER: 'STEP_LADDER' as const,
   PAGE_PLAYOFF: 'PAGE_PLAYOFF' as const,
   GAUNTLET: 'GAUNTLET' as const,
   DOUBLE_ELIM_TRUE_FINALS: 'DOUBLE_ELIM_TRUE_FINALS' as const,
   GSL_FORMAT: 'GSL_FORMAT' as const,
   SWISS_MCMAHON: 'SWISS_MCMAHON' as const,
   TRIPLE_ELIM: 'TRIPLE_ELIM' as const,
   POINTS_RACE: 'POINTS_RACE' as const,
   BATTLE_ROYALE: 'BATTLE_ROYALE' as const,
   ROUND_ROBIN_PLAYOFFS: 'ROUND_ROBIN_PLAYOFFS' as const,
   CONQUEST: 'CONQUEST' as const,
   KING_OF_THE_HILL_BO5: 'KING_OF_THE_HILL_BO5' as const
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
