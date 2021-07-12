import MediaPlayer from './assets/MediaPlayer';
import AutoPlay from './assets/plugins/AutoPlay'

const video = document.querySelector('video')
const playButton = document.getElementById('playButton')
const muteButton = document.getElementById('muteButton')

const player = new MediaPlayer({el : video, plugins:[new AutoPlay()]} )
playButton.onclick = () => player.buttonFunPlay()
muteButton.onclick = () => player.buttonFunMuted()
