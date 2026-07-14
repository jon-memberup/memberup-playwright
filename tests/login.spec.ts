import { test, expect } from '@playwright/test';

test('Login as Admin', async ({ page }) => {
  await page.goto('https://dev.memberup.com/dev-automation-jon');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/DEV Automation/);

  // Login as Admin
  await page.getByRole('button', { name: 'Login' }).click();
  await page.locator('[id="_r_4_-form-item"]').fill('jon+admin@memberup.com');
  await page.locator('[id="_r_4_-form-item"]').press('Tab');
  await page.locator('[id="_r_5_-form-item"]').fill('Test123456');
  await page.getByTestId('login-submit').click();
  await expect(page.getByRole('button', { name: 'Jon Cabangon' })).toBeVisible();
});

test('Login as Member', async ({ page }) => {
  await page.goto('https://dev.memberup.com/dev-automation-jon');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/DEV Automation/);

  // Login as Admin
  await page.getByRole('button', { name: 'Login' }).click();
  await page.locator('[id="_r_4_-form-item"]').fill('jon+solarus@memberup.com');
  await page.locator('[id="_r_4_-form-item"]').press('Tab');
  await page.locator('[id="_r_5_-form-item"]').fill('Test123456');
  await page.getByTestId('login-submit').click();
  await expect(page.getByRole('button', { name: 'Hou Yi Solarus' })).toBeVisible();
});