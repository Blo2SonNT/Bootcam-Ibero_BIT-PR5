const Mascotas = require('../models/Mascotas')
exports.crearMascota = async(req, res) => {
    console.log(req.body)
    try {
        let mascota
        mascota = new Mascotas(req.body)
        await mascota.save()
        res.send(mascota)
    } catch (error) {
        console.log(error)
        res.status(500).send('Comuníquese con el administrador')
    }
}


exports.obtenerRegistrosMascotas = async(req, res) => {
    try {
        let mascota = await Mascotas.find()
        res.json(mascota)
    } catch (error) {
        console.log(error)
        res.status(500).send('Comuníquese con el administrador')
    }
}

exports.actualizarRegistroMascota = async(req, res) => {
    try {
        let regexIdMongo = /^[0-9a-fA-F]{24}$/
        if (regexIdMongo.test(req.params.id)) {
            let data_mascota = await Mascotas.findById(req.params.id)
            if (!data_mascota) {
                res.status(404).send('Mascota no encontrada')
            }

            const { nombre, edad, propietario, doc_propietario, url_imagen } = req.body
            data_mascota.nombre = nombre
            data_mascota.edad = edad
            data_mascota.propietario = propietario
            data_mascota.doc_propietario = doc_propietario
            data_mascota.url_imagen = url_imagen

            data_mascota = await Mascotas.findOneAndUpdate({ _id: req.params.id }, data_mascota, { new: true })
            res.json(data_mascota)
        } else {
            res.status(400).send('El identificador de la mascota no es correcto')
        }
    } catch (error) {
        console.log(error)
        res.status(500).send('Comuníquese con el administrador')
    }
}


exports.eliminarRegistroMascota = async(req, res) => {
    try {
        let regexIdMongo = /^[0-9a-fA-F]{24}$/
        if (regexIdMongo.test(req.params.id)) {
            let data_mascota = await Mascotas.findById(req.params.id)
            if (!data_mascota) {
                res.status(404).send('Mascota no encontrada')
            } else {
                await Mascotas.findOneAndRemove({ _id: req.params.id })
                res.status(200).json({ msg: "Registro eliminado" })
            }
        } else {
            res.status(400).send('El identificador de la mascota no es correcto')
        }
    } catch (error) {
        console.log(error)
        res.status(500).send('Comuníquese con el administrador')
    }
}


exports.obtenerRegistro = async(req, res) => {
    try {
        let regexIdMongo = /^[0-9a-fA-F]{24}$/
        if (regexIdMongo.test(req.params.id)) {
            let data_mascota = await Mascotas.findById(req.params.id)
            if (!data_mascota) {
                res.status(404).send('Mascota no encontrada')
            } else {
                res.json(data_mascota)
            }
        } else {
            res.status(400).send('El identificador de la mascota no es correcto')
        }
    } catch (error) {
        console.log(error)
        res.status(500).send('Comuníquese con el administrador')
    }
}