import React, { useState } from "react";
import "./AppXY.css";

function AppXY(props) {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const pointer = document.getElementsByClassName("pointer");
  const onPointerMove = (e) => {
    setX(e.clientX);
    setY(e.clientY);
  };
  return (
    <div className="container" onPointerMove={onPointerMove}>
      <div
        className="pointer"
        style={{ transform: `translate(${x}px,${y}px)` }}
      ></div>
    </div>
  );
}

export default AppXY;
