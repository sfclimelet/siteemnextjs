import React from "react";
import type { ComponentType } from "react";

import imgClim from "../../public/ar-condicionado.jpg";
import imgEletrica from "../../public/eletrica.jpg";
import imgEletronica from "../../public/eletronica.jpeg";
import imgRefrigeracao from "../../public/refrigeracao.jpg";

// ICONS
import { Fan, Zap, Cpu, Snowflake } from "lucide-react";

export interface CarrosselItem {
  id: number;
  title: string;
  desc: string;
  buttonLabel: string;

  image: string;

  color?: string;
  gradientFrom?: string;
  gradientTo?: string;

  rota?: string;
  indisponivel?: boolean;

  icon?: ComponentType<any>;
}
 
export const carrosselHomeData: CarrosselItem[] = [
  {
    id: 1,
    title: "Climatização",
    desc: "Instalação e manutenção de ar-condicionado com qualidade e segurança.",
    buttonLabel: "Explorar",

    image: "/ar-condicionado.jpg",

    color: "#003087",
    gradientFrom: "rgba(0,0,0,0.6)",
    gradientTo: "rgba(0,0,0,0.1)",

    rota: "/services/climatizacao",
    indisponivel: false,
    icon: Fan,
  },

  {
    id: 2,
    title: "Serviços Elétricos",
    desc: "Instalações, reparos, quadros elétricos e muito mais.",
    buttonLabel: "Explorar",

    image: "/eletrica.jpg",

    color: "#E0B300",
    gradientFrom: "rgba(0,0,0,0.6)",
    gradientTo: "rgba(0,0,0,0.1)",

    rota: "/services/eletrica",
    indisponivel: false,
    icon: Zap,
  },

  {
    id: 3,
    title: "Eletrônica",
    desc: "Manutenção e diagnóstico de placas e sistemas eletrônicos.",
    buttonLabel: "Explorar",

    image: "/eletronica.jpeg",

    color: "#16A34A",
    gradientFrom: "rgba(0,0,0,0.6)",
    gradientTo: "rgba(0,0,0,0.1)",

    rota: "",
    indisponivel: true,
    icon: Cpu,
  },

  {
    id: 4,
    title: "Refrigeração",
    desc: "Serviços de refrigeração com foco em eficiência energética.",
    buttonLabel: "Explorar",

    image: "/refrigeracao.jpg",

    color: "#0EA5E9",
    gradientFrom: "rgba(0,0,0,0.6)",
    gradientTo: "rgba(0,0,0,0.1)",

    rota: "",
    indisponivel: true,
    icon: Snowflake,
  }
];