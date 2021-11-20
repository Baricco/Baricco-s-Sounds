import { memo, useEffect } from 'react';
import { useDrag } from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend';


function getStyles(left, top, isDragging) {
    const transform = `translate3d(${left}px, ${top}px, 0)`;
    return {
        position: 'absolute',
        transform,
        WebkitTransform: transform,
        // IE fallback: hide the real node using CSS when dragging
        // because IE will ignore our custom "empty image" drag preview.
        opacity: isDragging ? 0 : 1,
        height: isDragging ? 0 : '',
    };
}

export const Handle = memo(function Handle(props) {
    const { id, title, left, top } = props;
    const [{ isDragging }, drag, preview] = useDrag(() => ({
        type: 'handle',
        item: { id, left, top, title },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    }), [id, left, top, title]);
    useEffect(() => {
        preview(getEmptyImage(), { captureDraggingState: true });
    }, []);
    return (
      <div id="handle-draggable-point" className="ui-widget-content">
        <div id="audio-progress-handle"></div>
      </div>
    );
});

export default Handle;


// per capire come fare le cose draggable https://www.youtube.com/watch?v=4bzJrEETW4w


/*

import './styles/BarAudioPlayer.css';
import * as index from './index';
import { useDrag, useDrop, DropTargetMonitor } from 'react-dnd'
import { XYCoord } from 'dnd-core'
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

*/