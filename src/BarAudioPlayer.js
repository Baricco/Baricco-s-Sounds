import './styles/BarAudioPlayer.css';
import * as index from './index';

export default class BarAudioPlayer {

  constructor(card) {
    this.card = card;
    this.currentTime = 0.00;
  }

  changeBeat(card) {
    this.card = card;
  }

  render() {
    return (
      <div>
        <div className = "songAttributes">
          <img src = {this.card.image} className = "songThumbnail"/>
          <h4 className = "songTitle">{this.card.name}</h4>
          <h2 className = "songGenre">{this.card.genre}</h2>
        </div>
        <div  className = "AudioPlayerButtons">
          {audioPlayerBar}
        </div>
      </div>
    );
  }

  updateAudioBar() {
    if (index.beatOnPlay.beat.currentTime >= index.beatOnPlay.beat.duration) {      //if the song finishes, reset the bar
        this.currentTime = 0.00;
        document.getElementById(index.beatOnPlay.id + "play-pauseButton").src = "img/play-button.png";
        document.getElementById("audioPlayerBarPlayPauseButton").src = "img/play-button.png";
        clearInterval(this.card.audioPlayerUpdater)
    }
    index.barAudioPlayer.currentTime += 0.01;
    document.getElementById("draggable-point").style.left = (((100 * this.currentTime) / index.beatOnPlay.beat.duration)) + "%";
    document.getElementById("audio-progress-bar").style.width = (((100 * this.currentTime) / index.beatOnPlay.beat.duration)) + "%";
  }
}

var audioPlayerBar = (

  <div id="audio-player-container">
    <img src = "img/pause-button.png" id = "audioPlayerBarPlayPauseButton"/>
    <div className="audio-progress" id="audio-progress">
        <div id="draggable-point" className="ui-widget-content">
        <div id="audio-progress-handle"></div>
        </div>
          <div id="audio-progress-bar" className="bar">
        </div>
      </div>
    </div>

);

//    <img src ={document.getElementById(index.beatOnPlay.id + "play-pauseButton").src} />
