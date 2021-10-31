import AudioPlayer from './AudioPlayer';
import './styles/Card.css';

export default class Card {

  constructor(name) {
    this.name = name;
    this.path = "resources/" + this.name + "/";
    this.image = this.path + this.name + ".jpg"
  }
  render() {
    return (
      <div className = "Card">
        <img src={this.image}  className="Thumbnail" />
        <div className="Content">
          <h3>{this.name}</h3>
          <p className="publicationDate">11/01/04</p>
          <img src="img/play-button.png" className="playButton"/>
        </div>
      </div>
    );
  }
}