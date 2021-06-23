import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { EmployeeInfo } from "./pages/EmployeeInfo";

export const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/employees/:id" component={EmployeeInfo} />
            </Switch>
        </BrowserRouter>
    );
}