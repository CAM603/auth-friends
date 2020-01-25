import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Navigation from './components/Navigation';
import Login from './components/Login';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
