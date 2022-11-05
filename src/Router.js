import React from "react";
import { Switch, Route } from "react-router-dom";
import AppCustomers from "./pages/AppCustomers";
import AppProducts from "./pages/AppProducts";

const Router = () => {
    <Switch>
        <Route path="/customers">
            <AppCustomers />
        </Route>
        <Route path="/products">
            <AppProducts />
        </Route>
    </Switch>
}

export default Router;