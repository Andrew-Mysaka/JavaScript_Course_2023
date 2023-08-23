'use strict'; // always use at the start of js to show errors

/*
// Lesson 32
let hasDriversLicense = false;
const passTest = true;

if(passTest) hasDriverLicense = true; // error in name
if(hasDriversLicense) console.log("I can drive");
*/

/*
// Lesson 33
function logger(){
    console.log("My name is Andrii");
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges){
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5,0);
console.log(appleJuice);
console.log(fruitProcessor(5,0));

const appleOrangeJuice = fruitProcessor(2,4);
console.log(appleOrangeJuice);
*/

// Lesson 34
// function declaration - виклик працює перед об'явленням функції
const age1 = calcAge1(1991);

//function declaration
function calcAge1(birthYear) {
    return 2037 - birthYear;
}

// function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1991);

console.log(age1, age2);

