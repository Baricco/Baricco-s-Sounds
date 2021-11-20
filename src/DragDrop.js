import React, { useState } from "react";
import Handle from "./Handle";
import { useDrop } from "react-dnd";


export const DragDrop = () => {
  return (
    <div>
      <Handle snapToGrid={useState(false)}/>
    </div>
  );
}

export default DragDrop;




/*


function DragDrop() {
  //const [board, setBoard] = useState([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "Handle",
    drop: (item) => moveHandle(item.position),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const moveHandle = (id) => {
    //setBoard((board) => [...board]);
  };

  return (
    <div>
      <div>
        <Handle/>;
      </div>
      <div ref={drop}>
        <Handle/>;
      </div>
    </div>
  );
}









export const Example = () => {
    const [snapToGridAfterDrop, setSnapToGridAfterDrop] = useState(false);
    const [snapToGridWhileDragging, setSnapToGridWhileDragging] = useState(false);
    const handleSnapToGridAfterDropChange = useCallback(() => {
        setSnapToGridAfterDrop(!snapToGridAfterDrop);
    }, [snapToGridAfterDrop]);
    const handleSnapToGridWhileDraggingChange = useCallback(() => {
        setSnapToGridWhileDragging(!snapToGridWhileDragging);
    }, [snapToGridWhileDragging]);
    return (<div>
			<Container snapToGrid={snapToGridAfterDrop}/>
			<CustomDragLayer snapToGrid={snapToGridWhileDragging}/>


*/