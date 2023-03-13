// Podanie dwoch liczb slownie i obliczenie ich sumy

let liczby = new Map()

liczby.set("jeden", 1)
liczby.set("dwa", 2)
liczby.set("trzy", 3)
liczby.set("cztery", 4)
liczby.set("piec", 5)
liczby.set("szesc", 6)
liczby.set("siedem", 7)
liczby.set("osiem", 8)
liczby.set("dziewiec", 9)

let l1 = prompt("Podaj slownie liczbe")
let l2 = prompt("Podaj slownie liczbe")

console.log(liczby.get(l1))
console.log(liczby.get(l2))
let suma = liczby.get(l1) + liczby.get(l2)
console.log(`Suma ${liczby.get(l1)} oraz ${liczby.get(l2)} wynosi ${suma}`)
