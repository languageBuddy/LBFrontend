import React, { useEffect, useState } from 'react';
import Main from './components/Welcome/index'
import Login from './components/Auth/SignInSide'
import Register from './components/Auth/SignUp'
import Dashboard from './components/Dashboard/index'
import Learn from './components/Dashboard/Learn'
import Exam from './components/Exam/index'
import Answer from './components/Exam/Answer'
import NotFound from './components/NotFound'
import Verify from './components/Auth/verify'
import forgotPassword from './components/Auth/ForgotPassword'
import pleaseLogin from './components/Auth/pleaseLogin'
import { isMobile } from 'react-device-detect';

import { Switch, Route } from 'react-router-dom'
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from '@firebase/auth';
require('dotenv').config();


console.log(`${process.env.REACT_APP_AID}`);

const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_APIKEY}`,
  authDomain: `${process.env.REACT_APP_AUTHDOMAIN}`,
  projectId: `${process.env.REACT_APP_ID}`,
  storageBucket: `${process.env.REACT_APP_SB}`,
  messagingSenderId: `${process.env.REACT_APP_MID}`,
  appId: `${process.env.REACT_APP_AID}`,
};

initializeApp(firebaseConfig);

function App() {
  const [user, setUser] = useState(null);
  const [show, setShow] = useState(true);

  const handleClick = () => {

    setShow(false);

  }
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, user => {
      setUser(user)
    })
  }, [])

  if (isMobile && show) {
    return (
      <div className="w-100 d-flex justify-content-center align-items-center" style={{
        height: "100vh",
        backgroundColor: "#fafafa"
      }}>
        <div class="card" style={{ width: "18rem" }}>
          <img class="card-img-top" src="https://res.cloudinary.com/dsrpn6k2o/image/upload/v1633953527/Mobile_t3gt32.png" alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title fw-bold"> Welcome to Language Buddy!</h5>
            <p class="card-text" style={{
              fontFamily: "Open Sans, sans-serif"
            }}> Although the site has been configured for mobile, we recommend you to use
              desktop for better experience.</p>
            <div className="w-100 d-flex justify-content-center" >
              <button className="btn btn-primary" onClick={handleClick}> Continue </button>
            </div>
          </div>
        </div>
      </div>
    )

  }

  return (

    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={Register} />
      <Route path="/dashboard" exact component={Dashboard} />
      <Route path="/dashboard/learn/:id" exact component={Learn} />
      <Route path="/dashboard/exam" exact component={Exam} />
      <Route path="/dashboard/exam/answer" exact component={Answer} />
      <Route path="/verify" exact component={Verify} />
      <Route path="/forgot-password" exact component={forgotPassword} />
      <Route path="/please-login" exact component={pleaseLogin} />
      <Route path="*" component={NotFound} />
    </Switch>

  );
}

export default App;
