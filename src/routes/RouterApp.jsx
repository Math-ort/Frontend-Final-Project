import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Nav from "../pages/Nav";
import SearchResults from "../search/SearchResult";
import { useContext, useState } from "react";
import CreateProduct from "../pages/CreateProduct";
import Home from "../pages/Home";
import { ProductContext } from "../context/ProductContext";
import Dashboard from "../components/Dashboard";
import Footer from "../components/Footer";
import Cart from "../pages/Cart";
import Login from "./Login";
import Signup from "./Signup";
import ProtectedRoute from "./ProtectedRoute";
import CategoryPage from "../pages/CategoryPage";

function RouterApp() {
  const { products } = useContext(ProductContext);
  const [cart, setCart] = useState([]);

  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home cart={cart} setCart={setCart} />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>

        <Route path="/:categoria" element={<CategoryPage />} />
        <Route path="/:categoria/:subcategoria" element={<CategoryPage />} />

        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        <Route path="/products/create" element={<CreateProduct />} />
        <Route path="/search/:query" element={<SearchResults />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default RouterApp;
