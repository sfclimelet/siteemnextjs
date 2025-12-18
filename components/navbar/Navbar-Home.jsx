"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import logo from "../../public/logo-sef.png";

import { initHamburgerMenu } from "./buttonMenu";
import { setupNavbarDropdowns } from "./navbarHome-Logic";

import { menuData } from "./menuData";
import MenuItem from "./Menu-Item";

import "../../styles/navbar/navbarHome.scss";

export default function NavbarHome() {

  useEffect(() => {
    if (typeof window === "undefined") return;

    const cleanupHamburguer = initHamburgerMenu();
    const cleanupDropdowns = setupNavbarDropdowns();

    return () => {
      cleanupHamburguer && cleanupHamburguer();
      cleanupDropdowns && cleanupDropdowns();
    };
  }, []);

  return (
    <nav id="nbHome" className="navbar navbar-expand-sm sticky-top">
      <div id="nbHome2" className="container-fluid">

        <Link href="/" className="navbar-brand">
          <Image id="logoNavbar" className="img-fluid" src={logo} alt="Logo" priority />
        </Link>

        <button id="MenuHamburger" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarHome">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarHome">
          <ul className="navbar-nav ms-auto">

            {menuData.map((item) => (
              <MenuItem key={item.id} item={item} />
            ))}

          </ul>
        </div>
      </div>
    </nav>
  );
}