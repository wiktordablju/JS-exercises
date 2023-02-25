let baton = 3.2
let cukierki = 36
let napoj = 2.8
alert(
	`Ceny produktów:\nBaton: ${baton}zł \nCukierki: ${cukierki}zł/kg\nNapoj: ${napoj}zł`
)

płatność = Number(prompt("Czym płacisz? 1=10zł, 2=50zł"))

alert("Podaj zamówienie, 1=baton, 2=cukierki, 3=napoj, 0=koniec")
var cena = 0

for (var i = 1; i < 100; i++) {
	produkt = Number(prompt("Wybierz produkt"))
	if (produkt == 1) {
		var ilosc = Number(prompt("Ilość produktu"))
		cena = cena + baton * ilosc
	}
	if (produkt == 2) {
		var ilosc = Number(prompt("Ilość kilogramów"))
		cena = cena + cukierki * ilosc
	}
	if (produkt == 3) {
		var ilosc = Number(prompt("Ilość produktu"))
		cena = cena + napoj * ilosc
	}

	if (produkt == 0) {
		break
	}
}

if (płatność == 1 || cena > 10) {
	alert(`Cena wynosi: ${cena}\nBrakuje ci: ${cena - 10}`)
} else if (płatność == 2 || cena < 50) {
	alert(`Cena wynosi: ${cena}\nDo wydania: ${50 - cena}`)
}
