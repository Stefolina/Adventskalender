function init() {
    changeLanguage();
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

    setTimeout(function() {
        changeLanguage();
    }, 12000);

}