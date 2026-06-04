"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

import { Imgs } from "../../config/images";
import { navbarHomeData, searchData } from "./NavbarHome-Data";

import NavbarHomeItem from "./NavbarHome-Item";
import NavDropdown from "./NavbarHome-Dropdowns";
import NavSearch from "./Search-NavbarHome";

import { useNavbarAccessibility } from "../../hooks/useNavbarHomeAccessibilty";

import "../../styles/navbar/Navbar-Home.scss";

export default function NavbarHome() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [openItem, setOpenItem] = useState<string | null>(null);

  const navbarRef = useRef<HTMLDivElement| null>(null);
  const menuItems = navbarHomeData.filter(
    (item) => item.type !== "search"
  );

  const handleToggle = (id: string) => {
    setOpenItem((prev) => (prev === id ? null : id));
  };

  // 🔥 Hook de acessibilidade isolado
  useNavbarAccessibility({
    navbarRef,
    openItem,
    setOpenItem,
    menuOpen,
    setMenuOpen,
  });

  return (
    <header id="navbar-home" className={`${menuOpen ? "open" : ""}`}>
      <div ref={navbarRef} className="navbar-container">
        <div className="navbar-top">
          <Link
            href="/"
            className="navbar-logo"
            aria-label="Página inicial"
          >
            <Image
              src={Imgs.NbHome.imglogoTrans.src}
              fill
              alt="Logo"
              className="logosef"
              priority
            />
          </Link>

          <button
            type="button"
            className={`navbar-hamburger ${menuOpen ? "open" : ""}`}
            aria-label="Abrir menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        <nav
          
          className={`navbar-menu ${menuOpen ? "open" : ""}`}
        >
          <ul className="navbar-list">
            {searchData.map((item) => (
              <NavSearch
                key={item.id}
                item={item}
                openItem={openItem}
                setOpenItem={setOpenItem}
              />
            ))}

            <li className="nb-divider" aria-hidden="true" />

            {menuItems.map((item) =>
              item.type === "dropdown" ? (
                <NavDropdown
                  key={item.id}
                  item={item}
                  openItem={openItem}
                  handleToggle={handleToggle}
                />
              ) : (
                <NavbarHomeItem
                  key={item.id}
                  item={item}
                  openItem={openItem}
                  handleToggle={handleToggle}
                />
              )
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}