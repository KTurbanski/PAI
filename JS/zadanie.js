/*    function pole(){
            var r = document.getElementById('r').value;
            var pole = Math.PI * (r * r);
            document.getElementById('a').textContent = "Pole wynosi: " + pole;
        }
    function obwod(){
            var r = document.getElementById('r').value;
            var obwod = 2 * Math.PI * r;
            document.getElementById('a').textContent = "Obwód wynosi: " + obwod;
        }
    function objetosc(){
            var r = document.getElementById('r').value;
            var h = document.getElementById('h').value;
            var objetoscStozka = 1/3 * Math.PI * (r * r) * h;
            document.getElementById('a').textContent = "Objetosc stozka wynosi: " + objetoscStozka;
        }*/


//**********************ZADANIE DOMOWE*****************************
/*
Użytkownik podaje z klawiatury login i hasło w formularzu, jeśli login to "Filip", a hasło "Okoń@1234" to na ekranie wyświetli w kolorze czerwonym poprawne hasło, jeśli hasło będzie błędne to w kolorze zielonym "Błędne hasło"
*/

var login = document.getElementById('login');
var haslo = document.getElementById('haslo');
var przycisk = document.getElementById('przycisk');
var a = document.getElementById('a');
var liczba = 0;

przycisk.onclick = function (){
    if(login.value == 'Filip' && haslo.value == 'Okon@1234'){
        a.style.color = 'red';
        a.textContent = haslo.value;
    }else{
        if(liczba < 4){
            a.style.color = 'green';
            a.textContent = 'Złe dane logowania';
            liczba++;
        }else{alert('asdasd')};

    }};
