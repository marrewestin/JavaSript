/* Lösning till Uppgift 6. Av Maria Westin, 2026 */
"use strict";

// Funktion som räknar ut arean av en rektangel
function calculateArea (width, hight) {
    let area = width * hight;
    return area;
}

// Anropar funktionen och skriver ut arean
console.log("Arean är " + calculateArea(5, 2));
console.log("Arean är " + calculateArea(20, 10));
console.log("Arean är " + calculateArea(8, 8));