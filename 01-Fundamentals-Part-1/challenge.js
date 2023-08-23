// Coding Challenge #1
const massMark = 78;
const massJohn = 92;
const heightMark = 1.69
const heightJohn = 1.95;

const BMIMark  = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
// const markHigherBMI = BMIMark > BMIJohn;
console.log(BMIMark, BMIJohn)

//CHALLENGE #2
if(BMIMark > BMIJohn){
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`)
} else{
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`)
}

