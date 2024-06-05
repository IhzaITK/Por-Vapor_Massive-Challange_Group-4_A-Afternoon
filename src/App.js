import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Products from "./pages/Products";
import AddProduct from "./pages/Add";
import UpdateProduct from "./pages/Update";
import ProductDetails from "./pages/Details";
import Beranda from "./pages/Beranda";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  const isAuthenticated = !!localStorage.getItem("token");

  return (
    <Router>
      <Routes>
        <Route path="/" element={isAuthenticated ? <Navigate to="/beranda" /> : <Navigate to="/login" />} />
        <Route path="/home" element={isAuthenticated ? <Home /> : <Navigate to="/login" />} />
        <Route path="/beranda" element={isAuthenticated ? <Beranda /> : <Navigate to="/login" />} />
        <Route path="/products" element={isAuthenticated ? <Products /> : <Navigate to="/login" />} />
        <Route path="/add" element={isAuthenticated ? <AddProduct /> : <Navigate to="/login" />} />
        <Route path="/update/:id" element={isAuthenticated ? <UpdateProduct /> : <Navigate to="/login" />} />
        <Route path="/details/:id" element={isAuthenticated ? <ProductDetails /> : <Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};


export default App;
