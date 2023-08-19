//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/convert-html-entities
//the 'g' flag specifies that all matches should be replaced.
function convertHTML(str) {
  let newStr = str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\'/g, "&apos;")
    .replace(/\"/g, "&quot;");

  return newStr;
}
let result = convertHTML("Hamburgers < Pizza < Tacos");
console.log(result);
