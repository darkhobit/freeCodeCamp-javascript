//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/arguments-optional
//I need to finish this exercise
function addTogether() {
  let arg = [...arguments];
  if(arg.length == 2) {
    return arg[0] + arg[1];
  } else {

  }
  
  return false;
}

let result = addTogether(2,3);
console.log(result);
