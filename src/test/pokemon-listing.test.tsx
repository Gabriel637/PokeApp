import { test, expect } from '@playwright/test';
import { setLoginCookies } from './helpers';

test('should display 20 Pokemon cards in the list', async ({ page }) => {
  await setLoginCookies(page);

  await page.goto('/dashboard');

  await page.waitForTimeout(4000);

  const pokemonCards = page.locator('[data-test-id="pokemon-card"]');

  const count = await pokemonCards.count();
  expect(count).toBe(20);
});

test('should search the right pokemon', async ({ page }) => {
  await setLoginCookies(page);

  await page.goto('/dashboard');

  await page.waitForTimeout(4000);

  const searchInput = page.locator('input[name="pokemonSearch"]');

  await searchInput.fill('gengar');

  page.locator('[data-test-id="searchButton"]').click();

  const pokemonCard = page.locator('[data-test-id="pokemon-card"]').first();
  await expect(pokemonCard).toContainText('#0094gengar');
  await expect(pokemonCard.locator('img')).toHaveAttribute('alt', 'gengar');
});
