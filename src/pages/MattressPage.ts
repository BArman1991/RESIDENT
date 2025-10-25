import { Page } from "@playwright/test";

export class MattressPage {
  constructor(private readonly page: Page) {}

  get addToCartButton() {
    return this.page.locator(':is([id="addtocart_btn"])');
  }

  private get upgradeElement() {
    return this.page.locator(':is([data-testid*="_item_the-awara-"])').first();
  }

  private get closeOverlayBunner() {
    return this.page.locator(':is([class="dy-lb-close"])')
  }

  async addFirstProductToCart() {
    // Wait for the page to load
    await this.page.waitForLoadState('domcontentloaded');
    await this.page.waitForLoadState('networkidle', { timeout: 20000 });
    // Close the overlay bunner
    await this.closeOverlayBunner.click();
    // Add the product to the cart
    const btn = this.addToCartButton.first();
    await btn.click();
  }
}
