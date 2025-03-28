// #todo

'use strict';

console.log('-- begin --');
// fill in the blanks to pass the assertions

const array1 = ['a', 'b', 'c', 'd'];
const otherArray1 = ['b', 'd', 'a', 'c'];

console.assert(array1[2] === otherArray1[3], 'Test 1: a');
console.assert(array1[0] === otherArray1[2], 'Test 1: b');
console.assert(array1[3] === otherArray1[1], 'Test 1: c');
console.assert(array1[1] === otherArray1[0], 'Test 1: d');

const array2 = [true, false, ''];
const otherArray2 = [true, false, '']; // true '' false
// leave this code!
const temp = otherArray2[1];
otherArray2[1] = otherArray2[2];
otherArray2[2] = temp;

console.assert(array2[2] === otherArray2[1], 'Test 2: a');
console.assert(array2[0] === otherArray2[0], 'Test 2: b');
console.assert(array2[1] === otherArray2[2], 'Test 2: c');

const array3 = ['hi', 'bye', 'middle', 'end'];
const otherArray3 = ['bye', 'hi'];
// leave this code!
otherArray3[1] = array3[2]; //bye middle
otherArray3[3] = array3[0]; //bye middle empty hi
otherArray3[2] = array3[3]; //bye middle end hi

console.assert(array3[0] === otherArray3[3], 'Test 3: a');
console.assert(array3[1] === otherArray3[0], 'Test 3: b');
console.assert(array3[2] === otherArray3[1], 'Test 3: c');
console.assert(array3[3] === otherArray3[2], 'Test 3: d');

console.log('-- end --');
