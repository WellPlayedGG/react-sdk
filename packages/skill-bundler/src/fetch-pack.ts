import { fetch } from 'undici';
import { z } from 'zod';

const manifestSchema = z.object({
  version: z.string(),
  gitSha: z.string(),
  builtAt: z.string(),
  apiWarriorVersion: z.string(),
  schemaHash: z.string(),
});

type Manifest = z.infer<typeof manifestSchema>;

export type FetchedPack = {
  readonly manifest: Manifest;
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

// The MCP service does not currently expose `/pack.json`. When absent,
// derive a stable version marker from the `/llms-full.txt` ETag (which
// is content-hash-derived) so the bundled `.kp-version` still changes
// whenever the pack content changes.
function synthesizeManifest(llmsFullEtag: string | null): Manifest {
  const cleanEtag = (llmsFullEtag ?? '').replace(/^W\//, '').replaceAll('"', '');
  const version = cleanEtag || Date.now().toString();
  return {
    version,
    gitSha: version.slice(0, 12) || 'unknown',
    builtAt: new Date().toISOString(),
    apiWarriorVersion: 'unknown',
    schemaHash: cleanEtag || 'unknown',
  };
}

export async function fetchPack(baseUrl: string): Promise<FetchedPack> {
  const llmsFullResp = await fetch(`${baseUrl}/llms-full.txt`);
  if (!llmsFullResp.ok) throw new Error(`llms-full.txt fetch failed: ${llmsFullResp.status}`);
  const llmsFull = await llmsFullResp.text();

  const manifestResp = await fetch(`${baseUrl}/pack.json`, { headers: { accept: 'application/json' } });
  let manifest: Manifest;
  if (manifestResp.ok) {
    manifest = manifestSchema.parse(await manifestResp.json());
  } else if (manifestResp.status === 404) {
    manifest = synthesizeManifest(llmsFullResp.headers.get('etag'));
  } else {
    throw new Error(`manifest fetch failed: ${manifestResp.status}`);
  }

  type Guide = { readonly filename: string; readonly contents: string };

  const guideResults: ReadonlyArray<Guide | null> = await Promise.all(
    KNOWN_GUIDES.map(async (slug): Promise<Guide | null> => {
      const r = await fetch(`${baseUrl}/guides/${slug}.md`);
      if (!r.ok) return null;
      return { filename: `${slug}.md`, contents: await r.text() };
    })
  );
  const guides: ReadonlyArray<Guide> = guideResults.filter((g): g is Guide => g !== null);
  return { manifest, llmsFull, guides };
}
