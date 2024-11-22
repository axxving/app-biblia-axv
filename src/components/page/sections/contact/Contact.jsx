import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Contact = () => {
    return (
        <section className="py-5 bg-light" id="contact">
            <div className="container">
                {/* Título */}
                <div className="text-center mb-5">
                    <h2 className="fw-bold display-6">
                        <span style={{ color: '#6eca4a' }}>Contáctanos</span>
                    </h2>
                    <p className="lead text-muted">
                        ¿Tienes alguna duda, sugerencia o necesitas ayuda?
                        ¡Estamos aquí para escucharte!
                    </p>
                </div>

                <div className="row g-4">
                    {/* Formulario de contacto */}
                    <div className="col-lg-6">
                        <div className="card border-0 shadow-sm p-4 h-100">
                            <h4 className="fw-bold mb-4 text-primary">
                                Envíanos un mensaje
                            </h4>
                            <form>
                                <div className="mb-3">
                                    <label
                                        htmlFor="name"
                                        className="form-label"
                                    >
                                        Nombre Completo
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        placeholder="Tu nombre"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="email"
                                        className="form-label"
                                    >
                                        Correo Electrónico
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        placeholder="nombre@ejemplo.com"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="message"
                                        className="form-label"
                                    >
                                        Mensaje
                                    </label>
                                    <textarea
                                        className="form-control"
                                        id="message"
                                        rows="4"
                                        placeholder="Escribe tu mensaje aquí..."
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-primary w-100"
                                >
                                    Enviar Mensaje
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Información de contacto */}
                    <div className="col-lg-6">
                        <div className="card border-0 shadow-sm p-4 h-100">
                            <h4 className="fw-bold mb-4 text-primary">
                                Información de Contacto
                            </h4>
                            <ul className="list-unstyled">
                                <li className="mb-3">
                                    <i className="bi bi-geo-alt-fill me-2 text-primary"></i>
                                    Dirección: Calle Ficticia 123, Ciudad, País
                                </li>
                                <li className="mb-3">
                                    <i className="bi bi-envelope-fill me-2 text-primary"></i>
                                    Correo:{' '}
                                    <a
                                        href="mailto:soporte@glori.com"
                                        className="text-decoration-none"
                                    >
                                        soporte@glori.com
                                    </a>
                                </li>
                                <li className="mb-3">
                                    <i className="bi bi-telephone-fill me-2 text-primary"></i>
                                    Teléfono: +123 456 789
                                </li>
                            </ul>
                            <h5 className="fw-bold mt-4 text-primary">
                                Redes Sociales
                            </h5>
                            <div className="d-flex gap-3 mt-3">
                                <a
                                    href="https://facebook.com"
                                    className="text-primary fs-4"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="bi bi-facebook"></i>
                                </a>
                                <a
                                    href="https://twitter.com"
                                    className="text-primary fs-4"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="bi bi-twitter"></i>
                                </a>
                                <a
                                    href="https://instagram.com"
                                    className="text-primary fs-4"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="bi bi-instagram"></i>
                                </a>
                                <a
                                    href="https://linkedin.com"
                                    className="text-primary fs-4"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="bi bi-linkedin"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
