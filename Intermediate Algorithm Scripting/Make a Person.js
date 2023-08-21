//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/make-a-person
//I had a lot of help from ChatGpt and at the end, I had to check the answer, I didn't think about these two lines (let firstName = first;) and (let lastName = last;) 
//This exercise was hard, the key to solving it was declaring the variables to store the values, but without having the properties "firstName" and "lastName"


const Person = function(first, last) {
  
  let firstName = first;
  let lastName = last;
  
  this.getFullName = function() {
    //return this.getFirstName() + ' ' + this.getLastName();
    return firstName + ' ' + lastName;  //both do the job
  };
  this.getFirstName = function() {
    return firstName;
  };
  this.getLastName = function() {
    return lastName;
  };
  this.setFullName = function(first, last) {
    this.setFirstName(first);
    this.setLastName(last);
    return this.getFullName();
  };
  this.setFirstName = function(first) {
    return firstName = first;
  };
  this.setLastName = function(last) {
    return lastName = last;
  };
}

let result = new Person('Bob', 'Ross');
console.log(result.getFirstName());
console.log(Object.keys(result).length)
