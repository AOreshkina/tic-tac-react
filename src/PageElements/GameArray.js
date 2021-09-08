import React from 'react';

export default function GameArray(value, number){
    let arrGame = new Array(9).fill(null);
    arrGame.splice(number, 0, value);
    return(arrGame)
}