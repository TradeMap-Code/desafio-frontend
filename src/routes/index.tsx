import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Favorites from '../pages/Favorites';
import List from '../pages/List';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/favorites" component={Favorites} />
    <Route path="/" component={List} />
  </Switch>
);

export default Routes;