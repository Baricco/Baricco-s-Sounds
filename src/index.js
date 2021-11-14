import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import Card from './Card';
import BarAudioPlayer from './BarAudioPlayer';


var beatOnPlay = {
  id: "",
  beat: null,
  audioPlayerUpdater: null
};

var volumeOff = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 167.17 167.17">
    <g id="Livello_2" data-name="Livello 2">
      <g id="Layer_1" fill="#0c0c0c" data-name="Layer 1">
        <circle cx="83.59" cy="83.59" r="83.59" transform="translate(-12.31 152.71) rotate(-80.78)"/>
        <path class="cls-1" d="M62.3,103.39l45.57-45.57V56a3.77,3.77,0,0,0-1.71-3.17h0l-.06,0-.27-.16-.16-.08a2.36,2.36,0,0,0-.28-.12l-.18-.07-.28-.07-.2-.05a2.66,2.66,0,0,0-.28,0l-.21,0h-.5l-.31,0-.2,0a2.42,2.42,0,0,0-.36.1l-.14,0c-.16.07-.33.14-.5.23l-6,3.23L83.14,63a3.49,3.49,0,0,1-.44.2,3.79,3.79,0,0,1-1.37.26H63.87a3.81,3.81,0,0,0-3.81,3.81V99.91A3.82,3.82,0,0,0,62.3,103.39Z"/>
        <path class="cls-1" d="M89.22,101.28l-4,4h0l4,2.14,13.09,7.08.16.07c.11,0,.22.11.33.15l.12,0a3.81,3.81,0,0,0,5-3.62V84.58h0V82.63h0Z"/>
        <path class="cls-1" d="M120.56,57.53l-.17-.14h0l-.1-.07-.23-.16-.19-.1-.22-.1-.24-.07-.2,0-.27,0h-.19a1.27,1.27,0,0,0-.28,0l-.18,0-.29.08a1,1,0,0,0-.16.06,2,2,0,0,0-.29.15l-.13.07a2.72,2.72,0,0,0-.38.31h0L60.87,113.72h0a2.46,2.46,0,0,0-.65,1.19,2.15,2.15,0,0,0-.07.56,2.41,2.41,0,0,0,.35,1.25.39.39,0,0,0,.06.11,1.47,1.47,0,0,0,.1.13,2.65,2.65,0,0,0,.21.26h0a2.41,2.41,0,0,0,.36.29l.13.07a1.51,1.51,0,0,0,.28.15.76.76,0,0,0,.16.06l.27.08.18,0,.15,0v0a2.47,2.47,0,0,0,2-.7L120.56,61a2.47,2.47,0,0,0,0-3.5Z"/>
      </g>
    </g>
  </svg>
);

var volumeOn = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 167.17 167.17">
    <g id="Livello_2" data-name="Livello 2">
      <g id="Layer_1" fill="#0c0c0c" data-name="Layer 1">
        <circle cx="83.59" cy="83.59" r="83.59" transform="translate(-34.62 83.59) rotate(-45)"/><path class="cls-1" d="M93.18,99.21a25.29,25.29,0,0,0,0-31.24,2.56,2.56,0,0,0-.43-.44h0a3.12,3.12,0,0,0-.43-.27.61.61,0,0,0-.14-.07l-.34-.13-.18,0L91.34,67h-.28l-.21,0-.25,0a1.63,1.63,0,0,0-.3.07,1.29,1.29,0,0,0-.21.07,1.81,1.81,0,0,0-.37.18l-.12.06a2.6,2.6,0,0,0-.46.36,2.72,2.72,0,0,0-.26,3.51.56.56,0,0,1,.05.08,19.87,19.87,0,0,1,0,24.54.61.61,0,0,1-.07.1c-.07.1-.13.2-.19.3l-.08.18a2.77,2.77,0,0,0-.1.26c0,.06,0,.12,0,.18l-.06.28a.86.86,0,0,0,0,.16,1.49,1.49,0,0,0,0,.21s0,.06,0,.09a2.29,2.29,0,0,0,0,.25,2,2,0,0,0,0,.24,2.58,2.58,0,0,0,.08.26,1.87,1.87,0,0,0,.07.22c0,.09.09.18.14.27l.11.18.17.21c.05.06.09.13.15.19a2.81,2.81,0,0,0,.44.35l.09,0a2.38,2.38,0,0,0,.39.2l.12,0a2,2,0,0,0,.4.1l.11,0h0A2.7,2.7,0,0,0,93.18,99.21Z"/>
        <path class="cls-1" d="M106.25,106.52a35.51,35.51,0,0,0,0-45.87,2.6,2.6,0,0,0-.38-.36h0l0,0-.12-.08L105.4,60l-.17-.07-.33-.11-.18,0a1.86,1.86,0,0,0-.33,0h-.19a1.83,1.83,0,0,0-.33,0l-.2,0-.3.08-.21.07-.27.14-.2.11a2.65,2.65,0,0,0-.26.21l-.16.13h0a2.7,2.7,0,0,0-.15,3.65,30.11,30.11,0,0,1,.74,38c-.24.31-.49.61-.74.91a2.38,2.38,0,0,0-.3.43,2.7,2.7,0,0,0,.45,3.22h0l0,0a2.08,2.08,0,0,0,.38.3,1.19,1.19,0,0,0,.15.09,1.82,1.82,0,0,0,.31.16l.16.06a1.64,1.64,0,0,0,.38.1l.1,0,.08,0h0A2.72,2.72,0,0,0,106.25,106.52Z"/>
        <path class="cls-1" d="M119.35,113.87a45.75,45.75,0,0,0,0-60.57A2,2,0,0,0,119,53h0l0,0-.25-.17-.2-.11-.24-.11-.25-.08-.23,0-.28,0h-.22a1.55,1.55,0,0,0-.31,0l-.2,0-.33.1-.16.05a2.58,2.58,0,0,0-.37.19l-.1.05a3.47,3.47,0,0,0-.43.35h0a2.74,2.74,0,0,0-.1,3.72c.85,1,1.65,2,2.4,3a40.37,40.37,0,0,1,3.62,6c.3.64.6,1.28.88,1.93A40.5,40.5,0,0,1,124,94.06a39.48,39.48,0,0,1-1.79,5.24c-.4,1-.85,1.89-1.32,2.81a40.21,40.21,0,0,1-3,4.86,39.23,39.23,0,0,1-2.61,3.29,2.78,2.78,0,0,0-.68,1.79,2.66,2.66,0,0,0,.78,1.93h0l0,0a2.54,2.54,0,0,0,.36.29l.16.1.28.14.2.07a1.29,1.29,0,0,0,.28.08l.21,0,.07,0h0A2.67,2.67,0,0,0,119.35,113.87Z"/>
        <path class="cls-1" d="M34.93,100.6a3.77,3.77,0,0,0,.16.6l0,0a4.64,4.64,0,0,0,.26.55l0,0a3.91,3.91,0,0,0,.8,1h0a3.68,3.68,0,0,0,.51.37l0,0a5.6,5.6,0,0,0,.55.27h0a3.92,3.92,0,0,0,1.37.26H56.14a3.69,3.69,0,0,1,1.81.46l19.11,10.32a3.8,3.8,0,0,0,5.62-3.35V56A3.77,3.77,0,0,0,81,52.84h0l-.1-.05a1.18,1.18,0,0,0-.19-.11,1.27,1.27,0,0,0-.23-.12l-.21-.09L80,52.38a1.8,1.8,0,0,0-.22-.06l-.25-.06-.25,0-.23,0h-.5l-.33,0-.17,0a2.77,2.77,0,0,0-.41.12l-.09,0a4.52,4.52,0,0,0-.5.23L73.2,54.74,58,63a3.54,3.54,0,0,1-.53.23,3.71,3.71,0,0,1-1.28.23H38.68a3.81,3.81,0,0,0-3.81,3.81V99.91a3.49,3.49,0,0,0,.06.65Z"/>
      </g>
    </g>
  </svg>
);

var nextSongButton = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 167.17 167.17">
    <g id="Livello_2" data-name="Livello 2">
      <g id="Layer_1" fill="#0c0c0c" data-name="Layer 1">
        <circle cx="83.59" cy="83.59" r="83.59"/>
        <path class="cls-1" d="M128.4,80.64,91.94,57.41h0l-.21-.13c-1.82-1.15-4,.35-4,2.73h0l0,6.12.09,17.43a3.15,3.15,0,0,0-1.4-2.7L50,57.64h0l-.21-.13c-1.81-1.16-4,.35-4,2.73h0L46,107.34a3.43,3.43,0,0,0,.05.56.36.36,0,0,1,0,.1c0,.17.08.33.13.48v0a3.51,3.51,0,0,0,.22.48l0,0a3.51,3.51,0,0,0,.27.4l0,0a3.09,3.09,0,0,0,.77.64h0a2.38,2.38,0,0,0,2.54-.08L86.47,86.29a3.17,3.17,0,0,0,1.37-2.72L88,107.1h0a3.33,3.33,0,0,0,0,.56s0,.07,0,.11a2.85,2.85,0,0,0,.13.48v0a4.31,4.31,0,0,0,.22.49l0,0a4,4,0,0,0,.28.4l0,0a2.77,2.77,0,0,0,.77.64h0A2.37,2.37,0,0,0,92,109.8l36.4-23.74A3.35,3.35,0,0,0,128.4,80.64Z"/>
      </g>
    </g>
  </svg>
);

var previousSongButton = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 167.17 167.17">
    <g id="Livello_2" data-name="Livello 2">
      <g id="Layer_1" fill="#0c0c0c" data-name="Layer 1">
        <circle cx="83.59" cy="83.59" r="83.59"/>
        <path class="cls-1" d="M38.41,84.47a3.14,3.14,0,0,0,1.33,2l.11.07.12.08h0l36.42,23.2c1.82,1.16,4-.35,4-2.73L80.3,83.6v.14a.36.36,0,0,0,0,.1,2.09,2.09,0,0,0,0,.35l0,.15a3.81,3.81,0,0,0,.13.45.77.77,0,0,1,.07.16c0,.11.11.22.17.33l.07.11a2.38,2.38,0,0,0,.31.4l0,0,.1.09.14.13a.94.94,0,0,0,.12.09,1.18,1.18,0,0,0,.18.13l36.65,23.35c1.81,1.16,4-.35,4-2.73l-.25-47.09a3.19,3.19,0,0,0-1.45-2.73l-.06,0-.31-.14-.09,0-.34-.1h-.06a1.75,1.75,0,0,0-.4,0h-.1a1.55,1.55,0,0,0-.31,0l-.13,0-.3.1-.11,0a2,2,0,0,0-.41.21L81.67,80.84l-.14.11-.16.12-.12.12-.12.11s0,0,0,0a2.53,2.53,0,0,0-.31.42l-.06.11a2.42,2.42,0,0,0-.18.36l-.06.15c0,.14-.09.29-.13.45l0,.2,0,.32s0,.08,0,.12L80.17,60a3.31,3.31,0,0,0-.77-2.15h0l0,0a2.13,2.13,0,0,0-.3-.3l0,0a2.83,2.83,0,0,0-.28-.2l-.12-.07-.25-.12-.13,0a1.58,1.58,0,0,0-.31-.09l-.07,0a2.85,2.85,0,0,0-.41,0h-.09a1.73,1.73,0,0,0-.32,0l-.12,0a1.92,1.92,0,0,0-.32.09l-.1,0a3.84,3.84,0,0,0-.4.21L39.71,81.07a2.92,2.92,0,0,0-.84.84A3.53,3.53,0,0,0,38.41,84.47Z"/>
      </g>
    </g>
  </svg>
);

var pauseButton = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 167.17 167.17">
    <g id="Livello_2" data-name="Livello 2">
      <g id="Layer_1" fill="#0c0c0c" data-name="Layer 1">
        <circle cx="83.59" cy="83.59" r="83.59" transform="matrix(0.16, -0.99, 0.99, 0.16, -12.02, 153.1)"/>
        <path class="cls-1" d="M54.2,106.68c0,.12,0,.24,0,.36s0,.33.08.49,0,.24.07.36.08.34.13.51,0,.2.08.3.17.48.27.72.09.21.13.31.14.3.22.44a3.07,3.07,0,0,0,.17.31c.08.15.17.29.26.44l.17.25a7.11,7.11,0,0,0,.46.62c0,.07.12.14.17.2s.25.28.38.41l.22.23.39.35.23.19a5.73,5.73,0,0,0,.63.47l.16.1a5.84,5.84,0,0,0,.53.33l.28.15.46.22.31.14.11,0,0,0A9.42,9.42,0,0,0,73,105.84V61.92a9.4,9.4,0,0,0-4.5-8h0l-.31-.18L68,53.6l-.7-.34-.21-.08L66.52,53l-.19-.06c-.26-.08-.53-.15-.8-.21l-.15,0c-.23,0-.46-.08-.7-.1l-.23,0c-.28,0-.57,0-.85,0h0A9.37,9.37,0,0,0,58.41,54l-.09.06-.09.07a9.41,9.41,0,0,0-4.07,7.75v43.92c0,.07,0,.13,0,.2S54.18,106.47,54.2,106.68Z"/>
        <path class="cls-1" d="M94.19,106.71a2.51,2.51,0,0,0,0,.27c0,.2,0,.4.08.59l.06.29c0,.22.1.43.17.64s0,.12,0,.18c.09.26.18.51.29.76a1.6,1.6,0,0,0,.1.23c.08.18.16.36.25.53l.14.26c.1.17.2.34.31.5a1.37,1.37,0,0,0,.13.2c.15.22.31.43.47.64l.15.17c.13.15.26.3.4.44l.22.21c.12.13.26.24.39.36l.23.2.58.43.25.16c.16.1.31.2.48.29l.32.17.4.2.36.15.09,0h0a9.47,9.47,0,0,0,3.46.66h0a9.44,9.44,0,0,0,9.44-9.43V61.92a9.44,9.44,0,0,0-4.5-8l0,0-.35-.21-.17-.09a6.59,6.59,0,0,0-.71-.34l-.22-.09-.58-.22-.21-.07-.8-.2-.15,0c-.23,0-.46-.08-.7-.1l-.22,0c-.29,0-.57,0-.87,0h0a9.43,9.43,0,0,0-9.43,9.43v44C94.15,106.15,94.17,106.43,94.19,106.71Z"/>
      </g>
    </g>
  </svg>
);

var repeatButton = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 167.17 167.17">
    <g id="Livello_2" class="Livello_2" data-name="Livello 2">
      <g id="Layer_1" class="Layer-1" fill="#0c0c0c" data-name="Layer 1">
        <circle cx="83.59" cy="83.59" r="83.59"/>
        <path class="cls-1" d="M91.93,42.5c.16,0,.32,0,.48.09a41.77,41.77,0,0,0-10.72-1A4.68,4.68,0,1,0,82,50.93a33.08,33.08,0,0,1,10,1.16l.11,0a32.43,32.43,0,0,1,14.25,8.38A32.78,32.78,0,0,1,77,115.88l.25.05A32.79,32.79,0,0,1,55.71,65.76l3.81,3.81a1.42,1.42,0,0,0,2.37-.63l5.9-21.1a1.39,1.39,0,0,0-.52-1.5h0l-.11-.06-.07-.05a1.69,1.69,0,0,0-.28-.12h0a1.28,1.28,0,0,0-.75,0L44.94,52a1.47,1.47,0,0,0-.65.39,1.43,1.43,0,0,0,0,2L49,59c-.83,1.16-1.6,2.35-2.31,3.58a42.11,42.11,0,0,0,6.69,50.85c.34.34.69.67,1,1l.18.16,1,.88.41.35,1,.8a3.92,3.92,0,0,0,.32.25c.66.52,1.33,1,2,1.48l.34.24,1,.64c.18.12.35.23.53.33s.66.41,1,.6l.48.27c.65.36,1.32.71,2,1l.44.22,1,.47.61.26,1,.42.59.22c.65.24,1.3.47,2,.68l.56.18,1,.29.68.19,1,.25.67.15a42.68,42.68,0,0,0,8.93,1A42.1,42.1,0,0,0,91.93,42.5Z"/>
      </g>
    </g>
  </svg>
);

var shuffleButton = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 167.17 167.17">
    <g id="Livello_2" class="Livello_2" data-name="Livello 2">
      <g id="Layer_1" class="Layer-1" fill="#0c0c0c" data-name="Layer 1">
        <circle cx="83.59" cy="83.59" r="83.59"/>
        <path class="cls-1" d="M75.61,88.64h0l-.5-1-.72,1.46a28.74,28.74,0,0,1-5.29,7.5c-.33.33-.67.65-1,1A15.41,15.41,0,0,1,58,101.78H37.55a4.15,4.15,0,0,0-4.15,4.16h0a4.07,4.07,0,0,0,.05.61s0,.08,0,.12a3.65,3.65,0,0,0,.14.57l0,.09c.07.18.14.35.22.51l0,0a3.66,3.66,0,0,0,.31.49l.07.09a3.81,3.81,0,0,0,.37.43l.06,0a4.62,4.62,0,0,0,.41.34l.08.06a3.77,3.77,0,0,0,.48.28l.12.06a3.18,3.18,0,0,0,.54.21h0a4.5,4.5,0,0,0,1.22.18H58c8.38,0,16.3-5,21.77-13.58-.64-1-1.24-2.13-1.8-3.25Z"/>
        <path class="cls-1" d="M138.65,60.24,119.86,49.66h0l-.18-.1a2.82,2.82,0,0,0-.64-.25,2.44,2.44,0,0,0-.65-.07,2.52,2.52,0,0,0-2.1,1.23,1.51,1.51,0,0,0-.15.28,2.51,2.51,0,0,0-.2,1h0v6.53H105c-8,0-15.59,4.56-21,12.45h0c.36.65.71,1.32,1.06,2l3.4,6.8.13-.27c4-7.94,10.12-12.68,16.43-12.68H116V73.1h0a2.83,2.83,0,0,0,0,.41l0,.12a2.68,2.68,0,0,0,.07.27l0,.12c0,.09.08.18.13.27a.25.25,0,0,0,0,.07,2.11,2.11,0,0,0,.21.31l.06.07a2.08,2.08,0,0,0,.21.21l.07.06.26.2a.05.05,0,0,1,0,0,2.5,2.5,0,0,0,2.55.05l19-10.67A2.52,2.52,0,0,0,138.65,60.24Z"/>
        <path class="cls-1" d="M138.65,102.56,119.86,92h0l-.18-.1a2.55,2.55,0,0,0-1.23-.33A2.52,2.52,0,0,0,116,94.07h0v6.52H105q-.61,0-1.23-.06l-.38,0-.85-.13-.41-.1c-.28-.06-.56-.13-.83-.21l-.36-.11c-.3-.1-.6-.2-.89-.32-4.47-1.77-8.56-5.87-11.48-11.7l-2.16-4.32-4.62-9.23v0C77.52,65.78,71,60,63.79,57.91l-.2-.06-.88-.22-.2-.05-1.06-.2-.11,0-.93-.13-.32,0c-.25,0-.51-.05-.76-.06l-.32,0c-.35,0-.69,0-1,0H37.55a4.15,4.15,0,0,0-4.15,4.15h0a4.21,4.21,0,0,0,.05.62s0,.07,0,.11a3.39,3.39,0,0,0,.14.57l0,.09a5,5,0,0,0,.23.53v0c.1.17.21.34.32.5l.06.07a4.19,4.19,0,0,0,.39.45l0,0a3.75,3.75,0,0,0,.44.37l.06,0a3.15,3.15,0,0,0,.5.3.31.31,0,0,0,.1,0,4.35,4.35,0,0,0,.54.22h0a4.14,4.14,0,0,0,1.22.18H58a14,14,0,0,1,6.83,1.88l.21.11.9.56L66,68c.33.23.66.46,1,.71l.18.14q.42.33.84.69l.13.12q.47.42.93.87l.14.14.78.83.16.18c.29.33.58.67.86,1a1.71,1.71,0,0,1,.11.14c.24.31.48.63.72,1l.18.24c.26.38.52.77.77,1.17a.41.41,0,0,1,.07.11c.23.36.45.74.67,1.12l.18.32q.35.63.69,1.29l2.75,5.52,4,8c.21.41.42.82.64,1.21s.42.77.64,1.14l.2.33c.16.28.33.56.51.83.06.1.12.2.19.3.22.35.45.7.68,1l.17.23c.18.27.38.53.57.79l.24.32.59.76.18.22c.25.31.5.61.76.9l.23.26.6.65.25.27c.26.27.53.53.79.79l.07.06.82.76.26.23.66.56.24.19c.29.24.59.47.89.69l.16.12.76.53.27.18c.26.17.52.34.78.49l.17.11c.31.19.63.37.94.54l.26.13.73.37.3.14c.29.14.59.28.9.41l.07,0h0a21.53,21.53,0,0,0,8.35,1.7H116v6.52h0a2.73,2.73,0,0,0,0,.5.74.74,0,0,0,0,.14,1.58,1.58,0,0,0,.09.31l.08.16a2,2,0,0,0,.14.25.71.71,0,0,0,.1.14,2,2,0,0,0,.19.22.68.68,0,0,0,.12.12,1.24,1.24,0,0,0,.22.18l.13.1.29.15a2.6,2.6,0,0,0,.36.13l.12,0h0a2.8,2.8,0,0,0,.58.08,2.45,2.45,0,0,0,1.23-.33l19-10.68A2.51,2.51,0,0,0,138.65,102.56Z"/>
      </g>
    </g>
  </svg>
);



var playButton = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 167.17 167.17">
    <g id="Livello_2" data-name="Livello 2">
      <g id="Layer_1"  class="Layer-1" fill="#0c0c0c" data-name="Layer 1">
        <circle cx="83.59" cy="83.59" r="83.59" transform="translate(-34.62 83.59) rotate(-45)"/>
        <path class="cls-1" d="M60.66,109.13a2.15,2.15,0,0,0,.15.51s0,0,0,0a5.12,5.12,0,0,0,.27.52l0,0a2.88,2.88,0,0,0,.33.43l0,0a3.13,3.13,0,0,0,.93.69h0a3.28,3.28,0,0,0,3.1-.08l44.62-25.12a3.33,3.33,0,0,0,0-5.79l-44.38-25h0l-.25-.14a3.32,3.32,0,0,0-4.95,2.89h0v50.24h0a3.68,3.68,0,0,0,.06.59Z"/>
      </g>
    </g>
  </svg>
);


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
         beats,
         playButton,
         pauseButton,
         repeatButton,
         shuffleButton,
         nextSongButton,
         previousSongButton,
         volumeOff,
         volumeOn,
         React
        };