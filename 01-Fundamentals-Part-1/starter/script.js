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
*/


/////////////////////////////////////////////////
//Coding Challenge #1
/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Mark weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.
TEST DATA 2: Mark weighs 95 kg and is 1.88 m tall. John weighs 85 kg and is 1.76 m tall.
*/

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