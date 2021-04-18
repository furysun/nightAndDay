import css from './css/style1.css';

let isBlack = false;

const themes = [
    {
        name: 'black',
        headerBackgroundImage: '../img/m-h-night.jpg',
        backgroundColor: 'rgb(33,35,46)',
        headerHeadingColor: 'rgb(255,255,255)',
        highlightedTextColor: 'rgb(252, 79, 60)',
        headerTextColor: 'rgb(255,255,255)',
        logoLogoColor: 'rgb(255,255,255)',
        buttonColor:'rgb(233, 173, 39)',
        sectionTextColor:'rgb(255,255,255)',
        sectionCardColor:'rgb(59,63,79)',

        // gradientColorOne:'darkseagreen',
        gradientColorOne:'linear-gradient(to right, rgb(220, 162, 39),  rgb(150, 55, 77))'
    },
    {
        name: 'white',
        headerBackgroundImage: '../img/m-h-day.jpg',
        backgroundColor: 'white',
        headerHeadingColor: 'rgb(32, 34, 45)',
        highlightedTextColor: 'rgb(35, 160, 197)',
        headerTextColor: 'rgb(32, 34, 45)',
        logoLogoColor: 'rgb(32, 34, 45)',
        buttonColor:'rgb(106, 152, 26)',
        sectionTextColor:'rgb(32, 34, 45)',
        sectionCardColor:'rgb(32, 34, 45)',
        gradientColorOne:'linear-gradient(to right, rgb(98, 143, 40),  rgb(50, 95, 211))'


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

    const headerStyle = document.getElementsByClassName('header')[0].style;
    headerStyle.background = "url(" + currentTheme.headerBackgroundImage + ")";
    headerStyle.border = currentTheme.backgroundColor;
    headerStyle.borderWidth = '0px 0px 90px 0px';
    headerStyle.borderStyle = 'solid';


    document.getElementsByTagName('body')[0].style.backgroundColor = currentTheme.backgroundColor;
    document.getElementsByClassName('header_heading')[0].style.color = currentTheme.headerHeadingColor;

    document.getElementsByClassName('highlighted-text')[0].style.backgroundColor = currentTheme.highlightedTextColor;
    document.getElementsByClassName('highlighted-text')[1].style.backgroundColor = currentTheme.highlightedTextColor;
    document.getElementsByClassName('highlighted-text')[2].style.backgroundColor = currentTheme.highlightedTextColor;

    document.getElementsByClassName('header_text')[0].style.color = currentTheme.headerTextColor;
    document.getElementsByClassName('section_banner_heading')[0].style.color = currentTheme.headerTextColor;
    document.getElementsByClassName('logo-logo')[0].style.color = currentTheme.logoLogoColor;

    document.getElementsByClassName('header_button')[0].style.backgroundColor = currentTheme.buttonColor;
    document.getElementsByClassName('header_button')[1].style.backgroundColor = currentTheme.buttonColor;
    document.getElementsByClassName('section_banner_button')[0].style.backgroundColor = currentTheme.buttonColor;

    document.getElementsByClassName('section_text')[0].style.color = currentTheme.sectionTextColor;

    document.getElementsByClassName('section_card')[0].style.backgroundColor = currentTheme.sectionCardColor;
    document.getElementsByClassName('section_card')[1].style.backgroundColor = currentTheme.sectionCardColor;
    document.getElementsByClassName('section_card')[2].style.backgroundColor = currentTheme.sectionCardColor;
    document.getElementsByClassName('footer')[0].style.backgroundColor = currentTheme.sectionCardColor;

    document.getElementsByClassName('section_banner')[0].style.backgroundImage = currentTheme.gradientColorOne;

    // ....

}

document.addEventListener("DOMContentLoaded", onDomLoaded);
