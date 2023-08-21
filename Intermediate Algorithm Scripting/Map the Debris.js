//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/map-the-debris

function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  
  const newArr = arr.reduce(function(accumulator, currentValue) {
 // let { property1, property2 } = currentValue; // Destructure properties

  const renamedProperty = 'orbitalPeriod'; // Rename property2

  const orbitalPeriod = orbitalP(Object.values(currentValue)[1]);

  // Add a new object to the accumulator with property1 and the renamed property
  accumulator.push({
    [Object.keys(currentValue)[0]]: Object.values(currentValue)[0],
    [renamedProperty]: orbitalPeriod
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
  //*******
  return newArr;
}

let result = orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
//console.log(result);
