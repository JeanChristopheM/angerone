const initialize = () => {
    let carousel = document.querySelector('.main__partners__logos__ulsponsors');
    let carouselButtons = document.querySelector('.dotz.partners');
    carouselButtons.addEventListener('click', (e) => {
        let target = e.target;
        if (target.nodeName === "LI") {
            let index = target.id.slice(-1, target.id.length);
            carousel.children[index - 1].scrollIntoView({ block: "nearest", inline: "start" });
        }
    });
}
const reset = () => {
    let carousel = document.querySelector('.main__partners__logos__ulsponsors');
    carousel.children[0].scrollIntoView({ block: "nearest", inline: "start" });
}
export { initialize, reset };