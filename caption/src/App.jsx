import React, { useState } from 'react';
import vid from './assets/WhatsApp Video 2024-04-30 at 2.55.45 PM.mp4'
import './App.css';

function App() {
  const [caption, setCaption] = useState('');
  const [userInput, setUserInput] = useState('');

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleButtonClick = () => {
    setCaption(userInput);
  };

  return (
    <div className="App">
      <video autoPlay loop muted className="background-video">
        <source src={vid} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content">
        <input
          type="text"
          value={userInput}
          onChange={handleInputChange}
          placeholder="Enter your caption"
        />
        <button onClick={handleButtonClick}>Set Caption</button>
        <h1 className="caption">{caption}</h1>
      </div>
    </div>
  );
}

export default App;
