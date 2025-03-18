/**
 *
 */
export const shiftCharacters = (text = '', shift= 0) => {
  return text
        .split('')
        .map(char => String.fromCharCode(char.charCodeAt(0) + shift))
        .join('');
};
