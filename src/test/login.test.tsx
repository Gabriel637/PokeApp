import { test, expect } from '@playwright/test';

test('login with admin user', async ({ page }) => {
  await page.goto('/auth/login');

  await page.waitForTimeout(4000);

  const userInput = page.locator('input[name="user"]');
  const passwordInput = page.locator('input[name="password"]');

  await userInput.fill('admin');
  await passwordInput.fill('admin');

  page.locator('[data-test-id="loginButton"]').click();

  await page.waitForTimeout(4000);

  await expect(page).toHaveURL('/dashboard')
});
