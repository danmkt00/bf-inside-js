import { readNumber, readString, display } from '../../../../lib/dom-io.js';

document.getElementById('skip-them').addEventListener('click', () => {
  debugger;

  // read user values
  const skipSize = Number(document.getElementById('skip-size').value);
  const userText = document.getElementById('user-text').value;

  // create a new string with skipped characters
  let result = '';
  for(let i = 0; i < userText.length; i+=skipSize){
    result+=userText[i];
  }

  // display the skipped string
  const skippedOutput = document.getElementById('skipped-output');
  skippedOutput.innerText = result;
});
