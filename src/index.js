import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import Card from './Card';


export function renderPage(beats){
  ReactDOM.render(
      <React.StrictMode>
          {beats}
      </React.StrictMode>,
      document.getElementById("root")
  );
}


function loadBeats() {
  var beats = [];
  beats.push(new Card("Beat #1", "beat/path/beat.wav", "image/directory/image.png"));
  beats.push(new Card("Beat #2", "beat/path/beat.wav", "image/directory/image.png"));
  beats.push(new Card("Beat #3", "beat/path/beat.wav", "image/directory/image.png"));
  beats.push(new Card("Beat #4", "beat/path/beat.wav", "image/directory/image.png"));
  return beats;
}

renderPage(loadBeats());

