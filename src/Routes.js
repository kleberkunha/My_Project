import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import SignIn from './pages/SignIn';


export default () => {

  return(
    <Switch>
      <Route exact path="/">
        <Home/>
      </Route>

      <Route path="/about">
        <About/>
      </Route>
      <Route exact path="/SignIn">
        <SignIn/>
      </Route>
      <Route>
        <NotFound/>
      </Route>
    </Switch>
  );
}