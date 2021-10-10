import React from 'react'
import { Link } from 'react-router-dom';
import { getAuth } from '@firebase/auth';

function Hero() {
    const auth=getAuth();
    var user=auth.currentUser;
    var path="/login";
    if(user){
        path="/dashboard";
    }
    return (
        <section id="hero" className="d-flex align-items-center">
            <div className="container">
                <h1>Welcome to <br /> Language Buddy</h1>
                <h2>We are a bunch of computer science<br />students making projects that will have real life impact </h2>
                <Link to={path} className="btn-get-started scrollto">Get Started</Link>
            </div>
        </section>
    )
}

export default Hero
