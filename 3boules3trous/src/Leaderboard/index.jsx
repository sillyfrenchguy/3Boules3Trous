import React from 'react';

export const Leaderboard = ({inputText}) => {
  
    return (
      <div>
        <h1>Quine :</h1>
        <ul>
          {inputText.map((text) => (<li key={text}>{text}</li>))}
        </ul>
      </div>
    );
  };
  export default Leaderboard;