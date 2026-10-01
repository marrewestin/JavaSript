/* Lösning till Uppgift 9. Av Maria Westin, 2026 */
"use strict";

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

// Loop som går igenom arrayen
/* people.forEach(person => {
    console.log(person);
}); */

// Funktion som skriver ut från arrayen
function printPeople(myArray) {
    myArray.forEach(person => {
        console.log(person.name);
    });
}

printPeople(people);