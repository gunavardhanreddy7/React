import React, { createContext, useContext, useState } from "react";

const Themecontext = createContext();

function ThemeProvider({ children }) {
  const [theme, settheme] = useState("light");

  const toggleTheme = () => {
    settheme((prevtheme) => (prevtheme === "light" ? "dark" : "light"));
  };
  return (
    <Themecontext.Provider value={{ theme, toggleTheme }}>
      {children}
    </Themecontext.Provider>
  );
}

function Themecontent() {
  return <div></div>;
}

export { ThemeProvider, Themecontext };
