import React from 'react';
let arrGame = new Array(9).fill(null);
export default function GameArray(value, number){
    if((arguments[0]===undefined)||(arguments[1]===undefined)){
        return(arrGame)
    }else{
    arrGame.splice(number, 0, value);
    return(arrGame)}
}