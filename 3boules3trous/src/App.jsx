import React, { useState } from 'react';
import Leaderboard from './Leaderboard/index';
import LottoBoard from './LottoBoard/index';
import LastDrawnNumbers from './LastDrawnNumbers/index';
import BackOffice from './BackOffice/index';
import Chat from './Chat/index';
import Banner from './Banner';
import './App.css';

function App() {
  const [drawnNumbers, updateDrawnNumbers] = useState([]);
  const [selectedValueQuine, setSelectedValueQuine] = useState([]);
  const [selectedValueCarton, setSelectedValueCarton] = useState([]);

  return (
    <div id="app">
      <div id="stream">
        <Banner/>
        <div id="leftColumn">
          <Leaderboard selectedValueQuine={selectedValueQuine} selectedValueCarton={selectedValueCarton}/>
        </div>
        <div id="middleColumn">
          <LottoBoard  drawnNumbers={drawnNumbers} updateDrawnNumbers={updateDrawnNumbers}/>
        </div>
        <div id="rightColumn">
          <LastDrawnNumbers drawnNumbers={drawnNumbers}/>
          <Chat />
        </div>
      </div>
        <BackOffice selectedValueQuine={selectedValueQuine} setSelectedValueQuine ={setSelectedValueQuine} selectedValueCarton={selectedValueCarton} setSelectedValueCarton ={setSelectedValueCarton}/>
    </div>
  );
}

export default App;
