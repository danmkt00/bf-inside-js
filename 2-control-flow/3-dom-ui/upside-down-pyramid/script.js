import { readString, display } from '../../../lib/dom-io.js';

const data = {
  pyramidedResult: '',
};

const dom = {
  toPyramid: document.getElementById('to-pyramid'),
  pyramided: document.getElementById('pyramided'),
};

document.getElementById('pyramid-it').addEventListener('click', () => {
  debugger;
  data.pyramidedResult = '';

  // read user text
  let toPyramid = dom.toPyramid.value;

  // create the pyramid
  for(let i = 0; i < toPyramid.length; i++){
    data.pyramidedResult += toPyramid.slice(i) + "\n";
  }

  // display the pyramid
  dom.pyramided.innerText = data.pyramidedResult;
});
