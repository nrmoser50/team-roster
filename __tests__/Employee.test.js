const Employee = require('../lib/Employee.js');

// Basic property setup that all other child classes will inherit
const testEmployee = new Employee(
  'Employee Name',
  124,
  'Employee@gmail.com',
  ''
);

const testEmployee2 = new Employee(
  'Employee Name',
  124,
  'Employee@gmail.com',
  'Employee'
);

test('Creates base employee property setup', () => {
  expect(testEmployee2.name).toEqual(expect.any(String));
  expect(testEmployee2.id).toEqual(expect.any(Number));
  expect(testEmployee2.email).toEqual(expect.stringContaining('@'));
  expect(testEmployee2.role).toEqual('Employee');
});

test('getName method returns valid string', () => {
  expect(testEmployee2.getName()).toEqual(expect.any(String));
});

test('getId method returns valid value', () => {
  expect(testEmployee2.getId()).toEqual(expect.any(Number));
});

test('getEmail method returns valid email', () => {
  expect(testEmployee2.getEmail()).toEqual(expect.stringContaining('@'));
});

test('getRole method returns valid role string', () => {
  expect(testEmployee2.getRole()).toEqual('Employee');
});

test('Returns employee if role property not filled', () => {
  // Test to make sure both the getRole function and regular property return Employee as it should
  expect(testEmployee.getRole()).toEqual('Employee');
  expect(testEmployee.role).toEqual('Employee');
});