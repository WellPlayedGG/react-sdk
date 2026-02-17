#!/usr/bin/env node
import { mkdirSync, writeFileSync, existsSync } from 'fs';
import { join, resolve } from 'path';

const moduleName = process.argv[2];
if (!moduleName) {
  console.error('Usage: npx @wellplayed/create-module <module-name>');
  process.exit(1);
}

// Validate module name: lowercase alphanumeric with hyphens only
if (!/^[a-z0-9]([a-z0-9-]*[a-z0-9])?$/.test(moduleName)) {
  console.error('Module name must be lowercase alphanumeric with hyphens (e.g., "my-module")');
  process.exit(1);
}

const targetDir = resolve(process.cwd(), moduleName);

// Ensure target is inside cwd (prevent path traversal)
if (!targetDir.startsWith(process.cwd())) {
  console.error('Invalid module name: would create directory outside current folder');
  process.exit(1);
}
if (existsSync(targetDir)) {
  console.error(`Directory ${moduleName} already exists`);
  process.exit(1);
}

// Escape helpers for defense-in-depth in generated template files.
// The regex above is the primary security boundary; these are secondary.
function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
function escapeJsString(str) {
  return str.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}

console.log(`Creating WellPlayed module: ${moduleName}`);

// Create directories
mkdirSync(join(targetDir, 'src'), { recursive: true });
mkdirSync(join(targetDir, 'dev'), { recursive: true });

// package.json
writeFileSync(join(targetDir, 'package.json'), JSON.stringify({
  name: moduleName,
  version: '0.1.0',
  type: 'module',
  main: 'dist/index.js',
  scripts: {
    dev: 'vite',
    build: 'vite build',
    preview: 'vite preview',
  },
  dependencies: {
    '@wellplayed/module-sdk': '^0.1.0',
  },
  peerDependencies: {
    react: '>=18.0.0',
    'react-dom': '>=18.0.0',
    '@apollo/client': '>=3.0.0',
  },
  devDependencies: {
    react: '^18.2.0',
    'react-dom': '^18.2.0',
    '@apollo/client': '^3.8.0',
    '@vitejs/plugin-react': '^4.0.0',
    typescript: '^5.0.0',
    vite: '^5.0.0',
  },
}, null, 2));

// tsconfig.json
writeFileSync(join(targetDir, 'tsconfig.json'), JSON.stringify({
  compilerOptions: {
    target: 'ES2020',
    module: 'ESNext',
    moduleResolution: 'bundler',
    jsx: 'react-jsx',
    strict: true,
    esModuleInterop: true,
    skipLibCheck: true,
    outDir: 'dist',
    declaration: true,
  },
  include: ['src'],
}, null, 2));

// vite.config.ts
writeFileSync(join(targetDir, 'vite.config.ts'), `import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: 'src/index.tsx',
      formats: ['es'],
      fileName: 'index',
    },
    rollupOptions: {
      external: ['react', 'react-dom', '@apollo/client', 'react/jsx-runtime'],
    },
  },
});
`);

// src/index.tsx
const componentName = moduleName
  .split('-')
  .map(s => s.charAt(0).toUpperCase() + s.slice(1))
  .join('');

writeFileSync(join(targetDir, 'src/index.tsx'), `import { defineModule } from '@wellplayed/module-sdk';
import { ${componentName} } from './${componentName}';

const module = defineModule({
  name: '${escapeJsString(moduleName)}',
  version: '0.1.0',
  component: ${componentName},
});

export default module.component;
`);

// src/Component.tsx
writeFileSync(join(targetDir, `src/${componentName}.tsx`), `import { useModuleContext, useModuleQuery } from '@wellplayed/module-sdk';

interface ${componentName}Props {
  title?: string;
}

export function ${componentName}({ title = '${escapeJsString(componentName)}' }: ${componentName}Props) {
  const { appId, moduleName, grantedPermissions } = useModuleContext();

  return (
    <div style={{
      padding: '24px',
      borderRadius: '8px',
      border: '1px solid var(--wp-color-primary, #2cb1bc)',
      backgroundColor: 'var(--wp-color-surface, #1a1a2e)',
      color: 'var(--wp-color-text, #e0e0e0)',
    }}>
      <h2 style={{ margin: '0 0 12px', fontFamily: 'var(--wp-font-heading)' }}>{title}</h2>
      <p style={{ margin: 0, fontSize: '14px', color: 'var(--wp-color-text-muted, #a0a0a0)' }}>
        Module: {moduleName} | App: {appId}
      </p>
      <p style={{ margin: '8px 0 0', fontSize: '12px' }}>
        Permissions: {grantedPermissions.join(', ')}
      </p>
    </div>
  );
}
`);

// dev/dev-shell.tsx
writeFileSync(join(targetDir, 'dev/dev-shell.tsx'), `import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Module from '../src/index';

const mockClient = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  cache: new InMemoryCache(),
});

function DevShell() {
  return (
    <ApolloProvider client={mockClient}>
      <div style={{ padding: 40, backgroundColor: '#0f0f0f', minHeight: '100vh' }}>
        <Module title="Dev Preview" />
      </div>
    </ApolloProvider>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <DevShell />
  </React.StrictMode>
);
`);

// dev/index.html
writeFileSync(join(targetDir, 'dev/index.html'), `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${escapeHtml(moduleName)} - Dev</title>
</head>
<body>
  <div id="root"></div>
  <script type="module" src="./dev-shell.tsx"></script>
</body>
</html>
`);

console.log(`\nModule created at ${targetDir}`);
console.log(`\nNext steps:`);
console.log(`  cd ${moduleName}`);
console.log(`  npm install`);
console.log(`  npm run dev     # development`);
console.log(`  npm run build   # production bundle`);
