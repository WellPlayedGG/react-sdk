# @well-played.gg/cli

Developer CLI for the WellPlayed Marketplace. Scaffold, develop, and deploy marketplace apps that extend the WellPlayed console and platform.

## Requirements

- Node.js >= 18

## Installation

```bash
npm install -g @well-played.gg/cli
```

This installs the `wellplayed` binary globally.

## Commands

### `wellplayed init [name]`

Scaffold a new marketplace app project.

```bash
wellplayed init my-app
```

The interactive wizard prompts for:

| Prompt | Description |
|--------|-------------|
| **App name** | Lowercase alphanumeric with hyphens (e.g. `my-app`) |
| **Display name** | Human-readable name shown in the marketplace |
| **Description** | Short description of the app |
| **Features** | Console Extensions and/or Platform Modules |

The command creates a project directory with:

- `wellplayed.json` -- app manifest and configuration
- `package.json` -- with React, TypeScript, and Vite preconfigured
- `tsconfig.json`
- `extensions/src/` -- sample console extension (if selected)
- `platform-modules/src/` -- sample platform module (if selected)

### `wellplayed login`

Authenticate with WellPlayed using the OAuth Device Flow.

```bash
wellplayed login
```

1. The CLI requests a device code from the WellPlayed API.
2. A verification URL and user code are displayed. The browser opens automatically.
3. After you authorize in the browser, the CLI receives an access token.
4. The token is stored locally at `~/.wellplayed/credentials.json` (mode `0600`).

### `wellplayed dev`

Start a local Vite dev server for your app.

```bash
wellplayed dev
wellplayed dev --port 4000
```

| Option | Default | Description |
|--------|---------|-------------|
| `-p, --port <port>` | `3100` | Port for the dev server |

The dev server serves extension and module bundles at:

- `http://localhost:<port>/extension.js`
- `http://localhost:<port>/module.js`

Requires a valid `wellplayed.json` in the current directory.

### `wellplayed deploy`

Build and deploy your app to the WellPlayed Marketplace.

```bash
wellplayed deploy --app-id <appId>
```

| Option | Required | Description |
|--------|----------|-------------|
| `--app-id <appId>` | Yes | Your Marketplace App ID |

**Prerequisites:** Run `npm run build` before deploying. The command expects production bundles at `dist/extension.js` and/or `dist/module.js` depending on your configuration.

**Deploy workflow:**

1. **Read config** -- Loads `wellplayed.json` and validates bundle files exist.
2. **Create release** -- Sends the app manifest and version to the GraphQL API via the `appCreateRelease` mutation. Receives presigned upload URLs.
3. **Upload bundles** -- Uploads `dist/extension.js` and/or `dist/module.js` to the presigned S3 URLs.
4. **Finalize release** -- Calls `appFinalizeRelease` to trigger server-side bundle validation. Exits with errors if validation fails.
5. **Poll for review** -- Polls the release status every 5 seconds (up to 5 minutes). Reports `APPROVED` or `REJECTED` with review details.

## Configuration (`wellplayed.json`)

The `wellplayed.json` file is the app manifest, created by `wellplayed init` and read by all other commands.

```json
{
  "name": "my-app",
  "version": "1.0.0",
  "displayName": "My App",
  "description": "A WellPlayed marketplace app",
  "scopes": ["metafields:read", "metafields:write"],
  "extensions": [
    {
      "name": "sample-tab",
      "type": "tab",
      "displayName": "My Tab",
      "entry": "extensions/src/sample-tab/index.tsx",
      "activePages": ["/tournaments/:tournamentId"]
    }
  ],
  "platformModules": [
    {
      "name": "sample-widget",
      "displayName": "Sample Widget",
      "entry": "platform-modules/src/sample-widget/index.tsx",
      "propsSchema": {},
      "events": []
    }
  ]
}
```

| Field | Type | Description |
|-------|------|-------------|
| `name` | `string` | Machine-readable app identifier (lowercase, hyphens) |
| `version` | `string` | Semver version, sent with each release |
| `displayName` | `string` | Human-readable name for the marketplace listing |
| `description` | `string` | Short app description |
| `scopes` | `string[]` | API permission scopes the app requires |
| `extensions` | `array` | Console extensions (tabs, panels, etc.) |
| `extensions[].name` | `string` | Unique extension identifier |
| `extensions[].type` | `string` | Extension type (e.g. `tab`) |
| `extensions[].displayName` | `string` | Label shown in the console UI |
| `extensions[].entry` | `string` | Source file entry point |
| `extensions[].activePages` | `string[]` | Console routes where the extension appears |
| `platformModules` | `array` | Frontend modules rendered on the generated platform |
| `platformModules[].name` | `string` | Unique module identifier |
| `platformModules[].displayName` | `string` | Label shown in the page builder |
| `platformModules[].entry` | `string` | Source file entry point |
| `platformModules[].propsSchema` | `object` | JSON schema defining configurable props |
| `platformModules[].events` | `string[]` | Events the module can emit |

## Authentication

Credentials are stored at `~/.wellplayed/credentials.json` in a directory with `0700` permissions. The credentials file itself is written with `0600` permissions.

The token includes an optional expiry. Expired tokens are treated as missing -- run `wellplayed login` again to re-authenticate.

## Environment Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `WELLPLAYED_API_URL` | `https://api.warrior.well-played.gg/` | Override the API base URL |

## Related Packages

The CLI is part of the `@wellplayed` SDK ecosystem:

| Package | Description |
|---------|-------------|
| [`@well-played.gg/module-sdk`](../module-sdk) | SDK for building platform modules (lifecycle hooks, API bridge, event system) |
| [`@well-played.gg/component-sdk`](../component-sdk) | SDK for building reusable platform components |
| [`@well-played.gg/module-ui`](../module-ui) | Pre-built UI components for platform modules |
| [`@well-played.gg/create-module`](../create-module) | `npm create @well-played.gg/module` -- scaffolds a standalone module project |
| [`@well-played.gg/create-component`](../create-component) | `npm create @well-played.gg/component` -- scaffolds a standalone component project |

**Typical workflow:**

1. `wellplayed init` scaffolds a full app with extensions and/or platform modules.
2. Build extensions using React. Build platform modules using `@well-played.gg/module-sdk` and `@well-played.gg/module-ui`.
3. `wellplayed dev` runs a local Vite server for development.
4. `wellplayed deploy --app-id <id>` packages and submits the app for marketplace review.

For standalone modules or components outside of a full app, use `@well-played.gg/create-module` or `@well-played.gg/create-component` instead.

## License

MIT
