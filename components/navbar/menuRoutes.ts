// ================= ROUTES =================

export const ROUTES = {
  servicos: {
    loja: "/servicos/loja",
    orcamento: "/servicos/orcamento",
    dev: "/servicos/desenvolvimento",
    atualizacoes: "/servicos/atualizacoes",
    areadeAtuacao: "/servicos/area-de-atuacao",
    termos: "/servicos/termos",
  },

  quemSomos: {
    parceiro: "/quem-somos/parceiros",
    depoimentos: "/quem-somos/depoimentos",
    creditos: "/quem-somos/creditos",
    sobre: "/quem-somos/sobre",
  },

  ajudaeSuporte: {
    dicas: "/suporte/dicas",
    contato: "/suporte/contato",
    avaliacao: "/suporte/avaliacao",
    faq: "/suporte/faq",
    privacidade: "/suporte/privacidade",
  },

  portfolioeCerti: {
    feedback: "/portfolio/feedback",
    certificacoes: "/portfolio/certificacoes",
    galeria: "/portfolio/galeria",
    antesDepois: "/portfolio/antes-e-depois",
  },
} as const;

/* ================= TYPES ================= */

export type RoutesType = typeof ROUTES;

export type RouteSection = keyof RoutesType;

export type RouteKey<T extends RouteSection> = keyof RoutesType[T];

// 🔥 TODAS as rotas possíveis automaticamente
export type RoutePath = {
  [S in keyof RoutesType] : RoutesType[S][keyof RoutesType[S]]
}[keyof RoutesType];

/* ================= HELPER ================= */

export function getRoute<
  T extends RouteSection,
  K extends RouteKey<T>
>(section: T, key: K): RoutesType[T][K] {
  return ROUTES[section][key];
}