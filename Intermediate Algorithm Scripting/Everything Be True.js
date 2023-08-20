//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/everything-be-true

function truthCheck(collection, pre) {
  let bolean = true;
  collection.forEach(item => {
    if(!item[pre]) {
      bolean = false;
    }
  });

  return bolean;
}

let result = truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "name");
console.log(result);
