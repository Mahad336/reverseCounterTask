import React from "react";

function Counter(props) {
  return (
    <div style={{ fontSize: 30 }}>
      <span>{props.time.m >= 10 ? props.time.m : "0" + props.time.m} : </span>
      <span>{props.time.s >= 10 ? props.time.s : "0" + props.time.s} : </span>
      <span>{props.time.ms >= 10 ? props.time.ms : "0" + props.time.ms} </span>
    </div>
  );
}
export default Counter;
