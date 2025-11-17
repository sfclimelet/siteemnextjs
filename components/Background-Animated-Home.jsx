"use client";

import React, { useEffect, useRef, useContext } from "react";
import { ThemeContext } from "../components/ThemeProvider";
import "../styles/conf-backgrounds-Light-Dark.scss";

const ICONS = [
  { name: "lightning", url: "/iconsAnimations/lightning-fill.png", type: "electric" },
  { name: "snow", url: "/iconsAnimations/snow2.png", type: "climate" },
  { name: "plug", url: "/iconsAnimations/plug-fill.png", type: "electric" },
  { name: "gear", url: "/iconsAnimations/gear-fill.png", type: "electric" },
  { name: "droplet", url: "/iconsAnimations/droplet-fill.png", type: "climate" },
];

function hexToRgba(hex, a = 1) {
  const bigint = parseInt(hex.replace("#", ""), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r},${g},${b},${a})`;
}

export default function AnimatedBackground() {
  const { theme } = useContext(ThemeContext);
  const canvasRef = useRef(null);

  useEffect(() => {
    let isMounted = true;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d", { alpha: false });

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const loadIconBitmaps = async () => {
      const promises = ICONS.map(async (ic) => {
        try {
          const resp = await fetch(ic.url);
          const blob = await resp.blob();
          const bitmap = await createImageBitmap(blob);
          return { ...ic, bitmap };
        } catch (err) {
          console.error("Erro carregando ícone", ic.url, err);
          return null;
        }
      });
      return (await Promise.all(promises)).filter(Boolean);
    };

    const particles = [];
    const particleCount = Math.max(80, Math.floor((window.innerWidth * window.innerHeight) / 12000));

    const PARTICLE_COLORS =
      theme === "light"
        ? ["#00BFFF", "#FFA500", "#FF69B4", "#00CED1", "#FFD700"]
        : ["#66ccff", "#9999ff", "#88ffaa", "#ffcc88", "#dd88ff"];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2 + 0.5,
        color: PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)],
        dx: (Math.random() - 0.5) * 0.3,
        dy: (Math.random() - 0.5) * 0.3,
        alpha: theme === "light" ? 0.4 + Math.random() * 0.4 : 0.25 + Math.random() * 0.25,
      });
    }

    const bigIcons = [];
    let iconBitmaps = [];
    let rafId;

    const animate = () => {
      const w = canvas.width;
      const h = canvas.height;

      const g = ctx.createLinearGradient(0, 0, w, h);
      if (theme === "light") {
        g.addColorStop(0, "#f6f9fc");
        g.addColorStop(1, "#e3f2ff");
      } else {
        g.addColorStop(0, "#0a0a0f");
        g.addColorStop(1, "#1b1b2f");
      }
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);

      particles.forEach((p) => {
        ctx.beginPath();
        ctx.fillStyle = hexToRgba(p.color, p.alpha);
        ctx.shadowColor = hexToRgba(p.color, theme === "light" ? 0.9 : 0.7);
        ctx.shadowBlur = theme === "light" ? 6 : 4;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;

        p.x += p.dx;
        p.y += p.dy;
        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;
        if (p.y < -10) p.y = h + 10;
        if (p.y > h + 10) p.y = -10;
      });

      bigIcons.forEach((bi) => {
        ctx.save();
        ctx.globalAlpha = bi.opacity;

        ctx.shadowColor =
          theme === "light"
            ? bi.type === "climate"
              ? "#00BFFF"
              : "#FFA500"
            : bi.type === "climate"
            ? "#44ccff"
            : "#ffaa44";

        ctx.shadowBlur = theme === "light" ? 18 : 12;

        if (bi.bitmap) {
          ctx.drawImage(bi.bitmap, bi.x - bi.size / 2, bi.y - bi.size / 2, bi.size, bi.size);
        } else {
          ctx.fillStyle = bi.type === "climate" ? "#AEEFFF" : "#FFD76D";
          ctx.beginPath();
          ctx.arc(bi.x, bi.y, bi.size / 2, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();

        bi.x += bi.dx;
        bi.y += bi.dy;
        if (bi.x < -80) bi.x = w + 80;
        if (bi.x > w + 80) bi.x = -80;
        if (bi.y < -80) bi.y = h + 80;
        if (bi.y > h + 80) bi.y = -80;
      });

      rafId = requestAnimationFrame(animate);
    };

    (async () => {
      iconBitmaps = await loadIconBitmaps();
      const desiredBigCount = 10;
      for (let i = 0; i < desiredBigCount; i++) {
        const pick = iconBitmaps[Math.floor(Math.random() * iconBitmaps.length)];
        const type = pick ? pick.type : Math.random() > 0.5 ? "climate" : "electric";
        const size = 40 + Math.random() * 12;

        bigIcons.push({
          bitmap: pick ? pick.bitmap : null,
          type,
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size,
          dx: (Math.random() - 0.5) * 0.25,
          dy: (Math.random() - 0.5) * 0.25,
          opacity: theme === "light" ? 0.45 + Math.random() * 0.35 : 0.3 + Math.random() * 0.25,
        });
      }

      if (isMounted) animate();
    })();

    return () => {
      isMounted = false;
      window.removeEventListener("resize", resize);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
        pointerEvents: "none",
        display: "block",
      }}
    />
  );
}