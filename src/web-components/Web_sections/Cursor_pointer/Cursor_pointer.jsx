import React, { useState, useEffect } from 'react';

function Cursor_pointer() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className="hidden cursor w-9 h-9 border border-solid border-blue-400 rounded-full z-30 fixed lg:flex items-center justify-center pointer-events-none"
      style={{
        top: mousePosition.y - 20 + 'px',  // Offset to center the cursor
        left: mousePosition.x - 20 + 'px', // Offset to center the cursor
      }}
    >
      <span className="inline-block w-1 h-1 bg-blue-400 rounded-full mix-blend-difference"></span>
    </div>
  );
}

export default Cursor_pointer;
