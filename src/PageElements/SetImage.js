import React from 'react';
import { useState } from 'react';
import Cross from '../img/cross.jpg';
import Zero from '../img/zero.jpg';
import Empty from '../img/empty.jpg';
import GameArray from './GameArray.js';

export default function SetImage(number){
    
  let thisArr =new Array(9);
  const [setDisbldIntermediateValue, setDisabledIntermediate] = useState(GameArray());
  thisArr = setDisbldIntermediateValue;
  console.log("elem", thisArr)
    
    return(
      <img className = "table-img" src= {thisArr[number]}  alt='iconsTable'></img>
    );
    }
    