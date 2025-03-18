// #todo

import { someLong } from './some-long.js';

describe('someLong function', () => {
  test('returns true if at least one string is longer than or equal to the given length', () => {
    expect(someLong(['apple', 'dog', 'cat'], 5)).toBe(true); // 'apple' has 5 letters
  });

  test('returns false if no strings are longer than or equal to the given length', () => {
    expect(someLong(['a', 'bb', 'ccc'], 5)).toBe(false);
  });

  test('returns true when the exact length matches', () => {
    expect(someLong(['hello', 'world'], 5)).toBe(true); // Both words have 5 letters
  });

  test('returns false for an empty array', () => {
    expect(someLong([], 5)).toBe(false);
  });

  test('returns true if multiple long strings exist', () => {
    expect(someLong(['elephant', 'lion', 'tiger'], 4)).toBe(true); // All words are ≥ 4 chars
  });

  test('works with default long length of 5', () => {
    expect(someLong(['hi', 'bye', 'goodbye'])).toBe(true); // 'goodbye' is ≥ 5
  });
});