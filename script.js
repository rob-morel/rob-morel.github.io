function playVideo(event) {
    var video = event.target.closest('.project-container').querySelector('.video');
    var thumbnail = event.target.closest('.project-container').querySelector('.thumbnail');

    if (thumbnail && video) {
        thumbnail.style.display = 'none';
        video.style.display = 'block';
        video.play();
    }
}

function pauseVideo(event) {
    var video = event.target.closest('.project-container').querySelector('.video');
    var thumbnail = event.target.closest('.project-container').querySelector('.thumbnail');

    if (thumbnail && video) {
        thumbnail.style.display = 'block';
        video.style.display = 'none';
        video.pause();
    }
}