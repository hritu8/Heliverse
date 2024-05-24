import React, { useEffect, useRef } from 'react';

const Cursor = () => {
  const cursorRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const cursor = cursorRef.current;
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
      cursor.style.background = 'linear-gradient(90deg, #F87516 0%, #5E11FF 100%)';
      
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        cursor.style.background = 'transparent';
      }, 300);
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed w-8 h-8 rounded-full pointer-events-none transition-all duration-300"
      style={{ transform: 'translate(-50%, -50%)', border: '1px solid white' }}
    ></div>
  );
};

export default Cursor;
