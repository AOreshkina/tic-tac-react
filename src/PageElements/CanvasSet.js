import React from 'react';
import ButtonsDisabled from './ButtonsDisabled.js';
import GameArray from './GameArray.js';
import { useState } from 'react';
import SetImage from './SetImage.js';
import Cross from '../img/cross.jpg';
import Zero from '../img/zero.jpg';
import Empty from '../img/empty.jpg';


export default function CanvasSet(number, opponent){
    
    let xOrNull;
    let gameArray = new Array(9).fill(null);
    let numberArray =[]; 
    

    if(opponent==="human"){
        xOrNull = xOrNull==='x'?'0':'x';
        gameArray[number] = xOrNull;
        ButtonsDisabled(true, number);
        GameArray(xOrNull, number);
        numberArray.push(number);
        
      

        
    }else{
        if(opponent==="robot"){
            xOrNull = xOrNull==='x'?'0':'x';
            gameArray[number] = xOrNull;
            ButtonsDisabled(true, number);
            GameArray(xOrNull, number);
            let myImg = xOrNull==='x'?Cross:Zero;
            
            xOrNull = xOrNull==='x'?'0':'x';
            gameArray[number+1] = xOrNull;
            ButtonsDisabled(true, number+1);
            GameArray(xOrNull, number+1);
        
            
            numberArray.push(number);
            
        }
    }

    return(numberArray)


} 