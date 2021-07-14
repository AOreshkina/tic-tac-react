import React from 'react' 
import ReactDOM from 'react-dom';
import Human from './img/human.jpg'
import Ii from './img/ii.jpg'
import You from './img/you.jpg'
import { useState } from 'react';


//import ChoosePlayer from './PageElements/ChoosePlayer';
//import FirstPlayer from './PageElements/IconFirst';
//import SecondPlayer from './PageElements/SecondPlayer';
import MyHeader from './PageElements/Header';

const iconSrcFirst = Human;
const iconSrcSecond = Ii;
const iconChoose = You;
const names = {
  human: 'Другой игрок',
  robo: 'Искусственный интеллект',
  you: 'Ты'
}
const iconsPath ={
  iconSrcFirst,
  iconSrcSecond,
  iconChoose


}
const buttonFlag = {
  on:false, 
  off:true
} ;

let textChoose = 'Выбери противника:'
 

const ChoosePlayer  = () =>{
const [selected1, setSelectedFirst] = useState(iconsPath.iconSrcFirst)
 const [selected2, setSelectedSecond] = useState(iconsPath.iconSrcSecond)
const [selec3, setButtonSelec] = useState(buttonFlag.on)
const[name1, nameFirst] = useState(names.human)
const[name2, nameSecond] = useState(names.robo)

 function ChooseFirst(){
  setSelectedSecond(iconsPath.iconChoose);
  setButtonSelec(buttonFlag.off);
  nameSecond(names.you)
  textChoose='Статус игры:'
 }

 function ChooseSecond(){
  setSelectedFirst(iconsPath.iconChoose);
  setButtonSelec(buttonFlag.off)
  nameFirst(names.you)
  textChoose='Статус игры:'
 }

 return(
   <div className='choose'>
     <p class="texts" id = "choose_opponent">{textChoose}</p>
     <div className ='choose-human'>
     <img src={selected1} alt='iconsPath'></img>
   <button onClick={ChooseFirst}  disabled ={selec3}> {name1}</button>
   </div>
   <div className ='choose-robot'>
     <img src={selected2}  alt='iconsPath'></img>
   <button onClick={ChooseSecond} disabled ={selec3}  >{name2}</button>
   </div>

   </div>
   
 )
}




     // <img src={iconsPath.iconSrcFirst} alt='' id="humanjpg" className = "image_on"></img>)
 

/*class SecondPlayer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      src: iconsPath.iconSrcSecond,
    };
  }
  render() {
    return (
      <img src ={this.state.src} alt='' id="humanjpg" className = "image_on"></img>)
  }

}*/



      // <button className="ChoosePlayer" onClick={() => <SecondPlayer src={this.state.heh}/>}>
      //   Человек
      // </button>)
   




function App() {


  return (
    <div className ="container"> 
    <MyHeader/>
    <main>
      <div className = "main-container">
        
          <ChoosePlayer/>
          

        
      </div>
    </main>
    </div>
  );
}

export default App;
