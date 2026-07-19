// Generate Random String
export function generateRandomString(prefix = 'string') {
  return `${prefix}${Date.now()}${Math.floor(Math.random() * 1000)}`;
}

export async function goToUrl(page: any) {
 await page.goto('https://dev.memberup.com/dev-automation-jon');
}

export async function loginAsAdmin(page: any) {
  await goToUrl(page);
  await page.goto('https://dev.memberup.com/dev-automation-jon');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.locator('[id="_r_4_-form-item"]').fill('jon+devauto@memberup.com');
  await page.locator('[id="_r_4_-form-item"]').press('Tab');
  await page.locator('[id="_r_5_-form-item"]').fill('Test123456');
  await page.getByTestId('login-submit').click();
}

export async function loginAsMember(page: any) {
  await goToUrl(page);
  await page.goto('https://dev.memberup.com/dev-automation-jon');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.locator('[id="_r_4_-form-item"]').fill('jon+dw@memberup.com');
  await page.locator('[id="_r_4_-form-item"]').press('Tab');
  await page.locator('[id="_r_5_-form-item"]').fill('Test123456');
  await page.getByTestId('login-submit').click();
}