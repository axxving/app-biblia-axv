import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Slide, Zoom } from 'react-awesome-reveal';

export const Footer = () => {
    return (
        <footer
            className="py-5"
            style={{ backgroundColor: '#1b325f', color: '#ffffff' }}
        >
            <div className="container">
                <div className="row">
                    {/* Logo y mensaje breve */}
                    <div className="col-lg-3 col-md-6 mb-4">
                        <Slide direction="left" duration={1000}>
                            <h5 className="fw-bold">
                                <span style={{ color: '#6eca4a' }}>Glori</span>
                            </h5>
                            <p
                                className="mt-3"
                                style={{ lineHeight: '1.8rem' }}
                            >
                                Una forma profunda y moderna de estudiar la
                                Biblia. Inspiración y conocimiento al alcance de
                                todos.
                            </p>
                        </Slide>
                    </div>

                    {/* Enlaces rápidos */}
                    <div className="col-lg-3 col-md-6 mb-4">
                        <Slide direction="left" duration={1200}>
                            <h6 className="fw-bold">Enlaces Rápidos</h6>
                            <ul
                                className="list-unstyled mt-3"
                                style={{ lineHeight: '2rem' }}
                            >
                                <li>
                                    <a
                                        href="#home"
                                        className="text-white text-decoration-none"
                                    >
                                        Inicio
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#library"
                                        className="text-white text-decoration-none"
                                    >
                                        Biblioteca
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#studies"
                                        className="text-white text-decoration-none"
                                    >
                                        Estudios Bíblicos
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#resources"
                                        className="text-white text-decoration-none"
                                    >
                                        Recursos Interactivos
                                    </a>
                                </li>
                            </ul>
                        </Slide>
                    </div>

                    {/* Información de contacto */}
                    <div className="col-lg-3 col-md-6 mb-4">
                        <Slide direction="left" duration={1300}>
                            <h6 className="fw-bold">Contáctanos</h6>
                            <ul
                                className="list-unstyled mt-3"
                                style={{ lineHeight: '2rem' }}
                            >
                                <li>
                                    <i className="bi bi-geo-alt-fill me-2"></i>
                                    Calle Ficticia 123, Ciudad
                                </li>
                                <li>
                                    <i className="bi bi-envelope-fill me-2"></i>
                                    <a
                                        href="mailto:soporte@glori.com"
                                        className="text-white text-decoration-none"
                                    >
                                        soporte@glori.com
                                    </a>
                                </li>
                                <li>
                                    <i className="bi bi-telephone-fill me-2"></i>
                                    +123 456 789
                                </li>
                            </ul>
                        </Slide>
                    </div>

                    {/* Redes sociales */}
                    <div className="col-lg-3 col-md-6">
                        <Slide direction="left" duration={1400}>
                            <h6 className="fw-bold">Síguenos</h6>
                            <p
                                className="mt-3"
                                style={{ lineHeight: '1.8rem' }}
                            >
                                Encuentra inspiración diaria y noticias en
                                nuestras redes sociales.
                            </p>
                            <div className="d-flex gap-3">
                                <a
                                    href="https://facebook.com"
                                    className="text-white fs-4"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="bi bi-facebook"></i>
                                </a>
                                <a
                                    href="https://twitter.com"
                                    className="text-white fs-4"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="bi bi-twitter"></i>
                                </a>
                                <a
                                    href="https://instagram.com"
                                    className="text-white fs-4"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="bi bi-instagram"></i>
                                </a>
                                <a
                                    href="https://linkedin.com"
                                    className="text-white fs-4"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="bi bi-linkedin"></i>
                                </a>
                            </div>
                        </Slide>
                    </div>
                </div>

                {/* Copyright */}
                <div className="text-center mt-4">
                    <Zoom>
                        <p className="text-white-50 mb-0">
                            &copy; {new Date().getFullYear()} Glori. Todos los
                            derechos reservados.
                        </p>
                    </Zoom>
                </div>
            </div>
        </footer>
    );
};
