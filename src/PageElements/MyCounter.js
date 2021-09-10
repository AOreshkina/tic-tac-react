import React from 'react';

export default function MyCounter(f){
    let count;
    if (arguments[0]===1){
        count=count+arguments[0];
    }else{
        count = 0;
    }
    return(
        <p className ="texts" id="counter">{count} </p>
        
    )

} 
