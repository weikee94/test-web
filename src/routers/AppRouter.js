import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "../App";
import CreateProductPage from "../components/CreateProduct/CreateProduct";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import Navigation from "../components/Navigation";
import SignupPage from "../components/Signup/SignupPage";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Navigation />
      <Switch>
        <Route path="/" exact={true} component={HomePage} />
        <Route path="/create" component={CreateProductPage} />
        <Route path="/product/:id" component={ProductDetails} />
        <Route path="/signup" component={SignupPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
