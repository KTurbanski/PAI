var auto = document.getElementById('auta');
var ulubioneAuto = document.getElementById('ulubioneAuto');

function cos(){
    ulubioneAuto.textContent = auto.value;
}

auta.addEventListener('change', cos);

