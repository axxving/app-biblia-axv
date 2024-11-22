import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Blog = () => {
    const blogPosts = [
        {
            id: 1,
            title: 'Cómo empezar un estudio profundo de la Biblia',
            excerpt:
                'Consejos prácticos para interpretar las Escrituras de manera efectiva.',
            date: '15 de noviembre de 2024',
            image: 'https://via.placeholder.com/400x300?text=Estudio+Bíblico',
            category: 'Estudio Bíblico',
        },
        {
            id: 2,
            title: 'El significado de los Salmos en la vida diaria',
            excerpt: 'Descubre cómo los Salmos pueden guiar tu espiritualidad.',
            date: '10 de noviembre de 2024',
            image: 'https://via.placeholder.com/400x300?text=Salmos',
            category: 'Reflexiones',
        },
        {
            id: 3,
            title: 'Entrevista con un teólogo: La Biblia en el mundo moderno',
            excerpt:
                'Perspectivas actuales sobre el impacto de la Biblia en la sociedad.',
            date: '5 de noviembre de 2024',
            image: 'https://via.placeholder.com/400x300?text=Entrevista',
            category: 'Entrevistas',
        },
    ];

    return (
        <section
            className="py-5"
            id="blog"
            style={{ backgroundColor: '#f8f9fa' }}
        >
            <div className="container">
                {/* Título */}
                <div className="text-center mb-5">
                    <h2 className="fw-bold display-6 text-primary">
                        <span style={{ color: '#6eca4a' }}>Blog</span> Bíblico
                    </h2>
                    <p className="lead text-muted">
                        Explora artículos, reflexiones y entrevistas diseñadas
                        para profundizar en tu estudio bíblico.
                    </p>
                </div>

                {/* Listado de publicaciones */}
                <div className="row g-4">
                    {blogPosts.map(post => (
                        <div className="col-lg-4 col-md-6" key={post.id}>
                            <div className="card border-0 shadow-sm h-100">
                                <img
                                    src={post.image}
                                    className="card-img-top"
                                    alt={post.title}
                                    style={{
                                        height: '200px',
                                        objectFit: 'cover',
                                    }}
                                />
                                <div className="card-body">
                                    <span className="badge bg-info mb-2">
                                        {post.category}
                                    </span>
                                    <h5 className="card-title fw-bold">
                                        {post.title}
                                    </h5>
                                    <p className="card-text text-muted">
                                        {post.excerpt}
                                    </p>
                                    <p className="text-muted small">
                                        {post.date}
                                    </p>
                                    <a
                                        href={`/blog/${post.id}`}
                                        className="btn btn-outline-primary btn-sm"
                                    >
                                        Leer Más
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Botón para ver más artículos */}
                <div className="text-center mt-5">
                    <button className="btn btn-primary btn-lg">
                        Explorar Todos los Artículos
                    </button>
                </div>
            </div>
        </section>
    );
};
