class AccountPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.heading = page.getByRole('heading', { name: 'My account' });
    this.profileLink = page.getByRole('link', { name: 'Profile' });
  }

  async expectLoaded() {
    await this.page.waitForURL(/\/account/);
    await this.heading.waitFor({ state: 'visible' });
  }

  async openProfile() {
    await this.profileLink.click();
    await this.page.waitForURL(/\/account\/profile/);
  }
}

module.exports = { AccountPage };