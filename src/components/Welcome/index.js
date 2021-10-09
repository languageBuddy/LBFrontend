import React from 'react'
import About from './About';
import Contact from './Contact';
import Developer from './Developer';
import Footer from './Footer';
import Whyus from './Whyus';
import '../../assets/css/style.css'
import Header from './Header';
import Hero from './Hero';

function index() {
    return (
        <div>
            <Hero />
            <main id="main">
                <Header />
                <Whyus />
                <About />
                <Developer />
                <Contact />
            </main >
            <Footer />
        </div>
    );
}

export default index
