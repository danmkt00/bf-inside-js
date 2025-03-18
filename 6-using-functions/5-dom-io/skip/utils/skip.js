export const skip = (text = '', toSkip = 0) => {
  let result = '';
  for (let i = 0; i < text.length; i += toSkip) {
    result += text[i];
  }
  return result;
};
