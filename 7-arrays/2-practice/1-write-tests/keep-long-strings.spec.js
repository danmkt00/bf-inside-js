// #todo

import { keepLongStrings } from './keep-long-strings.js';

describe('keepLongString: keeps array with strings that are longer than 5', () => {
  describe('testing with different values', () => {
    it('length > 2', () => {
      const arr1 = ['a', 'b', 'c', 'abcd', 'ad', 'hello'];
      expect(keepLongStrings(arr1, 2)).toEqual(['abcd', 'hello']);
    });
    it('length > 6', () => {
      const arr1 = ['a', 'b', 'c', 'abcd', 'ad', 'hello', 'abcdefg'];
      expect(keepLongStrings(arr1, 6)).toEqual(['abcdefg']);
    });
    it('length > 0', () => {
      const arr1 = ['a', 'b', 'c', 'abcd', 'ad', 'hello', 'abcdefg'];
      expect(keepLongStrings(arr1, 0)).toEqual([
        'a',
        'b',
        'c',
        'abcd',
        'ad',
        'hello',
        'abcdefg',
      ]);
    });
  });
  describe('deffault values', () => {
    it('has a [] as a first default value', () => {
      expect(keepLongStrings()).toEqual([]);
    });
    it('has a 5 as a second default value for length', () => {
      expect(keepLongStrings(['abcdee', 'abcdefghij', 'abc', 'as'])).toEqual([
        'abcdee',
        'abcdefghij',
      ]);
    });
  });
});
