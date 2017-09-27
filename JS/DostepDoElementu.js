// Metoda getElementById()

var elPierwszy = document.getElementById('pierwszy');
elPierwszy.className = "niebieski";

// Metoda getElementsByTagName()

var elNaglowek = document.getElementsByTagName('h1');
//if (elNaglowek.length > 0) {
    console.log(elNaglowek.length);
//};

elNaglowek[0].className = 'czerwony';

// Metoda getElementsByClassName

var czerwony = document.getElementsByClassName('czerwony');
if (czerwony.length > 0){
    console.log(czerwony.length);
    console.log(czerwony);

    // Sposób szybszy
    var ostatni = czerwony[czerwony.length - 1];
    ostatni.className = 'niebieski';
}
    // Sposób wolniejszy
    var ostatnii = czerwony.item(czerwony.length-1);

// Metoda querySelector()

//zwraca pierwsze dopasowanie

var elTv = document.querySelector('li.grey');
elTv.className = 'niebieski';


// Metoda querySelectorAll()

var elTvAll = document.querySelectorAll('li.grey')

console.log(elTvAll.length);

elTvAll[2].className = 'niebieski';


// Metoda getElementsByName()

/*
var przycisk = document.getElementById('przycisk');


przycisk.onclick = function (){
    var elTvTab = document.getElementsByName('cosik');
        for(var i = 0; i<elTvTab.length; i++)
        elTvTab[i].className = 'niebieski';
    };

*/



// To samo z Foreach

/*var elPrzycisk = document.getElementById('przycisk');
var elTvTab = document.getElementsByName('cosik');

function cosik(elements,index){
    elTvTab[index].className = 'niebieski';
}


elPrzycisk.onclick = function(){
    elTvTab.forEach(cosik);
};*/

//**************  previousElementSibling, nextElementSibling  ****************
var poczatekElement = document.getElementById('s2');
var poprzedniElement = poczatekElement.previousElementSibling;
var nastepnyElement = poczatekElement.nextElementSibling;

poczatekElement.className = 'niebieski';
poprzedniElement.className = 'niebieski';
nastepnyElement.className = 'niebieski';

//**************  firstElementChild, lastElementChild  ****************

var lista = document.getElementsByTagName('ul')[1]; // żeby brało tylko auta
//console.log(lista);
var pierwszy = lista.firstElementChild;
var ostatni = lista.lastElementChild;

pierwszy.setAttribute('class', 'grey');
ostatni.setAttribute('class', 'grey');


//*********************************************************************************

//Zmień pierwszy element input na button i przypisz wartość wyślij

var input = document.getElementsByTagName('input')[0];
input.setAttribute('type', 'button');
input.setAttribute('value', 'Wyślij');

// tekst www łączy ze stroną zsk.poznan.pl
var a = document.getElementsByTagName('a')[0];
a.setAttribute('href', 'http://www.zsk.poznan.pl'); // zamienia na odnościk
