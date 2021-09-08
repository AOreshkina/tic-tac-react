import React from 'react';

export default function MyCounter(f){
    let count;
    if (f===1){
        count=count+f;
    }else{
        count = 0;
    }
    return(
        <p className ="texts" id="counter">{count} </p>
        
    )

} 
