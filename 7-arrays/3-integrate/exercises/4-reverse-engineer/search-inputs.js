import { search } from '../utils/search.js';

/* ===== main program (use functions) ===== */

alert(
  `enter as many phrases as you want.

When you're done entering phrases press cancel`,
);

// -- gather user input --
const phrases = [];
while (true) {
  const input = prompt('enter the input or cancel');

  if (input === null) {
    break;
  }

  if (input === '') {
    alert('nothing is not allowed');
    continue;
  }

  phrases.push(input);
}
console.log(phrases);

let searchQuery = '';
while (!searchQuery) {
  searchQuery = prompt('type search query');
}

const result = search(phrases, searchQuery);
console.log(result);

const message = `- ${result.join('\n- ')} 
your query - '${searchQuery}'`

alert(message);
