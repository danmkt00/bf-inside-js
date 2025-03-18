export const repeatString = (text = '', numberOfTimes = 1) => {
  let result = '';
  for (let i = 0; i < numberOfTimes; i++) {
    result += text;
  }
  return result;
};
