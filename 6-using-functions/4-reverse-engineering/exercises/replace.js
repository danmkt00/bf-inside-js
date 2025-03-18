import { replaceText } from './utils/replace-text.js';

let originallText = '';
let textToReplace = '';
let replacementText = '';

alert(
  'first you will enter some text, then decide what to replace:\n- enter the old thing to replace\n- and the new thing to replace it',
);

while (!originallText) {
  originallText = prompt('enter the original text to modify');
}

while (!textToReplace) {
  textToReplace = prompt('enter the text to replace');
}

while (!replacementText) {
  replacementText = prompt('enter the replacement text');
}

let result = `before: ${originallText}\nafter: ${replaceText(originallText, textToReplace, replacementText)}`;

alert(result);
