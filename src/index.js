import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Favoritos from "./components/favoritos/Favoritos";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={App} />
      <Route path="/Favoritos" exact={true} component={Favoritos} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
