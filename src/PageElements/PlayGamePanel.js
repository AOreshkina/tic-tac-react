import React from 'react';
import MyCounter from './MyCounter.js';
import Reset from './ResetFunction.js';
import NewGame from './NewGameFunction.js';
import GameTable from './GameTable.js';

export default function PlayGame(){      

    return(
      <div className="canvas-and-end">
        <div className="canvas" id= "myCanvas">
                  <GameTable/>    
   
                 </div>
                 <div className = "end-game">
                 <MyCounter/>
                 <button id="undo"onClick={()=>Reset()} >Undo</button>
                 <button id="undo"onClick={()=>NewGame()} >New game</button>
          
                 </div>
      </div>
     
    );

}