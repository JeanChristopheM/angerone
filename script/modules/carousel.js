const initialize = () => {
    /* Sponsors carousel */
    let sponsorCarousel = document.querySelector('.main__partners__logos__ulsponsors');
    let sponsorCarouselButtons = document.querySelector('.dotz.partners');
    if (sponsorCarouselButtons) {
        sponsorCarouselButtons.addEventListener('click', (e) => {
            let target = e.target;
            for (let item of sponsorCarouselButtons.children) {
                item.classList.remove('active');
            }
            target.classList.add('active');
            if (target.nodeName === "LI") {
                let index = target.id.slice(-1, target.id.length);
                sponsorCarousel.children[index - 1].scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
            }
        });
    }
    /* Tickets tickets */
    let ticketsCarousel = document.querySelector('.ticket_flex');
    let ticketsCarouselButtons = document.querySelector('.dotz.tickets');
    if (ticketsCarouselButtons) {
        ticketsCarouselButtons.addEventListener('click', (e) => {
            let target = e.target;
            for (let item of ticketsCarouselButtons.children) {
                item.classList.remove('active');
            }
            target.classList.add('active');
            if (target.nodeName === "LI") {
                let index = target.id.slice(-1, target.id.length);
                ticketsCarousel.children[index - 1].scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
            }
        });
    }
    /* Tour carousel */
    let tourCarousel = document.querySelector('.main__tour__news');
    let tourCarouselButtons = document.querySelector('.main__tour__calendar__list');
    if (tourCarouselButtons) {
        tourCarouselButtons.addEventListener('click', (e) => {
            let target = e.target;
            for (let item of tourCarouselButtons.children) {
                item.classList.remove('active');
            }
            target.classList.add('active');
            if (target.nodeName === "LI") {
                let index = target.id.slice(-1, target.id.length);
                tourCarousel.children[index - 1].scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
            }
        });
    }
    /* News caroussel */
    let newsCarousel = document.querySelector('.container');
    let newsCarouselButtons = document.querySelector('.dotz.news');
    if (newsCarouselButtons) {
        newsCarouselButtons.addEventListener('click', (e) => {
            let target = e.target;
            for (let item of newsCarouselButtons.children) {
                item.classList.remove('active');
            }
            target.classList.add('active');
            if (target.nodeName === "LI") {
                let index = target.id.slice(-1, target.id.length);
                newsCarousel.children[index - 1].scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
            }
        });
    }
}
const reset = () => {
    let sponsorCarousel = document.querySelector('.main__partners__logos__ulsponsors');
    if (sponsorCarousel) {
        let sponsorCarouselButtons = document.querySelector('.dotz.partners');
        sponsorCarousel.children[0].scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
        for (let item of sponsorCarouselButtons.children) {
            item.classList.remove('active');
        }
        target.classList.add('active');
    }
    let ticketsCarousel = document.querySelector('.ticket_flex');
    if (ticketsCarousel) {
        let ticketsCarouselButtons = document.querySelector('.dotz.tickets');
        ticketsCarousel.children[0].scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
        for (let item of ticketsCarouselButtons.children) {
            item.classList.remove('active');
        }
        target.classList.add('active');
    }
    let tourCarousel = document.querySelector('.main__tour__news');
    if (tourCarousel) {
        let tourCarouselButtons = document.querySelector('.main__tour__calendar__list');
        tourCarousel.children[0].scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
        for (let item of tourCarouselButtons.children) {
            item.classList.remove('active');
        }
        tourCarouselButtons.children[0].classList.add('active');
    }

    let newsCarousel = document.querySelector('.container');
    //...................exact!
}
export { initialize, reset };