const updateAudio = () => {
    let duration = (player.duration / 60).toString().split('.');
    let currentTime = player.currentTime > 60 ? (player.currentTime / 60).toString().split('.') : ['00', player.currentTime];
    let currentTimeSpan = document.querySelector('.currentTime');
    let durationSpan = document.querySelector('.duration');
    let progress = player.currentTime / player.duration * 100;
    let progressBar = document.querySelector('.progressBar');
    progressBar.style.width = `${progress}%`;
    if (!currentTime[1]) {
        currentTime[1] = '00';
    } else if (currentTime[1] < 10) {
        let zero = '0';
        currentTime[1] = zero.concat('', currentTime[1].toString().slice(0, 1));
    } else {
        currentTime[1] = currentTime[1].toString().slice(0, 2);
    }
    currentTimeSpan.textContent = `${currentTime[0]}:${currentTime[1]}`;
    durationSpan.textContent = `${duration[0]}:${duration[1].slice(0, 2)}`;
    if (progress === 100) {
        play.children[0].classList.remove('fa-pause');
        play.children[0].classList.add('fa-play');
        progress = 0;
        progressBar.style.width = `0%`;
        currentTimeSpan.textContent = `00:00`;
    }
}

export { updateAudio };