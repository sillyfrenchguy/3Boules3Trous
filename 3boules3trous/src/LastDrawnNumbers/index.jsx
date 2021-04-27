import React from 'react';
// import './LottoBoard.css';

export const LastDrawnNumbers = ({drawnNumbers}) => {
    
  const createLastDrawnComp = () => {
    let row = [];
    let cells = [];
    for(let i= 0; i<5; i++){
      /*
      if (drawnNumbers[i] != null){
        let key = "drawn-" + drawnNumbers[i].toString();
        cells.push(<td key={key}>{drawnNumbers[i]}</td>);
      }
      else{
        cells.push(<td></td>);
      }*/
      cells.push(<td>{drawnNumbers[i]}</td>);   
    }
    console.log(drawnNumbers);
    row.push(<table><tbody><tr>{cells}</tr></tbody></table>);
    return row;
  }

  return (
     <div>
       <h2>Derniers numéros</h2>
        { createLastDrawnComp() }
     </div>
  );
};
export default LastDrawnNumbers;