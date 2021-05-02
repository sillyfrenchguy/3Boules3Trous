import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Jackpot = ({prize}) => {
    return (
        <div class="conteneurOrange">
            <FontAwesomeIcon icon="coins"/>
            <h3>Gros Lot : {prize} €</h3>
        </div>
    );
}
  export default Jackpot;