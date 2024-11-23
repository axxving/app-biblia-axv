import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Slide, Zoom } from 'react-awesome-reveal';

export const Library = () => {
    return (
        <section className="py-5 bg-light" id="library">
            <div className="container">
                {/* Título */}
                <div className="text-center mb-5">
                    <Zoom>
                        <h2 className="fw-bold display-6 text-primary">
                            Biblioteca{' '}
                            <span style={{ color: '#6eca4a' }}>Bíblica</span>
                        </h2>
                        <p className="lead text-muted">
                            Sumérgete en la palabra de Dios con herramientas
                            únicas y versiones adaptadas a tus necesidades.
                        </p>
                    </Zoom>
                </div>

                {/* Imagen Inspiradora */}
                <div className="row mb-5">
                    <div className="col-12 text-center">
                        <Slide direction="up" triggerOnce={true}>
                            <img
                                src="https://via.placeholder.com/800x400"
                                alt="Lectura Bíblica"
                                className="img-fluid rounded shadow"
                            />
                            <p className="mt-3 text-muted">
                                "Lámpara es a mis pies tu palabra, y lumbrera a
                                mi camino." - Salmos 119:105
                            </p>
                        </Slide>
                    </div>
                </div>

                {/* Modo de Lectura */}
                <div className="row g-4">
                    <div className="col-lg-6">
                        <Slide direction="down" triggerOnce={true}>
                            <div className="card border-0 shadow h-100">
                                <div className="card-body d-flex align-items-center">
                                    <i
                                        className="bi bi-eye text-success me-4"
                                        style={{ fontSize: '2rem' }}
                                    ></i>
                                    <div>
                                        <h5 className="fw-bold">
                                            Modo de Lectura
                                        </h5>
                                        <p className="text-muted">
                                            Explora lecturas comparativas,
                                            devocionales y cronológicas para
                                            enriquecer tu experiencia.
                                        </p>
                                        <button className="btn btn-outline-success btn-sm">
                                            Explorar Modos
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Slide>
                    </div>

                    {/* Búsqueda Avanzada */}
                    <div className="col-lg-6">
                        <Slide direction="down" triggerOnce={true}>
                            <div className="card border-0 shadow h-100">
                                <div className="card-body d-flex align-items-center">
                                    <i
                                        className="bi bi-search text-warning me-4"
                                        style={{ fontSize: '2rem' }}
                                    ></i>
                                    <div>
                                        <h5 className="fw-bold">
                                            Búsqueda Avanzada
                                        </h5>
                                        <p className="text-muted">
                                            Encuentra versículos y temas
                                            específicos con herramientas de
                                            búsqueda precisa.
                                        </p>
                                        <button className="btn btn-outline-warning btn-sm">
                                            Buscar
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Slide>
                    </div>
                </div>

                {/* Sección de Versiones */}
                <div className="row g-4 mt-5">
                    <div className="col-12 text-center">
                        <Zoom>
                            <h3 className="fw-bold text-primary mb-4">
                                Versiones Disponibles
                            </h3>
                        </Zoom>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <Slide direction="up" triggerOnce={true}>
                            <div className="card border-0 shadow h-100">
                                <div className="card-body text-center">
                                    <h5 className="fw-bold">Reina-Valera</h5>
                                    <p className="text-muted">
                                        La versión clásica para un estudio
                                        profundo y tradicional.
                                    </p>
                                    <button className="btn btn-outline-primary btn-sm">
                                        Leer Ahora
                                    </button>
                                </div>
                            </div>
                        </Slide>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <Slide direction="up" triggerOnce={true}>
                            <div className="card border-0 shadow h-100">
                                <div className="card-body text-center">
                                    <h5 className="fw-bold">Dios Habla Hoy</h5>
                                    <p className="text-muted">
                                        Lenguaje moderno y accesible para todos
                                        los lectores.
                                    </p>
                                    <button className="btn btn-outline-primary btn-sm">
                                        Leer Ahora
                                    </button>
                                </div>
                            </div>
                        </Slide>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <Slide direction="up" triggerOnce={true}>
                            <div className="card border-0 shadow h-100">
                                <div className="card-body text-center">
                                    <h5 className="fw-bold">
                                        La Biblia de las Américas
                                    </h5>
                                    <p className="text-muted">
                                        Precisión y claridad en cada versículo.
                                    </p>
                                    <button className="btn btn-outline-primary btn-sm">
                                        Leer Ahora
                                    </button>
                                </div>
                            </div>
                        </Slide>
                    </div>
                </div>
            </div>
        </section>
    );
};
