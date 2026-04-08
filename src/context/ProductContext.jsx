import { createContext, useEffect, useMemo, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:4000/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.data))
      .catch((error) => console.error(error));
  }, []);

  const filteredProducts = useMemo(() => {
    return products.filter(
      (p) =>
        p.nombre.toLowerCase().includes(search.toLowerCase()) ||
        p.categoria.toLowerCase().includes(search.toLowerCase()) ||
        p.descripcion.toLowerCase().includes(search.toLowerCase())
    );
  }, [products, search]);

  return (
    <ProductContext.Provider
      value={{ products, setProducts, search, setSearch, filteredProducts }}
    >
      {children}
    </ProductContext.Provider>
  );
};
