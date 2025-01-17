'use strict';

/*
let hasDriversLicense = false;
const passTest = true;

if(passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive");

//const interface = "Audio";
//const private = 534;
//const if = 23;

----------------------------------------------------

function logger() {
    console.log("My name is Sam");
}

//calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges){
    //console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice)

----------------------------------------------------

const age1 = calcAge1(1991); //can be called before the funtion

//Function declaration
function calcAge1(birthYear) {
    //const age = 2037 - birthYear;
    return 2037 - birthYear;
}

//cannot be called before function

//Function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear
}
const age2 = calcAge2(1991);
console.log(age1, age2);

----------------------------------------------------

//Function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear
}

//Arrow function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    //return retirement;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, "John"));
console.log(yearsUntilRetirement(1980, "Bob"));

----------------------------------------------------

function cutFruitPieces(fruit) {
    return fruit * 4;
}

const fruitProcessor= function (apples, oranges){
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
    return juice;
}

console.log(fruitProcessor(2,3));

----------------------------------------------------

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    }
    else {
        console.log(`${firstName} has already retired!`);
        return -1;
    }
}

console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1950, "Mike"));

----------------------------------------------------

/////////////////////////////////////////////////
//Coding Challenge #1
/*
Back to the two gymnastics teams, the Dolphins and the Koalas. There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins.

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function "checkWinner" that takes the average score of each team as parameters ("avgDolphins" and "avgKoalas"), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the "checkWinner" function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23, and 71. Koalas score 65, 54, and 49
TEST DATA 2: Dolphins score 85, 54, and 41. Koalas score 23, 34, and 27
/

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} to ${avgKoalas})`);
    }
    else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} to ${avgDolphins})`);
    }
    else {
        console.log("No winners");
    }
}

const dolphins1 = calcAverage(44, 23, 71);
const koalas1 = calcAverage(65, 54, 49);
checkWinner(dolphins1, koalas1);

const dolphins2 = calcAverage(85, 54, 41);
const koalas2 = calcAverage(23, 34, 27);
checkWinner(dolphins2, koalas2);

/////////////////////////////////////////////////

const friend1 = "Micheal";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Micheal", "Steven", "Peter"];
console.log(friends);

const year = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);
console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);
//friends = ["Bob", "Alice"];

const firstName = "Jonas"
const jonas = [firstName, "Schnedtmann", 2037 - 1991, "teacher", friends];
console.log(jonas);
console.log(jonas.length);

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);

----------------------------------------------------

//Add elements
const friends = ["Micheal", "Steven", "Peter"];
friends.push('Jay'); //inserts at end
const newLength = console.log(friends);
console.log(newLength);

friends.unshift("John"); //inserts at beginning
console.log(friends);

//Remove elements
friends.pop(); //Last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); //First, still returns value
console.log(friends);

console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob")); //-1

friends.push(23);
console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));
console.log(friends.includes("23")); //false cause it is ===

if (friends.includes("Peter")) {
    console.log("You have a friend called Peter");
}

if (friends.includes("Steven")) {
    console.log("You have a friend called Steven");
}

----------------------------------------------------

/////////////////////////////////////////////////
//Coding Challenge #2
/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill amount is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function "calcTip" that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from the first calculator challenge). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! Create an array "bills" containing the test data below.
3. Create an array "tips" containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array "total" containing the total values (bill + tip);

TEST DATA: 125, 555, 44
/

function calcTip(bill) {
    return (50 <= bill && bill <= 300) ? Number((bill * .15).toFixed(2)) : Number((bill * .2).toFixed(2));
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0] , bills[1] + tips[1], bills[2] + tips[2]];

/////////////////////////////////////////////////

const jonas = {
    firstName: "Jonas",
    lastName: "Schmedtmann",
    age: 2037 - 1991,
    job: "teacher",
    friends: ["Michael", "Peter", "Steven"]
}

//----------------------------------------------------

console.log(jonas);
console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = "Name";
console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);

//console.log(jonas."last" + nameKey);

const interestedIn = prompt("What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends");
//console.log(interestedIn);

if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
}
else {
    console.log("Wrong request! What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends");
}

jonas.location = "Portugal";
jonas["twitter"] = "@jonasschmedtman";
console.log(jonas);


//Challenge
// "Jonas has 3 friends, and his best friend is called Michael"
console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);

----------------------------------------------------

const jonas = {
    firstName: "Jonas",
    lastName: "Schmedtmann",
    birthYear: 1991,
    job: "teacher",
    friends: ["Michael", "Peter", "Steven"],
    hasDriversLicense: true,

    //regular version
    // calcAge: function(birthYear) {
    //     return 2037 - birthYear;
    // }

    //version that uses "this"
    // calcAge: function() {
    //     return 2037 - this.birthYear;
    // }

    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return age;
    },

    getSummary: function () {
        return (`${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license`);
    }
};

//console.log(jonas.calcAge(1992));
//console.log(jonas["calcAge"](1991));
console.log(jonas.calcAge());
console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

//Challenge
//"Jonas is a 46-year old teacher, and he has a/no driver's license"
console.log(jonas.getSummary());

----------------------------------------------------
*/
/////////////////////////////////////////////////
//Coding Challenge #3
/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations. Remember: BMI = mass / height ** 2. (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a "calcBMI" method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"

TEST DATA: Mark weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.
*/

const mark = {
    fullName: "Mark Miller",
    weight: 78,
    height: 1.69,
    calcBMI: function() {
        this.bmi = this.weight / this.height ** 2;
        return this.bmi;
    }
}

const john = {
    fullName: "John Smith",
    weight: 92,
    height: 1.95,
    calcBMI: function() {
        this.bmi = this.weight / this.height ** 2;
        return this.bmi;
    }
}

mark.calcBMI();
john.calcBMI();
if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi.toFixed(1)}) is higher than ${john.fullName}'s (${john.bmi.toFixed(1)})!`);
}
else {
    console.log(`${john.fullName}'s BMI (${john.bmi.toFixed(1)}) is higher than ${mark.fullName}'s (${mark.bmi.toFixed(1)})!`);
}