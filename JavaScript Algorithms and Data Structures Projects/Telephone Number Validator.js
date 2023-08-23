//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/telephone-number-validator
//go to the link to check for the conditions of this exercise

function telephoneCheck(str) {
  
  let bol = true;
  let myStr = str.split('');
  let onlyNum = myStr.filter(item => /[0-9]/.test(item)).map(item => parseInt(item));
  
  if(!/^[15(]/.test(myStr) || !/^[0-9()\s-]+$/.test(str)) { 
    bol = false;
  } 

  if(onlyNum.length == 11 && onlyNum[0] !== 1 || onlyNum.length > 11 ) { 
    bol = false;   
  } 
  
  if(onlyNum.length < 10) {
    bol= false;
  } 
  // joining this conditions that check (onlyNum.length == 10) at the bottom 
  if(onlyNum.length == 10 && onlyNum[0] !== 5) { 
    bol = false;
  } 

 if(onlyNum.length == 10 && onlyNum[0] == 5) {
    let num5 = myStr.indexOf('5');
    if(myStr[num5] !== myStr[num5 + 1] || myStr[num5] !== myStr[num5 + 2]) {
      bol = false;
    } 
  } 

  if(/[()]/.test(str)) {
    let count1 = 0;
    let count2 = 0;
     for(let j = 0; j < myStr.length; j++) {
       if(myStr[j] === '('){
         count1 ++;
       }
       if(myStr[j] === ')'){
         count2 ++;
       }
     }
     console.log(count1 + '' + count2)
    if(count1 != count2 || myStr.indexOf('(') > myStr.indexOf(')'))
    bol = false;
  }
  
  return bol;
}

let result = telephoneCheck("555 555-5555");
console.log(result);

/*  ******checking (onlyNum.length == 10) only once *****
  if(onlyNum.length == 10) { 
    if(onlyNum[0] !== 5) {
      bol = false;
    } else if(onlyNum[0] == 5) {
      let num5 = myStr.indexOf('5');
      if(myStr[num5] !== myStr[num5 + 1] || myStr[num5] !== myStr[num5 + 2]) {
        bol = false;
      } 
    } 
  }
  */
