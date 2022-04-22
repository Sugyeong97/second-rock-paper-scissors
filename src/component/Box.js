import React from "react";

const Box = (props) => {
  let result;

  if (
    props.title === "Computer" &&
    props.result !== "Tie" &&
    props.title !== ""
  ) {
    result = props.result === "Win" ? "Lose" : "Win";
  } else {
    result = props.result;
  }

  return (
    <div className={`box ${result}`}>
      <h1>{props.title}</h1>
      <img className="item-img" src={props.item && props.item.img} />
      <h1>{result}</h1>
    </div>
  );
};

export default Box;
