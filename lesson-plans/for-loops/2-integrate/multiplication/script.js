import { readNumber, display } from '../../../../lib/dom-io.js';

document.getElementById('do-math').addEventListener('click', () => {
  debugger;

  // read user values
  const left = Number(document.getElementById('left').value);
  const right = Number(document.getElementById('right').value);

  let result = left * right;

  // display the product
  const display = document.getElementById('product');
  display.innerText = result;
});
