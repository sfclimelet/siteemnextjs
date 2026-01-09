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
                        data-social-footer={item.name.toLowerCase()}
                        >
                            <Icon />
                        </a>
                    );
                    })}
                </div>
            </div>
      </div>

      {/* Divisor */}
      <div className="footer-divider"></div>

      {/* COPYRIGHT */}
      <div className="footer-copy">
        <small>
          © 2025 {" "} <span className="copy-brand text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-yellow-400">SEF Climatização e Elétrica</span>.  
          Todos os direitos reservados.
        </small>
      </div>
    </footer>
  );
}