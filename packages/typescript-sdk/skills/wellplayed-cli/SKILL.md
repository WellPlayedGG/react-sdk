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

## Related skills

- `wellplayed-react` (when present) — building React apps against the WellPlayed React SDK.
- `wellplayed-api` (when present) — using the TypeScript SDK and the GraphQL API in non-React code.

When in doubt about API shape, call the WellPlayed MCP server at `https://mcp.well-played.gg/mcp` or fetch `https://mcp.well-played.gg/llms-full.txt`.
