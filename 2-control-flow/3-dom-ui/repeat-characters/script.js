import { readNumber, readString, display } from '../../../lib/dom-io.js';
const data = {
  repeatedResult: '',
};

const dom = {
  userText: document.getElementById('user-text'),
  numberOfTimes: document.getElementById('number-of-times'),
  repeatedOutput: document.getElementById('repeated-output'),
};
document.getElementById('repeat-them').addEventListener('click', () => {
  debugger;
  data.repeatedResult = '';

  // read user values
  const userText = dom.userText.value;
  const numberOfTimes = Number(dom.numberOfTimes.value);

  // repeat the characters in the text

  for (let i = 0;  i<userText.length; i++) {
    for (let y = 0; y < numberOfTimes; y++) {
      data.repeatedResult += userText[i];
    }
  }

  // display the text with repeated characters
  dom.repeatedOutput.innerText = data.repeatedResult;
});
