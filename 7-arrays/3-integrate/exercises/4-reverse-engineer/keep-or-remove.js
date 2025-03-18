/* ===== main program (use functions) ===== */

alert(
  `enter as many inpus as you want.

When you're done entering inputs press cancel`,
);

// -- gather user input --
const strings = [];
while (true) {
  const input = prompt('enter the input or cancel');

  if (input === null) {
    break;
  }

  if (input === '') {
    alert('nothing is not allowed');
    continue;
  }

  strings.push(input);
}
console.log(strings);


let keptInputs = [];
for(const string of strings){
  const toKeep = confirm(`keep '${string}'?'`)
  if (toKeep) keptInputs.push(string);
}


console.log(keptInputs);
alert(keptInputs);

