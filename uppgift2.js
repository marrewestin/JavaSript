/* Lösning till Uppgift 2. Av Maria Westin, 2026 */
"use strict";

// Variabler
const productPrice = 100;
const numberOfProducts = 3;

// Räknar ut totalpriset för alla produkter
const totalPrice = productPrice * numberOfProducts;

// Räknar ut totalpriset inkl. 25 % moms
const totalPriceVat = totalPrice * 1.25;

// Utskrift till skärm
console.log("Pris: " + productPrice + " kr");
console.log("Antal: " + numberOfProducts);
console.log("Totalt: " + totalPrice + " kr");
console.log("Totalt inklusive moms: " + totalPriceVat + " kr")