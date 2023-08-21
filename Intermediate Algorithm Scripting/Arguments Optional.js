//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/arguments-optional

function addTogether() {
  let arg = [...arguments];
/*  this could be one way to check if all arguments are numbers, but the other way is simpler
  let bol = true;
  arg.forEach(item => {
    if(typeof item !== "number") {
      bol = false;
    } 
  });
*/
  const bol = arg.every(item => typeof item === "number"); //a simpler way to check
  
  if(arg.length == 2 && bol) {
    return arg[0] + arg[1];
  } else if(arg.length == 1 && bol) {
    return function() {
      let arg2 = [...arguments];
      const bol2 = arg2.every(item => typeof item === "number");
      if(bol2) {
        return arg[0] + arg2[0];
      }       
    }
  } else {
    return undefined;
  }
}

let result = addTogether(2)(7);
console.log(result);
