import { test } from '@playwright/test';


test('has make Sum', async ({ page }) => {
  await page.goto('http://localhost:4200');
  await page.click('#number7');
  await page.click('#sum');
  await page.click('#number7');
  await page.click('#match');
});
