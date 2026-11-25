class HomePage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.navMenu = page.getByTestId('nav-menu');
  }

  async goto() {
    await this.page.goto('/');
  }

  async expectNavVisible() {
    await this.navMenu.waitFor({ state: 'visible' });
  }
}

module.exports = { HomePage };