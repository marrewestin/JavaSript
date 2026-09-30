/* Lösning till Uppgift 7. Av Maria Westin, 2026 */
"use strict";

// Array med minst sex tal
const myNumbers = [4, 8, 12, 16, 20, 24];

// Funktion som räknar ut summan av alla tal i en array
function mySum(numbers) {
    let sum = 0;
    for (let i=0; i<numbers.length; i++) {
       sum = sum + numbers[i];
    }
    return sum;
}
// Anropar funktionen och skriver ut summan
console.log("Summan är " + mySum(myNumbers));