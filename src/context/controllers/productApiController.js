const Product = require('../../models/Products')
const productApiController = {

 // GET /api/products
getAllProducts: async (req, res) => {
  try {
     const products = await Product.find();
    res.json({
      data: products
    });
  } catch (error) {
     res.status(500).json({
       ok: false,
       message: "Error getting products"
     });}
 },
  // GET /api/products/:id
  getProductById: async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);

      if (!product) {
        return res.status(404).json({
          ok: false,
          message: "Product not found"
        });
      }

      res.json({
        ok: true,
        data: product
      });

    } catch (error) {
      res.status(500).json({
        ok: false,
        message: "Error getting product"
      });
    }
  },

  createProduct: async (req, res) => {
    try {
      const { nombre, precio, descripcion, categoria, talla, imagen } = req.body;
      const newProduct = await Product.create({
        nombre,
        precio,
        descripcion,
        categoria,
        talla,
        imagen: req.file ? req.file.path : imagen
      });
  
      res.status(201).json({
        ok: true,
        data: newProduct
      });
  
    } catch (error) {
      console.error(error);
      res.status(400).json({
        ok: false,
        message: "Error creating product"
      });
    }
  },
  // PUT

  updateProduct: async (req, res) => {
    try {
      const updated = await Product.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );

      if (!updated) {
        return res.status(404).json({
          ok: false,
          message: "Product not found"
        });
      }
      res.json({
        ok: true,
        data: updated
      });

    } catch (error) {
      res.status(400).json({
        ok: false,
        message: "Error updating product"
      });
    }
  },

  // DELETE

  deleteProduct: async (req, res) => {
    try {
      const deleted = await Product.findByIdAndDelete(req.params.id);

      if (!deleted) {
        return res.status(404).json({
          ok: false,
          message: "Product not found"
        });
      }

      res.json({
        ok: true,
        message: "Product deleted successfully"
      });

    } catch (error) {
      res.status(400).json({
        ok: false,
        message: "Error deleting product"
      });
    }
  }

};

module.exports = productApiController;
