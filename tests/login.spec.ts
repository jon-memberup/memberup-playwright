import { test, expect } from '@playwright/test';
import { loginAsAdmin, loginAsMember } from './helpers';

test('Login as Admin', async ({ page }) => {
  await loginAsAdmin(page);
  await expect(page.getByRole('button', { name: 'DEV Automation (Jon)' })).toBeVisible();
});

test('Login as Member', async ({ page }) => {
  await loginAsMember(page);
  await expect(page.getByRole('button', { name: 'Dean Winchester' })).toBeVisible();
  //await expect(page.getByRole('button', { name: 'Dean Winchester' })).toBeVisible();
});