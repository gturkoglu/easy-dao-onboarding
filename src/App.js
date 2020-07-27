import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home';
import Organization from './components/Organization';
import Register from './components/Register';
import Account from './components/Account';
import Settings from './components/Settings';

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/settings">
            <Settings />
          </Route>
          <Route path="/account">
            <Account />
          </Route>

          <Route path="/register">
            <Register />
          </Route>

          <Route path="/organization">
            <Organization />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}