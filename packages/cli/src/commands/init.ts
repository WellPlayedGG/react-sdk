import { Command } from 'commander';
import inquirer from 'inquirer';
import { existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { log } from '../utils/logger.js';
import { type WellPlayedConfig, writeAppConfig } from '../config/app-config.js';

export const initCommand = new Command('init')
  .description('Scaffold a new WellPlayed marketplace app')
  .argument('[name]', 'App name')
  .action(async (name?: string) => {
    const answers = await inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'App name:',
        default: name ?? 'my-app',
        validate: (v: string) => /^[a-z0-9-]+$/.test(v) || 'Must be lowercase alphanumeric with hyphens',
      },
      {
        type: 'input',
        name: 'displayName',
        message: 'Display name:',
        default: (ans: { name: string }) =>
          ans.name
            .split('-')
            .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
            .join(' '),
      },
      {
        type: 'input',
        name: 'description',
        message: 'Description:',
        default: 'A WellPlayed marketplace app',
      },
      {
        type: 'checkbox',
        name: 'features',
        message: 'Which features?',
        choices: [
          { name: 'Console Extensions', value: 'extensions', checked: true },
          { name: 'Platform Modules', value: 'modules' },
        ],
      },
    ]);

    const dir = join(process.cwd(), answers.name);
    if (existsSync(dir)) {
      log.error(`Directory ${answers.name} already exists`);
      return;
    }

    log.step(1, 'Creating project directory...');
    mkdirSync(dir, { recursive: true });

    const hasExtensions = answers.features.includes('extensions');
    const hasModules = answers.features.includes('modules');

    // Create wellplayed.json
    const config: WellPlayedConfig = {
      name: answers.name,
      version: '1.0.0',
      displayName: answers.displayName,
      description: answers.description,
      scopes: ['metafields:read', 'metafields:write'],
      extensions: hasExtensions
        ? [
            {
              name: 'sample-tab',
              type: 'tab',
              displayName: 'My Tab',
              entry: 'extensions/src/sample-tab/index.tsx',
              activePages: ['/tournaments/:tournamentId'],
            },
          ]
        : [],
      platformModules: hasModules
        ? [
            {
              name: 'sample-widget',
              displayName: 'Sample Widget',
              entry: 'platform-modules/src/sample-widget/index.tsx',
              propsSchema: {},
              events: [],
            },
          ]
        : [],
    };
    writeAppConfig(config, dir);

    // Create package.json
    log.step(2, 'Creating package.json...');
    writeFileSync(
      join(dir, 'package.json'),
      JSON.stringify(
        {
          name: answers.name,
          version: '1.0.0',
          private: true,
          scripts: {
            dev: 'vite',
            build: 'vite build',
          },
          dependencies: {
            react: '^18.3.0',
            'react-dom': '^18.3.0',
          },
          devDependencies: {
            '@types/react': '^18.3.0',
            '@types/react-dom': '^18.3.0',
            typescript: '^5.5.0',
            vite: '^5.4.0',
            '@vitejs/plugin-react': '^4.3.0',
          },
        },
        null,
        2,
      ),
    );

    // Create tsconfig
    writeFileSync(
      join(dir, 'tsconfig.json'),
      JSON.stringify(
        {
          compilerOptions: {
            target: 'ES2020',
            module: 'ESNext',
            moduleResolution: 'bundler',
            jsx: 'react-jsx',
            strict: true,
            esModuleInterop: true,
            skipLibCheck: true,
          },
          include: ['**/*.ts', '**/*.tsx'],
        },
        null,
        2,
      ),
    );

    // Create source directories and sample files
    if (hasExtensions) {
      log.step(3, 'Creating extension scaffold...');
      const extDir = join(dir, 'extensions', 'src', 'sample-tab');
      mkdirSync(extDir, { recursive: true });
      writeFileSync(
        join(extDir, 'index.tsx'),
        `import React from 'react';

export default function SampleTab() {
  return (
    <div style={{ padding: 16 }}>
      <h2>Sample Extension Tab</h2>
      <p>This is a sample console extension. Edit this file to get started.</p>
    </div>
  );
}
`,
      );
    }

    if (hasModules) {
      log.step(hasExtensions ? 4 : 3, 'Creating module scaffold...');
      const modDir = join(dir, 'platform-modules', 'src', 'sample-widget');
      mkdirSync(modDir, { recursive: true });
      writeFileSync(
        join(modDir, 'index.tsx'),
        `import React from 'react';

interface SampleWidgetProps {
  title?: string;
}

export default function SampleWidget({ title = 'Hello' }: SampleWidgetProps) {
  return (
    <div style={{ padding: 16, border: '1px solid #333', borderRadius: 8 }}>
      <h3>{title}</h3>
      <p>This is a sample platform module. Edit this file to get started.</p>
    </div>
  );
}
`,
      );
    }

    log.success(`App scaffolded at ./${answers.name}`);
    log.info('Next steps:');
    log.info(`  cd ${answers.name}`);
    log.info('  npm install');
    log.info('  wellplayed login');
    log.info('  wellplayed dev');
  });
