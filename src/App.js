import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  async function doStuff() {
    const stuff = await fetch('https://lfemlaxoo4.execute-api.us-east-1.amazonaws.com/dev/hello')
    window.ssss = stuff
    window.jj = await stuff.json()
    console.log(stuff)
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
