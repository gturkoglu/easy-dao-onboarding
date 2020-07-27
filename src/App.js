import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home';
import Organization from './components/Organization';

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
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