import { useEffect, useState } from "react";
import '../App.css';

function Products({cart, setCart}) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(import.meta.env.VITE_API_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data);
        setProducts(data.data); 
      })
      .catch((error) => console.error(error));
  }, []);
  return (
    <div className="products-container">
      {products.map((product) => (
        <div className="product-card" key={product._id}>
          <p>{product.nombre}</p>
          <img src={product.imagen} alt={product.nombre} width="150"/>
          <p>{product.precio} €</p>
          <p>{product.categoria}</p>
          <p>{product.talla}</p>
          <button className="button"  onClick={()=>setCart([...cart, product])}>
            Agregar al carrito</button>  
        </div>
      ))}
    </div>
  );
}

export default Products;

