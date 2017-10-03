//alert('NIE MA SZÓSTAKA - DZIEŃ UDANY');

//Wytażenia regularne

/*
var text = 'Zespół Szkół Komunikacji.pl';
var text2 = '52-252';
*/

//var regEx = /Szkół/; // true
//var regEx = /szkół/; // false
//var regEx = /Szkół/i; // nie zwraca uwagi na wielkość liter // true
//var regEx = /^Szkół/i; // /^ - rozpoczyna się od tego // true
//var regEx = /Szkół$/i; // /^ - kończy się na tym // false
//var regEx = /^Szkół$/i; // /^ - zaczyna i kończy na tym // false
//var regEx = /^[a-z]$/; // czy coś z przedziału się znajduje // małe
//var regEx = /^[A-Z]$/; // czy coś z przedziału się znajduje // duże
//var regEx = /^[A-z]$/; // czy coś z przedziału się znajduje // małe i duże // niefajne bo bierze też znaki złe i niedobre
//var regEx = /[ąęćźżółńś][a-z]$/; // polskie znaki
//var regEx = /[ąęćźżółńś]|[a-z]$/; // polskie lub nie polskie znaki (OR = |)
//var regEx = /^[ąęćźżółńś][a-z]$/; // polskie znaki // musi się zaczynać od znaku polskiego
//var regEx = /[a-z]\s/; // spacja na końcu // false
//var regEx = /[a-z]+@/; // słowa + @ // plus = jeden raz coś // false
//var regEx = /Zespół?/; // ? sprawdza czy jest poprzedni znak
//var regEx = /Zespó[ł]?/; // ? sprawdza czy jest poprzedni znak
//var regEx = /^Zespó[ł]?/; // ? sprawdza czy jest poprzedni znak
//var regEx = /[a]/; // true
//var regEx = /[a]{1}/; // true
//var regEx = /^[a]{1}/; // false //czy na początku jest litera a
//var regEx = /^[a]{2}$/; // false //czy w całości jest litera a
//var regEx = /^[a]{2,4}$/; // false //czy w całości jest litera a// przedział ilościowy 2, 3 lub 4
//var regEx = /^[a]{2,}$/; // false //czy w całości jest litera a// przedział ilościowy  do nieskończoności
//var regEx  = /\//; // sprawdza czy jest znak /, poprzedzony musi być \
//var regEx  = /./; // kropka zastępuje dokładnie jeden znak
//var regEx  = /\./; // sprawdza czy jest znak kropki
//var regEx  = /\.pl/; // sprawdza czy jest ".pl"
//var regEx  = /\.[a-z]{2}/; // sprawdza czy jest kropka i dwa znaki

//var regEx  = /\w/; // dowolny znak (duze, male, cyfry, znak podlogi) // bez polskich
//var regEx  = /\W/; // negacja tego co wyżej (duże W)
//var regEx  = /\d/; // sprawdza czy są cyfry
//var regEx  = /\D/; // negacja tego co wyżej (duże D)
//var regEx  = /\s/; // sprawdza czy są spacje
//var regEx  = /\S/; // negacja tego co wyżej (duże S)
//var regEx  = /(test){1}/; // sprawdza czy jest "test"
//var regEx  = /(test){2}/; // sprawdza czy jest "testtest" // muszą być obok siebie
//var regEx = /^[0-9]{2}-[0-9]{3}$/; //kod pocztowy
//var regEx = /^\d{2}-\d{3}$/; //kod pocztowy


//var sprawdź = regEx.test(text2);
//console.log(sprawdź);


/*użytownik podaje z klawiatury(formularz) kod pocztowy i nazwę miasta, sprawdź czy kod jest prawidłowy jeśli tak, to na ekranie w bloku wyświetl
Kod pocztowy:
Miasto:*/

/*var kodPocztowy = document.getElementById('a');
var miasto = document.getElementById('b');
var przycisk = document.getElementById('przycisk');
var div = document.getElementById('wynik');

var kodPocztowyWzor = /^\d{2}-\d{3}$/; //kod pocztowy
var miastoWzor = /[ąęćźżółńś]|[a-z]{3,15}$/; //miasto

function SprawdzKodPocztowy(){
    if(kodPocztowyWzor.test(kodPocztowy.value)){
            if(miastoWzor.test(miasto.value)){
                document.write('<div>')
                document.write('Kod pocztowy: ' + kodPocztowy.value + '<br>')
                document.write('Miasto: ' + miasto.value + '<br>')
                document.write('</div>')
            }else{
                div.style.color = 'red';
                div.textContent = 'Nie ma takiego miasta';
                miasto.textContent = '';
                miasto.focus();
            }
    }else{
        div.style.color = 'red';
        div.textContent = 'Zły kod pocztowy';
        kodPocztowy.focus();
    }
}

przycisk.addEventListener('click', SprawdzKodPocztowy);*/

var regEx2 = /\w{1,}\.mp3/g;
//var regEx2 = /\w+\.mp3/g;
var text1 = 'plik@mp3 arkusz.csv szkola.mp3 tekst.mp3';
//var sprawdz1 = regEx2.test(text1);
var sprawdz1 = text1.match(regEx2);
document.write(sprawdz1);





