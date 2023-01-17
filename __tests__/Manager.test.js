const Manager = require('../lib/Manager.js');

const manager1 = new Manager('Carla', 0, 'carla@hotmail.com', 'Manager', 927);

// Declare this object to test if 'Employee' is chosen as the default role if role is empty
const manager2 = new Manager('Carla', 0, 'carla@hotmail.com', '', 927);

test('Creates Manager object with all valid values', () => {
  expect(manager1.name).toEqual(expect.any(String));
  expect(manager1.id).toEqual(expect.any(Number));
  expect(manager1.email).toEqual(expect.stringContaining('@'));
  expect(manager1.role).toEqual('Manager');
  expect(manager1.officeNumber).toEqual(expect.any(Number));
});

test('Manager method returns valid office number', () => {
  expect(manager1.getOfficeNumber()).toEqual(expect.any(Number));
});

test('Manager method returns correct role', () => {
  expect(manager1.getRole()).toEqual('Manager');
});

test('Returns employee if role property not filled', () => {
  // Test to make sure both the getRole function and regular property return Employee as it should
  expect(manager2.getRole()).toEqual('Employee');
  expect(manager2.role).toEqual('Employee');
});