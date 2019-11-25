import React from 'react';
import './App.css';
import Login from './screens/Login'
import Register from './screens/Register'
import Main from './screens/Main'
import {BrowserRouter as Router,
  Switch,
  Route
 } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/main">
            <Main />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
