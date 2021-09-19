import React from 'react'
import Main from './components/Welcome/index'
import Login from './components/Auth/SignInSide'
import Register from './components/Auth/SignUp'
import Dashboard from './components/Dashboard/index'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Route path="/" exact component={Main} />
      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={Register} />
      <Route path="/dashboard" exact component={Dashboard} />
    </Router>
  );
}

export default App;
