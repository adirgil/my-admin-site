import React from 'react';
//import './css/App.css';
import Login from './screens/Login'
import Register from './screens/Register'
import Main from './screens/Main'
import Main2 from './screens/Main2'
import './css/App.css'
// import {BrowserRouter as Router,
//   Switch,
//   Route
//  } from "react-router-dom";
 import { Router } from "@reach/router"

function App() {
  return (
    <Router>
          <Login exact path="/"/>
          <Register path="/register"/>
          <Main2 path="/main2"/>
    </Router>
  );
}

export default App;
