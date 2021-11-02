import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import Card from './Card';
import BarAudioPlayer from './BarAudioPlayer';

var beatOnPlay = {
  id: "",
  beat: null,
};

var barAudioPlayer = new BarAudioPlayer(new Card("Title", "Genre"));

function renderPage(beats){
  ReactDOM.render(
      <React.StrictMode>
        <h1 className = "PageTitle">Baricco's Beats</h1>
        <div className = "CardsContainer">
          {beats.map(card => card.render())}
        </div>
        <div id = "BarAudioPlayer">{barAudioPlayer.render()}</div>
      </React.StrictMode>,
      document.getElementById("root")
  );
}


function loadBeats() {
  var beats = [];
  beats.push(new Card("Skull", "Trap"));
  beats.push(new Card("Alone pt. 3", "Trap"));
  beats.push(new Card("Crazy Train", "Trap"));
  beats.push(new Card("Alone pt. 2", "Trap"));
  
  beats.push(new Card("Skull", "Trap"));
  beats.push(new Card("Alone pt. 3", "Trap"));
  beats.push(new Card("Crazy Train", "Trap"));
  beats.push(new Card("Alone pt. 2", "Trap"));
  beats.push(new Card("Skull", "Trap"));
  beats.push(new Card("Alone pt. 3", "Trap"));
  beats.push(new Card("Crazy Train", "Trap"));
  beats.push(new Card("Alone pt. 2", "Trap"));
  beats.push(new Card("Skull", "Trap"));
  beats.push(new Card("Alone pt. 3", "Trap"));
  beats.push(new Card("Crazy Train", "Trap"));
  beats.push(new Card("Alone pt. 2", "Trap"));
  return beats;
}

function changeBeat(newBeat) { beatOnPlay = newBeat; }

renderPage(loadBeats());

export { beatOnPlay,
         renderPage,
         changeBeat,
         barAudioPlayer,
         ReactDOM
        };
