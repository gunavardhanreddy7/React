import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import EffectDesc from "./EffectDesc";

function App() {
  const [state, setState] = useState({ count: 10, theme: "blue" });
  const [counter, setcounter] = useState(() => {
    console.log("First Time");
    return 99;
  });
  const count = state.count;
  const theme = state.theme;

  function setCount() {
    // setVal((val) => val - 1);
    // setVal((val) => val - 1);
    // setVal(val - 1);
    setState((prevstate) => {
      return { ...prevstate, count: state.count - 1 };
    });
  }
  function setCountINC() {
    setcounter(counter + 1);
    console.log(counter);
  }
  return (
    <div>
      <div className="Incrementor">
        <button onClick={setCount}>-</button>
        <span className="val">
          {state.count}
          {state.theme}
          {counter}
        </span>
        <button onClick={setCountINC}>+</button>
      </div>
      <div>
        <EffectDesc />
      </div>
    </div>
  );
}

export default App;
