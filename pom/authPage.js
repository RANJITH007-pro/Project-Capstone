// POM/authPage.js

export class AuthPage {
  constructor(page) {
    this.page = page;

    // URLs
    this.loginUrl = 'https://e-commerce-uni--ranjithp9779.replit.app/login';
    this.registerUrl = 'https://e-commerce-uni--ranjithp9779.replit.app/register';

    // LOGIN LOCATORS
    this.loginForm = page.getByTestId('login-form');
    this.loginEmail = page.getByTestId('login-email');
    this.loginPassword = page.getByTestId('login-password');
    this.loginSubmit = page.getByTestId('login-submit');



    // REGISTER LOCATORS
    this.registerForm = page.getByTestId('register-form');
    this.registerName = page.getByTestId('register-name');
    this.registerEmail = page.getByTestId('register-email');
    this.registerPassword = page.getByTestId('register-password');
    this.registerSubmit = page.getByTestId('register-submit');
    this.registerLoginLink = page.getByTestId('register-login-link');

    // NAVBAR LOCATORS
    this.navHome = page.getByTestId('nav-home');
    this.navOrders = page.getByTestId('nav-orders');
    this.navCart = page.getByTestId('nav-cart');
    this.navAdmin = page.getByTestId('nav-admin');
    this.navMyListings = page.getByTestId('nav-my-listings');
    this.navLogout = page.getByTestId('nav-logout');
  }

  async gotoLogin() {
    await this.page.goto(this.loginUrl);
    await this.page.waitForLoadState('domcontentloaded');
  }

  async gotoRegister() {
    await this.page.goto(this.registerUrl);
    await this.page.waitForLoadState('domcontentloaded');
  }

  async register(name, email, password) {
    await this.registerName.fill(name);
    await this.registerEmail.fill(email);
    await this.registerPassword.fill(password);
    await this.registerSubmit.click();
  }
}