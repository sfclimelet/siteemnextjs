"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import "./CarrosselHome.scss";

// IMPORTA O DATA COMPLETO
import { carrosselHomeData } from "./cardsCarrosselHomeData";

// COMPONENTE DE AVISO
import Aviso from "../aviso/Aviso";
import "../aviso/Aviso";
import "../aviso/aviso.scss";

export default function CarrosselHome() {
  const router = useRouter();

  // CONTROLE DE AVISO
  const [mostraAviso, setMostrarAviso] = useState(false);

  const handlerClick = (item) => {
    const Icon = item.icon;
    if (item.indisponivel) {
      // Aqui colocando false não mostra o AVISO nas páginas
      setMostrarAviso(true);
      return;
    }

    if (item.rota) {
      router.push(item.rota);
      return;
    }

    console.warn("Slide sem rota definida:", item);
  };

  return (
    <>
      {/* AVISO */}
      <Aviso mostrar={mostraAviso} mensagem="Está página não está disponivel!" fechar={() => setMostrarAviso(false)} />

      <div className="CarrosselHome">
        <div id="carouselHome" className="carousel slide">

          {/* INDICADORES */}
          <div className="carousel-indicators">
            {carrosselHomeData.map((_, index) => (
              <button
                key={index}
                type="button"
                data-bs-target="#carouselHome"
                data-bs-slide-to={index}
                className={index === 0 ? "active" : ""}
              ></button>
            ))}
          </div>

          {/* SLIDES */}
          <div className="carousel-inner">
            {carrosselHomeData.map((item, index) => (
              <div
                key={item.id}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
              >
                {/* IMAGEM */}
                <img src={item.image} className="carousel-bg" alt={item.title} />

                {/* GRADIENTE */}
                <div
                  className="overlay-gradient"
                  style={{
                    background: `linear-gradient(to top, ${item.gradientFrom}, ${item.gradientTo})`,
                  }}
                ></div>

                {/* CAPTION */}
                <div className="carousel-caption custom-caption">

                  {/* Icones Lucide */}
                  {item.icon && (
                    <img src={item.icon} alt="icon" className="caption-icon" />
                  )}

                  <h3 style={{ color: item.color }}>{item.title}</h3>

                  {item.subtitle && <h4>{item.subtitle}</h4>}

                  <p>{item.desc}</p>

                  {/* BOTÃO */}
                  <button
                    className="btn-explorar"
                    onClick={() => handlerClick(item)}
                  >
                    {item.buttonLabel}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* CONTROLE ANTERIOR */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselHome"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon custom-arrow"></span>
          </button>

          {/* CONTROLE PRÓXIMO */}
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselHome"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon custom-arrow"></span>
          </button>
        </div>
      </div>
    </>
  );
}