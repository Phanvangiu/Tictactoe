import { useState } from "react";
import Board from "./Board";
import "./GameStyle.css";
import { calculateNewValue } from "@testing-library/user-event/dist/utils";

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateNewValue();

  const handleClick = () => {};
  return (
    <div>
      <Board cells={board} onClick={handleClick}></Board>
    </div>
  );
};

export default Game;
