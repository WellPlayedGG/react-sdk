import { apiPost } from '../utils/api-client.js';
import { log } from '../utils/logger.js';
import { sleep } from '../utils/sleep.js';

interface DeviceCodeResponse {
  deviceCode: string;
  userCode: string;
  verificationUri: string;
  expiresIn: number;
  interval: number;
}

interface DeviceTokenResponse {
  accessToken?: string;
  expiresIn?: number;
  error?: string;
}

export async function requestDeviceCode(): Promise<DeviceCodeResponse> {
  return apiPost<DeviceCodeResponse>('api/developer/device/code', {});
}

export async function pollDeviceToken(
  deviceCode: string,
  interval: number,
  expiresIn: number,
): Promise<DeviceTokenResponse> {
  const deadline = Date.now() + expiresIn * 1000;

  while (Date.now() < deadline) {
    await sleep(interval * 1000);

    const response = await apiPost<DeviceTokenResponse>(
      'api/developer/device/token',
      { deviceCode },
    );

    if (response.accessToken) {
      return response;
    }

    if (response.error === 'expired_token') {
      throw new Error('Device code expired. Please try again.');
    }

    // authorization_pending — keep polling
    log.info('Waiting for authorization...');
  }

  throw new Error('Authorization timed out. Please try again.');
}

