import React from "react";
//Truyền vào props là các oject gồm (value, onClick())
const Cell = (props) => {
  return <div className="game-cell" onClick={props.onClick}></div>;
};

export default Cell;
