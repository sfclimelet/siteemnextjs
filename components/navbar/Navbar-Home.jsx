"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { Imgs } from "../../config/images";

import { navbarHomeData } from "./NavbarHome-Data";
import NavbarHomeItem from "./NavbarHome-Item";
import NavDropdown from "./NavbarHome-Dropdowns";

import "../../styles/navbar/Navbar-Home.scss";

export default function NavbarHome() {
  const [open, setOpen] = useState(false);

  const searchItems = navbarHomeData.filter(
    (item) => item.type === "search"
  );

  const menuItems = navbarHomeData.filter(
    (item) => item.type !== "search"
  );

  return (
    <header id="navbar-home">
      <div className="navbar-container">

        {/* LOGO */}
        <Link
          href="/"
          className="navbar-logo"
          aria-label="Página inicial"
          title="Página inicial"
        >
          <Image
            className="logosef"
            src={Imgs.NbHome.imglogoTrans.src}
            fill
            alt="SEF Climatização e Elétrica"
            priority
          />
        </Link>

        {/* HAMBURGER */}
        <button
          type="button"
          className={`navbar-hamburger ${open ? "is-open" : ""}`}
          aria-label="Abrir menu"
          aria-expanded={open}
          aria-controls="navbar-menu"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>

        {/* MENU */}
        <nav
          id="navbar-menu"
          className={`navbar-menu ${open ? "open" : ""}`}
        >
          <ul className="navbar-list">

            {/* SEARCH */}
            {searchItems.map((item) => (
              <NavbarHomeItem key={item.id} item={item} />
            ))}

            {/* BARRA DIVISÓRIA */}
            <li className="nb-divider" aria-hidden="true" />

            {/* OUTROS MENUS */}
            {menuItems.map((item) =>
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