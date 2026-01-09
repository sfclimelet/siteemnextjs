import {
  Layers, Search, Handshake, Send, Briefcase,
  Handbag, NotebookPen, Code, RefreshCcw, MapPinned,
  NotepadText, Users, User, Sparkles, CircleCheck, BadgeInfo,
  Lightbulb, UserPen, Star, BadgeQuestionMark, Shield,
  MessageSquareQuote, Medal, Image as ImageIcon, Camera, Sun, Moon, ShoppingBag
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
  },

  Company: {
    about: Users,
    values: Sparkles,
    quality: CircleCheck,
    info: BadgeInfo,
  },

  UI: {
    idea: Lightbulb,
    editUser: UserPen,
    rating: Star,
    help: BadgeQuestionMark,
    security: Shield,
    quote: MessageSquareQuote,
    award: Medal,
  },

  Media: {
    image: ImageIcon,
    camera: Camera,
    map: MapPinned,
    notes: NotepadText,
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