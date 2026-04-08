import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import Products from "./Products";

export default function Category({ category }) {
  const { products } = useContext(ProductContext);

  const filteredProducts = products.filter(
    (product) => product.categoria === category
  );

  return (
    <div className="products-container">
      {filteredProducts.length === 0 ? (
        <p>No hay productos en esta categoría</p>
      ) : (
        filteredProducts.map((product) => (
          <div className="product-card" key={product._id}>
            <p>{product.nombre}</p>
            <img src={product.imagen} alt={product.nombre} width="150" />
            <p>{product.precio} €</p>
            <p>{product.categoria}</p>
            <p>{product.talla}</p>
          </div>
        ))
      )}
    </div>
  );
}
