# @well-played.gg/create-component

CLI scaffolding tool for creating new WellPlayed platform components. It generates a ready-to-develop Web Component project built on `@well-played.gg/component-sdk`, complete with Vite bundling, a dev preview shell, and a platform manifest.

## Usage

```bash
npx @well-played.gg/create-component <component-name>
```

The `<component-name>` argument is required. It determines the project directory name, the custom element tag (`wpe-<component-name>`), and the generated class name (PascalCase).

```bash
npx @well-played.gg/create-component leaderboard
```

This creates a `leaderboard/` directory in the current working directory with everything needed to start building.

## Scaffolded Project Structure

```
leaderboard/
  package.json          # @wellplayed-component/leaderboard, depends on @well-played.gg/component-sdk
  vite.config.js        # Vite library-mode build (ES module output)
  manifest.json         # Platform component manifest (tag name, props schema, events)
  src/
    index.js            # Web Component class extending WpElement
  dev/
    index.html          # Local dev preview with WellPlayed CSS custom properties
```

### Key Generated Files

**`package.json`** -- Scoped under `@wellplayed-component/`, pre-configured with:
- `@well-played.gg/component-sdk` as a dependency
- `vite` as a dev dependency
- `dev`, `build`, and `preview` scripts

**`src/index.js`** -- A Web Component class that extends `WpElement` from `@well-played.gg/component-sdk`. Uses Shadow DOM with `html` and `css` tagged template helpers. Includes a `render()` method and a `styles()` method using WellPlayed CSS custom properties (`--wp-color-*`, `--wp-font-*`, `--wp-spacing-*`, `--wp-radius-*`).

**`manifest.json`** -- Declares the component for the WellPlayed platform, including:
- `tagName` -- the custom element tag (e.g., `wpe-leaderboard`)
- `displayName` -- human-readable name (PascalCase)
- `entryFile` -- path to the built bundle
- `propsSchema` -- typed prop definitions with defaults
- `events` -- emitted events (empty by default)
- `category` -- set to `custom`

**`dev/index.html`** -- A standalone HTML page that loads the component with mock WellPlayed theme variables for local development.

**`vite.config.js`** -- Configured in library mode, outputting a single ES module to `dist/`.

## Relation to @well-played.gg/component-sdk

This tool generates projects that depend on `@well-played.gg/component-sdk`. The SDK provides:

- **`WpElement`** -- Base class extending `HTMLElement` with a platform bridge for GraphQL queries/mutations/subscriptions, event emission, navigation, theme access, user context, and route information. The platform injects the bridge at runtime.
- **`html`** and **`css`** -- Tagged template literal helpers for writing markup and styles inline.

Components built with the SDK are Web Components (custom elements) that the WellPlayed platform renders inside its page builder. The platform communicates with each component through the `PlatformBridge` interface, which is injected automatically -- component authors interact with it via the `WpElement` methods (`this.query()`, `this.mutate()`, `this.emit()`, `this.navigate()`, etc.).

## Development Workflow

```bash
# Scaffold the component
npx @well-played.gg/create-component my-widget

# Enter the project and install dependencies
cd my-widget
npm install

# Start the Vite dev server (serves dev/index.html)
npm run dev

# Build for production (outputs to dist/)
npm run build
```

## Options

| Argument | Required | Description |
|---|---|---|
| `<component-name>` | Yes | Name of the component. Used for the directory, custom element tag (`wpe-<name>`), class name (PascalCase), and package name (`@wellplayed-component/<name>`). Use lowercase with hyphens (e.g., `match-ticker`). |

No additional flags or options are supported. The tool is intentionally minimal -- it scaffolds the project and gets out of the way.

## Comparison with @well-played.gg/create-module

| | `@well-played.gg/create-component` | `@well-played.gg/create-module` |
|---|---|---|
| **Output** | Web Component (custom element) | React component (federated module) |
| **Base SDK** | `@well-played.gg/component-sdk` | `@well-played.gg/module-sdk` |
| **Language** | JavaScript | TypeScript |
| **Rendering** | Shadow DOM, `html`/`css` template tags | React JSX |
| **Platform integration** | `PlatformBridge` via `WpElement` | `useModuleContext`, `useModuleQuery` hooks |
| **Manifest** | `manifest.json` with `componentModules` | None (uses `defineModule()`) |

Components are lightweight, framework-agnostic custom elements ideal for self-contained UI widgets. Modules are React-based extensions with access to Apollo Client and the full React ecosystem.
