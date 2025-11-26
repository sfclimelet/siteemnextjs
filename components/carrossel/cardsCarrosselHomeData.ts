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
    title: "Climatização Residencial e Comercial",
    desc: "Instalação e manutenção de ar-condicionado split e inverter, com foco em eficiência energética e durabilidade dos equipamentos.",
    buttonLabel: "Explorar",
    image: "/ar-condicionado.jpg",
    rota: "/services/climatizacao",
    indisponivel: false,
    icon: ThermometerSnowflake,
  },

  {
    id: 2,
    tema: "eletrica",
    title: "Instalações e Reparos Elétricos",
    desc: "Montagem de quadros, troca de disjuntores, reparos emergenciais e projetos completos para imóveis novos ou reformas.",
    buttonLabel: "Explorar",
    image: "/eletrica.jpg",
    rota: "/services/eletrica",
    indisponivel: false,
    icon: Zap,
  },

  {
    id: 3,
    tema: "eletronica",
    title: "Eletrônica",
    desc: "Serviços de eletrônica para reparos, manutenção e diagnóstico de placas, fontes, controladores e sistemas eletrônicos diversos.",
    buttonLabel: "Saiba mais",
    image: "/eletronica.jpg",
    rota: "",
    indisponivel: true,
    icon: Cpu,
  },

  {
    id: 4,
    tema: "refrigeracao",
    title: "Refrigeração",
    desc: "Instalação e manutenção e sistemas de refrigeração residencial, comercial e industrial. Câmaras frias, balcões refrigerados e equipamentos com eficiência energética.",
    buttonLabel: "Saiba mais",
    image: "/refrigeracao.jpg",
    rota: "",
    indisponivel: true,
    icon: Snowflake,
  }
];