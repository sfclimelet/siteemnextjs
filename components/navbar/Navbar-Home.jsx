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
  const [menuOpen, setMenuOpen] = useState(false);

  // separar menu e search
  const menuItems = navbarHomeData.filter(item => item.type !== "search");

  return (
    <header id="navbar-home">
      {/* ================= CONTAINER PRINCIPAL ================= */}
      <div className="navbar-container">
        
        {/* ================= LOGO + HAMBURGER ================= */}
        <div className="navbar-top">
          <Link
            href="/"
            className="navbar-logo"
            aria-label="Página inicial"
          >
            <Image
              className="logosef"
              src={Imgs.NbHome.imglogoTrans.src}
              fill
              alt="SEF Climatização e Elétrica"
              priority
            />
          </Link>

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

            {/* MENUS */}
            {menuItems.map(item =>
              item.type === "dropdown" ? (
                <NavDropdown key={item.id} item={item} />
              ) : (
                <NavbarHomeItem key={item.id} item={item} />
              )
            )}

          </ul>
        </nav>
      </div>
    </header>
  );
}