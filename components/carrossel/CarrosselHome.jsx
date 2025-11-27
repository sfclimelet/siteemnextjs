"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

// Importe SCSS 
import "../../styles/carrossel/home/CarrosselHome.scss";
import "../aviso/aviso.scss";

import { carrosselHomeData } from "./cardsCarrosselHomeData";
import Aviso from "../aviso/Aviso";


export default function CarrosselHome() {
  const router = useRouter();
  const [mostraAviso, setMostrarAviso] = useState(false);

  const handlerClick = (item) => {
    if (item.indisponivel) {
      setMostrarAviso(true);
      return;
    }

    if (item.rota) {
      router.push(item.rota);
      return;
    }

    console.warn(`Slide "${item.title}" sem rota definida.`);
  };

  return (
    <>
      <Aviso
        mostrar={mostraAviso}
        mensagem="Esta página não está disponível!"
        fechar={() => setMostrarAviso(false)}
      />

      {/* CONTAINER CENTRALIZADO */}
      <div className="CarrosselHome container px-3">

        <div id="carouselHome" className="carousel slide" data-bs-ride="carousel">

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
                className={`carousel-item tema-${item.tema} ${index === 0 ? "active" : ""}`}
              >
                <img
                  id="IMGFUNDO"
                  src={item.image}
                  className="d-block"
                  alt={item.title}
                />

                {/* CAPTION */}
                <div className="carousel-caption custom-caption">

                  {item.icon && <item.icon className="icone-slide" />}

                  <h2 className="Title">{item.title}</h2>

                  <p className="Descricao">{item.desc}</p>

                  <button
                    className="botao-saiba-mais"
                    onClick={() => handlerClick(item)}
                  >
                    {item.buttonLabel}
                  </button>

                </div>
              </div>
            ))}
          </div>

          {/* CONTROLES */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselHome"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
          </button>

          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselHome"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
          </button>

        </div>
      </div>
    </>
  );
}