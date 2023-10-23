import React, { useEffect, useState } from "react";
import { ThemeProvider } from "./Themecontent";
import ThemeDisplay from "./ThemeDisplay";
import ThemeButton from "./ThemeButton";

function EffectDesc() {
  const [resourceType, setResourceType] = useState("posts");
  const [items, setItems] = useState([]);
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
    </div>
  );
}

export default EffectDesc;
