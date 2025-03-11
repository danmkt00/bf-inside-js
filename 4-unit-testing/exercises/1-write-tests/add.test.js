// #todo

'use strict';

/**
 * Adds two numbers together.
 *
 * @param {number} [x=0] - The left left.
 * @param {number} [y=0] - The right number.
 * @returns {number} The sum of x and y.
 */
const addTwo = (x = 0, y = 0) => {
  return x + y;
};

describe('addTwo function', () => {
  describe('Addition tests', () => {
    it('should return 5 when adding 2 and 3', () => {
      const expected = 5;
      const actual = addTwo(2, 3);
      expect(actual).toEqual(expected);
    });

    it('should return -1 when adding -3 and 2', () => {
      const expected = -1;
      const actual = addTwo(-3, 2);
      expect(actual).toEqual(expected);
    });
  });

  describe('Default parameter tests', () => {
    it('should return 0 when called with no arguments', () => {
      const expected = 0;
      const actual = addTwo();
      expect(actual).toEqual(expected);
    });

    it('should return the same number when one argument is given', () => {
      const expected = 4;
      const actual = addTwo(4);
      expect(actual).toEqual(expected);
    });
  });
});
