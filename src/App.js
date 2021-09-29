import React, { useEffect, useState } from 'react';
import Main from './components/Welcome/index'
import Login from './components/Auth/SignInSide'
import Register from './components/Auth/SignUp'
import Dashboard from './components/Dashboard/index'
import Learn from './components/Dashboard/Learn'
import About from './components/About/index';
import Exam from './components/Exam/index'
import Answer from './components/Exam/Answer'
import NotFound from './components/NotFound'

import { Switch, Route } from 'react-router-dom'
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from '@firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAZcACNs1YcIazxKNEi-0PC29mjvUwRdbM",
  authDomain: "languagebuddyauth.firebaseapp.com",
  projectId: "languagebuddyauth",
  storageBucket: "languagebuddyauth.appspot.com",
  messagingSenderId: "604099630296",
  appId: "1:604099630296:web:f62069384c9048a6feb3ad",
};

initializeApp(firebaseConfig);

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, user => {
      setUser(user)
    })
  }, [])

  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={Register} />
      <Route path="/dashboard" exact component={Dashboard} />
      <Route path="/dashboard/learn/:id" exact component={Learn} />
      <Route path="/dashboard/about" exact component={About} />
      <Route path="/dashboard/exam" exact component={Exam} />
      <Route path="/dashboard/exam/answer" exact component={Answer} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
}

export default App;
