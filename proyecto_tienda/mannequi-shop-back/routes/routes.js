const express = require('express');
const router = express.Router()
const productoController = require('../controllers/productoController')

router.get('/productos', productoController.obtenerProductos)
router.post('/productos', productoController.crearProducto)
router.put('/productos/:id', productoController.actualizarProducto)
router.delete('/productos/:id', productoController.eliminarProducto)
router.get('/producto/:id', productoController.obtenerProducto)



module.exports = router