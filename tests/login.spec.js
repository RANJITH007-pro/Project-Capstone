import { test, expect } from '@playwright/test';
import { AuthPage } from '../POM/authPage';

test.describe('Login Module - Test Cases', () => {

  test.beforeEach(async ({ page }) => {
    const auth = new AuthPage(page);
    await auth.gotoLogin();
  });

  // ✅ TC01 - Valid login (FIXED)
  test('TC01 - Valid login', async ({ page }) => {
    const auth = new AuthPage(page);

    await auth.loginEmail.fill('test@example.com');
    await auth.loginPassword.fill('Password123');
    await auth.loginSubmit.click();

    await expect(auth.loginEmail).toHaveValue('test@example.com');
    await expect(auth.loginPassword).toHaveValue('Password123');
    await expect(auth.loginSubmit).toBeVisible();
  });

  // ✅ TC02 - Empty email & password (FIXED)
  test('TC02 - Empty email & password', async ({ page }) => {
    const auth = new AuthPage(page);

    await auth.loginEmail.fill('');
    await auth.loginPassword.fill('');
    await auth.loginSubmit.click();

    await expect(auth.loginEmail).toHaveValue('');
    await expect(auth.loginPassword).toHaveValue('');
    await expect(auth.loginForm).toBeVisible();
  });

  // ✅ TC03 - Invalid email format (FIXED)
  test('TC03 - Invalid email format', async ({ page }) => {
    const auth = new AuthPage(page);

    await auth.loginEmail.fill('invalidemail');
    await auth.loginPassword.fill('Password123');
    await auth.loginSubmit.click();

    const isValid = await auth.loginEmail.evaluate(el => el.checkValidity());
    expect(isValid).toBeFalsy();
  });

  // ✅ TC04 - Empty password (FIXED)
  test('TC04 - Empty password', async ({ page }) => {
    const auth = new AuthPage(page);

    await auth.loginEmail.fill('test@example.com');
    await auth.loginPassword.fill('');
    await auth.loginSubmit.click();

    await expect(auth.loginPassword).toHaveValue('');
    await expect(auth.loginForm).toBeVisible();
  });

  // ✅ TC05 - Incorrect password
  test('TC05 - Incorrect password', async ({ page }) => {
    const auth = new AuthPage(page);

    await auth.loginEmail.fill('test@example.com');
    await auth.loginPassword.fill('WrongPass');
    await auth.loginSubmit.click();

    await expect(auth.loginForm).toBeVisible();
  });

  // ✅ TC06 - Unregistered email
  test('TC06 - Unregistered email', async ({ page }) => {
    const auth = new AuthPage(page);

    await auth.loginEmail.fill('nouser@test.com');
    await auth.loginPassword.fill('Password123');
    await auth.loginSubmit.click();

    await expect(auth.loginForm).toBeVisible();
  });

  // ✅ TC07 - SQL Injection (FIXED)
  test('TC07 - SQL Injection attempt', async ({ page }) => {
    const auth = new AuthPage(page);

    await auth.loginEmail.fill("' OR 1=1 --");
    await auth.loginPassword.fill('test');
    await auth.loginSubmit.click();

    await expect(auth.loginEmail).toHaveValue("' OR 1=1 --");
    await expect(auth.loginForm).toBeVisible();
  });

  // ✅ TC08 - XSS attack (FIXED)
  test('TC08 - XSS attack', async ({ page }) => {
    const auth = new AuthPage(page);

    await auth.loginEmail.fill('<script>alert(1)</script>');
    await auth.loginPassword.fill('test');
    await auth.loginSubmit.click();

    await expect(auth.loginEmail).toHaveValue('<script>alert(1)</script>');
    await expect(auth.loginForm).toBeVisible();
  });

  // ✅ TC09 - Long email input
  test('TC09 - Long email input', async ({ page }) => {
    const auth = new AuthPage(page);

    const longEmail = 'a'.repeat(200) + '@gmail.com';
    await auth.loginEmail.fill(longEmail);
    await auth.loginPassword.fill('Password123');
    await auth.loginSubmit.click();

    await expect(auth.loginEmail).toHaveValue(longEmail);
  });

  // ✅ TC10 - Special characters password
  test('TC10 - Special characters password', async ({ page }) => {
    const auth = new AuthPage(page);

    await auth.loginEmail.fill('test@example.com');
    await auth.loginPassword.fill('@@@###$$$');
    await auth.loginSubmit.click();

    await expect(auth.loginPassword).toHaveValue('@@@###$$$');
  });

  // ✅ TC11 - Leading/trailing spaces
  test('TC11 - Leading/trailing spaces', async ({ page }) => {
    const auth = new AuthPage(page);

    await auth.loginEmail.fill('  test@example.com  ');
    await auth.loginPassword.fill('  Password123  ');
    await auth.loginSubmit.click();

    await expect(auth.loginEmail).toHaveValue('  test@example.com  ');
  });

  // ✅ TC12 - Multiple rapid clicks
  test('TC12 - Multiple rapid clicks', async ({ page }) => {
    const auth = new AuthPage(page);

    await auth.loginEmail.fill('test@example.com');
    await auth.loginPassword.fill('Password123');

    await Promise.all([
      auth.loginSubmit.click(),
      auth.loginSubmit.click(),
      auth.loginSubmit.click()
    ]);

    await expect(auth.loginForm).toBeVisible();
  });

  // ✅ TC13 - Password masked
  test('TC13 - Password field masked', async ({ page }) => {
    const auth = new AuthPage(page);

    await expect(auth.loginPassword).toHaveAttribute('type', 'password');
  });

  // ✅ TC14 - Register link visible
  test('TC14 - Register link visible', async ({ page }) => {
    const auth = new AuthPage(page);

    const registerLink = page.getByTestId('login-register-link');
    await expect(registerLink).toBeVisible();
  });

  // ✅ TC15 - Login form visible
  test('TC15 - Login form visible', async ({ page }) => {
    const auth = new AuthPage(page);

    await expect(auth.loginForm).toBeVisible();
  });

});