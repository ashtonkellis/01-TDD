'use strict';

const arithmetic = require('./../src/lib/arithmetic');

describe('testing #arithmetic', () => {
  describe('testing #arithmetic.add', () => {
    test('testing #arithmetic.add happy path', () => {
      expect(arithmetic.add(1, 2)).toBe(3);
    });
    test('testing #arithmetic.add non-numbers should return null', () => {
      expect(arithmetic.add(1, null)).toBe(null);
      expect(arithmetic.add(null, 1)).toBe(null);
      expect(arithmetic.add({}, null)).toBe(null);
      expect(arithmetic.add(1)).toBe(null);
      expect(arithmetic.add(null)).toBe(null);
    });
  });
  describe('testing #arithmetic.sub', () => {
    test('testing #arithmetic.sub happy path', () => {
      expect(arithmetic.sub(1, 2)).toBe(1);
    });
    test('testing #arithmetic.sub non-numbers should return null', () => {
      expect(arithmetic.add(1, null)).toBe(null);
      expect(arithmetic.add(null, 1)).toBe(null);
      expect(arithmetic.add({}, null)).toBe(null);
      expect(arithmetic.add(1)).toBe(null);
      expect(arithmetic.add(null)).toBe(null);
    });
  });
});
