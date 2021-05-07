import React,  { useState, useEffect }  from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const PlayersOnline = () => {

    const [viewers, setViewers] = useState(45);


    const getRandomInt = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
    }

    const changeViewers = () => {
        let random = getRandomInt(1, 6); 
        if (random >= 5){
            return setViewers(viewers => viewers - 1); 
        }
        if (random <= 2){
            return setViewers(viewers => viewers + 1)
        }
        else {
            return setViewers(viewers => viewers)
            
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
        changeViewers();
        }, 2000);
        return () => clearInterval(interval);
    }, []);



    return (
        <div class="conteneurOrange">
            <FontAwesomeIcon icon="podcast"/>
            <h3>{viewers} joueurs inscrits</h3>
        </div>
    );
}
  export default PlayersOnline;