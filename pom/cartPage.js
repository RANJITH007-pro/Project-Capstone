// POM/cartPage.js

export class CartPage {
  constructor(page) {
    this.page = page;

    this.url = 'https://e-commerce-uni--ranjithp9779.replit.app/cart';

    // CART LOCATORS (based on UI)
    this.cartTitle = page.locator('h1:has-text("Shopping Cart")');
    this.cartItems = page.locator('.bg-white'); // each item card
    this.cartItemName = page.locator('text=Stationery, text=Books');
    this.cartPrices = page.locator('text=$');

    this.cartTotal = page.locator('text=$'); // total also contains $
    this.checkoutBtn = page.locator('button:has-text("Checkout")').first();

    // NAV
    this.navCart = page.getByTestId('nav-cart');
    this.navLogout = page.getByTestId('nav-logout');
  }

  async goto() {
    await this.page.goto(this.url);
    await this.page.waitForLoadState('domcontentloaded');
  }
}