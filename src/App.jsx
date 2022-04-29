import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import "./css/style.scss";

import "./charts/ChartjsConfig";

// Import pages
import Dashboard from "./pages/admin/Dashboard";
import Categories from "./pages/admin/Categories";
import Products from "./pages/admin/Products";
import Orders from "./pages/admin/Orders";
import Home from "./pages/client/Home";
import Cart from "./pages/client/Cart";
import Login from "./pages/client/Login";
import SignUp from "./pages/client/SignUp";
import { AuthProvider } from "./context/AuthContext";

function App() {
  const location = useLocation();

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <AuthProvider>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/admin" element={<Dashboard />} />
          <Route exact path="/admin/categories" element={<Categories />} />
          <Route exact path="/admin/products" element={<Products />} />
          <Route exact path="/admin/orders" element={<Orders />} />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
