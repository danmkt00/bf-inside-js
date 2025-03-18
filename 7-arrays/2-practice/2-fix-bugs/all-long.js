// #todo

/**
 *
 */
export const allLong = (strings = [], long = 0) => {
  let allAre = true;
  for (let i = 0; i < strings.length; i++) {
    const next = strings[i];
    if (next.length < long) {
      allAre = false;
      break;
    }
  }
  return allAre;
};
