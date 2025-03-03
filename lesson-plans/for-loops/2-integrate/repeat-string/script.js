import { readNumber, readString, display } from '../../../../lib/dom-io.js';

document.getElementById('repeat-it').addEventListener('click', () => {
  debugger;

  // read user values
  const userText = document.getElementById('user-text').value;
  const numberOfTimes = Number(document.getElementById('number-of-times').value);

  // repeat the string
  let result = '';
  for(let i = 0; i < numberOfTimes; i++){
    result+=userText;
  }

  // display the repeated string
  const repeatedText = document.getElementById('repeated-output');
  repeatedText.innerText = result;
});
