import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import Card from './Card';


export function renderPage(beats){
  ReactDOM.render(
      <React.StrictMode>
        <h1 className = "PageTitle">Baricco's Beats</h1>
        <div className = "CardsContainer">
          {beats.map(card => card.render())}
        </div>
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
  beats.push(new Card("Skull"));
  beats.push(new Card("Skull"));
  beats.push(new Card("Skull"));
  beats.push(new Card("Skull"));
  return beats;
}

renderPage(loadBeats());

