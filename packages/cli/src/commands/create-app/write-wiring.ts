import { writeFile, mkdir, rm } from 'node:fs/promises';
import { join } from 'node:path';
import { log } from '../../utils/logger.js';

export interface WiringInputs {
  projectDir: string;
  organizationShortId: string;
  clientId: string;
  port: number;
}

const MAIN_TSX = `import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { WellPlayedProvider } from '@well-played.gg/react-sdk';
import App from './App';
import { Callback } from './auth/Callback';
import './index.css';

const organizationId = import.meta.env.VITE_WP_ORGANIZATION_ID;
const clientId = import.meta.env.VITE_WP_CLIENT_ID;
const redirectUri = import.meta.env.VITE_WP_REDIRECT_URI;
if (!organizationId || !clientId || !redirectUri) {
  throw new Error(
    'Missing VITE_WP_* env vars. Check .env.local — did you run \`wellplayed create-app\`?',
  );
}

// Minimal client-side router: when we're on the OAuth callback route, render
// the Callback component — the OidcProvider completes the exchange
// automatically. Everywhere else, render the app.
const isCallback = window.location.pathname === '/auth/callback';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <WellPlayedProvider
      organizationId={organizationId}
      wpAppConfig={{
        client_id: clientId,
        redirect_uri: redirectUri,
        scope: 'openid profile email offline_access',
      }}
    >
      {isCallback ? <Callback /> : <App />}
    </WellPlayedProvider>
  </StrictMode>,
);
`;

const APP_TSX = `import { useQuery, gql } from '@apollo/client';
import { useOidc } from '@axa-fr/react-oidc';
import { useWellPlayed } from '@well-played.gg/react-sdk';

const GET_MY_ACCOUNT = gql\`
  query getMyAccount {
    getMyAccount {
      id
      email
      permissions {
        permission
      }
    }
  }
\`;

interface GetMyAccountResult {
  getMyAccount: {
    id: string;
    email: string | null;
    permissions: { permission: string }[];
  };
}

function SignedInView() {
  const { apiClient } = useWellPlayed();
  const { data, loading, error } = useQuery<GetMyAccountResult>(GET_MY_ACCOUNT, {
    client: apiClient,
  });

  if (loading) return <p>Loading account…</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!data) return null;

  return (
    <div>
      <h2>Signed in</h2>
      <p>
        <strong>ID:</strong> {data.getMyAccount.id}
      </p>
      <p>
        <strong>Email:</strong> {data.getMyAccount.email ?? '(none)'}
      </p>
      <p>
        <strong>Permissions:</strong>{' '}
        {data.getMyAccount.permissions.map((p) => p.permission).join(', ') || '(none)'}
      </p>
    </div>
  );
}

function App() {
  const { accessToken } = useWellPlayed();
  const { login } = useOidc();

  return (
    <main style={{ fontFamily: 'system-ui', padding: 32 }}>
      <h1>Welcome to WellPlayed</h1>
      {accessToken ? (
        <SignedInView />
      ) : (
        <button type="button" onClick={() => login('/')}>
          Sign in
        </button>
      )}
    </main>
  );
}

export default App;
`;

const CALLBACK_TSX = `export function Callback() {
  return (
    <main style={{ fontFamily: 'system-ui', padding: 32 }}>
      <p>Signing in…</p>
    </main>
  );
}
`;

function envFile(organizationShortId: string, clientId: string, port: number): string {
  return `VITE_WP_ORGANIZATION_ID=${organizationShortId}
VITE_WP_CLIENT_ID=${clientId}
VITE_WP_REDIRECT_URI=http://localhost:${port}/auth/callback
`;
}

export async function writeWiring({
  projectDir,
  organizationShortId,
  clientId,
  port,
}: WiringInputs): Promise<void> {
  const srcDir = join(projectDir, 'src');
  const authDir = join(srcDir, 'auth');
  await mkdir(authDir, { recursive: true });

  log.info("Overwriting Vite's default src/main.tsx, src/App.tsx, adding src/auth/Callback.tsx");
  await writeFile(join(srcDir, 'main.tsx'), MAIN_TSX);
  await writeFile(join(srcDir, 'App.tsx'), APP_TSX);
  await writeFile(join(authDir, 'Callback.tsx'), CALLBACK_TSX);
  await writeFile(join(projectDir, '.env.local'), envFile(organizationShortId, clientId, port));

  // App.css is no longer imported by the generated App.tsx; remove it to avoid a dead file.
  await rm(join(srcDir, 'App.css'), { force: true });
}
