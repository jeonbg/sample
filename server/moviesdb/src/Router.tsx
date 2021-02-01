import React from 'react';
import { HashRouter, Route, Redirect } from 'react-router-dom';
import Navigation from './components/Navigation';
import About from './pages/About';
import Detail from './pages/Detail';
import Home from './pages/Home';

function Router() {
  return (
    <HashRouter>
      <Navigation />
      <br />
      <Route path="/" component={Home} exact />
      <Route path="/about" component={About} />
      <Route path="/movie/:id" component={Detail} />
    </HashRouter>
  )
}

export default Router;