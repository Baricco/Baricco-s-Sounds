import './styles/BarAudioPlayer.css';
import * as index from './index';


export default class BarAudioPlayer {

  constructor(card) {
    this.card = card;
    this.currentTime = 0.00;
    this.repeat = false;
    this.random = false;
    this.queue = index.beats;
    this.mouseX = 0;
    this.isDraggingHandle = undefined;
    this.beatIndex = this.card.index;
    document.addEventListener('mousemove', e => {
      this.mouseX = e.offsetX;
    });
  }

  createQueue() { return index.beats.slice(this.card.index, index.beats.length).concat(index.beats.slice(0, this.card.index)); }

  changeBeat(card) {
    this.card = card;
    this.beatIndex = this.card.index;
    if (!this.random) this.createQueue();
  }

  shuffleSongs() {
    this.random = !this.random;
    if (this.random) {
      document.getElementById("audioPlayerShuffle").className = "buttonOn";
      this.randomizeQueue();
    }
    else {
      document.getElementById("audioPlayerShuffle").className = "";
      this.beatIndex = this.card.index;
      this.queue = this.createQueue();
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
    this.beatIndex = (this.beatIndex - 1) % this.queue.length;
    this.queue.at(this.beatIndex).startSong();
  }

  nextSong() {
    this.currentTime = 0.00;
    index.ReactDOM.render(index.playButton, document.getElementById(this.card.id + "play-pauseButton"));
    index.ReactDOM.render(index.playButton, document.getElementById("audioPlayerBarPlayPauseButton"));
    this.beatIndex = (this.beatIndex + 1) % this.queue.length;
    this.queue.at(this.beatIndex).startSong();
  }

  dragHandle() {
    index.barAudioPlayer.currentTime = this.mouseX;
    if ((((100 * this.currentTime) / index.beatOnPlay.beat.duration)) < 0) index.barAudioPlayer.currentTime = 0;
    if ((((100 * this.currentTime) / index.beatOnPlay.beat.duration)) > 100) index.barAudioPlayer.currentTime = index.beatOnPlay.beat.duration;
    document.getElementById("draggable-point").style.left = (((100 * this.currentTime) / index.beatOnPlay.beat.duration)) + "%";
    document.getElementById("audio-progress-bar").style.width = (((100 * this.currentTime) / index.beatOnPlay.beat.duration)) + "%";      
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
              <div id="draggable-point" className="ui-widget-content" draggable={true} onDragStart={() => {this.isDraggingHandle = setInterval(() => this.dragHandle(), 10);}} onDragEnd={() => {clearInterval(this.isDraggingHandle)}}>
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
          this.beatIndex++;
          this.queue.at(this.beatIndex).startSong();
        }
        clearInterval(this.card.beatIndex);
    }
    //else 
    index.barAudioPlayer.currentTime += 0.01;
    document.getElementById("draggable-point").style.left = (((100 * this.currentTime) / index.beatOnPlay.beat.duration)) + "%";
    document.getElementById("audio-progress-bar").style.width = (((100 * this.currentTime) / index.beatOnPlay.beat.duration)) + "%";
  }
}

