import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Admin from "../pages/Admin";
import Nav from "../pages/Nav"
import SearchResults from "../search/SearchResult";
import { useContext } from "react";
import  CreateProduct  from "../pages/CreateProduct"
import  Home from "../pages/Home"
import { ProductContext } from "../context/ProductContext";
import Dashboard from "../components/Dashboard";
import Cart from "../pages/Cart";
import { useState } from "react";
function RouterApp() {
 const { products } = useContext(ProductContext);
 const [cart, setCart]= useState([]);
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home cart={cart}setCart={setCart} />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/hombre" element={<h1>Hombre</h1>} />
        <Route path="/mujer" element={<h1>Mujer</h1>} />
        <Route path="/categoria/accesorios" element={<h1>Accesorios</h1>} />
        <Route path="/categoria/zapatos" element={<h1>Zapatos</h1>} />
        <Route path="/categoria/pantalones" element={<h1>Pantalones</h1>} />
        <Route path="/categoria/camisetas" element={<h1>Camisetas</h1>} />
        <Route path="/cart" element={<Cart cart={cart}setCart={setCart}/>} />
        <Route path="/products/create" element={<CreateProduct />} />
        <Route path="/search/:query" element={<SearchResults />} />
        <Route path="/login" element={<h1>Login</h1>} />

        {/* rutas protegidas */}
        <Route path="/auth/admin" element={<Admin />} />
        <Route path="/logout" element={<h1>Logout</h1>} />


        <Route path="/*" element={<Navigate to="/"/>} />
      </Routes>
    </Router>
  );
}

export default RouterApp;
