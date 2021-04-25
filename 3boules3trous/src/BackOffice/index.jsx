import React from 'react';
import './BackOffice.css';

export const BackOffice = ({inputText, updateInputText}) => {
  
    const inputKeyPress = (event) => {
      if (event.charCode === 13) {
        updateInputText([...inputText, event.target.value]);
      }
    };
  
    return (
      <div id="backOffice">
          <div>
            <h2>Le jouli Back Office</h2>
            <label>
                Quine :
                <input type="text" onKeyPress={inputKeyPress} />
            </label>
          </div>
      </div>
    );
  };
  export default BackOffice;