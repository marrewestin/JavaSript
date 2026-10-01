/* Lösning till Uppgift 9. Av Maria Westin, 2026 */
"use strict";

// En array med objekt som representerar en person
const people = [
    {
        name: "Maria",
        age: 41,
        city: "Sundsvall"
    },
    {
        name: "Linda",
        age: 15,
        city: "Östersund"
    },
    {
        name: "Michael",
        age: 54,
        city: "Härnösand"
    }
];

// Funktion som skriver ut från arrayen
function printPeople(myArray) {
    // Loop som går igenom arrayen
    myArray.forEach(person => {
        // Villkor för att avgöra om personen är myndig
        if(person.age >= 18) {
            console.log(person.name + " bor i " + person.city + " och är myndig."); 
        } else {
            console.log(person.name + " bor i " + person.city + " och är inte myndig.");
        }
    });
}

// Anropar funktionen för att skriva ut från arrayen
printPeople(people);