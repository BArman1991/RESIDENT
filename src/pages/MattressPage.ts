import { Page } from "@playwright/test";

export class MattressPage {
  constructor(private readonly page: Page) {}

  get addToCartButton() {
    return this.page.locator(':is([id="addtocart_btn"])');
  }

  private get upgradeElement() {
    return this.page.locator(':is([data-testid*="_item_the-awara-"])').first();
  }


  async addFirstProductToCart() {
    await this.page.waitForLoadState('domcontentloaded');
    await this.page.waitForLoadState('networkidle', { timeout: 20000 });
    const btn = this.addToCartButton.first();
    await btn.click();
    await this.upgradeElement.waitFor({ state: "visible", timeout: 10000 });
    await btn.click();
  }
}
