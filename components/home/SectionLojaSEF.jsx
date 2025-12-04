import "../../styles/pages/home/sectionLojaSEF/SectionLojaSEF.scss";

import { Store, ShoppingBag } from "lucide-react";

export default function SectionLojaSEF() {
    return (
        <>
            <div className="container-loja">
                {/* Coluna de Texto */}
                <div className="loja-text">
                    <h2 className="title">Conheça nossa Loja <Store /></h2>
                    <p className="descricao">
                        Ar-condicionado de última geração para sua casa ou empresa. Eficiência, design moderno e instalação profissional garantida.
                    </p>
                    <button className="btn-loja" type="button">
                        Comprar Agora <ShoppingBag />
                    </button>
                </div>
            </div>
        </>
    );
}