import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function CategoryPage() {
  const { categoria, subcategoria } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    let url = `http://localhost:4000/api/products?categoria=${categoria}`;
    if (subcategoria) url += `&subcategoria=${subcategoria}`;
  
    fetch(url)
      .then(res => res.json())      
      .then(result => {
        setProducts(result.data || []);
      })
      .catch(err => console.error(err));
  }, [categoria, subcategoria]);

  return (
    <div className="products-container">
  {products.length === 0 ? (
    <p>No hay productos</p>
  ) : (
    products.map(p => (
      <div key={p._id} className="card">
        <img src={p.imagen} alt={p.nombre} />
        <h3>{p.nombre}</h3>
        <p>{p.categoria}</p>
        <p>{p.precio}€</p>
      </div>
    
    ))
  )}
</div>
  );
}

export default CategoryPage;