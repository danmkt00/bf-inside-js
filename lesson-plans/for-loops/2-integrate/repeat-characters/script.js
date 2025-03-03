import { readNumber, readString, display } from '../../../../lib/dom-io.js';

document.getElementById('repeat-them').addEventListener('click', () => {
  debugger;

  // read user values
  const userText = document.getElementById('user-text').value;
  const numberOfTimes = Number(document.getElementById('number-of-times').value);

  // repeat the characters in the text

  let result = '';

  for (let i = 0; i < userText.length; i++) {
    for (let y = 0; y < numberOfTimes; y++) {
        result += userText[i];
    }
  }

  // display the text with repeated characters
  const repeatedOutput = document.getElementById('repeated-output');
  repeatedOutput.innerText = result;

});
