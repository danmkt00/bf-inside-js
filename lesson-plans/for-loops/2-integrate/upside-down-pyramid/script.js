import { readString, display } from '../../../../lib/dom-io.js';

document.getElementById('pyramid-it').addEventListener('click', () => {
  debugger;

  // read user text 
  const toPyramid = document.getElementById('to-pyramid').value;

  // create the pyramid
  let text = toPyramid;
  let result = '';

  for(let i = 0; i < toPyramid.length; i++){
    result += text + '\n';
    text = text.slice(1);
  }


  // display the pyramid
  const pyramided = document.getElementById('pyramided');
  pyramided.innerText = result;
});
