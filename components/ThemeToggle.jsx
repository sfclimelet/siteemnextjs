"use client";

import React, { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

import { IconsBtnToggle } from "../Icons/Icons";

import styles from "../styles/btn-theme-toggle/Btn-toggle.scss";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
    id="BtnToggleTheme"
      type="button"
      aria-label="Alternar Tema"
      aria-pressed={theme === "dark"}
      onClick={toggleTheme}
      className={`${styles.toggle} ${theme === "light" ? styles.light : styles.dark}`}
    >
      {theme === "light" ? (<IconsBtnToggle.Moon />): (<IconsBtnToggle.Sun />)}
    </button>
  );
}