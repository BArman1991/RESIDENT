import { expect, test } from '../../src/fixtures/test-base';

test.describe('Shop Mattress flow', () => {
  test('Add mattress to cart', async ({ home, mattress, cart }) => {
    await home.open();
    await home.clickShopMattress();
    await mattress.addFirstProductToCart();
    await cart.expectItemPresent();
  });
});
