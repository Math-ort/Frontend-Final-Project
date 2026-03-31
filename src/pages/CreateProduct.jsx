import ProductForm from "../components/ProductForm";
import { createProduct } from "../services/productService";

function CreateProduct() {
  const handleCreate = async (product) => {
    try {
      const formData = new FormData();

      formData.append("nombre", product.nombre);
      formData.append("precio", product.precio);
      formData.append("descripcion", product.descripcion);
      formData.append("categoria", product.categoria);
      formData.append("talla", product.talla);
      formData.append("imagen", product.imagen);

      await createProduct(formData);
      console.log("Producto creado");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Crear producto</h1>
      <ProductForm onSubmit={handleCreate} />
    </div>
  );
}

export default CreateProduct;