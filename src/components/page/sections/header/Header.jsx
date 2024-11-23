import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useNavigate } from 'react-router-dom';

export const Header = ({
    heroRef,
    aboutRef,
    libraryRef,
    interactiveResourcesRef,
    blogRef,
    contactRef,
}) => {
    const headerStyle = {
        position: 'fixed',
        top: '0',
        width: '100%',
    };

    const navigate = useNavigate();

    const handleScroll = ref => {
        if (ref && ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <header className="shadow bg-light" id="header" style={headerStyle}>
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light container">
                        <a
                            className="navbar-brand d-flex align-items-center"
                            onClick={() => handleScroll(heroRef)}
                        >
                            <i className="bi bi-book-half me-3"></i>
                            <span className="fw-bold">Glori</span>
                        </a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div
                            className="collapse navbar-collapse justify-content-between"
                            id="navbarNav"
                        >
                            <ul className="navbar-nav mx-auto">
                                <li className="nav-item">
                                    <a
                                        className="nav-link"
                                        onClick={() => handleScroll(heroRef)}
                                    >
                                        Inicio
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link"
                                        onClick={() => handleScroll(aboutRef)}
                                    >
                                        Acerca
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link"
                                        onClick={() => handleScroll(libraryRef)}
                                    >
                                        Biblioteca
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link"
                                        onClick={() =>
                                            handleScroll(
                                                interactiveResourcesRef
                                            )
                                        }
                                    >
                                        Recursos
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link"
                                        onClick={() => handleScroll(blogRef)}
                                    >
                                        Blog
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link"
                                        onClick={() => handleScroll(contactRef)}
                                    >
                                        Contacto
                                    </a>
                                </li>
                            </ul>
                            <div className="d-flex">
                                <a className="btn btn-warning btn-sm me-2 d-flex align-items-center">
                                    <i className="bi bi-person-plus me-2"></i>
                                    Registro
                                </a>
                                <a className="btn btn-danger btn-sm d-flex align-items-center">
                                    <i className="bi bi-box-arrow-in-right me-2"></i>{' '}
                                    Inicio de Sesión
                                </a>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    );
};
