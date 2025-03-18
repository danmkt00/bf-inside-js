import { readNumber, display } from '../../../lib/dom-io.js';

import { multiplyTwo } from './utils/multiply-two.js';


document.getElementById('do-math').addEventListener('click', () => {

  const leftNum = Number(document.getElementById('left').value);
  const rightNum = Number(document.getElementById('right').value);
  const display = document.getElementById('product');

  display.innerText = multiplyTwo(leftNum, rightNum);
});
