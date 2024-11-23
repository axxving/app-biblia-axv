import React, { useRef } from 'react';
import { Header } from './sections/header/Header';
import { Hero } from './sections/hero/Hero';
import { About } from './sections/about/About';
import { Library } from './sections/library/Library';
import { BibleStudies } from './sections/bibleStudies/BibleStudies';
import { InteractiveResources } from './sections/interactiveResources/InteractiveResources';
import { Blog } from './sections/blog/Blog';
import { Contact } from './sections/contact/Contact';
import { Footer } from './sections/footer/Footer';

export const Page = () => {
    const heroRef = useRef(null);
    const aboutRef = useRef(null);
    const libraryRef = useRef(null);
    const interactiveResourcesRef = useRef(null);
    const blogRef = useRef(null);
    const contactRef = useRef(null);

    const pageStyle = {
        overflow: 'hidden',
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
    };

    return (
        <div style={pageStyle}>
            <Header
                heroRef={heroRef}
                aboutRef={aboutRef}
                libraryRef={libraryRef}
                interactiveResourcesRef={interactiveResourcesRef}
                blogRef={blogRef}
                contactRef={contactRef}
            />
            <Hero ref={heroRef} />
            <About ref={aboutRef} />
            <Library ref={libraryRef} />
            <BibleStudies />
            <InteractiveResources ref={interactiveResourcesRef} />
            <Blog ref={blogRef} />
            <Contact ref={contactRef} />
            <Footer />
        </div>
    );
};
