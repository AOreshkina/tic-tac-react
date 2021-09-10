import React from 'react';


let tableArray = new Array(9);

export default function ButtonsDisabled(value, number){
    
    if((arguments[0]===undefined)||(arguments[1]===undefined)){
        return(`${tableArray[number]}`)
    }else{
   tableArray[number]=value;
  
  console.log('tableArr',tableArray )
       return(`${tableArray[number]}`)
   
}}