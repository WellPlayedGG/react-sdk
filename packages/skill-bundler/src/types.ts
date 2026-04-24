export type SkillBundle = {
  readonly slug: string;
  readonly skillMd: string;
  readonly guides: ReadonlyArray<{ readonly filename: string; readonly contents: string }>;
  readonly recipes: ReadonlyArray<{ readonly filename: string; readonly contents: string }>;
  readonly version: string;
};
