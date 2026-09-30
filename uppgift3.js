/* Lösning till Uppgift 3. Av Maria Westin, 2026 */
"use strict";

// Variabel med valfri ålder
let age = 10;

// If-sats som kontrollerar åldern
if (age < 18) {
    console.log("Barn");
} else if (age >= 18 && age < 65) {
    console.log("Vuxen");
} else {
    console.log("Pensionär");
}