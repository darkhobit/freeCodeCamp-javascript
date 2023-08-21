//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/map-the-debris

function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  
  const newArr = arr.reduce(function(accumulator, currentValue) {
 
    const prop2Name = 'orbitalPeriod'; // Rename property2
    const prop2Value = orbitalP(Object.values(currentValue)[1]); 

  // Add a new object to the accumulator with property1 and the new "name: value" for prpperty2
    accumulator.push({
      [Object.keys(currentValue)[0]]: Object.values(currentValue)[0],
      [prop2Name]: prop2Value
    });

    return accumulator;
  }, []);

function orbitalP(avg) {
  let a = earthRadius + avg;
  let b = Math.pow(a, 3);
  let c = b/GM;
  let d = Math.sqrt(c)
  return Math.round(d*2*Math.PI);
}
  
  return newArr;
}

let result = orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
console.log(result);


//****************ANOTHER SOLUTION (I copied this and made slight changes)************

function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  const newArr = [];
  
  for (let elem in arr) {
    const orbitalPer = Math.round(
       2 * Math.PI * Math.sqrt(Math.pow(Object.values(arr[elem])[1] + earthRadius, 3) / GM)  //I wanted to use Object.keys() and Object.values() to don't need to know the property name
    );
    newArr.push({[Object.keys(arr[elem])[0]]: Object.values(arr[elem])[0], orbitalPeriod: orbitalPer});
  }

  return newArr;
}

// test here
let result = orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);
console.log(result);
