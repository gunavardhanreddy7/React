import React, { useContext } from "react";
import { Themecontent, Themecontext } from "./Themecontent";

function ThemeDisplay() {
  const { theme } = useContext(Themecontext);
  return (
    <div
      style={{
        background: theme === "light" ? "white" : "black",
        color: theme === "light" ? "black" : "white",
      }}
    >
      Current Theme: {theme}
    </div>
  );
}

export default ThemeDisplay;
