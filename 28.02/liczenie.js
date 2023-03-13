// Liczenie ile razy w zdaniu wystepuja dane litery

let word = prompt("Podaj zdanie")
let data = new Set()

for (i = 0; i < word.length; i++) {
	data.add(word[i])
}

console.log(data)

for (let x of data) {
	let count = 0
	for (let y of word) {
		if (x === y) {
			count = count + 1
		}
	}
	console.log(`Litera ${x} wystepuje ${count} razy`)
}
