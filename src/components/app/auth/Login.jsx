import React from 'react';

export const Login = () => {
    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div
                className="card shadow-lg p-4"
                style={{ maxWidth: '400px', width: '100%' }}
            >
                {/* Título */}
                <div className="text-center mb-4">
                    <h2 className="fw-bold">Iniciar Sesión</h2>
                    <p className="text-muted">Accede a tu cuenta de Glori</p>
                </div>

                {/* Formulario */}
                <form>
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
                                placeholder="Ingresa tu contraseña"
                                required
                            />
                        </div>
                    </div>

                    {/* Botón de Login */}
                    <button type="submit" className="btn btn-primary w-100">
                        <i className="bi bi-box-arrow-in-right me-2"></i>Iniciar
                        Sesión
                    </button>
                </form>

                {/* Enlace de Registro */}
                <div className="text-center mt-3">
                    <p className="text-muted mb-0">
                        ¿No tienes cuenta?{' '}
                        <a
                            href="/register"
                            className="text-primary text-decoration-none"
                        >
                            Regístrate aquí
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};
