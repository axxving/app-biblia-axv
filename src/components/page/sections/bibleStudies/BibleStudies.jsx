import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Slide, Zoom } from 'react-awesome-reveal';

export const BibleStudies = () => {
    return (
        <section className="py-5 bg-light" id="bible-studies">
            <div className="container">
                {/* Título */}
                <div className="text-center mb-5">
                    <Zoom>
                        <h2 className="fw-bold display-6 text-primary">
                            <span style={{ color: '#6eca4a' }}>
                                Estudios Bíblicos
                            </span>{' '}
                            y Planes
                        </h2>
                        <p className="lead text-muted">
                            Sumérgete en la palabra de Dios con guías
                            interactivas, preguntas reflexivas y actividades.
                        </p>
                    </Zoom>
                </div>

                {/* Guías de Estudio */}
                <div className="row g-4 mb-5">
                    <div className="col-lg-4 col-md-6">
                        <Slide direction="up" triggerOnce={true}>
                            <div className="card border-0 shadow h-100 text-center">
                                <div className="card-body">
                                    <i
                                        className="bi bi-question-circle text-warning mb-3"
                                        style={{ fontSize: '2rem' }}
                                    ></i>
                                    <h5 className="fw-bold">
                                        Preguntas Reflexivas
                                    </h5>
                                    <p className="text-muted">
                                        Profundiza en los pasajes con preguntas
                                        cuidadosamente diseñadas.
                                    </p>
                                    <button className="btn btn-outline-warning btn-sm">
                                        Explorar Guías
                                    </button>
                                </div>
                            </div>
                        </Slide>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <Slide direction="up" triggerOnce={true}>
                            <div className="card border-0 shadow h-100 text-center">
                                <div className="card-body">
                                    <i
                                        className="bi bi-pencil-square text-success mb-3"
                                        style={{ fontSize: '2rem' }}
                                    ></i>
                                    <h5 className="fw-bold">
                                        Actividades Prácticas
                                    </h5>
                                    <p className="text-muted">
                                        Aplicaciones prácticas para enriquecer
                                        tu vida espiritual.
                                    </p>
                                    <button className="btn btn-outline-success btn-sm">
                                        Iniciar
                                    </button>
                                </div>
                            </div>
                        </Slide>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <Slide direction="up" triggerOnce={true}>
                            <div className="card border-0 shadow h-100 text-center">
                                <div className="card-body">
                                    <i
                                        className="bi bi-bookmark-heart text-danger mb-3"
                                        style={{ fontSize: '2rem' }}
                                    ></i>
                                    <h5 className="fw-bold">
                                        Seguimiento de Progreso
                                    </h5>
                                    <p className="text-muted">
                                        Registra tu avance y reflexiones para
                                        seguir creciendo.
                                    </p>
                                    <button className="btn btn-outline-danger btn-sm">
                                        Ver Mi Progreso
                                    </button>
                                </div>
                            </div>
                        </Slide>
                    </div>
                </div>

                {/* Planes de Estudio */}
                <div className="row g-4">
                    <div className="col-lg-6">
                        <Slide direction="left">
                            <div className="card border-0 shadow h-100">
                                <div className="card-body d-flex align-items-center">
                                    <i
                                        className="bi bi-journal-text text-info me-4"
                                        style={{ fontSize: '2rem' }}
                                    ></i>
                                    <div>
                                        <h5 className="fw-bold">
                                            Planes por Libros
                                        </h5>
                                        <p className="text-muted">
                                            Explora libros completos como
                                            Génesis, Salmos o Juan.
                                        </p>
                                        <button className="btn btn-outline-info btn-sm">
                                            Ver Detalles
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Slide>
                    </div>

                    <div className="col-lg-6">
                        <Slide direction="right">
                            <div className="card border-0 shadow h-100">
                                <div className="card-body d-flex align-items-center">
                                    <i
                                        className="bi bi-list-task text-primary me-4"
                                        style={{ fontSize: '2rem' }}
                                    ></i>
                                    <div>
                                        <h5 className="fw-bold">
                                            Planes Temáticos
                                        </h5>
                                        <p className="text-muted">
                                            Todo en un formato accesible.
                                        </p>
                                        <button className="btn btn-outline-primary btn-sm">
                                            Explorar Temas
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Slide>
                    </div>
                </div>

                {/* Testimonios */}
                {/* <div className="row mt-5">
                    <div className="col-12 text-center">
                        <h3 className="fw-bold text-primary mb-4">
                            Testimonios de Usuarios
                        </h3>
                    </div>
                    <div className="col-lg-6">
                        <blockquote className="blockquote bg-white p-4 shadow-sm rounded">
                            <p className="mb-3">
                                "Gracias a las guías y actividades, siento que
                                he crecido espiritualmente cada día."
                            </p>
                            <footer className="blockquote-footer">
                                Ana Rodríguez, <cite>Usuaria Premium</cite>
                            </footer>
                        </blockquote>
                    </div>
                    <div className="col-lg-6">
                        <blockquote className="blockquote bg-white p-4 shadow-sm rounded">
                            <p className="mb-3">
                                "Los planes temáticos son ideales para estudiar
                                temas profundos de forma estructurada."
                            </p>
                            <footer className="blockquote-footer">
                                Pedro Martínez,{' '}
                                <cite>Estudiante de Biblia</cite>
                            </footer>
                        </blockquote>
                    </div>
                </div> */}
            </div>
        </section>
    );
};
