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

function sprawdzRegulamin(){
    if (elRegulamin.checked){
        elPrzycisk.disabled = false;
    }else{
        elPrzycisk.disabled = true;
    }
}

function odblokuj(){
    var zablokowane = document.getElementsByTagName('input');
        if(zablokowane.length > 0){
            for(var i=0; i < zablokowane.length; i++){
                if(zablokowane[i].disabled){
                    zablokowane[i].disabled = false;
                }
            }
            console.log(zablokowane);
        }
}
// wersja pedała    -      nie działa
/*function odblokuj2(){
    var zablokowane = document.querySelectorAll('input[disabled]');
            for(var i=0; i < zablokowane.length; i++){
                    zablokowane[i].disabled = false;
            }
}*/

function wyslij(){
    document.write('<div>')
    document.write('Imię:' + elImie.value + '<br>')
    document.write('Nazwisko:' + elNazwisko.value + '<br>')
    document.write('Login:' + elLogin.value + '<br>')
    document.write('Mail:' + elMail1.value + '<br>')
    document.write('Hasło:' + elPass1.value + '<br>')
    document.write('Data:' + elData.value + '<br>')
    document.write('</div>')
}

/*function wyslij(){  ***** NIE DZIAŁA *****
    var pustePole = document.getElementsByTagName('input');
            for(var i=0; i < pustePole.length; i++){
                console.log(i);
                if(pustePole[i] == ''){
                    alert('debil');
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
}*/

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
elImie.addEventListener('blur', sprawdz);
elNazwisko.addEventListener('blur', sprawdz);
elLogin.addEventListener('blur', sprawdz);
elMail1.addEventListener('blur', blokuj);
elMail2.addEventListener('blur', mail);
elPass1.addEventListener('blur', blokuj2);
elPass2.addEventListener('blur', haslo);
elRegulamin.addEventListener('change', sprawdzRegulamin);
elPopraw.addEventListener('click', odblokuj);
elPrzycisk.addEventListener('click', sprawdzPuste);







