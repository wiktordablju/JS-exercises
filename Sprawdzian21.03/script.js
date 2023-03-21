// Sprawdzian z 3 zadań

// Żelki
function order() {
	let shape = Number(document.getElementById("shapeNumber").value);
	let shapeOutput = document.getElementById("shape");

	// W htmlu masz do wyboru w selecie jaki chcesz ksztalt, switchem w zaleznosci od wyboru innerhtmlem wyrzucasz na ekran odpowiedni ksztalt
	shapeOutput.innerHTML = "Zamowiles zelka: ";
	switch (shape) {
		case 1:
			shapeOutput.innerHTML += "miś";
			break;
		case 2:
			shapeOutput.innerHTML += "zabka";
			break;
		case 3:
			shapeOutput.innerHTML += "serce";
			break;
		default:
			shapeOutput.innerHTML += "inny";
	}

	// W HTMLu masz do uzupelnienia ile w red ile w grenn ile w blue, tutaj do tablicy wkladasz kazda ta wartosc
	let color = [
		document.getElementById("red").value,
		document.getElementById("green").value,
		document.getElementById("blue").value,
	];
	// A tutaj zmieniasz styl buttona na wybrane rgb (color[0] - z tablicy wybiera 0 index czyli wartosc dla twojego R)
	let buttonColor = document.getElementById("color");
	buttonColor.style.backgroundColor =
		"rgb(" + color[0] + "," + color[1] + "," + color[2] + ")";
}


// IT
// Z tego zadania wazne sa jedynie nastepujace linijki
const button = document.querySelector('button[type="submit"]'); // querySelector dziala w taki sposob ze w twoim htmlu doslownie szuka tego co napisales i na tym operuje
button.onclick = () => { } //Taki zapis na onclick


// Kafelkowanie
// Najbardziej klasyczne zadanie, nic nowego
function count() {
	let data = document.getElementById("data").value;

	if (document.getElementById("20x20").checked == true) {
		document.getElementById(
			"output"
		).innerHTML = `Koszt malowania ${data}m2, wyniesie ${data * (35 * 2)}zł `;
	} else if (document.getElementById("25x12").checked == true) {
		document.getElementById(
			"output"
		).innerHTML = `Koszt malowania ${data}m2 wyniesie ${data * (40 * 2)} zł`;
	} else {
		document.getElementById("output").innerHTML = "WYBIERZ ROZMIAR PLYTKI!!!";
	}
}
