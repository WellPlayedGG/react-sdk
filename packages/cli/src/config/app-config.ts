import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const CONFIG_FILENAME = 'wellplayed.json';

export interface WellPlayedConfig {
  name: string;
  version: string;
  displayName: string;
  description: string;
  scopes: string[];
  extensions: Array<{
    name: string;
    type: string;
    displayName: string;
    entry: string;
    activePages: string[];
  }>;
  platformModules: Array<{
    name: string;
    displayName: string;
    entry: string;
    propsSchema: Record<string, unknown>;
    events: string[];
  }>;
}

export function readAppConfig(dir: string = process.cwd()): WellPlayedConfig {
  const configPath = join(dir, CONFIG_FILENAME);

  if (!existsSync(configPath)) {
    throw new Error(`No ${CONFIG_FILENAME} found in ${dir}. Run \`wellplayed init\` first.`);
  }

  const raw = readFileSync(configPath, 'utf-8');
  const config = JSON.parse(raw);

  // Basic validation
  if (!config.name || typeof config.name !== 'string') {
    throw new Error(`Invalid ${CONFIG_FILENAME}: missing or invalid "name" field`);
  }
  if (!config.version || typeof config.version !== 'string') {
    throw new Error(`Invalid ${CONFIG_FILENAME}: missing or invalid "version" field`);
  }
  if (!config.displayName || typeof config.displayName !== 'string') {
    throw new Error(`Invalid ${CONFIG_FILENAME}: missing or invalid "displayName" field`);
  }
  if (!Array.isArray(config.extensions)) {
    throw new Error(`Invalid ${CONFIG_FILENAME}: "extensions" must be an array`);
  }
  if (!Array.isArray(config.platformModules)) {
    throw new Error(`Invalid ${CONFIG_FILENAME}: "platformModules" must be an array`);
  }

  return config as WellPlayedConfig;
}

export function writeAppConfig(config: WellPlayedConfig, dir: string = process.cwd()): void {
  const configPath = join(dir, CONFIG_FILENAME);
  writeFileSync(configPath, JSON.stringify(config, null, 2));
}
