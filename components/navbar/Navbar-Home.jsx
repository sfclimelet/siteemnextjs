"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { Imgs } from "../../config/images";
import { navbarHomeData, searchData } from "./NavbarHome-Data";

import NavbarHomeItem from "./NavbarHome-Item";
import NavDropdown from "./NavbarHome-Dropdowns";
import NavSearch from "./Search-NavbarHome";

import "../../styles/navbar/Navbar-Home.scss";

export default function NavbarHome() {
  const [menuOpen, setMenuOpen] = useState(false);  // controla menu mobile
  const [openItem, setOpenItem] = useState(null);   // controla dropdown único

  // Separar itens que não são search
  const menuItems = navbarHomeData.filter(item => item.type !== "search");

  // Função para abrir/fechar dropdown individual
  const handleToggle = (id) => {
    if (openItem === id) setOpenItem(null);
    else setOpenItem(id);
  };

  return (
    <header id="navbar-home" className={`${menuOpen ? "open" : ""}`}>
      <div className="navbar-container">

        {/* ================= TOPO ================= */}
        <div className="navbar-top">
          <Link href="/" className="navbar-logo" aria-label="Página inicial">
            <Image
              src={Imgs.NbHome.imglogoTrans.src}
              fill
              alt="Logo"
              className="logosef"
              priority
            />
          </Link>

          {/* HAMBURGER MOBILE */}
          <button
            type="button"
            className={`navbar-hamburger ${menuOpen ? "open" : ""}`}
            aria-label="Abrir menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(prev => !prev)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        {/* ================= MENU EXPANSÍVEL ================= */}
        <nav className={`navbar-menu ${menuOpen ? "open" : ""}`}>
          <ul className="navbar-list">

            {/* SEARCH */}
            {searchData.map(item => (
              <NavSearch key={item.id} item={item} />
            ))}

            {/* DIVIDER */}
            <li className="nb-divider" aria-hidden="true" />

            {/* ITENS / DROPDOWNS */}
            {menuItems.map(item => (
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
            ))}

          </ul>
        </nav>

      </div>
    </header>
  );
}