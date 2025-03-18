export const repeatCharacters = (text = '', toRepeat = 0) => {
  debugger;
  let result = '';
  for (const char of text) {
    for (let i = 0; i < toRepeat; i++) {
      result += char;
    }
  }
  return result;
};
