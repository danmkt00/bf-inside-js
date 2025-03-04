/**
 * find the first negative number, returns undefined if there is none
 *  does not modify the array
 * @param {any[]} arr - the array of values
 * @returns {(number|undefined)} the first negative number
 */
export const firstNegativeNumber = (arr = []) => {
  let negativeNumber;
  for (let num of arr) {
    if (typeof num === 'number' && num < 0) {
      negativeNumber = num;
      break;
    }
  }
  return negativeNumber;
};
