//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/caesars-cipher

function rot13(str) {
  let outStr =  str.split('');
  let inChar;
  let outChar;

  for(let i = 0; i < outStr.length; i++) {
    if(/[A-Z]/.test(outStr[i])) {
      inChar = outStr[i].charCodeAt()
      if(inChar + 13 > 90) {
        inChar -= 26;
      }
      outChar = String.fromCharCode(inChar + 13)
      outStr.splice(i, 1, outChar)
    }
  }
  
  return outStr.join('');
}

let result = rot13("SERR PBQR PNZC");
console.log(result);
