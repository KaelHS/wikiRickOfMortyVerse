import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { CharacterInfo } from "./pages/CharacterInfo";
import { QueryCharacters } from "./pages/QueryCharacters";
import { FavoriteList } from "./pages/FavoriteList";

export const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/character/:id" component={CharacterInfo} />
                <Route exact path="/search" component={QueryCharacters} />
                <Route exact path="/favorites" component={FavoriteList} />
            </Switch>
        </BrowserRouter>
    );
}