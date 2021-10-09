import React, { useState } from 'react'
import axios from 'axios'
import './contact.css';

function Contact() {

    const [state, setstate] = useState({
        name: "",
        email: "",
        subject: "",
        phone: "",
        message: ""
    })
    const [notification, setnotification] = useState({
        message: "",
        color: ""
    })

    const sendmessage = (e) => {
        e.preventDefault();
        if (state.name.length == 0 || state.email.length == 0 || state.subject.length == 0 || state.phone.length == 0 || state.message.length == 0) {
            setnotification({
                message: "Fields cannot be empty",
                color: 'danger'

            });

            return;
        }
        axios.post('http://localhost:5000/send', state)
            .then(response => {
                setnotification({
                    message: response.data.msg,
                    color: 'success'
                });
            })
            .catch(err => {
                setnotification({
                    message: err.message,
                    color: 'danger'
                })
            })

        setstate({ name: "", email: "", subject: "", phone: "", message: "" })
    }

    return (
        // <!-- ======= Contact Section ======= -->
        <div id="cont" className="cont">
            <div className="container contact-container">
                {/* <h1 className="brand"><span>Acme</span> Web Design</h1> */}
                <div className="wrapper animated bounceInLeft">
                    <div className="company-info">
                        <h3><strong>Language Buddy</strong></h3>
                        <ul>
                            <li><i className="fa fa-road"></i> NIT Agartala,Jirania - 799046</li>
                            <li><i className="fa fa-phone"></i> +91 9368935647</li>
                            <li><i className="fa fa-envelope"></i> lanuguagebuddy@gmail.com</li>
                        </ul>
                    </div>
                    <div className="contact">
                        <h3 style={{ marginBottom: " 30px" }}><strong>We would love to hear from you!</strong></h3>
                        {
                            notification.message && notification.message.length > 0 &&
                            < div className={`alert alert-${notification.color}`} role="alert">
                                {notification.message}
                            </div>
                        }

                        <form >
                            <p>
                                <label>Name</label>
                                <input type="text" value={state.name} onChange={e => setstate({ ...state, name: e.target.value })} required />
                            </p>
                            <p>
                                <label>Phone Number</label>
                                <input type="text" value={state.phone} onChange={e => setstate({ ...state, phone: e.target.value })} required />
                            </p>
                            <p>
                                <label>Email Address</label>
                                <input type="email" value={state.email} onChange={e => setstate({ ...state, email: e.target.value })} required />
                            </p>
                            <p>
                                <label>Subject</label>
                                <input type="text" value={state.subject} onChange={e => setstate({ ...state, subject: e.target.value })} required />
                            </p>
                            <p className="full">
                                <label>Message</label>
                                <textarea name="message" rows="5" value={state.message} onChange={e => setstate({ ...state, message: e.target.value })} required></textarea>
                            </p>
                            <p className="full">
                                <button onClick={sendmessage}>Submit</button>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Contact
