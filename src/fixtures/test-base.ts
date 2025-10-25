import { test as base, expect, request } from '@playwright/test';
import { ProductsClient } from '../api/productsClient';
import { HomePage } from '../pages/HomePage';
import { MattressPage } from '../pages/MattressPage';
import { CartDrawer } from '../pages/CartDrawer';

type Fixtures = {
  ua: string;
  apiBaseUrl: string;
  brand: string;
  productSlug: string;
  products: ProductsClient;
  home: HomePage;
  mattress: MattressPage;
  cart: CartDrawer;
};

export const test = base.extend<Fixtures>({
  ua: [ 'E2EUI-Tests', { option: true } ],
  apiBaseUrl: [ 'https://qa-api.residenthome.com', { option: true } ],
  brand: [ 'awara', { option: true } ],
  productSlug: [ 'the-awara-hybrid-mattress-30', { option: true } ],

  context: async ({ browser, ua }, use) => {
    const context = await browser.newContext({ userAgent: ua });
    await use(context);
    await context.close();
  },

  products: async ({ apiBaseUrl }, use) => {
    const api = await request.newContext({ baseURL: apiBaseUrl });
    const client = new ProductsClient(api);
    await use(client);
    await api.dispose();
  },

  home: async ({ page }, use) => { await use(new HomePage(page)); },
  mattress: async ({ page }, use) => { await use(new MattressPage(page)); },
  cart: async ({ page }, use) => { await use(new CartDrawer(page)); },
});

export { expect };
