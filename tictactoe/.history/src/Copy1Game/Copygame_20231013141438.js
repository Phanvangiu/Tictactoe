import React, { useReducer } from "react";
import Board from "./Board";
import { calculateNewValue } from "@testing-library/user-event/dist/utils";
const initialState = {
  board: Array(9).fill(null),
  xIsNext: true,
};
const gameReducer = (state, action) => {
  switch (action.type) {
    case "CLICK": {
      const [board, xIsNext] = state;
      const [index, winner] = action.payload;

      return null;
    }

    default:
      break;
  }
};
const Copygame = () => {
  const [state, dispactch] = useReducer(gameReducer, initialState);
  const winner = calculateNewValue(state.board);
  const handleClick = (index) => {
    dispactch({
      type: "CLICK",
      payload: index,
      winner,
    });
  };
  const handleResetGame = () => {
    dispactch({
      type: "RESET",
    });
  };
  return (
    <div>
      <Board cells={state.board} onClick={handleClick}></Board>
      <div className="game-winner">`Winner is ${winner ? "x" : "o"}`</div>
      <button onClick={handleResetGame}>Reset game</button>
    </div>
  );
};

export default Copygame;
