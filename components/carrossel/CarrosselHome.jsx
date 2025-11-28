"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import "../../styles/carrossel/home/CarrosselHome.scss";
import "../aviso/aviso.scss";

import { carrosselHomeData } from "./cardsCarrosselHomeData";
import Aviso from "../aviso/Aviso";

import { ChevronsLeft, ChevronsRight } from "lucide-react";

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
    }
  };

  /* === ATUALIZA TEMA DO CARROSSEL PARA O SCSS PEGAR === */
  useEffect(() => {
    const carrossel = document.getElementById("carouselHome");

    const updateTheme = () => {
      const ativo = carrossel.querySelector(".carousel-item.active");
      const tema = ativo?.dataset.tema ?? "climatizacao";
      carrossel.setAttribute("data-tema", tema);
    };

    updateTheme();

    carrossel.addEventListener("slid.bs.carousel", updateTheme);

    return () => {
      carrossel.removeEventListener("slid.bs.carousel", updateTheme);
    };
  }, []);

  return (
    <>
      <Aviso
        mostrar={mostraAviso}
        mensagem="Esta página não está disponível!"
        fechar={() => setMostrarAviso(false)}
      />

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
                data-tema={item.tema}
                className={`carousel-item tema-${item.tema} ${index === 0 ? "active" : ""}`}
              >
                <img id="IMGFUNDO" src={item.image} className="d-block" alt={item.title} />

                <div className="carousel-caption custom-caption">
                  {item.icon && <item.icon className="icone-slide" />}

                  <h2 className="Title">{item.title}</h2>
                  <p className="Descricao">{item.desc}</p>

                  <button className="botao-saiba-mais" onClick={() => handlerClick(item)}>
                    {item.buttonLabel}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* CONTROLES */}
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselHome" data-bs-slide="prev">
            <ChevronsLeft className="icon-prev" />
          </button>

          <button className="carousel-control-next" type="button" data-bs-target="#carouselHome" data-bs-slide="next">
            <ChevronsRight className="icon-next" />
          </button>

        </div>
      </div>
    </>
  );
}