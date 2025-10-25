import { test, expect } from '../../src/fixtures/test-base';

test.describe('Products API', () => {
  test('GET /products?brand=awara returns non-empty list', async ({ products, brand }) => {
    const { body, data } = await products.byBrand(brand);
    expect(Array.isArray(data), `Unexpected body shape: ${JSON.stringify(body)}`).toBe(true);
    expect(data.length).toBeGreaterThan(0);
  });

  test('GET /products?name=the-awara-hybrid-mattress-30 returns exactly one', async ({ products, brand, productSlug }) => {
    const { body, data } = await products.byName({ name: productSlug, brand });
    expect(Array.isArray(data), `Unexpected body shape: ${JSON.stringify(body)}`).toBe(true);
    expect(data.length).toBe(1);
  });
});
