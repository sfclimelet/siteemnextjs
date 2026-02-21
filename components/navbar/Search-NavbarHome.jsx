"use client";

import { useRef, useEffect } from "react";

export default function NavSearch({ item, openItem, setOpenItem }) {
  const searchRef = useRef(null);
  const inputRef = useRef(null);

  const isOpen = openItem === item.id;

  // Foco automático quando abrir
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  return (
    <li
      ref={searchRef}
      id={item.id}
      className={`nb-item nb-search ${isOpen ? "open" : ""}`}
    >
      {/* ÍCONE (desktop via CSS) */}
      <button
        type="button"
        className="nb-search-toggle"
        onClick={() =>
          setOpenItem(isOpen ? null : item.id)
        }
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