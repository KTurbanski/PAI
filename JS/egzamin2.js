//http://egzamin-e14.blogspot.com/2016/10/e14-01-1501.html

elPierwsza = document.getElementById('pierwsza');
elDruga = document.getElementById('druga');

elPotegowanie = document.getElementById('potegowanie');

elWynik = document.getElementById('wynik');

elPotegowanie.onclick = function (){
    if (elPierwsza.value == '' || elDruga.value == ''){
        elWynik.innerHTML = 'Wpisz podstawę i wykładnik potęgi';
    }else if(elDruga.value < 0){
        elWynik.innerHTML = 'Wykładnik potęgi musi być dodatni';
    }else{
        var wynik = Math.pow(parseFloat(elPierwsza.value), parseFloat(elDruga.value));
        elWynik.innerHTML = 'Wynik działania wynosi: ' + wynik;
    }
}

/*elPotegowanie.onclick = function (){
    alert('sada');
    }*/






