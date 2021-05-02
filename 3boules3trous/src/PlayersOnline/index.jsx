import React from 'react';
import { userList } from '../datas/userList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const PlayersOnline = () => {
    return (
        <div class="conteneurOrange">
            <FontAwesomeIcon icon="podcast"/>
            <h3>{userList.length} joueurs inscrits</h3>
        </div>
    );
}
  export default PlayersOnline;