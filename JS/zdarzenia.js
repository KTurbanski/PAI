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

/*window.onload = function(){
    alert('4Te');
}*/

/*elImie.onblur = function(){
    if(elImie.value.length > 1 && elImie.value.length < 15){
        elKomunikat.textContent = '';
    }else{
        elKomunikat.textContent = 'Błędne dane';
    }
}*/

/*function sprawdz (){
      if(elImie.value.length > 1 && elImie.value.length < 15){
        elKomunikat.textContent = '';
    }else{
        elKomunikat.textContent = 'Błędne dane';
    }
}*/

function sprawdz (){
      if(this.value.length > 1 && this.value.length < 15){
        elKomunikat.textContent = '';
    }else{
        elKomunikat.textContent = 'Błędne dane';
        this.focus();
    }
}

function mail(){
    if(elMail1.value != elMail2.value){
        elKomunikat.textContent = 'Adresy poczty są różne!';
        elMail1.disabled = false;
        elMail1.focus();
        elMail1.value = '';
        this.value = '';
    }else{
        this.disabled = true;
        elKomunikat.textContent = '';
    }
}

function blokuj(){
    elMail2.disabled = false;
    elMail2.focus();
    this.disabled = true;
}

function haslo(){
    if(elPass1.value != elPass2.value){
        elKomunikat.textContent = 'Hasła są różne!';
        elPass1.disabled = false;
        elPass1.focus();
        elPass1.value = '';
        this.value = '';
    }else{
        this.disabled = true;
        elKomunikat.textContent = '';
    }
}

function blokuj2(){
    elPass2.disabled = false;
    elPass2.focus();
    this.disabled = true;
}


//To samo do hasła



elImie.addEventListener('blur', sprawdz);
elNazwisko.addEventListener('blur', sprawdz);
elLogin.addEventListener('blur', sprawdz);
elMail1.addEventListener('blur', blokuj);
elMail2.addEventListener('blur', mail);
elPass1.addEventListener('blur', blokuj2);
elPass2.addEventListener('blur', haslo);











