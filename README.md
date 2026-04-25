# WellPlayed SDK Monorepo

Official SDK packages for building on the [WellPlayed](https://well-played.gg) platform -- from integrating the API in your app to building and deploying marketplace extensions and modules.

## Packages

| Package | Description | npm |
|---------|-------------|-----|
| [`@well-played.gg/typescript-sdk`](./packages/typescript-sdk) | Core TypeScript client -- GraphQL types, Apollo helpers, and API utilities | [![npm](https://img.shields.io/npm/v/@well-played.gg/typescript-sdk)](https://www.npmjs.com/package/@well-played.gg/typescript-sdk) |
| [`@well-played.gg/react-sdk`](./packages/react-sdk) | React components and hooks for WellPlayed integration (auth, players, tournaments) | [![npm](https://img.shields.io/npm/v/@well-played.gg/react-sdk)](https://www.npmjs.com/package/@well-played.gg/react-sdk) |
| [`@well-played.gg/module-sdk`](./packages/module-sdk) | Runtime SDK for building iframe-based platform modules (context, events, Apollo) | [![npm](https://img.shields.io/npm/v/@well-played.gg/module-sdk)](https://www.npmjs.com/package/@well-played.gg/module-sdk) |
| [`@well-played.gg/module-ui`](./packages/module-ui) | Theme-aware React component library for modules (Button, Card, Modal, Table, etc.) | [![npm](https://img.shields.io/npm/v/@well-played.gg/module-ui)](https://www.npmjs.com/package/@well-played.gg/module-ui) |
| [`@well-played.gg/component-sdk`](./packages/component-sdk) | Base class for framework-agnostic Web Components on the platform | [![npm](https://img.shields.io/npm/v/@well-played.gg/component-sdk)](https://www.npmjs.com/package/@well-played.gg/component-sdk) |
| [`@well-played.gg/create-module`](./packages/create-module) | CLI scaffolding tool -- `npx @well-played.gg/create-module my-module` | [![npm](https://img.shields.io/npm/v/@well-played.gg/create-module)](https://www.npmjs.com/package/@well-played.gg/create-module) |
| [`@well-played.gg/create-component`](./packages/create-component) | CLI scaffolding tool -- `npx @well-played.gg/create-component my-component` | [![npm](https://img.shields.io/npm/v/@well-played.gg/create-component)](https://www.npmjs.com/package/@well-played.gg/create-component) |
| [`@well-played.gg/cli`](./packages/cli) | Developer CLI -- init, login, dev server, GraphQL queries, and deploy to the Marketplace | [![npm](https://img.shields.io/npm/v/@well-played.gg/cli)](https://www.npmjs.com/package/@well-played.gg/cli) |

## Quick Start

### Integrate WellPlayed into your React app

```bash
npm install @well-played.gg/react-sdk @well-played.gg/typescript-sdk
```

```tsx
import { WellPlayedProvider } from '@well-played.gg/react-sdk';

function App() {
  return (
    <WellPlayedProvider
      organizationId="your-org-id"
      wpAppConfig={{
        scope: 'offline_access',
        client_id: 'your-client-id',
        redirect_uri: `${window.location.origin}/login`,
      }}
    >
      <YourApp />
    </WellPlayedProvider>
  );
}
```

### Build a Marketplace Module

```bash
npx @well-played.gg/create-module my-module
cd my-module
npm install
npm run dev
```

### Build a Web Component

```bash
npx @well-played.gg/create-component my-component
cd my-component
npm install
npm run dev
```

### Full Developer Workflow (CLI)

```bash
npm install -g @well-played.gg/cli
wellplayed init my-app
cd my-app
npm install
wellplayed login
wellplayed dev
wellplayed graphql 'query { currentAccount { id email } }' --data-only
wellplayed deploy --app-id YOUR_APP_ID
```

## Architecture

```
                    +-----------------+
                    |  @well-played.gg/cli |  init / login / dev / graphql / deploy
                    +--------+--------+
                             |
              +--------------+--------------+
              |                             |
   +----------v----------+    +-------------v-----------+
   | React Modules        |    | Web Components           |
   |                      |    |                           |
   | @well-played.gg/         |    | @well-played.gg/              |
   |   module-sdk         |    |   component-sdk           |
   |   module-ui          |    |                           |
   |   create-module      |    |   create-component        |
   +----------+-----------+    +-------------+-------------+
              |                              |
              +------------------------------+
              |
   +----------v-----------+
   | Core SDKs             |
   |                       |
   | @well-played.gg/      |
   |   typescript-sdk      |
   |   react-sdk           |
   +-----------------------+
```

**React Modules** run in iframes with `postMessage` handshake, authenticated via `x-module-token` JWT. Use `module-sdk` for runtime context and `module-ui` for themed components.

**Web Components** extend `WpElement` from `component-sdk`, receive a `PlatformBridge` at runtime for GraphQL, events, navigation, and theming.

**Core SDKs** provide the foundation -- TypeScript types generated from the live GraphQL schema, Apollo Client helpers, and React auth/data hooks.

## Development

```bash
# Install all workspace dependencies
yarn install

# Regenerate GraphQL types from the API
yarn graphql:generate

# Build a specific package
yarn workspace @well-played.gg/typescript-sdk build
yarn workspace @well-played.gg/module-sdk build

# Run the demo app
cd demo && yarn dev
```

## CI/CD

The GitHub Actions workflow automatically:

1. Fetches the latest GraphQL schema from the API
2. Detects schema changes via `graphql-inspector`
3. Bumps `typescript-sdk` and dependent package versions (patch for additive changes, minor for breaking)
4. Commits version bumps with `[skip ci]` to avoid infinite loops
5. Publishes only packages whose local version differs from npm

## License

[MIT](./LICENSE)

## Stay in Touch

- Author - [AlexMog](https://github.com/alexmog)
- Website - [well-played.gg](https://well-played.gg)
