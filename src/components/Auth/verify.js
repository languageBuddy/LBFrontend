import * as React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Verify = () => {

    return(
        <div>
        <p>Check your email</p>
        <Link to="/register" className="appointment-btn scrollto"><span className="d-none d-md-inline"> Didn't get the mail?</span> Try again with different email id.</Link>
        </div>
    );
}

export default Verify;