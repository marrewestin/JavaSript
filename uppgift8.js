/* Lösning till Uppgift 8. Av Maria Westin, 2026 */
"use strict";

// Objekt som representerar en bok
const book = {
    title: "The Hobbit",
    author: "J.R.R Tolkien",
    year: 1937
};

// Funktion som skriver ut bokinfo
function printBookInfo (bookObject) {
    console.log("Titel: " + bookObject.title);
    console.log("Författare: " + bookObject.author);
    console.log("Utgivningsår: " + bookObject.year);
}

// Anropar funktionen som skriver ut bokinfo
printBookInfo(book);