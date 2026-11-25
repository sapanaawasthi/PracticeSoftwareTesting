const base = require('@playwright/test');
const { AuthApi } = require('./AuthApi');

/**
 * Registers a brand-new user at the start of each test (valid every day — no manual updates).
 */
const test = base.test.extend({
  testUser: async ({ request }, use) => {
    const auth = new AuthApi(request);
    const user = await auth.registerUser();
    await use(user);
  },
});

const expect = base.expect;

module.exports = { test, expect };