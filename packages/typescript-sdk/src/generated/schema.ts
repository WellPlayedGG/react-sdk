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
    /**
     * @deprecated Use MATCH_SERIES_RESOLUTION advancement rule instead. Kept for legacy tournaments without rule sets.
     * Number of match wins required to win the game (best-of format)
     */
    wonMatchCountToWinGame: (Scalars['Float'] | null)
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
    /**
     * @deprecated Legacy groups system. Will be removed in a future version.
     * List of group configurations within this step
     */
    groups: (GroupConfiguration[] | null)
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

export type TournamentTeamStatus = 'NOT_ATTENDING' | 'NOT_VALID' | 'REGISTERED' | 'AWAITING_FOR_PAYMENT' | 'AWAITING_FOR_PRESENCE_CONFIRMATION' | 'CONFIRMED' | 'DENIED' | 'WITHDRAWN'


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


/** A manual seeding pin. At least one of groupId or gameId must be set. */
export interface SeedingPin {
    /** Team being pinned */
    teamId: Scalars['ID']
    /** Pin the team to this group */
    groupId: (Scalars['ID'] | null)
    /** Pin the team to this game slots */
    gameId: (Scalars['ID'] | null)
    /** 0-indexed slot within the game */
    slotIndex: (Scalars['Int'] | null)
    __typename: 'SeedingPin'
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
    /** Date and time when the team withdrew from the tournament, or null if the team has not withdrawn */
    withdrawnAt: (Scalars['DateTime'] | null)
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
    /** Ordered list of tournament team IDs representing the seeding order for this step (computed by SEEDING rules, consumed by structure generation). */
    seedingOrder: Scalars['ID'][]
    /** Date and time when the step was created */
    createdAt: Scalars['DateTime']
    /** Date and time when the step was last updated */
    updatedAt: Scalars['DateTime']
    /** Team scores accumulated within this tournament step */
    teamScores: TournamentTeamScore[]
    /** The tournament this step belongs to */
    tournament: Tournament
    /** Manual seeding pin overrides persisted on the step. Empty when no pins are set. Produced by `persistSeedingPins` / `seedStep`; consumed by the seeding pipeline. */
    manualPins: SeedingPin[]
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
    /** Timestamp when the game was created */
    createdAt: Scalars['DateTime']
    /** Timestamp when the game was last updated */
    updatedAt: Scalars['DateTime']
    /** Matches within this game (best-of series) */
    matches: TournamentStepGroupRoundGameMatch[]
    /** Outgoing bracket routing edges. Each entry describes where the `WIN` or `LOSS` outcome of this game routes the affected team. An empty list means this game is a terminal node (e.g. the grand final). */
    gameLinks: GameLink[]
    /**
     * @deprecated Use `gameLinks` — will be removed once all clients migrate.
     * Deprecated. The ID of the game the winning team of this game advances to. Derived from `gameLinks` where `outcome = WIN`.
     */
    winningGameId: (Scalars['ID'] | null)
    /**
     * @deprecated Use `gameLinks` — will be removed once all clients migrate.
     * Deprecated. The ID of the game the losing team of this game drops to (loser bracket in double-elimination, or third-place game in single-elimination). Derived from `gameLinks` where `outcome = LOSS`.
     */
    losingGameId: (Scalars['ID'] | null)
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
    /** Display order of the group within its tournament step */
    order: Scalars['Float']
    /** Rounds within this group */
    rounds: TournamentStepGroupRound[]
    __typename: 'TournamentStepGroup'
}


/** Directed routing edge between two games in a tournament bracket. Emitted both at generation time (for statically known brackets such as single/double-elimination) and dynamically by the rule engine (for formats whose routing is produced by Lua `GENERATION` / action scripts). */
export interface GameLink {
    /** Unique identifier for this game-routing link. */
    id: Scalars['ID']
    /** ID of the game whose outcome triggers the routing. This is the upstream / predecessor game. */
    sourceGameId: Scalars['ID']
    /** ID of the game the routing points to. This is the downstream / successor game the advancing team will play in. */
    targetGameId: Scalars['ID']
    /** Which outcome of the source game activates this link. `WIN` = winner-bracket advancement; `LOSS` = loser-bracket drop or third-place routing. */
    outcome: GameLinkOutcome
    __typename: 'GameLink'
}


/** Outcome that produces this bracket routing link. `WIN` routes the winning team of the source game to the target game (the winner bracket path). `LOSS` routes the losing team of the source game to the target game (the loser bracket path in double-elimination formats, or the third-place game in single-elimination). */
export type GameLinkOutcome = 'WIN' | 'LOSS'


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

export type MatchScoreStatus = 'WAITING' | 'WINNER' | 'LOSER' | 'FORFEIT' | 'DRAW'


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


/** A single action performed when a rule fires */
export interface RuleActionModel {
    /** Kind of action performed */
    type: RuleActionType
    /** Lua expression or script for this action */
    script: (Scalars['String'] | null)
    __typename: 'RuleActionModel'
}


/** Built-in action kind performed when an advancement rule fires */
export type RuleActionType = 'ADVANCE' | 'ELIMINATE' | 'END' | 'EXECUTE_LUA'


/** A single advancement rule within a rule set */
export interface AdvancementRuleModel {
    /** Unique rule ID */
    id: Scalars['ID']
    /** Human-readable rule name */
    name: Scalars['String']
    /** Optional description */
    description: (Scalars['String'] | null)
    /** Evaluation order within the rule set */
    order: Scalars['Int']
    /** Tournament lifecycle event that triggers this rule */
    triggerType: RuleTriggerType
    /** Optional Lua expression filtering the trigger scope */
    triggerScope: (Scalars['String'] | null)
    /** Lua expression returning a boolean */
    condition: Scalars['String']
    /** Actions executed when the condition passes */
    actions: RuleActionModel[]
    /** Whether the rule fires automatically on trigger events */
    autoExecute: Scalars['Boolean']
    /** Whether an operator can manually override this rule */
    allowManualOverride: Scalars['Boolean']
    /** Whether the rule is enabled */
    enabled: Scalars['Boolean']
    /** Well-known purpose marker for internal behavior */
    purpose: (AdvancementRulePurpose | null)
    /** Creation timestamp */
    createdAt: Scalars['DateTime']
    /** Last update timestamp */
    updatedAt: Scalars['DateTime']
    __typename: 'AdvancementRuleModel'
}


/** Tournament lifecycle event that triggers a rule evaluation */
export type RuleTriggerType = 'MATCH_ENDED' | 'GAME_ENDED' | 'ROUND_ENDED' | 'GROUP_ENDED' | 'STEP_ENDED' | 'MANUAL' | 'STEP_SEEDING' | 'ROUND_SEEDING' | 'TEAM_WITHDREW'


/** Well-known purposes that mark a rule for internal use */
export type AdvancementRulePurpose = 'ADVANCEMENT' | 'MATCH_SERIES_RESOLUTION' | 'ELIMINATION' | 'WINNER_PROMOTION' | 'SEEDING' | 'WITHDRAWAL_RESPONSE'


/** A single tiebreaker within a scoring rule set */
export interface TiebreakerRuleModel {
    /** Unique tiebreaker ID */
    id: Scalars['ID']
    /** Evaluation order */
    order: Scalars['Int']
    /** Tiebreaker strategy */
    type: TiebreakerType
    /** Lua expression — present for CUSTOM_FORMULA */
    formula: (Scalars['String'] | null)
    /** Sort order for this tiebreaker */
    sortOrder: SortOrder
    __typename: 'TiebreakerRuleModel'
}


/** Supported tiebreaker strategies for ranking ties */
export type TiebreakerType = 'HEAD_TO_HEAD' | 'SCORE_DIFFERENCE' | 'TOTAL_SCORE' | 'WINS' | 'BUCHHOLZ' | 'SONNBORN_BERGER' | 'MEDIAN_BUCHHOLZ' | 'CUMULATIVE' | 'CUSTOM_FORMULA'


/** Sort direction */
export type SortOrder = 'ASC' | 'DESC'


/** Scoring configuration attached to a rule set */
export interface ScoringRuleSetModel {
    /** Unique scoring rule set ID */
    id: Scalars['ID']
    /** Aggregation strategy */
    aggregation: ScoreAggregationType
    /** Lua expression for FORMULA aggregation */
    formula: (Scalars['String'] | null)
    /** Points for a win */
    winPoints: (Scalars['Int'] | null)
    /** Points for a loss */
    lossPoints: (Scalars['Int'] | null)
    /** Points for a draw */
    drawPoints: (Scalars['Int'] | null)
    /** Points for a forfeit */
    forfeitPoints: (Scalars['Int'] | null)
    /** Ordered tiebreakers */
    tiebreakers: TiebreakerRuleModel[]
    __typename: 'ScoringRuleSetModel'
}


/** Aggregation strategy used to compute a team score in a step */
export type ScoreAggregationType = 'SUM' | 'AVERAGE' | 'POINTS' | 'FORMULA' | 'CUSTOM_LUA'


/** Template for a single game within a round */
export interface GameTemplateModel {
    /** Unique game template ID */
    id: Scalars['ID']
    /** Game order within the round */
    order: Scalars['Int']
    /** Number of team slots in the game */
    teamSlots: Scalars['Int']
    /** Best-of count for the series */
    bestOf: Scalars['Int']
    /** Lua expression resolving to the target slot for the winner */
    onWinTarget: (Scalars['String'] | null)
    /** Which slot on this source game wins */
    onWinSourceSlot: (Scalars['Int'] | null)
    /** Target slot index for the winner */
    onWinTargetSlot: (Scalars['Int'] | null)
    /** Lua expression resolving to the target slot for the loser */
    onLossTarget: (Scalars['String'] | null)
    /** Which slot on this source game loses */
    onLossSourceSlot: (Scalars['Int'] | null)
    /** Target slot index for the loser */
    onLossTargetSlot: (Scalars['Int'] | null)
    __typename: 'GameTemplateModel'
}


/** Template for a single round within a group */
export interface RoundTemplateModel {
    /** Unique round template ID */
    id: Scalars['ID']
    /** Human-readable round name */
    name: Scalars['String']
    /** Round order within the group */
    order: Scalars['Int']
    /** Game templates for this round */
    gameTemplates: GameTemplateModel[]
    __typename: 'RoundTemplateModel'
}


/** Template for a single group within the structure */
export interface GroupTemplateModel {
    /** Unique group template ID */
    id: Scalars['ID']
    /** Human-readable group name */
    name: Scalars['String']
    /** Optional description */
    description: (Scalars['String'] | null)
    /** Group order within the structure */
    order: Scalars['Int']
    /** Numeric literal or Lua expression for total team slots */
    teamSlotsExpr: Scalars['String']
    /** Lua script that dynamically creates rounds and games (Mode 1) */
    generationScript: (Scalars['String'] | null)
    /** Numeric literal or Lua expression for best-of count per game */
    bestOfExpr: Scalars['String']
    /** Numeric literal or Lua expression for team slots per game */
    teamSlotsPerGameExpr: Scalars['String']
    /** Numeric literal or Lua expression for total round count */
    roundCountExpr: (Scalars['String'] | null)
    /** Static round templates (Mode 2) */
    roundTemplates: RoundTemplateModel[]
    __typename: 'GroupTemplateModel'
}


/** Complete structure template for a tournament step */
export interface StructureTemplateModel {
    /** Unique structure template ID */
    id: Scalars['ID']
    /** Group templates composing the structure */
    groupTemplates: GroupTemplateModel[]
    __typename: 'StructureTemplateModel'
}


/** How a cross-step rule consumes source-step data */
export interface CrossStepUsageModel {
    /** Usage strategy */
    type: CrossStepUsageType
    /** Lua boolean expression — present for QUALIFY usage */
    condition: (Scalars['String'] | null)
    /** Lua numeric expression — present for INJECT_SCORE usage */
    formula: (Scalars['String'] | null)
    __typename: 'CrossStepUsageModel'
}


/** How data from a source step is consumed by the target step */
export type CrossStepUsageType = 'SEED_ORDER' | 'QUALIFY' | 'INJECT_SCORE'


/** A single cross-step rule within a rule set */
export interface CrossStepRuleModel {
    /** Unique cross-step rule ID */
    id: Scalars['ID']
    /** Explicit source step ID, if set */
    sourceStepId: (Scalars['ID'] | null)
    /** Relative source step selector, if set */
    sourceRelative: (StepRelativePosition | null)
    /** Kind of data pulled */
    dataSource: CrossStepDataSource
    /** How the data is consumed */
    usage: CrossStepUsageModel
    __typename: 'CrossStepRuleModel'
}


/** Relative position of a tournament step used by cross-step rules */
export type StepRelativePosition = 'PREVIOUS' | 'NEXT' | 'CURRENT'


/** Type of data pulled from the source step */
export type CrossStepDataSource = 'TEAMS' | 'WINNERS' | 'QUALIFIED' | 'ELIMINATED' | 'WITHDRAWN' | 'RANKINGS' | 'SCORES'


/** Complete rule set attached to a tournament step */
export interface StepRuleSetModel {
    /** Unique rule set ID */
    id: Scalars['ID']
    /** Version number of the rule set */
    version: Scalars['Int']
    /** Name of the preset this rule set was derived from, if any */
    presetName: (Scalars['String'] | null)
    /** Resolved team count at the time of rule-set generation */
    teamCount: (Scalars['Int'] | null)
    /** Whether the rule set has been validated */
    validated: Scalars['Boolean']
    /** Timestamp of the last successful validation */
    validatedAt: (Scalars['DateTime'] | null)
    /** Scoring configuration */
    scoringRuleSet: (ScoringRuleSetModel | null)
    /** Advancement rules in evaluation order */
    advancementRules: AdvancementRuleModel[]
    /** Cross-step rules attached to this rule set */
    crossStepRules: CrossStepRuleModel[]
    /** Optional static structure template */
    structureTemplate: (StructureTemplateModel | null)
    /** Creation timestamp */
    createdAt: Scalars['DateTime']
    /** Last update timestamp */
    updatedAt: Scalars['DateTime']
    __typename: 'StepRuleSetModel'
}


/** Declared parameter of a preset script */
export interface PresetParameterModel {
    /** Parameter name (unique within the preset) */
    name: Scalars['String']
    /** Primitive parameter type */
    type: PresetParameterType
    /** Whether the parameter must be provided when applying */
    required: Scalars['Boolean']
    /** Default value for optional parameters, serialized as a string */
    defaultValue: (Scalars['String'] | null)
    /** Optional description */
    description: (Scalars['String'] | null)
    __typename: 'PresetParameterModel'
}


/** Primitive type of a preset script parameter */
export type PresetParameterType = 'INT' | 'FLOAT' | 'STRING' | 'BOOLEAN'


/** User-defined preset script scoped to an organization */
export interface PresetScriptModel {
    /** Unique preset script ID */
    id: Scalars['ID']
    /** Preset name (unique within the organization) */
    name: Scalars['String']
    /** Optional description */
    description: (Scalars['String'] | null)
    /** Lua source building a complete rule set */
    script: Scalars['String']
    /** Declared parameters consumed by the preset */
    parameters: PresetParameterModel[]
    /** Creation timestamp */
    createdAt: Scalars['DateTime']
    /** Last update timestamp */
    updatedAt: Scalars['DateTime']
    __typename: 'PresetScriptModel'
}


/** A built-in tournament-format template provided by the platform. Built-ins are read-only and shared across all organizations. */
export interface BuiltinPresetModel {
    /** Stable slug identifier (e.g. "single-elim"). Use this as the `builtinPresetId` argument on apply/duplicate mutations. */
    id: Scalars['String']
    /** Human-readable display name shown in the UI */
    displayName: Scalars['String']
    /** One- to two-line description of the format */
    description: Scalars['String']
    /** Coarse family used to group templates in the picker */
    category: BuiltinPresetCategory
    /** Declared parameters consumed by the template */
    parameters: PresetParameterModel[]
    /** Canonical Lua source. Returned so callers can preview before duplicating. */
    source: Scalars['String']
    /** Whether this preset supports any form of team pinning (group pinning or slot pinning). When false, the UI MUST NOT expose the pin-team affordance for this preset. */
    supportsPinning: Scalars['Boolean']
    /** Whether this preset supports pinning a team to a specific group. When omitted, derive from topology (#groups > 1 && supportsPinning). */
    supportsGroupPinning: (Scalars['Boolean'] | null)
    /** Whether this preset supports pinning a team to a specific game slot. When omitted, derive from supportsPinning directly. */
    supportsSlotPinning: (Scalars['Boolean'] | null)
    __typename: 'BuiltinPresetModel'
}


/** High-level family of a built-in tournament-format preset. Used by the console to group templates in the picker. */
export type BuiltinPresetCategory = 'SINGLE_ELIMINATION' | 'DOUBLE_ELIMINATION' | 'SWISS' | 'ROUND_ROBIN' | 'GROUP_STAGE' | 'OTHER'


/** A single error reported by the Lua validator */
export interface ScriptErrorModel {
    /** Line number where the error was detected (1-based) */
    line: Scalars['Int']
    /** Column where the error was detected (1-based) */
    column: Scalars['Int']
    /** Human-readable error message */
    message: Scalars['String']
    /** Machine-readable error code */
    code: ScriptErrorCode
    __typename: 'ScriptErrorModel'
}


/** Machine-readable error categories returned by the Lua validator */
export type ScriptErrorCode = 'SYNTAX' | 'UNDEFINED_VARIABLE' | 'INVALID_FUNCTION' | 'TYPE_MISMATCH' | 'RUNTIME' | 'BLOCKED_FUNCTION' | 'TIMEOUT' | 'INSTRUCTION_LIMIT'


/** A single warning reported by the Lua validator */
export interface ScriptWarningModel {
    /** Line number where the warning was raised (1-based) */
    line: Scalars['Int']
    /** Column where the warning was raised (1-based) */
    column: Scalars['Int']
    /** Human-readable warning message */
    message: Scalars['String']
    /** Machine-readable warning code */
    code: ScriptWarningCode
    __typename: 'ScriptWarningModel'
}


/** Machine-readable warning categories returned by the Lua validator */
export type ScriptWarningCode = 'UNUSED_VARIABLE' | 'UNREACHABLE_CODE' | 'DEPRECATED_FUNCTION'


/** Result of a Lua script validation pass */
export interface ScriptValidationResultModel {
    /** Whether the script passed validation (no errors) */
    valid: Scalars['Boolean']
    /** Errors detected during validation */
    errors: ScriptErrorModel[]
    /** Warnings detected during validation */
    warnings: ScriptWarningModel[]
    __typename: 'ScriptValidationResultModel'
}


/** Summary of a single side-effect produced by a simulated run */
export interface SimulatedEffectModel {
    /** Type of effect */
    type: SimulatedEffectType
    /** Human-readable summary of the effect */
    description: Scalars['String']
    __typename: 'SimulatedEffectModel'
}


/** Type of side-effect produced by a simulated Lua script run */
export type SimulatedEffectType = 'ADVANCE' | 'ELIMINATE' | 'END_GAME' | 'END_ROUND' | 'END_GROUP' | 'SET_METADATA' | 'SET_CUSTOM_FIELD' | 'SET_STATUS' | 'SET_MATCH_RESULT' | 'REGISTER_TEAM' | 'CREATE_GROUP' | 'CREATE_ROUND' | 'CREATE_GAME' | 'LINK' | 'SET_SCORING' | 'ADD_TIEBREAKER' | 'ADD_RULE' | 'ADD_CROSS_STEP_RULE' | 'RESEED_STEP'


/** Result of simulating a Lua script */
export interface ScriptSimulationResultModel {
    /** Whether the script ran to completion without errors */
    success: Scalars['Boolean']
    /** Errors captured during simulation */
    errors: ScriptErrorModel[]
    /** Warnings captured during simulation */
    warnings: ScriptWarningModel[]
    /** Summary of side-effects produced by the simulated run */
    effectsSummary: SimulatedEffectModel[]
    /** Wall-clock execution time in milliseconds */
    executionTimeMs: Scalars['Int']
    /** Number of Lua instructions executed */
    instructionsUsed: Scalars['Int']
    __typename: 'ScriptSimulationResultModel'
}


/** Structured detail about a Lua runtime error */
export interface LuaErrorDetailModel {
    /** Script execution context in which the error occurred */
    scriptContextType: ScriptContextType
    /** The Lua source script that threw the error */
    script: Scalars['String']
    /** Line number of the error (1-based) */
    line: Scalars['Int']
    /** Column of the error (1-based) */
    column: Scalars['Int']
    /** Human-readable error message */
    message: Scalars['String']
    /** Stack trace lines */
    stack: Scalars['String'][]
    __typename: 'LuaErrorDetailModel'
}


/** Execution context of a Lua script — determines which variables and functions are available */
export type ScriptContextType = 'CONDITION' | 'ACTION' | 'GENERATION' | 'PRESET' | 'CROSS_STEP' | 'FORMULA'


/** A single error produced during a validation run */
export interface ValidationErrorModel {
    /** Unique validation error ID */
    id: Scalars['ID']
    /** Machine-readable error code */
    code: ValidationErrorCode
    /** Human-readable error message. Includes the offender context (which rule / team / game / group triggered the violation) and, for Lua throws, the raw Lua message and line number. */
    message: Scalars['String']
    /** Preset-author-facing remediation hint — describes the class of problem and suggests the next step a preset author should take. Keyed on the invariant / error code. */
    hint: (Scalars['String'] | null)
    /** Invariant code, if the error was caused by a violated invariant */
    invariantCode: (InvariantCode | null)
    /** Lua error detail, if the error originated from a Lua script */
    luaError: (LuaErrorDetailModel | null)
    /** Offending entity, if available */
    offender: (InvariantOffenderUnion | null)
    __typename: 'ValidationErrorModel'
}


/** Machine-readable error codes emitted by the validator */
export type ValidationErrorCode = 'SETUP_FAILED' | 'UPSTREAM_NOT_VALIDATED' | 'SEEDING_FAILED' | 'GENERATION_FAILED' | 'LUA_THROW' | 'RULE_NEVER_FIRED' | 'CROSS_STEP_NEVER_EVALUATED' | 'INVARIANT_VIOLATED' | 'DEADLOCK' | 'MUTATION_CEILING_EXCEEDED' | 'EXECUTION_TIMEOUT' | 'ORPHAN_SCORE_ROW' | 'DUPLICATE_ADVANCEMENT' | 'ADVANCE_TARGET_MISSING' | 'ADVANCE_BACKWARD' | 'ADVANCE_OVER_CAPACITY' | 'INVALID_RULE_SET_INPUT' | 'RULE_ACTION_INVALID_ID' | 'INTERNAL_ERROR'


/** Machine-readable invariant codes checked during validation */
export type InvariantCode = 'STEP_NOT_ENDED' | 'GAME_NOT_ENDED' | 'GROUP_OR_ROUND_INCOMPLETE' | 'NO_WINNER_DECLARED' | 'TEAM_IN_LIMBO' | 'RANK_NOT_MATERIALISED' | 'RULE_NEVER_FIRED' | 'INFINITE_LOOP_CEILING_EXCEEDED' | 'LUA_EXECUTION_THROWN' | 'PROGRESS_DEADLOCK' | 'INVALID_SCORE_VALUE' | 'ILLEGAL_STATUS_TRANSITION' | 'CROSS_STEP_RULE_NOT_EVALUATED' | 'GROUP_TERMINAL_CASCADE_INCOMPLETE' | 'ORPHAN_SCORE_ROW' | 'DUPLICATE_ADVANCEMENT' | 'ADVANCE_TARGET_MISSING' | 'ADVANCE_BACKWARD' | 'ADVANCE_OVER_CAPACITY' | 'SEEDING_RULE_MISSING' | 'ROUND_NEVER_POPULATED' | 'SEEDING_OVERFILL' | 'SEEDING_UNDERFILL' | 'PIN_VIOLATED' | 'PIN_UNSUPPORTED_BUT_PRESENT' | 'WITHDRAWAL_RULE_MISSING' | 'WITHDRAWAL_LEFT_ORPHANS' | 'WITHDRAWAL_BROKE_STEP'


/** One of the seven offender entity types produced by a violated invariant */
export type InvariantOffenderUnion = (RuleOffenderModel | CrossStepRuleOffenderModel | GameOffenderModel | RoundOffenderModel | GroupOffenderModel | TeamOffenderModel | ScoreRowOffenderModel) & { __isUnion?: true }


/** Advancement rule that triggered a violation */
export interface RuleOffenderModel {
    /** Discriminant — always RULE */
    kind: OffenderKind
    /** ID of the offending advancement rule */
    ruleId: Scalars['ID']
    /** Human-readable rule name */
    ruleName: Scalars['String']
    /** Trigger type of the rule */
    trigger: RuleTriggerType
    __typename: 'RuleOffenderModel'
}


/** Discriminant identifying which concrete offender type the union resolves to */
export type OffenderKind = 'RULE' | 'CROSS_STEP_RULE' | 'GAME' | 'ROUND' | 'GROUP' | 'TEAM' | 'SCORE_ROW'


/** Cross-step rule that was never evaluated */
export interface CrossStepRuleOffenderModel {
    /** Discriminant — always CROSS_STEP_RULE */
    kind: OffenderKind
    /** ID of the offending cross-step rule */
    crossStepRuleId: Scalars['ID']
    /** Data source type */
    dataSource: CrossStepDataSource
    /** Usage type */
    usage: CrossStepUsageType
    __typename: 'CrossStepRuleOffenderModel'
}


/** Game entity that triggered a violation */
export interface GameOffenderModel {
    /** Discriminant — always GAME */
    kind: OffenderKind
    /** ID of the offending game */
    gameId: Scalars['ID']
    /** Zero-based group index */
    groupIndex: Scalars['Int']
    /** Zero-based round index within the group */
    roundIndex: Scalars['Int']
    /** Zero-based game index within the round */
    gameIndex: Scalars['Int']
    /** Game status at the time of the violation */
    status: GameStatus
    __typename: 'GameOffenderModel'
}


/** Lifecycle status of a tournament game */
export type GameStatus = 'WAITING' | 'STARTED' | 'ENDED'


/** Round entity that triggered a violation */
export interface RoundOffenderModel {
    /** Discriminant — always ROUND */
    kind: OffenderKind
    /** ID of the offending round */
    roundId: Scalars['ID']
    /** Zero-based group index */
    groupIndex: Scalars['Int']
    /** Zero-based round index within the group */
    roundIndex: Scalars['Int']
    __typename: 'RoundOffenderModel'
}


/** Group entity that triggered a violation */
export interface GroupOffenderModel {
    /** Discriminant — always GROUP */
    kind: OffenderKind
    /** ID of the offending group */
    groupId: Scalars['ID']
    /** Zero-based group index */
    groupIndex: Scalars['Int']
    /** Human-readable group name */
    groupName: Scalars['String']
    __typename: 'GroupOffenderModel'
}


/** Team entity that triggered a violation */
export interface TeamOffenderModel {
    /** Discriminant — always TEAM */
    kind: OffenderKind
    /** ID of the offending team */
    teamId: Scalars['ID']
    /** Human-readable team name */
    teamName: Scalars['String']
    /** Team status at the time of violation */
    currentStatus: (TeamScopeStatus | null)
    __typename: 'TeamOffenderModel'
}


/** Status of a team within a particular scope (game, round, group, step, tournament) */
export type TeamScopeStatus = 'ACTIVE' | 'WINNER' | 'QUALIFIED' | 'ELIMINATED' | 'WITHDRAWN'


/** Score row entity that triggered a violation */
export interface ScoreRowOffenderModel {
    /** Discriminant — always SCORE_ROW */
    kind: OffenderKind
    /** Scope level of the score row */
    scope: ScoreRowScope
    /** ID of the offending score row */
    scoreRowId: Scalars['ID']
    /** ID of the team associated with the score row */
    teamId: Scalars['ID']
    /** Score value, if set */
    score: (Scalars['Float'] | null)
    /** Rank, if materialised */
    rank: (Scalars['Int'] | null)
    /** Team scope status associated with the score row, if set */
    status: (TeamScopeStatus | null)
    __typename: 'ScoreRowOffenderModel'
}


/** Scope level of a score row referenced in a validation offender */
export type ScoreRowScope = 'TOURNAMENT' | 'STEP' | 'GROUP' | 'ROUND' | 'GAME'


/** Result of checking a single invariant */
export interface InvariantResultModel {
    /** Invariant code */
    code: InvariantCode
    /** Severity of the invariant */
    severity: InvariantSeverity
    /** Whether the invariant passed */
    passed: Scalars['Boolean']
    /** Human-readable message */
    message: (Scalars['String'] | null)
    /** Offending entities, if the invariant was violated */
    offenders: InvariantOffenderUnion[]
    __typename: 'InvariantResultModel'
}


/** Severity level of a violated invariant */
export type InvariantSeverity = 'ERROR' | 'WARNING'


/** Summary of how many times a rule fired during validation */
export interface RuleFireSummaryModel {
    /** ID of the advancement rule */
    ruleId: Scalars['ID']
    /** Human-readable rule name */
    ruleName: Scalars['String']
    /** Trigger type of the rule */
    trigger: RuleTriggerType
    /** Number of times the rule fired */
    fireCount: Scalars['Int']
    __typename: 'RuleFireSummaryModel'
}


/** Final result of a completed validation job */
export interface ValidationResultModel {
    /** Whether the validation succeeded (no violations) */
    success: Scalars['Boolean']
    /** Total wall-clock duration in milliseconds */
    durationMs: Scalars['Int']
    /** Total number of state mutations applied during the run */
    totalMutations: Scalars['Int']
    /** Results for all checked invariants */
    invariantResults: InvariantResultModel[]
    /** Errors that were collected during the run */
    errors: ValidationErrorModel[]
    /** Summary of rule fire counts */
    ruleFiredSummary: RuleFireSummaryModel[]
    __typename: 'ValidationResultModel'
}


/** Real-time progress of a running validation job */
export interface ValidationProgressModel {
    /** Current execution stage */
    stage: ValidationStage
    /** Percentage completion within the current stage (0–100) */
    percent: Scalars['Float']
    /** Optional detail message from the current phase */
    currentPhaseDetail: (Scalars['String'] | null)
    /** Number of rules fired so far */
    rulesFired: Scalars['Int']
    /** Total number of enabled rules declared in the rule set */
    totalRulesDeclared: Scalars['Int']
    /** Total state mutations applied so far */
    totalMutations: Scalars['Int']
    /** Elapsed wall-clock time in milliseconds */
    elapsedMs: Scalars['Int']
    __typename: 'ValidationProgressModel'
}


/** Current execution stage of a running validation job */
export type ValidationStage = 'QUEUED' | 'SEEDING' | 'GENERATING' | 'UPSTREAM_RUNNING' | 'PLAYING' | 'ASSERTING' | 'FINALISING'


/** A rule-set validation job */
export interface ValidationJobModel {
    /** Unique job ID */
    id: Scalars['ID']
    /** ID of the validated step rule set */
    stepRuleSetId: Scalars['ID']
    /** Current job status */
    status: ValidationJobStatus
    /** Current execution stage */
    stage: ValidationStage
    /** Current progress snapshot */
    progress: ValidationProgressModel
    /** Final result of the validation run. Populated only when status is SUCCEEDED or FAILED. */
    result: (ValidationResultModel | null)
    /** Short error summary if the job failed */
    errorSummary: (Scalars['String'] | null)
    /** Timestamp when the job was created / queued */
    startedAt: Scalars['DateTime']
    /** Timestamp when the job completed (success, failure, or cancel) */
    completedAt: (Scalars['DateTime'] | null)
    __typename: 'ValidationJobModel'
}


/** Lifecycle status of a rule-set validation job */
export type ValidationJobStatus = 'QUEUED' | 'RUNNING' | 'SUCCEEDED' | 'FAILED' | 'CANCELLED'


/** A single streaming event emitted during a validation run */
export interface ValidationEventModel {
    /** Unique event ID */
    id: Scalars['ID']
    /** ID of the parent validation job */
    jobId: Scalars['ID']
    /** Monotonically increasing sequence number within the job */
    sequence: Scalars['Int']
    /** Timestamp when the event was emitted */
    timestamp: Scalars['DateTime']
    /** Event category */
    kind: ValidationEventKind
    /** Human-readable event summary */
    summary: Scalars['String']
    /** Associated rule ID, if applicable */
    ruleId: (Scalars['ID'] | null)
    /** Associated cross-step rule ID, if applicable */
    crossStepRuleId: (Scalars['ID'] | null)
    /** Associated match ID, if applicable */
    matchId: (Scalars['ID'] | null)
    /** Associated game ID, if applicable */
    gameId: (Scalars['ID'] | null)
    /** Associated round ID, if applicable */
    roundId: (Scalars['ID'] | null)
    /** Associated group ID, if applicable */
    groupId: (Scalars['ID'] | null)
    /** Associated step ID, if applicable */
    stepId: (Scalars['ID'] | null)
    /** Associated team ID, if applicable */
    teamId: (Scalars['ID'] | null)
    /** Effect kind, if the event describes a state mutation. Union of SimulatedEffectType, game_status, and team_scope_status values — interpretation depends on the event kind. */
    effectType: (ValidationEffectType | null)
    /** Status before the state transition, if applicable. Union of game_status, team_scope_status, and step_status. */
    statusBefore: (ValidationStatus | null)
    /** Status after the state transition, if applicable. Union of game_status, team_scope_status, and step_status. */
    statusAfter: (ValidationStatus | null)
    __typename: 'ValidationEventModel'
}


/** Category of a streaming validation event */
export type ValidationEventKind = 'SEED' | 'GENERATE' | 'MATCH_UPDATED' | 'RULE_FIRED' | 'EFFECT_APPLIED' | 'SCOPE_ENDED' | 'CROSS_STEP_EVALUATED' | 'ASSERTION' | 'ADMIN_OVERRIDE' | 'ERROR' | 'WARNING' | 'PROGRESS'


/** Effect kind described by a validation event. Union of SimulatedEffectType, game_status, and team_scope_status — interpretation depends on the event kind. */
export type ValidationEffectType = 'ADVANCE' | 'ELIMINATE' | 'END_GAME' | 'END_ROUND' | 'END_GROUP' | 'SET_METADATA' | 'SET_CUSTOM_FIELD' | 'SET_STATUS' | 'SET_MATCH_RESULT' | 'REGISTER_TEAM' | 'CREATE_GROUP' | 'CREATE_ROUND' | 'CREATE_GAME' | 'LINK' | 'SET_SCORING' | 'ADD_TIEBREAKER' | 'ADD_RULE' | 'ADD_CROSS_STEP_RULE' | 'GAME_WAITING' | 'GAME_STARTED' | 'GAME_ENDED' | 'TEAM_ACTIVE' | 'TEAM_WINNER' | 'TEAM_QUALIFIED' | 'TEAM_ELIMINATED' | 'TEAM_WITHDRAWN'


/** Before/after status of a state transition recorded in a validation event. Union of game_status, team_scope_status, and step_status with namespaced values. */
export type ValidationStatus = 'GAME_WAITING' | 'GAME_STARTED' | 'GAME_ENDED' | 'TEAM_ACTIVE' | 'TEAM_WINNER' | 'TEAM_QUALIFIED' | 'TEAM_ELIMINATED' | 'TEAM_WITHDRAWN' | 'STEP_CONFIGURED' | 'STEP_GENERATING' | 'STEP_GENERATED' | 'STEP_SEEDING' | 'STEP_SEEDED' | 'STEP_STARTED' | 'STEP_ENDED'


/** Paginated list of validation jobs */
export interface ValidationJobs {
    /** List of edges containing cursor and node pairs */
    edges: ValidationJobModelEdge[]
    /** Flat list of items in the current page */
    nodes: ValidationJobModel[]
    /** Pagination metadata for navigating between pages */
    pageInfo: ResponsePageInfo
    /** Total number of items across all pages */
    totalCount: (Scalars['Float'] | null)
    __typename: 'ValidationJobs'
}


/** An edge in a paginated connection containing a cursor and node */
export interface ValidationJobModelEdge {
    /** Opaque cursor string for this edge, used for pagination */
    cursor: Scalars['String']
    /** The item at this edge */
    node: ValidationJobModel[]
    __typename: 'ValidationJobModelEdge'
}


/** Paginated list of validation events */
export interface ValidationEvents {
    /** List of edges containing cursor and node pairs */
    edges: ValidationEventModelEdge[]
    /** Flat list of items in the current page */
    nodes: ValidationEventModel[]
    /** Pagination metadata for navigating between pages */
    pageInfo: ResponsePageInfo
    /** Total number of items across all pages */
    totalCount: (Scalars['Float'] | null)
    __typename: 'ValidationEvents'
}


/** An edge in a paginated connection containing a cursor and node */
export interface ValidationEventModelEdge {
    /** Opaque cursor string for this edge, used for pagination */
    cursor: Scalars['String']
    /** The item at this edge */
    node: ValidationEventModel[]
    __typename: 'ValidationEventModelEdge'
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
export type ObjectType = 'Account' | 'ClanGroup' | 'ClanMember' | 'Clan' | 'Configuration' | 'LeaderboardSeasonBucketScore' | 'LeaderboardSeasonBucket' | 'LeaderboardSeason' | 'Leaderboard' | 'OrganizationGroup' | 'OrganizationMember' | 'OrganizationApp' | 'Organization' | 'EmailConfiguration' | 'EmailTemplate' | 'OrganizationIdentityProvider' | 'IdentityProvider' | 'PlayerProfile' | 'SkillRating' | 'PlayerSkillRating' | 'TeamMember' | 'Team' | 'TournamentStepGroupRoundGameMatchScores' | 'TournamentStepGroupRoundGameMatch' | 'TournamentStepGroupRoundGameTeamScore' | 'TournamentStepGroupRoundGame' | 'GameLink' | 'TournamentStepGroupRoundTeamScore' | 'TournamentStepGroupRound' | 'TournamentStepGroupTeamScore' | 'TournamentStepGroup' | 'TournamentStepTeamScore' | 'TournamentStep' | 'TournamentTeamMember' | 'TournamentTeam' | 'TournamentTeamScore' | 'Tournament' | 'TournamentAdmin' | 'TournamentFeature' | 'EventVenueSeat' | 'EventVenueSeatType' | 'EventVenue' | 'EventSeatStatus' | 'EventTicketConfiguration' | 'EventReservationTicket' | 'EventReservation' | 'Event' | 'UserGroupConfiguration' | 'UserGroup' | 'UserGroupMember' | 'SubscriptionItem' | 'Log' | 'PlatformTemplate' | 'Platform' | 'PlatformCdnFile' | 'PlatformModuleConfig' | 'Webhook' | 'Payments' | 'Currency' | 'PlayerCurrency' | 'ItemCategory' | 'Item' | 'PlayerItem' | 'Shop' | 'ShopCategory' | 'PlayerShopProductPurshase' | 'ShopProductItem' | 'ShopProduct' | 'StepRuleSet' | 'RuleSetVersion' | 'StepRuleSetValidationJob' | 'StepRuleSetValidationInvariant' | 'StepRuleSetValidationError' | 'StepRuleSetValidationWarning' | 'StepRuleSetValidationRuleFire' | 'StepRuleSetValidationEvent' | 'ScoringRuleSet' | 'TiebreakerRule' | 'AdvancementRule' | 'RuleExecutionLog' | 'CrossStepRule' | 'StructureTemplate' | 'GroupTemplate' | 'RoundTemplate' | 'GameTemplate' | 'PresetScript' | 'AppWebhook' | 'AppRelease' | 'MarketplaceApp' | 'MarketplaceAppPricing' | 'MarketplaceAppRelease' | 'MarketplaceAppReview' | 'MarketplaceAppInstallation'


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

export type OrganizationLimitsType = 'REGISTERED_USERS' | 'ORGANIZATION_GROUPS' | 'ORGANIZATION_MEMBERS' | 'CUSTOM_FIELDS' | 'TOURNAMENT_STEPS' | 'TOURNAMENT_STEP_GROUPS' | 'TOURNAMENT_TEAMS_REGISTERED' | 'TOURNAMENT_TEAM_SIZE' | 'TOURNAMENT_REGISTRATION_RULES' | 'WEBHOOKS' | 'ANONYMOUS_PLAYER_PROFILES' | 'WHITE_LABEL' | 'LEADERBOARDS' | 'LEADERBOARD_ENTRIES' | 'LEADERBOARD_BUCKETS' | 'LEADERBOARD_SEASONS' | 'SKILL_RATINGS' | 'PLATFORMS' | 'PLATFORM_TEMPLATES' | 'ORGANIZATION_STORAGE_SIZE' | 'PLATFORM_CUSTOM_DOMAINS' | 'CUSTOM_IDENTITY_PROVIDERS' | 'APPS' | 'ATTACHED_APPS' | 'EVENTS_MAX_TICKETS_TYPES' | 'EVENTS_MAX_TICKETS' | 'EVENTS_MAX_GROUP_SIZE' | 'EVENTS_MAX_REGISTRATION_RULES' | 'EVENT_VENUES' | 'EVENT_VENUE_MAX_SEAT_TYPES' | 'EVENT_VENUE_MAX_SEATS' | 'EVENTS_MAX_TICKET_CONFIGURATION_CUSTOM_FIELDS' | 'CURRENCIES' | 'ITEM_CATEGORIES' | 'ITEMS' | 'SHOPS' | 'SHOP_CATEGORIES' | 'SHOP_PRODUCTS' | 'MARKETPLACE_PUBLISHED_APPS' | 'MARKETPLACE_INSTALLATIONS'


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
    /** Fetch the rule set attached to a tournament step, including scoring, advancement rules, cross-step rules, and the structure template. Returns null when the step has no rule set. */
    stepRuleSet: (StepRuleSetModel | null)
    /** List user-created preset scripts for the current organization, sorted by most recently created first */
    presetScripts: PresetScriptModel[]
    /** Fetch a single preset script by ID, scoped to the current organization */
    presetScript: PresetScriptModel
    /** List built-in tournament-format templates provided by the platform. Optionally filter by category. */
    builtinPresets: BuiltinPresetModel[]
    /** Fetch a single built-in template by slug. */
    builtinPreset: BuiltinPresetModel
    /** Validate a Lua script without executing it: runs syntax parsing then static analysis. Returns the full list of errors and warnings. */
    validateScript: ScriptValidationResultModel
    /** Simulate a Lua script against a mock (or real) context inside the production sandbox with tighter interactive caps. Returns a summary of side-effects the script would have produced — NO database writes occur. */
    simulateScript: ScriptSimulationResultModel
    /** Fetch a single validation job by ID, scoped to the caller's organization. */
    stepRuleSetValidationJob: (ValidationJobModel | null)
    /** List validation jobs for a step rule set, ordered by most recently started first. */
    stepRuleSetValidationJobs: ValidationJobs
    /** List streaming events emitted by a validation job. */
    stepRuleSetValidationEvents: ValidationEvents
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
    /** Seed teams into a generated tournament step. Accepts the caller-curated seeding order and optional manual pins; the preset rule set (SEEDING / ROUND_SEEDING rules) drives actual team-to-game assignment. Prior placements are discarded (idempotent re-seed). */
    seedTournamentStep: TournamentStep
    /** Persist a new seeding order on the step without re-seeding. Order must be a permutation of the tournament's teams. */
    updateSeedingOrder: TournamentStep
    /** Persist a new manual-pin list on the step without re-seeding. Pins anchor teams to a group, a game, or a specific slot within a game. */
    updateSeedingPins: TournamentStep
    /** Withdraw a team from a step. Flips the team status to WITHDRAWN, fires the TEAM_WITHDREW rule-engine event, and cascades bye resolution. Idempotent. */
    withdrawTeamFromStep: TournamentStep
    /** Re-run the seeding pipeline from the step's currently persisted seedingOrder + manualPins. The step must be in SEEDED status. Resets to GENERATED and then re-seeds — any unsaved match results would be lost. */
    reseedStep: TournamentStep
    /** Restart a started step: STARTED → SEEDED. Wipes all scores and match results but preserves bracket structure and team seedings. */
    restartTournamentStep: Scalars['Boolean']
    /** Reset seeding: SEEDED|STARTED → GENERATED. Clears team assignments and scores but keeps bracket structure. */
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
    /** Create a new rule set for a tournament step. Fails with CONFLICT if the step already has a rule set. */
    createStepRuleSet: StepRuleSetModel
    /** Apply a user-created preset script to a tournament step, creating or overwriting the step's rule set. The preset's Lua script runs in the sandbox and its effects are persisted atomically. */
    applyPresetScript: StepRuleSetModel
    /** Apply a built-in template to a tournament step, creating or overwriting the step's rule set. The template runs in the Lua sandbox and its effects are persisted atomically. */
    applyBuiltinPreset: StepRuleSetModel
    /** Duplicate a built-in template into a new editable preset script owned by the current organization. If `name` is omitted, defaults to the template's display name (with `(copy)` appended on collision). */
    duplicateBuiltinPreset: PresetScriptModel
    /** Create a new user-defined preset script in the current organization */
    createPresetScript: PresetScriptModel
    /** Update a preset script owned by the current organization. Only the supplied fields are modified. */
    updatePresetScript: PresetScriptModel
    /** Delete a preset script owned by the current organization. Returns true on success. */
    deletePresetScript: Scalars['Boolean']
    /** Set the explicit list of winning teams for a step (admin override). Existing WINNER rows on the step are reverted to ACTIVE, and the supplied teams are upserted as WINNER. Writes a private audit-log entry. */
    setStepWinners: TournamentStep
    /** Set the explicit list of winning teams for a tournament (admin override). Existing WINNER rows on the tournament are reverted to ACTIVE, and the supplied teams are upserted as WINNER. Writes a private audit-log entry. */
    setTournamentWinners: Tournament
    /** Set a single team's status on a step (admin override). Upserts the team's TournamentStepTeamScore row to the supplied status and writes a private audit-log entry. Returns true on success. */
    setStepTeamStatus: Scalars['Boolean']
    /** Start a validation job for the given step rule set. If an active job already exists, returns the existing job instead of creating a new one. */
    validateStepRuleSet: ValidationJobModel
    /** Cancel an in-progress or queued validation job. */
    cancelStepRuleSetValidation: ValidationJobModel
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

export type StripeUiMode = 'EMBEDDED' | 'HOSTED'

export interface Subscription {
    /** Subscribe to progress updates for a validation job. Emits the updated ValidationJobModel whenever the job state changes. */
    validationProgress: ValidationJobModel
    /** Subscribe to streaming events emitted during a validation run. */
    validationEvents: ValidationEventModel
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
    /**
     * @deprecated Use MATCH_SERIES_RESOLUTION advancement rule instead. Kept for legacy tournaments without rule sets.
     * Number of match wins required to win the game (best-of format)
     */
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
    /**
     * @deprecated Legacy groups system. Will be removed in a future version.
     * List of group configurations within this step
     */
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


/** A manual seeding pin. At least one of groupId or gameId must be set. */
export interface SeedingPinGenqlSelection{
    /** Team being pinned */
    teamId?: boolean | number
    /** Pin the team to this group */
    groupId?: boolean | number
    /** Pin the team to this game slots */
    gameId?: boolean | number
    /** 0-indexed slot within the game */
    slotIndex?: boolean | number
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
    /** Date and time when the team withdrew from the tournament, or null if the team has not withdrawn */
    withdrawnAt?: boolean | number
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
    /** Ordered list of tournament team IDs representing the seeding order for this step (computed by SEEDING rules, consumed by structure generation). */
    seedingOrder?: boolean | number
    /** Date and time when the step was created */
    createdAt?: boolean | number
    /** Date and time when the step was last updated */
    updatedAt?: boolean | number
    /** Team scores accumulated within this tournament step */
    teamScores?: TournamentTeamScoreGenqlSelection
    /** The tournament this step belongs to */
    tournament?: TournamentGenqlSelection
    /** Manual seeding pin overrides persisted on the step. Empty when no pins are set. Produced by `persistSeedingPins` / `seedStep`; consumed by the seeding pipeline. */
    manualPins?: SeedingPinGenqlSelection
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
    /** Timestamp when the game was created */
    createdAt?: boolean | number
    /** Timestamp when the game was last updated */
    updatedAt?: boolean | number
    /** Matches within this game (best-of series) */
    matches?: TournamentStepGroupRoundGameMatchGenqlSelection
    /** Outgoing bracket routing edges. Each entry describes where the `WIN` or `LOSS` outcome of this game routes the affected team. An empty list means this game is a terminal node (e.g. the grand final). */
    gameLinks?: GameLinkGenqlSelection
    /**
     * @deprecated Use `gameLinks` — will be removed once all clients migrate.
     * Deprecated. The ID of the game the winning team of this game advances to. Derived from `gameLinks` where `outcome = WIN`.
     */
    winningGameId?: boolean | number
    /**
     * @deprecated Use `gameLinks` — will be removed once all clients migrate.
     * Deprecated. The ID of the game the losing team of this game drops to (loser bracket in double-elimination, or third-place game in single-elimination). Derived from `gameLinks` where `outcome = LOSS`.
     */
    losingGameId?: boolean | number
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
    /** Display order of the group within its tournament step */
    order?: boolean | number
    /** Rounds within this group */
    rounds?: TournamentStepGroupRoundGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Directed routing edge between two games in a tournament bracket. Emitted both at generation time (for statically known brackets such as single/double-elimination) and dynamically by the rule engine (for formats whose routing is produced by Lua `GENERATION` / action scripts). */
export interface GameLinkGenqlSelection{
    /** Unique identifier for this game-routing link. */
    id?: boolean | number
    /** ID of the game whose outcome triggers the routing. This is the upstream / predecessor game. */
    sourceGameId?: boolean | number
    /** ID of the game the routing points to. This is the downstream / successor game the advancing team will play in. */
    targetGameId?: boolean | number
    /** Which outcome of the source game activates this link. `WIN` = winner-bracket advancement; `LOSS` = loser-bracket drop or third-place routing. */
    outcome?: boolean | number
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


/** A single action performed when a rule fires */
export interface RuleActionModelGenqlSelection{
    /** Kind of action performed */
    type?: boolean | number
    /** Lua expression or script for this action */
    script?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A single advancement rule within a rule set */
export interface AdvancementRuleModelGenqlSelection{
    /** Unique rule ID */
    id?: boolean | number
    /** Human-readable rule name */
    name?: boolean | number
    /** Optional description */
    description?: boolean | number
    /** Evaluation order within the rule set */
    order?: boolean | number
    /** Tournament lifecycle event that triggers this rule */
    triggerType?: boolean | number
    /** Optional Lua expression filtering the trigger scope */
    triggerScope?: boolean | number
    /** Lua expression returning a boolean */
    condition?: boolean | number
    /** Actions executed when the condition passes */
    actions?: RuleActionModelGenqlSelection
    /** Whether the rule fires automatically on trigger events */
    autoExecute?: boolean | number
    /** Whether an operator can manually override this rule */
    allowManualOverride?: boolean | number
    /** Whether the rule is enabled */
    enabled?: boolean | number
    /** Well-known purpose marker for internal behavior */
    purpose?: boolean | number
    /** Creation timestamp */
    createdAt?: boolean | number
    /** Last update timestamp */
    updatedAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A single tiebreaker within a scoring rule set */
export interface TiebreakerRuleModelGenqlSelection{
    /** Unique tiebreaker ID */
    id?: boolean | number
    /** Evaluation order */
    order?: boolean | number
    /** Tiebreaker strategy */
    type?: boolean | number
    /** Lua expression — present for CUSTOM_FORMULA */
    formula?: boolean | number
    /** Sort order for this tiebreaker */
    sortOrder?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Scoring configuration attached to a rule set */
export interface ScoringRuleSetModelGenqlSelection{
    /** Unique scoring rule set ID */
    id?: boolean | number
    /** Aggregation strategy */
    aggregation?: boolean | number
    /** Lua expression for FORMULA aggregation */
    formula?: boolean | number
    /** Points for a win */
    winPoints?: boolean | number
    /** Points for a loss */
    lossPoints?: boolean | number
    /** Points for a draw */
    drawPoints?: boolean | number
    /** Points for a forfeit */
    forfeitPoints?: boolean | number
    /** Ordered tiebreakers */
    tiebreakers?: TiebreakerRuleModelGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Template for a single game within a round */
export interface GameTemplateModelGenqlSelection{
    /** Unique game template ID */
    id?: boolean | number
    /** Game order within the round */
    order?: boolean | number
    /** Number of team slots in the game */
    teamSlots?: boolean | number
    /** Best-of count for the series */
    bestOf?: boolean | number
    /** Lua expression resolving to the target slot for the winner */
    onWinTarget?: boolean | number
    /** Which slot on this source game wins */
    onWinSourceSlot?: boolean | number
    /** Target slot index for the winner */
    onWinTargetSlot?: boolean | number
    /** Lua expression resolving to the target slot for the loser */
    onLossTarget?: boolean | number
    /** Which slot on this source game loses */
    onLossSourceSlot?: boolean | number
    /** Target slot index for the loser */
    onLossTargetSlot?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Template for a single round within a group */
export interface RoundTemplateModelGenqlSelection{
    /** Unique round template ID */
    id?: boolean | number
    /** Human-readable round name */
    name?: boolean | number
    /** Round order within the group */
    order?: boolean | number
    /** Game templates for this round */
    gameTemplates?: GameTemplateModelGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Template for a single group within the structure */
export interface GroupTemplateModelGenqlSelection{
    /** Unique group template ID */
    id?: boolean | number
    /** Human-readable group name */
    name?: boolean | number
    /** Optional description */
    description?: boolean | number
    /** Group order within the structure */
    order?: boolean | number
    /** Numeric literal or Lua expression for total team slots */
    teamSlotsExpr?: boolean | number
    /** Lua script that dynamically creates rounds and games (Mode 1) */
    generationScript?: boolean | number
    /** Numeric literal or Lua expression for best-of count per game */
    bestOfExpr?: boolean | number
    /** Numeric literal or Lua expression for team slots per game */
    teamSlotsPerGameExpr?: boolean | number
    /** Numeric literal or Lua expression for total round count */
    roundCountExpr?: boolean | number
    /** Static round templates (Mode 2) */
    roundTemplates?: RoundTemplateModelGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Complete structure template for a tournament step */
export interface StructureTemplateModelGenqlSelection{
    /** Unique structure template ID */
    id?: boolean | number
    /** Group templates composing the structure */
    groupTemplates?: GroupTemplateModelGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** How a cross-step rule consumes source-step data */
export interface CrossStepUsageModelGenqlSelection{
    /** Usage strategy */
    type?: boolean | number
    /** Lua boolean expression — present for QUALIFY usage */
    condition?: boolean | number
    /** Lua numeric expression — present for INJECT_SCORE usage */
    formula?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A single cross-step rule within a rule set */
export interface CrossStepRuleModelGenqlSelection{
    /** Unique cross-step rule ID */
    id?: boolean | number
    /** Explicit source step ID, if set */
    sourceStepId?: boolean | number
    /** Relative source step selector, if set */
    sourceRelative?: boolean | number
    /** Kind of data pulled */
    dataSource?: boolean | number
    /** How the data is consumed */
    usage?: CrossStepUsageModelGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Complete rule set attached to a tournament step */
export interface StepRuleSetModelGenqlSelection{
    /** Unique rule set ID */
    id?: boolean | number
    /** Version number of the rule set */
    version?: boolean | number
    /** Name of the preset this rule set was derived from, if any */
    presetName?: boolean | number
    /** Resolved team count at the time of rule-set generation */
    teamCount?: boolean | number
    /** Whether the rule set has been validated */
    validated?: boolean | number
    /** Timestamp of the last successful validation */
    validatedAt?: boolean | number
    /** Scoring configuration */
    scoringRuleSet?: ScoringRuleSetModelGenqlSelection
    /** Advancement rules in evaluation order */
    advancementRules?: AdvancementRuleModelGenqlSelection
    /** Cross-step rules attached to this rule set */
    crossStepRules?: CrossStepRuleModelGenqlSelection
    /** Optional static structure template */
    structureTemplate?: StructureTemplateModelGenqlSelection
    /** Creation timestamp */
    createdAt?: boolean | number
    /** Last update timestamp */
    updatedAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Declared parameter of a preset script */
export interface PresetParameterModelGenqlSelection{
    /** Parameter name (unique within the preset) */
    name?: boolean | number
    /** Primitive parameter type */
    type?: boolean | number
    /** Whether the parameter must be provided when applying */
    required?: boolean | number
    /** Default value for optional parameters, serialized as a string */
    defaultValue?: boolean | number
    /** Optional description */
    description?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** User-defined preset script scoped to an organization */
export interface PresetScriptModelGenqlSelection{
    /** Unique preset script ID */
    id?: boolean | number
    /** Preset name (unique within the organization) */
    name?: boolean | number
    /** Optional description */
    description?: boolean | number
    /** Lua source building a complete rule set */
    script?: boolean | number
    /** Declared parameters consumed by the preset */
    parameters?: PresetParameterModelGenqlSelection
    /** Creation timestamp */
    createdAt?: boolean | number
    /** Last update timestamp */
    updatedAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A built-in tournament-format template provided by the platform. Built-ins are read-only and shared across all organizations. */
export interface BuiltinPresetModelGenqlSelection{
    /** Stable slug identifier (e.g. "single-elim"). Use this as the `builtinPresetId` argument on apply/duplicate mutations. */
    id?: boolean | number
    /** Human-readable display name shown in the UI */
    displayName?: boolean | number
    /** One- to two-line description of the format */
    description?: boolean | number
    /** Coarse family used to group templates in the picker */
    category?: boolean | number
    /** Declared parameters consumed by the template */
    parameters?: PresetParameterModelGenqlSelection
    /** Canonical Lua source. Returned so callers can preview before duplicating. */
    source?: boolean | number
    /** Whether this preset supports any form of team pinning (group pinning or slot pinning). When false, the UI MUST NOT expose the pin-team affordance for this preset. */
    supportsPinning?: boolean | number
    /** Whether this preset supports pinning a team to a specific group. When omitted, derive from topology (#groups > 1 && supportsPinning). */
    supportsGroupPinning?: boolean | number
    /** Whether this preset supports pinning a team to a specific game slot. When omitted, derive from supportsPinning directly. */
    supportsSlotPinning?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A single error reported by the Lua validator */
export interface ScriptErrorModelGenqlSelection{
    /** Line number where the error was detected (1-based) */
    line?: boolean | number
    /** Column where the error was detected (1-based) */
    column?: boolean | number
    /** Human-readable error message */
    message?: boolean | number
    /** Machine-readable error code */
    code?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A single warning reported by the Lua validator */
export interface ScriptWarningModelGenqlSelection{
    /** Line number where the warning was raised (1-based) */
    line?: boolean | number
    /** Column where the warning was raised (1-based) */
    column?: boolean | number
    /** Human-readable warning message */
    message?: boolean | number
    /** Machine-readable warning code */
    code?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Result of a Lua script validation pass */
export interface ScriptValidationResultModelGenqlSelection{
    /** Whether the script passed validation (no errors) */
    valid?: boolean | number
    /** Errors detected during validation */
    errors?: ScriptErrorModelGenqlSelection
    /** Warnings detected during validation */
    warnings?: ScriptWarningModelGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Summary of a single side-effect produced by a simulated run */
export interface SimulatedEffectModelGenqlSelection{
    /** Type of effect */
    type?: boolean | number
    /** Human-readable summary of the effect */
    description?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Result of simulating a Lua script */
export interface ScriptSimulationResultModelGenqlSelection{
    /** Whether the script ran to completion without errors */
    success?: boolean | number
    /** Errors captured during simulation */
    errors?: ScriptErrorModelGenqlSelection
    /** Warnings captured during simulation */
    warnings?: ScriptWarningModelGenqlSelection
    /** Summary of side-effects produced by the simulated run */
    effectsSummary?: SimulatedEffectModelGenqlSelection
    /** Wall-clock execution time in milliseconds */
    executionTimeMs?: boolean | number
    /** Number of Lua instructions executed */
    instructionsUsed?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Structured detail about a Lua runtime error */
export interface LuaErrorDetailModelGenqlSelection{
    /** Script execution context in which the error occurred */
    scriptContextType?: boolean | number
    /** The Lua source script that threw the error */
    script?: boolean | number
    /** Line number of the error (1-based) */
    line?: boolean | number
    /** Column of the error (1-based) */
    column?: boolean | number
    /** Human-readable error message */
    message?: boolean | number
    /** Stack trace lines */
    stack?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A single error produced during a validation run */
export interface ValidationErrorModelGenqlSelection{
    /** Unique validation error ID */
    id?: boolean | number
    /** Machine-readable error code */
    code?: boolean | number
    /** Human-readable error message. Includes the offender context (which rule / team / game / group triggered the violation) and, for Lua throws, the raw Lua message and line number. */
    message?: boolean | number
    /** Preset-author-facing remediation hint — describes the class of problem and suggests the next step a preset author should take. Keyed on the invariant / error code. */
    hint?: boolean | number
    /** Invariant code, if the error was caused by a violated invariant */
    invariantCode?: boolean | number
    /** Lua error detail, if the error originated from a Lua script */
    luaError?: LuaErrorDetailModelGenqlSelection
    /** Offending entity, if available */
    offender?: InvariantOffenderUnionGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** One of the seven offender entity types produced by a violated invariant */
export interface InvariantOffenderUnionGenqlSelection{
    on_RuleOffenderModel?:RuleOffenderModelGenqlSelection,
    on_CrossStepRuleOffenderModel?:CrossStepRuleOffenderModelGenqlSelection,
    on_GameOffenderModel?:GameOffenderModelGenqlSelection,
    on_RoundOffenderModel?:RoundOffenderModelGenqlSelection,
    on_GroupOffenderModel?:GroupOffenderModelGenqlSelection,
    on_TeamOffenderModel?:TeamOffenderModelGenqlSelection,
    on_ScoreRowOffenderModel?:ScoreRowOffenderModelGenqlSelection,
    __typename?: boolean | number
}


/** Advancement rule that triggered a violation */
export interface RuleOffenderModelGenqlSelection{
    /** Discriminant — always RULE */
    kind?: boolean | number
    /** ID of the offending advancement rule */
    ruleId?: boolean | number
    /** Human-readable rule name */
    ruleName?: boolean | number
    /** Trigger type of the rule */
    trigger?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Cross-step rule that was never evaluated */
export interface CrossStepRuleOffenderModelGenqlSelection{
    /** Discriminant — always CROSS_STEP_RULE */
    kind?: boolean | number
    /** ID of the offending cross-step rule */
    crossStepRuleId?: boolean | number
    /** Data source type */
    dataSource?: boolean | number
    /** Usage type */
    usage?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Game entity that triggered a violation */
export interface GameOffenderModelGenqlSelection{
    /** Discriminant — always GAME */
    kind?: boolean | number
    /** ID of the offending game */
    gameId?: boolean | number
    /** Zero-based group index */
    groupIndex?: boolean | number
    /** Zero-based round index within the group */
    roundIndex?: boolean | number
    /** Zero-based game index within the round */
    gameIndex?: boolean | number
    /** Game status at the time of the violation */
    status?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Round entity that triggered a violation */
export interface RoundOffenderModelGenqlSelection{
    /** Discriminant — always ROUND */
    kind?: boolean | number
    /** ID of the offending round */
    roundId?: boolean | number
    /** Zero-based group index */
    groupIndex?: boolean | number
    /** Zero-based round index within the group */
    roundIndex?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Group entity that triggered a violation */
export interface GroupOffenderModelGenqlSelection{
    /** Discriminant — always GROUP */
    kind?: boolean | number
    /** ID of the offending group */
    groupId?: boolean | number
    /** Zero-based group index */
    groupIndex?: boolean | number
    /** Human-readable group name */
    groupName?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Team entity that triggered a violation */
export interface TeamOffenderModelGenqlSelection{
    /** Discriminant — always TEAM */
    kind?: boolean | number
    /** ID of the offending team */
    teamId?: boolean | number
    /** Human-readable team name */
    teamName?: boolean | number
    /** Team status at the time of violation */
    currentStatus?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Score row entity that triggered a violation */
export interface ScoreRowOffenderModelGenqlSelection{
    /** Discriminant — always SCORE_ROW */
    kind?: boolean | number
    /** Scope level of the score row */
    scope?: boolean | number
    /** ID of the offending score row */
    scoreRowId?: boolean | number
    /** ID of the team associated with the score row */
    teamId?: boolean | number
    /** Score value, if set */
    score?: boolean | number
    /** Rank, if materialised */
    rank?: boolean | number
    /** Team scope status associated with the score row, if set */
    status?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Result of checking a single invariant */
export interface InvariantResultModelGenqlSelection{
    /** Invariant code */
    code?: boolean | number
    /** Severity of the invariant */
    severity?: boolean | number
    /** Whether the invariant passed */
    passed?: boolean | number
    /** Human-readable message */
    message?: boolean | number
    /** Offending entities, if the invariant was violated */
    offenders?: InvariantOffenderUnionGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Summary of how many times a rule fired during validation */
export interface RuleFireSummaryModelGenqlSelection{
    /** ID of the advancement rule */
    ruleId?: boolean | number
    /** Human-readable rule name */
    ruleName?: boolean | number
    /** Trigger type of the rule */
    trigger?: boolean | number
    /** Number of times the rule fired */
    fireCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Final result of a completed validation job */
export interface ValidationResultModelGenqlSelection{
    /** Whether the validation succeeded (no violations) */
    success?: boolean | number
    /** Total wall-clock duration in milliseconds */
    durationMs?: boolean | number
    /** Total number of state mutations applied during the run */
    totalMutations?: boolean | number
    /** Results for all checked invariants */
    invariantResults?: InvariantResultModelGenqlSelection
    /** Errors that were collected during the run */
    errors?: ValidationErrorModelGenqlSelection
    /** Summary of rule fire counts */
    ruleFiredSummary?: RuleFireSummaryModelGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Real-time progress of a running validation job */
export interface ValidationProgressModelGenqlSelection{
    /** Current execution stage */
    stage?: boolean | number
    /** Percentage completion within the current stage (0–100) */
    percent?: boolean | number
    /** Optional detail message from the current phase */
    currentPhaseDetail?: boolean | number
    /** Number of rules fired so far */
    rulesFired?: boolean | number
    /** Total number of enabled rules declared in the rule set */
    totalRulesDeclared?: boolean | number
    /** Total state mutations applied so far */
    totalMutations?: boolean | number
    /** Elapsed wall-clock time in milliseconds */
    elapsedMs?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A rule-set validation job */
export interface ValidationJobModelGenqlSelection{
    /** Unique job ID */
    id?: boolean | number
    /** ID of the validated step rule set */
    stepRuleSetId?: boolean | number
    /** Current job status */
    status?: boolean | number
    /** Current execution stage */
    stage?: boolean | number
    /** Current progress snapshot */
    progress?: ValidationProgressModelGenqlSelection
    /** Final result of the validation run. Populated only when status is SUCCEEDED or FAILED. */
    result?: ValidationResultModelGenqlSelection
    /** Short error summary if the job failed */
    errorSummary?: boolean | number
    /** Timestamp when the job was created / queued */
    startedAt?: boolean | number
    /** Timestamp when the job completed (success, failure, or cancel) */
    completedAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A single streaming event emitted during a validation run */
export interface ValidationEventModelGenqlSelection{
    /** Unique event ID */
    id?: boolean | number
    /** ID of the parent validation job */
    jobId?: boolean | number
    /** Monotonically increasing sequence number within the job */
    sequence?: boolean | number
    /** Timestamp when the event was emitted */
    timestamp?: boolean | number
    /** Event category */
    kind?: boolean | number
    /** Human-readable event summary */
    summary?: boolean | number
    /** Associated rule ID, if applicable */
    ruleId?: boolean | number
    /** Associated cross-step rule ID, if applicable */
    crossStepRuleId?: boolean | number
    /** Associated match ID, if applicable */
    matchId?: boolean | number
    /** Associated game ID, if applicable */
    gameId?: boolean | number
    /** Associated round ID, if applicable */
    roundId?: boolean | number
    /** Associated group ID, if applicable */
    groupId?: boolean | number
    /** Associated step ID, if applicable */
    stepId?: boolean | number
    /** Associated team ID, if applicable */
    teamId?: boolean | number
    /** Effect kind, if the event describes a state mutation. Union of SimulatedEffectType, game_status, and team_scope_status values — interpretation depends on the event kind. */
    effectType?: boolean | number
    /** Status before the state transition, if applicable. Union of game_status, team_scope_status, and step_status. */
    statusBefore?: boolean | number
    /** Status after the state transition, if applicable. Union of game_status, team_scope_status, and step_status. */
    statusAfter?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Paginated list of validation jobs */
export interface ValidationJobsGenqlSelection{
    /** List of edges containing cursor and node pairs */
    edges?: ValidationJobModelEdgeGenqlSelection
    /** Flat list of items in the current page */
    nodes?: ValidationJobModelGenqlSelection
    /** Pagination metadata for navigating between pages */
    pageInfo?: ResponsePageInfoGenqlSelection
    /** Total number of items across all pages */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An edge in a paginated connection containing a cursor and node */
export interface ValidationJobModelEdgeGenqlSelection{
    /** Opaque cursor string for this edge, used for pagination */
    cursor?: boolean | number
    /** The item at this edge */
    node?: ValidationJobModelGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Paginated list of validation events */
export interface ValidationEventsGenqlSelection{
    /** List of edges containing cursor and node pairs */
    edges?: ValidationEventModelEdgeGenqlSelection
    /** Flat list of items in the current page */
    nodes?: ValidationEventModelGenqlSelection
    /** Pagination metadata for navigating between pages */
    pageInfo?: ResponsePageInfoGenqlSelection
    /** Total number of items across all pages */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An edge in a paginated connection containing a cursor and node */
export interface ValidationEventModelEdgeGenqlSelection{
    /** Opaque cursor string for this edge, used for pagination */
    cursor?: boolean | number
    /** The item at this edge */
    node?: ValidationEventModelGenqlSelection
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
wonMatchCountToWinGame?: (Scalars['Float'] | null),
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
groups?: (GroupConfigurationInput[] | null)}


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
    /** Fetch the rule set attached to a tournament step, including scoring, advancement rules, cross-step rules, and the structure template. Returns null when the step has no rule set. */
    stepRuleSet?: (StepRuleSetModelGenqlSelection & { __args: {tournamentStepId: Scalars['ID']} })
    /** List user-created preset scripts for the current organization, sorted by most recently created first */
    presetScripts?: PresetScriptModelGenqlSelection
    /** Fetch a single preset script by ID, scoped to the current organization */
    presetScript?: (PresetScriptModelGenqlSelection & { __args: {id: Scalars['ID']} })
    /** List built-in tournament-format templates provided by the platform. Optionally filter by category. */
    builtinPresets?: (BuiltinPresetModelGenqlSelection & { __args?: {category?: (BuiltinPresetCategory | null)} })
    /** Fetch a single built-in template by slug. */
    builtinPreset?: (BuiltinPresetModelGenqlSelection & { __args: {
    /** Stable slug identifier (e.g. "single-elim") */
    id: Scalars['String']} })
    /** Validate a Lua script without executing it: runs syntax parsing then static analysis. Returns the full list of errors and warnings. */
    validateScript?: (ScriptValidationResultModelGenqlSelection & { __args: {input: ValidateScriptInput} })
    /** Simulate a Lua script against a mock (or real) context inside the production sandbox with tighter interactive caps. Returns a summary of side-effects the script would have produced — NO database writes occur. */
    simulateScript?: (ScriptSimulationResultModelGenqlSelection & { __args: {input: SimulateScriptInput} })
    /** Fetch a single validation job by ID, scoped to the caller's organization. */
    stepRuleSetValidationJob?: (ValidationJobModelGenqlSelection & { __args: {jobId: Scalars['ID']} })
    /** List validation jobs for a step rule set, ordered by most recently started first. */
    stepRuleSetValidationJobs?: (ValidationJobsGenqlSelection & { __args: {stepRuleSetId: Scalars['ID'], page: PageInfo} })
    /** List streaming events emitted by a validation job. */
    stepRuleSetValidationEvents?: (ValidationEventsGenqlSelection & { __args: {jobId: Scalars['ID'], page: PageInfo, kindFilter?: (ValidationEventKind[] | null)} })
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


/** Input for validating a Lua script (no execution) */
export interface ValidateScriptInput {
/** Lua source to validate */
script: Scalars['String'],
/** Execution context the script is intended for */
context: ScriptContextType}


/** Input for simulating a Lua script against mock or real context */
export interface SimulateScriptInput {
/** Lua source to simulate */
script: Scalars['String'],
/** Execution context the script is intended for */
context: ScriptContextType,
/** JSON-encoded mock parameters for simulation */
parameters?: (Scalars['String'] | null),
/** Optional: simulate against a real tournament step */
stepId?: (Scalars['ID'] | null)}


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
    createTournamentStep?: (TournamentStepGenqlSelection & { __args: {tournamentId: Scalars['ID'], configuration?: (StepConfigurationInput | null), step: CreateTournamentStepInput} })
    /** Update a tournament step configuration, resetting it to CONFIGURED status */
    updateTournamentStep?: (TournamentStepGenqlSelection & { __args: {stepId: Scalars['ID'], configuration?: (StepConfigurationInput | null), step: CreateTournamentStepInput} })
    /** Delete a tournament step and all its associated groups, rounds, and games */
    deleteTournamentStep?: { __args: {stepId: Scalars['ID']} }
    /** Generate the bracket structure for a tournament step based on its configuration or rule set */
    generateTournamentStep?: { __args: {stepId: Scalars['ID'], teamsCount?: (Scalars['Int'] | null)} }
    /** Seed teams into a generated tournament step. Accepts the caller-curated seeding order and optional manual pins; the preset rule set (SEEDING / ROUND_SEEDING rules) drives actual team-to-game assignment. Prior placements are discarded (idempotent re-seed). */
    seedTournamentStep?: (TournamentStepGenqlSelection & { __args: {input: SeedStepInput} })
    /** Persist a new seeding order on the step without re-seeding. Order must be a permutation of the tournament's teams. */
    updateSeedingOrder?: (TournamentStepGenqlSelection & { __args: {stepId: Scalars['ID'], orderedTeamIds: Scalars['ID'][]} })
    /** Persist a new manual-pin list on the step without re-seeding. Pins anchor teams to a group, a game, or a specific slot within a game. */
    updateSeedingPins?: (TournamentStepGenqlSelection & { __args: {stepId: Scalars['ID'], pins: SeedingPinInput[]} })
    /** Withdraw a team from a step. Flips the team status to WITHDRAWN, fires the TEAM_WITHDREW rule-engine event, and cascades bye resolution. Idempotent. */
    withdrawTeamFromStep?: (TournamentStepGenqlSelection & { __args: {stepId: Scalars['ID'], teamId: Scalars['ID']} })
    /** Re-run the seeding pipeline from the step's currently persisted seedingOrder + manualPins. The step must be in SEEDED status. Resets to GENERATED and then re-seeds — any unsaved match results would be lost. */
    reseedStep?: (TournamentStepGenqlSelection & { __args: {stepId: Scalars['ID']} })
    /** Restart a started step: STARTED → SEEDED. Wipes all scores and match results but preserves bracket structure and team seedings. */
    restartTournamentStep?: { __args: {stepId: Scalars['ID']} }
    /** Reset seeding: SEEDED|STARTED → GENERATED. Clears team assignments and scores but keeps bracket structure. */
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
    /** Create a new rule set for a tournament step. Fails with CONFLICT if the step already has a rule set. */
    createStepRuleSet?: (StepRuleSetModelGenqlSelection & { __args: {tournamentStepId: Scalars['ID'], input: CreateStepRuleSetInput} })
    /** Apply a user-created preset script to a tournament step, creating or overwriting the step's rule set. The preset's Lua script runs in the sandbox and its effects are persisted atomically. */
    applyPresetScript?: (StepRuleSetModelGenqlSelection & { __args: {presetScriptId: Scalars['ID'], tournamentStepId: Scalars['ID'], 
    /** JSON-encoded object of primitive parameter values (string | number | boolean) */
    parameters?: (Scalars['String'] | null)} })
    /** Apply a built-in template to a tournament step, creating or overwriting the step's rule set. The template runs in the Lua sandbox and its effects are persisted atomically. */
    applyBuiltinPreset?: (StepRuleSetModelGenqlSelection & { __args: {builtinPresetId: Scalars['String'], tournamentStepId: Scalars['ID'], 
    /** JSON-encoded object of primitive parameter values (string | number | boolean) */
    parameters?: (Scalars['String'] | null)} })
    /** Duplicate a built-in template into a new editable preset script owned by the current organization. If `name` is omitted, defaults to the template's display name (with `(copy)` appended on collision). */
    duplicateBuiltinPreset?: (PresetScriptModelGenqlSelection & { __args: {builtinPresetId: Scalars['String'], name?: (Scalars['String'] | null)} })
    /** Create a new user-defined preset script in the current organization */
    createPresetScript?: (PresetScriptModelGenqlSelection & { __args: {input: CreatePresetScriptInput} })
    /** Update a preset script owned by the current organization. Only the supplied fields are modified. */
    updatePresetScript?: (PresetScriptModelGenqlSelection & { __args: {id: Scalars['ID'], input: UpdatePresetScriptInput} })
    /** Delete a preset script owned by the current organization. Returns true on success. */
    deletePresetScript?: { __args: {id: Scalars['ID']} }
    /** Set the explicit list of winning teams for a step (admin override). Existing WINNER rows on the step are reverted to ACTIVE, and the supplied teams are upserted as WINNER. Writes a private audit-log entry. */
    setStepWinners?: (TournamentStepGenqlSelection & { __args: {stepId: Scalars['ID'], teamIds: Scalars['ID'][]} })
    /** Set the explicit list of winning teams for a tournament (admin override). Existing WINNER rows on the tournament are reverted to ACTIVE, and the supplied teams are upserted as WINNER. Writes a private audit-log entry. */
    setTournamentWinners?: (TournamentGenqlSelection & { __args: {tournamentId: Scalars['ID'], teamIds: Scalars['ID'][]} })
    /** Set a single team's status on a step (admin override). Upserts the team's TournamentStepTeamScore row to the supplied status and writes a private audit-log entry. Returns true on success. */
    setStepTeamStatus?: { __args: {stepId: Scalars['ID'], teamId: Scalars['ID'], status: TeamScopeStatus} }
    /** Start a validation job for the given step rule set. If an active job already exists, returns the existing job instead of creating a new one. */
    validateStepRuleSet?: (ValidationJobModelGenqlSelection & { __args: {stepRuleSetId: Scalars['ID']} })
    /** Cancel an in-progress or queued validation job. */
    cancelStepRuleSetValidation?: (ValidationJobModelGenqlSelection & { __args: {jobId: Scalars['ID']} })
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


/** Input for seeding a tournament step. */
export interface SeedStepInput {stepId: Scalars['ID'],
/** Ordered team IDs. Must be a permutation of the step teams. */
orderedTeamIds: Scalars['ID'][],
/** Optional pin overrides. */
pins?: (SeedingPinInput[] | null)}


/** Input for a single seeding pin. */
export interface SeedingPinInput {teamId: Scalars['ID'],groupId?: (Scalars['ID'] | null),gameId?: (Scalars['ID'] | null),slotIndex?: (Scalars['Int'] | null)}


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


/** Top-level input for creating a complete rule set for a tournament step */
export interface CreateStepRuleSetInput {
/** Scoring configuration */
scoring: CreateScoringInput,
/** Advancement rules evaluated on trigger events */
advancementRules?: CreateAdvancementRuleInput[],
/** Cross-step rules pulling data from sibling steps */
crossStepRules?: CreateCrossStepRuleInput[],
/** Optional static structure template */
structureTemplate?: (CreateStructureTemplateInput | null)}


/** Scoring configuration for a tournament step */
export interface CreateScoringInput {
/** Aggregation strategy used to compute a team score */
aggregation: ScoreAggregationType,
/** Lua expression — required for the FORMULA aggregation */
formula?: (Scalars['String'] | null),
/** Points awarded for a win (POINTS aggregation) */
winPoints?: Scalars['Int'],
/** Points awarded for a loss (POINTS aggregation) */
lossPoints?: Scalars['Int'],
/** Points awarded for a draw (POINTS aggregation) */
drawPoints?: Scalars['Int'],
/** Points awarded for a forfeit (POINTS aggregation) */
forfeitPoints?: Scalars['Int'],
/** Ordered list of tiebreakers applied when teams are tied */
tiebreakers?: CreateTiebreakerInput[]}


/** Tiebreaker rule applied to ranked teams */
export interface CreateTiebreakerInput {
/** Evaluation order (lower runs first) */
order: Scalars['Int'],
/** Type of tiebreaker to apply */
type: TiebreakerType,
/** Lua expression returning a number — required for CUSTOM_FORMULA */
formula?: (Scalars['String'] | null),
/** Sort order for this tiebreaker */
sortOrder?: SortOrder}


/** Input for creating an advancement rule that evaluates on a trigger event */
export interface CreateAdvancementRuleInput {
/** Human-readable rule name, unique within a rule set */
name: Scalars['String'],
/** Optional human-readable description */
description?: (Scalars['String'] | null),
/** Evaluation order within the rule set (lower runs first) */
order: Scalars['Int'],
/** Tournament lifecycle event that triggers this rule */
triggerType: RuleTriggerType,
/** Optional Lua expression to filter the trigger scope (e.g. only certain groups) */
triggerScope?: (Scalars['String'] | null),
/** Lua expression returning a boolean */
condition: Scalars['String'],
/** Ordered list of actions performed when the condition passes */
actions: RuleActionInput[],
/** Whether the rule fires automatically on trigger events */
autoExecute?: Scalars['Boolean'],
/** Whether an operator can manually override this rule */
allowManualOverride?: Scalars['Boolean'],
/** Well-known purpose marker for internal behavior (e.g. series resolution) */
purpose?: (AdvancementRulePurpose | null)}


/** A single action performed when a rule fires */
export interface RuleActionInput {
/** Kind of action to perform */
type: RuleActionType,
/** Lua expression or script. Required for ADVANCE, END, and EXECUTE_LUA actions. */
script?: (Scalars['String'] | null)}


/** Input for creating a cross-step rule */
export interface CreateCrossStepRuleInput {
/** Explicit source step ID. Mutually exclusive with sourceRelative. */
sourceStepId?: (Scalars['ID'] | null),
/** Source step selected relatively to the current step. Mutually exclusive with sourceStepId. */
sourceRelative?: (StepRelativePosition | null),
/** Kind of data to pull from the source step */
dataSource: CrossStepDataSource,
/** How the pulled data is consumed */
usage: CrossStepUsageInput}


/** How a cross-step rule consumes source-step data */
export interface CrossStepUsageInput {
/** How the data is used (seed, qualify, inject score) */
type: CrossStepUsageType,
/** Lua boolean expression — required for QUALIFY usage */
condition?: (Scalars['String'] | null),
/** Lua numeric expression — required for INJECT_SCORE usage */
formula?: (Scalars['String'] | null)}


/** Complete structure template for a tournament step */
export interface CreateStructureTemplateInput {
/** Group templates composing the structure */
groupTemplates: CreateGroupTemplateInput[]}


/** Template for a single group within the structure */
export interface CreateGroupTemplateInput {
/** Human-readable group name */
name: Scalars['String'],
/** Optional human-readable description */
description?: (Scalars['String'] | null),
/** Group order within the structure */
order: Scalars['Int'],
/** Numeric literal or Lua expression for total team slots */
teamSlotsExpr: Scalars['String'],
/** Lua script that dynamically creates rounds and games (Mode 1). Mutually exclusive with roundTemplates. */
generationScript?: (Scalars['String'] | null),
/** Static round definitions (Mode 2). Mutually exclusive with generationScript. */
roundTemplates?: (CreateRoundTemplateInput[] | null),
/** Numeric literal or Lua expression for best-of count per game */
bestOfExpr?: Scalars['String'],
/** Numeric literal or Lua expression for team slots per game */
teamSlotsPerGameExpr?: Scalars['String'],
/** Numeric literal or Lua expression for total round count */
roundCountExpr?: (Scalars['String'] | null)}


/** Template for a single round within a group */
export interface CreateRoundTemplateInput {
/** Human-readable round name */
name: Scalars['String'],
/** Round order within the group */
order: Scalars['Int'],
/** Game templates for this round */
gameTemplates?: CreateGameTemplateInput[]}


/** Template for a single game within a round */
export interface CreateGameTemplateInput {
/** Game order within the round */
order: Scalars['Int'],
/** Number of team slots in the game */
teamSlots?: Scalars['Int'],
/** Best-of count for the series */
bestOf?: Scalars['Int'],
/** Lua expression resolving to the target slot for the winner */
onWinTarget?: (Scalars['String'] | null),
/** Which slot on this source game wins */
onWinSourceSlot?: (Scalars['Int'] | null),
/** Target slot index for the winner */
onWinTargetSlot?: (Scalars['Int'] | null),
/** Lua expression resolving to the target slot for the loser */
onLossTarget?: (Scalars['String'] | null),
/** Which slot on this source game loses */
onLossSourceSlot?: (Scalars['Int'] | null),
/** Target slot index for the loser */
onLossTargetSlot?: (Scalars['Int'] | null)}


/** Input for creating a preset script */
export interface CreatePresetScriptInput {
/** Preset name (unique within the organization) */
name: Scalars['String'],
/** Optional human-readable description */
description?: (Scalars['String'] | null),
/** Lua script source that constructs a complete rule set */
script: Scalars['String'],
/** Declared parameters consumed by the preset script */
parameters?: PresetParameterInput[]}


/** Declared parameter of a preset script */
export interface PresetParameterInput {
/** Parameter name (unique within the preset) */
name: Scalars['String'],
/** Primitive parameter type */
type: PresetParameterType,
/** Whether the parameter must be provided when applying the preset */
required?: Scalars['Boolean'],
/** Default value for optional parameters, serialized as a string */
defaultValue?: (Scalars['String'] | null),
/** Optional human-readable description */
description?: (Scalars['String'] | null)}


/** Input for updating a preset script (all fields optional) */
export interface UpdatePresetScriptInput {
/** Preset name (unique within the organization) */
name?: (Scalars['String'] | null),
/** Optional human-readable description */
description?: (Scalars['String'] | null),
/** Lua script source that constructs a complete rule set */
script?: (Scalars['String'] | null),
/** Declared parameters consumed by the preset script */
parameters?: (PresetParameterInput[] | null)}


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
    /** Subscribe to progress updates for a validation job. Emits the updated ValidationJobModel whenever the job state changes. */
    validationProgress?: (ValidationJobModelGenqlSelection & { __args: {jobId: Scalars['ID']} })
    /** Subscribe to streaming events emitted during a validation run. */
    validationEvents?: (ValidationEventModelGenqlSelection & { __args: {jobId: Scalars['ID']} })
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
    


    const SeedingPin_possibleTypes: string[] = ['SeedingPin']
    export const isSeedingPin = (obj?: { __typename?: any } | null): obj is SeedingPin => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSeedingPin"')
      return SeedingPin_possibleTypes.includes(obj.__typename)
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
    


    const GameLink_possibleTypes: string[] = ['GameLink']
    export const isGameLink = (obj?: { __typename?: any } | null): obj is GameLink => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGameLink"')
      return GameLink_possibleTypes.includes(obj.__typename)
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
    


    const RuleActionModel_possibleTypes: string[] = ['RuleActionModel']
    export const isRuleActionModel = (obj?: { __typename?: any } | null): obj is RuleActionModel => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRuleActionModel"')
      return RuleActionModel_possibleTypes.includes(obj.__typename)
    }
    


    const AdvancementRuleModel_possibleTypes: string[] = ['AdvancementRuleModel']
    export const isAdvancementRuleModel = (obj?: { __typename?: any } | null): obj is AdvancementRuleModel => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAdvancementRuleModel"')
      return AdvancementRuleModel_possibleTypes.includes(obj.__typename)
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
    


    const CrossStepUsageModel_possibleTypes: string[] = ['CrossStepUsageModel']
    export const isCrossStepUsageModel = (obj?: { __typename?: any } | null): obj is CrossStepUsageModel => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCrossStepUsageModel"')
      return CrossStepUsageModel_possibleTypes.includes(obj.__typename)
    }
    


    const CrossStepRuleModel_possibleTypes: string[] = ['CrossStepRuleModel']
    export const isCrossStepRuleModel = (obj?: { __typename?: any } | null): obj is CrossStepRuleModel => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCrossStepRuleModel"')
      return CrossStepRuleModel_possibleTypes.includes(obj.__typename)
    }
    


    const StepRuleSetModel_possibleTypes: string[] = ['StepRuleSetModel']
    export const isStepRuleSetModel = (obj?: { __typename?: any } | null): obj is StepRuleSetModel => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isStepRuleSetModel"')
      return StepRuleSetModel_possibleTypes.includes(obj.__typename)
    }
    


    const PresetParameterModel_possibleTypes: string[] = ['PresetParameterModel']
    export const isPresetParameterModel = (obj?: { __typename?: any } | null): obj is PresetParameterModel => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPresetParameterModel"')
      return PresetParameterModel_possibleTypes.includes(obj.__typename)
    }
    


    const PresetScriptModel_possibleTypes: string[] = ['PresetScriptModel']
    export const isPresetScriptModel = (obj?: { __typename?: any } | null): obj is PresetScriptModel => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPresetScriptModel"')
      return PresetScriptModel_possibleTypes.includes(obj.__typename)
    }
    


    const BuiltinPresetModel_possibleTypes: string[] = ['BuiltinPresetModel']
    export const isBuiltinPresetModel = (obj?: { __typename?: any } | null): obj is BuiltinPresetModel => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isBuiltinPresetModel"')
      return BuiltinPresetModel_possibleTypes.includes(obj.__typename)
    }
    


    const ScriptErrorModel_possibleTypes: string[] = ['ScriptErrorModel']
    export const isScriptErrorModel = (obj?: { __typename?: any } | null): obj is ScriptErrorModel => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isScriptErrorModel"')
      return ScriptErrorModel_possibleTypes.includes(obj.__typename)
    }
    


    const ScriptWarningModel_possibleTypes: string[] = ['ScriptWarningModel']
    export const isScriptWarningModel = (obj?: { __typename?: any } | null): obj is ScriptWarningModel => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isScriptWarningModel"')
      return ScriptWarningModel_possibleTypes.includes(obj.__typename)
    }
    


    const ScriptValidationResultModel_possibleTypes: string[] = ['ScriptValidationResultModel']
    export const isScriptValidationResultModel = (obj?: { __typename?: any } | null): obj is ScriptValidationResultModel => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isScriptValidationResultModel"')
      return ScriptValidationResultModel_possibleTypes.includes(obj.__typename)
    }
    


    const SimulatedEffectModel_possibleTypes: string[] = ['SimulatedEffectModel']
    export const isSimulatedEffectModel = (obj?: { __typename?: any } | null): obj is SimulatedEffectModel => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSimulatedEffectModel"')
      return SimulatedEffectModel_possibleTypes.includes(obj.__typename)
    }
    


    const ScriptSimulationResultModel_possibleTypes: string[] = ['ScriptSimulationResultModel']
    export const isScriptSimulationResultModel = (obj?: { __typename?: any } | null): obj is ScriptSimulationResultModel => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isScriptSimulationResultModel"')
      return ScriptSimulationResultModel_possibleTypes.includes(obj.__typename)
    }
    


    const LuaErrorDetailModel_possibleTypes: string[] = ['LuaErrorDetailModel']
    export const isLuaErrorDetailModel = (obj?: { __typename?: any } | null): obj is LuaErrorDetailModel => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isLuaErrorDetailModel"')
      return LuaErrorDetailModel_possibleTypes.includes(obj.__typename)
    }
    


    const ValidationErrorModel_possibleTypes: string[] = ['ValidationErrorModel']
    export const isValidationErrorModel = (obj?: { __typename?: any } | null): obj is ValidationErrorModel => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isValidationErrorModel"')
      return ValidationErrorModel_possibleTypes.includes(obj.__typename)
    }
    


    const InvariantOffenderUnion_possibleTypes: string[] = ['RuleOffenderModel','CrossStepRuleOffenderModel','GameOffenderModel','RoundOffenderModel','GroupOffenderModel','TeamOffenderModel','ScoreRowOffenderModel']
    export const isInvariantOffenderUnion = (obj?: { __typename?: any } | null): obj is InvariantOffenderUnion => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isInvariantOffenderUnion"')
      return InvariantOffenderUnion_possibleTypes.includes(obj.__typename)
    }
    


    const RuleOffenderModel_possibleTypes: string[] = ['RuleOffenderModel']
    export const isRuleOffenderModel = (obj?: { __typename?: any } | null): obj is RuleOffenderModel => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRuleOffenderModel"')
      return RuleOffenderModel_possibleTypes.includes(obj.__typename)
    }
    


    const CrossStepRuleOffenderModel_possibleTypes: string[] = ['CrossStepRuleOffenderModel']
    export const isCrossStepRuleOffenderModel = (obj?: { __typename?: any } | null): obj is CrossStepRuleOffenderModel => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCrossStepRuleOffenderModel"')
      return CrossStepRuleOffenderModel_possibleTypes.includes(obj.__typename)
    }
    


    const GameOffenderModel_possibleTypes: string[] = ['GameOffenderModel']
    export const isGameOffenderModel = (obj?: { __typename?: any } | null): obj is GameOffenderModel => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGameOffenderModel"')
      return GameOffenderModel_possibleTypes.includes(obj.__typename)
    }
    


    const RoundOffenderModel_possibleTypes: string[] = ['RoundOffenderModel']
    export const isRoundOffenderModel = (obj?: { __typename?: any } | null): obj is RoundOffenderModel => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRoundOffenderModel"')
      return RoundOffenderModel_possibleTypes.includes(obj.__typename)
    }
    


    const GroupOffenderModel_possibleTypes: string[] = ['GroupOffenderModel']
    export const isGroupOffenderModel = (obj?: { __typename?: any } | null): obj is GroupOffenderModel => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGroupOffenderModel"')
      return GroupOffenderModel_possibleTypes.includes(obj.__typename)
    }
    


    const TeamOffenderModel_possibleTypes: string[] = ['TeamOffenderModel']
    export const isTeamOffenderModel = (obj?: { __typename?: any } | null): obj is TeamOffenderModel => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTeamOffenderModel"')
      return TeamOffenderModel_possibleTypes.includes(obj.__typename)
    }
    


    const ScoreRowOffenderModel_possibleTypes: string[] = ['ScoreRowOffenderModel']
    export const isScoreRowOffenderModel = (obj?: { __typename?: any } | null): obj is ScoreRowOffenderModel => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isScoreRowOffenderModel"')
      return ScoreRowOffenderModel_possibleTypes.includes(obj.__typename)
    }
    


    const InvariantResultModel_possibleTypes: string[] = ['InvariantResultModel']
    export const isInvariantResultModel = (obj?: { __typename?: any } | null): obj is InvariantResultModel => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isInvariantResultModel"')
      return InvariantResultModel_possibleTypes.includes(obj.__typename)
    }
    


    const RuleFireSummaryModel_possibleTypes: string[] = ['RuleFireSummaryModel']
    export const isRuleFireSummaryModel = (obj?: { __typename?: any } | null): obj is RuleFireSummaryModel => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRuleFireSummaryModel"')
      return RuleFireSummaryModel_possibleTypes.includes(obj.__typename)
    }
    


    const ValidationResultModel_possibleTypes: string[] = ['ValidationResultModel']
    export const isValidationResultModel = (obj?: { __typename?: any } | null): obj is ValidationResultModel => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isValidationResultModel"')
      return ValidationResultModel_possibleTypes.includes(obj.__typename)
    }
    


    const ValidationProgressModel_possibleTypes: string[] = ['ValidationProgressModel']
    export const isValidationProgressModel = (obj?: { __typename?: any } | null): obj is ValidationProgressModel => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isValidationProgressModel"')
      return ValidationProgressModel_possibleTypes.includes(obj.__typename)
    }
    


    const ValidationJobModel_possibleTypes: string[] = ['ValidationJobModel']
    export const isValidationJobModel = (obj?: { __typename?: any } | null): obj is ValidationJobModel => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isValidationJobModel"')
      return ValidationJobModel_possibleTypes.includes(obj.__typename)
    }
    


    const ValidationEventModel_possibleTypes: string[] = ['ValidationEventModel']
    export const isValidationEventModel = (obj?: { __typename?: any } | null): obj is ValidationEventModel => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isValidationEventModel"')
      return ValidationEventModel_possibleTypes.includes(obj.__typename)
    }
    


    const ValidationJobs_possibleTypes: string[] = ['ValidationJobs']
    export const isValidationJobs = (obj?: { __typename?: any } | null): obj is ValidationJobs => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isValidationJobs"')
      return ValidationJobs_possibleTypes.includes(obj.__typename)
    }
    


    const ValidationJobModelEdge_possibleTypes: string[] = ['ValidationJobModelEdge']
    export const isValidationJobModelEdge = (obj?: { __typename?: any } | null): obj is ValidationJobModelEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isValidationJobModelEdge"')
      return ValidationJobModelEdge_possibleTypes.includes(obj.__typename)
    }
    


    const ValidationEvents_possibleTypes: string[] = ['ValidationEvents']
    export const isValidationEvents = (obj?: { __typename?: any } | null): obj is ValidationEvents => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isValidationEvents"')
      return ValidationEvents_possibleTypes.includes(obj.__typename)
    }
    


    const ValidationEventModelEdge_possibleTypes: string[] = ['ValidationEventModelEdge']
    export const isValidationEventModelEdge = (obj?: { __typename?: any } | null): obj is ValidationEventModelEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isValidationEventModelEdge"')
      return ValidationEventModelEdge_possibleTypes.includes(obj.__typename)
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
   DENIED: 'DENIED' as const,
   WITHDRAWN: 'WITHDRAWN' as const
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

export const enumGameLinkOutcome = {
   WIN: 'WIN' as const,
   LOSS: 'LOSS' as const
}

export const enumMatchScoreStatus = {
   WAITING: 'WAITING' as const,
   WINNER: 'WINNER' as const,
   LOSER: 'LOSER' as const,
   FORFEIT: 'FORFEIT' as const,
   DRAW: 'DRAW' as const
}

export const enumTournamentAdminPermissions = {
   MANAGE_TOURNAMENT: 'MANAGE_TOURNAMENT' as const,
   MANAGE_TEAMS: 'MANAGE_TEAMS' as const,
   MANAGE_SCORES: 'MANAGE_SCORES' as const,
   MANAGE_PERMISSIONS: 'MANAGE_PERMISSIONS' as const
}

export const enumRuleActionType = {
   ADVANCE: 'ADVANCE' as const,
   ELIMINATE: 'ELIMINATE' as const,
   END: 'END' as const,
   EXECUTE_LUA: 'EXECUTE_LUA' as const
}

export const enumRuleTriggerType = {
   MATCH_ENDED: 'MATCH_ENDED' as const,
   GAME_ENDED: 'GAME_ENDED' as const,
   ROUND_ENDED: 'ROUND_ENDED' as const,
   GROUP_ENDED: 'GROUP_ENDED' as const,
   STEP_ENDED: 'STEP_ENDED' as const,
   MANUAL: 'MANUAL' as const,
   STEP_SEEDING: 'STEP_SEEDING' as const,
   ROUND_SEEDING: 'ROUND_SEEDING' as const,
   TEAM_WITHDREW: 'TEAM_WITHDREW' as const
}

export const enumAdvancementRulePurpose = {
   ADVANCEMENT: 'ADVANCEMENT' as const,
   MATCH_SERIES_RESOLUTION: 'MATCH_SERIES_RESOLUTION' as const,
   ELIMINATION: 'ELIMINATION' as const,
   WINNER_PROMOTION: 'WINNER_PROMOTION' as const,
   SEEDING: 'SEEDING' as const,
   WITHDRAWAL_RESPONSE: 'WITHDRAWAL_RESPONSE' as const
}

export const enumTiebreakerType = {
   HEAD_TO_HEAD: 'HEAD_TO_HEAD' as const,
   SCORE_DIFFERENCE: 'SCORE_DIFFERENCE' as const,
   TOTAL_SCORE: 'TOTAL_SCORE' as const,
   WINS: 'WINS' as const,
   BUCHHOLZ: 'BUCHHOLZ' as const,
   SONNBORN_BERGER: 'SONNBORN_BERGER' as const,
   MEDIAN_BUCHHOLZ: 'MEDIAN_BUCHHOLZ' as const,
   CUMULATIVE: 'CUMULATIVE' as const,
   CUSTOM_FORMULA: 'CUSTOM_FORMULA' as const
}

export const enumSortOrder = {
   ASC: 'ASC' as const,
   DESC: 'DESC' as const
}

export const enumScoreAggregationType = {
   SUM: 'SUM' as const,
   AVERAGE: 'AVERAGE' as const,
   POINTS: 'POINTS' as const,
   FORMULA: 'FORMULA' as const,
   CUSTOM_LUA: 'CUSTOM_LUA' as const
}

export const enumCrossStepUsageType = {
   SEED_ORDER: 'SEED_ORDER' as const,
   QUALIFY: 'QUALIFY' as const,
   INJECT_SCORE: 'INJECT_SCORE' as const
}

export const enumStepRelativePosition = {
   PREVIOUS: 'PREVIOUS' as const,
   NEXT: 'NEXT' as const,
   CURRENT: 'CURRENT' as const
}

export const enumCrossStepDataSource = {
   TEAMS: 'TEAMS' as const,
   WINNERS: 'WINNERS' as const,
   QUALIFIED: 'QUALIFIED' as const,
   ELIMINATED: 'ELIMINATED' as const,
   WITHDRAWN: 'WITHDRAWN' as const,
   RANKINGS: 'RANKINGS' as const,
   SCORES: 'SCORES' as const
}

export const enumPresetParameterType = {
   INT: 'INT' as const,
   FLOAT: 'FLOAT' as const,
   STRING: 'STRING' as const,
   BOOLEAN: 'BOOLEAN' as const
}

export const enumBuiltinPresetCategory = {
   SINGLE_ELIMINATION: 'SINGLE_ELIMINATION' as const,
   DOUBLE_ELIMINATION: 'DOUBLE_ELIMINATION' as const,
   SWISS: 'SWISS' as const,
   ROUND_ROBIN: 'ROUND_ROBIN' as const,
   GROUP_STAGE: 'GROUP_STAGE' as const,
   OTHER: 'OTHER' as const
}

export const enumScriptErrorCode = {
   SYNTAX: 'SYNTAX' as const,
   UNDEFINED_VARIABLE: 'UNDEFINED_VARIABLE' as const,
   INVALID_FUNCTION: 'INVALID_FUNCTION' as const,
   TYPE_MISMATCH: 'TYPE_MISMATCH' as const,
   RUNTIME: 'RUNTIME' as const,
   BLOCKED_FUNCTION: 'BLOCKED_FUNCTION' as const,
   TIMEOUT: 'TIMEOUT' as const,
   INSTRUCTION_LIMIT: 'INSTRUCTION_LIMIT' as const
}

export const enumScriptWarningCode = {
   UNUSED_VARIABLE: 'UNUSED_VARIABLE' as const,
   UNREACHABLE_CODE: 'UNREACHABLE_CODE' as const,
   DEPRECATED_FUNCTION: 'DEPRECATED_FUNCTION' as const
}

export const enumSimulatedEffectType = {
   ADVANCE: 'ADVANCE' as const,
   ELIMINATE: 'ELIMINATE' as const,
   END_GAME: 'END_GAME' as const,
   END_ROUND: 'END_ROUND' as const,
   END_GROUP: 'END_GROUP' as const,
   SET_METADATA: 'SET_METADATA' as const,
   SET_CUSTOM_FIELD: 'SET_CUSTOM_FIELD' as const,
   SET_STATUS: 'SET_STATUS' as const,
   SET_MATCH_RESULT: 'SET_MATCH_RESULT' as const,
   REGISTER_TEAM: 'REGISTER_TEAM' as const,
   CREATE_GROUP: 'CREATE_GROUP' as const,
   CREATE_ROUND: 'CREATE_ROUND' as const,
   CREATE_GAME: 'CREATE_GAME' as const,
   LINK: 'LINK' as const,
   SET_SCORING: 'SET_SCORING' as const,
   ADD_TIEBREAKER: 'ADD_TIEBREAKER' as const,
   ADD_RULE: 'ADD_RULE' as const,
   ADD_CROSS_STEP_RULE: 'ADD_CROSS_STEP_RULE' as const,
   RESEED_STEP: 'RESEED_STEP' as const
}

export const enumScriptContextType = {
   CONDITION: 'CONDITION' as const,
   ACTION: 'ACTION' as const,
   GENERATION: 'GENERATION' as const,
   PRESET: 'PRESET' as const,
   CROSS_STEP: 'CROSS_STEP' as const,
   FORMULA: 'FORMULA' as const
}

export const enumValidationErrorCode = {
   SETUP_FAILED: 'SETUP_FAILED' as const,
   UPSTREAM_NOT_VALIDATED: 'UPSTREAM_NOT_VALIDATED' as const,
   SEEDING_FAILED: 'SEEDING_FAILED' as const,
   GENERATION_FAILED: 'GENERATION_FAILED' as const,
   LUA_THROW: 'LUA_THROW' as const,
   RULE_NEVER_FIRED: 'RULE_NEVER_FIRED' as const,
   CROSS_STEP_NEVER_EVALUATED: 'CROSS_STEP_NEVER_EVALUATED' as const,
   INVARIANT_VIOLATED: 'INVARIANT_VIOLATED' as const,
   DEADLOCK: 'DEADLOCK' as const,
   MUTATION_CEILING_EXCEEDED: 'MUTATION_CEILING_EXCEEDED' as const,
   EXECUTION_TIMEOUT: 'EXECUTION_TIMEOUT' as const,
   ORPHAN_SCORE_ROW: 'ORPHAN_SCORE_ROW' as const,
   DUPLICATE_ADVANCEMENT: 'DUPLICATE_ADVANCEMENT' as const,
   ADVANCE_TARGET_MISSING: 'ADVANCE_TARGET_MISSING' as const,
   ADVANCE_BACKWARD: 'ADVANCE_BACKWARD' as const,
   ADVANCE_OVER_CAPACITY: 'ADVANCE_OVER_CAPACITY' as const,
   INVALID_RULE_SET_INPUT: 'INVALID_RULE_SET_INPUT' as const,
   RULE_ACTION_INVALID_ID: 'RULE_ACTION_INVALID_ID' as const,
   INTERNAL_ERROR: 'INTERNAL_ERROR' as const
}

export const enumInvariantCode = {
   STEP_NOT_ENDED: 'STEP_NOT_ENDED' as const,
   GAME_NOT_ENDED: 'GAME_NOT_ENDED' as const,
   GROUP_OR_ROUND_INCOMPLETE: 'GROUP_OR_ROUND_INCOMPLETE' as const,
   NO_WINNER_DECLARED: 'NO_WINNER_DECLARED' as const,
   TEAM_IN_LIMBO: 'TEAM_IN_LIMBO' as const,
   RANK_NOT_MATERIALISED: 'RANK_NOT_MATERIALISED' as const,
   RULE_NEVER_FIRED: 'RULE_NEVER_FIRED' as const,
   INFINITE_LOOP_CEILING_EXCEEDED: 'INFINITE_LOOP_CEILING_EXCEEDED' as const,
   LUA_EXECUTION_THROWN: 'LUA_EXECUTION_THROWN' as const,
   PROGRESS_DEADLOCK: 'PROGRESS_DEADLOCK' as const,
   INVALID_SCORE_VALUE: 'INVALID_SCORE_VALUE' as const,
   ILLEGAL_STATUS_TRANSITION: 'ILLEGAL_STATUS_TRANSITION' as const,
   CROSS_STEP_RULE_NOT_EVALUATED: 'CROSS_STEP_RULE_NOT_EVALUATED' as const,
   GROUP_TERMINAL_CASCADE_INCOMPLETE: 'GROUP_TERMINAL_CASCADE_INCOMPLETE' as const,
   ORPHAN_SCORE_ROW: 'ORPHAN_SCORE_ROW' as const,
   DUPLICATE_ADVANCEMENT: 'DUPLICATE_ADVANCEMENT' as const,
   ADVANCE_TARGET_MISSING: 'ADVANCE_TARGET_MISSING' as const,
   ADVANCE_BACKWARD: 'ADVANCE_BACKWARD' as const,
   ADVANCE_OVER_CAPACITY: 'ADVANCE_OVER_CAPACITY' as const,
   SEEDING_RULE_MISSING: 'SEEDING_RULE_MISSING' as const,
   ROUND_NEVER_POPULATED: 'ROUND_NEVER_POPULATED' as const,
   SEEDING_OVERFILL: 'SEEDING_OVERFILL' as const,
   SEEDING_UNDERFILL: 'SEEDING_UNDERFILL' as const,
   PIN_VIOLATED: 'PIN_VIOLATED' as const,
   PIN_UNSUPPORTED_BUT_PRESENT: 'PIN_UNSUPPORTED_BUT_PRESENT' as const,
   WITHDRAWAL_RULE_MISSING: 'WITHDRAWAL_RULE_MISSING' as const,
   WITHDRAWAL_LEFT_ORPHANS: 'WITHDRAWAL_LEFT_ORPHANS' as const,
   WITHDRAWAL_BROKE_STEP: 'WITHDRAWAL_BROKE_STEP' as const
}

export const enumOffenderKind = {
   RULE: 'RULE' as const,
   CROSS_STEP_RULE: 'CROSS_STEP_RULE' as const,
   GAME: 'GAME' as const,
   ROUND: 'ROUND' as const,
   GROUP: 'GROUP' as const,
   TEAM: 'TEAM' as const,
   SCORE_ROW: 'SCORE_ROW' as const
}

export const enumGameStatus = {
   WAITING: 'WAITING' as const,
   STARTED: 'STARTED' as const,
   ENDED: 'ENDED' as const
}

export const enumTeamScopeStatus = {
   ACTIVE: 'ACTIVE' as const,
   WINNER: 'WINNER' as const,
   QUALIFIED: 'QUALIFIED' as const,
   ELIMINATED: 'ELIMINATED' as const,
   WITHDRAWN: 'WITHDRAWN' as const
}

export const enumScoreRowScope = {
   TOURNAMENT: 'TOURNAMENT' as const,
   STEP: 'STEP' as const,
   GROUP: 'GROUP' as const,
   ROUND: 'ROUND' as const,
   GAME: 'GAME' as const
}

export const enumInvariantSeverity = {
   ERROR: 'ERROR' as const,
   WARNING: 'WARNING' as const
}

export const enumValidationStage = {
   QUEUED: 'QUEUED' as const,
   SEEDING: 'SEEDING' as const,
   GENERATING: 'GENERATING' as const,
   UPSTREAM_RUNNING: 'UPSTREAM_RUNNING' as const,
   PLAYING: 'PLAYING' as const,
   ASSERTING: 'ASSERTING' as const,
   FINALISING: 'FINALISING' as const
}

export const enumValidationJobStatus = {
   QUEUED: 'QUEUED' as const,
   RUNNING: 'RUNNING' as const,
   SUCCEEDED: 'SUCCEEDED' as const,
   FAILED: 'FAILED' as const,
   CANCELLED: 'CANCELLED' as const
}

export const enumValidationEventKind = {
   SEED: 'SEED' as const,
   GENERATE: 'GENERATE' as const,
   MATCH_UPDATED: 'MATCH_UPDATED' as const,
   RULE_FIRED: 'RULE_FIRED' as const,
   EFFECT_APPLIED: 'EFFECT_APPLIED' as const,
   SCOPE_ENDED: 'SCOPE_ENDED' as const,
   CROSS_STEP_EVALUATED: 'CROSS_STEP_EVALUATED' as const,
   ASSERTION: 'ASSERTION' as const,
   ADMIN_OVERRIDE: 'ADMIN_OVERRIDE' as const,
   ERROR: 'ERROR' as const,
   WARNING: 'WARNING' as const,
   PROGRESS: 'PROGRESS' as const
}

export const enumValidationEffectType = {
   ADVANCE: 'ADVANCE' as const,
   ELIMINATE: 'ELIMINATE' as const,
   END_GAME: 'END_GAME' as const,
   END_ROUND: 'END_ROUND' as const,
   END_GROUP: 'END_GROUP' as const,
   SET_METADATA: 'SET_METADATA' as const,
   SET_CUSTOM_FIELD: 'SET_CUSTOM_FIELD' as const,
   SET_STATUS: 'SET_STATUS' as const,
   SET_MATCH_RESULT: 'SET_MATCH_RESULT' as const,
   REGISTER_TEAM: 'REGISTER_TEAM' as const,
   CREATE_GROUP: 'CREATE_GROUP' as const,
   CREATE_ROUND: 'CREATE_ROUND' as const,
   CREATE_GAME: 'CREATE_GAME' as const,
   LINK: 'LINK' as const,
   SET_SCORING: 'SET_SCORING' as const,
   ADD_TIEBREAKER: 'ADD_TIEBREAKER' as const,
   ADD_RULE: 'ADD_RULE' as const,
   ADD_CROSS_STEP_RULE: 'ADD_CROSS_STEP_RULE' as const,
   GAME_WAITING: 'GAME_WAITING' as const,
   GAME_STARTED: 'GAME_STARTED' as const,
   GAME_ENDED: 'GAME_ENDED' as const,
   TEAM_ACTIVE: 'TEAM_ACTIVE' as const,
   TEAM_WINNER: 'TEAM_WINNER' as const,
   TEAM_QUALIFIED: 'TEAM_QUALIFIED' as const,
   TEAM_ELIMINATED: 'TEAM_ELIMINATED' as const,
   TEAM_WITHDRAWN: 'TEAM_WITHDRAWN' as const
}

export const enumValidationStatus = {
   GAME_WAITING: 'GAME_WAITING' as const,
   GAME_STARTED: 'GAME_STARTED' as const,
   GAME_ENDED: 'GAME_ENDED' as const,
   TEAM_ACTIVE: 'TEAM_ACTIVE' as const,
   TEAM_WINNER: 'TEAM_WINNER' as const,
   TEAM_QUALIFIED: 'TEAM_QUALIFIED' as const,
   TEAM_ELIMINATED: 'TEAM_ELIMINATED' as const,
   TEAM_WITHDRAWN: 'TEAM_WITHDRAWN' as const,
   STEP_CONFIGURED: 'STEP_CONFIGURED' as const,
   STEP_GENERATING: 'STEP_GENERATING' as const,
   STEP_GENERATED: 'STEP_GENERATED' as const,
   STEP_SEEDING: 'STEP_SEEDING' as const,
   STEP_SEEDED: 'STEP_SEEDED' as const,
   STEP_STARTED: 'STEP_STARTED' as const,
   STEP_ENDED: 'STEP_ENDED' as const
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
   GameLink: 'GameLink' as const,
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
   StepRuleSetValidationJob: 'StepRuleSetValidationJob' as const,
   StepRuleSetValidationInvariant: 'StepRuleSetValidationInvariant' as const,
   StepRuleSetValidationError: 'StepRuleSetValidationError' as const,
   StepRuleSetValidationWarning: 'StepRuleSetValidationWarning' as const,
   StepRuleSetValidationRuleFire: 'StepRuleSetValidationRuleFire' as const,
   StepRuleSetValidationEvent: 'StepRuleSetValidationEvent' as const,
   ScoringRuleSet: 'ScoringRuleSet' as const,
   TiebreakerRule: 'TiebreakerRule' as const,
   AdvancementRule: 'AdvancementRule' as const,
   RuleExecutionLog: 'RuleExecutionLog' as const,
   CrossStepRule: 'CrossStepRule' as const,
   StructureTemplate: 'StructureTemplate' as const,
   GroupTemplate: 'GroupTemplate' as const,
   RoundTemplate: 'RoundTemplate' as const,
   GameTemplate: 'GameTemplate' as const,
   PresetScript: 'PresetScript' as const,
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

export const enumStripeUiMode = {
   EMBEDDED: 'EMBEDDED' as const,
   HOSTED: 'HOSTED' as const
}
