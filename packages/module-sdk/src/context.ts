import type { ApolloClient, NormalizedCacheObject } from '@apollo/client';
import { createContext, useContext } from 'react';

export interface ModuleEventBus {
  emit: (event: string, payload: unknown) => void;
  on: (event: string, handler: (payload: unknown) => void) => () => void;
}

export interface ModuleContextValue {
  appId: string;
  moduleName: string;
  apolloClient: ApolloClient<NormalizedCacheObject>;
  grantedPermissions: string[];
  eventBus: ModuleEventBus;
}

export const ModuleContext = createContext<ModuleContextValue | null>(null);

export function useModuleContext(): ModuleContextValue {
  const ctx = useContext(ModuleContext);
  if (!ctx) {
    throw new Error('useModuleContext must be used within a ModuleContainer');
  }
  return ctx;
}
