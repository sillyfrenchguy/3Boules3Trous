import React, { useState } from 'react';
import './LottoBoard.css';

export const LottoBoard = () => {
  const [drawnNumbers, updateDrawnNumbers] = useState([]);

  const initState = () =>{
    let init = [];
    for(let i=0; i<99; i++){
      init[i] = 'unClickedCell';
    }
    return init;
  }
  const state = initState();
  const [tdClass, setTdClass] = useState(state);

  const cellClick = (event) => {
    const value = event.target.getAttribute('value');
    let state = [...tdClass];
    if(state[value-1] === 'unClickedCell'){
      state[value-1] = 'clickedCell';
      drawnNumbers.push(value);
    }
    else if(state[value-1] === 'clickedCell'){
      state[value-1] = 'unClickedCell';
      if(drawnNumbers.includes(value)){
        drawnNumbers.splice(drawnNumbers.indexOf(value),1);
      }
    }

    updateDrawnNumbers(drawnNumbers);
    setTdClass(state);
  };

  const createBoard = () => {
    let rows = [];
    let nb = 1;
    for(let i=0; i<10; i++){
      let cells = [];
      for(let j=0; j<10; j++){
        if(nb !== 100){
          cells.push(<td class={tdClass[nb-1]} value={nb} onClick={e =>cellClick(e)}>{nb}</td>);
        }
        nb ++;
      };
      rows.push(<tr>{cells}</tr>);
    }
    return rows;
  }

  const progressBar = () =>{
    return <progress max="99" value={drawnNumbers.length}> </progress>;
  }

  return (
     <div id="lottoBoard">
       <table>
        { createBoard() }
       </table>
       { progressBar() }
     </div>
  );
};
  export default LottoBoard;