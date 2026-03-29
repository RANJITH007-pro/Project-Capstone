
// // tests/register.spec.js

import { test, expect } from '@playwright/test';
import { AuthPage } from '../pom/authPage';

test.describe('Module 2 - User Registration', () => {

  test.beforeEach(async ({ page }) => {
    const auth = new AuthPage(page);
    await auth.gotoRegister();
  });

  // ✅ 1
  test('TC01 - Register form visible', async ({ page }) => {
    const auth = new AuthPage(page);
    await expect(auth.registerForm).toBeVisible();
  });

  // ✅ 2
  test('TC02 - Name input visible', async ({ page }) => {
    const auth = new AuthPage(page);
    await expect(auth.registerName).toBeVisible();
  });

  // ✅ 3
  test('TC03 - Email input visible', async ({ page }) => {
    const auth = new AuthPage(page);
    await expect(auth.registerEmail).toBeVisible();
  });

  // ✅ 4
  test('TC04 - Password input visible', async ({ page }) => {
    const auth = new AuthPage(page);
    await expect(auth.registerPassword).toBeVisible();
  });

  // ✅ 5
  test('TC05 - Submit button visible', async ({ page }) => {
    const auth = new AuthPage(page);
    await expect(auth.registerSubmit).toBeVisible();
  });

  // ✅ 6
  test('TC06 - Enter valid details', async ({ page }) => {
    const auth = new AuthPage(page);
    await auth.register('John Doe', 'john@test.com', 'Password123');

    await expect(auth.registerName).toHaveValue('John Doe');
    await expect(auth.registerEmail).toHaveValue('john@test.com');
  });

  // ✅ 7
  test('TC07 - Empty form submission', async ({ page }) => {
    const auth = new AuthPage(page);
    await auth.register('', '', '');

    await expect(auth.registerName).toHaveValue('');
    await expect(auth.registerForm).toBeVisible();
  });

  // ✅ 8
  test('TC08 - Invalid email format', async ({ page }) => {
    const auth = new AuthPage(page);
    await auth.register('John', 'invalidemail', 'Password123');

    const valid = await auth.registerEmail.evaluate(el => el.checkValidity());
    expect(valid).toBeFalsy();
  });

  // ✅ 9
  test('TC09 - Password masked', async ({ page }) => {
    const auth = new AuthPage(page);
    await expect(auth.registerPassword).toHaveAttribute('type', 'password');
  });

  // ✅ 10
  test('TC10 - Long name input', async ({ page }) => {
    const auth = new AuthPage(page);

    const longName = 'a'.repeat(100);
    await auth.register(longName, 'test@test.com', 'Password123');

    await expect(auth.registerName).toHaveValue(longName);
  });

  // ✅ 11
  test('TC11 - Special characters in name', async ({ page }) => {
    const auth = new AuthPage(page);

    await auth.register('@#$%^', 'test@test.com', 'Password123');
    await expect(auth.registerName).toHaveValue('@#$%^');
  });

  // ✅ 12
  test('TC12 - Spaces in input', async ({ page }) => {
    const auth = new AuthPage(page);

    await auth.register('  John  ', '  john@test.com  ', '  pass  ');
    await expect(auth.registerName).toHaveValue('  John  ');
  });

  // ✅ 13
  test('TC13 - Rapid submit clicks', async ({ page }) => {
    const auth = new AuthPage(page);

    await auth.registerName.fill('John');
    await auth.registerEmail.fill('john@test.com');
    await auth.registerPassword.fill('Password123');

    await Promise.all([
      auth.registerSubmit.click(),
      auth.registerSubmit.click()
    ]);

    await expect(auth.registerForm).toBeVisible();
  });

  // ✅ 14
  test('TC14 - SQL Injection in name', async ({ page }) => {
    const auth = new AuthPage(page);

    await auth.register("' OR 1=1 --", 'test@test.com', 'Password123');
    await expect(auth.registerName).toHaveValue("' OR 1=1 --");
  });

  // ✅ 15
  test('TC15 - XSS attack in name', async ({ page }) => {
    const auth = new AuthPage(page);

    await auth.register('<script>alert(1)</script>', 'test@test.com', 'Password123');
    await expect(auth.registerName).toHaveValue('<script>alert(1)</script>');
  });

  // ✅ 16
  test('TC16 - Login link visible', async ({ page }) => {
    const auth = new AuthPage(page);
    await expect(auth.registerLoginLink).toBeVisible();
  });

  // ✅ 17
  test('TC17 - Login link navigation', async ({ page }) => {
    const auth = new AuthPage(page);

    await auth.registerLoginLink.click();
    await expect(page).toHaveURL(/login/);
  });

  // ✅ 18
  test('TC18 - Email field type', async ({ page }) => {
    const auth = new AuthPage(page);
    await expect(auth.registerEmail).toHaveAttribute('type', 'email');
  });

  // ✅ 19
  test('TC19 - Required attribute validation', async ({ page }) => {
    const auth = new AuthPage(page);

    const required = await auth.registerEmail.evaluate(el => el.required);
    expect(required).toBeTruthy();
  });

  // ✅ 20
  test('TC20 - Form remains after submit', async ({ page }) => {
    const auth = new AuthPage(page);

    await auth.register('John', 'john@test.com', 'Password123');
    await expect(auth.registerForm).toBeVisible();
  });

});
