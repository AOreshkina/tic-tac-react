import React from 'react';
import ChooseMyOpponent from './ChoosePlayer.js';

export default function ChoosePanel(){
    let chooseContainer = ChooseMyOpponent();
    let panelContainer = chooseContainer[1];
    return(
        <div className = "choose">{panelContainer}</div>
    )


}