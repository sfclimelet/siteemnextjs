"use client";

import React, { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

import styles from "../styles/_theme-btn-toggle.module.scss";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      type="button"
      aria-label="Alternar Tema"
      aria-pressed={theme === "dark"}
      onClick={toggleTheme}
      className={`${styles.toggle} ${theme === "light" ? styles.light : styles.dark}`}
    >
      <i className={`bi ${theme === "light" ? "bi-moon-fill" : "bi-sun-fill"}`}></i>
    </button>
  );
}