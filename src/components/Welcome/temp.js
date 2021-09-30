import React, { useState } from 'react'
import {
    Button
} from 'reactstrap'

function Contact() {

    const [state, setstate] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    })
    const HandleSubmit = (e) => {
        e.preventDefault();
        console.log(state)

        setstate({ name: "", email: "", subject: "", message: "" })
    }

    return (
        // <!-- ======= Contact Section ======= -->
        <section id="contact" className="contact">
            <div className="container">

                <div className="section-title">
                    <h2>Contact</h2>
                    <p>We would love to hear from you</p>
                </div>
            </div>

            {/* <div>
                <iframe style={{ border: 0, width: "100%", height: "350px", src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621", frameborder="0" }} allowfullscreen></iframe>
            </div> */}

            <div className="container">
                <div className="row mt-5">

                    <div className="col-lg-4">
                        <div className="info">
                            <div className="address">
                                <i className="bi bi-geo-alt"></i>
                                <h4>Location:</h4>
                                <p>NIT Agartala Tripura 799046</p>
                            </div>

                            <div className="email">
                                <i className="bi bi-envelope"></i>
                                <h4>Email:</h4>
                                <p>languagebuddy@gmail.com</p>
                            </div>

                            <div className="phone">
                                <i className="bi bi-phone"></i>
                                <h4>Call:</h4>
                                <p>+91 9368935647</p>
                            </div>

                        </div>

                    </div>

                    <div className="col-lg-8 mt-5 mt-lg-0">

                        <form role="form" className="php-email-form">
                            <div className="row">
                                <div className="col-md-6 form-group">
                                    <input type="text" className="form-control" placeholder="Your Name" value={state.name} required onChange={e => setstate({ ...state, name: e.target.value })} />
                                </div>
                                <div className="col-md-6 form-group mt-3 mt-md-0">
                                    <input type="email" className="form-control" placeholder="Your Email" value={state.email} required onChange={e => setstate({ ...state, email: e.target.value })} />
                                </div>
                            </div>
                            <div className="form-group mt-3">
                                <input type="text" className="form-control" placeholder="Subject" value={state.subject} required onChange={e => setstate({ ...state, subject: e.target.value })} />
                            </div>
                            <div className="form-group mt-3">
                                <textarea className="form-control" rows="5" placeholder="Message" value={state.message} required onChange={e => setstate({ ...state, message: e.target.value })}></textarea>
                            </div>
                            <div className="my-3">
                                <div className="loading">Loading</div>
                                <div className="error-message"></div>
                                <div className="sent-message">Your message has been sent. Thank you!</div>
                            </div>
                            <div className="text-center"> <Button color="primary" onClick={HandleSubmit}>Send Message</Button></div>
                        </form>

                    </div>

                </div>

            </div>
        </section>
        // End Contact Section 

    )
}

export default Contact
