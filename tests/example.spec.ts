import { expect, test } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://localhost:4200');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Angular Calculator/);
});

// test('get started link', async ({ page }) => {
//   await page.goto('/');


// });
