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

function EffectDesc() {
  const [resourceType, setResourceType] = useState("posts");
  const [items, setItems] = useState([]);
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  function incre() {
    dispatch({ type: "increment" });
  }
  function decre() {
    dispatch({ type: "decrement" });
  }
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
    console.log("Changed");
  }, [resourceType]);
  return (
    <div>
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
