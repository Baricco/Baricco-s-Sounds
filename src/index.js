import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import Card from './Card';


export function renderPage(beats){
  ReactDOM.render(
      <React.StrictMode>
        <h1>Baricco's Beats</h1>
        <div className = "CardsContainer">
          {beats.map(card => <div>{card.render()}</div>)}
        </div>
      </React.StrictMode>,
      document.getElementById("root")
  );
}


function loadBeats() {
  var beats = [];
  beats.push(new Card("Skull"));
  beats.push(new Card("Skull"));
  beats.push(new Card("Skull"));
  beats.push(new Card("Skull"));
  beats.push(new Card("Skull"));
  beats.push(new Card("Skull"));
  beats.push(new Card("Skull"));
  beats.push(new Card("Skull"));
  beats.push(new Card("Skull"));
  return beats;
}

renderPage(loadBeats());

