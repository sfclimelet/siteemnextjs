"use client";
import React from "react";
import "./CarrosselHome.scss";

export default function CarrosselHome() {
  const images = [
    "/ar-condicionado.jpg",
    "/eletrica.jpg",
    "/eletronica.jpeg",
    "/refrigeracao.jpg",
  ];

  const itens = [
    {
      title: "Climatização",
      desc: "Instalação e manutenção de ar-condicionado com qualidade e segurança.",
      img: images[0],
    },
    {
      title: "Serviços Elétricos",
      desc: "Instalações, reparos, quadros elétricos e muito mais.",
      img: images[2],
    },
    {
      title: "Eletrônica",
      desc: "Manutenção e diagnóstico de placas e sistemas eletrônicos.",
      img: images[2],
    },
    {
      title: "Refrigeração",
      desc: "Manutenção e diagnóstico de placas e sistemas eletrônicos.",
      img: images[3],
    },
  ];

  return (
    <div className="CarrosselHome">
      <div id="carouselHome" className="carousel slide">

        {/* INDICADORES */}
        <div className="carousel-indicators">
          {itens.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#carouselHome"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>

        {/* SLIDES */}
        <div className="carousel-inner">
          {itens.map((item, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <img src={item.img} className="carousel-bg" alt={item.title} />

              {/* CAPTION CUSTOMIZADO */}
              <div className="carousel-caption custom-caption">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <button className="btn-explorar">Explorar</button>
              </div>

              {/* GRADIENTE */}
              <div className="overlay-gradient"></div>
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
          <span className="carousel-control-prev-icon custom-arrow"></span>
        </button>

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
  );
}