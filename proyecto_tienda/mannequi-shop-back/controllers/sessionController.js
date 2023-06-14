require('dotenv').config({ path: 'config.env' })
const jwt = require('jsonwebtoken')
const Usuario = require('../models/Usuario')

exports.generarToken = async(req, res) => {
    const { correo, password } = req.body
    const dataUsuario = await Usuario.findOne({ correo: correo })
    if (!dataUsuario) return res.status(401).json({ msg: 'El correo no existe' })

    if (dataUsuario.password !== password) return res.status(401).json({ msg: 'La contraseña es invalida' })

    const payload = {
        id: dataUsuario._id,
        nombre: dataUsuario.nombre,
        apellido: dataUsuario.apellido
    }

    const token = jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: '1h' })
    return res.status(202).json({ token: token })
}