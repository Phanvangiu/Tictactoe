import React from "react";
import Cell from "./Cell";
const Board = () => {
  const cells = [null, null, null, "x", "x", "x", null, null, null];
  return (
    <div className="game-board">
      {PaymentResponse.cells.map((item, index) => (
        <Cell key={index} />
      ))}
    </div>
  );
};

export default Board;
