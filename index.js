import css from './css/style1.css';

let isBlack = false;

const themes = [
    {
        name: 'black',
        headerBackgroundImage: '../img/m-h-night.jpg',
        // header font color
    },
    {
        name: 'white',
        headerBackgroundImage: '../img/m-h-day.jpg'
    }
];

function onDomLoaded() {
    document.getElementById('switchThemeButton').onclick = switchTheme;
}

function switchTheme() {
    isBlack = !isBlack;
    let currentTheme;

    if (isBlack) {
        currentTheme = themes[0];
    } else {
        currentTheme = themes[1];
    }

    document.getElementsByClassName('header')[0].style.background = "url("+currentTheme.headerBackgroundImage+")"

    // ....

}

document.addEventListener("DOMContentLoaded", onDomLoaded);
