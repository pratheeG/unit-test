import "./App.css";

import React from "react";
import logo from "./logo.svg";

function App() {
  const secret = "Prem Test";
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React { secret }
        </a>
      </header>
    </div>
  );
}

export default App;
