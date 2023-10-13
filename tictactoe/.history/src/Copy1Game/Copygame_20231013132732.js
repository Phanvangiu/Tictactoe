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
    case "":
      break;

    default:
      break;
  }
};
const Game = () => {
  const [state, dispach] = useReducer(gameReducer, initialState);
  const winner = calculateWinner(state.board);
  const handleClick = (index, winner) => {
    dispach({
      type: "CLICK",
      payload: {
        index,
        winner,
      },
    });
  };
  const handleReSetGame = () => {
    dispach({
      type: "RESET",
    });
  };
  return (
    <div>
      <Board cells={state.board} onClick={handleClick}></Board>
      <div className="game-winner">{winner ? `Winner is ${winner}` : ``}</div>
      <button onClick={handleReSetGame}>Reset game</button>
    </div>
  );
};

export default Game;
