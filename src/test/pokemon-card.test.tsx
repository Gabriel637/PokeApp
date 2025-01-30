import { test, expect } from '@playwright/test';
import { setLoginCookies } from './helpers';

test('renders the pokemon card correctly', async ({ page }) => {
  await setLoginCookies(page);

  await page.goto('/dashboard');

  await page.waitForTimeout(4000);

  const pokemonCard = page.locator('[data-test-id="pokemon-card"]').first();

  await expect(pokemonCard).toContainText('#0001bulbasaur');
  await expect(pokemonCard.locator('img')).toHaveAttribute('alt', 'bulbasaur');
});
