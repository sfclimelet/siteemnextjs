"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import logo from "../../public/logo-sef.png";

import { initHamburgerMenu } from "./buttonMenu";
import { setupNavbarDropdowns } from "./navbarHome-Logic";

import "../../styles/navbar/navbarHOME.scss";

// Importa todos os ícones organizados
import { IconsNavbarHome as I } from "../../Icons/Icons";

export default function NavbarHome() {

  useEffect(() => {
    if (typeof window === "undefined")return;

    // Ativa o Menu hamburguer
    const cleanupHamburguer = initHamburgerMenu();

    const cleanupDropdowns = setupNavbarDropdowns();

    return ()=> {
      cleanupHamburguer && cleanupHamburguer();
      cleanupDropdowns && cleanupDropdowns();
    };
  }, []);

  return (
    <>
      <nav id="nbHome" className="navbar navbar-expand-sm sticky-top">
        <div id="nbHome2" className="container-fluid">

          {/* Logo */}
          <Link href="/" className="navbar-brand">
            <Image id="logoNavbar" className="img-fluid" src={logo} alt="Logo" priority />
          </Link>

          {/* Botão mobile */}
          <button id="MenuHamburger"
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarHome"
            aria-controls="navbarHome"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </button>

          {/* Menus */}
          <div className="collapse navbar-collapse justify-content-end me-0" id="navbarHome">
            <ul className="navbar-nav">

              {/* Search */}
              <li className="nav-item dropdown">
                <button id="btnSearch" className="nav-link nav-icon" data-bs-toggle="dropdown">
                  <I.Search className="iconMn" />
                </button>

                <ul className="dropdown-menu dropdown-menu-end search-dropdown">
                  <li>
                    <div className="dropdown-search-box">
                      <input className="form-control search-input" placeholder="Buscar..." />
                      <button className="search-btn">
                        <I.Search />
                      </button>
                    </div>
                  </li>
                </ul>
              </li>

              {/* Serviços */}
              <li className="nav-item dropdown">
                <button id="btnServicos" className="nav-link" data-bs-toggle="dropdown">
                  <I.Layers className="iconMn" />
                </button>

                  <ul className="dropdown-menu dropdown-menu-end">
                    <li>
                      <Link className="dropdown-item" href="/loja">
                        <I.Handbag /> Loja
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="/orcamento">
                        <I.NotebookPen /> Orçamento
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="/dev">
                      <I.Code /> Desenvolvedor</Link></li>
                    <li>
                      <Link className="dropdown-item" href="/atualizacoes">
                        <I.RefreshCcw /> Atualizações
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="/area-de-atuacao">
                        <I.MapPinned /> Área de atuação
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="/termos">
                        <I.NotepadText /> Termos de Serviços
                      </Link>
                    </li>
                  </ul>
              </li>

              {/* Quem somos */}
              <li className="nav-item dropdown">
                <button id="btnQmSms" className="nav-link" data-bs-toggle="dropdown">
                  <I.Handshake className="iconMn" />
                </button>

                  <ul className="dropdown-menu dropdown-menu-end">
                    <li>
                      <Link className="dropdown-item" href="/parceiro">
                        <I.Users /> Parceiro
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="/depoimentos">
                        <I.Sparkles /> Depoimentos
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="/creditos">
                        <I.CircleCheck /> Créditos
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="/sobre">
                        <I.BadgeInfo /> Sobre a Empresa
                      </Link>
                    </li>
                  </ul>
              </li>

              {/* Ajuda e Suporte */}
              <li className="nav-item dropdown">
                <button id="btnAjSu" className="nav-link" data-bs-toggle="dropdown">
                  <I.Send className="iconMn" />
                </button>

                  <ul className="dropdown-menu dropdown-menu-end">
                    <li>
                      <Link className="dropdown-item" href="/dicas">
                        <I.Lightbulb /> Dicas
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="/contato">
                        <I.UserPen /> Contato
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="/avaliacao">
                        <I.Star /> Avalie
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="/faq">
                        <I.BadgeQuestionMark /> FAQ
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="/privacidade">
                        <I.Shield /> Privacidade
                      </Link>
                    </li>
                  </ul>
              </li>

              {/* Portfólio e Certificações */}
              <li className="nav-item dropdown">
                <button id="btnPortCert" className="nav-link" data-bs-toggle="dropdown">
                  <I.Briefcase className="iconMn" />
                </button>

                  <ul className="dropdown-menu dropdown-menu-end">
                    <li>
                      <Link className="dropdown-item" href="/feedback">
                        <I.MessageSquareQuote /> Feedback
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="/certificacoes">
                        <I.Medal /> Certificações
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="/galeria">
                        <I.ImageIcon /> Galeria
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="/antes-depois">
                        <I.Camera /> Antes e Depois
                      </Link>
                    </li>
                  </ul>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}