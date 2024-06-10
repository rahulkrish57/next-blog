"use client";

import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

const getThemeFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    const value = localStorage.getItem("theme");
    return value || "light";
  }
};

export const ThemeContextprovider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    return getThemeFromLocalStorage();
  });
  const toggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <ThemeContext.Provider value={(theme, toggle)}>
      {children}
    </ThemeContext.Provider>
  );
};
