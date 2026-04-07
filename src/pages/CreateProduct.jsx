import ProductForm from "../components/ProductForm";

function CreateProduct() {

    const handleCreateProduct = async (product) => {
        try {
          const formData = new FormData();
      
          formData.append("nombre", product.nombre);
          formData.append("descripcion", product.descripcion);
          formData.append("precio", product.precio);
          formData.append("categoria", product.categoria);
          formData.append("subcategoria", product.subcategoria);
          formData.append("talla", product.talla);
      
          if (product.imagen) {
            formData.append("imagen", product.imagen);
          }
      
          const response = await fetch("http://localhost:4000/api/products", {
            method: "POST",
            body: formData
          });
      
          const data = await response.json();
          console.log("Respuesta del backend:", data);
      
        } catch (error) {
          console.error(error);
        }
      };

  return (
    <div>
      <h1>Crear producto</h1>
      <ProductForm onSubmit={handleCreateProduct} />
    </div>
  );
}

export default CreateProduct;