function sprawdz() {
	let cenapilling = 0;
	let cenamaska = 0;
	let cenamasaz = 0;
	let cenaregulacja = 0;

	if (document.getElementById("pilling").checked == true) {
		cenapilling = 45;
	}

	if (document.getElementById("maska").checked == true) {
		cenamaska = 30;
	}

	if (document.getElementById("masaz").checked == true) {
		cenamasaz = 20;
	}

	if (document.getElementById("regulacja").checked == true) {
		cenaregulacja = 5;
	}

	cena = cenapilling + cenamaska + cenamasaz + cenaregulacja;
	document.getElementById("wynik").innerHTML = `Cena to: ${cena}`;
}
