import {searchText} from './utils/search.js'

let userPhrase = '';

let check = false;

while(!check){
  userPhrase = prompt('enter a phrase to search');
  check = confirm(`is this correct: "${userPhrase}"`);
}

let caseSensitive = confirm('do you want a case-sensitive search?');

let searchQuery = '';
check = false;

while(!check){
  searchQuery = prompt('enter a search query, this program will check if it exists in your phrase');
   check = confirm(`is this correct: "${searchQuery}"`);
}

let result = '';

if(searchText(userPhrase, searchQuery, caseSensitive)){
  result = `"${userPhrase}" does include "${searchQuery}"\n case sensitive: ${caseSensitive.toString()}`;
}else{
   result = `"${userPhrase}" does not include "${searchQuery}"\n case sensitive: ${caseSensitive.toString()}`;
}

alert(result);