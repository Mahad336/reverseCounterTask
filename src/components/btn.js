import React from "react";

const Bttn = (props) => {
  return (
    <div
      className="btns"
      style={{
        fontSize: 50,
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        backgroundColor: "Black",
        marginLeft: 600,
        marginRight: 600,
        borderRadius: 30,
      }}
    >
      {props.status === 0 ? <button onClick={props.start}> Start </button> : ""}

      {props.status === 1 ? <button onClick={props.stop}>Stop</button> : ""}
      {props.status === 1 ? <button onClick={props.reset}>Reset</button> : ""}

      {props.status === 2 ? <button onClick={props.resume}>Resume</button> : ""}
      {props.status === 2 ? <button onClick={props.reset}>Reset</button> : ""}
    </div>
  );
};

export default Bttn;
