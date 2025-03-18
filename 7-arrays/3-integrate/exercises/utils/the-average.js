export const theAverage = (numbers = []) => {
  let theAverage = 0;
  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    theAverage += number / numbers.length;
  }
  return theAverage;
};
