// #todo

'use strict';

console.log('-- begin --');

// write a condition to take the correct path
//  use both value1 & value2 in your expressions
// there will be more than one right answer
//  try to find as many as you can
//  what do these solutions have in common?

const value1 = '';
const value2 = -1;
let path = '';

if (!value1) {
  path = 'if';
} else if (value1) {
  path = 'else if';
} else {
  path = 'else';
}

console.assert(path === 'if', 'path should be "if"');

console.log('-- end --');
