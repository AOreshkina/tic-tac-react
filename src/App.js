import React, { useEffect, useReducer } from 'react' ;
import ReactDOM from 'react-dom';
import MyHeader from './PageElements/Header';
import ChoosePanel from './PageElements/ChoosePlayerPanel';


function App() {


  return (
    <div className ="container"> 
    <MyHeader/>
    <main>
    <ChoosePanel/>
    </main>
    </div>
  );
};

export default App;
