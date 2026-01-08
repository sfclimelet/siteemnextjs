import { Imgs } from "../../config/images";
import { IconsFooterHome } from "../../Icons/Icons";

export const FooterHomeData = {
    logo: {
        src: Imgs.FtHome.imgLogoTrans,
        alt: "SEF Climatização e Elétrica",
    },
    slogan: "Confiança e garantia em cada serviço",
    links: [
        { 
            label: "Quem Somos",
            href: "#QuemSomos"
        },
        { 
            label: "Serviços",
            href: "#Servicos"
        },
        { 
            label: "Desenvolvedor",
            href: "#Dev"
        }
    ],

    socials: [
        {
            name: "Facebook",
            href: "#",
            icon: IconsFooterHome.facebk
        },
        {
            name: "Instagram",
            href: "#",
            icon: IconsFooterHome.insta
        },
        {
            name: "Google",
            href: "#",
            icon: IconsFooterHome.googl
        },
    ]
}