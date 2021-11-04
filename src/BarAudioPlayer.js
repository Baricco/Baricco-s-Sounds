import './styles/BarAudioPlayer.css';
import * as index from './index';

export default class BarAudioPlayer {

  constructor(card) {
    this.card = card;
    this.currentTime = 0.00;
    this.repeat = false;
    this.random = false;
    this.isRandom = false;
    this.queue = index.beats;
    this.alreadyPlayedBeats = 0;
  }

  changeBeat(card) {
    this.card = card;
  }

  render() {
    console.log(this);
    console.log(this.card);
    return (
      <div>
        <div className = "songAttributes">
          <img src = {this.card.image} className = "songThumbnail"/>
          <h4 className = "songTitle">{this.card.name}</h4>
          <h2 className = "songGenre">{this.card.genre}</h2>
        </div>
        <div  className = "AudioPlayerButtons">
          <div id="audio-player-container">
          <img src = "img/shuffle-icon.png" className = "audioPlayerShuffle" onClick={() => {this.random = !this.random;}}/>
          <img src = "img/pause-button.png" id = "audioPlayerBarPlayPauseButton" onClick={() => this.card.startSong()}/>
          <img src = "img/repeat-icon.png" className = "audioPlayerRepeat" onClick={() => {this.repeat = !this.repeat;}}/>
          <div className="audio-progress" id="audio-progress">
          <div id="draggable-point" className="ui-widget-content">
          <div id="audio-progress-handle"></div>
        </div>
          <div id="audio-progress-bar" className="bar">
        </div>
      </div>
    </div>
        </div>
      </div>
    );
  }

  randomizeQueue() {
    //randomize the queue of beats
  }

  updateAudioBar() {
    if (index.beatOnPlay.beat.currentTime >= index.beatOnPlay.beat.duration) {      //if the song finishes, reset the bar
        this.currentTime = 0.00;
        document.getElementById(index.beatOnPlay.id + "play-pauseButton").src = "img/play-button.png";
        document.getElementById("audioPlayerBarPlayPauseButton").src = "img/play-button.png";
        clearInterval(this.card.audioPlayerUpdater)
        this.alreadyPlayedBeats++;
    }
    //if (this.repeat) { this.card.startSong(); }
    //else if (this.random) if (this.isRandom) this.randomizeQueue();
    //else this.queue[this.alreadyPlayedBeats].startSong();
    index.barAudioPlayer.currentTime += 0.01;
    document.getElementById("draggable-point").style.left = (((100 * this.currentTime) / index.beatOnPlay.beat.duration)) + "%";
    document.getElementById("audio-progress-bar").style.width = (((100 * this.currentTime) / index.beatOnPlay.beat.duration)) + "%";
  }
}

