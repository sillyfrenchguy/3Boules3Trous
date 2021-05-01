import React from 'react';
import './WinnerAnimation.css';

export const WinnerAnimation = ({titre, selectedValue}) => {


      return (
        <div id="winnerOverlay" className="fadeOut" >
            <h1>{titre}</h1>
            <h1>{selectedValue}</h1>; 
        </div>
      );

}

export default WinnerAnimation;