//===================================== Start video controller task =============================================
var myVideo = document.getElementById('my-video')
var play = document.getElementById('play')
var pause = document.getElementById('pause')
var stop = document.getElementById('stop')
var reset = document.getElementById('reset')
var backFiveBtn = document.getElementById('back-five')
var forwardFiveBtn = document.getElementById('forward-five')
var next = document.getElementById('next')
var volumeSlide = document.getElementById('volume')
var videoDuration = document.getElementById('video-duration')
var videoLength = document.getElementById('video-length')
var speed = document.getElementById('speed')
// var currentTime = 0
function vidSeek() {
    var seekTo = myVideo.duration * (videoLength.value / 100)
    myVideo.currentTime = seekTo
    console.log(videoDuration.value)
}


myVideo.ontimeupdate = function () {
    videoLength.value = myVideo.currentTime
    // console.log(timeConvert(200))
}


function timeConvert(n) {

    var minutes = (n / 60);
    var rminutes = Math.floor(minutes);
    var seconds = (minutes - rminutes) * 60;
    var rseconds = Math.round(seconds);
    return `${rminutes}:${rseconds}`;
}
currentTime = setInterval(function () { console.log(timeConvert(myVideo.currentTime)) }, 1000)
videoDuration.innerText = `/${timeConvert(myVideo.duration)}`




function playVid() {
    myVideo.play()
}
function pauseVid() {
    myVideo.pause();
}
function stopVid() {
    myVideo.pause();
    myVideo.currentTime = 0
}
function resetVid() {
    myVideo.currentTime = 0
    videoLength.value = 0
    myVideo.play()
}
function backFive() {
    myVideo.currentTime -= 5
    // videoLength.value -= 0.25

}
function ForwardFive() {
    myVideo.currentTime += 5
    // videoLength.value += 0.25
}
function nextVid() {
    myVideo.currentTime = myVideo.duration
    videoLength.value = 100
}

function changeVolume() {
    if (volumeSlide.value == 0) {
        myVideo.volume = 0
    } else {
        myVideo.volume = 1
    }
}

function muteVid() {
    if (myVideo.volume == 1) {
        myVideo.volume = 0
    } else {
        myVideo.volume = 1
    }
}

function changePlayBackSpeed() {
    if (speed.value == 0.5)
        myVideo.playbackRate = 0.5;
    else if (speed.value == 1)
        myVideo.playbackRate = 1;
    else if (speed.value == 1.5)
        myVideo.playbackRate = 1.5;
}

//===================================== End video controller task =============================================
