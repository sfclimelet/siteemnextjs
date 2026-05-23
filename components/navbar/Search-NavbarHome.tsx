"use client";

import { useRef, useEffect } from "react";
import React from "react";

// ================= TYPES =================

export interface SearchItem {
  id: string;
  label: string;
  icon?: React.ComponentType<{ className?: string }>;
  backIcon?: React.ComponentType<{ className?: string }>;
}

interface NavSearchProps {
  item: SearchItem;
  openItem: string | null;
  setOpenItem: React.Dispatch<React.SetStateAction<string | null>>;
}

export default function NavSearch({
  item,
  openItem,
  setOpenItem,
}: NavSearchProps) {
  const searchRef = useRef<HTMLLIElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const isOpen: boolean = openItem === item.id;
  const Icon = item.icon;
  const BackIcon = item.backIcon;

  // ================= AUTO FOCUS =================
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
      {/* ================= ÍCONE ================= */}
      <button
        type="button"
        className={`nb-search-toggle ${isOpen ? "is-hidden" : ""}`}
        aria-label={isOpen ? "Fechar busca" : "Abrir busca"}
        aria-expanded={isOpen}
        title={isOpen ? "Fechar busca" : "Abrir busca"}
        onClick={() => setOpenItem(isOpen ? null : item.id)}
      >
        {Icon && <Icon className="nb-search-icon" />}
        <span className="nb-text-search">{item.label}</span>
      </button>

      {/* ================= BOX ================= */}
      <div className="nb-search-box" role="search">

        {/* ================= FECHAR BUSCA ================= */}
        <div className="nb-search-header">

          <button type="button"
          className="nb-search-close"
          aria-label="Fechar busca"
          title="Fechar busca"
          onClick={() => setOpenItem(null)}>
            {BackIcon && (
              <BackIcon className="nb-search-close-icon" />
            )}
          </button>

        </div>

        {/* ================= FORM ================= */}
        <div className="nb-search-form">
          <input
            ref={inputRef}
            type="text"
            placeholder="Search..."
            className="nb-search-input"
            aria-label="Campo de busca"
          />
          <button
            type="button"
            className="nb-search-submit"
            aria-label="Buscar"
            title="Buscar"
          >
            {item.label}
          </button>
        </div>
      </div>
    </li>
  );
}