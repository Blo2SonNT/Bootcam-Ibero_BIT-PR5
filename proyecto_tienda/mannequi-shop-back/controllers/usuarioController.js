const Usuario = require("../models/Usuario")

exports.crearUsuario = async(req, res) => {
    try {
        let dataUsuario
        console.log(req.body)
        dataUsuario = new Usuario(req.body)
        await dataUsuario.save()
        res.send(dataUsuario)
    } catch (error) {
        console.log(error)
        res.status(500).send('Paso algo interno, comuníquese con el administrador')
    }
}


exports.obtenerUsuarios = async(req, res) => {
    try {
        const dataUsuario = await Usuario.find()
        res.json(dataUsuario)
    } catch (error) {
        console.log(error)
        res.status(500).send('Paso algo interno, comuníquese con el administrador')
    }
}


exports.eliminarUsuario = async(req, res) => {
    try {
        let dataUsuario = await Usuario.findById(req.params.id)

        if (!dataUsuario)
            return res.status(404).json({ msg: 'El usuario ingresado no existe' })

        await Usuario.findByIdAndRemove({ _id: req.params.id })
        res.json({ msg: 'El usuario quedo eliminado' })
    } catch (error) {
        console.log(error)
        res.status(500).send('Paso algo interno, comuníquese con el administrador')
    }
}


exports.actualizarUsuario = async(req, res) => {
    try {
        const { nombre, apellido, correo, password, edad } = req.body
        let dataUsuario = await Usuario.findById(req.params.id)

        if (!dataUsuario)
            return res.status(404).json({ msg: 'El usuario ingresado no existe' })


        dataUsuario.nombre = nombre
        dataUsuario.apellido = apellido
        dataUsuario.correo = correo
        dataUsuario.password = password
        dataUsuario.edad = edad

        dataUsuario = await Usuario.findByIdAndUpdate({ _id: req.params.id }, dataUsuario, { new: true })
        res.json(dataUsuario)

    } catch (error) {
        console.log(error)
        res.status(500).send('Paso algo interno, comuníquese con el administrador')
    }
}


exports.obtenerUsuario = async(req, res) => {
    try {
        let dataUsuario = await Usuario.findById(req.params.id)

        if (!dataUsuario)
            return res.status(404).json({ msg: 'El producto ingresado no existe' })

        res.json(dataUsuario)
    } catch (error) {
        console.log(error)
        res.status(500).send('Paso algo interno, comuníquese con el administrador')
    }
}