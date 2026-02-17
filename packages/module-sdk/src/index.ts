export { useModuleQuery, useModuleMutation } from './hooks';
export { useModuleEvent, useModuleEmit } from './hooks';
export { useModuleContext } from './context';
export { defineModule } from './define-module';
export { createExtensionClient } from './create-extension-client';
export { ExtensionProvider } from './extension-provider';
export type { ExtensionClientConfig, ExtensionClientResult } from './create-extension-client';
export type { ModuleConfig, ModuleDefinition } from './types';
export type { ModuleContextValue, ModuleEventBus } from './context';
