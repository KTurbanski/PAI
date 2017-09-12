// Tworzenie tablicy za pomocą literału
var kolory = ['biały', 'zielony', 'czerwony'];
var elKolor = document.getElementById('kolor');
elKolor.textContent = kolory[0];

// Twozrenie tablicy za pomocą konstruktora tablicy Array
var samochody = new Array('BMW', 'Audi', 'Ferrari');

console.log(samochody[1]);
console.log(samochody[samochody.length - 1]);
console.log("Ilość samochodów w tablicy: " + samochody.length);

// Użytkownik dodaje nowe auto a on zamienia się za pierwsze

/*var nowe = prompt("Podaj auto");
samochody[0] = nowe;
console.log(samochody[0]);*/

//Tablice wielowymiarowe
var tab = new Array(
    new Array( 'Jasiu', 'Kowal', 'Poznań' ),
    new Array( 'Maciek', 'Nowak', 'Gniezno' ),
    new Array( 'Bartuś', 'Bóbr', 'Warszawa' )
);

console.log(tab[1],[2]);

var imiona = ['Janusz', 'Adrian', 'Andrzej', 'Zenon'];
console.log(imiona);
var posortowaneImiona = imiona.sort();
console.log(posortowaneImiona);
var odrocImiona = posortowaneImiona.reverse();
console.log(odrocImiona);

odrocImiona.pop(); // usuwa pierwszy wyraz
odrocImiona.unshift('Paweł'); //dodanie elementu na początku tablicy
odrocImiona.push('Krystiana'); //dodanie elementu na końcu tablicy
console.log(odrocImiona);

// Sprawdzenie czy istnieje element w tabeli
console.log(odrocImiona.indexOf('Józek')); // zwraca -1
console.log(odrocImiona.indexOf('Paweł')); // zwraca 0


// Tablica liczbowa

var cyfry = [1, 2, 20, 190, -1, 1000000];
console.log(cyfry);

var posortowaneCyfry = cyfry.sort();
console.log(posortowaneCyfry);

var sortujCyfryPrawidlowo = cyfry.sort(function(a,b){return a-b}); // Prawidłowo sortuje liczby
console.log(sortujCyfryPrawidlowo);

// Zadanie domowe
// Utwórz formularz z loginem i hasłem, zapisz wynik w nagłówku h2, użytkownik podaje również kolor w jakim ma być wszystko wyświetlone





















