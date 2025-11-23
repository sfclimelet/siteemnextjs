"use client";

import React, { useEffect } from "react";
import { createPortal } from "react-dom";

export default function Aviso({ mostrar = false, mensagem = "Esta página ainda não está disponível.", fechar }) {
  useEffect(() => {
    if (!mostrar) return;

    const onKey = (e) => {
      if (e.key === "Escape") fechar?.();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [mostrar, fechar]);

  if (!mostrar) return null;

  // cria portal para document.body (evita conflitos de DOM)
  return createPortal(
    <div className="aviso-overlay" role="dialog" aria-modal="true" aria-label="Aviso">
      <div className="aviso-box">
        <h3 className="aviso-title">⚠ Aviso</h3>
        <p className="aviso-message">{mensagem}</p>

        <div className="aviso-actions">
          <button className="aviso-btn" onClick={() => fechar?.()}>
            OK
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}