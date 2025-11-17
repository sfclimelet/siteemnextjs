"use client";

import React, { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  // ============================
  // 1. Carrega tema inicial
  // ============================
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Se existir no localStorage, aplica
    const saved = localStorage.getItem("theme");

    if (saved === "light" || saved === "dark") {
      setTheme(saved);
    } else {
      // Tema padrão do sistema
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(prefersDark ? "dark" : "light");
    }
  }, []);

  // ============================
  // 2. Aplica a classe no body
  // ============================
  useEffect(() => {
    if (!theme) return;

    // Remove classes anteriores
    document.body.classList.remove("theme-light", "theme-dark");

    // Aplica classe atual
    document.body.classList.add(theme === "light" ? "theme-light" : "theme-dark");

    // Salva localStorage
    localStorage.setItem("theme", theme);

  }, [theme]);

  // ============================
  // 3. Função toggle do botão
  // ============================
  function toggleTheme() {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}