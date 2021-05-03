import React, { useState } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoins, faPodcast, faGift, faTrophy} from '@fortawesome/free-solid-svg-icons'
import CameraPlaceholder from './CameraPlaceholder/index';
import Leaderboard from './Leaderboard/index';
import LottoBoard from './LottoBoard/index';
import LastDrawnNumbers from './LastDrawnNumbers/index';
import BackOffice from './BackOffice/index';
import Chat from './Chat/index';
import Banner from './Banner';
import Prizes from './Prizes/index';
import './App.css';

library.add(faPodcast, faCoins, faGift, faTrophy);

function App() {
  const [drawnNumbers, updateDrawnNumbers] = useState([]);
  const [selectedValueQuine, setSelectedValueQuine] = useState([]);
  const [selectedValueCarton, setSelectedValueCarton] = useState([]);
  const [prize, updateJackpot] = useState([0]);
  const [currentPrize, updatePrize] = useState([]);

  return (
    <div id="app">
      <div id="videoBg">
        <iframe  width="1920" height="1080" src="https://www.youtube.com/embed/vyMUhgMeJ8A?rel=0&amp;autoplay=1&amp;mute=0&amp;controls=0" allow="autoplay" title="YouTube video player" frameborder="0"  allowfullscreen>
        </iframe>
      </div>
      <div id="stream">
        <Banner prize={prize}/>
        <div id="leftColumn">
          <CameraPlaceholder />
          <Leaderboard selectedValueQuine={selectedValueQuine} selectedValueCarton={selectedValueCarton}/>
        </div>
        <div id="middleColumn">
          <LottoBoard  drawnNumbers={drawnNumbers} updateDrawnNumbers={updateDrawnNumbers}/>
          <Prizes currentPrize={currentPrize}/>
        </div>
        <div id="rightColumn">
          <LastDrawnNumbers drawnNumbers={drawnNumbers}/>
          <Chat />
        </div>
      </div>
        <BackOffice prize={prize} currentPrize={currentPrize} updatePrize={updatePrize} updateJackpot={updateJackpot} selectedValueQuine={selectedValueQuine} setSelectedValueQuine ={setSelectedValueQuine} selectedValueCarton={selectedValueCarton} setSelectedValueCarton ={setSelectedValueCarton}/>
    </div>
  );
}

export default App;
