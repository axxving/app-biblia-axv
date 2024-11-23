import React from 'react';
import { Slide } from 'react-awesome-reveal';

export const Hero = () => {
    const heroStyle = {
        minHeight: '100vh',
    };

    return (
        <section className="bg-light text-center mt-5">
            <div
                className="container d-flex flex-column justify-content-center align-items-center"
                style={heroStyle}
            >
                {/* Mensaje motivador o versículo destacado */}
                <Slide direction="left">
                    <h1 className="display-4 fw-bold mb-3">
                        "Lámpara es a mis pies tu palabra, y lumbrera a mi
                        camino."
                    </h1>
                    <p className="lead text-muted mb-5">
                        Explora, estudia y crece en tu fe con Glori.
                    </p>

                    {/* Botones de acción */}
                    <div className="d-flex justify-content-center gap-3 mb-5">
                        <a href="#explorar" className="btn btn-primary">
                            <i className="bi bi-book me-2"></i>
                            Explora la Biblia
                        </a>
                        <a href="#unete" className="btn btn-outline-danger">
                            <i className="bi bi-play-circle me-2"></i>
                            Únete a Glori
                        </a>
                    </div>
                </Slide>

                {/* Breve introducción */}
                <Slide direction="right">
                    <div className="row justify-content-center">
                        {/* Tarjeta 1 */}
                        <div className="col-md-4 d-flex justify-content-center mb-4">
                            <div
                                className="card border-0 shadow h-100 hover-shadow"
                                style={{ maxWidth: '350px' }}
                            >
                                <div className="card-body d-flex align-items-center justify-content-between">
                                    <div className="text-start">
                                        <h5 className="card-title">
                                            Estudio profundo de la Biblia
                                        </h5>
                                        <p className="card-text">
                                            Accede a herramientas avanzadas para
                                            comprender mejor la Palabra de Dios.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Tarjeta 2 */}
                        <div className="col-md-4 d-flex justify-content-center mb-4">
                            <div
                                className="card border-0 shadow h-100"
                                style={{ maxWidth: '350px' }}
                            >
                                <div className="card-body d-flex align-items-center justify-content-between">
                                    <div className="text-start">
                                        <h5 className="card-title">
                                            Recursos interactivos
                                        </h5>
                                        <p className="card-text">
                                            Descubre mapas, gráficos y más para
                                            enriquecer tu estudio.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Tarjeta 3 */}
                        <div className="col-md-4 d-flex justify-content-center mb-4">
                            <div
                                className="card border-0 shadow h-100"
                                style={{ maxWidth: '350px' }}
                            >
                                <div className="card-body d-flex align-items-center justify-content-between">
                                    <div className="text-start">
                                        <h5 className="card-title">
                                            Versiones en español
                                        </h5>
                                        <p className="card-text">
                                            Lee la Biblia en tus versiones
                                            favoritas, totalmente en español.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slide>
            </div>
        </section>
    );
};
