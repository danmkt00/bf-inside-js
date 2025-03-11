// #todo

'use strict';

console.log('-- begin --');

// can you find at least one solution to reach each path?
//  what do all solutions to the same path have in common?
// or maybe there are unreachable paths!

const value1 = 'hello';
const value2 = 0;
let path = '';

if (value1 === value2) {
  //true, true
  path = 'if';
} else if (!value1 === !value2) {
  //'', false
  path = 'else if 1';
} else if (Number(value2) === Number(value1)) {
  //'0', 0
  path = 'else if 2';
} else if (!(value1 || value2)) {
  //unreachable
  path = 'else if 3';
} else {
  // 'hello', 0
  path = 'else';
}

console.log(path);

console.log('-- end --');
