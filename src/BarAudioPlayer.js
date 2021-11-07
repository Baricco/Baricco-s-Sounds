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

  createQueue() { return index.beats.slice(this.card.index, index.beats.length).concat(index.beats.slice(0, this.card.index)); }

  changeBeat(card) {
    this.card = card;
  }

  shuffleSongs() {
    this.random = !this.random;
    if (this.random) {
      document.getElementById("audioPlayerShuffle").className = "buttonOn";
      this.randomizeQueue();
    }
    else {
      document.getElementById("audioPlayerShuffle").className = "";
      this.queue = this.createQueue();
      this.alreadyPlayedBeats = this.card.index;
    }
  }

  repeatSongs() {
    this.repeat = !this.repeat;
    if (this.repeat) document.getElementById("audioPlayerRepeat").className = "buttonOn";
    else document.getElementById("audioPlayerRepeat").className = "";
  }

  previousSong() {
    this.currentTime = 0.00;
    index.ReactDOM.render(index.playButton, document.getElementById(this.card.id + "play-pauseButton"));
    index.ReactDOM.render(index.playButton, document.getElementById("audioPlayerBarPlayPauseButton"));
    clearInterval(this.card.audioPlayerUpdater);
    this.alreadyPlayedBeats--;
    this.queue.at(this.alreadyPlayedBeats % this.queue.length).startSong();
  }

  nextSong() {
    this.currentTime = 0.00;
    index.ReactDOM.render(index.playButton, document.getElementById(this.card.id + "play-pauseButton"));
    index.ReactDOM.render(index.playButton, document.getElementById("audioPlayerBarPlayPauseButton"));
    clearInterval(this.card.audioPlayerUpdater);
    this.alreadyPlayedBeats++;
    this.queue.at(this.alreadyPlayedBeats % this.queue.length).startSong();
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
    this.queue.sort(() => Math.random() - 0.5);
  }

  updateAudioBar() {
    if (index.beatOnPlay.beat.currentTime >= index.beatOnPlay.beat.duration) {      //if the song finishes, reset the bar
        this.currentTime = 0.00;
        index.ReactDOM.render(index.playButton, document.getElementById(this.card.id + "play-pauseButton"));
        index.ReactDOM.render(index.playButton, document.getElementById("audioPlayerBarPlayPauseButton"));
        if (this.repeat) { this.card.startSong(); }
        else {
          this.alreadyPlayedBeats++;
          this.queue.at(this.alreadyPlayedBeats).startSong();
        }
        clearInterval(this.card.audioPlayerUpdater);
    }
    //else 
    index.barAudioPlayer.currentTime += 0.01;
    document.getElementById("draggable-point").style.left = (((100 * this.currentTime) / index.beatOnPlay.beat.duration)) + "%";
    document.getElementById("audio-progress-bar").style.width = (((100 * this.currentTime) / index.beatOnPlay.beat.duration)) + "%";
  }
}

