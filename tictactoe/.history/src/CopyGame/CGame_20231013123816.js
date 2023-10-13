import { useReducer } from "react";
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
      const { board, xIsNext } = state;
      const { index, winner } = action.payload;
      if (winner || board[index]) return;
      const nextState = JSON.parse(JSON.stringify(state));
      nextState.board[index] = xIsNext ? "x" : "o";
      return nextState;

    default:
      break;
  }
  return state;
};

const Game = () => {
  const [state, dispactch] = useReducer(gameReducer, initialState);
  const winner = calculateWinner(state.board);

  const handleClick = (index) => {
    dispactch({
      type: "CLICK",
      payload: {
        index,
        winner,
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
