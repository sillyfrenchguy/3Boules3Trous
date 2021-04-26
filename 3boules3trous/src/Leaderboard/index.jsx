import React from 'react';
import './LeaderBoard.css';


export const Leaderboard = ({selectedValueQuine, selectedValueCarton}) => {
    
    return (
      <div id="Leaderboard">
        <div class="conteneur_Type">
          <h2>Quine</h2>
          <div class="conteneur_userLeader">
            {selectedValueQuine.map((text) => (
            <div class ="userLeader" key={text}>
              {text}
            </div>
            ))}
          </div>
        </div>
        <div class="conteneur_Type">
          <h2>Carton </h2>
          <div class="conteneur_userLeader">
            {selectedValueCarton.map((text) => (
            <div class ="userLeader" key={text}>
              {text}
            </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  export default Leaderboard;