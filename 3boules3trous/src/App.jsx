import React, { useState } from 'react';
import Leaderboard from './Leaderboard/index';
import BackOffice from './BackOffice/index';
import './App.css';

function App() {
  const [selectedValueQuine, setSelectedValueQuine] = useState([]);
  const [selectedValueCarton, setSelectedValueCarton] = useState([]);

  return (
    <div id="app">
      <div id="stream">
        <Leaderboard selectedValueQuine={selectedValueQuine} selectedValueCarton={selectedValueCarton}/>
      </div>
        <BackOffice selectedValueQuine={selectedValueQuine} setSelectedValueQuine ={setSelectedValueQuine} selectedValueCarton={selectedValueCarton} setSelectedValueCarton ={setSelectedValueCarton}/>
    </div>
  );
}

export default App;
