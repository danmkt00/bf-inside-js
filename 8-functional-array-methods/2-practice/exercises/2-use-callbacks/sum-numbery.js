// #todo

/**
 * Sums all numbery strings in an array.
 * Returns 0 if the array is empty.
 *
 * @param {string[]} arr - The array of strings.
 * @returns {number} The sum of all numbery strings.
 */
export const sumNumbery = (arr) => {
  // these work, you need to pass them to the right array methods
  const isNotNaN = (entry) => {
    return !Number.isNaN(entry);
  };
  const sumNumbers = (acc, next) => {
    return acc + next;
  };
  const isString = (entry) => {
    return typeof entry === 'string';
  };
  const castToNumber = (entry) => {
    return Number(entry);
  };

  // check if all items in the array are strings
  const areAllStrings = arr.every(isString); // a boolean value
  if (!areAllStrings) {
    return 0; // return 0 if not all items are strings
  }

  return arr
    .map(castToNumber) // Convert all entries to numbers
    .filter(isNotNaN) // Filter out NaN values
    .reduce(sumNumbers, 0); // Sum all the valid numbers starting from 0
};
