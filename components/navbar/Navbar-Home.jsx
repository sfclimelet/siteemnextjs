"use client";

import Link from "next/link";
import Image from "next/image";
import { navbarAnimated } from "./navbar-Animated";

import logo from "../../public/logo-sef.png";

// Import CSS
import "../../styles/navbar/navbar-Home.scss";

// Icones
import { Layers, Search, Handshake, Send, Briefcase } from "lucide-react";

export default function NavbarHome() {
  navbarAnimated();
  return (
    <nav id="nbHome" className="navbar navbar-expand-sm sticky-top z-2">
      <div className="container-fluid">

        {/* Logo */}
        <Link href="/" className="navbar-brand">
          <Image className="img-fluid logoNavbar" src={logo} alt="Logo" priority />
        </Link>

        {/* Botão Toggle (mobile) */}
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

        {/* Itens do menu */}
        <div className="collapse navbar-collapse justify-content-end me-0" id="navbarHome">
          <ul className="navbar-nav">

            <li className="nav-item dropdown">
              <button id="SearchBtn" className="nav-link nav-icon" role="button" data-bs-toggle="dropdown" aria-expanded="false" aria-label="Buscar" title="Buscar">
                <span className="iconMove">
                  <Search />
                </span>
              </button>
              <ul className="dropdown-menu dropdown-menu-end search-dropdown">
                <li className="px-3 py-2">
                  <input className="form-control search-input" placeholder="Buscar..." type="search" />
                </li>
              </ul>
            </li>

            {/* Serviços */}
            <li className="nav-item dropdown">
              <button
                id="Services"
                className="nav-link"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                aria-label="Serviços"
                title="Serviços"
              >
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

            {/* Quem Somos */}
            <li className="nav-item dropdown">
              <button
                id="Qmsm"
                className="nav-link"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                aria-label="Quem Somos"
                title="Quem Somos"
              >
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

            {/* Ajuda & Suporte */}
            <li className="nav-item dropdown">
              <button
                id="Ajsu"
                className="nav-link"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                aria-label="Ajuda e Suporte"
                title="Ajuda e Suporte"
              >
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
                    <i className="bi bi-google"></i> Avalie no Google
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/faq">
                    <i className="bi bi-question-circle"></i> Dúvidas Frequentes
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/privacidade">
                    <i className="bi bi-shield-lock"></i> Política de Privacidade
                  </Link>
                </li>
              </ul>
            </li>

            {/* Portfólio e Certificações */}
            <li className="nav-item dropdown">
              <button
                id="PortCert"
                className="nav-link"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false" aria-label="Portifólio e Certificações" title="Portifólio e Certificações"
              >
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
                    <i className="bi bi-card-image"></i> Galeria de Serviços
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