//Values and Variables
const country = "The United States of America";
const continent = "North America";
let population = 333;
    //15;

console.log(country + "\n" + continent + "\n" + population);


//Data Types
const isIsland = false;
let language;
console.log(typeof isIsland +", " + typeof population, ", " + typeof country + ", " + language);


//let, const, and var
language = "english";
    //"Spanish";
//going up and changing variables to const


//Basic Operators
let halfPop = population / 2;
console.log(halfPop);

population++;
console.log(population);

let moreThanFinland = population > 6;
console.log(moreThanFinland);

let lessThanAverage = population < 33;
console.log(lessThanAverage);

const description = country + " is in " + continent + ", and its " + population + " million people speak " + language;
console.log(description);


//Strings and Template Literals
const description2 = `${country} is in ${continent} and its ${population} million people speak ${language}`;
console.log(description2);


//Taking Decisions: if / else Statements
if (population > 33) {
    console.log(`${country}'s population is above average`);
}
else {
    console.log(`${country}'s population is ${33 - population} million below average`);
}


//Type Conversion and Coercion
console.log('9' - '5'); // -> 4
console.log('19' - '13' + '17'); // -> '617'
console.log('19' - '13' + 17); // -> 23
console.log('123' < 57); // -> false
console.log(5 + 6 + '4' + 9 - 4 - 2); // -> 1143


/*
//Equality Operators: == vs. ===
const numNeighbors = Number(prompt("How many neighboring countries does your country have?"));
if (numNeighbors === 1) {
    console.log("Only 1 border!");
}
else if (numNeighbors > 1) {
    console.log("More than 1 border");
}
else {
    console.log("No borders");
}
*/
numNeighbors = 2;
    //0;


//Logical Operators
if ((language == "english") && (population < 50) && (numNeighbors !== 0)) {
    console.log(`You should live in ${country}`);
}
else {
    console.log(`${country} does not meet your criteria`);
}


//The switch Statement
switch(language) {
    case "chinese":
    case "mandarin":
        console.log("MOST number of native speakers!");
        break;
    case "spanish":
        console.log("2nd place in number of native speakers");
        break;
    case "english":
        console.log("3rd most spoken language");
        break;
    case "hindi":
        console.log("4th most spoken language")
        break;
    case "arabic":
        console.log("5th most spoken language");
        break;
    default:
        console.log("Great language too!")
}


//The Conditional (Ternary) Operator
console.log(population > 33 ? `${country}'s population is above average` : `${country}'s population is below average`);