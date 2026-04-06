
const mongoose = require('mongoose');

const categorias = ["hombre", "mujer", "accesorios"];

const subcategorias = [
  "camisetas",
  "pantalones",
  "chaquetas",
  "zapatos",
  "mochilas",
  "gorras"
];

const productsSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    unique: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
  imagen: {
    type: String,
    default: ""
  },

  categoria: {
    type: String,
    required: true,
    enum: categorias,
  },

  subcategoria: {
    type: String,
    required: true,
    enum: subcategorias,
  },

  talla: {
    type: String,
    enum: ['XS', 'S', 'M', 'L', 'XL'],
  },

  precio: {
    type: Number,
    required: true,
    min: 0,
  }
});

module.exports = mongoose.model('Product', productsSchema);
module.exports.validCategorias = validCategorias;
module.exports.validTallas = validTallas;


