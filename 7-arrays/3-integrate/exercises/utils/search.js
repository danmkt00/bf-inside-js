/**
 *
 */
export const search = (strings = [], query = '') => {
  return query === '' ? strings : strings.filter((str) => str.includes(query));
};
