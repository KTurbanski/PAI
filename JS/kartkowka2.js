var Imie = document.getElementById('imie');
var Nazwisko = document.getElementById('nazwisko');
var Login = document.getElementById('login');
var Mail1 = document.getElementById('mail1');
var Mail2 = document.getElementById('mail2');
var Pass1 = document.getElementById('pass1');
var Pass2 = document.getElementById('pass2');
var DataUrodzenia = document.getElementById('data');
var Regulamin = document.getElementById('regulamin');
var Przycisk = document.getElementById('wyslij');
var Komunikat = document.getElementById('div');
var select = document.getElementById('wybor');

var RegExImie = /^[a-z]{2,15}$/i;
var RegExNazwisko = /^[a-z]{2,20}(-[a-z]{2,20})?$/i;
var RegExLogin = /^[\w]{2,20}$/i;

function sprawdzImie(){
    var sprawdz = RegExImie.test(Imie.value);
    if(sprawdz){
        Komunikat.textContent = ' ';
    } else {
        Komunikat.textContent = 'Błędne imie!';
    }
}

function sprawdzNazwisko(){
    var sprawdz = RegExNazwisko.test(Nazwisko.value);
    console.log(sprawdz);
    if(sprawdz){
        Komunikat.textContent = ' ';
    } else {
        Komunikat.textContent = 'Błędne nazwisko!';
    }
}

function sprawdzRegulamin() {
    if (Regulamin.checked){
        Przycisk.disabled = false;
        console.log(Regulamin.checked);
    } else {
        Przycisk.disabled = true
    }
}

Imie.addEventListener('blur', sprawdzImie);
Nazwisko.addEventListener('blur', sprawdzNazwisko);
Regulamin.addEventListener('change', sprawdzRegulamin);
Przycisk.addEventListener('click', button)

function button(){
    div.textContent = cs[select.value];
}


function Gry(tytul, wydawca, rodzaj){
    this.tytul = tytul;
    this.wydawca = wydawca;
    this.rodzaj = rodzaj;
    this.cos = 'cosik2';
}

var cs = new Gry('CounterStrikeGO', 'Valve', 'multiplayer');
var dupka = new Gry('TheDupa','Ja', 'symulator');

Gry.prototype.cos = 'cosik';
console.log(cs);


















