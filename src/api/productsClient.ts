import { APIRequestContext, expect } from '@playwright/test';

function extractData(body: any): any[] {
  return (
    body?.status?.result?.data ??
    body?.result?.data ??
    body?.data ??
    body?.items ??
    []
  );
}

export class ProductsClient {
  constructor(private readonly api: APIRequestContext) {}

  async byBrand(brand: string) {
    const res = await this.api.get('/products', { params: { brand } });
    expect(res.status()).toBe(200);
    const body = await res.json();
    return { body, data: extractData(body) };
  }

  async byName(params: { name: string; brand: string; lang?: string }) {
    const { name, brand, lang = 'en' } = params;
    const res = await this.api.get('/products', { params: { name, brand, lang } });
    expect(res.status()).toBe(200);
    const body = await res.json();
    return { body, data: extractData(body) };
  }
}
