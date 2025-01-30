import { test, expect } from '@playwright/test';
import { setLoginCookies } from './helpers';

test('opens the modal when the card is clicked', async ({ page }) => {
  await setLoginCookies(page);

  await page.goto('/dashboard');

  await page.waitForTimeout(4000);

  const pokemonCard = page.locator('[data-test-id="pokemon-card"]').first();
  await pokemonCard.click();

  const modal = page.locator('role=dialog');
  await expect(modal).toBeVisible();
});

test('chip showing the right type', async ({ page }) => {
  await setLoginCookies(page);

  await page.goto('/dashboard');

  await page.waitForTimeout(4000);

  const pokemonCard = page.locator('[data-test-id="pokemon-card"]').first();
  await pokemonCard.click();

  const chip = page.getByText('grass');
  await expect(chip).toBeVisible();
});

test('tab stats is displaying the right content', async ({ page }) => {
  await setLoginCookies(page);

  await page.goto('/dashboard');

  await page.waitForTimeout(4000);

  const pokemonCard = page.locator('[data-test-id="pokemon-card"]').first();
  await pokemonCard.click();

  const statString = page.getByText('HP');
  await expect(statString).toBeVisible();
});

test('tab abilities is displaying the right content', async ({ page }) => {
  await setLoginCookies(page);

  await page.goto('/dashboard');

  await page.waitForTimeout(4000);

  const pokemonCard = page.locator('[data-test-id="pokemon-card"]').first();
  await pokemonCard.click();

  await page.getByText('Abilities').click();

  const abilityString = page.getByText('Overgrow');
  await expect(abilityString).toBeVisible();
});

test('tab forms is displaying the right content', async ({ page }) => {
  await setLoginCookies(page);

  await page.goto('/dashboard');

  await page.waitForTimeout(4000);

  const pokemonCard = page.locator('[data-test-id="pokemon-card"]').first();
  await pokemonCard.click();

  await page.getByText('Forms').click();

  const firstForm = page.getByText('bulbasaur', { exact: true });
  await expect(firstForm).toBeVisible();

  const secondForm = page.getByText('ivysaur', { exact: true });
  await expect(secondForm).toBeVisible();

  const thirdForm = page.getByText('venusaur', { exact: true });
  await expect(thirdForm).toBeVisible();
});