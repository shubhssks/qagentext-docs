import { defineConfig } from '@playwright/test';

const url = new URL(process.env.DEMO_URL || 'http://127.0.0.1:4173');
if (!['127.0.0.1', 'localhost'].includes(url.hostname) || url.protocol !== 'http:' || url.username || url.password) {
  throw new Error('Use a local HTTP demo URL without credentials.');
}

export default defineConfig({
  testDir: './examples/playwright',
  workers: 1,
  reporter: 'list',
  use: { headless: true },
  webServer: {
    command: 'node examples/demo-app/serve.mjs',
    url: url.origin,
    env: { PORT: url.port || '4173' },
    reuseExistingServer: !process.env.CI,
  },
});
