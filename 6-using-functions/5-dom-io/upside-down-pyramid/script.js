import { readString, display } from '../../../lib/dom-io.js';

import { upsideDownPyramid } from './utils/upside-down-pyramid.js';

document.getElementById('pyramid-it').addEventListener('click', () => {
  const toPyramid = document.getElementById('to-pyramid').value;
  const display = document.getElementById('pyramided');

  display.innerText = upsideDownPyramid(toPyramid);
});
