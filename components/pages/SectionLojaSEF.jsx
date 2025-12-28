import Link from "next/link";

import { IconsLojaSEF } from "../../Icons/Icons";

import "../../styles/pages/home/sectionLojaSEF/SectionLojaSEF.scss";

export default function SectionLojaSEF() {
    return (
        <>
            <div className="container-loja-card">
                {/* TOPO DO CARD */}
                <div className="card-top-area">
                    <div className="card-top-icon">
                        <IconsLojaSEF.Store />
                    </div>

                    {/* A CURVA BRANCA EMBAIXO DO DEGRADÊ */}
                    <div className="card-curve"></div>
                </div>

                <div className="card-bd">
                    {/* CONTEÚDO DO CARD */}
                    <h2 className="loja-title">Conheça nossa Loja</h2>
                    <p className="loja-descricao">
                        Ar-condicionado de última geração para sua casa ou empresa.
                        Eficiência, design moderno e instalação profissional garantida.
                    </p>
                    <Link href="#" className="btn-loja" aria-label="Comprar Agora" title="Comprar Agora">
                        Comprar Agora <IconsLojaSEF.ShoppingBag />
                    </Link>
                </div>
            </div>
        </>
    );
}