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

/*
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
*/

/*
const age = 19;
const isOldEnough = age >= 18;

if (isOldEnough) {
    console.log("Sarah can start driving license 🚗");
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another
    ${yearsLeft} ears :)`);
}

const birthYear = 2012;
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);
*/

/*
// type conversion
const inputYear = "1991";
console.log(inputYear + 18);
console.log(Number(inputYear)+ 18);
console.log(Number("Andrii"));
console.log(String(23));

// type coercion
console.log("I am " + 23 + " years old")
console.log("I am " + "23" + " years old")
console.log("23" - "10" -3) //10
console.log("23" + "10" +3) //23103
console.log("23" * "2" ) //46
*/

/*
// 5 falsy values: 0, ''. undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(''));
console.log(Boolean("Andrii"));
console.log(Boolean({}));

const money = 0;
if(money){
    console.log("Don't spend it all");
}else{
    console.log("You should get a job!");
}

let height;
if(height){
    console.log("height is defined");
}else{
    console.log("height is Undefined");
}
*/

/*
const age = 18;
if(age === 18) console.log("You just become adult");
if(age == 18) console.log("You just become adult");

// "18" == 18 //true
// "18" === 18 //false

const favourite = Number(prompt("What's your favorite number?"));
console.log(favourite);

if (favourite === 23) {
    console.log("Cool! 23 is an amazing number!");
} else if (favourite === 7) {
    console.log("7 is also a cool number!");
} else {
    console.log("Number is not 7 or 23");
}

if(favourite !== 23) console.log("Why not 23?");
*/

/*
//Lesson 24
const hasDriveLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriveLicense && hasGoodVision);
console.log(hasDriveLicense || hasGoodVision);
console.log(!hasDriveLicense);

// if(hasDriveLicense && hasGoodVision){
//     console.log("Sarah is able to drive!");
// } else {
//     console.log("Someone else should drive...");
// }

const isTired = true; // C

console.log(hasDriveLicense && hasGoodVision && isTired);

if(hasDriveLicense && hasGoodVision && !isTired){
    console.log("Sarah is able to drive!");
} else {
    console.log("Someone else should drive...");
}
*/
/*
//Lesson 26
const day = "monday";

switch (day){
    case "monday":
        console.log("Plan course structure");
        console.log("Go to coding meetup");
        break;
    case "tuesday":
        console.log("Prepare theory videos");
        break;
    case "wednesday":
    case "thursday":
        console.log("Write code example");
        break;
    case "friday":
        console.log("Record videos");
        break;
    case "saturday":
    case "sunday":
        console.log("Enjoy the weekend");
        break;
    default:
        console.log("Not a valid day");
}
*/

/**/
//Lesson 26
