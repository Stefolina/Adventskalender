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

function openDoorNew(doorNumber) {
    let id = 'door' + doorNumber;
    document.getElementById(id).classList.add('openDoor');

}



function openDoor() {
    document.getElementById('doors').classList.remove('door');
    document.getElementById('doors').classList.add('d-none');
}



function insertHTML1() {

    for (let i = 1; i <= 6; i++) {
        let htmlCode = `
    
    <div class="d-none" onclick=id="doorNumber(${i})">
      
    
       <div>${i}</div>
    `;

        document.getElementById('doors').innerHTML += htmlCode;
    }
}

function insertHTML2() {

    for (let i = 7; i <= 12; i++) {
        let htmlCode = `
    
    <div class="d-none" onclick="openDoor(${i})">
      
    
       <div>${i}</div>
    `;

        document.getElementById('doors').innerHTML += htmlCode;
    }
}

function insertHTML3() {

    for (let i = 13; i <= 18; i++) {
        let htmlCode = `
    
    <div class="d-none" onclick="openDoor(${i})">
      
    
       <div>${i}</div>
    `;

        document.getElementById('doors').innerHTML += htmlCode;
    }
}

function insertHTML4() {

    for (let i = 19; i <= 24; i++) {
        let htmlCode = `
    
    "openDoor(${i})"
      
       <div>${i}</div>
    `;

        document.getElementById('doors').innerHTML += htmlCode;
    }
}