//http://egzamin-e14.blogspot.com/2016/10/e14-01-1501.html

elPierwsza = document.getElementById('pierwsza');
elDruga = document.getElementById('druga');

elDodawanie = document.getElementById('dodawanie');
elOdejmowanie = document.getElementById('odejmowanie');
elMnozenie = document.getElementById('mnozenie');
elDzielenie = document.getElementById('dzielenie');
elPotegowanie = document.getElementById('potegowanie');

elWynik = document.getElementById('wynik');

elDodawanie.onclick = function (){
    if (elPierwsza.value == '' || elDruga.value == ''){
        elWynik.innerHTML = 'Proszę uzupełnić obie liczby';
    }else{
        var wynik = parseFloat(elPierwsza.value) + parseFloat(elDruga.value);
        elWynik.innerHTML = 'Suma wynosi: ' + wynik;
    }

}

elOdejmowanie.onclick = function (){
    if (elPierwsza.value == '' || elDruga.value == ''){
        elWynik.innerHTML = 'Proszę uzupełnić obie liczby';
    }else{
        var wynik = parseFloat(elPierwsza.value) - parseFloat(elDruga.value);
        elWynik.innerHTML = 'Różnica wynosi: ' + wynik;
    }

}

elMnozenie.onclick = function (){
    if (elPierwsza.value == '' || elDruga.value == ''){
        elWynik.innerHTML = 'Proszę uzupełnić obie liczby';
    }else{
        var wynik = parseFloat(elPierwsza.value) * parseFloat(elDruga.value);
        elWynik.innerHTML = 'Iloczyn wynosi: ' + wynik;
    }

}

elDzielenie.onclick = function (){
    if (elPierwsza.value == '' || elDruga.value == ''){
        elWynik.innerHTML = 'Proszę uzupełnić obie liczby';
    }else if(elDruga.value == 0){
        elWynik.innerHTML = 'Nie wolno dzielić przez 0';
    }else{
        var wynik = parseFloat(elPierwsza.value) / parseFloat(elDruga.value);
        elWynik.innerHTML = 'Iloraz wynosi: ' + wynik;
    }
}

elPotegowanie.onclick = function (){
    if (elPierwsza.value == '' || elDruga.value == ''){
        elWynik.innerHTML = 'Wpisz podstawę i wykładnik potęgi';
    }else if(elDruga.value > 0){
        elWynik.innerHTML = 'Wykładnik potęgi musi być dodatni';
    }else{
        var wynik = Math.pow(parseFloat(elPierwsza.value), parseFloat(elDruga.value));
        elWynik.innerHTML = 'Wynik działania wynosi: ' + wynik;
    }
}






