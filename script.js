function init() {
    changeLanguage();

    for (let i = 1; i <= 24; i++) {
        let id = 'door' + i;
        document.getElementById(id).innerHTML =  `<h1>${i}</h1>`;;
    }
}

function changeLanguage() {
    setTimeout(function () {
        document.getElementById('language').innerHTML = 'Adventskalender nur für dich';
    }, 0);

    setTimeout(function () {
        document.getElementById('language').innerHTML = 'Los, freu dich!';
    }, 3000);

    setTimeout(function () {
        document.getElementById('language').innerHTML = 'Hab ich nur für dich gemacht!';
    }, 6000);

    setTimeout(function () {
        document.getElementById('language').innerHTML = 'Viel Spaß damit!';
    }, 9000);

    setTimeout(changeLanguage, 12000);
}

function openDoor(doorNumber) {
    let currentDay = new Date().getDate();

    if (currentDay >= doorNumber) {
        let id = 'door' + doorNumber;
        document.getElementById(id).classList.add('openDoor');
    } else {
        alert('Geduld ist eine Tugend');
    }
}



