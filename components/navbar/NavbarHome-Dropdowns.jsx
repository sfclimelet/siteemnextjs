"use client";

import { useState } from "react";
import Link from "next/link";

export default function NavDropdown({ item }) {
  const [open, setOpen] = useState(false);
  const Icon = item.icon;

  return (
    <li
      className={`nb-item ${open ? "open" : ""}`}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) {
          setOpen(false);
        }
      }}>
        <button
          type="button"
          className="nb-link"
          aria-haspopup="true"
          aria-expanded={open}
          onClick={() => setOpen(prev => !prev)}
        >
          {Icon && <Icon />}
          <span>{item.label}</span>
        </button>

        <ul className="nb-dropdown">
          {item.children?.map((child) => {
            const ChildIcon = child.icon;

            return (
              <li key={`${item.id}-${child.href}`}>
                <Link href={child.href} className="nb-dropdown-link">
                  {ChildIcon && <ChildIcon />}
                  <span>{child.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
    </li>
  );
}