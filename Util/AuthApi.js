const { newTestUser } = require('./TestDataFactory');

const API_BASE = 'https://api.practicesoftwaretesting.com';

class AuthApi {
  /**
   * @param {import('@playwright/test').APIRequestContext} request
   */
  constructor(request) {
    this.request = request;
  }

  async registerUser(overrides = {}) {
    const user = newTestUser();
    const payload = { ...user.payload, ...overrides };

    const response = await this.request.post(`${API_BASE}/users/register`, {
      data: payload,
    });

    if (response.status() !== 201) {
      throw new Error(
        `Registration failed (${response.status()}): ${await response.text()}`
      );
    }

    return {
      email: payload.email,
      password: payload.password,
      id: (await response.json()).id,
    };
  }

  async login(email, password) {
    const response = await this.request.post(`${API_BASE}/users/login`, {
      data: { email, password },
    });

    if (!response.ok()) {
      throw new Error(`Login failed (${response.status()}): ${await response.text()}`);
    }

    return response.json();
  }
}

module.exports = { AuthApi };