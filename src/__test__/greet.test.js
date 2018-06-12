const greet = require('./../lib/greet');

describe('greet function testing', () => {
  test('should have a single parameter, and should expect a string as an input', () => {
    expect(greet('Ashton')).toBe('Why hello there Ashton!');
  });
});

