import { IconsNavbarHome as I } from "../../Icons/Icons";
import { ROUTES } from "./menuRoutes";

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
      { href: ROUTES.servicos.loja, label: "Loja", icon: <I.Handbag /> },
      { href: ROUTES.servicos.orcamento, label: "Orçamento", icon: <I.NotebookPen /> },
      { href: ROUTES.servicos.dev, label: "Desenvolvedor", icon: <I.Code /> },
      { href: ROUTES.servicos.atualizacoes, label: "Atualizações", icon: <I.RefreshCcw /> },
      { href: ROUTES.servicos.areadeAtuacao, label: "Área de atuação", icon: <I.MapPinned /> },
      { href: ROUTES.servicos.termos, label: "Termos de Serviços", icon: <I.NotepadText /> },
    ],
  },

  {
    id: "quemSomos",
    label: "Quem Somos",
    buttonId: "btnQmSms",
    icon: <I.Handshake className="iconMn" />,
    items: [
      { href: ROUTES.quemSomos.parceiro, label: "Parceiro", icon: <I.Users /> },
      { href: ROUTES.quemSomos.depoimentos, label: "Depoimentos", icon: <I.Sparkles /> },
      { href: ROUTES.quemSomos.creditos, label: "Créditos", icon: <I.CircleCheck /> },
      { href: ROUTES.quemSomos.sobre, label: "Sobre a Empresa", icon: <I.BadgeInfo /> },
    ],
  },

  {
    id: "suporte",
    label: "Ajuda e Suporte",
    buttonId: "btnAjSu",
    icon: <I.Send className="iconMn" />,
    items: [
      { href: ROUTES.AjudaeSuporte.dicas, label: "Dicas", icon: <I.Lightbulb /> },
      { href: ROUTES.AjudaeSuporte.contato, label: "Contato", icon: <I.UserPen /> },
      { href: ROUTES.AjudaeSuporte.avaliacao, label: "Avalie", icon: <I.Star /> },
      { href: ROUTES.AjudaeSuporte.faq, label: "FAQ", icon: <I.BadgeQuestionMark /> },
      { href: ROUTES.AjudaeSuporte.privacidade, label: "Privacidade", icon: <I.Shield /> },
    ],
  },

  {
    id: "portCert",
    label: "Portifólio e Certificações",
    buttonId: "btnPortCert",
    icon: <I.Briefcase className="iconMn" />,
    items: [
      { href: ROUTES.PortfolioeCerti.feedback, label: "Feedback", icon: <I.MessageSquareQuote /> },
      { href: ROUTES.PortfolioeCerti.certificacoes, label: "Certificações", icon: <I.Medal /> },
      { href: ROUTES.PortfolioeCerti.galeria, label: "Galeria", icon: <I.ImageIcon /> },
      { href: ROUTES.PortfolioeCerti.antesDepois, label: "Antes e Depois", icon: <I.Camera /> },
    ],
  },
];