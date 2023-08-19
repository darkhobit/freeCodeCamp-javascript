//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/search-and-replace

function myReplace(str, before, after) {
  let upperAfter = after.slice();

  if(before.charAt(0) === before.charAt(0).toUpperCase()) {
    upperAfter = after.charAt(0).toUpperCase() + after.slice(1);
  } else {
    upperAfter = after.charAt(0).toLowerCase() + after.slice(1);
  }
  return str.replace(before, upperAfter);
}

let result = myReplace("I think we should look up there", "up", "Down");
console.log(result);
