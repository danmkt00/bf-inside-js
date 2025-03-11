// #todo

'use strict';

const userString = prompt('enter a number:');
const userNumber = Number(userString);

const inputIsANumber = !isNaN(userNumber);

const confirmMessage =
  'did you really enter a number?\n\n' + 'yes -> "ok"\n' + 'no  -> "cancel"';
const userThinksItsANumber = confirm(confirmMessage);

const userIsCorrect = userThinksItsANumber === inputIsANumber;

alert(userIsCorrect ? 'correct!' : 'nope :(');