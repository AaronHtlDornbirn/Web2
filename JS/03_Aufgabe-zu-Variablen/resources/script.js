// Erstelle eine Variable banana mit dem Wert "Banane"
let banana = "Banane";
// Erstelle eine Variable apple mit dem Wert "Apple"
let apple = "Apple";


// Erstelle eine Variable bananaPricePerKilo mit dem Wert 2.14
let bananaPricePerKilo = 2.14;
// Erstelle eine Variable applePricePerKilo mit dem Wert 3.43
let applePricePerKilo = 3.43;

// Ein Apfel hat durchschnittlich ein Gewicht von 0.34 Kilo
let bananaWeight = 0.34;
// Eine Banane hat durchschnittlich ein Gewicht von 0.22 Kilo
let appleWeight = 0.22;

let oneKilobanana = 1 / bananaWeight;
let oneKiloapple = 1 / appleWeight;

let bananaPrice = bananaPricePerKilo * bananaWeight;
let applePrice = applePricePerKilo * appleWeight;

// Gib folgendes aus: Anzahl Bananen/Äpfel pro Kilo, Preis pro Banane/Apfel
console.log("Anzahl Bananen pro Kilo: " + oneKilobanana + " und Preis pro Banane: " + bananaPrice);
console.log("Anzahl Äpfel pro Kilo: " + oneKiloapple + " und Preis pro Apfel: " + applePrice);

// Preis von 8 Äpfeln
console.log("Preis von 8 Äpfel: " + 8 * applePrice);

// Preis von 17 Bananen
console.log("Preis von 17 Bananen: " + 17 * bananaPrice);

// Preis von 1 Tonne Äpfel
console.log("Preis von 1 Tonne Äpfel: " + 1000 * applePrice);

// Preis von 1 Tonne Bananen
console.log("Preis von 1 Tonne Bananen: " + 1000 * bananaPrice);