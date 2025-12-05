import Link from "next/link";

import { Store, ShoppingBag } from "lucide-react";

import "../../styles/pages/home/sectionLojaSEF/SectionLojaSEF.scss";

export default function SectionLojaSEF() {
    return (
        <>
            <div className="container-loja-card">
                {/* TOPO DO CARD */}
                <div className="card-top-area">
                    <div className="card-top-icon">
                        <Store />
                    </div>

                    {/* A CURVA BRANCA EMBAIXO DO DEGRADÊ */}
                    <div className="card-curve"></div>
                </div>

                {/* CONTEÚDO DO CARD */}
                <h2 className="loja-title">Conheça nossa Loja</h2>

                <p className="loja-descricao">
                    Ar-condicionado de última geração para sua casa ou empresa.
                    Eficiência, design moderno e instalação profissional garantida.
                </p>

                <Link href="#" className="btn-loja" aria-label="Comprar Agora" title="Comprar Agora">
                    Comprar Agora <ShoppingBag />
                </Link>
            </div>
        </>
    );
}