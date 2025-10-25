import { Page, expect } from '@playwright/test';

export class CartDrawer {
  constructor(private readonly page: Page) {}

  private get cartItems() {
    return this.page.locator(
      ':is([data-testid*="cart_item_"])'
    );
  }

  async expectItemPresent() {
    const items = this.cartItems;
    await expect(items, 'Expected at least one item in the cart').toHaveCount(1, { timeout: 15000 });
    const count = await items.count();
    return count;
  }
}
