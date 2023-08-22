//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/palindrome-checker

function palindrome(str) {
  //variant 1 of filtering
  /*let newStr = str.split(/[^a-zA-Z0-9]/)
  .join('')
  .toLowerCase()
  .split(''); */
  
  //variant 2 of filtering
  let newStr = str.toLowerCase().split('')
  .filter(item => /[a-z0-9]/.test(item));
  
  let len = newStr.length;
  let bol;

  for(let i = 0; i < len/2; i++) {
    if(newStr[i] === newStr[(len - 1) - i]) {   
      bol = true;
    } else {
      bol = false;
      break;
    }
  }

  return bol;
}

let result = palindrome("almostomla");
console.log(result);
