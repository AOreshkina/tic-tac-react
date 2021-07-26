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
let count = 0;
let previousMove ;
let getImg = true;
let disabledButtonCanvas = new Array(9).fill(false);
 
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
  
 }

 function ChooseSecond(){
  setSelectedFirst(iconsPath.iconChoose);
  setButtonSelec(buttonFlag.off);
  nameFirst(names.you);
  textChoose='Статус игры:';
  console.log('qwerty',selected1 );
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
     previousMove=f;
     count+=1 ; 
     console.log('cnt',previousMove)
     getImg = getImg===true?false:true;
    } else{
       arrayTable[f] = Zero;
       StateImgZero(Zero);
       disabledButtonCanvas[f]=true;
       previousMove=f;
       count+=1 ; 
       console.log('cnt',previousMove)
       getImg = getImg===true?false:true;
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


 }

class ReturnCanvas  extends React.Component{
 render(){
   
 return(
   <div>
     <div className="canvas">
                  <table id="table_c" >
                    
                      <tr><td  id="a1"><button className="table_elem" onClick ={() => CanvasSet(0)} disabled={disabledButtonCanvas[0]} id = "0">{SetImage(0)}</button></td><td id="a2"><button className="table_elem"  onClick ={() => CanvasSet(1)} disabled={disabledButtonCanvas[1]} id = "1">{SetImage(1)}</button></td><td id="a3"><button className="table_elem"  onClick ={() => CanvasSet(2)} disabled={disabledButtonCanvas[2]} id = "2">{SetImage(2)}</button></td></tr> 
                      <tr><td  id="b1"><button className="table_elem"  onClick ={() => CanvasSet(3)} disabled={disabledButtonCanvas[3]} id = "3">{SetImage(3)}</button></td><td id="b2"><button className="table_elem"  onClick ={() => CanvasSet(4) } disabled={disabledButtonCanvas[4]} id = "4">{SetImage(4)}</button></td><td id="b3"><button className="table_elem" onClick ={() => CanvasSet(5) } disabled={disabledButtonCanvas[5]} id = "5">{SetImage(5)}</button></td></tr> 
                      <tr><td  id="c1"><button className="table_elem"  onClick ={() => CanvasSet(6) } disabled={disabledButtonCanvas[6]} id = "6">{SetImage(6)}</button></td><td id="c2"><button className="table_elem" onClick ={() => CanvasSet(7) } disabled={disabledButtonCanvas[7]} id = "7">{SetImage(7)}</button></td><td id="c3"><button className="table_elem" onClick ={() => CanvasSet(8) } disabled={disabledButtonCanvas[8]} id = "8">{SetImage(8)}</button></td></tr>
                      </table>

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
   <button onClick={ChooseFirst}  disabled ={selec3}> {name1}</button>
   </div>
   <div className ='choose-robot'>
     <img src={selected2}  alt='iconsPath'></img>
   <button onClick={ChooseSecond} disabled ={selec3}  >{name2}</button>
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
