const { LoginPage } = require('./LoginPage');
const { HomePage } = require('./HomePage');
const { AccountPage } = require('./AccountPage');

class POManager {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.loginPage = new LoginPage(page);
    this.homePage = new HomePage(page);
    this.accountPage = new AccountPage(page);
  }

  getLoginPage() {
    return this.loginPage;
  }

  getHomePage() {
    return this.homePage;
  }

  getAccountPage() {
    return this.accountPage;
  }
}

module.exports = { POManager };