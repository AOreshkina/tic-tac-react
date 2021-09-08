import React from 'react';
import { useState } from 'react';
import Cross from '../img/cross.jpg';
import Zero from '../img/zero.jpg';
import Empty from '../img/empty.jpg';
import GameArray from './GameArray.js';

export default function SetImage(number, img){
   
    return(
      <img className = "table-img" src= {img}  alt='iconsTable'></img>
    );
    }
    