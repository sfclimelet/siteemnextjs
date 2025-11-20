"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import logo from "../../public/logo-sef.png";

import "../../styles/navbar/navbar-Home.scss";

// Ícones Lucide
import { Layers, Search, Handshake, Send, Briefcase } from "lucide-react";

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
              <button id="SearchBtn" className="nav-link nav-icon" data-bs-toggle="dropdown">
                <Search />
              </button>

              <ul className="dropdown-menu dropdown-menu-end">
                <li className="px-3 py-2">
                  <input className="form-control search-input" placeholder="Buscar..." />
                </li>
              </ul>
            </li>

            {/* Serviços */}
            <li className="nav-item dropdown">
              <button id="Services" className="nav-link" data-bs-toggle="dropdown">
                <Layers />
              </button>

              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <Link className="dropdown-item" href="/loja">
                      <i className="bi bi-bag"></i> Loja
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/orcamento">
                    <i className="bi bi-pencil-square"></i> Orçamento
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/dev">
                    <i className="bi bi-code-slash"></i> Desenvolvedor
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/atualizacoes">
                      <i className="bi bi-arrow-down-up"></i> Atualizações
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/area-de-atuacao">
                    <i className="bi bi-geo-alt"></i> Área de atuação
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/termos">
                    <i className="bi bi-file-earmark"></i> Termos de Serviços
                  </Link>
                </li>
              </ul>
            </li>

            {/* Quem somos */}
            <li className="nav-item dropdown">
              <button id="Qmsm" className="nav-link" data-bs-toggle="dropdown">
                <Handshake />
              </button>

              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <Link className="dropdown-item" href="/parceiro">
                    <i className="bi bi-people"></i> Parceiro
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/depoimentos">
                    <i className="bi bi-stars"></i> Depoimentos
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/creditos">
                    <i className="bi bi-patch-check"></i> Créditos
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/sobre">
                      <i className="bi bi-info-lg"></i> Sobre a Empresa
                  </Link>
                </li>
              </ul>
            </li>

            {/* Ajuda e Suporte */}
            <li className="nav-item dropdown">
              <button id="Ajsu" className="nav-link" data-bs-toggle="dropdown">
                <Send />
              </button>

              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <Link className="dropdown-item" href="/dicas">
                    <i className="bi bi-lightbulb"></i> Dicas
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/contato">
                    <i className="bi bi-person"></i> Contato
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/avaliacao">
                    <i className="bi bi-google"></i> Avalie
                  </Link>
                </li>

                <li>
                  <Link className="dropdown-item" href="/faq">
                    <i className="bi bi-question-circle"></i> FAQ
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/privacidade">
                    <i className="bi bi-shield-lock"></i> Privacidade
                  </Link>
                </li>
              </ul>
            </li>

            {/* Portfólio e Certificações */}
            <li className="nav-item dropdown">
              <button id="PortCert" className="nav-link" data-bs-toggle="dropdown">
                <Briefcase />
              </button>

              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <Link className="dropdown-item" href="/feedback">
                    <i className="bi bi-chat-square"></i> Feedback
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/certificacoes">
                    <i className="bi bi-award"></i> Certificações
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/galeria">
                    <i className="bi bi-card-image"></i> Galeria
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/antes-depois">
                    <i className="bi bi-camera"></i> Antes e Depois
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}