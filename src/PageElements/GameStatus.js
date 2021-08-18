import React from 'react';


export default function GameStatusNow (){
    let e;
    let status;
        if(e==='xwin'){
            status = 'Ты победил!';
    
        }else{
            if(e==='0win'){
                status = 'Ты проиграл';
            }
        }
    return(
        status
    );

}