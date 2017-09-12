var text = "ZSK - Zespół Szkół Komunikacji!";
console.log(text.length);  // Pokazuje ile ma znaków

var pierwszy = text.charAt(); // pierwsza litera zmiennej
console.log(pierwszy);

var ostatni = text.charAt(text.length - 1); // ostatnia litera, musi być -1 bo zaczyna się liczenie od 0
console.log(ostatni);

// document.write(text.charAt(11)); // wyświetlenie litery "ł"

document.write(text.charCodeAt(0)); // Kod ASCII dla Z
document.write(text.charCodeAt(14)); // Kod ASCII dla z

// Zamiana na duże litery
var duze = text.toUpperCase();
console.log(duze);
var male = text.toLowerCase();
console.log(male);

// CamelCase - zapis zmiennej
var DuZaMaLa = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
console.log(DuZaMaLa);



// Użytkownik wprowadza z klawiatury swoje imię, zamień pierwszy znak na dużą literę, a pozostałe na małe, wyświetl wszystko w nagłówku drugiego stopnia w kolorze niebieskim.

/*var imie = prompt("Podaj imie");
var imie2 = imie.charAt(0).toUpperCase() + imie.slice(1).toLowerCase();
console.log(imie2);
document.getElementById("a").textContent = imie2;*/

// text.substr(1,3)  - jedynka to gdzie zaczyna, 3 to ile znaków ma wypisać

// Wyświetl tekst bez pierwszego i ostatniego znaku
console.log(text.substr(1,text.length - 2))