import { useEffect, useState } from "react";
import '../App.css';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data.data); // mi api es un objeto
        console.log(products);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="products-container">
      <h2>Productos:</h2>
      
      {products.map((product) => (
        <div className="product-card" key={product._id}>
          <p>{product.nombre}</p>
          <p>{product.precio} €</p>
          <p>{product.categoria}</p>
          <p>{product.talla}</p>
          {product.imagen ? (

            <img src={product.imagen} alt={product.nombre} width="150"/>
          ) : null}  
          
        </div>
      ))}
    </div>
  );
}

export default Products;

