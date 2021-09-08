import React from 'react' 
import Logo from '../img/logo.jpg'


export default function MyHeader(){

    return(
        <header>
            <div className ="header-container">
                <img src={Logo} alt=""></img>
                <p>TIC-TAC-toe</p> 
            </div>    
         </header>
         
    )
}