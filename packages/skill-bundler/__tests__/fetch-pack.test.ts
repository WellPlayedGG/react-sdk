import { describe, it, expect, vi } from 'vitest';
import { fetchPack } from '../src/fetch-pack';

vi.mock('undici', () => ({
  fetch: vi.fn().mockImplementation(async (url: string) => {
    if (url.endsWith('/pack.json')) {
      return { ok: true, json: async () => ({ version: '0.0.1', gitSha: 'abc', builtAt: '2026-04-19', apiWarriorVersion: '0.0.1', schemaHash: `sha256:${'a'.repeat(64)}` }) };
    }
    if (url.endsWith('/llms-full.txt')) return { ok: true, text: async () => '# full' };
    if (url.endsWith('/sdk-guides/index.json')) return { ok: false, status: 404 };
    if (url.includes('/sdk-guides/')) return { ok: true, text: async () => '# guide' };
    return { ok: false, status: 404 };
  }),
}));

describe('fetchPack', () => {
  it('fetches manifest and guides', async () => {
    const pack = await fetchPack('https://mock');
    expect(pack.manifest.version).toBe('0.0.1');
    expect(pack.guides.length).toBeGreaterThan(0);
  });
});
