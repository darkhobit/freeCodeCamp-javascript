//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-odd-fibonacci-numbers

//I  have not checked this code yet
function sumFibs(num) {
 
  let sumOdd = 0;
  for(let i = 0; i <= num; i++) {
    if(fibonacci(i) % 2 === 1 && fibonacci(i) < num) {
      sumOdd += fibonacci(i);
      console.log(fibonacci(i))
    }
  }
    return sumOdd;
}

function fibonacci(num) {
    if(num < 2) {
        return num;
    }
    else {
        return fibonacci(num-1) + fibonacci(num - 2);
    }
}

let result = sumFibs(20);
console.log(result);
