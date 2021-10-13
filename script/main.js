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
                play.classList.remove('fa-play');
                play.classList.add('fa-pause');
            } else {
                clearInterval(interval);
                player.pause();
                play.classList.remove('fa-pause');
                play.classList.add('fa-play');
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

// COUNTDOWN
let gigDate = new Date('March 13, 2022 21:00:00');
if (document.querySelector('.days')) {
    setInterval(() => {
        let currentDate = new Date();
        let diff = gigDate.getTime() - currentDate.getTime();
        let daysDiff = (diff / (1000 * 60 * 60 * 24)).toString().split('.');
        let hoursDiff = (parseFloat(`0.${daysDiff[1]}`) * 24).toString().split('.');
        let minutesDiff = (parseFloat(`0.${hoursDiff[1]}`) * 60).toString().split('.');
        let secondsDiff = (parseFloat(`0.${minutesDiff[1]}`) * 60).toString().split('.');
        document.querySelector('.days').children[0].textContent = daysDiff[0];
        document.querySelector('.hours').children[0].textContent = hoursDiff[0];
        document.querySelector('.minutes').children[0].textContent = minutesDiff[0];
        document.querySelector('.seconds').children[0].textContent = secondsDiff[0];
    }, 1000);
}


//Read more START
//let readBtn = document.querySelector('#test');
//todelete
let dotList = document.getElementsByClassName('main__news__readmore');
//todelete
const readMore = (targetInd) => {
        var dots = document.getElementsByClassName('main__news__dots');
        var moreText = document.getElementsByClassName("main__news__more");
        var btnText = document.getElementsByClassName("main__news__readmore");

        if (dots[targetInd].id === "dotsinactive") {
            dots[targetInd].textContent = "...";
            btnText[targetInd].innerHTML = "Read more &#62; &#62;";
            moreText[targetInd].classList.remove('showIt');
            dots[targetInd].id = "dotsactive";
        } else {
            dots[targetInd].textContent = "";
            btnText[targetInd].innerHTML = "Read less &#60; &#60;";
            moreText[targetInd].classList.add('showIt');
            dots[targetInd].id = "dotsinactive";
        }
    }
    /*if (readBtn) {
        readBtn.addEventListener('click', readMore);
    }*/

for (let i = 0; i < dotList.length; i++) {
    dotList[i].addEventListener('click', () => {
        readMore(i);
    });
}
//Read more END

//Scroll to top function START
let scrollBtn = document.querySelector('#scrollToTop');
if (scrollBtn) {
    scrollBtn.addEventListener('click', scrollToTop);
}

function scrollToTop() {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
}
//Scroll to top function END

// Zoom
let imagesContainer = document.querySelector('.main__images');
let zoomedImg = document.querySelector('#zoomedImg');
let zoomContainer = document.querySelector('.main__zoom');
if (imagesContainer) {
    imagesContainer.addEventListener('click', (e) => {
        let target = e.target;
        if (target.nodeName === "FIGURE") {
            let picture = target.children[0].src.split('/');
            let newPic = (picture[picture.length - 1].slice(0, picture[picture.length - 1].length - 4)).concat('-original.webp');
            if (document.querySelector('#play')) {
                zoomedImg.src = `./ressources/images/${newPic}`;
            } else {
                zoomedImg.src = `../ressources/images/${newPic}`;
            }
            //zoomContainer.style.display = "grid";
            zoomContainer.classList.add('zoomed');
            zoomContainer.addEventListener('click', () => {
                zoomedImg.src = "//:0";
                //zoomContainer.style.display = "none";
                zoomContainer.classList.remove('zoomed');
            });
        }
    });
}