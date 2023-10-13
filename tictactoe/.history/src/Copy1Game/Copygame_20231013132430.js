import { useReducer, useState } from "react";
import Board from "./Board";
import "./GameStyle.css";
import { calculateWinner } from "./HEPLER";
const initialState = {
  board: Array(9).fill(null),
  xIsNext: true,
};
const gameReducer = (state, action) => {
  switch (action.type) {
    case value:
      break;

    default:
      break;
  }
};
const Game = () => {
  const [state, dispach] = useReducer(gameReducer, initialState);
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
