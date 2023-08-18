function whatIsInAName(collection, source) {
  
  let keySo = Object.keys(source);

  return collection
  .filter(coll => Object.keys(coll).length >= keySo.length)
  .filter(item => {
    for(let key of keySo) {
      if(source[key] !== item[key]) {
        return false;
      }
    }
    return true;
  });
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
