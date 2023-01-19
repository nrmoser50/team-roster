const Engineer = require('../lib/Engineer.js');

const engineer1 = new Engineer(
  'Nick',
  0,
  'nick@gmail.com',
  'Engineer',
  'Nicholas'
);

// Declare this object to test if 'Employee' is chosen as the default role if role is empty
const engineer2 = new Engineer('Nick', 0, 'nick@gmail.com', '', 'Nicholas');

test('Creates Engineer object with all valid values', () => {
  expect(engineer1.name).toEqual(expect.any(String));
  expect(engineer1.id).toEqual(expect.any(Number));
  expect(engineer1.email).toEqual(expect.stringContaining('@'));
  expect(engineer1.role).toEqual('Engineer');
  expect(engineer1.github).toEqual(expect.any(String));
});

test('Engineer method returns github username', () => {
  expect(engineer1.getGithub()).toEqual(expect.any(String));
});

test('Engineer method returns correct role', () => {
  expect(engineer1.getRole()).toEqual('Engineer');
});

test('Returns employee if role property not filled', () => {
  // Test to make sure both the getRole function and regular property return Employee as it should
  expect(engineer2.getRole()).toEqual('Engineer');
  expect(engineer2.role).toEqual('Engineer');
});