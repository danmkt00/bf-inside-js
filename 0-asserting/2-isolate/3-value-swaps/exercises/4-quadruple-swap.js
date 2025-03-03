// #todo

'use strict';

console.log('-- begin --');

// --- declare and initialize variables ---

let a = 'y';
let b = 'z';
let c = 'w';
let d = 'x';
let temp;

// --- swap values ---

temp = a; // y
a = c; // y -> w
c = temp // w -> y

temp = b; // y -> z
b = d; //b -> z
d = temp; // x -> z

// --- test final values ---

const test1 = a === 'w';
console.assert(test1, 'Test 1');

const test2 = b === 'x';
console.assert(test2, 'Test 2');

const test3 = c === 'y';
console.assert(test3, 'Test 3');

const test4 = d === 'z';
console.assert(test4, 'Test 4');

const test5 = temp === 'z';
console.assert(test5, 'Test 5');

console.log('-- end --');
