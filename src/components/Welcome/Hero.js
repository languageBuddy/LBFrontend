import React from 'react'
import { Link } from 'react-router-dom';

function Hero() {
    return (
        <section id="hero" className="d-flex align-items-center">
            <div className="container">
                <h1>Welcome to <br /> Language Buddy</h1>
                <h2>We are team <br /> of talented designers making websites</h2>
                <Link to="/login" className="btn-get-started scrollto">Get Started</Link>
            </div>
        </section>
    )
}

export default Hero
