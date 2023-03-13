// Wszystkie zagadnienia zadane na sprwadzian 14.03.23

// Zmienne
let zmienna;
var zmienna2;
const STALA = "stala musi miec przypisana stala wartosc";

// Petle
// Sa dokladnie takie same jak w C++
// For
// While
// Do while

// Tablice
let tablica = [];
tablica.unshift("UNSHIFTUJE"); //Dodaje ci na poczatek tablicy
tablica.push("Pushuje"); //Dodaje ci na koniec tablicy
tablica.shift(); //Usuwa pierwszy element z tabeli
tablica.pop(); //Usuwa ostatni element z tablicy

// Funkcje
function funkcja() {
	// wrzucasz tutaj normalny kod
}

// Mapy
let sklep = new Map();

sklep.set("sok", 2.22);
sklep.set("woda", 3.22);
console.log(sklep.has("woda"));

// Obiekty
lodz = {
	nazwa: "Kuter",
	iloscpas: 2,
	wypornosc: 99,
	plyn() {
		console.log("Plyne");
	},
};
