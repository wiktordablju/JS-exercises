// Stworz funkcje o nazwie jaka dales w onclicku w HTMLu, inaczej nic nie bedzie dzialac
function sprawdz() {
	// Trzeba zadeklarowac zmienna, inaczej nie bedziemy mieli do czego dodawac/musielibysmy robic pelno zmiennych
	let cena = 0;

	// w przypadku uzywania checkboxa odwolujemy sie do .checked jesli jest zaznaczony, to true mozna pominac ale uzywam zeby latwiej sie czytalo kod
	if (document.getElementById("pilling").checked) {
		cena += 45;
	}

	if (document.getElementById("maska").checked == true) {
		cena += 30;
	}

	if (document.getElementById("masaz").checked == true) {
		cena += 20;
	}

	if (document.getElementById("regulacja").checked == true) {
		cena += 5;
	}

	// funckja .innerHTML dodaje nam do htmla po prostu tresc, w tym przypadku sume
	document.getElementById("wynik").innerHTML = `Cena to: ${cena}`;
}
