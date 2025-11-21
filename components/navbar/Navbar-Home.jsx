"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import logo from "../../public/logo-sef.png";

import ClickAnimation from "./ClickAnimation";

// SCSS
import "../../styles/navbar/navbar-Home.scss";

// Ícones Lucide
import {
  Layers, Search, Handshake, Send, Briefcase,
  Handbag, NotebookPen, Code, RefreshCcw, MapPinned,
  NotepadText, Users, Sparkles, CircleCheck, BadgeInfo,
  Lightbulb, UserPen, Star, BadgeQuestionMark, Shield,
  MessageSquareQuote, Medal, Image as ImageIcon, Camera
} from "lucide-react";

export default function NavbarHome() {

  // NAVBAR
  useEffect(() => {
    if (typeof window === "undefined") return;

    const dropdownParents = document.querySelectorAll(".nav-item.dropdown");

    const createdTopIcons = []; // para cleanup

    dropdownParents.forEach((parent) => {
      const toggleBtn = parent.querySelector("[data-bs-toggle='dropdown']");
      const dropdownMenu = parent.querySelector(".dropdown-menu");

      if (!toggleBtn || !dropdownMenu) return;

      // cria o top icon (uma vez)
      const topIcon = document.createElement("div");
      topIcon.classList.add("dropdown-top-icon");
      // inicialmente sem mostrar (controlado por classe 'visible')
      dropdownMenu.prepend(topIcon);
      createdTopIcons.push({ parent, topIcon, toggleBtn });

      // quando abrir o dropdown (evento do bootstrap)
      const onShow = () => {
        const icon = toggleBtn.querySelector("svg") || toggleBtn.querySelector("i");
        if (icon) {
          const cloned = icon.cloneNode(true);
          // limpa e insere o svg clonado
          topIcon.innerHTML = "";
          topIcon.appendChild(cloned);
        }
        // marca o botão original como ativo (vai disparar seu CSS)
        toggleBtn.classList.add("is-active");
        // mostra o topIcon
        topIcon.classList.add("visible");
      };

      // quando fechar
      const onHide = () => {
        toggleBtn.classList.remove("is-active");
        topIcon.classList.remove("visible");
      };

      parent.addEventListener("show.bs.dropdown", onShow);
      parent.addEventListener("hide.bs.dropdown", onHide);

      // clique no top icon fecha o dropdown (usa o próprio toggleBtn)
      topIcon.addEventListener("click", () => {
        toggleBtn.click();
      });

      // salvar listeners para remoção se necessário (não obrigatório aqui, mas organizado)
      parent.__navListeners = parent.__navListeners || [];
      parent.__navListeners.push({ onShow, onHide, topIcon });
    });

    // cleanup
    return () => {
      dropdownParents.forEach((parent) => {
        const list = parent.__navListeners || [];
        list.forEach(({ onShow, onHide, topIcon }) => {
          parent.removeEventListener("show.bs.dropdown", onShow);
          parent.removeEventListener("hide.bs.dropdown", onHide);
          if (topIcon) {
            topIcon.replaceWith(topIcon.cloneNode(false)); // remove handlers
          }
        });
        parent.__navListeners = [];
      });
    };
  }, []);

  return (
    <nav id="nbHome" className="navbar navbar-expand-sm sticky-top z-2">
      <div className="container-fluid">

        {/* Logo */}
        <Link href="/" className="navbar-brand">
          <Image className="img-fluid logoNavbar" src={logo} alt="Logo" priority />
        </Link>

        {/* Botão mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarHome"
          aria-controls="navbarHome"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menus */}
        <div className="collapse navbar-collapse justify-content-end me-0" id="navbarHome">
          <ul className="navbar-nav">

            {/* Search */}
            <li className="nav-item dropdown">
              <button
                id="SearchBtn"
                className="nav-link nav-icon"
                data-bs-toggle="dropdown"
              >
                <Search />
              </button>

              <ul className="dropdown-menu dropdown-menu-end search-dropdown">
                <li>
                  <div className="dropdown-search-box">
                    <input
                      className="form-control search-input"
                      placeholder="Buscar..."
                    />
                    <button className="search-btn">
                      <Search />
                    </button>
                  </div>
                </li>
              </ul>
            </li>

            {/* Serviços */}
            <li className="nav-item dropdown">
              <button id="Services" className="nav-link" data-bs-toggle="dropdown" aria-label="Serviços" title="Serviços">
                <Layers />
              </button>

              <ClickAnimation>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <Link className="dropdown-item" href="/loja">
                        <Handbag /> Loja
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="/orcamento">
                      <NotebookPen /> Orçamento
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="/dev">
                      <Code /> Desenvolvedor
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="/atualizacoes">
                        <RefreshCcw /> Atualizações
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="/area-de-atuacao">
                      <MapPinned /> Área de atuação
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="/termos">
                      <NotepadText /> Termos de Serviços
                    </Link>
                  </li>
                </ul>
              </ClickAnimation>
            </li>


            {/* Quem somos */}
            <li className="nav-item dropdown">
              <button id="Qmsm" className="nav-link" data-bs-toggle="dropdown" aria-label="Quem Somos" title="Quem Somos">
                <Handshake />
              </button>
              <ClickAnimation>
                  <ul className="dropdown-menu dropdown-menu-end">
                    <li>
                      <Link className="dropdown-item" href="/parceiro">
                        <Users /> Parceiro
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="/depoimentos">
                        <Sparkles /> Depoimentos
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="/creditos">
                        <CircleCheck /> Créditos
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="/sobre">
                          <BadgeInfo /> Sobre a Empresa
                      </Link>
                    </li>
                  </ul>
              </ClickAnimation>
            </li>

            {/* Ajuda e Suporte */}
            <li className="nav-item dropdown">
              <button id="Ajsu" className="nav-link" data-bs-toggle="dropdown" aria-label="Ajuda e Suporte" title="Ajuda e Suporte">
                <Send />
              </button>
              
              <ClickAnimation>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <Link className="dropdown-item" href="/dicas">
                      <Lightbulb /> Dicas
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="/contato">
                      <UserPen /> Contato
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="/avaliacao">
                      <Star /> Avalie
                    </Link>
                  </li>

                  <li>
                    <Link className="dropdown-item" href="/faq">
                      <BadgeQuestionMark /> FAQ
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="/privacidade">
                      <Shield /> Privacidade
                    </Link>
                  </li>
                </ul>
              </ClickAnimation>
            </li>

            {/* Portfólio e Certificações */}
            <li className="nav-item dropdown">
              <button id="PortCert" className="nav-link" data-bs-toggle="dropdown" aria-label="Portifólio e Certificações" title="Portifólio e Certificações">
                <Briefcase />
              </button>

              <ClickAnimation>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <Link className="dropdown-item" href="/feedback">
                      <MessageSquareQuote /> Feedback
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="/certificacoes">
                      <Medal /> Certificações
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="/galeria">
                      <ImageIcon /> Galeria
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="/antes-depois">
                      <Camera /> Antes e Depois
                    </Link>
                  </li>
                </ul>
              </ClickAnimation>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}