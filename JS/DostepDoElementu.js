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

var elPrzycisk = document.getElementById('przycisk');
var elTvTab = document.getElementsByName('cosik');

function cosik(elements,index){
    elTvTab[index].className = 'niebieski';
}


elPrzycisk.onclick = function(){
    elTvTab.forEach(cosik);
};
















