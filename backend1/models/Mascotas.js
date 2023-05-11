const mongoose = require('mongoose')

const mascotaSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    edad: {
        type: Number,
        required: true
    },
    propietario: {
        type: String,
        required: true
    },
    doc_propietario: {
        type: String,
        required: true
    },
    url_imagen: {
        type: String,
        required: true
    },
    fec_cre: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('mascota', mascotaSchema)
