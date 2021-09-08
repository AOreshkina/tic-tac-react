import React from 'react';


export default function ButtonsDisabled(value, number){
    let tableArray = new Array(9);
   tableArray[number]=value;
   let arrArgs = Array.from(arguments); 
   if((arrArgs[0]===undefined)&&(arrArgs[1]===undefined)){
       return(tableArray)
   }
}