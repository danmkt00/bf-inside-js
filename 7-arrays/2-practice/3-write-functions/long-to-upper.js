// #todo

/**
 *
 */
export const longToUpper = (arr = [], long = 0) => {
  let newArr = [];
  for (const oneString of arr) {
    if (oneString.length >= long) {
      newArr.push(oneString.toUpperCase());
    } else {
      newArr.push(oneString);
    }
  }
  return newArr;
};
