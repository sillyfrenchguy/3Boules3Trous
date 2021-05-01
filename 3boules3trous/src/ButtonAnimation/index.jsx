import React, { useState } from 'react';
import WinnerAnimation from '../WinnerAnimation';


export const ButtonAnimation = ({type, titre, selectedValue}) => {
    
    const [isToggleOn, changeState] = useState(true);
    const [text, changeText] = useState(type);


        const changeIsToggleOn = () => {
            if (isToggleOn){
                changeState(false);
                changeText("En cours...");
            }
            else{
                changeState(true);
                changeText(type);
            }        
        }

    return (
        <div>
            <button onClick={changeIsToggleOn}>{text}</button>
            {isToggleOn === false && (<WinnerAnimation type={type} titre={titre} selectedValue={selectedValue} />)}
        </div>
    );

    }
  export default ButtonAnimation;