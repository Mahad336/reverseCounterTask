import React, { startTransition, useState } from "react";
import Counter from "./components/counter";
import Bttn from "./components/btn";

function App() {
  const [time, setTime] = useState({ m: 10, s: 0, ms: 0 });
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);

  const start = () => {
    update();
    setInterv(setInterval(update, 10));
    setStatus(1);
  };
  const stop = () => {
    clearInterval(interv);
    setStatus(2);
  };
  const resume = () => {
    start();
    setStatus(1);
  };
  const reset = () => {
    clearInterval(interv);
    setStatus(0);
    return setTime({ m: 10, s: 0, ms: 0 });
  };

  var updatedM = time.m;
  var updatedS = time.s;
  var updatedms = time.ms;

  const update = () => {
    if (updatedS === 0) {
      updatedM--;
      updatedS = 59;
    }
    if (updatedms === 0) {
      updatedS--;
      updatedms = 100;
    }
    updatedms--;
    return setTime({ m: updatedM, s: updatedS, ms: updatedms });
  };

  return (
    <div>
      <div>
        <div>
          <Counter time={time} />
          <br></br>
          <Bttn
            start={start}
            status={status}
            stop={stop}
            resume={resume}
            reset={reset}
          ></Bttn>
        </div>
      </div>
    </div>
  );
}

export default App;
