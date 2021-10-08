let burgerMenu = document.querySelector('.header__mobile__menu');
let burgerButton = document.querySelector('.header__hamburger');
let burgerMenuActivated = document.querySelector('.header__mobile__menu__heading__hamburger');
let optionsMenu = document.querySelector('.header__mobile__social');
let optionsButton = document.querySelector('.header__options');
let optionsButtonActivated = document.querySelector('.header__mobile__social__heading__options');

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

import * as audioModule from './modules/audioPlayer.js';
let player = document.querySelector('#player');
let play = document.querySelector('#play');
let interval;
window.onload = () => {
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