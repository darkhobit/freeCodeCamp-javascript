//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/telephone-number-validator

//still working on this....

function telephoneCheck(str) {
  let bol = true;

  let myStr = str.split('');
  let onlyNum = myStr.filter(item => /[0-9]/.test(item)).map(item => parseInt(item));
  if(!/^[15(]/.test(myStr) || !/^[0-9()\s-]+$/.test(str)) { //must be 1, 5, (
    bol = false;

  } else if(onlyNum.length == 11 && onlyNum[0] !== 1) { //grater than 11 ??
    bol = false;
    
  } else if(onlyNum.length == 10 && onlyNum[0] !== 5) { //10 numbers and star in 5
    bol = false;
    
  } else if(onlyNum.length == 10 && onlyNum[0] == 5) {
    if(myStr[0] !== myStr[1] || myStr[0] !== myStr[2]) {
      bol = false;
    }

  } else if(onlyNum.length < 10) {
    bol= false;

  } else if(/[(]/.test(myStr) && /[^)]/.test(myStr)) {
    bol = false;

  } else if(/[)]/.test(myStr) && /[^(]/.test(myStr)) {
    bol = false;
  }


  console.log(myStr);
  //console.log(onlyNum);
  
  return bol;
}

let result = telephoneCheck("555 5-55-555-5");
console.log(result);
/*
let testStr = '555 555-5555';
let str2 = testStr.split('');
console.log(!/^[0-9()\s-]+$/.test(str2))
*/
