import { defineConfig } from '@playwright/test';

export default defineConfig({
  timeout: 60000,
  expect: { timeout: 15000 },
  retries: 0,
  workers: 1,
  testDir: 'tests',
  use: {
    headless: false,
    viewport: { width: 1366, height: 900 },
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  reporter: [
    ['line'],
    ['html', { outputFolder: 'playwright-report', open: 'never' }],
    ['allure-playwright']
  ],
  projects: [
    {
      name: 'ui',
      testDir: 'tests/ui',
      use: { headless: false },
    },
    {
      name: 'api',
      testDir: 'tests/api',
      use: { headless: true },
    }
  ],
});
