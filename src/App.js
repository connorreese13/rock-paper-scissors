import React from "react";
import "./styles/styles.css";
import "./App.css";

class App extends React.Component {
  state = {
    outcome: "",
    playerChoice: "",
    oppenentChoice: "",
    playerMove: ["rock", "paper", "scissors"],
    opponentMove: ["rock", "paper", "scissors"]
  };

  play = () => {
    //e.preventDefault();
    console.log(this.state.outcome);
    const randomMove = this.state.opponentMove;
    const computerChoice =
      randomMove[Math.floor(Math.random() * randomMove.length)];
    const humanMove = this.state.playerMove[0];
    if (computerChoice === "scissors") {
      this.setState({ outcome: "You win!" });
      console.log(this.state.outcome);
    } else if (computerChoice === "paper") {
      this.setState({ outcome: "You lose!" });
    } else {
      this.setState({ outcome: "it's a draw" });
    }
  };

  render() {
    return (
      <div className="App">
        <body>
          <div id="opponent">
            <div id="rock" className="option hidden"></div>
            <div id="paper" className="option hidden"></div>
            <div id="scissors" className="option hidden"></div>
          </div>
          <div id="outcome">{this.state.outcome}</div>
          <div id="player">
            <button
              id={this.state.playerMove[0]}
              className="option"
              onClick={x => this.play()}
            ></button>
            <button
              id="paper"
              className="option"
              onClick="play('paper')"
            ></button>
            <button
              id="scissors"
              className="option"
              onClick="play('scissors')"
            ></button>
          </div>
        </body>
      </div>
    );
  }
}

export default App;
