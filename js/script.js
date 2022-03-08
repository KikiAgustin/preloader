window.onload = function () {
    window.setTimeout(fadeOut, 1000);
}

function fadeOut() {
    document.querySelector('.preloader').style.opacity = '0';
    document.querySelector('preloader').style.display = 'none';
}