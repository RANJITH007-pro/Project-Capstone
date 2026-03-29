// POM/navbarPage.js

export class NavbarPage {
  constructor(page) {
    this.page = page;

    // 👉 Open main page where navbar is present
    this.url = 'https://e-commerce-uni--ranjithp9779.replit.app/';

    this.navHome = page.getByTestId('nav-home');
    this.navOrders = page.getByTestId('nav-orders');
    this.navCart = page.getByTestId('nav-cart');
    this.navAdmin = page.getByTestId('nav-admin');
    this.navMyListings = page.getByTestId('nav-my-listings');
    this.navLogout = page.getByTestId('nav-logout');
  }

  async goto() {
    await this.page.goto(this.url);
    await this.page.waitForLoadState('domcontentloaded');
  }
}