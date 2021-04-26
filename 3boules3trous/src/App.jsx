import React, { useState } from 'react';
import Leaderboard from './Leaderboard/index';
import BackOffice from './BackOffice/index';
import './App.css';

function App() {
  const [inputText, updateInputText] = useState([]);

  return (
    <div id="app">
      <div id="stream">
        <Leaderboard inputText={inputText} />
      </div>
      <BackOffice inputText={inputText} updateInputText={updateInputText}/>
    </div>
  );
}

export default App;
