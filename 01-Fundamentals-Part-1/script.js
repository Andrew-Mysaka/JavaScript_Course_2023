/*
let js = "amazing";

// if (js === "amazing") {
//     alert("JavaScript is FUN!");
// }

// console.log(40 + 8 + 23 - 10);

let firstName = "Andrii";

console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name convention
let jonas_matilda = "JM";
let $function = 27;
let person = "jonas";

const PI = 3.1415;

let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";

// bad practice
let job1 = "Programmer";
let job2 = "Teacher";

console.log(myFirstJob);
*/

/*
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof "javascriptIsFun");

javascriptIsFun = "YES!";
console.log(javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

// bug - show object
console.log(typeof null);
*/

/*
let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990; // we cannot resign
// const job; // error - not initializing

const now = 2037;
const ageAndrii = now - 1985;
const ageSarah = now - 2018;
console.log(ageAndrii, ageSarah);

console.log(ageAndrii * 2, ageAndrii / 10, 2**3);
// 2 ** 3 means 2 to the power 3 = 2 * 2 * 2

const firstName = "Andrii";
const lastName = "Mysaka";
console.log(firstName + " " + lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x-- // x = x - 1
x /= 10
console.log(x);

// Comparison operators
console.log(ageAndrii > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;
*/

/*
// Operator precedence
const now = 2037;
const ageAndrii = now - 1985;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018)

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageAndrii + ageSarah) / 2;
console.log(ageAndrii, ageSarah, averageAge);
*/

const firsName = "Andrii";
const job = "programmer";
const birthYear = 1985;
const year = 2023;

const andrii = "I'm " + firsName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(andrii);

const andriiNew = `I'm ${firsName}, a ${year - birthYear} years old ${job}!`
console.log(andriiNew);

console.log(`Just a regular string...`);

console.log(`String 
multiple
lines`);
