export const upsideDownPyramid = (text = '') => {
  debugger;
  let result = '';
  for (let i = 0; i < text.length; i++) {
    result += text.slice(i) + '\n';
  }
  return result;
};
