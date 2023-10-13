import { useReducer, useState } from "react";
import Board from "./Board";
import "./GameStyle.css";
import { calculateWinner } from "./HEPLER";
const initialState = {
  board: Array(9).fill(null),
  xIsNext: true,
};
const Game = () => {
  const [state, dispactch] = useReducer(reducer, initialState);
  const [state, setState] = useState({
    board: Array(9).fill(null),
    xIsNext: true,
    name: "evondev",
  });

  const handleClick = (index) => {
    // const boardCopy = [...board];
    // if (winner || boardCopy[index]) return;
    // boardCopy[index] = xIsNext ? "x" : "o";
    // setBoard(boardCopy);
    // setXIsNext((xIsNext) => !xIsNext);
  };

  const handleReSetGane = () => {
    ... initialState,
    board = Array(9).fill(null);
    xIsNext = true;
  };
  return (
    <div>
      <Board cells={board} onClick={handleClick}></Board>
      <div className="game-winner">{winner ? `Winner is ${winner}` : ``}</div>
      <button onClick={handleReSetGane}>Reset game</button>
    </div>
  );
};

export default Game;
