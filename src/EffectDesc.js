import React, { useEffect, useReducer, useState } from "react";
import { ThemeProvider } from "./Themecontent";
import ThemeDisplay from "./ThemeDisplay";
import ThemeButton from "./ThemeButton";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}
function red(state, action) {
  switch (action.type) {
    case "ADD_TO_DO":
      return [...state, action.payload.name];
  }
}

function EffectDesc() {
  const [resourceType, setResourceType] = useState("posts");
  const [items, setItems] = useState([]);
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const [todos, disp] = useReducer(red, []);
  const [name, setName] = useState("");

  function incre() {
    dispatch({ type: "increment" });
  }
  function decre() {
    dispatch({ type: "decrement" });
  }
  function handleSubmit(e) {
    e.preventDefault();
    disp({ type: "ADD_TO_DO", payload: { name: name } });
    setName("");
  }
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
    console.log("Changed");
  }, [resourceType]);
  console.log(todos);
  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </form>
      </div>
      <button onClick={() => setResourceType("posts")}>Posts</button>
      <button onClick={() => setResourceType("users")}>users</button>
      <button onClick={() => setResourceType("Comments")}>Comments</button>
      <h1>{resourceType}</h1>
      {items.map((item) => {
        return <pre>{JSON.stringify(item)}</pre>;
      })}
      <div>
        <ThemeProvider>
          <div>
            <h1> Theme Switcher</h1>
            <ThemeButton />

            <ThemeDisplay />
          </div>
        </ThemeProvider>
      </div>
      <div>
        <button onClick={incre}>Inc</button>
        <span>{state.count}</span>
        <button onClick={decre}>Dec</button>
      </div>
    </div>
  );
}

export default EffectDesc;
