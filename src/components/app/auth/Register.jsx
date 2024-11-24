import React from 'react';

export const Register = () => {
    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div
                className="card shadow-lg p-4"
                style={{ maxWidth: '500px', width: '100%' }}
            >
                {/* Título */}
                <div className="text-center mb-4">
                    <h2 className="fw-bold">Crear Cuenta</h2>
                    <p className="text-muted">
                        Únete a Glori y comienza tu viaje espiritual
                    </p>
                </div>

                {/* Formulario */}
                <form>
                    {/* Nombre */}
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">
                            Nombre Completo
                        </label>
                        <div className="input-group">
                            <span className="input-group-text">
                                <i className="bi bi-person"></i>
                            </span>
                            <input
                                type="text"
                                id="name"
                                className="form-control"
                                placeholder="Ingresa tu nombre"
                                required
                            />
                        </div>
                    </div>

                    {/* Correo Electrónico */}
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                            Correo Electrónico
                        </label>
                        <div className="input-group">
                            <span className="input-group-text">
                                <i className="bi bi-envelope"></i>
                            </span>
                            <input
                                type="email"
                                id="email"
                                className="form-control"
                                placeholder="Ingresa tu correo"
                                required
                            />
                        </div>
                    </div>

                    {/* Contraseña */}
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">
                            Contraseña
                        </label>
                        <div className="input-group">
                            <span className="input-group-text">
                                <i className="bi bi-lock"></i>
                            </span>
                            <input
                                type="password"
                                id="password"
                                className="form-control"
                                placeholder="Crea una contraseña"
                                required
                            />
                        </div>
                    </div>

                    {/* Confirmar Contraseña */}
                    <div className="mb-3">
                        <label
                            htmlFor="confirm-password"
                            className="form-label"
                        >
                            Confirmar Contraseña
                        </label>
                        <div className="input-group">
                            <span className="input-group-text">
                                <i className="bi bi-lock-fill"></i>
                            </span>
                            <input
                                type="password"
                                id="confirm-password"
                                className="form-control"
                                placeholder="Confirma tu contraseña"
                                required
                            />
                        </div>
                    </div>

                    {/* Botón de Registro */}
                    <button type="submit" className="btn btn-success w-100">
                        <i className="bi bi-person-plus-fill me-2"></i>
                        Registrarse
                    </button>
                </form>

                {/* Enlace a Iniciar Sesión */}
                <div className="text-center mt-3">
                    <p className="text-muted mb-0">
                        ¿Ya tienes una cuenta?{' '}
                        <a
                            href="/login"
                            className="text-primary text-decoration-none"
                        >
                            Inicia sesión aquí
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};
