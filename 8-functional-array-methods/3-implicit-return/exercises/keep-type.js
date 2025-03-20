// #todo

/**
 *
 */
export const keepType = (things = [], type = '') =>
  things.filter((thing) => typeof thing === type);
