//Obiektowosc - podstawy

samolot = {
	nazwa: "Boeing",
	iloscpas: 100,
	pulap: 999,

	lec() {
		console.log("Lece")
	},
}

lodz = {
	nazwa: "Kuter",
	iloscpas: 2,
	wypornosc: 99,
	plyn() {
		console.log("Plyne")
	},
}

console.log(samolot)
console.log(lodz)

lodz.plyn()
