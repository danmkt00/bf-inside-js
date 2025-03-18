import { readNumber, readString, display } from '../../../lib/dom-io.js';

import { repeatString } from './utils/repeat-string.js';

document.getElementById("repeat-it").addEventListener('click', () => {
  const userText = document.getElementById('user-text').value;
  const numberOfTimes = Number(document.getElementById('number-of-times').value);
  const display = document.getElementById('repeated-output');

  display.innerText = repeatString(userText, numberOfTimes);
});
