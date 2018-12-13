import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "../App";
import CreateProductPage from "../components/CreateProduct/CreateProduct";
import ProductDetails from "../components/ProductDetails/ProductDetails";

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={HomePage} />
      <Route path="/create" component={CreateProductPage} />
      <Route path="/product/:id" component={ProductDetails} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
