"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import "./CarrosselHome.scss";

import { carrosselHomeData } from "./cardsCarrosselHomeData";
import Aviso from "../aviso/Aviso";
import "../aviso/aviso.scss";

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

        {/* CARROSSEL */}
        <div
          id="carouselHome"
          className="carousel slide"
          data-bs-ride="carousel"
        >

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
                <img id="IMGFUNDO"
                  src={item.image}
                  className="d-block"
                  alt={item.title}
                />

                {/* GRADIENTE */}
                <div className="overlay-gradient"></div>

                {/* CAPTION CENTRALIZADO */}
                <div className="carousel-caption text-center">

                  {item.icon && (
                    <item.icon size={45} className="mb-2" />
                  )}

                  <h2 className="fs-4 fw-bold" style={{ color: item.color }}>
                    {item.title}
                  </h2>

                  <p className="fs-6 w-75 mx-auto">{item.desc}</p>

                  <button
                    className="btn btn-light mt-2 px-4 py-2"
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