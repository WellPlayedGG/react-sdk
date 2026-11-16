import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { buildSchema, getVariableValues, parse, validate, type OperationDefinitionNode } from 'graphql';

const apiClientMock = vi.hoisted(() => ({ graphqlRequest: vi.fn() }));
const undiciMock = vi.hoisted(() => ({ request: vi.fn() }));
const appConfig = vi.hoisted(() => ({
  name: 'demo',
  displayName: 'Demo',
  version: '1.2.0',
  scopes: [] as string[],
  extensions: [] as Array<Record<string, unknown>>,
  platformModules: [] as Array<Record<string, unknown>>,
}));

vi.mock('../src/utils/api-client.js', () => apiClientMock);
vi.mock('undici', () => undiciMock);
vi.mock('../src/utils/sleep.js', () => ({ sleep: vi.fn(async () => undefined) }));
vi.mock('../src/auth/token-store.js', () => ({ getToken: () => 'token' }));
vi.mock('../src/config/app-config.js', () => ({ readAppConfig: () => appConfig }));
vi.mock('node:fs', async (importOriginal) => {
  const actual = await importOriginal<typeof import('node:fs')>();
  return {
    ...actual,
    readFileSync: vi.fn((...args: Parameters<typeof actual.readFileSync>) =>
      /(extension|module)\.js$/.test(String(args[0])) ? Buffer.from('bundle source') : actual.readFileSync(...args),
    ),
  };
});

import { log } from '../src/utils/logger.js';
import { deployCommand } from '../src/commands/deploy';

const schema = buildSchema(
  readFileSync(fileURLToPath(new URL('../../../schema.graphql', import.meta.url)), 'utf-8'),
);

function respondWith(releaseStatus: string, listingStatus: string): void {
  apiClientMock.graphqlRequest.mockImplementation(async (query: string) => {
    if (query.includes('appCreateRelease')) {
      return {
        appCreateRelease: {
          release: { id: 'release-1', version: '1.2.0', status: 'PENDING_REVIEW' },
          extensionUploadUrl: {
            url: 'https://upload.example.invalid',
            fields: [
              { key: 'key', value: 'stg/apps/app-1/pending/u1/extension.js' },
              { key: 'Policy', value: 'c2lnbmVk' },
            ],
          },
          moduleUploadUrl: null,
        },
      };
    }
    if (query.includes('appFinalizeRelease')) {
      return { appFinalizeRelease: { valid: true, errors: [] } };
    }
    return {
      appReleases: [
        {
          id: 'release-1',
          version: '1.2.0',
          status: releaseStatus,
          reviewResult: { passed: releaseStatus !== 'REJECTED', checks: [] },
        },
      ],
      marketplaceApp: { status: listingStatus },
    };
  });
}


describe('wellplayed deploy review outcome', () => {
  let success: ReturnType<typeof vi.spyOn>;
  let error: ReturnType<typeof vi.spyOn>;
  let exit: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    apiClientMock.graphqlRequest.mockReset();
    undiciMock.request.mockReset();
    undiciMock.request.mockResolvedValue({ statusCode: 204, body: { text: async () => '' } });
    appConfig.scopes = [];
    appConfig.extensions = [];
    appConfig.platformModules = [];
    vi.spyOn(log, 'info').mockImplementation(() => undefined);
    vi.spyOn(log, 'step').mockImplementation(() => undefined);
    vi.spyOn(log, 'warn').mockImplementation(() => undefined);
    success = vi.spyOn(log, 'success').mockImplementation(() => undefined);
    error = vi.spyOn(log, 'error').mockImplementation(() => undefined);
    exit = vi.spyOn(process, 'exit').mockImplementation(() => undefined as never);
  });

  afterEach(() => vi.restoreAllMocks());

  async function deploy(): Promise<void> {
    await deployCommand.parseAsync(['--app-id', 'app-1', '--org', 'org-1'], { from: 'user' });
  }

  it('reports a publication when the approved release reached the listing', async () => {
    respondWith('APPROVED', 'PUBLISHED');

    await deploy();

    expect(success).toHaveBeenCalledWith('App v1.2.0 published successfully!');
    expect(exit).not.toHaveBeenCalled();
  });

  it.each(['SUSPENDED', 'REJECTED'])(
    'fails without claiming a publication when the listing is %s',
    async (listingStatus) => {
      respondWith('APPROVED', listingStatus);

      await deploy();

      expect(success).not.toHaveBeenCalled();
      expect(error).toHaveBeenCalledWith(
        `App v1.2.0 passed review, but its marketplace listing is ${listingStatus}, so nothing was published.`,
      );
      expect(exit).toHaveBeenCalledWith(1);
    },
  );

  it('still fails a rejected review', async () => {
    respondWith('REJECTED', 'PUBLISHED');

    await deploy();

    expect(success).not.toHaveBeenCalled();
    expect(error).toHaveBeenCalledWith('App review failed.');
    expect(exit).toHaveBeenCalledWith(1);
  });

  it('sends only documents that are valid against the API schema', async () => {
    respondWith('APPROVED', 'PUBLISHED');

    await deploy();

    const documents = apiClientMock.graphqlRequest.mock.calls.map(([query]: [string]) => query);
    expect(documents.some((query) => query.includes('appCreateRelease'))).toBe(true);
    expect(documents.some((query) => query.includes('appFinalizeRelease'))).toBe(true);
    for (const query of documents) {
      expect(validate(schema, parse(query)).map((e) => e.message)).toEqual([]);
    }
  });

  it('sends the organization-id of --org with every API call', async () => {
    respondWith('APPROVED', 'PUBLISHED');

    await deploy();

    const calls = apiClientMock.graphqlRequest.mock.calls;
    expect(calls.length).toBeGreaterThanOrEqual(3);
    for (const [, , options] of calls) {
      expect(options).toEqual({ organizationId: 'org-1' });
    }
  });

  it('builds the upload form from the presigned field list', async () => {
    appConfig.extensions = [{ name: 'panel', type: 'tab', displayName: 'Panel', entry: 'src/panel.tsx', activePages: [] }];
    respondWith('APPROVED', 'PUBLISHED');

    await deploy();

    expect(undiciMock.request).toHaveBeenCalledTimes(1);
    const [url, init] = undiciMock.request.mock.calls[0];
    const form = (init.body as Buffer).toString('utf-8');
    expect(url).toBe('https://upload.example.invalid');
    expect(form).toContain('name="key"\r\n\r\nstg/apps/app-1/pending/u1/extension.js\r\n');
    expect(form).toContain('name="Policy"\r\n\r\nc2lnbmVk\r\n');
    expect(form).not.toContain('[object Object]');
    expect(form).toContain('bundle source');
    const contentTypeField = form.indexOf('name="Content-Type"\r\n\r\napplication/javascript\r\n');
    expect(contentTypeField).toBeGreaterThan(-1);
    expect(contentTypeField).toBeLessThan(form.indexOf('name="file"'));
  });

  it('maps wellplayed.json to a manifest that AppManifestInput accepts', async () => {
    appConfig.scopes = ['organization:marketplace:view'];
    appConfig.extensions = [
      { name: 'panel', type: 'tab', displayName: 'Panel', entry: 'src/panel.tsx', activePages: ['/tournaments/:id'] },
    ];
    appConfig.platformModules = [
      {
        name: 'scoreboard',
        displayName: 'Scoreboard',
        entry: 'src/scoreboard.tsx',
        propsSchema: {
          title: { type: 'STRING', label: 'Title', defaultValue: 3 },
          mode: { type: 'SELECT', label: 'Mode', required: true, options: [{ label: 'Live', value: 'live' }] },
        },
        events: ['goal'],
      },
    ];
    respondWith('APPROVED', 'PUBLISHED');

    await deploy();

    const [query, variables] = apiClientMock.graphqlRequest.mock.calls.find(([q]: [string]) =>
      q.includes('appCreateRelease'),
    );
    const operation = parse(query).definitions[0] as OperationDefinitionNode;
    expect(getVariableValues(schema, operation.variableDefinitions ?? [], variables).errors).toBeUndefined();
    expect(variables.input.manifest).toEqual({
      version: '1.0',
      permissions: ['organization:marketplace:view'],
      extensions: [{ type: 'TAB', label: 'Panel', activePages: ['/tournaments/:id'] }],
      webhookEvents: [],
      metafieldNamespaces: [],
      frontendModules: [
        {
          name: 'scoreboard',
          displayName: 'Scoreboard',
          version: '1.2.0',
          events: [{ name: 'goal' }],
          propsSchema: [
            { key: 'title', type: 'STRING', label: 'Title', required: false, defaultValue: '3' },
            { key: 'mode', type: 'SELECT', label: 'Mode', required: true, options: [{ label: 'Live', value: 'live' }] },
          ],
        },
      ],
    });
  });

  it('refuses an unknown extension type before calling the API', async () => {
    appConfig.extensions = [{ name: 'panel', type: 'sidebar', displayName: 'Panel', entry: 'src/panel.tsx', activePages: [] }];
    respondWith('APPROVED', 'PUBLISHED');

    await deploy();

    expect(error).toHaveBeenCalledWith(
      'Extension "panel" has type "sidebar", which WellPlayed does not support. Use one of: tab, admin-navigation, dashboard-widget.',
    );
    expect(exit).toHaveBeenCalledWith(1);
    expect(apiClientMock.graphqlRequest).not.toHaveBeenCalled();
  });
});
