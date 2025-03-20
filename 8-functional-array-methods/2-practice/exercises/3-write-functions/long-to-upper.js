// #todo

/**
 *
 */
export const longToUpper = (arr = [], long = 0) => {
  return arr.map((string) =>
    string.length >= long ? string.toUpperCase() : string,
  );
};
