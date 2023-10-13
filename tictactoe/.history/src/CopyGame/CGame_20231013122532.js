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
    case "CLICK":
      console.log(state, action.payload);
      break;

    default:
      break;
  }
  return state.boardCopy;
};

const Game = () => {
  const [state, dispactch] = useReducer(gameReducer, initialState);
  const winner = calculateWinner(initialState.board);

  const handleClick = (index) => {
    const boardCopy = [...state.board];
    if (winner || boardCopy[index]) return;
    dispactch({
      type: "CLICK",
      payload: {
        index,
      },
    });
  };

  const handleReSetGane = () => {};
  return (
    <div>
      <Board cells={state.board} onClick={handleClick}></Board>
      <div className="game-winner">{winner ? `Winner is ${winner}` : ``}</div>
      <button onClick={handleReSetGane}>Reset game</button>
    </div>
  );
};

export default Game;
