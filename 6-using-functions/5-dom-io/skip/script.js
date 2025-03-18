import { readNumber, readString, display } from '../../../lib/dom-io.js';

import { skip } from './utils/skip.js';

document.getElementById('skip-them').addEventListener('click', () => {
  
  const skipSize = Number(document.getElementById('skip-size').value);
  const userText = document.getElementById('user-text').value;
  const display = document.getElementById('skipped-output');

  display.innerText = skip(userText, skipSize);
});
