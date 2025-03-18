export const repeatEach = (text = '') => {
  let result = '';
  for(let i = 0; i < text.length; i++){
    result += text[i] + text[i];
  }
  return result;
};
