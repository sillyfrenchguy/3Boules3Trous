import React, { useState } from 'react';
import Leaderboard from './Leaderboard/index';
import LottoBoard from './LottoBoard/index';
import BackOffice from './BackOffice/index';
import './App.css';

function App() {
  const [inputText, updateInputText] = useState([]);

  return (
    <div id="app">
      <div id="stream">
        <Leaderboard inputText={inputText} />
        <LottoBoard  />
      </div>
      <BackOffice inputText={inputText} updateInputText={updateInputText}/>
    </div>
  );
}

export default App;
