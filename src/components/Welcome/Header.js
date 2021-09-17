import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <>
            <div id="topbar" className="d-flex align-items-center fixed-top">
                <div className="container d-flex justify-content-between">
                    <div className="contact-info d-flex align-items-center">
                        <i className="bi bi-envelope"></i> <a href="mailto:contact@example.com">contact@example.com</a>
                        <i className="bi bi-phone"></i> +1 5589 55488 55
                    </div>
                    <div className="d-none d-lg-flex social-links align-items-center">
                        <a href="https://github.com/languageBuddy" target="_blank" className="github"><i className="bi bi-github"></i></a>
                        <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
                        <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
                        <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
                    </div>
                </div>
            </div>
            {/* // <!-- ======= Header ======= --> */}
            <header id="header" className="fixed-top">
                <div className="container d-flex align-items-center">

                    <h1 className="logo me-2"><a href="index.html">LANGUAGE BUDDY</a></h1>
                    {/* <!-- Uncomment below if you prefer to use an image logo --> */}
                    <a href="index.html" className="logo me-auto"><img src="assets/img/logo.png" alt="" className="img-fluid" /></a>

                    <nav id="navbar" className="navbar order-last order-lg-0">
                        <ul>
                            <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
                            <li><a className="nav-link scrollto" href="#about">About</a></li>
                            <li className="dropdown"><a href="#"><span>Drop Down</span> <i className="bi bi-chevron-down"></i></a>
                                <ul>
                                    <li><a href="#">Drop Down 1</a></li>
                                    <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></a>
                                        <ul>
                                            <li><a href="#">Deep Drop Down 1</a></li>
                                            <li><a href="#">Deep Drop Down 2</a></li>
                                            <li><a href="#">Deep Drop Down 3</a></li>
                                            <li><a href="#">Deep Drop Down 4</a></li>
                                            <li><a href="#">Deep Drop Down 5</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">Drop Down 2</a></li>
                                    <li><a href="#">Drop Down 3</a></li>
                                    <li><a href="#">Drop Down 4</a></li>
                                </ul>
                            </li>
                            <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle"></i>
                    </nav>
                    {/* navbar  */}

                    <Link to="/login" className="appointment-btn scrollto"><span className="d-none d-md-inline"> Let's Get</span> Started</Link>

                </div>
            </header>
            {/* //  End Header */}
        </>

    )
}

export default Header
