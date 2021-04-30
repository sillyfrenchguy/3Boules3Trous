import React from 'react';
import './LeaderBoard.css';


export const Leaderboard = ({selectedValueQuine, selectedValueCarton}) => {
    
    return (
      <div id="Leaderboard">
        <div className="conteneur_Type">
          <h2>Quine</h2>
          <div className="conteneur_userLeader">
            {selectedValueQuine.map((text) => (
            <div className ="userLeader" key={text}>
              {text}
            </div>
            ))}
          </div>
        </div>
        <div className="conteneur_Type conteneurCarton">
          <h2>Carton plein</h2>
          <div className="conteneur_userLeader">
            {selectedValueCarton.map((text) => (
            <div className ="userLeader cartonPlein" key={text}>
              {text}
            </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  export default Leaderboard;