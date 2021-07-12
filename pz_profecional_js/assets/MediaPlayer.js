class MediaPlayer {
    constructor(config) {
        this.media = config.el
        this.plugins = config.plugins || []

        this._initPlugins()
    }
    _initPlugins() {
        const player = {
            play: () => this.play(),
            pause: () => this.pause(),
            media: this.media,
            get muted() {
                return this.media.muted
            },
            set muted(value) {
                this.media.muted = value
            }
        }

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
        this.media.unmute = false
    }
    buttonFunPlay() {
        this.media.paused ? this.play() : this.pause()
    }
    buttonFunMuted() {
        this.media.muted = !this.media.muted
    }
}


export default MediaPlayer;