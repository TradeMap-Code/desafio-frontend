import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header';
import Favorites from './pages/favorites';
import Home from './pages/home/index';
function Routes() {
  return (
    <BrowserRouter>
      <Header />
      <Route path="/" exact component={Home} />
      <Route path="/favorites" exact component={Favorites} />
    </BrowserRouter>
  );
}

export default Routes;
