"use client";

import { useState, useRef, useEffect } from "react";

export default function NavSearch({ item }) {
  const [open, setOpen] = useState(false);
  const searchRef = useRef(null);
  const inputRef = useRef(null);

  // Fecha ao clicar fora
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Foco automático
  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
  }, [open]);

  return (
    <li
      ref={searchRef}
      id={item.id}
      className={`nb-item nb-search ${open ? "open" : ""}`}
    >
      {/* ÍCONE (só aparece no desktop via CSS) */}
      <button
        type="button"
        className="nb-search-toggle"
        onClick={() => setOpen((prev) => !prev)}
      >
        {item.icon && <item.icon className="nb-search-icon" />}
      </button>

      {/* INPUT + BOTÃO */}
      <div className="nb-search-box">
        <input
          ref={inputRef}
          type="text"
          placeholder="Search..."
          className="nb-search-input"
        />

        <button
          type="button"
          className="nb-search-submit"
        >
          Buscar
        </button>
      </div>
    </li>
  );
}