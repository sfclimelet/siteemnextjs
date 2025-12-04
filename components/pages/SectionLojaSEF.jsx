import "../../styles/pages/home/sectionLojaSEF/SectionLojaSEF.scss";

import { Store, ShoppingBag } from "lucide-react";

export default function SectionLojaSEF() {
    return (
        <div id="LojaSefHome" className="section-loja-sef">

            <div className="container-loja">

                {/* Coluna de Texto */}
                <div className="loja-text">
                    <h2 className="loja-title">
                        Conheça nossa Loja <Store />
                    </h2>

                    <p className="loja-descricao">
                        Ar-condicionado de última geração para sua casa ou empresa.
                        Eficiência, design moderno e instalação profissional garantida.
                    </p>

                    <button
                        className="btn-loja"
                        type="button"
                        aria-label="Comprar Agora"
                        title="Comprar agora"
                    >
                        Comprar Agora <ShoppingBag />
                    </button>
                </div>

                {/* Coluna de Imagem */}
                <div className="loja-media">
                    <div className="loja-card-img">
                        <img loading="lazy" src="#" alt="Loja SEF" />
                    </div>
                </div>

            </div>

        </div>
    );
}