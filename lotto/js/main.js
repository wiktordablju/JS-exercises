const form = document.querySelector("form")
const resultUserNumbers = document.querySelector(".result__user-numbers")
const resultRandomNumbers = document.querySelector(".result__random-numbers")
const resultMatchedNumbers = document.querySelector(".result__matched-numbers")
const result = document.querySelector(".result")
Numbers = document.querySelector(".result__user-numbers")

let userNumbers = []
let randomNumbers = []
let matchedNumbers = []

// function e czyli jakakolwiek akcja na submitcie, prevent default zeby sie strona nie resetowala
form.addEventListener("submit", function (e) {
	e.preventDefault()
	result.classList.remove("result-hidden")

	const firstNumber = Number(document.querySelector(".first-number").value)
	const secondNumber = Number(document.querySelector(".second-number").value)
	const thirdNumber = Number(document.querySelector(".third-number").value)
	const fourthNumber = Number(document.querySelector(".fourth-number").value)
	const fifthNumber = Number(document.querySelector(".fifth-number").value)
	const sixthNumber = Number(document.querySelector(".sixth-number").value)

	userNumbers = [
		firstNumber,
		secondNumber,
		thirdNumber,
		fourthNumber,
		fifthNumber,
		sixthNumber,
	]
	resultUserNumbers.innerHTML = `Twoje liczby to: ${userNumbers}`

	while (randomNumbers.length < 6) {
		// Math random losuje od 0 do 1, wiec trzeba pomnozycp rzez 49, dodac 1 zeby niebylo zera i jeszcze zfloroowac zeby nie bylo po przecinku
		let add = Math.floor(Math.random() * 49) + 1
		// includes sprawdza czy cos juz w tabeli
		if (!randomNumbers.includes(add)) {
			randomNumbers.push(add)
		}
	}
	resultRandomNumbers.innerHTML = `Wylosowane liczby to: ${randomNumbers}`

	for (i = 0; i < randomNumbers.length; i++) {
		if (randomNumbers.includes(userNumbers[i])) {
			matchedNumbers.push(userNumbers[i])
		}
	}
	if (matchedNumbers.length === 0) {
		resultMatchedNumbers.innerHTML = `Nie trafiłeś żadnej liczby`
	} else if (matchedNumbers.length === 1) {
		resultMatchedNumbers.innerHTML = `Pasująca liczba to: ${matchedNumbers}`
	} else {
		resultMatchedNumbers.innerHTML = `Pasujące liczby to: ${matchedNumbers}`
	}
})
