import React from "react";
//Truyền vào props là các oject gồm (value, onClick())
const Cell = (props) => {
  return (
    <div className={`game-cell ${props.className}`} onClick={props.onClick}>
      {props.value}
    </div>
  );
};

export default Cell;
