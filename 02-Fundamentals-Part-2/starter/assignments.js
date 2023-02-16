'use strict';

//Functions
function describeCountry(country, population, capitalCity){
    return (`${country} has ${population} million people and its capital city is ${capitalCity}`);
}

const usa = describeCountry("The United States of America", 333, "Washington D.C.");
const finland = describeCountry("Finland", 6, "Helsinki");
const canada = describeCountry("Canada", 37, "Ottawa");
console.log(usa + "\n" + finland + "\n" + canada);


//Function Declarations vs. Expressions
function percentageOfWorld1 (population) {
    return population / 7900 * 100;
}

const usaPopulation = percentageOfWorld1(333);
const finlandPopulation = percentageOfWorld1(6);
const canadaPopulation = percentageOfWorld1(37);
console.log(usaPopulation, finlandPopulation, canadaPopulation);

const percentageOfWorld2 = function (population) {
    return population / 7900 * 100;
}

console.log(percentageOfWorld2(333), percentageOfWorld2(6), percentageOfWorld2(37));


//Arrow functions
const percentageOfWorld3 = population => population / 7900 * 100;
console.log(percentageOfWorld3(333), percentageOfWorld3(6), percentageOfWorld3(37));


//Functions Calling Other Functions
function describePopluation(country, population) {
    const percent = percentageOfWorld1(population);
    return `${country} has ${population} million people, which is about ${percent.toFixed(2)}% of the world.`
}

console.log(describePopluation("The United States of America", 333) + "\n" + describePopluation("Finland", 6) + "\n" + describePopluation("Canada", 37));


//Introduction to Arrays
