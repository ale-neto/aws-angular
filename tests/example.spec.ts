import { expect, test } from '@playwright/test';


test('has title', async ({ page }) => {
  await page.goto('http://localhost:4200'); // Replace with your Angular app's URL

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Angular Calculator/);
});

// test('get started link', async ({ page }) => {
//   await page.goto('/');


// });
