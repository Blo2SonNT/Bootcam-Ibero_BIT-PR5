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
