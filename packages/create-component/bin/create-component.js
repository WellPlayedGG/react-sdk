#!/usr/bin/env node

import { mkdirSync, writeFileSync, cpSync } from 'fs';
import { join, resolve } from 'path';

const name = process.argv[2];
if (!name) {
  console.error('Usage: npx @well-played.gg/create-component <component-name>');
  process.exit(1);
}

const dir = resolve(process.cwd(), name);
const tagName = `wpe-${name}`;

console.log(`Creating component: ${tagName} in ${dir}`);

mkdirSync(join(dir, 'src'), { recursive: true });
mkdirSync(join(dir, 'dev'), { recursive: true });

// package.json
writeFileSync(join(dir, 'package.json'), JSON.stringify({
  name: `@wellplayed-component/${name}`,
  version: '1.0.0',
  type: 'module',
  main: `dist/${name}.js`,
  scripts: {
    dev: 'vite dev',
    build: 'vite build --mode library',
    preview: 'vite preview'
  },
  dependencies: {
    '@well-played.gg/component-sdk': '^1.0.0'
  },
  devDependencies: {
    vite: '^6.0.0'
  }
}, null, 2));

// vite.config.js
writeFileSync(join(dir, 'vite.config.js'), `
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.js',
      formats: ['es'],
      fileName: '${name}',
    },
    rollupOptions: {
      external: [],
    },
  },
});
`);

// src/index.js
writeFileSync(join(dir, 'src', 'index.js'), `
import { WpElement, css, html } from '@well-played.gg/component-sdk';

class ${toPascalCase(name)} extends WpElement {
  connectedCallback() {
    this.render();
  }

  onPropsChanged() {
    this.render();
  }

  render() {
    const shadow = this.shadowRoot || this.attachShadow({ mode: 'open' });
    shadow.innerHTML = html\`
      <style>\${this.styles()}</style>
      <div class="container">
        <h3>\${this.props.title || '${toPascalCase(name)}'}</h3>
        <slot></slot>
      </div>
    \`;
  }

  styles() {
    return css\`
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
      h3 { margin: 0 0 0.5rem; }
    \`;
  }
}

customElements.define('${tagName}', ${toPascalCase(name)});
`);

// manifest.json
writeFileSync(join(dir, 'manifest.json'), JSON.stringify({
  componentModules: [{
    tagName: tagName,
    displayName: toPascalCase(name),
    entryFile: `dist/${name}.js`,
    propsSchema: {
      title: { type: 'string', required: false, default: toPascalCase(name) }
    },
    events: [],
    category: 'custom'
  }]
}, null, 2));

// dev/index.html
writeFileSync(join(dir, 'dev', 'index.html'), `<!DOCTYPE html>
<html>
<head>
  <title>${toPascalCase(name)} — Dev</title>
  <style>
    :root {
      --wp-color-primary: #6366f1;
      --wp-color-bg: #0f172a;
      --wp-color-surface: #1e293b;
      --wp-color-text: #e2e8f0;
      --wp-font-family: system-ui, sans-serif;
      --wp-spacing-md: 1rem;
      --wp-radius-md: 8px;
    }
    body { background: var(--wp-color-bg); padding: 2rem; }
  </style>
</head>
<body>
  <${tagName} title="Hello World"></${tagName}>
  <script type="module" src="../src/index.js"></script>
</body>
</html>`);

console.log('Done! Next steps:');
console.log(`  cd ${name}`);
console.log('  npm install');
console.log('  npm run dev');

function toPascalCase(str) {
  return str.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join('');
}
