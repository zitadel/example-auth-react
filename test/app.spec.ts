import { test, expect } from '@playwright/test';

test('app returns 200', async ({ page }) => {
  const response = await page.goto('/');
  expect(response?.status()).toBe(200);
});

test('SPA history fallback serves the app shell for deep routes', async ({
  page,
}) => {
  const response = await page.goto('/this/route/does/not/exist');
  expect(response?.status()).toBe(200);
  await expect(page.locator('#app')).toBeAttached();
});
