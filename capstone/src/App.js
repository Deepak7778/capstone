import React, {useState} from 'react';
import './App.css';




const App = ()=> {
  const [show, setShow] =  useState(false);
  return (
    <div className="App">
      <header className="App-header">
       
        <button onClick={()=>setShow(!show)}>Click Me!!</button>
   {  show && <p> My Capstone Project</p>}
      </header>
    </div>
  );
}

export default App;
