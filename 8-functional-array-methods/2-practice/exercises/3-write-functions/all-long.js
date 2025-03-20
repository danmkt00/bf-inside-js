// #todo

/**
 *
 */
export const allLong = (strings = [], long = 0) => {
  return strings.every((string) => string.length >= long);
};
