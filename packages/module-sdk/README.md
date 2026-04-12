# @well-played.gg/module-sdk

SDK for building WellPlayed platform modules -- self-contained React extensions that run inside iframes on the WellPlayed console and communicate with the platform via a secure postMessage handshake.

## Installation

```bash
# npm
npm install @well-played.gg/module-sdk

# yarn
yarn add @well-played.gg/module-sdk
```

### Peer Dependencies

| Package | Version |
|---------|---------|
| `react` | >= 18.0.0 |
| `@apollo/client` | >= 3.0.0 |

## Quick Start

The fastest way to scaffold a new module is with the companion CLI:

```bash
npx @well-played.gg/create-module my-module
cd my-module
npm install
npm run dev
```

This generates a ready-to-run project with `@well-played.gg/module-sdk` pre-configured.

## Core Concepts

### Modules

A **module** is a versioned React component that plugs into the WellPlayed platform. Every module is registered via `defineModule`, which validates the name and semver version at initialization time.

### Extensions

An **extension** is a module running inside a sandboxed iframe on the WellPlayed console. The iframe communicates with the host page through a postMessage-based handshake protocol:

1. The host loads the extension iframe with a one-time token in the URL fragment.
2. `ExtensionProvider` reads the token, sends `handshake.init` to the parent window, and waits for a `handshake.ack` response containing a module JWT, the API base URL, granted permissions, and other context.
3. Once the handshake completes, the provider creates an authenticated Apollo Client and renders the module's children.
4. The host can push `token.update` messages to rotate the JWT without reloading the iframe, and `ping` messages for health checks.

### Context

`ModuleContext` is the React context that carries runtime information to every component inside a module: the app ID, module name, Apollo client, granted permissions, and an event bus.

### Event Bus

A lightweight pub/sub bus available via context. Modules can emit events and subscribe to events from sibling modules or the host.

## API Reference

### `defineModule<P>(config)`

Validates and returns a module definition. Throws if the name contains invalid characters or the version is not valid semver.

```ts
import { defineModule } from '@well-played.gg/module-sdk';
import { Leaderboard } from './Leaderboard';

export default defineModule({
  name: 'leaderboard',
  version: '1.0.0',
  component: Leaderboard,
});
```

**Parameters**

| Field | Type | Description |
|-------|------|-------------|
| `name` | `string` | Alphanumeric, hyphens, and underscores only. |
| `version` | `string` | Semver string (e.g. `"1.0.0"`). |
| `component` | `ComponentType<P>` | The root React component for the module. |

**Returns** `ModuleDefinition<P>`

---

### `ExtensionProvider`

Top-level provider that performs the iframe handshake, creates an authenticated Apollo Client, and supplies `ModuleContext` to all descendants.

```tsx
import { ExtensionProvider } from '@well-played.gg/module-sdk';
import App from './App';

function Root() {
  return (
    <ExtensionProvider appId="my-app" parentOrigin="https://console.well-played.gg">
      <App />
    </ExtensionProvider>
  );
}
```

**Props**

| Prop | Type | Description |
|------|------|-------------|
| `appId` | `string` | Identifier for this application instance. |
| `parentOrigin` | `string` | Origin of the host page (used for postMessage validation). |
| `children` | `ReactNode` | Content rendered after a successful handshake. |

Renders `null` until the handshake completes.

---

### `createExtensionClient(config)`

Creates an Apollo Client pre-configured with module token authentication. Called internally by `ExtensionProvider`, but can be used directly for headless or non-React setups.

```ts
import { createExtensionClient } from '@well-played.gg/module-sdk';

const { client, setToken } = createExtensionClient({
  moduleToken: 'eyJ...',
  marketplaceAppId: 'app-123',
  apiBaseUrl: 'api.warrior.well-played.gg', // optional
});
```

**Config**

| Field | Type | Description |
|-------|------|-------------|
| `moduleToken` | `string` | JWT issued during the handshake. Sent as `x-module-token` header. |
| `marketplaceAppId` | `string` | The marketplace application ID. |
| `apiBaseUrl` | `string?` | API host. Defaults to `api.warrior.well-played.gg`. Automatically uses `http` for localhost addresses. |

**Returns** `ExtensionClientResult`

| Field | Type | Description |
|-------|------|-------------|
| `client` | `ApolloClient` | Configured Apollo Client instance. |
| `setToken` | `(token: string) => void` | Replaces the current module token (must be a valid 3-part JWT). |

---

### `useModuleContext()`

Returns the current `ModuleContextValue`. Throws if called outside of a `ModuleContext` provider.

```ts
import { useModuleContext } from '@well-played.gg/module-sdk';

function StatusBar() {
  const { appId, moduleName, grantedPermissions } = useModuleContext();
  return <p>App {appId} has {grantedPermissions.length} permissions</p>;
}
```

**ModuleContextValue**

| Field | Type | Description |
|-------|------|-------------|
| `appId` | `string` | Application identifier. |
| `moduleName` | `string` | Name of the current module. |
| `apolloClient` | `ApolloClient` | The authenticated Apollo Client. |
| `grantedPermissions` | `string[]` | Permissions granted to this module during installation. |
| `eventBus` | `ModuleEventBus` | Pub/sub event bus. |

---

### `useModuleQuery<TData, TVariables>(query, options?)`

Thin wrapper around Apollo's `useQuery`. Use it exactly like `useQuery` -- the Apollo Client is provided automatically by `ExtensionProvider`.

```ts
import { useModuleQuery } from '@well-played.gg/module-sdk';
import { gql } from '@apollo/client';

const GET_TOURNAMENTS = gql`
  query GetTournaments { tournaments { id name } }
`;

function TournamentList() {
  const { data, loading } = useModuleQuery(GET_TOURNAMENTS);
  if (loading) return <p>Loading...</p>;
  return <ul>{data.tournaments.map(t => <li key={t.id}>{t.name}</li>)}</ul>;
}
```

---

### `useModuleMutation<TData, TVariables>(mutation, options?)`

Thin wrapper around Apollo's `useMutation`.

```ts
import { useModuleMutation } from '@well-played.gg/module-sdk';
import { gql } from '@apollo/client';

const JOIN_TOURNAMENT = gql`
  mutation JoinTournament($id: ID!) { joinTournament(id: $id) { id } }
`;

function JoinButton({ tournamentId }: { tournamentId: string }) {
  const [join, { loading }] = useModuleMutation(JOIN_TOURNAMENT);
  return <button disabled={loading} onClick={() => join({ variables: { id: tournamentId } })}>Join</button>;
}
```

---

### `useModuleEvent(eventName, handler)`

Subscribes to an event on the module event bus. The subscription is cleaned up automatically when the component unmounts.

```ts
import { useModuleEvent } from '@well-played.gg/module-sdk';

function Notifications() {
  useModuleEvent('tournament.updated', (payload) => {
    console.log('Tournament updated:', payload);
  });
  return null;
}
```

---

### `useModuleEmit()`

Returns the `emit` function from the event bus.

```ts
import { useModuleEmit } from '@well-played.gg/module-sdk';

function ActionButton() {
  const emit = useModuleEmit();
  return <button onClick={() => emit('score.submitted', { score: 100 })}>Submit</button>;
}
```

## Full Example

```tsx
// src/index.tsx
import { defineModule } from '@well-played.gg/module-sdk';
import { Leaderboard } from './Leaderboard';

export default defineModule({
  name: 'leaderboard',
  version: '1.0.0',
  component: Leaderboard,
});

// src/Leaderboard.tsx
import { useModuleContext, useModuleQuery, useModuleEvent } from '@well-played.gg/module-sdk';
import { gql } from '@apollo/client';

const LEADERBOARD_QUERY = gql`
  query Leaderboard { leaderboard { rank playerName score } }
`;

export function Leaderboard() {
  const { grantedPermissions } = useModuleContext();
  const { data, loading, refetch } = useModuleQuery(LEADERBOARD_QUERY);

  useModuleEvent('score.submitted', () => {
    refetch();
  });

  if (loading) return <p>Loading leaderboard...</p>;

  return (
    <table>
      <thead>
        <tr><th>Rank</th><th>Player</th><th>Score</th></tr>
      </thead>
      <tbody>
        {data?.leaderboard.map((entry: any) => (
          <tr key={entry.rank}>
            <td>{entry.rank}</td>
            <td>{entry.playerName}</td>
            <td>{entry.score}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

// src/main.tsx  (extension entry point)
import { ExtensionProvider } from '@well-played.gg/module-sdk';
import Module from './index';

function Root() {
  return (
    <ExtensionProvider appId="leaderboard-app" parentOrigin="https://console.well-played.gg">
      <Module.component />
    </ExtensionProvider>
  );
}
```

## Platform Architecture

`@well-played.gg/module-sdk` is part of the WellPlayed React SDK monorepo:

| Package | Purpose |
|---------|---------|
| `@well-played.gg/module-sdk` | Core SDK for building modules (this package). |
| `@well-played.gg/create-module` | CLI scaffolding tool (`npx @well-played.gg/create-module`). |
| `@well-played.gg/module-ui` | Pre-built UI components for modules. |
| `@well-played.gg/react-sdk` | General-purpose React SDK for the WellPlayed platform. |
| `@well-played.gg/component-sdk` | SDK for building standalone WellPlayed components. |

### How Modules Connect to the Backend

Modules are marketplace extensions that run inside the WellPlayed console as sandboxed iframes. The authentication flow works as follows:

1. The console loads the module iframe and passes a handshake token via the URL fragment.
2. `ExtensionProvider` sends `handshake.init` to the console and receives back a short-lived **module token** (HS256 JWT).
3. All GraphQL requests from the module hit the WellPlayed API at `/graphql` with the `x-module-token` header (not the standard `authorization` header).
4. The backend `OauthGuard` validates the module token via `ModuleTokenService`, loads the organization, account, and app installation, and applies a permission ceiling -- modules only receive the permissions explicitly granted during installation.
5. The console can rotate the module token at any time via `token.update` postMessage events.

This ensures modules are fully sandboxed: they cannot exceed their granted permissions and they never have direct access to the user's session token.
