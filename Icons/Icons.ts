import {
  Layers, Search, Handshake, Send, Briefcase,
  Handbag, NotebookPen, Code, RefreshCcw, MapPinned,
  Users, User, Sparkles, CircleCheck, BadgeInfo,
  Lightbulb, UserPen, Star, BadgeQuestionMark, Shield,
  MessageSquareQuote, MessageSquareText ,Medal, Image as ImageIcon, Camera, Sun, Moon, ShoppingBag, ArrowLeft,
  Info, ReceiptText
} from "lucide-react";

import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaGoogle
} from "react-icons/fa";

export const IconsNavbarHome = {
  Menu: {
    search: Search,
    back: ArrowLeft,
    services: Layers,
    company: Handshake,
    contact: Send,
    portfolio: Briefcase,
  },

  Services: {
    shop: Handbag,
    maintenance: RefreshCcw,
    projects: NotebookPen,
    development: Code,
    map: MapPinned,
    info: ReceiptText,
  },

  Company: {
    about: Users,
    values: Sparkles,
    quality: CircleCheck,
    sobre: Info,
  },

  Suporte: {
    idea: Lightbulb,
    editUser: UserPen,
    contato: User,
    rating: Star,
    help: BadgeQuestionMark,
    security: Shield,
    quote: MessageSquareQuote,
  },

  PortifilioeCert: {
    quotetxt: MessageSquareText,
    award: Medal,
    image: ImageIcon,
    camera: Camera,
  },
};

export const IconsBtnToggle = {
  Sun, Moon
}

export const IconsLojaSEF = {
  ShoppingBag
}

export const IconsQmSms = {
  FacebookIcon: FaFacebook,
  InstagramIcon: FaInstagram,
  WhatsAppIcon: FaWhatsapp,
  User
}

export const IconsFooterHome = {
  facebk: FaFacebook,
  insta: FaInstagram,
  googl: FaGoogle,
}