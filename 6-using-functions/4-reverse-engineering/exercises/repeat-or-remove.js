import { repeatEach } from './utils/repeat-each.js';
import { removeNonLetters } from './utils/remove-non-letters.js';

let userInput = '';

while(!userInput){
  userInput=prompt('enter a phrase');
}

let confirmation = confirm('"ok" to remove everything that is not a letter\n"cancel" to repeat each character');

let result = '';

result = confirmation ? removeNonLetters(userInput) : repeatEach(userInput);

alert(result);