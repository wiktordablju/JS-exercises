// Mapa

let sklep = new Map()

sklep.set("sok", 2.22)
sklep.set("woda", 3.22)
sklep.set("chleb", 4.22)

console.log(sklep.get("chleb"))
console.log(sklep.has("maslo"))
for (let x of sklep.keys()) {
	console.log(x, sklep.get(x))
}
