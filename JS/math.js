/*var pi = Math.PI; // Liczba pi, 15 miejsc po przecinku
console.log(pi);*/

/*
var x = prompt("Podaj wartość");
console.log(Math.sqrt(x));
*/


var a = 13.2;
var b = 28.5;
var c = 1;

// najmniejsza liczba
var minimalna = Math.min(a,b,c);
console.log(minimalna);

// największa liczba
var maksymalna = Math.max(a,b,c);
console.log(maksymalna);

//zaokrąglenie
var zaokraglenie = Math.round(a);
console.log(zaokraglenie);

// abs - wartość bezwzględna, round, floor

var x = -56;
var y = -13.1;
var z = 14.9;

document.write("<br>" + Math.abs(x) + "<br>");
document.write("<br>" + Math.abs(y) + "<br>");
document.write("<br>" + Math.abs(z) + "<br>");

document.write("<br>" + Math.round(x) + "<br>");
document.write("<br>" + Math.round(y) + "<br>");
document.write("<br>" + Math.round(z) + "<br>");

// Pomija po przecinku
document.write("<br>" + Math.floor(x) + "<br>");
document.write("<br>" + Math.floor(y) + "<br>");
document.write("<br>" + Math.floor(z) + "<br>");

// Potęgowanie
var p = Math.pow(2,10);
console.log(p);


// Losowanie
var  losuj = Math.random();
console.log(losuj);


var k = 3.867124132;
k = k.toFixed(2); // 3.87 // Zamienia na stringa
console.log(k);

var j = 3.867124132;
j = j.toPrecision(2); // 3.9 // Zamienia na stringa
console.log(j);


//Losuj z przedziału 0-10
var l = Math.floor(Math.random() * 11);
console.log(l);

//losuj z przedziału 90-100
var m = Math.floor(Math.random() * 11 + 90);
console.log(m);


var elPi = document.getElementById('pi');
var elNic = document.getElementById('nic');
var elPrzycisk = document.getElementById('przycisk');
var elWynik = document.getElementById('wynik');

elPrzycisk.onclick = function(){
    if(elPi.checked){
        elWynik.innerHTML = Math.PI;
    }else if (elNic.checked){
        elWynik.innerHTML = "Wybrałeś przycisk Nic!";
        } else {
            elWynik.innerHTML = "Wybierz coś!";}

};

