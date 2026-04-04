import { useState } from "react";

function ProductForm({ onSubmit }) {

  const categorias = ["ropa", "zapatillas", "accesorios"];
  const tallas = ["S", "M", "L", "XL"];
  const preciosBase = [10, 15, 20, 25, 30, 35, 40, 45, 50, 75, 100, 125, 150, 175, 200];

  const [product, setProduct] = useState({
    nombre: "",
    precio: "",
    descripcion: "",
    imagen: null,
    categoria: "",
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
        placeholder="Nombre"
        onChange={handleChange}
      />
      <select name="precio" onChange={handleChange}>
        <option value="">Selecciona un precio base</option>
        {preciosBase.map(p => (
          <option key={p} value={p}>
            {p} €
          </option>
        ))}
      </select>

      <input
        type="number"
        name="precio"
        placeholder="O escribe el precio"
        onChange={handleChange}
      />
      <textarea
        name="descripcion"
        placeholder="Descripción"
        onChange={handleChange}
      />
      <input
        type="file"
        name="imagen"
        onChange={handleChange}
      />
      <select name="categoria" onChange={handleChange}>
        <option value="">Selecciona categoría</option>
        {categorias.map(cat => (
          <option key={cat} value={cat}>
            {cat}
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

      <button type="submit">Crear producto</button>
      
    </form>
    
  );
}

export default ProductForm;