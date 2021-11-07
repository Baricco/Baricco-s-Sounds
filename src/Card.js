import './styles/Card.css';
import * as index from './index';
import BarAudioPlayer from './BarAudioPlayer';

export default class Card {

  constructor(name, genre) {
    this.name = name;
    this.path = "resources/" + this.name + "/";
    this.image = this.path + this.name + ".jpg";
    this.genre = genre;
    this.resumeTime = 0.00;
    this.index = index.beats.length;
    this.id = this.name.replaceAll(" ", "");
  }

  playSong() {
    if(index.beatOnPlay.beat != null && index.beatOnPlay.id != this.id) {  //stop the song that is currently playing
      index.beatOnPlay.beat.pause();
      this.dehighlightPreviousCard();
      clearInterval(index.beatOnPlay.audioPlayerUpdater);
      index.beatOnPlay.beat.currentTime = 0.00;
      index.barAudioPlayer.currentTime = 0.00;
      if (index.beatOnPlay.id == null) { index.beatOnPlay.id = this.id; }
      index.ReactDOM.render(index.playButton, document.getElementById(this.id + "play-pauseButton"));
      index.ReactDOM.render(index.playButton, document.getElementById("audioPlayerBarPlayPauseButton"));;
    }
    else if (index.beatOnPlay.id == this.id) {
      index.beatOnPlay.beat.pause();
      this.dehighlightPreviousCard();
      clearInterval(index.beatOnPlay.audioPlayerUpdater);
      index.ReactDOM.render(index.playButton, document.getElementById(this.id + "play-pauseButton"));
      index.ReactDOM.render(index.playButton, document.getElementById("audioPlayerBarPlayPauseButton"));
      this.resumeTime = index.beatOnPlay.beat.currentTime;
      index.beatOnPlay.id = null;
      return;
    }

    index.changeBeat({                                                //pick the new song
      id: this.id,
      beat: new Audio(this.path + this.name + ".wav"),
    });

    index.beatOnPlay.beat.currentTime = this.resumeTime;
    index.barAudioPlayer.currentTime = this.resumeTime;
    index.beatOnPlay.beat.play();                                   //play the new song
    index.beatOnPlay.audioPlayerUpdater = setInterval(() => index.barAudioPlayer.updateAudioBar(), 10);
    index.ReactDOM.render(index.pauseButton, document.getElementById(this.id + "play-pauseButton"));
    index.ReactDOM.render(index.pauseButton, document.getElementById("audioPlayerBarPlayPauseButton"));
    
  }

  highlightCard() {
    document.getElementById(this.id).style.boxShadow = "0 0 15px 0px var(--purple)";
  }

  dehighlightPreviousCard() {
    try { document.getElementById(index.beatOnPlay.id).style.boxShadow = ""; } catch(e) { return; }
  }

  startSong() {
    this.dehighlightPreviousCard();
    this.highlightCard();
    this.playSong();
    index.barAudioPlayer.changeBeat(this);
    document.getElementById("BarAudioPlayer").style.visibility = "visible";
    index.ReactDOM.render(
      index.barAudioPlayer.render(),
      document.getElementById("BarAudioPlayer")
    );
  }

  render() {
    return (
      <div className = "Card" id = {this.id}>
        <img src={this.image}  className="Thumbnail" />
        <div className="Content">
          <h3>{this.name}</h3>
          <p className="genre">{this.genre}</p>
          <div id = {this.id + "play-pauseButton"} className="play-pauseButton" onClick={() => this.startSong()}>{index.playButton}</div>
        </div>
      </div>
    );
  }
}