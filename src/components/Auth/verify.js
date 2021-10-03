import * as React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './xverify.css';

const Verify = () => {

    return(
        <div className="maincontainer">
        <div className="container-fluid">
            <div className="row no-gutter">
               
                <div className="col-md-6 d-none d-md-flex bg-image"></div>


                
                <div className="col-md-6 bg-light">
                    <div className="login d-flex align-items-center py-5">

                       
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-10 col-xl-7 mx-auto d-flex flex-column justify-content-center align-items-center">
                                    <h3 className="display-4 text-center">Email Verification</h3>
                                    <p className="text-muted mb-4">Please check your email inbox for verification mail.</p>
                                    <div className="mb-4"><Link to="/register" className="appointment-btn scrollto"><span className="d-none d-md-inline"> Sign Up with</span> New Email ID</Link></div>
                                    <div> <Link to="/login" className="appointment-btn scrollto"><span className="d-none d-md-inline"> Already Verified?</span> Login</Link></div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
      </div>
    );
}

export default Verify;