//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/missing-letters

function fearNotLetter(str) {
  let missLett;
  let c = 0;
  for(let i = 1; i < str.length; i++) {
    if((str[i].charCodeAt() - str[i-1].charCodeAt()) != 1) {
      c ++;
      return missLett = (String.fromCharCode(str[i].charCodeAt() - 1));
    }
  }
  if(c == 0) {
    return undefined;
  } else {
    return missLett;
  }
}

let result = fearNotLetter("abce");
console.log(result);
