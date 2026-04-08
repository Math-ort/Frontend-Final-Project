import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Nav from "../pages/Nav";
import SearchResults from "../search/SearchResult";
import { useContext, useState, useEffect } from "react";
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
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem("cart");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  const addToCart = (product) => {
    setCart((prev) => {
      const existingIndex = prev.findIndex((item) => item._id === product._id);
      if (existingIndex !== -1) {
        return prev.map((item, i) =>
          i === existingIndex
            ? { ...item, cantidad: (item.cantidad || 1) + 1 }
            : item
        );
      }
      return [...prev, { ...product, cantidad: 1 }];
    });
  };
  return (
    <Router>
      <Nav />
      <Routes>
        <Route element={<ProtectedRoute />}>
        <Route path="/" element={<Dashboard />}  />
          <Route path="/products" element={<Home addToCart={addToCart} />}  />
        </Route>

        <Route path="/:categoria" element={<CategoryPage addToCart={addToCart}/>} />
        <Route path="/:categoria/:subcategoria" element={<CategoryPage addToCart={addToCart}/>} />

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
