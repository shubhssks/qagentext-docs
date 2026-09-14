import { test, expect } from '@playwright/test';

// Independent documentation example, not unmodified extension-generated code.
test('saves a dummy task', async ({ page }) => {
  const url = new URL(process.env.DEMO_URL || 'http://127.0.0.1:4173');
  if (!['127.0.0.1', 'localhost'].includes(url.hostname) || url.protocol !== 'http:' || url.username || url.password) {
    throw new Error('This sample is intended only for a local dummy app.');
  }
  await page.goto(url.href);
  await page.getByRole('textbox', { name: 'Task name', exact: true }).fill('Review release notes');
  await page.getByRole('button', { name: 'Save task', exact: true }).click();
  await expect(page.getByRole('status')).toHaveText('Task saved');
  await expect(page.locator('#saved-task')).toHaveText('Review release notes');
});
