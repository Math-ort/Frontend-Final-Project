import { useState } from "react";

function ProductForm({ onSubmit }) {
  const [product, setProduct] = useState({
    nombre: "",
    precio:"",
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
    e.preventDefault(); // evita que el navegador recargue la pagina al enviar el formulario
    onSubmit(product); // llama a la funcion que recibimos por props y le pasamos el objeto con los datos del formulario
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="nombre"
        placeholder="Nombre"
        onChange={handleChange}
      />
      <input
        type="text"
        name="precio"
        placeholder="Precio"
        onChange={handleChange}
      />
      <textarea
        type="text"
        name="descripcion"
        placeholder="Descripción"
        onChange={handleChange}
      />
       <input
        type="file"
        name="imagen"
        placeholder="Imagen"
        onChange={handleChange}
      />
       <input
       type="text"
        name="categoria"
        placeholder="Categoria"
        onChange={handleChange}
      />
      <input
      type="text"
      name="talla"
      placeholder="Talla"
      onChange={handleChange}
    />
      <button type="submit">Crear producto</button>
    </form>
  );
}

export default ProductForm;