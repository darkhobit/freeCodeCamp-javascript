//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/drop-it
//I used "myArr" because I did't want to modify the original array, but I could do it with small changes (see comments in the code)
//some of my comments may not make much sense but right now I need them. I hope to change that in the future.

function dropElements(arr, func) {
  let myArr = [...arr];  // removing this line
  for(let i = 0; i < arr.length; i++) {
    if(!func(arr[i])) {
      myArr.shift(); // using "myArr" for "arr" and adding the code (i--;)    
    } else {
      return myArr; 
    }
  }
  return myArr;
}

let result = dropElements([1, 2, 3, 4], function(n) {return n >= 3;});
console.log(result);
