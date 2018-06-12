'use strict';

const greet = require('./../src/lib/greet');

describe('testing #greet', () => {
  test('testing #greet happy path', () => {
    expect(greet('world')).toBe('hello world');
  });

  test('testing #greet returns null when supplying non-string values', () => {
    expect(greet(null)).toBeNull();
    expect(greet({})).toBeNull();
    expect(greet(123)).toBeNull();
  });
});
