import React from "react";
import Cell from "./Cell";
const Board = (props) => {
  // const cells = [null, null, null, "x", "x", "x", null, null, null];
  return (
    <div className="game-board">
      {props.cells.map((item, index) => (
        <Cell
          key={index}
          value={item}
          onClick={() => props.onClick(index)}
          className = {item === 'x' ? 'is-x'}
        ></Cell>
      ))}
    </div>
  );
};

export default Board;
