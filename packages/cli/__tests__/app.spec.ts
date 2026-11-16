import { readFileSync } from 'node:fs';
import { describe, it, expect, vi } from 'vitest';

const apiClientMock = vi.hoisted(() => ({ graphqlRequest: vi.fn() }));

vi.mock('../src/utils/api-client.js', () => apiClientMock);

import { pinCommand } from '../src/commands/app';

describe('wellplayed pin --grant', () => {
  it('adds the granted permissions to the installation current grants', async () => {
    apiClientMock.graphqlRequest.mockImplementation(
      async (query: string, variables: { page?: { after: string | null } }) => {
        if (!query.includes('myMarketplaceInstallations')) return { appInstallationPin: { id: 'installation-1' } };
        return variables.page?.after === null
          ? {
              myMarketplaceInstallations: {
                nodes: [{ grantedPermissions: ['organization:event:view'], marketplaceApp: { slug: 'other-app' } }],
                pageInfo: { hasNextPage: true, endCursor: 'cursor-1' },
              },
            }
          : {
              myMarketplaceInstallations: {
                nodes: [
                  {
                    grantedPermissions: ['organization:emails:send', 'organization:event:view'],
                    marketplaceApp: { slug: 'my-notes' },
                  },
                ],
                pageInfo: { hasNextPage: false, endCursor: null },
              },
            };
      },
    );

    await pinCommand.parseAsync([
      'node',
      'wellplayed',
      '1.1.0',
      '--app',
      'my-notes',
      '--org',
      'my-org',
      '--grant',
      'organization:event:view',
      'organization:journal:view',
    ]);

    expect(apiClientMock.graphqlRequest).toHaveBeenLastCalledWith(
      expect.stringContaining('appInstallationPin'),
      {
        input: {
          appSlug: 'my-notes',
          version: '1.1.0',
          grantedPermissions: ['organization:emails:send', 'organization:event:view', 'organization:journal:view'],
        },
      },
      { organizationId: 'my-org' },
    );
  });
});

describe('wellplayed --version', () => {
  it('prints the version of the cli package.json', async () => {
    const { version }: { version: string } = JSON.parse(readFileSync(new URL('../package.json', import.meta.url), 'utf-8'));
    const write = vi.spyOn(process.stdout, 'write').mockReturnValue(true);
    vi.spyOn(process, 'exit').mockImplementation(() => {
      throw new Error('exit');
    });
    process.argv = ['node', 'wellplayed', '--version'];

    await expect(import('../src/index')).rejects.toThrow('exit');

    expect(write).toHaveBeenCalledWith(`${version}\n`);
    vi.restoreAllMocks();
  });
});
