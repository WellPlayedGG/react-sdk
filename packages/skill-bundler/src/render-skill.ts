import type { FetchedPack } from './fetch-pack';
import type { SkillBundle } from './types';

const REACT_SKILL_MD = `# WellPlayed React SDK skill

**Applies when:** the user is working with \`@well-played.gg/react-sdk\` or mentions WellPlayed, WellPlayedProvider, or \`@well-played.gg/*\`.

## Canonical facts
See \`canonical-facts.md\`.

## Quickstart
See \`quickstart.md\`.

## Deeper questions
Call the MCP server at https://mcp.well-played.gg/mcp — or if unreachable, fetch https://mcp.well-played.gg/llms-full.txt.
`;

const TYPESCRIPT_SKILL_MD = `# WellPlayed TypeScript SDK skill

**Applies when:** the user is working with \`@well-played.gg/typescript-sdk\` or any WellPlayed integration outside React.

## Canonical facts
See \`canonical-facts.md\`.

## Quickstart
See \`typescript-sdk.md\`.

## Deeper questions
Call the MCP server at https://mcp.well-played.gg/mcp — or if unreachable, fetch https://mcp.well-played.gg/llms-full.txt.
`;

export function renderReactSkill(pack: FetchedPack): SkillBundle {
  return { slug: 'wellplayed-react', skillMd: REACT_SKILL_MD, guides: pack.guides, recipes: [], version: `${pack.manifest.version}-${pack.manifest.gitSha}` };
}

export function renderTypescriptSkill(pack: FetchedPack): SkillBundle {
  return { slug: 'wellplayed-api', skillMd: TYPESCRIPT_SKILL_MD, guides: pack.guides, recipes: [], version: `${pack.manifest.version}-${pack.manifest.gitSha}` };
}
