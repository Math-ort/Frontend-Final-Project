import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Nav from "../pages/Nav"
import SearchResults from "../search/SearchResult";
import { useContext } from "react";
import  Home from "../pages/Home"
import { ProductContext } from "../context/ProductContext";
import Dashboard from "../components/Dashboard";
import Footer from "../components/Footer";
import CreateProduct from "../pages/CreateProduct";
import Cart from "../pages/Cart";
import { useState } from "react";
import DashboardAdmin from "./DashboardAdmin";
import Login from "./Login";
import Signup from "./Signup";
import ProtectedRoute from "./ProtectedRoute";
function RouterApp() {
 const { products } = useContext(ProductContext);
 const [cart, setCart]= useState([]);
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home cart={cart}setCart={setCart} />} />
        <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/auth/dashboaradmin" element={<DashboardAdmin />} />
        </Route>
        <Route path="/hombre" element={<h1>Hombre</h1>} />
        <Route path="/mujer" element={<h1>Mujer</h1>} />
        <Route path="/categoria/accesorios" element={<h1>Accesorios</h1>} />
        <Route path="/categoria/zapatos" element={<h1>Zapatos</h1>} />
        <Route path="/categoria/pantalones" element={<h1>Pantalones</h1>} />
        <Route path="/categoria/camisetas" element={<h1>Camisetas</h1>} />
        <Route path="/cart" element={<Cart cart={cart}setCart={setCart}/>} />
        <Route path="/search/:query" element={<SearchResults />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup  />} />
        //<Route path="/products/create" element={< CreateProduct />} />


        {/* rutas protegidas */}
        <Route element={<ProtectedRoute />}>
        </Route>

        <Route path="/auth/dashboaradmin" element={<DashboardAdmin />} />

        <Route path="/*" element={<Navigate to="/"/>} />
      </Routes>
      <Footer />
    </Router>
  );
}




export default RouterApp;
