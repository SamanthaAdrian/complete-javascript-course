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
    return (population / 7900 * 100).toFixed(2);
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
    return `${country} has ${population} million people, which is about ${percent}% of the world.`
}

console.log(describePopluation("The United States of America", 333) + "\n" + describePopluation("Finland", 6) + "\n" + describePopluation("Canada", 37));


//Introduction to Arrays
const populations = [333, 6, 37, 1441];
console.log(populations.length === 4);
const percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[3])];
console.log(percentages);


//Basic Array Operations
const neighbors = ["Canada", "New Mexico"];
neighbors.push("Utopia");
neighbors.pop();

if (!neighbors.includes("Germany")) {
    console.log("Probably not a central European country");
}

neighbors[neighbors.indexOf("New Mexico")] = "Mexico";
console.log(neighbors);


//Intro to Objects
const myCountry = {
    country: "The United States of America",
    capital: "Washington D.C.",
    language: "English",
    population: 333,
    neighbors: ["Canada", "New Mexico"]
}


//Dot vs. Bracket Notation
console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbors.length} neighboring countries and a capital called ${myCountry.capital}.`);

myCountry.population += 2;
myCountry["population"] -= 2;