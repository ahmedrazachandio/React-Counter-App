import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  
  
  const [theme, setTheme] = useState(0);


  // const add = () =>{
  //   setCount(count + 1);
  //   }
  //   // console.log("this is add func")

  // }
  // const sub = () =>{
  //   // console.log("this is sub func")
  //   setCount(count - 1);


  // }

  return (
    <div className="App">
      <div className="container">
        <div className="wrapper">
          <h1> Counter App</h1>
          <div className="banner-image">{count} </div>
        </div>
        <div className="button-wrapper">
          <button className="btn outline" onClick={() => {setCount(count + 1)}}>Addition</button>
          <button className="btn fill" onClick={() => { setCount(count - 1)}}>Subtraction</button>

          {/* <button className="btn outline" onClick={add()}>Addition</button>
          <button className="btn fill" onClick={sub()}>Subtraction</button> */}
        </div>
      </div>
    </div>
  );
}

export default App;
