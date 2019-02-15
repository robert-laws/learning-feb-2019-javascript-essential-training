// immediately invoked function expression
var bigNumber = (function(a, b) {
  var result;
  a > b ? result = "first number is bigger" : result = "second number is bigger";
  return result;
})(23, 2);

console.log(bigNumber);

// function scope
function getName() {
  var name = "bob";
}

//console.log(name);

const MYCONSTANT = 'hello';
console.log(MYCONSTANT);

// MYCONSTANT = 3;

// objects with functions inside

var person = {
  name: "bob cobb",
  age: 34,
  location: "New York",
  updateAge: function() {
    return ++person.age;
  }
}

console.log(person.age);

person.updateAge();

console.log(person.age);

// Object Constructor

function Employee(name, age, location) {
  this.name = name;
  this.age = age;
  this.location = location;
  this.updateAge = function() {
    return ++this.age;
  }
}

// multiple instances of the Employee object can be used to populate an array
var employees = [
  new Employee("Hal Hope", 31, "Boston"),
  new Employee("Bob Cobb", 52, "Miami")
];

console.log(employees[1]);

// Closures

function doMath() {
  var a = 3;
  var b = 6;
  function multiply() {
    var result = a * b;
    return result;
  }
  return multiply;
}

var mathResult = doMath();

console.log(mathResult());

// Closure example - calculate em
function giveMeEms(pixels) {
  var baseValue = 16;

  function doTheMath() {
    return pixels/baseValue;
  }

  return doTheMath;
}

var smallSize = giveMeEms(12);
var mediumSize = giveMeEms(18);
var largeSize = giveMeEms(24);
var xlargeSize = giveMeEms(32);

console.log(smallSize());
console.log(mediumSize());
console.log(largeSize());
console.log(xlargeSize());