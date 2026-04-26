export const REACT_CLAUDE_MD = `# CLAUDE.md — WellPlayed React app

This file tells Claude Code (and other AI agents) the rules for working in
this WellPlayed-powered React app. Bundled skills under \`.claude/skills/\`
go deeper on individual SDKs and the \`wellplayed\` CLI; this file holds the
project-wide rules that apply *everywhere*.

If you change anything here, keep the **GraphQL Rule** section intact — it
is the single most important convention.

## Quick reference

- **Stack**: React + TypeScript + Vite, scaffolded by \`wellplayed create-app\`.
- **Auth + provider**: \`@well-played.gg/react-sdk\` — \`<WellPlayedProvider>\`,
  \`useWellPlayed\`, \`useConnectedPlayer\`, plus typed paginated/query hooks.
- **GraphQL toolkit**: \`@well-played.gg/typescript-sdk\` exports a typed
  \`graphql\` function (powered by \`gql.tada\` + WellPlayed schema
  introspection). It statically types every operation against the live schema.
- **CLI**: \`wellplayed\` — see \`.claude/skills/wellplayed-cli/SKILL.md\`.
  Notable commands: \`wellplayed graphql\` for ad-hoc API calls,
  \`wellplayed dev\`, \`wellplayed deploy\`, \`wellplayed install-skills\`
  (also rewrites this file).
- **Schema lookups**: WellPlayed MCP at \`https://mcp.well-played.gg/mcp\`
  (already wired in \`.mcp.json\`).

## GraphQL Rule (MANDATORY)

**Always declare GraphQL documents with the typed \`graphql\` function exported
by \`@well-played.gg/typescript-sdk\`. Never use \`gql\` from \`graphql\`,
\`graphql-tag\`, or \`@apollo/client\`.**

Why this matters:

- \`graphql\` from \`@well-played.gg/typescript-sdk\` is built on
  \`gql.tada\` and the WellPlayed schema introspection. It infers the result
  type and variables type of every operation directly from the document.
- \`useQuery\` / \`useMutation\` / \`useSubscription\` infer their generics
  automatically — you never need to write \`<TData, TVars>\` or hand-author
  matching \`interface\`/\`type\` declarations.
- Schema mismatches (typos, removed fields, wrong argument types) are caught
  at compile time, not at runtime in the browser.
- \`gql\` from any other library returns an opaque \`DocumentNode\` and
  silently turns all of those guarantees off.

### Do this

\`\`\`tsx
import { useQuery } from '@apollo/client';
import { graphql } from '@well-played.gg/typescript-sdk';
import { useWellPlayed } from '@well-played.gg/react-sdk';

const GET_MY_ACCOUNT = graphql(\`
  query getMyAccount {
    getMyAccount {
      id
      email
      permissions { permission }
    }
  }
\`);

function SignedInView() {
  const { apiClient } = useWellPlayed();
  // \`data.getMyAccount\` is fully typed — no <TData> generic needed.
  const { data, loading, error } = useQuery(GET_MY_ACCOUNT, { client: apiClient });
  // ...
}
\`\`\`

### Don't do this

\`\`\`ts
// Forbidden — opaque DocumentNode, no schema check, no inferred types.
import { gql } from '@apollo/client';

const GET_MY_ACCOUNT = gql\`
  query getMyAccount { getMyAccount { id email } }
\`;

// Equally forbidden — same problem, different package.
import { gql } from 'graphql-tag';
import gql from 'graphql-tag';
\`\`\`

### Helper types

Need to extract a result or variables type? Use the helpers re-exported next
to \`graphql\` — never re-derive the shape by hand.

\`\`\`ts
import {
  graphql,
  type ResultOf,
  type VariablesOf,
  type FragmentOf,
  readFragment,
} from '@well-played.gg/typescript-sdk';

const Q = graphql(\`query Foo { foo { id name } }\`);

type Result = ResultOf<typeof Q>;     // { foo: { id: string; name: string } }
type Vars = VariablesOf<typeof Q>;    // operation variables, fully inferred
\`\`\`

For fragments: declare them with \`graphql(\\\`fragment ...\\\`)\`, type them
with \`FragmentOf<typeof MyFragment>\`, and read them with \`readFragment\`.
Never spread the raw fragment payload into a fragment-typed slot — it
bypasses the masking gql.tada provides.

## Auth + WellPlayedProvider

- The app is wrapped in \`<WellPlayedProvider organizationId={...} wpAppConfig={...}>\`
  in \`src/main.tsx\`. Every Apollo hook (\`useQuery\`, \`useMutation\`,
  \`useSubscription\`) **must** receive \`{ client: apiClient }\` from
  \`useWellPlayed()\`. The default Apollo client has no auth link.
- Login / logout: use \`useConnectedPlayer()\`. Never hand-roll OIDC redirects
  — the provider handles them, including the \`/auth/callback\` route.
- The OAuth callback path is hard-wired to \`/auth/callback\` in the scaffold
  and on the OAuth app. If you change one, change both (and update
  \`VITE_WP_REDIRECT_URI\` in \`.env.local\` plus the registered redirect URI
  at https://console.well-played.gg).

## Environment variables

\`.env.local\` is created by \`wellplayed create-app\` and must contain:

| Variable | Purpose |
|----------|---------|
| \`VITE_WP_ORGANIZATION_ID\` | Organization short id sent in the \`organization-id\` header |
| \`VITE_WP_CLIENT_ID\` | OAuth client id of the app (created by \`wellplayed create-app\`) |
| \`VITE_WP_REDIRECT_URI\` | Callback URL registered with the OAuth app |

\`main.tsx\` throws if any of these is missing — don't paper over the error
with a default; fix the env file.

## TypeScript conventions

- **Strict mode stays on.** Don't loosen \`tsconfig.json\`.
- **No \`any\` / \`unknown\` shortcuts.** The typed \`graphql(...)\` document
  is the escape hatch for API types — there is no excuse to fall back to
  \`any\` for query results.
- **No \`as\` casts** to massage a query result into a different shape.
  Re-shape the document instead.
- **No \`// @ts-ignore\` / \`// @ts-expect-error\`** to silence a schema
  mismatch. Either the document is wrong, the schema changed (regenerate
  introspection), or the field really doesn't exist — never silence it.
- **Type every function signature** explicitly. \`gql.tada\`'s inferred
  generics already flow through Apollo hooks; lean on that, don't bypass it.

## Working with the API

- **Inside React**: \`@apollo/client\` hooks + a typed \`graphql(...)\`
  document + \`client: apiClient\`. That's the whole rule.
- **Ad-hoc / scripts / CI**: use \`wellplayed graphql\`. It accepts an
  inline query, a \`-f\` file, or stdin, and supports typed \`-F\` variables.
  Full reference: \`.claude/skills/wellplayed-cli/SKILL.md\`.
- **Schema exploration**: prefer the WellPlayed MCP server over manually
  crawling the introspection blob. Claude Code has it wired through
  \`.mcp.json\`.

## What lives where

| Path | What |
|------|------|
| \`src/main.tsx\` | App entry — wraps \`<WellPlayedProvider>\`, routes \`/auth/callback\` |
| \`src/App.tsx\` | Root component — example typed query against \`getMyAccount\` |
| \`src/auth/Callback.tsx\` | OAuth callback render target |
| \`.claude/skills/\` | Bundled SDK + CLI skills (regenerate with \`wellplayed install-skills\`) |
| \`.mcp.json\` | MCP server entries; keeps Claude Code wired to the WellPlayed schema |
| \`.env.local\` | OAuth client id + organization id + redirect URI |
`;
