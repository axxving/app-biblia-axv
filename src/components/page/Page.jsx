import React from 'react';
import { Header } from './sections/header/Header';
import { Hero } from './sections/hero/Hero';

export const Page = () => {
    const pageStyle = {
        overflow: 'hidden',
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
    };

    return (
        <div style={pageStyle}>
            <Header />
            <Hero />
        </div>
    );
};
