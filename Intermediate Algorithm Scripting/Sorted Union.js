//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sorted-union

function uniteUnique(arr) {
  let myArr = [...arguments].flat();
  //variant 1 --> "indexOf" inside the "filter" callback can be inefficient for large arrays, as it has to search the array for each element
  //return myArr.filter((item, index) => myArr.indexOf(item) == index);
 
  //variant 2
  return Array.from(new Set(myArr));
}

let result = uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]); 
console.log(result);
