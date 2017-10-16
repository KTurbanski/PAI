var elLogin = document.getElementById('login');
var elHaslo = document.getElementById('haslo');
var elPrzycisk = document.getElementById('przycisk');

var licznik = 0

elPrzycisk.onclick = function() {
    if(licznik < 3){ // sprawdza czy licznik jest mniejszy niz 3 (czyli ma sie jeszcze próby)
        if(elLogin.value == 'filip' && elHaslo.value == 'Okon@1234'){
            document.getElementById('wynik').style.color = 'red';
            document.getElementById('wynik').textContent = elHaslo.value;
            licznik = 0;
            // Po wpisaniu prawidlowego hasla i zalogowaniu sie licznik sie zeruje
        }

        else if(elHaslo.value != 'Okon@1234'){
            document.getElementById('wynik').style.color = 'green';
            document.getElementById('wynik').textContent = 'Bledne haslo: ' + elHaslo.value;
            licznik++;
            // Po wpisaniu blednego hasla licznik zwieksza sie o 1
        }

        }else{
            alert('Za duzo prób Walczak!');
        }
}


    function zegar(){

    now = new Date();

    var hours = now.getHours();
    var min = now.getMinutes();
    var sec = now.getSeconds();

    if (hours < 10) hours = "0" + hours;
    if (min < 10) min = "0" + min;
    if (sec < 10) sec = "0" + sec;

    document.getElementById('wynik').innerHTML = hours + ":" + min + ":" + sec;
    setTimeout("zegar()", 1000);
}





