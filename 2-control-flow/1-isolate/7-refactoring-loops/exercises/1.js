// #todo

'use strict';

console.log('-- begin --');

const school = 'HackYourFuture';


console.log('--- for of ---');
for (const letter of school) {
  console.log(letter);
}
console.log('--- for of ---');

// write this for...of loop as a for loop:

console.log('--- for ---');
for(let i = 0; i < school.length; i++){
  console.log(school[i]);
}
console.log('--- for ---');

// write this for loop as a while loop:
let i = 0;
console.log('--- while ---');
while (i !== school.length) {
  console.log(school[i]);
  i++;
}
console.log('--- while ---');

console.log('-- end --');
