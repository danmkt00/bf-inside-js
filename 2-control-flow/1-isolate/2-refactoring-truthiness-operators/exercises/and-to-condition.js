// #todo

'use strict';

console.log('-- begin --');

// refactor this code to use a conditional instead of &&

// try different values and different types
const a = 1001;
console.log(a);

let isBigNumber = false;

if (typeof a === 'number') {
  if (a > 1000) {
    isBigNumber = true;
  }
}
console.log(isBigNumber);

console.log('-- end --');
