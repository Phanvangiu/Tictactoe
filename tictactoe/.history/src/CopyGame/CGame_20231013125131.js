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
    case "CLICK": {
      const { board, xIsNext } = state;
      const { index, winner } = action.payload;
      if (winner || board[index]) return state;
      const nextState = JSON.parse(JSON.stringify(state));
      nextState.board[index] = xIsNext ? "x" : "o";
      nextState.xIsNext = !xIsNext;
      return nextState;
    }
    case "RESET": {
      const { initialState } = {
        board: Array(9).fill(null),
        xIsNext: true,
      };
      state = initialState;
      return state;
    }

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

  const handleReSetGane = () => {
    dispactch({
      type: "RESET",
      payload: {
        initialState,
      },
    });
  };
  return (
    <div>
      <Board cells={state.board} onClick={handleClick}></Board>
      <div className="game-winner">{winner ? `Winner is ${winner}` : ``}</div>
      <button onClick={handleReSetGane}>Reset game</button>
    </div>
  );
};

export default Game;
