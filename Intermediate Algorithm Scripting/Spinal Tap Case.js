//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/spinal-tap-case

function spinalCase(str) {
  return str.split(/(?=[A-Z])/)
  .join(' ')
  .split(/[^a-zA-Z]/)
  .filter(item => item !== '')
  .join('-')
  .toLowerCase();
  
}

let result = spinalCase('The_Andy_Griffith_Show');
console.log(result);
