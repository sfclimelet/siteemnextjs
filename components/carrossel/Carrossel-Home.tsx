"use client";

import { useState, useEffect } from "react";
import styles from "../../styles/carrossel/CarrosselHome.module.scss";

import { ChevronLeft, ChevronRight } from "lucide-react";

// IMPORTANDO SEU ARQUIVO .TS (COMO VOCÊ QUER)
import { cardsCarrosselHomeData } from "./cardsDataCarrosselHome";

export default function CarrosselHome() {
  
  const cards = cardsCarrosselHomeData;

  const [active, setActive] = useState(0);

  const nextCard = () => {
    setActive((prev) => (prev + 1) % cards.length);
  };

  const prevCard = () => {
    setActive((prev) => (prev - 1 + cards.length) % cards.length);
  };

  useEffect(() => {
    const interval = setInterval(nextCard, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.carrosselArea}>
        {cards.map((card, index) => {
          let positionClass = "";

          if (index === active) positionClass = styles.active;
          else if (index === (active - 1 + cards.length) % cards.length)
            positionClass = styles.left;
          else if (index === (active + 1) % cards.length)
            positionClass = styles.right;

          return (
            <div
              key={card.id}
              className={`${styles.card} ${positionClass}`}
              style={{ backgroundColor: card.color }}
            >
              <div className={styles.txtContent}>
                <h2>{card.title}</h2>
                <p>{card.description}</p>
                <button className={styles.btnAction}>{card.buttonLabel}</button>
              </div>

              <div
                className={styles.imageArea}
                style={{
                  backgroundImage: `url(${card.image.src})`,
                }}
              />
            </div>
          );
        })}

        <button className={`${styles.navBtn} prevBtn`} onClick={prevCard}>
          <ChevronLeft size={28} color="#fff" />
        </button>

        <button className={`${styles.navBtn} nextBtn`} onClick={nextCard}>
          <ChevronRight size={28} color="#fff" />
        </button>
      </div>
    </div>
  );
}