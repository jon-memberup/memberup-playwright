import { test, expect } from '@playwright/test';
import { generateRandomString, loginAsAdmin } from './helpers';

test('Create Community', async ({ page }) => {
  // Login as Admin
  await loginAsAdmin(page);
  
  //Create Community
  await page.getByTestId('community-switcher-desktop').getByRole('button').click();
  await page.getByRole('link', { name: 'Create a community' }).click();
  await page.getByTestId('community-name-input').click();
  await page.getByTestId('community-name-input').fill('Automation (DEV) ' + generateRandomString());
  await page.locator('iframe[name="__privateStripeFrame2153"]').contentFrame().getByRole('textbox', { name: 'Credit or debit card number' }).click();
  await page.locator('iframe[name="__privateStripeFrame2153"]').contentFrame().getByRole('textbox', { name: 'Credit or debit card number' }).fill('4242 4242 4242 4242');
  await page.locator('iframe[name="__privateStripeFrame2153"]').contentFrame().getByRole('textbox', { name: 'Credit or debit card expiration date' }).fill('05 / 55');
  await page.locator('iframe[name="__privateStripeFrame2153"]').contentFrame().getByRole('textbox', { name: 'Credit or debit card CVC/CVV' }).fill('555');
  await page.locator('iframe[name="__privateStripeFrame2153"]').contentFrame().getByRole('textbox', { name: 'ZIP' }).fill('55555');
  await page.getByTestId('create-community-submit').click();
  await page.goto('https://dev.memberup.com/automation-community-variable-w6he0e');
  await expect(page.getByText('Customize your theme')).toBeVisible();
  await page.getByRole('button', { name: 'Done' }).click();
});