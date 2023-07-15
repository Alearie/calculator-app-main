import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <h2> calc</h2>
        <div className="toggle-state-numbers">
          <h5>1 2 3</h5>
        </div>
        <div className="toggle-container">
          <div className="tri-state-toggle">
            <h5> THEME </h5>
            <input className="button" type="radio" name="toggle" id="one" />
            <input className="button" type="radio" name="toggle" id="two" />
            <input className="button" type="radio" name="toggle" id="three" />
          </div>
        </div>
        <div className="grid-output">399,981</div>
        <div className="grid-container">
          <button className="grid-item dark">7</button>
          <button className="grid-item dark">8</button>
          <button className="grid-item dark">9</button>
          <button className="grid-item light">DEL</button>
          <button className="grid-item dark">4</button>
          <button className="grid-item dark">5</button>
          <button className="grid-item dark">6</button>
          <button className="grid-item dark">+</button>
          <button className="grid-item dark">1</button>
          <button className="grid-item dark">2</button>
          <button className="grid-item dark">3</button>
          <button className="grid-item dark">-</button>
          <button className="grid-item dark">.</button>
          <button className="grid-item dark">0</button>
          <button className="grid-item dark">/</button>
          <button className="grid-item dark">x</button>
          <button className="grid-item reset light">RESET</button>
          <button className="grid-item equals">=</button>
        </div>
      </div>
    </>
  );
}

export default App;
