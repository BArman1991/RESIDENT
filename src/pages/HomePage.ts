import { Page, expect } from '@playwright/test';

export class HomePage {
  constructor(private readonly page: Page) {}

  async open() {
    await this.page.goto('https://qa.awarasleep.com/', { waitUntil: 'domcontentloaded' });
    await expect(this.page).toHaveTitle(/Awara|Awarasleep/i);
  }

  async clickShopMattress() {
    const btn = this.page.getByRole('link', { name: /shop mattress/i });
    await btn.click();
    await expect(this.page).toHaveURL(/\/mattress/i);
  }
}
