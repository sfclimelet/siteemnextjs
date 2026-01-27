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
          onClick={() => setOpen(prev => !prev)}
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
            {navbarHomeData.map((item) =>
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