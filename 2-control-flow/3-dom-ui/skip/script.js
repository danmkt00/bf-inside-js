import { readNumber, readString, display } from '../../../lib/dom-io.js';

const data = {
  skippedResult: '',
};

const dom = {
  skipSize: document.getElementById('skip-size'),
  userText: document.getElementById('user-text'),
  skippedOutput: document.getElementById('skipped-output'),
}

document.getElementById('skip-them').addEventListener('click', () => {
  debugger;
  data.skippedResult = '';

  // read user values
  let skipSize = Number(dom.skipSize.value);
  const userText = dom.userText.value;

  if(skipSize <= 0){
    skipSize = 1;
  }

  // create a new string with skipped characters
  for(let i = 0; i < userText.length; i+=skipSize){
    data.skippedResult += userText[i];
  }

  // display the skipped string
  dom.skippedOutput.innerText = data.skippedResult;
});
