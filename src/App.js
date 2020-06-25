import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [date, setDate] = useState()

  async function doStuff() {
    const stuff = await fetch('/.netlify/functions/hello')
    window.ssss = stuff
    const data = await stuff.json()
    console.log(data)
    setDate(data.date)
  }
  useEffect(() => {
    doStuff()
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
  <p>THIS IS THE DATE {date}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
