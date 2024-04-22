import React, { useState } from 'react';
import './App.css';

function App() {
  const [showLeft, setShowLeft] = useState(true);
  const [showRight, setShowRight] = useState(false);

  const handleLeftButtonClick = () => {
    setShowLeft(false);
    setShowRight(true);
  };

  const handleRightButtonClick = () => {
    setShowLeft(true);
    setShowRight(false);
  };

  return (
    <div className="App">
      <h1 className="title">Click the buttons to swap!</h1>
      {showLeft && (
        <button onClick={handleLeftButtonClick} className="left-button">
          Left
        </button>
      )}
      {showRight && (
        <button onClick={handleRightButtonClick} className="right-button">
          Right
        </button>
      )}
    </div>
  );
}

export default App;
