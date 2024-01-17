const addFive = require('./addFive');
test('adds 5 to a given value', () => {
  expect(addFive(3)).toBe(8);
});
