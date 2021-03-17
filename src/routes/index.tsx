import React from "react";

import { Switch, Route} from "react-router-dom";
import { Favorites } from "../pages/Favorites";
import { List } from "../pages/List";


const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={List} />
    <Route path="/favorites" component={Favorites} />
  </Switch>
);

export default Routes;
