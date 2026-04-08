import ProductForm from "../components/ProductForm";

function CreateProduct() {

    const handleCreateProduct = async (product) => {
        try {
          const formData = new FormData();
      
          formData.append("nombre", product.nombre);
          formData.append("descripcion", product.descripcion);
          formData.append("precio", product.precio);
          formData.append("categoria", product.categoria.toLowerCase());
          formData.append("subcategoria", product.subcategoria.toLowerCase());
          formData.append("talla", product.talla);
      
          if (product.imagen) {
            formData.append("imagen", product.imagen);
          }
          const Api = import.meta.env.VITE_API_URL
          console.log(Api)
          const response = await fetch(Api, {
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