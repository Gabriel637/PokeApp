import { encrypt } from '@/helpers/crypto';
import { Page } from '@playwright/test';

export async function setLoginCookies(page: Page) {
  const body = { user: 'admin', password: 'admin', sessionId: 'gengar' };
  const encryptedSessionData = encrypt(JSON.stringify(body));

  const cookies = [
    {
      name: 'session',
      value: encryptedSessionData,
      domain: 'localhost',
      path: '/',
      httpOnly: true,
      secure: false,
    },
  ];

  await page.context().addCookies(cookies);
}