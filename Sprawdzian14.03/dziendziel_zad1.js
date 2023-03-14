let numbers = []

for (let i = 0; i < 7; i++) {
	numbers.push(Number(prompt("Podaj liczbe")))
}

console.log(numbers)

numbers[0] = 6

console.log(numbers)

let sum =
	numbers[0] +
	numbers[1] +
	numbers[2] +
	numbers[3] +
	numbers[4] +
	numbers[5] +
	numbers[6]

console.log(sum)
