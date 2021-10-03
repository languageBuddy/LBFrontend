import * as React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './xverify.css';

const pleaseLogin = () => {

    return(
        <div className="maincontainer">
        <div className="container-fluid">
            <div className="row no-gutter">
               
                <div className="col-md-6 d-none d-md-flex xbg-image"></div>


                
                <div className="col-md-6 bg-light">
                    <div className="login d-flex align-items-center py-5">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-10 col-xl-7 mx-auto d-flex flex-column justify-content-center align-items-center">
                                    <h3 className="display-4 text-center">Unauthorized Access!</h3>
                                    <p className="text-muted mb-4 text-center">You need to Login into your Language Buddy account to gain full access.</p>
                                    <div> <Link to="/login" className="appointment-btn scrollto">Login<span className="d-none d-md-inline"> Required</span></Link></div>
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

export default pleaseLogin;