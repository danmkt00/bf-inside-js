// #todo

'use strict';

console.log('-- begin --');

// refactor this code to use a condition instead of ||

// try different values and different types
const firstName = 'Abraham';
const lastName = 'Bao';
console.log(firstName, lastName);

let hasAnAName = false;
if (lastName[0] === 'A') {
  hasAnAName = true;
} else if (firstName[0] === 'A') {
  hasAnAName = true;
}

console.log(hasAnAName);

console.log('-- end --');
