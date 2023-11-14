const form = document.querySelector("form")
const resultUserNumbers = document.querySelector(".result__user-numbers")
const resultRandomNumbers = document.querySelector(".result__random-numbers")
const resultMatchedNumbers = document.querySelector(".result__matched-numbers")
const result = document.querySelector(".result")

let userNumbers = []
let randomNumbers = []
let matchedNumbers = []

// function e czyli jakakolwiek akcja na submitcie, prevent default zeby sie strona nie resetowala
form.addEventListener("submit", function (e) {
	e.preventDefault()

	const userNumbers = [
		Number(document.querySelector(".first-number").value),
		Number(document.querySelector(".second-number").value),
		Number(document.querySelector(".third-number").value),
		Number(document.querySelector(".fourth-number").value),
		Number(document.querySelector(".fifth-number").value),
		Number(document.querySelector(".sixth-number").value),
	]

	let checkedNumbers = []

	for (let i = 0; i < userNumbers.length; i++) {
		if (checkedNumbers.includes(userNumbers[i])) {
			alert(
				"Podałeś dwie te same liczby lub nie podałeś wszystkich, musisz podać sześć unikalnych liczb by przystąpić do losowania."
			)
			return
		}
		checkedNumbers.push(userNumbers[i])
	}

	result.classList.remove("result-hidden")

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
