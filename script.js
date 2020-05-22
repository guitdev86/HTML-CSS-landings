let button = document.getElementById('play-pause');
let fullscreenBtn = document.getElementById('full-screen');
let video = document.querySelector('.video-mp4');
let videoFiller = document.querySelector('.video-line-filler');
let videoTintButton = document.getElementById('video-tint-play');
let videoTint = document.querySelector('.video-tint');

const togglePlayPause = () => {
    if (video.paused) {
        video.play();
        button.className = 'pause';
    } else {
        video.pause();
        button.className = 'play';
    }
}

const currentTime = () => {
    let currentTime = video.currentTime / video.duration;
    videoFiller.style.width = currentTime * 100 + "%";
    if (currentTime === 1) {
        videoReset();
    }
}

const getPlaceInVideo = (event) => {
    let offset = document.querySelector('.video-window').getBoundingClientRect().left;
    let width = document.querySelector('.video-window').getBoundingClientRect().width;
    let x = event.clientX - offset;
    video.currentTime = video.duration * x / width;
}

const videoReset = () => {
    button.className = 'play';
    videoTint.style.visibility = 'visible';
    document.querySelector('.video-panel').style.visibility = 'hidden';
}

button.onclick = () => {
    togglePlayPause()
}

fullscreenBtn.onclick = () => {
    video.webkitEnterFullScreen();
}

videoTintButton.onclick = () => {
    video.play();
    button.className = 'pause';
    videoTint.style.visibility = 'hidden';
    document.querySelector('.video-panel').style.visibility = 'visible';
}

video.addEventListener('timeupdate', currentTime)