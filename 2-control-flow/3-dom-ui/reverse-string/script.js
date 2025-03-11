import { readString, display } from '../../../lib/dom-io.js';
const data = {
  reversedResult: '',
};

const dom = {
  userText: document.getElementById('user-text'),
  reversedOutput: document.getElementById('reversed-output'),
};

document.getElementById('reverse-it').addEventListener('click', () => {
  debugger;
  data.reversedResult = '';

  // read user text
  const userText = dom.userText.value;

  // use a for loop that counts down (i--) to reverse the input
  for(let i = userText.length - 1; i >= 0; i--){
    data.reversedResult += userText[i];
  }

  // display the reversed string
  dom.reversedOutput.innerText = data.reversedResult;
});
