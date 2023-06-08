const Producto = require("../models/Producto")


exports.crearProducto = async(req, res) => {
    try {
        let dataProducto
        dataProducto = new Producto(req.body)
        await dataProducto.save()
        res.send(dataProducto)
    } catch (error) {
        console.log(error)
        res.status(500).send('Paso algo interno, comuníquese con el administrador')
    }
}


exports.obtenerProductos = async(req, res) => {
    try {
        const dataProductos = await Producto.find()
        res.json(dataProductos)
    } catch (error) {
        console.log(error)
        res.status(500).send('Paso algo interno, comuníquese con el administrador')
    }
}


exports.eliminarProducto = async(req, res) => {
    try {
        let dataProductos = await Producto.findById(req.params.id)

        if (!dataProductos)
            return res.status(404).json({ msg: 'El producto ingresado no existe' })

        await Producto.findByIdAndRemove({ _id: req.params.id })
        res.json({ msg: 'El producto quedo eliminado' })
    } catch (error) {
        console.log(error)
        res.status(500).send('Paso algo interno, comuníquese con el administrador')
    }
}


exports.actualizarProducto = async(req, res) => {
    try {
        const { nombre, precio, enlace_img, categoria, cantidad_inventario, en_venta, pago_proveedor } = req.body
        let dataProductos = await Producto.findById(req.params.id)

        if (!dataProductos)
            return res.status(404).json({ msg: 'El producto ingresado no existe' })


        dataProductos.nombre = nombre
        dataProductos.precio = precio
        dataProductos.enlace_img = enlace_img
        dataProductos.categoria = categoria
        dataProductos.cantidad_inventario = cantidad_inventario
        dataProductos.en_venta = en_venta
        dataProductos.pago_proveedor = pago_proveedor

        dataProductos = await Producto.findByIdAndUpdate({ _id: req.params.id }, dataProductos, { new: true })
        res.json(dataProductos)

    } catch (error) {
        console.log(error)
        res.status(500).send('Paso algo interno, comuníquese con el administrador')
    }
}


exports.obtenerProducto = async(req, res) => {
    try {
        let dataProductos = await Producto.findById(req.params.id)

        if (!dataProductos)
            return res.status(404).json({ msg: 'El producto ingresado no existe' })

        res.json(dataProductos)
    } catch (error) {
        console.log(error)
        res.status(500).send('Paso algo interno, comuníquese con el administrador')
    }
}