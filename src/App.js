import React from "react";
import "./styles/styles.css";
import "./App.css";

class App extends React.Component {
  state = {
    outcome: "",
    playerChoice: "",
    opponentChoice: "",
    playerMove: ["rock", "paper", "scissors"],
    opponentMove: ["rock", "paper", "scissors"]
  };

  playRock = () => {
    const randomMove = this.state.opponentMove;
    const computerMove =
      randomMove[Math.floor(Math.random() * randomMove.length)];
    this.setState({ opponentChoice: computerMove }, () => {
      const humanMove = this.state.playerMove[0];
      if (this.state.opponentChoice == "scissors") {
        this.setState({ outcome: "You win!" });
      } else if (this.state.opponentChoice == "paper") {
        this.setState({ outcome: "You lose!" });
      } else {
        this.setState({ outcome: "it's a draw" });
      }
    });
  };

  playPaper = () => {
    const randomMove = this.state.opponentMove;
    const computerMove =
      randomMove[Math.floor(Math.random() * randomMove.length)];
    this.setState({ opponentChoice: computerMove }, () => {
      const humanMove = this.state.playerMove[1];
      if (this.state.opponentChoice == "rock") {
        this.setState({ outcome: "You win!" });
      } else if (this.state.opponentChoice == "scissors") {
        this.setState({ outcome: "You lose!" });
      } else {
        this.setState({ outcome: "it's a draw" });
      }
    });
  };

  playScissors = () => {
    const randomMove = this.state.opponentMove;
    const computerMove =
      randomMove[Math.floor(Math.random() * randomMove.length)];
    this.setState({ opponentChoice: computerMove }, () => {
      const humanMove = this.state.playerMove[2];
      if (this.state.opponentChoice == "paper") {
        this.setState({ outcome: "You win!" });
      } else if (this.state.opponentChoice == "rock") {
        this.setState({ outcome: "You lose!" });
      } else {
        this.setState({ outcome: "it's a draw" });
      }
    });
  };

  render() {
    return (
      <div className="App">
        <body>
          <div id="opponent">
            <div
              id="rock"
              className={
                this.state.opponentChoice == "rock" ? "option" : "option hidden"
              }
            ></div>
            <div
              id="paper"
              className={
                this.state.opponentChoice == "paper"
                  ? "option"
                  : "option hidden"
              }
            ></div>
            <div
              id="scissors"
              className={
                this.state.opponentChoice == "scissors"
                  ? "option"
                  : "option hidden"
              }
            ></div>
          </div>
          <div id="outcome">{this.state.outcome}</div>
          <div id="player">
            <button
              id={this.state.playerMove[0]}
              className="option"
              onClick={x => this.playRock()}
            ></button>
            <button
              id="paper"
              className="option"
              onClick={x => this.playPaper()}
            ></button>
            <button
              id="scissors"
              className="option"
              onClick={x => this.playScissors()}
            ></button>
          </div>
        </body>
      </div>
    );
  }
}

export default App;
