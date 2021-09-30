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

<div class="footer-copyright text-center py-3">© 2021 <strong>LANGUAGEBUDDY</strong>.
ALL RIGHTS RESERVED.
  </div>
          
        </footer>
        //  End Footer
    )
}

export default Footer
