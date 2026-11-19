import { statSync } from 'node:fs';
import { homedir } from 'node:os';
import { join } from 'node:path';
import { setTimeout as sleep } from 'node:timers/promises';
import { describe, expect, it, vi } from 'vitest';

const undiciMock = vi.hoisted(() => ({ fetch: vi.fn(), request: vi.fn() }));

vi.mock('undici', () => undiciMock);
vi.mock('node:os', async (importOriginal) => {
  const os = await importOriginal<typeof import('node:os')>();
  const { mkdtempSync } = await import('node:fs');
  const { join: joinPath } = await import('node:path');
  const home = mkdtempSync(joinPath(os.tmpdir(), 'wellplayed-cli-home-'));
  return { ...os, homedir: () => home };
});

import { getCredentials, saveCredentials } from '../src/auth/token-store';
import { graphqlRequest } from '../src/utils/api-client';

function fakeHydraTokenEndpoint(firstRefreshToken: string): void {
  const usableRefreshTokens = new Set([firstRefreshToken]);
  let rotation = 0;
  undiciMock.fetch.mockImplementation(async (_url: string, init: { body: string }) => {
    const refreshToken = new URLSearchParams(init.body).get('refresh_token') ?? '';
    const accepted = usableRefreshTokens.delete(refreshToken);
    await sleep(50);
    if (!accepted) {
      return {
        ok: false,
        status: 400,
        text: async () =>
          JSON.stringify({ error: 'invalid_grant', error_description: 'The refresh token was already used.' }),
      };
    }
    rotation += 1;
    usableRefreshTokens.add(`refresh-${rotation}`);
    return {
      ok: true,
      status: 200,
      text: async () =>
        JSON.stringify({
          access_token: `access-${rotation}`,
          refresh_token: `refresh-${rotation}`,
          expires_in: 3600,
          scope: 'openid offline_access',
          token_type: 'bearer',
        }),
    };
  });
}

describe('concurrent access-token refresh', () => {
  it('sends a single refresh to Hydra when two requests find the same expired token', async () => {
    fakeHydraTokenEndpoint('refresh-0');
    undiciMock.request.mockImplementation(async (_url: string, init: { headers: Record<string, string> }) => ({
      statusCode: 200,
      body: { text: async () => JSON.stringify({ data: { authorization: init.headers.Authorization } }) },
    }));
    saveCredentials({ accessToken: 'access-0', refreshToken: 'refresh-0', expiresAt: Date.now() - 1000 });

    const results = await Promise.all([graphqlRequest('query { a }'), graphqlRequest('query { b }')]);

    expect(undiciMock.fetch).toHaveBeenCalledTimes(1);
    expect(results).toEqual([{ authorization: 'Bearer access-1' }, { authorization: 'Bearer access-1' }]);
    expect(getCredentials()).toMatchObject({ accessToken: 'access-1', refreshToken: 'refresh-1' });
    expect(statSync(join(homedir(), '.wellplayed', 'credentials.json')).mode & 0o777).toBe(0o600);
  });
});
