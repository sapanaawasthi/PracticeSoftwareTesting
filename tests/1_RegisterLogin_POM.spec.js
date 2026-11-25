const { test, expect } = require('../Util/Fixture');
const { POManager } = require('../pageObjects/POManager');

test.describe('Practice Software Testing — POM', () => 
  {
  test('fresh user: API register + UI login', async ({ page, testUser }) => {
    const poManager = new POManager(page);

    const loginPage = poManager.getLoginPage();
    await loginPage.goto();
    await loginPage.login(testUser.email, testUser.password);

    const accountPage = poManager.getAccountPage();
    await accountPage.expectLoaded();

    await expect(page).toHaveURL(/\/account/);
  });

  test('after login, home page navigation works', async ({ page, testUser }) => {
    const poManager = new POManager(page);

    const loginPage = poManager.getLoginPage();
    await loginPage.goto();
    await loginPage.login(testUser.email, testUser.password);
    await poManager.getAccountPage().expectLoaded();

    const homePage = poManager.getHomePage();
    await homePage.goto();
    await homePage.expectNavVisible();
  });
});