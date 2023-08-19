//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/dna-pairing

function pairElement(str) {
  let letter = str.split('');
  let array = [];

  for(let i = 0; i < letter.length; i++) {
    switch(letter[i]) {
      case "A":
        array.push(["A", "T"]);
        break;
      case "C":
        array.push(["C", "G"]);
        break;
      case "G":
        array.push(["G", "C"]);
        break;
      case "T":
        array.push(["T", "A"]);
        break;
      default:
        console.log('Something is wrong')
    }
  }
  return array
}

let result = pairElement("GCG");
console.log(result);
