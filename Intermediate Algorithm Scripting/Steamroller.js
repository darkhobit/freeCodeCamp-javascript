//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/steamroller

//In this exercise the key element was "Spread syntax [...array]" because I was struggling with inserting the elements of an array into another, 
//all that I tried inserted the whole array into the other and not the elements.

function steamrollArray(arr) {
  
  for(let i = 0; i < arr.length; i++) {
   if(Array.isArray(arr[i])) {
      arr.splice(i, 1, ...getElements(arr[i]));
      i--;
    };
  };
  
  function getElements(myArr) {
    let arrElems = [];
    for(let j = 0; j < myArr.length; j++) {
      arrElems.push(myArr[j]);
    };
    return arrElems;
  }

  return arr;
}

let result = steamrollArray([ 1, [2], [3, [[4]]]]);
console.log(result);
