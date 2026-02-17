import type { ComponentType } from 'react';

export interface ModuleDefinition<P = Record<string, unknown>> {
  name: string;
  version: string;
  component: ComponentType<P>;
}

const MODULE_NAME_PATTERN = /^[a-zA-Z0-9_-]+$/;
const SEMVER_PATTERN = /^\d+\.\d+\.\d+/;

export function defineModule<P>(config: ModuleDefinition<P>): ModuleDefinition<P> {
  if (!MODULE_NAME_PATTERN.test(config.name)) {
    throw new Error(
      `Invalid module name: "${config.name}". Must contain only alphanumeric characters, hyphens, and underscores.`,
    );
  }
  if (!SEMVER_PATTERN.test(config.version)) {
    throw new Error(
      `Invalid module version: "${config.version}". Must be a valid semver string (e.g., "1.0.0").`,
    );
  }
  return config;
}
