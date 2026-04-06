import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { ProductContext } from "../context/ProductContext";
import  Product  from "../components/Products"

function SearchResults() {
  const { products, setSearch } = useContext(ProductContext);
  const { query } = useParams();

  const searchTerm = query ? query.toLowerCase().trim() : "";

  // Guardar búsqueda en el contexto
  useEffect(() => {
    setSearch(searchTerm);
  }, [searchTerm]);

  const filteredProducts =
    searchTerm === ""
      ? products
      : products.filter(
          (p) =>
            p.nombre.toLowerCase().includes(searchTerm) ||
            p.categoria.toLowerCase().includes(searchTerm) ||
            p.descripcion.toLowerCase().includes(searchTerm)
        );

  return (
    <div className="container">
      <h2>
        {searchTerm
          ? `Resultados para: "${query}"`
          : "¿Qué estás buscando?"}
      </h2>

      <div className="container-products">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product._id} className="product-card">
              <Product product={product} />
            </div>
          ))
        ) : (
          <>
            <p>No se encontraron productos.</p>
            <h2>Te Puede interesar</h2>
            {products.map((product) => (
              <div key={product._id} className="product-card">
                <Product product={product} />
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default SearchResults;