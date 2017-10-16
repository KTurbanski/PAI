var elImie = document.getElementById('imie');
var elNazwisko = document.getElementById('nazwisko');
var elLogin = document.getElementById('login');
var elMail1 = document.getElementById('mail1');
var elMail2 = document.getElementById('mail2');
var elPass1 = document.getElementById('pass1');
var elPass2 = document.getElementById('pass2');
var elData = document.getElementById('data');
var elRegulamin = document.getElementById('regulamin');
var elPopraw = document.getElementById('popraw');
var elPrzycisk = document.getElementById('przycisk');
var elKomunikat = document.getElementById('komunikat');

elKomunikat.style.color = 'red';

var regImie = /^[a-ząęćźżółńś]{2,15}$/i; // imie
var regNazwisko = /^[a-ząęćźżółńś]{2,20}(\-[a-ząęćźżółńś]{2,20})?$/i; // nazwisko może być dwuczłonowe
var regLogin = /^[a-z0-9]{1}[\w\.\-]{3,25}[a-z0-9]{1}$/i; // login // bazowane na wp.pl
//var regMail = /^[a-z0-9]{6,30}\@[a-z0-9]{2,12}\.[a-z]{2,3}$/i; // dopracować

var regMail = /^[a-z]{1}[\w|\.|\-]{0,30}@(\w{1,20}\.){1,3}[a-z]{1,3}$/i;
//bezpieczne hasło: małe i duże litery, cyfry, znak specjalny
var regPass = /^((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W\_]).{8,35})$/;







function sprawdzImie (){
    var sprawdz = regImie.test(elImie.value);
      if(sprawdz){
        elKomunikat.textContent = '';
    }else{
        elKomunikat.textContent = 'Błędne imię';
        elImie.focus();
    }
}

function sprawdzNazwisko (){
    var sprawdz = regNazwisko.test(elNazwisko.value);
      if(sprawdz){
        elKomunikat.textContent = '';
    }else{
        elKomunikat.textContent = 'Błędne nazwisko';
        elNazwisko.focus();
    }
}

function sprawdzLogin (){
    var sprawdz = regLogin.test(elLogin.value);
      if(sprawdz){
        elKomunikat.textContent = '';
    }else{
        elKomunikat.textContent = 'Błędne login';
        elLogin.focus();
    }
}


function mail (){
    if (elMail1.value != elMail2.value){
        elKomunikat.textContent = 'Adresy poczty są różne';
        elMail1.disabled = false;
        elMail2.disabled = true;
        elMail1.focus();
        elMail1.value = '';
        this.value = '';
    }else{
        this.disabled = true;
        elKomunikat.textContent = '';
    }
}


function haslo(){
    if (elPass1.value != elPass2.value){
        elKomunikat.textContent = 'Hasła są różne';
        elPass1.disabled = false;
        elPass2.disabled = true;
        elPass1.focus();
        elPass1.value = '';
        this.value = '';
    }else{
        this.disabled = true;
        elKomunikat.textContent = '';
    }
}

function sprawdzRegulamin(){
    if (elRegulamin.checked){
        elPrzycisk.disabled = false;
    }else{
        elPrzycisk.disabled = true;
    }
}

function blokuj (){
    sprawdz = regMail.test(elMail1.value);
    if(sprawdz){
    elMail2.disabled = false;
    elMail2.focus();
    this.disabled = true;
    elKomunikat.textContent = '';
    }else{
       elKomunikat.textContent = 'Mail nie spełnia wymagań';
       elMail1.focus();

    }

function blokujPass (){
    var sprawdz = regPass.test(elPass1.value);
    if(sprawdz){
        elPass2.disabled = false;
        elPass2.focus();
        this.disabled = true;
    }else{
        elKomunikat.textContent = 'Hasło nie spełnia wymagań';
       elPass1.focus();
    }


}

function odblokuj() {
    var zablokowane = document.querySelectorAll('input[disabled]');
    if (zablokowane.length > 0){
        for (var i=0; i < zablokowane.length; i++){
                zablokowane[i].disabled = false;
        }
       //console.log(zablokowane);
    }
}

function sprawdzPuste(){
    var puste = false;
    var input = document.querySelectorAll('input');
        for(var i=1; i<input.length; i++){
            if(input[i].value == ''){
                puste = true;
                break;
            }
        }
    if(puste){
        elKomunikat.textContent = 'Wypełnij wszystkie pola';
    }else{
        document.write('<div>')
        document.write('Imię:' + elImie.value + '<br>')
        document.write('Nazwisko:' + elNazwisko.value + '<br>')
        document.write('Login:' + elLogin.value + '<br>')
        document.write('Mail:' + elMail1.value + '<br>')
        document.write('Hasło:' + elPass1.value + '<br>')
        document.write('Data:' + elData.value + '<br>')
        document.write('</div>')
    }
}

// wywołania funkcji
elImie.addEventListener('blur', sprawdzImie);
elNazwisko.addEventListener('blur', sprawdzNazwisko);
elLogin.addEventListener('blur', sprawdzLogin);
elMail1.addEventListener('blur', blokuj);
elMail2.addEventListener('blur', mail);
elPass1.addEventListener('blur', blokujPass);
elPass2.addEventListener('blur', haslo);
elRegulamin.addEventListener('change', sprawdzRegulamin);
elPopraw.addEventListener('click', odblokuj);
elPrzycisk.addEventListener('click', sprawdzPuste);







