let myVideo = document.getElementById("raspberryPi");
function playPause() {
    if (myVideo.paused)
        myVideo.play();
    else
        myVideo.pause();
}