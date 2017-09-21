//http://egzamin-e14.blogspot.com/2016/10/e14-01-1501.html

elPierwsza = document.getElementById('pierwsza');
elDruga = document.getElementById('druga');

elDodawanie = document.getElementById('dodawanie');
elOdejmowanie = document.getElementById('odejmowanie');
elMnozenie = document.getElementById('mnozenie');
elDzielenie = document.getElementById('dzielenie');

elWynik = document.getElementById('wynik');

elDodawanie.onclick = function(){
    if(elPierwsza.value == '' || elDruga.value == ''){
        elWynik.innerHTML= 'Podaj liczby';
    }else(
        var wynik = elPierwsza.value + elDruga.value;
        elWynik.innerHTML = wynik;
    )
}
