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

  shuffleSongs() {
    this.random = !this.random;
    if (this.random) document.getElementById("audioPlayerShuffle").className = "buttonOn";
    else document.getElementById("audioPlayerShuffle").className = "";
  }

  repeatSongs() {
    this.repeat = !this.repeat;
    if (this.repeat) document.getElementById("audioPlayerRepeat").className = "buttonOn";
    else document.getElementById("audioPlayerRepeat").className = "";
  }

  previousSong() {

  }

  nextSong() {

  }

//bisogna cambaire i tag img con dei tag svg o simili per poter cambiare il css

  render() {
    return (
      <div>
        <div className = "songAttributes">
          <img src = {this.card.image} className = "songThumbnail"/>
          <h4 className = "songTitle">{this.card.name}</h4>
          <h2 className = "songGenre">{this.card.genre}</h2>
        </div>
        <div  className = "AudioPlayerButtons">
          <div id="audio-player-container">
          <div id = "audioPlayerPrevious" onClick={() => this.previousSong()}>{index.previousSongButton}</div>
            <div id = "audioPlayerShuffle" onClick={() => this.shuffleSongs()}>{index.shuffleButton}</div>
            <div id = "audioPlayerBarPlayPauseButton" onClick={() => this.card.startSong()}>{index.playButton}</div>
            <div id = "audioPlayerRepeat" onClick={() => this.repeatSongs()}>{index.repeatButton}</div>
            <div id = "audioPlayerNext" onClick={() => this.nextSong()}>{index.nextSongButton}</div>
            <div className="audio-progress" id="audio-progress">
              <div id="draggable-point" className="ui-widget-content">
                <div id="audio-progress-handle"></div>
              </div>
              <div id="audio-progress-bar" className="bar"></div>
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
        document.getElementById(index.beatOnPlay.id + "play-pauseButton").src = "img/play-button.svg";
        document.getElementById("audioPlayerBarPlayPauseButton").src = "img/play-button.svg";
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

