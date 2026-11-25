const { randomBytes } = require('crypto');

const DEFAULT_PASSWORD = 'Pass$w0rd1';

function buildRegistrationPayload(email, password = DEFAULT_PASSWORD) {
  return {
    first_name: 'Auto',
    last_name: 'Tester',
    dob: '2001-01-01',
    phone: '5555555555',
    email,
    password,
    address: {
      street: '101 Testing Way',
      city: 'New York',
      state: 'New York',
      country: 'US',
      postal_code: '10001',
    },
  };
}

function uniqueEmail() {
  const token = `${Date.now()}-${randomBytes(3).toString('hex')}`;
  return `pw.pom+${token}@mailinator.com`;
}

function newTestUser() {
  const email = uniqueEmail();
  return {
    email,
    password: DEFAULT_PASSWORD,
    payload: buildRegistrationPayload(email),
  };
}

module.exports = {
  DEFAULT_PASSWORD,
  buildRegistrationPayload,
  newTestUser,
  uniqueEmail,
};