import './styles/BarAudioPlayer.css';
import * as index from './index';

export default class BarAudioPlayer {

  constructor(card) {
    this.card = card;
  }

  changeBeat(card) {
    this.card = card;
  }

  render() {
    return (
      <div>
        <div id="audio-player-container">
            <div className="audio-progress" id="audio-progress">
                <div id="draggable-point" className="draggable ui-widget-content">
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
}