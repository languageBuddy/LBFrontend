import React from 'react'
import { Link } from 'react-router-dom'
import { getAuth } from '@firebase/auth';

function Header() {
    const auth = getAuth();
    var user = auth.currentUser;
    var path = "/login";
    if (user) {
        path = "/dashboard";
    }
    return (
        <>
            <div id="topbar" className="d-flex align-items-center fixed-top">
                <div className="container d-flex justify-content-between">
                    <div className="contact-info d-flex align-items-center">
                        <i className="bi bi-envelope"></i> <a href="mailto:lanuguagebuddy@gmail.com">lanuguagebuddy@gmail.com</a>
                        <i className="bi bi-phone"></i> +91 9368935647
                    </div>
                    <div className="d-none d-lg-flex social-links align-items-center">
                        <a href="https://github.com/languageBuddy" target="_blank" className="github"><i className="bi bi-github"></i></a>

                    </div>
                </div>
            </div>
            {/* // <!-- ======= Header ======= --> */}
            <header id="header" className="fixed-top">
                <div className="container d-flex align-items-center">

                    <h1 className="logo me-2">LANGUAGE BUDDY</h1>
                    {/* <!-- Uncomment below if you prefer to use an image logo --> */}
                    <a href="/" className="logo me-auto"><img src="#" alt="" className="img-fluid" /></a>

                    <nav id="navbar" className="navbar order-last order-lg-0">
                        <ul>
                            <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
                            <li><a className="nav-link scrollto" href="#about">About</a></li>
                            <li><a className="nav-link scrollto" href="#cont">Contact</a></li>
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle"></i>
                    </nav>
                    {/* navbar  */}

                    <Link to={path} className="appointment-btn scrollto d-none d-md-inline"> Let's  Get Started</Link>

                </div>
            </header>
            {/* //  End Header */}
        </>

    )
}

export default Header
