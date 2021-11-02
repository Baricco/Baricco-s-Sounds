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
        <div id="audio-player-container">
            <div className="audio-progress" id="audio-progress">
                <div id="draggable-point" className="ui-widget-content">
                <div id="audio-progress-handle"></div>
                </div>
                    <div id="audio-progress-bar" className="bar">
                </div>
            </div>
        </div>
        <div id="posX"></div>
        <h1>{this.card.name}</h1>
      </div>
    );
  }

  updateAudioBar() {
    if (index.beatOnPlay.beat.currentTime >= index.beatOnPlay.beat.duration) {      //if the song finishes, reset the bar
        this.currentTime = 0.00;
        document.getElementById(index.beatOnPlay.id + "play-pauseButton").src = "img/play-button.png";
        clearInterval(this.card.audioPlayerUpdater)
    }
    index.barAudioPlayer.currentTime += 0.01;
    document.getElementById("draggable-point").style.left = ((this.currentTime * window.innerWidth) / index.beatOnPlay.beat.duration) + "px";
    document.getElementById("audio-progress-bar").style.width = ((this.currentTime * window.innerWidth) / index.beatOnPlay.beat.duration) + "px";
}
}