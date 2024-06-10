"use client";

import { useContext } from "react";
import styles from "./themeToggle.module.css";
import Image from "next/image";
import { ThemeContext } from "@/context/ThemeContext";
const ThemeToggle = () => {
  const { theme, toggle } = useContext(ThemeContext);
  console.log("theme", theme);
  return (
    <div className={styles.container} onClick={toggle}>
      <Image src="/moon.png" alt="moon.png" width={14} height={14} />
      <div className={styles.ball}></div>
      <Image src="/sun.png" alt="sun.png" width={14} height={14} />
    </div>
  );
};

export default ThemeToggle;
