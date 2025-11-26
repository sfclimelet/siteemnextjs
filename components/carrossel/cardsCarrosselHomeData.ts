import React from "react";
import type { ComponentType } from "react";

// ICONS
import { ThermometerSnowflake, Zap, Cpu, Snowflake } from "lucide-react";

export interface CarrosselItem {
  id: number;
  tema: string;
  title: string;
  desc: string;
  buttonLabel: string;
  image: string;
  rota?: string;
  indisponivel?: boolean;
  icon?: ComponentType<any>;
}
 
export const carrosselHomeData: CarrosselItem[] = [
  {
    id: 1,
    tema: "climatizacao",
    title: "CLIMATIZAÇÃO",
    desc: "Instalação e manutenção de ar-condicionado com segurança e eficiência.",
    buttonLabel: "Explorar",
    image: "/ar-condicionado.jpg",
    rota: "/services/climatizacao",
    indisponivel: false,
    icon: ThermometerSnowflake,
  },

  {
    id: 2,
    tema: "eletrica",
    title: "ELÉTRICA",
    desc: "Reparos, instalações e soluções elétricas completas para sua residência ou empresa.",
    buttonLabel: "Explorar",
    image: "/eletrica.jpg",
    rota: "/services/eletrica",
    indisponivel: false,
    icon: Zap,
  },

  {
    id: 3,
    tema: "eletronica",
    title: "ELETRÔNICA",
    desc: "Diagnóstico e reparo de placas, módulos e sistemas eletrônicos.",
    buttonLabel: "Saiba mais",
    image: "/eletronica.jpg",
    rota: "",
    indisponivel: true,
    icon: Cpu,
  },

  {
    id: 4,
    tema: "refrigeracao",
    title: "REFRIGERAÇÃO",
    desc: "Manutenção e instalação de sistemas de refrigeração residencial e comercial.",
    buttonLabel: "Saiba mais",
    image: "/refrigeracao.jpg",
    rota: "",
    indisponivel: true,
    icon: Snowflake,
  }
];