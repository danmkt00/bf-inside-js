import {removeDuplicates} from './utils/remove.js'
let userInput = '';

while(!userInput){
  userInput = prompt('enter something with repeated letters, they will be removed');
}

let result = removeDuplicates(userInput);

alert(`your input - ${userInput}\nresult - ${result}`);
