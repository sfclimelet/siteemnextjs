import React from "react";

// ================= TYPES =================

interface DropdownHeaderProps {
  Icon?: React.ComponentType<{ className?: string }>;
  label: string;
  onClose: () => void;
}

export default function DropdownHeader({
  Icon,
  label,
  onClose,
}: DropdownHeaderProps) {
  return (
    <li className="nb-dropdown-header">
      <button
        type="button"
        className="nb-dropdown-circle"
        onClick={onClose}
        aria-label={`Fechar menu ${label}`}
        title={`Fechar menu ${label}`}
        aria-expanded={true}
      >
        {Icon && <Icon className="nb-icon" />}
      </button>
    </li>
  );
}