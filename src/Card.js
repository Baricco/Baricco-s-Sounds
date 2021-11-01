import AudioPlayer from './AudioPlayer';
import './styles/Card.css';
import * as index from './index';

export default class Card {

  constructor(name, genre) {
    this.name = name;
    this.path = "resources/" + this.name + "/";
    this.image = this.path + this.name + ".jpg";
    this.genre = genre;
    this.resumeTime = 0;
    this.id = this.name.replaceAll(" ", "");
  }

  playSong() {
      if(index.beatOnPlay.beat != null && index.beatOnPlay.id != this.id) {  //stop the song that is currently playing
        if (index.beatOnPlay.id == null) index.beatOnPlay.id = this.id;
        index.beatOnPlay.beat.pause();
        //this.resumeTime = 0;
        document.getElementById(index.beatOnPlay.id + "play-pauseButton").src = "img/play-button.png";
      }
      else if (index.beatOnPlay.id == this.id) {
        console.log(index.beatOnPlay.id + "==" +  this.id);
        index.beatOnPlay.beat.pause();
        document.getElementById(index.beatOnPlay.id + "play-pauseButton").src = "img/play-button.png";
        this.resumeTime = index.beatOnPlay.beat.currentTime;
        index.beatOnPlay.id = null;
        return;
      }
    index.changeBeat({                                                //pick the new song
      id: this.id,
      beat: new Audio(this.path + this.name + ".wav"),
      playButton: "img/pause-button.png"
    });

    index.beatOnPlay.beat.currentTime = this.resumeTime;
    index.beatOnPlay.beat.play();                                   //play the new song
    document.getElementById(this.id + "play-pauseButton").src = "img/pause-button.png";
  }

  startSong() {
    this.playSong();
  }

  render() {
    return (
      <div className = "Card" id = {this.id}>
        <img src={this.image}  className="Thumbnail" />
        <div className="Content">
          <h3>{this.name}</h3>
          <p className="publicationDate">{this.genre}</p>
          <img src="img/play-button.png" id = {this.id + "play-pauseButton"} className="play-pauseButton" onClick={() => this.startSong()}/>
        </div>
      </div>
    );
  }
}