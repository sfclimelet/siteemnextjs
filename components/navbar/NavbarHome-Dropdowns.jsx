"use client";

import { useState } from "react";
import Link from "next/link";

export default function NavDropdown({ item }) {
  if (item.type === "search") return null;
  
  const [open, setOpen] = useState(false);
  const Icon = item.icon;

  // Não renderiza dropdown sem children
  if (!item.children || item.children.length === 0) return null;

  return (
    <li
      id={item.id}
      className={`nb-item ${open ? "open" : ""}`}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) {
          setOpen(false);
        }
      }}
    >
      <button
        type="button"
        className="nb-link"
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen(prev => !prev)}
      >
        {Icon && <Icon className="nb-icon" />}
        <span className="nb-text">{item.label}</span>
      </button>

      <ul className="nb-dropdown">
        {item.children.map((child) => {
          const ChildIcon = child.icon;
          return (
            <li key={`${item.id}-${child.id || child.href}`}>
              <Link href={child.href} className="nb-dropdown-link">
                {ChildIcon && <ChildIcon className="nb-icon" />}
                <span className="nb-text">{child.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </li>
  );
}