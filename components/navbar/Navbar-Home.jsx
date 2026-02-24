"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

// Imagens
import { Imgs } from "../../config/images";
// Dados
import { navbarHomeData, searchData } from "./NavbarHome-Data";

// Componentes
import NavbarHomeItem from "./NavbarHome-Item";
import NavDropdown from "./NavbarHome-Dropdowns";

// SEARCH
import NavSearch from "./Search-NavbarHome";

// SCSS
import "../../styles/navbar/Navbar-Home.scss";

export default function NavbarHome() {
  const [menuOpen, setMenuOpen] = useState(false);  // controla menu mobile
  const [openItem, setOpenItem] = useState(null);   // controla dropdown único
  const navbarRef = useRef(null);

  // Separar itens que não são search
  const menuItems = navbarHomeData.filter(item => item.type !== "search");

  // Função para abrir/fechar dropdown individual
  const handleToggle = (id) => {
    if (openItem === id) setOpenItem(null);
    else setOpenItem(id);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current &&! navbarRef.current.contains(event.target)){
        setOpenItem(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    }
  }, []);


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
        <nav ref={navbarRef} className={`navbar-menu ${menuOpen ? "open" : ""}`}>
          <ul className="navbar-list">

            {/* SEARCH */}
            {searchData.map(item => (
              <NavSearch key={item.id} item={item} openItem={openItem} setOpenItem={setOpenItem} />
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