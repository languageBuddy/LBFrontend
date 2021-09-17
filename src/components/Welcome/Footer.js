import React, { useState } from 'react'

function Footer() {
    const [email, setemail] = useState('')
    const HandleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        setemail('')
    }
    return (
        // <!-- ======= Footer ======= -->
        <footer id="footer">

            <div className="footer-top">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-3 col-md-6 footer-contact">
                            <h3>Language Buddy</h3>
                            <p>
                                NIT Agartala <br />
                                Agartala, Tripura<br />
                                India <br /><br />
                                <strong>Phone:</strong> +1 5589 55488 55<br />
                                <strong>Email:</strong> info@example.com<br />
                            </p>
                        </div>

                        <div className="col-lg-2 col-md-6 footer-links">
                            <h4>Useful Links</h4>
                            <ul>
                                <li><i className="bx bx-chevron-right"></i> <a href="#">Home</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="#">About us</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="#">Services</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4>Our Services</h4>
                            <ul>
                                <li><i className="bx bx-chevron-right"></i> <a href="#">Web Design</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="#">Web Development</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="#">Product Management</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="#">Marketing</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="#">Graphic Design</a></li>
                            </ul>
                        </div>

                        <div className="col-lg-4 col-md-6 footer-newsletter">
                            <h4>Join Our Newsletter</h4>
                            <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                            <form onSubmit={HandleSubmit}>
                                <input type="email" name="email" value={email} onChange={e => setemail(e.target.value)} autoComplete="off" />
                                <input type="submit" value="Subscribe" />
                            </form>
                        </div>

                    </div>
                </div>
            </div>

            <div className="container d-md-flex py-4">

                <div className="me-md-auto text-center text-md-start">
                    <div className="copyright">
                        &copy; Copyright <strong><span>Language Buddy</span></strong>. All Rights Reserved
                    </div>
                    <div className="credits">
                        Designed by <a href="https://bootstrapmade.com/">LanguageBuddy</a>
                    </div>
                </div>
                <div className="social-links text-center text-md-right pt-3 pt-md-0">
                    <a href="https://github.com/languageBuddy" target="_blank" className="github"><i className="bi bi-github"></i></a>
                    <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
                    <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
                    <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
                </div>
            </div>
        </footer>
        //  End Footer
    )
}

export default Footer
