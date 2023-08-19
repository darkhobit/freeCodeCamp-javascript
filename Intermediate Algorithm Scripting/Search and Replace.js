//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/search-and-replace

function myReplace(str, before, after) {
//pending to check if capital letter in 'before' match with 'after'
  return str.replace(before, after);
  
}

let result = myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
console.log(result);
