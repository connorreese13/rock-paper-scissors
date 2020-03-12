import React from "react";
import "./styles/styles.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <body>
        <div id="opponent">
          <div id="rock" class="option "></div>
          <div id="paper" class="option hidden"></div>
          <div id="scissors" class="option hidden"></div>
        </div>
        <div id="outcome"></div>
        <div id="player">
          <button id="rock" class="option" onclick="play('rock')"></button>
          <button id="paper" class="option" onclick="play('paper')"></button>
          <button
            id="scissors"
            class="option"
            onclick="play('scissors')"
          ></button>
        </div>
      </body>
    </div>
  );
}

export default App;
