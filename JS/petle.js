//************************ FOR ************************

/*    for(var i=0;i<=10;i++;){
        document.write(i);

        if(i == 5)
            break;
    }*/


//losuj 100 liczba z przedzialu 50-200
/*
    for (var i = 1; i<=100; i++){
        document.write(Math.floor(Math.random() * 151 + 50); + "<br>")
    }*/

/*    for (var i = 1; i<=10; i++){
        if(i!=10){
            document.write(i + ", ")
        }else{
            document.write(i + ", ")
        }
    }*/

//************************ WHILE ************************

/*var i = 0;

while(i++ < 5){
    document.write(i + "<br>")
}*/


//Podaje z klawiatury dwie wartości, i bedzie wykonywalo sie tak dlugo az x = y

/*
var x = Number(prompt("Podaj x"));
var y = Number(prompt("Podaj y"));

if(x<y){
    while(x<y){x++;
    document.write(x + "<br>");}
}


document.write("x= " + x + "<br>");
document.write("y= " + y + "<br>");
*/

//************************ DO WHILE ************************

/*var wiek;

do{
    wiek = prompt("Podaj wiek");
    if(wiek == 19) {
        document.write("Możesz już wyjść z domu")
    }
}while(wiek != 19)*/


// Wykorzysta pętle for i do while, podaj 5 liczb podzielnych przez 2 z klawiatury, zapisz je do tablicy, wyświetl w konsoli tablice
/*
var liczby = [];
var x;

for (var i = 0; i<=4; i++){
   do{
    x = prompt("Podaj liczbę");
    x = parseInt(x);
   }while(x % 2 != 0)
       liczby[i] = x;
}
console.log(liczby);

    */
// podaje z klawiatury liczbe, zabezpiecz przed podaniem litery, znaku specjalnego


/*
document.write('<input type="text" id="liczba">');
document.write('<button id="przycisk"> Wyślij </button>');

var elPrzycisk = document.getElementById('przycisk');
var elLiczba = document.getElementById('liczba');


elPrzycisk.onclick = function(){
    if(!isNaN(elLiczba.value)){
        console.log(elLiczba.value)
    }
}
*/


//********************* FOREACH *********************

var tab = ['Anna', 'Jacek', 'Janusz', 'Adrian'];

/*for (var i = 0; i < tab.length; i++){
    document.write(tab[i] + ' ');
}*/

function p(a,b){
    document.write(a + b + '<br>');
}

// tab.forEach(p);

function pokaz(wartosc,index){
    document.write(index + 1 + ' - element tablicy wynosi: ') // index tablicy
    document.write(wartosc + '<br>') // wartość tablicy
}

tab.forEach(pokaz);











//**********************ZADANIE DOMOWE*****************************
/*
Użytkownik podaje z klawiatury login i hasło w formularzu, jeśli login to "Filip", a hasło "Okoń@1234" to na ekranie wyświetli w kolorze czerwonym poprawne hasło, jeśli hasło będzie błędne to w kolorze zielonym "Błędne hasło"
Użytkownik ma 3 próby.
*/
