import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Fade, Slide, Zoom } from 'react-awesome-reveal';

export const About = React.forwardRef((props, ref) => {
    return (
        <section className="bg-light py-5" id="about" ref={ref}>
            <div className="container">
                {/* Título */}
                <div className="text-center mb-5">
                    <Zoom>
                        <h2 className="fw-bold display-6 text-primary">
                            Acerca de{' '}
                            <span style={{ color: '#6eca4a' }}>Glori</span>
                        </h2>
                        <p className="lead text-muted">
                            Conoce nuestra misión, visión y lo que nos motiva a
                            seguir.
                        </p>
                    </Zoom>
                </div>

                <div className="row g-4">
                    {/* Misión */}
                    <div className="col-lg-4">
                        <Fade>
                            <div className="card border-0 shadow h-100">
                                <div className="card-body text-center">
                                    <i
                                        className="bi bi-heart-fill text-danger mb-4"
                                        style={{ fontSize: '2rem' }}
                                    ></i>
                                    <h5 className="fw-bold">Nuestra Misión</h5>
                                    <p className="text-muted">
                                        Brindar herramientas prácticas para
                                        leer, estudiar y comprender la Biblia
                                        profundamente, ayudando a las personas a
                                        conectar con su fe.
                                    </p>
                                </div>
                            </div>
                        </Fade>
                    </div>

                    {/* Visión */}
                    <div className="col-lg-4">
                        <Fade>
                            <div className="card border-0 shadow h-100">
                                <div className="card-body text-center">
                                    <i
                                        className="bi bi-eye-fill text-info mb-4"
                                        style={{ fontSize: '2rem' }}
                                    ></i>
                                    <h5 className="fw-bold">Nuestra Visión</h5>
                                    <p className="text-muted">
                                        Convertirnos en la plataforma líder en
                                        estudios bíblicos en español,
                                        promoviendo el aprendizaje y la
                                        comunidad entre creyentes de todo el
                                        mundo.
                                    </p>
                                </div>
                            </div>
                        </Fade>
                    </div>

                    {/* Equipo */}
                    <div className="col-lg-4">
                        <Fade>
                            <div className="card border-0 shadow h-100">
                                <div className="card-body text-center">
                                    <i
                                        className="bi bi-people-fill text-success mb-4"
                                        style={{ fontSize: '2rem' }}
                                    ></i>
                                    <h5 className="fw-bold">Nuestro Equipo</h5>
                                    <p className="text-muted">
                                        Un grupo de apasionados por la Biblia y
                                        la tecnología, dedicados a crear una
                                        experiencia enriquecedora para nuestros
                                        usuarios.
                                    </p>
                                </div>
                            </div>
                        </Fade>
                    </div>
                </div>

                {/* Imagen Inspiradora */}
                <div className="row mt-5">
                    <Slide direction="up" triggerOnce={true}>
                        <div className="col-12 text-center">
                            <img
                                src="https://via.placeholder.com/800x400"
                                alt="Inspiración de Glori"
                                className="img-fluid rounded shadow"
                            />
                            <p className="mt-4 text-muted">
                                "La palabra de Dios es viva y eficaz..." -
                                Hebreos 4:12
                            </p>
                        </div>
                    </Slide>
                </div>
            </div>
        </section>
    );
});
