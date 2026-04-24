import { fetch } from 'undici';
import { z } from 'zod';

const manifestSchema = z.object({
  version: z.string(),
  gitSha: z.string(),
  builtAt: z.string(),
  apiWarriorVersion: z.string(),
  schemaHash: z.string(),
});

export type FetchedPack = {
  readonly manifest: z.infer<typeof manifestSchema>;
  readonly llmsFull: string;
  readonly guides: ReadonlyArray<{ readonly filename: string; readonly contents: string }>;
};

const KNOWN_GUIDES = [
  'quickstart',
  'canonical-facts',
  'react-sdk',
  'typescript-sdk',
  'auth-oidc-consumer',
  'identity-linking',
  'webhook-signing',
  'errors-for-consumers',
] as const;

export async function fetchPack(baseUrl: string): Promise<FetchedPack> {
  const manifestResp = await fetch(`${baseUrl}/pack.json`, { headers: { accept: 'application/json' } });
  if (!manifestResp.ok) throw new Error(`manifest fetch failed: ${manifestResp.status}`);
  const manifest = manifestSchema.parse(await manifestResp.json());

  const llmsFullResp = await fetch(`${baseUrl}/llms-full.txt`);
  const llmsFull = await llmsFullResp.text();

  type Guide = { readonly filename: string; readonly contents: string };

  const guideResults: ReadonlyArray<Guide | null> = await Promise.all(
    KNOWN_GUIDES.map(async (slug): Promise<Guide | null> => {
      const r = await fetch(`${baseUrl}/sdk-guides/${slug}.md`);
      if (!r.ok) return null;
      return { filename: `${slug}.md`, contents: await r.text() };
    })
  );
  const guides: ReadonlyArray<Guide> = guideResults.filter((g): g is Guide => g !== null);
  return { manifest, llmsFull, guides };
}
