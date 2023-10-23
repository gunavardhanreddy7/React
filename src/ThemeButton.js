import React, { useContext } from "react";
import { Themecontent, Themecontext } from "./Themecontent";

function ThemeButton() {
  const { theme, toggleTheme } = useContext(Themecontext);
  return (
    <button
      onClick={toggleTheme}
      style={{
        background: theme === "light" ? "white" : "black",
        color: theme === "light" ? "black" : "white",
      }}
    >
      Toggle Theme
    </button>
  );
}

export default ThemeButton;
