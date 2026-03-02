import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  use: {
    baseURL: 'https://the-internet.herokuapp.com',
    headless: true,
    viewport: { width: 1280, height: 720 }
  }
});
