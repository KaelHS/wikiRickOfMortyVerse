import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { CharacterInfo } from "./pages/CharacterInfo";
import { QueryCharacters } from "./pages/QueryCharacters";

export const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/character/:id" component={CharacterInfo} />
                <Route exact path="/search" component={QueryCharacters} />
                <Route exact path="/favorites" component={CharacterInfo} />
            </Switch>
        </BrowserRouter>
    );
}