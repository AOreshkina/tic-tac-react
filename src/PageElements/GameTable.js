import React from 'react';
import ChooseMyOpponent from './ChoosePlayer.js';
import ButtonsDisabled from './ButtonsDisabled.js'
import NumberArray from './NumberArray.js'
import MyCounter from './MyCounter.js'
import SetImage from './SetImage.js'
import GameArray from './GameArray.js';
import { useState } from 'react';
import Cross from '../img/cross.jpg';
import Zero from '../img/zero.jpg';
import Empty from '../img/empty.jpg';


export default function GameTable(){
    //Getting the opponent's name
    let count = 0;
    let whoIsYourOpponentFunc = ChooseMyOpponent();
    let whoIsYourOpponent = whoIsYourOpponentFunc[0];
    //console.log('hhhjhjkhk', whoIsYourOpponent);
    
   
  
    const [arrayImg, SetGameArray] = useState(Empty)
    const [arrayDis, SetDisabledArray] = useState(false);
    const [arrayNum, SetNumberArray] = useState(0);
    const [setCnt, SetCounter] = useState(0);
    const [setDisbld, setDisabled]=useState();
    let canvasArray = new Array(9);
    for(let i=0; i<9; i++){
      GameArray(arrayImg, i)

    }
 
 
   console.log('kkk',canvasArray)
   function CanvasSet(number, opponent){
    
      let xOrNull;
      let gameArray = new Array(9).fill(null);
      
      if(opponent==="human"){
          xOrNull = xOrNull==='x'?'0':'x';
          if(xOrNull==='x'){
            SetGameArray(Cross);
            GameArray(arrayImg,number);
            SetDisabledArray(true);
            SetNumberArray(number);
            NumberArray(arrayNum);
            count=count+1;
            MyCounter(1);
            
          }else{
            if(xOrNull==='0'){
              SetGameArray(Zero);
            GameArray(arrayImg,number);
            SetDisabledArray(true);
            ButtonsDisabled(arrayDis, number);
            SetNumberArray(number);
            NumberArray(arrayNum);
            count=count+1;
            MyCounter(1);
            }
          }
          
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
          
              
              
              
          }
      }
  
      
  
  } 

    return(
        <table>
        <tbody>
              <tr><td><button className="table_elem" onClick ={()=>CanvasSet(0, whoIsYourOpponent)}
               disabled={ButtonsDisabled(setDisbld,0)} id = "0">{SetImage(0)}</button></td>
               <td><button className="table_elem" onClick ={()=>CanvasSet(1, whoIsYourOpponent)} 
               disabled={ButtonsDisabled(setDisbld,1)} id = "1">{SetImage(1)}</button></td>
               <td><button className="table_elem" onClick ={()=>CanvasSet(2, whoIsYourOpponent)} 
               disabled={ButtonsDisabled(setDisbld,2)} id = "2">{SetImage(2)}</button></td></tr> 
              <tr><td><button className="table_elem" onClick ={()=>CanvasSet(3, whoIsYourOpponent)} 
              disabled={ButtonsDisabled(setDisbld,3)} id = "3">{SetImage(3)}</button></td>
              <td><button className="table_elem" onClick ={()=>CanvasSet(4, whoIsYourOpponent)} 
              disabled={ButtonsDisabled(setDisbld,4)} id = "4">{SetImage(4)}</button></td>
              <td><button className="table_elem" onClick ={()=>CanvasSet(5, whoIsYourOpponent)} 
              disabled={ButtonsDisabled(setDisbld,5)} id = "5">{SetImage(5)}</button></td></tr> 
              <tr><td><button className="table_elem" onClick ={()=>CanvasSet(6, whoIsYourOpponent)} 
              disabled={ButtonsDisabled(setDisbld,6)} id = "6">{SetImage(6)}</button></td>
              <td><button className="table_elem" onClick ={()=>CanvasSet(7, whoIsYourOpponent)} 
              disabled={ButtonsDisabled(setDisbld,7)} id = "7">{SetImage(7)}</button></td><td><button className="table_elem" onClick ={()=>CanvasSet(8, whoIsYourOpponent)} disabled={ButtonsDisabled(setDisbld,8)} id = "8">{SetImage(8)}</button></td></tr> 
        </tbody>
      </table>  
    )


}