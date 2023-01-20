import React, { useState } from "react";
import "./AppXY.css";

export default function AppXY() {
  const [positoin, setPosition] = useState({ x: 0, y: 0, z: 0 });

  const handlePointer = (e) => {
    // setPosition({ x: e.clientX, y: e.clientY });

    // y 고정 (수평으로만 이동)
    setPosition((prev) => ({ x: e.clientX, y: prev.y }));

    // 한가지만 수정할 경우
    setPosition((prev) => ({ ...prev, x: e.clientX }));
  };

  return (
    <div onPointerMove={handlePointer} className="container">
      <div
        className="pointer"
        style={{ transform: `translate(${positoin.x}px, ${positoin.y}px)` }}
      />
    </div>
  );
}
