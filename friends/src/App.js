import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Navigation from './components/Navigation';
import Login from './components/Login';
import Home from './components/Home';
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';
import Friend from './components/Friend';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login" component={Login}/>
        <PrivateRoute 
        exact path="/friendsList" 
        component={FriendsList}
        />
        <PrivateRoute 
        exact path="/friendsList/:id"
        component={Friend}
        />
      </Switch>
    </div>
  );
}

export default App;
