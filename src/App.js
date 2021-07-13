import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import List from "./pages/e-commerce/List";

import ListProductAdmin from "./pages/admin/product/List";
import Create from "./pages/admin/product/Create";

import ProductContext from "./context/ProductContext";
import useStateProduct from "./hooks/useStateProduct";

function App() {
  const initialState = useStateProduct();
  return (
    <div className="App">
      <ProductContext.Provider value={initialState}>
        <BrowserRouter>
          <Layout>
            <Switch>
              <Route exact path="/home" component={Home} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/marketplace" component={List} />
              <Route
                exact
                path="/admin/list-products"
                component={ListProductAdmin}
              />
              <Route exact path="/admin/create-product" component={Create} />
              <Redirect from="/" to="/home" />
            </Switch>
          </Layout>
        </BrowserRouter>
      </ProductContext.Provider>
    </div>
  );
}

export default App;
