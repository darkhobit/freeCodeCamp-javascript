//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-odd-fibonacci-numbers

//this code was made with the help of ChatGPT, because the first one I made produced the message: "Potential infinite loop detected"
//the code with PROBLEM is at the bottom
function sumFibs(num) {
  
  let fibArr = [1, 1]; // Initialize the array with the first two Fibonacci numbers. I'm not sure this is correct according to the Fibonacci sequence but it is for the purpose of this exercise
  let sumOdd = 0;

  if(num <= 2) {
    sumOdd = num;
  } else {
    sumOdd = 2;
    for (let i = 2; i <= num; i++) {
      fibArr[i] = fibArr[i - 1] + fibArr[i - 2];
      if (fibArr[i] % 2 === 1 && fibArr[i] <= num) { //sum off odd Fibonacci numbers less than or equal to "num"
        sumOdd += fibArr[i];
      }
    }
  }
  return sumOdd;
}

let result = sumFibs(75024);
console.log(result);


/*
function sumFibs(num) {
 
  let sumOdd = 0;
  for(let i = 0; i <= num; i++) {  //the WARNING message was for this line
    if(fibonacci(i) % 2 === 1 && fibonacci(i) < num) {
      sumOdd += fibonacci(i);
      //console.log(fibonacci(i))
    }
  }
    return sumOdd;
}
*/
