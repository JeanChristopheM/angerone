const initialize = () => {
    /* Sponsors carousel */
    let sponsorCarousel = document.querySelector('.main__partners__logos__ulsponsors');
    let sponsorCarouselButtons = document.querySelector('.dotz.partners');
    if (sponsorCarouselButtons) {
        sponsorCarouselButtons.addEventListener('click', (e) => {
            let target = e.target;
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
            if (target.nodeName === "LI") {
                let index = target.id.slice(-1, target.id.length);
                ticketsCarousel.children[index - 1].scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
            }
        });
    }
    /* News caroussel */
    let newsCarousel = document.querySelector('.container');
    let newsCarouselButtons = document.querySelector('.dotz.news');
    if (newsCarouselButtons) {
        newsCarouselButtons.addEventListener('click', (e) => {
            let target = e.target;
            if (target.nodeName === "LI") {
                let index = target.id.slice(-1, target.id.length);
                newsCarousel.children[index - 1].scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
            }
        });
    }
}
const reset = () => {
    let sponsorCarousel = document.querySelector('.main__partners__logos__ulsponsors');
    //sponsorCarousel.children[0].scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
    let ticketsCarousel = document.querySelector('.ticket_flex');
    //ticketsCarousel.children[0].scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
    let newsCarousel = document.querySelector('.container');
    //...................exact!
}
export { initialize, reset };