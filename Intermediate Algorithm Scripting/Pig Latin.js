//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/pig-latin

function translatePigLatin(str) {
  let myStr = str.split('')
  let finalStr = '';
  let c = 0;
  
  while(!pigLatin(myStr) && c < myStr.length) {
    let char = myStr.shift();
    myStr.push(char);
    c++;
  }

  if(c == 0) {
    finalStr = myStr.concat(['way']).join('');
  } else if(c > 0) {
    finalStr = myStr.concat(['ay']).join('');
  }
  return finalStr;
}

function pigLatin(arry) {
    if(arry[0] == 'a' ||
      arry[0] == 'e' ||
      arry[0] == 'i' ||
      arry[0] == 'o' ||
      arry[0] == 'u') {
        return true;
      }
        else {
          return false
          }
}
   
let result = translatePigLatin("rhythm");
console.log(result);
