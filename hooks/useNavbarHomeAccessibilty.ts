// INÍCIO DO CÓDIGO

import { useEffect, RefObject } from "react";

interface UseNavbarAccessibilityProps {
  navbarRef: RefObject<HTMLElement>;
  openItem: string | null;
  setOpenItem: React.Dispatch<React.SetStateAction<string | null>>;
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function useNavbarAccessibility({
  navbarRef,
  openItem,
  setOpenItem,
  menuOpen,
  setMenuOpen,
}: UseNavbarAccessibilityProps) {
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!navbarRef.current) return;

      if (!navbarRef.current.contains(e.target as Node)) {
        setOpenItem(null);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenItem(null);
        setMenuOpen(false);
      }
    };

    window.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [navbarRef, openItem, menuOpen, setOpenItem, setMenuOpen]);
}