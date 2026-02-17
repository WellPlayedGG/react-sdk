import { ApolloProvider } from '@apollo/client';
import { useEffect, useRef, useState, type ReactNode } from 'react';
import { createExtensionClient, type ExtensionClientResult } from './create-extension-client';
import { ModuleContext, type ModuleContextValue, type ModuleEventBus } from './context';

interface HandshakeAck {
  type: 'handshake.ack';
  nonce: string;
  context: Record<string, unknown>;
  theme: string;
  locale: string;
  moduleToken?: string;
  apiBaseUrl?: string;
  marketplaceAppId?: string;
  grantedPermissions?: string[];
}

interface ExtensionProviderProps {
  appId: string;
  parentOrigin: string;
  children: ReactNode;
}

function createEventBus(): ModuleEventBus {
  const listeners = new Map<string, Set<(payload: unknown) => void>>();

  return {
    emit(event: string, payload: unknown) {
      const handlers = listeners.get(event);
      if (handlers) {
        for (const handler of handlers) {
          handler(payload);
        }
      }
    },
    on(event: string, handler: (payload: unknown) => void) {
      const existing = listeners.get(event) ?? new Set();
      existing.add(handler);
      listeners.set(event, existing);
      return () => {
        existing.delete(handler);
      };
    },
  };
}

export function ExtensionProvider({ appId, parentOrigin, children }: ExtensionProviderProps) {
  const [contextValue, setContextValue] = useState<ModuleContextValue | null>(null);
  const eventBusRef = useRef(createEventBus());
  const pingHandlerRef = useRef<((e: MessageEvent) => void) | null>(null);
  const extensionClientRef = useRef<ExtensionClientResult | null>(null);

  useEffect(() => {
    // Read handshake token from URL fragment (not query param) for security
    const wpToken = window.location.hash.slice(1);

    if (!wpToken) {
      return;
    }

    // Clear fragment from URL after reading to reduce exposure
    window.history.replaceState(null, '', window.location.pathname + window.location.search);

    // Send handshake.init to parent with restricted target origin
    window.parent.postMessage(
      { type: 'handshake.init', appId, token: wpToken },
      parentOrigin,
    );

    const handleMessage = (event: MessageEvent) => {
      // Validate origin
      if (event.origin !== parentOrigin) return;

      const data = event.data as HandshakeAck | { type: 'token.update'; token: string } | undefined;

      // Handle token refresh from parent
      if (data?.type === 'token.update' && 'token' in data) {
        const newToken = data.token;
        if (typeof newToken === 'string' && newToken.split('.').length === 3) {
          extensionClientRef.current?.setToken(newToken);
        }
        return;
      }

      if (data?.type !== 'handshake.ack') return;

      const { moduleToken, apiBaseUrl, marketplaceAppId, nonce, grantedPermissions } = data;

      if (!moduleToken || !marketplaceAppId) {
        return;
      }

      const extensionClient = createExtensionClient({
        moduleToken,
        marketplaceAppId,
        apiBaseUrl,
      });
      extensionClientRef.current = extensionClient;

      setContextValue({
        appId,
        moduleName: 'extension',
        apolloClient: extensionClient.client,
        grantedPermissions: grantedPermissions ?? [],
        eventBus: eventBusRef.current,
      });

      // Clean up any previous ping handler
      if (pingHandlerRef.current) {
        window.removeEventListener('message', pingHandlerRef.current);
      }

      // Respond to pings for health checks
      const handlePing = (pingEvent: MessageEvent) => {
        if (pingEvent.origin !== parentOrigin) return;
        if (pingEvent.data?.type === 'ping') {
          window.parent.postMessage({ type: 'pong', nonce }, parentOrigin);
        }
      };
      pingHandlerRef.current = handlePing;
      window.addEventListener('message', handlePing);
    };

    window.addEventListener('message', handleMessage);
    return () => {
      window.removeEventListener('message', handleMessage);
      if (pingHandlerRef.current) {
        window.removeEventListener('message', pingHandlerRef.current);
        pingHandlerRef.current = null;
      }
    };
  }, [appId, parentOrigin]);

  if (!contextValue) {
    return null;
  }

  return (
    <ModuleContext.Provider value={contextValue}>
      <ApolloProvider client={contextValue.apolloClient}>
        {children}
      </ApolloProvider>
    </ModuleContext.Provider>
  );
}
