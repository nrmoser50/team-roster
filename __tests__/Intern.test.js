const Intern = require('../lib/Intern.js');

const intern1 = new Intern(
  'Bob',
  1,
  'bobert@yahoo.com',
  'Intern',
  'Smith'
);

// Declare this object to test if 'Employee' is chosen as the default role if role is empty
const intern2 = new Intern('Bob', 1, 'bobert@yahoo.com', '', 'Smith');

test('Creates intern object with all valid values', () => {
  expect(intern1.name).toEqual(expect.any(String));
  expect(intern1.id).toEqual(expect.any(Number));
  expect(intern1.email).toEqual(expect.stringContaining('@'));
  expect(intern1.role).toEqual('Intern');
  expect(intern1.school).toEqual(expect.any(String));
});

test('Intern method returns school', () => {
  expect(intern1.getSchool()).toEqual(expect.any(String));
});

test('Intern method returns correct role', () => {
  expect(intern1.getRole()).toEqual('Intern');
});

test('Returns employee if role property not filled', () => {
  // Test to make sure both the getRole function and regular property return Employee as it should
  expect(intern2.getRole()).toEqual('Intern');
  expect(intern2.role).toEqual('Intern');
});