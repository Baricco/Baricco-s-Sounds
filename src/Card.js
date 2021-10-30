import './styles/Card.css';

export default class Card {

  constructor(name, path, image) {
    this.name = name;
    this.path = path;
    this.image = image;
  }
  render() {
    return (
      <div className = "Card">
          <h3>{this.name}</h3>
          <p>The Path of the file will be : {this.path}</p>
          <p>The Path of the image will be : {this.image}</p>
      </div>
    );
  }
}