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
*/
