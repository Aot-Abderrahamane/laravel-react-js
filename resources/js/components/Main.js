import React from "react";
import { Routes, Route } from "react-router-dom";

import Products from "./dashboard/pages/Products";
import NewProduct from "./dashboard/pages/NewProduct";
import Home from "./dashboard/pages/Home.js";

const Main = () => (
    <main>
        <Routes>
            <Route exact path="/dashboard/" component={Home} />
            <Route exact path="/dashboard/products" component={Products} />
            <Route exact path="/dashboard/new-product" component={NewProduct} />
        </Routes>
    </main>
);

export default Main;
