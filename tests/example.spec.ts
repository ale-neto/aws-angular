import { expect, test } from '@playwright/test';


test('has title', async ({ page }) => {
  await page.goto('http://localhost:4200'); // Replace with your Angular app's URL

  // Expect a title "to contain" a substring.
  await page.waitForSelector('body');

  const textoDaPagina = await page.textContent('body');

  const palavraDesejada = 'Angular Calculator';

  expect(textoDaPagina.toLowerCase()).toContain(palavraDesejada.toLowerCase());
});

// test('get started link', async ({ page }) => {
//   await page.goto('/');


// });
