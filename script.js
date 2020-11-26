function init() {
    changeLanguage();

    for (let i = 1; i <= 24; i++) {
        let id = 'door' + i;
        document.getElementById(id).innerHTML = `<h1>${i}</h1>`;
    }
}

function changeLanguage() {
    setTimeout(function () {
        document.getElementById('language').innerHTML = 'Junus Adventskalender';
    }, 0);

    setTimeout(function () {
        document.getElementById('language').innerHTML = 'Junus Advent Calendar';
    }, 3000);

    setTimeout(function () {
        document.getElementById('language').innerHTML = 'Junus calendario dell avvento';
    }, 6000);

    setTimeout(function () {
        document.getElementById('language').innerHTML = 'Junus calendrier de lAvent';
    }, 9000);

    setTimeout(function () {
        changeLanguage();
    }, 12000);

}

function openDoor(doorNumber) {
    let id = 'door' + doorNumber;
    document.getElementById(id).classList.add('openDoor');
}

