//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/binary-agents
//I had some help from ChatGPT 

function binaryAgent(str) {
  
  let myStr = str.split(' ').map(item => parseInt(item, 2));
  let text = String.fromCharCode(...myStr); 
  
  /*  ***Another solution to this exercise***
  let text = '';
  let myStr = str.split(' ');
  myStr.forEach(item => {
    const numb = parseInt(item, 2);
    const char = String.fromCharCode(numb);
    text += char;
    });  
  */
  
  return text;
}

let result = binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
console.log(result);
