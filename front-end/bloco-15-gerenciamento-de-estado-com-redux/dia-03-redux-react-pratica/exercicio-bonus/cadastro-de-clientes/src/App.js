import './App.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Clients from './pages/Clients';
import Registration from './pages/Registration';

function App() {
  return (
    <Switch>
      <Route path="/" exact component={ Home } />
      <Route path="/login" component={ Login } />
      <Route path="/clients" component={ Clients } />
      <Route path="/registration" component={ Registration } />
    </Switch>
  );
}

export default App;
