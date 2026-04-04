
const mongoose = require('mongoose');

const validCategorias = ["ropa", "zapatillas", "accesorios"];
const validTallas = ['XS', 'S', 'M', 'L', 'XL'];  

const productsSchema = new mongoose.Schema({
    nombre: {
        type : String,
        required : true,
        unique : true,
    },
    descripcion: {
        type : String,
        required : true,
    },
    imagen: {
        type : String,
        default : ""
    },
    categoria: {
        type : String,
        required : true,
        enum: validCategorias,
    },
    talla: {
        type : String,
        enum: validTallas,
    },
    precio: {
        type : Number,
        required : true,
        min: 0,
    }
})

module.exports = mongoose.model('Product', productsSchema);
module.exports.validCategorias = validCategorias;
module.exports.validTallas = validTallas;


