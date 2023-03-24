let random = Math.random() * 1000;
let randomAsInteger = Math.round(random);
console.log(randomAsInteger);

if (randomAsInteger > 500) {
    console.log("Bigger than 500");
}

// Aufgabe
// wenn größer als 800
// wenn zwischen 500 und 800
// wenn zwischen 200 und 500
// wenn zwischen 0 und 200

if (randomAsInteger < 200) {
    console.log("wenn zwischen 0 und 200");
} else if (randomAsInteger < 500) {
    console.log("wenn zwischen 200 und 500");
} else if (randomAsInteger < 800) {
    console.log("wenn zwischen 500 und 800");
} else {
    console.log("wenn größer als 800");
}