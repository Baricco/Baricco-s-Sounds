import './styles/BarAudioPlayer.css';
import * as index from './index';
import { useDrag } from "react-dnd";
import BarAudioPlayer from './BarAudioPlayer';

function Handle({ }) {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: "Handle",
        item: { id: "Handle" },
        collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
        }),
    }));
    return (
        <div id="handle-draggable-point" className="ui-widget-content">
            <div id="audio-progress-handle"></div>
        </div>
    );
    }

    export default Handle;



// per capire come fare le cose draggable https://www.youtube.com/watch?v=4bzJrEETW4w


/*
import React from "react";


function Picture({ id, url }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "image",
    item: { id: id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return (
    <img
      ref={drag}
      src={url}
      width="150px"
      style={{ border: isDragging ? "5px solid pink" : "0px" }}
    />
  );
}

export default Picture;


*/