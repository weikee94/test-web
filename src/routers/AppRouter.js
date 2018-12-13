import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "../App";
import CreateProductPage from "../components/CreateProduct/CreateProduct";

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={HomePage} />
      <Route path="/create" component={CreateProductPage} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
