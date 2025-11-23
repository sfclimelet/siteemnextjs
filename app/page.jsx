"use client";

import React, { useContext, useEffect, useState } from "react";

{/* Componentes */}
import NavbarHome from "../components/navbar/Navbar-Home";
import FooterHome from "../components/footer/Footer-Home";
import AnimacaoBackgroundHome from "../components/Background-Animated-Home";
import ThemeToggle from "../components/ThemeToggle";
import { ThemeContext } from "../components/ThemeProvider";
import CarrosselHome from "../components/carrossel/CarrosselHome";

export default function Home() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const target = document.getElementById("teste");
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowButton(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    observer.observe(target);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <AnimacaoBackgroundHome theme={theme} />
      {showButton && <ThemeToggle onClick={toggleTheme} theme={theme} />}

      <NavbarHome />
        <main className={`home-page ${theme}`}>
            <div className="text-center">
              <h1>Nossos Serviços <i className="bi bi-tools"></i></h1>
            </div>

            <CarrosselHome />

            <section id="teste" className="text-center">
              <h2>Clique no Botão Abaixo: </h2>
              <a href="/about" className="btn btn-outline-primary mt-5 mx-auto" >About <i className="bi bi-box-arrow-in-right"></i> </a>
            </section>
        </main>
      
    </>
  );
}