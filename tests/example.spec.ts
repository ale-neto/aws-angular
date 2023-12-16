import { expect, test } from '@playwright/test';


test('has an Angular word', async ({ page }) => {
  await page.goto('http://localhost:4200');

  // Expect a title "to contain" a substring.
  await page.waitForSelector('body');

  const textPage = await page.textContent('body');

  const desiredWord = 'Angular Calculator';

  expect(textPage.toLowerCase()).toContain(desiredWord.toLowerCase());
});
