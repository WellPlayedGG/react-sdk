# @well-played.gg/create-module

Scaffolding CLI for WellPlayed platform modules. Generates a ready-to-run project with TypeScript, React, Vite, and `@well-played.gg/module-sdk` preconfigured.

## Usage

```bash
npx @well-played.gg/create-module <module-name>
```

**Example:**

```bash
npx @well-played.gg/create-module leaderboard-widget
```

### Arguments

| Argument | Required | Description |
|---|---|---|
| `module-name` | Yes | Lowercase alphanumeric name with hyphens (e.g., `my-module`, `leaderboard-widget`) |

The name must match the pattern `^[a-z0-9]([a-z0-9-]*[a-z0-9])?$`. Uppercase letters, spaces, and special characters are rejected.

## What It Scaffolds

Running `npx @well-played.gg/create-module leaderboard-widget` creates the following structure:

```
leaderboard-widget/
  package.json          # Module metadata, scripts, and dependencies
  tsconfig.json         # TypeScript config (ES2020, strict mode, JSX)
  vite.config.ts        # Vite build config (ES module library output)
  src/
    index.tsx           # Module entry point using defineModule()
    LeaderboardWidget.tsx  # Main React component
  dev/
    index.html          # Dev server HTML shell
    dev-shell.tsx       # Dev harness with ApolloProvider and mock client
```

The component name is derived from the module name by converting to PascalCase (e.g., `leaderboard-widget` becomes `LeaderboardWidget`).

## Generated Code

### Entry point (`src/index.tsx`)

Registers the module with `@well-played.gg/module-sdk` via `defineModule`:

```tsx
import { defineModule } from '@well-played.gg/module-sdk';
import { LeaderboardWidget } from './LeaderboardWidget';

const module = defineModule({
  name: 'leaderboard-widget',
  version: '0.1.0',
  component: LeaderboardWidget,
});

export default module.component;
```

### Component (`src/LeaderboardWidget.tsx`)

A starter component that uses SDK hooks to access module context:

```tsx
import { useModuleContext, useModuleQuery } from '@well-played.gg/module-sdk';

interface LeaderboardWidgetProps {
  title?: string;
}

export function LeaderboardWidget({ title = 'LeaderboardWidget' }: LeaderboardWidgetProps) {
  const { appId, moduleName, grantedPermissions } = useModuleContext();

  return (
    <div>
      <h2>{title}</h2>
      <p>Module: {moduleName} | App: {appId}</p>
      <p>Permissions: {grantedPermissions.join(', ')}</p>
    </div>
  );
}
```

### Dev harness (`dev/dev-shell.tsx`)

A standalone development shell that wraps the module in an `ApolloProvider` with a mock GraphQL client, allowing `npm run dev` to work out of the box.

## Relation to @well-played.gg/module-sdk

This CLI generates projects that depend on [`@well-played.gg/module-sdk`](../module-sdk/). The SDK provides:

| Export | Purpose |
|---|---|
| `defineModule()` | Registers a module with name, version, and root component. Validates the module name and semver version. |
| `useModuleContext()` | React hook returning `appId`, `moduleName`, `apolloClient`, `grantedPermissions`, and `eventBus`. |
| `useModuleQuery()` | Thin wrapper around Apollo `useQuery` scoped to the module context. |
| `useModuleMutation()` | Thin wrapper around Apollo `useMutation` scoped to the module context. |
| `useModuleEvent()` | Subscribe to platform events via the module event bus. |
| `useModuleEmit()` | Emit events to the platform event bus. |
| `ExtensionProvider` | React provider that supplies module context to the component tree. |
| `createExtensionClient()` | Creates a configured Apollo client for module-to-platform communication. |

The generated `package.json` declares `@well-played.gg/module-sdk` as a direct dependency (`^0.1.0`) and `react`, `react-dom`, and `@apollo/client` as peer dependencies.

## Scripts

The generated project includes three Vite-powered scripts:

| Script | Description |
|---|---|
| `npm run dev` | Start the Vite dev server using the `dev/` harness |
| `npm run build` | Build the module as an ES module library to `dist/` |
| `npm run preview` | Preview the production build |

The Vite config externalizes `react`, `react-dom`, `@apollo/client`, and `react/jsx-runtime` so the module stays lightweight and avoids bundling the host platform's dependencies.

## Getting Started

```bash
npx @well-played.gg/create-module my-module
cd my-module
npm install
npm run dev
```

Then open the URL printed by Vite (typically `http://localhost:5173`) to see the module running in the dev shell.

To build for production:

```bash
npm run build
```

This outputs `dist/index.js` -- a single ES module ready to be loaded by the WellPlayed platform.
