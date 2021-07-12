class MediaPlayer {
    media: HTMLMediaElement
    plugins: Array<any>
    constructor(config) {
        this.media = config.el
        this.plugins = config.plugins || []

        this.initPlugins()
    }
    private initPlugins() {
        this.plugins.forEach(plugin => {
            plugin.run(this)
        })
    }
    play() {
        this.media.play()
    }
    pause() {
        this.media.pause()
    }
    mute() {
        this.media.muted = true
    }
    unmute() {
        this.media.muted = false
    }
    buttonFunPlay() {
        this.media.paused ? this.play() : this.pause()
    }
    buttonFunMuted() {
        this.media.muted = !this.media.muted
    }
    togglePlay() {
        if(this.media.paused) {
            this.play()
        } else {
            this.pause()
        }
    }
}


export default MediaPlayer;