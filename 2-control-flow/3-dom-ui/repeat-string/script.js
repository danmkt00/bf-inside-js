import { readNumber, readString, display } from '../../../lib/dom-io.js';
const data = {
  repeatedResult: '',
};

const dom = {
  userText: document.getElementById('user-text'),
  numberOfTimes: document.getElementById('number-of-times'),
  repeatedOutput: document.getElementById('repeated-output'),
};

document.getElementById('repeat-it').addEventListener('click', () => {
  debugger;
  data.repeatedResult = '';
  // read user values
  const userText = dom.userText.value;
  const numberOfTimes = Number(dom.numberOfTimes.value);

  // repeat the string
  for (let i = 0; i < numberOfTimes; i++) {
    data.repeatedResult += userText;
  }

  // display the repeated string
  dom.repeatedOutput.innerText = data.repeatedResult;
});
