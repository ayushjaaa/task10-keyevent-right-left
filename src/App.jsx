import React, { useState, useEffect } from 'react';

function App() {
  const [position, setPosition] = useState(0);

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowRight') {
      setPosition((prevPosition) => prevPosition + 10);
    } else if (event.key === 'ArrowLeft') {
      setPosition((prevPosition) => prevPosition - 10);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);



