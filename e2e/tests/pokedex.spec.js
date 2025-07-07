import { test, describe, expect, beforeEach } from '@playwright/test';


describe('Pokedex', () => {
  beforeEach(async ({ page }) => {
    await page.goto('')
  })
  test('front page can be opened', async ({ page }) => {
    await expect(page.getByText('ivysaur')).toBeVisible()
    await expect(page.getByText('Pokémon and Pokémon character names are trademarks of Nintendo.')).toBeVisible()
  })
  test('can navigate from the main page to the page of a pokemon', async ({ page }) => {
    await page.getByRole('link', { name: 'charizard' }).click()
    await expect(page.getByText('charizard')).toBeVisible()
  })
})