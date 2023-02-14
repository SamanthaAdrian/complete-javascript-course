/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);

//Variable name conventions
let jonas_matilda = "JM";
let $function = 27;

let person = "jones";
let PI = 3.1415

let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";
console.log(myFirstJob);

----------------------------------------------------

let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
//console.log(typeof 23);
//console.log(typeof "Jonas");

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1919;
console.log(typeof year);

console.log(typeof null);

----------------------------------------------------

//let allows for mutation or redefining
let age=30;
age = 31;

//const is immutable and must be defined
const birthYear = 1991;
//birthYear = 1990;
//const job;

//var old way of defining variables, similar to let
//don't use var
var job = "programmer";
job = "teacher";

//can just not declare variables
lastName = "Adrian";
console.log(lastName);

----------------------------------------------------

//Math operators
const now = 2037
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
//2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = "Jonas";
const lastName = "Schedtmann";
const fullName = firstName + " " + lastName;
console.log(fullName);

//Assignment operators
let x = 10 + 5; //15
x += 10; //x = x + 10 = 25
x *= 4; //x = x * 4 = 100
x++; //x = x + 1
x--; //x = x - 1
console.log(x);

//Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);

----------------------------------------------------

const now = 2037
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);
console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5; //x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2
console.log(ageJonas, ageSarah, averageAge);

----------------------------------------------------

/////////////////////////////////////////////////
//Coding Challenge #1
/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Mark weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.
TEST DATA 2: Mark weighs 95 kg and is 1.88 m tall. John weighs 85 kg and is 1.76 m tall.
/

let weightMark = 78;
let weightJohn = 92;

let heightMark = 1.69;
let heightJohn = 1.95;

let BMIMark = weightMark / heightMark ** 2;
let BMIJohn = weightJohn / heightJohn ** 2;

let markHigherBMI = BMIMark > BMIJohn;
console.log(BMIMark + "\n" + BMIJohn + "\n" + markHigherBMI);


weightMark = 95;
weightJohn = 85;

heightMark = 1.88;
heightJohn = 1.76;

BMIMark = weightMark / heightMark ** 2;
BMIJohn = weightJohn / heightJohn ** 2;

markHigherBMI = BMIMark > BMIJohn;
console.log(BMIMark + "\n" + BMIJohn + "\n" + markHigherBMI);

/////////////////////////////////////////////////


const firstName = "Sam";
const job = "web developer";
const birthYear = 2000;
const year = 2023;

const sam = "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
console.log(sam);

const samNew = `I"m ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(samNew);

console.log(`Just a regular string...`);

console.log("String with \n\
multiple \n\
lines");

console.log(`String
multiple
lines`);

----------------------------------------------------

const age = 15;

if(age >= 18) {
    console.log("Sarah can start driving licence 🚗");
}
else {
    console.log(`Still need to wait ${18 - age} years`);
}

const birthYear = 1991;
let century;

if(birthYear <= 2000) {
    century = 20;
}
else {
    century = 21;
}
console.log(century);

----------------------------------------------------

/////////////////////////////////////////////////
//Coding Challenge #2
/*
Use the BMI example from Challenge #1 and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values as the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement
/

let weightMark = 78;
let weightJohn = 92;

let heightMark = 1.69;
let heightJohn = 1.95;

let BMIMark = weightMark / heightMark ** 2;
let BMIJohn = weightJohn / heightJohn ** 2;

let markHigherBMI = BMIMark > BMIJohn;
//console.log(BMIMark + "\n" + BMIJohn + "\n" + markHigherBMI);
if (markHigherBMI) {
    console.log(`Mark's BMI (${BMIMark.toFixed(1)}) is higher than John's (${BMIJohn.toFixed(1)})!`);
}
else {
    console.log(`John's BMI (${BMIJohn.toFixed(1)}) is higher than Mark's (${BMIMark.toFixed(1)})!`);
}


weightMark = 95;
weightJohn = 85;

heightMark = 1.88;
heightJohn = 1.76;

BMIMark = weightMark / heightMark ** 2;
BMIJohn = weightJohn / heightJohn ** 2;

markHigherBMI = BMIMark > BMIJohn;
//console.log(BMIMark + "\n" + BMIJohn + "\n" + markHigherBMI);
if (markHigherBMI) {
    console.log(`Mark's BMI (${BMIMark.toFixed(1)}) is higher than John's (${BMIJohn.toFixed(1)})!`);
}
else {
    console.log(`John's BMI (${BMIJohn.toFixed(1)}) is higher than Mark's (${BMIMark.toFixed(1)})!`);
}

/////////////////////////////////////////////////

//type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Sam"));
console.log(typeof NaN);

console.log(String(23), 23);


//type coercion
console.log("I am " + 23 + " years old");
//same as
console.log("I am " + "23" + " years old");

console.log("23" - "10" - 3); //changes to number
console.log("23" * 2); //changes to number
console.log("23" / 2); //changes to number
console.log("23" + "10" + 3); //changes to string due to +

let n = 2 + 3 + 4 + "5"; //result is 95 due to the numbers being added and then the string of 5 being included

----------------------------------------------------

// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Sam'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 0;
if(money) {
    console.log("Don't spend it all");
}
else {
    console.log("You should get a job!");
}

let height;
if (height) {
    console.log('YAY! Height is defined');
}
else {
    console.log("Height is UNDEFINED");
}

----------------------------------------------------

const age = 18;
if (age === 18) console.log("You just became an adult!"); //true if items on both sides of = are the exact same (strict)

console.log('18' == 18); //is true. == does type coercion (loose)

// const favorite = prompt("What's your favorite number?");
// console.log(favorite);
// console.log(typeof favorite);

// if (favorite == 23) {
//     console.log('Cool! 23 is an amazing number!');
// }

const favorite = Number(prompt("What's your favorite number?"));
console.log(favorite);
console.log(typeof favorite);

if (favorite === 23) {
    console.log('Cool! 23 is an amazing number!');
}
else if (favorite === 7) {
    console.log("7 is also a cool number");
}
else if (favorite === 9) {
    console.log("9 is also a cool number");
}
else {
    console.log("Number is not 23, 7, or 9");
}

if (favorite !== 23) console.log("Why not 23?");

----------------------------------------------------

const hasDriversLicense = true; //A
const hasGoodVision = true; //B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// const shouldDrive = hasDriversLicense && hasGoodVision;

// if (shouldDrive) {
//     console.log("Sarah is able to drive!");
// }
// else {
//     console.log("Someone else should drive...");
// }

const isTired = true; //C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log("Sarah is able to drive!");
}
else {
    console.log("Someone else should drive...");
}

----------------------------------------------------

/////////////////////////////////////////////////
//Coding Challenge #2
/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well
3. BONUS 1: Include a requirement for a minimum score of 100.
4. BONUS 2: Minimum score also applies to a draw.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91, and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95, and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95, and 106
/

let averageDolphin = (96 + 108 + 89) / 3;
let averageKoala = (88 + 91 + 110) / 3;
console.log(averageDolphin, averageKoala);

if (averageDolphin > averageKoala && averageDolphin >= 100) {
   console.log("Dolphins win the trophey!");
}
else if (averageDolphin < averageKoala && averageKoala >= 100) {
   console.log("Koalas win the trophey!");
}
else if (averageDolphin === averageKoala && averageDolphin >= 100){
   console.log("It is a tie!")
}
else {
   console.log("Neither team was able to get an average of at least 100, no winners.")
}


averageDolphin = (97 + 112 + 101) / 3;
averageKoala = (109 + 95 + 106) / 3;
console.log(averageDolphin, averageKoala);

if (averageDolphin > averageKoala && averageDolphin >= 100) {
    console.log("Dolphins win the trophey!");
}
else if (averageDolphin < averageKoala && averageKoala >= 100) {
   console.log("Koalas win the trophey!");
}
else if (averageDolphin === averageKoala && averageDolphin >= 100){
   console.log("It is a tie!")
}
else {
   console.log("Neither team was able to get an average of at least 100, no winners.")
}


averageDolphin = (97 + 112 + 101) / 3;
averageKoala = (109 + 95 + 123) / 3;
console.log(averageDolphin, averageKoala);

if (averageDolphin > averageKoala && averageDolphin >= 100) {
    console.log("Dolphins win the trophey!");
}
else if (averageDolphin < averageKoala && averageKoala >= 100) {
   console.log("Koalas win the trophey!");
}
else if (averageDolphin === averageKoala && averageDolphin >= 100){
   console.log("It is a tie!")
}
else {
   console.log("Neither team was able to get an average of at least 100, no winners.")
}

/////////////////////////////////////////////////

const day = "Monday";
switch(day) {
    case "monday": //day === 'monday'
        console.log("Plan course structure");
        console.log("Go to coding meetup");
        break;
    case "tuesday":
        console.log("Prepare theory videos");
        break;
    case "wednesday":
    case "thursday":
        console.log("Write code examples");
        break;
    case "friday":
        console.log("Record videos");
        break;
    case "saturday":
    case "sunday":
        console.log("Enjoy the weekend!");
        break;
    default:
        console.log("Not a valid day!");
}

----------------------------------------------------

const age = 23;
age >= 18 ? console.log("I like to drink wine") :
console.log("I like to drink water");

const drink = age >= 18 ? "wine" : "water";
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = "wine";
}
else {
    drink2 = "water";
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);

----------------------------------------------------
*/
/////////////////////////////////////////////////
//Coding Challenge #2
/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. In his country, it's usual to tip 15% if the bill is between 50 and 300. If the value is different, the tip is 20%.

1. Your task is to calculate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

TEST DATA: Test for bill values 275, 40, 430
*/

let bill = 275;
let tip = (50 <= bill && bill <= 300) ? Number((bill * .15).toFixed(2)) : Number((bill * .2).toFixed(2));
console.log(`The bill is ${bill} making the tip be ${tip} and the total be ${bill + tip}`);

bill = 40;
tip = (50 <= bill && bill <= 300) ? Number((bill * .15).toFixed(2)) : Number((bill * .2).toFixed(2));
console.log(`The bill is ${bill} making the tip be ${tip} and the total be ${bill + tip}`);

bill = 430;
tip = (50 <= bill && bill <= 300) ? Number((bill * .15).toFixed(2)) : Number((bill * .2).toFixed(2));
console.log(`The bill is ${bill} making the tip be ${tip} and the total be ${bill + tip}`);