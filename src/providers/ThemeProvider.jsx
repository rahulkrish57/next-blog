"use client";

import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

const ThemeProvider = ({ children }) => {
  const { theme, toggle } = useContext(ThemeContext);
  return <div value={(theme, toggle)}>{children}</div>;
};

export default ThemeProvider;
