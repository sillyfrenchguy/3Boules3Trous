import React from 'react';
import './WinnerAnimation.css';

export const WinnerAnimation = ({titre, selectedValue}) => {


      return (
        <div id="winnerOverlay" className="fadeOut" >
            <h1>{titre}</h1>
            <h2>{selectedValue}</h2>; 
        </div>
      );

}

export default WinnerAnimation;