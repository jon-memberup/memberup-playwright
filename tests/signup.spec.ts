import { test, expect } from '@playwright/test';
import { generateRandomString, goToUrl } from './helpers';

test('Signup as Member', async ({ page }) => {
  await goToUrl(page);

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/DEV Automation/);

  // Signup as Member
  const email = `jon+${generateRandomString()}@memberup.com`;
  await page.getByRole('button', { name: 'Sign Up' }).click();
  await page.locator('[id="_r_4_-form-item"]').fill('Auto - Jon');
  await page.locator('[id="_r_5_-form-item"]').fill(generateRandomString());
  await page.locator('label').filter({ hasText: 'Email' }).click();
  await page.locator('[id="_r_6_-form-item"]').fill(email);
  await page.locator('label').filter({ hasText: 'Password' }).click();
  await page.locator('[id="_r_7_-form-item"]').fill('Test123456');
  await page.getByTestId('signup-submit').click();

  // Verify that "We sent you a code" message is visible
  await expect(page.getByText('We sent you a code')).toBeVisible();
});