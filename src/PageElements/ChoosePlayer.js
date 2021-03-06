import React from 'react';
import Human from '../img/human.jpg'
import Robot from '../img/ii.jpg'
import You from '../img/you.jpg'
import { useState, useEffect } from 'react';
import GameStatusNow from './GameStatus.js'
import ButtonsDisabled from './ButtonsDisabled.js'


export default function ChooseMyOpponent(){
   
    let thisStatus = GameStatusNow();

    const [textChoose, Status] = useState('Choose your opponent:');
    const [selected1, OpponentHuman] = useState(Human);
    const [selected2, OpponentRobot] = useState(Robot);
    const [name1, NameButtonHuman] = useState('Human');
    const [name2, NameButtonRobot] = useState('Robot');
    const [selec,StopButton] = useState(false);
    const [opponent, SelectOpponent] = useState();
    const [disabled, SetDisabled] = useState(true);
    
        for(let i=0; i<9; i++){
            ButtonsDisabled(disabled, i);
        }
    

    function ChooseHumanOpponent(){
        Status('Game status:');
        OpponentRobot(You);
        NameButtonRobot('You');
        StopButton(true);
        SelectOpponent('human');
        SetDisabled(false);
        for(let i=0; i<9; i++){
            ButtonsDisabled(disabled,i);
        }
        
    }

    function ChooseRobotOpponent(){
        Status('Game status:');
        OpponentHuman(You);
        NameButtonHuman('You');
        StopButton(true);
        SelectOpponent('robot');
        SetDisabled(false);
        for(let i=0; i<9; i++){
            ButtonsDisabled(disabled,i);
        }
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
   console.log(opponent)

    return(
        retutnArray
    );
}