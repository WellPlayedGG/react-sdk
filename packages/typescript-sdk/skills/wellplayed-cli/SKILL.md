---
name: wellplayed-cli
description: Use when working with the `@well-played.gg/cli` (`wellplayed`) tool — scaffolding apps, authenticating, running GraphQL operations, and deploying to the WellPlayed Marketplace. Activate whenever the user mentions `wellplayed`, the WellPlayed CLI, marketplace apps, app extensions, platform modules, or wants to query the WellPlayed API outside of the console.
---

# WellPlayed CLI skill

This skill loads when an agent is using the `@well-played.gg/cli` (`wellplayed`) developer tool. It covers the canonical workflow, every subcommand, and the most useful tips and gotchas — including the new `wellplayed graphql` subcommand that lets you make ad-hoc GraphQL calls (modeled on `gh api graphql`).

## Install

```bash
npm install -g @well-played.gg/cli
wellplayed --version
```

The binary is `wellplayed`. Node ≥ 18 is required.

## Authentication

Run `wellplayed login` once per machine. It uses the OAuth 2.0 Device Flow (RFC 8628):

1. The CLI requests a device code from Hydra.
2. A short user code + verification URL are printed and your browser is opened automatically.
3. After you approve, the CLI receives access + refresh tokens and stores them at `~/.wellplayed/credentials.json` (mode `0600`).
4. Every other CLI command (`graphql`, `deploy`, `create-app`) reuses these credentials and refreshes them transparently on `401`.

Run `wellplayed logout` to revoke the refresh token at Hydra and clear local credentials.

**Tip:** if a command says `Session expired. Run \`wellplayed login\`` even though you logged in recently, your refresh token was rotated by another session — just log in again.

## Subcommands at a glance

| Command | Purpose |
|---------|---------|
| `wellplayed init [name]` | Scaffold a new marketplace app (extensions + platform modules) |
| `wellplayed create-app [name]` | Scaffold a full Vite+React app **and** create the OAuth app on the platform |
| `wellplayed login` | Authenticate via device flow |
| `wellplayed logout` | Revoke + clear credentials |
| `wellplayed dev` | Start a local Vite dev server for your app |
| `wellplayed graphql [query]` | Run a GraphQL operation against the WellPlayed API (see below) |
| `wellplayed deploy --org <shortId> --app-id <id>` | Build, upload, and submit a release to the Marketplace; a manifest 1.1 `wellplayed.json` uploads server files instead (see [App server functions](#app-server-functions-manifest-11)) |
| `wellplayed install --app-id <id> --org <shortId> [--grant <permissions...> \| --grant all]` | Install a marketplace app in an organization |
| `wellplayed pin <version> --app <slug> --org <shortId> [--grant <permissions...>]` | Pin an installation to an approved release |
| `wellplayed config set KEY=VALUE... --app <slug> --org <shortId>` | Set configuration values of an installed app |
| `wellplayed install-skills` | Copy bundled SDK skills into `<project>/.claude/skills/` |
| `wellplayed upgrade` | Upgrade installed `@well-played.gg/*` packages and refresh skills / `.mcp.json` / `CLAUDE.md` (use `--latest` for cross-major bumps; `--rewrite-claude-md` / `--rewrite-mcp-json` for non-interactive overwrites; `-y` to skip prompts) |

## `wellplayed graphql` — the agent's best friend

Modeled on `gh api graphql`. Use it for: ad-hoc API exploration, writing scripts, checking schema-level facts, debugging from the terminal, and pasting output into bug reports.

### Query input (pick exactly one)

| Form | When to use |
|------|-------------|
| Positional `[query]` | Quick one-off queries |
| `-f, --file <path>` | Reusable operations stored in `.graphql` files |
| `--stdin` (or pipe) | Building queries dynamically in shell scripts |

### Variables

| Flag | Behavior |
|------|----------|
| `-F, --field key=value` | JSON-coerces the RHS: `null`, `true`, `false`, integers, floats, and `{...}`/`[...]` literals are parsed. Everything else is a string. **Repeatable.** |
| `-F key=@file.json` | Inlines a JSON file as the value (typed-field semantics) |
| `--raw-field key=value` | Same as `-F`, but the value is *always* a string (no coercion) |
| `--variables <path>` | Loads a JSON object from a file. Merged underneath `-F`/`--raw-field`, which win on conflicts |
| Dotted keys | `-F input.name=Foo -F input.size=10` builds `{ input: { name: 'Foo', size: 10 } }` |

### Headers / context

| Flag | Behavior |
|------|----------|
| `-o, --org <shortId>` | Sets the `organization-id` header. **Required for any operation that isn't decorated `@WithoutOrganization` on the backend.** Validated to match `[A-Za-z0-9_-]+`. |
| `-H, --header "Key: value"` | Adds an extra HTTP header. Repeatable. `Authorization` and `Content-Type` are reserved. CR/LF and non-ASCII are rejected. |
| `--guest-session <token>` | Calls as a guest: sends the token in `x-guest-session` and no `Authorization` (no `wellplayed login` needed). Use it with `--org`. The API refuses `x-guest-session` next to another credential, so `-H "x-guest-session: ..."` without this flag fails with `BAD_REQUEST`. See [Guests](#guests-magic-links-and-guardians). |

### Output

By default, `wellplayed graphql` prints the **full GraphQL envelope** (`{ data, errors, extensions }`) and exits with code `1` if `errors[]` is non-empty. This matches `gh api graphql` and preserves the GraphQL "partial data + errors" pattern.

| Flag | Output |
|------|--------|
| (default) | `{ "data": ..., "errors": [...]?, "extensions": ...? }` — exit `1` on errors |
| `--data-only` | Just the `data` payload — throws on any GraphQL error |

### Examples (copy-paste ready)

```bash
# Quick: who am I?
wellplayed graphql 'query { currentAccount { id email } }'

# Pipe into jq
wellplayed graphql 'query { currentAccount { id email } }' --data-only | jq -r '.currentAccount.email'

# Org-scoped mutation with typed nested variables
wellplayed graphql --org my-org -F input.name=Phoenix -F input.players=10 \
  'mutation($input: CreateTeamInput!) { createTeam(input: $input) { id } }'

# Operation from file + variables file
wellplayed graphql -f ./operations/list-tournaments.graphql --variables ./vars.json --org my-org

# Stdin (great for heredocs in shell scripts)
wellplayed graphql --org my-org <<'GQL'
  query Tournaments {
    tournaments(first: 5) { edges { node { id title } } }
  }
GQL

# Use it as a typed introspection helper
wellplayed graphql 'query { __schema { queryType { fields { name } } } }' --data-only \
  | jq -r '.__schema.queryType.fields[].name'
```

## Tips and tricks for AI agents

**1. Always set `--org` for org-scoped operations.** If a query/mutation requires it on the backend, you'll get a clear error otherwise. The org is your *short* id — find it via `wellplayed graphql 'query { myOrganizations { shortId name } }' --data-only`.

**2. Default output is the envelope.** When parsing JSON output programmatically, default to handling `{ data, errors }`. If you only care about success-path data and want a clean throw, pass `--data-only`.

**3. Use `-F` over `--raw-field` unless you specifically need the value to stay a string.** `gh`-style coercion is what most users expect — `count=0` should be a number, not the string `"0"`.

**4. Prefer query files for anything non-trivial.** `wellplayed graphql -f ./op.graphql -F input.x=...` is far easier to maintain than a 20-line single-quoted heredoc.

**5. The CLI's `WELLPLAYED_API_URL` env var overrides the API base URL** — point it at staging when you need to: `WELLPLAYED_API_URL=https://api.warrior.stg.well-played.gg/ wellplayed graphql ...`.

**6. Don't paste credentials.json or auth headers into bug reports.** The CLI never echoes your access or refresh tokens, but third-party scripts piping the response should be careful.

**7. Combine with the MCP server for schema lookups.** When you need to check a type's exact shape, the MCP at `https://mcp.well-played.gg/mcp` exposes the schema — the CLI is for *running* operations, not browsing types.

**8. Common gotcha — quoting.** In bash, `-F input.name='Phoenix Rising'` works because the shell strips the outer quotes. But `-F "input.name=Phoenix Rising"` puts a literal space in the value. Both work, but pick a style and stick to it.

**9. Forbidden variable keys.** `__proto__`, `constructor`, and `prototype` are rejected to prevent accidental prototype pollution. If you really need those keys server-side, raise it as a backend issue — the CLI won't let them through.

## Full developer workflow

```bash
# One-time
npm install -g @well-played.gg/cli
wellplayed login

# Per-app
wellplayed init my-app                 # or: wellplayed create-app my-app --framework vite-react
cd my-app
npm install
wellplayed dev                         # local Vite dev server
wellplayed graphql ...                 # check things while you build
wellplayed deploy --org my-org --app-id <appId>  # ship to the Marketplace
```

## Troubleshooting

| Symptom | Likely cause | Fix |
|---------|--------------|-----|
| `Not authenticated. Run \`wellplayed login\` first.` | No credentials, or expired and unrefreshable | `wellplayed login` |
| `Session expired. Run \`wellplayed login\`` | Refresh token rejected by Hydra | `wellplayed login` |
| `Header "X" is reserved by the CLI` | Trying to override `Authorization` or `Content-Type` via `-H` | Don't — auth is handled by `wellplayed login` |
| `Forbidden key "__proto__" in variable path` | `-F __proto__.x=1` or similar | Pick a different key |
| `Field "x" looks like a JSON literal but failed to parse` | Mistyped JSON in `-F`, e.g. `-F input={key:1}` (missing quotes) | Quote keys, or use `--raw-field` to keep as a string |
| `Invalid --org "..."` | Org id contains spaces, slashes, CR/LF | Use the short id; query `myOrganizations` to find it |
| `required option '-o, --org <shortId>' not specified` on `deploy` | `deploy` now always needs the owning organization | Add `--org <shortId>` |
| `BAD_REQUEST` with `-H "x-guest-session: ..."` | The CLI also sends `Authorization` | Use `--guest-session <token>` instead |

## Journal — debugging runtime events

The **journal** is the platform's append-only log of externally interesting runtime events: rule fires, tournament step generation/reset, manual admin overrides, validator simulations. It replaces the legacy `logs(...)` query (removed) and is the canonical surface for debugging anything the engine did at runtime.

### What it is

- **Entries** are typed records carrying a namespaced `type` (e.g. `rule_engine.advancement_rule.fired`, `tournaments.step.generated`), a `payload` resolved to a concrete `@ObjectType`, an `actor` (who/what produced it), an optional `primaryResource`, and an optional `parentEntryId` so a single rule fire and all its emitted effects form a parent/child trace.
- Entries are **scoped to the active organization** and visible through:
  - `journalEntries(page, filters)` — paginated list, most-recent first.
  - `journalEntry(id)` — single-entry lookup.
  - `journalEntryAdded(filters)` — live-tail GraphQL subscription.
- All three require the `organization:journal:view` permission.

### Querying

`JournalFiltersInput` accepts: `categories`, `types`, `typePrefix` (e.g. `rule_engine.`), `actorType`, `actorId`, `primaryResourceType`, `primaryResourceId`, `severity`, `rootOnly`, `parentEntryId`, `correlationId`, `createdAfter`, `createdBefore`, `includeSimulations`.

```bash
# Last 50 advancement-rule fires for a tournament step.
wellplayed graphql --org my-org -F stepId=<id> <<'GQL'
query StepRuleFires($stepId: ID!) {
  journalEntries(
    page: { first: 50 }
    filters: {
      typePrefix: "rule_engine."
      primaryResourceType: "tournament_step"
      primaryResourceId: $stepId
    }
  ) {
    nodes {
      id type severity createdAt
      correlationId parentEntryId
      actor {
        type id
        context {
          __typename
          ... on AdminActorContext { accountId accountUsername }
          ... on SystemActorContext { source }
        }
      }
      primaryResource { type id }
      payload {
        ... on RuleEngineAdvancementRuleFiredPayload { ruleId ruleName triggerType matched }
        ... on RuleEngineEffectAdvancePayload { teamId fromGameId toGameId }
        ... on RuleEngineEffectEliminatePayload { teamId reason }
      }
    }
    pageInfo { hasNextPage endCursor }
    totalCount
  }
}
GQL
```

### Subscribing (live tail)

```graphql
subscription LiveStepJournal($stepId: ID!) {
  journalEntryAdded(
    filters: {
      typePrefix: "rule_engine."
      primaryResourceType: "tournament_step"
      primaryResourceId: $stepId
    }
  ) {
    id type severity createdAt
    payload {
      ... on RuleEngineAdvancementRuleFiredPayload { ruleId matched }
    }
  }
}
```

The same `JournalFiltersInput` shape is honored. The server filters every event before it leaves the box, so a narrowly-scoped subscription costs essentially nothing on the client.

### Discriminated payloads

`JournalEntry.payload` is a GraphQL **interface** — clients MUST spread per-type fragments to access typed fields. The 14 concrete payload types are:

| Type | Concrete payload |
|------|------------------|
| `rule_engine.advancement_rule.fired` | `RuleEngineAdvancementRuleFiredPayload` |
| `rule_engine.generation_script.ran` | `RuleEngineGenerationScriptRanPayload` |
| `rule_engine.seeding_rule.fired` | `RuleEngineSeedingRuleFiredPayload` |
| `rule_engine.withdrawal_rule.fired` | `RuleEngineWithdrawalRuleFiredPayload` |
| `rule_engine.cross_step.transferred` | `RuleEngineCrossStepTransferredPayload` |
| `rule_engine.manual_override` | `RuleEngineManualOverridePayload` |
| `rule_engine.effect.advance` | `RuleEngineEffectAdvancePayload` |
| `rule_engine.effect.eliminate` | `RuleEngineEffectEliminatePayload` |
| `rule_engine.effect.set_metadata` | `RuleEngineEffectSetMetadataPayload` |
| `rule_engine.effect.end_step` | `RuleEngineEffectEndStepPayload` |
| `rule_engine.effect.create_group` | `RuleEngineEffectCreateGroupPayload` |
| `rule_engine.effect.emit_seeding_pin` | `RuleEngineEffectEmitSeedingPinPayload` |
| `tournaments.step.generated` | `TournamentsStepGeneratedPayload` |
| `tournaments.step.reset` | `TournamentsStepResetPayload` |

`JournalEntry.actor.context` is also an interface (`JournalActorContextPayload`) — spread per-actor fragments. The 7 concrete actor contexts (one per `JournalActorType`) and their fields:

| `actor.type` | Concrete context | Fields |
|--------------|------------------|--------|
| `ADMIN` | `AdminActorContext` | `accountId: ID!`, `accountUsername: String!` |
| `PLAYER` | `PlayerActorContext` | `playerProfileId: ID!`, `accountId: ID!` |
| `SYSTEM` | `SystemActorContext` | `source: String!` |
| `MARKETPLACE_MODULE` | `MarketplaceModuleActorContext` | `appId: ID!`, `marketplaceAppId: ID!`, `installationId: ID!`, `appName: String!` |
| `API_CLIENT` | `ApiClientActorContext` | `clientId: ID!`, `clientName: String!` |
| `WEBHOOK_CALLBACK` | `WebhookCallbackActorContext` | `webhookId: ID!`, `deliveryId: ID!` |
| `SIMULATION` | `SimulationActorContext` | `validationJobId: ID` (nullable), `source: String!` |

Always spread `__typename` on `actor.context` (and on `payload`) when you need to discriminate at runtime — the registry binds `actor.type` (Prisma enum) to the GraphQL `__typename` listed above.

### Tracing a rule fire to its effects

Every entry carries an optional `parentEntryId`. Effect entries emitted by a rule fire share the rule fire's `id` as their `parentEntryId`, and the entire cascade carries a single `correlationId`. Two ways to reconstruct the tree:

1. **Field-resolver walk** — `JournalEntry.children(first, after)` returns a paginated `JournalEntries` ordered by `createdAt` ascending. Use it to drill into one fire.
2. **Correlation filter** — `journalEntries(filters: { correlationId: $cid })` returns every entry sharing the same correlation id (across multiple parents), useful for a flat timeline view.

```graphql
query RuleFireTrace($entryId: ID!) {
  journalEntry(id: $entryId) {
    id type createdAt
    children(first: 100) {
      nodes {
        id type severity createdAt
        payload {
          ... on RuleEngineEffectAdvancePayload { teamId toGameId }
          ... on RuleEngineEffectEliminatePayload { teamId reason }
        }
      }
      pageInfo { hasNextPage endCursor }
      totalCount
    }
  }
}
```

### Default exclusions

Entries produced by the `SIMULATION` actor (validator dry-runs, `simulateScript` previews) are **excluded by default** to keep operational dashboards quiet. Opt in explicitly:

```graphql
journalEntries(filters: { includeSimulations: true }) { ... }
```

### Permission required

`organization:journal:view` (id of `ORGANIZATION_JOURNAL_VIEW`). All three operations — `journalEntries`, `journalEntry`, and the `journalEntryAdded` subscription — call `permissions.checkPermissionAndThrow` with this id. A caller without the permission gets a `FORBIDDEN` GraphQL error envelope.

For **marketplace modules** this permission is opt-in: installed apps do not receive it implicitly through their default groups (`Anonymous`, `Public`, `Connected`) and must declare it in the manifest and have it granted at installation time. The permission ceiling enforced by the `OauthGuard` (`filterPermissionsByGranted`) strips it from the request context otherwise — even if the org's groups would have granted it. Plan for `FORBIDDEN` on every journal call from a freshly installed module that did not request the permission.

### Error handling

Journal operations only return the standard masked-error envelope. Common cases to handle:

| Symptom | Likely cause | Fix |
|---------|--------------|-----|
| `FORBIDDEN` on `journalEntries`/`journalEntry`/`journalEntryAdded` | Caller lacks `organization:journal:view`, or module token without granted permission | Grant the permission to the caller's group; for marketplace modules add it to the manifest and re-install |
| `journalEntry` returns `null` | Entry id does not exist, or belongs to a different organization (cross-tenant lookup is silently null, not an error) | Verify the `--org` short id matches the org the entry was written under |
| Subscription disconnects immediately | Apollo client missing the WebSocket link, or the auth context expired mid-stream | Reconfigure the link; re-issue token; subscriptions reuse the same `Bearer` and `organization-id` headers as queries |
| Subscription delivers nothing despite events firing | Filter is too narrow (`primaryResourceId` must match exactly — the server filter is server-side and silent on no-match) | Drop filters one by one; subscribe with no filters first to confirm the channel is hot |

### Retention

Entries are auto-pruned by category. Don't rely on the journal for long-term archival — emit a webhook if you need to mirror events into your own warehouse.

| Category | Default retention |
|----------|-------------------|
| `EXECUTION` | 30 days |
| `AUDIT` | 365 days |
| `SYSTEM` | 90 days |
| `SIMULATION` | 7 days |

### Migration from `logs(...)`

The legacy `logs(...)` query, `Log` / `LogType` / `LogAuthorType` / `LogData` types, and `ORGANIZATION_LOGS_VIEW` permission have been removed. Replace every call site with `journalEntries(...)` and adapt to the typed `JournalPayload` interface — see the platform's API deprecations changelog for the full migration note.

## Account identities — linking and unlinking

### `deleteAccountIdentity` mutation

Unlinks an identity provider from an account. This is an admin-or-self operation: a caller can omit `accountId` to act on their own account, or supply it to act on another account (requires the `organization:account:identity:delete` permission scoped to `organization:account:{accountId}:identity:{identityProviderId}`).

**Protected identities:**

- **Creation identity** — the oldest linked identity (resolved by `createdAt` ascending, then `organizationIdentityProviderId`, then `providerId`). Deleting it raises `IDENTITY_CREATION_IDENTITY_NOT_DELETABLE`.
- **Last identity** — when the account has only one linked identity, deletion raises `IDENTITY_LAST_IDENTITY_NOT_DELETABLE`.

**Error codes:** `ACCOUNT_NOT_FOUND`, `IDENTITY_PROVIDER_NOT_FOUND`, `IDENTITY_NOT_FOUND`, `IDENTITY_LAST_IDENTITY_NOT_DELETABLE`, `IDENTITY_CREATION_IDENTITY_NOT_DELETABLE`.

**`isCreationIdentity` field** — `AccountIdentity` carries an optional `isCreationIdentity: Boolean` field. It is `true` on the identity that cannot be deleted, `null` when not computed in the response (e.g. when fetching a single identity without the full list context).

```bash
# Self-service: unlink a specific provider from my own account
wellplayed graphql --org my-org -F identityProviderId=<providerShortId> \
  'mutation($identityProviderId: ID!) {
    deleteAccountIdentity(identityProviderId: $identityProviderId)
  }'

# Admin: unlink a provider from another account
wellplayed graphql --org my-org \
  -F identityProviderId=<providerShortId> \
  -F accountId=<accountShortId> \
  'mutation($identityProviderId: ID!, $accountId: ID) {
    deleteAccountIdentity(identityProviderId: $identityProviderId, accountId: $accountId)
  }'
```

To discover which identity is the creation identity before unlinking, read the `identities` field with `isCreationIdentity`:

```bash
wellplayed graphql --org my-org 'query {
  getMyAccount {
    identities { organizationIdentityProviderId isCreationIdentity createdAt }
  }
}'
```

### Identity-link redirect contract

When an org-scoped identity provider has a `linkRedirectUrl` configured, the IDP service redirects back to that URL after the OAuth callback completes. Query params are appended with `&`-aware logic (existing params in `linkRedirectUrl` are preserved):

| Scenario | Added params |
|----------|-------------|
| Success | `success=true` |
| Token exchange failure | `success=false`, `error=identity_provider_error` |
| External identity already attached to another account | `success=false`, `error=identity_already_attached` |

`localhost` URLs are valid in `linkRedirectUrl` (and in all other IDP URL configuration fields). The URL validator does not require a public TLD, so `http://localhost:3000/callback` is accepted.

## Object metadata — visibility and access control

Object metadata entries carry a `visibility` field with two values:

- `PUBLIC` — returned to any caller regardless of authentication state. The `organization-id` header is still required.
- `PRIVATE` — returned to any caller whose permission set includes `organization:metadata:view` or `organization:metadata:manage`. Authentication state is irrelevant: an organization can grant `organization:metadata:view` to its Anonymous group, in which case unauthenticated callers also receive `PRIVATE` entries. Callers without either permission receive only `PUBLIC` entries — no error is thrown.

Both `objectMetadata(objectType, objectId)` and `objectMetadataBatch(objectType, objectIds[])` are decorated `@Public` — they accept requests without a Bearer token. The server filters the result set based on the caller's permission set, not on whether the caller is authenticated. The `organization-id` header is always required — callers without it are rejected by the platform.

`objectMetadataBatch` accepts up to 100 object IDs in a single request.

**Writing metadata** — `setObjectMetadata` requires `organization:metadata:manage`. Each entry in `SetObjectMetadataInput.entries` carries an explicit `visibility` field (`PUBLIC` or `PRIVATE`).

### Lua `set_metadata` — optional visibility argument

In rule-engine Lua scripts, `set_metadata` accepts an optional fourth argument controlling the visibility of the written entry:

```lua
-- 3-arg form: defaults to PRIVATE
set_metadata(team, "key", "value")

-- 4-arg form: explicit visibility
set_metadata(team, "key", "value", "PUBLIC")
set_metadata(team, "key", "value", "PRIVATE")
```

Passing any value other than `"PUBLIC"`, `"PRIVATE"`, or `nil` causes the script to fail with an error matching `/visibility must be one of/i`. Passing `nil` explicitly is equivalent to omitting the argument (defaults to `PRIVATE`).

## Custom fields (visibility & editability)

Custom fields attach typed, org-defined values to entities (players, tournament teams, events, …). Definitions live under **Data → Custom Fields**; values are read/written via the API.

**Visibility** — who can read a value (`PropertyVisibility`):

- `PUBLIC` — everyone, including unauthenticated callers.
- `OWNER` — only the object's owner. Objects with an owner: `Account`, `Organization`, `OrganizationMember`, `Clan`, `Leaderboard`, `PlayerProfile` (its account), and the member rows `TeamMember`, `TournamentTeamMember`, `ClanMember` and `UserGroupMember` (the member's account). Any other object, `TournamentTeam` and `Event` included, has no owner (a team manager does not own the team), so an `OWNER` field on it is readable by no one. Permission holders do **not** see it unless they are also the owner.
- `OWNER_OR_PERMISSION` — the owner, or a caller holding the field's view permission.
- `WITH_PERMISSION` — only callers holding the view permission.

Anonymous (unauthenticated) callers are never treated as an owner: they only ever see `PUBLIC` fields plus any field whose view permission is granted to the org's Anonymous/Public group. There is no ownership bypass.

**Editability** — who can write a value (`PropertyEditability`, values `ALWAYS` / `ONE_TIME` / `WITH_PERMISSION`):

- `ALWAYS` — the owner, or a caller with the field's edit permission.
- `ONE_TIME` — the owner may set it once while empty; a caller with the edit permission may change it at any time.
- `WITH_PERMISSION` — only a caller with the edit permission.

Re-submitting a field's current value is a no-op. Owners may set their own `ALWAYS` and first-time `ONE_TIME` values without `organization:custom_fields:values:manage`.

Key operations: `customFieldDefinitions(objectType)`, `customFieldValues(objectType, objectId)` and `customFieldValuesBatch(objectType, objectIds)` (both public, visibility-filtered per field), and `setCustomFieldValues(input)`.

### `setCustomFieldValues` — `deleteKeys` argument

`SetCustomFieldValuesInput` accepts an optional `deleteKeys: [String!]` alongside `fields`. The two operations are applied atomically in a single mutation call:

- `fields` — upsert these key-value pairs.
- `deleteKeys` — delete the stored value rows for these keys.

Constraints:

- Maximum 100 keys per call (`deleteKeys` is capped at 100 entries per mutation invocation).
- A key must not appear in both `fields` and `deleteKeys` simultaneously (`CUSTOM_FIELD_KEY_IN_BOTH_SET_AND_DELETE`).
- Required fields can only be deleted via `deleteKeys` by a caller holding `organization:custom_fields:values:manage`; a plain owner without that permission receives `CUSTOM_FIELD_REQUIRED_VALUE_NOT_DELETABLE`. The same restriction applies to `ONE_TIME` fields.
- Each key in `deleteKeys` must match an existing definition (`CUSTOM_FIELD_DEFINITION_NOT_FOUND`).

```bash
# Upsert one field and delete another in a single call
wellplayed graphql --org my-org \
  -F input.objectType=Tournament \
  -F input.objectId=<tournamentShortId> \
  -F 'input.fields=[{"key":"stage","value":"playoffs"}]' \
  -F 'input.deleteKeys=["legacy_bracket"]' \
  'mutation($input: SetCustomFieldValuesInput!) {
    setCustomFieldValues(input: $input) {
      definition { key name }
      value
    }
  }'
```

## Tournament seeding — rule-engine steps vs. legacy steps

Every tournament step either has a `StepRuleSet` (built-in template or custom preset script applied via `applyBuiltinPreset` / `applyPresetScript`) or has none. A step with no rule set is a **legacy step** — a permanent, fully-supported configuration for tournaments predating the Lua rule engine, not a half-configured one. `seedTournamentStep` supports both:

```graphql
mutation SeedStep($input: SeedStepInput, $legacyInput: SeedStepLegacyInput) {
  seedTournamentStep(input: $input, legacyInput: $legacyInput) {
    id
    status       # GENERATED -> SEEDING -> SEEDED
    seedingOrder
  }
}
```

Pass **exactly one** of the two arguments:

- **`input: SeedStepInput`** — the canonical, rule-engine-driven shape. Use this for any step that has a rule set: an ordered `orderedTeamIds` permutation of the step's teams, plus optional `pins: [SeedingPinInput!]` (group/game/slot anchors). The preset's `SEEDING` / `ROUND_SEEDING` Lua rules drive the actual placement.

  ```bash
  wellplayed graphql --org my-org \
    -F input.stepId=<stepId> \
    -F 'input.orderedTeamIds=["team-A","team-B","team-C","team-D"]' \
    'mutation($input: SeedStepInput!) { seedTournamentStep(input: $input) { id status } }'
  ```

- **`legacyInput: SeedStepLegacyInput`** — only meaningful on a step with **no** rule set. Preserves the pre-rule-engine automatic/manual seeding contract for integrations that never migrated. Provide exactly one of `automaticSeeding` or `manualSeeding`:

  ```bash
  # Automatic: order the team pool with a SeedingMechanism, then spread
  # it across entry groups with a GroupRepartitionMechanism.
  wellplayed graphql --org my-org \
    -F legacyInput.stepId=<stepId> \
    -F legacyInput.automaticSeeding.seedingMechanism=REVERSE_HALF_SHIFT \
    -F legacyInput.automaticSeeding.groupRepartitionMechanism=SEED_OPTIMIZED \
    'mutation($legacyInput: SeedStepLegacyInput!) { seedTournamentStep(legacyInput: $legacyInput) { id status } }'
  ```

  `SeedingMechanism`: `NONE`, `REVERSE`, `HALF_SHIFT`, `REVERSE_HALF_SHIFT`, `PAIR_FLIP`. `GroupRepartitionMechanism`: `BALANCED`, `SEED_OPTIMIZED`.

**Don't send `legacyInput` against a step that has a rule set** — it carries no rule-engine meaning there; use `input` so the preset's Lua seeding rules run instead.

### What a legacy step gives you for free

With no rule set attached, the platform still runs the step end-to-end using built-in, zero-config defaults — not silent no-ops:

- **Scoring** — implicit `SUM` aggregation over raw match scores (the pre-migration match→game→round→group→step→tournament roll-up).
- **Seeding** — a generic placement pass: walks the generated groups/rounds/games in order and drops the (ordered or legacy-derived) team list into entry games, respecting each game's team-slot capacity.
- **Advancement** — driven by `GameLink` rows: when a game ends, winners/losers are read off recorded match scores and walked along the game's outgoing `GameLink` edges.
- **Best-of-N series** — matches are created incrementally, one at a time, only once the prior match ended and the series is still undecided.
- **Step completion** — the step auto-transitions to `ENDED` once every game has ended. There's no `STEP_ENDED` Lua rule, so use `setStepWinners` / `setTournamentWinners` to record results.

The moment a rule set is attached (via `applyBuiltinPreset`, `applyPresetScript`, or `createStepRuleSet`), all of the above is fully replaced by the step's Lua rules.

### Team withdrawal keeps two statuses in sync

`withdrawTeamFromStep(stepId, teamId)` and the admin `updateTournamentTeamStatus(tournamentTeamId, status: WITHDRAWN)` mutation both now keep the team's tournament-wide `TournamentTeamStatus.WITHDRAWN` and its per-step score-row status (`team_scope_status.WITHDRAWN`) in sync across every one of the team's not-yet-`ENDED` steps. If you read standings or `tournamentStep.teamScores` right after either mutation, both statuses reflect the withdrawal.

### Built-in preset: `cumulative-points-total`

New `OTHER`-category built-in template alongside `cumulative-rounds-series`. Both run the same shape — the same set of teams plays `round_count` full-roster rounds — but rank teams differently:

| Template | Ranks by | Aggregation |
|----------|----------|-------------|
| `cumulative-rounds-series` | round **wins** | `POINTS` (`points_per_round_win` per round win) |
| `cumulative-points-total` | raw cumulative **score** total across all rounds | `SUM` of raw per-game scores |

```bash
wellplayed graphql --org my-org \
  -F builtinPresetId=cumulative-points-total \
  -F tournamentStepId=<stepId> \
  -F 'parameters={"team_count":8,"round_count":5,"best_of":1,"shared_victory":false}' \
  'mutation($builtinPresetId: String!, $tournamentStepId: ID!, $parameters: String!) {
    applyBuiltinPreset(builtinPresetId: $builtinPresetId, tournamentStepId: $tournamentStepId, parameters: $parameters) { id version }
  }'
```

Parameters: `team_count` (required, ≥ 2), `round_count` (default `5`), `best_of` (default `1`), `promote_step_winners_to_tournament` (default `true`), `shared_victory` (default `false` — when `true`, a full points+tiebreaker tie at the top declares every tied leader a co-champion instead of a single winner).

> **Behavior-change note:** `cumulative-rounds-series` previously declared `SUM` aggregation, which silently ignored its own `points_per_round_win` parameter and ranked by raw score instead of round wins. It now declares `POINTS`, which is honored — standings correctly reflect round-win counts. This only affects rule sets built by *re-applying* the template after this change; already-persisted rule sets are unaffected until re-applied.

## Event reservations — `eventReservationUpdateStatus` auto-reserves tickets

`eventReservationUpdateStatus` now auto-reserves tickets when an admin moves a reservation into a payment-validated status (`CONFIRMED`, `REGISTERED`, `PRESENCE_CONFIRMATION_PENDING`, `NOT_ATTENDING`) and the reservation has none yet, whatever its previous status — you no longer need a separate call to create tickets for that case.

- If the event has exactly **one** ticket configuration, tickets are reserved against it automatically — one per accepted group member. Every reservation belongs to a group; if that group has zero accepted members, the mutation fails with a `BAD_REQUEST` error instead of reserving any ticket.
- If the event has **more than one** ticket configuration, pass the new optional `ticketsToReserve: EventReservationRegisterTicketsInput` argument to say which configuration(s) and quantities to use. Omitting it in that case fails with a `BAD_REQUEST` error asking you to disambiguate.
- `ticketsToReserve` is ignored when the reservation already has tickets, or when the status change does not cause it to hold a seat.
- Seats are never assigned implicitly by this call — if the event requires seat selection, reserve tickets without seats here, then assign seats afterwards with `eventReservationUpdateTickets`.
- `reservedSeats: [ID!]!` is required on every entry of `tickets` — pass `[]` when reserving without seats.

```bash
wellplayed graphql --org my-org \
  -F reservationId=<reservationShortId> \
  -F status=CONFIRMED \
  -F 'ticketsToReserve={"tickets":[{"ticketConfigurationId":"<ticketConfigurationShortId>","quantity":2,"reservedSeats":[]}]}' \
  'mutation($reservationId: ID!, $status: EventReservationStatus!, $ticketsToReserve: EventReservationRegisterTicketsInput) {
    eventReservationUpdateStatus(
      reservationId: $reservationId
      status: $status
      ticketsToReserve: $ticketsToReserve
    ) { id status }
  }'
```

## App server functions (manifest 1.1)

A marketplace app whose `wellplayed.json` says `"version": "1.1"` ships server functions written in Lua. WellPlayed runs them inside each organization that installs the app: called by a client (`CALL`), vetoing a platform action (`HOOK`), reacting to webhook events (`EVENT`), firing later (`TIMER`), on a schedule (`CRON`) or on install, upgrade, uninstall and config change (`LIFECYCLE`). A 1.1 release carries only server files (functions, operations, e-mail templates), no front bundle.

### `wellplayed.json` and project files

| Key | Required | Notes |
|---|---|---|
| `version` | yes | `"1.1"`; any other value takes the 1.0 bundle deploy path |
| `releaseVersion` | yes | Version of the release to create; unique per app |
| `slug` | yes | `^[a-z][a-z0-9-]{1,49}$`, unique across the marketplace; clients address functions by it |
| `name`, `description` | first publish | Listing name and description |
| `visibility`, `allowedOrganizations` | no | `PUBLIC` (default) or `PRIVATE`; organization short ids that may install a `PRIVATE` app (max 100) |
| `permissions` | yes | Catalogue permission ids the installation asks for (at least one) |
| `config`, `customPermissions`, `storage`, `operations`, `emailTemplates`, `auditTypes`, `functions`, `codeAuthorized` | no | 1.1 blocks below; refused in a 1.0 manifest |

```json
{
  "version": "1.1", "releaseVersion": "1.0.0", "slug": "my-notes",
  "name": "Notes", "description": "Players leave short notes on events.",
  "visibility": "PRIVATE", "allowedOrganizations": ["<partnerOrgShortId>"],
  "permissions": ["organization:emails:send"],
  "config": [{ "key": "MAX_NOTES", "type": "INTEGER", "label": "Notes per player", "defaultValue": "3", "min": 1, "max": 20 },
             { "key": "WELCOME_TEXT", "type": "STRING", "label": "Welcome text", "public": true }],
  "customPermissions": [{ "name": "notes.read", "description": "Read every note" }],
  "storage": { "collections": [{ "name": "notes", "ttlSeconds": 2592000 }] },
  "operations": [{ "name": "GetEvent", "file": "operations/get-event.graphql" }],
  "emailTemplates": [{ "key": "NOTE_ADDED", "subject": "Note saved for {{event_title}}", "file": "emails/note-added.html" }],
  "auditTypes": [{ "type": "note.added", "fields": [{ "name": "eventId", "type": "ID", "required": true }, { "name": "length", "type": "INTEGER" }] }],
  "functions": [
    { "name": "addNote", "file": "functions/add-note.lua", "trigger": { "type": "CALL" }, "invoker": ["PLAYER", "GUEST"],
      "input": [{ "name": "eventId", "type": "ID", "required": true }, { "name": "text", "type": "STRING", "required": true, "maxLength": 280 }],
      "preload": [{ "name": "lookup", "op": "GetEvent", "vars": [{ "name": "id", "value": "$input.eventId" }] }] },
    { "name": "listNotes", "file": "functions/list-notes.lua", "trigger": { "type": "CALL", "readOnly": true, "cacheSeconds": 30 },
      "input": [{ "name": "eventId", "type": "ID", "required": true }], "requires": [{ "permission": "app:my-notes:notes.read" }] },
    { "name": "purgeDrafts", "file": "functions/purge-drafts.lua", "trigger": { "type": "CRON", "cron": "0 3 * * *", "timezone": "Europe/Paris" } }
  ], "codeAuthorized": ["addNote"]
}
```

`operations/get-event.graphql` holds exactly one operation (no subscription), validated against the live schema at review:

```graphql
query GetEvent($id: ID!) { event(id: $id) { id title } }
```

`functions/add-note.lua` returns one function. `addNote` is open to players and guests with no `requires`, so it is listed in `codeAuthorized`: it only ever writes under the caller's own `playerId`.

```lua
return function(ctx, input)
  local playerId = ctx.caller.playerId
  local event = ctx.data.lookup.event
  local prefix = input.eventId .. ":" .. playerId
  local counter, err = wp.store.incr("notes", prefix .. ":count", 1, { max = ctx.config.MAX_NOTES })
  if not counter then
    wp.error("TOO_MANY_NOTES", "Note limit reached", { field = "text", details = { max = ctx.config.MAX_NOTES, reason = err.code } })
  end
  wp.store.put("notes", prefix .. ":" .. counter.value, { text = input.text, at = wp.time.now() }, { subject = { type = "PLAYER", id = playerId } })
  wp.audit.log("note.added", { eventId = input.eventId, length = #input.text })
  wp.email.send({ template = "NOTE_ADDED", to = { playerId = playerId }, vars = { event_title = event.title } })
  return { count = counter.value, eventTitle = event.title }
end
```

### Manifest blocks

| Block (cap) | Entry | Rules |
|---|---|---|
| `config` (100) | `key` `^[A-Z][A-Z0-9_]{0,63}$`, `type`, `label`, `description`, `required`, `defaultValue` (string), `options` (`SELECT`), `min`/`max`, `pattern` (regex on the raw value), `public` | `public: true` keys are readable by anyone; a `required` key with no value fails every run with `NOT_CONFIGURED` |
| `customPermissions` (50) | `name` `^[a-z][a-z0-9._-]{0,63}$`, `description`, `resources` (10 patterns) | Become `app:{slug}:{name}` in each organization when a release is pinned; dropped names lose their grants |
| `storage.collections` (20) | `name` `^[a-z][a-z0-9_-]{0,49}$`, `ttlSeconds` (60 to 31 536 000) | Every collection used by `wp.store` must be declared; `ttlSeconds` is the default record TTL |
| `operations` (200) | `name`, `file` | Only declared operations run through `preload` and `wp.op` |
| `emailTemplates` (50) | `key` `^[A-Za-z0-9_]{1,50}$`, `subject` (300), `file` (HTML) | Placeholders `{{name}}` with `name` matching `[a-z_][a-z0-9_]*`; body values are HTML-escaped, subject values are not |
| `auditTypes` (50) | `type` `^[a-z][a-z0-9._-]{0,63}$`, `fields` (30) | `wp.audit.log` data must use exactly these fields |
| `functions` (100) | see below | |
| `codeAuthorized` (100) | function names | Open functions that check their caller in Lua |

Field declarations (`input`, `output`, audit `fields`): `name` (`^[a-zA-Z][a-zA-Z0-9_]{0,63}$`), `type` (`STRING` `TEXT` `NUMBER` `INTEGER` `BOOLEAN` `ID` `EMAIL` `DATE` `DATETIME` `ENUM` `OBJECT` `LIST`), `required`, `options` (`ENUM`), `fields` (`OBJECT`, 50), `items` (`LIST`), `maxLength`, `min`/`max` (value, or item count for `LIST`). Undeclared input keys are dropped; `output` is documentation only.

| Function key | Default | Notes |
|---|---|---|
| `name`, `file`, `trigger` | | `trigger.type` picks the keys below |
| `invoker` | `["MEMBER"]` | `ANONYMOUS`, `PLAYER`, `GUEST`, `MEMBER`; used by `CALL`, ignored by `HOOK` |
| `runAs` | `APP` | `APP`: preloads and `wp.op` use the installation's granted permissions plus its `app:` permissions. `INVOKER`: the caller's permissions, capped by those grants. `HOOK` must stay `APP` |
| `input`, `output` | `[]` | Up to 50 field declarations each |
| `preload` | `[]` | Up to 5 `{ name, op, vars: [{ name, value }] }`, run before the function; results land in `ctx.data.<name>` |
| `requires` | `[]` | Up to 5 `{ permission, resource }`, checked on the caller before the run (`FORBIDDEN`); the organization owner always passes |

| `trigger.type` | Keys | Runs when |
|---|---|---|
| `CALL` | `readOnly` (false), `cacheSeconds` 0-300 (needs `readOnly`) | `appFunctionCall` or `appFunctionRead` |
| `HOOK` | `hookPoint: EVENT_RESERVATION_VALIDATE`, `onError: DENY \| ALLOW`, `timeoutMs` 100-2000 (1000) | A reservation session opens or a reservation is validated |
| `EVENT` | `events` (1-20 `WebhookEventType`), `selfTrigger` (false) | A matching event in the organization; with `selfTrigger: false`, events caused by this installation are skipped |
| `TIMER` | none | `wp.timers.schedule` fires it |
| `CRON` | `cron`, `timezone` (IANA) | Every run at least 300 s apart; at most 10 `CRON` functions per release |
| `LIFECYCLE` | `lifecycle`: `INSTALL`, `UPGRADE`, `UNINSTALL`, `CONFIG_UPDATED` | First pinned release, another release pinned, uninstall, config change |

Template references in `preload[].vars[].value` and `requires[].resource`: `$input.<path>`, `$config.<KEY>`, `$caller.<kind|accountId|playerId|guest...>`, `$data.<earlier preload>.<path>`. A value that is a single reference keeps its JSON type; inside text write `organization:event:{$input.eventId}`. A reference that resolves to nothing fails the run with `INPUT_INVALID`.

The automated review rejects a release with one `reviewResult.checks` entry per issue (`name` = code, `details` = JSON pointer and message): `DUPLICATE_NAME`, `UNKNOWN_OPERATION` (preload or literal `wp.op("...")`), `UNKNOWN_COLLECTION` (literal `wp.store.*("...")`), `CACHE_NEEDS_READ_ONLY`, `HOOK_RUN_AS_INVOKER`, `INVALID_CRON`, `CRON_TOO_FREQUENT`, `TOO_MANY_CRONS`, `INVALID_TIMEZONE`, `UNKNOWN_PERMISSION` (`requires` must name a catalogue id, `app:{slug}:{declared name}` or `custom:*`), `FOREIGN_APP_PERMISSION`, `INVALID_TEMPLATE_REF`, `MISSING_FILE`, `FILE_KIND_MISMATCH`, `OPERATION_INVALID`, `READ_ONLY_MUTATION`, `LUA_SYNTAX`, `CHUNK_TOO_LARGE` (1 MiB per function file), `RELEASE_FILES_TOO_LARGE` (4 MB in total), and `OPEN_FUNCTION`: a `CALL` function with `runAs: APP`, open to `MEMBER`, `PLAYER` or `GUEST`, with no `requires`, no `wp.auth.require` in its source and absent from `codeAuthorized`.

### Lua runtime

`function(ctx, input)` returns a JSON-compatible value (at most 256 KB; an empty table becomes `{}`), sent to the caller as the `payload` string. A `HOOK` returns `{ allow = true }` or `{ allow = false, reason = "<CODE>" }`. `input` is the validated payload (`CALL`), the webhook payload (`EVENT`), the scheduled payload (`TIMER`), the hook payload (`HOOK`), or `{}` (`CRON`, `LIFECYCLE`).

| `ctx` field | Content |
|---|---|
| `executionId`, `correlationId`, `causationDepth` | Ids of this run and of the chain it belongs to |
| `org.id`; `app.slug`, `app.installationId`, `app.releaseVersion` | Where it runs |
| `trigger` | `type`, `name`, plus `hookPoint`, `event { type, messageId }`, `timer { key, scheduledFor, firedAt }`, `cron { scheduledFor, firedAt }` or `lifecycle { transition, previousReleaseVersion, changedKeys }` |
| `caller` | `kind` (`ANONYMOUS`, `PLAYER`, `GUEST`, `MEMBER`, or `SYSTEM` outside `CALL`), `classes`, `accountId`, `playerId`, `guest { sessionId, sessionPlayerId, origin, link { id, purpose, data, expiresAt } }`. A guardian acting for a ward: `playerId` is the ward, `guest.sessionPlayerId` the guardian |
| `request` | `{ ip, userAgent }` on `CALL`, otherwise nil |
| `config` | Values by key: `DURATION` in seconds, `NUMBER`/`INTEGER` numbers, `BOOLEAN` booleans, `STRING_LIST` arrays, the rest strings |
| `data` | Preload results by name (the operation's `data`) |

| Call | Returns | Rules |
|---|---|---|
| `wp.op(name, vars, { as = "APP" \| "INVOKER", idempotencyKey = "..." })` | `data, err` | Declared operations only; `as` defaults to `runAs`; `INVOKER` needs a caller with an account or a guest session; `err.code` is the first GraphQL error code. `idempotencyKey` (`^[A-Za-z0-9:._@-]{1,100}$`, mutations only, queries ignore it): the first success is kept 24 h per installation, operation and key, and any later call with that key, from any execution, gets the kept `data` without running the mutation again; a failure frees the key; a call made while the first still runs gets `IDEMPOTENCY_IN_PROGRESS`. Build the key from the work (`"walkin-team:" .. input.ticketId`) so a retry reuses it |
| `wp.store.get(col, key)` | `{ value, version, expiresAt }` or nil | Key `^[A-Za-z0-9:._@-]{1,200}$` |
| `wp.store.put(col, key, value, { ifAbsent, ttlSeconds, subject = { type = "PLAYER", id } })` | `{ version }` or `nil, err` | Value at most 16 KB; `ALREADY_EXISTS` with `ifAbsent` |
| `wp.store.cas(col, key, expectedVersion, patch, { ttlSeconds })` | `{ version, value }` or `nil, err` | Shallow merge; `VERSION_CONFLICT`, `NOT_FOUND` |
| `wp.store.incr(col, key, by, { min, max, ttlSeconds })` | `{ value, version }` or `nil, err` | Starts at 0; `OUT_OF_RANGE` |
| `wp.store.del(col, key)`, `wp.store.list(col, prefix, { after, limit })` | boolean, `{ items, nextCursor }` | `list` orders by key, `limit` at most 100 |
| `wp.lock.acquire(key, ttlMs, { waitMs })`, `wp.lock.release(token)` | token or `nil, err`, boolean | `LOCKED` after `waitMs` (at most 2000); every lock is released when the run ends |
| `wp.timers.schedule({ fn, key, at \| delaySeconds, payload, dedupeKey })`, `wp.timers.cancel(key)` | `{ key, runAt }`, `true` | `fn` is a `TIMER` function; key `^[A-Za-z0-9:._-]{1,150}$`; at most 180 days ahead; the same key replaces the timer; `dedupeKey` below |
| `wp.email.send({ template, to = { playerId }, cc, vars, attachTicketQr })` | `{ deliveryId }` | The installation must hold `organization:emails:send`; `vars` are strings; `attachTicketQr = "<ticketId>"` adds the ticket QR as inline image `cid:ticket`; a ward without an address goes to its guardian; no address at all is skipped; `dedupeKey` below |
| `wp.outbox.isPublished(kind, dedupeKey)` | boolean | `kind` is `"email"`, `"timer"` or `"audit"`; `true` only when this installation queued that kind with that `dedupeKey` in the last 24 hours (pending, unknown or another installation's key: `false`); read-only, every trigger |
| `wp.auth.check(permission, resource)`, `wp.auth.require(...)` | boolean, nothing | Caller's own permissions, never the app's; `require` ends the run with `FORBIDDEN` |
| `wp.audit.log(type, data, { subject = { type, id }, dedupeKey })` | `true` | Declared `auditTypes` only, data at most 4 KB; IP and user agent are stamped; `dedupeKey` below |
| `wp.log.debug/info/warn/error(message, fields)` | nothing | Lines past the budget are dropped |
| `wp.crypto.hmac(data)`, `.sha256(data)`, `.randomId()` | hex, hex, UUID | `hmac` uses a per-installation key no one can read |
| `wp.time.now()`, `.at(date, "HH:MM", tz)`, `.add(iso, s)`, `.diff(a, b)`, `.parts(iso, tz)` | ISO strings, seconds, `{ year, month, day, hour, minute, weekday, date, time }` | `weekday` 1 is Monday |
| `wp.json.encode(value)`, `wp.json.decode(text)` | string, value | At most 256 KB |
| `wp.error(code, message, { field, details })` | does not return | Ends the run with `kind: APP`; `code` `^[A-Z][A-Z0-9_]{0,63}$`, `field` a dotted path, `details` a table |

E-mails, timers and audit entries go out only when the run succeeds, so a retry must send them again. Give each one a `dedupeKey` (`^[A-Za-z0-9:._-]{1,200}$`, ids only, never an e-mail address or a name): it goes out only if no run of the same installation sent the same kind with that key in the last 24 hours, and concurrent runs send it once. Keys are per installation and per kind; an entry without a key always goes out; a failed queueing frees the key, and the claim of a run that dies before queueing lapses after 60 seconds so the next retry sends. A deduplicated `wp.email.send` still returns a `deliveryId` that is not the sent one.

`HOOK` and `readOnly` `CALL` functions only get `wp.op` (queries), `wp.store.get/list`, `wp.outbox.isPublished`, `wp.auth`, `wp.log`, `wp.time`, `wp.json`, `wp.crypto` and `wp.error`; the other modules are nil there. Globals are limited to `assert error ipairs next pairs select tonumber tostring type setmetatable getmetatable` and the `string`, `table`, `math`, `utf8` libraries: no `io`, `os`, `require`, `load`, `pcall`, `coroutine` or `debug`. `wp.*` cannot be called from a `table.sort` comparator, a `gsub` callback or `tostring`.

| Budget per run | `CALL` | `HOOK` | `EVENT`, `TIMER`, `CRON`, `LIFECYCLE` |
|---|---|---|---|
| Wall clock | 5 s | `timeoutMs` | 30 s |
| Lua instructions / memory | 5 M / 16 MiB | 1 M / 16 MiB | 20 M / 32 MiB |
| `wp.*` calls / `wp.op` calls | 1 000 / 50 | 200 / 10 | 4 000 / 200 |
| E-mails / timers | 10 / 20 | 0 / 0 | 500 / 200 |
| Log lines (2 KB each) | 50 | 10 | 200 |
| Event chain depth | - | - | stops at 3 (`CAUSATION_DEPTH_EXCEEDED`) |

Preloaded data is capped at 2 MB. Recoverable `wp.*` failures return `nil, err` with `err = { code, message, path }`: `VERSION_CONFLICT`, `ALREADY_EXISTS`, `NOT_FOUND`, `OUT_OF_RANGE`, `LOCKED`, `INVALID_ARGUMENT`, `FORBIDDEN`, or the GraphQL code for `wp.op`. A bad argument or an undeclared operation, collection or template ends the run with `SCRIPT_ERROR`.

Failed async runs: `EVENT` retries up to 10 times with exponential backoff (a `wp.error` is retried too; `NOT_FOUND`, `NOT_CONFIGURED`, `DISABLED`, `INPUT_INVALID`, `FORBIDDEN`, `CAUSATION_DEPTH_EXCEEDED`, `LIMIT_EXCEEDED` and `OUTPUT_TOO_LARGE` are not), `CRON` and `LIFECYCLE` up to 5 times, `TIMER` never. A run that gives up is journaled as `app.function.dead_letter`. An event fans out to at most 10 functions per installation.

### Deploy, install, pin, configure (CLI)

| Command | What it does |
|---|---|
| `wellplayed deploy --org my-org --dry-run` | Lists every function, operation and template file with its size; calls nothing. Each `file` is a path inside the project directory and must exist |
| `wellplayed deploy --org my-org --organization-app-id <organizationAppId>` | First release: `publishMarketplaceApp` (slug, visibility, allowed organizations, name, description, manifest), then `appCreateRelease` with the files, `appFinalizeRelease`, and a 5-minute wait on the review that prints failed checks |
| `wellplayed deploy --org my-org --app-id <marketplaceAppId>` | Later releases: `updateMarketplaceApp` (slug, visibility, allowed organizations), then the same release steps; bump `releaseVersion` first |
| `wellplayed install --app-id <marketplaceAppId> --org partner-org --grant all` (or `--grant p1 p2`) | `installMarketplaceApp`; pins the listing's current version and fires `LIFECYCLE INSTALL`. `all` grants every permission of the listing manifest; a grant outside `permissions` fails with `MARKETPLACE_INVALID_MANIFEST` |
| `wellplayed pin 1.1.0 --app my-notes --org partner-org --grant organization:emails:send` | `appInstallationPin` to any `APPROVED` version, fires `UPGRADE` (`INSTALL` if nothing was pinned). Approving a release never re-pins existing installations. `--grant` adds the named permissions to the installation's current grants (the CLI reads them first). If the target release no longer requests a granted permission, the pin fails with `MARKETPLACE_INVALID_MANIFEST`; pin through `wellplayed graphql` with the full `grantedPermissions` list then |
| `wellplayed config set MAX_NOTES=5 "WELCOME_TEXT=Leave a note" --app my-notes --org partner-org` | `appInstallationConfigSet`; the value is everything after the first `=`. Resetting a key to its default needs `value: null` through `wellplayed graphql` |

Find ids with `marketplaceApps(filter: { ownedByMe: true }) { nodes { id slug version status } }` and `organizationApps(page: { first: 20 }) { nodes { id name } }`.

### Calling functions

| Caller (request) | Classes matched against `invoker` |
|---|---|
| No token and no guest session | `ANONYMOUS` |
| Account that is a member (or owner) of the organization | `MEMBER`, plus `PLAYER` if it has a player profile there |
| Account with a player profile, not a member | `PLAYER` |
| `x-guest-session` header (with optional `x-acting-player-id`) | `GUEST` |

`appFunctionCall(input: AppFunctionCallInput!)` (mutation) runs any `CALL` function; `appFunctionRead` (query) runs `readOnly` ones only (others answer `NOT_FOUND`). Both are public and accept guests; the `organization-id` header is required. `input.payload` is a JSON string (omitted means `{}`); the result `payload` is a JSON string, null on failure. Function errors never arrive as GraphQL errors: check `status` (`SUCCEEDED` | `FAILED`) and `error`. `idempotencyKey` (`appFunctionCall` only): a success is kept 24 h per function, caller and key and returned again with `replayed: true`; a failure frees the key; a duplicate sent while the first runs gets `IDEMPOTENCY_IN_PROGRESS`. `cacheSeconds` (`appFunctionRead` only): a success is cached per function, caller and payload and returned with `cached: true`.

| `error.kind` | `code` | Meaning |
|---|---|---|
| `APP` | From `wp.error` | `field` and `details` (JSON string) as the function set them; `platformCode` is null |
| `PLATFORM` | Same as `platformCode` | `NOT_FOUND` (app not installed, no pinned release, unknown or non-`CALL` function), `NOT_CONFIGURED` (`field` = config key), `DISABLED`, `INVOKER_NOT_ALLOWED`, `INPUT_INVALID` (`field` = input path), `FORBIDDEN`, `QUOTA_EXCEEDED` and `UNAVAILABLE` (both may set `retryAfterSeconds`), `IDEMPOTENCY_IN_PROGRESS`, `CAUSATION_DEPTH_EXCEEDED`, `LIMIT_EXCEEDED`, `TIMEOUT`, `SCRIPT_ERROR`, `OUTPUT_TOO_LARGE` |

```bash
wellplayed graphql --org my-org --raw-field input.appSlug=my-notes --raw-field input.function=listNotes \
  --raw-field input.payload='{"eventId":"<eventId>"}' \
  'query($input: AppFunctionCallInput!) { appFunctionRead(input: $input) {
    executionId status payload cached error { kind code platformCode message field details retryAfterSeconds } } }'
```

Test a guest call with `wellplayed graphql --guest-session <token>` (see Guests). From code:

```ts
import { createWellPlayedClient, graphql } from "@well-played.gg/typescript-sdk";

const AddNote = graphql(`mutation AddNote($input: AppFunctionCallInput!) {
  appFunctionCall(input: $input) { status payload error { kind code platformCode message field retryAfterSeconds } } }`);

export async function addNote(guestToken: string, eventId: string, text: string, idempotencyKey: string): Promise<string> {
  const headers = (): Record<string, string> => ({ "x-guest-session": guestToken });
  const client = createWellPlayedClient({ organizationId: "<orgShortId>", headers, persistCache: false });
  const { data } = await client.mutate({
    mutation: AddNote,
    variables: { input: { appSlug: "my-notes", function: "addNote", payload: JSON.stringify({ eventId, text }), idempotencyKey } },
  });
  const result = data?.appFunctionCall;
  if (result?.status === "SUCCEEDED") {
    const output: { count: number; eventTitle: string } = JSON.parse(result.payload ?? "{}");
    return `${output.count} notes on ${output.eventTitle}`;
  }
  if (result?.error?.kind === "APP" && result.error.code === "TOO_MANY_NOTES") return "Note limit reached";
  throw new Error(`${result?.error?.code}: ${result?.error?.message}`);
}
```

### Configuration

| Operation | Access | Notes |
|---|---|---|
| `appInstallationPublicConfig(appSlug)` | Public, guests allowed | `public: true` keys only; `[]` when the app is not installed |
| `appInstallationConfig(appSlug)` | `organization:apps:config:view` | Every key |
| `appInstallationConfigSet(appSlug, values: [{ key, value }])` | `organization:apps:config:update` | All or nothing; `value: null` resets to the default; returns every entry |

`AppConfigEntry.value` is the stored raw string (null when unset); show `value ?? defaultValue`. Raw formats: `BOOLEAN` `true`/`false`, `SELECT` one of `options`, `DURATION` seconds or `1d2h30m15s`, `TIME` `HH:MM`, `DATE` `YYYY-MM-DD`, `TIMEZONE` IANA, `STRING_LIST` comma-separated; `min`/`max` and `pattern` apply. A change bumps `MarketplaceAppInstallation.configVersion`, writes `app.config.updated` and fires `LIFECYCLE CONFIG_UPDATED` with `changedKeys`.

```bash
wellplayed graphql --org partner-org -F 'values=[{"key":"MAX_NOTES","value":null}]' \
  'mutation($values: [AppConfigValueInput!]!) { appInstallationConfigSet(appSlug: "my-notes", values: $values) { key value defaultValue } }'
```

### Installations, permissions, listing

| Operation | Access | Notes |
|---|---|---|
| `appFunctionsSetEnabled(appSlug, function, enabled)` | `organization:apps:functions:manage` | `function: null` switches the whole app (`functionsEnabled`), a name toggles one (`disabledFunctions`); disabled calls answer `DISABLED`, disabled hooks and crons do not run |
| `MarketplaceAppInstallation.release`, `configVersion`, `functionsEnabled`, `disabledFunctions` | Existing installation reads | `release.files` lists `{ kind, name, sha256 }` |
| `permissionDefinitions` | Any member | `app:{slug}:{name}` (owner `APP`, with `appSlug`) and `custom:{name}` (owner `ORGANIZATION`) ids of the organization |
| `customPermissionCreate(input: { name, description, resources })`, `customPermissionUpdate(id, input)`, `customPermissionDelete(id)` | `organization:permissions:custom:manage` | Creates `custom:{name}`; delete also strips it from groups, members and attached apps |
| `hasPermissions(checks: [{ permission, resource }])` | Public | At most 100 checks; anonymous callers and guests get `false` everywhere |
| `PublishMarketplaceAppInput` / `UpdateMarketplaceAppInput` `slug`, `visibility`, `allowedOrganizationIds`; `MarketplaceApp.slug`, `visibility`, `allowedOrganizationIds` | Existing listing rules | A `PRIVATE` app is listed and installable only by its owner and the allowed organizations; `allowedOrganizationIds` reads null for anyone but the owner |

Grant `app:` and `custom:` ids to groups or members like catalogue permissions. Config, functions and pin checks use the resource `organization:marketplace:app:{marketplaceAppId}`; pinning needs `organization:marketplace:install`, and the caller must hold every permission it newly grants.

### Hook `EVENT_RESERVATION_VALIDATE`

`input` = `{ hookPoint = "EVENT_RESERVATION_VALIDATE", phase = "START_SESSION" | "VALIDATE", eventId, reservationId, groupId, playerIds, tickets = { { ticketConfigurationId, count } } }`; `ctx.trigger.hookPoint` carries the same string. Every enabled hook of every installation runs in parallel; one `{ allow = false, reason }` makes the platform mutation fail with `APP_HOOK_DENIED` (`extensions.reason`, `extensions.appSlug`). A hook that errors or times out denies with reason `unavailable` under `onError: DENY` and is ignored under `ALLOW`.

### Limits

| Limit | Scope | Default | Max | When reached |
|---|---|---|---|---|
| `APP_FUNCTION_INVOCATIONS` | Organization, per UTC day | 10 000 | 1 000 000 | `QUOTA_EXCEEDED` |
| `APP_FUNCTION_CONCURRENCY` | Organization | 10 | 100 | `QUOTA_EXCEEDED` |
| `APP_EMAILS` | Organization, per day | 5 000 | 200 000 | Sends wait and retry for 24 h, then fail |
| `APP_TIMERS_PENDING` | Organization | 50 000 | 1 000 000 | New schedules are dropped |
| `APP_FUNCTIONS`, `APP_CRONS` | Release | 100, 10 | 100, 50 | The manifest itself refuses more than 100 functions and 10 crons |

### Executions and audit in the journal

`journalEntries` (`organization:journal:view`), primary resource type `MARKETPLACE_APP_INSTALLATION`: `app.function.executed` (`AppFunctionExecutedPayload`, one per run), `app.function.log` (`AppFunctionLogPayload`, child of its run), `app.function.dead_letter`, `app.audit` (`AppAuditPayload { appSlug auditType data ip userAgent callerKind callerId }`, written only when the run succeeds; filter with `types: ["app.audit"]`), `app.config.updated`, `app.installation.pinned`, `app.quota.warning`.

```bash
wellplayed graphql --org partner-org <<'GQL'
query AppRuns {
  journalEntries(page: { first: 20 }, filters: { typePrefix: "app.function.", rootOnly: true }) { nodes { id type createdAt
    payload { ... on AppFunctionExecutedPayload { functionName trigger callerKind status durationMs error { kind code message field } } } } }
}
GQL
```

### GraphQL errors and pitfalls

`APP_SLUG_TAKEN`, `APP_SLUG_REQUIRED` (functions declared, no slug), `MARKETPLACE_APP_NOT_FOUND` (private app outside its organizations, or slug not installed), `APP_RELEASE_FILES_TOO_LARGE`, `APP_RELEASE_NOT_APPROVED`, `APP_PIN_CONSENT_REQUIRED` (`extensions.addedPermissions`: pin again with `--grant`), `MARKETPLACE_INSTALLATION_NOT_FOUND`, `APP_CONFIG_INVALID` (`extensions.key`), `CONFLICT` (concurrent config change, retry), `APP_HOOK_DENIED`, `PERMISSION_DEFINITION_CONFLICT`, `INVALID_PERMISSION` (unknown or app-owned id), `BAD_REQUEST` (over 100 checks, undeclared function name, duplicate release file).

- A failed run (including `wp.error`) drops its queued e-mails, timers and audit entries, but `wp.store` writes and `wp.op` mutations already made stay: check first, write last, or use `cas`. A retried event, timer or call runs as a new execution, so give every `wp.op` mutation that creates something an `idempotencyKey`: the retry then gets the first result instead of a second object.
- `EVENT` functions get retried, so make them idempotent (store markers with `ifAbsent`).
- `payload` is a string: `JSON.stringify` it in code, `--raw-field` it in the CLI (`-F` parses a `{...}` literal into an object).

## Guests, magic links and guardians

A guest is a player profile of the organization with no WellPlayed account. It authenticates with a guest session token in the `x-guest-session` header instead of an OAuth bearer token. Guests come from self entry (`guestEnter`), from staff or apps (`guestProfileCreate`), or from another guest as a ward (`guestWardCreate`). Every guest counts against the organization limit `ANONYMOUS_PLAYER_PROFILES` (read it with `organizationLimits(limits: [ANONYMOUS_PLAYER_PROFILES])`; a full limit returns `LIMIT_REACHED`), and every new guest fires the `PLAYER_CREATED` webhook.

### Permissions

| Permission | Resource pattern | Grants |
|---|---|---|
| `organization:guests:view` | `organization:player:{player_id}:guest` | Read `email`, `firstName`, `lastName` of a guest |
| `organization:guests:manage` | `organization:player:{player_id}:guest` | `guestProfileCreate` (whole pattern only), `guestProfileUpdate`, `guestGuardianLinkCreate` / `guestGuardianLinkDelete` (resource = the ward), `guestSessionsRevoke` |
| `organization:guests:links:create` | `organization:player:{player_id}:guest:link` | `guestLinkCreate`, `guestLinkRevoke` (revoking by `id` needs the whole pattern) |
| `organization:guests:configure` | none | `guestConfiguration`, `guestConfigurationUpdate` |
| `organization:moderation:manage` | none | `organizationModeration`, `organizationModerationUpdate` |
| `organization:moderation:check` | none | `moderationCheck` (tests texts without reading the lists) |

A link token opens a session as that guest, so treat `organization:guests:links:create` like a credential-issuing right: grant it to the backend or staff that send links, not to players.

### Configuration

| `GuestConfiguration` field | Default | Accepted | Effect |
|---|---|---|---|
| `selfEntry: GuestSelfEntryMode!` | `DISABLED` | `DISABLED`, `TRUSTED_PARAMS` | `TRUSTED_PARAMS` opens `guestEnter` |
| `sessionTtlMinutes: Int!` | `120` | 5 to 1440 | Lifetime of each new session |
| `maxWardsPerGuardian: Int!` | `3` | 0 to 10 | Cap checked by `guestWardCreate` |

`guestConfigurationUpdate` changes only the fields you pass; out-of-range values return `BAD_REQUEST`. A new TTL applies to sessions opened afterwards.

```bash
wellplayed graphql --org my-org -F input.selfEntry=TRUSTED_PARAMS -F input.sessionTtlMinutes=240 \
  'mutation($input: GuestConfigurationInput!) {
    guestConfigurationUpdate(input: $input) { selfEntry sessionTtlMinutes maxWardsPerGuardian }
  }'
```

### Guest headers and what a guest may call

| Header | Value | Rules |
|---|---|---|
| `organization-id` | Organization short id | Required, as for every organization call |
| `x-guest-session` | `wpgs_...` token from `guestEnter` or `guestLinkExchange` | Never together with `authorization`, `x-module-token` or `x-function-token`: `BAD_REQUEST` |
| `x-acting-player-id` | Player id of a ward | Needs `x-guest-session` (`BAD_REQUEST` otherwise) and a guardian link from the session player to that ward (`GUEST_NOT_GUARDIAN`); a malformed id is `BAD_REQUEST` |

| Operation called with `x-guest-session` | Result |
|---|---|
| Guest-enabled (list below) | Session checked (`GUEST_SESSION_INVALID` when unknown, expired or revoked); runs as the acting player with the permissions of the organization's CONNECTED group |
| Other public operations (`guestEnter`, `guestLinkResolve`, `guestLinkExchange`, ...) | Session ignored; runs as an anonymous caller |
| Anything else | `GUEST_NOT_ALLOWED` |

Guest-enabled operations: `guestMe`, `guestSessionEnd`, `guestWardCreate`, `guestWardRemove`, `userGroupUpdateName`, `event` (with `myReservation`), `eventSlots`, `eventReservationsMyReservations`, `eventReservationStartRegistrationSession`, `eventReservationUpdateTickets`, `eventReservationChangeTickets`, `eventReservationReleaseTickets`, `eventReservationValidateAndPay`, `eventReservationConfirmPresence`, `eventReservationCancel`, `eventWaitlistJoin`, `eventWaitlistLeave`, `myWaitlistEntries`, `myActiveRegistrations`, `customFieldValues`, `customFieldValuesBatch`, `setCustomFieldValues`, `appFunctionRead`, `appFunctionCall`, `appInstallationPublicConfig`. For custom fields a guest owns its own `PlayerProfile` and its `TournamentTeamMember` / `UserGroupMember` rows, so it can write their `ALWAYS` and first-time `ONE_TIME` fields.

### Self entry: `guestEnter`

`guestEnter(input: { email, firstName, lastName })` is public: it needs only `organization-id`, and `selfEntry` must be `TRUSTED_PARAMS` (else `GUEST_SELF_ENTRY_DISABLED`). Values are trimmed; names take 1 to 100 characters, the e-mail up to 320 (`BAD_REQUEST`).

- The e-mail is matched case-insensitively against every guest that has one (self-entered, invited or admin-created). On a match, the same guest is reused and a new session opens; earlier sessions stay valid. The latest trusted values win by design: the first and last name are overwritten with the new ones.
- No match creates a guest with `origin: ENTRY` (`LIMIT_REACHED` when `ANONYMOUS_PLAYER_PROFILES` is full).
- There is no e-mail verification: anyone who calls `guestEnter` with an e-mail gets a session for that guest. Enable `TRUSTED_PARAMS` only when the entry values come from a source that already identified the person (for example a host page that passes them in the URL of an embedded app), never from a free-text form.

```bash
wellplayed graphql --org my-org \
  -F input.email=jane@example.com -F input.firstName=Jane -F input.lastName=Doe \
  'mutation($input: GuestEnterInput!) { guestEnter(input: $input) { token playerId origin expiresAt } }'
```

### Sessions

`GuestSession` returns `token` (only here, never again), `playerId`, `origin` (`ENTRY` or `LINK`), `expiresAt` and `link` (`GuestLinkContext`, set for `LINK`).

- `expiresAt` is the open time plus `sessionTtlMinutes`, capped by the link's `expiresAt` for a `LINK` session. Requests do not extend it: on `GUEST_SESSION_INVALID`, open a new session.
- `guestMe` returns `sessionPlayerId`, `actingPlayerId`, `origin`, `expiresAt`, `link`, `profile` and `wards`, contact fields included. Called without a guest session it returns `GUEST_SESSION_INVALID`.
- `guestSessionEnd` revokes the current session (`true`); without a guest session it returns `false`.
- `guestSessionsRevoke(playerId)` (staff) revokes every live session of a guest and returns the count.
- Revoking a link (`guestLinkRevoke`, or `revokePrevious` on a new link) also ends the sessions opened from it.
- Sessions and links are deleted 30 days after they expire; a purged link token resolves as `INVALID`.

From the terminal, `--guest-session` sends the token in `x-guest-session` and drops your login token (`-H "x-guest-session: ..."` alone is refused with `BAD_REQUEST`, since the CLI also sends `Authorization`):

```bash
wellplayed graphql --org my-org --guest-session "$GUEST_TOKEN" \
  'query { guestMe { sessionPlayerId actingPlayerId expiresAt profile { firstName } } }'
```

Add `-H "x-acting-player-id: <wardPlayerId>"` to act for a ward.

In TypeScript, give `createWellPlayedClient` a `headers` callback and no `token` (a `token` adds `authorization`, and every guest call then fails with `BAD_REQUEST`):

```ts
import { createWellPlayedClient, graphql } from "@well-played.gg/typescript-sdk";

const GUEST_LINK_RESOLVE = graphql(`
  query GuestLinkResolve($token: String!) {
    guestLinkResolve(token: $token) { status purpose firstName data }
  }
`);
const GUEST_LINK_EXCHANGE = graphql(`
  mutation GuestLinkExchange($token: String!) {
    guestLinkExchange(token: $token) { token playerId expiresAt link { purpose data } }
  }
`);
const GUEST_ME = graphql(`
  query GuestMe {
    guestMe { sessionPlayerId actingPlayerId wards { playerId firstName } }
  }
`);

let guestToken: string | undefined;
let actingWardId: string | undefined;

const client = createWellPlayedClient({
  organizationId: "my-org",
  persistCache: false,
  headers: () => ({
    "x-guest-session": guestToken,
    "x-acting-player-id": guestToken && actingWardId,
  }),
});

export async function openFromLink(linkToken: string): Promise<void> {
  const { data: view } = await client.query({
    query: GUEST_LINK_RESOLVE,
    variables: { token: linkToken },
  });
  if (view?.guestLinkResolve.status !== "VALID") {
    throw new Error(view?.guestLinkResolve.status ?? "INVALID");
  }
  const { data, errors } = await client.mutate({
    mutation: GUEST_LINK_EXCHANGE,
    variables: { token: linkToken },
  });
  if (!data) {
    throw new Error(String(errors?.[0]?.extensions?.status ?? errors?.[0]?.extensions?.code));
  }
  guestToken = data.guestLinkExchange.token;
  const { data: me } = await client.query({ query: GUEST_ME });
  actingWardId = me?.guestMe.wards[0]?.playerId;
}
```

Guest headers ride on HTTP operations only; the SDK's websocket link does not send them.

### Magic links

1. Staff or your backend calls `guestLinkCreate`, which returns `{ id, token, expiresAt }`. The token is returned once; keep the `id` to revoke later.
2. Your app builds the URL (for example `https://app.example.com/join?token=<token>`) and sends it. The API neither builds link URLs nor sends them.
3. The landing page calls `guestLinkResolve(token)` (public, never consumes) to pick the screen, then `guestLinkExchange(token)` (public, consumes one use) when the user acts. The new session has `origin: LINK` and `link { id purpose data expiresAt }`.

| `GuestLinkCreateInput` field | Rule (`BAD_REQUEST` otherwise) |
|---|---|
| `playerId: ID!` | A guest of the organization |
| `purpose: String!` | `^[a-z0-9][a-z0-9._-]{0,63}$`, e.g. `team-invite` |
| `expiresAt: DateTime!` | In the future, at most 90 days ahead |
| `maxUses: PositiveInt` | Omitted = unlimited; each exchange uses one |
| `data: String` | JSON string, at most 4096 bytes, default `{}`; returned by resolve (`VALID` only), by the exchange and by `guestMe.link` |
| `revokePrevious: Boolean! = false` | `true` revokes the guest's live links with the same `purpose` (and their sessions) first |

| `GuestLinkStatus` | Meaning | `purpose`, `expiresAt` | `firstName`, `data` |
|---|---|---|---|
| `VALID` | Usable | Set | Set |
| `REVOKED` | Revoked (checked first) | Set | `null` |
| `EXPIRED` | Past `expiresAt` | Set | `null` |
| `EXHAUSTED` | `maxUses` reached | Set | `null` |
| `INVALID` | Unknown token or another organization | `null` | `null` |

`guestLinkExchange` on an unusable link returns `GUEST_LINK_INVALID` with `extensions.status` set to `EXPIRED`, `REVOKED`, `EXHAUSTED` or `INVALID`. `guestLinkRevoke(input)` takes `{ id }`, or `{ playerId, purpose }` (no `purpose` = every link of that guest), returns the number revoked, and needs `id` or `playerId` (`BAD_REQUEST`).

```bash
wellplayed graphql --org my-org \
  -F input.playerId=<guestPlayerId> -F input.purpose=team-invite \
  -F input.expiresAt=2027-01-31T23:00:00Z -F input.maxUses=1 -F input.revokePrevious=true \
  --raw-field 'input.data={"reservationId":"<reservationId>"}' \
  'mutation($input: GuestLinkCreateInput!) { guestLinkCreate(input: $input) { id token expiresAt } }'
```

### Guardians and wards

- `guestWardCreate(input: { firstName, lastName })` (guest session) creates a guest with `origin: GUARDIAN` and no e-mail, and makes the session player its guardian. When the session player already has `maxWardsPerGuardian` wards (staff-created links count), it returns `GUEST_WARD_LIMIT_REACHED` with `extensions.max`.
- `guestWardRemove(wardPlayerId)` removes the guardian link (`GUEST_NOT_GUARDIAN` when there is none). A `GUARDIAN`-origin ward left with no guardian is deleted (`PLAYER_DELETED` webhook).
- Both act on the session player and ignore `x-acting-player-id`; without a guest session they return `GUEST_SESSION_INVALID`.
- To act for a ward, send `x-acting-player-id: <wardPlayerId>` with the guardian's session: guest-enabled operations then run as the ward (book, confirm presence, set its custom fields), and `guestMe.actingPlayerId` shows the ward. A ward cannot act for its guardian.
- Staff: `guestGuardianLinkCreate(guardianPlayerId, wardPlayerId)` is idempotent, accepts any player of the organization as guardian, needs a guest as ward (`GUEST_PROFILE_NOT_FOUND`), refuses a guest as its own guardian (`BAD_REQUEST`) and does not check `maxWardsPerGuardian`. `guestGuardianLinkDelete(id)` returns `false` for an unknown id and never deletes the ward.

### Staff-created guests and contact data

- `guestProfileCreate(input)`: `origin` is `INVITED` or `ADMIN` (default `ADMIN`; others are `BAD_REQUEST`). With an `email`, it returns the existing guest with that e-mail unchanged (`created: false`) or creates one; without an `email`, it always creates. `guardianPlayerId` also adds a guardian link (`GUEST_PROFILE_NOT_FOUND` when not a player of the organization).
- `guestProfileUpdate(playerId, input)`: omitted fields stay; an empty name clears it; `clearEmail: true` removes the e-mail (combined with `email`: `BAD_REQUEST`); an e-mail used by another guest is `CONFLICT`; an unknown guest is `GUEST_PROFILE_NOT_FOUND`.
- Contact rule: `GuestProfile.email`, `firstName` and `lastName` are `null` unless the caller is the guest, one of its guardians, or holds `organization:guests:view` on `organization:player:{player_id}:guest`. `Player.guest` is `null` for players who are not guests and for callers who cannot see the contact data. A caller with `manage` but not `view` gets `null` contact fields back from its own mutations.

```bash
wellplayed graphql --org my-org -F input.email=parent@example.com -F input.firstName=Sam -F input.origin=INVITED \
  'mutation($input: GuestProfileCreateInput!) {
    guestProfileCreate(input: $input) { created profile { playerId email origin wardPlayerIds } }
  }'
```

### Moderation

- `organizationModerationUpdate(input: { blockedWords, blockedSubstrings })` replaces both lists (pass both). Each list holds at most 5000 entries of 1 to 64 characters with at least one letter; entries equal after normalisation are merged. Violations return `BAD_REQUEST` with `extensions.field`.
- Matching ignores case and accents, folds `0 1 3 4 5 7 @ $ !` to `o i e a s t a s i`, collapses repeated letters and joins spaced-out letters. `blockedWords` match whole words or phrases; `blockedSubstrings` match anywhere once non-letters are removed, so a short substring also blocks longer innocent words.
- Applied to: user group names (`userGroupUpdateName`, `groupName` at booking), tournament team names (`registerTournamentTeam`, `updateTournamentTeam`), and values of custom fields whose definition has `moderated: true` (`CreateCustomFieldDefinitionInput` / `UpdateCustomFieldDefinitionInput`, read on `CustomFieldDefinitionModel.moderated`).
- A refused text returns `CONTENT_NOT_ALLOWED` with `extensions.field` (`name` for group and team names, the custom field key otherwise). The matched term is never returned.
- `moderationCheck(inputs: [{ key, value }])` returns `[{ key, allowed }]` in input order, for at most 20 inputs of 4096 characters (`BAD_REQUEST`). Guests cannot call it (`GUEST_NOT_ALLOWED`); a guest UI relies on `CONTENT_NOT_ALLOWED` from the write.

```bash
wellplayed graphql --org my-org -F 'input.blockedWords=["badword"]' -F 'input.blockedSubstrings=["spam"]' \
  'mutation($input: OrganizationModerationInput!) {
    organizationModerationUpdate(input: $input) { blockedWords blockedSubstrings updatedAt }
  }'

wellplayed graphql --org my-org -F 'inputs=[{"key":"teamName","value":"The B4dword Crew"}]' \
  'query($inputs: [ModerationCheckInput!]!) { moderationCheck(inputs: $inputs) { key allowed } }'
```

### Group names

- `UserGroup.name` is optional. `userGroupUpdateName(groupId, name)` sets it; `null` or a blank name clears it. Allowed to the group manager (guest sessions included) or to a holder of `organization:user-groups:manage` on `organization:event:{event_id}:user-group:{user_group_id}`; others get `USER_GROUP_NOT_MANAGER`. A locked group returns `USER_GROUP_LOCKED`, for staff too.
- The trimmed name must hold between `nameMinLength` (default 1) and `nameMaxLength` (default 100) characters of the event's `groupConfiguration` (`UserGroupConfiguration`, set through `EventConfigurationInput.groupConfiguration`), else `USER_GROUP_NAME_INVALID` with `extensions.min` and `extensions.max`; then moderation applies.
- At booking time, pass `groupName` in `EventReservationRegisterTicketsInput` (`eventReservationStartRegistrationSession`) or to `eventReservationCreate(eventId, groupName)`; read it back on `EventReservation.groupName`.

### Errors

| Code | Extensions | When |
|---|---|---|
| `GUEST_SESSION_INVALID` | - | Session unknown, expired or revoked; guest-only operation without a session |
| `GUEST_NOT_ALLOWED` | - | Operation not open to guests |
| `GUEST_NOT_GUARDIAN` | - | `x-acting-player-id` or `guestWardRemove` without a guardian link |
| `GUEST_SELF_ENTRY_DISABLED` | - | `guestEnter` while `selfEntry` is `DISABLED` |
| `GUEST_LINK_INVALID` | `status` | `guestLinkExchange` on an unusable link |
| `GUEST_WARD_LIMIT_REACHED` | `max` | `guestWardCreate` over `maxWardsPerGuardian` |
| `GUEST_PROFILE_NOT_FOUND` | - | Unknown guest or guardian in staff operations |
| `LIMIT_REACHED` | - | `ANONYMOUS_PLAYER_PROFILES` full |
| `CONFLICT` | - | E-mail already used by another guest |
| `CONTENT_NOT_ALLOWED` | `field` | Text refused by the moderation lists |
| `USER_GROUP_NAME_INVALID` | `min`, `max` | Group name length out of bounds |
| `USER_GROUP_LOCKED` | - | Renaming a locked group |
| `BAD_REQUEST` | `field` (moderation lists) | Header conflicts, input validation |

### Pitfalls

- Call `guestLinkExchange` only on a user action (button), never on page load: mail scanners and link previews open URLs, and each exchange spends a use of a `maxUses: 1` link.
- Show the reason from `guestLinkResolve` or from `extensions.status`; do not treat every failure as "expired".
- Store the session token for the tab only (session storage or memory); it is a bearer credential for the guest and its wards.
- `guestEnter` with an existing e-mail overwrites that guest's names, including a staff-created guest's: the latest trusted values win.

## Booking: slots, waitlists and registration series

Events sell time slots: each `EventTicketConfiguration` can carry a start, an end and a state, so one event per venue and day can hold many slots. On top of slots the platform adds bulk calendar generation, self-service changes of validated reservations, per-slot waitlists with automatic offers, registration series (one active registration at a time across a set of events and tournaments) and an automatic event-to-tournament link.

### Time slots

New fields on `EventTicketConfiguration` (also accepted by `eventTicketConfigurationCreate` / `eventTicketConfigurationUpdate`, except the two computed ones):

| Field | Meaning |
|---|---|
| `startsAt`, `endsAt` | Slot window (`DateTime`, nullable). `endsAt` must be after `startsAt` (`BAD_REQUEST`) |
| `state: EventSlotState!` | Set by the organizer: `OPEN` (default), `CLOSED`, `BLOCKED`. `CLOSED` and `BLOCKED` both refuse new seats and waitlist offers; the difference is yours to show |
| `stateReason` | Text shown to players for a closed or blocked slot |
| `tournamentId` | Tournament of this slot, overriding `Event.tournamentId` |
| `freeCount: Int!` | Computed: `maxCount - currentCount`, never negative. Seats held by unvalidated sessions and waitlist offers are not free |
| `effectiveState: EventSlotEffectiveState!` | Computed at request time: `state`, or `PAST` once `startsAt <= now` on an `OPEN` slot |

`eventSlots(filter: EventSlotsFilter!)` lists slots ordered by `startsAt`. It is public: anonymous callers, logged-in players and guest sessions can call it (it needs `organization:event:ticket-configuration:view`, granted to the anonymous group by default). The filter needs at least one of `eventIds`, `venueIds`, `from`, `to` (`from`/`to` apply to `startsAt`, `to` exclusive); `onlyReservable: true` keeps open, buyable, not started slots with free seats. No filter, or more than 1000 matching slots, fails with `BAD_REQUEST`. Slots of events whose `visibleAt` is unset or in the future are hidden unless the caller holds `organization:events:list:not_visible`.

```bash
wellplayed graphql --org my-org \
  -F 'filter={"venueIds":["<venueId>"],"from":"2027-03-06T00:00:00+01:00","to":"2027-03-07T00:00:00+01:00"}' \
  'query($filter: EventSlotsFilter!) {
    eventSlots(filter: $filter) { id eventId name startsAt endsAt freeCount effectiveState stateReason }
  }'
```

Writing slots: lowering `maxCount` under `currentCount` fails with `EVENT_TICKET_CAPACITY_BELOW_RESERVED`; a priced slot needs payment collection configured (`BAD_CONFIGURATION`; free events no longer need it). Raising `maxCount` or reopening a slot (`state` back to `OPEN`) triggers waitlist offers.

Related changes: `EventVenue.timezone` (IANA name such as `Europe/Paris`, default `UTC`, set through `eventVenueCreate` / `eventVenueUpdate`, `EVENT_VENUE_INVALID_TIMEZONE` otherwise) drives calendar times and same-day offer windows. `events(query: EventsQuery)` gains `venueIds`, `from` (events ending after), `to` (events starting before), `tournamentId` and `registrationSeriesId`.

### Generating a calendar

`eventCalendarGenerate(input: EventCalendarGenerateInput!)` creates one event per venue and local date, and one slot per start time from `firstStartTime` to `lastStartTime` every `intervalMinutes` (venue timezone). It is idempotent: events and slots that already exist are left untouched and counted in `existingEventCount` / `existingSlotCount`, so re-running the same input is safe (to edit existing ones use `eventUpdate` / `eventTicketConfigurationUpdate`). In `titlePattern`, `{date}` becomes the local date; in `namePattern` (default `{start}`), `{start}` becomes the local start time. `days[].slots` overrides the shared template for one day; `days[].tournamentId` links that day's event; `registrationSeriesId` assigns every event. The event `startAt`/`endAt` come from the first and last slot. Caps: 64 days per call, 20 slots per day (`EVENT_CALENDAR_INVALID_TEMPLATE` also covers non-`HH:mm` times, last before first, interval or duration not positive). Each day commits on its own: on an error, days already done stay created; fix the input and run it again.

```bash
cat > calendar.json <<'JSON'
{ "input": {
  "registrationSeriesId": "<seriesId>",
  "days": [{ "venueId": "<venueId>", "date": "2027-03-06", "tournamentId": "<tournamentId>" },
           { "venueId": "<venueId>", "date": "2027-03-07" }],
  "slots": { "firstStartTime": "10:00", "lastStartTime": "16:00", "intervalMinutes": 60,
             "durationMinutes": 45, "maxCount": 8, "price": 0, "currency": "EUR", "namePattern": "Session {start}" },
  "event": { "titlePattern": "Open play {date}", "description": "Drop-in sessions",
             "visibleAt": "2027-02-01T09:00:00Z",
             "configuration": { "maxTicketsPerReservation": 3, "allowForMoreTicketsThanGroupMembers": true } }
} }
JSON
wellplayed graphql --org my-org --variables ./calendar.json \
  'mutation($input: EventCalendarGenerateInput!) {
    eventCalendarGenerate(input: $input) {
      createdEventCount existingEventCount createdSlotCount existingSlotCount
      events { id title startAt endAt }
    }
  }'
```

### Self-service and waitlist settings

Two new blocks in `EventConfiguration` / `EventConfigurationInput`. `eventUpdate` deep-merges `configuration` into the stored one (arrays are replaced).

| Key | Default | Meaning |
|---|---|---|
| `selfService.allowCancel` (required in input) | `false` | The manager may cancel a validated free reservation |
| `selfService.allowChange` (required in input) | `false` | The manager may move a validated free reservation with `eventReservationChangeTickets` |
| `selfService.cutoffSeconds` | `0` | Self-service (cancel, change, release) closes this many seconds before the earliest slot start of the reservation |
| `selfService.changeScope` | `SAME_EVENT` | Allowed move targets: `SAME_EVENT`, `SAME_VENUE` (any event of the same venue), `SAME_SERIES` (any event of the same registration series) |
| `waitlist.enabled` (required in input) | `false` | Players may join the waitlist of a full slot |
| `waitlist.offerDurationSeconds` | `86400` | How long an offer holds the seats |
| `waitlist.sameDayOfferDurationSeconds` | `offerDurationSeconds` | Offer window when the offer is made on the slot's local day (venue timezone) |
| `waitlist.maxQuantity` | `maxTicketsPerReservation` | Most seats one entry may ask for (never more than the slot `maxCount`) |

An offer never outlives the slot start.

```bash
wellplayed graphql --org my-org -F id=<eventId> \
  -F 'input={"configuration":{"selfService":{"allowCancel":true,"allowChange":true,"cutoffSeconds":7200,"changeScope":"SAME_VENUE"},"waitlist":{"enabled":true,"offerDurationSeconds":43200,"sameDayOfferDurationSeconds":3600}}}' \
  'mutation($id: ID!, $input: EventUpdateInput!) {
    eventUpdate(id: $id, input: $input) { id configuration { selfService { allowChange changeScope } waitlist { enabled } } }
  }'
```

### Changing a validated reservation

| Operation | Effect |
|---|---|
| `eventReservationChangeTickets(reservationId, input: { targetEventId?, tickets })` | Moves a validated free reservation to other slots of the same event or of `targetEventId` (within `changeScope`). Group, teammates and untouched tickets are kept |
| `eventReservationReleaseTickets(reservationId, reservationTicketIds)` | Releases unassigned tickets (`groupMemberId: null`) of a validated reservation; at least one ticket must remain |
| `eventReservationCancel(reservationId)` | Unchanged for unvalidated sessions. A validated reservation can be cancelled only if free (`EVENT_RESERVATION_ALREADY_PAID` otherwise, staff included); the manager also needs `selfService.allowCancel` and must be before the cutoff |

`tickets` is the complete wanted state, applied as a per-configuration delta: `quantity` is the total for that configuration (1 to 20 entries); a configuration left out is released; a configuration whose total does not change keeps its tickets as they are (same ids, assignments and QR codes); an increase reserves only the extra seats (`EVENT_TICKET_FULL`, `EVENT_SLOT_CLOSED`, `EVENT_SLOT_STARTED`); a decrease releases unassigned tickets first. Members whose tickets are released move, in order, to the tickets the same call adds; `EVENT_RESERVATION_TICKET_ASSIGNED` is raised only when fewer tickets are added than members displaced. Totals identical to the current ones return the reservation unchanged, with no webhook. This also lets a validated reservation get a seat back on its own slot. Only free reservations move (`EVENT_RESERVATION_NOT_FREE` if the reservation or a target slot is priced); moving to another event also requires that no member is already registered there and that the group still fits that event's group configuration (`USER_GROUP_INVALID`).

Who may call: the reservation manager (holding `organization:event:registration:register` on the target event), or staff with `organization:event:registration:update` on `organization:event:{eventId}:registration:{reservationId}`. Staff skip `allowCancel`/`allowChange`, the cutoff and, on a change, the slot state and `buyable` checks, but not capacity, `changeScope` or the series limits.

Player apps usually run these calls on a guest session:

```ts
import { createWellPlayedClient, graphql } from "@well-played.gg/typescript-sdk";

const client = createWellPlayedClient({
  organizationId: "my-org",
  headers: () => ({ "x-guest-session": guestToken }),
  persistCache: false,
});

const ChangeTickets = graphql(`
  mutation ChangeTickets($reservationId: ID!, $input: EventReservationChangeTicketsInput!) {
    eventReservationChangeTickets(reservationId: $reservationId, input: $input) {
      id eventId tickets { id ticketId groupMemberId }
    }
  }
`);

await client.mutate({
  mutation: ChangeTickets,
  variables: {
    reservationId,
    input: { tickets: [{ ticketConfigurationId: newSlotId, quantity: 3, reservedSeats: [] }] },
  },
});
```

`groupName` (team name) can now be set at creation: `eventReservationStartRegistrationSession(eventId, input: { tickets, groupName })` and `eventReservationCreate(eventId, groupName)`; it is checked against the event `groupConfiguration.nameMinLength` / `nameMaxLength` (`USER_GROUP_NAME_INVALID`) and moderation (`CONTENT_NOT_ALLOWED`), and read back as `EventReservation.groupName`.

Group lock: from `eventReservationValidateAndPay` on, the reservation's group is locked. Players then get `USER_GROUP_LOCKED` when they invite, accept or decline an invite, or remove a member, so teammates must accept before validation; staff holding `organization:user-groups:manage` on `organization:event:{eventId}:user-group:{groupId}` can still add members (directly `ACCEPTED`) and remove them. A member added to a validated reservation takes an unassigned ticket (`EVENT_RESERVATION_NO_FREE_TICKET` if none, release or add one first); a member removed leaves an unassigned ticket. Renaming a group (`userGroupUpdateName`) is documented with guests.

### Waitlist

| Operation | Who |
|---|---|
| `eventWaitlistJoin(ticketConfigurationId, quantity, replaceEntryId)` | Player or guest, `organization:event:registration:register` on the event. Only when `waitlist.enabled` and the slot lacks `quantity` free seats (`EVENT_WAITLIST_SEATS_AVAILABLE` otherwise: reserve directly). `replaceEntryId` ends one of the caller's entries (reason `REPLACED`) in the same call, also on the same slot to change `quantity` |
| `eventWaitlistLeave(entryId)` | The entry's player; an offered entry releases its seats at once |
| `myWaitlistEntries(eventIds, activeOnly = true)` | Caller's entries; active means `WAITING` or `OFFERED` |
| `eventWaitlistEntries(eventId, ticketConfigurationId, statuses, page)` | Staff, `organization:event:waitlist:view`, queue order |
| `eventWaitlistRemoveEntry(entryId)` | Staff, `organization:event:waitlist:manage` (reason `REMOVED`) |

| Status | Meaning |
|---|---|
| `WAITING` | In the queue; `position` is 1 for the next entry (null for other statuses) |
| `OFFERED` | Seats are held for the player in reservation `offerReservationId` until `offerExpiresAt` |
| `ACCEPTED` | The offered reservation was validated |
| `EXPIRED` | `endedReason: OFFER_EXPIRED` (offer timed out or its reservation was cancelled) or `SLOT_CLOSED` (the slot started while waiting) |
| `LEFT` | `endedReason`: `LEFT`, `REMOVED`, `REPLACED`, `REGISTERED_ELSEWHERE` (registered in the same series, or the series limit refused the offer), `ALREADY_REGISTERED` (already holds a reservation on the event) |

Offers are automatic. A few seconds after seats free up (cancel, release, change, expired session, capacity raised, slot reopened), and from a sweep every minute, the queue of an `OPEN`, buyable, not started slot is walked in join order: every `WAITING` entry whose `quantity` fits the free seats gets an offer (larger entries are skipped, not blocking). The offer is a registration session (`PENDING` reservation of the player, with the seats reserved) whose `sessionValidUntil` equals `offerExpiresAt`. To accept, the player validates it the usual way before it expires: `eventReservationValidateAndPay(eventId, options: {})` (returns `null` for a free reservation, a payment URL otherwise). To decline, call `eventWaitlistLeave`. When the offer expires the seats go to the next entry.

```bash
wellplayed graphql --org my-org -F ticketConfigurationId=<slotId> -F quantity=2 \
  'mutation($ticketConfigurationId: ID!, $quantity: Int!) {
    eventWaitlistJoin(ticketConfigurationId: $ticketConfigurationId, quantity: $quantity) { id status position }
  }'
wellplayed graphql --org my-org -F eventId=<eventId> \
  'mutation($eventId: ID!) { eventReservationValidateAndPay(eventId: $eventId, options: {}) { paymentUrl } }'
```

### Registration series

A `RegistrationSeries` caps how many registrations a player holds at once across its events and tournaments. Assign them with `registrationSeriesAssign(seriesId, eventIds, tournamentIds)` (`seriesId: null` removes them from their series), or with `eventCalendarGenerate(registrationSeriesId)`. Read `Event.registrationSeriesId` / `Tournament.registrationSeriesId`. Deleting a series detaches its events and tournaments.

| Field | Default | Meaning |
|---|---|---|
| `maxActiveRegistrations` | `1` (min 1) | Active registrations a player may hold in the series |
| `maxActiveWaitlistEntries` | none | Active waitlist entries (`WAITING`, `OFFERED`) a player may hold in the series |
| `allowWaitlistWhileRegistered` | `false` | When false, a player with an active registration cannot join a waitlist of the series |
| `leaveWaitlistsOnRegistration` | `true` | Validating a reservation ends the members' other waitlist entries in the series (`REGISTERED_ELSEWHERE`) |
| `releasePolicy` | `SLOT_END` | When a registration stops counting: `SLOT_END` (last slot ended), `SLOT_START` (first slot started), `NEVER` |

An active registration is a reservation in session or validated on an event of the series where the player is an accepted or invited member, or a tournament team (not created from a reservation) in a tournament of the series. It is checked when a session starts, a teammate is invited or accepts, a reservation moves to another event, a waitlist offer opens and a tournament team registers; refusal is `REGISTRATION_SERIES_LIMIT_REACHED`. Starting a session on another event of the series silently releases the caller's own unfinished session (not a waitlist offer) elsewhere in the series.

To swap a validated reservation for one on another event, start a session with `replaceReservationId`: the old reservation does not count while the new session runs, and it is cancelled (`cancelReason: REPLACED`) when the new one is validated. If the session expires, the old one stays. The old reservation must be validated, managed by the caller (`REGISTRATION_SERIES_REPLACE_NOT_ALLOWED`) and cancellable by its manager (free, `allowCancel`, before cutoff). It shows on the new reservation as `replacesReservationId`. On the same event it fails with `EVENT_ALREADY_IN_A_REGISTRATION_FOR_THIS_EVENT`: use `eventReservationChangeTickets`.

`myActiveRegistrations(seriesId)` (player or guest) and `registrationSeriesPlayerEntries(seriesId, playerId)` (staff) return what counts: `RegistrationSeriesEntry` with `kind` (`EVENT_RESERVATION`, `WAITLIST_ENTRY`, `TOURNAMENT_TEAM`), `status`, `isManager`, ids and the `startsAt`/`endsAt` window.

```bash
wellplayed graphql --org my-org -F input.name="Spring tour" -F input.maxActiveWaitlistEntries=1 \
  'mutation($input: RegistrationSeriesCreateInput!) { registrationSeriesCreate(input: $input) { id releasePolicy } }'
wellplayed graphql --org my-org -F seriesId=<seriesId> -F 'eventIds=["<eventId>"]' -F 'tournamentIds=["<tournamentId>"]' \
  'mutation($seriesId: ID, $eventIds: [ID!], $tournamentIds: [ID!]) {
    registrationSeriesAssign(seriesId: $seriesId, eventIds: $eventIds, tournamentIds: $tournamentIds)
  }'
```

### Event-tournament link

Set `tournamentId` on `eventCreate` / `eventUpdate` (needs `organization:tournament:view` on it) or on a slot. When a reservation is validated, the platform creates one `TournamentTeam` per tournament its tickets point to: name from `groupName` (or the manager's username), tag from its first 4 letters or digits, manager and accepted members from the group, `eventReservationId` set. It then keeps it in sync: reservation status maps to team status (`REGISTERED`, `CONFIRMED`, `PRESENCE_CONFIRMATION_PENDING` to `AWAITING_FOR_PRESENCE_CONFIRMATION`, `NOT_ATTENDING`), cancel withdraws the team, a move withdraws and unlinks teams of tournaments no longer targeted and creates the new ones, group member and name changes follow. The tournament team limit applies (`LIMIT_REACHED` refuses the validation). Read the link both ways with `EventReservation.tournamentTeamIds` and `TournamentTeam.eventReservationId`. Changing the tournament of an event or slot that already has validated reservations fails with `EVENT_TOURNAMENT_LINK_LOCKED`.

### Permissions

| Operation | Permission (resource) |
|---|---|
| `eventSlots` | `organization:event:ticket-configuration:view` (anonymous by default) |
| `eventCalendarGenerate` | `organization:event:create` + `organization:event:ticket-configuration:create`, + `organization:tournament:view` per day tournament |
| Reservation change, release, cancel | Manager: `organization:event:registration:register` (`organization:event:{eventId}`, the target event for a change); staff: `organization:event:registration:update` (`organization:event:{eventId}:registration:{reservationId}`) |
| `eventWaitlistJoin`, `eventWaitlistLeave` | `organization:event:registration:register` (`organization:event:{eventId}`) |
| `eventWaitlistEntries` / `eventWaitlistRemoveEntry` | `organization:event:waitlist:view` / `organization:event:waitlist:manage` (`organization:event:{eventId}:waitlist`) |
| `registrationSeries`, `registrationSeriesList`, `registrationSeriesPlayerEntries` | `organization:registration-series:view` (`organization:registration-series:{seriesId}`) |
| `registrationSeriesCreate/Update/Delete` | `organization:registration-series:manage` |
| `registrationSeriesAssign` | `manage` on the series + `organization:event:update` per event + `organization:tournament:update` per tournament |
| `myWaitlistEntries`, `myActiveRegistrations` | Caller's own player (logged in or guest) |

### Limits

| Limit | Default / max | Scope |
|---|---|---|
| `REGISTRATION_SERIES` | 1 / 50 | Series per organization (`LIMIT_REACHED`) |
| `EVENTS_MAX_WAITLIST_ENTRIES` | 100 / 10 000 | Active entries per slot (`LIMIT_REACHED`) |

`EVENTS_MAX_TICKETS_TYPES` and `EVENTS_MAX_TICKETS` also apply to generated slots.

### Error codes

| Code | When |
|---|---|
| `EVENT_SLOT_CLOSED`, `EVENT_SLOT_STARTED`, `EVENT_TICKET_FULL` | Reserving, moving to or waitlisting a `CLOSED`/`BLOCKED` slot, a started slot; not enough free seats |
| `EVENT_TICKET_CAPACITY_BELOW_RESERVED`, `EVENT_TOURNAMENT_LINK_LOCKED` | `maxCount` below `currentCount`; tournament change with validated reservations |
| `EVENT_CALENDAR_INVALID_TEMPLATE`, `EVENT_VENUE_INVALID_TIMEZONE` | Bad slot template, bad IANA timezone |
| `EVENT_RESERVATION_CUTOFF_PASSED`, `EVENT_RESERVATION_CHANGE_NOT_ALLOWED` | Self-service after the cutoff; `allowCancel`/`allowChange` off or target outside `changeScope` |
| `EVENT_RESERVATION_NOT_FREE` / `EVENT_RESERVATION_ALREADY_PAID` | Moving / cancelling a paid validated reservation |
| `EVENT_RESERVATION_TICKET_ASSIGNED`, `EVENT_RESERVATION_NO_FREE_TICKET` | Releasing an assigned ticket or a move leaving a member without one; adding a member with no unassigned ticket |
| `EVENT_RESERVATION_WRONG_STATUS`, `EVENT_RESERVATION_YOU_ARE_NOT_MANAGER` | Change or release on an unvalidated reservation; caller neither manager nor staff |
| `EVENT_WAITLIST_DISABLED`, `EVENT_WAITLIST_SEATS_AVAILABLE`, `EVENT_WAITLIST_ALREADY_JOINED`, `EVENT_WAITLIST_ENTRY_NOT_FOUND` | Waitlist off; seats free; active entry on this slot; unknown or foreign entry |
| `REGISTRATION_SERIES_LIMIT_REACHED`, `REGISTRATION_SERIES_REPLACE_NOT_ALLOWED`, `REGISTRATION_SERIES_NOT_FOUND` | Series rules above |
| `USER_GROUP_LOCKED` | Player membership change on the group of a validated reservation |
| `BAD_REQUEST` | `eventSlots` without filter or over 1000 rows, invalid waitlist `quantity`, slot not buyable, ticket count not matching the group |

### Webhooks

Reservation payloads carry `id, eventId, status, groupId, managerId, managerUsername, createdAt, updatedAt` plus:

| Type | Extra fields |
|---|---|
| `EVENT_RESERVATION_VALIDATED` | `validatedAt` (free or paid validation) |
| `EVENT_RESERVATION_SESSION_EXPIRED` | `waitlistEntryId` (set when the session was a waitlist offer) |
| `EVENT_RESERVATION_TICKETS_CHANGED` | `previousEventId`, `previousTicketConfigurationIds`, `ticketConfigurationIds` |
| `EVENT_RESERVATION_TICKETS_RELEASED` | `releasedCount`, `ticketConfigurationIds` |
| `EVENT_RESERVATION_CANCELLED` | `cancelReason`: `MANAGER`, `STAFF` or `REPLACED` |
| `EVENT_WAITLIST_JOINED`, `EVENT_WAITLIST_OFFERED`, `EVENT_WAITLIST_ENDED` | Entry fields: `id, eventId, ticketConfigurationId, playerId, quantity, status, endedReason, offerReservationId, offerExpiresAt, createdAt, updatedAt` |

### Pitfalls

- A waitlist entry for more than one seat can only be offered if the event has `allowForMoreTicketsThanGroupMembers: true` (the offer opens with the player alone in the group); otherwise it is skipped every time and stays `WAITING`.
- An event with `visibleAt` left null is hidden from players, and so are its slots (`events`, `eventSlots`): set `visibleAt` on `eventCreate` / `eventUpdate`, or `event.visibleAt` in `eventCalendarGenerate`.
- `onlyReservable: true` hides full slots: don't use it on a screen that offers the waitlist.
- An offer is a reservation on the event: `eventReservationStartRegistrationSession` on that event then fails with `EVENT_ALREADY_IN_A_REGISTRATION_FOR_THIS_EVENT`; validate the offer instead.
- `eventReservationReleaseTickets` checks only the cutoff, not `allowCancel`/`allowChange`.

## Competition: open pools, leaderboard feeds, rosters and item transfers

### Open pool steps

An open pool is a tournament step with no fixed bracket. Staff create a match between any eligible teams whenever they are ready (for example when a station frees up). Each ended match adds points to a live ranking, and the step only ends when staff close it. `TournamentStep.openPool` (`OpenPoolConfiguration`) is non-null on such a step and null on every other step.

| `OpenPoolConfiguration` field | Meaning | Default |
|---|---|---|
| `teamsPerMatch` | Teams in every match (2 to 64) | 2 |
| `bestOf` | Matches per game, odd (1 to 15) | 1 |
| `maxMatchesPerTeam` | Games a team may play in the step; `0` = unlimited | 0 |
| `allowRematch` | Whether the same teams may meet again | true |
| `allowConcurrentMatches` | Whether a team may have several unfinished games at once | false |
| `autoJoin` | Whether a tournament team joins the step on its first match | true |
| `enforceTeamMinSize` | Whether a team needs the tournament's minimum accepted members to play | true |

**Setup.** Apply the built-in preset `open-pool` (category `OTHER`) with `applyBuiltinPreset`, then run the usual lifecycle: `generateTournamentStep`, `seedTournamentStep`, `startTournamentStep`. Matches can only be created on a `STARTED` step.

| `open-pool` parameter | Type | Default | Effect |
|---|---|---|---|
| `team_count` | INT | required | Expected team count (validator and generation cap) |
| `pools` | INT | 1 | Number of groups ("Pool 1", ...), each with one round "Matches" and no game |
| `teams_per_match`, `best_of`, `max_matches_per_team` | INT | 2, 1, 0 | Copied to `OpenPoolConfiguration` |
| `allow_rematch`, `allow_concurrent_matches`, `auto_join`, `enforce_team_min_size` | BOOLEAN | true, false, true, true | Same |
| `win_points`, `draw_points`, `loss_points`, `forfeit_points` | FLOAT | 3, 1, 0, 0 | `POINTS` scoring; tiebreakers WINS then HEAD_TO_HEAD |
| `qualify_top` | INT | 0 | On close: the top N stay `QUALIFIED`, every other team becomes `ELIMINATED`; 0 disables the cut |
| `declare_winner` | BOOLEAN | true | On close: rank 1 becomes `WINNER` instead of `QUALIFIED` |

With this preset, seeding registers every seeded team with 0 points, the next match of a best-of series is created automatically, and a withdrawn team's pending matches are awarded to its opponents. For a follow-up bracket, apply `seeded-playoff` (category `SINGLE_ELIMINATION`) to the next step: it keeps the previous step's teams with `rank <= team_count` and seeds them in rank order (1 vs N). Parameters: `team_count` (required: 2, 4, 8 or 16), `best_of` (1), `final_best_of` (defaults to `best_of`), `third_place` (false), `promote_step_winners_to_tournament` (true).

A custom preset script enables an open pool with `set_open_pool({ teams_per_match = 2, best_of = 1, max_matches_per_team = 0, allow_rematch = true, allow_concurrent_matches = false, auto_join = true, enforce_team_min_size = true })`; Applying a preset that does not call it turns the open pool off for that step. A configuration out of the ranges in the table above makes `applyBuiltinPreset` / `applyPresetScript` fail with `RULE_DEFINITION_INVALID`, `extensions.ruleExecution.effectType: "SET_OPEN_POOL"` and the reason in `extensions.ruleExecution.reason`.

`SET_OPEN_POOL` is a `SimulatedEffectType` value: preview a preset with `simulateScript` (context `PRESET`) and check that `effectsSummary` holds a `SET_OPEN_POOL` entry before applying it.

```bash
wellplayed graphql --org my-org -F input.context=PRESET -F input.stepId=<stepId> \
  --raw-field input.script='set_open_pool({ teams_per_match = 3, best_of = 1, allow_rematch = false })' \
  'query($input: SimulateScriptInput!) {
    simulateScript(input: $input) { success errors { message } effectsSummary { type description } }
  }'
```

```bash
wellplayed graphql --org my-org \
  -F builtinPresetId=open-pool -F tournamentStepId=<stepId> \
  --raw-field parameters='{"team_count":32,"qualify_top":8,"win_points":3}' \
  'mutation($builtinPresetId: String!, $tournamentStepId: ID!, $parameters: String) {
    applyBuiltinPreset(builtinPresetId: $builtinPresetId, tournamentStepId: $tournamentStepId, parameters: $parameters) { id }
  }'
wellplayed graphql --org my-org -F stepId=<stepId> 'mutation($stepId: ID!) { generateTournamentStep(stepId: $stepId) }'
wellplayed graphql --org my-org -F input.stepId=<stepId> -F 'input.orderedTeamIds=["<teamA>","<teamB>","<teamC>"]' \
  'mutation($input: SeedStepInput!) { seedTournamentStep(input: $input) { id status openPool { teamsPerMatch bestOf } } }'
wellplayed graphql --org my-org -F stepId=<stepId> 'mutation($stepId: ID!) { startTournamentStep(stepId: $stepId) }'
```

`seedTournamentStep(input:)` still expects every team of the tournament in `orderedTeamIds`; only a step whose cross-step `QUALIFY` rule filtered the list (such as `seeded-playoff`) seeds a subset. Teams registered after seeding join through `autoJoin` or `openPoolAddTeams`.

### Running matches

| Operation | Step status | Permission (resource) | Does |
|---|---|---|---|
| `openPoolCreateMatch(input)` | `STARTED` | `organization:tournament:step:open-pool:manage` on `organization:tournament:{tournament_id}:step:{step_id}`, or tournament admin `MANAGE_SCORES` | Creates one game and its first `WAITING` match |
| `openPoolAddTeams(stepId, teamIds, groupId)` | `SEEDED` or `STARTED` | open-pool:manage | Registers teams as `ACTIVE` with 0 points (idempotent, same eligibility check as below); returns their standings |
| `updateMatchScores(matchId, input)` | `STARTED` | `organization:tournament:match:score:update` on the match path, or `MANAGE_SCORES` | Enters results; a match ends once no team is `WAITING` |
| `openPoolCorrectMatch(matchId, input)` | `STARTED` | same as `updateMatchScores` | Rewrites scores of a `STARTED` or `ENDED` match, recomputes points and ranks; rules are not fired again |
| `openPoolCancelMatch(matchId, reason)` | `STARTED` | open-pool:manage or `MANAGE_SCORES` | Deletes the whole game (every match of a best-of) in any status and recomputes the teams |
| `openPoolClose(stepId, cancelPendingMatches: Boolean! = false)` | `STARTED` | open-pool:manage | Ranks, fires ROUND_ENDED, GROUP_ENDED and STEP_ENDED rules, step `ENDED` |
| `openPoolReopen(stepId)` | `ENDED` | open-pool:manage | `WINNER`, `QUALIFIED` and `ELIMINATED` teams go back to `ACTIVE`, step `STARTED` |

`OpenPoolCreateMatchInput`: `stepId`, `teamIds` (exactly `teamsPerMatch` distinct ids), `groupId` (required when the step has several pools), `label` (max 64 chars, e.g. a station name), `idempotencyKey` (max 64 chars; a replay with the same key on the same step returns the existing match without a second webhook). Checks run in this order:

1. The step is an open pool (`OPEN_POOL_NOT_ENABLED`) and `STARTED` (`TOURNAMENT_STEP_WRONG_STATE`).
2. Team count and distinct ids (`OPEN_POOL_WRONG_TEAM_COUNT`); unknown or missing pool (`BAD_REQUEST`).
3. Each team belongs to the tournament, its status is not `WITHDRAWN`, `DENIED`, `NOT_VALID` or `NOT_ATTENDING`, its step row is not `WITHDRAWN` or `ELIMINATED`, and it is already in the pool unless `autoJoin` (`OPEN_POOL_TEAM_NOT_ELIGIBLE`).
4. `enforceTeamMinSize`: accepted members >= the tournament minimum team size (`OPEN_POOL_TEAM_INCOMPLETE`).
5. No unfinished game unless `allowConcurrentMatches` (`OPEN_POOL_TEAM_BUSY`); `maxMatchesPerTeam` (`OPEN_POOL_MAX_MATCHES_REACHED`, cancelled games do not count); a game already holding all these teams when `allowRematch` is false (`OPEN_POOL_REMATCH_NOT_ALLOWED`).

```bash
wellplayed graphql --org my-org \
  -F input.stepId=<stepId> -F 'input.teamIds=["<teamA>","<teamB>"]' \
  -F input.label=Station-3 -F input.idempotencyKey=<uuid-reused-on-retry> \
  'mutation($input: OpenPoolCreateMatchInput!) {
    openPoolCreateMatch(input: $input) { id gameId status label teams { teamId status score } }
  }'
wellplayed graphql --org my-org -F matchId=<matchId> \
  -F 'input=[{"teamId":"<teamA>","forcedScoreValue":3,"status":"WINNER"},{"teamId":"<teamB>","forcedScoreValue":1,"status":"LOSER"}]' \
  'mutation($matchId: ID!, $input: [UpdateMatchScoreInput!]!) { updateMatchScores(matchId: $matchId, input: $input) { id status } }'
wellplayed graphql --org my-org -F stepId=<stepId> -F cancelPendingMatches=true \
  'mutation($stepId: ID!, $cancelPendingMatches: Boolean!) { openPoolClose(stepId: $stepId, cancelPendingMatches: $cancelPendingMatches) { id status } }'
```

Correction rules: each `UpdateMatchScoreInput` row names a team of the match (`TOURNAMENT_TEAM_NOT_FOUND` otherwise) and may set `forcedScoreValue` and `status`; omitted fields keep their value. A `WAITING` match cannot be corrected and a correction cannot finish a `STARTED` match (`TOURNAMENT_STEP_MATCH_WRONG_STATUS`: enter the result with `updateMatchScores`). A correction that would change whether the game is decided fails with `OPEN_POOL_CORRECTION_REOPENS_GAME`: cancel the match and create it again. Corrections and cancellations are refused once the step is `ENDED` (`TOURNAMENT_STEP_WRONG_STATE`); reopen it first. Unknown ids give `TOURNAMENT_STEP_NOT_FOUND` or `TOURNAMENT_STEP_MATCH_NOT_FOUND`. `openPoolClose` without `cancelPendingMatches` fails with `OPEN_POOL_PENDING_MATCHES` while a game is unfinished; with it, each pending game is cancelled with the reason `open pool closed`. `openPoolReopen` fails with `OPEN_POOL_NEXT_STEP_SEEDED` once a later step is seeded or further.

### Standings and match lists

Both reads are public (send only the `organization-id` header); the default Anonymous group holds `organization:tournament:step:view` and `organization:tournament:match:view`. Both fail with `OPEN_POOL_NOT_ENABLED` on a step that is not an open pool. There is no subscription: poll every 5 to 15 seconds.

| Query | Returns |
|---|---|
| `openPoolStandings(stepId, groupId)` | `[OpenPoolStanding!]!` ordered by `rank` (nulls last), then `points` desc: `teamId`, `team`, `groupId`, `rank`, `status` (`TeamScopeStatus`), `points`, `played` (ended matches), `wins`, `losses`, `draws`, `forfeits` |
| `openPoolMatches(stepId, filter, page)` | Newest first, 10 per page by default (max 100). `filter`: `statuses: [MatchStatus!]`, `teamId`, `groupId`. Each `OpenPoolMatch` has `id`, `gameId`, `groupId`, `label`, `order`, `status`, `teams { teamId team status score }` |

Ranks are recomputed after every ended match, correction and cancellation, so standings are live. The same values appear on any step as `TournamentStep.teamScores { rank status score }` (`rank` is null until ranked).

```bash
wellplayed graphql --org my-org -F stepId=<stepId> -F 'filter={"statuses":["WAITING","STARTED"]}' \
  'query($stepId: ID!, $filter: OpenPoolMatchesFilter) {
    openPoolStandings(stepId: $stepId) { rank status points played wins draws losses team { name tag } }
    openPoolMatches(stepId: $stepId, filter: $filter, page: { first: 20 }) { nodes { id label status teams { team { name } score } } }
  }'
```

### Webhooks and journal

| Webhook | Payload |
|---|---|
| `TOURNAMENT_MATCH_CREATED` | `id` (match), `tournamentId`, `stepId`, `groupId`, `roundId`, `gameId`, `label`, `teamIds`, `organizationId` |
| `TOURNAMENT_MATCH_CORRECTED` | same path + `scores`, `previousScores` (rows `{ tournamentTeamId, score, isWinner, isForfeited }`), `organizationId` |
| `TOURNAMENT_MATCH_CANCELLED` | same path + `teamIds`, `wasEnded`, `reason`, `organizationId` (also once per game cancelled by `openPoolClose`) |

`TOURNAMENT_MATCH_SCORE_UPDATED` is still sent by `updateMatchScores`. Journal entry types (`journalEntries(filters: { typePrefix: "tournament.open_pool." })`): `tournament.open_pool.match_corrected` (`TournamentOpenPoolMatchCorrectedPayload`: before and after score rows), `tournament.open_pool.match_cancelled` (`TournamentOpenPoolMatchCancelledPayload`: `previousScores`, `wasEnded`, `cancelReason`), `tournament.open_pool.closed` (`cancelledMatchCount`), `tournament.open_pool.reopened`.

### Tournament team rosters (staff)

Staff fix rosters outside the registration window. Permission: `organization:tournament:team:members:manage` on `organization:tournament:{tournament_id}:team:{team_id}` (also on the source team when moving), or the tournament admin `MANAGE_TEAMS` right.

`tournamentTeamMemberAdd(input: TournamentTeamMemberAddInput!)` adds the player as an `ACCEPTED` member; the team status does not change. An `AWAITING` invite is upgraded, and an accepted member is a no-op unless `setAsManager` changes the manager.

| Input field | Default | Effect |
|---|---|---|
| `teamId`, `playerId` | required | Target team and player profile of the organization |
| `moveFromOtherTeam` | false | Takes the player out of their accepted team in the same tournament in the same transaction (that team loses its manager if it was them) |
| `removeEmptySourceTeam` | false | With `moveFromOtherTeam`: deletes the source team once empty, unless it has match results (`TOURNAMENT_TEAM_HAS_RESULTS`, nothing is changed) |
| `setAsManager` | false | Makes the player the team manager |

`tournamentTeamMemberRemove(teamId, playerId, newManagerId)` deletes the membership in any status. Removing the manager hands the role to `newManagerId` (an accepted member) or leaves the team without a manager; `newManagerId` is ignored for other members. Removing the last member keeps the team.

```bash
wellplayed graphql --org my-org \
  -F input.teamId=<teamId> -F input.playerId=<playerId> -F input.moveFromOtherTeam=true -F input.removeEmptySourceTeam=true \
  'mutation($input: TournamentTeamMemberAddInput!) { tournamentTeamMemberAdd(input: $input) { id managerId members { playerProfileId status } } }'
wellplayed graphql --org my-org -F teamId=<teamId> -F playerId=<managerId> -F newManagerId=<memberId> \
  'mutation($teamId: ID!, $playerId: ID!, $newManagerId: ID) { tournamentTeamMemberRemove(teamId: $teamId, playerId: $playerId, newManagerId: $newManagerId) { id managerId } }'
```

| Error | When |
|---|---|
| `TOURNAMENT_TEAM_FULL` | Accepted members already at the tournament's maximum team size |
| `TOURNAMENT_TEAM_PLAYER_IN_OTHER_TEAM` | Player accepted in another team of the tournament and `moveFromOtherTeam` is false |
| `TOURNAMENT_TEAM_MEMBER_NOT_FOUND` | Removed player is not a member, or `newManagerId` is not another accepted member |
| `TOURNAMENT_TEAM_HAS_RESULTS` | Empty source team has match results |
| `TOURNAMENT_TEAM_INVALID_STATUS` | Target team is `WITHDRAWN` or `DENIED` |
| `TOURNAMENT_TEAM_NOT_FOUND`, `PLAYER_NOT_FOUND` | Unknown team or player in this organization |

Each change sends `TOURNAMENT_TEAM_MEMBER_UPDATED` (the usual team fields plus `playerId`, `memberStatus`: `ACCEPTED` or `REMOVED`, and `byStaff: true`); a move sends `REMOVED` for the source team, then `ACCEPTED` for the target.

### Leaderboard scores and seasons

`leaderboardRegisterPlayerScore(input: LeaderboardRegisterPlayerScoreInput!)` needs `organization:leaderboard:register_score` on `organization:leaderboard:{leaderboard_id}`. `score` is now a `Float`.

| `mode` (`LeaderboardScoreMode`) | `score` means | Rules |
|---|---|---|
| `REPLACE` (default) | The new total | Finite and >= 0 (`BAD_REQUEST`) |
| `INCREMENT` | The change to apply, may be negative | Base is the current total, or the season's starting score for a new entry |

`seasonId` picks the season to credit (`LEADERBOARD_SEASON_NOT_FOUND` if it is not a season of this leaderboard); without it, the season with `start <= now < end` is used (`LEADERBOARD_NO_ACTIVE_SEASON` between seasons). The entry moves to the highest bucket whose `minScore` <= the total (`LEADERBOARD_NO_BUCKET_FOUND_FOR_SCORE` if none, e.g. a negative total). A new entry counts against the `LEADERBOARD_ENTRIES` limit (`LIMIT_REACHED`). Concurrent writes for the same player are serialised, so `INCREMENT` is safe to call in parallel.

```bash
wellplayed graphql --org my-org \
  -F input.leaderboardId=<leaderboardId> -F input.playerId=<playerId> -F input.score=-2.5 -F input.mode=INCREMENT \
  'mutation($input: LeaderboardRegisterPlayerScoreInput!) { leaderboardRegisterPlayerScore(input: $input) { score rank leaderboardSeasonBucketId } }'
```

`LEADERBOARD_SCORE_REGISTERED` carries `leaderboardId`, `seasonId` (the season actually credited), `bucketId`, `playerProfileId`, `score` (new total) and `organizationId`, plus `mode` (`REPLACE` or `INCREMENT`), `delta` (the change applied to the total) and `teamId` (nullable). Seasons of one leaderboard can no longer overlap: `createLeaderboardSeason` and `updateLeaderboardSeason` fail with `LEADERBOARD_SEASON_OVERLAP` (a season may start exactly when the previous one ends). `leaderboardCurrentPlayerRanking` without `seasonId` reads the season with `start <= now < end`; between seasons it fails with `LEADERBOARD_SEASON_NOT_FOUND`, and `LEADERBOARD_PLAYER_RANKING_NOT_FOUND` means the player has no score in that season.

### Leaderboard feeds

A feed credits a player leaderboard from tournament results. Match points go to every accepted member of the team for each ended match, every match of a best-of included (`winPoints`, `lossPoints`, `drawPoints` or `forfeitPoints` by the team's result); `placementPoints[i]` goes to the members of the team ranked `i + 1` when a fed step ends (at most 64 entries). The feed remembers which players it credited, so corrections and cancellations adjust or reverse exactly those points, a reopened step takes its placement points back, and roster changes after a credit do not move points. Credits are written as increments in the pinned `seasonId`, or in the season active when the match (or step) last changed.

| Operation | Permission | Notes |
|---|---|---|
| `leaderboardFeeds(leaderboardId, tournamentId, page)` | `organization:leaderboard:view`; signed-in callers only | Lists only feeds of leaderboards the caller can view |
| `createLeaderboardFeed(input)` | `organization:leaderboard:update` on the leaderboard and `organization:tournament:view` on the tournament | `stepId` null = every step; credits the results already played at once |
| `updateLeaderboardFeed(id, input)` | same | Points, `seasonId`, `enabled`; reconciles at once; `enabled: false` reverses every credited point |
| `deleteLeaderboardFeed(id)` | same | Credited points stay; the feed's credit history is deleted |
| `reconcileLeaderboardFeed(id)` | same | Repairs and backfills; returns `sourcesChecked`, `entriesWritten`, `pointsDelta` |

```bash
wellplayed graphql --org my-org \
  -F input.leaderboardId=<leaderboardId> -F input.tournamentId=<tournamentId> \
  -F input.winPoints=3 -F input.drawPoints=1 -F 'input.placementPoints=[50,30,20,10]' \
  'mutation($input: CreateLeaderboardFeedInput!) { createLeaderboardFeed(input: $input) { id stepId seasonId enabled } }'
wellplayed graphql --org my-org -F id=<feedId> \
  'mutation($id: ID!) { reconcileLeaderboardFeed(id: $id) { sourcesChecked entriesWritten pointsDelta } }'
```

Errors: `LEADERBOARD_FEED_INVALID_SCOPE` (leaderboard or tournament outside the organization, step outside the tournament, season outside the leaderboard), `LEADERBOARD_FEED_NOT_FOUND`. A credit that fails (typically no season covers the match date) never fails the caller: it is journaled as `leaderboard.feed.reconcile_failed` (`LeaderboardFeedReconcileFailedPayload`: `feedId`, `sourceKey`, `errorMessage`); fix the seasons, then call `reconcileLeaderboardFeed`. Pitfalls: feed credits do not send `LEADERBOARD_SCORE_REGISTERED`, and a manual `REPLACE` on a fed leaderboard overwrites the credited points.

### Player item transfers

`playerItemsTransfer(input: PlayerItemsTransferInput!)` moves quantities from `fromPlayerId` to `toPlayerId`, all or nothing. `items`: 1 to 20 entries `{ itemId, quantity >= 1 }` with distinct `itemId`. Permission: `organization:player:items:update` on both `organization:player:{fromPlayerId}:item:{item_id}` and `organization:player:{toPlayerId}:item:{item_id}` for every item. The result lists the updated rows of each side (`from`, `to`); a giver row that reaches 0 is kept.

```bash
wellplayed graphql --org my-org \
  -F input.fromPlayerId=<giverId> -F input.toPlayerId=<receiverId> -F 'input.items=[{"itemId":"<itemId>","quantity":2}]' \
  'mutation($input: PlayerItemsTransferInput!) { playerItemsTransfer(input: $input) { from { itemId quantity } to { itemId quantity } } }'
```

Errors: `PLAYER_ITEM_INSUFFICIENT_QUANTITY` (the message names the item, the available and the requested quantity; nothing is moved), `ITEM_NOT_FOUND`, `PLAYER_NOT_FOUND`, `BAD_REQUEST` (same player on both sides or a repeated item). Webhooks: one `PLAYER_ITEM_UPDATED` per changed row, then `PLAYER_ITEMS_TRANSFERRED` (`fromPlayerId`, `toPlayerId`, `items: [{ itemId, quantity }]`, `organizationId`).

`playerItemsUpdate(playerId, input)` no longer allows overdrafts: each row's new quantity is `set ?? current`, plus `add`, minus `remove`; a negative result fails the whole batch with `PLAYER_ITEM_INSUFFICIENT_QUANTITY`, and an item outside the organization fails with `ITEM_NOT_FOUND`. A row at 0 is kept.

## Related skills

- `wellplayed-react` (when present) — building React apps against the WellPlayed React SDK.
- `wellplayed-api` (when present) — using the TypeScript SDK and the GraphQL API in non-React code.

When in doubt about API shape, call the WellPlayed MCP server at `https://mcp.well-played.gg/mcp` or fetch `https://mcp.well-played.gg/llms-full.txt`.
