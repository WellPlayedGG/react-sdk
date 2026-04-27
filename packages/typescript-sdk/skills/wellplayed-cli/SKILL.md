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
| `wellplayed deploy --app-id <id>` | Build, upload, and submit a release to the Marketplace |
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
wellplayed deploy --app-id <appId>     # ship to the Marketplace
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

## Related skills

- `wellplayed-react` (when present) — building React apps against the WellPlayed React SDK.
- `wellplayed-api` (when present) — using the TypeScript SDK and the GraphQL API in non-React code.

When in doubt about API shape, call the WellPlayed MCP server at `https://mcp.well-played.gg/mcp` or fetch `https://mcp.well-played.gg/llms-full.txt`.
