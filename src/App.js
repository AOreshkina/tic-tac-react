import React, { useEffect, useReducer } from 'react' ;
import ReactDOM from 'react-dom';
import Human from './img/human.jpg';
import Ii from './img/ii.jpg';
import You from './img/you.jpg';
import Cross from './img/cross.jpg';
import Zero from './img/zero.jpg';
import Empty from './img/empty.jpg';
import { useState } from 'react';
import MyHeader from './PageElements/Header';

const iconSrcFirst = Human;
const iconSrcSecond = Ii;
const iconChoose = You;

const names = {
  human: 'Другой игрок',
  robo: 'Искусственный интеллект',
  you: 'Ты'
};

const iconsPath ={
  iconSrcFirst,
  iconSrcSecond,
  iconChoose
};

const buttonFlag = {
  on:false, 
  off:true
} ;

let textChoose = 'Выбери противника:';
let arrayTable = new Array(9).fill(Empty);
let winnersArray = new Array(9).fill(null);
let count = 0;
let previousMove ;
let getImg = true;
let disabledButtonCanvas = new Array(9).fill(true);
let winnerFlag;
 
function WhoIsWinner(myArray){
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (myArray[a] && myArray[a] === myArray[b] && myArray[a] === myArray[c]) {
      winnerFlag= myArray[a]==='x'?'Вы победили': 'Вы проиграли'
      console.log('winner',winnerFlag)
      return winnerFlag;
    }
  }
}
//Выбор игрока;

const MyGame  = () =>{
const [selected1, setSelectedFirst] = useState(iconsPath.iconSrcFirst);
 const [selected2, setSelectedSecond] = useState(iconsPath.iconSrcSecond);
const [selec3, setButtonSelec] = useState(buttonFlag.on);
const[name1, nameFirst] = useState(names.human);
const[name2, nameSecond] = useState(names.robo);

 function ChooseFirst(){
  setSelectedSecond(iconsPath.iconChoose);
  setButtonSelec(buttonFlag.off);
  nameSecond(names.you);
  textChoose='Статус игры:';
  for(let i=0;i<9;i++){
    disabledButtonCanvas[i]=false;
  }
  
 }

 function ChooseSecond(){
  setSelectedFirst(iconsPath.iconChoose);
  setButtonSelec(buttonFlag.off);
  nameFirst(names.you);
  textChoose='Статус игры:';
  console.log('qwerty',selected1 );
  for(let i=0;i<9;i++){
    disabledButtonCanvas[i]=false;
  }
 }

 const [u, StateImgZero]=useState(Empty);
 function SetImage(i){
   return(
     <img src= {arrayTable[i]}  alt='iconsTable'></img>
   );
   }

function CanvasSet (f){
   if(getImg===true){
     arrayTable[f] = Cross
     StateImgZero(Cross);
     disabledButtonCanvas[f]=true;
     winnersArray[f]='x';
     previousMove=f;
     count+=1 ; 
     console.log('cnt',previousMove)
     getImg = getImg===true?false:true;
     WhoIsWinner(winnersArray)
     if((winnerFlag==='Вы проиграли')||(winnerFlag==='Вы победили')){
      
        for(let i=0; i<9; i++){
         disabledButtonCanvas[i]=true;
        }
     }

    } else{
       arrayTable[f] = Zero;
       StateImgZero(Zero);
       disabledButtonCanvas[f]=true;
       winnersArray[f]='0';
       previousMove=f;
       count+=1 ; 
       console.log('cnt',previousMove)
       getImg = getImg===true?false:true;
       WhoIsWinner(winnersArray)
       if((winnerFlag==='Вы проиграли')||(winnerFlag==='Вы победили')){
        for(let i=0; i<9; i++){
         disabledButtonCanvas[i]=true;
        }
     }
      }
   };

 function ClickRemove(){
   arrayTable[previousMove] =Empty;
   StateImgZero(Empty);
   disabledButtonCanvas[previousMove]=false;
   count=count-1;
   getImg = getImg===true?false:true;
 }

 function NewGame(){
   //ChoosePlayer();
   setSelectedFirst(iconsPath.iconSrcFirst);
   setSelectedSecond(iconsPath.iconSrcSecond);
   setButtonSelec(buttonFlag.on);
   nameFirst(names.human);
   nameSecond(names.robo);
   winnerFlag=' ';
   textChoose='Выбери противника:'
   count=0;
   for(let i=0; i<9;i++){
    arrayTable[i]=Empty;
    StateImgZero(Empty);
    disabledButtonCanvas[i]=true;
   }


 }

class ReturnCanvas  extends React.Component{
 render(){
   
 return(
   <div className="canvas-and-end">
     <div className="canvas">
                  <button className="table_elem" onClick ={() => CanvasSet(0)} disabled={disabledButtonCanvas[0]} id = "0">{SetImage(0)}</button><button className="table_elem"  onClick ={() => CanvasSet(1)} disabled={disabledButtonCanvas[1]} id = "1">{SetImage(1)}</button><button className="table_elem"  onClick ={() => CanvasSet(2)} disabled={disabledButtonCanvas[2]} id = "2">{SetImage(2)}</button>
                      <button className="table_elem"  onClick ={() => CanvasSet(3)} disabled={disabledButtonCanvas[3]} id = "3">{SetImage(3)}</button><button className="table_elem"  onClick ={() => CanvasSet(4) } disabled={disabledButtonCanvas[4]} id = "4">{SetImage(4)}</button><button className="table_elem" onClick ={() => CanvasSet(5) } disabled={disabledButtonCanvas[5]} id = "5">{SetImage(5)}</button>
                     <button className="table_elem"  onClick ={() => CanvasSet(6) } disabled={disabledButtonCanvas[6]} id = "6">{SetImage(6)}</button><button className="table_elem" onClick ={() => CanvasSet(7) } disabled={disabledButtonCanvas[7]} id = "7">{SetImage(7)}</button><button className="table_elem" onClick ={() => CanvasSet(8) } disabled={disabledButtonCanvas[8]} id = "8">{SetImage(8)}</button>
                      

              </div>
              <div className = "end-game">
              <p className ="texts" id="counter">{count} </p>
              <button id="undo"onClick={ClickRemove} >Отменить ход</button>
              <button id="undo"onClick={NewGame} >Новая игра</button>
       
              </div>
   </div>
  
 );
 }

}
 return(
   <div className = "main-container">
   <div className='choose'>
     <p className="texts" id = "choose_opponent">{textChoose}</p>
     <div className ='choose-human'>
     <img src={selected1} alt='iconsPath'></img>
     <button className ="select-button" onClick={ChooseFirst}  disabled ={selec3}> {name1}</button>
   </div>
   <div id="victoria">
      <p className ="texts">{winnerFlag}</p>        
   </div>
   <div className ='choose-robot'>
     <img src={selected2}  alt='iconsPath'></img>
   <button className ="select-button" onClick={ChooseSecond} disabled ={selec3}  >{name2}</button>
   </div>
   </div>
   <ReturnCanvas/>
   </div>
 );
};

 

function App() {


  return (
    <div className ="container"> 
    <MyHeader/>
    <main>
      <MyGame/>
    </main>
    </div>
  );
};

export default App;
