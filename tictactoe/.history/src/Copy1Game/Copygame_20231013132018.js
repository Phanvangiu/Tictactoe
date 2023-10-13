import { useState } from "react";
import Board from "./Board";
import "./GameStyle.css";
import { calculateWinner } from "./HEPLER";
const Game = () => {
  const handleClick = () => {};
  const handleReSetGame = () => {};
  return (
    <div>
      <Board cells={board} onClick={handleClick}></Board>
      <div className="game-winner">{winner ? `Winner is ${winner}` : ``}</div>
      <button onClick={handleReSetGame}>Reset game</button>
    </div>
  );
};

export default Game;
