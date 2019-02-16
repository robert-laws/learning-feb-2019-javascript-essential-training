# Learning - Lynda: Javascript Essential Training

[Website for Course](https://learning-feb-2019-javascript-essential-training.netlify.com)

[![Netlify Status](https://api.netlify.com/api/v1/badges/47da4dd3-3f91-41bb-929a-016fa73ca8f2/deploy-status)](https://app.netlify.com/sites/learning-feb-2019-javascript-essential-training/deploys)

## Table of Contents

* [Working with Data](#working-with-data)
* [Functions and Objects](#functions-and-objects)
* [Javascript and the DOM: Part 1](#javascript-and-the-dom-part-1)
* [Javascript and the DOM: Part 2](#javascript-and-the-dom-part-2)
* [Loops](loops)
* [Validating and Minifying Javascript](validating-and-minifying-javascript)

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

## Javascript and the DOM: Part 2

## Loops

## Validating and Minifying Javascript