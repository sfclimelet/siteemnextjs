import Image from "next/image";
import logo from "../../public/logo-sef.png";
import "../../styles/footer/footer-Home.scss";

export default function FooterHome() {
    return (
        <>
            <footer id="ftroda" className="bg-rodape">
                <div className="container">
                    <div className="row gy-5 align-items-center mx-auto">

                        {/* Logo da Empresa */}
                        <div className="col-md-4 text-center">
                            <Image id="logoFt"
                                src={logo}
                                alt="Logo SEF"
                                className="img-fluid"
                                priority
                            />
                            <p className="fst-italic mt-3 small">
                                Confiança e garantia em cada serviço
                            </p>
                        </div>

                        {/* Links */}
                        <div className="col-md-4 text-center">
                            <h3 className="titulo-links">
                                Links Rápidos <i className="bi bi-check"></i>
                            </h3>
                            <ul className="list-unstyled">
                                <li>
                                    <a className="footer-link" href="#">
                                        Quem Somos
                                    </a>
                                </li>
                                <li>
                                    <a className="footer-link" href="#">
                                        Serviço
                                    </a>
                                </li>
                                <li>
                                    <a className="footer-link" href="#">
                                        Desenvolvedor
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Contato - Redes */}
                        <div className="col-md-4 my-auto text-center">
                            <h3 className="titulo-redes">
                                Redes Sociais <i className="bi bi-person-fill"></i>
                            </h3>

                            <div className="social-icons-rdp mt-3">
                                <a
                                    className="social-icon social-icon-face"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    href="#"
                                    aria-label="Facebook"
                                    title="Facebook"
                                >
                                    <i className="bi bi-facebook"></i>
                                </a>

                                <a
                                    className="social-icon social-icon-insta"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    aria-label="Instagram"
                                    title="Instagram"
                                    href="#"
                                >
                                    <i className="bi bi-instagram"></i>
                                </a>

                                <a
                                    className="social-icon social-icon-google"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    aria-label="Google"
                                    title="Google"
                                    href="#"
                                >
                                    <i className="bi bi-google"></i>
                                </a>
                            </div>
                        </div>

                        {/* Rodapé */}
                        <div className="border-top border-secondary text-center lead mt-4 pt-3 pb-3">
                            <small>
                                &copy; 2025{" "}
                                <span className="text-gradiente fw-semibold">
                                    SEF Climatização e Elétrica
                                </span>
                                . Todos os direitos reservados.
                            </small>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
