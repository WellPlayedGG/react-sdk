# @well-played.gg/component-sdk

A lightweight SDK for building **Web Components** that run inside the WellPlayed platform. It provides a base custom element class (`WpElement`) with a built-in platform bridge for GraphQL, events, routing, theming, and user context, plus tagged-template helpers for authoring HTML and CSS.

## Installation

```bash
# npm
npm install @well-played.gg/component-sdk

# yarn
yarn add @well-played.gg/component-sdk
```

## What's Included

| Export | Description |
|--------|-------------|
| `WpElement` | Base `HTMLElement` subclass with platform bridge integration (GraphQL, events, navigation, theme, user context) |
| `html` | Tagged-template literal for composing HTML strings with interpolation |
| `css` | Tagged-template literal for composing CSS strings with interpolation |

## Quick Start

Scaffold a new component project with `@well-played.gg/create-component`:

```bash
npx @well-played.gg/create-component my-widget
cd my-widget
npm install
npm run dev
```

Or create a component manually:

```js
import { WpElement, css, html } from '@well-played.gg/component-sdk';

class MyWidget extends WpElement {
  connectedCallback() {
    this.render();
  }

  onPropsChanged() {
    this.render();
  }

  render() {
    const shadow = this.shadowRoot || this.attachShadow({ mode: 'open' });
    shadow.innerHTML = html`
      <style>${this.styles()}</style>
      <div class="container">
        <h3>${this.props.title || 'My Widget'}</h3>
        <slot></slot>
      </div>
    `;
  }

  styles() {
    return css`
      :host {
        display: block;
        font-family: var(--wp-font-family, sans-serif);
        color: var(--wp-color-text, #e2e8f0);
      }
      .container {
        padding: var(--wp-spacing-md, 1rem);
        background: var(--wp-color-surface, #1e293b);
        border-radius: var(--wp-radius-md, 8px);
      }
    `;
  }
}

customElements.define('wpe-my-widget', MyWidget);
```

## How It Fits into the WellPlayed Ecosystem

```
@well-played.gg/create-component   Scaffolds a new component project
         |
         v
@well-played.gg/component-sdk      Base class + helpers (this package)
         |
         v
WellPlayed Platform            Injects the PlatformBridge at runtime
         |
         v
@well-played.gg/module-sdk         React-based modules that can embed components
```

Components built with this SDK are **framework-agnostic Web Components**. They are registered as custom elements (prefixed `wpe-`) and rendered inside the WellPlayed platform. The platform injects a `PlatformBridge` at runtime, giving each component access to GraphQL operations, event messaging, navigation, theming, and user identity -- without requiring React or any other framework.

React-based modules built with `@well-played.gg/module-sdk` can embed these components directly in their markup via standard HTML custom element tags.

## API Reference

### `WpElement`

Base class extending `HTMLElement`. Subclass it to create platform-aware Web Components.

#### Accessors

| Property | Type | Description |
|----------|------|-------------|
| `props` | `Record<string, unknown>` | Read-only copy of the current component props, set by the platform |
| `theme` | `Record<string, string>` | Current platform theme (CSS variable map) |
| `user` | `Record<string, unknown> \| null` | Authenticated user object, or `null` if not logged in |
| `route` | `{ path: string; params: Record<string, string> }` | Current route information |

#### Methods

| Method | Signature | Description |
|--------|-----------|-------------|
| `query` | `(gql: string, variables?: Record<string, unknown>) => Promise<unknown>` | Execute a GraphQL query through the platform |
| `mutate` | `(gql: string, variables?: Record<string, unknown>) => Promise<unknown>` | Execute a GraphQL mutation through the platform |
| `subscribe` | `(gql: string, variables: Record<string, unknown>, onData: (data: unknown) => void) => () => void` | Subscribe to a GraphQL subscription; returns an unsubscribe function |
| `emit` | `(event: string, payload?: unknown) => void` | Emit a custom event to the platform event bus |
| `on` | `(event: string, handler: (payload?: unknown) => void) => () => void` | Listen for a platform event; returns an unsubscribe function |
| `invalidateQueries` | `(names: string[]) => void` | Invalidate cached GraphQL queries by name |
| `navigate` | `(path: string) => void` | Navigate to a platform route |

#### Lifecycle Hook

| Method | Description |
|--------|-------------|
| `onPropsChanged(props: Record<string, unknown>)` | Override in your subclass to react when the platform updates component props |

### `html`

```ts
function html(strings: TemplateStringsArray, ...values: unknown[]): string;
```

Tagged-template literal that interpolates values into an HTML string. Useful for building `innerHTML` inside `render()`.

### `css`

```ts
function css(strings: TemplateStringsArray, ...values: unknown[]): string;
```

Tagged-template literal that interpolates values into a CSS string. Useful for dynamic styles that reference theme variables or component state.

## Theme CSS Custom Properties

The platform provides these CSS custom properties (use as fallbacks in your styles):

| Variable | Purpose |
|----------|---------|
| `--wp-font-family` | Base font family |
| `--wp-color-primary` | Primary brand color |
| `--wp-color-bg` | Page background |
| `--wp-color-surface` | Card / surface background |
| `--wp-color-text` | Default text color |
| `--wp-spacing-md` | Medium spacing unit |
| `--wp-radius-md` | Medium border radius |

## Peer Dependencies

This package has **no runtime dependencies**. It targets ES2020 and ships as ESM. It requires a browser environment with Web Components support (`HTMLElement`, `customElements`, Shadow DOM).

## License

[MIT](../../LICENSE)
