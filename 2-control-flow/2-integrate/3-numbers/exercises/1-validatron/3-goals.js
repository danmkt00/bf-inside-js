// #todo

'use strict';

const userString = prompt('enter a number:');

/* -- BEGIN: check if input is a number -- */
/* -- END -- */

/* -- BEGIN: ask the user if they think their input is a number -- */
/* -- END -- */

const userNumber = Number(userString);

const inputIsANumber = !isNaN(userNumber);

const confirmMessage =
  'did you really enter a number?\n\n' + 'yes -> "ok"\n' + 'no  -> "cancel"';
const userThinksItsANumber = confirm(confirmMessage);

const userIsCorrect = userThinksItsANumber === inputIsANumber;

if (userIsCorrect) {
  alert('correct!');
} else {
  alert('nope :(');
}
