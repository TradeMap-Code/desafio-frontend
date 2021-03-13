import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import List from '../pages/List';
import Favorites from '../pages/Favorites';

function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <List />
                </Route>
                <Route path="/favorites">
                    <Favorites />
                </Route>
            </Switch>
        </Router>
    );
};

export default Routes;