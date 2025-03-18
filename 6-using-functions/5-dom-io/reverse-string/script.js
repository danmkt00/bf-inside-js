import { readString, display } from '../../../lib/dom-io.js';

import { reverseString } from './utils/reverse-string.js';

document.getElementById('reverse-it').addEventListener('click', () => {
  const userText = document.getElementById('user-text').value;
  const display = document.getElementById('reversed-output');

  display.innerText = reverseString(userText);
});
