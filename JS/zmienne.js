console.log("Konsola");

var imie;

imie = "Krzysiek";
var nazwisko = 'Kowal';

document.write("Twoje imię to: " + imie + "<br>");
document.write("Twoje nazwisko to: " + nazwisko);

var wiek=19;
console.log("Wiek: " + wiek);

var x, y;
x=10;
y=5;

var wynik=x+y;
//alert(wynik); //wywala alert z wynikiem

x = 20;
y = 2;

var suma= x + y; //22
var roznica = x - y; //18
var dzielenie = x / y; //12
var mnozenie = x * y; //40
var modulo = x % y; //reszta z dzielenia x/y wynosi 0

//alert(modulo);

var a = 10, b = "3a";
//alert(a + b); //103a

console.log(typeof(a));
console.log(typeof(b));

console.log(a + (a % 3) - 10);

//SYSTEMY LICZBOWE

var c = 10; // Liczba w systemie dziesiętnym
var d = 010; // system oktalny
var e = 0x10; // heksadecymalny

console.log(c); //10
console.log(d); //8
console.log(e); //16

console.trace(); // wskazuje lokalizacje

var _zmienna = 10; // podłoga może być
//var 1zmienna = 10; // cyfra nie może być na początku zmiennej
console.log(_zmienna);
//console.log(_Zmienna); // JS rozpoznaje wielkości liter!
//console.log(1zmienna);


//var f = 2,5; // Błąd, muszą być kropki

var prawda = true;
console.log(typeof(prawda));

var tekst = "tekst";
console.log(typeof(tekst));

var inna = null;
console.log(typeof(inna));

var inna2;
console.log(typeof(inna2)); //undefinded

var tab = ["jeden", "dwa"];
console.log(tab);

/*var podajg = prompt("Podaj zmienną g");
console.log(podajg);
podajg = parseInt(podajg); // zmienia typ zmiennej
console.log(typeof(podajg));
console.log(podajg); // po podaniu wartości tekstowej będzie NaN*/


/*var podajLiczbe = prompt("Podaj", "np 3.5") // komunikat + komunikat wewnętrz lini
podajLiczbe = parseFloat(podajLiczbe);
console.log(podajLiczbe);
console.log(typeof(podajLiczbe));
// 3.5 = 3.5
// 3,5 = 3*/

var liczba = 5;
var tekst = "a";
var przerwa = " ";

var wynik = typeof(liczba + przerwa); // zmienna liczbowa zmienia się na string
console.log(wynik);

var imie2 = "Karol";
var nazwisko2 = "Wojtyła";
var dane = (imie2 + " " + nazwisko2);
var blok = document.getElementById("wynik");
blok.innerHTML = dane;
//blok.textContent = dane; // to samo co wyżej


var imiee = prompt("Podaj swoje imie: ");
var ble = ("Imię: " + imiee);
var div = document.getElementById("imie");
div.innerHTML = ble;

//poprawić



























