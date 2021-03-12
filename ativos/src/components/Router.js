import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import ListActives from "../pages/ListActives";
import ListFavoritesActives from "../pages/ListFavoritesActives";

const Router = () => {
  
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path = {"/"}>
          <ListActives />
        </Route>
        <Route exact path = {"/actives/favorites"}>
          <ListFavoritesActives />
        </Route>
      </Switch>
    </BrowserRouter>
  );

}

export default Router;