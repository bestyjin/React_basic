import React, { useState } from "react";
import "./AppXY.css";

function AppXY(props) {
  const [position, setPosition] = useState({ x: 0, y: 0, z: 0 });
  const onPointerMove = (e) => {
    // setPosition({ x: e.clientX, y: e.clientY });
    setPosition((prev) => ({ ...prev, x: e.clientX }));
  };
  return (
    <div className="container" onPointerMove={onPointerMove}>
      <div
        className="pointer"
        style={{ transform: `translate(${position.x}px,${position.y}px)` }}
      ></div>
    </div>
  );
}

export default AppXY;
