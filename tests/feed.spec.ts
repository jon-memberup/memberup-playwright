import { test, expect } from '@playwright/test';
import { generateRandomString } from './helpers';

test('Add Post as Admin', async ({ page }) => {
  await page.goto('https://dev.memberup.com/dev-automation-jon');

  // Login as Admin
  await page.getByRole('button', { name: 'Login' }).click();
  await page.locator('[id="_r_4_-form-item"]').fill('jon+devauto@memberup.com');
  await page.locator('[id="_r_4_-form-item"]').press('Tab');
  await page.locator('[id="_r_5_-form-item"]').fill('Test123456');
  await page.getByTestId('login-submit').click();
  await expect(page.getByRole('button', { name: 'DEV Automation (Jon)' })).toBeVisible();
  await page.getByText('Create a post...').click();
  await page.getByRole('button', { name: 'Choose space' }).click();
  await page.getByRole('menu').getByText('Member Wins').click();
  await page.getByRole('button', { name: 'Member Wins' }).click();
  await page.getByRole('menuitem', { name: 'Member Wins Celebrate your' }).click();
  await page.getByRole('textbox', { name: 'Title' }).click();
  await page.getByRole('textbox', { name: 'Title' }).fill('Admin - New Post (Automated) ' + generateRandomString());
  await page.locator('.public-DraftStyleDefault-block').click();
  await page.getByRole('combobox').fill('Generate random Paragraph here '+ generateRandomString());
  await page.getByRole('button').nth(3).click();
  await page.getByRole('button', { name: '👍' }).first().click();
  await page.getByRole('button', { name: 'file upload' }).first().click();
  await page.getByRole('textbox', { name: 'Enter title' }).fill('Sample Link');
  await page.getByRole('textbox', { name: 'Enter title' }).press('Tab');
  await page.getByRole('textbox', { name: 'https://www.google.com' }).fill('https://memberup.com');
  await page.getByRole('button', { name: 'Save' }).click();
  await expect(page.getByRole('button', { name: 'remove link preview' })).toBeVisible();
  await page.getByRole('button', { name: 'Publish' }).click();
});

test('Add Post as Member', async ({ page }) => {
  await page.goto('https://dev.memberup.com/dev-automation-jon');

  // Login as Member
  await page.getByRole('button', { name: 'Login' }).click();
  await page.locator('[id="_r_4_-form-item"]').fill('jon+dw@memberup.com');
  await page.locator('[id="_r_4_-form-item"]').press('Tab');
  await page.locator('[id="_r_5_-form-item"]').fill('Test123456');
  await page.getByTestId('login-submit').click();
  await expect(page.getByRole('button', { name: 'Dean Winchester' })).toBeVisible();
  await page.getByText('Create a post...').click();
  await page.getByRole('button', { name: 'Choose space' }).click();
  await page.getByRole('menu').getByText('Member Wins').click();
  await page.getByRole('button', { name: 'Member Wins' }).click();
  await page.getByRole('menuitem', { name: 'Member Wins Celebrate your' }).click();
  await page.getByRole('textbox', { name: 'Title' }).click();
  await page.getByRole('textbox', { name: 'Title' }).fill('Member - New Post (Automated) ' + generateRandomString());
  await page.locator('.public-DraftStyleDefault-block').click();
  await page.getByRole('combobox').fill('Generate random Paragraph here '+ generateRandomString());
  await page.getByRole('button').nth(3).click();
  await page.getByRole('button', { name: '👍' }).first().click();
  await page.getByRole('button', { name: 'file upload' }).first().click();
  await page.getByRole('textbox', { name: 'Enter title' }).fill('Sample Link');
  await page.getByRole('textbox', { name: 'Enter title' }).press('Tab');
  await page.getByRole('textbox', { name: 'https://www.google.com' }).fill('https://memberup.com');
  await page.getByRole('button', { name: 'Save' }).click();
  await expect(page.getByRole('button', { name: 'remove link preview' })).toBeVisible();
  await page.getByRole('button', { name: 'Publish' }).click();
});