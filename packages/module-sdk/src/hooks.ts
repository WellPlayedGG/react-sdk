import {
  type DocumentNode,
  type MutationHookOptions,
  type OperationVariables,
  type QueryHookOptions,
  useMutation,
  useQuery,
} from '@apollo/client';
import { useEffect } from 'react';
import { useModuleContext } from './context';

export function useModuleQuery<TData = unknown, TVariables extends OperationVariables = OperationVariables>(
  query: DocumentNode,
  options?: QueryHookOptions<TData, TVariables>,
) {
  return useQuery<TData, TVariables>(query, options);
}

export function useModuleMutation<TData = unknown, TVariables extends OperationVariables = OperationVariables>(
  mutation: DocumentNode,
  options?: MutationHookOptions<TData, TVariables>,
) {
  return useMutation<TData, TVariables>(mutation, options);
}

export function useModuleEvent(eventName: string, handler: (payload: unknown) => void) {
  const { eventBus } = useModuleContext();
  useEffect(() => {
    return eventBus.on(eventName, handler);
  }, [eventName, handler, eventBus]);
}

export function useModuleEmit() {
  const { eventBus } = useModuleContext();
  return eventBus.emit;
}
