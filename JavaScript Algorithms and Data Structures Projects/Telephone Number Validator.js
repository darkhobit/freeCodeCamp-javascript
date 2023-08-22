//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/telephone-number-validator

//still working on this....

function telephoneCheck(str) {
  let bol = true;

  let myStr = str.split('');
  let onlyNum = myStr.filter(item => /[0-9]/.test(item)).map(item => parseInt(item));
  
  if(!/^[15(]/.test(myStr) || !/^[0-9()\s-]+$/.test(str)) { //must be 1, 5, (
    bol = false;

  } else if(onlyNum.length == 11 && onlyNum[0] !== 1 || onlyNum.length > 11 ) { 
    bol = false;
   
  } else if(onlyNum.length == 10 && onlyNum[0] !== 5) { //10 numbers and star in 5
    bol = false;
     
  } else if(onlyNum.length < 10) {
    bol= false;

  } else if(onlyNum.length == 10 && onlyNum[0] == 5) {
    let num5 = myStr.indexOf('5');
    if(myStr[num5] !== myStr[num5 + 1] || myStr[num5] !== myStr[num5 + 2]) {
      bol = false;
      console.log(num5);
    } 

  } // check that for every '(' character there's a corresponding ')'
  //this part is an on going project

  //console.log(myStr);
  //console.log(onlyNum);
  
  return bol;
}

let result = telephoneCheck("(555)555-5555");
console.log(result);

/*
let testStr = '555 555-5555';
let str2 = testStr.split('');
console.log(!/^[0-9()\s-]+$/.test(str2))
*/
