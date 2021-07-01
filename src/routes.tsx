import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { CharacterInfo } from "./pages/CharacterInfo";

export const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/character/:id" component={CharacterInfo} />
            </Switch>
        </BrowserRouter>
    );
}