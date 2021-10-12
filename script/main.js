// MOBILE MENUS HANDLING
let burgerMenu = document.querySelector('.header__mobile.menu');
let burgerButton = document.querySelector('.header__hamburger');
let burgerMenuActivated = document.querySelector('.header__mobile__heading__hamburger.menu');
let optionsMenu = document.querySelector('.header__mobile.social');
let optionsButton = document.querySelector('.header__options');
let optionsButtonActivated = document.querySelector('.header__mobile__heading__options.social');
burgerButton.addEventListener('click', () => {
    burgerMenu.classList.add('active');
});
burgerMenuActivated.addEventListener('click', () => {
    burgerMenu.classList.remove('active');
});

optionsButton.addEventListener('click', () => {
    optionsMenu.classList.add('active');
})
optionsButtonActivated.addEventListener('click', () => {
    optionsMenu.classList.remove('active');
})

// AUDIO MODULE -> READING MUSIC IN THE BANNER
import * as audioModule from './modules/audioPlayer.js';
window.onload = () => {
    if (document.querySelector('#play')) {
        let player = document.querySelector('#player');
        let play = document.querySelector('#play');
        let interval;

        audioModule.updateAudio();
        player.volume = .5;
        play.addEventListener('click', () => {
            if (player.paused) {
                interval = setInterval(audioModule.updateAudio, 1000);
                player.play();
                play.children[0].classList.remove('fa-play');
                play.children[0].classList.add('fa-pause');
            } else {
                clearInterval(interval);
                player.pause();
                play.children[0].classList.remove('fa-pause');
                play.children[0].classList.add('fa-play');
            }
        });
    }
}

// CAROUSELS
import * as carouselModule from './modules/carousel.js';
carouselModule.initialize();
window.onresize = () => {
    carouselModule.reset();
}

// DISAPEARING HEADER
let header = document.querySelector('.header');
let headerDesktop = document.querySelector('.header__desktop');
let prevScroll = 0;
window.addEventListener('scroll', () => {
    let bannerPos = document.querySelector('.main__banner').getBoundingClientRect();
    let currentScroll = window.scrollY;
    if (currentScroll > prevScroll) {
        //GOING DOWN
        header.style.transform = "translateY(-100%)";
    } else {
        //GOING UP
        header.style.transform = "translateY(0%)";
        if (bannerPos.y < 0) {
            headerDesktop.style.backgroundColor = "#282828";
        } else {
            headerDesktop.style.backgroundColor = "transparent";
        }
    }
    prevScroll = window.scrollY;
})