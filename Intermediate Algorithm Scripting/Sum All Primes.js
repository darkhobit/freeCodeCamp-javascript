//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-primes
//In this case, I found the code to print prime numbers and I transformed it very slightly to sum the primes lower than "num".

function sumPrimes(num) {
let primes = 0;
//looping to generate numbers less than "num"
for (let i = 2; i <= num; i++) {
    let flag = 0;
    // looping to check if the number is prime.
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }
    // summing the prime numbers
    if (i > 1 && flag == 0) {
        primes += i;
    }
}
return primes;
}

let result = sumPrimes(2);
console.log(result);
