import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.flipkart.com/');
  await page.getByRole('link', { name: 'Login', exact: true }).click();
  await page.locator('form').filter({ hasText: 'Enter Email/Mobile numberBy' }).getByRole('textbox').click();
  await page.locator('form').filter({ hasText: 'Enter Email/Mobile numberBy' }).getByRole('textbox').fill('9597728497');
  await page.getByRole('button', { name: 'Request OTP' }).click();
  await page.locator('.r4vIwl').first().fill('7');
  await page.locator('div:nth-child(2) > .r4vIwl').fill('6');
  await page.locator('div:nth-child(3) > .r4vIwl').fill('3');
  await page.locator('div:nth-child(4) > .r4vIwl').fill('3');
  await page.locator('div:nth-child(5) > .r4vIwl').fill('1');
  await page.locator('div:nth-child(6) > .r4vIwl').fill('1');
  await page.getByRole('img', { name: 'Chevron' }).click();
  await page.getByRole('link', { name: 'Logout Logout' }).click();
});