import { request } from 'undici';
import { getToken } from '../auth/token-store.js';

const DEFAULT_API_URL = 'https://api.warrior.well-played.gg/';

function getApiUrl(): string {
  return process.env.WELLPLAYED_API_URL ?? DEFAULT_API_URL;
}

export async function apiPost<T>(path: string, body: Record<string, unknown>): Promise<T> {
  const url = `${getApiUrl()}${path}`;
  const { body: responseBody, statusCode } = await request(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  const text = await responseBody.text();
  if (statusCode >= 400) {
    throw new Error(`API error ${statusCode}: ${text}`);
  }

  return JSON.parse(text) as T;
}

export async function graphqlRequest<T>(
  query: string,
  variables?: Record<string, unknown>,
): Promise<T> {
  const token = getToken();
  if (!token) {
    throw new Error('Not authenticated. Run `wellplayed login` first.');
  }

  const url = `${getApiUrl()}graphql`;
  const { body: responseBody, statusCode } = await request(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ query, variables }),
  });

  const text = await responseBody.text();
  if (statusCode >= 400) {
    throw new Error(`GraphQL error ${statusCode}: ${text}`);
  }

  const result = JSON.parse(text) as { data?: T; errors?: Array<{ message: string }> };
  if (result.errors?.length) {
    throw new Error(result.errors.map((e) => e.message).join('; '));
  }

  return result.data as T;
}
