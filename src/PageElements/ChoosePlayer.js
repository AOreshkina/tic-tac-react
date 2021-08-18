import React from 'react';
import Human from '../img/human.jpg'
import Robot from '../img/ii.jpg'
import You from '../img/you.jpg'
import { useState } from 'react';
import GameStatusNow from './GameStatus.js'


export default function ChooseMyOpponent(){
   
    let thisStatus = GameStatusNow();
   // let selec = false;
    let opponent;
    const [textChoose, Status] = useState('Выбери противника:');
    const [selected1, OpponentHuman] = useState(Human);
    const [selected2, OpponentRobot] = useState(Robot);
    const [name1, NameButtonHuman] = useState('Человек');
    const [name2, NameButtonRobot] = useState('Компьютер');
    const [selec,StopButton] = useState(false);

    function ChooseHumanOpponent(){
        Status('Статус игры:');
        OpponentRobot(You);
        NameButtonRobot('Ты');
        StopButton(true);
        opponent = 'human';
    }

    function ChooseRobotOpponent(){
        Status('Статус игры:');
        OpponentHuman(You);
        NameButtonHuman('Ты');
        StopButton(true);
        opponent = 'human';
    }
    let thisContainer =  <div>
    <p className="texts" id = "choose_opponent">{textChoose}</p>
    <div className ='choose-human'>
        <img src={selected1} alt='iconsPath'></img>
        <button className ="select-button" onClick={ChooseHumanOpponent}  disabled ={selec} 
        href ="#myCanvas"> {name1}</button>
    </div>
    <div id = "victoria">
        <p>{thisStatus}</p>
    </div>
    <div className ='choose-robot'>
        <img src={selected2}  alt='iconsPath'></img>
        <button className ="select-button" onClick={ChooseRobotOpponent} 
        disabled ={selec} href ="#myCanvas">{name2}</button>
    </div>
</div>;
    
    let retutnArray = [opponent, thisContainer]


    return(
        retutnArray
    );
}