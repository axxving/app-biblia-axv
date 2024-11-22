import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export const Header = () => {
    const headerStyle = {
        position: 'fixed',
        top: '0',
        width: '100%',
    };

    return (
        <>
            <header className="shadow bg-light" id="header" style={headerStyle}>
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light container">
                        <a className="navbar-brand d-flex align-items-center">
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
                                    <a className="nav-link">Inicio</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link">Acerca</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link">Biblioteca</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link">Recursos</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link">Blog</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link">Contacto</a>
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
