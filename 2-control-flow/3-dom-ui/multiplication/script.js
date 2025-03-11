import { readNumber, display } from '../../../lib/dom-io.js';
const data = {
  result: 0,
};

const dom = {
  leftNumber: document.getElementById('left'),
  rightNumber: document.getElementById('right'),
  product: document.getElementById('product'),
};

document.getElementById('do-math').addEventListener('click', () => {
  debugger;
  // read user values
  // use a for loop to multiply the two numbers
  data.result = Number(dom.leftNumber.value) * Number(dom.rightNumber.value);

  // display the product
  dom.product.innerText = data.result;
});
