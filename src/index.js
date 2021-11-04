import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import Card from './Card';
import BarAudioPlayer from './BarAudioPlayer';

var beatOnPlay = {
  id: "Skullplay-pauseButton",
  beat: null,
  audioPlayerUpdater: null
};

var beats = [];

var barAudioPlayer = new BarAudioPlayer(new Card("Title", "Genre"));

function renderPage(beats){
  ReactDOM.render(
      <React.StrictMode>
        <h1 className = "PageTitle">BARICCO'S BEATS</h1>
        <div className = "CardsContainer">
          {beats.map(card => card.render())}
        </div>
        <div className="bottomDiv"></div>
        <div id = "BarAudioPlayer">{barAudioPlayer.render()}</div>
      </React.StrictMode>,
      document.getElementById("root")
  );
}


function loadBeats() {
  beats.push(new Card("Skull", "Trap"));
  beats.push(new Card("Alone pt. 3", "Trap"));
  beats.push(new Card("Crazy Train", "Trap"));
  beats.push(new Card("Alone pt. 2", "Trap"));
  beats.push(new Card("Cotton Candy", "Drill"));
  beats.push(new Card("Alone pt. 1", "Trap"));
  beats.push(new Card("Romance 722", "Trap"));
  beats.push(new Card("Shadow", "Drill"));
  beats.push(new Card("Giaguari", "Trap"));
  beats.push(new Card("Ethereal", "Trap"));
  beats.push(new Card("Für Elise Remix", "Dubstep"));

}

function changeBeat(newBeat) { beatOnPlay = newBeat; }

loadBeats()
renderPage(beats);

export { beatOnPlay,
         renderPage,
         changeBeat,
         barAudioPlayer,
         ReactDOM,
         beats
        };
