'use strict';

///////////////////////////////////////
// Constructor Functions and the new Operator

const Person = function(firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never to this!
  // this.calcAge = function() {
  //   console.log(2037 - this.birthYear);
  // };
};

const andrii = new Person('Andrii', 1985);
console.log(andrii);

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);

console.log(andrii instanceof Person);

///////////////////////////////////////
// Prototypes
console.log(Person.prototype);

Person.prototype.calcAge =  function() {
  console.log(2037 - this.birthYear);
};

andrii.calcAge();
matilda.calcAge();

console.log(andrii.__proto__);
console.log(andrii.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(andrii)); //true
console.log(Person.prototype.isPrototypeOf(matilda)); //true
console.log(Person.prototype.isPrototypeOf(Person)); //false

// .prototypeOfLinkedObjects

Person.prototype.species = 'Homo Sapiens';
console.log(andrii.species, matilda.species);

console.log(andrii.hasOwnProperty('firstName'));
console.log(andrii.hasOwnProperty('species'));


///////////////////////////////////////
// Prototypal Inheritance on Built-In Objects
console.log(andrii.__proto__);
// Object.prototype (top of prototype chain)
console.log(andrii.__proto__.__proto__);
console.log(andrii.__proto__.__proto__.__proto__); // null

console.dir(Person.prototype.constructor);

const arr = [3, 6, 6, 5, 6, 9, 9]; // new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(h1);
console.dir(x => x + 1);

