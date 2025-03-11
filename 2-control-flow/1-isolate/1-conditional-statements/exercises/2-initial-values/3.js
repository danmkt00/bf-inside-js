// #todo

'use strict';

console.log('-- begin --');

// can you find at least one solution to reach each path?
//  what do all solutions to the same path have in common?
// or maybe there are unreachable paths!

const func = (value1, value2) => {
  let path = '';
  if (value1 && !value2) {
    path = 'if';
  } else if (!value1 || !value2) {
    path = 'else if 1';
  } else if (value2 && !value1) { // this one is unreachable because if there is one false path = 'else if 1' 
    path = 'else if 2';
  } else {
    path = 'else';
  }
  return path;
};


let result = func(true, false);
console.log(result);

result = func(false, false);
console.log(result);

result = func(false, true);
console.log(result);

result = func(true, true);
console.log(result);

console.log('-- end --');
