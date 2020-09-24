import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Message} from './Message.js';

function App() {
  let [isMorning,setMorning]=useState(true);
  let [count,setCount]=useState(0);
  return(
    <div className={`box ${isMorning?"dayLight":""}`}>
     <h1>Good {isMorning?'Morning':'Night'}</h1>
     <Message counter={count}/>
     <button onClick={()=>setMorning(!isMorning)}>Update Day</button>
    <button onClick={()=>setCount(count+1)}>Update Count</button>
    </div>

  );
}

export default App;
