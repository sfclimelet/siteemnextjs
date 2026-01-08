"use client";

import { FooterHomeData } from "./footer-HomeData";
import "../../styles/footer/Footer-Home.scss";

export default function FooterHome() {
  return (
    <footer id="footer-home">
      <div className="footer-container">

        {/* LOGO */}
        <div className="footer-brand">
          <img
            src={FooterHomeData.logo.src.src}
            alt={FooterHomeData.logo.alt}
          />
          <p>{FooterHomeData.slogan}</p>
        </div>

        {/* LINKS */}
        <nav className="footer-links">
          <h3>Links Rápidos</h3>
          <ul>
            {FooterHomeData.links.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* SOCIAIS */}
        <div className="footer-socials">
          <h3>Redes Sociais</h3>

          <div className="sociais">
            {FooterHomeData.socials.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                >
                  <Icon />
                </a>
              );
            })}
          </div>
        </div>

      </div>

      <div className="footer-divider"></div>

      {/* COPYRIGHT */}
      <div className="footer-copy">
        <small>
          © 2025 <strong>SEF Climatização e Elétrica</strong>.  
          Todos os direitos reservados.
        </small>
      </div>
    </footer>
  );
}