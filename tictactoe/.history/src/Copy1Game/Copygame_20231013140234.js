import React, { useReducer } from "react";
import Board from "./Board";
import { calculateNewValue } from "@testing-library/user-event/dist/utils";
const initialState = {
  board: Array(9).fill(null),
  xIsNext: true,
};
const gameReducer = () => {};
const Copygame = () => {
  const [state, dispactch] = useReducer(gameReducer, initialState);
  const winner = calculateNewValue(state.board);
  return (
    <div>
      <Board></Board>
      <div className="game-winner"></div>
      <button></button>
    </div>
  );
};

export default Copygame;
