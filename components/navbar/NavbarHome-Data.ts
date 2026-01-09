import { IconsNavbarHome } from "../../Icons/Icons";
import { ROUTES } from "./menuRoutes";

export const navbarHomeData = [
  {
    id: "search",
    type: "search",
    label: "Buscar",
    icon: IconsNavbarHome.Menu.search,
  },

  {
    id: "services",
    type: "dropdown",
    label: "Serviços",
    icon: IconsNavbarHome.Menu.services,
    children: [
      {
        id: "loja",
        label: "Loja",
        href: ROUTES.servicos.loja,
        icon: IconsNavbarHome.Services.shop,
      },
      {
        id: "orcamento",
        label: "Orçamento",
        href: ROUTES.servicos.orcamento,
        icon: IconsNavbarHome.Services.projects,
      },
      {
        id: "dev",
        label: "Desenvolvedor",
        href: ROUTES.servicos.dev,
        icon: IconsNavbarHome.Services.development,
      },
      {
        id: "atualizacoes",
        label: "Atualizações",
        href: ROUTES.servicos.atualizacoes,
        icon: IconsNavbarHome.Services.maintenance,
      },
      {
        id: "area",
        label: "Área de atuação",
        href: ROUTES.servicos.areadeAtuacao,
        icon: IconsNavbarHome.Services.location,
      },
      {
        id: "termos",
        label: "Termos de Serviços",
        href: ROUTES.servicos.termos,
        icon: IconsNavbarHome.Services.terms,
      },
    ],
  },

  {
    id: "company",
    type: "dropdown",
    label: "Quem Somos",
    icon: IconsNavbarHome.Menu.company,
    children: [
      {
        id: "parceiro",
        label: "Parceiro",
        href: ROUTES.quemSomos.parceiro,
        icon: IconsNavbarHome.Company.about,
      },
      {
        id: "depoimentos",
        label: "Depoimentos",
        href: ROUTES.quemSomos.depoimentos,
        icon: IconsNavbarHome.Company.values,
      },
      {
        id: "creditos",
        label: "Créditos",
        href: ROUTES.quemSomos.creditos,
        icon: IconsNavbarHome.Company.quality,
      },
      {
        id: "sobre",
        label: "Sobre a Empresa",
        href: ROUTES.quemSomos.sobre,
        icon: IconsNavbarHome.Company.info,
      },
    ],
  },

  {
    id: "support",
    type: "dropdown",
    label: "Ajuda e Suporte",
    icon: IconsNavbarHome.Menu.contact,
    children: [
      {
        id: "dicas",
        label: "Dicas",
        href: ROUTES.AjudaeSuporte.dicas,
        icon: IconsNavbarHome.Support.tips,
      },
      {
        id: "contato",
        label: "Contato",
        href: ROUTES.AjudaeSuporte.contato,
        icon: IconsNavbarHome.Support.contact,
      },
      {
        id: "avaliacao",
        label: "Avalie",
        href: ROUTES.AjudaeSuporte.avaliacao,
        icon: IconsNavbarHome.Support.rating,
      },
      {
        id: "faq",
        label: "FAQ",
        href: ROUTES.AjudaeSuporte.faq,
        icon: IconsNavbarHome.Support.faq,
      },
      {
        id: "privacidade",
        label: "Privacidade",
        href: ROUTES.AjudaeSuporte.privacidade,
        icon: IconsNavbarHome.Support.privacy,
      },
    ],
  },

  {
    id: "portfolio",
    type: "dropdown",
    label: "Portfólio e Certificações",
    icon: IconsNavbarHome.Menu.portfolio,
    children: [
      {
        id: "feedback",
        label: "Feedback",
        href: ROUTES.PortfolioeCerti.feedback,
        icon: IconsNavbarHome.Portfolio.feedback,
      },
      {
        id: "certificacoes",
        label: "Certificações",
        href: ROUTES.PortfolioeCerti.certificacoes,
        icon: IconsNavbarHome.Portfolio.certifications,
      },
      {
        id: "galeria",
        label: "Galeria",
        href: ROUTES.PortfolioeCerti.galeria,
        icon: IconsNavbarHome.Portfolio.gallery,
      },
      {
        id: "antesDepois",
        label: "Antes e Depois",
        href: ROUTES.PortfolioeCerti.antesDepois,
        icon: IconsNavbarHome.Portfolio.beforeAfter,
      },
    ],
  },
];