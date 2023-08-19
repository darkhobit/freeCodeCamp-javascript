//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/smallest-common-multiple
//I looked for help again, in this case mostly because of the math needed to solve this exercise, I wanted to be efficient.

function smallestCommons(arr) {
  let sortArr = arr.sort((a, b) => a - b);
  let n1 = sortArr[0];
  let n2 = sortArr[1];
  let ans = n2;  //the first answer to check is the greater of the given numbers 
  
  for (let i = n1; i <= n2; i++) {
      ans = (ans * i)/(gcd(ans, i));
      }
      return ans;
}

  function gcd(a, b)
{
   if(a%b != 0)
      return gcd(b,a%b);
   else
      return b;
}

let result = smallestCommons([5, 1]);
console.log(result);
