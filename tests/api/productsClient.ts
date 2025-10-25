import { APIRequestContext, expect } from '@playwright/test';

export class ProductsClient {
  constructor(private readonly api: APIRequestContext) {}

  async byBrand(brand: string) {
    const res = await this.api.get('/products', { params: { brand } });
    expect(res.status()).toBe(200);
    return res.json();
  }

  async byName(params: { name: string; brand: string; lang?: string }) {
    const { name, brand, lang = 'en' } = params;
    const res = await this.api.get('/products', { params: { name, brand, lang } });
    expect(res.status()).toBe(200);
    return res.json();
  }
}
