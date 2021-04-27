import React, { useState } from 'react';
import Leaderboard from './Leaderboard/index';
import LottoBoard from './LottoBoard/index';
import LastDrawnNumbers from './LastDrawnNumbers/index';
import BackOffice from './BackOffice/index';
import './App.css';
import Banner from './Banner';

function App() {
  const [selectedValueQuine, setSelectedValueQuine] = useState([]);
  const [selectedValueCarton, setSelectedValueCarton] = useState([]);
  const [drawnNumbers, updateDrawnNumbers] = useState([]);

  return (
    <div id="app">
      <div id="stream">
        <Banner/>
        <Leaderboard selectedValueQuine={selectedValueQuine} selectedValueCarton={selectedValueCarton}/>
        <LottoBoard  drawnNumbers={drawnNumbers} updateDrawnNumbers={updateDrawnNumbers}/>
        <LastDrawnNumbers drawnNumbers={drawnNumbers}/>
        
      </div>
        <BackOffice selectedValueQuine={selectedValueQuine} setSelectedValueQuine ={setSelectedValueQuine} selectedValueCarton={selectedValueCarton} setSelectedValueCarton ={setSelectedValueCarton}/>
    </div>
  );
}

export default App;
