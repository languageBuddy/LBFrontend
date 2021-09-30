import React, { useState } from 'react'
import {
    Button
} from 'reactstrap'
import './contact.css';
function Contact() {

    const [state, setstate] = useState({
        name: "",
        email: "",
        subject: "",
        phone:"",
        message: ""
    })
    const sendmessage = (e) => {
        e.preventDefault();
        console.log(state)

        setstate({ name: "", email: "", subject: "", phone:"",message: "" })
    }

    return (
        // <!-- ======= Contact Section ======= -->
        <div class = "cont">
        <div class="container">
        {/* <h1 class="brand"><span>Acme</span> Web Design</h1> */}
        <div class="wrapper animated bounceInLeft">
          <div class="company-info">
            <h3><strong>Language Buddy</strong></h3>
            <ul>
              <li><i class="fa fa-road"></i> NIT Agartala,Jirania - 799046</li>
              <li><i class="fa fa-phone"></i> +91 9368935647</li>
              <li><i class="fa fa-envelope"></i> lanuguagebuddy@gmail.com</li>
            </ul>
          </div>
          <div class="contact">
            <h3 style={{marginBottom :" 30px"}}><strong>We would love to hear from you!</strong></h3>
            {/* {{msg}} */}
            <form >
              <p>
                <label>Name</label>
                <input type="text" value = {state.name} onChange={e=>setstate({...state,name:e.target.value})} required/>
              </p>
              <p>
                <label>Phone Number</label>
                <input type="text" value={state.phone} onChange={e=>setstate({...state,phone:e.target.value})} required/>
              </p>
              <p>
                <label>Email Address</label>
                <input type="email" value = {state.email} onChange={e=>setstate({...state,email:e.target.value})} required/>
              </p>
              <p>
                <label>Subject</label>
                <input type="text" value = {state.subject} onChange={e=>setstate({...state,subject:e.target.value})} required />
              </p>
              <p class="full">
                <label>Message</label>
                <textarea name="message" rows="5" value={state.message} onChange={e=>setstate({...state,message:e.target.value})} required></textarea>
              </p>
              <p class="full">
                <button onClick={sendmessage}>Submit</button>
              </p>
            </form>
          </div>
        </div>
      </div>
      </div>
        // End Contact Section 

    )
}

export default Contact
