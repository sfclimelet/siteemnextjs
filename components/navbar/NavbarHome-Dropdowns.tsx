import { useRef, useEffect } from "react";

import Link from "next/link";
import DropdownHeader from "./NavbarHome-Dropwdown-Header";
import React from "react";

// ================= TYPES =================

interface DropdownChild {
  href: string;
  label: string;
  icon?: React.ComponentType<{ className?: string }>;
}

export interface DropdownItem {
  id: string;
  label: string;
  icon?: React.ComponentType<{ className?: string }>;
  children?: DropdownChild[];
}

interface NavDropdownProps {
  item: DropdownItem;
  openItem: string | null;
  handleToggle: (id: string) => void;
}

export default function NavDropdown({
  item,
  openItem,
  handleToggle,
}: NavDropdownProps) {
  const isOpen: boolean = openItem === item.id;
  const Icon = item.icon;
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen && buttonRef.current){
      buttonRef.current.focus();
    }
  }, [isOpen]);
  return (
    <li
      id={item.id}
      className={`nb-item ${isOpen ? "open" : ""}`}
    >
      <button
      ref={buttonRef}
        type="button"
        className={`nb-link ${isOpen ? "is-hidden" : ""}`}
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-label={`${isOpen ? "Fechar" : "Abrir"} menu ${item.label}`}
        aria-controls={`dropdown-${item.id}`}
        title={`${isOpen ? "Fechar" : "Abrir"} menu ${item.label}`}
        onClick={() => handleToggle(item.id)}
      >
        {Icon && <Icon className="nb-icon" />}
        <span className="nb-text-menu">{item.label}</span>
      </button>

      <ul
        id={`dropdown-${item.id}`}
        className="nb-dropdown"
        role="menu"
      >
        {/* Dropdown Header */}
        {isOpen && (
          <DropdownHeader
            Icon={Icon}
            onClose={() => handleToggle(item.id)}
            label={item.label}
          />
        )}

        {item.children?.map((child) => {
          const ChildIcon = child.icon;

          return (
            <li key={`${item.id}-${child.href}`}>
              <Link
                href={child.href}
                className="nb-dropdown-link"
                role="menuitem"
                title={child.label}
              >
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