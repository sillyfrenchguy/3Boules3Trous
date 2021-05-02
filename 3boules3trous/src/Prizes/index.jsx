import React from 'react';
import './Prizes.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Prizes = ({currentPrize}) => {
    return (
        <div class="conteneurOrange prizes">
            <FontAwesomeIcon icon="gift"/>
            <h3>Lot en jeu : {currentPrize}</h3>
        </div>
    );
}
  export default Prizes;