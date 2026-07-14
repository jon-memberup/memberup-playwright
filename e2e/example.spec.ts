import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://dev.memberup.com/dev-automation-jon');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/DEV Automation/);
});
