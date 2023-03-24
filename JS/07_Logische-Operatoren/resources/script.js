// Erstelle zwei Zufallszahl zwischen 0 und 100
let random1 = Math.random() * 100;
let random2 = Math.random() * 100;
let random1AsInteger = Math.round(random1);
let random2AsInteger = Math.round(random2);
console.log(random1AsInteger);
console.log(random2AsInteger);

// Wenn die erste Zahl kleiner ist als die zweite UND die erste Zahl kleiner ist als 50
// dann gib aus "Zahl 1 ist kleiner als Zahl 2 und Mini"
if (random1AsInteger < random2AsInteger && random1AsInteger < 50) {
    console.log("Zahl 1 ist kleiner als Zahl 2 und Mini");
}
// Wenn die erste Zahl kleiner ist als 30 oder die zweite Zahl kleiner ist als 30
// dann gib aus "Eine der beiden ist kleiner als 30"
else if (random1AsInteger < 30 || random2AsInteger < 30) {
    console.log("Eine der beiden ist kleiner als 30");
}
// Wenn die erste Zahl kleiner ist als 50 UND die zweite Zahl ungleich 50 ist
// dann gib aus "Erste Zahl klein, zweite kein 50iger"
else if (random1AsInteger < 50 && random2AsInteger != 50) {
    console.log("Erste Zahl klein, zweite kein 50iger");
} else {
    console.log("nichts:)");
}

// Aufgabe 2:
// Der Fahrer darf das Motorrad fahren, wenn er 24 Jahre oder älter ist oder den Motorradführerschein besitzt aber nicht mehr in der Probezeit ist.
let alter = Math.random() * 100;
let alterAsInteger = Math.round(alter);
console.log(alterAsInteger);
let führerschein = true;
let probezeit = true;

if (alterAsInteger > 24 || (führerschein == true && probezeit == false)) {
    console.log("Darf Motorrad fahren!");
} else {
    console.log("Darf nicht Motorrad fahren!");
}

// Aufgabe 3:
// Das Kind darf den Kinofilm sehen, wenn es älter als 14 ist oder einen Elternteil mit dabei hat. 

let kindalter = Math.random() * 100;
let kindalterAsInteger = Math.round(kindalter);
console.log(kindalterAsInteger);
let elternteil = false;

if (kindalterAsInteger > 14 || elternteil == true) {
    console.log("Darf ins Kino!");
} else {
    console.log("Darf nicht ins Kino!");
}

// Aufgabe 4:
// Wenn ich den Kurs “Softwarearchitekturen” besuchen möchte, muss ich den Coding Campus besucht haben oder 
// bereits 2 Jahre Berufserfahrung vorweisen.
let berufserfahrung = Math.random() * 10;
let berufserfahrungAsInteger = Math.round(berufserfahrung);
console.log(berufserfahrungAsInteger);
let codingcampus = false;

if (berufserfahrung > 2 || codingcampus == true) {
    console.log("Darf den Kurs “Softwarearchitekturen” besuchen!");
} else {
    console.log("Darf nicht den Kurs “Softwarearchitekturen” besuchen!");
}

// Aufgabe 5:
// Der Bewerber hat eine Chance auf eine Anstellung wenn er bereits über 5 Jahre Erfahrung vorweist oder
// einen Master Abschluss besitzt und auf jeden Fall eine einwandfreies Leumundszeugnis besitzt.
let erfahrung = Math.random() * 10;
let erfahrungAsInteger = Math.round(erfahrung);
console.log(erfahrungAsInteger);
let masterabschluss = false;
let leumundszeugnis = true;

if (leumundszeugnis == true) {
    if (erfahrungAsInteger >= 5 || masterabschluss == true) {
        console.log("Der Bewerber hat eine Chance auf eine Anstellung!");
    } else {
        console.log("Der Bewerber hat keine Chance auf eine Anstellung!");
    }
} else {
    console.log("Kein einwandfreies Leumundszeugnis!")
}