let hamburger = document.querySelector('.header__hamburger');
let menu = document.querySelector('.header__mobile__menu');
let menuBurger = document.querySelector('.header__mobile__menu__heading__hamburger');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});


menuBurger.addEventListener('click', () => {
    menu.classList.remove('active');
});


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