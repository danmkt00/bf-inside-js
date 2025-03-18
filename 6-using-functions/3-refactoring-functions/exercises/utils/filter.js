/**
 *
 */
export const filter = (toFilter = '', removeThese = '') => {
  let newText = toFilter.toLowerCase();

  for (const character of removeThese) {
    newText = newText.replaceAll(character, '');
  }
  return newText;
};
