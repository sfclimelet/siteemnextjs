import { IconsNavbarHome as I } from "../../Icons/Icons";

export const menuData = [
  {
    id: "search",
    buttonId: "btnSearch",
    icon: <I.Search className="iconMn" />,
    type: "search",
  },

  {
    id: "services",
    label: "Serviços",
    buttonId: "btnServicos",
    icon: <I.Layers className="iconMn" />,
    items: [
      { href: "/loja", label: "Loja", icon: <I.Handbag /> },
      { href: "/orcamento", label: "Orçamento", icon: <I.NotebookPen /> },
      { href: "/dev", label: "Desenvolvedor", icon: <I.Code /> },
      { href: "/atualizacoes", label: "Atualizações", icon: <I.RefreshCcw /> },
      { href: "/area-de-atuacao", label: "Área de atuação", icon: <I.MapPinned /> },
      { href: "/termos", label: "Termos de Serviços", icon: <I.NotepadText /> },
    ],
  },

  {
    id: "quemSomos",
    label: "Quem Somos",
    buttonId: "btnQmSms",
    icon: <I.Handshake className="iconMn" />,
    items: [
      { href: "/parceiro", label: "Parceiro", icon: <I.Users /> },
      { href: "/depoimentos", label: "Depoimentos", icon: <I.Sparkles /> },
      { href: "/creditos", label: "Créditos", icon: <I.CircleCheck /> },
      { href: "/sobre", label: "Sobre a Empresa", icon: <I.BadgeInfo /> },
    ],
  },

  {
    id: "suporte",
    label: "Ajuda e Suporte",
    buttonId: "btnAjSu",
    icon: <I.Send className="iconMn" />,
    items: [
      { href: "/dicas", label: "Dicas", icon: <I.Lightbulb /> },
      { href: "/contato", label: "Contato", icon: <I.UserPen /> },
      { href: "/avaliacao", label: "Avalie", icon: <I.Star /> },
      { href: "/faq", label: "FAQ", icon: <I.BadgeQuestionMark /> },
      { href: "/privacidade", label: "Privacidade", icon: <I.Shield /> },
    ],
  },

  {
    id: "portCert",
    label: "Portifólio e Certificações",
    buttonId: "btnPortCert",
    icon: <I.Briefcase className="iconMn" />,
    items: [
      { href: "/feedback", label: "Feedback", icon: <I.MessageSquareQuote /> },
      { href: "/certificacoes", label: "Certificações", icon: <I.Medal /> },
      { href: "/galeria", label: "Galeria", icon: <I.ImageIcon /> },
      { href: "/antes-depois", label: "Antes e Depois", icon: <I.Camera /> },
    ],
  },
];