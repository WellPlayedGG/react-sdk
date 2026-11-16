import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { buildSchema, parse, validate } from 'graphql';

const apiClientMock = vi.hoisted(() => ({ graphqlRequest: vi.fn() }));

vi.mock('../src/utils/api-client.js', () => apiClientMock);
vi.mock('../src/utils/sleep.js', () => ({ sleep: vi.fn(async () => undefined) }));
vi.mock('../src/auth/token-store.js', () => ({ getToken: () => 'token' }));
vi.mock('../src/config/app-config.js', () => ({
  readAppConfig: () => ({
    name: 'demo',
    displayName: 'Demo',
    version: '1.2.0',
    scopes: [],
    extensions: [],
    platformModules: [],
  }),
}));

import { log } from '../src/utils/logger.js';
import { deployCommand } from '../src/commands/deploy';

const schema = buildSchema(
  readFileSync(fileURLToPath(new URL('../../../schema.graphql', import.meta.url)), 'utf-8'),
);

function respondWith(releaseStatus: string, listingStatus: string): void {
  apiClientMock.graphqlRequest.mockImplementation(async (query: string) => {
    if (query.includes('appCreateRelease')) {
      return { appCreateRelease: { release: { id: 'release-1', version: '1.2.0', status: 'PENDING_REVIEW' } } };
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

function statusQuery(): string {
  const call = apiClientMock.graphqlRequest.mock.calls.find(
    ([query]: [string]) => !query.includes('appCreateRelease') && !query.includes('appFinalizeRelease'),
  );
  return call[0];
}

describe('wellplayed deploy review outcome', () => {
  let success: ReturnType<typeof vi.spyOn>;
  let error: ReturnType<typeof vi.spyOn>;
  let exit: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    apiClientMock.graphqlRequest.mockReset();
    vi.spyOn(log, 'info').mockImplementation(() => undefined);
    vi.spyOn(log, 'step').mockImplementation(() => undefined);
    vi.spyOn(log, 'warn').mockImplementation(() => undefined);
    success = vi.spyOn(log, 'success').mockImplementation(() => undefined);
    error = vi.spyOn(log, 'error').mockImplementation(() => undefined);
    exit = vi.spyOn(process, 'exit').mockImplementation(() => undefined as never);
  });

  afterEach(() => vi.restoreAllMocks());

  async function deploy(): Promise<void> {
    await deployCommand.parseAsync(['--app-id', 'app-1'], { from: 'user' });
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

  it('polls with a document that is valid against the API schema', async () => {
    respondWith('APPROVED', 'PUBLISHED');

    await deploy();

    expect(validate(schema, parse(statusQuery())).map((e) => e.message)).toEqual([]);
  });
});
