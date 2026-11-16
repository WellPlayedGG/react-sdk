import { describe, it, expect, vi } from 'vitest';

const undiciMock = vi.hoisted(() => ({ request: vi.fn() }));
const tokenStoreMock = vi.hoisted(() => ({
  getCredentials: vi.fn(),
  isCredentialsExpired: vi.fn(),
  saveCredentials: vi.fn(),
  clearCredentials: vi.fn(),
}));

vi.mock('undici', () => undiciMock);
vi.mock('../src/auth/token-store.js', () => tokenStoreMock);

import { graphqlRequestRaw } from '../src/utils/api-client';

describe('graphqlRequestRaw with a guest session', () => {
  it('sends x-guest-session without Authorization and without stored credentials', async () => {
    undiciMock.request.mockResolvedValueOnce({
      statusCode: 200,
      body: { text: async () => JSON.stringify({ data: { guestMe: { sessionPlayerId: 'p1' } } }) },
    });

    const envelope = await graphqlRequestRaw('query { guestMe { sessionPlayerId } }', undefined, {
      organizationId: 'my-org',
      headers: { 'X-Trace': 'abc' },
      guestSession: 'wpgs_token',
    });

    expect(envelope).toEqual({ data: { guestMe: { sessionPlayerId: 'p1' } } });
    expect(tokenStoreMock.getCredentials).not.toHaveBeenCalled();
    const { headers } = undiciMock.request.mock.calls[0][1];
    expect(headers).toEqual({
      'X-Trace': 'abc',
      'Content-Type': 'application/json',
      'x-guest-session': 'wpgs_token',
      'organization-id': 'my-org',
    });
  });
});
