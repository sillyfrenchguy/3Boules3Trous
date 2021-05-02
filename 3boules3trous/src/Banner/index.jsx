import React from 'react';
import Jackpot from '../Jackpot/index';
import PlayersOnline from '../PlayersOnline';
import './Banner.css';

export const Banner = ({prize}) => {

    return (
        <div id="banner">
            <div class="conteneurBanner">
                <h1>3 boules 3 trous</h1>
            </div>
            <div class="conteneurBanner">
                <Jackpot prize={prize}/>
            </div>
            <div class="conteneurBanner">
                <PlayersOnline />
            </div>
        </div>
    )
}

export default Banner;