class LoginPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.email = page.getByTestId('email');
    this.password = page.getByTestId('password');
    this.loginSubmit = page.getByTestId('login-submit');
  }

  async goto() {
    await this.page.goto('/auth/login');
    await this.email.waitFor({ state: 'visible' });
  }

  async login(email, password) {
    await this.email.fill(email);
    await this.password.fill(password);
    await this.loginSubmit.click();
  }
}

module.exports = { LoginPage };