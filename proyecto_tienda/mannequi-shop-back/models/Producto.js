const mongoose = require('mongoose')

const ProductoSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    enlace_img: {
        type: String,
        required: true
    },
    categoria: {
        type: String,
        required: true
    },
    cantidad_inventario: {
        type: Number,
        required: true
    },
    en_venta: {
        type: Boolean,
        required: false
    },
    pago_proveedor: {
        type: Boolean,
        required: true
    },
    fec_cre: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('producto', ProductoSchema)