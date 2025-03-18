import { readNumber, readString, display } from '../../../lib/dom-io.js';

import { repeatCharacters } from './utils/repeat-characters.js';

document.getElementById('repeat-them').addEventListener('click', () => {
  const userText = document.getElementById('user-text').value;
  const numberOfTimes = Number(document.getElementById('number-of-times').value);
  const repeatedOutput = document.getElementById('repeated-output');

  repeatedOutput.innerText = repeatCharacters(userText, numberOfTimes);


});
