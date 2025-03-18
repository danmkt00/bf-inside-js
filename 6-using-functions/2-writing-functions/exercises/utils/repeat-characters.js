/**
 * Returns a new string like the original one but with each character repeated.
 *
 * @param {_} [_=_] - A string to repeat each character.
 * @param {_} [_=_] - How many times to repeat each character.
 * @returns {_} The original text with each character repeated.
 */
export const repeatCharacters = (text = '', toRepeat = 1) => {
  let newText = '';
  for (let i = 0; i < text.length; i++) {
    for (let y = 0; y < toRepeat; y++) {
      newText += text[i];
    }
  }
  return newText;
};
