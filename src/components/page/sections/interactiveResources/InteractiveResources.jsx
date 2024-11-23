import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Slide, Zoom } from 'react-awesome-reveal';

export const InteractiveResources = () => {
    return (
        <section
            className="py-5"
            id="interactive-resources"
            style={{ backgroundColor: '#f8f9fa' }}
        >
            <div className="container">
                {/* Título */}
                <div className="text-center mb-5">
                    <Zoom>
                        <h2 className="fw-bold display-6 text-primary">
                            <span style={{ color: '#6eca4a' }}>
                                Recursos Interactivos
                            </span>{' '}
                            para tu Estudio
                        </h2>
                        <p className="lead text-muted">
                            Descubre herramientas únicas para explorar la Biblia
                            de una forma visual y dinámica.
                        </p>
                    </Zoom>
                </div>

                {/* Recursos Interactivos */}
                <div className="row g-4">
                    {/* Mapas Bíblicos */}
                    <div className="col-lg-4 col-md-6">
                        <Slide direction="up" triggerOnce={true}>
                            <div className="card border-0 shadow h-100 text-center">
                                <div className="card-body">
                                    <i
                                        className="bi bi-map text-info mb-3"
                                        style={{ fontSize: '3rem' }}
                                    ></i>
                                    <h5 className="fw-bold">Mapas Bíblicos</h5>
                                    <p className="text-muted">
                                        Explora ubicaciones clave como Canaán,
                                        Egipto y Jerusalén a lo largo de la
                                        historia bíblica.
                                    </p>
                                    <button className="btn btn-outline-info btn-sm">
                                        Ver Mapas
                                    </button>
                                </div>
                            </div>
                        </Slide>
                    </div>

                    {/* Cronología Bíblica */}
                    <div className="col-lg-4 col-md-6">
                        <Slide direction="up" triggerOnce={true}>
                            <div className="card border-0 shadow h-100 text-center">
                                <div className="card-body">
                                    <i
                                        className="bi bi-clock-history text-warning mb-3"
                                        style={{ fontSize: '3rem' }}
                                    ></i>
                                    <h5 className="fw-bold">
                                        Cronología Bíblica
                                    </h5>
                                    <p className="text-muted">
                                        Visualiza eventos históricos en una
                                        línea del tiempo detallada y fácil de
                                        entender.
                                    </p>
                                    <button className="btn btn-outline-warning btn-sm">
                                        Explorar Cronología
                                    </button>
                                </div>
                            </div>
                        </Slide>
                    </div>

                    {/* Diccionario Bíblico */}
                    <div className="col-lg-4 col-md-6">
                        <Slide direction="up" triggerOnce={true}>
                            <div className="card border-0 shadow h-100 text-center">
                                <div className="card-body">
                                    <i
                                        className="bi bi-book-half text-success mb-3"
                                        style={{ fontSize: '3rem' }}
                                    ></i>
                                    <h5 className="fw-bold">
                                        Diccionario Bíblico
                                    </h5>
                                    <p className="text-muted">
                                        Encuentra significados, contextos
                                        históricos y referencias clave de
                                        términos bíblicos.
                                    </p>
                                    <button className="btn btn-outline-success btn-sm">
                                        Consultar Diccionario
                                    </button>
                                </div>
                            </div>
                        </Slide>
                    </div>

                    {/* Sección de Recursos Adicionales */}
                    <div className="col-12 text-center mt-5">
                        <Zoom>
                            <h4 className="fw-bold text-primary mb-4">
                                Recursos Adicionales
                            </h4>
                            <p className="lead text-muted">
                                Amplía tu estudio con materiales
                                complementarios, gráficos y esquemas temáticos.
                            </p>
                            <button className="btn btn-primary btn-lg">
                                Explorar Todos los Recursos
                            </button>
                        </Zoom>
                    </div>
                </div>
            </div>
        </section>
    );
};
