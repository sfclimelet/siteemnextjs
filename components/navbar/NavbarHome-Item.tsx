// INÍCIO DO CÓDIGO
import Link from "next/link";
import React from "react";

// ================= TYPES =================

export interface NavbarItem {
  id: string;
  label: string;
  href?: string;
  icon?: React.ComponentType<{ className?: string }>;
}

interface NavbarHomeItemProps {
  item: NavbarItem;
  openItem: string | null;
  handleToggle: (id: string) => void;
}

export default function NavbarHomeItem({
  item,
  openItem,
  handleToggle,
}: NavbarHomeItemProps) {
  const Icon = item.icon;
  const isOpen: boolean = openItem === item.id;

  // ================= SEM HREF → BUTTON =================
  if (!item.href) {
    return (
      <li id={item.id} className={`nb-item ${isOpen ? "open" : ""}`}>
        <button
          type="button"
          className="nb-link"
          aria-label={item.label}
          title={item.label}
          aria-expanded={isOpen}
          onClick={() => handleToggle(item.id)}
        >
          {Icon && <Icon className="nb-icon" />}
          <span className="nb-text">{item.label}</span>
        </button>
      </li>
    );
  }

  // ================= COM HREF → LINK =================
  return (
    <li id={item.id} className={`nb-item ${isOpen ? "open" : ""}`}>
      <Link
        href={item.href}
        className="nb-link"
        aria-label={item.label}
        title={item.label}
        onClick={() => handleToggle(item.id)}
      >
        {Icon && <Icon className="nb-icon" />}
        <span className="nb-text">{item.label}</span>
      </Link>
    </li>
  );
}