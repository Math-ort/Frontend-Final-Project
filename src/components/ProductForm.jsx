import { useState } from "react";

function ProductForm({ onSubmit }) {

  // categoria del NAV
  const categorias = ["hombre", "mujer", "accesorios"];

  // subcategorias
  const subcategorias = [
    "camisetas",
    "pantalones",
    "chaquetas",
    "zapatos",
    "mochilas",
    "gorras"
  ];

  const tallas = ["XS", "S", "M", "L", "XL"];

  const [product, setProduct] = useState({
    nombre: "",
    precio: "",
    descripcion: "",
    imagen: null,
    categoria: "",
    subcategoria: "",
    talla: ""
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    setProduct({
      ...product,
      [name]: type === "file" ? files[0] : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(product);
  };

  return (
    <form onSubmit={handleSubmit}>

      <input
        type="text"
        name="nombre"
        placeholder="Nombre del producto"
        onChange={handleChange}
        required
      />

      <textarea
        name="descripcion"
        placeholder="Descripción"
        onChange={handleChange}
        required
      />

      <input
        type="file"
        name="imagen"
        onChange={handleChange}
      />

    
      <select name="categoria" onChange={handleChange} required>
        <option value="">Selecciona categoría</option>
        {categorias.map(cat => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      <select name="subcategoria" onChange={handleChange} required>
        <option value="">Selecciona subcategoría</option>
        {subcategorias.map(sub => (
          <option key={sub} value={sub}>
            {sub}
          </option>
        ))}
      </select>

      <select name="talla" onChange={handleChange}>
        <option value="">Selecciona talla</option>
        {tallas.map(t => (
          <option key={t} value={t}>
            {t}
          </option>
        ))}
   </select> 
      <input
        type="number"
        name="precio"
        placeholder="Precio (€)"
        onChange={handleChange}
        required
      />

      <button type="submit">Crear producto</button>
    </form>
  );
}

export default ProductForm;