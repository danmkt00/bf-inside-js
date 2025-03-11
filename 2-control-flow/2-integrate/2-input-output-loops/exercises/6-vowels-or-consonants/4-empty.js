// #todo

'use strict';

let userInput = '';
let userConfirmed = false;
while (!userConfirmed) {
  userInput = prompt('enter a word to filter:');

  if (userInput === '' || userInput === null) {
    alert('nope, enter something');
    continue;
  }

  const confirmMessage =
    'do you want to filter this word?\n\n' + '- "' + userInput + '"';
  userConfirmed = confirm(confirmMessage);
}

const removeVowels = confirm(`what would you like to remove from "${userInput}"?
- ok: vowels
- cancel: consonants
`);

const vowels = 'aeiou';

let filteredInput = '';
for (const character of userInput) {
  const lowerCaseCharacter = character.toLowerCase();
  if (removeVowels) {   //if we remove vowels from text
    if (vowels.includes(lowerCaseCharacter)) {
      continue;
    }
    filteredInput += character;
  } else { //if we don't remove vowels from text
    if (!vowels.includes(lowerCaseCharacter)) {
      filteredInput += character;
    }
  }
}

const finalMessage = `"${userInput}" -> "${filteredInput}"`;
alert(finalMessage);
