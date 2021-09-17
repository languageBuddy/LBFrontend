import React from 'react'
import About from './About';
import Contact from './Contact';
import Developer from './Developer';
import Footer from './Footer';
import Head from './Head';
import Whyus from './Whyus';
import '../../assets/css/style.css'
import Header from './Header';

function index() {
    return (
        <div>
            <Head />
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
