const video = document.querySelector('video')
const playButton = document.getElementById('playButton')

function MediaPlayer(config) {
    this.media = config.el
}

MediaPlayer.prototype.play = function() {
    this.media.play()
}

MediaPlayer.prototype.pause = function() {
    this.media.pause()
}

MediaPlayer.prototype.buttonFun = function () {
    this.media.paused ? this.media.play() : this.media.pause() 
} 

const player = new MediaPlayer({el : video})


playButton.onclick = () => player.buttonFun()