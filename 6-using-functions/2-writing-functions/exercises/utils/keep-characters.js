/**
 * Returns a new string with only the given characters left in it.
 *
 * @param {_} [_=_] - Some text to remove characters from.
 * @param {_} [_=_] - The characters to keep.
 * @returns {_} Text with only the given characters still in it.
 */

/*
export const removeCharacters = (text = '', toRemove = '') => {
  let newText = text;
  for (const character of toRemove) {
    newText = newText.replaceAll(character, '');
  }
  return newText;
};
*/
export const keepCharacters = (text = '', toKeep = '') => {
    return [...text].filter(char => toKeep.includes(char)).join('');
};
