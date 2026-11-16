import { describe, it, expect, vi } from 'vitest';

const written = vi.hoisted(() => ({ configs: [] as Array<{ scopes: string[] }> }));

vi.mock('inquirer', () => ({
  default: {
    prompt: vi.fn(async () => ({
      name: 'demo-app',
      displayName: 'Demo App',
      description: 'A demo',
      features: ['extensions', 'modules'],
    })),
  },
}));
vi.mock('node:fs', async (importOriginal) => ({
  ...(await importOriginal<typeof import('node:fs')>()),
  existsSync: vi.fn(() => false),
  mkdirSync: vi.fn(),
  writeFileSync: vi.fn(),
}));
vi.mock('../src/config/app-config.js', () => ({
  writeAppConfig: vi.fn((config: { scopes: string[] }) => written.configs.push(config)),
}));
vi.mock('../src/utils/logger.js', () => ({
  log: { info: vi.fn(), success: vi.fn(), warn: vi.fn(), error: vi.fn(), step: vi.fn() },
}));

import { initCommand } from '../src/commands/init';

describe('wellplayed init', () => {
  it('writes the catalog permission ids that replaced the metafields scopes', async () => {
    await initCommand.parseAsync([], { from: 'user' });

    expect(written.configs).toHaveLength(1);
    expect(written.configs[0].scopes).toEqual(['organization:marketplace:view', 'organization:marketplace:install']);
  });
});
