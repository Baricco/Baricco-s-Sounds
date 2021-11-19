import React, { useState } from "react";
import Handle from "./Handle";
import { useDrop } from "react-dnd";

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

export default DragDrop;