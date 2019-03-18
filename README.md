# Learning - Lynda: Javascript Essential Training

[Website for Course](https://learning-feb-2019-javascript-essential-training.netlify.com)

[![Netlify Status](https://api.netlify.com/api/v1/badges/47da4dd3-3f91-41bb-929a-016fa73ca8f2/deploy-status)](https://app.netlify.com/sites/learning-feb-2019-javascript-essential-training/deploys)

## Table of Contents

* [Working with Data](#working-with-data)
* [Functions and Objects](#functions-and-objects)
* [Javascript and the DOM: Part 1](#javascript-and-the-dom-part-1)
* [Javascript and the DOM: Part 2](#javascript-and-the-dom-part-2)
* [Loops](#loops)
* [Validating and Minifying Javascript](#validating-and-minifying-javascript)

---

## Working with Data

Equality and Strict Equality comparisons

```javascript
var a = 4;
var b = '4';
a == b ? true : false; // true
a === b ? true : false; // false
```

## Functions and Objects

Declaring a object constructor

```javascript
function Person(name, age, location) {
  this.name = name;
  this.age = age;
  this.location = location;
  this.updateAge = function() {
    return ++this.age;
  }
}

var person01 = new Person("Bob Cobb", 23, "New York");
```

## Javascript and the DOM: Part 1

A quick way to add or remove a class from an element

```javascript
document.querySelector(".main-title").classList.toggle("alert");
```

Two ways to use Javascript to add inline CSS to an element

```javascript
// update a single css property
document.querySelector(".main-title").style.fontSize = "30px";
// update multiple css properties
document.querySelector("#dom-section-title").style.cssText = "color: green; margin-left: 4rem;";
```

## Javascript and the DOM: Part 2

Event Listeners and passing arguments and the element (e) that help the event interaction. This is done by using an anonymous function in the `.addEventListener()` function call.

```javascript
var button = document.querySelector("#button");

function changeLinkText(event, element) {
  event.preventDefault();
  element.innerHTML = "This has been clicked...";
}

button.addEventListener('click', function(e) {
  changeLinkText(e, this);
}, false);
```

## Loops

Iterating over data is an extremely common practice in programming. Javascript's main looping tool is the `for` loop. Also, the keywords `break` and `continue` are very useful for controlling the looping logic.

Example of a `break` statement that will exit the loop.

```javascript
var myNumber = 4;
var iterator = 1;

function getRandom() {
  var randomNumber = Math.floor(Math.random() * 10);
  return randomNumber;
}

while (iterator < 25) {
  var n = getRandom();
  if(n == myNumber) {
    break;
  }
  iterator++;
}

console.log(iterator == 25 ? "After " + iterator + " tries, I can't match my number." : "It took " + iterator + " times to randomly match my number.");
```

Example of a `continue` statement that will return the loop to the beginning of the next iteration.

```javascript
var evenNumbers = [];

for(var i = 1; i <= 10; i++) {
  if(i % 2 == 1) {
    continue;
  }
  evenNumbers.push(i);
}

evenNumbers; // [2, 4, 6, 8, 10]
```

## Validating and Minifying Javascript

There are several tools that help validate and minify javascript. Validation is done with a tool like **JSHint** or **ESLint**. Minifying is done using a tool that removes all line breaks and extra white space in a javascript file.