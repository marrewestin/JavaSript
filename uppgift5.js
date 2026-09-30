/* Lösning till Uppgift 5. Av Maria Westin, 2026 */
"use strict";

// Array med maträtter
let food = ["Spagetti och köttfärssås", "Köttbullar med potatismos", "Pizza", "Korv och makaroner", "Hamburgare"];

// 1. Skriver ut hela arrayen
console.log(food);

// 2. Skriver ut första elementet i arrayen
console.log(food[0]);

// 3. Skriver ut sista elementet i arrayen
console.log(food[4]);

// 4. Lägger till ny maträtt sist i arrayen
food.push("Nudelwok");

// 5. Tar bort den första maträtten i arrayen
food.shift();

// 6. Skriver ut hela arrayen efter ändringar
console.log(food);