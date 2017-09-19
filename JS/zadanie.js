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


var login = document.getElementById('login');
var haslo = document.getElementById('haslo');
var przycisk = document.getElementById('przycisk');
var a = document.getElementById('a');

przycisk.onclick = function (){
    if(login.value == 'Filip' && haslo.value == 'haslo'){
        a.style.color = 'red';
        a.textContent = 'Logowanie poprawne';
    }else{
        a.style.color = 'green';
        a.textContent = 'Złe dane logowania';
    }};
