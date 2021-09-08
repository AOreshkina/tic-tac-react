import React from 'react';
import ChooseMyOpponent from './ChoosePlayer.js';
import CanvasSet from './CanvasSet.js';
import ButtonsDisabled from './ButtonsDisabled.js'
import SetImage from './SetImage.js'

export default function GameTable(){
    //Getting the opponent's name
    let whoIsYourOpponentFunc = ChooseMyOpponent();
    let whoIsYourOpponent = whoIsYourOpponentFunc[0];
    let disabledButtonCanvas  = ButtonsDisabled();
    

    return(
        <table>
        <tbody>
              <tr><td><button className="table_elem" onClick ={() => CanvasSet(0, whoIsYourOpponent)} disabled={disabledButtonCanvas[0]} id = "0">{ SetImage(0)}</button></td><td><button className="table_elem"  onClick ={() => CanvasSet(1, whoIsYourOpponent)} disabled={disabledButtonCanvas[1]} id = "1">{SetImage(1)}</button></td><td><button className="table_elem"  onClick ={() => CanvasSet(2, whoIsYourOpponent)} disabled={disabledButtonCanvas[2]} id = "2">{SetImage(2)}</button></td></tr> 
              <tr><td><button className="table_elem" onClick ={() => CanvasSet(3, whoIsYourOpponent)} disabled={disabledButtonCanvas[3]} id = "3">{SetImage(3)}</button></td><td><button className="table_elem"  onClick ={() => CanvasSet(4, whoIsYourOpponent) } disabled={disabledButtonCanvas[4]} id = "4">{SetImage(4)}</button></td><td><button className="table_elem" onClick ={() => CanvasSet(5, whoIsYourOpponent) } disabled={disabledButtonCanvas[5]} id = "5">{SetImage(5)}</button></td></tr> 
              <tr><td><button className="table_elem" onClick ={() => CanvasSet(6, whoIsYourOpponent) } disabled={disabledButtonCanvas[6]} id = "6">{SetImage(6)}</button></td><td><button className="table_elem" onClick ={() => CanvasSet(7, whoIsYourOpponent) } disabled={disabledButtonCanvas[7]} id = "7">{SetImage(7)}</button></td><td><button className="table_elem" onClick ={() => CanvasSet(8, whoIsYourOpponent) } disabled={disabledButtonCanvas[8]} id = "8">{SetImage(8)}</button></td></tr> 
        </tbody>
      </table>  
    )


}