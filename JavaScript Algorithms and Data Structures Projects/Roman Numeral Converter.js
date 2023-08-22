//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/roman-numeral-converter

function convertToRoman(num) {
 
  if(num <= 3999  && num > 0) {
    const romans = [
    ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'],
    ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'],
    ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'],
    ['', 'M', 'MM', 'MMM']
    ];
    let numArr = num.toString().split('').map(digit => parseInt(digit));
    let len = numArr.length;
    let romNum = [];
    let count = 0;
   
    for(let i = len - 1; i >= 0; i--) {
       romNum.unshift(romans[count][numArr[i]]);
       count++;
    };
    return romNum.join('');

  } else {
    return "The number must be between 0 and 3999";
  };
}

let result = convertToRoman(10);
console.log(result);
