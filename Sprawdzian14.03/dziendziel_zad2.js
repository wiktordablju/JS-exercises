let numbers = []
let sum = 0

for (let i = 0; i < 100; i++) {
	number = Number(prompt("Podaj liczbe"))

	if (number == 0) {
		break
	} else {
		numbers.push(Number(number))
		sum += Number(number)
	}
}

console.log("Liczby w tablicy to:")
for (let i = 0; i <= numbers.length; i++) {
	console.log(numbers[i])
}

let avg = sum / numbers.length
console.log(`Suma liczb to: ${sum}`)
console.log(`Srednia liczb to: ${avg}`)
